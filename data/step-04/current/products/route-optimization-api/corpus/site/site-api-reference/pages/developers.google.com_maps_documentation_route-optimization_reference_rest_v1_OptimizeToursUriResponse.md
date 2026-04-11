---
title: "OptimizeToursUriResponse \_|\_ Route Optimization API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/route-optimization/reference/rest/v1/OptimizeToursUriResponse
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/route-optimization/reference/rest
source_metadata:
  url: https://developers.google.com/maps/documentation/route-optimization/reference/rest/v1/OptimizeToursUriResponse
  title: "OptimizeToursUriResponse \_|\_ Route Optimization API \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Google Maps Platform
Documentation
Route Optimization API
Reference
Send feedback
OptimizeToursUriResponse
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
A response returned by the locations.optimizeToursUri method.
JSON representation
{
"output" : {
object ( Uri )
}
}
Fields
output
object ( Uri )
Optional. The URI of the Cloud Storage object containing the OptimizeToursResponse encoded as either JSON or textproto. If the object was encoded as JSON, the extension of the object name will be .json . If the object was encoded as textproto, the extension of the object name will be .txtpb .
The crc32_checksum of the resource can be used to verify the contents of the resource have not been modified.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],[]]
