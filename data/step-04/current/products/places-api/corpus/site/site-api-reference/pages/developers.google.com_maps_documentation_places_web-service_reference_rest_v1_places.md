---
title: "REST Resource: places \_|\_ Places API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/web-service/reference/rest
source_metadata:
  url: https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places
  title: "REST Resource: places \_|\_ Places API \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Google Maps Platform
Documentation
Web Services
Places API
Reference
Send feedback
REST Resource: places
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Place resource in Google Places API provides comprehensive data about real-world locations, including identification, contact details, location coordinates, user feedback, operational status, visuals, and descriptive information.
It utilizes various data structures such as LocalizedText, AddressComponent, PlusCode, LatLng, Viewport, and more to represent specific attributes.
Developers can leverage the Place resource to display place details, enable user interactions, and build location-aware applications using methods like autocomplete, get, searchNearby, and searchText.
Additional attributes offer specific insights into payment options, parking, sub-locations, fuel and EV charging, contextual information, links, pricing, timezone, service options, food and drinks, ambiance, and accessibility.
The resource incorporates AI-generated summaries, references, and contextual details for a more enriched understanding of the place and its surroundings.
Resource: Place
JSON representation
LocalizedText
JSON representation
PostalAddress
JSON representation
AddressComponent
JSON representation
PlusCode
JSON representation
LatLng
JSON representation
Viewport
JSON representation
Review
JSON representation
AuthorAttribution
JSON representation
Date
JSON representation
OpeningHours
JSON representation
Period
JSON representation
Point
JSON representation
SecondaryHoursType
SpecialDay
JSON representation
TimeZone
JSON representation
Photo
JSON representation
BusinessStatus
PriceLevel
Attribution
JSON representation
PaymentOptions
JSON representation
ParkingOptions
JSON representation
SubDestination
JSON representation
AccessibilityOptions
JSON representation
FuelOptions
JSON representation
FuelPrice
JSON representation
FuelType
Money
JSON representation
EVChargeOptions
JSON representation
ConnectorAggregation
JSON representation
EVConnectorType
GenerativeSummary
JSON representation
ContainingPlace
JSON representation
AddressDescriptor
JSON representation
Landmark
JSON representation
SpatialRelationship
Area
JSON representation
Containment
GoogleMapsLinks
JSON representation
PriceRange
JSON representation
ReviewSummary
JSON representation
EvChargeAmenitySummary
JSON representation
ContentBlock
JSON representation
NeighborhoodSummary
JSON representation
ConsumerAlert
JSON representation
Details
JSON representation
Link
JSON representation
Methods
Resource: Place
All the information representing a Place.
JSON representation
{
"name" : string ,
"id" : string ,
"displayName" : {
object ( LocalizedText )
} ,
"types" : [
string
] ,
"primaryType" : string ,
"primaryTypeDisplayName" : {
object ( LocalizedText )
} ,
"googleMapsTypeLabel" : {
object ( LocalizedText )
} ,
"nationalPhoneNumber" : string ,
"internationalPhoneNumber" : string ,
"formattedAddress" : string ,
"shortFormattedAddress" : string ,
"postalAddress" : {
object ( PostalAddress )
} ,
"addressComponents" : [
{
object ( AddressComponent )
}
] ,
"plusCode" : {
object ( PlusCode )
} ,
"location" : {
object ( LatLng )
} ,
"viewport" : {
object ( Viewport )
} ,
"rating" : number ,
"googleMapsUri" : string ,
"websiteUri" : string ,
"reviews" : [
{
object ( Review )
}
] ,
"regularOpeningHours" : {
object ( OpeningHours )
} ,
"timeZone" : {
object ( TimeZone )
} ,
"photos" : [
{
object ( Photo )
}
] ,
"adrFormatAddress" : string ,
"businessStatus" : enum ( BusinessStatus ) ,
"openingDate" : {
object ( Date )
} ,
"priceLevel" : enum ( PriceLevel ) ,
"attributions" : [
{
object ( Attribution )
}
] ,
"iconMaskBaseUri" : string ,
"iconBackgroundColor" : string ,
"currentOpeningHours" : {
object ( OpeningHours )
} ,
"currentSecondaryOpeningHours" : [
{
object ( OpeningHours )
}
] ,
"regularSecondaryOpeningHours" : [
{
object ( OpeningHours )
}
] ,
"editorialSummary" : {
object ( LocalizedText )
} ,
"paymentOptions" : {
object ( PaymentOptions )
} ,
"parkingOptions" : {
object ( ParkingOptions )
} ,
"subDestinations" : [
{
object ( SubDestination )
}
] ,
"fuelOptions" : {
object ( FuelOptions )
} ,
"evChargeOptions" : {
object ( EVChargeOptions )
} ,
"generativeSummary" : {
object ( GenerativeSummary )
} ,
"containingPlaces" : [
{
object ( ContainingPlace )
}
] ,
"addressDescriptor" : {
object ( AddressDescriptor )
} ,
"googleMapsLinks" : {
object ( GoogleMapsLinks )
} ,
"priceRange" : {
object ( PriceRange )
} ,
"reviewSummary" : {
object ( ReviewSummary )
} ,
"evChargeAmenitySummary" : {
object ( EvChargeAmenitySummary )
} ,
"neighborhoodSummary" : {
object ( NeighborhoodSummary )
} ,
"consumerAlert" : {
object ( ConsumerAlert )
} ,
"movedPlace" : string ,
"movedPlaceId" : string ,
"utcOffsetMinutes" : integer ,
"userRatingCount" : integer ,
"takeout" : boolean ,
"delivery" : boolean ,
"dineIn" : boolean ,
"curbsidePickup" : boolean ,
"reservable" : boolean ,
"servesBreakfast" : boolean ,
"servesLunch" : boolean ,
"servesDinner" : boolean ,
"servesBeer" : boolean ,
"servesWine" : boolean ,
"servesBrunch" : boolean ,
"servesVegetarianFood" : boolean ,
"outdoorSeating" : boolean ,
"liveMusic" : boolean ,
"menuForChildren" : boolean ,
"servesCocktails" : boolean ,
"servesDessert" : boolean ,
"servesCoffee" : boolean ,
"goodForChildren" : boolean ,
"allowsDogs" : boolean ,
"restroom" : boolean ,
"goodForGroups" : boolean ,
"goodForWatchingSports" : boolean ,
"accessibilityOptions" : {
object ( AccessibilityOptions )
} ,
"pureServiceAreaBusiness" : boolean
}
Fields
name
string
This Place's resource name, in places/{placeId} format. Can be used to look up the Place.
id
string
The unique identifier of a place.
displayName
object ( LocalizedText )
The localized name of the place, suitable as a short human-readable description. For example, "Google Sydney", "Starbucks", "Pyrmont", etc.
types[]
string
A set of type tags for this result. For example, "political" and "locality". For the complete list of possible values, see Table A and Table B at https://developers.google.com/maps/documentation/places/web-service/place-types
primaryType
string
The primary type of the given result. This type must be one of the Places API supported types. For example, "restaurant", "cafe", "airport", etc. A place can only have a single primary type. For the complete list of possible values, see Table A and Table B at https://developers.google.com/maps/documentation/places/web-service/place-types . The primary type may be missing if the place's primary type is not a supported type. When a primary type is present, it is always one of the types in the types field.
primaryTypeDisplayName
object ( LocalizedText )
The display name of the primary type, localized to the request language if applicable. For the complete list of possible values, see Table A and Table B at https://developers.google.com/maps/documentation/places/web-service/place-types . The primary type may be missing if the place's primary type is not a supported type.
googleMapsTypeLabel
object ( LocalizedText )
The type label of the place on Google Maps, localized to the request language if applicable, for example, "Restaurant", "Cafe", "Airport", etc. The type label may be different from the primary type display name and may not be a supported type in Places API Place Types table .
nationalPhoneNumber
string
A human-readable phone number for the place, in national format.
internationalPhoneNumber
string
A human-readable phone number for the place, in international format.
formattedAddress
string
A full, human-readable address for this place.
shortFormattedAddress
string
A short, human-readable address for this place.
postalAddress
object ( PostalAddress )
The address in postal address format.
addressComponents[]
object ( AddressComponent )
Repeated components for each locality level. Note the following facts about the addressComponents[] array: - The array of address components may contain more components than the formattedAddress. - The array does not necessarily include all the political entities that contain an address, apart from those included in the formattedAddress. To retrieve all the political entities that contain a specific address, you should use reverse geocoding, passing the latitude/longitude of the address as a parameter to the request. - The format of the response is not guaranteed to remain the same between requests. In particular, the number of addressComponents varies based on the address requested and can change over time for the same address. A component can change position in the array. The type of the component can change. A particular component may be missing in a later response.
plusCode
object ( PlusCode )
Plus code of the place location lat/long.
location
object ( LatLng )
The position of this place.
viewport
object ( Viewport )
A viewport suitable for displaying the place on an average-sized map. This viewport should not be used as the physical boundary or the service area of the business.
rating
number
A rating between 1.0 and 5.0, based on user reviews of this place.
googleMapsUri
string
A URL providing more information about this place.
websiteUri
string
The authoritative website for this place, e.g. a business' homepage. Note that for places that are part of a chain (e.g. an IKEA store), this will usually be the website for the individual store, not the overall chain.
reviews[]
object ( Review )
List of reviews about this place, sorted by relevance. A maximum of 5 reviews can be returned.
regularOpeningHours
object ( OpeningHours )
The regular hours of operation. Note that if a place is always open (24 hours), the close field will not be set. Clients can rely on always open (24 hours) being represented as an open period containing day with value 0 , hour with value 0 , and minute with value 0 .
timeZone
object ( TimeZone )
IANA Time Zone Database time zone. For example "America/New_York".
photos[]
object ( Photo )
Information (including references) about photos of this place. A maximum of 10 photos can be returned.
adrFormatAddress
string
The place's address in adr microformat: http://microformats.org/wiki/adr .
businessStatus
enum ( BusinessStatus )
The business status for the place.
openingDate
object ( Date )
The date this place will open in the future. This field is only populated if the business status is FUTURE_OPENING.
priceLevel
enum ( PriceLevel )
Price level of the place.
attributions[]
object ( Attribution )
A set of data provider that must be shown with this result.
iconMaskBaseUri
string
A truncated URL to an icon mask. User can access different icon type by appending type suffix to the end (eg, ".svg" or ".png").
iconBackgroundColor
string
Background color for icon_mask in hex format, e.g. #909CE1.
currentOpeningHours
object ( OpeningHours )
The hours of operation for the next seven days (including today). The time period starts at midnight on the date of the request and ends at 11:59 pm six days later. This field includes the specialDays subfield of all hours, set for dates that have exceptional hours.
currentSecondaryOpeningHours[]
object ( OpeningHours )
Contains an array of entries for the next seven days including information about secondary hours of a business. Secondary hours are different from a business's main hours. For example, a restaurant can specify drive through hours or delivery hours as its secondary hours. This field populates the type subfield, which draws from a predefined list of opening hours types (such as DRIVE_THROUGH, PICKUP, or TAKEOUT) based on the types of the place. This field includes the specialDays subfield of all hours, set for dates that have exceptional hours.
regularSecondaryOpeningHours[]
object ( OpeningHours )
Contains an array of entries for information about regular secondary hours of a business. Secondary hours are different from a business's main hours. For example, a restaurant can specify drive through hours or delivery hours as its secondary hours. This field populates the type subfield, which draws from a predefined list of opening hours types (such as DRIVE_THROUGH, PICKUP, or TAKEOUT) based on the types of the place.
editorialSummary
object ( LocalizedText )
Contains a summary of the place. A summary is comprised of a textual overview, and also includes the language code for these if applicable. Summary text must be presented as-is and can not be modified or altered.
paymentOptions
object ( PaymentOptions )
Payment options the place accepts. If a payment option data is not available, the payment option field will be unset.
parkingOptions
object ( ParkingOptions )
Options of parking provided by the place.
subDestinations[]
object ( SubDestination )
A list of sub-destinations related to the place.
fuelOptions
object ( FuelOptions )
The most recent information about fuel options in a gas station. This information is updated regularly.
evChargeOptions
object ( EVChargeOptions )
Information of ev charging options.
generativeSummary
object ( GenerativeSummary )
AI-generated summary of the place.
containingPlaces[]
object ( ContainingPlace )
List of places in which the current place is located.
addressDescriptor
object ( AddressDescriptor )
The address descriptor of the place. Address descriptors include additional information that help describe a location using landmarks and areas. See address descriptor regional coverage in https://developers.google.com/maps/documentation/geocoding/address-descriptors/coverage .
googleMapsLinks
object ( GoogleMapsLinks )
Links to trigger different Google Maps actions.
priceRange
object ( PriceRange )
The price range associated with a Place.
reviewSummary
object ( ReviewSummary )
AI-generated summary of the place using user reviews.
evChargeAmenitySummary
object ( EvChargeAmenitySummary )
The summary of amenities near the EV charging station.
neighborhoodSummary
object ( NeighborhoodSummary )
A summary of points of interest near the place.
consumerAlert
object ( ConsumerAlert )
The consumer alert message for the place when we detect suspicious review activity on a business or a business violates our policies.
movedPlace
string
If this Place is permanently closed and has moved to a new Place, this field contains the new Place's resource name, in places/{placeId} format. If this Place moved multiple times, this field will represent the first moved place. This field will not be populated if this Place has not moved.
movedPlaceId
string
If this Place is permanently closed and has moved to a new Place, this field contains the new Place's place ID. If this Place moved multiple times, this field will represent the first moved Place. This field will not be populated if this Place has not moved.
utcOffsetMinutes
integer
Number of minutes this place's timezone is currently offset from UTC. This is expressed in minutes to support timezones that are offset by fractions of an hour, e.g. X hours and 15 minutes.
userRatingCount
integer
The total number of reviews (with or without text) for this place.
takeout
boolean
Specifies if the business supports takeout.
delivery
boolean
Specifies if the business supports delivery.
dineIn
boolean
Specifies if the business supports indoor or outdoor seating options.
curbsidePickup
boolean
Specifies if the business supports curbside pickup.
reservable
boolean
Specifies if the place supports reservations.
servesBreakfast
boolean
Specifies if the place serves breakfast.
servesLunch
boolean
Specifies if the place serves lunch.
servesDinner
boolean
Specifies if the place serves dinner.
servesBeer
boolean
Specifies if the place serves beer.
servesWine
boolean
Specifies if the place serves wine.
servesBrunch
boolean
Specifies if the place serves brunch.
servesVegetarianFood
boolean
Specifies if the place serves vegetarian food.
outdoorSeating
boolean
Place provides outdoor seating.
liveMusic
boolean
Place provides live music.
menuForChildren
boolean
Place has a children's menu.
servesCocktails
boolean
Place serves cocktails.
servesDessert
boolean
Place serves dessert.
servesCoffee
boolean
Place serves coffee.
goodForChildren
boolean
Place is good for children.
allowsDogs
boolean
Place allows dogs.
restroom
boolean
Place has restroom.
goodForGroups
boolean
Place accommodates groups.
goodForWatchingSports
boolean
Place is suitable for watching sports.
accessibilityOptions
object ( AccessibilityOptions )
Information about the accessibility options a place offers.
pureServiceAreaBusiness
boolean
Indicates whether the place is a pure service area business. Pure service area business is a business that visits or delivers to customers directly but does not serve customers at their business address. For example, businesses like cleaning services or plumbers. Those businesses may not have a physical address or location on Google Maps.
LocalizedText
Localized variant of a text in a particular language.
JSON representation
{
"text" : string ,
"languageCode" : string
}
Fields
text
string
Localized string in the language corresponding to languageCode below.
languageCode
string
The text's BCP-47 language code, such as "en-US" or "sr-Latn".
For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier .
PostalAddress
Represents a postal address, such as for postal delivery or payments addresses. With a postal address, a postal service can deliver items to a premise, P.O. box, or similar. A postal address is not intended to model geographical locations like roads, towns, or mountains.
In typical usage, an address would be created by user input or from importing existing data, depending on the type of process.
Advice on address input or editing:
Use an internationalization-ready address widget such as https://github.com/google/libaddressinput .
Users should not be presented with UI elements for input or editing of fields outside countries where that field is used.
For more guidance on how to use this schema, see: https://support.google.com/business/answer/6397478 .
JSON representation
{
"revision" : integer ,
"regionCode" : string ,
"languageCode" : string ,
"postalCode" : string ,
"sortingCode" : string ,
"administrativeArea" : string ,
"locality" : string ,
"sublocality" : string ,
"addressLines" : [
string
] ,
"recipients" : [
string
] ,
"organization" : string
}
Fields
revision
integer
The schema revision of the PostalAddress . This must be set to 0, which is the latest revision.
All new revisions must be backward compatible with old revisions.
regionCode
string
Required. CLDR region code of the country/region of the address. This is never inferred and it is up to the user to ensure the value is correct. See https://cldr.unicode.org/ and https://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland.
languageCode
string
Optional. BCP-47 language code of the contents of this address (if known). This is often the UI language of the input form or is expected to match one of the languages used in the address' country/region, or their transliterated equivalents. This can affect formatting in certain countries, but is not critical to the correctness of the data and will never affect any validation or other non-formatting related operations.
If this value is not known, it should be omitted (rather than specifying a possibly incorrect default).
Examples: "zh-Hant", "ja", "ja-Latn", "en".
postalCode
string
Optional. Postal code of the address. Not all countries use or require postal codes to be present, but where they are used, they may trigger additional validation with other parts of the address (for example, state or zip code validation in the United States).
sortingCode
string
Optional. Additional, country-specific, sorting code. This is not used in most regions. Where it is used, the value is either a string like "CEDEX", optionally followed by a number (for example, "CEDEX 7"), or just a number alone, representing the "sector code" (Jamaica), "delivery area indicator" (Malawi) or "post office indicator" (Côte d'Ivoire).
administrativeArea
string
Optional. Highest administrative subdivision which is used for postal addresses of a country or region. For example, this can be a state, a province, an oblast, or a prefecture. For Spain, this is the province and not the autonomous community (for example, "Barcelona" and not "Catalonia"). Many countries don't use an administrative area in postal addresses. For example, in Switzerland, this should be left unpopulated.
locality
string
Optional. Generally refers to the city or town portion of the address. Examples: US city, IT comune, UK post town. In regions of the world where localities are not well defined or do not fit into this structure well, leave locality empty and use addressLines .
sublocality
string
Optional. Sublocality of the address. For example, this can be a neighborhood, borough, or district.
addressLines[]
string
Unstructured address lines describing the lower levels of an address.
Because values in addressLines do not have type information and may sometimes contain multiple values in a single field (for example, "Austin, TX"), it is important that the line order is clear. The order of address lines should be "envelope order" for the country or region of the address. In places where this can vary (for example, Japan), address_language is used to make it explicit (for example, "ja" for large-to-small ordering and "ja-Latn" or "en" for small-to-large). In this way, the most specific line of an address can be selected based on the language.
The minimum permitted structural representation of an address consists of a regionCode with all remaining information placed in the addressLines . It would be possible to format such an address very approximately without geocoding, but no semantic reasoning could be made about any of the address components until it was at least partially resolved.
Creating an address only containing a regionCode and addressLines and then geocoding is the recommended way to handle completely unstructured addresses (as opposed to guessing which parts of the address should be localities or administrative areas).
recipients[]
string
Optional. The recipient at the address. This field may, under certain circumstances, contain multiline information. For example, it might contain "care of" information.
organization
string
Optional. The name of the organization at the address.
AddressComponent
The structured components that form the formatted address, if this information is available.
JSON representation
{
"longText" : string ,
"shortText" : string ,
"types" : [
string
] ,
"languageCode" : string
}
Fields
longText
string
The full text description or name of the address component. For example, an address component for the country Australia may have a long_name of "Australia".
shortText
string
An abbreviated textual name for the address component, if available. For example, an address component for the country of Australia may have a short_name of "AU".
types[]
string
An array indicating the type(s) of the address component.
languageCode
string
The language used to format this components, in CLDR notation.
PlusCode
Plus code ( http://plus.codes ) is a location reference with two formats: global code defining a 14mx14m (1/8000th of a degree) or smaller rectangle, and compound code, replacing the prefix with a reference location.
JSON representation
{
"globalCode" : string ,
"compoundCode" : string
}
Fields
globalCode
string
Place's global (full) code, such as "9FWM33GV+HQ", representing an 1/8000 by 1/8000 degree area (~14 by 14 meters).
compoundCode
string
Place's compound code, such as "33GV+HQ, Ramberg, Norway", containing the suffix of the global code and replacing the prefix with a formatted name of a reference entity.
LatLng
An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard . Values must be within normalized ranges.
JSON representation
{
"latitude" : number ,
"longitude" : number
}
Fields
latitude
number
The latitude in degrees. It must be in the range [-90.0, +90.0].
longitude
number
The longitude in degrees. It must be in the range [-180.0, +180.0].
Viewport
A latitude-longitude viewport, represented as two diagonally opposite low and high points. A viewport is considered a closed region, i.e. it includes its boundary. The latitude bounds must range between -90 to 90 degrees inclusive, and the longitude bounds must range between -180 to 180 degrees inclusive. Various cases include:
If low = high , the viewport consists of that single point.
If low.longitude > high.longitude , the longitude range is inverted (the viewport crosses the 180 degree longitude line).
If low.longitude = -180 degrees and high.longitude = 180 degrees, the viewport includes all longitudes.
If low.longitude = 180 degrees and high.longitude = -180 degrees, the longitude range is empty.
If low.latitude > high.latitude , the latitude range is empty.
Both low and high must be populated, and the represented box cannot be empty (as specified by the definitions above). An empty viewport will result in an error.
For example, this viewport fully encloses New York City:
{ "low": { "latitude": 40.477398, "longitude": -74.259087 }, "high": { "latitude": 40.91618, "longitude": -73.70018 } }
JSON representation
{
"low" : {
object ( LatLng )
} ,
"high" : {
object ( LatLng )
}
}
Fields
low
object ( LatLng )
Required. The low point of the viewport.
high
object ( LatLng )
Required. The high point of the viewport.
Review
Information about a review of a place.
JSON representation
{
"name" : string ,
"relativePublishTimeDescription" : string ,
"text" : {
object ( LocalizedText )
} ,
"originalText" : {
object ( LocalizedText )
} ,
"rating" : number ,
"authorAttribution" : {
object ( AuthorAttribution )
} ,
"publishTime" : string ,
"flagContentUri" : string ,
"googleMapsUri" : string ,
"visitDate" : {
object ( Date )
}
}
Fields
name
string
A reference representing this place review which may be used to look up this place review again (also called the API "resource" name: places/{placeId}/reviews/{review} ).
relativePublishTimeDescription
string
A string of formatted recent time, expressing the review time relative to the current time in a form appropriate for the language and country.
text
object ( LocalizedText )
The localized text of the review.
originalText
object ( LocalizedText )
The review text in its original language.
rating
number
A number between 1.0 and 5.0, also called the number of stars.
authorAttribution
object ( AuthorAttribution )
This review's author.
publishTime
string ( Timestamp format)
Timestamp for the review.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
flagContentUri
string
A link where users can flag a problem with the review.
googleMapsUri
string
A link to show the review on Google Maps.
visitDate
object ( Date )
The date when the author visited the place. This is truncated to the year and month of the visit.
AuthorAttribution
Information about the author of the UGC data. Used in Photo , and Review .
JSON representation
{
"displayName" : string ,
"uri" : string ,
"photoUri" : string
}
Fields
displayName
string
Name of the author of the Photo or Review .
uri
string
URI of the author of the Photo or Review .
photoUri
string
Profile photo URI of the author of the Photo or Review .
Date
Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following:
A full date, with non-zero year, month, and day values.
A month and day, with a zero year (for example, an anniversary).
A year on its own, with a zero month and a zero day.
A year and month, with a zero day (for example, a credit card expiration date).
Related types:
google.type.TimeOfDay
google.type.DateTime
google.protobuf.Timestamp
JSON representation
{
"year" : integer ,
"month" : integer ,
"day" : integer
}
Fields
year
integer
Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
month
integer
Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
day
integer
Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
OpeningHours
Information about business hour of the place.
JSON representation
{
"periods" : [
{
object ( Period )
}
] ,
"weekdayDescriptions" : [
string
] ,
"secondaryHoursType" : enum ( SecondaryHoursType ) ,
"specialDays" : [
{
object ( SpecialDay )
}
] ,
"nextOpenTime" : string ,
"nextCloseTime" : string ,
"openNow" : boolean
}
Fields
periods[]
object ( Period )
The periods that this place is open during the week. The periods are in chronological order, in the place-local timezone. An empty (but not absent) value indicates a place that is never open, e.g. because it is closed temporarily for renovations.
The starting day of periods is NOT fixed and should not be assumed to be Sunday. The API determines the start day based on a variety of factors. For example, for a 24/7 business, the first period may begin on the day of the request. For other businesses, it might be the first day of the week that they are open.
NOTE: The ordering of the periods array is independent of the ordering of the weekdayDescriptions array. Do not assume they will begin on the same day.
weekdayDescriptions[]
string
Localized strings describing the opening hours of this place, one string for each day of the week.
NOTE: The order of the days and the start of the week is determined by the locale (language and region). The ordering of the periods array is independent of the ordering of the weekdayDescriptions array. Do not assume they will begin on the same day.
Will be empty if the hours are unknown or could not be converted to localized text. Example: "Sun: 18:00–06:00"
secondaryHoursType
enum ( SecondaryHoursType )
A type string used to identify the type of secondary hours.
specialDays[]
object ( SpecialDay )
Structured information for special days that fall within the period that the returned opening hours cover. Special days are days that could impact the business hours of a place, e.g. Christmas day. Set for currentOpeningHours and currentSecondaryOpeningHours if there are exceptional hours.
nextOpenTime
string ( Timestamp format)
The next time the current opening hours period starts up to 7 days in the future. This field is only populated if the opening hours period is not active at the time of serving the request.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
nextCloseTime
string ( Timestamp format)
The next time the current opening hours period ends up to 7 days in the future. This field is only populated if the opening hours period is active at the time of serving the request.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
openNow
boolean
Whether the opening hours period is currently active. For regular opening hours and current opening hours, this field means whether the place is open. For secondary opening hours and current secondary opening hours, this field means whether the secondary hours of this place is active.
Period
A period the place remains in openNow status.
JSON representation
{
"open" : {
object ( Point )
} ,
"close" : {
object ( Point )
}
}
Fields
open
object ( Point )
The time that the place starts to be open.
close
object ( Point )
The time that the place starts to be closed.
Point
Status changing points.
JSON representation
{
"date" : {
object ( Date )
} ,
"truncated" : boolean ,
"day" : integer ,
"hour" : integer ,
"minute" : integer
}
Fields
date
object ( Date )
Date in the local timezone for the place.
truncated
boolean
Whether or not this endpoint was truncated. Truncation occurs when the real hours are outside the times we are willing to return hours between, so we truncate the hours back to these boundaries. This ensures that at most 24 * 7 hours from midnight of the day of the request are returned.
day
integer
A day of the week, as an integer in the range 0-6. 0 is Sunday, 1 is Monday, etc.
hour
integer
The hour in 24 hour format. Ranges from 0 to 23.
minute
integer
The minute. Ranges from 0 to 59.
SecondaryHoursType
A type used to identify the type of secondary hours.
Enums
SECONDARY_HOURS_TYPE_UNSPECIFIED
Default value when secondary hour type is not specified.
DRIVE_THROUGH
The drive-through hour for banks, restaurants, or pharmacies.
HAPPY_HOUR
The happy hour.
DELIVERY
The delivery hour.
TAKEOUT
The takeout hour.
KITCHEN
The kitchen hour.
BREAKFAST
The breakfast hour.
LUNCH
The lunch hour.
DINNER
The dinner hour.
BRUNCH
The brunch hour.
PICKUP
The pickup hour.
ACCESS
The access hours for storage places.
SENIOR_HOURS
The special hours for seniors.
ONLINE_SERVICE_HOURS
The online service hours.
SpecialDay
Structured information for special days that fall within the period that the returned opening hours cover. Special days are days that could impact the business hours of a place, e.g. Christmas day.
JSON representation
{
"date" : {
object ( Date )
}
}
Fields
date
object ( Date )
The date of this special day.
TimeZone
Represents a time zone from the IANA Time Zone Database .
JSON representation
{
"id" : string ,
"version" : string
}
Fields
id
string
IANA Time Zone Database time zone. For example "America/New_York".
version
string
Optional. IANA Time Zone Database version number. For example "2019a".
Photo
Information about a photo of a place.
JSON representation
{
"name" : string ,
"widthPx" : integer ,
"heightPx" : integer ,
"authorAttributions" : [
{
object ( AuthorAttribution )
}
] ,
"flagContentUri" : string ,
"googleMapsUri" : string
}
Fields
name
string
Identifier. A reference representing this place photo which may be used to look up this place photo again (also called the API "resource" name: places/{placeId}/photos/{photo} ).
widthPx
integer
The maximum available width, in pixels.
heightPx
integer
The maximum available height, in pixels.
authorAttributions[]
object ( AuthorAttribution )
This photo's authors.
flagContentUri
string
A link where users can flag a problem with the photo.
googleMapsUri
string
A link to show the photo on Google Maps.
BusinessStatus
Business status for the place.
Enums
BUSINESS_STATUS_UNSPECIFIED
Default value. This value is unused.
OPERATIONAL
The establishment is operational, not necessarily open now.
CLOSED_TEMPORARILY
The establishment is temporarily closed.
CLOSED_PERMANENTLY
The establishment is permanently closed.
FUTURE_OPENING
The establishment will open in the future.
PriceLevel
Price level of the place.
Enums
PRICE_LEVEL_UNSPECIFIED
Place price level is unspecified or unknown.
PRICE_LEVEL_FREE
Place provides free services.
PRICE_LEVEL_INEXPENSIVE
Place provides inexpensive services.
PRICE_LEVEL_MODERATE
Place provides moderately priced services.
PRICE_LEVEL_EXPENSIVE
Place provides expensive services.
PRICE_LEVEL_VERY_EXPENSIVE
Place provides very expensive services.
Attribution
Information about data providers of this place.
JSON representation
{
"provider" : string ,
"providerUri" : string
}
Fields
provider
string
Name of the Place's data provider.
providerUri
string
URI to the Place's data provider.
PaymentOptions
Payment options the place accepts.
JSON representation
{
"acceptsCreditCards" : boolean ,
"acceptsDebitCards" : boolean ,
"acceptsCashOnly" : boolean ,
"acceptsNfc" : boolean
}
Fields
acceptsCreditCards
boolean
Place accepts credit cards as payment.
acceptsDebitCards
boolean
Place accepts debit cards as payment.
acceptsCashOnly
boolean
Place accepts cash only as payment. Places with this attribute may still accept other payment methods.
acceptsNfc
boolean
Place accepts NFC payments.
ParkingOptions
Information about parking options for the place. A parking lot could support more than one option at the same time.
JSON representation
{
"freeParkingLot" : boolean ,
"paidParkingLot" : boolean ,
"freeStreetParking" : boolean ,
"paidStreetParking" : boolean ,
"valetParking" : boolean ,
"freeGarageParking" : boolean ,
"paidGarageParking" : boolean
}
Fields
freeParkingLot
boolean
Place offers free parking lots.
paidParkingLot
boolean
Place offers paid parking lots.
freeStreetParking
boolean
Place offers free street parking.
paidStreetParking
boolean
Place offers paid street parking.
valetParking
boolean
Place offers valet parking.
freeGarageParking
boolean
Place offers free garage parking.
paidGarageParking
boolean
Place offers paid garage parking.
SubDestination
Sub-destinations are specific places associated with a main place. These provide more specific destinations for users who are searching within a large or complex place, like an airport, national park, university, or stadium. For example, sub-destinations at an airport might include associated terminals and parking lots. Sub-destinations return the place ID and place resource name, which can be used in subsequent Place Details (New) requests to fetch richer details, including the sub-destination's display name and location.
JSON representation
{
"name" : string ,
"id" : string
}
Fields
name
string
The resource name of the sub-destination.
id
string
The place id of the sub-destination.
AccessibilityOptions
Information about the accessibility options a place offers.
JSON representation
{
"wheelchairAccessibleParking" : boolean ,
"wheelchairAccessibleEntrance" : boolean ,
"wheelchairAccessibleRestroom" : boolean ,
"wheelchairAccessibleSeating" : boolean
}
Fields
wheelchairAccessibleParking
boolean
Place offers wheelchair accessible parking.
wheelchairAccessibleEntrance
boolean
Places has wheelchair accessible entrance.
wheelchairAccessibleRestroom
boolean
Place has wheelchair accessible restroom.
wheelchairAccessibleSeating
boolean
Place has wheelchair accessible seating.
FuelOptions
The most recent information about fuel options in a gas station. This information is updated regularly.
JSON representation
{
"fuelPrices" : [
{
object ( FuelPrice )
}
]
}
Fields
fuelPrices[]
object ( FuelPrice )
The last known fuel price for each type of fuel this station has. There is one entry per fuel type this station has. Order is not important.
FuelPrice
Fuel price information for a given type.
JSON representation
{
"type" : enum ( FuelType ) ,
"price" : {
object ( Money )
} ,
"updateTime" : string
}
Fields
type
enum ( FuelType )
The type of fuel.
price
object ( Money )
The price of the fuel.
updateTime
string ( Timestamp format)
The time the fuel price was last updated.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
FuelType
Types of fuel.
Enums
FUEL_TYPE_UNSPECIFIED
Unspecified fuel type.
DIESEL
Diesel fuel.
DIESEL_PLUS
Diesel plus fuel.
REGULAR_UNLEADED
Regular unleaded.
MIDGRADE
Midgrade.
PREMIUM
Premium.
SP91
SP 91.
SP91_E10
SP 91 E10.
SP92
SP 92.
SP95
SP 95.
SP95_E10
SP95 E10.
SP98
SP 98.
SP99
SP 99.
SP100
SP 100.
LPG
Liquefied Petroleum Gas.
E80
E 80.
E85
E 85.
E100
E 100.
METHANE
Methane.
BIO_DIESEL
Bio-diesel.
TRUCK_DIESEL
Truck diesel.
Money
Represents an amount of money with its currency type.
JSON representation
{
"currencyCode" : string ,
"units" : string ,
"nanos" : integer
}
Fields
currencyCode
string
The three-letter currency code defined in ISO 4217.
units
string ( int64 format)
The whole units of the amount. For example if currencyCode is "USD" , then 1 unit is one US dollar.
nanos
integer
Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If units is positive, nanos must be positive or zero. If units is zero, nanos can be positive, zero, or negative. If units is negative, nanos must be negative or zero. For example $-1.75 is represented as units =-1 and nanos =-750,000,000.
EVChargeOptions
Information about the EV Charge Station hosted in Place. Terminology follows https://afdc.energy.gov/fuels/electricity_infrastructure.html One port could charge one car at a time. One port has one or more connectors. One station has one or more ports.
JSON representation
{
"connectorCount" : integer ,
"connectorAggregation" : [
{
object ( ConnectorAggregation )
}
]
}
Fields
connectorCount
integer
Number of connectors at this station. However, because some ports can have multiple connectors but only be able to charge one car at a time (e.g.) the number of connectors may be greater than the total number of cars which can charge simultaneously.
connectorAggregation[]
object ( ConnectorAggregation )
A list of EV charging connector aggregations that contain connectors of the same type and same charge rate.
ConnectorAggregation
EV charging information grouped by [type, maxChargeRateKw]. Shows EV charge aggregation of connectors that have the same type and max charge rate in kw.
JSON representation
{
"type" : enum ( EVConnectorType ) ,
"maxChargeRateKw" : number ,
"count" : integer ,
"availabilityLastUpdateTime" : string ,
"availableCount" : integer ,
"outOfServiceCount" : integer
}
Fields
type
enum ( EVConnectorType )
The connector type of this aggregation.
maxChargeRateKw
number
The static max charging rate in kw of each connector in the aggregation.
count
integer
Number of connectors in this aggregation.
availabilityLastUpdateTime
string ( Timestamp format)
The timestamp when the connector availability information in this aggregation was last updated.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
availableCount
integer
Number of connectors in this aggregation that are currently available.
outOfServiceCount
integer
Number of connectors in this aggregation that are currently out of service.
EVConnectorType
See http://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=6872107 for additional information/context on EV charging connector types.
Enums
EV_CONNECTOR_TYPE_UNSPECIFIED
Unspecified connector.
EV_CONNECTOR_TYPE_OTHER
Other connector types.
EV_CONNECTOR_TYPE_J1772
J1772 type 1 connector.
EV_CONNECTOR_TYPE_TYPE_2
IEC 62196 type 2 connector. Often referred to as MENNEKES.
EV_CONNECTOR_TYPE_CHADEMO
CHAdeMO type connector.
EV_CONNECTOR_TYPE_CCS_COMBO_1
Combined Charging System (AC and DC). Based on SAE. Type-1 J-1772 connector
EV_CONNECTOR_TYPE_CCS_COMBO_2
Combined Charging System (AC and DC). Based on Type-2 Mennekes connector
EV_CONNECTOR_TYPE_TESLA
The generic TESLA connector. This is NACS in the North America but can be non-NACS in other parts of the world (e.g. CCS Combo 2 (CCS2) or GB/T). This value is less representative of an actual connector type, and more represents the ability to charge a Tesla brand vehicle at a Tesla owned charging station.
EV_CONNECTOR_TYPE_UNSPECIFIED_GB_T
GB/T type corresponds to the GB/T standard in China. This type covers all GB_T types.
EV_CONNECTOR_TYPE_UNSPECIFIED_WALL_OUTLET
Unspecified wall outlet.
EV_CONNECTOR_TYPE_NACS
The North American Charging System (NACS), standardized as SAE J3400.
GenerativeSummary
AI-generated summary of the place.
JSON representation
{
"overview" : {
object ( LocalizedText )
} ,
"overviewFlagContentUri" : string ,
"disclosureText" : {
object ( LocalizedText )
}
}
Fields
overview
object ( LocalizedText )
The overview of the place.
overviewFlagContentUri
string
A link where users can flag a problem with the overview summary.
disclosureText
object ( LocalizedText )
The AI disclosure message "Summarized with Gemini" (and its localized variants). This will be in the language specified in the request if available.
ContainingPlace
Info about the place in which this place is located.
JSON representation
{
"name" : string ,
"id" : string
}
Fields
name
string
The resource name of the place in which this place is located.
id
string
The place id of the place in which this place is located.
AddressDescriptor
A relational description of a location. Includes a ranked set of nearby landmarks and precise containing areas and their relationship to the target location.
JSON representation
{
"landmarks" : [
{
object ( Landmark )
}
] ,
"areas" : [
{
object ( Area )
}
]
}
Fields
landmarks[]
object ( Landmark )
A ranked list of nearby landmarks. The most recognizable and nearby landmarks are ranked first.
areas[]
object ( Area )
A ranked list of containing or adjacent areas. The most recognizable and precise areas are ranked first.
Landmark
Basic landmark information and the landmark's relationship with the target location.
Landmarks are prominent places that can be used to describe a location.
JSON representation
{
"name" : string ,
"placeId" : string ,
"displayName" : {
object ( LocalizedText )
} ,
"types" : [
string
] ,
"spatialRelationship" : enum ( SpatialRelationship ) ,
"straightLineDistanceMeters" : number ,
"travelDistanceMeters" : number
}
Fields
name
string
The landmark's resource name.
placeId
string
The landmark's place id.
displayName
object ( LocalizedText )
The landmark's display name.
types[]
string
A set of type tags for this landmark. For a complete list of possible values, see https://developers.google.com/maps/documentation/places/web-service/place-types .
spatialRelationship
enum ( SpatialRelationship )
Defines the spatial relationship between the target location and the landmark.
straightLineDistanceMeters
number
The straight line distance, in meters, between the center point of the target and the center point of the landmark. In some situations, this value can be longer than travelDistanceMeters .
travelDistanceMeters
number
The travel distance, in meters, along the road network from the target to the landmark, if known. This value does not take into account the mode of transportation, such as walking, driving, or biking.
SpatialRelationship
Defines the spatial relationship between the target location and the landmark.
Enums
NEAR
This is the default relationship when nothing more specific below applies.
WITHIN
The landmark has a spatial geometry and the target is within its bounds.
BESIDE
The target is directly adjacent to the landmark.
ACROSS_THE_ROAD
The target is directly opposite the landmark on the other side of the road.
DOWN_THE_ROAD
On the same route as the landmark but not besides or across.
AROUND_THE_CORNER
Not on the same route as the landmark but a single turn away.
BEHIND
Close to the landmark's structure but further away from its street entrances.
Area
Area information and the area's relationship with the target location.
Areas includes precise sublocality, neighborhoods, and large compounds that are useful for describing a location.
JSON representation
{
"name" : string ,
"placeId" : string ,
"displayName" : {
object ( LocalizedText )
} ,
"containment" : enum ( Containment )
}
Fields
name
string
The area's resource name.
placeId
string
The area's place id.
displayName
object ( LocalizedText )
The area's display name.
containment
enum ( Containment )
Defines the spatial relationship between the target location and the area.
Containment
Defines the spatial relationship between the target location and the area.
Enums
CONTAINMENT_UNSPECIFIED
The containment is unspecified.
WITHIN
The target location is within the area region, close to the center.
OUTSKIRTS
The target location is within the area region, close to the edge.
NEAR
The target location is outside the area region, but close by.
GoogleMapsLinks
Links to trigger different Google Maps actions.
JSON representation
{
"directionsUri" : string ,
"placeUri" : string ,
"writeAReviewUri" : string ,
"reviewsUri" : string ,
"photosUri" : string
}
Fields
directionsUri
string
A link to show the directions to the place. The link only populates the destination location and uses the default travel mode DRIVE .
placeUri
string
A link to show this place.
writeAReviewUri
string
A link to write a review for this place on Google Maps.
reviewsUri
string
A link to show reviews of this place on Google Maps.
photosUri
string
A link to show photos of this place on Google Maps.
PriceRange
The price range associated with a Place. endPrice could be unset, which indicates a range without upper bound (e.g. "More than $100").
JSON representation
{
"startPrice" : {
object ( Money )
} ,
"endPrice" : {
object ( Money )
}
}
Fields
startPrice
object ( Money )
The low end of the price range (inclusive). Price should be at or above this amount.
endPrice
object ( Money )
The high end of the price range (exclusive). Price should be lower than this amount.
ReviewSummary
AI-generated summary of the place using user reviews.
JSON representation
{
"text" : {
object ( LocalizedText )
} ,
"flagContentUri" : string ,
"disclosureText" : {
object ( LocalizedText )
} ,
"reviewsUri" : string
}
Fields
text
object ( LocalizedText )
The summary of user reviews.
flagContentUri
string
A link where users can flag a problem with the summary.
disclosureText
object ( LocalizedText )
The AI disclosure message "Summarized with Gemini" (and its localized variants). This will be in the language specified in the request if available.
reviewsUri
string
A link to show reviews of this place on Google Maps.
EvChargeAmenitySummary
The summary of amenities near the EV charging station. This only applies to places with type electric_vehicle_charging_station . The overview field is guaranteed to be provided while the other fields are optional.
JSON representation
{
"overview" : {
object ( ContentBlock )
} ,
"coffee" : {
object ( ContentBlock )
} ,
"restaurant" : {
object ( ContentBlock )
} ,
"store" : {
object ( ContentBlock )
} ,
"flagContentUri" : string ,
"disclosureText" : {
object ( LocalizedText )
}
}
Fields
overview
object ( ContentBlock )
An overview of the available amenities. This is guaranteed to be provided.
coffee
object ( ContentBlock )
A summary of the nearby coffee options.
restaurant
object ( ContentBlock )
A summary of the nearby restaurants.
store
object ( ContentBlock )
A summary of the nearby stores.
flagContentUri
string
A link where users can flag a problem with the summary.
disclosureText
object ( LocalizedText )
The AI disclosure message "Summarized with Gemini" (and its localized variants). This will be in the language specified in the request if available.
ContentBlock
A block of content that can be served individually.
JSON representation
{
"content" : {
object ( LocalizedText )
} ,
"referencedPlaces" : [
string
]
}
Fields
content
object ( LocalizedText )
Content related to the topic.
referencedPlaces[]
string
The list of resource names of the referenced places. This name can be used in other APIs that accept Place resource names.
NeighborhoodSummary
A summary of points of interest near the place.
JSON representation
{
"overview" : {
object ( ContentBlock )
} ,
"description" : {
object ( ContentBlock )
} ,
"flagContentUri" : string ,
"disclosureText" : {
object ( LocalizedText )
}
}
Fields
overview
object ( ContentBlock )
An overview summary of the neighborhood.
description
object ( ContentBlock )
A detailed description of the neighborhood.
flagContentUri
string
A link where users can flag a problem with the summary.
disclosureText
object ( LocalizedText )
The AI disclosure message "Summarized with Gemini" (and its localized variants). This will be in the language specified in the request if available.
ConsumerAlert
The consumer alert message for the place when we detect suspicious review activity on a business or a business violates our policies.
JSON representation
{
"overview" : string ,
"details" : {
object ( Details )
} ,
"languageCode" : string
}
Fields
overview
string
The overview of the consumer alert message.
details
object ( Details )
The details of the consumer alert message.
languageCode
string
The language code of the consumer alert message. This is a BCP 47 language code.
Details
The details of the consumer alert message.
JSON representation
{
"title" : string ,
"description" : string ,
"aboutLink" : {
object ( Link )
}
}
Fields
title
string
The title to show together with the description.
description
string
The description of the consumer alert message.
aboutLink
object ( Link )
The link to show together with the description to provide more information.
Link
The link to show together with the description to provide more information.
JSON representation
{
"title" : string ,
"uri" : string
}
Fields
title
string
The title to show for the link.
uri
string
The uri of the link.
Methods
autocomplete
Returns predictions for the given input.
get
Get the details of a place based on its resource name, which is a string in the places/{place_id} format.
searchNearby
Search for places near locations.
searchText
Text query based place search.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-18 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-18 UTC."],[],[]]
