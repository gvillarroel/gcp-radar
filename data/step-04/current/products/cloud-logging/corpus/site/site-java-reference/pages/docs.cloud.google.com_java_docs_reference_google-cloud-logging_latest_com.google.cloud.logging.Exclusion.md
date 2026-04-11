---
title: "Class Exclusion (3.29.0) \_|\_ Java client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.Exclusion
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.Exclusion
  title: "Class Exclusion (3.29.0) \_|\_ Java client libraries \_|\_ Google Cloud\
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
Class Exclusion (3.29.0)
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
public class Exclusion
Specifies a set of log entries that are not to be stored in Logging. If your GCP resource
receives a large volume of logs, you can use exclusions to reduce your chargeable logs.
Exclusions are processed after log sinks, so you can export log entries before they are excluded.
Note that organization-level and folder-level exclusions don't apply to child resources, and that
you can't exclude audit log entries.
Inheritance
Object >
Exclusion
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
newBuilder(String name, String filter)
public static Exclusion . Builder newBuilder ( String name , String filter )
Returns a builder for Exclusion objects given the name of the exclusion and its filter.
Parameters
Name
Description
name
String
filter
String
Returns
Type
Description
Exclusion.Builder
of(String name, String filter)
public static Exclusion of ( String name , String filter )
Creates a Exclusion object given the name of the exclusion and its filter.
Parameters
Name
Description
name
String
filter
String
Returns
Type
Description
Exclusion
Methods
equals(Object o)
public boolean equals ( Object o )
Parameter
Name
Description
o
Object
Returns
Type
Description
boolean
Overrides
Object.equals(Object)
getCreateTime()
public Timestamp getCreateTime ()
Returns the creation timestamp of the exclusion.
Returns
Type
Description
Timestamp
getDescription()
public String getDescription ()
Returns an optional description of an exclusion. Used for documentation purpose.
Returns
Type
Description
String
getFilter()
public String getFilter ()
Returns an advanced logs filter. Example: resource.type=gcs_bucket severity<ERROR
sample(insertId, 0.99) .
See Also: Advanced Log Filters
Returns
Type
Description
String
getName()
public String getName ()
Returns the name of log exclusion.
Returns
Type
Description
String
getUpdateTime()
public Timestamp getUpdateTime ()
Returns the last update timestamp of the exclusion.
Returns
Type
Description
Timestamp
hashCode()
public int hashCode ()
Returns
Type
Description
int
Overrides
Object.hashCode()
isDisabled()
public boolean isDisabled ()
If set to True, then this exclusion is disabled and it does not exclude any log entries.
Returns
Type
Description
boolean
toBuilder()
public Exclusion . Builder toBuilder ()
Returns a builder for this Exclusion object.
Returns
Type
Description
Exclusion.Builder
toString()
public String toString ()
Returns
Type
Description
String
Overrides
Object.toString()
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
