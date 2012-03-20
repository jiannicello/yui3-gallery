YUI_config = {
    groups: {
        icello_select_tests: {
            filter: 'debug',
            combine: false,
            base: '../../../build/',
            modules: {
                'gallery-icello-nodeutil-select': {
                    requires: ['base-build', 'node']
                },
                'gallery-icello-qunit-step': {}
            }
        }
    }
};