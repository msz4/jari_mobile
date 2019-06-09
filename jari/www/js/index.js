var current_array = []; //used to store the set of proverbs being displayed at any given moment
var index = 0;          //used to iterate the current_array. If all provers are being viewed, the last index is fetched from localStorage, this way a user can continue where they left off

var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },
    receivedEvent: function(id) {
    },



//Begin functions for animations for hiding and showing header and footers.
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
//End functions for animations for hiding and showing header and footers.



//Begin functions called from clicking on main menu options
    viewAll: function(){
        localStorage.setItem('all',true);
        current_array = maganganu.slice(0)
        document.querySelector('#header-text').innerHTML = "karin magana";
        app.loadPage("karin_magana")
    },
    viewTags: function(){
        document.querySelector('#header-text').innerHTML = "Ire ire";
        app.loadPage("ire_ire");
    },
    displayIreire: function(){
        let tags="";
        ireire_Array.sort(function(a,b) {
            let x = a.iri.toLowerCase();
            let y = b.iri.toLowerCase();
            return x < y ? -1 : x > y ? 1 : 0;
        });
        ireire_Array.forEach(function(item){
            tags+= "<div class='tag' id="+item.id+" onclick='app.getIrinMagana(this.id)'><i class='fas fa-tag text-white'></i>"+item.iri+"</div>";
       })  
            document.querySelector('#ireire-page').innerHTML= tags;
    },
//End funtions called from clicking on main menu options



//Begin functions that hide and show pages depending on which is required, 
//gets stored index for continuing viewing all proverbs, 
//and calls the funntion to display provers
    loadPage: function(id){
        if(id=="karin_magana"){
            app.showPage("#karinmagana-page");
            app.hidePage("#menu-page");
            app.hidePage("#ireire-page");
            app.hidePage('#menu-footer');
            app.showFooter();
            app.showHeader();
            if((localStorage.getItem('all')=="true")){
                index=Number(localStorage.getItem('index'));
            }
            else{
                index=0;
            }
            console.log('index before: ',localStorage.getItem('index'))
            app.display();
        }
        else if (id=="menu"){
            app.showPage("#menu-page");
            app.showPage('#menu-footer');
            app.hidePage("#ireire-page");
            app.hidePage("#about-page");
            app.hidePage("#karinmagana-page");
            app.hideFooter();
            app.hideHeader();
        }
        else if (id=="ire_ire"){
            app.showPage("#ireire-page");
            app.hidePage("#menu-page");
            app.hidePage('#menu-footer');
            app.hidePage("#about-page");
            app.hidePage("#karinmagana-page");
            app.showHeader();
            app.hideFooter();
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
    hidePage: function(page){
        const PAGE_TO_HIDE = document.querySelector(page);
        PAGE_TO_HIDE.classList.add("hide-page")
    },

    showPage: function(page){
        const PAGE_TO_SHOW = document.querySelector(page);
        PAGE_TO_SHOW.classList.remove("hide-page");
    },
//End functions that manage page loading



//Begin functions for navigating through proverns (next, back, random),, and managing index
    displayNext:function(){
        if(index<current_array.length-1){
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
    randomise: function(){
        const MIN=0; 
        const MAX=current_array.length;  
        let random = Math.floor(Math.random() * (+MAX - +MIN)) + +MIN;
        index=random;
        app.display();
    },
    updateIndex: function(){
        if( localStorage.getItem('all')=="true"){
            localStorage.setItem('index', index);
        }
    },
//End functions for navigating through proverbs (next, back, random), and managing index


//Begin functions for displaying the proverbs and tags
    display: function(){
        document.querySelector('#magana').innerHTML = current_array[index].saying;
        let saying_array=Object.values(current_array[index]);
        let tags="";
        for(let i=1; i<6; i++){
            if (saying_array[i]!=0){
                tags+="<span class='tag' onclick='app.getIrinMagana("+saying_array[i]+")'><i class='fas fa-tag text-light'></i>"+ireire_Object[saying_array[i]]["hausa"]+"</span>";
            }
        }
        document.querySelector("#count").innerHTML = `${index+1}/${current_array.length}`;
        document.querySelector('#irin_magana').innerHTML = tags;
        app.updateIndex();
    },
    getIrinMagana: function(tag) {
        let sayings =[];
        maganganu.forEach(magana => {
            if ((magana["tag1"]==""+tag+"")||(magana["tag2"]==""+tag+"")||(magana["tag3"]==""+tag+"")||(magana["tag4"]==""+tag+"")||(magana["tag5"]==""+tag+"")) {
                sayings.push(magana);
            }
        });

        if(sayings.length>0){
            localStorage.setItem('all', false);
            current_array = sayings.slice(0);
            document.querySelector("#back_btn").setAttribute("onclick", "app.viewTags()");
            document.querySelector("#header-text").innerHTML = ":"+ireire_Object[tag]["hausa"]
            app.loadPage("karin_magana");
        }
    },
//End functions for displaying the proverbs and tags
};

app.initialize();