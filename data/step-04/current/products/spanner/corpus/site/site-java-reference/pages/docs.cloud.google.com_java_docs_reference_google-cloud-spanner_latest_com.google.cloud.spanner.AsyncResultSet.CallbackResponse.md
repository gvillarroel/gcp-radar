---
title: "Enum AsyncResultSet.CallbackResponse (6.111.1) \_|\_ Java client libraries\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.AsyncResultSet.CallbackResponse
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.AsyncResultSet.CallbackResponse
  title: "Enum AsyncResultSet.CallbackResponse (6.111.1) \_|\_ Java client libraries\
    \ \_|\_ Google Cloud Documentation"
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
Enum AsyncResultSet.CallbackResponse (6.111.1)
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
public enum AsyncResultSet . CallbackResponse extends Enum<AsyncResultSet . CallbackResponse >
Inherited Members
Enum.<T>valueOf(Class<T>,String)
Enum.clone()
Enum.compareTo(E)
Enum.equals(Object)
Enum.finalize()
Enum.getDeclaringClass()
Enum.hashCode()
Enum.name()
Enum.ordinal()
Enum.toString()
Object.getClass()
Object.notify()
Object.notifyAll()
Object.wait()
Object.wait(long)
Object.wait(long,int)
Static Fields
Name
Description
CONTINUE
Tell the cursor to continue issuing callbacks when data is available. This is the standard
"I'm ready for more" response. If cursor is not completely drained of all ready results the
callback will be called again immediately.
DONE
Tell the cursor you are done receiving results, even if there are more results sitting in the
buffer. Once you return DONE, you will receive no further callbacks.
Approximately equivalent to calling ForwardingAsyncResultSet#cancel() , and then
returning PAUSE , but more clear, immediate, and idiomatic.
It is legal to commit a transaction that owns this read before actually returning
DONE .
PAUSE
Tell the cursor to suspend all callbacks until application calls ForwardingAsyncResultSet#resume() .
Static Methods
Name
Description
valueOf(String name)
values()
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-14 UTC."],[],[]]
