			  
			  
			  var animate = {
			
			  
			  articles_color: "",
			  
			  
			  /************************** دخول التحميل *************************/  
			  loading_in:(function(){
			  $(".loading-body").show();	  
			  Move(".loading-box").To({"transition":"opacity 500ms", "opacity":"1"});
			  }),
			  
			  /**************************** خروج التحميل ***********************/  
			  loading_out:(function(){
			  Move(".loading-box").To({"opacity":"0","transition":"opacity 500ms"});
			  setTimeout(function(){ $(".loading-body").hide();},500);	  
			  }),
			  
			  
			  /***************************دخول القوائم************************/  
			  list_in:(function(){
 			  $(".articles_list_ajax , .video_list_ajax, .consult_list_ajax , .appbook_list_ajax ").css({"opacity":"1","transition":"opacity 500ms"}); 
			  
			  }),
			  
			  /***************************خروج القوائم************************/  
			  list_out:(function(){
			  $(".articles_list_ajax , .video_list_ajax, .consult_list_ajax , .appbook_list_ajax ").css({"opacity":"0","transition":"opacity 500ms"}); 
			  }), 
			  
			  
			  /***************************خروج القوائم************************/  
			  content_in:(function(){
			  $(".fullcontent").css({"opacity":"1","transition":"opacity 500ms"}); 
			  }), 
			  
			  /***************************خروج القوائم************************/  
			  content_out:(function(){
			  $(".fullcontent").css({"opacity":"0","transition":"opacity 500ms"}); 
			  }),
			  
			  /*************************** دخول ارسال استشارة ************************/  
			  consult_in:(function(){
			  $(".consult_send").show(); 
			  }), 
			  
			  /***************************خروج القوائم************************/  
			  consult_out:(function(){
			  setTimeout((function(){$(".consult_send").hide(); }),1000);
			  }), 
			  
		 
			  
			  /**************************************************/
			  page_color: (function( color ){
			  
			  
			  $("body").css({"background-color": color ,"transition":"background-color 500ms"});
			  
			  
			  }),
			  
			  /***************************************************/  
			  page_in: (function(){
			  
			  $( "#cover" ).show();
			  $(  animate.presPage() ).css("display","inline");
			  $( this.presPage() ).addClass("zoomIn");
			  
			  setTimeout( (function(){
			  $(  animate.presPage() ).removeClass("zoomIn");
			  $(  animate.presPage() ).css("z-index","99");
			  $(  animate.presPage() ).css("opacity","1");
			  
			  }),1000); 
			  
			  			  
			  }),/* end page in */
			  
			  /*****************************/
			  
			  page_out: (function(){
 				
 			   
			  $( this.prevPage() ).addClass("zoomOut");
			  $(  animate.prevPage() ).css("z-index","1");
			  setTimeout( (function(){
			  $(  animate.prevPage() ).removeClass("zoomOut");
			  
			  $(  animate.prevPage() ).css("opacity","0");
			  $(  animate.prevPage() ).css("display","none");
			  $( "#cover" ).hide();
			  
			  
			  }),1000); 
			  
			  
			  
			  }),/* end page out */
			  
			  /*****************************/
			  
			  group_in: (function(){
			 
 			  $( "#cover" ).show();   
			  $(  animate.presGroup() ).css("display","inline");
			  $( this.presGroup() ).addClass("zoomIn");
			  
			  setTimeout( (function(){
			  $(  animate.presGroup() ).removeClass("zoomIn");
			  $(  animate.presGroup() ).css("z-index","99");
			  $(  animate.presGroup() ).css("opacity","1");
			  
			  }),1000); 
			  
			  
			  
			  }),/* end group in */
			  
			  /*****************************/
			  group_out: (function(){
			  
			  
			  $( this.prevGroup() ).addClass("zoomOut");
			  $(  animate.prevGroup() ).css("z-index","1");
			  setTimeout( (function(){
			  $(  animate.prevGroup() ).removeClass("zoomOut");
			  
			  $(  animate.prevGroup() ).css("opacity","0");
			  $(  animate.prevGroup() ).css("display","none");
			  $( "#cover" ).hide();
			  
			  }),1000); 
			  
			   
			
			  }),/*end group out*/
			  
			  /*****************************/
			  
			  
			  
			  prevGroup: (function(){
			  return "#group_" + mobile.group.prev;
			  }),
			  
			  presGroup: (function(){
			  return "#group_" + mobile.group.pres;
			  }),
			  
			  prevPage: (function(){
			  return "#page_" + mobile.page.prev[mobile.group.pres];
			  }),
			  
			  presPage: (function(){
			  return "#page_" + mobile.page.pres[mobile.group.pres];
			  }),
			  
			  groupType: "" ,
			  
			  
			  /* لون الخلفية الافتراضي يتغير بتغير القروب */
			  color: "",
			  
			  
			  
			  }