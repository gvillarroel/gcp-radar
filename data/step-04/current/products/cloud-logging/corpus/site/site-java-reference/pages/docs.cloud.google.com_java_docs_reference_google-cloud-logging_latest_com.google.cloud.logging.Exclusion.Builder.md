---
title: "Class Exclusion.Builder (3.29.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.Exclusion.Builder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.Exclusion.Builder
  title: "Class Exclusion.Builder (3.29.0) \_|\_ Java client libraries \_|\_ Google\
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
Class Exclusion.Builder (3.29.0)
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
public static class Exclusion . Builder
A builder for Exclusion objects.
Inheritance
java.lang.Object >
Exclusion.Builder
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
build()
public Exclusion build ()
Creates a Exclusion object.
Returns
Type
Description
Exclusion
setCreateTime(Timestamp createTime)
public Exclusion . Builder setCreateTime ( Timestamp createTime )
[Output only] The creation timestamp of the exclusion.
Parameter
Name
Description
createTime
Timestamp
Returns
Type
Description
Exclusion.Builder
setDescription(String description)
public Exclusion . Builder setDescription ( String description )
[Optional] A description of this exclusion.
Parameter
Name
Description
description
String
Returns
Type
Description
Exclusion.Builder
setDisabled(boolean disabled)
public Exclusion . Builder setDisabled ( boolean disabled )
[Optional] If set to True, then this exclusion is disabled and it does not exclude any log
entries.
Parameter
Name
Description
disabled
boolean
Returns
Type
Description
Exclusion.Builder
setFilter(String filter)
public Exclusion . Builder setFilter ( String filter )
[Required] An advanced logs filter that matches the log entries to be excluded. By using the
sample function, you can exclude less than 100% of the matching log entries.
Parameter
Name
Description
filter
String
Returns
Type
Description
Exclusion.Builder
setName(String name)
public Exclusion . Builder setName ( String name )
[Required] A client-assigned identifier, such as "load-balancer-exclusion". Identifiers are
limited to 100 characters and can include only letters, digits, underscores, hyphens, and
periods. First character has to be alphanumeric.
Parameter
Name
Description
name
String
Returns
Type
Description
Exclusion.Builder
setUpdateTime(Timestamp updateTime)
public Exclusion . Builder setUpdateTime ( Timestamp updateTime )
[Output only] The last update timestamp of the exclusion.
Parameter
Name
Description
updateTime
Timestamp
Returns
Type
Description
Exclusion.Builder
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
