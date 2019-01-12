(
  function() {
  'use strict';

    var calculate = document.getElementById('calculate');

    calculate.addEventListener('click', function() {
    //id.addEventListener('what kind of events', function, option);

      var subtotal = document.getElementById('subtotal');
      var taxPercent = document.getElementById('tipPercent');
      var result = document.getElementById('result');

      var total = taxPercent.value;
       if (taxPercent.value == 20) {
           total = Number(subtotal.value) + (subtotal.value * 0.2);
       } else if (taxPercent.value == 15) {
           total = Number(subtotal.value) + (subtotal.value * 0.15);
       } else if (taxPercent.value == 10) {
           total = Number(subtotal.value) + (subtotal.value * 0.1);
       }

      result.innerText =
      'Tip $' + (subtotal.value * (taxPercent.value / 100)).toFixed(2) + '\n' +
      'Total               $' + total.toFixed(2);

      var footer = document.getElementById('footer');
      footer.innerText =
      '------------- Check Closed --------------'
      + '\n' + '\n' +
      'Join our loyalty prpgram'
      + '\n' +
      'Starbucks Rewards®'
      + '\n' +
      'Sign up for promotional emails'
      + '\n' +
      'Visit Starbucks.com/rewards'
      + '\n' +
      'Or download our app'
      + '\n' +
      'At participating stores'
      + '\n' +
      'Some restrictions apply'




      //
      // console.debug('This is a debug log');
      // console.error('This is an error log');
    });

    //tip amountをボタンを押してから表示させる
    // total.style.display = "none";
  }
)();

// var total = function(n){
//     var tips = 0.8;
//     total = n * tips;
//     return (total)
//   };
