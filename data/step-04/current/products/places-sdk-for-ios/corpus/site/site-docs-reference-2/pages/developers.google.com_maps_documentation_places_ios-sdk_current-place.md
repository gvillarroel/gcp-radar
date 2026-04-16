---
title: "Current Place \_|\_ Places SDK for iOS \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/ios-sdk/current-place
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/ios-sdk/release-notes
source_metadata:
  url: https://developers.google.com/maps/documentation/places/ios-sdk/current-place
  title: "Current Place \_|\_ Places SDK for iOS \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

This product or feature is in Legacy status. For more information about the Legacy status see Legacy products and features . To migrate to the Places API for iOS(New), see the Migration guide .
Home
Products
Google Maps Platform
Documentation
iOS
Places SDK for iOS
Legacy
Send feedback
Current Place
Stay organized with collections
Save and categorize content based on your preferences.
Using the Places SDK for iOS, you can discover the place where the
device is currently located. That is, the place at the device's
currently-reported location. Examples of places include local businesses,
points of interest, and geographic locations.
Request location authorization
Usage limits
Get the current location
Display attributions in your app
Requesting location authorization
If your app uses
GMSPlacesClient findPlaceLikelihoodsFromCurrentLocationWithPlaceFields: ,
your app must request permission to use location services. Add the
NSLocationWhenInUseUsageDescription key to your Info.plist
file, to define the string informing the user why you need the location
services. For example:
<key>NSLocationWhenInUseUsageDescription</key>
<string>Show your location on the map</string>
If you want to call
findPlaceLikelihoodsFromCurrentLocationWithPlaceFields: when
the app is in the background, without triggering a confirmation dialog, take
the following steps prior to making the call:
Add the NSLocationAlwaysUsageDescription key to your Info.plist file.
Call requestAlwaysAuthorization on any instance of CLLocationManager
before calling the method.
Request authorization from CLLocationManager as follows:
Swift
locationManager . requestAlwaysAuthorization ()
Objective-C
[ self . locationManager requestAlwaysAuthorization ];
Getting the current location
Note: iOS 14 introduced a new privacy feature where users can
choose to share their approximate, rather than precise, location. Check your app's value of
accuracyAuthorization
in CLLocationManager so your app behaves appropriately.
See this video for more information.
To find the local business or other place where the device is currently
located, call
GMSPlacesClient
findPlaceLikelihoodsFromCurrentLocationWithPlaceFields: . Include
the following parameters:
One or more GMSPlaceField s, specifying which data types
to return. If you omit this parameter, ALL possible fields will be returned, and
you will be billed accordingly. This applies only to Place Details requests.
A callback method to handle the results.
IMPORTANT!
findPlaceLikelihoodsFromCurrentLocationWithPlaceFields:
does not support the following fields: GMSPlaceFieldAddressComponents ,
GMSPlaceFieldOpeningHours , GMSPlaceFieldPhoneNumber ,
and GMSPlaceFieldWebsite . Read more about
place data fields
Fields correspond to Place Search results, and are divided into three billing categories:
Basic, Contact, and Atmosphere. Basic fields are billed at base rate, and incur no additional
charges. Contact and Atmosphere fields are billed at a higher rate. For more information
about how Place data requests are billed, see
Usage and Billing .
The API invokes the specified callback method, returning an array of
GMSPlaceLikelihood
objects.
Each
GMSPlaceLikelihood
object represents a place. For each place, the result includes an
indication of the likelihood that the place is the right one. A higher value
means a greater probability that the place is the best match. The buffer may
be empty, if there is no known place corresponding to the device location.
The following code sample retrieves the list of places where the device is
most likely to be located, and logs the name and likelihood for each place.
Swift
// Specify the place data types to return.
let fields : GMSPlaceField = GMSPlaceField ( rawValue : UInt ( GMSPlaceField . name . rawValue ) |
UInt ( GMSPlaceField . placeID . rawValue )) !
placesClient ?. findPlaceLikelihoodsFromCurrentLocation ( withPlaceFields : fields , callback : {
( placeLikelihoodList : Array<GMSPlaceLikelihood> ?, error : Error ?) in
if let error = error {
print ( "An error occurred: \( error . localizedDescription ) " )
return
}
if let placeLikelihoodList = placeLikelihoodList {
for likelihood in placeLikelihoodList {
let place = likelihood . place
print ( "Current Place name \( String ( describing : place . name )) at likelihood \( likelihood . likelihood ) " )
print ( "Current PlaceID \( String ( describing : place . placeID )) " )
}
}
})
Objective-C
// Specify the place data types to return.
GMSPlaceField fields = ( GMSPlaceFieldName | GMSPlaceFieldPlaceID );
[ _placesClient findPlaceLikelihoodsFromCurrentLocationWithPlaceFields : fields callback :^ ( NSArray<GMSPlaceLikelihood * > * _Nullable likelihoods , NSError * _Nullable error ) {
if ( error != nil ) {
NSLog ( @"An error occurred %@" , [ error localizedDescription ]);
return ;
}
if ( likelihoods != nil ) {
for ( GMSPlaceLikelihood * likelihood in likelihoods ) {
GMSPlace * place = likelihood . place ;
NSLog ( @"Current place name: %@" , place . name );
NSLog ( @"Place ID: %@" , place . placeID );
}
}
}];
Notes about the likelihood values:
The likelihood provides a relative probability
of the place being the best match within the list of returned places for a
single request. You can't compare likelihoods across different requests.
The value of the likelihood will be between 0 and 1.0.
The sum of the likelihoods in a returned array of
GMSPlaceLikelihood
objects is always less than or equal to 1.0. Note that the sum isn't
necessarily 1.0.
For example, to represent a 55% likelihood that the correct place is Place A,
and a 35% likelihood that it's Place B, the likelihood array has two members:
Place A with a likelihood of 0.55 and
Place B with a likelihood of 0.35.
Displaying attributions in your app
When your app displays information obtained from
GMSPlacesClient
findPlaceLikelihoodsFromCurrentLocationWithPlaceFields: , the app
must also display attributions. Read more about
attributions .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
