Ext.define('kdApp.store.MenuItems', {
    extend: 'Ext.data.Store',    
    config: {
        model: 'kdApp.model.MenuItems',
        //sorters: 'gruoupName',
        grouper : function(record) {
            return record.get('gruoupName');
        },
        data: [
            { menuItemId:"wd", menuItem:"Kidiography-wd", gruoupName: "Kidiography",groupId:"1" },
            { menuItemId:"sd", menuItem:"Sociography-sd", gruoupName: "Kidiography",groupId:"1" },
            { menuItemId:"rd", menuItem:"Planography-rd", gruoupName: "Kidiography",groupId:"1" },
            { menuItemId:"hme", menuItem:"Abhi's Biography", gruoupName: "Biography",groupId:"2" },
            { menuItemId:"hme", menuItem:"Pradyumna's Biography", gruoupName: "Biography",groupId:"2" },
            { menuItemId:"hme", menuItem:"What?", gruoupName: "About",groupId:"3" },
            { menuItemId:"hme", menuItem:"How?", gruoupName: "About",groupId:"3" },
            { menuItemId:"hme", menuItem:"Why?", gruoupName: "About",groupId:"3" },
            { menuItemId:"hme", menuItem:"Team", gruoupName: "Team",groupId:"4" },
            { menuItemId:"hme", menuItem:"Contact Us", gruoupName: "Team",groupId:"4" },
            { menuItemId:"hme", menuItem:"Investors", gruoupName: "Team" ,groupId:"4"},
            
            //{ menuItemId:"wd", menuItem: "Write Diary", gruoupName: "Diary" },
            //{ menuItemId:"rd", menuItem: "Read Diary", gruoupName: "Diary" },
            //{ menuItemId:"sd", menuItem: "Share Diary", gruoupName: "Diary" },
        ]
    }
});