---
title: "Method: projects.locations.products.authConfigs.create \_|\_ Apigee \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest/v1/projects.locations.products.authConfigs/create
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest/v1/projects.locations.products.authConfigs/create
  title: "Method: projects.locations.products.authConfigs.create \_|\_ Apigee \_|\_\
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
Method: projects.locations.products.authConfigs.create
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
Response body
Authorization Scopes
IAM Permissions
Creates an auth config record. Fetch corresponding credentials for specific auth types, e.g. access token for OAuth 2.0, JWT token for JWT. Encrypt the auth config with Cloud KMS and store the encrypted credentials in Spanner. Returns the encrypted auth config.
HTTP request
POST https://integrations.googleapis.com/v1/{parent=projects/*/locations/*/products/*}/authConfigs
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. "projects/{project}/locations/{location}" format.
Request body
The request body contains an instance of AuthConfig .
Response body
If successful, the response body contains a newly created instance of AuthConfig .
Authorization Scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permissions on the parent resource:
integrations.apigeeAuthConfigs.create
integrations.authConfigs.create
integrations.securityAuthConfigs.create
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-28 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-28 UTC."],[],[]]
