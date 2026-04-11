---
title: "Method: places.photos.getMedia \_|\_ Places API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places.photos/getMedia
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/web-service/reference/rest
source_metadata:
  url: https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places.photos/getMedia
  title: "Method: places.photos.getMedia \_|\_ Places API \_|\_ Google for Developers"
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
Method: places.photos.getMedia
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Retrieve a photo media resource using a specific photo reference string through a GET request.
The request requires a name path parameter specifying the photo media resource, formatted as places/{placeId}/photos/{photo_reference}/media .
Optionally customize the retrieved photo's dimensions using maxWidthPx and maxHeightPx query parameters, with values ranging from 1 to 4800.
The response provides a JSON object containing the photo media's resource name ( name ) and a temporary URI ( photoUri ) for rendering the photo.
HTTP request
Path parameters
Query parameters
Request body
Response body
JSON representation
Authorization scopes
Get a photo media with a photo reference string.
HTTP request
GET https://places.googleapis.com/v1/{name=places/*/photos/*/media}
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
name
string
Required. The resource name of a photo media in the format: places/{placeId}/photos/{photo_reference}/media .
The resource name of a photo as returned in a Place object's photos.name field comes with the format places/{placeId}/photos/{photo_reference} . You need to append /media at the end of the photo resource to get the photo media resource name.
Query parameters
Parameters
maxWidthPx
integer
Optional. Specifies the maximum desired width, in pixels, of the image. If the image is smaller than the values specified, the original image will be returned. If the image is larger in either dimension, it will be scaled to match the smaller of the two dimensions, restricted to its original aspect ratio. Both the maxHeightPx and maxWidthPx properties accept an integer between 1 and 4800, inclusively. If the value is not within the allowed range, an INVALID_ARGUMENT error will be returned.
At least one of maxHeightPx or maxWidthPx needs to be specified. If neither maxHeightPx nor maxWidthPx is specified, an INVALID_ARGUMENT error will be returned.
maxHeightPx
integer
Optional. Specifies the maximum desired height, in pixels, of the image. If the image is smaller than the values specified, the original image will be returned. If the image is larger in either dimension, it will be scaled to match the smaller of the two dimensions, restricted to its original aspect ratio. Both the maxHeightPx and maxWidthPx properties accept an integer between 1 and 4800, inclusively. If the value is not within the allowed range, an INVALID_ARGUMENT error will be returned.
At least one of maxHeightPx or maxWidthPx needs to be specified. If neither maxHeightPx nor maxWidthPx is specified, an INVALID_ARGUMENT error will be returned.
skipHttpRedirect
boolean
Optional. If set, skip the default HTTP redirect behavior and render a text format (for example, in JSON format for HTTP use case) response. If not set, an HTTP redirect will be issued to redirect the call to the image media. This option is ignored for non-HTTP requests.
Request body
The request body must be empty.
Response body
A photo media from Places API.
If successful, the response body contains data with the following structure:
JSON representation
{
"name" : string ,
"photoUri" : string
}
Fields
name
string
The resource name of a photo media in the format: places/{placeId}/photos/{photo_reference}/media .
photoUri
string
A short-lived uri that can be used to render the photo.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],["This outlines how to retrieve photo media using a `GET` request to the specified URL, which requires a photo resource `name` in the path parameters. Optional query parameters `maxWidthPx` and `maxHeightPx` allow for image resizing (1-4800 pixels). `skipHttpRedirect` is another optional parameter. The request body must be empty. The response includes `name` and a short-lived `photoUri` for the photo. Access requires the `cloud-platform` authorization scope.\n"]]
