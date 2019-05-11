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
        $('#cont').load("menu.html");
        console.log("done");
        this.getTags();
    },

    getTags: function(){
        console.log(ire_ire[11]['hausa']);
        console.log(karin_magana[11]);
        var sayings = [];
        for (var key in karin_magana) {
            if ((karin_magana[key]["tag1"]==""+11+"")||(karin_magana[key]["tag2"]==""+11+"")||(karin_magana[key]["tag3"]==""+11+"")||(karin_magana[key]["tag4"]==""+11+"")||(karin_magana[key]["tag5"]==""+11+"")) {
                sayings.push(karin_magana[key]["saying"]);
            }
        }

        console.log(sayings);
    }
};

app.initialize();