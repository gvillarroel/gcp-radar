---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:04:30.743Z"
product_name: "Anthos clusters on AWS (previous generation)"
product_slug: "anthos-clusters-on-aws-previous-generation"
feature_name: "VolumeSnapshot v1beta1 API in Anthos clusters on Kubernetes 1.21"
feature_slug: "volumesnapshot-v1beta1-api-in-anthos-clusters-on-kubernetes-1-21"
latest_feature_date: "2021-09-30"
deprecation_date: "2021-09-30"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.attachedClusters"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters"
keywords:
  - "volumesnapshot"
  - "resource"
  - "v1beta1"
  - "kubernetes"
  - "version"
---

# VolumeSnapshot v1beta1 API in Anthos clusters on Kubernetes 1.21

Product: Anthos clusters on AWS (previous generation)
Coverage: MEDIUM

## Step 02 Summary

The VolumeSnapshot resource API version v1beta1 is deprecated in Anthos clusters running Kubernetes 1.21; deprecated on 2021-09-30.

## Extended Definition

The VolumeSnapshot resource API version v1beta1 is deprecated in Anthos clusters running Kubernetes 1.21; deprecated on 2021-09-30.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.attachedClusters](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.attachedClusters)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters)

## Supporting Pages

### Storage overview \_|\_ GKE on AWS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage)
- Source ID: `site-iam-reference`
- Final score: 123
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Using persistent storage in your GKE on AWS workloads In GKE on AWS, you use the Kubernetes PersistentVolume (PV), PersistentVolumeClaim (PVC), and StorageClass resources to provide persistent file and block storage to workloads.
- VolumeSnapshotClass Clusters have a default Kubernetes VolumeSnapshotClass that creates snapshots of stateful storage on EBS volumes.
- You can create snapshots of persistent storage with the VolumeSnapshot and VolumeSnapshotClass resources.
- Using volume snapshots You can use the VolumeSnapshot resource to create snapshots of storage volumes.

### "REST Resource: projects.locations.attachedClusters \_|\_ GKE Multi-Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.attachedClusters](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.attachedClusters)
- Source ID: `site-api-reference`
- Final score: 116
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "name" : string , "description" : string , "oidcConfig" : { object ( AttachedOidcConfig ) } , "platformVersion" : string , "distribution" : string , "clusterRegion" : string , "fleet" : { object ( Fleet ) } , "state" : enum ( State ) , "uid" : string , "reconciling" : boolean , "createTime" : string , "updateTime" : string , "etag" : string , "kubernetesVersion" : string , "annotations" : { string : string , ... } , "workloadIdentityConfig" : { object ( WorkloadIdentityConfig ) } , "loggingConfig" : { object ( LoggingConfig ) } , "errors" : [ { object ( AttachedClusterError ) } ] , "authorization" : { object ( AttachedClustersAuthorization ) } , "monitoringConfig" : { object ( MonitoringConfig ) } , "proxyConfig" : { object ( AttachedProxyConfig ) } , "binaryAuthorization" : { object ( BinaryAuthorization ) } , "securityPostureConfig" : { object ( SecurityPostureConfig ) } , "tags" : { string : string , ... } , "systemComponentsConfig" : { object ( SystemComponentsConfig ) } } Fields name string The name of this resource.
- Resource: AttachedCluster JSON representation AttachedOidcConfig JSON representation State AttachedClusterError JSON representation AttachedClustersAuthorization JSON representation AttachedClusterUser JSON representation AttachedClusterGroup JSON representation AttachedProxyConfig JSON representation KubernetesSecret JSON representation SecurityPostureConfig JSON representation VulnerabilityMode SystemComponentsConfig JSON representation Toleration JSON representation KeyOperator Effect Label JSON representation Methods Resource: AttachedCluster An Anthos cluster running on customer own infrastructure.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) GKE Multi-Cloud GKE Multi-Cloud Reference Send feedback REST Resource: projects.locations.attachedClusters Stay organized with collections Save and categorize content based on your preferences.
- JSON representation { "kubernetesSecret" : { object ( KubernetesSecret ) } } Fields kubernetesSecret object ( KubernetesSecret ) The Kubernetes Secret resource that contains the HTTP(S) proxy configuration.

### "REST Resource: projects.locations.awsClusters \_|\_ GKE Multi-Cloud \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters)
- Source ID: `site-api-reference`
- Final score: 116
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting Google Kubernetes Engine (GKE) GKE Multi-Cloud GKE Multi-Cloud Reference Send feedback REST Resource: projects.locations.awsClusters Stay organized with collections Save and categorize content based on your preferences.
- The Kubernetes version to run on control plane replicas (e.g.
- JSON representation { "name" : string , "description" : string , "networking" : { object ( AwsClusterNetworking ) } , "awsRegion" : string , "controlPlane" : { object ( AwsControlPlane ) } , "authorization" : { object ( AwsAuthorization ) } , "state" : enum ( State ) , "endpoint" : string , "uid" : string , "reconciling" : boolean , "createTime" : string , "updateTime" : string , "etag" : string , "annotations" : { string : string , ... } , "workloadIdentityConfig" : { object ( WorkloadIdentityConfig ) } , "clusterCaCertificate" : string , "fleet" : { object ( Fleet ) } , "loggingConfig" : { object ( LoggingConfig ) } , "errors" : [ { object ( AwsClusterError ) } ] , "monitoringConfig" : { object ( MonitoringConfig ) } , "binaryAuthorization" : { object ( BinaryAuthorization ) } } Fields name string The name of this resource.
- Methods create (deprecated) Creates a new AwsCluster resource on a given Google Cloud Platform project and region. delete (deprecated) Deletes a specific AwsCluster resource. generateAwsAccessToken (deprecated) Generates a short-lived access token to authenticate to a given AwsCluster resource. generateAwsClusterAgentToken (deprecated) Generates an access token for a cluster agent. get (deprecated) Describes a specific AwsCluster resource. getJwks (deprecated) Gets the public component of the cluster signing keys in JSON Web Key format. list (deprecated) Lists all AwsCluster resources on a given Google Cloud project and region. patch (deprecated) Updates an AwsCluster .

