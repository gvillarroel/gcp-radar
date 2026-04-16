---
title: "GooglePlaces Framework Reference \_|\_ Places SDK for iOS \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompleteTableDataSource
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/ios-sdk/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompleteTableDataSource
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
GMSAutocompleteTableDataSource populates a UITableView with place autocomplete predictions using the UITableViewDataSource and UITableViewDelegate protocols.
While designed for UISearchDisplayController , using UISearchController with GMSAutocompleteResultsViewController is recommended for displaying autocomplete results in iOS search UI.
Implement the GMSAutocompleteTableDataSourceDelegate protocol to handle place selection and prediction updates.
Customize appearance through properties like tableCellBackgroundColor , primaryTextColor , and tintColor .
Control the details fetched by setting placeFields for GMSPlaceField and placeProperties for GMSPlaceProperty .
GMSAutocompleteTableDataSource
Deprecated
Use Places Swift SDK’s ( https://developers.google.com/maps/documentation/places/ios-sdk/google-places-swift ) placeAutocomplete API instead.
@interface GMSAutocompleteTableDataSource
: NSObject < UITableViewDataSource , UITableViewDelegate >
GMSAutocompleteTableDataSource provides an interface for providing place autocomplete
predictions to populate a UITableView by implementing the UITableViewDataSource and
UITableViewDelegate protocols.
GMSAutocompleteTableDataSource is designed to be used as the data source for a
UISearchDisplayController.
NOTE: UISearchDisplayController has been deprecated since iOS 8. It is now recommended to use
UISearchController with GMSAutocompleteResultsViewController to display autocomplete results
using the iOS search UI.
Set an instance of GMSAutocompleteTableDataSource as the searchResultsDataSource and
searchResultsDelegate properties of UISearchDisplayController . In your implementation of
shouldReloadTableForSearchString , call sourceTextHasChanged with the current search string.
Use the GMSAutocompleteTableDataSourceDelegate delegate protocol to be notified when a place is
selected from the list. Because autocomplete predictions load asynchronously, it is necessary
to implement didUpdateAutocompletePredictions and call reloadData on the
UISearchDisplayController ‘s table view.
delegate
Deprecated
Use Places Swift SDK’s ( https://developers.google.com/maps/documentation/places/ios-sdk/google-places-swift ) placeAutocomplete API instead.
Delegate to be notified when a place is selected or picking is cancelled.
Declaration
Swift
@IBOutlet weak var delegate : ( any GMSAutocompleteTableDataSourceDelegate )? { get set }
Objective-C
@property ( nonatomic , weak , nullable ) id < GMSAutocompleteTableDataSourceDelegate > delegate ;
autocompleteFilter
Deprecated
Use Places Swift SDK’s ( https://developers.google.com/maps/documentation/places/ios-sdk/google-places-swift ) placeAutocomplete API instead.
Filter to apply to autocomplete suggestions (can be nil).
Declaration
Swift
var autocompleteFilter : GMSAutocompleteFilter ? { get set }
Objective-C
@property ( nonatomic , strong , nullable ) GMSAutocompleteFilter * autocompleteFilter ;
tableCellBackgroundColor
Deprecated
Use Places Swift SDK’s ( https://developers.google.com/maps/documentation/places/ios-sdk/google-places-swift ) placeAutocomplete API instead.
The background color of table cells.
Declaration
Swift
var tableCellBackgroundColor : UIColor { get set }
Objective-C
@property ( nonatomic , strong ) __GMS_AVAILABLE_BUT_DEPRECATED_MSG UIColor * tableCellBackgroundColor ;
tableCellSeparatorColor
Deprecated
Use Places Swift SDK’s ( https://developers.google.com/maps/documentation/places/ios-sdk/google-places-swift ) placeAutocomplete API instead.
The color of the separator line between table cells.
Declaration
Swift
var tableCellSeparatorColor : UIColor { get set }
Objective-C
@property ( nonatomic , strong ) __GMS_AVAILABLE_BUT_DEPRECATED_MSG UIColor * tableCellSeparatorColor ;
primaryTextColor
Deprecated
Use Places Swift SDK’s ( https://developers.google.com/maps/documentation/places/ios-sdk/google-places-swift ) placeAutocomplete API instead.
The color of result name text in autocomplete results
Declaration
Swift
var primaryTextColor : UIColor { get set }
Objective-C
@property ( nonatomic , strong ) __GMS_AVAILABLE_BUT_DEPRECATED_MSG UIColor * primaryTextColor ;
primaryTextHighlightColor
Deprecated
Use Places Swift SDK’s ( https://developers.google.com/maps/documentation/places/ios-sdk/google-places-swift ) placeAutocomplete API instead.
The color used to highlight matching text in autocomplete results
Declaration
Swift
var primaryTextHighlightColor : UIColor { get set }
Objective-C
@property ( nonatomic , strong ) __GMS_AVAILABLE_BUT_DEPRECATED_MSG UIColor * primaryTextHighlightColor ;
secondaryTextColor
Deprecated
Use Places Swift SDK’s ( https://developers.google.com/maps/documentation/places/ios-sdk/google-places-swift ) placeAutocomplete API instead.
The color of the second row of text in autocomplete results.
Declaration
Swift
var secondaryTextColor : UIColor { get set }
Objective-C
@property ( nonatomic , strong ) __GMS_AVAILABLE_BUT_DEPRECATED_MSG UIColor * secondaryTextColor ;
tintColor
Deprecated
Use Places Swift SDK’s ( https://developers.google.com/maps/documentation/places/ios-sdk/google-places-swift ) placeAutocomplete API instead.
The tint color applied to controls in the Autocomplete view.
Declaration
Swift
var tintColor : UIColor ? { get set }
Objective-C
@property ( nonatomic , strong , nullable ) UIColor * tintColor ;
placeFields
Deprecated
Use Places Swift SDK’s ( https://developers.google.com/maps/documentation/places/ios-sdk/google-places-swift ) placeAutocomplete API instead.
The GMSPlaceField for specifying explicit place details to be requested. Default returns
all available fields.
Declaration
Swift
var placeFields : GMSPlaceField { get set }
Objective-C
@property ( nonatomic ) GMSPlaceField placeFields ;
placeProperties
Deprecated
Use Places Swift SDK’s ( https://developers.google.com/maps/documentation/places/ios-sdk/google-places-swift ) placeAutocomplete API instead.
The GMSPlaceProperty for specifying explicit place details to be requested. Default returns
all available properties.
Declaration
Swift
var placeProperties : [ String ] { get set }
Objective-C
@property ( nonatomic , strong ) __GMS_AVAILABLE_BUT_DEPRECATED_MSG NSArray < NSString *> * placeProperties ;
-init
Deprecated
Use Places Swift SDK’s ( https://developers.google.com/maps/documentation/places/ios-sdk/google-places-swift ) placeAutocomplete API instead.
Initializes a data source.
Declaration
Swift
init ()
Objective-C
- ( nonnull instancetype ) init ;
-sourceTextHasChanged:
Deprecated
Use Places Swift SDK’s ( https://developers.google.com/maps/documentation/places/ios-sdk/google-places-swift ) placeAutocomplete API instead.
Notify the data source that the source text to autocomplete has changed.
This method should only be called from the main thread. Calling this method from another thread
will result in undefined behavior. Calls to GMSAutocompleteTableDataSourceDelegate methods will
also be called on the main thread.
This method is non-blocking.
Declaration
Swift
func sourceTextHasChanged ( _ text : String ?)
Objective-C
- ( void ) sourceTextHasChanged :( nullable NSString * ) text ;
Parameters
text
The partial text to autocomplete.
-clearResults
Deprecated
Use Places Swift SDK’s ( https://developers.google.com/maps/documentation/places/ios-sdk/google-places-swift ) placeAutocomplete API instead.
Clear all predictions.
NOTE: This will call the two delegate methods below:
didUpdateAutocompletePredictionsForResultsController:
didRequestAutocompletePredictionsForResultsController:
The implementation of this method is guaranteed to call these synchronously and in-order.
Declaration
Swift
func clearResults ()
Objective-C
- ( void ) clearResults ;
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-26 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-26 UTC."],[],["`GMSAutocompleteTableDataSource` provides place autocomplete predictions for a `UITableView`. It acts as the data source and delegate for `UISearchDisplayController`, though `UISearchController` is now preferred. Key actions include setting it as the `searchResultsDataSource` and `searchResultsDelegate`, and calling `sourceTextHasChanged` with the search string to trigger predictions. It also allows setting a filter and customizing appearance like colors. You can use `clearResults` to clear all current predictions, and you can specify the desired `placeFields` and `placeProperties`.\n"]]
