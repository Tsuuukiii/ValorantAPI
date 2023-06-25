
let searchbtn = document.getElementById("searchbtn");
let searchagents = document.getElementById("searchagents");
let valotext = document.getElementById("valotext");
function capitalizeString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

  searchbtn.addEventListener("click", () => { 
  
  
fetchapi();
});

searchagents.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
  fetchapi();
  }
});

function fetchapi(){
  
  let agentselect = capitalizeString(searchagents.value)
  console.log(agentselect)
  let agentname = agentselect;

  let valoapiagents = `https://valorant-api.com/v1/agents?isPlayableCharacter=true`;
  fetch(valoapiagents)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      let valoinfo = data.data;
     let agent0 = valoinfo[0]
     let agent1 = valoinfo[1]
     let agent2 = valoinfo[2]
     let agent3 = valoinfo[3]
     let agent4 =  valoinfo[4]
     let agent5 =valoinfo[5]
     let agent6 =valoinfo[6]
     let agent7 =valoinfo[7]
     let agent8 =valoinfo[8]
     let agent9 =valoinfo[9]
     let agent10 =valoinfo[10]
     let agent11=valoinfo[11]
     let agent12 =valoinfo[12]
     let agent13 =valoinfo[13]
     let agent14 =valoinfo[14]
     let agent15 =valoinfo[15]
     let agent16=valoinfo[16]
     let agent17 =valoinfo[17]
     let agent18 =valoinfo[18]
     let agent19 =valoinfo[19]
     let agent20 =valoinfo[20]
      

    valotext.remove();
  if (agentname == agent20.displayName){
    
  jettinfo();
  }else if (agentname == agent19.displayName){

    omeninfo();
  }else if (agentname == agent18.displayName){

    reynainfo();
  }else if (agentname == agent17.displayName){

    sageinfo();
  }else if (agentname == agent16.displayName){

    yoruinfo();
  }else if (agentname == agent15.displayName){
    neoninfo();
  }else if (agentname == agent14.displayName){
    brimstoneinfo();
  }else if (agentname == agent13.displayName){
    astrainfo();
  }else if (agentname == agent12.displayName){
    phoenixinfo();
  }else if (agentname == agent11.displayName){
    viperinfo();
  }else if (agentname == agent10.displayName){
    harborinfo();
  }else if (agentname == agent9.displayName){
    killjoyinfo();
  }else if (agentname == agent8.displayName){
    sovainfo();
  }else if (agentname == agent7.displayName){
    cypherinfo();
  }else if (agentname == agent6.displayName){
    skyeinfo();
  }else if (agentname == agent5.displayName){
    kayoinfo();
  }else if (agentname == agent4.displayName){
    chamberinfo();
  }else if (agentname == agent3.displayName){
    razeinfo();
  }else if (agentname == agent2.displayName){
    breachinfo();
  }else if (agentname == agent1.displayName){
    fadeinfo();
  }else if (agentname == agent0.displayName){
    gekkoinfo();
  }else{
    window.alert("No Agent found");
  }
 
     
    })

}


function enlargeImage(image) {
  var enlargedImage = document.createElement('img');
  enlargedImage.src = image.src;
  enlargedImage.classList.add('enlarged-image');
  enlargedImage.onclick = function() {
    document.body.removeChild(this);
  };
  document.body.appendChild(enlargedImage);
}

