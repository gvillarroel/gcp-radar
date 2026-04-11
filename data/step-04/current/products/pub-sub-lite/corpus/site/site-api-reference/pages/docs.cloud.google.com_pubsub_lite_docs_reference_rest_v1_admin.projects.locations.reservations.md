---
title: "REST Resource: admin.projects.locations.reservations \_|\_ Pub/Sub Lite \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/pubsub/lite/docs/reference/rest/v1/admin.projects.locations.reservations
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/pubsub/lite/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/pubsub/lite/docs/reference/rest/v1/admin.projects.locations.reservations
  title: "REST Resource: admin.projects.locations.reservations \_|\_ Pub/Sub Lite\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Pub/Sub
Pub/Sub Lite
Send feedback
REST Resource: admin.projects.locations.reservations
Stay organized with collections
Save and categorize content based on your preferences.
Resource: Reservation
JSON representation
Methods
Resource: Reservation
Metadata about a reservation resource.
JSON representation
{
"name" : string ,
"throughputCapacity" : string
}
Fields
name
string
The name of the reservation. Structured like: projects/{project_number}/locations/{location}/reservations/{reservationId}
throughputCapacity
string ( int64 format)
The reserved throughput capacity. Every unit of throughput capacity is equivalent to 1 MiB/s of published messages or 2 MiB/s of subscribed messages.
Any topics which are declared as using capacity from a Reservation will consume resources from this reservation instead of being charged individually.
Methods
create
Creates a new reservation.
delete
Deletes the specified reservation.
get
Returns the reservation configuration.
list
Returns the list of reservations for the given project.
patch
Updates properties of the specified reservation.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-17 UTC."],[],[]]
