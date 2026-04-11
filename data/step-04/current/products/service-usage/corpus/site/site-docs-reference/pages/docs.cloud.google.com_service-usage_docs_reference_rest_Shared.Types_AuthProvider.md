---
title: "AuthProvider \_|\_ Service Usage \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-usage/docs/reference/rest/Shared.Types/AuthProvider
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-usage/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/service-usage/docs/reference/rest/Shared.Types/AuthProvider
  title: "AuthProvider \_|\_ Service Usage \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Service Usage
Reference
Send feedback
AuthProvider
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
JwtLocation
JSON representation
Configuration for an authentication provider, including support for JSON Web Token (JWT) .
JSON representation
{
"id" : string ,
"issuer" : string ,
"jwksUri" : string ,
"audiences" : string ,
"authorizationUrl" : string ,
"jwtLocations" : [
{
object ( JwtLocation )
}
]
}
Fields
id
string
The unique identifier of the auth provider. It will be referred to by AuthRequirement.provider_id .
Example: "bookstore_auth".
issuer
string
Identifies the principal that issued the JWT. See https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-4.1.1 Usually a URL or an email address.
Example: https://securetoken.google.com Example: 1234567-compute@developer.gserviceaccount.com
jwksUri
string
URL of the provider's public key set to validate signature of the JWT. See OpenID Discovery . Optional if the key set document: - can be retrieved from OpenID Discovery of the issuer. - can be inferred from the email domain of the issuer (e.g. a Google service account).
Example: https://www.googleapis.com/oauth2/v1/certs
audiences
string
The list of JWT audiences . that are allowed to access. A JWT containing any of these audiences will be accepted. When this setting is absent, JWTs with audiences: - "https://[service.name]/ google.protobuf.Api.name " - "https://[service.name]/" will be accepted. For example, if no audiences are in the setting, LibraryService API will accept JWTs with the following audiences: - https://library-example.googleapis.com/google.example.library.v1.LibraryService - https://library-example.googleapis.com/
Example:
audiences: bookstore_android.apps.googleusercontent.com,
bookstore_web.apps.googleusercontent.com
authorizationUrl
string
Redirect URL if JWT token is required but not present or is expired. Implement authorizationUrl of securityDefinitions in OpenAPI spec.
jwtLocations[]
object ( JwtLocation )
Defines the locations to extract the JWT. For now it is only used by the Cloud Endpoints to store the OpenAPI extension x-google-jwt-locations
JWT locations can be one of HTTP headers, URL query parameters or cookies. The rule is that the first match wins.
If not specified, default to use following 3 locations: 1) Authorization: Bearer 2) x-goog-iap-jwt-assertion 3) access_token query parameter
Default locations can be specified as followings: jwtLocations: - header: Authorization valuePrefix: "Bearer " - header: x-goog-iap-jwt-assertion - query: access_token
JwtLocation
Specifies a location to extract JWT from an API request.
JSON representation
{
"valuePrefix" : string ,
// Union field in can be only one of the following:
"header" : string ,
"query" : string ,
"cookie" : string
// End of list of possible types for union field in .
}
Fields
valuePrefix
string
The value prefix. The value format is "valuePrefix{token}" Only applies to "in" header type. Must be empty for "in" query type. If not empty, the header value has to match (case sensitive) this prefix. If not matched, JWT will not be extracted. If matched, JWT will be extracted after the prefix is removed.
For example, for "Authorization: Bearer {JWT}", valuePrefix="Bearer " with a space at the end.
Union field in .
in can be only one of the following:
header
string
Specifies HTTP header name to extract JWT token.
query
string
Specifies URL query parameter name to extract JWT token.
cookie
string
Specifies cookie name to extract JWT token.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-11-11 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-11-11 UTC."],[],[]]
