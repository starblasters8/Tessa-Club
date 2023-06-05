const canvas = document.querySelector(".myCanvas");
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const g = canvas.getContext("2d");

const divBy = height/20
let clicks = 0;

const button = document.getElementById("button");
button.addEventListener("click", doColors);

let buttonWidth = Math.random()*(width/10)+width/10;
let buttonHeight = Math.random()*(height/10)+height/10;
button.style.width = buttonWidth+"px";
button.style.height = buttonHeight+"px";
button.style.left = Math.random()*(width-buttonWidth)+"px";
button.style.top = Math.random()*(height-buttonHeight)+"px";

g.fillRect(0, 0, width, height);
function doColors()
{
    document.title = "CLICK CLICK CLICK CLICK CLICK";
    for(let i = 0; i < 20; i++)
    {
        let newR, newG, newB;
        newR = Math.random() * 255;
        newG = Math.random() * 255;
        newB = Math.random() * 255;

        g.fillStyle = "rgb(" + newR + "," + newG + "," + newB + ")";
        g.fillRect(0, divBy*i, width, divBy);

        if(i == 10 || i == 5 || i == 15)
        {
            let textR, textG, textB;
            textR = 255-newR;
            textG = 255-newG;
            textB = 255-newB;

            g.fillStyle = "rgb(" + textR + "," + textG + "," + textB + ")";
            if(width > 500)
            {
                let equationFontSize = 0.027932960893854747*width-3.6312849162011176;
                g.font = equationFontSize + "px Arial";
                let equationTextSize = 0.18355945730247406*width-12.43415802075019;
                g.fillText("WOOOO!!! KEEP ON CLICKING!!!!", width/2-equationTextSize, divBy*i-5, width);
            }
        }
    }

    button.innerText = "WOW!!! YOU'RE REALLY^"+ clicks +" GOOD AT THIS!";
    if(clicks == 0)
        button.innerText = "WOW!!! YOU'RE GOOD AT THIS!";
    else if(clicks == 1)
        button.innerText = "WOW!!! YOU'RE REALLY GOOD AT THIS!";
    else if(clicks == 2)
        button.innerText = "WOW!!! YOU'RE REALLY REALLY GOOD AT THIS!";
    else if(clicks == 100)
        button.innerText = "Jeez you really don't have anything better to do do you?";
    else if(clicks == 1000)
        button.innerText = "If you get to this, I will bake you anything you want.";

    clicks++;

    buttonWidth = Math.random()*(width/10)+width/10;
    buttonHeight = Math.random()*(height/10)+height/10;
    button.style.width = buttonWidth+"px";
    button.style.height = buttonHeight+"px";
    button.style.left = Math.random()*(width-buttonWidth)+"px";
    button.style.top = Math.random()*(height-buttonHeight)+"px";
    let fontSize = Math.random()*(buttonHeight/8)+buttonHeight/16;
    button.style.font = fontSize+"px Comic Sans";


    newR = Math.random() * 255;
    newG = Math.random() * 255;
    newB = Math.random() * 255;
    textR = 255-newR;
    textG = 255-newG;
    textB = 255-newB;

    button.style.backgroundColor = "rgb(" + newR + "," + newG + "," + newB + ")";
    button.style.accentColor = "rgb(" + textR + "," + textG + "," + textB + ")";
    button.style.color = "rgb(" + textR + "," + textG + "," + textB + ")";
}