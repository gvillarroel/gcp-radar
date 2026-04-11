---
title: "Argon2Parameters \_|\_ Identity Platform \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/identity-platform/docs/reference/rest/v1/Argon2Parameters
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/identity-platform/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/identity-platform/docs/reference/rest/v1/Argon2Parameters
  title: "Argon2Parameters \_|\_ Identity Platform \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Identity Platform
Reference
Send feedback
Argon2Parameters
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
HashType
Version
The parameters for Argon2 hashing algorithm.
JSON representation
{
"hashLengthBytes" : integer ,
"hashType" : enum ( HashType ) ,
"parallelism" : integer ,
"iterations" : integer ,
"memoryCostKib" : integer ,
"version" : enum ( Version ) ,
"associatedData" : string
}
Fields
hashLengthBytes
integer
Required. The desired hash length in bytes. Minimum is 4 and maximum is 1024.
hashType
enum ( HashType )
Required. Must not be HASH_TYPE_UNSPECIFIED.
parallelism
integer
Required. The degree of parallelism, also called threads or lanes. Minimum is 1, maximum is 16.
iterations
integer
Required. The number of iterations to perform. Minimum is 1, maximum is 16.
memoryCostKib
integer
Required. The memory cost in kibibytes. Maximum is 32768.
version
enum ( Version )
The version of the Argon2 algorithm. This defaults to VERSION_13 if not specified.
associatedData
string ( bytes format)
The additional associated data, if provided, is appended to the hash value to provide an additional layer of security. A base64-encoded string if specified via JSON.
A base64-encoded string.
HashType
The types of the algorithm.
Enums
HASH_TYPE_UNSPECIFIED
The hash type is not specified.
ARGON2_D
An Argon2 variant, Argon2d.
ARGON2_ID
An Argon2 variant, Argonid. Recommended.
ARGON2_I
An Argon2 variant, Argon2i.
Version
The verion of the algorithm.
Enums
VERSION_UNSPECIFIED
The version is not specified.
VERSION_10
The previous version, 0x10.
VERSION_13
The current version, 0x13. The default value for version.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-30 UTC."],[],[]]
