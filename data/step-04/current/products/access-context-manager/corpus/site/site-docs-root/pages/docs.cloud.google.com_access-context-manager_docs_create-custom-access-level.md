---
title: "Creating a custom access level \_|\_ Access Context Manager \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/access-context-manager/docs/create-custom-access-level
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/access-context-manager/docs
source_metadata:
  url: https://docs.cloud.google.com/access-context-manager/docs/create-custom-access-level
  title: "Creating a custom access level \_|\_ Access Context Manager \_|\_ Google\
    \ Cloud Documentation"
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
Creating a custom access level
Stay organized with collections
Save and categorize content based on your preferences.
After a custom access level is created, it can
be managed in the same manner as basic access levels .
For details about building Common Expression Language (CEL) expressions for
custom access levels, refer to the
custom access level specification .
Important: You must have a paid subscription to use device attributes
in custom access level expressions. You can sign up
if interested.
Console
To create a custom access level:
Open the Access Context Manager page in the Google Cloud console.
Open the Access Context Manager page
If you are prompted, select your organization.
At the top of the Access Context Manager page, click New .
In the New Access Level pane:
In the Access level title box, enter a title for the access level.
The title must be at most 50 characters, start with a letter, and can
contain only numbers, letters, underscores, and spaces.
Following Create Conditions in , select Advanced Mode .
In the Conditions section, enter the expressions for your custom
access level. The condition must resolve to a single boolean value.
For examples and more information about Common Expression Language
(CEL) support and custom access levels, see the Custom access level
specification .
Click Save .
gcloud
Before you begin
If it doesn't exist yet, create an access policy for
your organization.
To create a custom access level using the gcloud command-line tool, use the
gcloud access-context-manager levels create command.
gcloud access-context-manager levels create LEVEL_NAME \
--title = TITLE \
--custom-level-spec = FILE \
--description = DESCRIPTION \
--policy = POLICY_NAME
Where:
LEVEL_NAME is a unique name for the access level. It must
begin with a letter and include only letters, numbers, and
underscores. The name can be a maximum of 50 characters.
TITLE is the short, human-readable title for the access
level.
FILE is a .yaml file that contains your CEL expression
formatted as a single key-value pair:
expression: " CEL_EXPRESSION " .
For examples and more information about Common Expression Language (CEL)
support and custom access levels, see the
Custom access level specification .
DESCRIPTION (optional) is a human-readable description of the
access level.
POLICY_NAME is the numeric name of your organization's
access policy.
Optionally, you can include any of the
gcloud -wide flags .
custom-level-spec YAML file
When you use the gcloud command-line tool to create a custom access level, you must provide
a .yaml file for the custom-level-spec option. The .yaml file defines
a CEL expression that resolves to a single boolean value. The .yaml file
must contain a single key-value pair formatted as
expression: " CEL_EXPRESSION " . The value for expression must
be a string.
Example YAML file
expression: "device.encryption_status == DeviceEncryptionStatus.ENCRYPTED && (origin.region_code in ['US'] || device.is_admin_approved_device)"
Example command
gcloud access-context-manager levels create Custom_Trust \
--custom-level-spec = customspec.yaml \
--description = "Custom access level for corp." \
--title = "Custom Trust Level" \
--policy = 1521580097614100
REST
Before you begin
If it doesn't exist yet, create an access policy for
your organization.
To create a custom access level, use the
accessPolicies.accessLevels.create
method.
Request body
In the request body for the call, include an instance of the AccessLevel
object.
{
"name" : s tr i n g ,
"title" : s tr i n g ,
"description" : s tr i n g ,
"custom" : {
"expr" : {
"expression" : s tr i n g ,
"title" : s tr i n g ,
"description" : s tr i n g
}
}
}
For the custom field, create an object that includes the CEL expressions
for your custom access level. The complete expression must resolve to a
boolean value. The title and description fields are optional.
Example
{
"name" : "example_custom_level" ,
"title" : "Example custom level" ,
"description" : "An example custom access level." ,
"custom" : {
"expr" : {
"expression" : "device.is_corp_owned == true || (device.os_type != OsType.OS_UNSPECIFIED && device.is_admin_approved_device == true)" ,
"title" : "Check for known devices" ,
"description" : "Permits requests from corp-owned devices and admin-approved devices with a known OS."
}
}
}
RPC
Before you begin
If it doesn't exist yet, create an access policy for
your organization.
To create a custom access level, call
CreateAccessLevel .
For the access_level field, include an instance of AccessLevel .
Fields
name
Type
string
Description
Required.
The resource name for the access level. The
POLICY_ID is the numeric name of your
Organization's access policy. The SHORT_NAME
must begin with a letter, and
include only letters, numbers, and underscores.
Format:
accessPolicies/ policy_id /accessLevels/ short_name
title
Type
string
Description
A human-readable label for the access level. Access levels
must have unique names.
description
Type
string
Description
A description of the access level.
custom
Type
string
Description
The CEL expressions for your custom access level. The
complete expression must resolve to a boolean value.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
