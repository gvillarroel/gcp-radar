---
title: "Class AppProfile (2.74.0) \_|\_ Java client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.models.AppProfile
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.models.AppProfile
  title: "Class AppProfile (2.74.0) \_|\_ Java client libraries \_|\_ Google Cloud\
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
Class AppProfile (2.74.0)
Stay organized with collections
Save and categorize content based on your preferences.
2.74.0 (latest)
2.73.0
2.72.0
2.71.0
2.70.0
2.68.0
2.67.1
2.66.0
2.65.1
2.63.0
2.62.0
2.61.0
2.60.0
2.59.0
2.58.2
2.56.0
2.54.0
2.52.0
2.51.2
2.49.0
2.46.0
2.45.1
2.44.1
2.43.0
2.42.0
2.40.0
2.39.5
2.37.0
2.35.1
2.34.0
2.33.0
2.32.0
2.31.0
2.30.0
2.29.1
2.28.0
public final class AppProfile
An application profile, or app profile, stores settings that tell your Cloud Bigtable instance
how to handle incoming requests from an application. When one of your applications connects to a
Cloud Bigtable instance, it can specify an app profile, and Cloud Bigtable uses that app profile
for any requests that the application sends over that connection.
App profiles affect how your applications communicate with an instance that uses replication.
As a result, app profiles are especially useful for instances that have 2 clusters. Even if your
instance has only 1 cluster, you can use a unique app profile for each application that you run,
or for different components within a single application.
See Also: For more details .
Inheritance
Object >
AppProfile
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
fromProto(AppProfile proto)
public static AppProfile fromProto ( AppProfile proto )
Internal Only : This feature is not stable for application use.
Wraps a protobuf response.
This method is considered an internal implementation detail and not meant to be used by
applications.
Parameter
Name
Description
proto
com.google.bigtable.admin.v2.AppProfile
Returns
Type
Description
AppProfile
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
getDescription()
public String getDescription ()
Gets long form description of the use case for this AppProfile.
Returns
Type
Description
String
getId()
public String getId ()
Gets the id of this AppProfile.
Returns
Type
Description
String
getInstanceId()
public String getInstanceId ()
Gets the id of the instance that owns this AppProfile.
Returns
Type
Description
String
getIsolationPolicy()
public AppProfile . IsolationPolicy getIsolationPolicy ()
Returns
Type
Description
AppProfile.IsolationPolicy
getPolicy()
public AppProfile . RoutingPolicy getPolicy ()
Gets the routing policy for all read/write requests which use this app profile.
Returns
Type
Description
AppProfile.RoutingPolicy
hashCode()
public int hashCode ()
Returns
Type
Description
int
Overrides
Object.hashCode()
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-14 UTC."],[],[]]
