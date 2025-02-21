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
    for(var i=0 ; i<alltrend.length ;i++)
    {
        container +=` <div class="col-xl-2">
                                <div class="card">
                                <img src="https://image.tmdb.org/t/p/w500${alltrend[i].poster_path}"/>
                                   <h5>${alltrend[i].title || alltrend[i].name || "Unknown Title"}</h5>
                                    <p>${alltrend[i].media_type || "Unknown Media Type"}</p>
                                    
                                </div>
                            </div>`;
    }
    document.getElementById("trendDay").innerHTML=container;

}