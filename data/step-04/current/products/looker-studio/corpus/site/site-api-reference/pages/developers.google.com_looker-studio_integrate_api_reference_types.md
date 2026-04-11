---
title: "Types \_|\_ Integrate and share \_|\_ Google for Developers"
url: https://developers.google.com/looker-studio/integrate/api/reference/types
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/looker-studio/integrate/api
source_metadata:
  url: https://developers.google.com/looker-studio/integrate/api/reference/types
  title: "Types \_|\_ Integrate and share \_|\_ Google for Developers"
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
Types
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Looker Studio assets include reports and data sources, each with properties like name, title, owner, and creation/modification timestamps.
Assets have permissions that define user roles, including viewer, editor, owner, and link-based access.
Members can be individual users, groups, domains, or service accounts, with specific prefixes used for identification.
Link sharing allows "anyone with the link" or "anyone in the domain with the link" to view or edit based on the designated role.
Permissions are managed through a map of roles to members, with an etag for concurrency control.
Assets
A Looker Studio asset.
{
"assetType" : AssetType ,
"updateTime" : Timestamp ,
"name" : string ,
"title" : string ,
"trashed" : boolean ,
"updateByMeTime" : Timestamp ,
"owner" : string ,
"createTime" : Timestamp ,
"lastViewByMeTime" : Timestamp ,
"description" : string ,
"creator" : string
}
Property name
Type
Description
assetType
AssetType
The type of asset.
updateTime
Timestamp
Date the asset was last modified.
name
string
The name (ID) of the asset.
title
string
The title of the asset.
trashed
boolean
Indicates if the asset is in the trash.
updateByMeTime
Timestamp
Date the asset was last modified by the user making this API call.
owner
string
The owner of the asset.
createTime
Timestamp
Date the asset was created.
lastViewByMeTime
Timestamp
Date the asset was last viewed by the user making this API call.
description
string
Description of the report (only supported for the REPORT AssetType).
creator
string
The creator of the asset.
AssetType
The types of Looker Studio assets.
Enum value
Description
REPORT
A report asset.
DATA_SOURCE
A data source asset.
Role
A role in a permission.
Enum value
Description
VIEWER
Describes members that have been granted view permissions.
EDITOR
Describes members that have been granted edit permissions.
OWNER
Describes members that are owners.
LINK_VIEWER
Describes members that have view permissions.
LINK_EDITOR
Describes members that have edit permissions.
Member
A member of a permissions object.
Members of the VIEWER and EDITOR Role are represented using the following
prefixes:
Member prefix
Description
Example
user:
A Google account.
user:gus@gmail.com
group:
A Google Group.
group:api@googlegroups.com
domain:
The domain of a Google Workspace or Cloud Identity organization.
domain:example.com
serviceAccount:
A Google Cloud Project service account.
serviceAccount:gus@project.iam.gserviceaccount.com
Members of the LINK_VIEWER or LINK_EDITOR Role are represented using one
of the following:
Member name/prefix
Description
allUsers
Indicates that Anyone with the link can view/edit .
domain:
Indicates that Anyone in domain with the link can
view/edit .
Note: An asset can either have a LINK_VIEWER or LINK_EDITOR role, not both.
Permissions
Looker Studio permissions for an asset.
{
"permissions" : {
[ Role ] : {
"members" : Member []
}
},
"etag" : string
}
Property name
Type
Description
permissions
{ Role : Member[] }
A map of role to members.
etag
string
etag to detect and fail
concurrent modifications.
Examples
A Looker Studio asset shared with a three editors:
{
"permissions" : {
"OWNER" : {
"members" : [
"user:gus@gmail.com"
]
},
"EDITOR" : {
"members" : [
"user:jen@gmail.com" ,
"user:amy@gmail.com" ,
"group:api@googlegroups.com"
]
}
},
"etag" : "BwXe3ECCjl0="
}
A Looker Studio asset shared with one editor and viewable by anyone with the link.
{
"permissions" : {
"OWNER" : {
"members" : [
"user:gus@example.com"
]
},
"EDITOR" : {
"members" : [
"group:gus-team@example.com"
]
},
"LINK_VIEWER" : {
"members" : [
"allUsers"
]
}
},
"etag" : "OBr4bWCCtl0"
}
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-03 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-03 UTC."],[],[]]
