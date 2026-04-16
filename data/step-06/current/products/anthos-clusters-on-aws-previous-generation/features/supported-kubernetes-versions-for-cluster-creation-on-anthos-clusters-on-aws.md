---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:04:30.736Z"
product_name: "Anthos clusters on AWS (previous generation)"
product_slug: "anthos-clusters-on-aws-previous-generation"
feature_name: "Supported Kubernetes versions for cluster creation on Anthos clusters on AWS"
feature_slug: "supported-kubernetes-versions-for-cluster-creation-on-anthos-clusters-on-aws"
latest_feature_date: "2023-01-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/cluster-autoscaler"
keywords:
  - "versions"
  - "creation"
  - "cluster"
  - "kubernetes"
---

# Supported Kubernetes versions for cluster creation on Anthos clusters on AWS

Product: Anthos clusters on AWS (previous generation)
Coverage: MEDIUM

## Step 02 Summary

Support was added to launch clusters with Kubernetes versions 1.23.15-gke.2000, 1.24.9-gke.2100, and 1.25.5-gke.2100; Support was added to launch clusters with Kubernetes versions 1.23.13-gke.2000, 1.24.7-gke.2000, and 1.25.3-gke.1900.

## Extended Definition

Support was added to launch clusters with Kubernetes versions 1.23.15-gke.2000, 1.24.9-gke.2100, and 1.25.5-gke.2100; Support was added to launch clusters with Kubernetes versions 1.23.13-gke.2000, 1.24.7-gke.2000, and 1.25.3-gke.1900.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/cluster-autoscaler)

## Supporting Pages

### "REST Resource: projects.locations.awsClusters \_|\_ GKE Multi-Cloud \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters)
- Source ID: `site-api-reference`
- Final score: 142
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting Google Kubernetes Engine (GKE) GKE Multi-Cloud GKE Multi-Cloud Reference Send feedback REST Resource: projects.locations.awsClusters Stay organized with collections Save and categorize content based on your preferences.
- For more info on RBAC, see https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles adminGroups[] object ( AwsClusterGroup ) Optional.
- For more info on RBAC, see https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles AwsClusterUser GKE-on-AWS is deprecated.
- JSON representation { "name" : string , "description" : string , "networking" : { object ( AwsClusterNetworking ) } , "awsRegion" : string , "controlPlane" : { object ( AwsControlPlane ) } , "authorization" : { object ( AwsAuthorization ) } , "state" : enum ( State ) , "endpoint" : string , "uid" : string , "reconciling" : boolean , "createTime" : string , "updateTime" : string , "etag" : string , "annotations" : { string : string , ... } , "workloadIdentityConfig" : { object ( WorkloadIdentityConfig ) } , "clusterCaCertificate" : string , "fleet" : { object ( Fleet ) } , "loggingConfig" : { object ( LoggingConfig ) } , "errors" : [ { object ( AwsClusterError ) } ] , "monitoringConfig" : { object ( MonitoringConfig ) } , "binaryAuthorization" : { object ( BinaryAuthorization ) } } Fields name string The name of this resource.

### "REST Resource: projects.locations.awsClusters.awsNodePools \_|\_ GKE Multi-Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools)
- Source ID: `site-api-reference`
- Final score: 142
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- See https://kubernetes.io/docs/tasks/administer-cluster/cpu-management-policies/ The following values are allowed. "none": the default, which represents the existing scheduling behavior. "static": allows pods with certain resource characteristics to be granted increased CPU affinity and exclusivity on the node.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) GKE Multi-Cloud GKE Multi-Cloud Reference Send feedback REST Resource: projects.locations.awsClusters.awsNodePools Stay organized with collections Save and categorize content based on your preferences.
- For clusters with older versions, node pool updates use the traditional rolling update mechanism of updating one node at a time in a "terminate before create" fashion and updateSettings is not applicable.
- When UpdateSettings are not specified during the node pool creation, a default is chosen based on the parent cluster's version.

### About cluster autoscaler \_|\_ GKE on AWS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/cluster-autoscaler)
- Source ID: `site-iam-reference`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Scale up from zero nodes Starting with the following GKE on AWS versions, the cluster autoscaler supports scaling up node pools from zero nodes: Version 1.29 and later Versions of 1.28 from 1.28.8-gke.800 and later Versions of 1.27 from 1.27.12-gke.800 and later If you're using an earlier version, you need to upgrade your cluster to one of these versions to use this feature.
- Official Kubernetes Cluster Autoscaler documentation Operating criteria The cluster autoscaler makes the following assumptions when resizing a node pool: All replicated Pod objects can be restarted on some other node, possibly causing a brief disruption.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) GKE Multi-Cloud GKE on AWS Guides Send feedback About cluster autoscaler Stay organized with collections Save and categorize content based on your preferences.
- To enable this feature for existing clusters, update your cluster to a supported version, and then perform a rolling update of your node pools by updating their Kubernetes version.

