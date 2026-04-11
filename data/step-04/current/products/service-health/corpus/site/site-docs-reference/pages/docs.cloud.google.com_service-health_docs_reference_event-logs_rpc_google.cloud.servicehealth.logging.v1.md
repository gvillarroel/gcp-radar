---
title: "Package google.cloud.servicehealth.logging.v1 \_|\_ Personalized Service Health\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-health/docs/reference/event-logs/rpc/google.cloud.servicehealth.logging.v1
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-health/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/service-health/docs/reference/event-logs/rpc/google.cloud.servicehealth.logging.v1
  title: "Package google.cloud.servicehealth.logging.v1 \_|\_ Personalized Service\
    \ Health \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Personalized Service Health
Reference
Send feedback
Package google.cloud.servicehealth.logging.v1
Stay organized with collections
Save and categorize content based on your preferences.
Index
EventLog (message)
EventLog.DetailedCategory (enum)
EventLog.DetailedState (enum)
EventLog.EventCategory (enum)
EventLog.Relevance (enum)
EventLog.State (enum)
EventLog
Message describing the payload of service health logs.
Fields
title
string
Brief description for the event.
description
string
Free-form, human-readable description.
category
EventCategory
Identifies the category of the event.
detailed_ category
DetailedCategory
The detailed category of the event.
state
State
The current state of the event.
detailed_ state
DetailedState
The current detailed state of the event.
impacted_ products
string
Google Cloud products known to be affected by the event, in JSON serialized format. See list of all supported Google Cloud products .
Example: " ['Google Cloud SQL', 'Cloud Compute Engine'] ".
impacted_ locations
string
Locations known to be impacted by the event, in JSON serialized format. See possible values .
Example: " ['us-central1', 'us-west1'] ".
impacted_ product_ ids
string
Google Cloud Customer Product IDs known to be affected by the event, in JSON serialized format. Example: "['UwaYoXQ5bHYHG6EdiPB8', 'PuCJ6W2ovoDhLcyvZ1xa']".
relevance
Relevance
Communicates why a given event is deemed relevant in the context of a given project.
parent_ event
string
When detailed_state = MERGED , parent_event contains the name of the parent event. All further updates will be published to the parent event.
update_ time
Timestamp
The time when the event was last modified.
start_ time
Timestamp
The start time of the event, if applicable.
end_ time
Timestamp
The end time of the event, if applicable.
next_ update_ time
Timestamp
Incident-only field. The time when the next update can be expected.
artifacts[]
string
Artifacts associated with the event, such as incident reports. Example: " ['projects/{PROJECT_ID}/locations/{LOCATION}/artifacts/{ARTIFACT_ID}'] ".
symptom
string
Symptom of the event.
workaround
string
Workaround for the event.
DetailedCategory
The detailed category of an event. Contains all possible states for all event categories.
Enums
DETAILED_CATEGORY_UNSPECIFIED
Unspecified detailed category.
CONFIRMED_INCIDENT
Indicates an event with category INCIDENT has a confirmed impact to at least one Google Cloud product.
EMERGING_INCIDENT
Indicates an event with category INCIDENT is under investigation to determine if it has a confirmed impact on any Google Cloud products.
DetailedState
The detailed state of the event. This enum lists all possible detail states of event.
Enums
DETAILED_STATE_UNSPECIFIED
Unspecified detail state.
EMERGING
Google engineers are actively investigating the event to determine the impact.
CONFIRMED
The event is confirmed and impacting at least one Google Cloud product. Ongoing status updates will be provided until it is resolved.
RESOLVED
The event is no longer affecting any Google Cloud product, and there will be no further updates.
MERGED
Event was merged into a parent event. All further updates will be published to the parent only. The parent_event field contains the name of the parent.
AUTO_CLOSED
The incident was automatically closed because of the following reasons:
The impact of the incident could not be confirmed.
The incident was intermittent or resolved itself.
The incident does not have a resolution because no action or investigation happened. If it is intermittent, the incident may reopen.
FALSE_POSITIVE
Upon investigation, Google engineers concluded that the incident is not affecting a Google Cloud product. This state can change if the incident is reviewed again.
EventCategory
The category of the event. This enum lists all possible categories of event.
Enums
EVENT_CATEGORY_UNSPECIFIED
Unspecified category.
INCIDENT
Event category for service outage or degradation.
Relevance
Communicates why a given event is deemed relevant in the context of a given project. This enum lists all possible detailed states of relevance.
Enums
RELEVANCE_UNSPECIFIED
Unspecified relevance.
UNKNOWN
The relevance of the event to the project is unknown.
NOT_IMPACTED
The event does not impact the project.
PARTIALLY_RELATED
We determined that the event is linked to a product that is used by the project, but we have no information (either positive or negative) whether the project is affected.
RELATED
The event has a connection to your project and it may be impacted
IMPACTED
The event is impacting your project
State
The state of the event. This enum lists all possible states of event.
Enums
STATE_UNSPECIFIED
Unspecified state
ACTIVE
Event is actively affecting a Google Cloud product and will continue to receive updates.
CLOSED
Event is no longer affecting the Google Cloud product or has been merged with another event.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-14 UTC."],[],[]]
