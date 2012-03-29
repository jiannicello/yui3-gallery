YUI_config = {
    groups: {
        icello_panel_tests: {
            filter: 'debug',
            combine: false,
            base: '../../../build/',
            modules: {
                'gallery-icello-panel': {
                    skinnable: true,
                    requires: ['panel', 'dd-plugin', 'resize-plugin']
                }
            }
        }
    }
};