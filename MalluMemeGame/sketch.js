let x;
let bullets = [];
let enemies = [];
let score = 0;
let voiceMamu;
let voicePeter;
// let victoryAudioMamu;
// let victoryAudioMamuObject = {
//   constructor(audioPath) {
//     this.audio = loadSound(audioPath);
//   },

//   playAudio() {
//     if (!this.audio.isPlaying()) {
//       this.audio.play();
//     }
//   },
// };

// function preload() {
//   // Ensure the .ttf or .otf font stored in the assets directory
//   // is loaded before setup() and draw() are called
//   // font = loadFont("PressStart2P-Regular.ttf");
// }

function preload() {
  voiceMamu = new loadSound("mamukoyaAudio.mp3");
  voicePeter = new loadSound("peterGriffinAudio.mp3");
  imgDragon = loadImage("dragon2.png");
  imgVillain = loadImage("crab.png");
  imgFireball = loadImage("fireball1.png");
  imgStarry = loadImage("starrysky.jpg");
  imgCloudy = loadImage("cloudysky.jpg");
  imgMamu = loadImage("mamukoyaBgRemoved.png");
  imgCoconut = loadImage("coconut.png");
  imgGangster1 = loadImage("gangster1.png");
  imgGangster2 = loadImage("gangster2.png");
  // victoryAudioMamu = new victoryAudioMamuObject("mamukoyaAudio.mp3");
}

function setup() {
  createCanvas(700, 675);
  // textFont(font);
  // textSize(fontsize);
  // voiceMamu = loadSound("mamukoyaAudio.mp3");
  // voicePeter = loadSound("peterGriffinAudio.mp3");
  x = 0;
  for (let i = 0; i < 10; i++) {
    let enemy = {
      x: random(0, width),
      y: random(-1200, 0),
    };
    enemies.push(enemy);
  }

  // tryin to create infinite bullets
  for (let i = 0; i < 100; i++) {
    let bullet = {
      x: mouseX,
      y: height - 120,
    };
    bullets.push(bullet);
  }
}

function draw() {
  background(51);
  background(imgCloudy);
  rectMode(CENTER);
  image(imgMamu, mouseX, height - 100, 100, 75, 90);
  // x += 2;

  // move and draw the bullets
  for (let bullet of bullets) {
    bullet.y -= 5;
    image(imgCoconut, bullet.x, bullet.y, 40, 30);
  }

  // creating enemies
  for (let enemy of enemies) {
    enemy.y += 1;
    image(imgGangster2, enemy.x, enemy.y, 60, 75);

    // losing condition
    if (enemy.y > height) {
      text("You Lose", 100, 300);
      // text("You Lose");
      noLoop();
    }
  }

  // killing enemies
  for (let enemy of enemies) {
    for (let bullet of bullets) {
      if (dist(enemy.x, enemy.y, bullet.x, bullet.y) < 10) {
        enemies.splice(enemies.indexOf(enemy), 1);
        bullets.splice(bullets.indexOf(bullet), 1);
        score++;
        if (score == 10) {
          text("You Win", 100, 300);
          noLoop();
          voiceMamu.play();
          // victoryAudioMamu.playAudio();
        }
      }
      // score++;
      console.log(score);
    }
  }
  text(score, 25, 25);
}

// bullets spawn on click
function mousePressed() {
  let bullet = {
    x: mouseX,
    y: height - 120,
  };
  bullets.push(bullet);
}

if (x > width) {
  x = 0;
}

// function drawSpacecraft(x, y) {
//   push();
//   translate(x, y);
//   fill(200);
//   ellipse(0, 0, 60, 30); // Body
//   fill(255, 0, 0);
//   triangle(-30, -15, -30, 15, -50, 0); // Tail
//   fill(100);
//   rect(-20, -20, 20, 40); // Wing
//   pop();
// }
