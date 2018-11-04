class Editor {
    constructor() {
        $(".editor__status-chart").circleProgress({
            value: .65,
            size: 1000,
            fill: "#61abfd",
            emptyFill: "#ececec",
            startAngle: -Math.PI/2,
            lineCap: "round"
        });
    }
}