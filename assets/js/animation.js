$(window).on('load',()=>{
    $('.navigation').addClass('animated');
})



$('.s2-about-anim').waypoint((direction)=>{
    $('.s2-about-anim').addClass('animated fadeInDown');

}
,{
    offset:'70%'
});
$('.s2-pic-anim').waypoint((direction)=>{
    $('.s2-pic-anim').addClass('animated fadeInUp');

}
,{
    offset:'70%'
});



$('.wi-75').waypoint((dir)=>{
    $('.wi-75').addClass('animated');
},{
    offset:'400px'
})
$('.wi-90').waypoint((dir)=>{
    $('.wi-90').addClass('animated');
},{
    offset:'400px'
})
$('.wi-80').waypoint((dir)=>{
    $('.wi-80').addClass('animated');
},{
    offset:'450px'
})
$('.wi-65').waypoint((dir)=>{
    $('.wi-65').addClass('animated');
},{
    offset:'450px'
})

// ################ Service animation #################3


$('.services-row').waypoint((dir)=>{
    $('.services-row').addClass('animated slideInLeft');
},{
    offset:'70%'
})
$('.h-service').waypoint((dir)=>{
    $('.h-service').addClass('animated slideInRight');
},{
    offset:'50%'
})
// #################### Upper arrow ##################33
$('footer').waypoint((dir)=>{
    // $('.h-service').addClass('animated slideInRight');
    console.log("reached");
},{
    offset:'40%'
})

// ######################## testimonial ##############3333
$('.testi-heading').waypoint((dir)=>{
    $('.testi-heading').addClass('animated fadeInDown');
},{
    offset:'350px'
})
$('.testi-content').waypoint((dir)=>{
    $('.testi-content').addClass('animated zoomIn');
},{
    offset:'500px'
})