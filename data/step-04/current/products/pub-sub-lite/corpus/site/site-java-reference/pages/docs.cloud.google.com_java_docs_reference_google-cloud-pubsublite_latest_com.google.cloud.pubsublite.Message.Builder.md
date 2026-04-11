---
title: "Class Message.Builder (1.16.2) \_|\_ Java client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsublite/latest/com.google.cloud.pubsublite.Message.Builder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsublite/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsublite/latest/com.google.cloud.pubsublite.Message.Builder
  title: "Class Message.Builder (1.16.2) \_|\_ Java client libraries \_|\_ Google\
    \ Cloud Documentation"
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
Class Message.Builder (1.16.2)
Stay organized with collections
Save and categorize content based on your preferences.
1.16.2 (latest)
1.16.1
1.15.21
1.14.8
1.13.8
1.12.22
1.11.2
1.10.0
1.9.4
1.8.0
1.7.1
1.6.3
1.5.5
1.4.12
public abstract static class Message . Builder
Inheritance
java.lang.Object >
Message.Builder
Inherited Members
Object.clone()
Object.equals(Object)
Object.finalize()
Object.getClass()
Object.hashCode()
Object.notify()
Object.notifyAll()
Object.toString()
Object.wait()
Object.wait(long)
Object.wait(long,int)
Constructors
Builder()
public Builder ()
Methods
build()
public abstract Message build ()
Build a message.
Returns
Type
Description
Message
setAttributes(ImmutableListMultimap<String,ByteString> attributes)
public abstract Message . Builder setAttributes ( ImmutableListMultimap<String , ByteString > attributes )
A multimap of attributes for this message.
Parameter
Name
Description
attributes
com.google.common.collect.ImmutableListMultimap < String , ByteString >
Returns
Type
Description
Message.Builder
setData(ByteString data)
public abstract Message . Builder setData ( ByteString data )
The data payload for this message.
Parameter
Name
Description
data
ByteString
Returns
Type
Description
Message.Builder
setEventTime(Timestamp eventTime)
public abstract Message . Builder setEventTime ( Timestamp eventTime )
The user provided event time for this message.
Parameter
Name
Description
eventTime
Timestamp
Returns
Type
Description
Message.Builder
setKey(ByteString key)
public abstract Message . Builder setKey ( ByteString key )
The key for this message. All messages with the same key are routed to the same partition.
Parameter
Name
Description
key
ByteString
Returns
Type
Description
Message.Builder
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-14 UTC."],[],[]]
