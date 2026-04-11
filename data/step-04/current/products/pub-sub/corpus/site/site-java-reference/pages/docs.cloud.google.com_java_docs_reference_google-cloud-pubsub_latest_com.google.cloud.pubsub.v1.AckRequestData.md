---
title: "Class AckRequestData (1.149.0) \_|\_ Java client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsub/latest/com.google.cloud.pubsub.v1.AckRequestData
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsub/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsub/latest/com.google.cloud.pubsub.v1.AckRequestData
  title: "Class AckRequestData (1.149.0) \_|\_ Java client libraries \_|\_ Google\
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
Class AckRequestData (1.149.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.149.0 (latest)
1.148.0
1.147.0
1.145.0
1.143.1
1.142.0
1.141.5
1.140.2
1.139.4
1.138.0
1.137.1
1.136.1
1.135.0
1.134.2
1.133.1
1.132.2
1.131.0
1.130.0
1.129.6
1.127.3
1.126.6
1.125.13
1.123.18
1.122.2
1.121.1
1.120.24
1.119.1
1.118.0
1.117.0
1.116.4
1.115.5
public class AckRequestData
Inheritance
java.lang.Object >
AckRequestData
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
Static Methods
newBuilder(String ackId)
public static AckRequestData . Builder newBuilder ( String ackId )
Parameter
Name
Description
ackId
String
Returns
Type
Description
AckRequestData.Builder
Constructors
AckRequestData(AckRequestData.Builder builder)
protected AckRequestData ( AckRequestData . Builder builder )
Parameter
Name
Description
builder
AckRequestData.Builder
Methods
getAckId()
public String getAckId ()
Returns
Type
Description
String
getMessageFutureIfExists()
public SettableApiFuture<AckResponse> getMessageFutureIfExists ()
Returns
Type
Description
SettableApiFuture < AckResponse >
getMessageWrapper()
public PubsubMessageWrapper getMessageWrapper ()
Returns an empty PubsubMessageWrapper with OpenTelemetry tracing disabled. This allows methods
that use this method to be unit tested.
Returns
Type
Description
PubsubMessageWrapper
hasMessageFuture()
public boolean hasMessageFuture ()
Returns
Type
Description
boolean
setResponse(AckResponse ackResponse, boolean setResponseOnSuccess)
public AckRequestData setResponse ( AckResponse ackResponse , boolean setResponseOnSuccess )
Parameters
Name
Description
ackResponse
AckResponse
setResponseOnSuccess
boolean
Returns
Type
Description
AckRequestData
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-14 UTC."],[],[]]
