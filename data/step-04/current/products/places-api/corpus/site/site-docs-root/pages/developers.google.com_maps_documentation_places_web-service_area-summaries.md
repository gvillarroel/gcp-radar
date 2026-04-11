---
title: "AI-powered area summaries \_|\_ Places API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/web-service/area-summaries
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/web-service/op-overview
source_metadata:
  url: https://developers.google.com/maps/documentation/places/web-service/area-summaries
  title: "AI-powered area summaries \_|\_ Places API \_|\_ Google for Developers"
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
AI-powered area summaries
Stay organized with collections
Save and categorize content based on your preferences.
AI-powered area summaries are generated for the area surrounding a place. Area
summaries provide additional context for a location, including points of
interest nearby, so that users can make a more informed decision about where to
go and what to do once they get there.
For example, when visiting a new city, you can view a generated neighborhood
summary for a hotel to learn more about the surrounding area:
"This vibrant area in San Francisco, blending North Beach and Chinatown,
sits northwest of the Financial District and features literary landmarks,
unique cultural attractions, and diverse dining. Notable spots include the
iconic City Lights Bookstore, the fascinating Cable Car Museum, and the
bustling streets of Chinatown.
The area offers a unique blend of history and culture, where a
pedestrian-friendly environment invites exploration despite some hills and
crowds. Immerse yourself in the literary history at City Lights Bookstore,
experience the vibrant culture of Chinatown with its temples and fortune
cookie factories, or step back in time at the Cable Car Museum. A variety of
dining options await, from authentic Chinese cuisine to delicious pizza."
If you are considering charging an electric vehicle, you can view a generated
summary for an electric vehicle charging station to find nearby coffee shops or
restaurants to visit while you wait:
"This area offers a range of dining options within a 9-minute walk,
including Starbucks, Sushi Jin, and Safeway."
Along with a description of the area, the response also contains a list of place
IDs for the places referenced in the description.
Places API (New) provides two types of AI-powered area summaries:
Neighborhood summaries , which provide high-level overviews of nearby
attractions for places with types premise , street_address , and all types
in the
Housing
and
Lodging
categories.
Electric vehicle charging station (EVCS) amenity summaries , which
provide high-level overviews of nearby attractions for places with type
electric_vehicle_charging_station .
AI-powered area summaries are supported in
Place Details (New) ,
Text Search (New) ,
and
Nearby Search (New) .
Area summaries are supported for points of interest in the following languages and regions:
Language
Region
English
United States
Note: Area summaries are not guaranteed for all places.
Try the AI-powered summaries demo open_in_new
Request a neighborhood summary
Neighborhood summaries can be generated for places with types premise ,
street_address , and all types in the
Housing and
Lodging
categories. To return a neighborhood summary in the response, include the
following in the field mask of your request:
Place Details (New): neighborhoodSummary
Text Search (New) and Nearby Search (New):
places.neighborhoodSummary
The neighborhoodSummary field for a place in the response contains the
following:
Two subfields: overview and description . The overview subfield
includes nearby points of interest specific to the place, while the
description subfield provides more general information about the
surrounding area. Each subfield includes a list of referenced place resource
names in the form place/PLACE_ID .
A flagContentUri
link where users can flag a problem with the generated summary.
A localized text string with the disclosure text "Summarized with Gemini"
that must be incorporated in the attributions.
The following example requests a neighborhood summary for a hotel in New York
City:
curl -X GET -H 'Content-Type: application/json' \
-H "X-Goog-Api-Key: API_KEY " \
-H "X-Goog-FieldMask: id,displayName, neighborhoodSummary " \
'https://places.googleapis.com/v1/places/ChIJT0DdRo1ZwokRkufwSD-TdGM'
The response is in the form:
{
"id" : "ChIJT0DdRo1ZwokRkufwSD-TdGM" ,
"displayName" : {
"text" : "Courtyard New York Manhattan/SoHo" ,
"languageCode" : "en"
}
"neighborhoodSummary" : {
"overview" : {
"content" : {
"text" : "This area resides within SoHo, a trendy Lower Manhattan neighborhood celebrated for its upscale boutiques, designer shops, and thriving art scene. The area is home to the Color Factory and Dominique Ansel Bakery, known for its popular Cronuts." ,
"languageCode" : "en-US"
},
"referencedPlaces" : [
"places/ChIJZd0F3oxZwokRiaEouMZKQ-0" ,
/.../
]
},
"description" : {
"content" : {
"text" : "SoHo's walkability and convenient public transportation options make exploration easy. A diverse array of restaurants and cafes cater to varied tastes. SoHo's central location, surrounded by vibrant neighborhoods, contributes to its fast-paced and energetic atmosphere, with a focus on fashion and design." ,
"languageCode" : "en-US"
},
"referencedPlaces" : [
"places/ChIJZd0F3oxZwokRiaEouMZKQ-0" ,
/.../
]
},
"flagContentUri" : "https://www.google.com/local/review/rap/report?postId=&d=17924085&t=12" ,
"disclosureText" : {
"text" : "Summarized with Gemini" ,
"languageCode" : "en-US"
}
}
}
Request an EVCS amenity summary
Electric vehicle charging station (EVCS) amenity summaries can be generated for
places with type electric_vehicle_charging_station . To include the EVCS
amenity summary in the response, include the following in the field mask of your
request:
Place Details (New): evChargeAmenitySummary
Text Search (New) and Nearby Search (New):
places.evChargeAmenitySummary
The evChargeAmenitySummary field for a place in the response contains the
following:
Four subfields: overview , coffee , restaurant , and store . Each
subfield includes a brief description of nearby points of interest and a
list of referenced place resource names in the form place/PLACE_ID .
A flagContentUri link where users can flag a problem with the generated
summary.
A localized text string with the disclosure text "Summarized with Gemini"
that must be incorporated in attributions.
The following example requests an EV charging station amenity summary for a
charging station in Mountain View:
curl -X GET -H 'Content-Type: application/json' \
-H "X-Goog-Api-Key: API_KEY " \
-H "X-Goog-FieldMask: id,displayName, evChargeAmenitySummary " \
'https://places.googleapis.com/v1/places/ChIJtwHgNNa2j4ARlC8vbI9lLZA'
The response is in the form:
{
"id" : "ChIJf8j-4z23j4AR_MQ2-bgMmrY" ,
"displayName" : {
"text" : "EVgo Charging Station" ,
"languageCode" : "en"
},
"evChargeAmenitySummary" : {
"overview" : {
"content" : {
"text" : "Within a short walk, there are several coffee and restaurant options, including Clocktower Coffee Roasting Company, Khao Kang Thai Kitchen, and Roger's Deli & Donuts." ,
"languageCode" : "en-US"
},
"referencedPlaces" : [
"places/ChIJZZR2-j23j4ARi5CXEIAc57Q" ,
/.../
]
},
"coffee" : {
"content" : {
"text" : "Clocktower Coffee Roasting Company has Wi-Fi and a variety of coffee and pastries in a laid-back atmosphere." ,
"languageCode" : "en-US"
},
"referencedPlaces" : [
"places/ChIJZZR2-j23j4ARi5CXEIAc57Q"
]
},
"restaurant" : {
"content" : {
"text" : "Roger's Deli & Donuts is a bustling deli with sandwiches and breakfast items.\nJoy Sushi serves classic Japanese dishes, including vegetarian and healthy options.\nSubway is a chain sandwich shop offering its usual subs, wraps, and salads." ,
"languageCode" : "en-US"
},
"referencedPlaces" : [
"places/ChIJQ4F3PBa3j4ARf7_QjN1Cklo" ,
/.../
]
},
"store" : {
"content" : {
"text" : "Rotten Robbie is a chain gas station with a convenience store and a restroom." ,
"languageCode" : "en-US"
},
"referencedPlaces" : [
"places/ChIJA6deFBa3j4AREY0EyTEGhN8" ,
/.../
]
},
"flagContentUri" : "https://www.google.com/local/review/rap/report?postId=ABCDEFG=1234567&t=12" ,
"disclosureText" : {
"text" : "Summarized with Gemini" ,
"languageCode" : "en-US"
}
}
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
