// sort
$('#tag-sort').on('change', () => {
  console.log($('#tag-sort').val());
  if ($('#tag-sort').val() == '' || $('#tag-sort').val() == 'all') {
    // 全て
    $('.tag-group').show();
  } else {
    $('.tag-group').hide();
    $('#' + $('#tag-sort').val()).show();
  }
});
