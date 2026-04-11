---
title: "Interface AutoscalingPolicyOrBuilder (4.85.0) \_|\_ Java client libraries\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyOrBuilder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyOrBuilder
  title: "Interface AutoscalingPolicyOrBuilder (4.85.0) \_|\_ Java client libraries\
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
Interface AutoscalingPolicyOrBuilder (4.85.0)
Stay organized with collections
Save and categorize content based on your preferences.
4.85.0 (latest)
4.84.0
4.82.0
4.80.0
4.79.0
4.78.0
4.77.0
4.75.0
4.73.0
4.72.0
4.71.0
4.70.0
4.69.0
4.67.0
4.65.0
4.64.0
4.61.0
4.60.0
4.59.0
4.57.0
4.56.0
4.55.0
4.54.0
4.53.0
4.52.0
4.51.0
4.50.0
4.49.0
4.48.0
4.46.0
4.45.0
4.44.0
4.43.0
4.42.0
4.41.0
4.40.0
4.39.0
4.38.0
4.37.0
4.36.0
4.34.0
4.33.0
4.32.0
4.31.0
4.30.0
4.29.0
4.28.0
4.27.0
4.26.0
4.25.0
4.24.0
4.21.0
4.20.0
4.19.0
4.18.0
4.17.0
4.16.0
4.15.0
4.14.0
4.13.0
4.12.0
4.11.0
4.10.0
4.9.0
4.8.0
4.6.0
4.5.0
4.4.0
4.3.0
4.2.0
4.1.0
4.0.8
3.1.2
3.0.3
2.3.1
public interface AutoscalingPolicyOrBuilder extends MessageOrBuilder
Implements
MessageOrBuilder
Methods
containsLabels(String key)
public abstract boolean containsLabels ( String key )
Optional. The labels to associate with this autoscaling policy.
Label keys must contain 1 to 63 characters, and must conform to
RFC 1035 .
Label values may be empty, but, if present, must contain 1 to 63
characters, and must conform to RFC
1035 . No more than 32 labels can be
associated with an autoscaling policy.
map<string, string> labels = 6 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
key
String
Returns
Type
Description
boolean
getAlgorithmCase()
public abstract AutoscalingPolicy . AlgorithmCase getAlgorithmCase ()
Returns
Type
Description
AutoscalingPolicy.AlgorithmCase
getBasicAlgorithm()
public abstract BasicAutoscalingAlgorithm getBasicAlgorithm ()
.google.cloud.dataproc.v1.BasicAutoscalingAlgorithm basic_algorithm = 3 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
BasicAutoscalingAlgorithm
The basicAlgorithm.
getBasicAlgorithmOrBuilder()
public abstract BasicAutoscalingAlgorithmOrBuilder getBasicAlgorithmOrBuilder ()
.google.cloud.dataproc.v1.BasicAutoscalingAlgorithm basic_algorithm = 3 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
BasicAutoscalingAlgorithmOrBuilder
getClusterType()
public abstract AutoscalingPolicy . ClusterType getClusterType ()
Optional. The type of the clusters for which this autoscaling policy is to
be configured.
.google.cloud.dataproc.v1.AutoscalingPolicy.ClusterType cluster_type = 7 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
AutoscalingPolicy.ClusterType
The clusterType.
getClusterTypeValue()
public abstract int getClusterTypeValue ()
Optional. The type of the clusters for which this autoscaling policy is to
be configured.
.google.cloud.dataproc.v1.AutoscalingPolicy.ClusterType cluster_type = 7 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
int
The enum numeric value on the wire for clusterType.
getId()
public abstract String getId ()
Required. The policy id.
The id must contain only letters (a-z, A-Z), numbers (0-9),
underscores (_), and hyphens (-). Cannot begin or end with underscore
or hyphen. Must consist of between 3 and 50 characters.
string id = 1;
Returns
Type
Description
String
The id.
getIdBytes()
public abstract ByteString getIdBytes ()
Required. The policy id.
The id must contain only letters (a-z, A-Z), numbers (0-9),
underscores (_), and hyphens (-). Cannot begin or end with underscore
or hyphen. Must consist of between 3 and 50 characters.
string id = 1;
Returns
Type
Description
ByteString
The bytes for id.
getLabels() (deprecated)
public abstract Map<String , String > getLabels ()
Use #getLabelsMap() instead.
Returns
Type
Description
Map < String , String >
getLabelsCount()
public abstract int getLabelsCount ()
Optional. The labels to associate with this autoscaling policy.
Label keys must contain 1 to 63 characters, and must conform to
RFC 1035 .
Label values may be empty, but, if present, must contain 1 to 63
characters, and must conform to RFC
1035 . No more than 32 labels can be
associated with an autoscaling policy.
map<string, string> labels = 6 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
int
getLabelsMap()
public abstract Map<String , String > getLabelsMap ()
Optional. The labels to associate with this autoscaling policy.
Label keys must contain 1 to 63 characters, and must conform to
RFC 1035 .
Label values may be empty, but, if present, must contain 1 to 63
characters, and must conform to RFC
1035 . No more than 32 labels can be
associated with an autoscaling policy.
map<string, string> labels = 6 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
Map < String , String >
getLabelsOrDefault(String key, String defaultValue)
public abstract String getLabelsOrDefault ( String key , String defaultValue )
Optional. The labels to associate with this autoscaling policy.
Label keys must contain 1 to 63 characters, and must conform to
RFC 1035 .
Label values may be empty, but, if present, must contain 1 to 63
characters, and must conform to RFC
1035 . No more than 32 labels can be
associated with an autoscaling policy.
map<string, string> labels = 6 [(.google.api.field_behavior) = OPTIONAL];
Parameters
Name
Description
key
String
defaultValue
String
Returns
Type
Description
String
getLabelsOrThrow(String key)
public abstract String getLabelsOrThrow ( String key )
Optional. The labels to associate with this autoscaling policy.
Label keys must contain 1 to 63 characters, and must conform to
RFC 1035 .
Label values may be empty, but, if present, must contain 1 to 63
characters, and must conform to RFC
1035 . No more than 32 labels can be
associated with an autoscaling policy.
map<string, string> labels = 6 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
key
String
Returns
Type
Description
String
getName()
public abstract String getName ()
Output only. The "resource name" of the autoscaling policy, as described
in https://cloud.google.com/apis/design/resource_names .
For projects.regions.autoscalingPolicies , the resource name of the
policy has the following format:
projects/{project_id}/regions/{region}/autoscalingPolicies/{policy_id}
For projects.locations.autoscalingPolicies , the resource name of the
policy has the following format:
projects/{project_id}/locations/{location}/autoscalingPolicies/{policy_id}
string name = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
String
The name.
getNameBytes()
public abstract ByteString getNameBytes ()
Output only. The "resource name" of the autoscaling policy, as described
in https://cloud.google.com/apis/design/resource_names .
For projects.regions.autoscalingPolicies , the resource name of the
policy has the following format:
projects/{project_id}/regions/{region}/autoscalingPolicies/{policy_id}
For projects.locations.autoscalingPolicies , the resource name of the
policy has the following format:
projects/{project_id}/locations/{location}/autoscalingPolicies/{policy_id}
string name = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
ByteString
The bytes for name.
getSecondaryWorkerConfig()
public abstract InstanceGroupAutoscalingPolicyConfig getSecondaryWorkerConfig ()
Optional. Describes how the autoscaler will operate for secondary workers.
.google.cloud.dataproc.v1.InstanceGroupAutoscalingPolicyConfig secondary_worker_config = 5 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
InstanceGroupAutoscalingPolicyConfig
The secondaryWorkerConfig.
getSecondaryWorkerConfigOrBuilder()
public abstract InstanceGroupAutoscalingPolicyConfigOrBuilder getSecondaryWorkerConfigOrBuilder ()
Optional. Describes how the autoscaler will operate for secondary workers.
.google.cloud.dataproc.v1.InstanceGroupAutoscalingPolicyConfig secondary_worker_config = 5 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
InstanceGroupAutoscalingPolicyConfigOrBuilder
getWorkerConfig()
public abstract InstanceGroupAutoscalingPolicyConfig getWorkerConfig ()
Required. Describes how the autoscaler will operate for primary workers.
.google.cloud.dataproc.v1.InstanceGroupAutoscalingPolicyConfig worker_config = 4 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
InstanceGroupAutoscalingPolicyConfig
The workerConfig.
getWorkerConfigOrBuilder()
public abstract InstanceGroupAutoscalingPolicyConfigOrBuilder getWorkerConfigOrBuilder ()
Required. Describes how the autoscaler will operate for primary workers.
.google.cloud.dataproc.v1.InstanceGroupAutoscalingPolicyConfig worker_config = 4 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
InstanceGroupAutoscalingPolicyConfigOrBuilder
hasBasicAlgorithm()
public abstract boolean hasBasicAlgorithm ()
.google.cloud.dataproc.v1.BasicAutoscalingAlgorithm basic_algorithm = 3 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
boolean
Whether the basicAlgorithm field is set.
hasSecondaryWorkerConfig()
public abstract boolean hasSecondaryWorkerConfig ()
Optional. Describes how the autoscaler will operate for secondary workers.
.google.cloud.dataproc.v1.InstanceGroupAutoscalingPolicyConfig secondary_worker_config = 5 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
boolean
Whether the secondaryWorkerConfig field is set.
hasWorkerConfig()
public abstract boolean hasWorkerConfig ()
Required. Describes how the autoscaler will operate for primary workers.
.google.cloud.dataproc.v1.InstanceGroupAutoscalingPolicyConfig worker_config = 4 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
boolean
Whether the workerConfig field is set.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
