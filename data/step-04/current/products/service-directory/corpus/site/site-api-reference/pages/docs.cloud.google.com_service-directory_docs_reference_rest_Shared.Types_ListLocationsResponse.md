---
title: "ListLocationsResponse \_|\_ Service Directory \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-directory/docs/reference/rest/Shared.Types/ListLocationsResponse
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-directory/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/service-directory/docs/reference/rest/Shared.Types/ListLocationsResponse
  title: "ListLocationsResponse \_|\_ Service Directory \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Distributed, hybrid, and multicloud
Service Directory
Reference
Send feedback
ListLocationsResponse
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Location
JSON representation
The response message for Locations.ListLocations .
JSON representation
{
"locations" : [
{
object ( Location )
}
] ,
"nextPageToken" : string
}
Fields
locations[]
object ( Location )
A list of locations that matches the specified filter in the request.
nextPageToken
string
The standard List next-page token.
Location
A resource that represents Google Cloud Platform location.
JSON representation
{
"name" : string ,
"locationId" : string ,
"displayName" : string ,
"labels" : {
string : string ,
...
} ,
"metadata" : {
"@type" : string ,
field1 : ... ,
...
}
}
Fields
name
string
Resource name for the location, which may vary between implementations. For example: "projects/example-project/locations/us-east1"
locationId
string
The canonical id for this location. For example: "us-east1" .
displayName
string
The friendly name for this location, typically a nearby city name. For example, "Tokyo".
labels
map (key: string, value: string)
Cross-service attributes for the location. For example
{"cloud.googleapis.com/region": "us-east1"}
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
metadata
object
Service-specific metadata. For example the available capacity at the given location.
An object containing fields of an arbitrary type. An additional field "@type" contains a URI identifying the type. Example: { "id": 1234, "@type": "types.example.com/standard/id" } .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
