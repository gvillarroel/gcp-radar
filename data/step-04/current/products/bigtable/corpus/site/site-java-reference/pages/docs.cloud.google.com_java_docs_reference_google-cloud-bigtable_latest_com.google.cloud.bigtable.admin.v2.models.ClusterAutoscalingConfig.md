---
title: "Class ClusterAutoscalingConfig (2.74.0) \_|\_ Java client libraries \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.models.ClusterAutoscalingConfig
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.models.ClusterAutoscalingConfig
  title: "Class ClusterAutoscalingConfig (2.74.0) \_|\_ Java client libraries \_|\_\
    \ Google Cloud Documentation"
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
Class ClusterAutoscalingConfig (2.74.0)
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
public class ClusterAutoscalingConfig
Model class to create an autoscaling config for creating or updating a cluster. When creating
this config, min nodes, max nodes, and CPU utilization must all be set.
Inheritance
Object >
ClusterAutoscalingConfig
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
of(String instanceId, String clusterId)
public static ClusterAutoscalingConfig of ( String instanceId , String clusterId )
Parameters
Name
Description
instanceId
String
clusterId
String
Returns
Type
Description
ClusterAutoscalingConfig
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
getClusterId()
public String getClusterId ()
The cluster id to set autoscaling on
Returns
Type
Description
String
getCpuUtilizationTargetPercent()
public int getCpuUtilizationTargetPercent ()
Get the CPU utilization that the Autoscaler should be trying to achieve. This number is on a
scale from 0 (no utilization) to 100 (total utilization).
Returns
Type
Description
int
getInstanceId()
public String getInstanceId ()
The instance id of the cluster to set autoscaling on
Returns
Type
Description
String
getMaxNodes()
public int getMaxNodes ()
Get the maximum number of nodes to scale up to.
Returns
Type
Description
int
getMinNodes()
public int getMinNodes ()
Get the minimum number of nodes to scale down to.
Returns
Type
Description
int
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
hashCode()
public int hashCode ()
Returns
Type
Description
int
Overrides
Object.hashCode()
setCpuUtilizationTargetPercent(int cpuUtilizationTargetPercent)
public ClusterAutoscalingConfig setCpuUtilizationTargetPercent ( int cpuUtilizationTargetPercent )
Set the CPU utilization that the Autoscaler should be trying to achieve. This number is on a
scale from 0 (no utilization) to 100 (total utilization).
Parameter
Name
Description
cpuUtilizationTargetPercent
int
Returns
Type
Description
ClusterAutoscalingConfig
setMaxNodes(int maxNodes)
public ClusterAutoscalingConfig setMaxNodes ( int maxNodes )
Set the maximum number of nodes to scale up to.
Parameter
Name
Description
maxNodes
int
Returns
Type
Description
ClusterAutoscalingConfig
setMinNodes(int minNodes)
public ClusterAutoscalingConfig setMinNodes ( int minNodes )
Set the minimum number of nodes to scale down to.
Parameter
Name
Description
minNodes
int
Returns
Type
Description
ClusterAutoscalingConfig
setStorageUtilizationGibPerNode(int storageUtilizationGibPerNode)
public ClusterAutoscalingConfig setStorageUtilizationGibPerNode ( int storageUtilizationGibPerNode )
Parameter
Name
Description
storageUtilizationGibPerNode
int
Returns
Type
Description
ClusterAutoscalingConfig
toProto(String projectId)
public PartialUpdateClusterRequest toProto ( String projectId )
Internal Only : This feature is not stable for application use.
Creates the request protobuf. This method is considered an internal implementation detail and
not meant to be used by applications.
Parameter
Name
Description
projectId
String
Returns
Type
Description
com.google.bigtable.admin.v2.PartialUpdateClusterRequest
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-14 UTC."],[],[]]
