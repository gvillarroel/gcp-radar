---
title: "Place Icons \_|\_ Places API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/web-service/icons
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/web-service/op-overview
source_metadata:
  url: https://developers.google.com/maps/documentation/places/web-service/icons
  title: "Place Icons \_|\_ Places API \_|\_ Google for Developers"
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
Place Icons
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Place icons, available in PNG or SVG formats, visually represent various place types like restaurants and libraries, and can be requested using Find Place, Place Details, Nearby Search, and Text Search requests.
Each icon is identified by an icon base URI (requiring .svg or .png appended for the full URL) and an icon background color, represented by a HEX color code.
While the older Places API uses icon , icon_mask_base_uri , and icon_background_color fields, the new Places API uses iconMaskBaseUri and iconBackgroundColor .
To display an icon, combine the icon base URI with the desired file type extension and apply the icon background color as the background of the image element.
Place icons are categorized, such as Food and drink or Tourist, with each category having a specific background color.
Select platform:
Android
iOS
JavaScript
Web Service
European Economic Area (EEA) developers
If your billing address is in the European Economic Area, effective on 8 July 2025, the
Google Maps Platform EEA Terms of Service
will apply to your use of the Services. Functionality varies by region.
Learn more .
Introduction
Place icons indicate the various types of places (for example coffee shops,
libraries, and museums). You can request URLs for icons in PNG or SVG format,
as well as the corresponding icon background color, with Find Place,
Place Details, Nearby Search, and Text Search requests. Icons can be used inline.
Each icon is defined by two response fields:
The icon base URI contains the base URL for a non-colored
icon, minus the file type extension. You must append .svg or
.png to the URI to request the icon.
The icon background color contains the default HEX color code for
the place's category.
Icon URLs may change, so be sure to always use
icon base URI to look up the URL for an icon. Places API (Legacy) supports the
icon response field. Don't use
icon field but instead use icon_background_color and
icon_mask_base_uri with Places API (Legacy).
Example
The following examples show how to request an icon URI and background color for
Places API (New) and Places API (Legacy). Notice that the request and responses are different
for the two versions of the API.
Places API (New)
The following example uses
Text Search (New)
to return the display name of a place as well as the iconMaskBaseUri and
iconBackgroundColor response fields:
curl -X POST -d '{
"textQuery" : "skog haus",
"maxResultCount" : 1
}' \
-H 'Content-Type: application/json' -H 'X-Goog-Api-Key: API_KEY ' \
-H 'X-Goog-FieldMask: places.displayName,places.iconMaskBaseUri,places.iconBackgroundColor ' \
'https://places.googleapis.com/v1/places:searchText'
The response is in the form:
{
"places" : [
{
"iconMaskBaseUri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/cafe_pinlet" ,
"iconBackgroundColor" : "#FF9E67" ,
"displayName" : {
"text" : "SKÖG Haus Coffee & Tea" ,
"languageCode" : "en"
}
}
]
}
Places API (Legacy)
The following example shows a
Find Place (Legacy) request
which includes the icon_mask_base_uri and icon_background_color
fields:
https : //maps.googleapis.com/maps/api/place/findplacefromtext/json?input=skog%20haus&inputtype=textquery&fields=name,icon_mask_base_uri,icon_background_color&key= API_KEY
The following example shows how the icon_mask_base_uri and
icon_background_color fields appear in a response from a Find Place (Legacy)
request.
JSON
{
"candidates" : [
{
"icon_background_color" : "#FF9E67" ,
"icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/cafe_pinlet" ,
"name" : "SKÖG Haus Coffee" ,
}
],
"status" : "OK"
}
XML
<FindPlaceFromTextResponse>
<candidates>
<name>SKÖG Haus Coffee</name>
<icon_background_color>#FF9E67</icon_background_color>
<icon_mask_base_uri>https://maps.gstatic.com/mapfiles/place_api/icons/v2/cafe_pinlet</icon_mask_base_uri>
</candidates>
<status>OK</status>
</FindPlaceFromTextResponse>
To display an icon, append the file type extension (.png or .svg) you want to the returned icon
URI, and combine the icon with the returned background color. For example, to display the .svg icon
on a web page:
<style>
.icons-food-drink {
background-color: #ff9e67;
width: 88px;
height: 88px;
padding: 5px;
}
</style>
<img src="https://maps.gstatic.com/mapfiles/place_api/icons/v2/cafe_pinlet.svg" alt="Cafe" class="icons-food-drink"/>
Place icon and background color requests
The following tables show all of the available place icons by category. By
default these display with a black glyph. The icon background color
is dictated by the place's category.
Place category: Food and drink (icon background color #FF9E67)
Bar, Night club
Cafe
Restaurant, Bakery
Place category: Retail (icon background color #4B96F3)
Books, Clothing, Electronics, Jewelry, Shoes, Shopping center/Mall
Convenience store
Grocery, Supermarket
Pharmacy
Place category: Services (icon background color #909CE1)
ATM
Bank
Gas
Lodging
Post office
Place category: Entertainment (icon background color #13B5C7)
Aquarium, Tourist
Golf
Historic
Movie
Museum
Theater
Place category: Transportation (icon background color #10BDFF)
Airport
Bus, rideshare, taxi
Train/Rail
Place category: Municipal/generic/religious (icon background color #7B9EB0)
Cemetery
Civic building
Library
Monument
Parking
School (primary, secondary, university)
Worship (Christian)
Worship (Hindu)
Worship (Islam)
Worship (Jain)
Worship (Jewish)
Worship (Sikh)
Generic business
Place category: Outdoor (icon background color #4DB546)
Boating
Camping
Park
Stadium
Zoo
Place category: Emergency (icon background color #F88181)
Hospital
Police
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
