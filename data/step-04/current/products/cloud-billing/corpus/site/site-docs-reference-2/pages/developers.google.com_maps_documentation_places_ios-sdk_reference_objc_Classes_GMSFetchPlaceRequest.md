---
title: "GooglePlaces Framework Reference \_|\_ Places SDK for iOS \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSFetchPlaceRequest
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/ios-sdk/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSFetchPlaceRequest
  title: "GooglePlaces Framework Reference \_|\_ Places SDK for iOS \_|\_ Google for\
    \ Developers"
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
Reference
Send feedback
GooglePlaces Framework Reference
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
GMSFetchPlaceRequest objects are used with GMSPlacesClient to fetch details about a specific place using its ID.
Requests must specify the placeID and desired placeProperties to retrieve data fields for the place.
An optional sessionToken can be included to associate the request with a billing session, particularly useful for autocomplete queries.
The default init method is unavailable; use initWithPlaceID:placeProperties:sessionToken: to create a request instance.
The requested placeProperties array cannot be empty; otherwise, an error will occur when sending the request.
GMSFetchPlaceRequest
@interface GMSFetchPlaceRequest : NSObject
Request object to use with GMSPlacesClient to fetch a place.
-initWithPlaceID:placeProperties:sessionToken:
Request object to use with GMSPlacesClient to fetch a place.
Declaration
Swift
init ( placeID : String , placeProperties : [ String ], sessionToken : GMSAutocompleteSessionToken ?)
Objective-C
- ( nonnull instancetype )
initWithPlaceID :( nonnull NSString * ) placeID
placeProperties :( nonnull NSArray < NSString *> * ) placeProperties
sessionToken :( nullable GMSAutocompleteSessionToken * ) sessionToken ;
Parameters
placeID
The ID of the place to be requested.
placeProperties
The properties of the place to be requested. Must not be empty. An empty
list will result in an error when trying to send the request. Read more about Place
Data Fields .
sessionToken
The GMSAutocompleteSessionToken to associate request to a billing session.
-init
Unavailable
Default init is not available. Please use the designated initializer.
Declaration
Objective-C
- ( nonnull instancetype ) init ;
placeID
Place ID of the place being requested.
Declaration
Swift
var placeID : String { get }
Objective-C
@property ( nonatomic , copy , readonly ) NSString * _Nonnull placeID ;
placeProperties
Place properties to include in the GMSPlace response. Must not be empty. An empty list will
result in an error when trying to send the request.
Declaration
Swift
var placeProperties : [ String ] { get }
Objective-C
@property ( nonatomic , copy , readonly ) NSArray < NSString *> * _Nonnull placeProperties ;
sessionToken
Session token to associate request to a billing session.
Declaration
Swift
@NSCopying var sessionToken : GMSAutocompleteSessionToken ? { get }
Objective-C
@property ( nonatomic , copy , readonly , nullable ) GMSAutocompleteSessionToken * sessionToken ;
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],[]]
