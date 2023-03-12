let containerElement = document.getElementById('container');
let height = containerElement.clientHeight;
let width = containerElement.clientWidth;

// first we need to create a stage
var stage = new Konva.Stage({
  container: 'container',   // id of container <div>
  width: width,
  height: height
});

// then create layer
var imageLayer = new Konva.Layer();

// create our shape
var circle = new Konva.Circle({
  x: stage.width() / 2,
  y: stage.height() / 2,
  radius: 70,
  fill: 'red',
  stroke: 'black',
  strokeWidth: 4
});

// add the shape to the layer
imageLayer.add(circle);

var scrollLayer = new Konva.Layer({

});

var scrollBar = new Konva.Line({
  points: [width - 20, 0, width - 20, height],
  fill: 'gray',
  stroke: 'gray',
  strokeWidth: 1
});

scrollLayer.add(scrollBar);

var scrollHandle = new Konva.Rect({
  x: width - 19,
  y: 0,
  width: 20,
  height: 20,
  fill: 'silver',
  stroke: 'gray',
  strokeWidth: 0,
  opacity: 1,
  draggable: true
});

scrollHandle.on('dragmove', (e) => {
  // lock position of the shape on y axis
  scrollHandle.x(width - 20);

  let currentY = scrollHandle.y();
  if (currentY <= 0) {
    scrollHandle.y(0);
  }
  if (currentY >= height - 20) {
    scrollHandle.y(height - 20);
  }

  currentY = scrollHandle.y();
  imageLayer.y(-currentY);

  console.log(currentY)
});

scrollLayer.add(scrollHandle);

// add the layer to the stage
stage.add(imageLayer);
stage.add(scrollLayer);

// draw the image
imageLayer.draw();
scrollLayer.draw();