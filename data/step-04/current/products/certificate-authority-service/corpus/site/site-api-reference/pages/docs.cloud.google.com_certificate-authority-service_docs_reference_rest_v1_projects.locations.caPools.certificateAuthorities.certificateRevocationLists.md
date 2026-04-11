---
title: "REST Resource: projects.locations.caPools.certificateAuthorities.certificateRevocationLists\
  \ \_|\_ Certificate Authority Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/certificate-authority-service/docs/reference/rest/v1/projects.locations.caPools.certificateAuthorities.certificateRevocationLists
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/certificate-authority-service/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/certificate-authority-service/docs/reference/rest/v1/projects.locations.caPools.certificateAuthorities.certificateRevocationLists
  title: "REST Resource: projects.locations.caPools.certificateAuthorities.certificateRevocationLists\
    \ \_|\_ Certificate Authority Service \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Certificate Authority Service
Reference
Send feedback
REST Resource: projects.locations.caPools.certificateAuthorities.certificateRevocationLists
Stay organized with collections
Save and categorize content based on your preferences.
Resource: CertificateRevocationList
JSON representation
RevokedCertificate
JSON representation
State
Methods
Resource: CertificateRevocationList
A CertificateRevocationList corresponds to a signed X.509 certificate Revocation List (CRL). A CRL contains the serial numbers of certificates that should no longer be trusted.
JSON representation
{
"name" : string ,
"sequenceNumber" : string ,
"revokedCertificates" : [
{
object ( RevokedCertificate )
}
] ,
"pemCrl" : string ,
"accessUrl" : string ,
"state" : enum ( State ) ,
"createTime" : string ,
"updateTime" : string ,
"revisionId" : string ,
"labels" : {
string : string ,
...
}
}
Fields
name
string
Identifier. The resource name for this CertificateRevocationList in the format projects/*/locations/*/caPools/*certificateAuthorities/*/
certificateRevocationLists/* .
sequenceNumber
string ( int64 format)
Output only. The CRL sequence number that appears in pemCrl.
revokedCertificates[]
object ( RevokedCertificate )
Output only. The revoked serial numbers that appear in pemCrl.
pemCrl
string
Output only. The PEM-encoded X.509 CRL.
accessUrl
string
Output only. The location where 'pemCrl' can be accessed.
state
enum ( State )
Output only. The State for this CertificateRevocationList .
createTime
string ( Timestamp format)
Output only. The time at which this CertificateRevocationList was created.
Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
updateTime
string ( Timestamp format)
Output only. The time at which this CertificateRevocationList was updated.
Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
revisionId
string
Output only. The revision ID of this CertificateRevocationList . A new revision is committed whenever a new CRL is published. The format is an 8-character hexadecimal string.
labels
map (key: string, value: string)
Optional. Labels with user-defined metadata.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
RevokedCertificate
Describes a revoked Certificate .
JSON representation
{
"certificate" : string ,
"hexSerialNumber" : string ,
"revocationReason" : enum ( RevocationReason )
}
Fields
certificate
string
The resource name for the Certificate in the format projects/*/locations/*/caPools/*/certificates/* .
hexSerialNumber
string
The serial number of the Certificate .
revocationReason
enum ( RevocationReason )
The reason the Certificate was revoked.
State
The state of a CertificateRevocationList , indicating if it is current.
Enums
STATE_UNSPECIFIED
Not specified.
ACTIVE
The CertificateRevocationList is up to date.
SUPERSEDED
The CertificateRevocationList is no longer current.
Methods
get
Returns a CertificateRevocationList .
getIamPolicy
Gets the access control policy for a resource.
list
Lists CertificateRevocationLists .
patch
Update a CertificateRevocationList .
setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
Returns permissions that a caller has on the specified resource.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-30 UTC."],[],[]]
