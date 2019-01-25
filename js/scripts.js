function translate(phrase)  {
  var firstHalf = "";
  var secondHalf = "";
  var vowels = ["a","e","i","o","u","y","A","E","I","O","U","Y"];
  var vowelsNoY = ["a","e","i","o","u","A","E","I","O","U"];
  var q = ["Q","q"]
  var u = ["U","u"]
  if (phrase[0] == "y" || phrase[0] == "Y") {
    for (var i = 0; i < phrase.length;) {
      if (!vowelsNoY.includes(phrase[i])) {
        i++
      } else {
        firstHalf = phrase.slice(0, i);
        secondHalf = phrase.slice(i, phrase.length);
        return (secondHalf + firstHalf + "ay");
      }
    }
  }
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
