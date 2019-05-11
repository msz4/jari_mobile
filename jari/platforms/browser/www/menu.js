document.getElementById("menu_btn").onclick = function(){
    $('#cont').load("magana.html");
}

document.getElementById("tags_btn").onclick = function(){
    console.log(ire_ire);
    for (var key in ire_ire) {
        var tags;
        tags+= "<div>"+ire_ire[key]['hausa']+"</div>";
    }
    $('#cont').html(tags);
    //app.getTags();
}