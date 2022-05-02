const circleCanvas = document.getElementById("circlesCanvas");
console.log(circleCanvas);
const c = circleCanvas.getContext("2d");

circleCanvas.height = innerHeight - 20;
circleCanvas.width = innerWidth - 20;

let divisionAngle = new Number(6);

addEventListener("resize", () => {
  circleCanvas.height = innerHeight - 20;
  circleCanvas.width = innerWidth - 20;
  init();
});

let mouse = {
  posX: circleCanvas.width / 2,
  posY: circleCanvas.height / 2,
};

let scrollRadius = {
  radiusIncrement: 0,
};

class Circle {
  constructor(circle, color) {
    this.circleOrigin = circle.origin;
    this.circleRadius = circle.radius;
    this.color = color;
  }

  draw() {
    c.beginPath();
    c.arc(
      this.circleOrigin.x,
      this.circleOrigin.y,
      this.circleRadius,
      0,
      Math.PI * 2,
      false
    );
    c.strokeStyle = this.color;
    c.stroke();
    c.closePath();

    for (let i = 0; i <= 360; i = i + divisionAngle) {
      c.moveTo(auxilliaryCircle.origin.x, auxilliaryCircle.origin.y);
      let newX =
        Math.cos((i * Math.PI) / 180) * (2 * container.radius) +
        auxilliaryCircle.origin.x;
      let newY =
        Math.sin((i * Math.PI) / 180) * (2 * container.radius) +
        auxilliaryCircle.origin.y;

      let containerTemp = new Point2D(container.origin.x, container.origin.y);
      let containerTempradius = container.radius;

      let circleTemp2 = new Point2D(
        auxilliaryCircle.origin.x,
        auxilliaryCircle.origin.y
      );
      let circleTemp2radius = auxilliaryCircle.radius;

      let point1 = new Point2D(
        auxilliaryCircle.origin.x,
        auxilliaryCircle.origin.y
      );
      let point2 = new Point2D(newX, newY);

      let intersectionTemp = Intersection.intersectCircleLine(
        containerTemp,
        containerTempradius,
        point1,
        point2
      );
      let intersectionTemp2 = Intersection.intersectCircleLine(
        circleTemp2,
        circleTemp2radius,
        point1,
        point2
      );

      let X2 = intersectionTemp2.points[0].x;
      let Y2 = intersectionTemp2.points[0].y;

      let X3, Y3;

      if (intersectionTemp.points[0] == undefined) {
        mouse.posX = circleCanvas.width / 2;
        mouse.posY = circleCanvas.height / 2;
        init();
      } else {
        X3 = intersectionTemp.points[0].x;
        Y3 = intersectionTemp.points[0].y;
      }

      let dist = Math.sqrt(Math.pow(X3 - X2, 2) + Math.pow(Y3 - Y2, 2));
      let generatedCirclesRadius = dist;

      c.beginPath();
      c.arc(X2, Y2, generatedCirclesRadius, 0, Math.PI * 2, false);
      c.stroke();
      c.strokeStyle = this.color;
      c.closePath();
    }
  }

  update() {
    this.circleOrigin.x = mouse.posX;
    this.circleOrigin.y = mouse.posY;
    this.circleRadius = circle1.radius;
    this.draw();
  }

  updateAuxiliary() {
    this.circleOrigin.x = (mouse.posX + container.origin.x) / 2;
    this.circleOrigin.y = (mouse.posY + container.origin.y) / 2;
    this.draw();
  }
}

let container;
let circle1;
let auxilliaryCircle;
let color = "#585858";

function init() {
  container = {
    radius:
      circleCanvas.height / 2.1 > 0
        ? circleCanvas.height / 2.1
        : -circleCanvas.height / 2.1,
    origin: {
      x: circleCanvas.width / 2,
      y: circleCanvas.height / 2,
    },
  };

  circle1 = {
    origin: {
      x: mouse.posX,
      y: mouse.posY,
    },
    radius:
      (2 * container.radius) / 3 + scrollRadius.radiusIncrement > 0
        ? (2 * container.radius) / 3 + scrollRadius.radiusIncrement
        : -((2 * container.radius) / 3 + scrollRadius.radiusIncrement),
  };

  auxilliaryCircle = {
    origin: {
      x: (mouse.posX + container.origin.x) / 2,
      y: (mouse.posY + container.origin.y) / 2,
    },
    radius:
      circle1.radius + (container.radius - circle1.radius) / 2 > 0
        ? circle1.radius + (container.radius - circle1.radius) / 2
        : -(circle1.radius + (container.radius - circle1.radius) / 2),
  };
}

circleCanvas.addEventListener("mousemove", (e) => {
  mouse.posX = e.x;
  mouse.posY = e.y;
});

circleCanvas.addEventListener("wheel", (e) => {
  scrollRadius.radiusIncrement += e.deltaY * 0.05;
  init();
});

function animate() {
  c.clearRect(0, 0, circleCanvas.width, circleCanvas.height);

  requestAnimationFrame(animate);
  let containerObj = new Circle(container, color);
  containerObj.draw();
  let auxilliaryCircleObj = new Circle(auxilliaryCircle, color);
  auxilliaryCircleObj.updateAuxiliary();
  let circle1Obj = new Circle(circle1, color);
  circle1Obj.update();
}

init();
animate();
