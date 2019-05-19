var maganganu_array = Object.values(maganganu);
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
        const MAGANA_BTN = document.getElementById("karin_magana");
        console.log(MAGANA_BTN);
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
        console.log('inside');
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
            const PAGE_TO_HIDE = document.querySelector('#menu-page');
            PAGE_TO_HIDE.style.display="none";
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

    randomise: function(){
        const MIN=0; 
        const MAX=257;  
        let random = Math.floor(Math.random() * (+MAX - +MIN)) + +MIN;
        console.log(random);
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
        let sayings =[];
        for (var key in karin_magana) {
            if ((karin_magana[key]["tag1"]==""+tag+"")||(karin_magana[key]["tag2"]==""+tag+"")||(karin_magana[key]["tag3"]==""+tag+"")||(karin_magana[key]["tag4"]==""+tag+"")||(karin_magana[key]["tag5"]==""+tag+"")) {
                sayings.push(karin_magana[key]["saying"]);
            }
        }
    
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
        console.log(saying_array);
        for(let i=1; i<6; i++){
            if (saying_array[i]!=0){
                console.log(saying_array[i])
                tags+="<span class='tag'><i class='fas fa-tag text-light'></i>"+saying_array[i]+"</span>";
            }
        }

        document.querySelector("#count").innerHTML = `${index+1}/${maganganu_array.length}`;
        document.querySelector('#irin_magana').innerHTML = tags;
    }
};

app.initialize();