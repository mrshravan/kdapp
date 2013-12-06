Ext.define('kdApp.controller.App',{
				extend: 'Ext.app.Controller',    
				config:{
								refs:{
												main : 'main',
												navigation : 'navigation',
												navBtn : 'button[name="nav_btn"]'
								},				
								control : {
												navBtn : {
																tap : 'toggleNav'
												},												
												navigation : {
																itemtap : function(list, index, target, record){
																				this.toggleNav();
																				var mId = record.get('menuItemId');
																				var comp = Ext.ComponentQuery.query('mainhometab')[0];
																				console.log(comp);
																				comp.setHtml('');
																				if(mId =='wd'){
																					
																					//comp.getActiveItem().destroy();
																					comp.setActiveItem('writediaryview');
																				}else if(mId=='rd'){
																					//comp.setHtml('Read Diary');
																					comp.getActiveItem().destroy();						
																					comp.setActiveItem('readdiaryview');																					
																				}else if(mId=='sd'){
																					comp.getActiveItem().destroy();
																					comp.setHtml('Share Diary');
																											
																				}
																}

												},
												
												
        
								}
				},
		
				
				/**
				 * Toggle the slide navogation view
				 */
				toggleNav : function(){
								var me = this,
								mainEl = me.getMain().element;
								
								if (mainEl.hasCls('out')) {
												mainEl.removeCls('out').addCls('in'); 
												me.getMain().setMasked(false);
								} else {
												mainEl.removeCls('in').addCls('out');  
												me.getMain().setMasked(true);
								}
				}
});