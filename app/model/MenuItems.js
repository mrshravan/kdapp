Ext.define('kdApp.model.MenuItems', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['menuItem', 'gruoupName']
    },

    fullName: function() {
        var d = this.data,
        names = [
            d.menuItem,
            // (!d.middleInitial ? "" : d.middleInitial + "."),
            d.gruoupName
        ];
        return names.join(" ");
    }
});