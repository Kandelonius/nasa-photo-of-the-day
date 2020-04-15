# Module Project: Component Side Effects- NASA APOD

This will be a two-module project. In it you will consume the NASA API to fetch the "Astronomy Photo Of The Day" or APOD. Once you fetch the data, you will build a few components that will render different pieces of data in your interface. After the second module (in the [DAY_TWO_README.md](DAY_TWO_README.md) file) you will re-style your app using one of the libraries you learn. 

## Instructions

---

Read these instructions carefully. Understand exactly what is expected before starting this project.

## Commits

Commit your code regularly and meaningfully. This helps both you and your team lead in case you ever need to return to old code for any number of reasons.

## Description

In this project you will build out a application to show the nasa photo of the day.

## Project Set Up

---

This project was put together using create-react-app (CRA). You will not need to install CRA in order to make this project work. Follow the steps below to setup the project with the proper dependencies.

- [ ] Create a forked copy of this project.
- [ ] Add your team lead as collaborator on Github.
- [ ] Clone your OWN version of the repository in your terminal
- [ ] Download project dependencies by running `npm install`
- [ ] Start up the app using `npm start`
- [ ] Create a new branch: git checkout -b `<firstName-lastName>`.
      Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.

Follow these steps for completing your project.

- [ ] Submit a Pull-Request to merge Branch into master (student's Repository).
- [ ] Add your team lead as a reviewer on the pull-request
- [ ] Your team lead will count the project as complete by merging the branch back into master.
- [ ] Do your magic!

# _Project - NASA APOD - Part I_

- This is a really fun project, and one to show your family and friends when you've finished.
- You will be starting from scratch and building the entire app
- You don't have any design specs to follow for this project, so you may want to start by building a basic wireframe first. Make it simple at the beginning, since you don't know what data you'll be getting back from NASA
- Once you get the data back, there may be more than you expected, or less than you expected, so your design plans may change. That's totally fine, and very normal in the real world. Just make the proper adjustments and move forward!

## Directions

**Step 1 - Planning**

- [ ] If you want, this is the time to make a simple design spec (look up ["simple wireframes"](https://www.google.com/search?q=simple+wireframes) to find resources & examples). **A pen & paper sketch (or outline) is often the fastest way to start your planning.**
- [ ] Once you have a design plan in mind, break down the designs into individual components.
- [ ] Plan which components will hold state, what data each needs from props (if any), and where you will be making your data fetch.
- [ ] Now it's time to jump into the code!

**Step 2 - File structure**

- [ ] Take a look at your planned components. Create the folders and files you need for each component.
- [ ] Leave most of them blank for now - you need to get your data from the API before you can really get these built.

**Step 3 - Fetching the Data**

- [ ] In `App.js` (or where ever you wanted to fetch the data) add state for the data you'll be getting from NASA.
- [ ] Add an effect hook to handle the API call side effect.
- [ ] Go to the [NASA APOD API docs](https://api.nasa.gov/#apod) and read through the docs to see how to make the API call.
- [ ] You don't _need_ an API key. However you may need one if you exceed the API request limits.
- [ ] Using the endpoint given, fetch the data using `axios`.
- [ ] In your `.then()` make sure to `console.log` the response so you can look at the shape of the data. 😃
- [ ] Before you add your data to state, make sure your effect hook has a dependency array (probably empty, since we don't want this effect synced up to any state/props), otherwise you will start an **infinite loop, and you will exceed the API rate limits of the DEMO_KEY and need to use a real API_KEY.**

DEMO KEY rate limits:

> Hourly Limit: 30 requests per IP address per hour

> Daily Limit: 50 requests per IP address per day

_Note: if the photo url is NOT a photo, you will need to learn how to display a video in a React app on your own, OR just fetch the APOD from a different date by adding this to the back of the API endpoint: `&date=2012-03-14`_

**Step 4 - Adding the Data to State**

- [ ] Once you have made the call correctly, and logged the data, add the data to the state property you built.

**Step 5 - Display the Data**
Now is the time to build out your other components. Compose your UI, and then pass the data to your children components via props so you can render it on the DOM.

## _MVP Requirements:_

- [ ] Use the effect hook to fetch the APOD data when the component mounts.
- [ ] Display the APOD data in different components that are composed together to build your UI.

## Pro Tips:

- You may run into an error where your components try to access object properties before your data is finished being fetched - ie. `Cannot read property 'url' of undefined`. This means that the data you passed as props is undefined, when you were expecting it to be an object. You can fix this by simply adding something like this to any component that needs to read data from your state object:

```js
// Display a loading message while the data is fetching
if (!props.photoOfTheDay) return <h3>Loading...</h3>;

// Display your component as normal after the data has been fetched
return (
  {* your normal JSX here *}
);
```

- Read through the API docs carefully. You will read through many technical docs as a developer, so start now to try and understand them.

## Stretch Problems

Do not attempt stretch problems until MVP has been reached and a final commit has been made.

- [ ] Notice the optional query param `date`? You can pass a different date in your url like this `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14` to get the APOD from a different date. Add a date dropdown that allows you to select a different date and see that APOD. This will be quite a bit of work, but it will be a fantastic exercise to go through a little more complicated logic and interaction in your app. This is also a very common type of interaction, so it would be good to try this out
- [ ] Make another app that consumes another one of NASA's other APIs listed on the same website


 ## Part II - [Advanced Styling Techniques](DAY_TWO_README.md)

{
  "copyright":"ScottAspinall",
  "date":"2020-04-15",
  "explanation":"It was an astronomical triple play. Setting on the left, just after sunset near the end of last month, was our Moon -- showing a bright crescent phase.  Setting on the right was Venus, the brightest planet in the evening sky last month -- and this month, too.  With a small telescope, you could tell that Venus' phase was half, meaning that only half of the planet, as visible from Earth, was exposed to direct sunlight and brightly lit. High above and much further in the distance was the Pleiades star cluster.  Although the Moon and Venus move with respect to the background stars, the Pleiades do not -- because they are background stars. In the beginning of this month, Venus appeared to move right in front of the Pleiades, a rare event that happens only once every eight years.  The featured image captured this cosmic triangle with a series of exposures taken from the same camera over 70 minutes near Avonlea, Saskatchewan, Canada. The positions of the celestial objects was predicted. The only thing unpredicted was the existence of the foreground tree -- and the astrophotographer is still unsure what type of tree that is.",
  "hdurl":"https://apod.nasa.gov/apod/image/2004/MVP_Aspinall_2048.jpg",
  "media_type":"image",
  "service_version":"v1",
  "title":"A Cosmic Triangle",
  "url":"https://apod.nasa.gov/apod/image/2004/MVP_Aspinall_960.jpg"}



{"photos":[
  {
    "id":102693,

    "sol":1000,
    
    "camera":
      {
        "id":20,
        "name":"FHAZ",
        "rover_id":5
        "full_name":"Front Hazard Avoidance Camera"
      },
    
    "img_src":"http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG",
    
    "earth_date":"2015-05-30",
    
    "rover":
      {
        "id":5,
        "name":"Curiosity",
        "landing_date":"2012-08-06",
        "launch_date":"2011-11-26",
        "status":"active",
        "max_sol":2733,
        "max_date":"2020-04-14",
        "total_photos":415644,
        "cameras":
          [
            {
              "name":"FHAZ",
              "full_name":"Front Hazard Avoidance Camera"
            },
            {
              "name":"NAVCAM",
              "full_name":"Navigation Camera"
            },
            {
              "name":"MAST",
              "full_name":"Mast Camera"
            },
            {
              "name":"CHEMCAM",
              "full_name":"Chemistry and Camera Complex"
            },
            {
              "name":"MAHLI",
              "full_name":"Mars Hand Lens Imager"
            },
            {
              "name":"MARDI",
              "full_name":"Mars Descent Imager"
            },
            {
              "name":"RHAZ",
              "full_name":"Rear Hazard Avoidance Camera"
            }
          ]
        }
    },
    
  {
    "id":102694,"sol":1000,"camera":{"id":20,"name":"FHAZ","rover_id":5,"full_name":"Front Hazard Avoidance Camera"},"img_src":"http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FRB_486265257EDR_F0481570FHAZ00323M_.JPG","earth_date":"2015-05-30","rover":{"id":5,"name":"Curiosity","landing_date":"2012-08-06","launch_date":"2011-11-26","status":"active","max_sol":2733,"max_date":"2020-04-14","total_photos":415644,"cameras":[{"name":"FHAZ","full_name":"Front Hazard Avoidance Camera"},{"name":"NAVCAM","full_name":"Navigation Camera"},{"name":"MAST","full_name":"Mast Camera"},{"name":"CHEMCAM","full_name":"Chemistry and Camera Complex"},{"name":"MAHLI","full_name":"Mars Hand Lens Imager"},{"name":"MARDI","full_name":"Mars Descent Imager"},{"name":"RHAZ","full_name":"Rear Hazard Avoidance Camera"}]}
    },
    {
      "id":102850,"sol":1000,"camera":{"id":21,"name":"RHAZ","rover_id":5,"full_name":"Rear Hazard Avoidance Camera"},"img_src":"http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/rcam/RLB_486265291EDR_F0481570RHAZ00323M_.JPG","earth_date":"2015-05-30","rover":{"id":5,"name":"Curiosity","landing_date":"2012-08-06","launch_date":"2011-11-26","status":"active","max_sol":2733,"max_date":"2020-04-14","total_photos":415644,"cameras":[{"name":"FHAZ","full_name":"Front Hazard Avoidance Camera"},{"name":"NAVCAM","full_name":"Navigation Camera"},{"name":"MAST","full_name":"Mast Camera"},{"name":"CHEMCAM","full_name":"Chemistry and Camera Complex"},{"name":"MAHLI","full_name":"Mars Hand Lens Imager"},{"name":"MARDI","full_name":"Mars Descent Imager"},{"name":"RHAZ","full_name":"Rear Hazard Avoidance Camera"}]}
      },
      {
        "id":102851,"sol":1000,"camera":{"id":21,"name":"RHAZ","rover_id":5,"full_name":"Rear Hazard Avoidance Camera"},"img_src":"http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/rcam/RRB_486265291EDR_F0481570RHAZ00323M_.JPG","earth_date":"2015-05-30","rover":{"id":5,"name":"Curiosity","landing_date":"2012-08-06","launch_date":"2011-11-26","status":"active","max_sol":2733,"max_date":"2020-04-14","total_photos":415644,"cameras":[{"name":"FHAZ","full_name":"Front Hazard Avoidance Camera"},{"name":"NAVCAM","full_name":"Navigation Camera"},{"name":"MAST","full_name":"Mast Camera"},{"name":"CHEMCAM","full_name":"Chemistry and Camera Complex"},{"name":"MAHLI","full_name":"Mars Hand Lens Imager"},{"name":"MARDI","full_name":"Mars Descent Imager"},{"name":"RHAZ","full_name":"Rear Hazard Avoidance Camera"}]}},{"id":424905,"sol":1000,"camera":{"id":22,"name":"MAST","rover_id":5,"full_name":"Mast Camera"},"img_src":"http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631300503690E01_DXXX.jpg","earth_date":"2015-05-30","rover":{"id":5,"name":"Curiosity","landing_date":"2012-08-06","launch_date":"2011-11-26","status":"active","max_sol":2733,"max_date":"2020-04-14","total_photos