---
title: "Interface PublishChannelConnectionEventsRequestOrBuilder (0.88.0) \_|\_ Java\
  \ client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-eventarc-publishing/latest/com.google.cloud.eventarc.publishing.v1.PublishChannelConnectionEventsRequestOrBuilder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-eventarc-publishing/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-eventarc-publishing/latest/com.google.cloud.eventarc.publishing.v1.PublishChannelConnectionEventsRequestOrBuilder
  title: "Interface PublishChannelConnectionEventsRequestOrBuilder (0.88.0) \_|\_\
    \ Java client libraries \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Java
Client libraries
Send feedback
Interface PublishChannelConnectionEventsRequestOrBuilder (0.88.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.88.0 (latest)
0.87.0
0.85.0
0.83.0
0.82.0
0.81.0
0.80.0
0.78.0
0.76.0
0.75.0
0.74.0
0.73.0
0.72.0
0.70.0
0.68.0
0.67.0
0.64.0
0.63.0
0.62.0
0.60.0
0.59.0
0.58.0
0.57.0
0.56.0
0.55.0
0.54.0
0.53.0
0.52.0
0.51.0
0.49.0
0.48.0
0.47.0
0.46.0
0.45.0
0.44.0
0.43.0
0.42.0
0.41.0
0.40.0
0.39.0
0.37.0
0.36.0
0.35.0
0.34.0
0.33.0
0.32.0
0.31.0
0.30.0
0.29.0
0.28.0
0.27.0
0.24.0
0.23.0
0.22.0
0.21.0
0.20.0
0.19.0
0.18.0
0.17.0
0.16.0
0.15.0
0.14.0
0.13.0
0.12.0
0.11.0
0.9.0
0.8.0
0.7.0
0.6.0
0.5.0
0.4.0
public interface PublishChannelConnectionEventsRequestOrBuilder extends MessageOrBuilder
Implements
MessageOrBuilder
Methods
getChannelConnection()
public abstract String getChannelConnection ()
The channel_connection that the events are published from. For example:
projects/{partner_project_id}/locations/{location}/channelConnections/{channel_connection_id} .
string channel_connection = 1;
Returns
Type
Description
String
The channelConnection.
getChannelConnectionBytes()
public abstract ByteString getChannelConnectionBytes ()
The channel_connection that the events are published from. For example:
projects/{partner_project_id}/locations/{location}/channelConnections/{channel_connection_id} .
string channel_connection = 1;
Returns
Type
Description
ByteString
The bytes for channelConnection.
getEvents(int index)
public abstract Any getEvents ( int index )
The CloudEvents v1.0 events to publish. No other types are allowed.
If this field is set, then the text_events fields must not be set.
repeated .google.protobuf.Any events = 2;
Parameter
Name
Description
index
int
Returns
Type
Description
Any
getEventsCount()
public abstract int getEventsCount ()
The CloudEvents v1.0 events to publish. No other types are allowed.
If this field is set, then the text_events fields must not be set.
repeated .google.protobuf.Any events = 2;
Returns
Type
Description
int
getEventsList()
public abstract List<Any> getEventsList ()
The CloudEvents v1.0 events to publish. No other types are allowed.
If this field is set, then the text_events fields must not be set.
repeated .google.protobuf.Any events = 2;
Returns
Type
Description
List < Any >
getEventsOrBuilder(int index)
public abstract AnyOrBuilder getEventsOrBuilder ( int index )
The CloudEvents v1.0 events to publish. No other types are allowed.
If this field is set, then the text_events fields must not be set.
repeated .google.protobuf.Any events = 2;
Parameter
Name
Description
index
int
Returns
Type
Description
AnyOrBuilder
getEventsOrBuilderList()
public abstract List < ? extends AnyOrBuilder > getEventsOrBuilderList ()
The CloudEvents v1.0 events to publish. No other types are allowed.
If this field is set, then the text_events fields must not be set.
repeated .google.protobuf.Any events = 2;
Returns
Type
Description
List < ? extends com.google.protobuf.AnyOrBuilder >
getTextEvents(int index)
public abstract String getTextEvents ( int index )
The text representation of events to publish.
CloudEvent v1.0 in JSON format is the only allowed type. Refer to
https://github.com/cloudevents/spec/blob/v1.0.2/cloudevents/formats/json-format.md
for specification.
If this field is set, then the events fields must not be set.
repeated string text_events = 3;
Parameter
Name
Description
index
int The index of the element to return.
Returns
Type
Description
String
The textEvents at the given index.
getTextEventsBytes(int index)
public abstract ByteString getTextEventsBytes ( int index )
The text representation of events to publish.
CloudEvent v1.0 in JSON format is the only allowed type. Refer to
https://github.com/cloudevents/spec/blob/v1.0.2/cloudevents/formats/json-format.md
for specification.
If this field is set, then the events fields must not be set.
repeated string text_events = 3;
Parameter
Name
Description
index
int The index of the value to return.
Returns
Type
Description
ByteString
The bytes of the textEvents at the given index.
getTextEventsCount()
public abstract int getTextEventsCount ()
The text representation of events to publish.
CloudEvent v1.0 in JSON format is the only allowed type. Refer to
https://github.com/cloudevents/spec/blob/v1.0.2/cloudevents/formats/json-format.md
for specification.
If this field is set, then the events fields must not be set.
repeated string text_events = 3;
Returns
Type
Description
int
The count of textEvents.
getTextEventsList()
public abstract List<String> getTextEventsList ()
The text representation of events to publish.
CloudEvent v1.0 in JSON format is the only allowed type. Refer to
https://github.com/cloudevents/spec/blob/v1.0.2/cloudevents/formats/json-format.md
for specification.
If this field is set, then the events fields must not be set.
repeated string text_events = 3;
Returns
Type
Description
List < String >
A list containing the textEvents.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
