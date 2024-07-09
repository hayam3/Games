
var dataList=[];
var responseApiDetails=[];
// getGames("mmorpg")

 class GetGames {
   constructor() {
      this.getGames();
      this.sectionGame=document.getElementById("sectionGame");
      this.sectionDetails= document.getElementById("sectionDetails");
      this.getDetails()
   }

  async getGames(category){
      var loding= document.querySelector(".loading")


    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'eae3d2f47bmshedf466331f9e6dep1078dajsn176ed35f4761',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    
try {
	loding.classList.remove("d-none")
    var apiData =await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,options)

    var response =await apiData.json()
    
    dataList= response;
    this.displayData()


    document.querySelectorAll(".card").forEach((card)=>{
      card.addEventListener("click",()=>{
         this.sectionGame.classList.add("d-none");
           this.sectionDetails.classList.remove("d-none");
           document.getElementById("CloseBtn").addEventListener("click",()=>{
            this.sectionGame.classList.remove("d-none");
            this.sectionDetails.classList.add("d-none");
            // this.card.dataList[i].id;
           })
      })
    })
  
   //  displayData()
    // displayDetails()
    // console.log(response);
    
} catch (error) {
	console.error(error);
}
finally{
    loding.classList.add("d-none")
   }

   }

// =================

   displayData(){
   var display = "";
   for (let i = 0; i < dataList.length; i++) {
      display += `
      <div class="  col-lg-3 col-md-4 col-sm-12">
 
               <div  id="${dataList[i].id}"  class=" card h-100 bg-transparent" role="button" >
                  <div  class="card-body">
                     <div class="position-relative  mb-3">
                        <img class="card-img-top object-fit-cover h-100" src="${dataList[i].thumbnail}" />
                     
                     </div>
         
                     <div>
         
                        <div class="hstack justify-content-between">
                           <h3 class="h-6 small text-white">${dataList[i].title}</h3>
                           <span class="badge text-bg-primary p-2">Free</span>
                        </div>
         
                        <p class="card-text small text-center pt-3 opacity-50">
                        ${dataList[i].short_description}
                        </p>
         
                     </div>
                  </div>
         
                  <footer class="card-footer small hstack justify-content-between text-white">
         
                     <span class="badge badge-color"> ${dataList[i].genre}</span>
                     <span class="badge badge-color"> ${dataList[i].platform}</span>
         
                  </footer>
               </div>
            </div> `;

   }

   document.getElementById("gameData").innerHTML = display;
   }

// =====================
   activ(){
      var categoryLink = document.querySelectorAll(".nav-link");
 
       for (let i = 0; i < categoryLink.length; i++) {
          categoryLink[i].addEventListener("click",  (link)=> {
 
             document.querySelector(".navbar-nav .active").classList.remove("active");
             link.target.classList.add("active");
 
 
             console.log(link.target);
 
             this.getGames(link.target.id);
 
          });
       }
    }

// ==============
    async getDetails(id){
      const options = {
         method: 'GET',
         headers: {
            'x-rapidapi-key': 'eae3d2f47bmshedf466331f9e6dep1078dajsn176ed35f4761',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
         }
      };
      var apiDetails= await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=452`,options)
      responseApiDetails =await apiDetails.json()
      
      console.log(responseApiDetails);
      this.displayDetails(responseApiDetails)
    }

   //  =================

    displayDetails(data) {
      var display=""

      display+=`<div class="col-md-4">
                    <img src="${data.thumbnail}" class="w-100" alt="image details">
                     </div>
      
   <div class="col-md-8">
     <h3>Title:${data.title}</h3>
     <p>Category:${data.genre} <span class="badge text-bg-info"> MMORPG</span> </p>
     <p>Platform: ${data.platform}<span class="badge text-bg-info"></span> </p>
     <p>Status:${data.status} <span class="badge text-bg-info"> Live</span> </p>
     <p class="">${data.description}</p>
     <a class="btn btn-outline-warning"  href="${data.game_url}">Show Game</a>
   </div>
   `;
         
      
      
      document.getElementById("detailsInfo").innerHTML=display;
      
    }

   
}





var games= new GetGames();
games.getGames("mmorpg");
games.activ();
games.displayData();
// games. displayDetails(responseApiDetails)


// .addEventListener("click",function () {
   

//    // this.displayDetails()
// })

//

             
      // displayDetails===================================

      // function displayDetails() {

      //    document.getElementById("sectionGame").classList.add("d-none");
      //    document.getElementById("sectionDetails").classList.remove("d-none");


//          var displayDetails="";
      
// for (let i = 0; i <6; i++) {
//   displayDetails+=`<div class="col-md-4">
//                  <img src="${dataList[i].thumbnail}" class="w-100" alt="image details">
//                   </div>

// <div class="col-md-8">
//   <h3>Title:</h3>
//   <p>Category: <span class="badge text-bg-info"> MMORPG</span> </p>
//   <p>Platform: <span class="badge text-bg-info"></span> </p>
//   <p>Status: <span class="badge text-bg-info"> Live</span> </p>
//   <p class="">Tarisland is a free-to-play cross-platform MMORPG developed by Level Infinite and Published by Tencent. 

// Available on PC and mobile devices, the game allows players to easily move between both, taking the game with them when they can’t be at their desk. The game is designed to appeal to players of MMOs like World of Warcraft, offering players nine playable classes and 18 specializations.

// Each class features an extensive talent tree system and can be customized. Players of existing MMOs will be familiar with the standard tank, DPS, and healer lineup, necessary for the game’s classic raid and dungeon system. Explore a vast game world and solve mysteries. Pick up various trades such as gathering, mining, and crafting, and sell your items on the auction house.</p>
//   <a class="btn btn-outline-warning"  href="">Show Game</a>
// </div>
// `;
   
// }

// document.getElementById("detailsInfo").innerHTML=displayDetails;
// console.log("fffffff");
      //   }

    
