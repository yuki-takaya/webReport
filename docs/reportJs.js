$(function() {
  $(document).on('click','#modalBg',function(){
    $('#modalArea').fadeOut();
  });
});
// テキスト出力処理
function textDownload(){
  // ファイル名
  var interviewName = document.getElementById("interviewName").value;
  var filetitle = interviewName
  if(interviewName == ""){
    filetitle =  "面談者";
  }
  // ファイル名の組み立て
  var txtName = getDate() + "_" + filetitle + "_報告書.txt";
  var blob = new Blob([ txtTreatment(interviewName) ], { "type":"text/plain" });
  // IE以外
  if (window.navigator.msSaveBlob) {
    window.navigator.msSaveBlob(blob, txtName);
    window.navigator.msSaveOrOpenBlob(blob, txtName);
  }else{
  // IEのみ
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.target = '_blank';
    a.download = txtName;
    a.click();
    URL.revokeObjectURL();
  }
}
// テキスト作成処理
function txtTreatment(interviewName){
  var space = "    ";
  var n = "\n";
  // テキストデータ
  var interviewMember = document.getElementById("interviewMember").value;
  var interviewDate = document.getElementById("interviewDate").value;
  var interviewer = document.getElementById("interviewer").value;
  var reportDate = document.getElementById("reportDate").value;
  var reporter = document.getElementById("reporter").value;
  var reportInfo = "タイトル：" + interviewName + n + "面談日時：" + interviewDate + n + "対象者：" + interviewMember + n + "面談者：" + interviewer + n + "報告日：" + reportDate + n + "報告者：" + reporter;
  // 経緯
  var reportStory = document.getElementById("reportStory").value;
  // 面談内容
  var reportContents = document.getElementById("reportContents").value;
  // 所感
  var feeling = document.getElementById("feeling").value;
  // 報告書組立
  var content = reportInfo + n + n + "◆経緯" + n + space + reportStory.replace(/\n/g,'\n' + space) + n + n + "◆面談内容" + n + space + reportContents.replace(/\n/g,'\n' + space) + n + n + "◆所感" + n + space + feeling.replace(/\n/g,'\n' + space);
  
  return content;
}
// 日付取得yyyymmdd
function getDate(){
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  return year.toString() + ('0' + month.toString()).slice(-2) + ('0' + day.toString()).slice(-2);
}
