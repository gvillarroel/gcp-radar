---
title: "Method: chromeosdevices.list \_|\_ Admin console \_|\_ Google for Developers"
url: https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices/list
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/workspace/admin/directory/reference/rest
source_metadata:
  url: https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices/list
  title: "Method: chromeosdevices.list \_|\_ Admin console \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Admin console
Reference
Send feedback
Method: chromeosdevices.list
Stay organized with collections
Save and categorize content based on your preferences.
Retrieves a paginated list of Chrome OS devices within an account.
HTTP request
GET https://admin.googleapis.com/admin/directory/v1/customer/{customerId}/devices/chromeos
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
customerId
string
The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the my_customer alias to represent your account's customerId . The customerId is also returned as part of the Users resource .
Query parameters
Parameters
maxResults
integer
Maximum number of results to return. Value should not exceed 300.
orderBy
enum ( OrderBy )
Device property to use for sorting results.
orgUnitPath
string
The full path of the organizational unit (minus the leading / ) or its unique ID.
pageToken
string
The pageToken query parameter is used to request the next page of query results. The follow-on request's pageToken query parameter is the nextPageToken from your previous response.
projection
enum ( Projection )
Determines whether the response contains the full list of properties or only a subset.
query
string
Search string in the format given at chromeosdevices.list query operators .
sortOrder
enum ( SortOrder )
Whether to return results in ascending or descending order. Must be used with the orderBy parameter.
includeChildOrgunits
boolean
Return devices from all child orgunits, as well as the specified org unit. If this is set to true, 'orgUnitPath' must be provided.
Request body
The request body must be empty.
Response body
If successful, the response body contains data with the following structure:
JSON representation
{
"kind" : string ,
"etag" : string ,
"chromeosdevices" : [
{
object ( ChromeOsDevice )
}
] ,
"nextPageToken" : string
}
Fields
kind
string
Kind of resource this is.
etag
string
ETag of the resource.
chromeosdevices[]
object ( ChromeOsDevice )
A list of Chrome OS Device objects.
nextPageToken
string
Token used to access the next page of this result. To access the next page, use this token's value in the pageToken query string of this request.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/admin.directory.device.chromeos
https://www.googleapis.com/auth/admin.directory.device.chromeos.readonly
For more information, see the Authorization guide .
OrderBy
Enums
ANNOTATED_LOCATION
Chrome device location as annotated by the administrator.
ANNOTATED_USER
Chromebook user as annotated by administrator.
LAST_SYNC
The date and time the Chrome device was last synchronized with the policy settings in the Admin console.
NOTES
Chrome device notes as annotated by the administrator.
SERIAL_NUMBER
The Chrome device serial number entered when the device was enabled.
STATUS
Chrome device status. For more information, see the <a chromeosdevices .
Projection
The type of projection to show for the devices.
Enums
BASIC
Includes only the basic metadata fields (e.g., deviceId, serialNumber, status, and user)
FULL
Includes all metadata fields
SortOrder
The sorting order that should be applied to the device list.
Enums
ASCENDING
Ascending order.
DESCENDING
Descending order.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-10 UTC."],[],[]]
