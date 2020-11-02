$(function(){
  $('img').css('height','400px');
  $('img').css('width','500px');

  $('.answerlist').css('background-color','#6699ff');
  $('.answerlist').css('border','2px solid #000000');
  $('.answerlist').css('text-align','center');
  $('.answerlist').css('border-radius','4px');
  $('.answerlist').css('list-style','none');
  $('answerlist').css('cursor','text');

  $('.answer1').click(function(){
    var $answer=$('.answer1').find('p');
  if($answer.hasClass('open')){
    $answer.removeClass('open');
    $answer.slideUp();
  }else {
    $answer.addClass('open');
    $answer.slideDown();
  }
});

$('.answer2').click(function(){
  var $answer=$('.answer2').find('p');
if($answer.hasClass('open')){
  $answer.removeClass('open');
  $answer.slideUp();
}else {
  $answer.addClass('open');
  $answer.slideDown();
}
});

$('.answer3').click(function(){
  var $answer=$('.answer3').find('p');
if($answer.hasClass('open')){
  $answer.removeClass('open');
  $answer.slideUp();
}else {
  $answer.addClass('open');
  $answer.slideDown();
}
});

$('.answer4').click(function(){
  var $answer=$('.answer4').find('p');
if($answer.hasClass('open')){
  $answer.removeClass('open');
  $answer.slideUp();
}else {
  $answer.addClass('open');
  $answer.slideDown();
}
});

$('#top-btn').css('cursor','pointer');

$('#top-btn').click(function(){
  $('html, body').animate(
    {'scrollTop':0},500);
  });

  $('.btn').click(function(){
    var id=$(this).attr('href');
    var position=$(id).offset().top;
    $('html, body').animate(
      {'scrollTop':position},500);
  });

$('.video').click(function(){
  var id=$('.video').attr('href');
  var position=$id.offset().top;
  $('html,body').animate(
    {'scrollTop':position},1000);

});
});
