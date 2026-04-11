---
title: "REST Resource: organizations.protectedResources \_|\_ Cloud Key Management\
  \ Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/organizations.protectedResources
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/organizations.protectedResources
  title: "REST Resource: organizations.protectedResources \_|\_ Cloud Key Management\
    \ Service \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Cloud KMS
Reference
Send feedback
REST Resource: organizations.protectedResources
Stay organized with collections
Save and categorize content based on your preferences.
Resource: ProtectedResource
JSON representation
Methods
Resource: ProtectedResource
Metadata about a resource protected by a Cloud KMS key.
JSON representation
{
"name" : string ,
"project" : string ,
"projectId" : string ,
"cloudProduct" : string ,
"resourceType" : string ,
"location" : string ,
"labels" : {
string : string ,
...
} ,
"cryptoKeyVersion" : string ,
"cryptoKeyVersions" : [
string
] ,
"createTime" : string
}
Fields
name
string
The full resource name of the resource. Example: //compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1 .
project
string
Format: projects/{PROJECT_NUMBER} .
projectId
string
The ID of the project that owns the resource.
cloudProduct
string
The Cloud product that owns the resource. Example: compute
resourceType
string
Example: compute.googleapis.com/Disk
location
string
Location can be global , regional like us-east1 , or zonal like us-west1-b .
labels
map (key: string, value: string)
A key-value pair of the resource's labels (v1) to their values.
cryptoKeyVersion
string
The name of the Cloud KMS CryptoKeyVersion used to protect this resource via CMEK. This field is empty if the Google Cloud product owning the resource does not provide key version data to Asset Inventory. If there are multiple key versions protecting the resource, then this is same value as the first element of cryptoKeyVersions.
cryptoKeyVersions[]
string
The names of the Cloud KMS CryptoKeyVersion used to protect this resource via CMEK. This field is empty if the Google Cloud product owning the resource does not provide key versions data to Asset Inventory. The first element of this field is stored in cryptoKeyVersion.
createTime
string ( Timestamp format)
Output only. The time at which this resource was created. The granularity is in seconds. Timestamp.nanos will always be 0.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
Methods
search
Returns metadata about the resources protected by the given Cloud KMS CryptoKey in the given Cloud organization.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-30 UTC."],[],[]]
