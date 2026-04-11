---
title: "Class Logging.TailOption (3.29.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.Logging.TailOption
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.Logging.TailOption
  title: "Class Logging.TailOption (3.29.0) \_|\_ Java client libraries \_|\_ Google\
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
Class Logging.TailOption (3.29.0)
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
public static final class Logging . TailOption extends Option
Class for specifying options for tailing log entries.
Inheritance
Object >
com.google.cloud.logging.Option >
Logging.TailOption
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
billingAccount(String billingAccount)
public static Logging . TailOption billingAccount ( String billingAccount )
Returns an option to specify a billingAccount for the log entries to be tailed.
Parameter
Name
Description
billingAccount
String
Returns
Type
Description
Logging.TailOption
bufferWindow(String duration)
public static Logging . TailOption bufferWindow ( String duration )
Returns an option to specify the amount of time to buffer log entries at the server before
being returned to prevent out of order results due to late arriving log entries. Valid values
are between 0-60000 ms. Default is 2000 ms.
See Also: Duration format
Parameter
Name
Description
duration
String
Returns
Type
Description
Logging.TailOption
filter(String filter)
public static Logging . TailOption filter ( String filter )
Returns an option to specify a filter to the log entries to be tailed.
See Also: Advanced Logs Filters
Parameter
Name
Description
filter
String
Returns
Type
Description
Logging.TailOption
folder(String folder)
public static Logging . TailOption folder ( String folder )
Returns an option to specify a folder for the log entries to be tailed.
Parameter
Name
Description
folder
String
Returns
Type
Description
Logging.TailOption
organization(String organization)
public static Logging . TailOption organization ( String organization )
Returns an option to specify an organization for the log entries to be tailed.
Parameter
Name
Description
organization
String
Returns
Type
Description
Logging.TailOption
project(String project)
public static Logging . TailOption project ( String project )
Returns an option to specify a project for the log entries to be tailed.
Parameter
Name
Description
project
String
Returns
Type
Description
Logging.TailOption
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
