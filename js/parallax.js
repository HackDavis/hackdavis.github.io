/* Parallax */
// Initialze rellax with class .rellax and default data properties
var rellax = new Rellax('.rellax')


var GoogleChrome = 'Google Chrome'
var AppleSafari = 'AppleSafari'
var Opera = 'Opera'
var MozillaFirefox = 'Mozilla Firefox'

var sUsrAg = navigator.userAgent
var sBrowser

if (sUsrAg.includes('Chrome'))
  sBrowser = GoogleChrome

else if (sUsrAg.includes('Safari'))
  sBrowser = AppleSafari

else if (sUsrAg.includes('Opera'))
  sBrowser = Opera

else if (sUsrAg.includes('Firefox'))
  sBrowser = MozillaFirefox

else
  sBrowser = ''


/* Navbar links */

let duration = 1500
$('#click2017').click(function(){
  $(this).children()[0].click()
})

$('#clickAbout').click(function(){
  $('#about-text').velocity('scroll', {offset: -230, duration: duration, easing:'easeInOutCubic'})
})

$('#clickSchedule').click(function(){
  $('#schedule').velocity('scroll', {offset: -150, duration: duration, easing: 'easeInOutCubic'})
})

$('#clickSponsors').click(function(){
  $('footer').velocity('scroll', {offset: -50, duration: duration, easing: 'easeInOutCubic'})
})

$('#clickFAQ').click(function(){
  $('#FAQ').velocity('scroll', {offset: -150, duration: duration, easing: 'easeInOutCubic'})
})

var closeTimeout
/* Apply button */
$('#lantern,#apply-button').click(function(){
  if(window.innerWidth <= 750 && sBrowser == 'Mozilla Firefox') {
    window.location.href='./apply.html'
  }

  if(closeTimeout) {
    clearInterval(closeTimeout)
    closeTimeout = null
  }

  $('#typeform,#close').show()
  $('html').css('overflow', 'hidden')
  $('#close').transition({top: '10px'})
  $('#typeform').transition({top: 0})
})
$('#close').click(function(){
  $('#close').transition({top: '100%'})
  $('#typeform').transition({top: '100%'})
  $('html').removeAttr('style')

  if(closeTimeout) {
    clearInterval(closeTimeout)
  }

  closeTimeout = setTimeout(function() {
    $('#typeform,#close').hide()
  }, 1000)

})
