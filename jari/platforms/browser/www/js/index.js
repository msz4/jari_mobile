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
        setPage("menu");
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

    loadSayings: function(tag) {
        let sayings =[];
        for (var key in karin_magana) {
            if ((karin_magana[key]["tag1"]==""+tag+"")||(karin_magana[key]["tag2"]==""+tag+"")||(karin_magana[key]["tag3"]==""+tag+"")||(karin_magana[key]["tag4"]==""+tag+"")||(karin_magana[key]["tag5"]==""+tag+"")) {
                sayings.push(karin_magana[key]["saying"]);
            }
        }
    
        app.displaySayings(sayings,0);
    },

    displaySayings:function(sayings, n){
        $('#index-content').load("magana.html");
        setTimeout(function(){document.querySelector('#magana').innerHTML = sayings[n];}, 2000);
        
    }
};

app.initialize();