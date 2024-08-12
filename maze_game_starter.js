
/* 
@title: maze_game_starter
@author: Cheru Berhanu
@tags: []
@addedOn: 2023-08-08
*/

    const player = "p"
    const wall = "w"
    const goal = "g"

setLegend(
	[ player, bitmap`
................
.0.0.000000.0.0.
.0.0.03..30.0.0.
.000.0....0.000.
..0..033330..0..
..0.00000000.0..
000.0......0.000
0...0......0...0
0.000......000.0
0.0.0..3...0.0.0
000.0......0.000
....00000000....
....0......0....
...00......00...
...0........0...
..00........00..` ],
    [ wall, bitmap`
2222222222222222
2333333233333323
2333333233333323
2333333233333323
2222222222222222
3333233333323333
3333233333323333
3333233333323333
2222222222222222
3233333323333332
3233333323333332
3233333323333332
2222222222222222
3333323333332333
3333323333332333
3333323333332333` ],
    [ goal, bitmap`
0000000000000000
0233333333333320
0324444444444230
0342HHHHHHHH2430
034H26666662H430
034H62999926H430
034H69288296H430
034H69822896H430
034H69822896H430
034H69288296H430
034H62999926H430
034H26666662H430
0342HHHHHHHH2430
0324444444444230
0233333333333320
0000000000000000` ]
)

setSolids([])

let level = 0
const levels = [
    map`
p
g`,
    map`
pw...
.w.w.
.w.w.
...wg`
]

setMap(levels[level])

setPushables({
	[ player ]: []
})

setSolids([player, wall]);

onInput("w", () => {
	getFirst(player).y -= 1
})

onInput("s", () => {
    console.log("kaka");
	getFirst(player).y += 1
})

onInput("a", () => {
	getFirst(player).x -= 1
})

onInput("d", () => {
	getFirst(player).x += 1
})

afterInput(() => {
    const numberOfGoalsCovered = tilesWith(player, goal)

    if (numberOfGoalsCovered.length >= 1) {
        level = level + 1;
        if (level < levels.length) {
          setMap(levels[level]);
        } else {
          addText("you win!", { y: 4, color: color`7`});
          const melody = tune`
360.36036036036035,
90.09009009009009: C5^90.09009009009009,
90.09009009009009: C5^90.09009009009009,
90.09009009009009: C5^90.09009009009009,
90.09009009009009: C5^90.09009009009009,
90.09009009009009: C5^90.09009009009009,
90.09009009009009: C5^90.09009009009009,
90.09009009009009: D5^90.09009009009009 + G4/90.09009009009009,
90.09009009009009: D5^90.09009009009009 + E5^90.09009009009009 + G4/90.09009009009009,
90.09009009009009: E5^90.09009009009009 + G4/90.09009009009009,
90.09009009009009: E5^90.09009009009009 + G4/90.09009009009009,
90.09009009009009: E5^90.09009009009009 + F5^90.09009009009009 + C5~90.09009009009009 + G4/90.09009009009009,
90.09009009009009: F5^90.09009009009009 + E5^90.09009009009009 + C5~90.09009009009009 + G4/90.09009009009009,
90.09009009009009: F5^90.09009009009009 + D5^90.09009009009009 + C5~90.09009009009009 + G4/90.09009009009009,
90.09009009009009: F5^90.09009009009009 + G5^90.09009009009009 + D5^90.09009009009009 + C5~90.09009009009009 + G4/90.09009009009009,
90.09009009009009: G5^90.09009009009009 + D5^90.09009009009009 + G4/90.09009009009009,
90.09009009009009: G5^90.09009009009009 + D5^90.09009009009009 + C5^90.09009009009009 + E5-90.09009009009009 + G4/90.09009009009009,
90.09009009009009: E5-90.09009009009009 + G4/90.09009009009009,
90.09009009009009: E5-90.09009009009009,
90.09009009009009: E5-90.09009009009009 + D5-90.09009009009009,
810.8108108108108`
          playTune(melody)
        }
    }
})