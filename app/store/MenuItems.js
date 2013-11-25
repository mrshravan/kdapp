Ext.define('kdApp.store.MenuItems', {
    extend: 'Ext.data.Store',    
    config: {
        model: 'kdApp.model.MenuItems',
        // sorters: 'lastName',
        grouper : function(record) {
            return record.get('gruoupName');
        },
        data: [
            { menuItem: "Write Diary", gruoupName: "Diary" },
            { menuItem: "Read Diary", gruoupName: "Diary" },
            { menuItem: "Share Diary", gruoupName: "Diary" },
        ]
    }
});