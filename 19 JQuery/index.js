$('button').click(function(){
    $('h1').css('color', 'purple');
});

$('h1').on("mouseover",function(event){
    $('h1').css('color', 'green');
});