---
title: "REST Resource: projects.locations.certificateMaps.certificateMapEntries \_\
  |\_ Certificate Manager \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/certificate-manager/docs/reference/certificate-manager/rest/v1/projects.locations.certificateMaps.certificateMapEntries
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/certificate-manager/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/certificate-manager/docs/reference/certificate-manager/rest/v1/projects.locations.certificateMaps.certificateMapEntries
  title: "REST Resource: projects.locations.certificateMaps.certificateMapEntries\
    \ \_|\_ Certificate Manager \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Certificate Manager
Reference
Send feedback
REST Resource: projects.locations.certificateMaps.certificateMapEntries
Stay organized with collections
Save and categorize content based on your preferences.
Resource: CertificateMapEntry
JSON representation
Matcher
ServingState
Methods
Resource: CertificateMapEntry
Defines a certificate map entry.
JSON representation
{
"name" : string ,
"description" : string ,
"createTime" : string ,
"updateTime" : string ,
"labels" : {
string : string ,
...
} ,
"certificates" : [
string
] ,
"state" : enum ( ServingState ) ,
// Union field match can be only one of the following:
"hostname" : string ,
"matcher" : enum ( Matcher )
// End of list of possible types for union field match .
}
Fields
name
string
Identifier. A user-defined name of the Certificate Map Entry. Certificate Map Entry names must be unique globally and match pattern projects/*/locations/*/certificateMaps/*/certificateMapEntries/* .
description
string
Optional. One or more paragraphs of text description of a certificate map entry.
createTime
string ( Timestamp format)
Output only. The creation timestamp of a Certificate Map Entry.
Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
updateTime
string ( Timestamp format)
Output only. The update timestamp of a Certificate Map Entry.
Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
labels
map (key: string, value: string)
Optional. Set of labels associated with a Certificate Map Entry.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
certificates[]
string
Optional. A set of Certificates defines for the given hostname . There can be defined up to four certificates in each Certificate Map Entry. Each certificate must match pattern projects/*/locations/*/certificates/* .
state
enum ( ServingState )
Output only. A serving state of this Certificate Map Entry.
Union field match . The matcher for this certificate map entry. Required. match can be only one of the following:
hostname
string
A Hostname (FQDN, e.g. example.com ) or a wildcard hostname expression ( *.example.com ) for a set of hostnames with common suffix. Used as Server Name Indication (SNI) for selecting a proper certificate.
matcher
enum ( Matcher )
A predefined matcher for particular cases, other than SNI selection.
Matcher
Defines predefined cases other than SNI-hostname match when this configuration should be applied.
Enums
MATCHER_UNSPECIFIED
A matcher has't been recognized.
PRIMARY
A primary certificate that is served when SNI wasn't specified in the request or SNI couldn't be found in the map.
ServingState
Defines set of serving states associated with a resource.
Enums
SERVING_STATE_UNSPECIFIED
The status is undefined.
ACTIVE
The configuration is serving.
PENDING
Update is in progress. Some frontends may serve this configuration.
Methods
create
Creates a new CertificateMapEntry in a given project and location.
delete
Deletes a single CertificateMapEntry.
get
Gets details of a single CertificateMapEntry.
list
Lists CertificateMapEntries in a given project and location.
patch
Updates a CertificateMapEntry.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-17 UTC."],[],[]]
