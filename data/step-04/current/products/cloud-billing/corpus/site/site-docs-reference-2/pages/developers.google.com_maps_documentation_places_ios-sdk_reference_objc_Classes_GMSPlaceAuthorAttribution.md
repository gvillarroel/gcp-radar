---
title: "GooglePlaces Framework Reference \_|\_ Places SDK for iOS \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSPlaceAuthorAttribution
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/ios-sdk/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSPlaceAuthorAttribution
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
GMSPlaceAuthorAttribution objects represent the source of place information, providing details like the author's name, a link to their profile ( URI ), and a link to their profile photo ( photoURI ).
Use the initWithName:URI:photoURI: method to create a GMSPlaceAuthorAttribution instance, providing the author's name, profile link, and profile photo link.
Access the author's name, profile link, and photo link through the name , URI , and photoURI properties respectively.
GMSPlaceAuthorAttribution
@interface GMSPlaceAuthorAttribution : NSObject
A class representing an author attribution.
-initWithName:URI:photoURI:
Returns the GMSPlaceAuthorAttribution with a name, URI, and author photoURI.
Declaration
Swift
init ( name : String , uri URI : URL ?, photoURI : URL ?)
Objective-C
- ( nonnull instancetype ) initWithName :( nonnull NSString * ) name
URI :( nullable NSURL * ) URI
photoURI :( nullable NSURL * ) photoURI ;
name
Returns the name of the author.
Declaration
Swift
var name : String { get }
Objective-C
@property ( nonatomic , copy , readonly ) NSString * _Nonnull name ;
URI
Returns the URI of the author.
Declaration
Swift
var uri : URL ? { get }
Objective-C
@property ( nonatomic , copy , readonly , nullable ) NSURL * URI ;
photoURI
Returns the profile photo URI of the author.
Declaration
Swift
var photoURI : URL ? { get }
Objective-C
@property ( nonatomic , copy , readonly , nullable ) NSURL * photoURI ;
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],["`GMSPlaceAuthorAttribution` represents author information. It can be initialized with an author's name, URI, and photo URI. It provides read-only access to the author's `name` (string), `URI` (URL), and `photoURI` (URL). The class uses these properties to store author attribution data. The information is accessible through both Swift and Objective-C interfaces.\n"]]
