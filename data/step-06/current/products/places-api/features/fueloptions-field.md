---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:06.051Z"
product_name: "Places API"
product_slug: "places-api"
feature_name: "fuelOptions field"
feature_slug: "fueloptions-field"
latest_feature_date: "2024-02-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/places/web-service/reference/rpc/google.maps.places.v1"
  - "https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places"
  - "https://developers.google.com/maps/documentation/places/web-service/choose-fields"
  - "https://developers.google.com/maps/documentation/places/web-service/legacy/search-nearby"
keywords:
  - "fueloptions"
  - "field"
  - "this"
  - "returns"
  - "the"
  - "most"
  - "recent"
  - "information"
---

# fuelOptions field

Product: Places API
Coverage: MEDIUM

## Step 02 Summary

This field returns the most recent information about fuel options available at a gas station.

## Extended Definition

This field returns the most recent information about fuel options available at a gas station.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/places/web-service/reference/rpc/google.maps.places.v1](https://developers.google.com/maps/documentation/places/web-service/reference/rpc/google.maps.places.v1)
- [https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places)
- [https://developers.google.com/maps/documentation/places/web-service/choose-fields](https://developers.google.com/maps/documentation/places/web-service/choose-fields)
- [https://developers.google.com/maps/documentation/places/web-service/legacy/search-nearby](https://developers.google.com/maps/documentation/places/web-service/legacy/search-nearby)

## Supporting Pages

### Package google.maps.places.v1 \_|\_ Places API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/web-service/reference/rpc/google.maps.places.v1](https://developers.google.com/maps/documentation/places/web-service/reference/rpc/google.maps.places.v1)
- Source ID: `site-api-reference`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- If a payment option data is not available, the payment option field will be unset. parking options ParkingOptions Options of parking provided by the place. sub destinations[] SubDestination A list of sub-destinations related to the place. fuel options FuelOptions The most recent information about fuel options in a gas station.
- FuelOptions The most recent information about fuel options in a gas station.
- Fields name string A reference representing this place review which may be used to look up this place review again (also called the API "resource" name: places/{place id}/reviews/{review} ). relative publish time description string A string of formatted recent time, expressing the review time relative to the current time in a form appropriate for the language and country. text LocalizedText The localized text of the review. original text LocalizedText The review text in its original language. rating double A number between 1.0 and 5.0, also called the number of stars. author attribution AuthorAttribution This review's author. publish time Timestamp Timestamp for the review. flag content uri string A link where users can flag a problem with the review. google maps uri string A link to show the review on Google Maps. visit date Date The date when the author visited the place.
- Fields type EVConnectorType The connector type of this aggregation. max charge rate kw double The static max charging rate in kw of each connector in the aggregation. count int32 Number of connectors in this aggregation. availability last update time Timestamp The timestamp when the connector availability information in this aggregation was last updated. available count int32 Number of connectors in this aggregation that are currently available. out of service count int32 Number of connectors in this aggregation that are currently out of service.

### REST Resource: places \_|\_ Places API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places)
- Source ID: `site-api-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- If a payment option data is not available, the payment option field will be unset. parkingOptions object ( ParkingOptions ) Options of parking provided by the place. subDestinations[] object ( SubDestination ) A list of sub-destinations related to the place. fuelOptions object ( FuelOptions ) The most recent information about fuel options in a gas station.
- FuelOptions The most recent information about fuel options in a gas station.
- JSON representation { "name" : string , "relativePublishTimeDescription" : string , "text" : { object ( LocalizedText ) } , "originalText" : { object ( LocalizedText ) } , "rating" : number , "authorAttribution" : { object ( AuthorAttribution ) } , "publishTime" : string , "flagContentUri" : string , "googleMapsUri" : string , "visitDate" : { object ( Date ) } } Fields name string A reference representing this place review which may be used to look up this place review again (also called the API "resource" name: places/{placeId}/reviews/{review} ). relativePublishTimeDescription string A string of formatted recent time, expressing the review time relative to the current time in a form appropriate for the language and country. text object ( LocalizedText ) The localized text of the review. originalText object ( LocalizedText ) The review text in its original language. rating number A number between 1.0 and 5.0, also called the number of stars. authorAttribution object ( AuthorAttribution ) This review's author. publishTime string ( Timestamp format) Timestamp for the review.
- JSON representation { "type" : enum ( EVConnectorType ) , "maxChargeRateKw" : number , "count" : integer , "availabilityLastUpdateTime" : string , "availableCount" : integer , "outOfServiceCount" : integer } Fields type enum ( EVConnectorType ) The connector type of this aggregation. maxChargeRateKw number The static max charging rate in kw of each connector in the aggregation. count integer Number of connectors in this aggregation. availabilityLastUpdateTime string ( Timestamp format) The timestamp when the connector availability information in this aggregation was last updated.

### Choose fields to return \_|\_ Places API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/web-service/choose-fields](https://developers.google.com/maps/documentation/places/web-service/choose-fields)
- Source ID: `site-docs-root`
- Final score: 125
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you only want the text field, set the field mask as: places.formattedAddress,places.displayName.text Define a response field mask for Place Details (New) Place Details (New) returns a single Place object in the form: { "name" : "places/ChIJkR8FdQNB0VQRm64T lv1g1g" , "id" : "ChIJkR8FdQNB0VQRm64T lv1g1g" , "types" : [ "locality" , "political" ], "formattedAddress" : "Trinidad, CA 95570, USA" , "displayName" : { "text" : "Trinidad" , "languageCode" : "en" } ... } Therefore, you specify a field mask for this API by specifying the fields of the Place object that you want to return: curl -X GET -H 'Content-Type: application/json' \ -H "X-Goog-Api-Key: API KEY " \ -H "X-Goog-FieldMask: formattedAddress,displayName" \ https://places.googleapis.com/v1/places/ChIJj61dQgK6j4AR4GeTYWZsKWw gRPC call For gRPC, set a variable containing the response field mask.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["When using Place Details, Nearby Search, or Text Search, you must define a response field mask, specifying desired fields.
- For information on fields specific to each API, see the following: Place Details (New) FieldMask parameters Nearby Search (New) FieldMask parameters Text Search (New) FieldMask parameters You specify the field list by creating a response field mask .
- The cost may be higher than expected as more advanced features are requested through this field mask, and it increases response latency.

### Nearby Search (Legacy) \_|\_ Places API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/web-service/legacy/search-nearby](https://developers.google.com/maps/documentation/places/web-service/legacy/search-nearby)
- Source ID: `site-docs-root-2`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- This field is not always returned, and its content is subject to change. info messages optional Array<string> When the service returns additional information about the request specification, there may be an additional info messages field within the response object.
- See PlacesSearchStatus for more information. error message optional string When the service returns a status code other than OK< , there may be an additional error message field within the response object.
- Values in this field are combined with values in the keyword field and passed as part of the same search string. opennow Returns only those places that are open for business at the time the query is sent.
- To retrieve information about the place, pass this identifier in the place id field of a Places API request.

