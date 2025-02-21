var myHttp=new XMLHttpRequest();
var alltrends=[];
myHttp.open('GET', 'https://api.themoviedb.org/3/trending/all/day?api_key=e0dd7fb1ec73d693e8c236644b38dc1f');
myHttp.send();

myHttp.addEventListener('readystatechange', function(){

    if(myHttp.readyState == 4 && myHttp.status == 200){
        alltrends = JSON.parse(myHttp.response).results;
        console.log(alltrends);
        displayTrends();
    }
})
function displayTrends(){
    var container =``;
    for(var i=0 ; i<6 ;i++)
    {
        container +=` <div class="col-xl-2">
                                <div class="card">
                                <img src="https://image.tmdb.org/t/p/w500${alltrends[i].poster_path}"/>
                                   <h5>${alltrends[i].title || alltrends[i].name || "Unknown Title"}</h5>
                                    <p>${alltrends[i].release_date || "2024-12-25"}</p>
                                    
                                </div>
                            </div>`;
    }
    document.getElementById("trendDay").innerHTML=container;

}
// //////////////////
var myHttps=new XMLHttpRequest();
var alltrend=[];
myHttps.open('GET', 'https://api.themoviedb.org/3/trending/all/week?api_key=e0dd7fb1ec73d693e8c236644b38dc1f');
myHttps.send();

myHttps.addEventListener('readystatechange', function(){

    if(myHttps.readyState == 4 && myHttps.status == 200){
        alltrend = JSON.parse(myHttps.response).results;
        console.log(alltrend);
        displayTrend();
    }
})
function displayTrend(){
    var container =``;
    for(var i=0 ; i<6 ;i++)
    {
        container +=` <div class="col-xl-2">
                                <div class="card">
                                <img src="https://image.tmdb.org/t/p/w500${alltrend[i].poster_path}"/>
                                   <h5>${alltrend[i].title || alltrend[i].name || "Unknown Title"}</h5>
                                    <p>${alltrend[i].release_date || "2024-12-25"}</p>
                                    
                                </div>
                            </div>`;
    }
    document.getElementById("trendWeak").innerHTML=container;

}
// -----------------------
// pupular
var myHttpp=new XMLHttpRequest();
var allPupular=[];
myHttpp.open('GET', 'https://api.themoviedb.org/3/tv/popular?api_key=e0dd7fb1ec73d693e8c236644b38dc1f');
myHttpp.send();

myHttpp.addEventListener('readystatechange', function(){

    if(myHttpp.readyState == 4 && myHttpp.status == 200){
        allPupular = JSON.parse(myHttpp.response).results;
        console.log(allPupular);
        displayPopular();
    }
})
function displayPopular(){
    var container =``;
    for(var i=0 ; i<6 ;i++)
    {
        container +=` <div class="col-xl-2">
                                <div class="card">
                                <img src="https://image.tmdb.org/t/p/w500${allPupular[i].poster_path}"/>
                                   <h5>${allPupular[i].title || allPupular[i].name || "Unknown Title"}</h5>
                                    <p>${allPupular[i].release_date || "2024-12-25"}</p>
                                    
                                </div>
                            </div>`;
    }
    document.getElementById("PupularTv").innerHTML=container;

}
// -------------------------------drop down----------------//


document.addEventListener("DOMContentLoaded", function () {
    let dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(function (dropdown) {
        let dropdownToggle = dropdown.querySelector(".dropdown-toggle");
        let dropdownMenu = dropdown.querySelector(".dropdown-menu");

        let bsDropdown = new bootstrap.Dropdown(dropdownToggle); 

        dropdown.addEventListener("mouseenter", function () {
            dropdownToggle.classList.add("show");
            dropdownMenu.classList.add("show");
            dropdownMenu.style.display = "block"; 
        });

        dropdown.addEventListener("mouseleave", function () {
            dropdownToggle.classList.remove("show");
            dropdownMenu.classList.remove("show");
            dropdownMenu.style.display = "none";
        });
    });
});


  


  
  
  




