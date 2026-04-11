---
title: "Method: projects.locations.autonomousDatabases.generateWallet \_|\_ Oracle\
  \ Database at Google Cloud \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases/generateWallet
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/oracle/database/docs/reference/libraries
source_metadata:
  url: https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases/generateWallet
  title: "Method: projects.locations.autonomousDatabases.generateWallet \_|\_ Oracle\
    \ Database at Google Cloud \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Oracle Database at Google Cloud
Reference
Send feedback
Method: projects.locations.autonomousDatabases.generateWallet
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
JSON representation
Response body
JSON representation
Authorization scopes
IAM Permissions
GenerateType
Generates a wallet for an Autonomous Database.
HTTP request
POST https://oracledatabase.googleapis.com/v1/{name=projects/*/locations/*/autonomousDatabases/*}:generateWallet
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
name
string
Required. The name of the Autonomous Database in the following format: projects/{project}/locations/{location}/autonomousDatabases/{autonomousDatabase}.
Request body
The request body contains data with the following structure:
JSON representation
{
"type" : enum ( GenerateType ) ,
"isRegional" : boolean ,
"password" : string
}
Fields
type
enum ( GenerateType )
Optional. The type of wallet generation for the Autonomous Database. The default value is SINGLE.
isRegional
boolean
Optional. True when requesting regional connection strings in PDB connect info, applicable to cross-region Data Guard only.
password
string
Required. The password used to encrypt the keys inside the wallet. The password must be a minimum of 8 characters.
Response body
The response for AutonomousDatabase.GenerateWallet .
If successful, the response body contains data with the following structure:
JSON representation
{
"archiveContent" : string
}
Fields
archiveContent
string ( bytes format)
Output only. The base64 encoded wallet files.
A base64-encoded string.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the name resource:
oracledatabase.autonomousDatabases.generateWallet
For more information, see the IAM documentation .
GenerateType
The type of wallet generation.
Enums
GENERATE_TYPE_UNSPECIFIED
Default unspecified value.
ALL
Used to generate wallet for all databases in the region.
SINGLE
Used to generate wallet for a single database.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-30 UTC."],[],[]]
