---
title: "Class LogEntryServerStream (3.29.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LogEntryServerStream
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LogEntryServerStream
  title: "Class LogEntryServerStream (3.29.0) \_|\_ Java client libraries \_|\_ Google\
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
Class LogEntryServerStream (3.29.0)
Stay organized with collections
Save and categorize content based on your preferences.
3.29.0 (latest)
3.28.0
3.26.0
3.24.0
3.23.10
3.22.6
3.21.4
3.20.7
3.19.0
3.18.0
3.17.2
3.16.2
3.15.17
3.14.9
3.13.7
3.12.1
3.11.10
3.10.7
3.9.0
3.8.0
3.7.6
3.6.4
3.5.3
public class LogEntryServerStream implements Iterable<LogEntry>
The class implements Iterable interface over {@see LogEntry}. It wraps around BidiStream bi-directional gRPC stream to support iterating through ingested responses. The class
uses {@see LogEntryIterator} to iterate through the processed responses. The stream should be
explicitly canceled by calling {@see LogEntryServerStream#cancel()} method. The class does not
provide recovery or resuming functionality over the stream.
To iterate run:
LogEntryServerStream stream ;
// code to initialize stream
for ( LogEntry log : stream ) {
// do something with logs
}
stream . cancel ();
The iteration can be blocked on waiting for another response sent in the stream.
Inheritance
java.lang.Object >
LogEntryServerStream
Implements
Iterable<LogEntry>
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
Methods
cancel()
public void cancel ()
Cleanly cancels a partially consumed stream. The associated iterator will return false for the
hasNext() in the next iteration. This maintains the contract that an observed true from
hasNext() will yield an item in next(), but afterwards will return false.
convert(TailLogEntriesResponse resp)
public List<LogEntry> convert ( TailLogEntriesResponse resp )
Parameter
Name
Description
resp
TailLogEntriesResponse
Returns
Type
Description
List < LogEntry >
getInternalStream()
public BidiStream<TailLogEntriesRequest , TailLogEntriesResponse > getInternalStream ()
Returns
Type
Description
BidiStream < TailLogEntriesRequest , TailLogEntriesResponse >
isReceiveReady()
public boolean isReceiveReady ()
Returns true if the next call to the iterator's hasNext() or next() is guaranteed to be
nonblocking.
Returns
Type
Description
boolean
If the call on any of the iterator's methods is guaranteed to be nonblocking.
iterator()
public Iterator<LogEntry> iterator ()
Returns
Type
Description
Iterator < LogEntry >
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
