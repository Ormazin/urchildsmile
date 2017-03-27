			
			    
			  $(document).ready(function(e) {
              
			 
			  /** سيبدأ التنفيذ عند تحميل جميع الصفحات **/
			  mobile.ready( (function(){
				  
				   
 		    

			  
			  /************************** عند تغيير القروب ************************/
			  $(".change_group").click(function(){
			 
			  /* if(1) التأكد بأن القروب المطلوب ليس نفس القروب الحالي*/
			  if( Group.pres != $(this).attr("data-group_id") ){
			  
 
			  if( $(this).attr("data-type") != null) data.type = $(this).attr("data-type");
 
			  
			  Group.change(  $(this).attr("data-group_id") );
			  			  
			  }/* End if(1) */
			  
			  });/* end change group */
			  
			  
			  
			  /********************* عند تغيير صفحة ********************************/
			  events.change_page();
			  
			  
			  
			  /********************* عند إرسال استشارة ********************************/
			  $("#consult_send").click(function(){
			  consult.send();
			  });
			  
			  /********************* عند إضافة تذكير ********************************/
			  $("#add_remind").click(function(){
			  remind.add();
			  });
			  
			  
			  

			  
			  }));/* end mobile.ready */
			  
			    
				
              });/* end document.ready */
			  
			  
			  
			  
			  /***************************************************************************/
			  var events = {
			  
			  change_page: (function(){
			  
			  /************ عند تغيير صفحة *************/
			  
			 $(".change_page").click(function(){
 			
			  
 			  if( Page.pres != $(this).attr("data-page_id") ){
			   
			  animate.articles_color = $(this).attr("data-color");
			  
			  if( $(this).attr("data-type") != null) data.type = $(this).attr("data-type");
			  
			  /* إعداد معلومات المحتوى */
			  data.content_id = $(this).attr("data-content_id");
			  data.content_title = $(this).attr("data-content_title");
			  data.content_user = $(this).attr("data-content_user");
			  data.content_date = $(this).attr("data-content_date");
			  
  			  
			  
			  
			  
			  Page.change(  $(this).attr("data-page_id") );
			  			  
			  }/* End if(1) */
			  
			  
			  });/* end change page */
			  
			  
			  
			  
			  })
			  
			  }
			
			
 			 
			  