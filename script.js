function myFunc(){
    
}
$('topbar-choice').click(function()
{
    $(this).children('a').toggleClass('active');
    $(this).siblings('li').children('a').removeClass('active');
});