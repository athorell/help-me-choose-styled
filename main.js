$(function() {
  $('.resultSection').hide()
  $('h1').addClass('in')
  $('.inputSection').addClass('in')
  $('.submit').addClass('in')
  $('.focus').focus()

  var options = []
  var add_option = function() {
    $('.focus').removeClass('focus')
    $('.inputs').append('<input class="focus fade"></input>')
    $('.focus').focus()
    setTimeout(function() {
      $('input.focus.fade').addClass('in')
    }, 100)
  }

  var start_over = function() {
    options = []
    $('h1').removeClass('in')
    $('.inputSection').removeClass('in')
    $('.submit').removeClass('in')
    $('h1').text('Help me choose between..')
    $('.resultSection').hide()
    $('.inputSection').show()
    $('.inputs').html('<input class="focus" placeholder="Something"></input>')
    $('.focus').focus()
    $('button').text('Go!')
    $('button').click(submit)
    $('h1').addClass('in')
    $('.inputSection').addClass('in')
    $('.submit').addClass('in')
  }

  var submit = function() {
    $('.inputSection').hide()
    $('.resultSection').css('display', 'flex')
    $('h1').text('The winner is:')
    $('input').each(function() {
      if ($(this).val() !== '') {
        options.push($(this).val())
      }
    })
    var winner = options[Math.floor(Math.random() * options.length)]
    $('.resultSection').text(winner)
    $('button').text('New round')
    $('button').click(start_over)
    setTimeout(function() {
      $('.resultSection').addClass('in')
    }, 300)
  }

  $('.addOption').click(add_option)
  $('button').click(submit)
  $('body').keypress(function(e) {
    if (e.which == 13) {
      add_option()
    }
  })
})
