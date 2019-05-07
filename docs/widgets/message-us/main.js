new Vue ({
    el: '#app',
    data() {
        return {
            config: {
                id: 'bothub-widget-example-1',
                type: 'MessageUs',
                pageId: pageId,
                color: 'blue',
                size: 'large',
            },
        };
    },
    methods: {
        parseWidget() {
            const widget = window.BH.Widget;
            const data = this.config;

            widget.setConfig(data);
            widget.render(data.id);
        },
        toStringify() {
            return JSON.stringify(this.config, null, 2);
        }
    },
    mounted() {
        window.BH.init({
            debug: true,
            language: "en_US",
            renderImmediately: true,
            appId: appId,
            widgets: this.config,
        });
    },
});
