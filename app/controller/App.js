Ext.define('kdApp.controller.App',{
				extend: 'Ext.app.Controller',    
				config:{
								refs:{
// 												main : 'main',
												navBtn : 'button[name="nav_btn"]'
								},				
								control : {
												navBtn : {
																tap : 'toggleNav',
												},												
												navigation : {
																itemtap : function(list, index, target, record){
																				this.toggleNav();
																				var mId = record.get('menuItemId');
																				var comp = Ext.ComponentQuery.query('viewportpage')[0];
																				console.log('vieportpage comp:'+comp);
																				comp.setHtml('');
																				if(mId == 'hme'){
																					comp.setActiveItem('maincard');
																				}else if(mId =='wd'){
																					comp.setActiveItem('writediarycard');
																				}else if(mId=='rd'){
																					comp.setActiveItem('readdiarycard');																					
																				}else if(mId=='sd'){
																					comp.setActiveItem('sharediarycard');
																											
																				}
																}

												},
												
												
        
								}
				},
		
				
				/**
				 * Toggle the slide navogation view
				 */
				toggleNav : function(){
								var comp = Ext.ComponentQuery.query('viewportpage')[0];
								var actItem = comp.getActiveItem();
								console.log('active panel: '+actItem);
								var me = actItem;
								console.log('me'+me);
								var id = '#'+actItem.id+'panel';
								console.log('panel id: '+id);
								var panel =  Ext.ComponentQuery.query(id)[0];
								console.log('panel:'+panel);
								var mainEl = panel.element;
								console.log('mainEl:'+mainEl);
								
								if (mainEl.hasCls('out')) {
												mainEl.removeCls('out').addCls('in'); 
												panel.setMasked(false);
								} else {
												mainEl.removeCls('in').addCls('out');  
												panel.setMasked(true);
								}
				}
});