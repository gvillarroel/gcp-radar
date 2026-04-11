---
title: "Set default Key Access Justifications policy \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/assured-workloads/key-access-justifications/docs/set-default-policy
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/assured-workloads/key-access-justifications/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/assured-workloads/key-access-justifications/docs/set-default-policy
  title: "Set default Key Access Justifications policy \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Assured Workloads
Cloud provider access management
Key Access Justifications
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Set default Key Access Justifications policy
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
This page shows you how to configure default Key Access Justifications policies for
Assured Workloads. You can set a default Key Access Justifications policy for an
organization, folder, or project. The default Key Access Justifications policy is
automatically applied to new keys created within that resource, unless a
Key Access Justifications policy is set on the key when it is created. Default Key Access Justifications
policies are not applied to existing keys.
Before you begin
The ability to set default Key Access Justifications policies for Cloud KMS keys
is only available for the Japan Regions control package in
Assured Workloads.
Required IAM permissions
To get the permissions that
you need to create and manage default Key Access Justifications policies,
ask your administrator to grant you the
Key Access Justifications Policy Config Admin ( roles/cloudkms.keyAccessJustificationsPolicyConfigAdmin )
IAM role on the organization, folder, or project that contains the key.
For more information about granting roles, see Manage access to projects, folders, and organizations .
This predefined role contains
the permissions required to create and manage default Key Access Justifications policies. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to create and manage default Key Access Justifications policies:
cloudkms.keyAccessJustificationsConfig.getKeyAccessJustificationsPolicyConfig
cloudkms.keyAccessJustificationsConfig.updateKeyAccessJustificationsPolicyConfig
cloudkms.keyAccessJustificationsConfig.showEffectiveKeyAccessJustificationsPolicyConfig
You might also be able to get
these permissions
with custom roles or
other predefined roles .
Set a default Key Access Justifications policy
REST
Create or update a default Key Access Justifications policy on an organization
using the
organizations.updateKeyAccessJustificationsPolicyConfig
method:
curl "https://cloudkms.googleapis.com/v1/organizations/ ORGANIZATION_ID /kajPolicyConfig?updateMask=defaultKeyAccessJustificationPolicy" \
--request "PATCH" \
--header "authorization: Bearer TOKEN " \
--header "content-type: application/json" \
--data '{"name": "organizations/ ORGANIZATION_ID /kajPolicyConfig", "defaultKeyAccessJustificationPolicy": POLICY }'
Replace the following:
ORGANIZATION_ID : the ID of the organization for which
you want to set the default Key Access Justifications policy.
POLICY : the Key Access Justifications policy listing allowed
allowedAccessReasons , formatted as a JSON object—for example,
{"allowedAccessReasons": ["CUSTOMER_INITIATED_ACCESS",
"GOOGLE_INITIATED_SYSTEM_OPERATION"]} . For a list of
possible justification reasons, see
justification codes .
Create or update a default Key Access Justifications policy on a folder using the
folders.updateKeyAccessJustificationsPolicyConfig
method:
curl "https://cloudkms.googleapis.com/v1/folders/ FOLDER_ID /kajPolicyConfig?updateMask=defaultKeyAccessJustificationPolicy" \
--request "PATCH" \
--header "authorization: Bearer TOKEN " \
--header "content-type: application/json" \
--data '{"name": "folders/ FOLDER_ID /kajPolicyConfig", "defaultKeyAccessJustificationPolicy": POLICY }'
Replace the following:
FOLDER_ID : the ID of the folder for which you want to
set the default Key Access Justifications policy.
POLICY : the Key Access Justifications policy listing allowed
allowedAccessReasons , formatted as a JSON object—for example,
{"allowedAccessReasons": ["CUSTOMER_INITIATED_ACCESS",
"GOOGLE_INITIATED_SYSTEM_OPERATION"]} . For a list of
possible justification reasons, see
justification codes .
Create or update a default Key Access Justifications policy on a project using the
projects.updateKeyAccessJustificationsPolicyConfig
method:
curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT_ID /kajPolicyConfig?updateMask=defaultKeyAccessJustificationPolicy" \
--request "PATCH" \
--header "authorization: Bearer TOKEN " \
--header "content-type: application/json" \
--data '{"name": "projects/ PROJECT_ID /kajPolicyConfig", "defaultKeyAccessJustificationPolicy": POLICY }'
Replace the following:
PROJECT_ID : the ID of the project for which you want
to set the default Key Access Justifications policy.
POLICY : the Key Access Justifications policy listing allowed
allowedAccessReasons , formatted as a JSON object—for example,
{"allowedAccessReasons": ["CUSTOMER_INITIATED_ACCESS",
"GOOGLE_INITIATED_SYSTEM_OPERATION"]} . For a list of
possible justification reasons, see
justification codes .
Get a default Key Access Justifications policy
REST
Get metadata about the existing default Key Access Justifications policy on an
organization using the
organizations.getKajPolicyConfig
method:
curl "https://cloudkms.googleapis.com/v1/organizations/ ORGANIZATION_ID /kajPolicyConfig"
Replace ORGANIZATION_ID with the ID of the organization for
which you want to get the default Key Access Justifications policy.
The response is similar to the following:
{
"name" : "organizations/ ORGANIZATION_ID /kajPolicyConfig"
"defaultKeyAccessJustificationPolicy" : {
"allowedAccessReasons" : [
"CUSTOMER_INITIATED_ACCESS" ,
"GOOGLE_INITIATED_SYSTEM_OPERATION"
]
}
}
Get metadata about the existing default Key Access Justifications policy on a
folder using the
folders.getKajPolicyConfig
method:
curl "https://cloudkms.googleapis.com/v1/folders/ FOLDER_ID /kajPolicyConfig"
Replace FOLDER_ID with the ID of the folder for which you want
to get the default Key Access Justifications policy.
The response is similar to the following:
{
"name" : "folders/ FOLDER_ID /kajPolicyConfig"
"defaultKeyAccessJustificationPolicy" : {
"allowedAccessReasons" : [
"CUSTOMER_INITIATED_ACCESS" ,
"GOOGLE_INITIATED_SYSTEM_OPERATION"
]
}
}
Get metadata about the existing default Key Access Justifications policy on a
project using the
projects.getKajPolicyConfig
method:
curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT_ID /kajPolicyConfig"
Replace PROJECT_ID with the ID of the project for which you
want to get the default Key Access Justifications policy.
The response is similar to the following:
{
"name" : "project/ PROJECT_ID /kajPolicyConfig"
"defaultKeyAccessJustificationPolicy" : {
"allowedAccessReasons" : [
"CUSTOMER_INITIATED_ACCESS" ,
"GOOGLE_INITIATED_SYSTEM_OPERATION"
]
}
}
Get the effective default Key Access Justifications policy on a project
Projects inherit the default policy from their nearest ancestor. If there are
multiple default policies set on ancestors of a single project, you can get the
effective policy for the project to see the policy that is applied to new
Cloud KMS keys created in that project.
REST
Get metadata about the effective default Key Access Justifications policy on a
project using the
projects.showEffectiveKeyAccessJustificationsPolicyConfig
method:
curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT_ID :showEffectiveKeyAccessJustificationsPolicyConfig"
Replace PROJECT_ID with the ID of the project for which you
want to get the effective default Key Access Justifications policy.
The response is similar to the following:
{
"effectiveKajPolicy" : {
"name" : "folders/ FOLDER_ID /kajPolicyConfig"
"defaultKeyAccessJustificationPolicy" : {
"allowedAccessReasons" : [
"CUSTOMER_INITIATED_ACCESS" ,
"GOOGLE_INITIATED_SYSTEM_OPERATION"
]
}
}
}
What's next
You can also set Key Access Justifications policy on individual
keys .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
