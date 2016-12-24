$("ul").on("click", "li", function(){

	$(this).toggleClass("completed");
	
});


$("ul").on("click","span",function(event) 
{
	//alert("x");
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});

		event.stopPropogation(); 
});

$("input[type='text']").keypress(function(event){ 

	if(event.which === 13) 
	{
		var inp = $(this).val() ;
		$(this).val("");  
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+inp+"</li>");

	}
});

$(".fa-plus").click(function() {
	$("input[type='text']").fadeToggle();
});