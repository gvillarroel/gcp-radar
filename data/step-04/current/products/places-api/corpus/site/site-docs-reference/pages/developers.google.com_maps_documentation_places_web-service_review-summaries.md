---
title: "AI-powered review summaries \_|\_ Places API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/web-service/review-summaries
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/web-service/release-notes
source_metadata:
  url: https://developers.google.com/maps/documentation/places/web-service/review-summaries
  title: "AI-powered review summaries \_|\_ Places API \_|\_ Google for Developers"
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
AI-powered review summaries
Stay organized with collections
Save and categorize content based on your preferences.
AI-powered review summaries are AI-generated summaries of places based solely on
user reviews. By synthesizing key elements of user reviews, such as place
attributes and reviewer sentiment, review summaries provide high-level insights
and help users make informed decisions.
For example, a review summary of the Ferry Building in San Francisco includes
information ranging from food and shopping to views and atmosphere:
"Visitors say this historical landmark offers a diverse selection of shops,
restaurants, and a farmers market, with many praising the views of the bay and
the city. They also highlight the vibrant atmosphere, convenient ferry access to
other destinations, and the opportunity to enjoy local businesses."
Review summaries are supported in
Place Details (New) ,
Text Search (New) ,
and
Nearby Search (New) .
Review summaries are supported for points of interest in the following languages
and regions:
Language
Region
English
Argentina, Bolivia, Brazil, Chile, Colombia, Costa Rica, Dominican
Republic, Ecuador, Guatemala, India, Japan, Mexico, Paraguay, Peru,
United Kingdom, United States, Uruguay, Venezuela
Japanese
Japan
Portuguese
Brazil
Spanish
Argentina, Bolivia, Chile, Colombia, Costa Rica, Dominican Republic,
Ecuador, Guatemala, Mexico, Paraguay, Peru, United States, Uruguay,
Venezuela
Note: Review summaries are not guaranteed for all places.
Try the AI-powered summaries demo open_in_new
Request a review summary
To request a review summary, include reviewSummary in the field mask of the
request:
Place Details (New): reviewSummary
Text Search (New) and Nearby Search (New):
places.reviewSummary
Attributions for a review summary must include a link to the place's reviews on
Google Maps. To retrieve that link, include
reviewSummary.reviewsUri
in the field mask of the request.
The response body includes three fields:
text : The AI-generated review summary.
flagContentUri :
Used to flag inappropriate content for removal by Google.
disclosureText : A localized text string with the disclosure text
"Summarized with Gemini" that must be incorporated in attributions.
Place Details (New) request
The following example requests a review summary for a dumpling restaurant in New
York:
curl -X GET https://places.googleapis.com/v1/places/ChIJD2l2k7ZL0YkRC80d-3MV1lM \
-H 'Content-Type: application/json' \
-H "X-Goog-Api-Key: API_KEY " \
-H "X-Goog-FieldMask: displayName, reviewSummary "
The response is in the form:
{
"displayName" : {
"text" : "Dumpling House" ,
"languageCode" : "en"
},
"reviewSummary" : {
"text" : {
"text" : "People say this restaurant serves delicious dumplings, noodles, and pork belly buns. They highlight the generous portions, reasonable prices, and quick service. They also like the friendly and accommodating staff." ,
"languageCode" : "en-US"
},
"flagContentUri" : "https://www.google.com/local/review/rap/report?postId=5%401:CAIQACodChtyc19oOnNwOUFtUVhIX1BoTEZjTFg0MmNXNEE%7CCAIQACorChtyc19oOnNwOUFtUVhIX1BoTEZjTFg0MmNXNEESDAikt7HDBhDopLLxAg&d=17924085&t=8" ,
"disclosureText" : {
"text" : "Summarized with Gemini" ,
"languageCode" : "en-US"
},
"reviewsUri" : "https://www.google.com/maps/place//data=!4m4!3m3!1s0x89d14bb69376690f:0x53d61573fb1dcd0b!9m1!1b1"
}
}
Text Search (New) request
The following example requests a review summary for a coffee shop in New York
City:
curl -X POST -d '{
"textQuery": "coffee shop",
"locationBias": {
"circle": {
"center": {
"latitude": 40.722630,
"longitude": -74.001397
}
}
},
}' \
-H 'Content-Type: application/json' -H "X-Goog-Api-Key: API_KEY " \
-H "X-Goog-FieldMask: places.id, places.reviewSummary " \
'https://places.googleapis.com/v1/places:searchText'
The response body is in the form:
{
"places" : [
{
"id" : "ChIJyfJXNphZwokRbo-oe0DjVT4" ,
"reviewSummary" : {
"text" : {
"text" : "People say this coffee shop serves up delicious oat milk lattes, cold brew, and pastries, such as almond croissants and cheese danish. They also highlight the friendly staff, cozy atmosphere, and outdoor seating." ,
"languageCode" : "en-US"
},
"flagContentUri" : "https://www.google.com/local/review/rap/report?postId=5%401:CAIQACodChtyc19oOkk1Z1UwZkp4cEJ3bnA3aGt5VGJLMFE%7CCAIQACorChtyc19oOkk1Z1UwZkp4cEJ3bnA3aGt5VGJLMFESDAj7p9_BBhCYsoeAAw&d=17924085&t=8" ,
"disclosureText" : {
"text" : "Summarized with Gemini" ,
"languageCode" : "en-US"
},
"reviewsUri" : "https://www.google.com/maps/place//data=!4m4!3m3!1s0x89c259983657f2c9:0x3e55e3407ba88f6e!9m1!1b1"
}
},
{
"id" : "ChIJHcFFXH9ZwokR_QKedPacLiQ" ,
"reviewSummary" : {
"text" : {
"text" : "People say this cafe offers delicious matcha, lattes, and freshly baked pastries, including the popular rose honey latte and blueberry lemon muffin. They highlight the spacious, chill, and cinema-inspired vibe, perfect for working or socializing, and the fast, friendly service. They also like the free WiFi, outlets, and clean restrooms." ,
"languageCode" : "en-US"
},
"flagContentUri" : "https://www.google.com/local/review/rap/report?postId=5%401:CAIQACodChtyc19oOl8yWTlXS0NDVTk1UEhiTFdBQzhlelE%7CCAIQACorChtyc19oOl8yWTlXS0NDVTk1UEhiTFdBQzhlelESDAikt7HDBhDopLLxAg&d=17924085&t=8" ,
"disclosureText" : {
"text" : "Summarized with Gemini" ,
"languageCode" : "en-US"
},
"reviewsUri" : "https://www.google.com/maps/place//data=!4m4!3m3!1s0x89c2597f5c45c11d:0x242e9cf6749e02fd!9m1!1b1"
}
},
...
]
}
Nearby Search (New) request
The following example requests hotels near downtown Seattle:
curl -X POST -d '{
"maxResultCount": 5,
"locationRestriction": {
"circle": {
"center": {
"latitude": 47.609937,
"longitude": -122.340714
},
"radius": 1000
}
},
"includedTypes": ["hotel"],
"excludedTypes": [],
"rankPreference":"POPULARITY"
}' \
-H 'Content-Type: application/json' -H "X-Goog-Api-Key: API_KEY " \
-H "X-Goog-FieldMask: places.id, places.reviewSummary " \
'https://places.googleapis.com/v1/places:searchNearby'
The response is in the form:
{
"places" : [
{
"id" : "ChIJRwVmS-BrkFQRpAB3pO5JOuQ" ,
"reviewSummary" : {
"text" : {
"text" : "People say this hotel offers clean, modern, and spacious rooms with comfortable beds and phenomenal city views. They highlight the convenient downtown location, with easy walking access to popular attractions, and the efficient self-parking option. They also like the friendly and helpful staff, and the smooth check-in and check-out process." ,
"languageCode" : "en-US"
},
"flagContentUri" : "https://www.google.com/local/review/rap/report?postId=5%401:CAIQACodChtyc19oOlJWVG5YOXZrSnZhTXBqUy1rc1JZc3c%7CCAIQACorChtyc19oOlJWVG5YOXZrSnZhTXBqUy1rc1JZc3cSDAikt7HDBhDopLLxAg&d=17924085&t=8" ,
"disclosureText" : {
"text" : "Summarized with Gemini" ,
"languageCode" : "en-US"
},
"reviewsUri" : "https://www.google.com/maps/place//data=!4m4!3m3!1s0x54906be04b660547:0xe43a49eea47700a4!9m1!1b1"
}
},
{
"id" : "ChIJQVJVX7RqkFQRcpsm3VVub9U" ,
"reviewSummary" : {
"text" : {
"text" : "People say this hotel offers spacious rooms, a convenient location near the convention center and Pike Place Market, and a tasty restaurant. They also highlight the friendly and attentive staff, the comfortable beds and pillows, and the convenient amenities such as a Starbucks in the lobby and a club lounge.\n\nSome reviews mention the rooms can be noisy." ,
"languageCode" : "en-US"
},
"flagContentUri" : "https://www.google.com/local/review/rap/report?postId=5%401:CAIQACodChtyc19oOldJVUlodGhTUTJOdUdTSmFxQWw2Nnc%7CCAIQACorChtyc19oOldJVUlodGhTUTJOdUdTSmFxQWw2NncSDAikt7HDBhDopLLxAg&d=17924085&t=8" ,
"disclosureText" : {
"text" : "Summarized with Gemini" ,
"languageCode" : "en-US"
},
"reviewsUri" : "https://www.google.com/maps/place//data=!4m4!3m3!1s0x54906ab45f555241:0xd56f6e55dd269b72!9m1!1b1"
}
},
...
]
}
Attributions
All AI-powered summaries displayed in your app must be accompanied by the
appropriate attribution in accordance with Google's policies and standards. For
more information, see Policies for Places
API .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
