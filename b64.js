console.log('test1');

var $results = $('#results');
var $textfield = $('#textfield');

$(function() {
/*console.log('test2');
  $.ajax({
    type: 'GET',
    dataType: 'json',
    crossDomain:true,
    url: 'http://localhost:8080/encode/' + results,
    success: function(results) {
      console.log('success', results);
      $.each(results, function(i, result) {
        $results.append('<li> result: ' + result + ' </li>');
      });
    },
    error: function() {
      alert('error loading result');
    }
  });
*/




  $('#button').on('click', function() {
    var result = {
      textfield: $textfield.val(),
    };

    $.ajax({
      type: 'POST',
      url: 'http://localhost:8080/encode/' + textfield,
      data: result,
      success: function(newResult) {
        console.log('success', newResult);
        $results.append('<li> result: ' + newResult.result + ' </li>');
      },
      error: function() {
        alert('error saving result');
      }
    });

  });

});
