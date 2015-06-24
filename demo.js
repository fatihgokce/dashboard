function makeDroppable(){
    var ind=$(".drp").length-1;
    console.log("ind:"+ind);
    $(".drp:eq("+ind+")").droppable({
			 
			 activeClass: "ui-state-hover",
			 hoverClass: "ui-state-active",
		 
		   drop: function(event, ui){
		    // alert($(event.target);
			   $(event.target).css("background-color","pink");
			   //$("#wrp").append('<div class="box drp" style="background-color:blue;border:1px dotted #ccc"></div>');
	           $(event.target).html(ui.draggable.html());
			   $(' <div class="content"><div class="drop-target  drp">Drop Here!</div></div>')
			   .appendTo("#wrp").droppable().draggable();;
			   makeDroppable();
			   console.log("main drop function");
			   //drag(event, ui );
		   }
		})	
  }
window.onload = function() {
	$(function(){
		 $(".rs").resizable();
	 		  $(".sidebar-menu  li").draggable ({
			     
		   	   //containment :"#main",
		   	     revert: "invalid",
		   	     helper: "clone",
		         opacity :0.8,
		         cursor : "crosshair"
	     });
	 $(".drp").droppable({
			 
			 activeClass: "ui-state-hover",
			 hoverClass: "ui-state-active",
		 
		   drop: function(event, ui){
		    // alert($(event.target);
			   $(event.target).css("background-color","pink");
			   //$("#wrp").append('<div class="box drp" style="background-color:blue;border:1px dotted #ccc"></div>');
			   $(event.target).html(ui.draggable.html());
			   $(' <div class="content"><div class="drop-target  drp">Drop Here!</div></div>')
			   .appendTo("#wrp").droppable().draggable();
			   makeDroppable();
			   console.log("main drop function");
			   //drag(event, ui );
		   }
		}).draggable();	
	});
};
