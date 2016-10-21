// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = -101;
    this.y = 225; //Change row
    this.genRan = Math.floor(Math.random() * 3);
    this.speed = 10;
    this.gameStart = true;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    if(this.gameStart){

        this.speed = Math.ceil(Math.random() * 8);

        if(this.genRan == 0){

            this.y = this.y - 83;

        }else if(this.genRan == 1){

            this.y = this.y - (83 * 2);

        }

        this.gameStart = false;

    }

    if(this.x <= 599) {
        this.x += this.speed;
    }else{

        this.x = -101;
        this.y = 225;
        this.speed = Math.ceil(Math.random() * 8);
        if(this.genRan == 0){

            this.y = this.y - 83;

        }else if(this.genRan == 1){

            this.y = this.y - (83 * 2);

        }

    }



};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(){

    this.sprite = 'images/char-horn-girl.png';
    this.x = 202;
    this.y = 400;

};

Player.prototype.update = function(dt){


};

Player.prototype.render = function() {

    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [new Enemy(),new Enemy(),new Enemy()];
var player = new Player();



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e){

    if(e.key === 'ArrowRight') {

        if(player.x + 101 >= 505){

        }else {

            player.x += 101;
            player.render();

        }

    }else if(e.key === 'ArrowLeft'){

        if(player.x - 101 < 0){

        }else {

            player.x -= 101;
            player.render();

        }

    }else if(e.key === 'ArrowUp'){

        if(player.y - 83 < 59){

            player.x = 202;
            player.y = 400;

        }else{

            player.y -= 83;
            player.render();

        }

    }else if(e.key === 'ArrowDown'){

        if(player.y + 83 > 400){

        }else{

            player.y += 83;
            player.render();

        }

    }

});
