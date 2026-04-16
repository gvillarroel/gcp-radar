---
title: "Places API (New) release notes \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/web-service/release-notes
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/web-service/release-notes
source_metadata:
  url: https://developers.google.com/maps/documentation/places/web-service/release-notes
  title: "Places API (New) release notes \_|\_ Google for Developers"
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
Resources
Send feedback
Places API (New) release notes
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This page lists updates and new features for the Google Places API, including new APIs, fields, and accessibility options.
The Places API (New) offers features like Nearby Search, Text Search, Place Details, and Place Photos for comprehensive place information.
Recent updates include support for new place types, fields like containingPlaces , and features like Search Along Route.
Session tokens in Autocomplete (New) enable grouping query and selection phases for billing purposes and potentially free Place Details requests.
Developers can stay informed about Places API releases and access details through the provided links and the Google API Console.
This page is updated with each product release. The changelog lists releases by date and includes
any new features, bug fixes and significant performance improvements.
You can also browse and filter all release notes for all products in the
Google API Console .
To subscribe to these release notes, add the feed URL of this page to your RSS feed
reader .
See the Getting Started
documentation for information on how to get started using the Places API (New).
March 17, 2026
Announcement
New request parameter: includeFutureOpeningBusinesses
The optional includeFutureOpeningBusinesses parameter is available for use in Nearby Search (New), Text Search (New), and Autocomplete (New) requests. If set to true , the API returns businesses that will open in the future.
For more information, see Find businesses opening in the future .
Announcement
New field: openingDate
The openingDate field can be included in the field mask of a Nearby Search
(New), Text Search (New), and Place Details (New) request. For businesses that
are expected to open in the future, this field provides the anticipated opening
date.
For more information, see the API reference .
February 12, 2026
Feature
New field: googleMapsTypeLabel
The googleMapsTypeLabel field is available in the response body and provides
the type label of a place on Google Maps (for example, "restaurant", "cafe",
"airport", etc.), localized to the language specified in the request body, if
applicable. Type labels may be different from the primary type display name and
may not be a supported place type.
For more information, see the API reference .
Announcement
New place types
Places API (New) supports 180 new types, which can be used to filter results in
Autocomplete (New), Nearby Search (New), and Text Search (New) requests and are
returned in the API response.
For a complete list of supported types, see Place Types (New) . Types added in this release are marked with an asterisk (*).
October 20, 2025
Feature
New fields: movedPlace and movedPlaceId
The movedPlace and movedPlaceId fields can be included in the field mask of
a Nearby Search (New), Text Search (New), or Place Details (New) request. If a
place has relocated, these fields provide information about the next location.
For more information, see
Get place details for a moved place .
August 21, 2025
Announcement
AI-powered place and review summaries expansion
Place and review summaries are now available in the following languages and
regions:
Place summaries : Available in English in India and the United States.
Review summaries : Available in English in India, the United Kingdom, and the United States. Available in Japanese in Japan.
For more information, see AI-powered summaries .
Announcement
googleMapsLinks field generally available
The googleMapsLinks field is now generally available. Places API (New)
requests that include googleMapsLinks in the field mask will be billed at the
appropriate SKU .
For more information, see Link to Google Maps .
May 08, 2025
Feature
New feature: AI-powered summaries
AI-powered summaries are now generally available. Places API (New) supports the following types of AI-powered summaries:
Place summaries ,
which are short overview summaries related to a specific place.
Review summaries ,
which are digestible summaries of what reviewers have said about a place.
Area summaries ,
which provide overviews of nearby and popular places in the surrounding area. These include neighborhood summaries and EV charging station
summaries.
For more information, see AI-powered summaries .
April 15, 2025
Feature
New feature: AI-powered summaries (Preview)
AI-powered summaries are now available in Preview. Places API (New) supports the following types of AI-powered summaries:
Place summaries ,
which are short overview summaries related to a specific place.
Review summaries ,
which are digestible summaries of what reviewers have said about a place.
Area summaries ,
which provide overviews of nearby and popular places in the surrounding area. These include neighborhood summaries and EV charging station
summaries.
For more information, see AI-powered summaries .
April 08, 2025
Feature
New field: addressDescriptor
The addressDescriptor field can be included in the field mask of a Place Details (New), Text Search (New), or Nearby Search (New) request. Address descriptors provide relational information about a place's location, including nearby landmarks and containing areas. For more information, see the API reference .
Address descriptors are generally available for customers in India and are experimental elsewhere.
Note: Places API requests that use only addressDescriptor in the field mask will be billed at the appropriate SKU. For more information, see SKU details .
March 11, 2025
Feature
New field: postalAddress
Places API (New) supports filtering using the postalAddress field, which provides location information for postal services. postalAddress can be included in the field mask of a request to Nearby Search (New), Text Search (New), and Place Details (New).
Postal address information is well-defined for the following countries: Argentina, Austria, Australia, Bangladesh, Belgium, Bulgaria, Brazil, Canada, Cyprus, Czech Republic, Germany, Denmark, Estonia, Spain, Finland, France, Great Britain, Greece, Croatia, Hungary, Ireland, India, Italy, Japan, Lithuania, Latvia, Moldova, Malta, Mexico, Nigeria, Netherlands, Norway, New Zealand, Pakistan, Poland, Portugal, Romania, Singapore, Slovenia, Slovakia, Switzerland, Turkey, Taiwan, the United Arab Emirates, and the United States of America.
Postal address information outside of these countries is experimental.
November 07, 2024
Announcement
New place types
Places API (New) supports 104 new types, which can be used to filter results in Autocomplete (New), Nearby Search (New), and Text Search (New) requests and are returned in the API response.
For a complete list of supported types, see Place Types (New) . Types added in this release are marked with an asterisk (*).
Feature
New fields: containingPlaces, pureServiceAreaBusiness, priceRange, nextOpenTime, and nextCloseTime
Three new fields have been added to the response body and are available for filtering results using the Places API (New):
containingPlaces : Provides a list of places in which the current place is located.
priceRange : The price range associated with a place.
pureServiceAreaBusiness : Indicates whether a place is a pure service area business, which visits or delivers to customers directly but does not have a physical address (for example, a mobile cleaning service).
Additionally, Text Search (New) and Autocomplete (New) now support searching for pure service area businesses using the includePureServiceAreaBusinesses parameter in the request body. For more information, see Optional parameters .
The Places API (New) also returns nextOpenTime and nextCloseTime to help developers calculate the minutes until a place opens or closes. For more information, see OpeningHours .
October 29, 2024
Feature
New field: googleMapsLinks
The googleMapsLinks field is now available in Preview. Your users can browse to these Google Maps links to see additional information about a place in the response.
For more information, see Link to Google Maps .
Feature
New field: RoutingSummary.directionsUri
The RoutingSummary.directionsUri field is now available in Preview. When you calculate a routing summary, this field contains a link to open directions to the place in Google Maps. For more information, see Calculate routing summary .
If you combine routing summary calculations with search along a route, then RoutingSummary.directionsUri contains a link to open directions from the route origin to the place and then to the route destination. For more information, see Combine routing summaries with search along route .
Feature
New field: flagContentUri
The new flagContentUri field is now available in Preview. This field has been added to all reviews, photos, and generative summaries included in a Places API response. It contains a link, including a unique content identifier, that lets users notify Google of inappropriate content.
For more information, see Report inappropriate content .
October 15, 2024
Feature
New experimental addressDescriptor field added to the Place response object. Address descriptors include additional information that help describe a location using landmarks and areas.
This feature is available in all regions. See coverage details .
This feature is in the pre-GA Experimental stage and there is no charge, meaning billing is $0, for usage during Experimental.
Note: This feature is in the Experimental launch stage (pre-GA) . Pre-GA products and features might have limited support, and changes to pre-GA products and features might not be compatible with other pre-GA versions. This Pre-GA feature does not have any latency or availability guarantee. Pre-GA Offerings are covered by the Google Maps Platform Service Specific Terms . For more information, see the launch stage descriptions .
September 17, 2024
Feature
Search along route
Search along a route is now generally available in the Places API (New). With this release, you can:
(Text Search only) Search for places along a predefined trip route.
(Text Search and Nearby Search) Calculate the routing summary, meaning the duration and distance, from a
specified routing origin location to each place in the search results.
(Text Search only) Calculate the routing summary for each place along a
predefined trip route.
For more information, see Overview of search along route .
May 28, 2024
Feature
Autocomplete (New) and session tokens
Autocomplete (New) is now generally available. The Autocomplete (New) service returns place predictions and query predictions based on full words and substrings of an input. For more information, see Autocomplete (New) .
Session tokens are user-generated strings that group the query and selection phases of a search using Autocomplete (New) into a discrete "session" for billing purposes. For more information, see Session tokens .
After making an Autocomplete (New) request, if you make a Place Details request using the SKU: Place Details (Location Only) , and then make an Address Validation request before the session token expires (in that order), the request using SKU: Place Details (Location Only) is free. The Address Validation request is billed using the SKU: Address Validation Preferred . For more information, see Autocomplete (New) and session pricing .
May 13, 2024
Deprecated
Places API (New) field maxResultCount deprecated
To better meet developer needs, the Text Search (New) field maxResultCount in the Places API (New) is deprecated as of May 13, 2024.
Instead, use pageSize to specify the number of results to return per page.
February 21, 2024
Feature
New Place Details SKU
SKU: Place Details (Location Only) is a Preview feature that contains fields that were previously included in SKU: Place Details (Basic). Usage during Preview is at no charge.
For more information, see SKU: Place Details (Location Only) .
Feature
New Text Search parameters
Two new evOptions parameters are available as optional fields in Text Search:
connectorTypes : Filters by the type of EV charging connector available at a place.
minimumChargingRateKw : Filters places by minimum EV charging rate in kilowatts (kW).
Feature
New fields: evChargeOptions, fuelOptions, parkingOptions
The following fields are available in GA and are charged for use:
evChargeOptions : Number of electric vehicle (EV) chargers at this station.
fuelOptions : The most recent information about fuel options available at a gas station.
parkingOptions : Parking options provided by the place.
For more information, see About the Places API (New) .
Feature
Autocomplete (New) and session tokens
The Autocomplete (New) service returns place predictions and query predictions based on full words and substrings of an input. For more information, see Autocomplete (New) .
Session tokens are user-generated strings that group the query and selection phases of a search using Autocomplete (New) into a discrete "session" for billing purposes. For more information, see Session tokens .
Note: Autocomplete (New) and session tokens are in preview.
Announcement
Places API
Announcing the General Availability (GA) release of the Places API. See the Release Notes for information about this release and for all other releases.
If you are a new user, see Set Up in the Google Cloud Console to start the installation process.
October 26, 2023
Announcement
Places API
Announcing the General Availability (GA) release of the Places API. See the Release Notes for information about this release and for all other releases.
If you are a new user, see Set Up in the Google Cloud Console to start the installation process.
Feature
New APIs, fields, and accessibility options
Four new APIs are available through the Places API (New):
Nearby Search : Takes one or more place types and returns a list of matching places within the specified area.
Text Search : Returns information about a set of places based on string.
Place Details : Returns comprehensive information about a particular establishment or point of interest.
Place Photos : Provides access to high-quality photos stored in the Places database.
New fields provide more information about a place, including secondary opening hours, payment and parking options, EV charging availability, and more.
New attributes provide additional context about a place, including whether a place has outdoor seating, live music, a children's menu, restrooms, and more.
New accessibility options indicate whether a place has wheelchair-accessible parking, entrances, restrooms, and seating.
For more information, see About the New Places APIs .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
