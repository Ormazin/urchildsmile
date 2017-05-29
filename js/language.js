			  
			  
			  
			  var lang = {


			  apply:(function(){
			  
			  var l = this.l;
			  
			  	
			  langen = "en" ;
			  $("#arabic_about").hide();
			  $("#english_about").show();
			  
			  $(".lang_articles_list_title").html( l.List );
			  $(".lang_articles_list_main").html( l.Sections );
			  $("#about_app_team").html("About App");
			  $(".lang_Pregnancy").html( l.Pregnancy );
			  $(".lang_Child").html( l.Child );
			  $(".lang_Diet").html( l.Diet );
			  $(".lang_Dental").html( l.Dental );
			  $(".lang_Children").html( l.Children );
			  $(".lang_General").html( l.General );
			  $("#button_general_lang").css("height","100px");
			  $(".lang_Videos").html( l.Videos );
			  $(".lang_Consultations").html( l.Consultations );
			  $(".lang_Send_new").html( l.Send_new );
			  $(".lang_View").html( l.View );
			  $(".lang_Consultation").html( l.Consultation );
			  
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
			  $("#consult_doctor_lang").html( l.Doctor );
			  $("#consult_doctor_lang").html( l.Doctor );
			  $("#do_you_pub").html("Do you want publishing?");
 
 
 
			  }),
			  
			  /***********************************************/
			  
			  l:{},
			  
			  english:(function(){
			  this.l.Sections = "Sections";
			  this.l.List = "List";
			  this.l.Pregnancy = "<span style='font-size:11px; margin-right:-25px;'> Pregnancy and dental health </span>";
			  this.l.Child = "<span style='font-size:12px'>  Your child's teeth </span> ";
			  this.l.Diet = " <span  style='font-size:10px; margin-right:-25px;'>  Diet and children's dental health </span> ";
			  this.l.Dental = " <span  style='font-size:12px; margin-left:-15px;'>  Dental disease prevention </span> ";
			  this.l.Children = " <span style='font-size:12px;  margin-right:-15px;'>  Children dental problems  </span> ";
			  this.l.General = "<span style='font-size:13px;  margin-left:-15px; '>Dental care for children with general health issues</span> ";
			  
			  this.l.Visit = "Visit schedule";
			  this.l.About = "About us";
			  this.l.Videos = "Videos";
			  
			  this.l.Consultation = "Consultation";
			  this.l.View = "<span style='font-size:13px;  '>View Consultations</span>";
			  this.l.Consultations = "Consultations";
			  this.l.Back = "Back";
			  this.l.Send_new = "<span style='font-size:13px;  '>Send New</span>";
			  this.l.Send = "Send";
			  this.l.Name = "Name";
			  this.l.Email = "Email";
			  this.l.Doctor = "Doctor";
			  this.l.Title = "Title";
			  this.l.Message = "Message";
			  this.l.Add = "Add a notifications";
			  this.l.Age = "Age";
			  this.l.Sex = "Sex";
			  this.l.date = "Date";


			  this.l.appbook = "Book an appointment";
			  			  
			  })/*end function english*/
			  }