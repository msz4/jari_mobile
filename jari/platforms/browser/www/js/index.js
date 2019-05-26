var maganganu_array = Object.values(maganganu);
var maganganun_iri_array = [];
var ireire_array = [];
var index=0;
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        app.createIreireArray();
        const MAGANA_BTN = document.getElementById("karin_magana");
    },

    createIreireArray: function(){
        for(var iri in ire_ire){
            if(ire_ire.hasOwnProperty(iri)){
                ireire_array.push(ire_ire[iri])
            }
        }
        ireire_array = ireire_array.sort();
    },

    hideHeader: function(){
        const HEADER = document.querySelector(".header");
        HEADER.style.top = "-4rem";
    },

    hideFooter: function(){
        const FOOTER = document.querySelector(".footer");
        FOOTER.style.bottom = "-4rem";
    },

    showHeader: function(){
        const HEADER = document.querySelector(".header");
        HEADER.style.top = "0";
    },

    showFooter: function(){
        const FOOTER = document.querySelector(".footer");
        FOOTER.style.bottom = "0";
    },

    loadPage: function(id){
        if(id=="karin_magana"){
            app.showPage("#karinmagana-page");
            app.hidePage("#menu-page");
            app.showFooter();
            app.showHeader();
            app.display();
        }
        else if (id=="menu"){
            app.showPage("#menu-page");
            app.hidePage("#ireire-page");
            app.hidePage("#about-page");
            app.hidePage("#karinmagana-page");
            app.hideFooter();
            app.hideHeader();
        }
        else if (id=="ire_ire"){
            app.showPage("#ireire-page");
            app.hidePage("#menu-page");
            app.hidePage("#about-page");
            app.hidePage("#karinmagana-page");
            app.showHeader();
            app.displayIreire();
        }
        else if (id=="na_gaban_goshi"){
            const PAGE_TO_HIDE = document.querySelector('#menu-page');
            PAGE_TO_HIDE.style.display="none";
        }
        else if (id=="bayanin_mu"){
            const PAGE_TO_HIDE = document.querySelector('#menu-page');
            PAGE_TO_HIDE.style.display="none";
        }
    },

    displayIreire: function(){
        let tags="";
        ireire_Array.sort(function(a,b) {
            let x = a.iri.toLowerCase();
            let y = b.iri.toLowerCase();
            return x < y ? -1 : x > y ? 1 : 0;
        });
        console.log(ireire_Array);
        ireire_Array.forEach(function(item){
            tags+= "<div class='tag' id="+item.id+" onclick='app.loadSayings(this.id)'><i class='fas fa-tag text-white'></i>"+item.iri+"</div>";
       })  
            document.querySelector('#ireire-page').innerHTML= tags;
    },

    randomise: function(){
        const MIN=0; 
        const MAX=257;  
        let random = Math.floor(Math.random() * (+MAX - +MIN)) + +MIN;
        index=random;
        app.display();
    },

    hidePage: function(page){
        const PAGE_TO_HIDE = document.querySelector(page);
        PAGE_TO_HIDE.classList.add("hide-page")
    },

    showPage: function(page){
        const PAGE_TO_SHOW = document.querySelector(page);
        PAGE_TO_SHOW.classList.remove("hide-page");
    },

    loadSayings: function(tag) {
        console.log(maganganu_array);
        let sayings =[];
        maganganu_array.forEach(magana => {
            if ((magana["tag1"]==""+tag+"")||(magana["tag2"]==""+tag+"")||(magana["tag3"]==""+tag+"")||(magana["tag4"]==""+tag+"")||(magana["tag5"]==""+tag+"")) {
                sayings.push(magana["saying"]);
            }
        });
        console.log(sayings);
        app.displaySayings(sayings,0);
    },

    loadAllSayings: function(){
        
    },

    displayNext:function(){
        if(index<maganganu_array.length-1){
            index++;
            app.display();
        }
    },
    
    displayPrevious:function(){
        if(index>0){
            index--;
            app.display();
        }
    },

    display: function(){
        document.querySelector('#magana').innerHTML = maganganu_array[index].saying;
        let saying_array=Object.values(maganganu_array[index]);
        let tags="";
        for(let i=1; i<6; i++){
            if (saying_array[i]!=0){
                tags+="<span class='tag'><i class='fas fa-tag text-light'></i>"+saying_array[i]+"</span>";
            }
        }

        document.querySelector("#count").innerHTML = `${index+1}/${maganganu_array.length}`;
        document.querySelector('#irin_magana').innerHTML = tags;
    }
};

app.initialize();