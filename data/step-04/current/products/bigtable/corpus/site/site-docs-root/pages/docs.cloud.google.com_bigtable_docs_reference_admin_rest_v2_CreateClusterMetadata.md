---
title: "CreateClusterMetadata \_|\_ Bigtable \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigtable/docs/reference/admin/rest/v2/CreateClusterMetadata
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/bigtable/docs
source_metadata:
  url: https://docs.cloud.google.com/bigtable/docs/reference/admin/rest/v2/CreateClusterMetadata
  title: "CreateClusterMetadata \_|\_ Bigtable \_|\_ Google Cloud Documentation"
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
CreateClusterMetadata
Stay organized with collections
Save and categorize content based on your preferences.
The metadata for the Operation returned by clusters.create.
JSON representation
{
"originalRequest" : {
object ( CreateClusterRequest )
} ,
"requestTime" : string ,
"finishTime" : string ,
"tables" : {
string : {
object ( TableProgress )
} ,
...
}
}
Fields
originalRequest
object ( CreateClusterRequest )
The request that prompted the initiation of this clusters.create operation.
requestTime
string ( Timestamp format)
The time at which the original request was received.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
finishTime
string ( Timestamp format)
The time at which the operation failed or was completed successfully.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
tables
map (key: string, value: object ( TableProgress ))
Keys: the full name of each table that existed in the instance when clusters.create was first called, i.e. projects/<project>/instances/<instance>/tables/<table> . Any table added to the instance by a later API call will be created in the new cluster by that API call, not this one.
Values: information on how much of a table's data has been copied to the newly-created cluster so far.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
CreateClusterRequest
Request message for BigtableInstanceAdmin.CreateCluster.
JSON representation
{
"parent" : string ,
"clusterId" : string ,
"cluster" : {
object ( Cluster )
}
}
Fields
parent
string
Required. The unique name of the instance in which to create the new cluster. Values are of the form projects/{project}/instances/{instance} .
clusterId
string
Required. The ID to be used when referring to the new cluster within its instance, e.g., just mycluster rather than projects/myproject/instances/myinstance/clusters/mycluster .
cluster
object ( Cluster )
Required. The cluster to be created. Fields marked OutputOnly must be left blank.
TableProgress
Progress info for copying a table's data to the new cluster.
JSON representation
{
"estimatedSizeBytes" : string ,
"estimatedCopiedBytes" : string ,
"state" : enum ( State )
}
Fields
estimatedSizeBytes
string ( int64 format)
Estimate of the size of the table to be copied.
estimatedCopiedBytes
string ( int64 format)
Estimate of the number of bytes copied so far for this table. This will eventually reach 'estimatedSizeBytes' unless the table copy is CANCELLED.
state
enum ( State )
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-06 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-06 UTC."],[],[]]
