export default function (s) {
  s.state = {}
  let video;
  let poseNet;
  let noseX = 0;
  let noseY = 0;

  
  s.setup = () => {
    s.createCanvas(640, 480);
    video = s.createCapture(s.VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelReady);
    poseNet.on('pose', gotPoses);
  }

  function gotPoses(poses) {
    // console.log(poses);
    if (poses.length > 0) {
      let nX = poses[0].pose.keypoints[0].position.x;
      let nY = poses[0].pose.keypoints[0].position.y;
      noseX = nX;
      noseY = nY;
    }
  }

  function modelReady() {
    console.log('model ready');
  }

  s.draw = () => {
    s.image(video, 0, 0);
    s.ellipse(noseX, noseY, 20, 20);
  }
}