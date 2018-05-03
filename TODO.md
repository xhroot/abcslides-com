# todo

* [DONE] base code for displaying A-Z/1-20/a-z/.  Phonetics? Vowels? greek alpha? hebrew alphabet.  basic addition/multiplication?
* [DONE] color base with gradient in middle
* [???] cursor control
* react + build script
* create single file artifact deploy to S3/Cloudwatch. CFT?
  * also deploy script
* Interfaces for slide sets
  * Next()
  * previous()
  * current
  * answer/response
* hamburger menu
* slide touch
  * hammer.js touch swipe
* support for chinese character/words
* support for localstorage management of custom sets
* support for randomizing static deck
* mobile? media query and resize font based on window size


# design

I need an interface, because the implementation for dynamic flashcards cannot be preloaded from a static map.

A couple solutions:

1. have constructor take functions for generating next/previous at which point i'm implementing the class and passing the implementation to it which seems like a hacky way of class extension.
1. browsing around, I saw a really sketchy way of using Symbol() to create an interface, was pretty gross.
1. use Typescript, a javascript superset but with interfaces

As we progress to the last point, we should ask "If jettison all the bad quirks of javascript and import features of our favorite languages, why retain any of the cruft of javascript at all?"

So Dart or Kotlin compiled to js.

This is one of the simplest of applications, textbox CS101 interface composition and the latest ES6 javascript can't do it.  I'm bewildered by javascript's defenders.

