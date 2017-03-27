				
				
 				
			  var consult = {
			  send: (function(){
					
 			  $.ajax({
			  url: "https://urchildsmile.com/appsql/email.php"  , 
 			  type: 'POST',
			  
			  data: { name: $("#consult_name").val() , email: $("#consult_email").val() , title:$("#consult_title").val()  , text: $("#consult_text").val() , key: 789654123 },
			  
			  dataType: 'json',
			  crossDomain: true,
			  success: (function(data){
		      
			  alert("تم إرسال استشارتك");
			  Page.change(  "consult_home");
			  
			   
			  }),
			  error: (function(){
			  
			  
			  alert("لا يوجد اتصال بالانترنت");
 			  
			  
			  }) /* end success */
			  
			  
			  });/* End Ajax */
			  
			  	
					
			  })/* End Send Function */

			  }/* End Consult Object */