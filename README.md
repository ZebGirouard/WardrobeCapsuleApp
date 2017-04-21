# WardrobeCapsuleApp

# Thursday, April 20:

11:45am Log

#Built the bootstrap template.  ToDos:
- Create routes for each season similar to the one for Spring.  Winter/Fall/Summer.  Add to routes and then static. 
- Pull in information from the database into these pages via forEach in ejs.  Want to use bootstrap templates. 

Building the seed.js: DONE
- Start with a static array that used the params I'm looking to use.  
- From there set up a remove/create that builds the db.  From there I can start pushing the get routes into the db.  

Building models:
- For now I want to build a ProductSchema.  From there need to figure out how to work that into each season.  Ideal would be WinterSchema with tops, bottoms, shoes, dresses, accessories array. 

Building controller:
- Need to build a route for each product pull.  Start with Dresses controller. 

Login User interface:
- When someone logs in I want them to be able to see what they have saved in each season.  Main functionality for now is to give user the ability to remove items from the database. 

5:48pm Log

Was able to pull information into the database using a DressSchema.  Pulled 50 dresses.  Hallelujah!!!!!!!!!!!  Did this by using a node request in the seed.js file.  Might do this with the rest of the routes to save to the db.  Then still need to build controllers for each file?  Not sure. 

# Friday, April 21:

9am Log

Still need to do from yesterday:
Built the bootstrap template.  ToDos:
- Create routes for each season similar to the one for Spring.  Winter/Fall/Summer.  Add to routes and then static. 
- Pull in information from the database into these pages via forEach in ejs.  Want to use bootstrap templates. 

Building models:
Wondering if I don't need this to be specific for each clothing item and can use the same Schema for each clothing piece?  Depends on whether or not the params are the same for each item. 

Front End Build:
Today after I've built out each season page I'd like to start pulling in database items - probably won't get to the login user remove saves until this weekend. 

3pm Log

Got the dresses to pull into the Spring page!  Now I just need to figure out the most efficient way to pull certain dresses into each Season.  Also when a user goes to an item to buy it I'd like them to go to a new window(TODO). 

5pm Log
For now I'm just going to hard code my chosen dress into the page via jquery class pulls.  Works for now.  Eventually I'd like to loop through live api dresses to pull in per user choice.  Also if the content isn't similar sizing the button on the bottom of each card doesn't align. 




