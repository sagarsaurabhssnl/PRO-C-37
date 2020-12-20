class Home {
    constructor() {

    }

    show() {
        if (gameState !== "info") {
            background("cyan");
            dog.addImage(dogImg);
            fill("#4fa367");
            rect(200, 70, 600, 470);
            fill("#730016");
            rect(1000, 70, 310, 470);
            drawSprites();
            push();
            stroke(5);
            textSize(20);
            text("Press FEED button to feed the dog", 500, 20);
            if (money === 0) {
                text("You have no money to buy, Wait for pocket money!", 400, 590);
            } else if (food < 100) {
                text("Press ADD FOOD button to buy some food", 460, 590);
            }
            if (food === 100) {
                text("You are out of space!", 1000, 560);
            }
            text("Food left: " + food, 960, 50);
            text("Money left: " + money, 1140, 50);
            text("Food time: " + foodtimetext, 10, 50);
            text("Last Fed: " + lastFed, 10, 80);
            text("Pockey Money Timer : " + timer, 10, 20);
            pop();
            foodTime();
            resetTimer();
            button1.mousePressed(() => {
                if (foodtime === 1 && food > 0) {
                    if (keypress === 0) {
                        lastFed = time;
                        keypress = 1;
                        upKey(-1);
                    }
                }
            });
            button2.mousePressed(() => {
                if (money > 0) {
                    downKey(1);
                }
            });
        }
    }
    hide() {
        clear();
        button1.hide();
        button2.hide();
    }

    unhide() {
        button1.style.display = "block";
        button2.style.display = "block";
    }
}