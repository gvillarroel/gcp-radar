---
title: "AI-powered place summaries \_|\_ Places API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/web-service/place-summaries
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/web-service/op-overview
source_metadata:
  url: https://developers.google.com/maps/documentation/places/web-service/place-summaries
  title: "AI-powered place summaries \_|\_ Places API \_|\_ Google for Developers"
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
AI-powered place summaries
Stay organized with collections
Save and categorize content based on your preferences.
AI-powered place summaries are brief, 100-character overviews specific to a
given place ID. Place summaries aggregate many different types of data into a
high-level overview to help users get a snapshot of a place.
For example, place summaries may highlight popular foods, services, or goods
available for purchase at a location:
"Forum Shops eatery serving large portions of traditional Italian fare in a
casual space."
"Stylish salon offering haircuts and coloring, plus blowouts."
"Large store with many vendors offering a variety of vintage decor,
furniture, and clothing."
Place summaries are supported by
Place Details (New) ,
Text Search (New) ,
and
Nearby Search (New) .
Place summaries are available for place types shown in Supported
types for the categories
Culture , Entertainment and Recreation , Food and Drink , Shopping ,
Services, and Sports .
Place summaries are supported for points of interest in the following languages
and regions:
Language
Region
English
India
United States
Note: Place summaries are not guaranteed for all places.
Try the AI-powered summaries demo open_in_new
Request a generative place summary
To return a place summary in the response, include the following field in the
field mask of the
request:
Place Details (New): generativeSummary
Text Search (New) and Nearby Search (New):
places.generativeSummary
The
generativeSummary
field contains the following fields:
generativeSummary : The place summary.
overviewFlagContentUri :
A link where users can flag a problem with the place summary.
disclosureText : A localized text string with the disclosure text
"Summarized with Gemini" that must be incorporated in attributions.
Place Details (New) request
The following Place Details (New) request returns an overview summary
for a sushi restaurant in Chicago, IL:
curl -X GET https://places.googleapis.com/v1/places/ChIJ1eOF7HLTD4gRry3xPjk8DkU \
-H 'Content-Type: application/json' \
-H "X-Goog-Api-Key: API_KEY " \
-H "X-Goog-FieldMask: displayName, generativeSummary "
The response is in the form:
{
"displayName" : {
"text" : "Sushi Nova - Lincoln Park" ,
"languageCode" : "en"
},
"generativeSummary" : {
"overview" : {
"text" : "Casual eatery with all-you-can-eat sushi and other Japanese fare, plus beer and sake." ,
"languageCode" : "en-US"
},
"overviewFlagContentUri" : "https://www.google.com/local/review/rap/report?postId=CiUweDg4MGZkMzcyZWM4NWUzZDU6MHg0NTBlM2MzOTNlZjEyZGFmMAI&d=17924085&t=12" ,
"disclaimerText" : {
"text" : "Summarized with Gemini" ,
"languageCode" : "en-US"
}
}
}
Text Search (New) request
The following Text Search (New) request returns an overview summary for
spicy vegetarian restaurants in Mountain View, CA:
curl -X POST -d '{
"textQuery": "Spicy Vegetarian Food",
"location_bias": {
"rectangle": {
"low": {
"latitude": 37.415,
"longitude": -122.091
},
"high": {
"latitude": 37.429,
"longitude": -122.065
}
}
},
"maxResultCount": 5
}' \
-H 'Content-Type: application/json' -H "X-Goog-Api-Key: API_KEY " \
-H "X-Goog-FieldMask: places.id,places.displayName, places.generativeSummary " \
'https://places.googleapis.com/v1/places:searchText'
The response is in the form:
{
"places" : [
{
"id" : "ChIJ8wN5kzm3j4AR_dRdUHoqrPI" ,
"displayName" : {
"text" : "Plant-Based Vegan Vietnamese" ,
"languageCode" : "en"
}
},
{
"id" : "ChIJw4RuczO3j4ARC7RByZ5K9nI" ,
"displayName" : {
"text" : "sweetgreen" ,
"languageCode" : "en"
},
"generativeSummary" : {
"overview" : {
"text" : "Casual eatery offering healthy, made-to-order salads, plates, and grain bowls with vegan options." ,
"languageCode" : "en-US"
},
"overviewFlagContentUri" : "https://www.google.com/local/review/rap/report?postId=CiUweDgwOGZiNzMzNzM2ZTg0YzM6MHg3MmY2NGE5ZWM5NDFiNDBiMAI&d=17924085&t=12" ,
"disclosureText" : {
"text" : "Summarized with Gemini" ,
"languageCode" : "en-US"
}
}
},
/.../
]
}
Nearby Search (New) request
The following Nearby Search (New) request returns an overview summary
for restaurants and cafes in Portland, OR:
curl -X POST -d '{
"maxResultCount": 5,
"locationRestriction": {
"circle": {
"center": {
"latitude": 45.553360,
"longitude": -122.674934
},
"radius": 1000
}
},
"includedTypes": ["restaurant", "cafe"],
"excludedTypes": [],
"rankPreference":"POPULARITY"
}' \
-H 'Content-Type: application/json' -H "X-Goog-Api-Key: API_KEY " \
-H "X-Goog-FieldMask: places.id, places.generativeSummary " \
'https://places.googleapis.com/v1/places:searchNearby'
The response is in the form:
{
"places" : [
{
"id" : "ChIJOa08KlqnlVQR_ZZx1jEcTYY" ,
"generativeSummary" : {
"overview" : {
"text" : "BBQ and Thai street fare, plus imaginative tropical cocktails, served in a vibrant space." ,
"languageCode" : "en-US"
},
"disclosureText" : {
"text" : "Summarized with Gemini" ,
"languageCode" : "en-US"
}
}
},
{
"id" : "ChIJU4OzoWynlVQRxlQMpGenSvA" ,
"generativeSummary" : {
"overview" : {
"text" : "Beer hall with a big selection of German brews, plus a central courtyard with food trucks." ,
"languageCode" : "en-US"
},
"disclosureText" : {
"text" : "Summarized with Gemini" ,
"languageCode" : "en-US"
}
}
},
/.../
]
}
Attributions
All AI-powered summaries displayed in your app must be accompanied by the
appropriate attribution in accordance with Google's policies and standards. For
more information, see Policies for Places
API .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
