$(() => {

  // Set up navigation, selection between slide sets.
  const navLinks = Object.keys(slideSets)
      .map((name) => `<a href="#" class="setLink">${name}</a>`)
      .join(' | ');
  $('#nav').html(navLinks);

  //``TODO slideSet needs a reset()
  //``TODO bug position is shared? or weird
  // When new slide set selected, switch to new set and reset position.
  $('.setLink').click((e) => {
    const newSet = slideSets[e.target.innerText];
    $(document).keyup(newSet.keyup.bind(newSet, display));
    display(newSet.current());
  });
  
  // Display function for slide set.
  const display = (slide) => {
    const answer = slide.answer.length > 0
                   ? slide.answer
                   : '&nbsp;';

    $('#question').html(slide.question);
    $('#answer').html(answer);
  };

  // Initialize on start.
  const slideSet = slideSets[Object.keys(slideSets)[0]];
  $(document).keyup(slideSet.keyup.bind(slideSet, display));
  display(slideSet.current());
});

console.log('v1');
