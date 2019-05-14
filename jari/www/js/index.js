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
        $('#index-content').load("menu.html");
    },

    loadSayings: function(tag) {
        let sayings =[];
        for (var key in karin_magana) {
            if ((karin_magana[key]["tag1"]==""+tag+"")||(karin_magana[key]["tag2"]==""+tag+"")||(karin_magana[key]["tag3"]==""+tag+"")||(karin_magana[key]["tag4"]==""+tag+"")||(karin_magana[key]["tag5"]==""+tag+"")) {
                sayings.push(karin_magana[key]["saying"]);
            }
        }
        console.log(sayings);
    }
};

app.initialize();