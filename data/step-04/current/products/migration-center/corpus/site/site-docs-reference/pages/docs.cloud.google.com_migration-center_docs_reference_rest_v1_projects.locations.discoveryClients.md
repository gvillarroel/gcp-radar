---
title: "REST Resource: projects.locations.discoveryClients \_|\_ Migration Center\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/projects.locations.discoveryClients
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/migration-center/docs/api
source_metadata:
  url: https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/projects.locations.discoveryClients
  title: "REST Resource: projects.locations.discoveryClients \_|\_ Migration Center\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Migration
Migration Center
Reference
Send feedback
REST Resource: projects.locations.discoveryClients
Stay organized with collections
Save and categorize content based on your preferences.
Resource: DiscoveryClient
JSON representation
State
Methods
Resource: DiscoveryClient
Represents an installed Migration Center Discovery Client instance.
JSON representation
{
"name" : string ,
"createTime" : string ,
"updateTime" : string ,
"source" : string ,
"serviceAccount" : string ,
"signalsEndpoint" : string ,
"displayName" : string ,
"description" : string ,
"labels" : {
string : string ,
...
} ,
"state" : enum ( State ) ,
"version" : string ,
"errors" : [
{
object ( Status )
}
] ,
"heartbeatTime" : string ,
// Union field expiration can be only one of the following:
"expireTime" : string ,
"ttl" : string
// End of list of possible types for union field expiration .
}
Fields
name
string
Output only. Identifier. Full name of this discovery client.
create Time
string ( Timestamp format)
Output only. Time when the discovery client was first created.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
update Time
string ( Timestamp format)
Output only. Time when the discovery client was last updated. This value is not updated by heartbeats, to view the last heartbeat time please refer to the heartbeatTime field.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
source
string
Required. Immutable. Full name of the source object associated with this discovery client.
service Account
string
Required. Service account used by the discovery client for various operation.
signals Endpoint
string
Output only. This field is intended for internal use.
display Name
string
Optional. Free text display name. Maximum length is 63 characters.
description
string
Optional. Free text description. Maximum length is 1000 characters.
labels
map (key: string, value: string)
Optional. Labels as key value pairs.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
state
enum ( State )
Output only. Current state of the discovery client.
version
string
Output only. Client version, as reported in recent heartbeat.
errors[]
object ( Status )
Output only. Errors affecting client functionality.
heartbeat Time
string ( Timestamp format)
Output only. Last heartbeat time. Healthy clients are expected to send heartbeats regularly (normally every few minutes).
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
Union field expiration .
expiration can be only one of the following:
expire Time
string ( Timestamp format)
Optional. Client expiration time in UTC. If specified, the backend will not accept new frames after this time.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
ttl
string ( Duration format)
Optional. Input only. Client time-to-live. If specified, the backend will not accept new frames after this time. This field is input only. The derived expiration time is provided as output through the expireTime field.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
State
Discovery client states.
Enums
STATE_UNSPECIFIED
Client state is unspecified.
ACTIVE
Client is active.
OFFLINE
Client is offline.
DEGRADED
Client is in a degraded state. See the errors field for details.
EXPIRED
Client has expired. See the expireTime field for the expire time.
Methods
create
Creates a new discovery client.
delete
Deletes a discovery client.
get
Gets the details of a discovery client.
list
Lists all the discovery clients in a given project and location.
patch
Updates a discovery client.
send Heartbeat
Sends a discovery client heartbeat.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-17 UTC."],[],[]]
