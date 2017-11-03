var demo = new Vue({
    el: '#main',
    data: {
        searchString: "",
        // The data model. These items would normally be requested via AJAX,
        // but are hardcoded here for simplicity.
        articles: [
            {
                "title": "Announcing N|Solid 2.4 with Node.js 8 Compatibility and Enhanced Metrics",
                "url": "https://nodesource.com/blog/announcing-n-solid-2-4-0-with-node-js-8-compatibility-and-enhanced-metrics",
                "image": "https://images.contentful.com/hspc7zpa5cvq/6W10wUocc8Qgmu00EoMwyU/d4731479a1969b7b0972d3f686702a3f/n-solid-2-4-0.png?fm=jpg&q=80&w=770&h=440"
            },
            {
                "title": "Last Week in Node.js Working Groups - October 22",
                "url": "https://nodesource.com/blog/last-week-in-node-js-working-groups-october-22-2017",
                "image": "https://images.contentful.com/hspc7zpa5cvq/1VNiLWgLDSasKoKW6I8iOu/b98bf6571a9c5a702271c7c078fd368a/Last_Week_in_Working_Groups.png?fm=jpg&q=80&w=770&h=440"
            },
            {
                "title": "Node.js Security Release Summary - October 2017",
                "url": "https://nodesource.com/blog/node-js-security-release-summary-october-2017",
                "image": "https://images.contentful.com/hspc7zpa5cvq/PmfWcyJscKa2gMkuYWoso/9be6354e1d09bcd59e5566efc29ebaa9/Security_Brief.png?fm=jpg&q=80&w=770&h=440"
            },
            {
                "title": "Using N|Solid with AppDynamics to Monitor Node.js Applications",
                "url": "https://nodesource.com/blog/using-n-solid-with-appdynamics-to-monitor-node-js-applications",
                "image": "https://images.contentful.com/hspc7zpa5cvq/53ueozBmvSEYKOywy8g8ac/09a8940233037695081960402bf338ed/nsolid-appd-dash.jpeg?fm=jpg&q=80&w=770&h=440"
            },
            {
                "title": "How HomeAway uses Node.js to Scale Service",
                "url": "https://nodesource.com/blog/how-homeaway-uses-node-js-to-scale-service",
                "image": "https://images.contentful.com/hspc7zpa5cvq/2GwRJ9AF6wca4KkCqigooc/7b66cd09811e52ee771435aa709f10ab/How_HomeAway_uses_Node.js_to_Scale_Service.jpeg?fm=jpg&q=80&w=770&h=440"
            }
        ]
    },
    computed: {
        // A computed property that holds only those articles that match the searchString.
        filteredArticles: function () {
            var articles_array = this.articles,
                searchString = this.searchString;

            if(!searchString){
                return articles_array;
            }

            searchString = searchString.trim().toLowerCase();

            articles_array = articles_array.filter(function(item){
                if(item.title.toLowerCase().indexOf(searchString) !== -1){
                    return item;
                }
            })

            // Return an array with the filtered data.
            return articles_array;;
        }
    }
});
