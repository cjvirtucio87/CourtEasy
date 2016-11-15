[DEMO](https://court-easy.herokuapp.com/)

#Court Easy
######A central repository for all things legal.

##I. Introduction
Court Easy is a center for technical solutions to legal-related problems. It aims to handle pain points such as voluminous research and finding the right venue.

##II. Technical Overview.
Court Easy consists of a client-side application that interfaces with a custom API for data. Angular 1.5 was the framework chosen for its extensive core feature-set and community-driven libraries. UI Router, in particular, was a great boon in how it facilitated separation of concerns by segregating states and views.

###Court Finder
Case Finder is the first feature made available to the public. It interfaces with the Court Listener API built by the [Free Law Project](https://free.law/). The Django-based API serves data consisting of opinions issued by the Supreme Court of the United States. More information on their database is available on their website.
