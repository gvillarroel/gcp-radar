---
title: "Method: geocode.destinations.searchDestinations \_|\_ Geocoding API \_|\_\
  \ Google for Developers"
url: https://developers.google.com/maps/documentation/geocoding/reference/rest/v4/geocode.destinations/searchDestinations
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/geocoding/reference/rest
source_metadata:
  url: https://developers.google.com/maps/documentation/geocoding/reference/rest/v4/geocode.destinations/searchDestinations
  title: "Method: geocode.destinations.searchDestinations \_|\_ Geocoding API \_|\_\
    \ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Geocoding API v4 methods have a default quota of 25 queries per second (QPS). For information on requesting a higher quota, see View and manage quotas and select Geocoding API as the service.
Home
Products
Google Maps Platform
Documentation
Web Services
Geocoding API
Reference
Send feedback
Method: geocode.destinations.searchDestinations
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Request body
JSON representation
Response body
JSON representation
Authorization scopes
SearchDestinationsRequest.AddressQuery
JSON representation
SearchDestinationsRequest.LocationQuery
JSON representation
SearchDestinationsRequest.LocationQuery.PlaceFilter
JSON representation
PlaceView.StructureType
SearchDestinationsRequest.LocationQuery.PlaceFilter.Addressability
NavigationPoint.TravelMode
Destination
JSON representation
PlaceView
JSON representation
Landmark
JSON representation
Landmark.Tag
Entrance
JSON representation
Entrance.Tag
NavigationPoint
JSON representation
NavigationPoint.Usage
This method performs a destination lookup and returns a list of destinations.
HTTP request
POST https://geocode.googleapis.com/v4/geocode/destinations
The URL uses gRPC Transcoding syntax.
Request body
The request body contains data with the following structure:
JSON representation
{
"travelModes" : [
enum ( NavigationPoint.TravelMode )
] ,
"languageCode" : string ,
"regionCode" : string ,
// Union field primary_query can be only one of the following:
"place" : string ,
"addressQuery" : {
object ( SearchDestinationsRequest.AddressQuery )
} ,
"locationQuery" : {
object ( SearchDestinationsRequest.LocationQuery )
}
// End of list of possible types for union field primary_query .
}
Fields
travelModes[]
enum ( NavigationPoint.TravelMode )
Optional. The travel modes to filter navigation points for. This influences the navigationPoints field returned in the response. If empty, navigation points of all travel modes are returned.
languageCode
string
Optional. Language in which the results should be returned.
regionCode
string
Optional. Region code. The region code, specified as a ccTLD ("top-level domain") two-character value. The parameter affects results based on applicable law. This parameter also influences, but not fully restricts, results from the service.
Union field primary_query . Query for the primary destination. This can be either a place, a fully specified address, or a LatLng location. Some places and addresses with minimal information won't be able to be turned into a destination.
The destinations are built around the specified primary query.
Note: only places and addresses that can have a navigational destination are supported. For example, a place that represents a house or an apartment complex can be used as the primary query, but places that represent a locality or an administrative area cannot be used as the primary query. primary_query can be only one of the following:
place
string
The resource name of a place, in places/{placeId} format.
addressQuery
object ( SearchDestinationsRequest.AddressQuery )
A street address.
locationQuery
object ( SearchDestinationsRequest.LocationQuery )
A precise location.
Response body
Response message for DestinationService.SearchDestinations.
If successful, the response body contains data with the following structure:
JSON representation
{
"destinations" : [
{
object ( Destination )
}
]
}
Fields
destinations[]
object ( Destination )
A list of destinations.
The service returns one result if a primary destination can be unambiguously identified from the primary query. Otherwise, the service might return multiple results for disambiguation or zero results.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloud-platform
https://www.googleapis.com/auth/maps-platform.geocode
https://www.googleapis.com/auth/maps-platform.destinations
SearchDestinationsRequest.AddressQuery
The street address that you want to search for. Specify addresses in accordance with the format used by the national postal service of the country concerned.
JSON representation
{
// Union field kind can be only one of the following:
"address" : {
object ( PostalAddress )
} ,
"addressQuery" : string
// End of list of possible types for union field kind .
}
Fields
Union field kind . The address query. kind can be only one of the following:
address
object ( PostalAddress )
A street address in postal address format.
addressQuery
string
A street address formatted as a single line.
SearchDestinationsRequest.LocationQuery
A location query to identify a nearby primary destination.
Note: if the location query is within a building that contains subpremises, it is possible that the returned primary place is a subpremise. In these cases, the containingPlaces field will include the building.
JSON representation
{
"placeFilter" : {
object ( SearchDestinationsRequest.LocationQuery.PlaceFilter )
} ,
// Union field kind can be only one of the following:
"location" : {
object ( LatLng )
}
// End of list of possible types for union field kind .
}
Fields
placeFilter
object ( SearchDestinationsRequest.LocationQuery.PlaceFilter )
Optional. Filters to apply to destination candidates.
Union field kind . The location query. kind can be only one of the following:
location
object ( LatLng )
A precise LatLng location.
SearchDestinationsRequest.LocationQuery.PlaceFilter
Filters to apply to destination candidates.
JSON representation
{
"structureType" : enum ( PlaceView.StructureType ) ,
"addressability" : enum ( SearchDestinationsRequest.LocationQuery.PlaceFilter.Addressability )
}
Fields
structureType
enum ( PlaceView.StructureType )
Optional. If specified, all destinations are guaranteed to have a primary place with this structure type. This can result in filtering out some destinations, or in coarsening/refining the returned destinations.
For example, if GROUNDS is specified, all returned destinations will have a primary place with the GROUNDS structure type. This can result in filtering out some destinations that are not part of a grounds, or in coarsening the returned destinations to the grounds level.
Another use of this field is to more easily extract building display polygons. For example, if BUILDING is specified, the primary place's display polygon will be for the building at the specified location.
addressability
enum ( SearchDestinationsRequest.LocationQuery.PlaceFilter.Addressability )
Optional. If specified, only returns destinations that meet the corresponding addressability criteria.
PlaceView.StructureType
The type of structure that this place represents.
Enums
STRUCTURE_TYPE_UNSPECIFIED
Not used.
POINT
A point location.
SECTION
A sub-section of a building.
BUILDING
A building.
GROUNDS
A large area that typically contains multiple buildings, such as a university campus, an apartment complex, or a shopping mall.
SearchDestinationsRequest.LocationQuery.PlaceFilter.Addressability
Defines options for addressability filtering. New values may be added in the future.
Enums
ADDRESSABILITY_UNSPECIFIED
When unspecified, the service will choose a sensible default.
ANY
Addressability is not a filtering criteria. Destinations are returned regardless of their addressability.
PRIMARY
All destinations returned will have a primary place with a street level address or name.
WEAK
All destinations returned will have either a primary place or a subdestination with a street level address or name.
NavigationPoint.TravelMode
Travel modes that are appropriate for this navigation point.
Enums
TRAVEL_MODE_UNSPECIFIED
Not used.
DRIVE
Suitable for driving.
WALK
Suitable for walking.
Destination
A destination. This includes the primary place, related places, entrances, and navigation points.
JSON representation
{
"primary" : {
object ( PlaceView )
} ,
"containingPlaces" : [
{
object ( PlaceView )
}
] ,
"subDestinations" : [
{
object ( PlaceView )
}
] ,
"landmarks" : [
{
object ( Landmark )
}
] ,
"entrances" : [
{
object ( Entrance )
}
] ,
"navigationPoints" : [
{
object ( NavigationPoint )
}
]
}
Fields
primary
object ( PlaceView )
The primary place identified by the primary_query in the request.
containingPlaces[]
object ( PlaceView )
The less precise places that the primary place is contained by. For example, the apartment complex that contains this building.
subDestinations[]
object ( PlaceView )
More precise sub-destinations of the primary place. For example, units contained in a building.
Note: compared to the SubDestination returned by the Places API, this list of sub-destinations is more exhaustive, and each sub-destination contains more information.
landmarks[]
object ( Landmark )
Landmarks that can be used to communicate where the destination is or help with arrival.
entrances[]
object ( Entrance )
Entrances for this destination.
navigationPoints[]
object ( NavigationPoint )
Navigation points for this destination.
PlaceView
Represents a view of a Place in the Places API. It also provides additional information specific to destinations, such as the structure type and the display polygon.
In some cases, a PlaceView with the same place ID might differ from what is being returned by the Places API for the types and displayName fields.
JSON representation
{
"place" : string ,
"placeId" : string ,
"displayName" : {
object ( LocalizedText )
} ,
"primaryType" : string ,
"types" : [
string
] ,
"formattedAddress" : string ,
"postalAddress" : {
object ( PostalAddress )
} ,
"structureType" : enum ( PlaceView.StructureType ) ,
"location" : {
object ( LatLng )
} ,
"displayPolygon" : {
object
}
}
Fields
place
string
This Place's resource name, in places/{placeId} format. Can be used to look up the Place.
placeId
string
The unique identifier of a place.
displayName
object ( LocalizedText )
Human readable place description. For example, "Gate B", "McDonalds"
primaryType
string
The primary place type of this place. See https://developers.google.com/maps/documentation/places/web-service/place-types for the list of possible values.
Note: This field is not always populated. Be prepared to use the types field in such situations.
types[]
string
All associated place types of this place. See https://developers.google.com/maps/documentation/places/web-service/place-types for the list of possible values.
formattedAddress
string
One line address.
postalAddress
object ( PostalAddress )
Structured address.
structureType
enum ( PlaceView.StructureType )
The type of structure corresponding to this place.
location
object ( LatLng )
The location of this place. For places with display polygons, this can represent a good spot to put a marker on the map.
displayPolygon
object ( Struct format)
The polygon outline of the place in GeoJSON format, using the RFC 7946 format: https://datatracker.ietf.org/doc/html/rfc7946#section-3.1.6 .
Note: The RFC 7946 format supports MultiPolygons, so one displayPolygon object can represent multiple polygons.
Landmark
Landmarks are used to communicate where the destination is or help with arriving at the destination.
JSON representation
{
"relationalDescription" : {
object ( LocalizedText )
} ,
"tags" : [
enum ( Landmark.Tag )
] ,
"straightLineDistanceMeters" : number ,
"travelDistanceMeters" : number ,
// Union field landmark can be only one of the following:
"place" : {
object ( PlaceView )
}
// End of list of possible types for union field landmark .
}
Fields
relationalDescription
object ( LocalizedText )
A human-readable description of how the destination relates to the landmark. For example: "Near the Empire State Building" or "Across from the White House".
tags[]
enum ( Landmark.Tag )
Tags that describe how the landmark can be used in the context of the destination.
straightLineDistanceMeters
number
Output only. The straight-line distance from this landmark to the destination in meters.
travelDistanceMeters
number
Output only. The road-network distance from this landmark to the destination in meters.
Union field landmark . The landmark. landmark can be only one of the following:
place
object ( PlaceView )
The place that represents this landmark.
Landmark.Tag
The list of all possible tags that describe how a landmark can be used in the context of a destination.
If an address has both the ADDRESS and ARRIVAL tags, it means the landmark is both locally prominent and close to the destination.
Enums
TAG_UNSPECIFIED
Not used.
ADDRESS
A locally prominent place that can be used to identify the general location of the destination. Typically within a few hundred meters of the destination. These are similar to the landmarks returned by the Address Descriptors feature of the Geocoding API: https://developers.google.com/maps/documentation/geocoding/address-descriptors/requests-address-descriptors .
ARRIVAL
A place that can be used to help arrive at the destination. Useful for navigation once you are close to the destination. For example, this landmark might be a place that is across the street from the destination. A landmark with this tag is typically closer to the destination than landmarks with the ADDRESS tag.
Entrance
An entrance is a single latitude/longitude coordinate pair that defines the location of an entry and exit point for a place.
JSON representation
{
"location" : {
object ( LatLng )
} ,
"tags" : [
enum ( Entrance.Tag )
] ,
"place" : string
}
Fields
location
object ( LatLng )
The location of the entrance.
tags[]
enum ( Entrance.Tag )
A list of tags that describe the entrance.
place
string
The structure this entrance is physically located on, in places/{placeId} format.
Entrance.Tag
Characteristics that describe an entrance.
Enums
TAG_UNSPECIFIED
Not used.
PREFERRED
The entrance likely provides physical access to the primary place in the returned destination. A place can have multiple preferred entrances. If an entrance does not have this tag, it means the entrance is physically on the same building as the primary place, but does not necessarily provide access to the place.
For example, if the primary place is a restaurant in a strip mall, the "PREFERRED" entrances will be the ones that likely lead into the restaurant itself, while the other returned entrances will be other entrances for the building, such as entrances into other restaurants in the strip mall.
If the primary place is a building itself, the PREFERRED entrances will be the ones that lead into the "main" part of the building. For example, in a shopping center the PREFERRED entrances will be the ones that allow access to the main foyer area, but if an entrance only provides access to a store on the side of the building, it won't be a PREFERRED entrance.
Note: a PREFERRED entrance might not provide access to the primary place, and a non- PREFERRED entrance might provide access to the primary place.
NavigationPoint
A navigation point is a location next to a road where navigation can end.
JSON representation
{
"navigationPointToken" : string ,
"displayName" : {
object ( LocalizedText )
} ,
"location" : {
object ( LatLng )
} ,
"travelModes" : [
enum ( NavigationPoint.TravelMode )
] ,
"usages" : [
enum ( NavigationPoint.Usage )
]
}
Fields
navigationPointToken
string
Output only. A token that can be used to identify this navigation point.
displayName
object ( LocalizedText )
The display name of this navigation point. For example, "5th Ave" or "Gate B".
location
object ( LatLng )
A point next to the road segment where navigation should end. The point is intentionally slightly offset from the road's centerline to clearly mark the side of the road where the place is located.
travelModes[]
enum ( NavigationPoint.TravelMode )
Travel modes that are appropriate for this navigation point.
usages[]
enum ( NavigationPoint.Usage )
Lists usages supported by this navigation point. If empty, it does not necessarily mean its usage is restricted in any way. All navigation points can be used for general navigation.
NavigationPoint.Usage
Usages supported by this navigation point. New values may be added in the future.
Enums
USAGE_UNSPECIFIED
Not used.
UNKNOWN
Indicates that the usage type is unknown.
DROPOFF
Suitable for dropping off a passenger. For example, a rideshare drop off location.
PICKUP
Suitable for picking up a passenger. For example, a rideshare pick up location.
PARKING
Suitable for parking. For example, within a parking lot.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
