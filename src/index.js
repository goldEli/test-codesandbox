import "./styles.css";
import Konva from "konva"

var width = window.innerWidth;
      var height = window.innerHeight;

      var stage = new Konva.Stage({
        container: 'container',
        width: width,
        height: height
      });

      var layer = new Konva.Layer();

      var redLine = new Konva.Line({
        points: [5, 70, 140, 23, 250, 60, 300, 20],
        stroke: 'red',
        strokeWidth: 15,
        lineCap: 'round',
        lineJoin: 'round'
      });

      // dashed line
      var greenLine = new Konva.Line({
        points: [5, 70, 140, 23, 250, 60, 300, 20],
        stroke: 'green',
        strokeWidth: 2,
        lineJoin: 'round',
        /*
         * line segments with a length of 33px
         * with a gap of 10px
         */
        dash: [33, 10]
      });

      // complex dashed and dotted line
      var blueLine = new Konva.Line({
        points: [5, 70, 140, 23, 250, 60, 300, 20],
        stroke: 'blue',
        strokeWidth: 10,
        lineCap: 'round',
        lineJoin: 'round',
        /*
         * line segments with a length of 29px with a gap
         * of 20px followed by a line segment of 0.001px (a dot)
         * followed by a gap of 20px
         */
        dash: [29, 20, 0.001, 20]
      });

      /*
       * since each line has the same point array, we can
       * adjust the position of each one using the
       * move() method
       */
      redLine.move({
        x: 0,
        y: 10
      });
      greenLine.move({
        x: 0,
        y: 55
      });
      blueLine.move({
        x: 0,
        y: 105
      });

      layer.add(redLine);
      layer.add(greenLine);
      layer.add(blueLine);

      // add the layer to the stage
      stage.add(layer);