console.log('my name is ralph, and I am connected!');

$(document).on('click', '#saveButton', function() {
  console.log('I\'m clicked');
  thisId = $(this).attr('data-id');
  let selectedDiv = $('#articleId'+thisId+'').html();
  console.log($(selectedDiv).find('h4').text(), $(selectedDiv).find('p').text());
  console.log($(selectedDiv).data('link'));

  let title =  $(selectedDiv).find('h4').text();
  let link = $(selectedDiv).data('link');
  let summary = $(selectedDiv).find('p').text();

  $(this).addClass('invisible');

  $.post('/articles', {
    title: title,
    link: link,
    summary: summary
  },(data,status) => {
    console.log('posting:',data);
    console.log('status:', status);
  })
  .then((err) => {
    if (err) throw err;
  });
});

$('#deleteButton').on('click', () =>{
  console.log("delete button pressed");
  $.ajax({
    url: '/articles',
    type: 'DELETE',
    success: function(result) {
      console.log('Action:', result);
    }
  })
})

$('#saveNote').on('click', function() {
  console.log('button clicked', $(this).data('id'));
  console.log($('#noteTitle').val());
  console.log($('#messageText').val());
  let articleId = $(this).data('id');
  let title = $('#noteTitle').val();
  let body = $('#messageText').val()

  $.post('/notes', {
    articleId: articleId,
    title: title,
    body: body
  },(data, status) => {
    console.log('posting:', data);
    console.log('status:', status);
  })
  .then((err) =>{
    if (err) throw err;
  });
})

// $('#noteModal').on('show.bs.modal'), function(event) {
//   console.log('executing');
//   var button = $(event.relatedTarget)
//   var articleId = button.data('article')
//   console.log(articleId);
//   var modal = $(this)
//   modal.find('#noteTitle').text("testing", aritcleId);
//   modal.find('#saveNote').data('data-id', aritcleId);
// }
