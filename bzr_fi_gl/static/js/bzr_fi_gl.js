
openerp.bzr_fi_gl = function(instance) {
    instance.web.Menu =  instance.web.Menu.extend({
        open_menu: function (id) {
            instance.session.user_context.bzr_menu_click = '' + id + $.now();
            return this._super(id);
        },
    });
};


