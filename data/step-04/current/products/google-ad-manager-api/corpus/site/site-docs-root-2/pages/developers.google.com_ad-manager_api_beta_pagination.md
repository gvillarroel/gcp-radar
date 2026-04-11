---
title: "Pagination \_|\_ Ad Manager API (Beta) \_|\_ Google for Developers"
url: https://developers.google.com/ad-manager/api/beta/pagination
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/ad-manager/api/beta/getting-started
source_metadata:
  url: https://developers.google.com/ad-manager/api/beta/pagination
  title: "Pagination \_|\_ Ad Manager API (Beta) \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

To discuss and provide feedback on our products, join the official Ad Manager Discord channel in the Google Advertising and Measurement Community server.
Home
Products
Ad Manager
API (Beta)
Send feedback
Pagination
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Ad Manager API collections are paginated in API responses.
The pageSize field can be used to control the number of results returned per page, up to a limit of 1000.
Use the nextPageToken field in the response to retrieve the next page of results.
The orderBy field allows you to specify the sorting order of the results.
The skip field can be used to skip a specific number of initial results, but should not replace pagination.
The Ad Manager API provides collections of data, most commonly in List
methods. Collections can be arbitrarily sized and are paginated in API
responses.
Basics
Request messages for collections define an optional integer pageSize field to
specify the maximum number of results to return.
Set the pageSize parameter to a positive number, less than 1000 . If you
don't set any value or set the parameter to zero, the API uses a default value
of 50 . If you set the parameter to a negative value, the API returns an
INVALID_ARGUMENT error.
Refer to the resource reference documentation, for example
AdBreaks ,
for a resource specific pageSize value.
The API might return fewer results than the number requested (including zero
results), even if not at the end of the collection. Use the presence of the
nextPageToken field to determine if there are additional results in the
collection.
Response messages for collections define a string nextPageToken field, which
can be used to retrieve the next page. The nextPageToken field is empty when
the end of the collection is reached. This is the only way to determine if you
have reached the end of a collection.
Request messages for collections define an optional string pageToken field to
advance to the next page in the collection. Changes to the pageSize in a
request for subsequent pages are allowed. All other arguments must be the same;
if any arguments are different, the API returns an INVALID_ARGUMENT error.
Example
cURL
Initial request
curl https://admanager.googleapis.com/v1/networks/123456/adUnits?pageSize = 500
{
"adUnits" : [ ... ] ,
"nextPageToken" : "eCGwAcs6hUerggzd2DGv"
}
Next page request
curl https://admanager.googleapis.com/v1/networks/123456/adUnits?pageSize = 500&pageToken = eCGwAcs6hUerggzd2DGv
{
"adUnits" : [ ... ]
}
Total size
Response messages for collections provide an integer totalSize that represents
the total number of entities after filtering is applied. This field is only
populated when requested in the field mask .
GET https://admanager.googleapis.com/v1/networks/123456/adUnits?$fields=adUnits,nextPageToken,totalSize
Order results
Request messages for collections define a string orderBy field to specify
sorting order.
Values should be a comma separated list of fields. For example: foo,bar . The
default sorting order is ascending. To specify descending order for a field,
append a desc suffix; for example: foo desc, bar . Redundant space
characters in the syntax are ignored. The orderBy values foo, bar desc , foo , bar desc , and foo,bar desc are all equivalent. Subfields are specified
with a . character, such as foo.bar or address.street .
Ordering is only supported on primitive fields.
Skip results
Methods for a paginated operation define an integer skip field to skip
results. The skip value refers to the number of individual resources to skip,
not the number of pages.
For example:
A request with no page token and a skip value of 30 returns a single page of
results starting with the 31st result.
A request with a page token corresponding to the 51st result (because the first
50 results were returned on the first page) and a skip value of 30 returns a
single page of results starting with the 81st result.
If a skip value is provided that causes the cursor to move past the end of the
collection of results, the response is 200 OK with an empty result set with no
nextPageToken .
Important: The skip field should not be used as a substitute for
pagination. The pagination token ensures the response is from the same initial
result set.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-28 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-28 UTC."],[],["The Ad Manager API paginates data collections, using `pageSize` (default 50, max 1000) to limit results per page. `nextPageToken` in responses indicates further pages; an empty token signifies the end. Requests use `pageToken` to advance and `orderBy` to sort results (ascending default, \"desc\" for descending). `skip` allows skipping resources but should not replace pagination. `totalSize` represents the total number of filtered results.\n"]]
