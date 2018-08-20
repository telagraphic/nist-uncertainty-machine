TL,DR
===

Redesigning NIST Uncertainty Machine to learn UI/UX principles to increase skills as a problem solver, designer/developer.  Maybe, just maybe they will use my work if they like it.  At the very least, I will add this project to my resume.  

At the very worse, I don’t complete this project and either maybe learn some skills or I just give up with nothing but wasted time and effort.

Who and What?
===

NIST Uncertainty Machine is a tool to measure uncertainty for statistical modeling.
I saw the page on hacker news and thought it was cool and noticed the poor/bad look and feel.

Where and When?
===

It’s an open source tool located here developed in 2013 originally with a new update in 2018.

Why?
===

I’ve just started studying UI and UX and have been looking for projects to apply and test my new skills.
Sometimes you wanna create your own idea, but once I saw the website, I knew I could upgrade the look and flow of the tool.

I’ve always thought that a better, improved UI will attract more users or increase appeal.
It is a common sense notion that a better look thing will sell despite it’s usability factor.
It’s like the tinder swipe but for digital apps and websites.

In fact, there is an UX Principle that supports this notion.
It’s not a super big project that would be time consuming and the tool is simple enough to benefit from proven UI and UX concepts.


How?
===
I’ve already bookmarked tons of UI and UX resources (guides, tutorials, and articles).

So, the first step is to review these links and make notes of important principles and concepts used in the industry.

Second, create a checklist/guide that will provide a design framework.  There are many out there, but creating it my self is part of the learning process.  It doesn’t need to be a comprehensive how-to for everything, but a general template that can be added to over time.  

Third, performing a simple UI/UX audit will direct which parts need improvements.  Mapping concepts and principles to the actual UI/UX problems is the real challenge.  Iterating on different layouts, user flows, fonts, colors and how to code the UI components will be the real work.  The goal is to come up with at least 2 different layouts.  

Fourth, get feed back throughout the process at each step.  Better to do so at each step/day/week than all at the end.  And of course, I will reach out to the two NIST scientists that developed this tool and see if they like the update.  


Links
===

- https://www.nngroup.com/articles/aesthetic-usability-effect/
- https://uncertainty.nist.gov/


Post Points
===

- project copy and setup
- review html, css and js
- ui/ux audit, review audit page
- clean up markup, grid layout, sticky footer
- header responsive redesign
- footer ux changes
- commenting js lines < 10 to unify names and distribution onto same line and R definition output text areas
- ux analysis of steps involved, simplifying into smaller steps, removing bullets
- svg use viewBox=0 0 height width values for code to work, list two sites that you used to help this




Post
===

I found the NIST Uncertainty Machine on Hacker News one day in May.
I took a look at the site and thought it was cool so I read the guide, it was way over my head.
The tool is a statistic computation program.
My first impression was how it looked like a developer designed the website.
It wasn't super intuitive to understand or the proper order of steps to take, but overall the tool is easy to use!
It jumped out to me as something that could use a redesign.  



*Step 1: Audit*

I copied the site got it up and running on my local machine.
I did a quick read thru on the html, css, and js.
They use some flexbox here and there, use id's for html markup, and jquery.
It is a well composed site from the code side of things.

But that interface needed some help.
I took an audit of all the UI elements, primarily focused on the form inputs.
I checked on the zero default state, when you land on the homepage and the maximum state, all the elements possible for doing an action.
This helped to really see what the page is capable of and things to consider for all possible states.

- the random number generator is supposed to be between 1 and 100 as per the manual, but you are able to exceed that amount.  Not sure if that is ok or not?  The computation still runs fine with numbers > 100.  It also needs to be number type and not a text type.
- number of realizations should not exceed 5,000,000 per the manual, the field needs a max amount check.  It also needs to be number type
- some of the input parameters cannot be 0 but there is no validation check for this
- some errors are displayed after running the computation and returning an error, some of these errors could be warned on the client end
- the text and form layout looks like someone just throw it together, there is a lacking sense of a grid or strong flow
- overall, the font and input sizes should be bigger
- needs a modular scale and vertical rhythm to give separation to designate each step

Next, I looked at it from a UX perspective.
The bullet points were the directions, but partially helped the user.  It left me a bit confused or unsure of what things did.
A crucial step was to re-order the inputs into steps that the instructions suggested.
This brought order and better flow for the eye to a recognizable pattern and not just a bunch of fields and numbers.

Things like:

- bullet points should be reflected in the actual page layout flow
- the instructions are clear but they could be ordered with their respective inputs, would help explain what the fields are for better
- number of inputs, input names and distributions should be all on the same row line
- correlations should be close to the inputs, this data table is relevant to the inputs and should be closer
- the +/- buttons are clunky at best, they should be in predictable part of the layout


*Step 2: First Steps*

CSS Grid makes life great!  And it can make this site even better.
I went through the markup and applied HTML5 Outlining to give the site better semantic markup

- What is the HTML5 Outline Algorithm
- div's versus section tag and why section is a better choice, when to use a div for styling purposes
- Head tag, front end checklist
- Illustrate the header, content, footer with HTML5 tags and grid layout
- Main grid and Sticky footer code

The header

SVG use viewBox instead of hard coding the width and height to make it responsive
