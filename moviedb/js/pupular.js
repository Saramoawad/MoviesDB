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
    for(var i=0 ; i<allPupular.length ;i++)
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
    document.getElementById("all_pup").style.display='none';

}
document.getElementById("back_pup").style.background='none';
document.getElementById("puplayer").style.display='none';
document.getElementById("back_pup").style.color="rgb(3, 37, 65)";
