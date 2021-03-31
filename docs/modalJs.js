// モーダル表示の組立
function modalData(){
  var html = '<section id="modalArea" class="modalArea">';
  html = html + '<div id="modalBg" class="modalBg"></div>';
  html = html + '<div class="modalWrapper">';
  html = html + '<div class="modalContents" style="text-align: left;">';
  html = html + txtTreatment(document.getElementById("interviewName").value).split('\n').join('<BR>').split(' ').join('&nbsp;');
  html = html + '</div>';
  html = html + '</div>';
  html = html + '</section>';
  // ボディ部へセット
  $("body").append(html);
}