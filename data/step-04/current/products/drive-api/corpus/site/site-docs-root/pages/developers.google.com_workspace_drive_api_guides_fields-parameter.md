---
title: "Return specific fields \_|\_ Google Drive \_|\_ Google for Developers"
url: https://developers.google.com/workspace/drive/api/guides/fields-parameter
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/workspace/drive/api/guides/about-sdk
source_metadata:
  url: https://developers.google.com/workspace/drive/api/guides/fields-parameter
  title: "Return specific fields \_|\_ Google Drive \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Google Drive
Guides
Send feedback
Return specific fields
Stay organized with collections
Save and categorize content based on your preferences.
This document explains how to use the fields parameter in Google Drive.
To return the exact fields you need, and to improve performance, use the
fields system
parameter in
your method call.
For information on other system parameters that apply to Drive API,
see Alternative system parameters .
How the fields parameter works
The fields parameter uses a
FieldMask
for response filtering. Field masks are used to specify a subset of fields that
a request should return. Using a field mask is good design practice to make sure
that you don't request unnecessary data, which in turn helps avoid unnecessary
processing time.
If you don't specify the fields parameter, the server returns a default set of
fields specific to the method. For example, the
list method on the files method only returns the kind , id , name , and
mimeType fields. The get method on the
permissions resource returns a different set
of default fields.
For all methods of the about , comments (excluding delete ), and replies (excluding delete ) resources you must set the
fields parameter. These methods don't return a default set of fields.
After a server processes a valid request that includes the fields parameter,
it returns an HTTP 200 OK status code, along with the requested data. If the
fields parameter has an error or is otherwise invalid, the server returns an
HTTP 400 Bad Request status code, along with an error message stating what's
wrong with your fields selection. For example,
files.list(fields='files(id,capabilities,canAddChildren)') yields an error of
"Invalid field selection canAddChildren." The correct fields parameter for this
example is files.list(fields='files(id,capabilities/canAddChildren)') .
To determine the fields you can return using the fields parameter, visit the
documentation page of the resource you're querying. For example, to see what
fields you can return for a file, refer to the files resource documentation.
For more file-specific query terms, see Search query terms and operators .
Important: Use query parameters that support data pagination (such as
maxResults and nextPageToken ) to reduce the results of each query to a
manageable size. Otherwise, the performance gains possible with a partial
response might not be realized.
Field parameter format rules
The format of the fields request parameter value is loosely based on XPath
syntax. The following are formatting rules for the fields parameter. All these
rules use examples related to the files.get method.
Use a comma-separated list to select multiple fields, such as 'name,
mimeType' .
Use a/b to select field b that's nested within field a , such as
'capabilities/canDownload' . For more information, see Fetch the fields of
a nested resource .
Use a sub-selector to request a set of specific sub-fields of arrays or
objects by placing expressions in parentheses "()". For example,
'permissions(id)' returns only the permission ID for each element in the
permissions array.
To return all fields in an object, use an asterisk ( * ) as a wildcard in
field selections. For example, 'permissions/permissionDetails/*' selects
all available permission details fields per permission. Note that using the
wildcard can lead to negative performance impacts on the request.
Request
In this example, we provide the file ID path parameter and multiple fields as a query parameter in the request. The response returns the field values for the file ID.
GET https://www.googleapis.com/drive/v3/files/ FILE_ID ?fields=name,starred,shared
Response
{
"name": "File1",
"starred": false,
"shared": true
}
}
Fetch the fields of a nested resource
When a field refers to another resource, you can specify which fields of the
nested resource should be fetched.
For example, to retrieve the role field (nested resource) of the permissions
resource, use any of the following options:
permissions.get with fields=role .
permissions.get with fields=* to show all permissions fields.
files.get with fields=permissions(role) or fields=permissions/role .
files.get with fields=permissions to show all permissions fields.
changes.list with fields=changes(file(permissions(role))) .
To retrieve multiple fields, use a comma-separated list. For example,
files.list with fields=files(id,name,createdTime,modifiedTime,size) .
Request
In this example, we provide the file ID path parameter and multiple fields, including certain fields of the nested permissions resource, as a query parameter in the request. The response returns the field values for the file ID.
GET https : //www.googleapis.com/drive/v3/files/ FILE_ID ?fields=name,starred,shared,permissions(kind,type,role)
Response
{
"name" : "File1" ,
"starred" : false ,
"shared" : true ,
"permissions" : [
{
"kind" : "drive#permission" ,
"type" : "user" ,
"role" : "owner"
}
]
}
Alternative system parameters
Query parameters that apply to all Google Drive API operations are documented at
System Parameters .
Note: Per-user quotas are always enforced by the Drive API, and the
user's identity is determined from the access token passed in the request. The
quotaUser and userIp parameters can only be used for anonymous requests
against public files.
Related topics
Resolve errors
Troubleshoot authentication and authorization issues
Improve performance
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
