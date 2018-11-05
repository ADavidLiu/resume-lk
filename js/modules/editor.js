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

        const $sortableSelector = $("[data-sortable]");
        $sortableSelector.each(function(i) {
            const $this = $(this);
            const sortable = Sortable.create($this[0], {
                animation: 150,
                handle: ".fa-bars",
                forceFallback: true
            });
        });
    }
}