function translate(phrase)  {
  var firstHalf = []
  var secondHalf = []
  var vowels = ["a","e","i","o","u"];
  if (vowels.includes(phrase[0]))  {
    alert(phrase + "way")
  } else {
    for (var i = 0; i < phrase.length; i++) {
    }
  }
}

$(document).ready(function(event) {
  $("form#pigForm").submit(function(event) {
    event.preventDefault();
    var phraseInput = $("input#phrase").val();
    translate(phraseInput);
  });
});
