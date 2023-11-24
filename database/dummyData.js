const Climb = require("./example.js");

const climb0 = new Climb("Sparky", 4, "vert", "10/15/23", "This was my very first dyno", "https://source.unsplash.com/user/c_v_r/200x200");
const climb1 = new Climb("Jonny", 2, "overhang", "11/25/23", "This was hard", "https://source.unsplash.com/user/c_v_r/200x200");
const climb2 = new Climb("Dino", 4, "vert", "10/15/23", "This was easy", "https://source.unsplash.com/user/c_v_r/200x200");
const climb3 = new Climb("Sploosh", 4, "overhang", "10/17/23", "Dummy hard", "https://source.unsplash.com/user/c_v_r/200x200");
const climb4 = new Climb("Ricky", 4, "vert", "9/15/23", "fun little catch", "https://source.unsplash.com/user/c_v_r/200x200");
const climb5 = new Climb("...", 4, "slab", "10/9/23", "Slab be slabbin", "https://source.unsplash.com/user/c_v_r/200x200");

let arr = [climb0, climb1, climb2, climb3, climb4, climb5];

export default arr;
