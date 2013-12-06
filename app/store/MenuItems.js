Ext.define('kdApp.store.MenuItems', {
    extend: 'Ext.data.Store',    
    config: {
        model: 'kdApp.model.MenuItems',
        // sorters: 'lastName',
        grouper : function(record) {
            return record.get('gruoupName');
        },
        data: [
            { menuItemId:"hme", menuItem:"Kids Diary", gruoupName: "About" },
            { menuItemId:"wd", menuItem: "Write Diary", gruoupName: "Diary" },
            { menuItemId:"rd", menuItem: "Read Diary", gruoupName: "Diary" },
            { menuItemId:"sd", menuItem: "Share Diary", gruoupName: "Diary" },
        ]
    }
});