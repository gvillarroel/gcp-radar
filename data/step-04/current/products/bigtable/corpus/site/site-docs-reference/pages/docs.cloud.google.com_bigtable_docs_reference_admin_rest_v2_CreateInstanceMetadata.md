---
title: "CreateInstanceMetadata \_|\_ Bigtable \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigtable/docs/reference/admin/rest/v2/CreateInstanceMetadata
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/bigtable/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/bigtable/docs/reference/admin/rest/v2/CreateInstanceMetadata
  title: "CreateInstanceMetadata \_|\_ Bigtable \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Bigtable
Reference
Send feedback
CreateInstanceMetadata
Stay organized with collections
Save and categorize content based on your preferences.
The metadata for the Operation returned by instances.create.
JSON representation
{
"originalRequest" : {
object ( CreateInstanceRequest )
} ,
"requestTime" : string ,
"finishTime" : string
}
Fields
originalRequest
object ( CreateInstanceRequest )
The request that prompted the initiation of this instances.create operation.
requestTime
string ( Timestamp format)
The time at which the original request was received.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
finishTime
string ( Timestamp format)
The time at which the operation failed or was completed successfully.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
CreateInstanceRequest
Request message for BigtableInstanceAdmin.CreateInstance.
JSON representation
{
"parent" : string ,
"instanceId" : string ,
"instance" : {
object ( Instance )
} ,
"clusters" : {
string : {
object ( Cluster )
} ,
...
}
}
Fields
parent
string
Required. The unique name of the project in which to create the new instance. Values are of the form projects/{project} .
instanceId
string
Required. The ID to be used when referring to the new instance within its project, e.g., just myinstance rather than projects/myproject/instances/myinstance .
instance
object ( Instance )
Required. The instance to create. Fields marked OutputOnly must be left blank.
clusters
map (key: string, value: object ( Cluster ))
Required. The clusters to be created within the instance, mapped by desired cluster ID, e.g., just mycluster rather than projects/myproject/instances/myinstance/clusters/mycluster . Fields marked OutputOnly must be left blank.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-06 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-06 UTC."],[],[]]
