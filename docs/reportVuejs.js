var title = new Vue({
  el:'#title',
  data: {
    lblTitle:'Web報告書作成',
  }
})
// 画面のタイトル一覧
var screen = new Vue({
  el:'#screen',
  data: {
    lblinterviewName:'タイトル',
    lblinterviewDate: '面談日時',
    lblinterviewMember: '対象者',
    lblinterviewer: '面談者',
    lblreportDate: '報告日',
    lblreporter: '報告者',
    lblreportContents:'報告内容',
    lblfeeling:'所感',
    lblstory:'経緯'
  }
})
// ボタン制御
var btn = new Vue({
  el:'#btn',
  data : {
    lblsave:'ダウンロード',
    lblpreview:'プレビュー',
    contents:''
  },
  methods: {
    save: function () {
      textDownload();
    },
    preview: function(){
      modalData();
      $('#modalArea').fadeIn();
    }
  }
})