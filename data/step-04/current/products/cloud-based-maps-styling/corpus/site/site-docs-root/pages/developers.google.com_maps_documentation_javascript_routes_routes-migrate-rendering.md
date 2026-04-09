---
title: "Migrate to the new rendering methods \_|\_ Maps JavaScript API \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/maps/documentation/javascript/routes/routes-migrate-rendering
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/cloud-customization?csw=1
source_metadata:
  url: https://developers.google.com/maps/documentation/javascript/routes/routes-migrate-rendering
  title: "Migrate to the new rendering methods \_|\_ Maps JavaScript API \_|\_ Google\
    \ for Developers"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Migrate to the new rendering methods | Maps JavaScript API | Google for Developers
Skip to main content
Google
Maps Platform
Overview
Products
Pricing
Documentation
Get Started
Get Started with Google Maps Platform
Capabilities Explorer
Pricing & Billing
Security & Compliance
Reporting & Monitoring
FAQ
Support and Resources
Customer Care
Incident Management
Maps
Maps JavaScript API
Maps SDK for Android
Maps SDK for iOS
Google Maps for Flutter
Maps Embed API
Maps Static API
Street View Insights
Street View Static API
Maps URLs
Aerial View API
Elevation API
Map Tiles API
Maps Datasets API
Web Components
Routes
Routes API
Navigation SDK for Android
Navigation SDK for iOS
Navigation for Flutter
Navigation for React Native
Roads API
Route Optimization API
Analytics
Google Earth
Places Insights
Imagery Insights
Roads Management Insights
Places
Places API
Places SDK for Android
Places SDK for iOS
Places Library, Maps JavaScript API
Geocoding API
Geolocation API
Address Validation API
Time Zone API
Places Aggregate API
Environment
Air Quality API
Pollen API
Solar API
Weather API
Solutions
Maps Builder agent
Industry solutions
Mobility services
Additional Resources
API Security Best Practices
Digital Signature Guide
Map Coverage Details
Optimization Guide
Mobile OS and software support
Launch stages
Legacy products
Deprecations
URL Encoding
WordPress Users
Blog
More
Community
GitHub
YouTube
LinkedIn
Discord
Innovators
Issue Tracker
/
English
Deutsch
Español
Español – América Latina
Français
Indonesia
Italiano
Polski
Português – Brasil
Tiếng Việt
Türkçe
Русский
עברית
العربيّة
فارسی
हिंदी
বাংলা
ภาษาไทย
中文 – 简体
中文 – 繁體
日本語
한국어
Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
Web
Maps JavaScript API
Get Started
Contact sales
Guides
Reference
Samples
Resources
Legacy
More
Google
Maps Platform
Overview
Products
Pricing
Documentation
More
Guides
Reference
Samples
Resources
Legacy
Blog
Community
More
Places Service (Legacy)
Place Search and Details
Place Autocomplete
Place Data Fields
Place Types
Directions and Distance Matrix (Legacy)
Directions
Distance Matrix
Migrate to Places (New)
Migration Overview
Migrate to the new Place Details
Migrate to the new Place Search
Migrate to the new Nearby Search
Migrate to the new Place Photos
Migrate to the new Place Reviews
Migrate to the new Place Autocomplete
Migrate to the new Autocomplete Widget
Migrate to the Routes Library, Maps Java Script API
Migrate to the new Route class
Migrate to the new Route Matrix class
Migrate to the new rendering methods
Get Started
Get Started with Google Maps Platform
Capabilities Explorer
Pricing & Billing
Security & Compliance
Reporting & Monitoring
FAQ
Support and Resources
Customer Care
Incident Management
Maps
Maps JavaScript API
Maps SDK for Android
Maps SDK for iOS
Google Maps for Flutter
Maps Embed API
Maps Static API
Street View Insights
Street View Static API
Maps URLs
Aerial View API
Elevation API
Map Tiles API
Maps Datasets API
Web Components
Routes
Routes API
Navigation SDK for Android
Navigation SDK for iOS
Navigation for Flutter
Navigation for React Native
Roads API
Route Optimization API
Analytics
Google Earth
Places Insights
Imagery Insights
Roads Management Insights
Places
Places API
Places SDK for Android
Places SDK for iOS
Places Library, Maps JavaScript API
Geocoding API
Geolocation API
Address Validation API
Time Zone API
Places Aggregate API
Environment
Air Quality API
Pollen API
Solar API
Weather API
Solutions
Maps Builder agent
Industry solutions
Mobility services
Additional Resources
API Security Best Practices
Digital Signature Guide
Map Coverage Details
Optimization Guide
Mobile OS and software support
Launch stages
Legacy products
Deprecations
URL Encoding
WordPress Users
GitHub
YouTube
LinkedIn
Discord
Innovators
Issue Tracker
On this page
Legacy DirectionsRenderer
Route class
reviews Get a Maps Demo Key : Try out select Maps JavaScript API and Places UI Kit features at no cost with a Maps Demo Key—no billing information required.
Home
Products
Google Maps Platform
Documentation
Web
Maps JavaScript API
Legacy
Was this helpful?
Send feedback
Migrate to the new rendering methods
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Legacy DirectionsRenderer
Route class
European Economic Area (EEA) developers
If your billing address is in the European Economic Area, effective on 8 July 2025, the
Google Maps Platform EEA Terms of Service
will apply to your use of the Services. Functionality varies by region.
Learn more .
This guide shows you how to migrate to the new rendering methods for the Route class.
In the Directions service (Legacy), the rendering methods were part of the
DirectionsRenderer class. The Route class provides two new rendering
methods: createPolylines and createWaypointAdvancedMarkers .
Legacy Directions Renderer
In the Directions service (Legacy), the rendering methods were part of the
DirectionsRenderer class. The DirectionsRenderer class handles
display of the polyline, any associated markers, as well as the textual display of steps; it
has the following methods:
setDirections() - Renders the provided directions response.
setMap() - Sets the map on which to render the directions response.
setPanel() - Displays the directions as a series of textual steps in a panel.
The following example shows how to use the DirectionsRenderer class to render
directions on a map.
function initMap () {
var directionsService = new google . maps . DirectionsService ();
var directionsRenderer = new google . maps . DirectionsRenderer ();
var chicago = new google . maps . LatLng ( 41.850033 , - 87.6500523 );
var mapOptions = {
zoom : 7 ,
center : chicago
}
var map = new google . maps . Map ( document . getElementById ( 'map' ), mapOptions );
// Set the map on the directions renderer.
directionsRenderer . setMap ( map );
// Set the panel to display the directions as a series of textual steps.
directionsRenderer . setPanel ( document . getElementById ( 'directionsPanel' ));
}
function calcRoute () {
var start = document . getElementById ( 'start' ). value ;
var end = document . getElementById ( 'end' ). value ;
var request = {
origin : start ,
destination : end ,
travelMode : 'DRIVING'
};
// Call the directions service to get the directions.
directionsService . route ( request , function ( response , status ) {
if ( status == 'OK' ) {
// Render the polyline and markers on the map.
directionsRenderer . setDirections ( response );
}
});
}
Route class
The Route class provides the following new rendering methods, which replace the
legacy DirectionsRenderer class methods:
createPolylines
createWaypointAdvancedMarkers
The Route class has no equivalent to the setPanel() method in the
legacy DirectionsRenderer class. To display the textual steps, you must
manually create the HTML elements and insert them into the DOM. The following example
shows how to render directions on a map using the Route class, and manually create the
HTML elements to display the textual steps.
let map ;
let mapPolylines = [];
let markers = [];
let center = { lat : 37.447646 , lng : - 122.113878 }; // Palo Alto, CA
// Initialize and add the map.
async function initMap () {
// Request the needed libraries.
const { Map } = await google . maps . importLibrary ( 'maps' ) as google . maps . MapsLibrary ;
const { Route } = await google . maps . importLibrary ( 'routes' ) as google . maps . Routes ;
map = new Map ( document . getElementById ( "map" ), {
zoom : 12 ,
center ,
mapTypeControl : false ,
mapId : 'DEMO_MAP_ID' ,
});
// Define a simple directions request.
const request = {
origin : 'Mountain View, CA' ,
destination : 'San Francisco, CA' ,
travelMode : 'DRIVING' ,
fields : [ 'legs' ],
};
// Call computeRoutes to get the directions.
const { routes } = await Route . computeRoutes ( request );
// Use createPolylines to create polylines for the route.
mapPolylines = routes [ 0 ]. createPolylines ();
// Add polylines to the map.
mapPolylines . forEach (( polyline ) => polyline . setMap ( map ));
fitMapToPath ( routes [ 0 ]. path );
// Add markers to start and end points.
const markers = await routes [ 0 ]. createWaypointAdvancedMarkers ({ map });
// Render navigation instructions.
const directionsPanel = document . getElementById ( "directions-panel" );
if ( ! routes || routes . length === 0 ) {
if ( directionsPanel ) {
directionsPanel . textContent = "No routes available." ;
}
}
const route = routes [ 0 ];
if ( ! route . legs || route . legs . length === 0 ) {
if ( directionsPanel ) {
directionsPanel . textContent = "The route has no legs." ;
}
return ;
}
const fragment = document . createDocumentFragment ();
route . legs . forEach (( leg , index ) => {
const legContainer = document . createElement ( "div" );
legContainer . className = "directions-leg" ;
legContainer . setAttribute ( "aria-label" , `Leg ${ index + 1 } ` );
// Leg Title
const legTitleElement = document . createElement ( "h3" );
legTitleElement . textContent = `Leg ${ index + 1 } of ${ route . legs . length } ` ;
legContainer . appendChild ( legTitleElement );
if ( leg . steps && leg . steps . length > 0 ) {
// Add steps to an ordered list
const stepsList = document . createElement ( "ol" );
stepsList . className = "directions-steps" ;
leg . steps . forEach (( step , stepIndex ) => {
const stepItem = document . createElement ( "li" );
stepItem . className = "direction-step" ;
stepItem . setAttribute ( "aria-label" , `Step ${ stepIndex + 1 } ` );
// Maneuver
if ( step . maneuver ) {
const maneuverNode = document . createElement ( "p" );
maneuverNode . textContent = step . maneuver ;
maneuverNode . className = "maneuver" ;
stepItem . appendChild ( maneuverNode );
}
// Distance and Duration
if ( step . localizedValues ) {
const distanceNode = document . createElement ( "p" );
distanceNode . textContent = ` ${ step . localizedValues . distance } ( ${ step . localizedValues . staticDuration } )` ;
distanceNode . className = "distance" ;
stepItem . appendChild ( distanceNode );
}
// Instructions
if ( step . instructions ) {
const instructionsNode = document . createElement ( "p" );
instructionsNode . textContent = step . instructions ;
instructionsNode . className = "instruction" ;
stepItem . appendChild ( instructionsNode );
}
stepsList . appendChild ( stepItem );
});
legContainer . appendChild ( stepsList );
}
fragment . appendChild ( legContainer );
directionsPanel ? . appendChild ( fragment );
});
}
// Helper function to fit the map to the path.
async function fitMapToPath ( path ) {
const { LatLngBounds } = await google . maps . importLibrary ( 'core' ) as google . maps . CoreLibrary ;
const bounds = new LatLngBounds ();
path . forEach (( point ) => {
bounds . extend ( point );
});
map . fitBounds ( bounds );
}
initMap ();
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
Stack Overflow
Ask a question under the google-maps tag.
GitHub
Fork our samples and try them yourself.
Discord
Chat with fellow developers about Google Maps Platform.
Issue Tracker
Something wrong? Send us a bug report!
Learn More
FAQ
Capabilities Explorer
Tutorials
Platforms
Android
iOS
Web
Web Services
Product Info
Pricing and Plans
Contact Sales
Support
Terms of Service
Android
Chrome
Firebase
Google Cloud Platform
Google AI
All products
Terms
Privacy
Manage cookies
English
Deutsch
Español
Español – América Latina
Français
Indonesia
Italiano
Polski
Português – Brasil
Tiếng Việt
Türkçe
Русский
עברית
العربيّة
فارسی
हिंदी
বাংলা
ภาษาไทย
中文 – 简体
中文 – 繁體
日本語
한국어
