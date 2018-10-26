# Interactive Front End Milestone Project - UK Property Stats

## UK Property Stats

UK Property Stats is my website created for the Interactive Front End Development course. The site is created for those who want to easily compare the amount of sales, and the prices of properties in different cities and towns in different parts of the UK. There is a map providing a quick overview of the data. Underneath there are charts which the allow the user to see the differences between the cities. The user can interact with the chart.

the site is to display facts and figures about the UK Property market and display them in an easy to read, graphical form.

### User Experience

DC and D3 have been used to create well presented, easy to read, and connected graphs. 

The Google Map API was also used to enable the user to click on the markers and get an instant overview of the house sales and prices for a particular city. Under the map there are two buttons ("House Sales" and "House Prices"). The user can click either of these to get the relevant information regarding each. The user is able to toggle between the two to display the information they require.

### Features

### Technologies Used

This project uses two APIs (Google Maps and EmailJS), and has a number of Javascript files for different sections of the page. Bootstrap was used for the navigation bar and the font-family. The site is responsive to different media types and browsers, and is created with mobile first design.

#### Navigation Bar

This website is a single page application so rather than move from page to page the different list items within the navigation bar scroll down to a particular section of the page.

#### Map

The map was created using the Google Maps API. A number of markers were added for the different cities and in the maps.js file a dataset with a variable name "cities" was built so that the markers on the map could be created. Each marker was created in the variable named "newMarker" using the for loop which iterated through the data in each of the arrays contained within "cities".

#### Buttons

The file graphButton.js contains jQuery code that reponds to the users actions, depending on what button is pressed ("House Sales", or "House Prices"). House Price or House Sales information and graphs are displayed depending on which button is clicked. 

#### Contact Section

The contact section is at the bottom of the page as part of the footer, and has been linked to emailjs. 

The different input bars have been set up to receive the correct types of information expected for what is being asked. This was tested by simply typing wrong types of information or leaving blank the different input boxes.

### Testing

The website has been tested in different browsers and for different screen widths, to check that it works across different screen widths and briwsers. The site was run through HTML and CSS validation sites, and any errors found were corrected. The developer tools and console were used in the development and testing phase. It was tested for mobile responsiveness (for the general layout), and to check readability.

I also had people use the site to check its user friendliness. I found that there was some confusion at first about the links between the different bars and pie charts. I created a scrolling selector so the user could choose cities or house types for the different charts, but found this created some more issues and confusion, as there was still the functionality to be able to click on the individual bars on the charts.

### Deployment



### Credits

The figures for the number of house sales and house prices were obtained from Zoopla for both the cityPriceData and cities data variables. The Google API was used for the creation of the map, and EmailJS for the contact section. The image used at the header was obtained from Pixabay.
