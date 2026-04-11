---
title: "Event \_|\_ Video Stitcher API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/video-stitcher/docs/reference/rest/v1/Event
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/video-stitcher/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/video-stitcher/docs/reference/rest/v1/Event
  title: "Event \_|\_ Video Stitcher API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

To enable the Video Stitcher API for your project, please reach out to your Account Representative or contact Sales to learn more.
Home
Documentation
AI and ML
Video Stitcher API
Reference
Send feedback
Event
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
EventType
Describes an event and a trigger URI.
JSON representation
{
"type" : enum ( EventType ) ,
"uri" : string ,
"id" : string ,
"offset" : string
}
Fields
type
enum ( EventType )
Describes the event that occurred.
uri
string
The URI to trigger for this event.
id
string
The ID of the event.
offset
string ( Duration format)
The offset in seconds if the event type is PROGRESS .
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
EventType
Describes the event that occurred.
Enums
EVENT_TYPE_UNSPECIFIED
The event type is unspecified.
CREATIVE_VIEW
First frame of creative ad viewed.
START
Creative ad started.
BREAK_START
Start of an ad break.
BREAK_END
End of an ad break.
IMPRESSION
Impression.
FIRST_QUARTILE
First quartile progress.
MIDPOINT
Midpoint progress.
THIRD_QUARTILE
Third quartile progress.
COMPLETE
Ad progress completed.
PROGRESS
Specific progress event with an offset.
MUTE
Player muted.
UNMUTE
Player unmuted.
PAUSE
Player paused.
CLICK
Click event.
CLICK_THROUGH
Click-through event.
REWIND
Player rewinding.
RESUME
Player resumed.
ERROR
Error event.
EXPAND
Ad expanded to a larger size.
COLLAPSE
Ad collapsed to a smaller size.
CLOSE
Non-linear ad closed.
CLOSE_LINEAR
Linear ad closed.
SKIP
Ad skipped.
ACCEPT_INVITATION
Accept invitation event.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-14 UTC."],[],[]]
