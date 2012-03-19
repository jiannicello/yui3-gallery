var main = null;

YUI().use('gallery-icello-nodeutil-select', 'node-event-simulate', function (Y) {
    var Select = Y.Icello.NodeUtil.Select;
    
    Y.on('domready', function (e) {
        Y.log('', 'info', 'domready');
        
        function Main() {
            Y.log('', 'info', 'Main');
            

            this.input = {
                ddl: Y.one('#ddl')
            };
        };
        Main.prototype = {
            render: function() {
                this.renderUI();
                this.bindUI();
            },
            renderUI: function() {
            
            },
            bindUI: function() {
            
            }
        };

        main = new Main();
        main.render();
        
    });
});