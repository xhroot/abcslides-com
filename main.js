$(() => {

  // Set up navigation, selection between slide sets.
  const navLinks = Object.keys(slideSets)
      .map((name) => `<a href="#" class="setLink">${name}</a>`)
      .join(' | ');
  $('#nav').html(navLinks);

  // When new slide set selected, switch to new set and restart at beginning.
  $('.setLink').click((e) => {
    const newSet = slideSets[e.target.innerText];
    $(document).off('keyup');
    $(document).keyup(newSet.keyup.bind(newSet, display));
    newSet.reset();
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
