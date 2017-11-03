// new Vue instance
var exercise1 = new Vue({
    // A DOM element for view model.
    el: '#main',
    // Define properties and give them values.
    data: {
        active: 'home'
    },
    // Functions to use.
    methods: {
        makeActive: function(item){
            // When a model is changed, the view will be automatically updated.
            this.active = item;
        }
    }
});
