---
title: "BulkEditSitesResponse \_|\_ DV360 API \_|\_ Google for Developers"
url: https://developers.google.com/display-video/api/reference/rest/v4/BulkEditSitesResponse
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/display-video/api/reference/rest
source_metadata:
  url: https://developers.google.com/display-video/api/reference/rest/v4/BulkEditSitesResponse
  title: "BulkEditSitesResponse \_|\_ DV360 API \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

To discuss and provide feedback on our products, join the official Display & Video 360 API and Structured Data Files Discord channel in the Google Advertising and Measurement Community server.
Home
Products
DV360 API
Display & Video 360 API
Reference
Send feedback
BulkEditSitesResponse
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
BulkEditSitesResponse is a response message for SiteService.BulkEditSites.
The response contains a list of successfully created sites in a sites field, which will be absent if the list is empty.
Each item in the sites list is an object representing a Site.
JSON representation
Response message for SiteService.BulkEditSites.
JSON representation
{
"sites" : [
{
object ( Site )
}
]
}
Fields
sites[]
object ( Site )
The list of sites that have been successfully created.
This list will be absent if empty.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-03-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-03-27 UTC."],[],["The Display & Video 360 API v4 is in beta. The `SiteService.BulkEditSites` response message includes a JSON representation, containing a `sites` array. This array holds objects representing successfully created sites. Each site object conforms to the `Site` schema. If no sites were created, the `sites` list is absent from the response.\n"]]
