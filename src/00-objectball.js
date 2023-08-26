const object = {
    home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
            "Alan Anderson" : {
                number:     0,
                shoe:       16,
                points:     22,
                rebounds:   12,
                assists:    12,
                steals:     3,
                blocks:     1,
                slamDunks:  1,
            },
            "Reggie Evans" :{
                number:     30,
                shoe:       14,
                points:     12,
                rebounds:   12,
                assists:    12,
                steals:     12,
                blocks:     12,
                slamDunks:  7,
            }, 
            "Brook Lopez" : {
                number:     11,
                shoe:       17,
                points:     17,
                rebounds:   19,
                assists:    10,
                steals:     3,
                blocks:     1,
                slamDunks:  15,
            },
            "Mason Plumlee" : {
                number:     1,
                shoe:       19,
                points:     26,
                rebounds:   12,
                assists:    6,
                steals:     3,
                blocks:     8,
                slamDunks:  5,
            },
            "Jason Terry" : {
                number:     31,
                shoe:       15,
                points:     19,
                rebounds:   2,
                assists:    2,
                steals:     4,
                blocks:     11,
                slamDunks:  1,
            },
        },
    }, 
    away:  {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
            "Jeff Adrien" : {
                number:     4,
                shoe:       18,
                points:     10,
                rebounds:   1,
                assists:    1,
                steals:     2,
                blocks:     7,
                slamDunks:  2,
            },
            "Bismak Biyombo" :{
                number:     0,
                shoe:       16,
                points:     12,
                rebounds:   4,
                assists:    7,
                steals:     7,
                blocks:     15,
                slamDunks:  10,
            }, 
            "DeSagna Diop" : {
                number:     2,
                shoe:       14,
                points:     24,
                rebounds:   12,
                assists:    12,
                steals:     4,
                blocks:     5,
                slamDunks:  5,
            },
            "Ben Gordon" : {
                number:     8,
                shoe:       15,
                points:     33,
                rebounds:   3,
                assists:    2,
                steals:     1,
                blocks:     1,
                slamDunks:  0,
            },
            "Brendan Haywood" : {
                number:     33,
                shoe:       15,
                points:     6,
                rebounds:   12,
                assists:    12,
                steals:     22,
                blocks:     5,
                slamDunks:  12,
            },
        },
    },
};

const gameObject = () =>  object;
// console.log(gameObject())

function homeTeamName() {
    let object = gameObject()
    return object['home']['teamName']
}
//console.log(homeTeamName())

const game = gameObject()
const numPointsScored = (playerName) => {

    for (let team in game){
        const players = game[team].players

        for (let player in players){

                if (player === playerName){

                console.log (`points:`, players[player].points)
                return players[player].points
            }
        } 
    }
}
numPointsScored("Alan Anderson");

const shoeSize = (playerName) => {
    for (let team in game){
        const players = game[team].players

        for (let player in players){

                if (player === playerName){

                console.log (`shoeSize:`, players[player].shoe)
                return players[player].shoe
            }
        } 
    }
}
shoeSize('Bismak Biyombo')

/////////////////////////////////
function teamColors(name) {
    for (let location in game) {
        const team = game[location].teamName        
        if (name === team){
            console.log(game[location].colors);
            return game[location].colors    
        }
    }
}
teamColors('Charlotte Hornets')

/////////////////
const teamNames = () => {
    const teamNamesArr = [];
    for (let location in game) {
    teamNamesArr.push(game[location].teamName)
    }
    console.log(teamNamesArr);
    return teamNamesArr
}
teamNames()

//////////////
const teamNumbers = (name) => {
const jersiesArr = [];    
    for (const team in game) {
        if (name === game[team].teamName){
            const players = game[team].players
            for (let playerName in players){
                const jersy = players[playerName].number
                jersiesArr.push(jersy)
                
            } 
            console.log(jersiesArr)
            return jersiesArr
            
        }        
    }
}
teamNumbers("Charlotte Hornets")

///////////
const playerStats = (playerName) => {
    for (let team in game){
        const players = game[team].players
        for (let player in players){

                if (player === playerName){

                console.log (`the stats are`, players[player])
                return players[player]
            }
        } 
    }
}
//playerStats('Alan Anderson');

///////////////
const bigShoesRebounds = () => {
    const game = gameObject();
    let largestShoeSize = -1;
    let reboundsForLargestShoeSize = -1;
    let playerLS

    for (let team in game) {
        const players = game[team].players;

        for (let player in players) {
            const currentShoeSize = players[player].shoe;

            if (currentShoeSize > largestShoeSize) {
                largestShoeSize = currentShoeSize;
                reboundsForLargestShoeSize = players[player].rebounds;
            }
        }
    }

    console.log("Rebounds for with the largest shoe size:", reboundsForLargestShoeSize);
    return reboundsForLargestShoeSize, playerLS;
};

bigShoesRebounds();

