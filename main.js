var canvas=new fabric.Canvas('myCanvas');
player_x=10; player_y=10;
biw=30
bih=30
var player_object="";
var block_image_object="";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img)
    {
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    })
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img)
    {
        block_image_object=Img;
        block_image_object.scaleToWidth(biw);
        block_image_object.scaleToHeight(bih);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    })
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey==true&& keyPressed=='80'){
        biw=biw+10
        bih=bih+10;
        document.getElementById("current_width").innerHTML=biw
        document.getElementById("current_height").innerHTML=bih
    }
    if (e.shiftKey==true&& keyPressed=='77'){
        biw=biw-10
        bih=bih-10;
        document.getElementById("current_width").innerHTML=biw
        document.getElementById("current_height").innerHTML=bih
    }
    if (keyPressed=='38'){
        up();
    }
    if (keyPressed=='40'){
        down();
    }
    if (keyPressed=='37'){
        left();
    }
    if (keyPressed=='39'){
        right();
    }
    if (keyPressed=='87'){
        new_image('Final_output.png');
        console.log("w")
    }
    if (keyPressed=='71'){
        new_image('hulk_face.png');
        console.log("g")
    }
    if (keyPressed=='76'){
        new_image('hulk_left_hand.png');
        console.log("l")
    }
    if (keyPressed=='84'){
        new_image('hulk_legs.png');
        console.log("t")
    }
    if (keyPressed=='82'){
        new_image('hulk_right_hand.png');
        console.log("r")
    }
    if (keyPressed=='89'){
        new_image('hulkd_body.png');
        console.log("y")
    }
    if (keyPressed=='68'){
        new_image('ironman_face.png');
        console.log("d")
    }
    if (keyPressed=='85'){
        new_image('ironman_body.png');
        console.log("u")
    }
    if (keyPressed=='67'){
        new_image('ironmoan_legs.png');
        console.log("c")
    }
}
function up() { 
    if(player_y >=0) 
    { player_y = player_y - bih;
        console.log("block image height = " + bih);
        console.log("When Up arrow key is pressed, X = " + player_x + " , Y = "+player_y);
        canvas.remove(player_object); player_update();
         } }
         function down()
         { if(player_y <=500) { player_y = player_y + bih;
            console.log("block image height = " + bih);
            console.log("When Down arrow key is pressed, X = " + player_x + " , Y = "+player_y);
            canvas.remove(player_object); player_update();
        } }
        function left()
         { if(player_x >0) { player_x = player_x - biw;
            console.log("block image width = " + biw);
            console.log("When Left arrow key is pressed, X = " + player_x + " , Y = "+player_y);
            canvas.remove(player_object); player_update();
        } } function right()
        { if(player_x <=850) { player_x = player_x + biw;
            console.log("block image width = " + biw);
            console.log("When Right arrow key is pressed, X = " + player_x + " , Y = "+player_y);
            canvas.remove(player_object); player_update();
        } }