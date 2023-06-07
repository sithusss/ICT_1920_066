document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener("click", function(e)
    {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

$('textarea').keyup(function() {
    let characterCount = $(this).val().length,
        current = $('#current'),
        maximum = $('#maximum'),
        theCount = $('#the-count');
  
    current.text(characterCount);
  
    /*This isn't entirely necessary, just playing around*/
    if (characterCount < 10) {
      current.css('color', '#666');
    }
    if (characterCount > 20 && characterCount < 90) {
      current.css('color', '#6d5555');
    }
    if (characterCount > 30 && characterCount < 100) {
      current.css('color', '#793535');
    }
    if (characterCount > 40 && characterCount < 120) {
      current.css('color', '#841c1c');
    }
    if (characterCount > 50 && characterCount < 139) {
      current.css('color', '#8f0001');
    }
  
    if (characterCount >= 60) {
      maximum.css('color', '#8f0001');
      current.css('color', '#8f0001');
      theCount.css('font-weight', 'bold');
    } else {
      maximum.css('color', '#666');
      theCount.css('font-weight', 'normal');
    }
  });
  