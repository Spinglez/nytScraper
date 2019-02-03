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

  // $.ajax({
  //   method: "POST",
  //   url: '/articles',
  //   data: {
  //     title: title,
  //     link: link,
  //     summary: summary
  //   }
  // }).then(data => {
  //   console.log('Sending:', data);
  // });

  $.post('/articles', {
    title: title,
    link: link,
    summary: summary
  },function(data,status){
    console.log('posting: ',data);
    console.log('status:', status);
  })
  .then((err) => {
    if (err) throw err;
    console.log('Post completed!');
  });
});
