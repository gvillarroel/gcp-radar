---
title: "GooglePlaces Framework Reference \_|\_ Places SDK for iOS \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompleteFilter
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/ios-sdk/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompleteFilter
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
GMSAutocompleteFilter customizes autocomplete suggestions by restricting results based on criteria like place types, countries, and location.
It provides properties to filter by place types (using types ), countries (using countries ), origin location ( origin ), and location bias ( locationBias ).
Deprecated properties type and country are replaced by types and countries respectively, allowing for multiple selections.
Developers can further refine results using locationRestriction , regionCode , and inputOffset to control the scope and format of suggestions.
This class is essential for tailoring autocomplete results to specific user needs and geographic contexts within map-based applications.
GMSAutocompleteFilter
@interface GMSAutocompleteFilter : NSObject
This class represents a set of restrictions that may be applied to autocomplete requests. This
allows customization of autocomplete suggestions to only those places that are of interest.
type
Deprecated
type property is deprecated in favor of types .
DEPRECATED. The type filter applied to an autocomplete request to restrict results to different
types. Default value is kGMSPlacesAutocompleteTypeFilterNoFilter.
NOTE: Ignored if the “types” property is set.
Declaration
Swift
var type : GMSPlacesAutocompleteTypeFilter { get set }
Objective-C
@property ( nonatomic ) GMSPlacesAutocompleteTypeFilter type ;
types
The filter applied to an autocomplete request to restrict results using up to 5 different place
types.
NOTE: This API can take an array of up to 5 entries.
If you are using GMSAutocompleteRequest , this API can take types from table_A .
Otherwise, take data from table_1
or table_2 ,
but only a single entry in table_3 .
Default value is null, which means no filters specified. Overrides the deprecated “type” property
if this is set.
Declaration
Swift
var types : [ String ]? { get set }
Objective-C
@property ( nonatomic , nullable ) NSArray < NSString *> * types ;
country
Deprecated
country property is deprecated in favor of countries .
DEPRECATED. The country to restrict results to. This should be a ISO 3166-1 Alpha-2 country code
(case insensitive). If nil, no country filtering will take place.
NOTE: Ignored if the “countries” property is set.
Declaration
Swift
var country : String ? { get set }
Objective-C
@property ( nonatomic , copy , nullable ) NSString * country ;
countries
The countries to restrict results to. This should be a ISO 3166-1 Alpha-2 country code (case
insensitive). Supports up to 5 countries to filter. If nil, no country filtering will take place.
NOTE: Overrides the deprecated “country” property if that is set.
Declaration
Swift
var countries : [ String ]? { get set }
Objective-C
@property ( nonatomic , copy , nullable ) NSArray < NSString *> * countries ;
origin
The straight line distance origin location for measuring the straight line distance between the
origin location and autocomplete predictions.
Declaration
Swift
var origin : CLLocation ? { get set }
Objective-C
@property ( nonatomic , nullable ) CLLocation * origin ;
locationBias
The optional location bias to prefer place results near the location.
Declaration
Swift
var locationBias : ( any GMSPlaceLocationBias )? { get set }
Objective-C
@property ( nonatomic , nullable ) id < GMSPlaceLocationBias > locationBias ;
locationRestriction
The optional location restriction to limit place results.
Declaration
Swift
var locationRestriction : ( any GMSPlaceLocationRestriction )? { get set }
Objective-C
@property ( nonatomic , nullable ) id < GMSPlaceLocationRestriction > locationRestriction ;
regionCode
regionCode affects address formatting, result ranking, and potentially hiding or showing certain
results.
Declaration
Swift
var regionCode : String ? { get set }
Objective-C
@property ( nonatomic , nullable ) NSString * regionCode ;
inputOffset
inputOffset is the character offset of the input that indicates where the
completions may start from.
Declaration
Swift
var inputOffset : Int32 { get set }
Objective-C
@property ( nonatomic ) int32_t inputOffset ;
shouldIncludePureServiceAreaBusinesses
Whether pure service area businesses should be included in the results.
A pure service area business is a business that visits or delivers to customers
directly, but does not serve customers at their business address. For
example, businesses like cleaning services or plumbers. Those businesses
do not have a physical address or location on Google Maps. Places will not
return fields including location , plusCode , and other location related
fields for these businesses.
Default value is false.
Declaration
Swift
var shouldIncludePureServiceAreaBusinesses : Bool { get set }
Objective-C
@property ( nonatomic ) BOOL shouldIncludePureServiceAreaBusinesses ;
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-26 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-26 UTC."],[],["The `GMSAutocompleteFilter` class customizes autocomplete suggestions. It can filter results by place types using the `types` property (up to five). It can restrict results to specific countries using `countries` (up to five), which overrides the deprecated `country`. The `origin` property sets a reference location for distance calculations. `locationBias` and `locationRestriction` refine results geographically. The `regionCode` impacts result formatting and ranking. Finally, `inputOffset` defines where completions may begin in the input text.\n"]]
