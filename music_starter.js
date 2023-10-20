
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(0)
  textFont('Helvetica'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);

  var OtherHeightModifier = map(drum, 0, 100,0,50) //drum map for buildings 
 var BuildingHeight = [OtherHeightModifier+30,OtherHeightModifier+50,OtherHeightModifier+70]; 
 var BuildingColour = ['#dd78ae','#20b0b1','#f7f383','#ad7cb8'] //teal,pink,yellow and greenish colour
 let BuildingY = 400

 var GridPulse = map(other, 55, 80,2,4.5) //map for making pink lines move
 push()
 stroke('#E93CAC'); //pink
 strokeWeight(GridPulse)
  let lengthofline3 = 1300
  let linestart3 = 0
  let lineend3 = linestart3 + lengthofline3
  let linestep3 = 20;
  let linestep4 = 20;

  for(let i=1; i < 90; i++){  //for loop to make horozontal and straight lines
    line(linestart3, linestep3 * i, lineend3, linestep3 * i)
    line(linestep4 * i, linestart3, linestep4 * i, lineend3)
  }
pop()

  let color1 = color('#fad715') //yellow
  let color2 = color('#9f53e8') //purple
  strokeWeight(3)
  for(let i = 0; i<420; i++){ //for loop for gradient
  let gradientAmount = map(i,0,420,0,1)// map for colour gradient
  let strokeColor = lerpColor(color1,color2,gradientAmount) //colour blender
  stroke(strokeColor)
  line(0,i,width,i)
  }

  let drummap = map(drum,0,100,0,40) //map for drum
  let lengthofline = 100
  let linestart = 100 
  let lineend = linestart-lengthofline 

  for(let i = 1; i <= drummap; i++){ //for loop for top left bars 
  var linestep = i*10; 
  line(linestart, linestep, lineend, linestep)
  }
  
  let drummap2 = map(drum,0,100,0,40)  //2nd map for drums 
  let lengthofline2 = 100
  let linestart2 = 1280 
  let lineend2 = linestart2-lengthofline2 

  for(let i = 1; i <= drummap2; i++){ //for loop for top right bars 
  var linestep2 = i*10; 
  line(linestart2, linestep2, lineend2, linestep2)
  }


  push()   //all code below for center buildings
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
  fill(BuildingColour[0])
  rect(780,BuildingY-15,50,BuildingHeight[2])
  fill(BuildingColour[2])
  rect(830,BuildingY+5,40,BuildingHeight[0])
  fill(BuildingColour[3])
  rect(885,BuildingY-5,60,BuildingHeight[1])
  fill(BuildingColour[1])
  rect(950,BuildingY-5,60,BuildingHeight[1])
  fill(BuildingColour[2])
  rect(1010,BuildingY-15,50,BuildingHeight[2])
  fill(BuildingColour[0])
  rect(1060,BuildingY+5,40,BuildingHeight[0])
  fill(BuildingColour[3])
  rect(1110,BuildingY-15,50,BuildingHeight[2])
  fill(BuildingColour[1])
  rect(1170,BuildingY-5,60,BuildingHeight[1])
  fill(BuildingColour[0])
  rect(1225,BuildingY+5,40,BuildingHeight[0])
  pop()

  
  push()
  noStroke()
  fill(0) //black
  rect(640,433,1300,26) //bar to cover bottom of buildings
  pop()   


   var basscolourpulse = map(bass, 50 , 100, 0, 255) //map for vocals linked to transparency
  push()
  fill(29, 219, 219,basscolourpulse)
  triangle(655,550,490,300,800,225) //center backround triangle
  pop()

   fill('#fa6700')
   ellipse(640,350, 200) //sun


   push()
   noStroke()
   fill(159, 83, 232,255) //transparent line 
   rect(635,410,170,5) //bottom sun line 
   pop()
   
   push()
   noStroke()
   fill(159, 83, 232,255)//transparent line 
   rect(640,395,180,5) //middle sun line 
   pop()

   push()
   noStroke()
   fill(159, 83, 232,255)//transparent line 
   rect(640,380,190,5) // top sun line 
   pop()


   push()
   fill('#4b1445') // dark purple
   quad(0,720,1280,720,660,400,620,400) //center road
   pop()

   push()
   strokeWeight(1)
   fill(0)//black
   triangle(640, 400, 780,740,500,740) //split in center road
   pop()

  
   push()
   var vocalcolourpulse = map(vocal, 50 , 100, 0, 255) //map for vocal linked to transparency
   textSize(50)
   strokeWeight(8)
   stroke(233, 60, 172,vocalcolourpulse)
   let w = 'Break the Rules'
   textFont('Courier')
   fill(0)//black
   text(w, 415, 180)
   pop()


}