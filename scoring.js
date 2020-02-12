$(document).ready(function(){
  function score_indicate(){
    // このような記述をすることで、subject_pointsという変数の中に
    // [国語の点数,英語の点数,数学の点数,理科の点数,社会の点数]という配列を作成できる。
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
    // さらにこのような記述をすることで、「合計点：」となっている右の部分に合計点が出力される
    let sum = subject_points[0];
    sum = sum + subject_points[1];
    sum = sum + subject_points[2];
    sum = sum + subject_points[3];
    sum = sum + subject_points[4];
    $("#sum_indicate").text(sum);
    // ここに、上記を参考にして平均点を出力する処理を書き込む
    let average = sum / subject_points.length;
    $("#average_indicate").text(average);

    average2 = function(){
    return average;
    }

    subject_points2 = function(){
    return subject_points;
    }
  }
  function get_achievement(){
    // ここに、ランクの値の文字列（平均点が80点以上なら"A"、60点以上なら"B"、40点以上なら"C"、それ以下なら"D"）を出力する処理を書き込む
    let get_average = average2();
    if ( get_average >= 80){
      return "A";
    } else if( get_average >= 60) {
      return "B";
    } else if( get_average >= 40) {
      return "C";
    } else {
      return "D";
    }
  }
  function get_pass_or_failure(){
    // ここに、全ての教科が60点以上なら"合格"の文字列、一つでも60点未満の教科があったら"不合格"の文字列を出す処理を書き込む
    let totalsubject = subject_points2();
    let list = totalsubject.length;
    let get_judge = "合格";
    for (let i=0; i<list; i++ ){
      if (totalsubject[i]<60) {
        get_judge ="不合格"
        break;
        }
      }
      return get_judge;
  }
  function judgement(){
    // ここに、「最終ジャッジ」のボタンを押したら「あなたの成績はAです。合格です」といった内容を出力する処理を書き込む
    // 下記の記述をすることで、「最終ジャッジ」のボタンを押すと「あなたの成績は（ここに「ランク」の値を入れる）です。（ここに「判定」の値を入れる）です」という文字の入った水色のフキダシが出力される処理が実装される。
    let rank = get_achievement();
    let last = get_pass_or_failure();
    return $('#declaration').append
    (`<label id="alert-indicate" class="alert alert-info">
    あなたの成績は${rank}です。${last}です
    </label>`);
  };
  $('#national_language, #english, #mathematics, #science, #society').change(function() {
    score_indicate();
  });
  $('#btn-evaluation').click(function() {
    $("#evaluation").text(get_achievement());
  });
  $('#btn-judge').click(function() {
    $("#judge").text(get_pass_or_failure());
  });
  $('#btn-declaration').click(function() {
    judgement();
  });
});
