---
title: "GoogleNavigation Framework Reference \_|\_ Navigation SDK for iOS \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSAddress
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/ios-sdk/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSAddress
  title: "GoogleNavigation Framework Reference \_|\_ Navigation SDK for iOS \_|\_\
    \ Google for Developers"
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
Navigation SDK for iOS
Reference
Send feedback
GoogleNavigation Framework Reference
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
GMSAddress stores human-readable address information obtained from reverse geocoding requests using GMSGeocoder .
It contains properties for various address components like coordinate, street, city, region, postal code, and country.
The lines property provides an array of formatted address lines, offering a comprehensive representation.
While addressLine1 and addressLine2 were previously used, they are now deprecated in favor of the lines property.
Some address fields may be nil if the information is unavailable.
GMSAddress
@interface GMSAddress : NSObject < NSCopying , NSSecureCoding >
A result from a reverse geocode request, containing a human-readable address. This class is
immutable and should not be instantiated directly unless under testing circumstances. Obtain an
instance via GMSGeocoder .
Some of the fields may be nil, indicating they are not present.
coordinate
Location, or kLocationCoordinate2DInvalid if unknown.
Declaration
Swift
var coordinate : CLLocationCoordinate2D { get }
Objective-C
@property ( nonatomic , readonly ) CLLocationCoordinate2D coordinate ;
thoroughfare
Street number and name.
Declaration
Swift
var thoroughfare : String ? { get }
Objective-C
@property ( nonatomic , copy , readonly , nullable ) NSString * thoroughfare ;
locality
Locality or city.
Declaration
Swift
var locality : String ? { get }
Objective-C
@property ( nonatomic , copy , readonly , nullable ) NSString * locality ;
subLocality
Subdivision of locality, district or park.
Declaration
Swift
var subLocality : String ? { get }
Objective-C
@property ( nonatomic , copy , readonly , nullable ) NSString * subLocality ;
administrativeArea
Region/State/Administrative area.
Declaration
Swift
var administrativeArea : String ? { get }
Objective-C
@property ( nonatomic , copy , readonly , nullable ) NSString * administrativeArea ;
postalCode
Postal/Zip code.
Declaration
Swift
var postalCode : String ? { get }
Objective-C
@property ( nonatomic , copy , readonly , nullable ) NSString * postalCode ;
country
The country name.
Declaration
Swift
var country : String ? { get }
Objective-C
@property ( nonatomic , copy , readonly , nullable ) NSString * country ;
lines
An array of NSString containing formatted lines of the address. May be nil.
Declaration
Swift
var lines : [ String ]? { get }
Objective-C
@property ( nonatomic , copy , readonly , nullable ) NSArray < NSString *> * lines ;
-addressLine1
Deprecated
This method is obsolete and will be removed in a future release. Use the lines property instead.
Returns the first line of the address.
Declaration
Swift
func addressLine1 () -> String ?
Objective-C
- ( nullable NSString * ) addressLine1 ;
-addressLine2
Deprecated
This method is obsolete and will be removed in a future release. Use the lines property instead.
Returns the second line of the address.
Declaration
Swift
func addressLine2 () -> String ?
Objective-C
- ( nullable NSString * ) addressLine2 ;
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],[]]
