class Editor {
    constructor() {
        this.selectors = {
            statusChart: "editor__status-chart",
            sortableSelector: "[data-sortable]",
            educationEditor: "editor__education-wysiwyg"
        }

        this.$DOM = {
            statusChart: $("." + this.selectors.statusChart),
            sortableSelector: $(this.selectors.sortableSelector),
            educationEditor: $("." + this.selectors.educationEditor)
        }
        
        this.$DOM.statusChart.circleProgress({
            value: .65,
            size: 1000,
            fill: "#61abfd",
            emptyFill: "#ececec",
            startAngle: -Math.PI/2,
            lineCap: "round"
        });

        this.$DOM.sortableSelector.each(function(i) {
            const $this = $(this);
            const sortable = Sortable.create($this[0], {
                animation: 150,
                handle: ".fa-bars",
                forceFallback: true
            });
        });

        this.$DOM.educationEditor.trumbowyg({
            resetCss: true,
            btns: [["fontfamily"], ["strong", "em", "underline", "del", "justifyLeft", "justifyCenter", "justifyRight", "justifyFull"]]
        });
    }
}