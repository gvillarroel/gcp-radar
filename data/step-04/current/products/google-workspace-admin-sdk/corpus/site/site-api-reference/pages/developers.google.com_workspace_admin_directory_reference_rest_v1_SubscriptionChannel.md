---
title: "SubscriptionChannel \_|\_ Admin console \_|\_ Google for Developers"
url: https://developers.google.com/workspace/admin/directory/reference/rest/v1/SubscriptionChannel
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/workspace/admin/directory/reference/rest
source_metadata:
  url: https://developers.google.com/workspace/admin/directory/reference/rest/v1/SubscriptionChannel
  title: "SubscriptionChannel \_|\_ Admin console \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Admin console
Reference
Send feedback
SubscriptionChannel
Stay organized with collections
Save and categorize content based on your preferences.
An notification channel used to watch for resource changes.
JSON representation
{
"id" : string ,
"token" : string ,
"expiration" : string ,
"type" : string ,
"address" : string ,
"payload" : boolean ,
"params" : {
string : string ,
...
} ,
"resourceId" : string ,
"resourceUri" : string ,
"kind" : string
}
Fields
id
string
A UUID or similar unique string that identifies this channel.
token
string
An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.
expiration
string ( int64 format)
Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.
type
string
The type of delivery mechanism used for this channel.
address
string
The address where notifications are delivered for this channel.
payload
boolean
A Boolean value to indicate whether payload is wanted. Optional.
params
map (key: string, value: string)
Additional parameters controlling delivery channel behavior. Optional. For example, params.ttl specifies the time-to-live in seconds for the notification channel, where the default is 2 hours and the maximum TTL is 2 days.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
resourceId
string
An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.
resourceUri
string
A version-specific identifier for the watched resource.
kind
string
Identifies this as a notification channel used to watch for changes to a resource, which is api#channel .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-03-25 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-03-25 UTC."],[],[]]
