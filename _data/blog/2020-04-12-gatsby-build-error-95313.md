---
template: BlogPost
path: /gatsby-build-error
date: 2020-04-12T16:32:05.735Z
title: Gatsby Build Error 95313
thumbnail: /assets/gatsby-tutorial-site-backroads.jpg
---
Lately I have been working with a course [Gatsby Tutorial and Projects Course](https://bit.ly/3ehOXxl) by John Smiga. I jumped in and started following the backroads tutorial. This was working well in develop mode but when the time comes to deploy an optimized build on netlify I get errors.

![](/assets/gatsby-build-error.jpg)

So far I've deployed only two sites on netlify that were created with Gatsby. Both built without errors and are deployed to Netlify using Github. 

Looking at the error message, I feel like I am reading a foreign language :-)

![](/assets/build-error-message.jpg)

I first looked up the error at [https://reactjs.org/docs/error-decoder.html/?invarient=130&args\[]=object&args\[]=](https://reactjs.org/docs/error-decoder.html/?invarient=130&args[]=object&args[]=) and found the following

![](/assets/error-decoder-gatsby-build.jpg)

Not very helpful to say the least. So I tried <https://www.gatsbyjs.org/docs/debugging-html-builds/>, thinking it would be too general but found a useful clue.

![](/assets/gatsby-debugging-html-builds.jpg)

So based on this my clue is that I have a file somewhere in the project where I mixed  up `import `and `require `calls in the same file. Problem is, I don't use require in any of my files :-(
