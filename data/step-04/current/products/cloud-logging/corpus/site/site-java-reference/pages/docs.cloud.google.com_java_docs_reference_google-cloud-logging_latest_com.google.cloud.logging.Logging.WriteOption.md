---
title: "Class Logging.WriteOption (3.29.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.Logging.WriteOption
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.Logging.WriteOption
  title: "Class Logging.WriteOption (3.29.0) \_|\_ Java client libraries \_|\_ Google\
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
Class Logging.WriteOption (3.29.0)
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
public static final class Logging . WriteOption extends Option
Class for specifying options for writing log entries.
Inheritance
Object >
com.google.cloud.logging.Option >
Logging.WriteOption
Inherited Members
com.google.cloud.logging.Option.equals(java.lang.Object)
com.google.cloud.logging.Option.hashCode()
com.google.cloud.logging.Option.toString()
Object.clone()
Object.finalize()
Object.getClass()
Object.notify()
Object.notifyAll()
Object.wait()
Object.wait(long)
Object.wait(long,int)
Static Methods
autoPopulateMetadata(boolean autoPopulateMetadata)
public static Logging . WriteOption autoPopulateMetadata ( boolean autoPopulateMetadata )
Returns an option to opt-out automatic population of log entries metadata fields that are not
set.
Parameter
Name
Description
autoPopulateMetadata
boolean
Returns
Type
Description
Logging.WriteOption
destination(LogDestinationName destination)
public static Logging . WriteOption destination ( LogDestinationName destination )
Returns an option to specify a log destination resource path (see LogDestinationName
for details)
Parameter
Name
Description
destination
LogDestinationName
Returns
Type
Description
Logging.WriteOption
labels(Map<String,String> labels)
public static Logging . WriteOption labels ( Map<String , String > labels )
Sets an option to specify (key, value) pairs that are added to the LogEntry#getLabels() of each log entry written, except when a log entry already has a value
associated to the same key.
Parameter
Name
Description
labels
Map < String , String >
Returns
Type
Description
Logging.WriteOption
logName(String logName)
public static Logging . WriteOption logName ( String logName )
Returns an option to specify a default log name (see LogEntry#getLogName() ) for those
log entries that do not specify their own log name. Example: syslog .
Parameter
Name
Description
logName
String
Returns
Type
Description
Logging.WriteOption
partialSuccess(boolean partialSuccess)
public static Logging . WriteOption partialSuccess ( boolean partialSuccess )
Returns an option to set partialSuccess flag. See the
API documentation for more details.
Parameter
Name
Description
partialSuccess
boolean
Returns
Type
Description
Logging.WriteOption
resource(MonitoredResource resource)
public static Logging . WriteOption resource ( MonitoredResource resource )
Returns an option to specify a default monitored resource (see LogEntry#getResource() ) for those log entries that do not specify their own resource.
Parameter
Name
Description
resource
com.google.cloud.MonitoredResource
Returns
Type
Description
Logging.WriteOption
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
