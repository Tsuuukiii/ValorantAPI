

function sidearm(){

fetch(gunslink)
.then((response) => response.json())
.then((data) => {

    let guns = data.data;
    //pistol
   
 let gunsfiltersidearm = guns.filter(function(guns) {
     return guns.category == "EEquippableCategory::Sidearm"; });
     let sidearmstats = gunsfiltersidearm[0].weaponStats;
     
    let firerate = sidearmstats.fireRate;
    let magsize = sidearmstats.magazineSize
    let reloadtime = sidearmstats.reloadTimeSeconds
    let firsaccurancy =   sidearmstats.firstBulletAccuracy

    let equiptime = sidearmstats.equipTimeSeconds
  //damage
  let damage = sidearmstats.damageRanges
  let bodydamage = damage[0].bodyDamage
  let headshot = damage[0].headDamage
  let legdamage = damage[0].legDamage
  let endmeter = damage[0].rangeEndMeters
  let startmeter = damage[0].rangeStartMeters
  //damage1
  let bodydamage1 = damage[1].bodyDamage
  let headshot1 = damage[1].headDamage
  let legdamage1 = damage[1].legDamage
  let endmeter1 = damage[1].rangeEndMeters
  let startmeter1 = damage[1].rangeStartMeters
  //name
  let name = gunsfiltersidearm[0].displayName
   let gunsinfosidearm = document.getElementById("gunsinfo");
    
    gunsinfosidearm.innerHTML = 
    `
       

    <p class="gunnamestats">${name}</p>
    <div class="weapondetails">
        <div class="weaponspecs">
    <p>Fire Rate: ${firerate}</p>
    <p>Magazine: ${magsize}</p>

    <p>Reload Speed: ${reloadtime}</p>
    <p>Equip Time: ${equiptime}</p>

    <p>1st Shot Spread: ${firsaccurancy}</p>
        </div>

    <div class="weapondamage"> 
    <p class="gunnamestats">Damage: </p>
    <p>${startmeter} - ${endmeter} meters</p>
    <p>Head Damage: ${headshot}</p>
    <p>Body Damage: ${bodydamage}</p>
    <p>Leg Damage: ${legdamage}</p>
    </div>
    <div class="weapondamage"> 
    <p class="gunnamestats">Damage: </p>
    <p>${startmeter1} - ${endmeter1} meters</p>
    <p>Head Damage: ${headshot1}</p>
    <p>Body Damage: ${bodydamage1}</p>
    <p>Leg Damage: ${legdamage1}</p>

</div>

    `
    window.scrollTo({ top: 0, behavior: 'smooth' });
})
}
function sidearm1(){

    fetch(gunslink)
    .then((response) => response.json())
    .then((data) => {
    
        let guns = data.data;
        //pistol
       
     let gunsfiltersidearm = guns.filter(function(guns) {
         return guns.category == "EEquippableCategory::Sidearm"; });
       let sidearmstats = gunsfiltersidearm[1].weaponStats;
     console.log(gunsfiltersidearm)
        let firerate = sidearmstats.fireRate;
        let magsize = sidearmstats.magazineSize
        let reloadtime = sidearmstats.reloadTimeSeconds
        let firsaccurancy =   sidearmstats.firstBulletAccuracy

        let equiptime = sidearmstats.equipTimeSeconds
       //damage
  let damage = sidearmstats.damageRanges
  let bodydamage = damage[0].bodyDamage
  let headshot = damage[0].headDamage
  let legdamage = damage[0].legDamage
  let endmeter = damage[0].rangeEndMeters
  let startmeter = damage[0].rangeStartMeters
  //damage1
  let bodydamage1 = damage[1].bodyDamage
  let headshot1 = damage[1].headDamage
  let legdamage1 = damage[1].legDamage
  let endmeter1 = damage[1].rangeEndMeters
  let startmeter1 = damage[1].rangeStartMeters
  //name
  let name = gunsfiltersidearm[1].displayName
       let gunsinfosidearm = document.getElementById("gunsinfo");
        
        gunsinfosidearm.innerHTML = 
        `
        <p class="gunnamestats">${name}</p>
    <div class="weapondetails">
        <div class="weaponspecs">
    <p>Fire Rate: ${firerate}</p>
    <p>Magazine: ${magsize}</p>

    <p>Reload Speed: ${reloadtime}</p>
    <p>Equip Time: ${equiptime}</p>

    <p>1st Shot Spread: ${firsaccurancy}</p>
        </div>

    <div class="weapondamage"> 
    <p class="gunnamestats">Damage: </p>
    <p>${startmeter} - ${endmeter} meters</p>
    <p>Head Damage: ${headshot}</p>
    <p>Body Damage: ${bodydamage}</p>
    <p>Leg Damage: ${legdamage}</p>
    </div>
    <div class="weapondamage"> 
    <p class="gunnamestats">Damage: </p>
    <p>${startmeter1} - ${endmeter1} meters</p>
    <p>Head Damage: ${headshot1}</p>
    <p>Body Damage: ${bodydamage1}</p>
    <p>Leg Damage: ${legdamage1}</p>

</div>
    
     
    
    
        `
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })
}
function sidearm2(){

        fetch(gunslink)
        .then((response) => response.json())
        .then((data) => {
        
            let guns = data.data;
            //pistol
           
         let gunsfiltersidearm = guns.filter(function(guns) {
             return guns.category == "EEquippableCategory::Sidearm"; });
           let sidearm1 = gunsfiltersidearm[2].weaponStats;
         
            let firerate = sidearm1.fireRate;
            let magsize = sidearm1.magazineSize
            let reloadtime = sidearm1.reloadTimeSeconds
            let firsaccurancy =   sidearm1.firstBulletAccuracy
         let equiptime = sidearm1.equipTimeSeconds
       //damage
  let damage = sidearm1.damageRanges
  let bodydamage = damage[0].bodyDamage
  let headshot = damage[0].headDamage
  let legdamage = damage[0].legDamage
  let endmeter = damage[0].rangeEndMeters
  let startmeter = damage[0].rangeStartMeters
  //damage1
  let bodydamage1 = damage[1].bodyDamage
  let headshot1 = damage[1].headDamage
  let legdamage1 = damage[1].legDamage
  let endmeter1 = damage[1].rangeEndMeters
  let startmeter1 = damage[1].rangeStartMeters
  //name
  let name = gunsfiltersidearm[2].displayName
       let gunsinfosidearm = document.getElementById("gunsinfo");
        
        gunsinfosidearm.innerHTML = 
        `
        <p class="gunnamestats">${name}</p>
    <div class="weapondetails">
        <div class="weaponspecs">
    <p>Fire Rate: ${firerate}</p>
    <p>Magazine: ${magsize}</p>

    <p>Reload Speed: ${reloadtime}</p>
    <p>Equip Time: ${equiptime}</p>

    <p>1st Shot Spread: ${firsaccurancy}</p>
        </div>

    <div class="weapondamage"> 
    <p class="gunnamestats">Damage: </p>
    <p>${startmeter} - ${endmeter} meters</p>
    <p>Head Damage: ${headshot}</p>
    <p>Body Damage: ${bodydamage}</p>
    <p>Leg Damage: ${legdamage}</p>
    </div>
    <div class="weapondamage"> 
    <p class="gunnamestats">Damage: </p>
    <p>${startmeter1} - ${endmeter1} meters</p>
    <p>Head Damage: ${headshot1}</p>
    <p>Body Damage: ${bodydamage1}</p>
    <p>Leg Damage: ${legdamage1}</p>

</div>
    
        
            `
            window.scrollTo({ top: 0, behavior: 'smooth' });
        })
}
function sidearm3(){

            fetch(gunslink)
            .then((response) => response.json())
            .then((data) => {
            
                let guns = data.data;
                //pistol
               
             let gunsfiltersidearm = guns.filter(function(guns) {
                 return guns.category == "EEquippableCategory::Sidearm"; });
               let sidearm1 = gunsfiltersidearm[3].weaponStats;
             
                let firerate = sidearm1.fireRate;
                let magsize = sidearm1.magazineSize
                let reloadtime = sidearm1.reloadTimeSeconds
                let firsaccurancy =   sidearm1.firstBulletAccuracy
            
                let equiptime = sidearm1.equipTimeSeconds
                //damage
           let damage = sidearm1.damageRanges
           let bodydamage = damage[0].bodyDamage
           let headshot = damage[0].headDamage
           let legdamage = damage[0].legDamage
           let endmeter = damage[0].rangeEndMeters
           let startmeter = damage[0].rangeStartMeters
           //damage1
           let bodydamage1 = damage[1].bodyDamage
           let headshot1 = damage[1].headDamage
           let legdamage1 = damage[1].legDamage
           let endmeter1 = damage[1].rangeEndMeters
           let startmeter1 = damage[1].rangeStartMeters
           //name
           let name = gunsfiltersidearm[3].displayName
                let gunsinfosidearm = document.getElementById("gunsinfo");
                 
                 gunsinfosidearm.innerHTML = 
                 `
                 <p class="gunnamestats">${name}</p>
             <div class="weapondetails">
                 <div class="weaponspecs">
             <p>Fire Rate: ${firerate}</p>
             <p>Magazine: ${magsize}</p>
         
             <p>Reload Speed: ${reloadtime}</p>
             <p>Equip Time: ${equiptime}</p>
         
             <p>1st Shot Spread: ${firsaccurancy}</p>
                 </div>
         
             <div class="weapondamage"> 
             <p class="gunnamestats">Damage: </p>
             <p>${startmeter} - ${endmeter} meters</p>
             <p>Head Damage: ${headshot}</p>
             <p>Body Damage: ${bodydamage}</p>
             <p>Leg Damage: ${legdamage}</p>
             </div>
             <div class="weapondamage"> 
             <p class="gunnamestats">Damage: </p>
             <p>${startmeter1} - ${endmeter1} meters</p>
             <p>Head Damage: ${headshot1}</p>
             <p>Body Damage: ${bodydamage1}</p>
             <p>Leg Damage: ${legdamage1}</p>
         
         </div>
            
                `
                window.scrollTo({ top: 0, behavior: 'smooth' });
            })
}
function sidearm4(){

                fetch(gunslink)
                .then((response) => response.json())
                .then((data) => {
                
                    let guns = data.data;
                    //pistol
                   
                 let gunsfiltersidearm = guns.filter(function(guns) {
                     return guns.category == "EEquippableCategory::Sidearm"; });
                   let sidearm1 = gunsfiltersidearm[4].weaponStats;
                 
                    let firerate = sidearm1.fireRate;
                    let magsize = sidearm1.magazineSize
                    let reloadtime = sidearm1.reloadTimeSeconds
                    let firsaccurancy =   sidearm1.firstBulletAccuracy
                
                      
                let equiptime = sidearm1.equipTimeSeconds
                //damage
           let damage = sidearm1.damageRanges
           let bodydamage = damage[0].bodyDamage
           let headshot = damage[0].headDamage
           let legdamage = damage[0].legDamage
           let endmeter = damage[0].rangeEndMeters
           let startmeter = damage[0].rangeStartMeters
           //damage1
           let bodydamage1 = damage[1].bodyDamage
           let headshot1 = damage[1].headDamage
           let legdamage1 = damage[1].legDamage
           let endmeter1 = damage[1].rangeEndMeters
           let startmeter1 = damage[1].rangeStartMeters
           //name
           let name = gunsfiltersidearm[4].displayName
                let gunsinfosidearm = document.getElementById("gunsinfo");
                 
                 gunsinfosidearm.innerHTML = 
                 `
                 <p class="gunnamestats">${name}</p>
             <div class="weapondetails">
                 <div class="weaponspecs">
             <p>Fire Rate: ${firerate}</p>
             <p>Magazine: ${magsize}</p>
         
             <p>Reload Speed: ${reloadtime}</p>
             <p>Equip Time: ${equiptime}</p>
         
             <p>1st Shot Spread: ${firsaccurancy}</p>
                 </div>
         
             <div class="weapondamage"> 
             <p class="gunnamestats">Damage: </p>
             <p>${startmeter} - ${endmeter} meters</p>
             <p>Head Damage: ${headshot}</p>
             <p>Body Damage: ${bodydamage}</p>
             <p>Leg Damage: ${legdamage}</p>
             </div>
             <div class="weapondamage"> 
             <p class="gunnamestats">Damage: </p>
             <p>${startmeter1} - ${endmeter1} meters</p>
             <p>Head Damage: ${headshot1}</p>
             <p>Body Damage: ${bodydamage1}</p>
             <p>Leg Damage: ${legdamage1}</p>
         
         </div>
                    `
                    window.scrollTo({ top: 0, behavior: 'smooth' }); 
                })
}
function smg(){

    fetch(gunslink)
    .then((response) => response.json())
    .then((data) => {
    
        let guns = data.data;
        //pistol
       
     let gunsfiltersidearm = guns.filter(function(guns) {
         return guns.category == "EEquippableCategory::SMG"; });
         let sidearmstats = gunsfiltersidearm[0].weaponStats;
        let firerate = sidearmstats.fireRate;
        let magsize = sidearmstats.magazineSize
        let reloadtime = sidearmstats.reloadTimeSeconds
        let firsaccurancy =   sidearmstats.firstBulletAccuracy
    
             
        let equiptime = sidearmstats.equipTimeSeconds
        //damage
   let damage = sidearmstats.damageRanges
   let bodydamage = damage[0].bodyDamage
   let headshot = damage[0].headDamage
   let legdamage = damage[0].legDamage
   let endmeter = damage[0].rangeEndMeters
   let startmeter = damage[0].rangeStartMeters
   //damage1
   let bodydamage1 = damage[1].bodyDamage
   let headshot1 = damage[1].headDamage
   let legdamage1 = damage[1].legDamage
   let endmeter1 = damage[1].rangeEndMeters
   let startmeter1 = damage[1].rangeStartMeters
   //name
   let name = gunsfiltersidearm[0].displayName
        let gunsinfosidearm = document.getElementById("gunsinfo");
         
         gunsinfosidearm.innerHTML = 
         `
         <p class="gunnamestats">${name}</p>
     <div class="weapondetails">
         <div class="weaponspecs">
     <p>Fire Rate: ${firerate}</p>
     <p>Magazine: ${magsize}</p>
 
     <p>Reload Speed: ${reloadtime}</p>
     <p>Equip Time: ${equiptime}</p>
 
     <p>1st Shot Spread: ${firsaccurancy}</p>
         </div>
 
     <div class="weapondamage"> 
     <p class="gunnamestats">Damage: </p>
     <p>${startmeter} - ${endmeter} meters</p>
     <p>Head Damage: ${headshot}</p>
     <p>Body Damage: ${bodydamage}</p>
     <p>Leg Damage: ${legdamage}</p>
     </div>
     <div class="weapondamage"> 
     <p class="gunnamestats">Damage: </p>
     <p>${startmeter1} - ${endmeter1} meters</p>
     <p>Head Damage: ${headshot1}</p>
     <p>Body Damage: ${bodydamage1}</p>
     <p>Leg Damage: ${legdamage1}</p>
 
 </div>
    
        `
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })
}
function smg1(){

    fetch(gunslink)
    .then((response) => response.json())
    .then((data) => {
    
        let guns = data.data;
        //pistol
       
     let gunsfiltersidearm = guns.filter(function(guns) {
         return guns.category == "EEquippableCategory::SMG"; });
         let sidearmstats = gunsfiltersidearm[1].weaponStats;
        let firerate = sidearmstats.fireRate;
        let magsize = sidearmstats.magazineSize
        let reloadtime = sidearmstats.reloadTimeSeconds
        let firsaccurancy =   sidearmstats.firstBulletAccuracy
    
             
        let equiptime = sidearmstats.equipTimeSeconds
        //damage
   let damage = sidearmstats.damageRanges
   let bodydamage = damage[0].bodyDamage
   let headshot = damage[0].headDamage
   let legdamage = damage[0].legDamage
   let endmeter = damage[0].rangeEndMeters
   let startmeter = damage[0].rangeStartMeters
   //damage1
   let bodydamage1 = damage[1].bodyDamage
   let headshot1 = damage[1].headDamage
   let legdamage1 = damage[1].legDamage
   let endmeter1 = damage[1].rangeEndMeters
   let startmeter1 = damage[1].rangeStartMeters
   //name
   let name = gunsfiltersidearm[1].displayName
        let gunsinfosidearm = document.getElementById("gunsinfo");
         
         gunsinfosidearm.innerHTML = 
         `
         <p class="gunnamestats">${name}</p>
     <div class="weapondetails">
         <div class="weaponspecs">
     <p>Fire Rate: ${firerate}</p>
     <p>Magazine: ${magsize}</p>
 
     <p>Reload Speed: ${reloadtime}</p>
     <p>Equip Time: ${equiptime}</p>
 
     <p>1st Shot Spread: ${firsaccurancy}</p>
         </div>
 
     <div class="weapondamage"> 
     <p class="gunnamestats">Damage: </p>
     <p>${startmeter} - ${endmeter} meters</p>
     <p>Head Damage: ${headshot}</p>
     <p>Body Damage: ${bodydamage}</p>
     <p>Leg Damage: ${legdamage}</p>
     </div>
     <div class="weapondamage"> 
     <p class="gunnamestats">Damage: </p>
     <p>${startmeter1} - ${endmeter1} meters</p>
     <p>Head Damage: ${headshot1}</p>
     <p>Body Damage: ${bodydamage1}</p>
     <p>Leg Damage: ${legdamage1}</p>
 
 </div>
    
    
     
    
    
        `
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })
}
function shotgun(){

    fetch(gunslink)
    .then((response) => response.json())
    .then((data) => {
    
        let guns = data.data;
        //pistol
       
     let gunsfiltersidearm = guns.filter(function(guns) {
         return guns.category == "EEquippableCategory::Shotgun"; });
         let sidearmstats = gunsfiltersidearm[0].weaponStats;
        let firerate = sidearmstats.fireRate;
        let magsize = sidearmstats.magazineSize
        let reloadtime = sidearmstats.reloadTimeSeconds
        let firsaccurancy =   sidearmstats.firstBulletAccuracy
    
               
        let equiptime = sidearmstats.equipTimeSeconds
        //damage
   let damage = sidearmstats.damageRanges
   let bodydamage = damage[0].bodyDamage
   let headshot = damage[0].headDamage
   let legdamage = damage[0].legDamage
   let endmeter = damage[0].rangeEndMeters
   let startmeter = damage[0].rangeStartMeters
   //damage1
   let bodydamage1 = damage[1].bodyDamage
   let headshot1 = damage[1].headDamage
   let legdamage1 = damage[1].legDamage
   let endmeter1 = damage[1].rangeEndMeters
   let startmeter1 = damage[1].rangeStartMeters
   //name
   let name = gunsfiltersidearm[0].displayName
        let gunsinfosidearm = document.getElementById("gunsinfo");
         
         gunsinfosidearm.innerHTML = 
         `
         <p class="gunnamestats">${name}</p>
     <div class="weapondetails">
         <div class="weaponspecs">
     <p>Fire Rate: ${firerate}</p>
     <p>Magazine: ${magsize}</p>
 
     <p>Reload Speed: ${reloadtime}</p>
     <p>Equip Time: ${equiptime}</p>
 
     <p>1st Shot Spread: ${firsaccurancy}</p>
         </div>
 
     <div class="weapondamage"> 
     <p class="gunnamestats">Damage: </p>
     <p>${startmeter} - ${endmeter} meters</p>
     <p>Head Damage: ${headshot}</p>
     <p>Body Damage: ${bodydamage}</p>
     <p>Leg Damage: ${legdamage}</p>
     </div>
     <div class="weapondamage"> 
     <p class="gunnamestats">Damage: </p>
     <p>${startmeter1} - ${endmeter1} meters</p>
     <p>Head Damage: ${headshot1}</p>
     <p>Body Damage: ${bodydamage1}</p>
     <p>Leg Damage: ${legdamage1}</p>
 
 </div>
    
        `
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })
}
function shotgun1(){

    fetch(gunslink)
    .then((response) => response.json())
    .then((data) => {
    
        let guns = data.data;
        //pistol
       
     let gunsfiltersidearm = guns.filter(function(guns) {
         return guns.category == "EEquippableCategory::Shotgun"; });
         let sidearmstats = gunsfiltersidearm[1].weaponStats;
        let firerate = sidearmstats.fireRate;
        let magsize = sidearmstats.magazineSize
        let reloadtime = sidearmstats.reloadTimeSeconds
        let firsaccurancy =   sidearmstats.firstBulletAccuracy
    
      
                
        let equiptime = sidearmstats.equipTimeSeconds
        //damage
   let damage = sidearmstats.damageRanges
   let bodydamage = damage[0].bodyDamage
   let headshot = damage[0].headDamage
   let legdamage = damage[0].legDamage
   let endmeter = damage[0].rangeEndMeters
   let startmeter = damage[0].rangeStartMeters
   //damage1
   let bodydamage1 = damage[1].bodyDamage
   let headshot1 = damage[1].headDamage
   let legdamage1 = damage[1].legDamage
   let endmeter1 = damage[1].rangeEndMeters
   let startmeter1 = damage[1].rangeStartMeters
   //name
   let name = gunsfiltersidearm[0].displayName
        let gunsinfosidearm = document.getElementById("gunsinfo");
         
         gunsinfosidearm.innerHTML = 
         `
         <p class="gunnamestats">${name}</p>
     <div class="weapondetails">
         <div class="weaponspecs">
     <p>Fire Rate: ${firerate}</p>
     <p>Magazine: ${magsize}</p>
 
     <p>Reload Speed: ${reloadtime}</p>
     <p>Equip Time: ${equiptime}</p>
 
     <p>1st Shot Spread: ${firsaccurancy}</p>
         </div>
 
     <div class="weapondamage"> 
     <p class="gunnamestats">Damage: </p>
     <p>${startmeter} - ${endmeter} meters</p>
     <p>Head Damage: ${headshot}</p>
     <p>Body Damage: ${bodydamage}</p>
     <p>Leg Damage: ${legdamage}</p>
     </div>
     <div class="weapondamage"> 
     <p class="gunnamestats">Damage: </p>
     <p>${startmeter1} - ${endmeter1} meters</p>
     <p>Head Damage: ${headshot1}</p>
     <p>Body Damage: ${bodydamage1}</p>
     <p>Leg Damage: ${legdamage1}</p>
 
 </div>
    
    
        `
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })
}
function rifle(){

    fetch(gunslink)
    .then((response) => response.json())
    .then((data) => {
    
        let guns = data.data;
        //pistol
       
     let gunsfiltersidearm = guns.filter(function(guns) {
         return guns.category == "EEquippableCategory::Rifle"; });
         let sidearmstats = gunsfiltersidearm[0].weaponStats;
        let firerate = sidearmstats.fireRate;
        let magsize = sidearmstats.magazineSize
        let reloadtime = sidearmstats.reloadTimeSeconds
        let firsaccurancy =   sidearmstats.firstBulletAccuracy
    
              
        let equiptime = sidearmstats.equipTimeSeconds
        //damage
   let damage = sidearmstats.damageRanges
   let bodydamage = damage[0].bodyDamage
   let headshot = damage[0].headDamage
   let legdamage = damage[0].legDamage
   let endmeter = damage[0].rangeEndMeters
   let startmeter = damage[0].rangeStartMeters
  
   //name
   let name = gunsfiltersidearm[0].displayName
        let gunsinfosidearm = document.getElementById("gunsinfo");
         
         gunsinfosidearm.innerHTML = 
         `
         <p class="gunnamestats">${name}</p>
     <div class="weapondetails">
         <div class="weaponspecs">
     <p>Fire Rate: ${firerate}</p>
     <p>Magazine: ${magsize}</p>
 
     <p>Reload Speed: ${reloadtime}</p>
     <p>Equip Time: ${equiptime}</p>
 
     <p>1st Shot Spread: ${firsaccurancy}</p>
         </div>
 
     <div class="weapondamage"> 
     <p class="gunnamestats">Damage: </p>
     <p>${startmeter} - ${endmeter} meters</p>
     <p>Head Damage: ${headshot}</p>
     <p>Body Damage: ${bodydamage}</p>
     <p>Leg Damage: ${legdamage}</p>
     </div>
    
    
    
    
        `
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })
}
function rifle1(){

    fetch(gunslink)
    .then((response) => response.json())
    .then((data) => {
    
        let guns = data.data;
        //pistol
       
     let gunsfiltersidearm = guns.filter(function(guns) {
         return guns.category == "EEquippableCategory::Rifle"; });
         let sidearmstats = gunsfiltersidearm[1].weaponStats;
        let firerate = sidearmstats.fireRate;
        let magsize = sidearmstats.magazineSize
        let reloadtime = sidearmstats.reloadTimeSeconds
        let firsaccurancy =   sidearmstats.firstBulletAccuracy
    
               
        let equiptime = sidearmstats.equipTimeSeconds
        //damage
   let damage = sidearmstats.damageRanges
   let bodydamage = damage[0].bodyDamage
   let headshot = damage[0].headDamage
   let legdamage = damage[0].legDamage
   let endmeter = damage[0].rangeEndMeters
   let startmeter = damage[0].rangeStartMeters

 
   //name
   let name = gunsfiltersidearm[1].displayName
        let gunsinfosidearm = document.getElementById("gunsinfo");
         
         gunsinfosidearm.innerHTML = 
         `
         <p class="gunnamestats">${name}</p>
     <div class="weapondetails">
         <div class="weaponspecs">
     <p>Fire Rate: ${firerate}</p>
     <p>Magazine: ${magsize}</p>
 
     <p>Reload Speed: ${reloadtime}</p>
     <p>Equip Time: ${equiptime}</p>
 
     <p>1st Shot Spread: ${firsaccurancy}</p>
         </div>
 
     <div class="weapondamage"> 
     <p class="gunnamestats">Damage: </p>
     <p>${startmeter} - ${endmeter} meters</p>
     <p>Head Damage: ${headshot}</p>
     <p>Body Damage: ${bodydamage}</p>
     <p>Leg Damage: ${legdamage}</p>
     </div>
 
    
    
    
        `
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })
}
function rifle2(){

    fetch(gunslink)
    .then((response) => response.json())
    .then((data) => {
    
        let guns = data.data;
        //pistol
       
     let gunsfiltersidearm = guns.filter(function(guns) {
         return guns.category == "EEquippableCategory::Rifle"; });
         let sidearmstats = gunsfiltersidearm[2].weaponStats;
        let firerate = sidearmstats.fireRate;
        let magsize = sidearmstats.magazineSize
        let reloadtime = sidearmstats.reloadTimeSeconds
        let firsaccurancy =   sidearmstats.firstBulletAccuracy
    
      
               
        let equiptime = sidearmstats.equipTimeSeconds
        //damage
   let damage = sidearmstats.damageRanges
   let bodydamage = damage[0].bodyDamage
   let headshot = damage[0].headDamage
   let legdamage = damage[0].legDamage
   let endmeter = damage[0].rangeEndMeters
   let startmeter = damage[0].rangeStartMeters
   //damage1
   let bodydamage1 = damage[1].bodyDamage
   let headshot1 = damage[1].headDamage
   let legdamage1 = damage[1].legDamage
   let endmeter1 = damage[1].rangeEndMeters
   let startmeter1 = damage[1].rangeStartMeters
   //name
   let name = gunsfiltersidearm[2].displayName
        let gunsinfosidearm = document.getElementById("gunsinfo");
         
         gunsinfosidearm.innerHTML = 
         `
         <p class="gunnamestats">${name}</p>
     <div class="weapondetails">
         <div class="weaponspecs">
     <p>Fire Rate: ${firerate}</p>
     <p>Magazine: ${magsize}</p>
 
     <p>Reload Speed: ${reloadtime}</p>
     <p>Equip Time: ${equiptime}</p>
 
     <p>1st Shot Spread: ${firsaccurancy}</p>
         </div>
 
     <div class="weapondamage"> 
     <p class="gunnamestats">Damage: </p>
     <p>${startmeter} - ${endmeter} meters</p>
     <p>Head Damage: ${headshot}</p>
     <p>Body Damage: ${bodydamage}</p>
     <p>Leg Damage: ${legdamage}</p>
     </div>
     <div class="weapondamage"> 
     <p class="gunnamestats">Damage: </p>
     <p>${startmeter1} - ${endmeter1} meters</p>
     <p>Head Damage: ${headshot1}</p>
     <p>Body Damage: ${bodydamage1}</p>
     <p>Leg Damage: ${legdamage1}</p>
 
 </div>
    
    
        `
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })
}
function rifle3(){

    fetch(gunslink)
    .then((response) => response.json())
    .then((data) => {
    
        let guns = data.data;
        //pistol
       
     let gunsfiltersidearm = guns.filter(function(guns) {
         return guns.category == "EEquippableCategory::Rifle"; });
         let sidearmstats = gunsfiltersidearm[3].weaponStats;
        let firerate = sidearmstats.fireRate;
        let magsize = sidearmstats.magazineSize
        let reloadtime = sidearmstats.reloadTimeSeconds
        let firsaccurancy =   sidearmstats.firstBulletAccuracy
    
               
        let equiptime = sidearmstats.equipTimeSeconds
        //damage
   let damage = sidearmstats.damageRanges
   let bodydamage = damage[0].bodyDamage
   let headshot = damage[0].headDamage
   let legdamage = damage[0].legDamage
   let endmeter = damage[0].rangeEndMeters
   let startmeter = damage[0].rangeStartMeters

   //name
   let name = gunsfiltersidearm[3].displayName
        let gunsinfosidearm = document.getElementById("gunsinfo");
         
         gunsinfosidearm.innerHTML = 
         `
         <p class="gunnamestats">${name}</p>
     <div class="weapondetails">
         <div class="weaponspecs">
     <p>Fire Rate: ${firerate}</p>
     <p>Magazine: ${magsize}</p>
 
     <p>Reload Speed: ${reloadtime}</p>
     <p>Equip Time: ${equiptime}</p>
 
     <p>1st Shot Spread: ${firsaccurancy}</p>
         </div>
 
     <div class="weapondamage"> 
     <p class="gunnamestats">Damage: </p>
     <p>${startmeter} - ${endmeter} meters</p>
     <p>Head Damage: ${headshot}</p>
     <p>Body Damage: ${bodydamage}</p>
     <p>Leg Damage: ${legdamage}</p>
     </div>
    
    
     
    
    
        `
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })
}
function sniper(){

    fetch(gunslink)
    .then((response) => response.json())
    .then((data) => {
    
        let guns = data.data;
        //pistol
       
     let gunsfiltersidearm = guns.filter(function(guns) {
         return guns.category == "EEquippableCategory::Sniper"; });
         let sidearmstats = gunsfiltersidearm[0].weaponStats;
        let firerate = sidearmstats.fireRate;
        let magsize = sidearmstats.magazineSize
        let reloadtime = sidearmstats.reloadTimeSeconds
        let firsaccurancy =   sidearmstats.firstBulletAccuracy
    
              
        let equiptime = sidearmstats.equipTimeSeconds
        //damage
   let damage = sidearmstats.damageRanges
   let bodydamage = damage[0].bodyDamage
   let headshot = damage[0].headDamage
   let legdamage = damage[0].legDamage
   let endmeter = damage[0].rangeEndMeters
   let startmeter = damage[0].rangeStartMeters
  
   //name
   let name = gunsfiltersidearm[0].displayName
        let gunsinfosidearm = document.getElementById("gunsinfo");
         
         gunsinfosidearm.innerHTML = 
         `
         <p class="gunnamestats">${name}</p>
     <div class="weapondetails">
         <div class="weaponspecs">
     <p>Fire Rate: ${firerate}</p>
     <p>Magazine: ${magsize}</p>
 
     <p>Reload Speed: ${reloadtime}</p>
     <p>Equip Time: ${equiptime}</p>
 
     <p>1st Shot Spread: ${firsaccurancy}</p>
         </div>
 
     <div class="weapondamage"> 
     <p class="gunnamestats">Damage: </p>
     <p>${startmeter} - ${endmeter} meters</p>
     <p>Head Damage: ${headshot}</p>
     <p>Body Damage: ${bodydamage}</p>
     <p>Leg Damage: ${legdamage}</p>
     </div>
   
    
    
        `
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })
}
function sniper1(){

    fetch(gunslink)
    .then((response) => response.json())
    .then((data) => {
    
        let guns = data.data;
        //pistol
       
     let gunsfiltersidearm = guns.filter(function(guns) {
         return guns.category == "EEquippableCategory::Sniper"; });
         let sidearmstats = gunsfiltersidearm[1].weaponStats;
        let firerate = sidearmstats.fireRate;
        let magsize = sidearmstats.magazineSize
        let reloadtime = sidearmstats.reloadTimeSeconds
        let firsaccurancy =   sidearmstats.firstBulletAccuracy
    
      
               
        let equiptime = sidearmstats.equipTimeSeconds
        //damage
   let damage = sidearmstats.damageRanges
   let bodydamage = damage[0].bodyDamage
   let headshot = damage[0].headDamage
   let legdamage = damage[0].legDamage
   let endmeter = damage[0].rangeEndMeters
   let startmeter = damage[0].rangeStartMeters
 
   //name
   let name = gunsfiltersidearm[1].displayName
        let gunsinfosidearm = document.getElementById("gunsinfo");
         
         gunsinfosidearm.innerHTML = 
         `
         <p class="gunnamestats">${name}</p>
     <div class="weapondetails">
         <div class="weaponspecs">
     <p>Fire Rate: ${firerate}</p>
     <p>Magazine: ${magsize}</p>
 
     <p>Reload Speed: ${reloadtime}</p>
     <p>Equip Time: ${equiptime}</p>
 
     <p>1st Shot Spread: ${firsaccurancy}</p>
         </div>
 
     <div class="weapondamage"> 
     <p class="gunnamestats">Damage: </p>
     <p>${startmeter} - ${endmeter} meters</p>
     <p>Head Damage: ${headshot}</p>
     <p>Body Damage: ${bodydamage}</p>
     <p>Leg Damage: ${legdamage}</p>
     </div>
   
    
    
    
        `
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })
}
function heavy(){

    fetch(gunslink)
    .then((response) => response.json())
    .then((data) => {
    
        let guns = data.data;
        //pistol
       
     let gunsfiltersidearm = guns.filter(function(guns) {
         return guns.category == "EEquippableCategory::Heavy"; });
         let sidearmstats = gunsfiltersidearm[0].weaponStats;
        let firerate = sidearmstats.fireRate;
        let magsize = sidearmstats.magazineSize
        let reloadtime = sidearmstats.reloadTimeSeconds
        let firsaccurancy =   sidearmstats.firstBulletAccuracy
    
               
        let equiptime = sidearmstats.equipTimeSeconds
        //damage
   let damage = sidearmstats.damageRanges
   let bodydamage = damage[0].bodyDamage
   let headshot = damage[0].headDamage
   let legdamage = damage[0].legDamage
   let endmeter = damage[0].rangeEndMeters
   let startmeter = damage[0].rangeStartMeters
   //damage1
   let bodydamage1 = damage[1].bodyDamage
   let headshot1 = damage[1].headDamage
   let legdamage1 = damage[1].legDamage
   let endmeter1 = damage[1].rangeEndMeters
   let startmeter1 = damage[1].rangeStartMeters
   //name
   let name = gunsfiltersidearm[0].displayName
        let gunsinfosidearm = document.getElementById("gunsinfo");
         
         gunsinfosidearm.innerHTML = 
         `
         <p class="gunnamestats">${name}</p>
     <div class="weapondetails">
         <div class="weaponspecs">
     <p>Fire Rate: ${firerate}</p>
     <p>Magazine: ${magsize}</p>
 
     <p>Reload Speed: ${reloadtime}</p>
     <p>Equip Time: ${equiptime}</p>
 
     <p>1st Shot Spread: ${firsaccurancy}</p>
         </div>
 
     <div class="weapondamage"> 
     <p class="gunnamestats">Damage: </p>
     <p>${startmeter} - ${endmeter} meters</p>
     <p>Head Damage: ${headshot}</p>
     <p>Body Damage: ${bodydamage}</p>
     <p>Leg Damage: ${legdamage}</p>
     </div>
     <div class="weapondamage"> 
     <p class="gunnamestats">Damage: </p>
     <p>${startmeter1} - ${endmeter1} meters</p>
     <p>Head Damage: ${headshot1}</p>
     <p>Body Damage: ${bodydamage1}</p>
     <p>Leg Damage: ${legdamage1}</p>
 
 </div>
    
     
    
    
        `
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })
}
function heavy1(){

    fetch(gunslink)
    .then((response) => response.json())
    .then((data) => {
    
        let guns = data.data;
        //pistol
       
     let gunsfiltersidearm = guns.filter(function(guns) {
         return guns.category == "EEquippableCategory::Heavy"; });
         let sidearmstats = gunsfiltersidearm[1].weaponStats;
        let firerate = sidearmstats.fireRate;
        let magsize = sidearmstats.magazineSize
        let reloadtime = sidearmstats.reloadTimeSeconds
        let firsaccurancy =   sidearmstats.firstBulletAccuracy
    
      
              
        let equiptime = sidearmstats.equipTimeSeconds
        //damage
   let damage = sidearmstats.damageRanges
   let bodydamage = damage[0].bodyDamage
   let headshot = damage[0].headDamage
   let legdamage = damage[0].legDamage
   let endmeter = damage[0].rangeEndMeters
   let startmeter = damage[0].rangeStartMeters
   //damage1
   let bodydamage1 = damage[1].bodyDamage
   let headshot1 = damage[1].headDamage
   let legdamage1 = damage[1].legDamage
   let endmeter1 = damage[1].rangeEndMeters
   let startmeter1 = damage[1].rangeStartMeters
   //name
   let name = gunsfiltersidearm[1].displayName
        let gunsinfosidearm = document.getElementById("gunsinfo");
         
         gunsinfosidearm.innerHTML = 
         `
         <p class="gunnamestats">${name}</p>
     <div class="weapondetails">
         <div class="weaponspecs">
     <p>Fire Rate: ${firerate}</p>
     <p>Magazine: ${magsize}</p>
 
     <p>Reload Speed: ${reloadtime}</p>
     <p>Equip Time: ${equiptime}</p>
 
     <p>1st Shot Spread: ${firsaccurancy}</p>
         </div>
 
     <div class="weapondamage"> 
     <p class="gunnamestats">Damage: </p>
     <p>${startmeter} - ${endmeter} meters</p>
     <p>Head Damage: ${headshot}</p>
     <p>Body Damage: ${bodydamage}</p>
     <p>Leg Damage: ${legdamage}</p>
     </div>
     <div class="weapondamage"> 
     <p class="gunnamestats">Damage: </p>
     <p>${startmeter1} - ${endmeter1} meters</p>
     <p>Head Damage: ${headshot1}</p>
     <p>Body Damage: ${bodydamage1}</p>
     <p>Leg Damage: ${legdamage1}</p>
 
 </div>
    
     
    
    
        `
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })
}