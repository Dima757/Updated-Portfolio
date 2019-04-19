$(window).scroll(() => {
    let pixFromTop = $(this).scrollTop();
  
    $(".logo").css({
      transform: `translate(0px, ${pixFromTop / 5}%)`
    });
  });
  
  // var projectListOne = ["<p>Mini Projects</p>", "<hr>"];
  
  var projectListTwo = [
    "<p>Mini Projects</p>",
    "<hr>",
    "<div><a href='https://dima757.github.io/Word-Guess-Game/' target='_blank'>Word Guessing</a></div>",
    "<div><a href='https://dima757.github.io/TriviaGame/' target='_blank'>Trivia Game</a></div>",
    "<div><a href='https://dima757.github.io/Psychic-Game/' target='_blank'>Psychic Game</a></div>"
  ];
  
  // projectListOne.forEach(element => {
  //   $("#projectListOne").append(element);
  // });
  
  projectListTwo.forEach(element => {
    $("#projectListTwo").append(element);
  });
  
  $("#navWho").click(function() {
    $("html,body").animate(
      {
        scrollTop: $("#who").offset().top
      },
      800
    );
  });
  
  $("#navPortfolio").click(function() {
    $("html,body").animate(
      {
        scrollTop: $("#portfolio").offset().top
      },
      1000
    );
  });
  
  $("#navContact").click(function() {
    $("html,body").animate(
      {
        scrollTop: $("#footer").offset().top
      },
      1100
    );
  });
  
  $("#navResume").click(() => {
    $("#resumeModal").modal("toggle");
  });
  