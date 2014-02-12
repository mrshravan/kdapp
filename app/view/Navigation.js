Ext.define('kdApp.view.Navigation', {
				extend: 'Ext.List',
				xtype: 'navigation',
				requires: ['kdApp.store.MenuItems'],				
				config: {
					title: 'Kids Diary',
					cls : 'nav-list',
					itemTpl : '{menuItem}',
					grouped: true,
					itemTpl: '{menuItem}',
					store: 'MenuItems',
					
				}
});