var main = null;

YUI().use('gallery-icello-button', 'gallery-icello-nodeutil-select', 'node-event-simulate', function (Y) {
    var Button = Y.Icello.Button,
        Select = Y.Icello.NodeUtil.Select;
    
    Y.on('domready', function (e) {
        Y.log('', 'info', 'domready');
        
        function Main() {
                Y.log('', 'info', 'Main');
                this.buttonsBoxDefaultMsg = null;

                this.input = {
                    allButtons: [],
                    allButtonsLabels: [],
                    allButtonsDsp: Y.one('#allButtonsDsp'),
                    btnSave: new Button({
                        srcNode: '#btnSave',
                        icon: Button.ICONS.DISK,
                        disabled: true
                    }),
                    btnSearch: new Button({
                        srcNode: '#btnSearch',
                        icon: Button.ICONS.SEARCH
                    }),
                    buttonsBox: Y.one('#buttonsBox'),
                    ddlCssIcons: Y.one('#ddlCssIcons')
                };
            };
            Main.prototype = {
                _allButtonsDspHandler: function (e) {
                    Y.log('', 'info', 'Main _allButtonsDspHandler');

                    

                    var labels = this.input.allButtonsLabels;

                    Y.Array.each(this.input.allButtons, function (btn, i) {
                        if (e.currentTarget.one('span').hasClass(btn.get('icon'))) {
                            if (btn.get('label')) {
                                btn.set('label', '');
                            }
                            else {
                                btn.set('label', labels[i]);
                            }
                            btn.refresh();
                        }
                    });




                },
                _btnSaveHandler: function (e) {
                    Y.log('no preventDefault call needed', 'info', 'Main _btnSaveHandler');
                },
                _btnSearchHandler: function (e) {
                    Y.log('no preventDefault call needed', 'info', 'Main _btnSearchHandler');
                },
                _ddlCssIconsChangeHandler: function (e) {
                    var option = Select.getSelectedOption(e.target);
                    var v = option.get('value');
                    var t = option.getContent();
                    Y.log(t, 'info', 'Main _ddlCssIconsChangeHandler');
                    Y.log(v, 'info', 'Main _ddlCssIconsChangeHandler');

                    this.input.buttonsBox.empty(true);

                    if (v == '') {
                        this.input.btnSave.disable();

                        this.input.buttonsBox.setContent(this.buttonsBoxDefaultMsg);
                        return;
                    }

                    this.input.btnSave.enable();

                    var btn = new Button({ label: t, icon: v });
                    btn.render(this.input.buttonsBox);
                },
                _loadIconKeys: function () {
                    Y.log('', 'info', 'Main _loadIconKeys');

                    var ddl = this.input.ddlCssIcons;

                    var allButtonsDsp = this.input.allButtonsDsp;
                    var allButtonsTbl = Y.Node.create('<table></table>');
                    var allButtonsTblBody = Y.Node.create('<tbody></tbody>');
                    var allButtons = this.input.allButtons;
                    var allButtonsLabels = this.input.allButtonsLabels;


                    allButtonsDsp.append(allButtonsTbl);
                    allButtonsTbl.append(allButtonsTblBody);
                    var allButtonsTr = null;

                    Select.append(ddl, 'Please Select', '');
                    var i = 1;
                    Y.Object.each(Button.ICONS, function (value, name) {
                        Select.append(ddl, name, value);

                        var btn = new Button({ icon: value });
                        var td = Y.Node.create('<td></td>');

                        if (i % 25 == 1) {
                            allButtonsTr = Y.Node.create('<tr></tr>');
                            allButtonsTblBody.append(allButtonsTr);
                        }

                        allButtonsTr.append(td);
                        btn.render(td);

                        allButtons.push(btn);
                        allButtonsLabels.push(name);


                        i += 1;
                    });
                },
                init: function () {
                    Y.log('', 'info', 'Main init');

                    var input = this.input;

                    this._loadIconKeys();

                    this.buttonsBoxDefaultMsg = this.input.buttonsBox.getContent();

                    input.ddlCssIcons.on('change', Y.bind(this._ddlCssIconsChangeHandler, this));

                    input.btnSave.on('click', Y.bind(this._btnSaveHandler, this));
                    input.btnSearch.on('click', Y.bind(this._btnSearchHandler, this));

                    input.allButtonsDsp.delegate('click', Y.bind(this._allButtonsDspHandler, this), 'button');

                    input.btnSave.render();
                    input.btnSearch.render();
                }
            };

            main = new Main();
            main.init();
        
    });
});