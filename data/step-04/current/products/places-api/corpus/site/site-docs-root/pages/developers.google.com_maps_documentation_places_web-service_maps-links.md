---
title: "Link to Google Maps \_|\_ Places API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/web-service/maps-links
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/web-service/op-overview
source_metadata:
  url: https://developers.google.com/maps/documentation/places/web-service/maps-links
  title: "Link to Google Maps \_|\_ Places API \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Google Maps Platform
Documentation
Web Services
Places API
Guides
Send feedback
Link to Google Maps
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Places API now returns Google Maps links within its responses, allowing users to easily access detailed place information, directions, reviews, and photos directly on Google Maps.
These links are provided in the googleMapsLinks field for places and googleMapsUri for reviews and photos, and developers can control which links are included in the response using field masks.
While currently in preview and free to use, the feature enables seamless integration with Google Maps for enhanced user experiences, offering direct access to place details, directions, reviews, and photos.
Google Maps directions links in responses are currently calculated from the user's current location to the place, and links for reviews and photos are only supported on the web version of Google Maps.
The Places API (New) accepts requests for place data through a variety of
methods. The Places API (New) response contains data about a place, including
location data and imagery, geographic locations, and prominent points of
interest.
The response from Text Search (New), Nearby Search (New), and
Place Details (New) can also contain links to Google Maps.
Your users can browse to these Google Maps links to see additional
information about a place in the response.
For example, you search for airports in San Francisco, California. The response
then includes San Francisco International Airport (SFO) in the list of places.
The Place
object for SFO in the response adds the googleMapsUri field containing
Google Maps links to open Google Maps to the place,
directions to the place, reviews of the place, and place photos.
Along with the links added to the Place object, the googleMapsUri field is
also added to the
Reviews
and
Photos
objects in the response:
Reviews.googleMapsUri : Contains a Google Maps link to the
review so you can view it in a browser.
Note: For a given place, the ReviewSummary.reviewsUri field in the
ReviewSummary
object contains the same link as the Reviews.googleMapsUri field.
Photos.googleMapsUri : Contains a Google Maps link to the photo
so you can view it in a browser.
The API Explorer lets you make live requests so that you can get familiar with
these new options:
Try it!
Supported Google Maps links for a place
The following table shows the Google Maps links that you can include
in the response:
Google Maps link
Description
Field name
Place
Link to open Google Maps to the place.
googleMapsLinks.placeUri
Directions
Link to open directions to the place in Google Maps.
googleMapsLinks.directionsUri
Write review
Link to write a review for the place in Google Maps.
googleMapsLinks.writeAReviewUri
Read reviews
Link to show Google Maps reviews of the place.
googleMapsLinks.reviewsUri
Photos
Link to show photos of the place in Google Maps.
googleMapsLinks.photosUri
Note: In this release, the links to read or write a review and to view a place
photo are only supported on the web version of Google Maps. They are
not supported on Google Maps Mobile.
Include all links in the Places response
The links in the places response are contained in the
googleMapsLinks
field. Make sure to include the googleMapsLinks field in the field mask of the
request if you want them to appear in the response.
For example, the following Text Search (New) includes all Maps links in
the response:
curl -X POST -d '{
"textQuery" : "San Francisco International Airport"
}' \
-H 'Content-Type: application/json' -H 'X-Goog-Api-Key: API_KEY ' \
-H 'X-Goog-FieldMask: places.displayName,places.formattedAddress,places.priceLevel, places.googleMapsLinks ' \
'https://places.googleapis.com/v1/places:searchText'
The response is in the form:
{
"places": [
{
"formattedAddress": "San Francisco, CA 94128, USA",
"displayName": {
"text": "San Francisco International Airport",
"languageCode": "en"
},
"googleMapsLinks": {
"placeUri": "https://maps.google.com/?cid=11885663895765773631",
"directionsUri": "https://www.google.com/maps/dir//''/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0x808f778c55555555:0xa4f25c571acded3f!3e0",
"writeAReviewUri": "https://www.google.com/maps/place//data=!4m3!3m2!1s0x808f778c55555555:0xa4f25c571acded3f!12e1",
"reviewsUri": "https://www.google.com/maps/place//data=!4m4!3m3!1s0x808f778c55555555:0xa4f25c571acded3f!9m1!1b1",
"photosUri": "https://www.google.com/maps/place//data=!4m3!3m2!1s0x808f778c55555555:0xa4f25c571acded3f!10e5"
}
}
]
}
Note: Previously, the
Place
object in the response included the place.googleMapsURI field containing a
Google Maps link to the place. The new
place.googleMapsLinks.placeURI field in the response contains the same value
as place.googleMapsURI .
Include a specific link in the response
You don't have to return all links in the response. For example, if you only
want the photos link in the response, modify the field mask as shown below to
only include the photosUri field:
curl -X POST -d '{
"textQuery" : "San Francisco International Airport"
}' \
-H 'Content-Type: application/json' -H 'X-Goog-Api-Key: API_KEY ' \
-H 'X-Goog-FieldMask: places.displayName,places.formattedAddress,places.priceLevel, places.googleMapsLinks.photosURI ' \
'https://places.googleapis.com/v1/places:searchText'
Include directions in the response
All Places methods support the generation of the directions link in the
response. The current location is used as the origin, the place location is used
as the destination, and the travel mode is drive.
The next example uses Nearby Search (New) to include the maps directions
link in the response in the directionsUri field:
curl -X POST -d '{
"includedTypes": ["restaurant"],
"maxResultCount": 10,
"locationRestriction": {
"circle": {
"center": {
"latitude": -33.8688,
"longitude": 151.1957362},
"radius": 500.0
}
}
}' \
-H 'Content-Type: application/json' -H 'X-Goog-Api-Key: API_KEY ' \
-H 'X-Goog-FieldMask: places.displayName, places.googleMapsLinks.directionsUri ' \
https://places.googleapis.com/v1/places:searchNearby
Note: For Text Search (New) and Nearby Search (New), you can use the
routingParameters request parameter to optionally specify an explicit origin.
While that request parameter affects the routing summaries and search along
route in the response, the
Google Maps directions are always calculated from the current
location.
Include reviews and photos links
This release adds the googleMapsUri field to the
Reviews
and
Photos
objects in the response. Browsing to these links opens the review or photo in
Google Maps.
For example, the following Text Search (New) includes reviews and photos
for each place in the response:
curl -X POST -d '{
"textQuery" : "Spicy Vegetarian Food in Sydney, Australia"
}' \
-H 'Content-Type: application/json' -H 'X-Goog-Api-Key: API_KEY ' \
-H 'X-Goog-FieldMask: places.displayName, places.reviews,places.photos ' \
'https://places.googleapis.com/v1/places:searchText'
In the response, each element of the reviews and photos array contains the
googleMapsUri field to open the review or photo in a browser.
Try it!
The API Explorer lets you make sample requests so that you can get familiar with
the API and the API options.
Select the
api
API icon on the right
side of the page.
Optionally expand Show standard parameters and set the fields
parameter to the field
mask .
Optionally edit the Request body .
Select Execute button. In the dialog, choose the account that you want
to use to make the request.
In the API Explorer panel, select
fullscreen
Fullscreen to expand the API Explorer window.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["The Places API now includes Google Maps links in its responses for Text Search, Nearby Search, and Place Details. These links, accessible via the `googleMapsLinks` field, allow users to directly view places, directions, reviews, and photos in Google Maps. The `Reviews` and `Photos` objects also include a `googleMapsUri` for individual items. You can customize which links to include by using the field mask in your request. Currently, the feature is in pre-GA Preview with no billing, and some links are only supported on the web version of Google Maps.\n"]]
