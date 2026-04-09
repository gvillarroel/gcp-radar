---
title: "REST Resource: projects.locations.products.certificates \_|\_ Apigee \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest/v1/projects.locations.products.certificates
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest/v1/projects.locations.products.certificates
  title: "REST Resource: projects.locations.products.certificates \_|\_ Apigee \_\
    |\_ Google Cloud Documentation"
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
REST Resource: projects.locations.products.certificates
Stay organized with collections
Save and categorize content based on your preferences.
Resource: Certificate
JSON representation
Methods
Resource: Certificate
The certificate definition
JSON representation
{
"name" : string ,
"displayName" : string ,
"description" : string ,
"requestorId" : string ,
"credentialId" : string ,
"certificateStatus" : enum ( State ) ,
"validStartTime" : string ,
"validEndTime" : string ,
"rawCertificate" : {
object ( ClientCertificate )
}
}
Fields
name
string
Output only. Auto generated primary key
displayName
string
Name of the certificate
description
string
Description of the certificate
requestorId
string
Immutable. Requestor ID to be used to register certificate with trawler
credentialId
string
Immutable. Credential id that will be used to register with trawler INTERNAL_ONLY
certificateStatus
enum ( State )
Status of the certificate
validStartTime
string ( Timestamp format)
Output only. The timestamp after which certificate will be valid
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
validEndTime
string ( Timestamp format)
Output only. The timestamp after which certificate will expire
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
rawCertificate
object ( ClientCertificate )
Input only. Raw client certificate which would be registered with trawler
Methods
create
Creates a new certificate.
delete
Delete a certificate
get
Get a certificates in the specified project.
list
List all the certificates that match the filter.
patch
Updates the certificate by id.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-28 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-28 UTC."],[],[]]
