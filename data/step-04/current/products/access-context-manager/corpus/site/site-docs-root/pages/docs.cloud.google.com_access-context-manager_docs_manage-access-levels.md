---
title: "Managing access levels \_|\_ Access Context Manager \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/access-context-manager/docs/manage-access-levels
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/access-context-manager/docs/concepts
source_metadata:
  url: https://docs.cloud.google.com/access-context-manager/docs/manage-access-levels
  title: "Managing access levels \_|\_ Access Context Manager \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Access Context Manager
Guides
Send feedback
Managing access levels
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to manage existing access levels. You can:
List access levels
List access levels (formatted)
Describe an access level
Update an access level
Delete an access level
Before you begin
Warning: If you share an access level across Google Cloud and Google Workspace,
modifying or deleting that access level can impact user access. For more
information, see the Google Workspace documentation .
Set your default access policy for using the gcloud command-line tool.
-or-
Get the name of your policy. The policy name is required
for commands using the gcloud command-line tool and making API calls. If you set a default
access policy, you do not need to specify the policy for the gcloud command-line tool.
Ensure that you have an Identity and Access Management (IAM) role at the organization
level that lets you manage access levels. Ask your administrator to grant
you one of the following roles, or a custom role with the same permissions:
To view access levels: Access Context Manager Reader
( roles/accesscontextmanager.policyReader )
To view and change access levels:
Access Context Manager Editor
( roles/accesscontextmanager.policyEditor ) or
Access Context Manager Admin
( roles/accesscontextmanager.policyAdmin )
List access levels
Console
To list all access levels, open the Access Context Manager
page in the Google Cloud console and then, if prompted,
select your organization. Your organization's access levels
are displayed in a grid on the page, including details about the
configuration of each access level.
Open the Access Context Manager page
gcloud
To list all access levels, use the list command.
gcloud access-context-manager levels list \
[ --policy = POLICY_NAME ]
Where:
POLICY_NAME is the name of your organization's access policy.
This value is required only if you haven't set a
default access policy .
The output will look something like:
NAME TITLE LEVEL_TYPE
Device_Trust Device_Trust Extended Basic
Service_Group_A Service_Group_A Basic
API
To list all the access levels for a policy, call
accessLevels.list .
GET https://accesscontextmanager.googleapis.com/v1alpha/accessPolicies/ POLICY_NAME /accessLevels
Where:
POLICY_NAME is the name of your organization's access policy.
Request body
The request body must be empty.
Optional parameters
Optionally, include one or more of the following query parameters.
Parameters
pageSize
number
By default, the list of
access levels returned by accessLevels.list
is paginated. Each page is limited to 100 access levels.
You can use this parameter to modify the number of access levels
that are returned per page.
pageToken
string
If the number of access levels returned by your call exceeded the
page size, the response body will include a page token.
You can use this parameter in a subsequent call to obtain
the next page of results.
accessLevelFormat
enum( LevelFormat )
Normally, access levels are returned as they are defined, either
as BasicLevel or CustomLevel .
You can specify the value CEL for this parameter to
return BasicLevels as CustomLevels in
Cloud Common Expression Language.
Response body
If successful, the response body for the call contains an
AccessLevels object that lists the access levels,
and a nextPageToken string. nextPageToken only
has a value if the number of access levels returned exceeds the
page size . Otherwise, nextPageToken is returned as an
empty string.
List access levels (formatted)
Using the gcloud command-line tool, you can obtain a list of your access levels in YAML or JSON
format.
To get a formatted list of access levels, use the list command.
gcloud access-context-manager levels list \
--format = FORMAT \
[ --policy = POLICY_NAME ]
Where:
FORMAT is one of the following values:
list (YAML format)
json (JSON format)
POLICY_NAME is the name of your organization's access policy.
This value is required only if you haven't set a
default access policy .
The YAML output will look something like:
- basic : { 'conditions' : [{ 'ipSubnetworks' : [ '8.8.0/24' ]}]}
description : Level for corp access.
name : accessPolicies/165717541651/accessLevels/corp_level
title : Corp Level
- basic : { 'combiningFunction' : 'OR' , 'conditions' : [{ 'ipSubnetworks' : [ '8.8.0/24' ]}]}
description : Level for net access.
name : accessPolicies/165717541651/accessLevels/net_level
title : Net Level
The JSON output will look something like:
[
{
"basic" : {
"conditions" : [
{
"ipSubnetworks" : [
"8.8.0/24"
]
}
]
},
"description" : "Level for corp access." ,
"name" : "accessPolicies/165717541651/accessLevels/corp_level" ,
"title" : "Corp Level"
},
{
"basic" : {
"combiningFunction" : "OR" ,
"conditions" : [
{
"ipSubnetworks" : [
"8.8.0/24"
]
}
]
},
"description" : "Level for net access." ,
"name" : "accessPolicies/165717541651/accessLevels/net_level" ,
"title" : "Net Level"
}
]
Describe an access level
Console
Using Google Cloud console, refer to the steps to
list access levels . When you list your access
levels, details are provided in the grid that appears.
gcloud
Listing access levels only provides their name, title, and level type. To
get detailed information about what a level actually does, use the
describe command.
gcloud access-context-manager levels describe LEVEL_NAME \
[ --policy = POLICY_NAME ]
Where:
LEVEL_NAME is the name of the access level you want to
describe.
POLICY_NAME is the name of your organization's access policy.
This value is required only if you haven't set a
default access policy .
The command will print information about the level formatted as YAML. For
example, if the level restricted access to certain operating system
versions, the output might look something like:
basic :
conditions :
- devicePolicy :
allowedEncryptionStatuses :
- ENCRYPTED
osConstraints :
- minimumVersion : 10.13.6
osType : DESKTOP_MAC
- minimumVersion : 10.0.18219
osType : DESKTOP_WINDOWS
- minimumVersion : 68.0.3440
osType : DESKTOP_CHROME_OS
requireScreenlock : true
name : accessPolicies/330193482019/accessLevels/Device_Trust
title : Device_Trust Extended
Note: To use the output of the describe command to update or create a basic
access level, send the response to a .yaml file, and then edit the file to
remove the name , title , description , basic , and conditions lines.
API
Listing access levels only provides the name, title, and type of the levels.
To get detailed information about an access level,
call accessLevels.get .
GET https://accesscontextmanager.googleapis.com/v1alpha/accessPolicies/ POLICY_NAME /accessLevels/ LEVEL_NAME
Where:
POLICY_NAME is the name of your organization's access policy.
LEVEL_NAME is the name of the access level you want to
describe.
Request body
The request body must be empty.
Optional parameters
Optionally, include the accessLevelFormat
query parameter. Normally, access levels are returned as they are defined,
either as BasicLevel or CustomLevel .
You can specify the value CEL for this parameter to return BasicLevels
as CustomLevels in Cloud Common Expression Language.
Response body
If successful, the response body for the call contains an
AccessLevel resource that includes details about
what the access level does, the last time the level was updated, and more.
Update an access level
This section describes how to update individual access levels. To update
all of your organization's access levels in one operation, see
Making bulk changes to access levels .
Console
To update an access level:
Open the Access Context Manager page in the Google Cloud console.
Open the Access Context Manager page
If you are prompted, select your organization.
In the grid, click the name of the access level that you want to update.
In the Edit Access Level pane, make changes to the access level.
For a complete list of the attributes that you can add or modify,
read about access level attributes .
Click Save .
In addition to updating or removing any existing conditions,
you can add new conditions and add new attributes to existing
conditions.
gcloud
Use the update command to update an access level.
Basic access level:
gcloud access-context-manager levels update LEVEL_NAME \
--basic-level-spec = FILE \
[ --policy = POLICY_NAME ]
Custom access level:
gcloud access-context-manager levels update LEVEL_NAME \
--custom-level-spec = FILE \
[ --policy = POLICY_NAME ]
Where:
LEVEL_NAME is the name of the access level that you want to
update.
FILE is the name of a .yaml file that defines
the conditions for the access level (for basic access levels)
or a CEL expression that resolves to a single boolean
value (for custom access levels).
For a complete list of the attributes that you can use in your basic
access level conditions,
read about access level attributes .
POLICY_NAME is the name of your organization's access policy.
This value is required only if you haven't set a
default access policy .
You can include one or more of the following options.
Options
combine-function
This option is only used for basic access levels .
Determines how conditions are combined.
Valid values: AND , OR
description
A long-form description of the access level.
title
A short title for the access level. The access level's title
is displayed in the Google Cloud console.
You can include any of the gcloud-wide flags .
Example command
gcloud access-context-manager levels update Device_Trust \
--basic-level-spec = corpdevspec.yaml \
--combine-function = OR \
--description = 'Access level that conforms to updated corporate spec.' \
--title = 'Device_Trust Extended' \
--policy = 1034095178592
API
To update an access level, call accessLevels.patch .
PATCH https://accesscontextmanager.googleapis.com/v1/accessPolicies/ POLICY_NAME /accessLevels/ LEVEL_NAME ?updateMask= FIELDS
Where:
POLICY_NAME is the name of your organization's access policy.
LEVEL_NAME is the name of the access level you want to
describe.
FIELDS is a comma-separated list of
fully-qualified field names that you are updating.
Request body
The request body must include an AccessLevel
resource that specifies the changes you want to make to the access level.
Response body
If successful, the response body for the call contains an
Operation resource that provides details about the
patch operation.
Delete an access level
Console
To delete an access level:
Open the Access Context Manager page in the Google Cloud console
Open the Access Context Manager page
If you are prompted, select your organization.
In the grid, in the row for the access level that you want to delete,
click the more_vert button.
Click Delete .
In the dialog box that appears, confirm that you want to delete the
access level.
Note: Access levels can reference each other. Attempting to delete an
access level referenced by another will result in an error.
gcloud
To delete an access level:
Use the delete command to delete an access level.
gcloud access-context-manager levels delete LEVEL_NAME \
[ --policy = POLICY_NAME ]
Where:
LEVEL_NAME is the name of the access level that you want
to delete.
POLICY_NAME is the name of your organization's
access policy. This value is required only if you haven't set a
default access policy .
Confirm that you want to delete the access level.
For example:
You are about to delete level Device_Trust
Do you want to continue (Y/n)?
You should see output similar to the following:
Waiting for operation [accessPolicies/330193482019/accessLevels/Device_Trust/delete/1531171874311645] to complete...done.
Deleted level [Device_Trust].
Note: Access levels can reference each other. Attempting to delete an
access level referenced by another will result in an error.
API
To delete an access level, call accessLevels.delete .
DELETE https://accesscontextmanager.googleapis.com/v1alpha/accessPolicies/ POLICY_NAME /accessLevels/ LEVEL_NAME
Where:
POLICY_NAME is the name of your organization's access policy.
LEVEL_NAME is the name of the access level you want to
describe.
Request body
The request body must be empty.
Response body
If successful, the response body for the call contains an
Operation resource that provides details about the
delete operation.
Note: Access levels can reference each other. Attempting to delete an access
level referenced by another will result in an error.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
