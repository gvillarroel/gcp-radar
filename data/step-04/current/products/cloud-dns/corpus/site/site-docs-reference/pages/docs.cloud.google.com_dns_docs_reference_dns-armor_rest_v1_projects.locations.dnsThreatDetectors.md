---
title: "REST Resource: projects.locations.dnsThreatDetectors \_|\_ Cloud DNS \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1/projects.locations.dnsThreatDetectors
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dns/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1/projects.locations.dnsThreatDetectors
  title: "REST Resource: projects.locations.dnsThreatDetectors \_|\_ Cloud DNS \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Cloud DNS
Reference
Send feedback
REST Resource: projects.locations.dnsThreatDetectors
Stay organized with collections
Save and categorize content based on your preferences.
Resource: DnsThreatDetector
A DNS threat detector sends DNS query logs to a provider that then analyzes the logs to identify threat events in the DNS queries. By default, all VPC networks in your projects are included. You can exclude specific networks by supplying excludedNetworks .
JSON representation
{
"name" : string ,
"createTime" : string ,
"updateTime" : string ,
"labels" : {
string : string ,
...
} ,
"excludedNetworks" : [
string
] ,
"provider" : enum ( Provider )
}
Fields
name
string
Immutable. Identifier. Name of the DnsThreatDetector resource.
createTime
string ( Timestamp format)
Output only. Create time stamp.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
updateTime
string ( Timestamp format)
Output only. Update time stamp.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
labels
map (key: string, value: string)
Optional. Any labels associated with the DnsThreatDetector, listed as key value pairs.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
excludedNetworks[]
string
Optional. A list of network resource names which aren't monitored by this DnsThreatDetector.
Example: projects/PROJECT_ID/global/networks/NETWORK_NAME .
provider
enum ( Provider )
Required. The provider used for DNS threat analysis.
Provider
Name of the provider used for DNS threat analysis.
Enums
PROVIDER_UNSPECIFIED
An unspecified provider.
INFOBLOX
The Infoblox DNS threat detector provider.
Methods
create
Creates a new DnsThreatDetector in a given project and location.
delete
Deletes a single DnsThreatDetector.
get
Gets the details of a single DnsThreatDetector.
list
Lists DnsThreatDetectors in a given project and location.
patch
Updates a single DnsThreatDetector.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-01-15 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-01-15 UTC."],[],[]]
