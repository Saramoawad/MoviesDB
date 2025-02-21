var myHttpp=new XMLHttpRequest();
var allPupular=[];
myHttpp.open('GET', 'https://api.themoviedb.org/3/person/popular?api_key=e0dd7fb1ec73d693e8c236644b38dc1f');
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
    for(var i=0 ; i<20 ;i++)
    {
        container +=` <div class="col-xl-2">
                                <div class="card">
                                <img src="https://image.tmdb.org/t/p/w500${allPupular[i].profile_path}"/>
                                   <h5>${allPupular[i].name}</h5>
                                    <p>${allPupular[i].popularity || "2024-12-25"}</p>
                                    
                                </div>
                            </div>`;
    }
    document.getElementById("people").innerHTML=container;

}

