import { GameTemplate } from "./GameTemplate.js"
import { GameObject, MovableGameObject, Ball, Mode } from "../GameObject.js";
import { Paddle } from "./Pong.js"
export class FallingStones extends GameTemplate {
    start(){
        this.gameOver = false;
        this.player = new Paddle(175, 450, 50, 50, 10);
        this.bullets = [];
        this.pew();
        this.stones = [];
        this.addStones();   
        let n;  
        let schuss = 20;
        this.zähler();
    }

    bindControls(){
        this.inputBinding = {
            "left": this.player.left.bind(this.player), 
            "right": this.player.right.bind(this.player),
            "up": this.pew.bind(this),
        };
    }
    zähler(){
        if(!this.schuss){
            this.schuss=0;
        }
        if(this.schuss < 40){
            this.schuss = this.schuss + 1;
        }
        else{
            this.schuss = 40;
        }
    }
    pew(){        
        if(this.schuss === 40){
            let x = this.player.x+20;
            let y = 450;//this.player.y;
            this.bullets.push(new MovableGameObject(x, y, 10, 10, "#6bd26b", 0, -3));
            this.schuss = 0;
        }
        else{}
    }
    addStones(){      
        
        if (!this.n){
            this.n=1;
        }
        if (this.n === 120){
            let x = 325 * (Math.random()) + 25;
            let y = -100;
            this.stones.push(new MovableGameObject(x, y, 50, 100, "#6bd26b", 0, 2));
            this.n=1;
        }
        else {
            this.n=this.n+1;
        }
    }
    
    update(ctx){
        this.player.update(ctx);
        this.moveBullets();  
        this.moveStones(); 
        this.addStones();
        this.zähler(); 
        this.Treffer();   
    }
    moveBullets(ctx){
        for (let i = this.bullets.length; i--; 1) {
            this.bullets[i].update(ctx);

            if (this.bullets[0].y < 0) {
                this.bullets.splice(0, 1);
            }
        }
    }
    moveStones(ctx){
        for (let i = this.stones.length; i--; 1){
            this.stones[i].update(ctx);

            if (this.stones[0].y > 500){
              this.stones.splice(0,1);
            }
        }
    } 
    Treffer(){
        for (let i = this.stones.length; i--; 1){
            for (let j = this.bullets.length; j--; 1){
                if (this.stones[i].x < this.bullets[j].x + this.bullets[j].width &&
                    this.stones[i].x + this.stones[i].width > this.bullets[j].x &&
                    this.stones[i].y < this.bullets[j].y + this.bullets[j].height &&
                    this.stones[i].y + this.stones[i].height > this.bullets[j].y){
                        this.stones.splice(i,1);
                        this.bullets.splice(j,1);
                }
            }

        }

    }


    draw(ctx){
        this.player.draw(ctx);
        this.bullets.forEach(bullet => {
            bullet.draw(ctx);
        });
        this.stones.forEach(Stone =>{
            Stone.draw(ctx);
        });
    }

    static get NAME() {
        return "Falling Stones";
    }
}
