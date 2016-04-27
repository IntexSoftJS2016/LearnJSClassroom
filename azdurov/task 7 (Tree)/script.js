function TreeView(data, propMap){
    var treeView = this;

    this.data = data;
    this.selectedNode = ko.observable();
    this.children = ko.computed(function(){
        return dataToNodes(ko.utils.unwrapObservable(data));
    });
    setIsLast(this.children());
    this.children.subscribe(function(newVal){
        setIsLast(newVal);
    });



    function dataToNodes(dataArray,old){
        var res = [];
        for(var i=0,l=dataArray.length;i<l;i++){
            res.push(dataArray[i]._treeviewNode || new TreeViewNode(dataArray[i]));
        }
        return res;
    }

    function setIsLast(children){
        for(var i=0,l=children.length;i<l;i++){
            children[i].isLast(i==(l-1));
        }
    }

    function TreeViewNode(data){
        var self = this;
        this.data = data;
        data._treeviewNode = this;
        var
            map = (typeof propMap == 'function') ? propMap(data):propMap;
        captionProp = (map && map.caption)||'caption',
            childrenProp = (map && map.children)||'children';
        this.caption = data[captionProp];
        if(data[childrenProp]) this.children = ko.computed(function(){
            return dataToNodes(ko.utils.unwrapObservable(data[childrenProp]));
        });
        else this.children = null;

        this.isOpen = ko.observable();
        this.isClosed = ko.computed(function(){
            return !this.isOpen();
        },this);

        this.isLeaf = ko.computed(function(){
            return !(this.children && this.children().length);
        },this);
        this.isLast = ko.observable(false);

        if(this.children){
            setIsLast(this.children());
            this.children.subscribe(function(newVal){
                setIsLast(newVal);
            });
        }

        this.toggleOpen = function(){
            self.isOpen(!self.isOpen());
        };

        this.isSelected = ko.computed(function(){
            return (treeView.selectedNode()===this)
        },this);

        this.toggleSelection = function(){
            if(this.isSelected()) treeView.selectedNode(null);
            else treeView.selectedNode(this);
        }

    }

}

function SomeObject(col){
    this.name = ko.observable('New SomeObject');
    this.list = ko.observableArray();
    this.collection = col;
}

var vm = {
    data:ko.observableArray(),
    AddRootNode: function(){
        this.data.push(new SomeObject(this.data));
    },
    AddChildNode: function(){
        var data = this.tree.selectedNode().data;
        data.list.push(new SomeObject(data.list));
    },
    RemoveNode:function(){
        var data = this.tree.selectedNode().data;
        this.tree.selectedNode(null);
        data.collection.remove(data);
    }
};
vm.tree = new TreeView(vm.data,{caption:'name',children:'list'});

ko.applyBindings(vm);