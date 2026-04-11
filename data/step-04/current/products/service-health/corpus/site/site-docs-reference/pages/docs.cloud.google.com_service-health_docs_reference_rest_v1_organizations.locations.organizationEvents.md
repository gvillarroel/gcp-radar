---
title: "REST Resource: organizations.locations.organizationEvents \_|\_ Personalized\
  \ Service Health \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-health/docs/reference/rest/v1/organizations.locations.organizationEvents
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-health/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/service-health/docs/reference/rest/v1/organizations.locations.organizationEvents
  title: "REST Resource: organizations.locations.organizationEvents \_|\_ Personalized\
    \ Service Health \_|\_ Google Cloud Documentation"
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
REST Resource: organizations.locations.organizationEvents
Stay organized with collections
Save and categorize content based on your preferences.
Resource: OrganizationEvent
JSON representation
EventCategory
DetailedCategory
State
DetailedState
Methods
Resource: OrganizationEvent
Represents service health events that may affect Google Cloud products used across the organization. It is a read-only view and does not allow any modifications.
JSON representation
{
"name" : string ,
"title" : string ,
"description" : string ,
"category" : enum ( EventCategory ) ,
"detailedCategory" : enum ( DetailedCategory ) ,
"state" : enum ( State ) ,
"detailedState" : enum ( DetailedState ) ,
"eventImpacts" : [
{
object ( EventImpact )
}
] ,
"updates" : [
{
object ( EventUpdate )
}
] ,
"parentEvent" : string ,
"updateTime" : string ,
"startTime" : string ,
"endTime" : string ,
"nextUpdateTime" : string
}
Fields
name
string
Output only. Identifier. Name of the event. Unique name of the event in this scope including organization ID and location using the form organizations/{organization_id}/locations/{location}/organizationEvents/{event_id} .
organization_id - see Getting your organization resource ID . location - The location to get the organizationevents from. event_id - Organization event ID to retrieve.
title
string
Output only. Brief description for the event.
description
string
Output only. Free-form, human-readable description.
category
enum ( EventCategory )
Output only. The category of the event.
detailedCategory
enum ( DetailedCategory )
Output only. The detailed category of the event.
state
enum ( State )
Output only. The current state of the event.
detailedState
enum ( DetailedState )
Output only. The current detailed state of the incident.
eventImpacts[]
object ( EventImpact )
Output only. Represents the Google Cloud products and locations impacted by the event.
updates[]
object ( EventUpdate )
Output only. Incident-only field. Event updates are correspondence from Google.
parentEvent
string
Output only. When detailedState = MERGED , parentEvent contains the name of the parent event. All further updates will be published to the parent event.
updateTime
string ( Timestamp format)
Output only. The time the update was posted.
Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
startTime
string ( Timestamp format)
Output only. The start time of the event, if applicable.
Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
endTime
string ( Timestamp format)
Output only. The end time of the event, if applicable.
Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
nextUpdateTime
string ( Timestamp format)
Output only. Incident-only field. The time when the next update can be expected.
Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
EventCategory
The category of the event. This enum lists all possible categories of event.
Enums
EVENT_CATEGORY_UNSPECIFIED
Unspecified category.
INCIDENT
Event category for service outage or degradation.
DetailedCategory
The detailed category of an event. Contains all possible states for all event categories.
Enums
DETAILED_CATEGORY_UNSPECIFIED
Unspecified detailed category.
CONFIRMED_INCIDENT
Indicates an event with category INCIDENT has a confirmed impact to at least one Google Cloud product.
EMERGING_INCIDENT
Indicates an event with category INCIDENT is under investigation to determine if it has a confirmed impact on any Google Cloud products.
State
The state of the organization event. This enum lists all possible states of event.
Enums
STATE_UNSPECIFIED
Unspecified state.
ACTIVE
Event is actively affecting a Google Cloud product and will continue to receive updates.
CLOSED
Event is no longer affecting the Google Cloud product or has been merged with another event.
DetailedState
The detailed state of the incident. This enum lists all possible detailed states of an incident.
Enums
DETAILED_STATE_UNSPECIFIED
Unspecified detail state.
EMERGING
Google engineers are actively investigating the incident to determine the impact.
CONFIRMED
The incident is confirmed and impacting at least one Google Cloud product. Ongoing status updates will be provided until it is resolved.
RESOLVED
The incident is no longer affecting any Google Cloud product, and there will be no further updates.
MERGED
The incident was merged into a parent event. All further updates will be published to the parent only. The parentEvent contains the name of the parent.
AUTO_CLOSED
The incident was automatically closed because of the following reasons:
The impact of the incident could not be confirmed.
The incident was intermittent or resolved itself.
The incident does not have a resolution because no action or investigation happened. If it is intermittent, the incident may reopen.
FALSE_POSITIVE
Upon investigation, Google engineers concluded that the incident is not affecting a Google Cloud product. This state can change if the incident is reviewed again.
Methods
get
Retrieves a resource containing information about an event affecting an organization .
list
Lists organization events under a given organization and location.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-06 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-06 UTC."],[],[]]
