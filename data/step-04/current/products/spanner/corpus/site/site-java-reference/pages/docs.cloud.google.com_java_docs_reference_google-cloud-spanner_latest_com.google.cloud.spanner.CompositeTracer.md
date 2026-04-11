---
title: "Class CompositeTracer (6.111.1) \_|\_ Java client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.CompositeTracer
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.CompositeTracer
  title: "Class CompositeTracer (6.111.1) \_|\_ Java client libraries \_|\_ Google\
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
Class CompositeTracer (6.111.1)
Stay organized with collections
Save and categorize content based on your preferences.
6.111.1 (latest)
6.111.0
6.108.0
6.107.0
6.103.0
6.102.1
6.101.1
6.100.0
6.99.0
6.98.1
6.97.1
6.96.1
6.95.1
6.94.0
6.93.0
6.89.0
6.88.0
6.87.0
6.86.0
6.85.0
6.83.0
6.82.0
6.80.1
6.79.0
6.77.0
6.74.1
6.72.0
6.71.0
6.69.0
6.68.0
6.66.0
6.65.1
6.62.0
6.60.0
6.58.0
6.57.0
6.56.0
6.55.0
6.54.0
6.53.0
6.52.1
6.51.0
6.50.1
6.49.0
6.25.1
6.24.0
6.23.4
6.22.0
6.21.2
6.20.0
6.19.1
6.18.0
6.17.4
6.14.1
public class CompositeTracer extends BaseApiTracer
Inheritance
Object >
BaseApiTracer >
CompositeTracer
Inherited Members
BaseApiTracer.attemptCancelled()
BaseApiTracer.attemptFailed(Throwable,Duration)
BaseApiTracer.attemptFailedRetriesExhausted(Throwable)
BaseApiTracer.attemptPermanentFailure(Throwable)
BaseApiTracer.attemptStarted(int)
BaseApiTracer.attemptStarted(Object,int)
BaseApiTracer.attemptSucceeded()
BaseApiTracer.batchRequestSent(long,long)
BaseApiTracer.connectionSelected(String)
BaseApiTracer.getInstance()
BaseApiTracer.inScope()
BaseApiTracer.lroStartFailed(Throwable)
BaseApiTracer.lroStartSucceeded()
BaseApiTracer.operationCancelled()
BaseApiTracer.operationFailed(Throwable)
BaseApiTracer.operationSucceeded()
BaseApiTracer.requestSent()
BaseApiTracer.responseReceived()
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
CompositeTracer(List<ApiTracer> children)
public CompositeTracer ( List<ApiTracer> children )
Parameter
Name
Description
children
List < ApiTracer >
Methods
addAttributes(String key, String value)
public void addAttributes ( String key , String value )
Parameters
Name
Description
key
String
value
String
addAttributes(Map<String,String> attributes)
public void addAttributes ( Map<String , String > attributes )
Parameter
Name
Description
attributes
Map < String , String >
attemptCancelled()
public void attemptCancelled ()
Overrides
BaseApiTracer.attemptCancelled()
attemptFailed(Throwable error, Duration delay)
public void attemptFailed ( Throwable error , Duration delay )
Parameters
Name
Description
error
Throwable
delay
org.threeten.bp.Duration
Overrides
BaseApiTracer.attemptFailed(Throwable error, Duration delay)
attemptFailedDuration(Throwable error, Duration delay)
public void attemptFailedDuration ( Throwable error , Duration delay )
Parameters
Name
Description
error
Throwable
delay
Duration
attemptFailedRetriesExhausted(Throwable error)
public void attemptFailedRetriesExhausted ( Throwable error )
Parameter
Name
Description
error
Throwable
Overrides
BaseApiTracer.attemptFailedRetriesExhausted(Throwable error)
attemptPermanentFailure(Throwable error)
public void attemptPermanentFailure ( Throwable error )
Parameter
Name
Description
error
Throwable
Overrides
BaseApiTracer.attemptPermanentFailure(Throwable error)
attemptStarted(int attemptNumber)
public void attemptStarted ( int attemptNumber )
Parameter
Name
Description
attemptNumber
int
Overrides
BaseApiTracer.attemptStarted(int attemptNumber)
attemptStarted(Object request, int attemptNumber)
public void attemptStarted ( Object request , int attemptNumber )
Parameters
Name
Description
request
Object
attemptNumber
int
Overrides
BaseApiTracer.attemptStarted(Object request, int attemptNumber)
attemptSucceeded()
public void attemptSucceeded ()
Overrides
BaseApiTracer.attemptSucceeded()
batchRequestSent(long elementCount, long requestSize)
public void batchRequestSent ( long elementCount , long requestSize )
Parameters
Name
Description
elementCount
long
requestSize
long
Overrides
BaseApiTracer.batchRequestSent(long elementCount, long requestSize)
connectionSelected(String id)
public void connectionSelected ( String id )
Parameter
Name
Description
id
String
Overrides
BaseApiTracer.connectionSelected(String id)
inScope()
public ApiTracer . Scope inScope ()
Returns
Type
Description
Scope
Overrides
BaseApiTracer.inScope()
lroStartFailed(Throwable error)
public void lroStartFailed ( Throwable error )
Parameter
Name
Description
error
Throwable
Overrides
BaseApiTracer.lroStartFailed(Throwable error)
lroStartSucceeded()
public void lroStartSucceeded ()
Overrides
BaseApiTracer.lroStartSucceeded()
operationCancelled()
public void operationCancelled ()
Overrides
BaseApiTracer.operationCancelled()
operationFailed(Throwable error)
public void operationFailed ( Throwable error )
Parameter
Name
Description
error
Throwable
Overrides
BaseApiTracer.operationFailed(Throwable error)
operationSucceeded()
public void operationSucceeded ()
Overrides
BaseApiTracer.operationSucceeded()
recordServerTimingHeaderMetrics(Float gfeLatency, Float afeLatency, boolean isDirectPathUsed, boolean isAfeEnabled)
public void recordServerTimingHeaderMetrics ( Float gfeLatency , Float afeLatency , boolean isDirectPathUsed , boolean isAfeEnabled )
Parameters
Name
Description
gfeLatency
Float
afeLatency
Float
isDirectPathUsed
boolean
isAfeEnabled
boolean
requestSent()
public void requestSent ()
Overrides
BaseApiTracer.requestSent()
responseReceived()
public void responseReceived ()
Overrides
BaseApiTracer.responseReceived()
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-14 UTC."],[],[]]
