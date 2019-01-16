# UK Property Stats - Interactive Front End Milestone Project

The UK Property Stats site has been created for those who want to easily compare the amount of sales, and the prices of properties in different cities and towns across all parts of the UK. There is a map providing a quick overview of the data. Underneath there are charts which the allow the user to see the differences between the cities. The user can interact with the chart.

The site purpose is to display facts and figures about the UK Property market in an easy to read, graphical form.

## User Experience
The Google Maps API was used to enable the user to click on the markers and get an instant overview of the house sales and prices for a particular city. Under the map there are two buttons ("House Sales" and "House Prices"). The user can click either of these to get the relevant information regarding each topic.

### Example Use of the Site
The user would go onto the site and be presented with an introduction and overall description. Immediately following this is the map. This has been created using the Google Maps API, and has a number of icons. When the user clicks on these icons, they are presented with the name of the town, the average house price there and the homes sold over the last year. 
They can then click to choose the information they want to read, whether this is house price or house sales information. Depending on which they click they are presented with three charts underneath. Two of these are connected:

#### House Sales
When the house sales button is clicked there is a header for the section the same colour as the button they have just pressed. This leads to a good user experience as the user knows which section they are looking at when reading the information. 

The house sales section has a bar chart which shows the number of houses sold in cities across the UK. Next to this is a pie chart, which shows how the number of sales can be broken down among the house types. The opening paragraph explains to the user how they can click on sections of the graph to manipulate the other chart.

The line graph at the bottom is static and just shows the user how the number of house sales has fluctuated over the last few years across the whole of the UK.

#### House Prices
When the user clicks on the house price button they are presented with two bar charts. These are displayed in a similar format to that of the house sales section. One shows the house prices across cities and the other the house prices of these house types. 

Similar to the above, when one of the bars is clicked they can see the impact this has on the other chart. i.e. click on the Manchester bar and this will show the average house prices per type in Manchester. Or click on the Manchester bar and see how this affects the price of the house types for that city.

As per the House Sales section the line chart just shows the user how house prices have changed UK wide over the last few years.

#### Hide Charts
When clicked all charts are hidden if currently displayed.

#### Footer
The footer contains the about section, contact form, and links to social media accounts.

## Features
### Existing Features
This website contains the interactive map with icons. The active buttons enable the user to choose the information they wish to view. The charts are interactive. The top two graphs for each of the sections (house prices and house sales) are linked together.

There is a contact section that requires the user to write the correct information required by that input field.

### Features to Implement
With a DC line chart there is an option to present the information in a table format. This could be displayed below the graph. 

For the information in the graphs, I have produced my own collection of data from online sources. There could be property APIs that would enable me to get access to more data. 

## Technology Used
The overall layout of this site was created in HTML and CSS, and uses responsive design with a mobile first approach. This project uses two APIs (Google Maps and EmailJS), and has a number of Javascript files for different sections of the page. Bootstrap was used for the navigation bar and the font-family. The buttons have been built using jQuery, and the charts have been built with javascript using D3 and DC. 

### Navigation Bar
This website is a single page application so rather than move from page to page the different list items within the navigation bar scroll down to a particular section of the page.

### Map
The map was created using the Google Maps API. A number of markers were added for the different cities and in the maps.js file a dataset with a variable name "cities" was built so that the markers on the map could be created. Each marker was created in the variable named "newMarker" using the for loop which iterated through the data in each of the arrays contained within "cities".

### Buttons
The file graphButton.js contains jQuery code that reponds to the user's actions by presenting the information they have asked to view ("House Sales", or "House Prices"). House Price or House Sales information and graphs are displayed depending on which button is clicked. 

### Charts
The charts were created using D3 and DC. When in mobile views, the bar charts that overflow on the page have been set to scroll horizontally. The data for the charts have been stored in variables within the files where they are used. The averaging function has been created in its own file for neatness.

### Contact Section
The contact section is at the bottom of the page as part of the footer, and has been linked to the emailjs API. The different input bars have been set up to receive the correct types of information expected for what is being asked. 

## Testing
The website has been tested in different browsers and for different screen widths. This was to check the functionality of the site for different environments. The developer tools and console were used in the development and testing phase. It was tested for mobile responsiveness (for the general layout), and to check readability.

I also had people use the site to check its user friendliness. I found that there was some confusion at first about the links between the different bars and pie charts. I created a scrolling selector so the user could choose cities or house types for the different charts, but found this created other issues and confusion, as there was still the functionality to be able to click on the individual bars on the charts.

The contact section in the footer was tested by simply typing wrong types of information or leaving blank the different input boxes. I was finding that sometimes when I was inserting data into the form, the information would not be sent to the email address linked.

The site was run through HTML and CSS validation sites, and any errors found were corrected.

## Deployment
The project has been deployed to Github using the 'git push' command from the terminal. At first I had an issue when pushing the site to git hub, as the code had moved off of the 'master' branch. 

The link to the repository can be found by clicking https://github.com/JShad30/uk-property-stats.

The link to the web page itself is https://jshad30.github.io/uk-property-stats/.

## Credits
The figures for the number of house sales and house prices were obtained from Zoopla for both the cityPriceData and citiesData variables. The Google API was used for the creation of the map, and EmailJS for the contact section. 

While no code was copied directly, Stack Overflow and general online queries were used where needed.

My mentor guided me on the build of the variable currentWindow, used in the maps.js file.

### Header Image
The header image at the top was the only image used and was obtained from Pixabay.

