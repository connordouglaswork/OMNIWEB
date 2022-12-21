window.onload = function(){
    var a_parent =  document.querySelectorAll(".MenuLayerOne");
    var dd_menu_a = document.querySelectorAll(".MenuLayerTwoItem");

    a_parent.forEach(function(aitem){

            aitem.addEventListener("click", function(){
                a_parent.forEach(function(aitem){
                    aitem.classList.remove("active");
                })
                dd_menu_a.forEach(function(dd_menu_item){
                    dd_menu_item.classList.remove("active");
                })
                aitem.classList.add("active");
            })
    })

    dd_menu_a.forEach(function(dd_menu_item){

            dd_menu_item.addEventListener("click", function(){
                dd_menu_a.forEach(function(dd_menu_item){
                    dd_menu_item.classList.remove("active");
                })
                dd_menu_item.classList.add("active");
            })
    })
}