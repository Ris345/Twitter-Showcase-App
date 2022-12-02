step 1 user presses the home
step 2 the home page appears
step 3 user presses the search
step 4 serach page appears
step 5 user presses the random tweet page
step 6 random page appears

// going to work through making http requests from the back end.

step 1 make a axios.get call from the backend to twitter
step 2 then make fetch all from the front-end to the back-end
step 3 console.log(data)

step 1
get data from twitter using axios
twitter needs authentication (uses the bearer token)
twitter needs proper url
is this get or a post request get
step 2
SEARCH TWEETS
step 1 user types
step2 tweet appears

step 1 declare state in Home.js in the front-end
step 2 pass the state through the nav component
step 3 pass the state in the search component

DICONSTRUCT TWITTER DATA
step 1 - study the way data is organized in the console.

SEARCH FOR THE TWITTER USER
step 1 user types somehthing in the input thing
step 2 that data is passed to the back-end
step 3 the API makes a request from the backend to the twitter server
step 4 returns the relvant tweets
step 5 that tweet is displayed in the front-end

SEARCH FOR THE TWITTER USER
step 1 get data from serachParams to app.js
step 2 send the data from app.js as a get request to the back-end
step 3 use that data in the back-end to set a get request to the twitter API
step 4 display that data to SEARCH PAGE

GET RANDOM TWEETS FROM % TWITTER USER
step 1 user clicks thr tweet 1 button
step 2 user gets a random tweet displayed on the front-end
step 3

Get the random tweets to make reuest to the back-end

step 1 user clicks one of the twitter users
step 2 the button fires the handleSubmit and changes the state
step 3 the handlesubmit also fires the axios request and sends it to the back-end
step 4 the back-end calls the twitter api server and retrives the data
step 5 selected data is displayed in the front-end

Get random tweets
step 1 from the array of random tweets ramdomize the tweets

Problem
step 1 clear the previous state before updating the new state

DISPLAY TWEETS ON RANDOM TWEETS PAGE
step 1 user clicks on the tweet
step 2 tweet displays on the front-end

DISPLAY TWEETS ON THE SEARCH PAGE
step 1 user searches tweet
step 2 user clicks on searchh button
step 3 tweet displays on the front-end

Display Tweets
step 1 destucture the incoming data from twitter
step 2 find what needs to be displayed

Search Tweets
step 1 if user searches tweet with @ ---> make a id call to the the back-end
step 2 else ----> make a regular call

Random Tweets
step 1 user clicks the random tweet and the back-end makes a call to the twitter api with the specified id ..
step 2 results are displayed in the front-end

To get Tweets
step 1 Make a get request to the user id api with user name
step 2 Use the id number to

Search Tweets
search with user name
search with user id
display tweets
display the related tweets
disply user name
display text of the tweet
disply image if available
display likes and retweets

to get tweets from the specefied user
step 1 make a get request with usename through the api
step 2 and then use that id to get the tweets from that user
step 3 filter the data and use it on ur front end

if users type @username
there should be a api call to the get the user id
but the @ should be removed and the request should only make a call with the name instead  
which then will get
else if there is no @ typed by the user then it should be a regular call.
similar for random tweets but the user id is already specified
so I can directly make a call to the specific api and get the data

if (userInput = @ + "username"){
then remove that @
make a axios get request to the back end
which will call the twitter API user ID
then use that id to make call to get the specific tweets only


} else {
then just make the regular axios call
}


in this situation I need to segregate the different functionality into different functions. 


the async function was sucessful no I need to decode the incoming data to get the required results 


diplay tweets in the Search Page
put this concept in a seperate function...
step 1 add two new states tweetid and usercontent
step 2 if the tweetidcontent display tweets in that context 
step 3 otherwise display the tweets with just the content. 

To display search results 
 step 1 unpack the objects
 step 2 get the user name 
 step 3 start with texts first 
 step 4 get user likes and retweets 
 step 5 finally get the media content if available 



decalare a ternary to check the state and display the results accordingly 


Display images in a Random twitter page as well 
step 1 randomize objects according to length 
step 2 randmize images url according to length. 
step update the state according to the image 


step 1 get the keys from the object 
step 2 check if the keys match the conditional 
step 3 if it matches set the state with the relevant information 


but first find a way to get the media keys through the object 
if attachments.media_keys mathces the media keys in the includes file 
return the media 
else null 


before this check if media_key is truthy then make the comparsion --- 
step 1 get media keys from the data array
step 2 get media key from the includes array 
step 3 check if they are hard equal to each other 
step 4 if they are equal return the result 
step 5 else return 



For Search page 
if (tweets){
 follow this map function 
} else {
    folow this function 
}

the problem with random images could be that because the math.random's are two different numbers everytime the function is fired. 
solution would be to only use one math.random instead of two but then the data and the array and image array are different things. 

Another way I could get images is by...getting it through the id instead of comapring the id, 
fiind the array with the id and return the image that has that id. 

Check if the user input is valid 
first condition is if the length is greater than 0 its a valid input else it's not a valid input 


Display correct image on randomjs 
 Logic - match the media keys 
 retrive the image if the media key matches 
 
 find the media_key id from the previous id and use that to retrive the correct array 

 
find the array with the mediakey that is being passed 

find the index of the array that has the matching media key 


unpack values of the media_key and then check if they are same 
then find the array of that media key 

to get the correct array with the url we must use the filter function 

filter the media key from the imageArray 
and then check if media_key matches the  imageArray media, 
if so return set the newState of the image.


if matchImage.includes(url)
 return the setImg()
 else 
  setimg(preview_url)
















