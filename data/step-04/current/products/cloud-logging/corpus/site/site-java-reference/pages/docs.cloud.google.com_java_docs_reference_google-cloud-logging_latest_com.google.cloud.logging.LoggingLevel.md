---
title: "Class LoggingLevel (3.29.0) \_|\_ Java client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingLevel
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingLevel
  title: "Class LoggingLevel (3.29.0) \_|\_ Java client libraries \_|\_ Google Cloud\
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
Class LoggingLevel (3.29.0)
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
public final class LoggingLevel extends Level
This class adds some additional Java logging levels for Cloud Logging. Added levels fill in the
gap between Java logging levels and Cloud Logging severities.
Added levels in descending order are (between parenthesis the relation with Java logging
levels):
EMERGENCY
ALERT
CRITICAL
ERROR ( WARNING < ERROR < SEVERE )
NOTICE ( INFO < NOTICE < WARNING )
DEBUG ( ALL < DEBUG < FINES T
Notice that ERROR is lower than java.util.logging.Level#SEVERE but higher than
java.util.logging.Level#WARNING . DEBUG instead is lower than java.util.logging.Level#FINEST but higher than java.util.logging.Level#ALL .
Inheritance
java.lang.Object >
Level >
LoggingLevel
Inherited Members
Object.clone()
Object.finalize()
Object.getClass()
Object.notify()
Object.notifyAll()
Object.wait()
Object.wait(long)
Object.wait(long,int)
Level.equals(Object)
Level.getLocalizedName()
Level.getName()
Level.getResourceBundleName()
Level.hashCode()
Level.intValue()
Level.parse(String)
Level.toString()
Static Fields
ALERT
public static final LoggingLevel ALERT
A level to be used when a person must take an action immediately. This level is initialized to
1100 .
Field Value
Type
Description
LoggingLevel
CRITICAL
public static final LoggingLevel CRITICAL
A level to be used when critical events cause more severe problems or brief outages. This level
is initialized to 1050 .
Field Value
Type
Description
LoggingLevel
DEBUG
public static final LoggingLevel DEBUG
A level to be used for debug or trace information. This level is initialized to 250 .
Field Value
Type
Description
LoggingLevel
EMERGENCY
public static final LoggingLevel EMERGENCY
A levet to be used when one or more systems are unusable. This level is initialized to
1150 .
Field Value
Type
Description
LoggingLevel
ERROR
public static final LoggingLevel ERROR
A level to be used when events occur that are likely to cause problems. This level is
initialized to 950 .
Field Value
Type
Description
LoggingLevel
NOTICE
public static final LoggingLevel NOTICE
A level to be used when normal events occur, such as start up and shut down. This level is
initialized to 850 .
Field Value
Type
Description
LoggingLevel
Methods
getSeverity()
public Severity getSeverity ()
Returns the Cloud Logging severity associated with this logging level.
Returns
Type
Description
Severity
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
