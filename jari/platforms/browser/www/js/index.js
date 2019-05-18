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
            const PAGE_TO_HIDE = document.querySelector('#menu-page');
            const PAGE_TO_SHOW = document.querySelector('#karinmagana-page');
            PAGE_TO_SHOW.classList.remove("hide-page");
            PAGE_TO_HIDE.classList.add("hide-page")
            app.showFooter();
            app.showHeader();
            app.loadAllSayings();
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
        let maganaganu_array = [];
        for (var key in maganganu){
            maganaganu_array.push(maganganu[key]);
        }

        app.displaySayings(maganaganu_array,0);
    },

    displaySayings:function(sayings, n){
        document.querySelector('#magana').innerHTML = sayings[n].saying;
    }
};

app.initialize();