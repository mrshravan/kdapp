Ext.define('kdApp.controller.App',{
				extend: 'Ext.app.Controller',    
				config:{
								refs:{
// 												main : 'main',
												navBtn : 'button[name="nav_btn"]',
												maincard:'maincardpanel'
								},				
								control : {
												maincard:{
													tap: 'onMainCardPainted'
												},
												navBtn : {
																tap : 'toggleNav',
												},												
												navigation : {
																itemtap : function(list, index, target, record){
																				this.toggleNav();
																				var mId = record.get('menuItemId');
																				var comp = Ext.ComponentQuery.query('viewportpage')[0];
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
				onMainCardPainted:function(){
					console.log("onMainCardPainted");
				
				},
				
				/**
				 * Toggle the slide navogation view
				 */
				toggleNav : function(){
								var comp = Ext.ComponentQuery.query('viewportpage')[0];
								var actItem = comp.getActiveItem();
								var me = actItem;
								var id = '#'+actItem.id+'panel';
								var panel =  Ext.ComponentQuery.query(id)[0];
								var mainEl = panel.element;
								
								if (mainEl.hasCls('out')) {
												mainEl.removeCls('out').addCls('in'); 
												panel.setMasked(false);
								} else {
												mainEl.removeCls('in').addCls('out');  
												panel.setMasked(true);
								}
				}
});