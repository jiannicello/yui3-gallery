YUI_config = {
    groups: {
        icello_button_tests: {
            filter: 'debug',
            combine: false,
            base: '../../../build/',
            modules: {
                'gallery-icello-button': {
                    skinnable: true,
                    requires: ['base-build', 'widget']
                },
                'gallery-icello-nodeutil-select': {
                    requires: ['node', 'selector-css3']
                },
                'gallery-icello-qunit-step': {}
            }
        }
    }
};