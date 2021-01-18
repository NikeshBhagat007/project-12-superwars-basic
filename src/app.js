const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];
    for(let i=0 ;players.length;i++)
    {
        detailedPlayers[i] ={
            name     : players[i],
            strength : getRandomStrength(),
            image    : "images/super-" + (i+1) +".png",
            type     : getType(i)
        }
    }
    return detailedPlayers;
}

const getType = (index) =>
{
    if(index % 2 === 0)
    {
        return "hero";
    }
    else
    {
        return "villain";
    }
}

// getting random strength
const getRandomStrength = () => {
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
    return Math.floor(Math.random()* 100);
}

const buildPlayers = (players, type) => {
    let fragment = '';

    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here
    for (var i = 0; i < players.length; i++)
     {
        player = `<div class="player">
              <img src="${players[i].image}" alt="">
              <div class="name">${players[i].name}</div>
              <div class="strength">${players[i].strength}</div>
              </div>`;
        if (players[i].type == type)
        {
            fragment += player;
        }
    }
    return fragment;
}
// Display players in HTML
const viewPlayers = (players) => {

    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');

}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}