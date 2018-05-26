// this is the variable your picker should change
var pickedColorRed = 0;
var pickedColorGreen = 0;
var pickedColorBlue = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(255);
    //Text "Click to add colour"
    fill(0);
    textSize(50);
    text("Click to add the corresponding colour", width/2-440, height/2);
    textSize(25);
    strokeWeight(2);

    if(frameCount % 120 < 40 && frameCount % 120 >= 0){
      if(buttonRed(150, 0, 100, 200) && pickedColorRed < 255){
        console.log(pickedColorRed, pickedColorGreen, pickedColorBlue);
        return pickedColorRed = pickedColorRed + 1;
      }
      if(buttonGreen(width/2-50, 0, 100, 200) && pickedColorGreen < 255){
        console.log(pickedColorRed, pickedColorGreen, pickedColorBlue);
        return pickedColorGreen = pickedColorGreen + 1;
      }
      if(buttonBlue(width-250, 0, 100, 200) && pickedColorBlue < 255){
        console.log(pickedColorRed, pickedColorGreen, pickedColorBlue);
        return pickedColorBlue = pickedColorBlue + 1;
      }
      fill(0);
      text("GREEN", width/2-40, 100);
      text("BLUE", width-230, 100);
      text("RED", 180, 100);
    }

    if (frameCount % 120 < 80 && frameCount % 120 >= 40) {
      if(buttonRed(width/2-50, 0, 100, 200) && pickedColorRed < 255){
        console.log(pickedColorRed, pickedColorGreen, pickedColorBlue);
        return pickedColorRed = pickedColorRed + 1;
      }
      if(buttonGreen(width-250, 0, 100, 200) && pickedColorGreen < 255){
        console.log(pickedColorRed, pickedColorGreen, pickedColorBlue);
        return pickedColorGreen = pickedColorGreen + 1;
      }
      if(buttonBlue(150, 0, 100, 200) && pickedColorBlue < 255){
        console.log(pickedColorRed, pickedColorGreen, pickedColorBlue);
        return pickedColorBlue = pickedColorBlue + 1;
      }
      fill(0);
      text("GREEN", width-240, 100);
      text("BLUE", 170, 100);
      text("RED", width/2-20, 100);
    }

    if (frameCount % 120 < 120 && frameCount % 120 >= 80) {
      if(buttonRed(width-250, 0, 100, 200) && pickedColorRed < 255){
        console.log(pickedColorRed, pickedColorGreen, pickedColorBlue);
        return pickedColorRed = pickedColorRed + 1;
      }
      if(buttonGreen(150, 0, 100, 200) && pickedColorGreen < 255){
        console.log(pickedColorRed, pickedColorGreen, pickedColorBlue);
        return pickedColorGreen = pickedColorGreen + 1;
      }
      if(buttonBlue(width/2-50, 0, 100, 200) && pickedColorBlue < 255){
        console.log(pickedColorRed, pickedColorGreen, pickedColorBlue);
        return pickedColorBlue = pickedColorBlue + 1;
      }
      fill(0);
      text("GREEN", 160, 100);
      text("BLUE", width/2-30, 100);
      text("RED",width-220, 100);
    }

    // Draw the pigment in the cup
    fill(pickedColorRed, pickedColorGreen, pickedColorBlue);
    rect(mouseX-50, height/2+100, 100, 200);
    // Draw the cup
    fill(255);
    rect(mouseX-50, height/2+100, 100, 200-((pickedColorRed+pickedColorGreen+pickedColorBlue)*200/765));
    // display the currently "picked" colour in the bottom-right
    fill(pickedColorRed, pickedColorGreen, pickedColorBlue);
    rect(width-100, height-100, 100, 100);

}

function buttonRed(x, y, w, h){
    fill(255,0,0);
    triangle(x, y+h, x+w, y+h, x+w/2, y+h+h/4);
    rect(x, y, w, h);
    return mouseIsPressed && mouseX >= x && mouseX <= x + w && mouseY >= y && mouseY <= y + h
}

function buttonGreen(x, y, w, h){
    fill(0,255,0);
    triangle(x, y+h, x+w, y+h, x+w/2, y+h+h/4);
    rect(x, y, w, h);
    return mouseIsPressed && mouseX >= x && mouseX <= x + w && mouseY >= y && mouseY <= y + h
}

function buttonBlue(x, y, w, h){
    fill(0,0,255);
    triangle(x, y+h, x+w, y+h, x+w/2, y+h+h/4);
    rect(x, y, w, h);
    return mouseIsPressed && mouseX >= x && mouseX <= x + w && mouseY >= y && mouseY <= y + h
}
