import React from 'react';
import f9c from './Mad Tower Tycoon.jpeg';//MadTowerTycoon
import f9d from './Bus Drive Simulator.jpeg';//BusDriveSimulator
import fa1 from './Theme Park Simulator.jpeg';//ThemeParkSimulator
import fa3 from './My Universe School Teacher.jpeg';//MyUniverseSchoolTeacher
import fa6 from './Monster Truck Championship.jpeg';//MonsterTruckChampionship
import fa8 from './Angry Birds Star Wars.png';//AngryBirdsStarWars
import faa from './Need for Speed Hot Pursuit.jpg';//NeedforSpeedHotPursuit
import fac from './Crab Cakes Rescue.png';//CrabCakesRescue
import fb2 from './Spaceland.jpg';//SpaceLand
import fb6 from './Port Royale 4.jpeg'; //PortRoyale4
import fb8 from './WWE 2K Battlegrounds.jpeg';//WWE2kBattlegrounds
import fba from './Separation.jpg';//Separation
import fbc from './Marvels Spider Man Miles Morales.jpeg';//MarvelsSpiderMan
import fbe from './Hunting Simulator.jpeg';//HuntingSim
import fc0 from './Castle Storm 2.jpeg';//CastleStorm2
import fc2 from './Blair Witch.png';//BlairWitch

function GameIcons({id}) {
    let lastThree = id.substr(id.length - 3);
    console.log(lastThree);
    if (lastThree === 'f9c'){return(<img src={f9c} alt="img-logo"></img>)};
    if (lastThree === 'f9d'){return(<img src={f9d} alt="img-logo"></img>)};
    if (lastThree === 'fa1'){return(<img src={fa1} alt="img-logo"></img>)};
    if (lastThree === 'fa3'){return(<img src={fa3} alt="img-logo"></img>)};
    if (lastThree === 'fa6'){return(<img src={fa6} alt="img-logo"></img>)};
    if (lastThree === 'fa8'){return(<img src={fa8} alt="img-logo"></img>)};
    if (lastThree === 'faa'){return(<img src={faa} alt="img-logo"></img>)};
    if (lastThree === 'fac'){return(<img src={fac} alt="img-logo"></img>)};
    if (lastThree === 'fb2'){return(<img src={fb2} alt="img-logo"></img>)};
    if (lastThree === 'fb6'){return(<img src={fb6} alt="img-logo"></img>)};
    if (lastThree === 'fb8'){return(<img src={fb8} alt="img-logo"></img>)};
    if (lastThree === 'fba'){return(<img src={fba} alt="img-logo"></img>)};
    if (lastThree === 'fbc'){return(<img src={fbc} alt="img-logo"></img>)};
    if (lastThree === 'fbe'){return(<img src={fbe} alt="img-logo"></img>)};
    if (lastThree === 'fc0'){return(<img src={fc0} alt="img-logo"></img>)};
    if (lastThree === 'fc2'){return(<img src={fc2} alt="img-logo"></img>)};
    return (<img alt="img-logo"></img>)
}

export default GameIcons;