    console.log(ire_ire);
    var tags="";
    for (var key in ire_ire) {
        console.log(key);
        console.log(ire_ire[key]);
        console.log(ire_ire[key]['hausa']);
        tags+= "<div class='tag' id="+key+" onclick='app.loadSayings(this.id)'><i class='fas fa-tag text-white'></i>"+ire_ire[key]['hausa']+"</div>";
    }
    $('#ireire_content').html(tags);

    document.addEventListener('click')