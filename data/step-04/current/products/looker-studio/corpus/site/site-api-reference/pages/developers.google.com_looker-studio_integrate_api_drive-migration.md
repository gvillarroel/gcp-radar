---
title: "Migrating from the Drive API \_|\_ Integrate and share \_|\_ Google for Developers"
url: https://developers.google.com/looker-studio/integrate/api/drive-migration
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/looker-studio/integrate/api
source_metadata:
  url: https://developers.google.com/looker-studio/integrate/api/drive-migration
  title: "Migrating from the Drive API \_|\_ Integrate and share \_|\_ Google for\
    \ Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Looker Studio
Integrate
Migrating from the Drive API
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This guide explains how to migrate code using the Drive API for permission management to the Looker Studio API, providing equivalent Looker Studio API code snippets for common Drive API endpoints.
The Looker Studio API has limited file management functionality compared to the Drive API, with only an equivalent endpoint for listing files ( Files: list ).
While the Drive API allows managing multiple permission objects per file, Looker Studio assets have a single, always-existing permission object, leading to different endpoint usage for permission control.
Despite differences in managing permissions, both APIs offer similar functionalities for updating permissions, with the exception of setting expiration times on Looker Studio permissions.
Developers should use appropriate HTTP libraries for their chosen language when making calls to the Looker Studio API, as there are no dedicated client libraries available.
This document outlines how to migrate code using the Drive API for permission
management to the Looker Studio API. For common Drive API endpoints, it shows
the corresponding Looker Studio API code.
Note: There are no client libraries for using the Looker Studio API. To make
these calls, use an appropriate HTTP library for your language.
Files
For the Drive API files endpoints, the Looker Studio API only has an equivalent
endpoint for the Files: list endpoint.
List
API
Method
Endpoint
Drive
POST
/drive/v3/files
Looker Studio
GET
/v1/assets:search
Comparison:
Drive
const oAuthToken = '123' // This should be replaced with a valid OAuth token.
fetch ( `https://www.googleapis.com/drive/v3/files` , {
headers : {
Authorization : `Bearer ${ oAuthToken } `
},
method : "POST" ,
})
Looker Studio
const oAuthToken = '123' // This should be replaced with a valid OAuth token.
fetch ( `https://datastudio.googleapis.com/v1/assets:search?assetTypes={ASSET_TYPE}` , {
headers : {
Authorization : `Bearer ${ oAuthToken } `
}
})
See search assets .
Permissions
Create, Delete, And Get
API
Method
Endpoint
Drive
POST
/drive/v3/files/fileId/permissions
Drive
DELETE
/drive/v3/files/fileId/permissions/permissionId
Drive
GET
/drive/v3/files/fileId/permissions/permissionId
There are no corresponding endpoints in the Looker Studio API for managing
multiple Permissions objects. There is only one permissions object for a
Looker Studio asset, and it always exists.
To remove someone from an asset, see revoke all permissions
To add someone to an asset, see add members
To view a permissions object for an asset, see get permissions
List
There isn't a 1-to-1 match between Drive and Looker Studio, but the endpoints
serve similar goals. The main difference is that a Drive file can have many
permissions objects, and Looker Studio has exactly one.
API
Method
Endpoint
Drive
GET
/drive/v3/files/fileId/permissions
Looker Studio
GET
/v1/assets/assetId/permissions
Comparison:
Drive
This following code lists all the permissions objects for the Drive API.
Depending on your code, you may call this method multiple times using pagination
tokens (as shown) to ensure you can see all of the permissions that are set for
a file.
const fileId = '123' ; // This should be replaced with a valid Drive ID.
const oAuthToken = '123' ; // This should be replaced with a valid OAuth token.
let nextPageToken = undefined ;
let permissions = [];
do {
const permissionsData = await fetch ( `https://www.googleapis.com/drive/v3/files/ ${ fileId } /permissions` , {
headers : {
Authorization : `Bearer ${ oAuthToken } `
}
});
nextPageToken = permissionsData . nextPageToken ;
permissions = permissions . concat ( permissionsData . permissions )
} while ( nextPageToken !== undefined );
Looker Studio
Since there is only one permission object for a Looker Studio asset, you don't
have to account for pagination.
const oAuthToken = '123' // This should be replaced with a valid OAuth token.
const assetId = '123' // This should be replaced with a valid asset ID.
fetch ( `https://datastudio.googleapis.com/v1/assets/{ASSET_ID}/permissions` , {
headers : {
Authorization : `Bearer ${ oAuthToken } `
}
}
See get permissions .
Update
For updating permissions, the Looker Studio and Drive APIs have very similar
functionality. The main difference is you cannot set an expirationTime on a
Looker Studio permission.
API
Method
Endpoint
Drive
PATCH
/drive/v3/files/fileId/permissions/permissionId
Looker Studio
PATCH
/v1/assets/assetId/permissions
Comparison:
Drive
const fileId = '123' ; // This should be replaced with a valid Drive ID.
const oAuthToken = '123' ; // This should be replaced with a valid OAuth token.
const newPermissionsObject = {
expirationTime : '...' ,
role : 'owner' , // Or any other option
}
fetch ( `https://www.googleapis.com/drive/v3/files/ ${ fileId } /permissions/permissionId` , {
headers : {
Authorization : `Bearer ${ oAuthToken } `
},
method : "PATCH" ,
body : JSON . stringify ( newPermissionsObject )
})
Looker Studio
const oAuthToken = '123' // This should be replaced with a valid OAuth token.
const assetId = '123' // This should be replaced with a valid asset ID.
const newPermissionsObject = {
permissions : {
//...
}
}
fetch ( `https://datastudio.googleapis.com/v1/assets/ ${ assetId } /permissions` , {
headers : {
Authorization : `Bearer ${ oAuthToken } `
},
method : "PATCH" ,
body : JSON . stringify ({
name : assetId ,
permissions : newPermissionsObject
})
})
For use-case specific alternatives, see:
add members
revoke all permissions
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-03 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-03 UTC."],[],[]]
