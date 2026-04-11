---
title: "Method: places.get \_|\_ Places API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places/get
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/web-service/reference/rest
source_metadata:
  url: https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places/get
  title: "Method: places.get \_|\_ Places API \_|\_ Google for Developers"
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
Method: places.get
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Retrieve detailed information about a specific place using its unique Place ID.
Customize the response by specifying the language and region for displaying place details.
Manage billing efficiently by utilizing session tokens for Place Autocomplete calls.
The request body should be empty, and a successful response will contain a Place object with detailed information about the specified location.
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization scopes
Get the details of a place based on its resource name, which is a string in the places/{placeId} format.
HTTP request
GET https://places.googleapis.com/v1/{name=places/*}
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
name
string
Required. The resource name of a place, in the places/{placeId} format.
Query parameters
Parameters
languageCode
string
Optional. Place details will be displayed with the preferred language if available.
Current list of supported languages: https://developers.google.com/maps/faq#languagesupport .
regionCode
string
Optional. The Unicode country/region code (CLDR) of the location where the request is coming from. This parameter is used to display the place details, like region-specific place name, if available. The parameter can affect results based on applicable law. For more information, see https://www.unicode.org/cldr/charts/latest/supplemental/territory_language_information.html .
Note that 3-digit region codes are not currently supported.
sessionToken
string
Optional. A string which identifies an Autocomplete session for billing purposes. Must be a URL and filename safe base64 string with at most 36 ASCII characters in length. Otherwise an INVALID_ARGUMENT error is returned.
The session begins when the user starts typing a query, and concludes when they select a place and a call to Place Details or Address Validation is made. Each session can have multiple queries, followed by one Place Details or Address Validation request. The credentials used for each request within a session must belong to the same Google Cloud Console project. Once a session has concluded, the token is no longer valid; your app must generate a fresh token for each session. If the sessionToken parameter is omitted, or if you reuse a session token, the session is charged as if no session token was provided (each request is billed separately).
We recommend the following guidelines:
Use session tokens for all Place Autocomplete calls.
Generate a fresh token for each session. Using a version 4 UUID is recommended.
Ensure that the credentials used for all Place Autocomplete, Place Details, and Address Validation requests within a session belong to the same Cloud Console project.
Be sure to pass a unique session token for each new session. Using the same token for more than one session will result in each request being billed individually.
Request body
The request body must be empty.
Response body
If successful, the response body contains an instance of Place .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],[]]
