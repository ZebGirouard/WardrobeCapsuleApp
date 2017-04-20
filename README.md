# WardrobeCapsuleApp

Thursday, April 20:

11:45am Log

Built the bootstrap template.  ToDos:
- Create routes for each season similar to the one for Spring.  Winter/Fall/Summer.  Add to routes and then static. 
- Pull in information from the database into these pages via forEach in ejs.  Want to use bootstrap templates. 

Building the seed.js:
- Start with a static array that used the params I'm looking to use.  
- From there set up a remove/create that builds the db.  From there I can start pushing the get routes into the db.  

Building models:
- For now I want to build a ProductSchema.  From there need to figure out how to work that into each season.  Ideal would be WinterSchema with tops, bottoms, shoes, dresses, accessories array. 

Building controller:
- Need to build a route for each product pull.  Start with Dresses controller. 

Login User interface:
- When someone logs in I want them to be able to see what they have saved in each season.  Main functionality for now is to give user the ability to remove items from the database. 
