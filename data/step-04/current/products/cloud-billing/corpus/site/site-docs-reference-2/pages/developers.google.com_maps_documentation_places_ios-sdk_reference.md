---
title: "GooglePlaces Framework Reference \_|\_ Places SDK for iOS \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/maps/documentation/places/ios-sdk/reference
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/ios-sdk/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/places/ios-sdk/reference
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
This documentation outlines the globally available classes within the Google Places SDK for iOS.
These classes provide functionality for tasks such as place autocomplete, place details retrieval, and photo fetching.
They enable developers to integrate place-related features into their iOS applications.
The classes handle various aspects of place information, including addresses, predictions, reviews, and opening hours.
Developers can use these classes to create rich and interactive place-based experiences in their apps.
Classes
The following classes are available globally.
GMSAddressComponent
Represents a component of an address, e.g., street number, postcode, city, etc.
Declaration
Swift
class GMSAddressComponent : NSObject
Objective-C
@interface GMSAddressComponent : NSObject
GMSAutocompleteFetcher
Deprecated
Use GMSPlacesClient#fetchAutocompleteSuggestionsFromRequest:callback: instead.
Declaration
Swift
class GMSAutocompleteFetcher : NSObject
Objective-C
@interface GMSAutocompleteFetcher : NSObject
/**
* Initialize the fetcher.
*
* @param filter The filter to apply to the results. This parameter may be nil.
*/
- ( instancetype ) initWithFilter :( nullable GMSAutocompleteFilter * ) filter NS_DESIGNATED_INITIALIZER
__GMS_AVAILABLE_BUT_DEPRECATED_MSG (
"Use <code>GMSPlacesClient#fetchAutocompleteSuggestionsFromRequest:callback:</code> "
"instead." )
;
/** Delegate to be notified with autocomplete prediction results. */
@property ( nonatomic , weak , nullable ) id < GMSAutocompleteFetcherDelegate > delegate
__GMS_AVAILABLE_BUT_DEPRECATED_MSG (
"Use <code>GMSPlacesClient#fetchAutocompleteSuggestionsFromRequest:callback:</code> "
"instead." )
;
/** Filter to apply to autocomplete suggestions (can be nil). */
@property ( nonatomic , strong , nullable ) GMSAutocompleteFilter * autocompleteFilter
__GMS_AVAILABLE_BUT_DEPRECATED_MSG (
"Use <code>GMSPlacesClient#fetchAutocompleteSuggestionsFromRequest:callback:</code> "
"instead." )
;
/** Provide a `GMSAutocompleteSessionToken` for tracking the specific autocomplete query flow. */
- ( void ) provideSessionToken :( nullable GMSAutocompleteSessionToken * ) sessionToken
__GMS_AVAILABLE_BUT_DEPRECATED_MSG (
"Use <code>GMSPlacesClient#fetchAutocompleteSuggestionsFromRequest:callback:</code> "
"instead." )
;
/**
* Notify the fetcher that the source text to autocomplete has changed.
*
* This method should only be called from the main thread. Calling this method from another thread
* will result in undefined behavior. Calls to `GMSAutocompleteFetcherDelegate` methods will also be
* called on the main thread.
*
* This method is non-blocking.
* @param text The partial text to autocomplete.
*/
- ( void ) sourceTextHasChanged :( nullable NSString * ) text
__GMS_AVAILABLE_BUT_DEPRECATED_MSG (
"Use <code>GMSPlacesClient#fetchAutocompleteSuggestionsFromRequest:callback:</code> "
"instead." )
;
@end
GMSAutocompleteFilter
This class represents a set of restrictions that may be applied to autocomplete requests. This
allows customization of autocomplete suggestions to only those places that are of interest.
Declaration
Swift
class GMSAutocompleteFilter : NSObject
Objective-C
@interface GMSAutocompleteFilter : NSObject
GMSAutocompleteMatchFragment
This class represents a matched fragment of a string. This is a contiguous range of characters
in a string, suitable for highlighting in an autocompletion UI.
Declaration
Swift
class GMSAutocompleteMatchFragment : NSObject
Objective-C
@interface GMSAutocompleteMatchFragment : NSObject
GMSAutocompletePlaceSuggestion
This class represents a place suggestion of a full query based on a partially typed string.
Declaration
Swift
class GMSAutocompletePlaceSuggestion : NSObject
Objective-C
@interface GMSAutocompletePlaceSuggestion : NSObject
GMSAutocompletePrediction
Deprecated
Use GMSAutocompleteSuggestion instead.
This class represents a prediction of a full query based on a partially typed string.
Declaration
Swift
class GMSAutocompletePrediction : NSObject
Objective-C
@interface GMSAutocompletePrediction : NSObject
GMSAutocompleteRequest
The request for autocomplete data.
Declaration
Swift
class GMSAutocompleteRequest : NSObject
Objective-C
@interface GMSAutocompleteRequest : NSObject
GMSAutocompleteResultsViewController
Deprecated
Use the placeAutocomplete View extension in Places Swift SDK ( https://developers.google.com/maps/documentation/places/ios-sdk/google-places-swift ) instead.
GMSAutocompleteResultsViewController provides an interface that displays place autocomplete
predictions in a table view. The table view will be automatically updated as input text
changes.
This class is intended to be used as the search results controller of a UISearchController. Pass
an instance of GMSAutocompleteResultsViewController to UISearchController’s
initWithSearchResultsController method, then set the controller as the UISearchController’s
searchResultsUpdater property.
Use the GMSAutocompleteResultsViewControllerDelegate delegate protocol to be notified when a
place is selected from the list.
Declaration
Swift
class GMSAutocompleteResultsViewController : UIViewController , UISearchResultsUpdating
Objective-C
@interface GMSAutocompleteResultsViewController
: UIViewController < UISearchResultsUpdating >
GMSAutocompleteSessionToken
This class represents a session token to uniquely identify a series of queries to the Google
Places API Services for fetching place predictions for a partial search string.
Declaration
Swift
class GMSAutocompleteSessionToken : NSObject
Objective-C
@interface GMSAutocompleteSessionToken : NSObject
GMSAutocompleteSuggestion
This class represents a suggestion of a full query based on a partially typed string.
Declaration
Swift
class GMSAutocompleteSuggestion : NSObject
Objective-C
@interface GMSAutocompleteSuggestion : NSObject
GMSAutocompleteTableDataSource
Deprecated
Use Places Swift SDK’s ( https://developers.google.com/maps/documentation/places/ios-sdk/google-places-swift ) placeAutocomplete API instead.
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
Declaration
Swift
class GMSAutocompleteTableDataSource : NSObject , UITableViewDataSource , UITableViewDelegate
Objective-C
@interface GMSAutocompleteTableDataSource
: NSObject < UITableViewDataSource , UITableViewDelegate >
GMSAutocompleteViewController
Deprecated
Use the placeAutocomplete View extension in Places Swift SDK ( https://developers.google.com/maps/documentation/places/ios-sdk/google-places-swift ) instead.
GMSAutocompleteViewController provides an interface that displays a table of autocomplete
predictions that updates as the user enters text. Place selections made by the user are
returned to the app via the GMSAutocompleteViewControllerResultsDelegate protocol.
To use GMSAutocompleteViewController , set its delegate to an object in your app that
conforms to the GMSAutocompleteViewControllerDelegate protocol and present the controller
(eg using presentViewController). The GMSAutocompleteViewControllerDelegate delegate methods
can be used to determine when the user has selected a place or has cancelled selection.
Declaration
Swift
class GMSAutocompleteViewController : UIViewController
Objective-C
@interface GMSAutocompleteViewController : UIViewController
GMSFetchPhotoRequest
Request object to use with GMSPlacesClient to fetch a photo.
Declaration
Swift
class GMSFetchPhotoRequest : NSObject
Objective-C
@interface GMSFetchPhotoRequest : NSObject
GMSFetchPlaceRequest
Request object to use with GMSPlacesClient to fetch a place.
Declaration
Swift
class GMSFetchPlaceRequest : NSObject
Objective-C
@interface GMSFetchPlaceRequest : NSObject
GMSTime
A class representing time in hours and minutes in a 24hr clock.
Declaration
Swift
class GMSTime : NSObject
Objective-C
@interface GMSTime : NSObject
GMSEvent
A class representing a open/close event in GMSPeriod .
Declaration
Swift
class GMSEvent : NSObject
Objective-C
@interface GMSEvent : NSObject
GMSPeriod
A class representing a period of time where the place is operating for a GMSPlace .
It contains an open GMSEvent and an optional close GMSEvent . The close event will be nil
if the period is open 24hrs.
Declaration
Swift
class GMSPeriod : NSObject
Objective-C
@interface GMSPeriod : NSObject
GMSOpeningHours
A class to handle storing and accessing opening hours information for GMSPlace .
Declaration
Swift
class GMSOpeningHours : NSObject
Objective-C
@interface GMSOpeningHours : NSObject
GMSPlace
Represents a particular physical place. A GMSPlace encapsulates information about a physical
location, including its name, location, and any other information we might have about it. This
class is immutable.
Declaration
Swift
class GMSPlace : NSObject
Objective-C
@interface GMSPlace : NSObject
GMSPlaceAccessibilityOptions
Information about the accessibility options a place offers.
Declaration
Swift
class GMSPlaceAccessibilityOptions : NSObject
Objective-C
@interface GMSPlaceAccessibilityOptions : NSObject
GMSPlaceAddressDescriptor
A relational description of a location.
Includes a ranked set of nearby landmarks and precise containing areas and their
relationship to the target location.
Declaration
Swift
class GMSPlaceAddressDescriptor : NSObject
Objective-C
@interface GMSPlaceAddressDescriptor : NSObject
GMSPlaceArea
Area information and the area’s relationship with the target location.
Areas include precise sublocality, neighborhoods, and large compounds that are
useful for describing a location.
Declaration
Swift
class GMSPlaceArea : NSObject
Objective-C
@interface GMSPlaceArea : NSObject
GMSPlaceAuthorAttribution
A class representing an author attribution.
Declaration
Swift
class GMSPlaceAuthorAttribution : NSObject
Objective-C
@interface GMSPlaceAuthorAttribution : NSObject
GMSPlaceConnectorAggregation
A class that represents an EV charging connector aggregation.
Declaration
Swift
class GMSPlaceConnectorAggregation : NSObject
Objective-C
@interface GMSPlaceConnectorAggregation : NSObject
GMSPlaceConsumerAlert
The consumer alert message for the place when we detect suspicious review activity on a business
or a business violates our policies.
Declaration
Swift
class GMSPlaceConsumerAlert : NSObject
Objective-C
@interface GMSPlaceConsumerAlert : NSObject
GMSPlaceConsumerAlertDetails
The details of the consumer alert message.
Declaration
Swift
class GMSPlaceConsumerAlertDetails : NSObject
Objective-C
@interface GMSPlaceConsumerAlertDetails : NSObject
GMSPlaceContainingPlace
Represents a parent location that holds another place.
Declaration
Swift
class GMSPlaceContainingPlace : NSObject
Objective-C
@interface GMSPlaceContainingPlace : NSObject
GMSPlaceContentBlock
A class that represents a content block.
Declaration
Swift
class GMSPlaceContentBlock : NSObject
Objective-C
@interface GMSPlaceContentBlock : NSObject
GMSPlaceEVChargeAmenitySummary
The summary of amenities near the EV charging station. This only applies to places with type
“electric_vehicle_charging_station”.
Declaration
Swift
class GMSPlaceEVChargeAmenitySummary : NSObject , GMSPlaceAISummary
Objective-C
@interface GMSPlaceEVChargeAmenitySummary : NSObject < GMSPlaceAISummary >
GMSPlaceEVChargeOptions
A class that represents a place’s EV charging options.
Declaration
Swift
class GMSPlaceEVChargeOptions : NSObject
Objective-C
@interface GMSPlaceEVChargeOptions : NSObject
GMSPlaceEVSearchOptions
Searchable EV options of a place search request.
Declaration
Swift
class GMSPlaceEVSearchOptions : NSObject
Objective-C
@interface GMSPlaceEVSearchOptions : NSObject
Protocols
GMSPlaceEncodedPolyline
An encoded polyline for a route.
See https://developers.google.com/maps/documentation/utilities/polylinealgorithm for more
info.
Declaration
Swift
class GMSPlaceEncodedPolyline : NSObject , GMSPlacePolyline
Objective-C
@interface GMSPlaceEncodedPolyline : NSObject < GMSPlacePolyline >
GMSPlaceFuelOptions
The most recent information about fuel options in a gas station.
Declaration
Swift
class GMSPlaceFuelOptions : NSObject
Objective-C
@interface GMSPlaceFuelOptions : NSObject
GMSPlaceFuelPrice
Fuel price information for a given fuel type.
Declaration
Swift
class GMSPlaceFuelPrice : NSObject
Objective-C
@interface GMSPlaceFuelPrice : NSObject
GMSPlaceGenerativeSummary
A class that represents a place’s generative summary.
Declaration
Swift
class GMSPlaceGenerativeSummary : NSObject , GMSPlaceAISummary
Objective-C
@interface GMSPlaceGenerativeSummary : NSObject < GMSPlaceAISummary >
GMSPlaceGoogleMapsLinks
Links to trigger different Google Maps actions for a place.
Declaration
Swift
class GMSPlaceGoogleMapsLinks : NSObject
Objective-C
@interface GMSPlaceGoogleMapsLinks : NSObject
GMSPlaceIsOpenRequest
Represents an is open request definition to be sent via GMSPlacesClient .
Declaration
Swift
class GMSPlaceIsOpenRequest : NSObject
Objective-C
@interface GMSPlaceIsOpenRequest : NSObject
GMSPlaceIsOpenResponse
The response object for the isOpenWithRequest:callback: method.
Declaration
Swift
class GMSPlaceIsOpenResponse : NSObject
Objective-C
@interface GMSPlaceIsOpenResponse : NSObject
GMSPlaceLandmark
Basic landmark information and the landmark’s relationship with the target location.
Landmarks are prominent places that can be used to describe a location.
Declaration
Swift
class GMSPlaceLandmark : NSObject
Objective-C
@interface GMSPlaceLandmark : NSObject
GMSPlaceLeg
A single portion of a trip from one location to another.
Declaration
Swift
class GMSPlaceLeg : NSObject
Objective-C
@interface GMSPlaceLeg : NSObject
GMSPlaceLikelihood
Represents a GMSPlace and the relative likelihood of the place being the best match within the
list of returned places for a single request. For more information about place likelihoods, see
GMSPlaceLikelihoodList .
Declaration
Swift
class GMSPlaceLikelihood : NSObject , NSCopying
Objective-C
@interface GMSPlaceLikelihood : NSObject < NSCopying >
GMSPlaceLikelihoodList
Represents a list of places with an associated likelihood for the place being the correct place.
For example, the Places service may be uncertain what the true Place is, but think it 55% likely
to be PlaceA, and 35% likely to be PlaceB. The corresponding likelihood list has two members, one
with likelihood 0.55 and the other with likelihood 0.35. The likelihoods are not guaranteed to be
correct, and in a given place likelihood list they may not sum to 1.0.
Declaration
Swift
class GMSPlaceLikelihoodList : NSObject
Objective-C
@interface GMSPlaceLikelihoodList : NSObject
GMSPlaceMoney
Represents an amount of money with its currency type.
Declaration
Swift
class GMSPlaceMoney : NSObject
Objective-C
@interface GMSPlaceMoney : NSObject
GMSPlaceNeighborhoodSummary
A class that represents a summary of a neighborhood.
Declaration
Swift
class GMSPlaceNeighborhoodSummary : NSObject , GMSPlaceAISummary
Objective-C
@interface GMSPlaceNeighborhoodSummary : NSObject < GMSPlaceAISummary >
GMSPlacePagination
Pagination object for {@link GMSPlaceSearchResponse}. There could be more than one page of
results in a single search, use {@link fetchNextPageWithCompletion} to fetch the next page of
results.
Declaration
Swift
class GMSPlacePagination : NSObject
Objective-C
@interface GMSPlacePagination : NSObject
GMSPlaceParkingOptions
This class represents the parking options for a place.
Declaration
Swift
class GMSPlaceParkingOptions : NSObject
Objective-C
@interface GMSPlaceParkingOptions : NSObject
GMSPlacePaymentOptions
Payment options at a place.
Declaration
Swift
class GMSPlacePaymentOptions : NSObject
Objective-C
@interface GMSPlacePaymentOptions : NSObject
GMSPlacePhotoMetadata
The metadata corresponding to a single photo associated with a place.
Declaration
Swift
class GMSPlacePhotoMetadata : NSObject
Objective-C
@interface GMSPlacePhotoMetadata : NSObject
GMSPlacePhotoMetadataList
A list of GMSPlacePhotoMetadata objects.
Declaration
Swift
class GMSPlacePhotoMetadataList : NSObject
Objective-C
@interface GMSPlacePhotoMetadataList : NSObject
GMSPlacePostalAddress
Represents a postal address, such as for postal delivery or payments addresses. With
a postal address, a postal service can deliver items to a premise, P.O. box, or
similar. A postal address is not intended to model geographical locations like roads,
towns, or mountains.
Declaration
Swift
class GMSPlacePostalAddress : NSObject
Objective-C
@interface GMSPlacePostalAddress : NSObject
GMSPlacePriceRange
Price range associated with a place. When price range information is available for a
place, the start price will always be set but the end price may not always be set.
This indicates a range without an upper bound (eg: “More than $100”).
Declaration
Swift
class GMSPlacePriceRange : NSObject
Objective-C
@interface GMSPlacePriceRange : NSObject
GMSPlaceReview
This class represents a single place review.
Declaration
Swift
class GMSPlaceReview : NSObject
Objective-C
@interface GMSPlaceReview : NSObject
GMSPlaceReviewSummary
AI-generated summary of the place using user reviews.
Declaration
Swift
class GMSPlaceReviewSummary : NSObject , GMSPlaceAISummary
Objective-C
@interface GMSPlaceReviewSummary : NSObject < GMSPlaceAISummary >
GMSPlaceRouteModifiers
Encapsulates a set of optional conditions to satisfy when calculating the routes.
Declaration
Swift
class GMSPlaceRouteModifiers : NSObject
Objective-C
@interface GMSPlaceRouteModifiers : NSObject
GMSPlaceRoutingParameters
Parameters to configure the routing calculations to the places in the response, both along a
route (where result ranking will be influenced) and for calculating travel times on results.
Declaration
Swift
class GMSPlaceRoutingParameters : NSObject
Objective-C
@interface GMSPlaceRoutingParameters : NSObject
GMSPlaceRoutingSummary
The duration and distance from the routing origin to a place in the response, and a second leg
from that place to the destination, if requested.
Declaration
Swift
class GMSPlaceRoutingSummary : NSObject
Objective-C
@interface GMSPlaceRoutingSummary : NSObject
GMSPlaceSearchAlongRouteParameters
Additional parameters for searching along a route.
Declaration
Swift
class GMSPlaceSearchAlongRouteParameters : NSObject
Objective-C
@interface GMSPlaceSearchAlongRouteParameters : NSObject
GMSPlaceSearchByTextRequest
Represents a text search request definition to be sent via GMSPlacesClient .
Declaration
Swift
class GMSPlaceSearchByTextRequest : NSObject
Objective-C
@interface GMSPlaceSearchByTextRequest : NSObject
GMSPlaceSearchByTextResponse
The response object for the searchByText method.
Declaration
Swift
class GMSPlaceSearchByTextResponse : NSObject , GMSPlaceSearchResponse
Objective-C
@interface GMSPlaceSearchByTextResponse : NSObject < GMSPlaceSearchResponse >
GMSPlaceSearchNearbyRequest
Request object to use with GMSPlacesClient to fetch nearby places.
Declaration
Swift
class GMSPlaceSearchNearbyRequest : NSObject
Objective-C
@interface GMSPlaceSearchNearbyRequest : NSObject
GMSPlaceSearchNearbyResponse
The response object for the searchNearby method.
Declaration
Swift
class GMSPlaceSearchNearbyResponse : NSObject , GMSPlaceSearchResponse
Objective-C
@interface GMSPlaceSearchNearbyResponse : NSObject < GMSPlaceSearchResponse >
GMSPlaceSpecialDay
Represents information on a particular day which may have opening hours different than normal.
Declaration
Swift
class GMSPlaceSpecialDay : NSObject
Objective-C
@interface GMSPlaceSpecialDay : NSObject
GMSPlaceViewportInfo
GMSPlaceViewportInfo represents a rectangular bounding box on the Earth’s surface.
GMSPlaceViewportInfo is immutable and can’t be modified after construction.
Declaration
Swift
class GMSPlaceViewportInfo : NSObject
Objective-C
@interface GMSPlaceViewportInfo : NSObject
GMSPlacesClient
Main interface to the Places SDK. Used for searching and getting details about places. This class
should be accessed through the [GMSPlacesClient sharedClient] method.
GMSPlacesClient methods should only be called from the main thread. Calling these methods from
another thread will result in an exception or undefined behavior. Unless otherwise specified, all
callbacks will be invoked on the main thread.
Declaration
Swift
class GMSPlacesClient : NSObject
Objective-C
@interface GMSPlacesClient : NSObject
GMSPlusCode
A class containing the Plus codes representation for a location. See https://plus.codes/ for more
details.
Declaration
Swift
class GMSPlusCode : NSObject
Objective-C
@interface GMSPlusCode : NSObject
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["This document details classes for the Google Places API, covering various functionalities. `GMSAutocomplete` classes manage address suggestions and predictions, including filtering, matching, and displaying results. `GMSPlace` classes represent physical locations, handling details like opening hours, photos, reviews, and likelihood. `GMSPlacesClient` is the primary interface for searching and retrieving place details. Additional classes manage address components, time representation, plus codes, and requests for fetching places or photos. There are classes to manage the opening and closing hours of a place as well.\n"]]
