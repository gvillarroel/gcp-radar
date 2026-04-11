---
title: "Class Cluster (2.74.0) \_|\_ Java client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.models.Cluster
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.models.Cluster
  title: "Class Cluster (2.74.0) \_|\_ Java client libraries \_|\_ Google Cloud Documentation"
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
Class Cluster (2.74.0)
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
public class Cluster
A cluster represents the actual Cloud Bigtable service. Each cluster belongs to a single Cloud
Bigtable instance, and an instance can have up to 2 clusters. When your application sends
requests to a Cloud Bigtable instance, those requests are actually handled by one of the clusters
in the instance.
Inheritance
Object >
Cluster
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
fromProto(Cluster proto)
public static Cluster fromProto ( Cluster proto )
Internal Only : This feature is not stable for application use.
Wraps a protobuf response.
This method is considered an internal implementation detail and not meant to be used by
applications.
Parameter
Name
Description
proto
com.google.bigtable.admin.v2.Cluster
Returns
Type
Description
Cluster
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
getAutoscalingCpuPercentageTarget()
public int getAutoscalingCpuPercentageTarget ()
Get the cpu utilization that the Autoscaler should be trying to achieve. This number is on a
scale from 0 (no utilization) to 100 (total utilization).
Returns
Type
Description
int
getAutoscalingMaxServeNodes()
public int getAutoscalingMaxServeNodes ()
Get the maximum number of nodes to scale up to.
Returns
Type
Description
int
getAutoscalingMinServeNodes()
public int getAutoscalingMinServeNodes ()
Get the minimum number of nodes to scale down to.
Returns
Type
Description
int
getId()
public String getId ()
Gets the cluster's id.
Returns
Type
Description
String
getInstanceId()
public String getInstanceId ()
Gets the instance id.
Returns
Type
Description
String
getKmsKeyName()
public String getKmsKeyName ()
Google Cloud Key Management Service (KMS) settings for a CMEK-protected Bigtable cluster. This
returns the full resource name of the Cloud KMS key in the format
projects/{key_project_id}/locations/{location}/keyRings/{ring_name}/cryptoKeys/{key_name}
Returns
Type
Description
String
getServeNodes()
public int getServeNodes ()
Get the number of nodes allocated to this cluster. More nodes enable higher throughput and more
consistent performance.
Returns
Type
Description
int
getState()
public Cluster . State getState ()
Gets the current state of the cluster
Returns
Type
Description
Cluster.State
getStorageType()
public StorageType getStorageType ()
The type of storage used by this cluster to serve its parent instance's tables, unless
explicitly overridden.
Returns
Type
Description
StorageType
getStorageUtilizationGibPerNode()
public int getStorageUtilizationGibPerNode ()
Get the storage utilization that the Autoscaler should be trying to achieve. This number is
limited between 2560 (2.5TiB) and 5120 (5TiB) for a SSD cluster and between 8192 (8TiB) and
16384 (16TiB) for an HDD cluster; otherwise it will return INVALID_ARGUMENT error. If this
value is set to 0, it will be treated as if it were set to the default value: 2560 for SSD,
8192 for HDD.
Returns
Type
Description
int
getZone()
public String getZone ()
Get the zone where this cluster is located.
Returns
Type
Description
String
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
