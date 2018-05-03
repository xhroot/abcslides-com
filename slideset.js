class SlideSet {
  constructor(slides) {
    this.slides = slides;
    this.position = 0;
    this.showAnswer = false;
  }

  current() {
    const slide = this.slides[this.position];
    return {
      'question': Object.keys(slide)[0],
      'answer': this.showAnswer 
                ? Object.values(slide)[0] 
                : '',
    };
  }

  advance() {
    const slide = this.slides[this.position];
    const hasAnswer = Object.values(slide)[0] !== '';
    if (hasAnswer && !this.showAnswer) {
      this.showAnswer = true;
    } else if (this.position < this.slides.length-1) {
      this.position++;
      this.showAnswer = false;
    }
  }

  rewind() {
    if (this.showAnswer) {
      this.showAnswer = false;
    } else if (this.position > 0) {
      this.position--;
    }
  }
  
  keyup(displayCallback, event) {
    if (event.keyCode === 37) {
      this.rewind();
    } else if (event.keyCode === 39) {
      this.advance();
    } else {
      return;
    }
    displayCallback(this.current());
  }
}

