---
title: "REST Resource: organizations.locations.addressGroups \_|\_ Cloud Next Generation\
  \ Firewall \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/firewall/docs/reference/network-security/rest/v1/organizations.locations.addressGroups
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/firewall/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/firewall/docs/reference/network-security/rest/v1/organizations.locations.addressGroups
  title: "REST Resource: organizations.locations.addressGroups \_|\_ Cloud Next Generation\
    \ Firewall \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Cloud NGFW
Reference
Send feedback
REST Resource: organizations.locations.addressGroups
Stay organized with collections
Save and categorize content based on your preferences.
Resource: AddressGroup
AddressGroup is a resource that specifies how a collection of IP/DNS used in Firewall Policy.
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
"type" : enum ( Type ) ,
"items" : [
string
] ,
"capacity" : integer ,
"selfLink" : string ,
"purpose" : [
enum ( Purpose )
]
}
Fields
name
string
Required. Name of the AddressGroup resource. It matches pattern projects/*/locations/{location}/addressGroups/<addressGroup> .
description
string
Optional. Free-text description of the resource.
createTime
string ( Timestamp format)
Output only. The timestamp when the resource was created.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
updateTime
string ( Timestamp format)
Output only. The timestamp when the resource was updated.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
labels
map (key: string, value: string)
Optional. Set of label tags associated with the AddressGroup resource.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
type
enum ( Type )
Required. The type of the Address Group. Possible values are "IPv4" or "IPV6".
items[]
string
Optional. List of items.
capacity
integer
Required. Capacity of the Address Group
selfLink
string
Output only. Server-defined fully-qualified URL for this resource.
purpose[]
enum ( Purpose )
Optional. List of supported purposes of the Address Group.
Type
Possible type of the Address Group.
Enums
TYPE_UNSPECIFIED
Default value.
IPV4
IP v4 ranges.
IPV6
IP v6 ranges.
Purpose
Purpose of the Address Group.
Enums
PURPOSE_UNSPECIFIED
Default value. Should never happen.
DEFAULT
Address Group is distributed to VMC, and is usable in Firewall Policies and other systems that rely on VMC.
CLOUD_ARMOR
Address Group is usable in Cloud Armor.
Methods
addItems
Adds items to an address group.
cloneItems
Clones items from one address group to another.
create
Creates a new address group in a given project and location.
delete
Deletes an address group.
get
Gets details of a single address group.
list
Lists address groups in a given project and location.
listReferences
Lists references of an address group.
patch
Updates parameters of an address group.
removeItems
Removes items from an address group.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-09-24 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-09-24 UTC."],[],[]]
