// Make font proportional to window size
// how to handle swipe?

// Global?
var letterCode = 'A'.charCodeAt();

class SlideSet {
  constructor(slides) {
    this.slides = slides;
    this.position = 0;
  }

  current() {
    return this.slides[this.position];
  }

  advance() {
    if (this.position < this.slides.length-1) {
      this.position++;
    }
  }

  rewind() {
    if (this.position > 0) {
      this.position--;
    }
  }
  
  keyup(event) {
    if (event.keyCode === 37) {
      this.rewind();
    } else if (event.keyCode === 39) {
      this.advance();
    } 
    return this.current();
  }
}

$(() => {
  
  const phoenician = new SlideSet([
    {'A' : ''},
    {'B' : ''},
    {'C' : ''},
    {'D' : ''},
    {'E' : ''},
    {'F' : ''},
    {'G' : ''},
    {'H' : ''},
    {'I' : ''},
    {'J' : ''},
    {'K' : ''},
    {'L' : ''},
    {'M' : ''},
    {'N' : ''},
    {'O' : ''},
    {'P' : ''},
    {'Q' : ''},
    {'R' : ''},
    {'S' : ''},
    {'T' : ''},
    {'U' : ''},
    {'V' : ''},
    {'W' : ''},
    {'X' : ''},
    {'Y' : ''},
    {'Z' : ''},
  ]);

  const greek = new SlideSet([
    {'A' : 'aleph'},
    {'B' : 'bet'},
    {'G' : 'gimel'},
  ]);

  const slideSet = phoenician;

  $(document).keyup((e) => {
    //``TODO return no change code?
    const slide = slideSet.keyup(e);
  
    //``TODO map doesn't make sense here. even a js list would be better.
    //``TODO maybe 2 lists: letter + names. validate same size. if blank val, ignore.
    const letter = Object.keys(slide)[0];
    $('#container').html(letter);

    const name = Object.values(slide)[0];
    console.log(name);
  });

  // Initialize to start.
  const letter = Object.keys(slideSet.current())[0];
  $('#container').html(letter);
});


