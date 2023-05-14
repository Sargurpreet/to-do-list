function newItem() {

  // Adding a new item to the list of items:  
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    $('#list').append(li);
  }

  // Crossing out an item from the list of items:
  function crossOut() {
    li.toggleClass('strike');
  }

  li.on('dblclick', crossOut);

  // Adding the delete button "X"

  let crossOutButton = $('<crossOutButton>X</crossOutButton>');
  li.append(crossOutButton);

  // Adding CLASS DELETE (DISPLAY: NONE) from the css
  crossOutButton.on('click', deleteListItem);
  function deleteListItem(){
    li.remove();
  }

  // Reordering the items
  $('#list').sortable();



}