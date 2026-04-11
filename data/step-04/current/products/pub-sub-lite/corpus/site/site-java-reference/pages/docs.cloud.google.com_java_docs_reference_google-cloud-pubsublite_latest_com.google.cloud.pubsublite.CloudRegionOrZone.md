---
title: "Class CloudRegionOrZone (1.16.2) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsublite/latest/com.google.cloud.pubsublite.CloudRegionOrZone
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsublite/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsublite/latest/com.google.cloud.pubsublite.CloudRegionOrZone
  title: "Class CloudRegionOrZone (1.16.2) \_|\_ Java client libraries \_|\_ Google\
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
Class CloudRegionOrZone (1.16.2)
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
public abstract class CloudRegionOrZone implements Serializable
Inheritance
java.lang.Object >
CloudRegionOrZone
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
of(CloudRegion region)
public static CloudRegionOrZone of ( CloudRegion region )
Parameter
Name
Description
region
CloudRegion
Returns
Type
Description
CloudRegionOrZone
of(CloudZone zone)
public static CloudRegionOrZone of ( CloudZone zone )
Parameter
Name
Description
zone
CloudZone
Returns
Type
Description
CloudRegionOrZone
parse(String value)
public static CloudRegionOrZone parse ( String value )
Parameter
Name
Description
value
String
Returns
Type
Description
CloudRegionOrZone
Exceptions
Type
Description
ApiException
Constructors
CloudRegionOrZone()
public CloudRegionOrZone ()
Methods
extractRegion()
public CloudRegion extractRegion ()
Extract the region from this regardless of which case is set.
Returns
Type
Description
CloudRegion
getKind()
public abstract CloudRegionOrZone . Kind getKind ()
Returns
Type
Description
CloudRegionOrZone.Kind
region()
public abstract CloudRegion region ()
Returns
Type
Description
CloudRegion
toString()
public String toString ()
Returns
Type
Description
String
Overrides
Object.toString()
zone()
public abstract CloudZone zone ()
Returns
Type
Description
CloudZone
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-14 UTC."],[],[]]
