---
title: "Place Icons \_|\_ Places SDK for iOS \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/ios-sdk/icons
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/ios-sdk/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/places/ios-sdk/icons
  title: "Place Icons \_|\_ Places SDK for iOS \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Google Maps Platform
Documentation
iOS
Places SDK for iOS
Send feedback
Place Icons
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Place icons, representing various place types like restaurants and libraries, can be accessed through Place Details and Current Place requests.
You can retrieve icon URLs in PNG format and their background colors using GMSPlaceFieldIconImageURL and GMSPlaceFieldIconBackgroundColor .
iconImageUrl provides the base URL for the icon and iconBackgroundColor returns the color code associated with the place's category.
Icon URLs are subject to change, therefore ensure using iconImageUrl for icon retrieval.
Place icons are categorized and displayed with a black glyph by default, with background colors varying by category (e.g., Food and drink with #FF9E67).
Select platform:
Android
iOS
JavaScript
Web Service
Place icons indicate the various types of places (for example coffee shops,
libraries, and museums). You can request URLs for icons in PNG format, as well
as the corresponding icon background color, with
Current Place ,
and Place Details
requests.
To request an icon image and background color for a place, include the
following fields in your request:
GMSPlaceFieldIconImageURL
GMSPlaceFieldIconBackgroundColor
The following examples demonstrate using the icon image and background color
from a Current Place or Place Details request:
Places Swift SDK for iOS
// Initialize Places Swift client
let placesClient = PlacesClient . shared
// A hotel in Saigon with an attribution.
let placeID = "ChIJV4k8_9UodTERU5KXbkYpSYs"
// Specify the place data types to return.
let fetchPlaceRequest = FetchPlaceRequest (
placeID : placeID ,
placeProperties : [. displayName , . iconMaskURL , . iconBackgroundColor ]
)
Task {
switch await placesClient . fetchPlace ( with : fetchPlaceRequest ) {
case . success ( let place ):
// Print displayName using String(describing:)
print ( "The selected place is: \( String ( describing : place . displayName )) " )
// We primarily need the iconMaskURL to proceed with image loading.
// iconBackgroundColor can be handled even if nil.
guard let iconMaskURL = place . iconMaskURL else {
print ( "Icon mask URL not available for this place. Cannot display icon." )
return // Exit if iconMaskURL is missing
}
print ( "The icon mask URL is: \( iconMaskURL ) " )
// Print iconBackgroundColor using String(describing:)
print ( "The icon background color is: \( String ( describing : place . iconBackgroundColor )) " )
// Asynchronously load the icon image
DispatchQueue . global (). async {
// The iconMaskURL from the new Places SDK is already a URL
guard let imageData = try ? Data ( contentsOf : iconMaskURL ) else {
print ( "Could not download image data from URL: \( iconMaskURL ) " )
return
}
DispatchQueue . main . async {
guard let iconImage = UIImage ( data : imageData ) else {
print ( "Could not create UIImage from downloaded data." )
return
}
// --- Example of how you might use the icon and background color ---
// Ensure you have an imageView outlet connected in your UI
// For example:
// @IBOutlet weak var myImageViewContainer: UIView!
// @IBOutlet weak var myIconImageView: UIImageView!
// For this example, we'll create them programmatically:
let iconBackgroundView = UIView ( frame : CGRect ( x : 0 , y : 0 , width : 50 , height : 50 )) // Adjust frame as needed
// Directly assign the optional UIColor. If nil, background will be clear.
iconBackgroundView . backgroundColor = place . iconBackgroundColor
let imageView = UIImageView () // Initialize an empty UIImageView
imageView . frame = iconBackgroundView . bounds // Make icon view same size as background
imageView . contentMode = . scaleAspectFit // Adjust content mode as needed
// Tint the icon image (mask) to white
// The icon from iconMaskURL is intended to be used as a mask.
let templateImage = iconImage . withRenderingMode (. alwaysTemplate )
imageView . image = templateImage
imageView . tintColor = UIColor . white
// Add the image view on top of the background view
iconBackgroundView . addSubview ( imageView )
}
}
}
}
Swift
// Icon image URL
let url = URL ( string : place . iconImageUrl )
DispatchQueue . global (). async {
guard let url = url ,
let imageData = try ? Data ( contentsOf : url ) else {
print ( "Could not get image" )
return
}
DispatchQueue . main . async {
let iconImage = UIImage ( data : iconImageData )
// Icon image background color
let iconBackgroundView = UIView ( frame : . zero )
iconBackgroundView . backgroundColor = place . iconBackgroundColor
// Change icon image color to white
let templateImage = iconImage . imageWithRenderingMode ( UIImageRenderingModeAlwaysTemplate )
imageView . image = templateImage
imageView . tintColor = UIColor . white
}
}
Objective-C
GMSPlace * place ;
dispatch_async ( dispatch_get_global_queue ( 0 , 0 ), ^ {
// Icon image URL
NSData * iconImageData = [[ NSData alloc ] initWithContentsOfURL : [ NSURL URLWithString : place . iconImageUrl ]];
if ( ! iconImageData )
return ;
dispatch_async ( dispatch_get_main_queue (), ^ {
UIImage * iconImage = [ UIImage imageWithData : iconImageData ];
// Icon image background color
UIView * iconBackgroundView = [[ UIView alloc ] initWithFrame : CGRectZero ];
[ iconBackgroundView setBackgroundColor : place . iconBackgroundColor ];
// Change icon image color to white
iconImage = [ iconImage imageWithRenderingMode : UIImageRenderingModeAlwaysTemplate ];
[ imageView setTintColor : [ UIColor whiteColor ]];
});
});
Icon URLs may change, so be sure to always use
iconImageUrl to look up the URL for an icon.
Fields
Each Place icon contains these fields:
iconImageUrl returns the base URL for a non-colored PNG icon.
iconBackgroundColor returns the default UIExtendedSRGBColorSpace
color code for the place's category.
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
