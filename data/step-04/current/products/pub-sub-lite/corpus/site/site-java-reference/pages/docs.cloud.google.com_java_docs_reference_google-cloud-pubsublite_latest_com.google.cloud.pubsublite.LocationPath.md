---
title: "Class LocationPath (1.16.2) \_|\_ Java client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsublite/latest/com.google.cloud.pubsublite.LocationPath
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsublite/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsublite/latest/com.google.cloud.pubsublite.LocationPath
  title: "Class LocationPath (1.16.2) \_|\_ Java client libraries \_|\_ Google Cloud\
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
Class LocationPath (1.16.2)
Stay organized with collections
Save and categorize content based on your preferences.
1.16.2 (latest)
1.16.1
1.15.21
1.14.8
1.13.8
1.12.22
1.11.2
1.10.0
1.9.4
1.8.0
1.7.1
1.6.3
1.5.5
1.4.12
public abstract class LocationPath implements Serializable
A string wrapper representing a project and location.
Inheritance
java.lang.Object >
LocationPath
Implements
Serializable
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
newBuilder()
public static LocationPath . Builder newBuilder ()
Create a new LocationPath builder.
Returns
Type
Description
LocationPath.Builder
parse(String path)
public static LocationPath parse ( String path )
Parse a location path. Should be structured like:
projects/<project number>/locations/<cloud region or zone>
Parameter
Name
Description
path
String
Returns
Type
Description
LocationPath
Exceptions
Type
Description
ApiException
Constructors
LocationPath()
public LocationPath ()
Methods
location()
public abstract CloudRegionOrZone location ()
Returns
Type
Description
CloudRegionOrZone
project()
public abstract ProjectIdOrNumber project ()
Returns
Type
Description
ProjectIdOrNumber
projectPath()
public ProjectPath projectPath ()
Returns
Type
Description
ProjectPath
toBuilder()
public abstract LocationPath . Builder toBuilder ()
Returns
Type
Description
LocationPath.Builder
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
Last updated 2026-03-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-14 UTC."],[],[]]
