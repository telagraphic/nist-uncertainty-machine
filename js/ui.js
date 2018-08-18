$('.add-input').click(function(event) {
  event.preventDefault();
  var value = $('#inputs').attr("value");
  value = ++value;
  $("#inputs").attr("value", value);
  console.log(value);

});

$('.remove-input').click(function(event) {
  event.preventDefault();
});
