const game = document.querySelector("#gameiframe");
const gamelink = game.dataset.gamelink;
document.addEventListener('DOMContentLoaded', function () 
{
  if (localStorage.getItem("plink") !== "r2"){
    r2Link();
  }
});
console.log(game.dataset.gamelink);
function r2Link() 
{
 
    
        console.log(`start change link`);
        var site = 'https://r2.emulatoros.ga'+ "/" + game.dataset.gamelink;
        ;

    document.getElementById('gameiframe').src = site;
    console.log(`finish change link`);
    
	
}
