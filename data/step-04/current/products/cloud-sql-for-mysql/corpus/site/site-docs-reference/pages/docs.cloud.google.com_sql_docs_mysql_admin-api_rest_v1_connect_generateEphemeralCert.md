---
title: "Method: connect.generateEphemeralCert \_|\_ Cloud SQL for MySQL \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/connect/generateEphemeralCert
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/sql/docs/mysql/admin-api
source_metadata:
  url: https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/connect/generateEphemeralCert
  title: "Method: connect.generateEphemeralCert \_|\_ Cloud SQL for MySQL \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Cloud SQL
MySQL
Reference
Send feedback
Method: connect.generateEphemeralCert
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
JSON representation
Response body
JSON representation
Authorization scopes
Examples
Try it!
Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the target instance. Users may use the certificate to authenticate as themselves when connecting to the database.
HTTP request
POST https://sqladmin.googleapis.com/v1/projects/{project}/instances/{instance}:generateEphemeralCert
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
project
string
Project ID of the project that contains the instance.
instance
string
Cloud SQL instance ID. This does not include the project ID.
Request body
The request body contains data with the following structure:
JSON representation
{
"public_key" : string ,
"access_token" : string ,
"readTime" : string ,
"validDuration" : string
}
Fields
public_key
string
PEM encoded public key to include in the signed certificate.
access_token
string
Optional. Access token to include in the signed certificate.
readTime
string ( Timestamp format)
Optional. Optional snapshot read timestamp to trade freshness for performance.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
validDuration
string ( Duration format)
Optional. If set, it will contain the cert valid duration.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
Response body
Ephemeral certificate creation request.
If successful, the response body contains data with the following structure:
JSON representation
{
"ephemeralCert" : {
object ( SslCert )
}
}
Fields
ephemeralCert
object ( SslCert )
Generated cert
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloud-platform
https://www.googleapis.com/auth/sqlservice.admin
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-24 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-24 UTC."],[],[]]
