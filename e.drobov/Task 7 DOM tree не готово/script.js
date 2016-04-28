/**
 * Created by Жека on 27.04.2016.
 */
window.onload = function () {
    var rootCount = 15;
    var parent = document.getElementsByTagName('BODY')[0];
    var div = document.createElement("div");
//var ul2 = document.createElement("ul");

    Go();
    //getParent();
//createUl();

    function Go() {

            // ul2.innerHTML = "Список";
            // div.appendChild(ul2);
            //parent.appendChild(div);
            for (var setItem = 0; setItem < rootCount; setItem++) {
                if (setItem % 4 == 0) {
                    var ul3 = document.createElement("ul");
                    ul3.innerHTML = "Список";
                    div.appendChild(ul3);
                } else {
                    var li = document.createElement("li");
                    li.innerHTML = " элемент списка";
                    div.appendChild(li);
                }
            }
            parent.appendChild(div);
        }

}


    function getParent() {
        //for (var count = 0; count < rootCount; count++) {
        var parent = document.getElementsByTagName('BODY')[0];
        for (var i = 0; i < parent.childNodes[1].childElementCount; i++) {
            var a = parent.childNodes[1].childNodes[i];
            alert(a.innerHTML); // DIV, UL, DIV, SCRIPT
            //alert("dasdsad"); // DIV, UL, DIV, SCRIPT
        }
        //  }
        //   parent.appendChild(div);
    }




