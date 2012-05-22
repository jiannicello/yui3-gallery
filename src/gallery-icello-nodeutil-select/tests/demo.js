var main = null;

YUI().use('gallery-icello-nodeutil-select', 'node-event-simulate', 'console-filters', function (Y) {
    var Select = Y.Icello.NodeUtil.Select;
    
    new Y.Console({
        logSource: Y.Global,
        newestOnTop: false,
        plugins: [Y.Plugin.ConsoleFilters]
    }).render();

    Y.on('domready', function (e) {
        Y.log('', 'info', 'domready');

        function Main() {
            Y.log('', 'info', 'Main');

            this.ui = {
                box: new Select({ srcNode: '#box' }),
                ddl: new Select({
                    srcNode: '#ddl',
                    items: [
                        { text: 'Please Select', value: '' },
                        { text: 'One', value: '1' },
                        { text: 'Two', value: '2' },
                        { text: 'Three', value: '3' }
                    ]
                }),
                ddlJobType: new Select({ srcNode: '#ddlJobType' }),
                ddlTextOnly: new Select({ srcNode: '#ddlTextOnly' })
            };

        };
        Main.prototype = {
            render: function () {
                this.renderUI();
                this.bindUI();
            },
            renderUI: function () {
                var ui = this.ui;

                ui.box.render();
                ui.ddl.render();
                ui.ddlJobType.render();
                ui.ddlTextOnly.render();
            },
            bindUI: function () {

            }
        };

        main = new Main();
        main.render();

    });
});