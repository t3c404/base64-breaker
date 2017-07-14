console.log('test1');

var $orders = $('#orders');
var $result = $('#result');

$(function() {
console.log('test2');
  $.ajax({
    type: 'GET',
    dataType: 'json',
    crossDomain:true,
    url: 'http://localhost:8080/decode/Zm9vYmFy',
    success: function(orders) {
      console.log('success', orders);
      $.each(orders, function(i, order) {
        $orders.append('<li> result: ' + order + ' </li>');
      });
    },
    error: function() {
      alert('error loading result');
    }
  });

  $('#button').on('click', function() {
    var order = {
      result: $result.val(),
    };

    $.ajax({
      type: 'POST',
      url: 'http://localhost:8080/encode/',
      data: order,
      success: function(newOrder) {
        console.log('success', newOrder);
        $orders.append('<li> result: ' + newOrder + ' </li>');
      },
      error: function() {
        alert('error saving result');
      }
    });

  });

});




/*document.getElementById('button').onclick = function() {
    var textBox = document.getElementById('textfield').value;


    //window.open("http://localhost:8080/encode/" + textBox);
}
*/
