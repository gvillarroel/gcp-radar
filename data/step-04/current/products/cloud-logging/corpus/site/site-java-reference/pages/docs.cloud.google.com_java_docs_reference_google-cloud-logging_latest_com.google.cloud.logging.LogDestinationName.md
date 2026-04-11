---
title: "Class LogDestinationName (3.29.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LogDestinationName
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LogDestinationName
  title: "Class LogDestinationName (3.29.0) \_|\_ Java client libraries \_|\_ Google\
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
Class LogDestinationName (3.29.0)
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
public final class LogDestinationName extends Option
Class for specifying resource name of the log to which this log entry belongs (see 'logName'
parameter in https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry )
Inheritance
Object >
com.google.cloud.logging.Option >
LogDestinationName
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
billingAccount(String id)
public static LogDestinationName billingAccount ( String id )
Returns an option which sets and validates project ID resource name for log entries.
Parameter
Name
Description
id
String corresponds to BILLING_ACCOUNT_ID token in 'logName' field described in
https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry
Returns
Type
Description
LogDestinationName
folder(String id)
public static LogDestinationName folder ( String id )
Returns an option which sets and validates project ID resource name for log entries.
Parameter
Name
Description
id
String corresponds to FOLDER_ID token in 'logName' field described in
https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry
Returns
Type
Description
LogDestinationName
fromLogName(LogName logName)
public static LogDestinationName fromLogName ( LogName logName )
Creates a LogDestinationName object from given LogName .
Parameter
Name
Description
logName
LogName
Returns
Type
Description
LogDestinationName
organization(String id)
public static LogDestinationName organization ( String id )
Returns an option which sets and validates project ID resource name for log entries.
Parameter
Name
Description
id
String corresponds to ORGANIZATION_ID token in 'logName' field described in
https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry
Returns
Type
Description
LogDestinationName
project(String id)
public static LogDestinationName project ( String id )
Returns an option which sets and validates project ID resource name for log entries.
Parameter
Name
Description
id
String corresponds to PROJECT_ID token in 'logName' field described in
https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry
Returns
Type
Description
LogDestinationName
Methods
getDestinationId()
public String getDestinationId ()
Returns ID value associated with LogDestinationName object
Returns
Type
Description
String
getDestinationType()
public LogDestinationName . DestinationType getDestinationType ()
Returns destination type option value associated with LogDestinationName object
Returns
Type
Description
LogDestinationName.DestinationType
toLogName(String logId)
public LogName toLogName ( String logId )
Creates a LogEntry object for given log ID.
Parameter
Name
Description
logId
String
Returns
Type
Description
LogName
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
