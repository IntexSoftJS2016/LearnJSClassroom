var world = new WildWorld(jungle, jungleLegend);
setInterval(function(){
    world.turn();
    document.getElementById("lifeWindow1").value = world.toString();
}, 1000);
