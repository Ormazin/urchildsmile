              
			  
			  
			  /******************** القروب الرئيسي ********************/
			  
			  Group.create({
			  
			  id   : "home",
			  first: true  ,
			  
			  start: (function(){
			  
			  animate.group_in();
			  animate.page_color("#dceff5");
			  animate.list_out();
			  animate.loading_out();
			 
 
			  }),
			  
			  
			  end: (function(){
			  
			  animate.group_out();
			  
			  
			  }) 
			  
			  });
			  
			  
			  /******************** فروب المعلومات ********************/
			  
			  Group.create({
			  
			  id   : "articles",
			  first: false  ,
			  
			  start: (function(){
			  
			  
			  animate.group_in();
			  animate.page_color("#2ecc71");
 
			  }),
			  
			  
			  end: (function(){
			  
			  animate.group_out();
			  
			  }) 
			  
			  });
			  
			  
			  /******************** فروب الفيديو ********************/
			  
			  Group.create({
			  
			  id   : "video",
			  first: false  ,
			  
			  start: (function(){
			  
			  animate.group_in();
 			  data.video_list( data.type );
			  
			  animate.page_color("#c0392b");
  
			  }),
			  
			  
			  end: (function(){
 			  animate.group_out();
			  animate.list_out();
			  
			  }) 
			  
			  });
			  
			  /******************** فروب الاستشارات ********************/
			  
			  Group.create({
			  
			  id   : "consult",
			  first: false  ,
			  
			  start: (function(){
			  
			  animate.group_in();
			  animate.page_color("#f39c12");
  
			  }),
			  
			  
			  end: (function(){
 			  animate.group_out();
			  
			  }) 
			  
			  });
			  
			  /******************** فروب احجز موعدك ********************/
			  
			  Group.create({
			  
			  id   : "appbook",
			  first: false  ,
			  
			  start: (function(){
			  
			  animate.group_in();
			  data.appbook_list( data.type );
			  animate.page_color("#4a4a4a");
  
			  }),
			  
			  
			  end: (function(){
 			  animate.group_out();
			  animate.list_out();
			  
			  }) 
			  
			  });
			  
			  /******************** فروب ذكرني ********************/
			  
			  Group.create({
			  
			  id   : "remind",
			  first: false  ,
			  
			  start: (function(){
			  
			  animate.group_in();
			  animate.page_color("#1abc9c");
			  remind.get();
  
			  }),
			  
			  
			  end: (function(){
 			  animate.group_out();
			  
			  }) 
			  
			  });
			  
			  /******************** فروب من نحن ********************/
			  
			  Group.create({
			  
			  id   : "about",
			  first: false  ,
			  
			  start: (function(){
			  
			  animate.group_in();
			  animate.page_color("#2c3e50");
  
			  }),
			  
			  
			  end: (function(){
 			  animate.group_out();
			  
			  }) 
			  
			  });
			  
		 