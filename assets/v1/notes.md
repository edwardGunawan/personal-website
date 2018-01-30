This is a note to myself while I was developing this Portfolio

CSS important tips:
* 80 pixels relative to the top when using top
* to not make the image to overlap: using display table on the outer layer, and overflow hidden
* image resizing: using width:100% and height :auto
* wrap text around image is to use image as the float property, not the text
* If having flex display property on the parent container, the child float will
be override and it won't work
* shape-outside: New CSS property that changes the shape of the items that are wrap
full notation: circle(r at cx cy) on the image
* webkit is for Safari engine

- When to use padding, margin:
  - [link](http://headwaythemes.com/margins-padding-borders/)
  - Padding provides space between the edge of the box and the content. By
  adjusting padding, you can push the paragraph text in by a view pixels
  while leaving the heading closer to the edge.
    - You can add top or bottom padding to increase the vertical space between
    paragraphs or around image.
    - Padding should not be used to move the content box
  - Margin should never be used as padding.
    - Use margin to move the box relative to the other box on the page.
  - CSS margin and padding are declared in pixels starting at the top and working
  clockwise around the box. (Top, right, bottom, left)
- Some CSS properties that do not apply to grid container and grid item.
  - float and clear
  - All column properties
  - The ::first-line and ::first-letter pseudo-elements
  - The vertical align property
- Applying float: left to 2 paragraph text, it won't really wrap the left
text when the container element in display: grid



Optimization important tips:
* CSS is a render blocking resource. Get it to the client as soon and as quickly as possible to optimize the time to first render. ( change it to like media type to render quickly )
* js external file using async
* where you put the script file is important, depending on where it is, JS manipulate CSS and HTML so it will wait until it finished, technically you want to put it in the end
    * understanding the optimized rendering path between JS CSS and HTML
* Dont use manifest at all, it won't work, use service worker
* or caching using meta data to cache-control <META HTTP-EQUIV="CACHE-CONTROL" CONTENT="NO-CACHE">
* copyright: <META HTTP-EQUIV="CONTENT-TYPE"
CONTENT="text/html; charset=UTF-8">
* Avoid page redirect, to improve site performance, because it will add a single roundtrip (HTTP request-response)
* Using magickimage of convert can decrease the image size and compressed it
* getting image to render slower will be putting query string of ?t=12345?

Why using Favicon?
* for branding on a company
* saving people time when browsing the internet, when you look at the website
  your eyes noticed the image before the text, so it helps them find what they are
  looking for that much quicker
* shown in bookmarks
* Bing is testing the use of favicon in its search results
* Google trying to bring the favicon back to the new ad formats in future.


For Handlebars:
  * for looping, as long as the # you mention what sort of object you want, focus
  on th var that you created inside of the tag name, and it will loop through
  itself. Ex:
  {{#users}}
    <tr>
      <td> {{fullname person}}</td>
      <td> {{ages}}</td>
      <td> {{twitter}}</td>
      </tr>
  {{/users}} // the users will be an array so the entire trs will get created
  in js:
    var data = {
      users (the array): [
      {
        person1: { // this will loop through it selfas one trs
          firstname:
          lastname:
        },
        ages: 36,
        twitter
      },{
        person2: ....
      }

      ]
    }

* useful resources:
  - for cross browsing: modernizr,
  - for better CSS style: https://hackhands.com/70-Expert-Ideas-For-Better-CSS-Coding/
  - mobile first design for fluid: https://zellwk.com/blog/how-to-write-mobile-first-css/
  - svg is better in quality because it is a vector space
  -  for sending email through the form: https://formspree.io/
        ( you don't need to create a server to request a post to your email address)

* inspiration design:
  - http://www.flarin.com/
  - Using Bulma for CSS remake 2018
