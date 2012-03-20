var main = null;

YUI().use('gallery-icello-nodeutil-select', 'node-event-simulate', function (Y) {
    var Select = Y.Icello.NodeUtil.Select;
    
    Y.on('domready', function (e) {
        Y.log('', 'info', 'domready');
        
        function Main() {
            Y.log('', 'info', 'Main');
            
            this.input = {
                ddl: new Select({
                    srcNode:'#ddl'
                })
            };
            
        };
        Main.prototype = {
            render: function() {
                this.renderUI();
                this.bindUI();
            },
            renderUI: function() {
                this.input.ddl.render();
            },
            bindUI: function() {
            
            }
        };

        main = new Main();
        main.render();
        
    });
});