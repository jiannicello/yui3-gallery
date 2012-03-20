var main = null,
    fnGetOption = null;

YUI().use('gallery-icello-nodeutil-select', 'node-event-simulate', function (Y) {
    var Select = Y.Icello.NodeUtil.Select;
    
    fnGetOption = function (item) {
         var template = '<option value="{value}">{text}</option>',
             sub = Y.Lang.sub,
             html = sub(template, item);
             option = Y.Node.create(html);
            
            if (item.selected) {
                option.set(SELECTED, true);
            }
            
            return option;
    };
    
    
    Y.on('domready', function (e) {
        Y.log('', 'info', 'domready');
        
        function Main() {
            Y.log('', 'info', 'Main');
            
            /*
            this.input = {
                ddl: new Select({
                    inputNode:'#ddl'
                });
            };
            */
        };
        Main.prototype = {
            render: function() {
                this.renderUI();
                this.bindUI();
            },
            renderUI: function() {
                //this.ddl.render();
            },
            bindUI: function() {
            
            }
        };

        main = new Main();
        main.render();
        
    });
});