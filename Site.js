alert("This website is still a work in progress.")

//Expand and collapse articles

$(document).ready(function(){
    
    $(".read-article").click(function(){
        
        $(".blog-post").slideToggle(1000, function(){
            
            var visible = $(".blog-post").is(":visible");
            $(".read-article").text(visible? " - Collapse Article ":" + Read Article ");
        }); 
    });
});

//Scrolling from nav bar options

$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top    
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });
});