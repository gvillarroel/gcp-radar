---
title: "Get Started with the Geocoding API v4 \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/geocoding/start-v4
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/geocoding
source_metadata:
  url: https://developers.google.com/maps/documentation/geocoding/start-v4
  title: "Get Started with the Geocoding API v4 \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Geocoding API v4 methods have a default quota of 25 queries per second (QPS). For information on requesting a higher quota, see View and manage quotas and select Geocoding API as the service.
Home
Products
Google Maps Platform
Documentation
Web Services
Geocoding API
Send feedback
Get Started with the Geocoding API v4
Stay organized with collections
Save and categorize content based on your preferences.
European Economic Area (EEA) developers
If your billing address is in the European Economic Area, effective on 8 July 2025, the
Google Maps Platform EEA Terms of Service
will apply to your use of the Services. Functionality varies by region.
Learn more .
Before you begin:
Before you start using the Geocoding API, you need a project with a billing account and the
Geocoding API
enabled. We recommend creating multiple Project Owners and Billing Administrators, so that
you'll always have someone with these roles available to your team. To learn more, see
Set up in Cloud console .
The Geocoding API v4 is a service that provides geocoding, reverse geocoding
of addresses and Place IDs, and destination information.
Geocoding is the process of converting addresses (like a street address)
into geographic coordinates (like latitude and longitude), which you can use to place markers
on a map, or position the map.
Reverse geocoding is the process of converting geographic coordinates
into a human-readable address.
You can also use the Geocoding API to find the address for a
given place ID and to retrieve detailed information about various destinations using the SearchDestinations method.
Sample request and response
You access the Geocoding API through an HTTP interface. Following
are examples of geocoding and reverse geocoding requests.
Geocoding request and response (latitude/longitude lookup)
The following example requests the latitude and longitude of "1600 Amphitheatre
Parkway, Mountain View, CA", and specifies that the output must be in JSON format.
curl - H "X-Goog-Api-Key: YOUR_API_KEY " \
"https://geocode.googleapis.com/v4/geocode/address/1600+Amphitheatre+Parkway,+Mountain+View,+CA"
You can test this by entering the URL into your web browser (be sure to replace
YOUR_API_KEY with your actual API key ).
The response includes the latitude and longitude of the address.
View the developer's guide
for more information about
building geocoding request URLs ,
available parameters
and
understanding the response .
Below is a sample geocoding response, in JSON:
{
"results" : [
{
"place" : "//places.googleapis.com/places/ChIJ2Z2idB66j4ARI43TG-9RoCQ" ,
"placeId" : "ChIJ2Z2idB66j4ARI43TG-9RoCQ" ,
"location" : {
"latitude" : 37.4438238 ,
"longitude" : - 122.0869895
},
"granularity" : "ROOFTOP" ,
"viewport" : {
"low" : {
"latitude" : 37.4424748197085 ,
"longitude" : - 122.0883384802915
},
"high" : {
"latitude" : 37.445172780291493 ,
"longitude" : - 122.08564051970852
}
},
"formattedAddress" : "1600 Amphitheatre Pkwy, Mountain View, CA 94043, USA" ,
"postalAddress" : {
"regionCode" : "US" ,
"languageCode" : "en" ,
"postalCode" : "94043-1351" ,
"administrativeArea" : "CA" ,
"locality" : "Mountain View" ,
"addressLines" : [
"1600 Amphitheatre Pkwy"
]
},
"addressComponents" : [
{
"longText" : "1600" ,
"shortText" : "1600" ,
"types" : [
"street_number"
]
},
{
"longText" : "Amphitheatre Parkway" ,
"shortText" : "Amphitheatre Pkwy" ,
"types" : [
"route"
],
"languageCode" : "en"
},
{
"longText" : "Mountain View" ,
"shortText" : "Mountain View" ,
"types" : [
"locality" ,
"political"
],
"languageCode" : "en"
},
{
"longText" : "Santa Clara County" ,
"shortText" : "Santa Clara County" ,
"types" : [
"administrative_area_level_2" ,
"political"
],
"languageCode" : "en"
},
{
"longText" : "California" ,
"shortText" : "CA" ,
"types" : [
"administrative_area_level_1" ,
"political"
],
"languageCode" : "en"
},
{
"longText" : "United States" ,
"shortText" : "US" ,
"types" : [
"country" ,
"political"
],
"languageCode" : "en"
},
{
"longText" : "94043" ,
"shortText" : "94043" ,
"types" : [
"postal_code"
]
},
{
"longText" : "1351" ,
"shortText" : "1351" ,
"types" : [
"postal_code_suffix"
]
}
],
"types" : [
"premise" ,
"street_address"
]
}
]
}
Reverse geocoding request and response (address lookup)
The following example requests the address corresponding to a given latitude/longitude
in Brooklyn, NY, USA. It specifies that the output must be in JSON format.
https://geocode.googleapis.com/v4/geocode/location/37.4225508,-122.0846338?key= YOUR_API_KEY
You can test this by entering the URL into your web browser (be sure to replace
'YOUR_API_KEY' with your actual API key ).
The response includes a human-readable address for the latitude and longitude
location.
View the developer's guide
for more information about
building reverse geocoding request URLs , available parameters ,
and
understanding the response .
Below is a sample reverse geocoding response, in JSON:
{
"results" : [
{
"place" : "//places.googleapis.com/places/ChIJHRNUiQK6j4ARJ__Hrbt6qsE" ,
"placeId" : "ChIJHRNUiQK6j4ARJ__Hrbt6qsE" ,
"location" : {
"latitude" : 37.4225657 ,
"longitude" : - 122.08465439999999
},
"granularity" : "ROOFTOP" ,
"viewport" : {
"low" : {
"latitude" : 37.421214719708509 ,
"longitude" : - 122.08603273029148
},
"high" : {
"latitude" : 37.423912680291508 ,
"longitude" : - 122.0833347697085
}
},
"bounds" : {
"low" : {
"latitude" : 37.4225178 ,
"longitude" : - 122.08484599999998
},
"high" : {
"latitude" : 37.422609600000008 ,
"longitude" : - 122.0845215
}
},
"formattedAddress" : "Google Building 40, 1600 Amphitheatre Pkwy, Mountain View, CA 94043, USA" ,
"postalAddress" : {
"regionCode" : "US" ,
"languageCode" : "en" ,
"postalCode" : "94043" ,
"administrativeArea" : "CA" ,
"locality" : "Mountain View" ,
"addressLines" : [
"Google Building 40" ,
"1600 Amphitheatre Pkwy"
]
},
"addressComponents" : [
{
"longText" : "Google Building 40" ,
"shortText" : "Google Building 40" ,
"types" : [
"premise"
],
"languageCode" : "en"
},
{
"longText" : "1600" ,
"shortText" : "1600" ,
"types" : [
"street_number"
]
},
{
"longText" : "Amphitheatre Parkway" ,
"shortText" : "Amphitheatre Pkwy" ,
"types" : [
"route"
],
"languageCode" : "en"
},
{
"longText" : "Mountain View" ,
"shortText" : "Mountain View" ,
"types" : [
"locality" ,
"political"
],
"languageCode" : "en"
},
{
"longText" : "Santa Clara County" ,
"shortText" : "Santa Clara County" ,
"types" : [
"administrative_area_level_2" ,
"political"
],
"languageCode" : "en"
},
{
"longText" : "California" ,
"shortText" : "CA" ,
"types" : [
"administrative_area_level_1" ,
"political"
],
"languageCode" : "en"
},
{
"longText" : "United States" ,
"shortText" : "US" ,
"types" : [
"country" ,
"political"
],
"languageCode" : "en"
},
{
"longText" : "94043" ,
"shortText" : "94043" ,
"types" : [
"postal_code"
]
}
],
"types" : [
"street_address" ,
"subpremise"
]
},
... Additional results truncated in this example [] ...
}
Authentication, quotas, pricing, and policies
Authentication
To use the Geocoding API, you must first enable the API
and obtain the proper authentication credentials. For more information, see
Get Started with Google Maps Platform .
Quotas and pricing
Review the usage and billing
page for details on the quotas and pricing set for the Geocoding API.
Note: During Preview, Geocoding API v4 methods are
limited to 25 queries per second (QPS). For information on requesting a higher
quota, see
View and manage quotas and select Geocoding API as the service.
Warning: Due to security risks, you shouldn't call Geocoding API v4
methods directly from client-side JavaScript. If you are doing so against
recommendations, be aware that requesting higher quotas increases the potential
impact of API key abuse. See Security considerations .
Policies
Use of the Geocoding API must be in accordance with the
API policies .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
