---
title: "Places API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/web-service/search-along-route
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/web-service/op-overview
source_metadata:
  url: https://developers.google.com/maps/documentation/places/web-service/search-along-route
  title: "Places API \_|\_ Google for Developers"
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
Stay organized with collections
Save and categorize content based on your preferences.
Search along route
To use Text Search (New) to search along a route, pass the precalculated route
from the Routes API in
the request as a polyline. The response contains places that match the search
criteria and are also located near the specified route.
To search along a route:
Use the Routes API to calculate a route that returns a route's encoded
polyline in the response.
Note: You can also encode your own polyline as described in Encoded
Polyline Algorithm Format .
Use the searchAlongRouteParameters.polyline.encodedPolyline parameter to
pass the route's encoded polyline to Text Search (New) to bias the search
results to the route. The response then contains places that match the
search criteria and are also located near the specified route.
The APIs Explorer lets you make live requests so that you can get familiar with
the API and the API options:
Try it!
By default, Text Search (New) performs the search along the entire route from
the origin to the destination as defined by the polyline. In the following
example, the polyline defines the route from:
Origin : 1600 Amphitheatre Parkway, Mountain View, CA
Destination : 24 Willie Mays Plaza, San Francisco, CA
The trip's encoded polyline for this route is represented by the string:
wblcFptchVIFOd@G@EVw@Ms@dHKR}ApNA`AF~@Hf@TjAb@bBb@~@n@p@^Rd@~@Vz@HVz@nDLt@?d@Kr@c@~@mD`G?`@aEfGkCnDuChDm`@bb@[`@{GhHeEdEciBnnBkC`DkC~DaClEuKjT_Z|l@Qb@iR~_@}EzJ_AdB_Und@kAfCaOjZkg@vcAqBzD_]rr@iBlEaBxEgArD}AlG}AhHsA`IeAnH{@dIq@dJgL~iBq@rHu@vGgAtHwArHaBhHkBzG_DpJ}Nbc@iBhGkA|EgC|LcIjb@oAhG_AvDgAdDkApC_BzCiBpCsFvGii@vn@scAxlAmLjNgSzUeRjT{TzWqExEmG|FuNlMmMhLaRvPqOlNmbAl}@mFlF{PlOmJfIoElE}LtMiSbU_H`I}}@jcAwl@vp@oAbBqA~BeAhCm@tBg@fCWrBQ~BI|DaB~rBO~D[bEa@`Dm@pDaAdE{@vC_BbEkB~Def@|z@sEzHKJeS~]}K`S{\\~l@cXpe@sBpDm@bAuCxDkBrBiC~BwCtByBnAcBx@}Bt@{Bn@gh@|LaOpDeFhAoDj@aE^kVrA_E^iEr@yD~@uBr@gMjF_EnAcCh@eFr@_DRsAD}@Jsu@xCWDqIV}BCeCOyDm@cBa@_DmA}JeE_CwAsBcBiBoBuAqBmOoX{CuEkB_CoDqDkVoUoD{CeE_DkEkC_FeCqB}@sDuAoDgAeCe@cCW}CK}BDaDTeOlBcuBrYaNlBq@Dyd@rGyFt@yBb@eBf@oCnAoBlAkIpGkAp@wBbAaCt@oFdAwKjBoGxA{FbByIjC_HfB_@KmNdDuC|@uFzBcH|C{@\\[?sBv@}@VaBVoA@y@EmAQcA[w@]aBkAeAkA}BuDUKs@uAqBsCwBcCgAiAiN_MyKsJsG{GkBaBiBuA{BwAwDkBcOaHiC_AiCg@}BQcCAcBHqBVkB`@qEjAu@LgCVgAHwG@sG?mABsH^eNr@mBXy@NqBt@uAt@aBlAkAlA}BtCyApBiAdB_BxB{A`B}@j@oAf@s@PeCVcIf@gAAkAQy@YiAo@_A{@_DgEgJqM_DeEaM}PoBiCzAsBw@kAdAGVk@f@q@z@C
Note: Search along route only supports an encoded polyline, which can be passed
as a string and includes compression with minimal lossiness. This is the Routes
API default output. For more information, see Request route
polylines .
The following example uses the route's encoded polyline to bias the search
results:
curl -X POST -d '{
"textQuery" : "Spicy Vegetarian Food",
"searchAlongRouteParameters": {
"polyline": {
"encodedPolyline": " ROUTE_POLYLINE "
}
}
}' \
-H 'Content-Type: application/json' -H 'X-Goog-Api-Key: API_KEY ' \
-H 'X-Goog-FieldMask: places.displayName,places.formattedAddress,places.priceLevel' \
'https://places.googleapis.com/v1/places:searchText'
The response contains the places that match the search criteria, biased to the
route:
{
"places" : [
{
"formattedAddress" : "60 Morris St, San Francisco, CA 94107, USA" ,
"priceLevel" : "PRICE_LEVEL_MODERATE" ,
"displayName" : {
"text" : "Umami Express" ,
"languageCode" : "en"
}
},
{
"formattedAddress" : "1130 4th St, San Francisco, CA 94158, USA" ,
"priceLevel" : "PRICE_LEVEL_MODERATE" ,
"displayName" : {
"text" : "House of Tadu Ethiopian Kitchen" ,
"languageCode" : "en"
}
},
{
"formattedAddress" : "1602 El Camino Real Ste A, Belmont, CA 94002, USA" ,
"priceLevel" : "PRICE_LEVEL_MODERATE" ,
"displayName" : {
"text" : "Eats Meets West Bowls" ,
"languageCode" : "en"
}
},
/.../
]
}
You don't have to bias the results to the entire route. For example, you might
already be halfway along the route before you perform the search. In this case,
you can specify an explicit routing origin to the search to override the origin
defined in the encoded polyline. In the following example, you specify the
latitude and longitude coordinates of San Mateo, CA, which is approximately
halfway along the route polyline:
curl -X POST -d '{
"textQuery" : "Spicy Vegetarian Food",
"searchAlongRouteParameters": {
"polyline": {
"encodedPolyline": " ROUTE_POLYLINE "
}
},
"routingParameters": {
"origin": {
"latitude": 37.56617,
"longitude": -122.30870
}
}
}' \
-H 'Content-Type: application/json' -H 'X-Goog-Api-Key: API_KEY ' \
-H 'X-Goog-FieldMask: places.displayName,places.formattedAddress,places.priceLevel' \
'https://places.googleapis.com/v1/places:searchText'
Note: Because search along route returns places with minimal detour times from
origin to destination, in cases where the route origin and destination are the
same or close to one another, search along route may not return any results.
Try it!
The APIs Explorer lets you make sample requests so
that you can get familiar with the API and the API options.
Select the API icon api
on the right side of the page.
Optionally edit the request parameters.
Select the Execute button. In the dialog, choose the account
that you want to use to make the request.
In the APIs Explorer panel, select the fullscreen icon
fullscreen to expand the APIs Explorer window.
Previous
arrow_back
Overview
Next
Calculate routing summary
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["To search along a route, use the Routes API to calculate a route and obtain its encoded polyline. Then, use the `searchAlongRouteParameters.polyline.encodedPolyline` parameter in the Text Search (New) request to specify this polyline. This biases the search results to places near the route. Optionally, you can define a `routingParameters.origin` to search from a specific point along the route instead of the polyline's origin. You can then experiment using APIs Explorer.\n"]]
