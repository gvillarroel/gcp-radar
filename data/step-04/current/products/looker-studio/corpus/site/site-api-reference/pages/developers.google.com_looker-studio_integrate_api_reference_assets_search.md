---
title: "Assets: search \_|\_ Integrate and share \_|\_ Google for Developers"
url: https://developers.google.com/looker-studio/integrate/api/reference/assets/search
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/looker-studio/integrate/api
source_metadata:
  url: https://developers.google.com/looker-studio/integrate/api/reference/assets/search
  title: "Assets: search \_|\_ Integrate and share \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Looker Studio
Integrate
Reference
Assets: search
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Search for specific Looker Studio assets using parameters like asset type, title, owner, and more.
Filter search results to include or exclude trashed assets.
Order results by title and control the number of results per page using pagination.
Requires authorization with specific scopes for data access.
The API response includes a list of matching assets and a token for retrieving subsequent pages.
Search a user's Looker Studio assets.
Request
HTTP request
GET https://datastudio.googleapis.com/v1/assets:search
Parameters
Parameter name
Type
Description
assetTypes
Array< AssetType >
Required . The asset type to search. Exactly one asset type must be specified.
title
string
The search string. By default, the string is checked against the title and description of the asset. See the Examples section for advanced search strings.
includeTrashed
boolean
Defaults to false .
When this parameter is set to true , only assets from the trash are included.
When this parameter is set to false , only assets not in the trash are included.
owner
string
The asset owner's email.
orderBy
string
The order of the results. You can sort by the following fields:
title
last_viewed_by_me
create_time
last_accessed_time
id
pageSize
number
The number of results to include per page. Defaults to 1000.
pageToken
string
A token identifying a page of results to return. To paginate results, use a nextPageToken value or previousPageToken value from another request.
Authorization
This request requires authorization with at least one of the following scopes:
Scope
https://www.googleapis.com/auth/datastudio.readonly
https://www.googleapis.com/auth/datastudio
Request body
Don't supply a request body with this method.
Response
If successful, this method returns a response body with the following structure:
{
"assets" : [ Asset ],
"nextPageToken" : string
}
Property name
Type
Description
assets
Array< Asset >
The list of assets.
nextPageToken
string
A token to retrieve the next page of results. This property is only present when the number of results is greater than the request pageSize . An empty nextPageToken indicates that there are no more results to return.
previousPageToken
string
A token to retrieve the previous page of results. An empty previousPageToken indicates the beginning of the result set.
Examples
You can pass advanced search strings in the title field.
You can use multiple search types in a single search string.
See the following table for supported search string syntax. You can combine
multiple search strings.
Filter
Definition
Examples
Creator
Search for assets created by a specific user.
creator:me
creator:user@example.com
Owner
Search for assets owned by a specific user.
owner:me
owner:user@example.com
Project
Search for assets in a project.
projectNumber:123456789
Workspace
Search for assets in a workspace or folder.
parentWorkspace:2a080c66-50cb-4399-92a8-74c534da2de9
From
Search for assets that a user has shared with you.
from:user@example.com
To
Search for assets that you have shared with a user or group.
to:user@example.com
to:example-group@googlegroups.com
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-22 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-22 UTC."],[],[]]
