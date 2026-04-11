---
title: "AnywhereCache \_|\_ Cloud Storage \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCache
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/storage/docs
source_metadata:
  url: https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCache
  title: "AnywhereCache \_|\_ Cloud Storage \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Cloud Storage
Reference
Send feedback
AnywhereCache
Stay organized with collections
Save and categorize content based on your preferences.
The AnywhereCache resource represents a Rapid Cache cache instance in Cloud Storage.
To try out the methods for this resource, see Methods .
Resource representation
{
"kind": "storage#AnywhereCache"
"id": string ,
"selfLink": string ,
"bucket": string ,
"zone": string ,
"state": string ,
"createTime": datetime ,
"updateTime": datetime ,
"ttl": string ,
"ingestOnWrite": boolean ,
"pendingUpdate": boolean
}
Property name
Value
Description
Notes
kind
string
The kind of item this is. For caches, this is always " storage#anywhereCache ".
id
string
The ID of the cache instance, formatted as
BUCKET_NAME / ANYWHERE_CACHE_ZONE_ID . For example, example-bucket/us-east1-b .
selfLink
string
The link (URI) of this cache.
bucket
string
The name of the bucket that owns the cache instance. For example,
example-bucket .
Writeable
zone
string
The zone in which the cache instance is running. For example,
us-east1-b .
Writeable
state
string
The status of the cache instance. Can be CREATING ,
RUNNING , or DISABLED .
createTime
datetime
The creation time of the cache instance.
updateTime
datetime
The last modification time of the cache instance.
ttl
string
The TTL (time to live) of data in the cache, in seconds.
Writeable
ingestOnWrite
boolean
Whether or not the cache ingests data as the data is written to the bucket.
Writeable
pendingUpdate
boolean
True if the cache instance has an active
UpdateAnywhereCache
long-running operation attached.
Methods
create
Create a Rapid Cache cache.
disable
Disable a Rapid Cache cache.
get
Get a Rapid Cache cache.
list
Retrieve a list of Rapid Cache caches.
resume
Resume the data ingestion of a Rapid Cache cache, or revoke the
disablement of the cache.
update
Update a Rapid Cache cache.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
