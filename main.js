$(() => {
  //const slideSet = phoenician;
  //const slideSet = classicalHebrew;
  const slideSet = greek;

  const display = (slide) => {
    const answer = slide.answer.length > 0
                   ? slide.answer
                   : '&nbsp;';

    $('#question').html(slide.question);
    $('#answer').html(answer);
  };

  $(document).keyup(slideSet.keyup.bind(slideSet, display));

  // Initialize on start.
  display(slideSet.current());
});

console.log('v1');
