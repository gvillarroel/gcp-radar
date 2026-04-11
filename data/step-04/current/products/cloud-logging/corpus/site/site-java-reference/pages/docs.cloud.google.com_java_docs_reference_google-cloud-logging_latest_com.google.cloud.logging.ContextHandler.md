---
title: "Class ContextHandler (3.29.0) \_|\_ Java client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.ContextHandler
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.ContextHandler
  title: "Class ContextHandler (3.29.0) \_|\_ Java client libraries \_|\_ Google Cloud\
    \ Documentation"
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
Class ContextHandler (3.29.0)
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
public class ContextHandler
Class provides a per-thread storage of the {@see Context} instances.
Inheritance
java.lang.Object >
ContextHandler
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
ContextHandler()
public ContextHandler ()
Methods
getCurrentContext()
public Context getCurrentContext ()
Returns
Type
Description
Context
getCurrentContextPriority()
public ContextHandler . ContextPriority getCurrentContextPriority ()
Returns
Type
Description
ContextHandler.ContextPriority
removeCurrentContext()
public void removeCurrentContext ()
removeCurrentContextPriority()
public void removeCurrentContextPriority ()
setCurrentContext(Context context)
public void setCurrentContext ( Context context )
Parameter
Name
Description
context
Context
setCurrentContext(Context context, ContextHandler.ContextPriority priority)
public void setCurrentContext ( Context context , ContextHandler . ContextPriority priority )
Sets the context based on the priority. Overrides traceId, spanId and TraceSampled if the
passed priority is higher. HttpRequest values will be retrieved and combined from existing
context if HttpRequest in the new context is empty .
Parameters
Name
Description
context
Context
priority
ContextHandler.ContextPriority
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
