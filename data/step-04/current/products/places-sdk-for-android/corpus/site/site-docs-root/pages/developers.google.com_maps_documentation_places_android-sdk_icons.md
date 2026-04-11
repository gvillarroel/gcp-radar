---
title: "Place Icons \_|\_ Places SDK for Android \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/android-sdk/icons
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/android-sdk
source_metadata:
  url: https://developers.google.com/maps/documentation/places/android-sdk/icons
  title: "Place Icons \_|\_ Places SDK for Android \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Google Maps Platform
Documentation
Android
Places SDK for Android
Guides
Send feedback
Place Icons
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Place icons, available in PNG format, represent various place types like restaurants and libraries, accessible through Current Place and Place Details requests.
You can retrieve the icon URL using Place.Field.ICON_MASK_URL and the background color using Place.Field.ICON_BACKGROUND_COLOR .
The icon URL is a base URL for a non-colored PNG that is overlaid on a background color representing the place's category, like #FF9E67 for food and drink.
Code examples are provided in Kotlin and Java to demonstrate fetching and displaying the icon and background color using an image loading library like Glide.
A comprehensive table showcases available place icons categorized by type, along with their corresponding background colors.
Select platform:
Android
iOS
JavaScript
Web Service
Place icons indicate the various types of places (for example coffee shops,
libraries, and museums). You can request URLs for icons in PNG format, as well
as the corresponding icon background color, with
Current Place ,
and Place Details (New)
requests.
To request an icon image and background color for a place, include the
following fields in your request:
Place.Field.ICON_MASK_URL
Place.Field.ICON_BACKGROUND_COLOR
The following examples demonstrate using the icon image and background color
from a Current Place or Place Details request:
Kotlin
// Set the image view's background color to match the place's icon background color
val bgColor = place . iconBackgroundColor ?: Color . TRANSPARENT
binding . placesIconResult . setBackgroundColor ( bgColor )
// Fetch the icon using Glide and set the result in the image view
Glide . with ( this )
. load ( place . iconMaskUrl )
. into ( binding . placesIconResult )
Java
// It's recommended to retrieve the icon_background_color and icon_mask_base_uri fields from a
// FetchPlaceRequest and pass them to the Place object.
// Set the image view's background color to match the place's icon background color
Integer iconBackgroundColor = place . getIconBackgroundColor ();
if ( iconBackgroundColor == null ) {
iconBackgroundColor = Color . TRANSPARENT ;
}
binding . placesIconResult . setBackgroundColor ( iconBackgroundColor );
// Fetch the icon using Glide and set the result in the image view
Glide . with ( this )
. load ( place . getIconMaskUrl ())
. into ( binding . placesIconResult );
This example uses the Glide
image loading library, but you can use the image loading library of your choice.
Icon URLs may change, so be sure to always use
Place.Field.ICON_MASK_URL to look up the URL for an icon.
Fields
Each Place icon contains these fields:
ICON_MASK_URL returns the base URL for a non-colored PNG icon.
ICON_BACKGROUND_COLOR returns the default color code for the
place's category.
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
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["Place icons, indicating different types of locations, can be accessed via URLs in PNG format along with their background colors. Requests for icons and colors require the `ICON_MASK_URL` and `ICON_BACKGROUND_COLOR` fields. The icon URL, obtained through `Place.Field.ICON_MASK_URL`, should be consistently referenced due to potential changes. `ICON_BACKGROUND_COLOR` returns the category's default color. The document then details various place categories and their associated icons and background colors. For example food and drink has the background color #FF9E67.\n"]]
