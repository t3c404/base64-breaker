setInterval(function(){
  $('#results td').each(function(){
      if ($(this).text() == 'not found!') {
          $(this).css('background-color','#f33');
          $(this).css('font-weight','bold');
      }
  });
}, 500);
