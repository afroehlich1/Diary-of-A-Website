//JavaScript Document
	
$( document ).ready(function() {
	//declare global variables
	/*var faded=1;
	var brighten=1;
	
       $("a").hover(function(){
  			$(this).css("background-color","green"); $(this).css("color","white");
  			},function(){
  $(this).css("background-color","white"); $(this).css("color","black");
}); 
		//Disable button disables the links and alerts user
		$( "Button.stop" ).click(function() {
			 alert( "The links will no longer take you to the requested website." );
			$("a").click(function(event){
			 event.preventDefault();
			 $(this).addClass( "test" );
			 $(this).css("background-color","yellow");
			 $(this).unbind('hover').hover();
			 
			});
		});
		//Enable button re-enable the links using the .unbind method
		$( "Button.go" ).click(function() {
			alert( "The links are active." );
			$("a").unbind('click').click();
			$("a").removeClass( "test" );
			$("a").css("background-color","white");
			$("a").hover(function(){
  			$(this).css("background-color","green"); $(this).css("color","white");
  			},function(){
  $(this).css("background-color","white"); $(this).css("color","black");
});
		});
		
		$("#Fade").click(function() {
			if (faded>1) {
				alert("The links are already faded.");
			}
			else {
			$("a").fadeTo("slow",0.15);
			faded++;
			brighten=(brighten=1);
			}
		});
		
		$("#Unfade").click(function() {
			if (brighten!=1) {
				alert("The links are bright enough.");
			}
			else {
			$("a").fadeTo("slow",1);
			faded=1;
			brighten++;
			}
		});*/
		  
		 $("#face").hover(function(){
			 $(this).css("opacity","0.5")},
			 function(){$(this).css("opacity","1");
		 });
		 
		 
		 $("#face").click(function(){
			 $(this).slideUp("slow");
			 $(this).slideDown("slow");
			  
		 });
		


});


