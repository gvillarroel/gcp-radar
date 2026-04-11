---
title: "Event format \_|\_ Eventarc \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/eventarc/docs/event-format
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/eventarc/docs
source_metadata:
  url: https://docs.cloud.google.com/eventarc/docs/event-format
  title: "Event format \_|\_ Eventarc \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Eventarc
Reference
Send feedback
Event format
Stay organized with collections
Save and categorize content based on your preferences.
Advanced
Standard
Eventarc delivers events, regardless of provider, to the target
destination in a CloudEvents ( cloudevents.io ) format
in binary content mode.
CloudEvents is the Cloud Native Computing Foundation's
open standard specification for
describing event metadata in a common way. Using a standard way to describe
event metadata ensures consistency, accessibility, and portability.
A CloudEvent in binary content mode has its context attributes described as HTTP
headers. The names of the HTTP headers are the context attribute names prefixed
with ce- . The Content-Type header reflects the media type in which the event
data is encoded.
Target destinations consume events using an
HTTP protocol binding .
For Workflows destinations, the Workflows service
converts the event to a JSON object , and
passes the event into the workflow execution as a runtime argument.
Define a message binding (Eventarc Advanced)
You can define a message binding and construct a new HTTP request. For more
information, see
Define a message binding .
Format received events (Eventarc Advanced)
You can configure a pipeline to expect event data in a specific format or,
before events are delivered to a destination, you can convert event data from
one supported format to another. For example, you might need to route events to
an endpoint that only accepts Avro or Protobuf data. The following format
conversions are supported:
Avro to JSON
Avro to Protobuf
JSON to Avro
JSON to Protobuf
Protobuf to Avro
Protobuf to JSON
For more information, see
Format received events .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
