# Growthsphere - Track Your Hair Growth Progress


Growthsphere is a self-started online web application initially designed to create a space for African American women to track their Natural hair growth progress. What's more than a web application that logs hair regimens and product outcomes, I am hoping that this application can evolve to become a space where women of color can come to share, collaborate and talk about their hair!

## Getting Started - A history of the issue

![Picture of girl twisting her hair - artwork by Maya Ajani](https://i.pinimg.com/564x/9e/7d/d0/9e7dd0a3d79845cbabf87ceb21cf373f.jpg "Picture of girl twisting her hair - artwork by Maya Ajani")

Although many blame the media for dictating how people (in particular women) behave and present themselves to the outer world, it is becoming increasingly obvious that despite it's shortcomings, the foundational way in which we consume and advertise media is not going to change. That is to say, buyers will always want to purchase that which looks the most attractive and most appealing based on the alloted price. And therefore, at least from the consumer's perspective, it should be important to note that it is not always what is being advertised that causes an issue, but how it is being promoted and to whom.

Within this broad category of marketing and advertising fall African American women and the Natural Hair Industry.

According to an Essence Panel exploring the power of the Black dollar and the extra price POC women must pay to feel beautiful, Black women already commit a huge chunk of change to the beauty industry. As Stephanie D. Smith on WWD.com writes:

> African-American women spend $7.5 billion annually on beauty products, but shell out 80 percent more money on cosmetics and twice as much on skin care products than the general market, according to the research. **That difference comes as African-American women sample many more products to find the ones that are most effective on their skin.** > _By Stephanie D. Smith on May 19, 2009 from WWD issue 05/19/2009. Read the rest [here](https://wwd.com/beauty-industry-news/color-cosmetics/essence-panel-explores-beauty-purchasing-2139829/)_

So what does this tell us about Black women and how they must navigate through the beauty industry? It says that not only does there seem to be a shortage of products aimed at women of color, but also that the products that do exist do not seem to possess a base formula that can work for everyone. Instead, Black women must incorporate a strategy of trial-and-error and making homemade concoctions until they find a product that works for them.

**Enter the Youtube Product Review era of the post-Natural Hair Boom.**
![Famous Natural Hair Youtuber Fusion of Cultures](https://media.giphy.com/media/3o7WIFSA2SEOpmkbba/giphy.gif)

What the Product Review era of Youtube did for Black women was create an audience of followers who were specifically looking for a generalized rating of a specific product. As we mentioned earlier, because Black women mostly found their products through an array of trials-and-error, Youtube provided a platform where many buyers could simply see one person try a specified product and give their personal opinion on it, while the buyer decides for themselves whether the both product reviewer's characteristics as well as their opinion of the product would be close enough to actually make a purchase.

However, after Youtube's heavy introduction of adsense and companies now specifically targeting and paying Youtubers to market and advertise their products, this process has been somewhat muddied to give a predefined opinion of whether or not the product is actually effective for women of color. In this sense, what once was a space for people to provide honest and unbiased reviews of products or regimens that actually worked has now been clouded and mixed in with the overall interpretation of what is supposed to work and what looks the prettiest in contrast to the actual contents of the product.

With all that being said, I felt like there was a strong need for an
application is this industry that sort of cut out the "middleman" or
the advertiser of said products and let women communicate with each
other more closely about their natural hair in a preserved space.
Built to resemble a mobile app but meant to behave like a forum, I
believe that Growthsphere achieves this effort by providing space
where the exact information is needed to help Black Women learn to
cater to, care for, and grow their natural hair.

## Initial Design

![Initial wireframe designed for mobile view](hair-journal/planning/mobile_mockup.png?raw=true "Initial wireframe designed for mobile view")

Mobile wireframes. Top row, left to right- Growthsphere home view
with login, Growthsphere home view with create an account form,
Growthsphere logged user profile page, Growthsphere empty regimens
page, Growthsphere regimen page with three regimens, Bottom Row,
left to right - Menu overlay, Regimen creation form, Completed
regimen form view.

## UX Challenges

Part of the biggest challenge for this project was customizing the
site's scalability from mobile view to desktop view. Because focus
group testing revealed that users would be more likely to use the
app on their phone rather than on a desktop, the inital design was
customized to be more simplistic and modern, but later found to be
quit lacking in content when scaled back up to a desktop or tablet
view.

![Design captured with too much white space](https://media.giphy.com/media/rUKo3LsN87mSGteqpa/giphy.gif)

Design captured with too much white space

## UX Solution

One solution that will be incorporated in this project is to do more
user testing to reveal how the user visits information as they
traverse through the site. As one can see from the above design,
most of the content is centered because this is what will ultimately
help the user to scroll downward to reveal more content. However,
this design scheme clashes with the user's innate nature to scan
back and forth (i.e. left to right or vice versa) for information,
more often than not in a Z-shape or F-shape pattern.

Henceforth, I believe a much more helpful design would be, for this
page specifically, would be to place the user profile image and
stats to the left side, while display their created regimens to
right. While user testing and surveys still need to be conducted to
determine what else the user may want to view on this page, the
latter seems like it would provide a bit more meat to an otherwise
very delicate wireframe.

## Developer Challenges

After learning React and revisiting this project, one the things I
can't help but notice developmental-wise is that the site is either
slow to load upon first entering and the fact that every page must
be loaded. With the introduction of the React and
SPAs(single-page-apps) as one may see in my other projects, the
ability to switch pages or routes without loading seems like a prime
feature that would help to improve usability and allow for easier
scalability when making changes to the infrastructure on the backend
and visualizing said changes on the frontend.

However, this issue is primarily caused by my choice to deploy to
Heroku, as well as the decision to use Handlebars for what I foresaw
would be a simple project that would not need much customization in
the long run.

![A rookie mistake](https://media.giphy.com/media/rJSKGg8010eUE/giphy.gif)

But anyways...

One thing that I didn't consider is that although deploying to Heroku is free, it comes with a few caveats. 

Firstly,
depending on traffic, the heroku's server will put the site to sleep
to preserve bandwidth, this is what's causing the inital 4 - 6
second loading time that has confused some user's upon first visit.

With Handlebars, being that it has been called a 'logicless
templating language,' it became increasingly more evident that
making changes on the frontend would result in more clammy code (at
least I think so). While Handlebars makes pretty good use of their
partials (a feature that works very similarly to more modern
frontend framework's ideas of "components"), it's still pretty ugly.


## Technologies Used
-  NoSQL - MongoDB, Mongoose as ODM (Object Document Mapping)
- Express.js 
- Handlebars
- Node.js
- Passport (for user authentication)

### Installing

A quick ```npm install``` should do the trick.

