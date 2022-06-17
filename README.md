# Ravenous
> A Yelp-like clone that leverages the Yelp API to allow users to browse restaurants and other businesses in a given location.
> Live demo [_here_](https://peterkibuchi.github.io/ravenous/).

__Disclaimer:__ The app is currently unable to fetch results due to CORS restrictions. 

We can bypass this restriction with an API called CORS Anywhere. CORS Anywhere takes requests sent to its API endpoint and configures them with the proper CORS permissions.

In order to use the app, open a new tab in your browser, visit https://cors-anywhere.herokuapp.com/corsdemo, and click “Request temporary access to the demo server.” _Voila_! You can now fetch results.

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Contact](#contact)
<!-- * [License](#license) -->


## General Information
- Ravenous is powered by the Yelp API.


## Technologies Used
- React


## Features
- Users can search for restaurants and view a list of restaurants returned by the Yelp API
- Users can sort through restaurants using a filter


## Project Status
Project is: _complete_.


## Room for Improvement
Room for improvement:
- Improve the styling
- Clicking on a different sorting option automatically requeries the Yelp API, rather than having to manually click “Let’s Go” again
- Allow one to search by pressing “Enter” (or “Return”) on your keyboard, as opposed to manually clicking

To do:
- Make images clickable and have them open the business’ website in a new tab
- Make addresses clickable and have them open the address in Google Maps in a new tab
- Add autocompletion of addresses to the “Location” input


## Contact
Created by [Peter Kibuchi](https://www.peterkibuchi.com/).


<!-- ## License -->
<!-- This project is open source and available under the [... License](). -->