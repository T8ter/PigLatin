function translate(phrase)  {
  var firstHalf = "";
  var secondHalf = "";
  var vowels = ["a","e","i","o","u","A","E","I","O","U"];
  if (vowels.includes(phrase[0]))  {
    return (phrase + "way");
  } else {
      for (var i = 0; i < phrase.length;) {
        if (!vowels.includes(phrase[i])) {
          i++
        } else {
          firstHalf = phrase.slice(0, i);
          secondHalf = phrase.slice(i, phrase.length);
          return (secondHalf + firstHalf + "ay");

        }
    }
  }
}

$(document).ready(function(event) {
  $("form#pigForm").submit(function(event) {
    event.preventDefault();
    var phraseInput = $("input#phrase").val();
    translate(phraseInput);

    $("#result").text(translate(phraseInput));
  });
});
