---
title: "Class AppProfile.MultiClusterRoutingPolicy (2.74.0) \_|\_ Java client libraries\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.models.AppProfile.MultiClusterRoutingPolicy
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.models.AppProfile.MultiClusterRoutingPolicy
  title: "Class AppProfile.MultiClusterRoutingPolicy (2.74.0) \_|\_ Java client libraries\
    \ \_|\_ Google Cloud Documentation"
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
Class AppProfile.MultiClusterRoutingPolicy (2.74.0)
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
public static class AppProfile . MultiClusterRoutingPolicy implements AppProfile . RoutingPolicy
A RoutingPolicy that tells Cloud Bigtable that it can route each request to any
available cluster.
Inheritance
Object >
AppProfile.MultiClusterRoutingPolicy
Implements
AppProfile.RoutingPolicy
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
of()
public static AppProfile . MultiClusterRoutingPolicy of ()
Creates a new instance of MultiClusterRoutingPolicy .
Returns
Type
Description
AppProfile.MultiClusterRoutingPolicy
of(String[] clusterIds)
public static AppProfile . MultiClusterRoutingPolicy of ( String [] clusterIds )
Creates a new instance of MultiClusterRoutingPolicy with specified cluster ids to
route to.
Parameter
Name
Description
clusterIds
String []
Returns
Type
Description
AppProfile.MultiClusterRoutingPolicy
of(Set<String> clusterIds)
public static AppProfile . MultiClusterRoutingPolicy of ( Set<String> clusterIds )
Creates a new instance of MultiClusterRoutingPolicy with specified cluster ids to
route to.
Parameter
Name
Description
clusterIds
Set < String >
Returns
Type
Description
AppProfile.MultiClusterRoutingPolicy
withRowAffinity()
public static AppProfile . MultiClusterRoutingPolicy withRowAffinity ()
Creates a new instance of MultiClusterRoutingPolicy .
Returns
Type
Description
AppProfile.MultiClusterRoutingPolicy
withRowAffinity(String[] clusterIds)
public static AppProfile . MultiClusterRoutingPolicy withRowAffinity ( String [] clusterIds )
Creates a new instance of MultiClusterRoutingPolicy with row affinity enabled and
specified cluster ids to route to.
Parameter
Name
Description
clusterIds
String []
Returns
Type
Description
AppProfile.MultiClusterRoutingPolicy
withRowAffinity(Set<String> clusterIds)
public static AppProfile . MultiClusterRoutingPolicy withRowAffinity ( Set<String> clusterIds )
Creates a new instance of MultiClusterRoutingPolicy with specified cluster ids to
route to.
Parameter
Name
Description
clusterIds
Set < String >
Returns
Type
Description
AppProfile.MultiClusterRoutingPolicy
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
getClusterIds()
public Set<String> getClusterIds ()
Returns
Type
Description
Set < String >
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
