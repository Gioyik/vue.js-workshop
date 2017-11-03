// new Vue instance
var demo = new Vue({
    // A DOM element to mount our view model.
    el: '#main',
    // Define properties and give them values.
    data: {
        show_tooltip: false,
        text_content: 'Edit me.'
    },
    // Functions we will be using.
    methods: {
        hideTooltip: function(){
            // When a model is changed, the view will be automatically updated.
            this.show_tooltip = false;
        },
        toggleTooltip: function(){
            this.show_tooltip = !this.show_tooltip;
        }
    }
})
