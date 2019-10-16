export default function (s) {
    s.state = {}
    // s.dispatch = () => { }
    let capture;

    s.setup = () => {
        s.createCanvas(390, 240)
        capture = s.createCapture(s.VIDEO);
        capture.size(390, 240);
        capture.hide();

        // console.log('::: displayDensity:', s.displayDensity())
        // console.log('::: pixelDensity:', s.pixelDensity())

        console.log('::: sketch-1 has been initialized')
    }

    s.draw = () => {
        s.background(255);
        s.image(capture, 0, 0, 390, 240);
        s.filter(s.INVERT);
        // s.background(127, 0, 50)
        // s.strokeWeight(s.map(s.state.slider, 0, 100, 0, 10))
        // s.stroke(127, 255, 205)
        // s.fill(127, 255, 205, s.map(s.state.slider, 0, 100, 255, 0))
        // s.ellipse(s.width / 2, s.height / 2, s.state.slider)
    }
}

// let capture;

// function setup() {
//   createCanvas(390, 240);
//   capture = createCapture(VIDEO);
//   capture.size(320, 240);
//   //capture.hide();
// }

// function draw() {
//   background(255);
//   image(capture, 0, 0, 320, 240);
//   filter(INVERT);
// }