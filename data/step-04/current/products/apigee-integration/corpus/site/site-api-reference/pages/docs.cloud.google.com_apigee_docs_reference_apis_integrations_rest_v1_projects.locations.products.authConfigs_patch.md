---
title: "Method: projects.locations.products.authConfigs.patch \_|\_ Apigee \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest/v1/projects.locations.products.authConfigs/patch
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest/v1/projects.locations.products.authConfigs/patch
  title: "Method: projects.locations.products.authConfigs.patch \_|\_ Apigee \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Apigee
Send feedback
Method: projects.locations.products.authConfigs.patch
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization Scopes
IAM Permissions
Updates an auth config. If credential is updated, fetch the encrypted auth config from Spanner, decrypt with Cloud KMS key, update the credential fields, re-encrypt with Cloud KMS key and update the Spanner record. For other fields, directly update the Spanner record. Returns the encrypted auth config.
HTTP request
PATCH https://integrations.googleapis.com/v1/{authConfig.name=projects/*/locations/*/products/*/authConfigs/*}
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
authConfig.name
string
Resource name of the SFDC instance projects/{project}/locations/{location}/authConfigs/{authConfig}.
Query parameters
Parameters
updateMask
string ( FieldMask format)
Field mask specifying the fields in the above AuthConfig that have been modified and need to be updated.
This is a comma-separated list of fully qualified names of fields. Example: "user.displayName,photo" .
Request body
The request body contains an instance of AuthConfig .
Response body
If successful, the response body contains an instance of AuthConfig .
Authorization Scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires one of the following IAM permissions on the name resource, depending on the resource type:
integrations.apigeeAuthConfigs.update
integrations.authConfigs.update
integrations.securityAuthConfigs.update
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-28 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-28 UTC."],[],[]]
