 $(document).ready(function(){
    $('.modal').modal();
    $('.parallax').parallax();
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $(".slider").slider({full_width: true});
    $('.slider').slider({height:550});
  	 $(".myreviews").carousel({
  		numVisible: 7,
  		shift: 55,
  		padding: 55,
  	});
  });
    $('.dropdown-trigger').dropdown();  

 function toggleModal(){
 	var instance = M.Modal.getInstance($('#modal3'))
 	instance.open();
 }
