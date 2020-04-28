function setup() {
  createCanvas(200,200);
}

function draw() {
  background(255,255,255); 
 for (var i = 10; i<190; i = i+25){
     drop = new raindrop(i, 10);
  } 
 for (var j = 20; j<180; j = j+20){
      drop2 = new bigR(j, 20);
   }
  for (var i = 15; i<185; i = i+25){
      drop3 = new raindrop(i, 35);
     }
  for (var j = 20; i<190; i = i+25){
      drop4 = new bigR(i, 45);
     }
  for (var i = 20; i<190; i = i+25){
      drop5 = new raindrop(i, 55);
     }
  for (var j = 20; j<180; j = j+20){
      drop6 = new bigR(j, 65);
     }
  for (var i = 15; i<185; i = i+25){
      drop7 = new raindrop(i, 75);
      }
  for (var j = 20; i<190; i = i+25){
      drop8 = new bigR(i, 85);
       }
  for (var i = 10; i<190; i = i+25){
       drop9 = new raindrop(i, 95);
      } 
  for (var j = 20; j<180; j = j+20){
     drop10 = new bigR(j, 100);
       }
  for (var i = 15; i<185; i = i+25){
     drop11 = new raindrop(i, 110);
        }
   for (var j = 20; i<190; i = i+25){
     drop12 = new bigR(i, 120);
         }
  for (var i = 10; i<190; i = i+25){
      drop13 = new raindrop(i, 130);
     } 
  for (var j = 20; j<180; j = j+20){
      drop14 = new bigR(j, 145);
       }
  for (var i = 15; i<185; i = i+25){
       drop15 = new raindrop(i, 155);
        }
  for (var j = 20; i<190; i = i+25){
        drop16 = new bigR(i, 165);
         }
  for (var i = 10; i<190; i = i+25){
        drop17 = new raindrop(i, 170);
        }
  for (var j = 20; j<180; j = j+20){
        drop18 = new bigR(j, 180);
         } 
  for (var i = 15; i<185; i = i+25){
        drop19 = new raindrop(i, 190);
          }
   for (var j = 20; i<190; i = i+25){
        drop20 = new bigR(i, 200);
           }
  drawSprites();
}