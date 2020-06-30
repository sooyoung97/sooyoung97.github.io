//탭메뉴
$(function(){
  $('ul.tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');  //tab-1,2,3

	$('ul.tabs li').removeClass('current');
	$('.tab-content').removeClass('current');

	$(this).addClass('current');
	$('#'+tab_id).addClass('current');
  });
 
});