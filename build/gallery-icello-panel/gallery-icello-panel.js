YUI.add('gallery-icello-panel', function(Y) {

Y.namespace('Icello');

var Panel = {};

Panel.CSS_INFO = 'info';
Panel.CSS_PLAIN = 'plain';
Panel.CSS_ERROR = 'error';
Panel.CSS_WARNING = 'warning';



Panel.createAlignTLBL = function (node) {
	return { node: node, points: [Y.WidgetPositionAlign.TL, Y.WidgetPositionAlign.BL] };
};

Panel.createAlignTLTR = function (node) {
	return { node: node, points: [Y.WidgetPositionAlign.TL, Y.WidgetPositionAlign.TR] };
};

Panel.createBodyContent = function (cssName, content) {
	var sub = Y.Lang.sub,
		data = { css: cssName },
		div = Y.Node.create(sub('<div class="yui3-grange-panel-state-{css}"></div>', data)),
		icon = Y.Node.create(sub('<span class="yui3-grange-panel-icon yui3-grange-panel-icon-{css}"></span>', data)),
		contentNode = Y.Node.create('<span class="yui3-grange-panel-msg"></span>');

	contentNode.setContent(content);

	div.appendChild(icon);
	div.appendChild(contentNode);

	return div;
};

Panel.createBodyContentLoading = function () {
	return Y.Node.create('<div class="yui3-grange-panel-loader"></div>');
};

Panel.createDefaultCloseButton = function (cfg) {
	return {
		value: 'Close',
		classNames: 'yui3-grange-panel-icon yui3-button-close',
		action: function (e) {
			e.preventDefault();
			this.hide();

			if (cfg && cfg.action) {
				cfg.action(e);
			}
		},
		section: Y.WidgetStdMod.HEADER
	};
};

Panel.createCloseButton = function (cfg) {
	return {
		value: cfg.value,
		action: function (e) {
			e.preventDefault();
			this.hide();

			if (cfg && cfg.action) {
				cfg.action(e);
			}
		},
		section: Y.WidgetStdMod.FOOTER
	};
};

Panel.createButton = function (cfg) {

	return {
		value: cfg.value,
		action: cfg.action || function (e) {
			e.preventDefault();
			this.hide();
		},
		section: cfg.section || Y.WidgetStdMod.FOOTER
	};
};


Panel.render = function (cfg) {
	var p = new Y.Panel({
		bodyContent: cfg.bodyContent,
		buttons: cfg.buttons || [],
		centered: (cfg.centered === undefined) ? true : cfg.centered,
		constrain: (cfg.constrain === undefined) ? null : cfg.constrain,
		headerContent: cfg.headerContent || null,
		height: cfg.height || '',
		modal: (cfg.modal === undefined) ? true : cfg.modal,
		visible: (cfg.visible === undefined) ? true : cfg.visible,
		width: cfg.width || 400,
		zIndex: cfg.zIndex || 0
	});

	if (cfg.align) {
		p.set('align', cfg.align);
	}

	if (cfg.draggable) {
		p.plug(Y.Plugin.Drag);
	}

	if (cfg.resizable) {
		p.plug(Y.Plugin.Resize);
	}

	p.render();
	return p;
};

Panel.renderError = function (cfg) {
	var div = Panel.createBodyContent(Panel.CSS_ERROR, cfg.bodyContent);

	cfg.bodyContent = div;

	return Panel.render(cfg);
};

Panel.renderInfo = function (cfg) {
	var div = Panel.createBodyContent(Panel.CSS_INFO, cfg.bodyContent);

	cfg.bodyContent = div;

	return Panel.render(cfg);
};

Panel.renderPlain = function (cfg) {
	var div = Panel.createBodyContent(Panel.CSS_PLAIN, cfg.bodyContent);

	cfg.bodyContent = div;

	return Panel.render(cfg);
};

Panel.renderWarning = function (cfg) {
	var div = Panel.createBodyContent(Panel.CSS_WARNING, cfg.bodyContent);

	cfg.bodyContent = div;

	return Panel.render(cfg);
};

Panel._loadingPanel = null;

Panel.showLoading = function () {
	if (Panel._loadingPanel) {
		Panel._loadingPanel.show();
	} else {
		Panel._loadingPanel = Panel.render({
			buttons: [],
			headerContent: 'Loading, please wait...',
			bodyContent: Panel.createBodyContentLoading()
		});
	}
};

Panel.hideLoading = function () {
	if (Panel._loadingPanel) {
		Panel._loadingPanel.hide();
	}
};


Y.Icello.Panel = Panel;





}, '@VERSION@' ,{skinnable:true, requires:['panel', 'dd-plugin', 'resize-plugin']});
