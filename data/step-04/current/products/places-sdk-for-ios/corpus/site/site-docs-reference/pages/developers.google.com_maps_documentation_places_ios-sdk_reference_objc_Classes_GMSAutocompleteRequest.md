---
title: "GooglePlaces Framework Reference \_|\_ Places SDK for iOS \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompleteRequest
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/ios-sdk/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompleteRequest
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
GMSAutocompleteRequest objects are used to request autocomplete data from the Google Maps Places SDK for iOS.
The request requires a query string, representing the partial text to autocomplete.
You can optionally use a sessionToken for billing purposes and a filter to refine results.
The initWithQuery: initializer is used to create a request.
GMSAutocompleteRequest
@interface GMSAutocompleteRequest : NSObject
The request for autocomplete data.
query
The partial text to autocomplete.
Declaration
Swift
var query : String { get set }
Objective-C
@property ( nonatomic , copy ) NSString * _Nonnull query ;
sessionToken
The GMSAutocompleteSessionToken to associate requests to a billing session.
Declaration
Swift
var sessionToken : GMSAutocompleteSessionToken ? { get set }
Objective-C
@property ( nonatomic , nullable ) GMSAutocompleteSessionToken * sessionToken ;
filter
The GMSAutocompleteFilter to apply to the results.
Declaration
Swift
var filter : GMSAutocompleteFilter ? { get set }
Objective-C
@property ( nonatomic , nullable ) GMSAutocompleteFilter * filter ;
-initWithQuery:
Request initializer.
*
- parameter: query The query required for the request.
Declaration
Swift
init ( query : String )
Objective-C
- ( nonnull instancetype ) initWithQuery :( nonnull NSString * ) query ;
-init
Unavailable
Declaration
Objective-C
- ( instancetype ) init NS_UNAVAILABLE ;
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],[]]
