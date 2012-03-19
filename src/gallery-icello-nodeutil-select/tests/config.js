YUI_config = {
    groups: {
        icello_select_tests: {
            filter: 'debug',
            combine: false,
            base: '../../../build/',
            modules: {
                'gallery-icello-nodeutil-select': {
                    requires: ['node', 'selector-css3']
                },
                'gallery-icello-qunit-step': {}
            }
        }
    }
};