'use strict';
const userNameInput = document.getElementById('user-name')
const assessmentButton = document.getElementById('assessment')
const resultDivision = document.getElementById('result-erea')
const tweetDivision = document.getElementById('tweet-erea')

assessmentButton.addEventListener(
   'click',
   function (){
    const userName = userNameInput.value;
    if (userName.length === 0 ){
      //名前が空の時は処理を終了する
      return;
      //診断結果表示エリア
    }
    resultDivision.innerText = ''
   
    const header = document.createElement('h3')
    header.innerText = '診断結果'
    resultDivision.appendChild(header)

    const paragrah = document.createElement('p');
    const result = assessment(userName);
    paragrah.innerText = result;
    resultDivision.appendChild(paragrah);

    //X投稿用ボタンの作成
tweetDivision.innerText = '';
const shareLink = document.createElement('a');
shareLink.innerText = 'Xで結果を共有する';
shareLink.setAttribute('href', 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(result) + '&hashtags=' + encodeURIComponent('あなたのいいところ'));
shareLink.setAttribute('target', '_blank');
tweetDivision.appendChild(shareLink);


//LINE共有ボタンの作成
const lineLink = document.createElement('a');
lineLink.innerText = 'LINEで共有する';
lineLink.setAttribute('class', 'line-button');
lineLink.setAttribute('href', 'https://line.me/R/msg/text/?' + encodeURIComponent(result + ' ' + location.href));
lineLink.setAttribute('target', '_blank');
tweetDivision.appendChild(lineLink);

//結果コピーボタンの作成（Instagram用）
const copyButton = document.createElement('button');
copyButton.innerText = '結果をコピーする';
copyButton.addEventListener('click', function () {
  navigator.clipboard.writeText(result);
  copyButton.innerText = 'コピーしました！';
});
tweetDivision.appendChild(copyButton);
    }
)

const answers = [
 '###userName###のいいところは声です。###userName###の特徴的な声は皆を惹きつけ、心に残ります。',
 '###userName###のいいところはまなざしです。###userName###に見つめられた人は、気になって仕方がないでしょう。',
 '###userName###のいいところは情熱です。###userName###の情熱に周りの人は感化されます。',
 '###userName###のいいところは厳しさです。###userName###の厳しさがものごとをいつも成功に導きます。',
 '###userName###のいいところは知識です。博識な###userName###を多くの人が頼りにしています。',
 '###userName###のいいところはユニークさです。###userName###だけのその特徴が皆を楽しくさせます。',
 '###userName###のいいところは用心深さです。###userName###の洞察に、多くの人が助けられます。',
 '###userName###のいいところは見た目です。内側から溢れ出る###userName###の良さに皆が気を惹かれます。',
 '###userName###のいいところは決断力です。###userName###がする決断にいつも助けられる人がいます。',
 '###userName###のいいところは思いやりです。###userName###に気をかけてもらった多くの人が感謝しています。',
 '###userName###のいいところは感受性です。###userName###が感じたことに皆が共感し、わかりあうことができます。',
 '###userName###のいいところは節度です。強引すぎない###userName###の考えに皆が感謝しています。',
 '###userName###のいいところは好奇心です。新しいことに向かっていく###userName###の心構えが多くの人に魅力的に映ります。',
 '###userName###のいいところは気配りです。###userName###の配慮が多くの人を救っています。',
 '###userName###のいいところはそのすべてです。ありのままの###userName###自身がいいところなのです。',
 '###userName###のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる###userName###が皆から評価されています。',
];

  /**
   * 名前の文字列渡すと診断結果を返す関数
   * @param {string} userName ユーザーの名前
   * @retirn {strimg} 結果診断
   */
  function assessment(userName){
    //全文のコード番号を取得してそれを足し合わせる
    let sumOfCharcode = 0;
    for (let i = 0; i < userName.length; i++){
      sumOfCharcode = sumOfCharcode + userName.charCodeAt(i);
    }

    // 文字のコード番号の合計を回答の数で割って添字の数値を決める
const index = sumOfCharcode % answers.length;
let result = answers[index]; //

result = result.replaceAll('###userName###',userName)
return result;
  }

console.log(assessment('太郎'));
console.log(assessment('次郎'));
console.log(assessment('太郎'));

userNameInput.addEventListener(
  'keydown',
  function (event) {
    if (event.code === 'Enter') {
      assessmentButton.dispatchEvent(new Event('click'));
    }
  }
);
