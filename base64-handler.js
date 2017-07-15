//console.log('test1');

var $results = $('#results');
var $textfield = $('#textfield');

$(function() {
/*console.log('test2');
  $.ajax({
    type: 'GET',
    dataType: 'json',
    crossDomain:true,
    url: 'http://localhost:8080/encode/foobar',
    success: function(results) {
      console.log('success', results);
      $.each(results, function(i, result) {
        $results.append('<li>' + i + ' : ' + result + ' </li>');
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
      type: 'GET',
      url: 'http://0.0.0.0:8080/encode/' + $textfield.val(),
      data: result,
      success: function(newResult) {
        //console.log('success', newResult);
        $results.append('<li>' + 'encode | ' + $textfield.val() + ' : ' + newResult.result + ' </li>');
      },
      error: function() {
        alert('error saving result');
      }
    });

    $.ajax({
      type: 'GET',
      url: 'http://0.0.0.0:8080/decode/' + $textfield.val(),
      data: result,
      success: function(newResult) {
        //console.log('success', newResult);
        $results.append('<li>' + 'decode | '  + $textfield.val() + ' : ' + newResult.result + ' </li>');
      },
      error: function() {
        alert('error saving result');
      }
    });

  });

});
