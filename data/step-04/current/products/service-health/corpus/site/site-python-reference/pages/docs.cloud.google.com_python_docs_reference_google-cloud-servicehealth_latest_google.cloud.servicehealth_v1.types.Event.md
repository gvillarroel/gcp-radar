---
title: "Class Event (0.4.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/google-cloud-servicehealth/latest/google.cloud.servicehealth_v1.types.Event
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/google-cloud-servicehealth/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/google-cloud-servicehealth/latest/google.cloud.servicehealth_v1.types.Event
  title: "Class Event (0.4.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Python
Client libraries
Send feedback
Class Event (0.4.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.4.0 (latest)
0.3.0
0.2.0
0.1.11
Event ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Represents service health events that may affect Google Cloud
products. Event resource is a read-only view and does not allow
any modifications. All fields are output only.
Attributes
Name
Description
name
str
Output only. Identifier. Name of the event. Unique name of
the event in this scope including project and location using
the form
projects/{project_id}/locations/{location}/events/{event_id} .
title
str
Output only. Brief description for the event.
description
str
Output only. Free-form, human-readable
description.
category
google.cloud.servicehealth_v1.types.Event.EventCategory
Output only. The category of the event.
detailed_category
google.cloud.servicehealth_v1.types.Event.DetailedCategory
Output only. The detailed category of the
event.
state
google.cloud.servicehealth_v1.types.Event.State
Output only. The current state of the event.
detailed_state
google.cloud.servicehealth_v1.types.Event.DetailedState
Output only. The current detailed state of
the incident.
event_impacts
MutableSequence[ google.cloud.servicehealth_v1.types.EventImpact ]
Google Cloud products and locations impacted
by the event.
relevance
google.cloud.servicehealth_v1.types.Event.Relevance
Output only. Communicates why a given event
is deemed relevant in the context of a given
project.
updates
MutableSequence[ google.cloud.servicehealth_v1.types.EventUpdate ]
Output only. Event updates are correspondence
from Google.
parent_event
str
Output only. When detailed_state \ =\ MERGED ,
parent_event contains the name of the parent event. All
further updates will be published to the parent event.
update_time
google.protobuf.timestamp_pb2.Timestamp
Output only. The time when the event was last
modified.
start_time
google.protobuf.timestamp_pb2.Timestamp
Output only. The start time of the event, if
applicable.
end_time
google.protobuf.timestamp_pb2.Timestamp
Output only. The end time of the event, if
applicable.
next_update_time
google.protobuf.timestamp_pb2.Timestamp
Output only. The time when the next update
can be expected.
Classes
DetailedCategory
DetailedCategory ( value )
The detailed category of an event. Contains all possible
states for all event categories.
DetailedState
DetailedState ( value )
The detailed state of the incident. This enum lists all
possible detailed states of an incident.
- The impact of the incident could not be confirmed.
- The incident was intermittent or resolved itself.
The incident does not have a resolution because no action or
investigation happened. If it is intermittent, the incident
may reopen.
FALSE_POSITIVE (10):
Upon investigation, Google engineers
concluded that the incident is not affecting a
Google Cloud product. This state can change if
the incident is reviewed again.
EventCategory
EventCategory ( value )
The category of the event. This enum lists all possible
categories of event.
Relevance
Relevance ( value )
Communicates why a given incident is deemed relevant in the
context of a given project. This enum lists all possible
detailed states of relevance.
State
State ( value )
The state of the event. This enum lists all possible states
of event.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
