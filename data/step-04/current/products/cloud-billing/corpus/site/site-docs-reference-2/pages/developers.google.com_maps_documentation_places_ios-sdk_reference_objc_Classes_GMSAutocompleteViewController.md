---
title: "GooglePlaces Framework Reference \_|\_ Places SDK for iOS \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompleteViewController
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/ios-sdk/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompleteViewController
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
GMSAutocompleteViewController presents an interface for users to select a place from a list of autocomplete predictions.
Place selections are communicated back to the app through the GMSAutocompleteViewControllerResultsDelegate protocol.
Developers can customize the appearance of the autocomplete view, such as colors and table cell styles.
Filtering of autocomplete suggestions is possible using the autocompleteFilter property.
The placeFields and placeProperties properties allow for the customization of the level of place details returned upon selection.
GMSAutocompleteViewController
Deprecated
Use the placeAutocomplete View extension in Places Swift SDK ( https://developers.google.com/maps/documentation/places/ios-sdk/google-places-swift ) instead.
@interface GMSAutocompleteViewController : UIViewController
GMSAutocompleteViewController provides an interface that displays a table of autocomplete
predictions that updates as the user enters text. Place selections made by the user are
returned to the app via the GMSAutocompleteViewControllerResultsDelegate protocol.
To use GMSAutocompleteViewController , set its delegate to an object in your app that
conforms to the GMSAutocompleteViewControllerDelegate protocol and present the controller
(eg using presentViewController). The GMSAutocompleteViewControllerDelegate delegate methods
can be used to determine when the user has selected a place or has cancelled selection.
delegate
Deprecated
Use the placeAutocomplete View extension in Places Swift SDK ( https://developers.google.com/maps/documentation/places/ios-sdk/google-places-swift ) instead.
Delegate to be notified when a place is selected or picking is cancelled.
Declaration
Swift
@IBOutlet weak var delegate : ( any GMSAutocompleteViewControllerDelegate )? { get set }
Objective-C
@property ( nonatomic , weak , nullable ) id < GMSAutocompleteViewControllerDelegate > delegate ;
autocompleteFilter
Deprecated
Use the placeAutocomplete View extension in Places Swift SDK ( https://developers.google.com/maps/documentation/places/ios-sdk/google-places-swift ) instead.
Filter to apply to autocomplete suggestions (can be nil).
Declaration
Swift
var autocompleteFilter : GMSAutocompleteFilter ? { get set }
Objective-C
@property ( nonatomic , strong , nullable ) GMSAutocompleteFilter * autocompleteFilter ;
tableCellBackgroundColor
Deprecated
Use the placeAutocomplete View extension in Places Swift SDK ( https://developers.google.com/maps/documentation/places/ios-sdk/google-places-swift ) instead.
The background color of table cells.
Declaration
Swift
var tableCellBackgroundColor : UIColor { get set }
Objective-C
@property ( nonatomic , strong ) __GMS_AVAILABLE_BUT_DEPRECATED_MSG UIColor * tableCellBackgroundColor ;
tableCellSeparatorColor
Deprecated
Use the placeAutocomplete View extension in Places Swift SDK ( https://developers.google.com/maps/documentation/places/ios-sdk/google-places-swift ) instead.
The color of the separator line between table cells.
Declaration
Swift
var tableCellSeparatorColor : UIColor { get set }
Objective-C
@property ( nonatomic , strong ) __GMS_AVAILABLE_BUT_DEPRECATED_MSG UIColor * tableCellSeparatorColor ;
primaryTextColor
Deprecated
Use the placeAutocomplete View extension in Places Swift SDK ( https://developers.google.com/maps/documentation/places/ios-sdk/google-places-swift ) instead.
The color of result name text in autocomplete results
Declaration
Swift
var primaryTextColor : UIColor { get set }
Objective-C
@property ( nonatomic , strong ) __GMS_AVAILABLE_BUT_DEPRECATED_MSG UIColor * primaryTextColor ;
primaryTextHighlightColor
Deprecated
Use the placeAutocomplete View extension in Places Swift SDK ( https://developers.google.com/maps/documentation/places/ios-sdk/google-places-swift ) instead.
The color used to highlight matching text in autocomplete results
Declaration
Swift
var primaryTextHighlightColor : UIColor { get set }
Objective-C
@property ( nonatomic , strong ) __GMS_AVAILABLE_BUT_DEPRECATED_MSG UIColor * primaryTextHighlightColor ;
secondaryTextColor
Deprecated
Use the placeAutocomplete View extension in Places Swift SDK ( https://developers.google.com/maps/documentation/places/ios-sdk/google-places-swift ) instead.
The color of the second row of text in autocomplete results.
Declaration
Swift
var secondaryTextColor : UIColor { get set }
Objective-C
@property ( nonatomic , strong ) __GMS_AVAILABLE_BUT_DEPRECATED_MSG UIColor * secondaryTextColor ;
tintColor
Deprecated
Use the placeAutocomplete View extension in Places Swift SDK ( https://developers.google.com/maps/documentation/places/ios-sdk/google-places-swift ) instead.
The tint color applied to controls in the Autocomplete view.
Declaration
Swift
var tintColor : UIColor ? { get set }
Objective-C
@property ( nonatomic , strong , nullable ) UIColor * tintColor ;
placeFields
Deprecated
Use the placeAutocomplete View extension in Places Swift SDK ( https://developers.google.com/maps/documentation/places/ios-sdk/google-places-swift ) instead.
Specify individual place details to fetch for object GMSPlace . Defaults to returning all
details if not overridden.
Declaration
Swift
var placeFields : GMSPlaceField { get set }
Objective-C
@property ( nonatomic ) GMSPlaceField placeFields ;
placeProperties
Deprecated
Use the placeAutocomplete View extension in Places Swift SDK ( https://developers.google.com/maps/documentation/places/ios-sdk/google-places-swift ) instead.
The GMSPlaceProperty for specifying explicit place details to be requested. Default returns
all available properties.
Declaration
Swift
var placeProperties : [ String ] { get set }
Objective-C
@property ( nonatomic , strong ) __GMS_AVAILABLE_BUT_DEPRECATED_MSG NSArray < NSString *> * placeProperties ;
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-26 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-26 UTC."],[],["`GMSAutocompleteViewController` displays autocomplete predictions as users type. To use it, set a delegate conforming to `GMSAutocompleteViewControllerDelegate` to handle place selections or cancellations. Customize the suggestions using `autocompleteFilter`. The view's appearance can be modified via properties like `tableCellBackgroundColor`, `primaryTextColor`, and `tintColor`. Specify the details fetched for the selected place through `placeFields` or `placeProperties`.\n"]]
