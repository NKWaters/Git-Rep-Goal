var canvas = new fabric.Canvas("myCanvas");
block_image_width = 30;
block_image_height = 30;
ball_y = 10;
ball_x = 10;
var ball_object = "";
var block_image_object = "";
goal_x = 400;
goal_y = 400;

function ball_update() {
fabric.image.fromURL("ball.png", function(Img) {
   ball_object = Img;
   ball_object.scaleToHeight(5);
   ball_object.scaleToWidth(5);
   ball_object.set({
        top: ball_y,
        left: ball_x
   });
   canvas.add(ball_object);  });

function new_image(get_image) {
    fabric.image.fromURL(get_image, function(Img) {
         block_image_object = Img;
         block_image_object.scaleToWidth(block_image_width);
         block_image_object.scaleToHeight(block_image_width);
         block_image_object.set({
             top: goal_y,
             left: goal_x
           });
             canvas.add(block_image_object);
             })

window.addEventListener("keydown", my_keydown)
function my_keydown(e) {
          keyPressed = e.keyCode; 
            if (keyPressed == '38') {
                Up();
            }
   
            if (keyPressed == '40') {
                Down();
            }

            if (keyPressed == '37') {
                Left();
            }

            if (keyPressed == '39') {
                Right();
            }

            if (keyPressed == '66') {
                new_image('ball.png')
            }

            if (keyPressed == '71') {
                new_image('golf-h.png');
            }
}
            
            function Up() {
              if (ball_y>=0) {
                  ball_y = ball_y - block_image_height;
                  canvas.remove(ball_object);
                  ball_update();
                }
            }

            function Down() {
              if (ball_y<=600) {
                  ball_y = ball_y + block_image_height;
                  canvas.remove(ball_object);
                  ball_update();
                }
            }

            function Left() {
              if (ball_x>=0) {
                  ball_x = ball_x - block_image_height;
                  canvas.remove(ball_object);
                  ball_update();
                }
            }  
 
            function Right() {
              if (ball_x<=850) {
                  ball_x = ball_x + block_image_height;
                  canvas.remove(ball_object);
                  ball_update();
                }
            }
        }
    }