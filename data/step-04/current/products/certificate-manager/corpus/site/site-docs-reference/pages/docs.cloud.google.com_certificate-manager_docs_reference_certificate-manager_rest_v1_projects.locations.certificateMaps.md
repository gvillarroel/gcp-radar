---
title: "REST Resource: projects.locations.certificateMaps \_|\_ Certificate Manager\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/certificate-manager/docs/reference/certificate-manager/rest/v1/projects.locations.certificateMaps
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/certificate-manager/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/certificate-manager/docs/reference/certificate-manager/rest/v1/projects.locations.certificateMaps
  title: "REST Resource: projects.locations.certificateMaps \_|\_ Certificate Manager\
    \ \_|\_ Google Cloud Documentation"
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
REST Resource: projects.locations.certificateMaps
Stay organized with collections
Save and categorize content based on your preferences.
Resource: CertificateMap
JSON representation
GclbTarget
JSON representation
IpConfig
JSON representation
Methods
Resource: CertificateMap
Defines a collection of certificate configurations.
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
"gclbTargets" : [
{
object ( GclbTarget )
}
]
}
Fields
name
string
Identifier. A user-defined name of the Certificate Map. Certificate Map names must be unique globally and match pattern projects/*/locations/*/certificateMaps/* .
description
string
Optional. One or more paragraphs of text description of a certificate map.
createTime
string ( Timestamp format)
Output only. The creation timestamp of a Certificate Map.
Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
updateTime
string ( Timestamp format)
Output only. The update timestamp of a Certificate Map.
Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
labels
map (key: string, value: string)
Optional. Set of labels associated with a Certificate Map.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
gclbTargets[]
object ( GclbTarget )
Output only. A list of GCLB targets that use this Certificate Map. A Target Proxy is only present on this list if it's attached to a Forwarding Rule.
GclbTarget
Describes a Target Proxy that uses this Certificate Map.
JSON representation
{
"ipConfigs" : [
{
object ( IpConfig )
}
] ,
// Union field target_proxy can be only one of the following:
"targetHttpsProxy" : string ,
"targetSslProxy" : string
// End of list of possible types for union field target_proxy .
}
Fields
ipConfigs[]
object ( IpConfig )
Output only. IP configurations for this Target Proxy where the Certificate Map is serving.
Union field target_proxy . A Target Proxy to which this map is attached to. target_proxy can be only one of the following:
targetHttpsProxy
string
Output only. This field returns the resource name in the following format: //compute.googleapis.com/projects/*/global/targetHttpsProxies/* .
targetSslProxy
string
Output only. This field returns the resource name in the following format: //compute.googleapis.com/projects/*/global/targetSslProxies/* .
IpConfig
Defines IP configuration where this Certificate Map is serving.
JSON representation
{
"ipAddress" : string ,
"ports" : [
integer
]
}
Fields
ipAddress
string
Output only. An external IP address.
ports[]
integer ( uint32 format)
Output only. Ports.
Methods
create
Creates a new CertificateMap in a given project and location.
delete
Deletes a single CertificateMap.
get
Gets details of a single CertificateMap.
list
Lists CertificateMaps in a given project and location.
patch
Updates a CertificateMap.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-17 UTC."],[],[]]
