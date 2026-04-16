---
title: "About the Places API (New) \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/web-service/op-overview
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/web-service/release-notes
source_metadata:
  url: https://developers.google.com/maps/documentation/places/web-service/op-overview
  title: "About the Places API (New) \_|\_ Google for Developers"
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
About the Places API (New)
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Places API (New) offers Place Details, Place Photo, Nearby Search, Text Search, and Autocomplete APIs for comprehensive place information.
Place Details (New) provides detailed information about a place using its Place ID, including address, ratings, and reviews, and is more efficient than search APIs when you have the Place ID.
Text Search (New) allows searching for places using text strings like "restaurants near me," while Nearby Search (New) lets you find places within a specific geographic area.
Place Photo (New) grants access to Google's extensive photo database, enabling you to enhance your application with high-quality images of places.
Autocomplete (New) predicts places and queries as users type, using session tokens to track and manage user interactions for billing purposes.
European Economic Area (EEA) developers
If your billing address is in the European Economic Area, effective on 8 July 2025, the
Google Maps Platform EEA Terms of Service
will apply to your use of the Services. Functionality varies by region.
Learn more .
Introduction
The Places API (New) includes the following APIs:
Place Details (New)
Place Photos (New)
Nearby Search (New)
Text Search (New)
Autocomplete (New)
This document contains an overview of these new APIs.
Place Details (New)
A place ID uniquely identifies a place in the Google Places database and on
Google Maps. With a place ID, you can request details about a particular
establishment or point of interest by initiating a
Place Details (New) request. A Place Details (New) request
returns comprehensive information about the indicated place such as its complete
address, phone number, user rating, and reviews.
Note: You can get the same details about a place from Place Details (New)
that you can also get from Text Search (New) or Nearby Search (New).
However, if you already have the place ID of a location, calling
Place Details (New) is less expensive than calling one of the search APIs.
There are many ways to obtain a place ID. You can use:
Text Search (New)
Nearby Search (New)
Geocoding API
Routes API
Address Validation API
Autocomplete (New)
Place Photos (New)
Place Photos (New) lets you add high quality photographic content to
your application by giving you access to the millions of photos stored in the
Google Places database. Using the Place Photos (New) API, you can access
the photos and resize the image to the optimal size for your application.
All requests to the Place Photos (New) API must include a photo resource
name, which uniquely identifies the photo to return. You can obtain the photo
resource name by using:
Place Details (New)
Text Search (New)
Nearby Search (New)
To include the photo resource name in the response from a
Place Details (New), Text Search (New), or Nearby Search (New)
request, make sure that you include the photos field in the field mask of the
request.
Text Search (New) and Nearby Search (New)
The Places API includes two search APIs:
Text Search (New)
Lets you specify a text string on which to search for a place. For example:
"Spicy Vegetarian Food in Sydney, Australia" or "Fine seafood dining near
Palo Alto, CA".
You can refine the search by specifying details such as price levels,
current opening status, ratings, or specific place types. You can also
specify to bias the results to a specific location, or restrict the search
to a specific location.
Nearby Search (New)
Lets you specify a region to search along with a list of place types.
Specify the region as a circle defined by the latitude and longitude
coordinates of the center point and radius in meters.
Specify one or more place types that define the characteristics of the
place. For example, specify " pizza_restaurant " and " shopping_mall " to
search for a pizza restaurant located in a shopping mall in the specified
region.
The main difference between the two searches is that Text Search (New)
lets you specify an arbitrary search string while Nearby Search (New)
requires a specific area in which to search.
Autocomplete (New) and session tokens
Autocomplete (New) is a web service that returns place predictions
and query predictions in response to an HTTP request. In the request, specify a
text search string and geographic bounds that controls the search area.
Session tokens are user-generated strings that track Autocomplete (New)
calls as sessions. Autocomplete (New) uses session tokens to group the
query and selection phases of a user autocomplete search into a discrete session
for billing purposes.
New fields, attributes, and accessibility options
The Places API (New) includes new fields, attributes, and accessibility
options to provide users with more information about a place. These aspects are
described in the following sections.
Fields
The Places API (New) includes several new fields:
Field
Description
regularSecondaryOpeningHours
Describes particular times for certain operations. Secondary
opening hours are different from a business's main hours. For
example, a restaurant can specify drive through hours or delivery
hours as its secondary hours.
paymentOptions
Payment options the place accepts. A place can accept more than
one payment option. If payment option data is not available, the
payment option field will be unset. Options include the following:
Credit card
Debit card
Cash only
NFC payment
parkingOptions
Parking options provided by the place. Options include the following:
Free parking lots
Paid parking lots
Free street parking
Valet parking
Free garage parking
Paid garage parking
subDestinations
Unique places that are related to a particular place. For
example, airport terminals are considered sub-destinations of an
airport.
fuelOptions
The most recent information about fuel options available at a
gas station. This information is updated regularly. Options include
the following:
Diesel
Regular unleaded
Midgrade
Premium
SP91
SP91 E10
SP92
SP95 E10
SP98
SP99
SP100
LPG
E80
E85
Methane
Biodiesel
Truck diesel
evChargeOptions
Number of electric vehicle (EV) chargers at this station. While
some EV chargers have multiple connectors, each charger can only
charge one vehicle at a time; as a result, this field reflects the
number of available EV chargers at a given time.
shortFormattedAddress
A short, human-readable address for a place.
primaryType
The primary type of the given result. For example, a place may
be classified as a cafe or an airport . A
place can only have a single primary type. For the complete list of
possible values, see Supported types .
primaryTypeDisplayName
The display name of the primary type, localized to the request
language if applicable. For the complete list of possible values,
see Supported types .
Attributes
The Places API (New) includes several new attributes:
Attribute
Description
outdoorSeating
Place provides outdoor seating.
liveMusic
Place provides live music.
menuForChildren
Place has a children's menu.
servesCocktails
Place serves cocktails.
servesDessert
Place serves dessert.
servesCoffee
Place serves coffee.
goodForChildren
Place is good for children.
allowsDogs
Place allows dogs.
restroom
Place has a restroom.
goodForGroups
Place accommodates groups.
goodForWatchingSports
Place is suitable for watching sports.
Accessibility options
The Places API (New) includes the following accessibility option fields:
Field
Description
wheelchairAccessibleParking
Place offers wheelchair-accessible parking.
wheelchairAccessibleEntrance
Place has a wheelchair-accessible entrance.
wheelchairAccessibleRestroom
Place has a wheelchair-accessible restroom.
wheelchairAccessibleSeating
Place has wheelchair-accessible seating.
AI-powered summaries
Places API (New) AI-powered summaries use Gemini model capabilities to
return summaries about places and areas that can help users decide where to go.
AI-powered summaries synthesize data from a variety of inputs to help users make
more informed decisions about a place. For example, if you are considering
trying a new restaurant, an AI-powered summary can surface common menu
highlights, give you an idea of the vibe, or pull together themes from user
reviews. If you are visiting a new city, an AI-powered summary can provide an
overview of nearby attractions and amenities.
Note: All AI-powered summaries displayed in your app must be accompanied by the
appropriate attribution in accordance with Google's policies and standards. For
more information, see Policies for Places
API .
AI-powered features added to the Places API (New)
AI-powered summaries are supported by
Place Details (New) ,
Text Search (New) ,
and
Nearby Search (New) .
The following AI-powered summaries are available in Places API (New)
responses:
Place summaries ,
which are short overview summaries related to a specific place.
Review summaries ,
which are digestible summaries of what reviewers have said about a place.
Area summaries ,
which provide overviews of nearby and popular places in the surrounding
area. These include neighborhood summaries and EV charging station
summaries.
Google frequently regenerates these summaries to ensure that they are fresh
based on the latest available information. When you make a
Places API (New) request, you will display the freshest data in your app.
Try the AI-powered summaries demo open_in_new
Migrate to the New Places APIs
If you are an existing Places API (New) customer and want to migrate your app to
use the new APIs, see the following migration documentation:
Migrate to Place Details (New)
Migrate to Nearby Search (New)
Migrate to Text Search (New)
Migrate to Place Photos (New)
Migrate to Autocomplete (New)
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
