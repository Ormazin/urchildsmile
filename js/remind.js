				
				
 				
			  var remind = {
			  add: (function(){
			  
			  
			  var data = localStorage.getItem("remind");	
 			  
			  if( localStorage.getItem("remind") === null ) 
			  localStorage.setItem("remind",'[]');
			    
			   
			   
			  var data = JSON.parse( localStorage.getItem("remind") );
			  
			  data.unshift('{"child_name":"'+$("#child_name").val()+'","child_old":"'+$("#child_old").val()+'","child_sex":"'+$("#child_sex").val()+'","child_date":"'+$("#child_date").val()+'","child_doctor":"'+$("#child_doctor").val()+'"}'); 
			  
			  
			  data = JSON.stringify( data );
			  localStorage.setItem("remind",  data  );
			  
			  $("#child_name").val("");
			  $("#child_old").val("");
			  $("#child_date").val("");
			  $("#child_doctor").val("");
			  
			  
			  Page.change("remind_home");
			   

			  }),/* End add Function */
			  
			  /********************************************************/
			  
			  get: (function(){
			  
			  if( localStorage.getItem("remind") !== null ) {
			  var html = "";
			  
			  var data = JSON.parse( localStorage.getItem("remind") );
			  data.forEach(function(data){
			  
			  data = JSON.parse(data);
			  
			  
			  html = html + '<tr> <td width="100"> <img src="img/icons/'+data.child_sex+'.jpg" > </td> <td> الاسم: '+data.child_name+' <br> العمر: '+data.child_old+' سنوات <br> الموعد: '+data.child_date+' <br> اسم المستشار: '+data.child_doctor+' </td> </tr>' ;
			  
			  });
			  
			  
			  $("#remind_table").html( html ); 
			  
			  }
			  
			  
			  
			  
			  
			  })

			  }/* End remind Object */