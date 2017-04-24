# WardrobeCapsuleApp

Heroku Link:  https://nameless-basin-85535.herokuapp.com/



![alt text](./public/images/image1.jpg "WireFrame 1")
![alt text](./public/images/image2.jpg "WireFrame 2")


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

3pm Log:

Got the dresses to pull into the Spring page!  Now I just need to figure out the most efficient way to pull certain dresses into each Season.  Also when a user goes to an item to buy it I'd like them to go to a new window(TODO). 

5pm Log:

For now I'm just going to hard code my chosen dress into the page via jquery class pulls.  Works for now.  Eventually I'd like to loop through live api dresses to pull in per user choice.  Also if the content isn't similar sizing the button on the bottom of each card doesn't align. 

7pm Log:

I JUST FOUND OUT THAT THE NORDSTROM PICTURE HAS NO HEAD AND I SPENT WAY TOO MUCH TIME TRYING TO FIX MY IMG DIV. 

# Sunday April 23:

Ran into a few issues yesterday moving my routes from the server over into the controllers so I still have them in the server for now until I get the rest of my "needs" done as far as making the user qualifications and item delete.   A few things that I'm not going to focus on right now but want to fix eventually:

	- For some reason my api code is using the filters for items up to $150, and the live api will pull only items under that filter, but when I pull the exact same filters into my database the items over that price limit still show up. 
	- Still can't get the buttons on my items page to align up for each clothing category. 
	- Still want to build in a route to the new page once you click on the item vs having it open up within that browser window.  Think this is better user functionality. 

Today I need to get the delete button to work for each item, and add the delete history to each user so that they don't see what they've deleted when they log in.  Also want to allow them to be able to add items to replace the ones they deleted but that's a stretch goal. 

Also need to add the header and footer to each season page, and get at least a "this page is coming" note to the seasons I haven't finished yet. 

Wish List:
	- It might be easier to have a database of dresses, tops, bottoms, shoes etc and then seed a new database for each season.  My thinking on this is that now the Dress/Tops/ etc. all need a delete route to each db whereas a spring delete could go to one spring db and find by id.  But also might not be that much extra work?  Not sure yet. 

I was able to delete the card upon clicking remove and I'm working on adding the userId capabilities.  I think what I need to do is add a certain amount of an item (dresses) to the spring collection, and then as a user deletes that item another one from spring pops up.  If they delete all of the items from their capsule there will be nothing left in the database for that user. 




