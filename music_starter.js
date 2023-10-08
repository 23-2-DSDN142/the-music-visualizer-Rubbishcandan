
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(0)
  textFont('Helvetica'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);

 var BuildingHeight = [30,50,70]; 
 var BuildingColour = ['#dd78ae','#20b0b1','#f7f383','#ad7cb8']
 let BuildingY = 400
 push()
 stroke('#E93CAC');
  let lengthofline3 = 1300
  let linestart3 = 0
  let lineend3 = linestart3 + lengthofline3
  let linestep3 = 20;
  let linestep4 = 20;

  for(let i=1; i < 90; i++){
    line(linestart3, linestep3 * i, lineend3, linestep3 * i)
    line(linestep4 * i, linestart3, linestep4 * i, lineend3)
  }
pop()

  let color1 = color('#fad715')
  let color2 = color('#9f53e8')
  strokeWeight(3)
  for(let i = 0; i<420; i++){
  let gradientAmount = map(i,0,420,0,1)
  let strokeColor = lerpColor(color1,color2,gradientAmount)
  stroke(strokeColor)
  line(0,i,width,i)
  }

  let drummap = map(drum,0,100,0,40)
  let lengthofline = 100
  let linestart = 100 
  let lineend = linestart-lengthofline 

  for(let i = 1; i <= drummap; i++){
  var linestep = i*10; 
  line(linestart, linestep, lineend, linestep)
  }
  
  let drummap2 = map(drum,0,100,0,40)
  let lengthofline2 = 100
  let linestart2 = 1280 
  let lineend2 = linestart2-lengthofline2 

  for(let i = 1; i <= drummap2; i++){
  var linestep2 = i*10; 
  line(linestart2, linestep2, lineend2, linestep2)
  }



 //  let bar_spacing = height / 10;
  // let bar_height = width / 12;
  // let bar_pos_x = width / 2;
 

   var barheight = map(drum, 0, 100, 50,500)
   


   var basscolourpulse = map(bass, 50 , 100, 0, 255)
  push()
  fill(29, 219, 219,basscolourpulse)
  triangle(655,550,490,300,800,225)
  pop()

   fill('#fa6700')
   ellipse(640,350, 200)


   push()
   noStroke()
   fill(159, 83, 232,255)
   rect(635,410,1300,5)
   pop()
   
   push()
   noStroke()
   fill(159, 83, 232,255)
   rect(640,395,200,5)
   pop()

   push()
   noStroke()
   fill(159, 83, 232,255)
   rect(640,380,190,5)
   pop()

   push()
   fill('#4b1445')
   quad(0,720,1280,720,660,400,620,400)
   pop()

   push()
   strokeWeight(2)
   fill(BuildingColour[1])
   rect(50,BuildingY+5,40,BuildingHeight[0])
   fill(BuildingColour[0])
   rect(100,BuildingY-15,50,BuildingHeight[2])
   fill(BuildingColour[1])
   rect(160,BuildingY-5,60,BuildingHeight[1])
   fill(BuildingColour[2])
   rect(215,BuildingY+5,40,BuildingHeight[0])
   fill(BuildingColour[3])
   rect(270,BuildingY-5,60,BuildingHeight[1])
   fill(BuildingColour[2])
   rect(330,BuildingY-15,50,BuildingHeight[2])
   fill(BuildingColour[3])
   rect(380,BuildingY+5,40,BuildingHeight[0])
   fill(BuildingColour[0])
   rect(430 ,BuildingY-15,50,BuildingHeight[2])
   fill(BuildingColour[2])
   rect(490,BuildingY-5,60,BuildingHeight[1])
   pop()
   //fill(0)
   //rect(width/3, barheight,50,100)
  // rect(width/1.5, barheight,50,100)


   // vocal bar is red
   //fill(200, 0, 0);
   //rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
   //fill(0);
   //text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
   // drum bar is green
   //fill(0, 200, 0);
   //rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
   //fill(0);
   //text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
   // bass bar is blue
   //fill(50, 50, 240);
   //rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
   //fill(0);
   //text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
   // other bar is white
   //fill(200, 200, 200);
   //rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
   //fill(0);
   //text"other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
   //fill(255, 255, 0);
 
   // display "words"
   //textAlign(CENTER);
   //textSize(vocal);
   //text(words, width/2, height/3);
}