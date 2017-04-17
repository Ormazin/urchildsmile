			  
			  
			  
			  var lang = {


			  apply:(function(){
			  
			  var l = this.l;	
			  
			  $(".lang_articles_list_title").text( l.List );
			  $(".lang_articles_list_main").text( l.Sections );
			  $(".lang_Pregnancy").text( l.Pregnancy );
			  $(".lang_Child").text( l.Child );
			  $(".lang_Diet").text( l.Diet );
			  $(".lang_Dental").text( l.Dental );
			  $(".lang_Children").text( l.Children );
			  $(".lang_General").text( l.General );
			  $(".lang_Videos").text( l.Videos );
			  $(".lang_Consultations").text( l.Consultations );
			  $(".lang_Send_new").text( l.Send_new );
			  $(".lang_View").text( l.View );
			  $(".lang_Consultation").text( l.Consultation );
			  
			  $("#consult_name").attr("placeholder" , l.Name );
			  $("#consult_email").attr("placeholder" , l.Email );
			  $("#consult_title").attr("placeholder" , l.Title );
			  $("#consult_doctor").attr( "placeholder" , l.Doctor );
			  $("#consult_text").attr( "placeholder" , l.Message );
			  $(".lang_Send").text( l.Send );
			  $(".lang_Back").text( l.Back );

			  $(".lang_appbook").text( l.appbook );
			  
			  $(".lang_Visit").text( l.Visit );
			  $(".lang_About").text( l.About );
 
			  $(".lang_Add").text( l.Add );
			  $(".lang_Age").text( l.Age );
			  $(".lang_Sex").text( l.Sex );
			  $(".lang_Date").text( l.date );
			  
			  
			  $("#child_name").attr("placeholder" , l.Name );
			  $("#child_old").attr("placeholder" , l.Age );
			  $("#child_date").attr( "placeholder" , l.date );
			  $("#child_doctor").attr( "placeholder" , l.Doctor );
 
 
 
			  }),
			  
			  /***********************************************/
			  
			  l:{},
			  
			  english:(function(){
			  this.l.Sections = "Sections";
			  this.l.List = "List";
			  this.l.Pregnancy = "Pregnancy";
			  this.l.Child = "Child's theeth";
			  this.l.Diet = "Diet & children dental";
			  this.l.Dental = "Dental diseases prevention";
			  this.l.Children = "Children dental problems";
			  this.l.General = "General health issues";
			  
			  this.l.Visit = "Visit schedule";
			  this.l.About = "About us";
			  this.l.Videos = "Videos";
			  
			  this.l.Consultation = "Consultation";
			  this.l.View = "View Consultations";
			  this.l.Consultations = "Consultations";
			  this.l.Back = "Back";
			  this.l.Send_new = "Send New";
			  this.l.Send = "Send";
			  this.l.Name = "Name";
			  this.l.Email = "Email";
			  this.l.Doctor = "Doctor";
			  this.l.Title = "Title";
			  this.l.Message = "Message";
			  this.l.Add = "Add";
			  this.l.Age = "Age";
			  this.l.Sex = "Sex";
			  this.l.date = "Date";


			  this.l.appbook = "Appointment Booking";
			  			  
			  })/*end function english*/
			  }