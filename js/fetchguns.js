let gunslink = `https://valorant-api.com/v1/weapons`

fetch(gunslink)
.then((response) => response.json())
.then((data) => {

    console.log(data)

    let guns = data.data;
       //pistol
    let gunsfiltersidearm = guns.filter(function(guns) {
        return guns.category == "EEquippableCategory::Sidearm"; });
   console.log(gunsfiltersidearm)
   let sidearm = gunsfiltersidearm[0].displayName;
   let sidearm1 = gunsfiltersidearm[1].displayName;
   let sidearm2 = gunsfiltersidearm[2].displayName;
   let sidearm3 = gunsfiltersidearm[3].displayName;
   let sidearm4 = gunsfiltersidearm[4].displayName;
        //pic
    let pistolpic = gunsfiltersidearm[0].displayIcon;
    let pistolpic1 = gunsfiltersidearm[1].displayIcon;
    let pistolpic2= gunsfiltersidearm[2].displayIcon;
    let pistolpic3 = gunsfiltersidearm[3].displayIcon;
    let pistolpic4 = gunsfiltersidearm[4].displayIcon;
    //cost
    let howMuch = gunsfiltersidearm[0].shopData
    let howMuch1= gunsfiltersidearm[1].shopData
    let howMuch2 = gunsfiltersidearm[2].shopData
    let howMuch3 = gunsfiltersidearm[3].shopData
    let howMuch4= gunsfiltersidearm[4].shopData
    let cost = howMuch.cost
    let cost1 = howMuch1.cost
    let cost2 = howMuch2.cost
    let cost3 = howMuch3.cost
    let cost4 = howMuch4.cost

   document.getElementById("pistoldiv").innerHTML =
   `
   <div class="divider" onclick="sidearm1()">
   <p  class= "gunname">${sidearm1}</p>
   <img class="gunsicon" src="${pistolpic1}">
   <p  class= "gunname">${cost1}</p>
   </div>
   <div class="divider" onclick="sidearm()" >
   <p  class= "gunname">${sidearm}</p>
   <img class="gunsicon" src="${pistolpic}">
   <p  class= "gunname">${cost}</p>
   </div>
   <div class="divider" onclick="sidearm2()">
   <p  class= "gunname">${sidearm2}</p>
   <img class="gunsicon" src="${pistolpic2}">
   <p  class= "gunname">${cost2}</p>
   </div>
   <div class="divider" onclick="sidearm3()">
   <p  class= "gunname">${sidearm3}</p>
   <img class="gunsicon" src="${pistolpic3}">
   <p  class= "gunname">${cost3}</p>
   </div>
   <div class="divider" onclick="sidearm4()">
   <p  class= "gunname">${sidearm4}</p>
   <img class="gunsicon" src="${pistolpic4}">
   <p  class= "gunname">${cost4}</p>
   </div>
   `
     //smgdiv
     let gunsfiltersmg = guns.filter(function(guns) {
        return guns.category == "EEquippableCategory::SMG"; });
        let gunfiltersmgdiv = document.getElementById("smgdiv");
        let smg = gunsfiltersmg[0].displayName;
    let smg1 = gunsfiltersmg[1].displayName;
         //pic
         let smgpic = gunsfiltersmg[0].displayIcon;
         let smgpic1 = gunsfiltersmg[1].displayIcon;
       
         //cost
         let howMuchsmg = gunsfiltersmg[0].shopData
         let howMuchsmg1= gunsfiltersmg[1].shopData
      
         let costsmg = howMuchsmg.cost
         let costsmg1 = howMuchsmg1.cost
       
    gunfiltersmgdiv.innerHTML = `
    <div class="dividersmg" onclick="smg1()">
    <p  class= "gunname">${smg1}</p>
    <img class="gunsiconsmg" src="${smgpic1}">
    <p  class= "gunname">${costsmg1}</p>
    </div>
    <div class="dividersmg" onclick="smg()">
    <p  class= "gunname">${smg}</p>
    <img class="gunsiconsmg" src="${smgpic}">
    <p  class= "gunname">${costsmg}</p>
    </div>
    
        `
     //shotgundiv
     let gunsfiltershotgun = guns.filter(function(guns) {
        return guns.category == "EEquippableCategory::Shotgun"; });
        let gunfiltershotgundiv = document.getElementById("shotgundiv");
        let shotgun = gunsfiltershotgun[0].displayName;
    let shotgun1 = gunsfiltershotgun[1].displayName;
     //pic
     let shotgunpic = gunsfiltershotgun[0].displayIcon;
     let shotgunpic1 = gunsfiltershotgun[1].displayIcon;
   
     //cost
     let howMuchshotgun = gunsfiltershotgun[0].shopData
     let howMuchshotgun1= gunsfiltershotgun[1].shopData
  
     let costshotgun = howMuchshotgun.cost
     let costshotgun1 = howMuchshotgun1.cost
        gunfiltershotgundiv.innerHTML = `
        <div class="dividersmg" onclick="shotgun()">
        <p  class= "gunname">${shotgun}</p>
        <img class="gunsiconsmg" src="${shotgunpic}">
        <p  class= "gunname">${costshotgun}</p>
        </div>
        <div class="dividersmg" onclick="shotgun1()">
        <p  class= "gunname">${shotgun1}</p>
        <img class="gunsiconsmg" src="${shotgunpic1}">
        <p  class= "gunname">${costshotgun1}</p>
        </div>
        `
     //riflediv
     let gunsfilterrifle = guns.filter(function(guns) {
        return guns.category == "EEquippableCategory::Rifle"; });
        let gunsfilterdiv = document.getElementById("riflediv");
    console.log(gunsfilterrifle);
        let rifle = gunsfilterrifle[0].displayName;
    let rifle1 = gunsfilterrifle[1].displayName;
    let rifle2 = gunsfilterrifle[2].displayName;
    let rifle3 = gunsfilterrifle[3].displayName;
       //pic
       let riflepic = gunsfilterrifle[0].displayIcon;
       let riflepic1 = gunsfilterrifle[1].displayIcon;
       let riflepic2 = gunsfilterrifle[2].displayIcon;
       let riflepic3 = gunsfilterrifle[3].displayIcon;
       //cost
       let howMuchrifle = gunsfilterrifle[0].shopData
       let howMuchrifle1= gunsfilterrifle[1].shopData
       let howMuchrifle2 = gunsfilterrifle[2].shopData
       let howMuchrifle3= gunsfilterrifle[3].shopData

       let costrifle = howMuchrifle.cost
       let costrifle1 = howMuchrifle1.cost
       let costrifle2 = howMuchrifle2.cost
       let costrifle3 = howMuchrifle3.cost
    gunsfilterdiv.innerHTML = `
   
    <div class="dividerrifle"  onclick="rifle1()">
    <p  class= "gunname">${rifle1}</p>
    <img class="gunsiconrifle" src="${riflepic1}">
    <p  class= "gunname">${costrifle1}</p>
    </div>
    <div class="dividerrifle" onclick="rifle3()">
    <p  class= "gunname">${rifle3}</p>
    <img class="gunsiconrifle" src="${riflepic3}">
    <p  class= "gunname">${costrifle3}</p>
    </div>
   
    
    <div class="dividerrifle" onclick="rifle()">
    <p  class= "gunname">${rifle}</p>
    <img class="gunsiconrifle" src="${riflepic}">
    <p  class= "gunname">${costrifle}</p>
    </div>
    <div class="dividerrifle" onclick="rifle2()">
    <p  class= "gunname">${rifle2}</p>
    <img class="gunsiconrifle" src="${riflepic2}">
    <p  class= "gunname">${costrifle2}</p>
    </div>
        `
      //sniperdiv
      let gunsfiltersniper = guns.filter(function(guns) {
        return guns.category == "EEquippableCategory::Sniper"; });
        let gunsfiltersniperdiv = document.getElementById("sniperdiv");
    console.log(gunsfiltersniper);
        let sniper = gunsfiltersniper[0].displayName;
    let sniper1 = gunsfiltersniper[1].displayName;
       //pic
       let sniperpic = gunsfiltersniper[0].displayIcon;
       let sniperpic1 = gunsfiltersniper[1].displayIcon;
     
       //cost
       let howMuchsniper = gunsfiltersniper[0].shopData
       let howMuchsniper1= gunsfiltersniper[1].shopData
    
       let costsniper = howMuchsniper.cost
       let costsniper1 = howMuchsniper1.cost
   
    gunsfiltersniperdiv.innerHTML = `
    <div class="dividersniper" onclick="sniper1()">
    <p  class= "gunname">${sniper1}</p>
    <img class="gunsiconrifle" src="${sniperpic1}">
    <p  class= "gunname">${costsniper1}</p>
    </div>
    <div class="dividersniper" onclick="sniper()">
    <p  class= "gunname">${sniper}</p>
    <img class="gunsiconrifle" src="${sniperpic}">
    <p  class= "gunname">${costsniper}</p>
    </div>
  
       
        `
      //heavymachinegundiv
      let gunsfilterheavymachinegun = guns.filter(function(guns) {
        return guns.category == "EEquippableCategory::Heavy"; });
    console.log(gunsfiltersniper);
    let heavy = gunsfilterheavymachinegun[0].displayName;
    let heavy1 = gunsfilterheavymachinegun[1].displayName;
       //pic
       let heavypic = gunsfilterheavymachinegun[0].displayIcon;
       let heavypic1 = gunsfilterheavymachinegun[1].displayIcon;
     
       //cost
       let howMuchheavy = gunsfilterheavymachinegun[0].shopData
       let howMuchheavy1= gunsfilterheavymachinegun[1].shopData
    
       let costheavy = howMuchheavy.cost
       let costheavy1 = howMuchheavy1.cost

    let gunsfilterheavydiv = document.getElementById("machinegundiv");
    gunsfilterheavydiv.innerHTML = `
    <div class="dividersniper" onclick="heavy()">
    <p  class= "gunname">${heavy}</p>
    <img class="gunsiconrifle" src="${heavypic}">
    <p  class= "gunname">${costheavy}</p>
    </div>
    <div class="dividersniper" onclick="heavy1()">
    <p  class= "gunname">${heavy1}</p>
    <img class="gunsiconrifle" src="${heavypic1}">
    <p  class= "gunname">${costheavy1}</p>
    </div>
    `
   
})

