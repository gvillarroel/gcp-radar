---
title: "GooglePlaces Framework Reference \_|\_ Places SDK for iOS \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSPlace
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/ios-sdk/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSPlace
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
GMSPlace is an immutable class that represents a particular physical place, encapsulating information like name, location, and other relevant details.
It provides access to various properties such as name, place ID, coordinates, phone number, address, rating, reviews, price level, and more.
GMSPlace also offers information about operating hours, including regular and secondary hours, and special day entries.
Additionally, it includes attributes about dining options (like takeout, delivery, dine-in), service offerings (serves breakfast, lunch, etc.), and accessibility features.
Developers can use this class to retrieve and display detailed information about places within their applications using the Google Maps SDK for iOS.
GMSPlace
@interface GMSPlace : NSObject
Represents a particular physical place. A GMSPlace encapsulates information about a physical
location, including its name, location, and any other information we might have about it. This
class is immutable.
name
Name of the place.
Declaration
Swift
var name : String ? { get }
Objective-C
@property ( nonatomic , copy , readonly , nullable ) NSString * name ;
placeID
Place ID of this place.
Declaration
Swift
var placeID : String ? { get }
Objective-C
@property ( nonatomic , copy , readonly , nullable ) NSString * placeID ;
coordinate
Location of the place. The location is not necessarily the center of the Place, or any
particular entry or exit point, but some arbitrarily chosen point within the geographic extent of
the Place.
Declaration
Swift
var coordinate : CLLocationCoordinate2D { get }
Objective-C
@property ( nonatomic , readonly ) CLLocationCoordinate2D coordinate ;
phoneNumber
Phone number of this place, in international format, i.e. including the country code prefixed
with “+”. For example, Google Sydney’s phone number is “+61 2 9374 4000”.
Declaration
Swift
var phoneNumber : String ? { get }
Objective-C
@property ( nonatomic , copy , readonly , nullable ) NSString * phoneNumber ;
formattedAddress
Address of the place as a simple string.
Declaration
Swift
var formattedAddress : String ? { get }
Objective-C
@property ( nonatomic , copy , readonly , nullable ) NSString * formattedAddress ;
rating
Five-star rating for this place based on user reviews.
Ratings range from 1.0 to 5.0. 0.0 means we have no rating for this place (e.g. because not
enough users have reviewed this place).
Declaration
Swift
var rating : Float { get }
Objective-C
@property ( nonatomic , readonly ) float rating ;
reviews
An array of GMSPlaceReview objects representing the user reviews of the place.
Declaration
Swift
var reviews : [ GMSPlaceReview ]? { get }
Objective-C
@property ( nonatomic , copy , readonly , nullable ) NSArray < GMSPlaceReview *> * reviews ;
priceLevel
Price level for this place, as integers from 0 to 4.
e.g. A value of 4 means this place is “$$$$” (expensive). A value of 0 means free (such as a
museum with free admission).
Declaration
Swift
var priceLevel : GMSPlacesPriceLevel { get }
Objective-C
@property ( nonatomic , readonly ) GMSPlacesPriceLevel priceLevel ;
types
at https://developers.google.com/maps/documentation/places/ios-sdk/place-types for Places (New)
and https://developers.google.com/maps/documentation/places/ios-sdk/supported_types for Places.
Declaration
Swift
var types : [ String ]? { get }
Objective-C
@property ( nonatomic , copy , readonly , nullable ) NSArray < NSString *> * types ;
website
Website for this place.
Declaration
Swift
var website : URL ? { get }
Objective-C
@property ( nonatomic , copy , readonly , nullable ) NSURL * website ;
attributions
The data provider attribution string for this place.
These are provided as a NSAttributedString, which may contain hyperlinks to the website of each
provider.
In general, these must be shown to the user if data from this GMSPlace is shown, as described
in the Places SDK Terms of Service.
Declaration
Swift
@NSCopying var attributions : NSAttributedString ? { get }
Objective-C
@property ( nonatomic , copy , readonly , nullable ) NSAttributedString * attributions ;
viewportInfo
The recommended viewport for this place. May be nil if the size of the place is not known.
This returns a viewport of a size that is suitable for displaying this place. For example, a
GMSPlace object representing a store may have a relatively small viewport, while a GMSPlace
object representing a country may have a very large viewport.
Declaration
Swift
var viewportInfo : GMSPlaceViewportInfo ? { get }
Objective-C
@property ( nonatomic , strong , readonly , nullable ) GMSPlaceViewportInfo * viewportInfo ;
addressComponents
An array of GMSAddressComponent objects representing the components in the place’s address.
These components are provided for the purpose of extracting structured information about the
place’s address: for example, finding the city that a place is in.
These components should not be used for address formatting. If a formatted address is required,
use the formattedAddress property, which provides a localized formatted address.
Declaration
Swift
var addressComponents : [ GMSAddressComponent ]? { get }
Objective-C
@property ( nonatomic , copy , readonly , nullable ) NSArray < GMSAddressComponent *> * addressComponents ;
plusCode
The Plus code representation of location for this place.
Declaration
Swift
var plusCode : GMSPlusCode ? { get }
Objective-C
@property ( nonatomic , strong , readonly , nullable ) GMSPlusCode * plusCode ;
openingHours
The normal business Opening Hours information for this place. Includes open status, periods and
weekday text when available.
Declaration
Swift
var openingHours : GMSOpeningHours ? { get }
Objective-C
@property ( nonatomic , strong , readonly , nullable ) GMSOpeningHours * openingHours ;
currentOpeningHours
Returns this place’s hours of operation over the next seven days.
The time period starts at midnight on the date of the request and ends at 11:59 pm
six days later.
GMSPlaceSpecialDay entries on GMSOpeningHours will only be present for GMSPlace
currentOpeningHours and GMSPlace secondaryOpeningHours .
Declaration
Swift
var currentOpeningHours : GMSOpeningHours ? { get }
Objective-C
@property ( nonatomic , strong , readonly , nullable ) GMSOpeningHours * currentOpeningHours ;
secondaryOpeningHours
Returns an array of this place’s secondary hour(s) of operation over the next seven days.
Secondary hours are different from a business’s main hours. For example, a
restaurant can specify drive through hours or delivery hours as its secondary hours.
See GMSPlaceHoursType for the different types of secondary hours.
GMSPlaceSpecialDay entries on GMSOpeningHours will only be present for GMSPlace
currentOpeningHours and GMSPlace secondaryOpeningHours .
Declaration
Swift
var secondaryOpeningHours : [ GMSOpeningHours ]? { get }
Objective-C
@property ( nonatomic , copy , readonly , nullable ) NSArray < GMSOpeningHours *> * secondaryOpeningHours ;
userRatingsTotal
Represents how many reviews make up this place’s rating.
Declaration
Swift
var userRatingsTotal : UInt { get }
Objective-C
@property ( nonatomic , readonly ) NSUInteger userRatingsTotal ;
photos
An array of GMSPlacePhotoMetadata objects representing the photos of the place.
Declaration
Swift
var photos : [ GMSPlacePhotoMetadata ]? { get }
Objective-C
@property ( nonatomic , copy , readonly , nullable ) NSArray < GMSPlacePhotoMetadata *> * photos ;
UTCOffsetMinutes
The timezone UTC offset of the place in minutes.
Declaration
Swift
var utcOffsetMinutes : NSNumber ? { get }
Objective-C
@property ( nonatomic , readonly , nullable ) NSNumber * UTCOffsetMinutes ;
businessStatus
The GMSPlaceBusinessStatus of the place.
Declaration
Swift
var businessStatus : GMSPlacesBusinessStatus { get }
Objective-C
@property ( nonatomic , readonly ) GMSPlacesBusinessStatus businessStatus ;
editorialSummary
Returns this place’s editorial summary.
Declaration
Swift
var editorialSummary : String ? { get }
Objective-C
@property ( nonatomic , copy , readonly , nullable ) NSString * editorialSummary ;
evChargeOptions
Returns this place’s EV charging options.
Declaration
Swift
var evChargeOptions : GMSPlaceEVChargeOptions ? { get }
Objective-C
@property ( nonatomic , readonly , nullable ) GMSPlaceEVChargeOptions * evChargeOptions ;
parkingOptions
Returns this place’s parking options.
Declaration
Swift
var parkingOptions : GMSPlaceParkingOptions ? { get }
Objective-C
@property ( nonatomic , readonly , nullable ) GMSPlaceParkingOptions * parkingOptions ;
evChargeAmenitySummary
Returns this place’s EV charge amenity summary.
Declaration
Swift
var evChargeAmenitySummary : GMSPlaceEVChargeAmenitySummary ? { get }
Objective-C
@property ( nonatomic , readonly , nullable ) GMSPlaceEVChargeAmenitySummary * evChargeAmenitySummary ;
generativeSummary
Returns this place’s generative summary.
Declaration
Swift
var generativeSummary : GMSPlaceGenerativeSummary ? { get }
Objective-C
@property ( nonatomic , readonly , nullable ) GMSPlaceGenerativeSummary * generativeSummary ;
neighborhoodSummary
Returns this place’s neighborhood summary.
Declaration
Swift
var neighborhoodSummary : GMSPlaceNeighborhoodSummary ? { get }
Objective-C
@property ( nonatomic , readonly , nullable ) GMSPlaceNeighborhoodSummary * neighborhoodSummary ;
reviewSummary
Returns this place’s review summary.
Declaration
Swift
var reviewSummary : GMSPlaceReviewSummary ? { get }
Objective-C
@property ( nonatomic , readonly , nullable ) GMSPlaceReviewSummary * reviewSummary ;
consumerAlert
Returns this place’s consumer alert.
Declaration
Swift
@NSCopying var consumerAlert : GMSPlaceConsumerAlert ? { get }
Objective-C
@property ( nonatomic , copy , readonly , nullable ) GMSPlaceConsumerAlert * consumerAlert ;
accessibilityOptions
Returns this place’s accessibility options.
Declaration
Swift
var accessibilityOptions : GMSPlaceAccessibilityOptions ? { get }
Objective-C
@property ( nonatomic , readonly , nullable ) GMSPlaceAccessibilityOptions * accessibilityOptions ;
fuelOptions
Returns this place’s fuel options.
Declaration
Swift
var fuelOptions : GMSPlaceFuelOptions ? { get }
Objective-C
@property ( nonatomic , readonly , nullable ) GMSPlaceFuelOptions * fuelOptions ;
paymentOptions
Returns this place’s payment options.
Declaration
Swift
var paymentOptions : GMSPlacePaymentOptions ? { get }
Objective-C
@property ( nonatomic , readonly , nullable ) GMSPlacePaymentOptions * paymentOptions ;
googleMapsLinks
Returns the links to trigger different Google Maps actions.
Google Maps links information is only available through the Places API (New). Enable
your API key for the Places API (New) in the Google Cloud Console to access the data.
Declaration
Swift
var googleMapsLinks : GMSPlaceGoogleMapsLinks ? { get }
Objective-C
@property ( nonatomic , readonly , nullable ) GMSPlaceGoogleMapsLinks * googleMapsLinks ;
containingPlaces
List of parent places in which the current place is located.
Declaration
Swift
var containingPlaces : [ GMSPlaceContainingPlace ]? { get }
Objective-C
@property ( nonatomic , readonly , nullable ) NSArray < GMSPlaceContainingPlace *> * containingPlaces ;
addressDescriptor
The address descriptor of the place.
*
Address descriptors include additional information that help describe a location
using landmarks and areas. See address descriptor regional coverage in
https://developers.google.com/maps/documentation/geocoding/address-descriptors/coverage
Declaration
Swift
var addressDescriptor : GMSPlaceAddressDescriptor ? { get }
Objective-C
@property ( nonatomic , readonly , nullable ) GMSPlaceAddressDescriptor * addressDescriptor ;
priceRange
The price range associated with a Place.
Declaration
Swift
var priceRange : GMSPlacePriceRange ? { get }
Objective-C
@property ( nonatomic , readonly , nullable ) GMSPlacePriceRange * priceRange ;
timeZone
The time zone associated with a Place.
Declaration
Swift
var timeZone : TimeZone ? { get }
Objective-C
@property ( nonatomic , readonly , nullable ) NSTimeZone * timeZone ;
postalAddress
The address in postal address format.
Declaration
Swift
var postalAddress : GMSPlacePostalAddress ? { get }
Objective-C
@property ( nonatomic , readonly , nullable ) GMSPlacePostalAddress * postalAddress ;
-init
Unavailable
Default init is not available.
Declaration
Objective-C
- ( nonnull instancetype ) init ;
-isOpenAtDate:
Deprecated
(This method is deprecated in favor of GMSPlacesClient#isOpenAtDate:place:date:callback and will be removed in a future release.
Calculates if a place is open based on openingHours , UTCOffsetMinutes , and date .
Declaration
Swift
func isOpen ( at date : Date ) -> GMSPlaceOpenStatus
Objective-C
- ( GMSPlaceOpenStatus ) isOpenAtDate :( nonnull NSDate * ) date ;
Parameters
date
A reference point in time used to determine if the place is open.
Return Value
GMSPlaceOpenStatusOpen if the place is open, GMSPlaceOpenStatusClosed if the place is
closed, and GMSPlaceOpenStatusUnknown if the open status is unknown.
-isOpen
Deprecated
(This method is deprecated in favor of GMSPlacesClient#isOpen:place:callback and will be removed in a future release.
Calculates if a place is open based on openingHours , UTCOffsetMinutes , and current date
and time obtained from [NSDate date] .
Declaration
Swift
func isOpen () -> GMSPlaceOpenStatus
Objective-C
- ( GMSPlaceOpenStatus ) isOpen ;
Return Value
GMSPlaceOpenStatusOpen if the place is open, GMSPlaceOpenStatusClosed if the place is
closed, and GMSPlaceOpenStatusUnknown if the open status is unknown.
iconBackgroundColor
Background color of the icon according to Place type, to color the view behind the icon.
Declaration
Swift
var iconBackgroundColor : UIColor ? { get }
Objective-C
@property ( nonatomic , readonly , nullable ) UIColor * iconBackgroundColor ;
iconImageURL
The URL according to Place type, which you can use to retrieve the NSData of the Place icon.
NOTES: URL link does not expire and the image size aspect ratio may be different depending on
type.
Declaration
Swift
var iconImageURL : URL ? { get }
Objective-C
@property ( nonatomic , readonly , nullable ) NSURL * iconImageURL ;
takeout
Place Attribute for takeout experience.
Declaration
Swift
var takeout : GMSBooleanPlaceAttribute { get }
Objective-C
@property ( nonatomic , readonly ) GMSBooleanPlaceAttribute takeout ;
delivery
Place Attribute for delivery services.
Declaration
Swift
var delivery : GMSBooleanPlaceAttribute { get }
Objective-C
@property ( nonatomic , readonly ) GMSBooleanPlaceAttribute delivery ;
dineIn
Place Attribute for dine in experience.
Declaration
Swift
var dineIn : GMSBooleanPlaceAttribute { get }
Objective-C
@property ( nonatomic , readonly ) GMSBooleanPlaceAttribute dineIn ;
curbsidePickup
Place Attribute for curbside pickup services.
Declaration
Swift
var curbsidePickup : GMSBooleanPlaceAttribute { get }
Objective-C
@property ( nonatomic , readonly ) GMSBooleanPlaceAttribute curbsidePickup ;
reservable
Place Attribute indicating place is popular with tourists.
Declaration
Swift
var reservable : GMSBooleanPlaceAttribute { get }
Objective-C
@property ( nonatomic , readonly ) GMSBooleanPlaceAttribute reservable ;
servesBreakfast
Place Attribute indicating place serves breakfast.
Declaration
Swift
var servesBreakfast : GMSBooleanPlaceAttribute { get }
Objective-C
@property ( nonatomic , readonly ) GMSBooleanPlaceAttribute servesBreakfast ;
servesLunch
Place Attribute indicating place serves lunch.
Declaration
Swift
var servesLunch : GMSBooleanPlaceAttribute { get }
Objective-C
@property ( nonatomic , readonly ) GMSBooleanPlaceAttribute servesLunch ;
servesDinner
Place Attribute indicating place serves dinner.
Declaration
Swift
var servesDinner : GMSBooleanPlaceAttribute { get }
Objective-C
@property ( nonatomic , readonly ) GMSBooleanPlaceAttribute servesDinner ;
servesBeer
Place Attribute indicating place serves beer.
Declaration
Swift
var servesBeer : GMSBooleanPlaceAttribute { get }
Objective-C
@property ( nonatomic , readonly ) GMSBooleanPlaceAttribute servesBeer ;
servesWine
Place Attribute indicating place serves wine.
Declaration
Swift
var servesWine : GMSBooleanPlaceAttribute { get }
Objective-C
@property ( nonatomic , readonly ) GMSBooleanPlaceAttribute servesWine ;
servesBrunch
Place Attribute indicating place serves brunch.
Declaration
Swift
var servesBrunch : GMSBooleanPlaceAttribute { get }
Objective-C
@property ( nonatomic , readonly ) GMSBooleanPlaceAttribute servesBrunch ;
servesVegetarianFood
Place Attribute indicating place serves vegetarian food.
Declaration
Swift
var servesVegetarianFood : GMSBooleanPlaceAttribute { get }
Objective-C
@property ( nonatomic , readonly ) GMSBooleanPlaceAttribute servesVegetarianFood ;
wheelchairAccessibleEntrance
Place Attribute indicating place is wheelchair accessible at the entrance.
Declaration
Swift
var wheelchairAccessibleEntrance : GMSBooleanPlaceAttribute { get }
Objective-C
@property ( nonatomic , readonly ) GMSBooleanPlaceAttribute wheelchairAccessibleEntrance ;
pureServiceAreaBusiness
Place Attribute indicating place is a pure service area business.
A pure service area business is a business that visits or delivers to customers directly,
but does not serve customers at their business address. For example,
businesses like cleaning services or plumbers. Those businesses may not
have a physical address or location on Google Maps. Places will not
return fields including location , plusCode , and other location related
fields for these businesses.
Declaration
Swift
var pureServiceAreaBusiness : GMSBooleanPlaceAttribute { get }
Objective-C
@property ( nonatomic , readonly ) GMSBooleanPlaceAttribute pureServiceAreaBusiness ;
outdoorSeating
Place Attribute indicating place has outdoor seating services.
Declaration
Swift
var outdoorSeating : GMSBooleanPlaceAttribute { get }
Objective-C
@property ( nonatomic , readonly ) GMSBooleanPlaceAttribute outdoorSeating ;
liveMusic
Place Attribute indicating place has live music.
Declaration
Swift
var liveMusic : GMSBooleanPlaceAttribute { get }
Objective-C
@property ( nonatomic , readonly ) GMSBooleanPlaceAttribute liveMusic ;
menuForChildren
Place Attribute indicating place has menu for children.
Declaration
Swift
var menuForChildren : GMSBooleanPlaceAttribute { get }
Objective-C
@property ( nonatomic , readonly ) GMSBooleanPlaceAttribute menuForChildren ;
servesCocktails
Place Attribute indicating place serves cocktails.
Declaration
Swift
var servesCocktails : GMSBooleanPlaceAttribute { get }
Objective-C
@property ( nonatomic , readonly ) GMSBooleanPlaceAttribute servesCocktails ;
servesDessert
Place Attribute indicating place serves dessert.
Declaration
Swift
var servesDessert : GMSBooleanPlaceAttribute { get }
Objective-C
@property ( nonatomic , readonly ) GMSBooleanPlaceAttribute servesDessert ;
servesCoffee
Place Attribute indicating place serves coffee.
Declaration
Swift
var servesCoffee : GMSBooleanPlaceAttribute { get }
Objective-C
@property ( nonatomic , readonly ) GMSBooleanPlaceAttribute servesCoffee ;
goodForChildren
Place Attribute indicating place is good for children.
Declaration
Swift
var goodForChildren : GMSBooleanPlaceAttribute { get }
Objective-C
@property ( nonatomic , readonly ) GMSBooleanPlaceAttribute goodForChildren ;
allowsDogs
Place Attribute indicating place allows dogs.
Declaration
Swift
var allowsDogs : GMSBooleanPlaceAttribute { get }
Objective-C
@property ( nonatomic , readonly ) GMSBooleanPlaceAttribute allowsDogs ;
restroom
Place Attribute indicating place has restroom.
Declaration
Swift
var restroom : GMSBooleanPlaceAttribute { get }
Objective-C
@property ( nonatomic , readonly ) GMSBooleanPlaceAttribute restroom ;
goodForGroups
Place Attribute indicating place is good for groups.
Declaration
Swift
var goodForGroups : GMSBooleanPlaceAttribute { get }
Objective-C
@property ( nonatomic , readonly ) GMSBooleanPlaceAttribute goodForGroups ;
goodForWatchingSports
Place Attribute indicating place is good for watching sports.
Declaration
Swift
var goodForWatchingSports : GMSBooleanPlaceAttribute { get }
Objective-C
@property ( nonatomic , readonly ) GMSBooleanPlaceAttribute goodForWatchingSports ;
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
