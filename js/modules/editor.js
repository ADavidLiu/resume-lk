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

        const sortableSelector = $("[data-sortable]")[0];
        const sortable = Sortable.create(sortableSelector, {
            animation: 150,
            handle: ".fa-bars",
            forceFallback: true
        });
    }
}