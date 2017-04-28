# Triple-8-Website

## Getting Started
* Install [node.js](https://nodejs.org/en/)
* Install [git](https://git-scm.com/downloads) if you don't already have it (ie Windows)

`git clone https://github.com/triple8dance/Triple-8-Website.git`  
`cd Triple-8-Website`

### Install Packages
`npm install`

### Start Server
`npm start`  
Go to [localhost:8080](http://localhost:8080/)  
The T8 website should be there.

### Compile
`npm run compile`  
This compiles all the files in the `./src` folder into `./index.html` and `./index.js`  
Open `./index.html` and the website should open in your browser.

## General explanation

### Introduction
The website is made using React so in order to get it to readable JavaScript that a browser 
can open up you need to "compile" it. Running the local server is just so you can see 
changes happening live at [localhost:8080](http://localhost:8080/). Compiling the website 
using `npm run compile` packages all the JavaScript code into `./index.js`. Basically 
in order to put up the website you just need compile the website and copy everything but 
`./node_modules/` to wherever is hosting the website.

### Hosting the Website
Ideally the website should be hosted anywhere that accept static websites (ie open the index.html) 
file. Two services that do this are [GitHub](https://pages.github.com/) and Princeton. Like I mentioned above just 
copy everything but the `./node_modules/` folder into where you need to place it.

PUBLIC_HTML Folder

/n/homeserver2/user2a/PUBLIC_HTML/triple8


### Editing the Website
To edit the website go to `./src/ajax/` what you'll find are files that contain the data 
for all the website's pages. To edit the website you just need to edit these files (no coding involved)! 
They are written in JSON which you can find a quick tutorial [here](https://www.w3schools.com/js/js_json_intro.asp). 
It's not necessary to read the tutorial just follow the examples in the files. For images copy 
the images into the `./images/` folder and make sure your paths are correct. And that basically 
all you need to know!

## Details On How to Edit
 
### Home Page
The data for the home page is in `./src/ajax/home.json`. The _carousel_ holds data for the 
images the spin through on the home page. Each item needs an _img_; a caption is optional. 
If it is included the text will appear on the image. The _blurb_ is the paragraph that 
appears on the home page. The _announcement_ is the text that appears above the blurb. It 
is optional to include the announcement, but if you want to remove it put empty strings (""), 
don't delete the id's themselves. The _tiles_ are the three images that appear on the 
bottom of the home page. You can change the image, the bolded text, and the short description. 
But you cannot change where the page links to (without altering the actual code).

### About Page
The data for the about page is in `./src/ajax/about.json`. The _img_, _caption_, _title_, and _blurb_ are pretty self-explanatory if you look at the 
website. On the bottom of the about page three YouTube videos load; the website takes 
three random YouTube videos from a list and loads them. The _tooltip_ is the text that 
appears when you hover over the refresh symbol. The _videoTitle_ is the text that 
appears above the videos. The _videos_ is the list of YouTube links which is pulled 
from. Make note that they are embedded links (which you  can get by right clicking 
on a video and copying the embedded link).

### Board
The data for the board page is in `./src/ajax/board.json`. This should be pretty self-explanatory, look at the website. The _title_ is optional 
text that appears above the list of all the board members.

### Company
The data for the company page is in `./src/ajax/dancers.json` (sorry for the naming 
inconsistency!). Basically every dancer is in a list in _dancers_. The important thing 
to know is that the _year_ of each dancer needs to be either *SENIOR*, *JUNIOR*, 
*SOPHOMORE*, *FRESHMAN*, or *POST_GRAD*. These must be spelled exactly. This is so 
that the website knows which section to put each dancer in. The dancers will appear 
on the website in the order that they are listed in the JSON (sorry, you gotta 
organize the dancers by hand). The _thumbnail_ is the image that appears on the 
face board and _img_ is the image that appears when you click on the dancer. The 
thumbnail MUST be exactly square (NxN pixels) otherwise the grid will appear weird. 
Everything else is self-explanatory.

### Shows
The data for the show pages is in `./src/ajax/shows.json`. These are all the pages under 
the show tab on the website and displays the YouTube playlist for a show. When you want 
add the next show follow the example on the JSON. The key for each show is an 
identifier to that show, you are free to name it anything you'd like, but it's best 
to follow a similar naming convention (all caps, underscore instead of white space). 
For a particular show the _name_ is what it appears as on the website. The _video_ is 
a link to the first video in the show's playlist. The _image_ is the banner that appears 
above the show. The _prevShow_ and _nextShow_ hold information the links that appears 
beneath the videos. For example, in the data for the INK show notice how the _prevShow_ 
has a _key_ and a _name_. The _key_ must be exactly the same as the key to the Fortune 
show. The _name_ is what it appears as on the website. This applies to _nextShow_ as well. 
If a show doesn't have a previous or next show then you can just leave it blank.

### Gallery
The data for the gallery page is in `./src/ajax/gallery.json`. This one is a bit of a 
pain to edit. Most of it should be self-explanatory, except the photos themselves. I 
used an outside package to get the photogrid working. Basically the _width_ and _height_ 
don't actually matter so I just leave it at 100. The _aspectRatio_ is the ratio of the 
image and this is really important. If you put the aspect ratio wrong the photo will 
render wonky on the website. You'll notice there are two _src_'s basically put the 
same thing in for both. There are two because one is for the thumbnail and one is 
for the actual image when you click on it, but generally we want those to be the 
same anyways. Photos appear in the gallery in the order you put them in. For every 
photo you put in you need to get its aspect ratio.

### FAQ
The data for the faq page is in `./src/ajax/faq.json`. This is easy to edit (yay!), 
just follow the example.

### Contact
The data for the contact page is in `./src/ajax/contact.json`. The important thing 
to note is the _formspree_ field. Since the website is a static page, form requests 
are handled by [Formspree](https://formspree.io/). You'll notice that it has a URL 
with an email at the end, change that email to whoever you want to receive the email 
whenever someone submits a question via the website. Whenever someone submits a question 
Formspree will forward all the info to that email address. After editing it make 
sure to test it out so that you get emails.

## React Details of the Website

## Owned Domains
* triple8dance.com
* triple8.dance
* princetondancecompany.com