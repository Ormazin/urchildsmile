			  
			  
			  var data = {
			  
			  content_id:null, content_title: null,  content_user:null, content_date:null, type:null,
			  
			  
			  
			  /***************** دالة جلب قائمة الموضوعات *****************/
			  articles_list:(function( type ){
			  
 
			  animate.loading_in();
			  
 			  $.ajax({
			  url: "https://urchildsmile.com/appsql"+langen+"/lists.php?type=" + type  , 
 			  type: 'GET',
			  crossDomain: true,
			  dataType: 'json',
			  success: (function(data){
			  
			  $(".articles_list_ajax").html(' ');
			  $(".articles_list_ajax" ).scrollTop(0);
			  $(".articles_list_ajax" ).scrollLeft( 1000 );
			  
			   /* for(1) */
			  for( var i=0; i < data.length; i++ ){
 			  $(".articles_list_ajax").append('<table  class="change_page animated content_lists"  data-content_id="'+data[i].id+'"  data-content_title="'+data[i].title+'"  data-content_user="'+data[i].user+'"  data-content_date="'+data[i].date+'"  data-page_id="articles_show"> <tr> <td align="right" width="80%"> <span class="content_title">   '+data[i].title+'   </span> </td> <td  align="left" width="20%"> <span class="lnr lnr-chevron-down-circle animated content_lists_icon"></span> </td> </tr> </table>'); /*end html*/
			  
			  
			   
			  
			  animate.list_in();
			  animate.loading_out();
			  
			 
			  

			  
			  } /* end for(1) */
			   
			   	
               $(".change_page").unbind("click");
			   events.change_page();
			  
			 
			 
			 
			   
			  
			  }),
			  error: (function(){
			  
			  
			  alert("لا يوجد اتصال بالانترنت");
			  animate.loading_out();
			  setTimeout(function(){animate.list_in();},500);
			  
			  
			  }) /* end success */
			  
			  
			  });/* End Ajax */
			  
			  
			  
			  
 
			  
			  }), /* End List Function */
			  
			  
			  /***************** دالة جلب قائمة الفيديوات *****************/
			  video_list:(function( type ){
			  
 
			  animate.loading_in();
			  
 			  $.ajax({
			  url: "https://urchildsmile.com/appsql"+langen+"/lists.php?type=" + type  , 
 			  type: 'GET',
			  crossDomain: true,
			  dataType: 'json',
			  success: (function(data){
			  
			  $(".video_list_ajax").html(' ');
			  $(".video_list_ajax" ).scrollTop(0);
			  $(".video_list_ajax" ).scrollLeft( 1000 );
			  
			   /* for(1) */
			  for( var i=0; i < data.length; i++ ){
 			  $(".video_list_ajax").append('<table class="animated content_lists change_page"  data-content_id="'+data[i].id+'"  data-content_title="'+data[i].title+'"  data-content_user="'+data[i].user+'"  data-content_date="'+data[i].date+'"  data-page_id="video_show"> <tr> <td align="right" width="80%"> <span class="content_title"> '+data[i].title+' </span>  </td> <td class=""align="left" width="20%"> <span class="lnr lnr-film-play animated content_lists_icon"></span> </td> </tr> </table>'); /*end html*/
			  
			  
			  animate.list_in();
			  animate.loading_out();

			  
 			  
			  } /* end for(1) */
			  $(".change_page").unbind("click");
			   events.change_page();
			 
			 
			   
			  
			  }),
			  error: (function(){
			  
			  
			  alert("لا يوجد اتصال بالانترنت");
			  animate.loading_out();
			  setTimeout(function(){animate.list_in();},500);
			  
			  
			  }) /* end success */
			  
			  
			  });/* End Ajax */
			  
			  
			  
			  
 
			  
			  }), /* End List Function */
			  
			  /***************** دالة جلب قائمة الاستشارات *****************/
			  consult_list:(function( type ){
			  
 
			  animate.loading_in();
			  
 			  $.ajax({
			  url: "https://urchildsmile.com/appsql"+langen+"/lists.php?type=" + type  , 
 			  type: 'GET',
			  crossDomain: true,
			  dataType: 'json',
			  success: (function(data){
			  
			  $(".consult_list_ajax").html(' ');
			  $(".consult_list_ajax" ).scrollTop(0);
			  $(".consult_list_ajax" ).scrollLeft( 1000 );
			  
			   /* for(1) */
			  for( var i=0; i < data.length; i++ ){
 			  $(".consult_list_ajax").append('<table class="animated content_lists change_page"  data-content_id="'+data[i].id+'"  data-content_title="'+data[i].title+'"  data-content_user="'+data[i].user+'"  data-content_date="'+data[i].date+'"  data-page_id="consult_show"> <tr> <td align="right" width="80%"> <span class="content_title">   '+data[i].title+'   </span> </td> <td class="" align="left" width="20%"> <span class="lnr lnr-chevron-down-circle animated content_lists_icon"></span> </td> </tr> </table>'); /*end html*/
			  
			  
			  animate.list_in();
			  animate.loading_out();

			  
 			  
			  } /* end for(1) */
			  
			  $(".change_page").unbind("click");
			   events.change_page();
			 
			 
			   
			  
			  }),
			  error: (function(){
			  
			  
			  alert("لا يوجد اتصال بالانترنت");
			  animate.loading_out();
			  setTimeout(function(){animate.list_in();},500);
			  
			  
			  }) /* end success */
			  
			  
			  });/* End Ajax */
			  
			  
			  
			  
 
			  
			  }), /* End List Function */
			  
			  /***************** دالة جلب قائمة المستشارين *****************/
			  appbook_list:(function( type ){
			  
 
			  animate.loading_in();
			  
 			  $.ajax({
			  url: "https://urchildsmile.com/appsql"+langen+"/appbook.php?type=" + type  , 
 			  type: 'GET',
			  crossDomain: true,
			  dataType: 'json',
			  success: (function(data){
			  
			  $(".appbook_list_ajax").html(' ');
			  $(".appbook_list_ajax" ).scrollTop(0);
			  $(".appbook_list_ajax" ).scrollLeft( 1000 );
			  
			   /* for(1) */
			   
			   /*
			  for( var i=0; i < data.length; i++ ){
 			  $(".appbook_list_ajax").append('<table class="appbook_lists"> <tr> <td align="right" width="80%"> <span class="appbook_title">  '+data[i].title+'</span> <span class="appbook_text"> '+data[i].content+' </span> </td> </tr> </table>');  
			  
			  
			 
			 

			  
 			  
			  }
			  */
			  
			  
			   /* end for(1) */
			   
			    animate.list_in();
			    animate.loading_out();
			  
			  
			 
			 
			   
			  
			  }),
			  error: (function(){
			  
			  
			  alert("لا يوجد اتصال بالانترنت");
			  animate.loading_out();
			  setTimeout(function(){animate.list_in();},500);
			  
			  
			  }) /* end success */
			  
			  
			  });/* End Ajax */
			  
			  
			  
			  
 
			  
			  }), /* End List Function */
			  
			  
			  /***************** دالة جلب محتوى الموضوع *****************/
			  content:(function( type ){
			  

			  animate.loading_in();
 			  
  			  $("."+type+"_info_title").text(data.content_title);
			  $("."+type+"_info_user").text(data.content_user);
			  $("."+type+"_info_date").text(data.content_date);
			  
			  
			  $.ajax({
			  url: "https://urchildsmile.com/appsql"+langen+"/content.php?post_id=" + data.content_id  , 
 			  type: 'GET',
			  crossDomain: true,
			  dataType: 'json',
			  success: (function(data){
			  
			  
 			  $("."+type+"_fullcontent").html( data[0].content  + "<br><br><br><br><br>");
			  
			  if( type == "video"  ){
			  
			  
			  var url = data[0].content; 
			  var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
			  var match = url.match(regExp);
			  if (match && match[2].length == 11) {
			  
			  var video_id = match[2];
			  }else video_id = "vYn2La0Qwqw";
			  
			  
			  
			  
			  $(".video_fullcontent").html(  '<center> <embed style=" margin-right:-10px;" width="100%" height="300"  src="https://www.youtube.com/embed/'+video_id+'"> </center> <br><br><br>');
			  
			  }
			  
			  
			  $( "."+type+"_fullcontent_body" ).scrollTop(0);
			  
			  animate.loading_out();
			  
			  setTimeout(function(){
			  animate.content_in();
			  },500);
		
			 
 			  }) /* end success */
			  
			  
			  });/* End Ajax */
			  
			  
			  
			  
			  
			  }), /* End Content Function */
			  
			  
			  
			  
			  
			  }