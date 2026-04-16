---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:04:30.741Z"
product_name: "Anthos clusters on AWS (previous generation)"
product_slug: "anthos-clusters-on-aws-previous-generation"
feature_name: "Anthos Identity Service on Kubernetes 1.21+ clusters"
feature_slug: "anthos-identity-service-on-kubernetes-1-21-clusters"
latest_feature_date: "2021-09-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/workload-identity"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.attachedClusters"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters"
keywords:
  - "available"
  - "identity"
  - "running"
  - "kubernetes"
---

# Anthos Identity Service on Kubernetes 1.21+ clusters

Product: Anthos clusters on AWS (previous generation)
Coverage: MEDIUM

## Step 02 Summary

Anthos Identity Service is available for Anthos clusters on AWS running Kubernetes version 1.21 and above.

## Extended Definition

Anthos Identity Service is available for Anthos clusters on AWS running Kubernetes version 1.21 and above.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/workload-identity](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/workload-identity)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.attachedClusters](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.attachedClusters)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters)

## Supporting Pages

### Workload identity overview \_|\_ GKE on AWS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/workload-identity](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/workload-identity)
- Source ID: `site-iam-reference`
- Final score: 129
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting Google Kubernetes Engine (GKE) GKE Multi-Cloud GKE on AWS Guides Send feedback Workload identity overview Stay organized with collections Save and categorize content based on your preferences.
- Kubernetes service accounts Workload identity implements identity federation , or delegating trust or roles to an external provider.
- With this provider, you can provide Kubernetes service account credentials to services that support identity federation using OIDC.
- Workload identity is the recommended way for applications running within GKE on AWS to access AWS and Google Cloud services.

### "REST Resource: projects.locations.awsClusters \_|\_ GKE Multi-Cloud \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters)
- Source ID: `site-api-reference`
- Final score: 113
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "name" : string , "description" : string , "networking" : { object ( AwsClusterNetworking ) } , "awsRegion" : string , "controlPlane" : { object ( AwsControlPlane ) } , "authorization" : { object ( AwsAuthorization ) } , "state" : enum ( State ) , "endpoint" : string , "uid" : string , "reconciling" : boolean , "createTime" : string , "updateTime" : string , "etag" : string , "annotations" : { string : string , ... } , "workloadIdentityConfig" : { object ( WorkloadIdentityConfig ) } , "clusterCaCertificate" : string , "fleet" : { object ( Fleet ) } , "loggingConfig" : { object ( LoggingConfig ) } , "errors" : [ { object ( AwsClusterError ) } ] , "monitoringConfig" : { object ( MonitoringConfig ) } , "binaryAuthorization" : { object ( BinaryAuthorization ) } } Fields name string The name of this resource.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) GKE Multi-Cloud GKE Multi-Cloud Reference Send feedback REST Resource: projects.locations.awsClusters Stay organized with collections Save and categorize content based on your preferences.
- For more info on RBAC, see https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles adminGroups[] object ( AwsClusterGroup ) Optional.
- For more info on RBAC, see https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles AwsClusterUser GKE-on-AWS is deprecated.

### "REST Resource: projects.locations.attachedClusters \_|\_ GKE Multi-Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.attachedClusters](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.attachedClusters)
- Source ID: `site-api-reference`
- Final score: 111
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "name" : string , "description" : string , "oidcConfig" : { object ( AttachedOidcConfig ) } , "platformVersion" : string , "distribution" : string , "clusterRegion" : string , "fleet" : { object ( Fleet ) } , "state" : enum ( State ) , "uid" : string , "reconciling" : boolean , "createTime" : string , "updateTime" : string , "etag" : string , "kubernetesVersion" : string , "annotations" : { string : string , ... } , "workloadIdentityConfig" : { object ( WorkloadIdentityConfig ) } , "loggingConfig" : { object ( LoggingConfig ) } , "errors" : [ { object ( AttachedClusterError ) } ] , "authorization" : { object ( AttachedClustersAuthorization ) } , "monitoringConfig" : { object ( MonitoringConfig ) } , "proxyConfig" : { object ( AttachedProxyConfig ) } , "binaryAuthorization" : { object ( BinaryAuthorization ) } , "securityPostureConfig" : { object ( SecurityPostureConfig ) } , "tags" : { string : string , ... } , "systemComponentsConfig" : { object ( SystemComponentsConfig ) } } Fields name string The name of this resource.
- Resource: AttachedCluster JSON representation AttachedOidcConfig JSON representation State AttachedClusterError JSON representation AttachedClustersAuthorization JSON representation AttachedClusterUser JSON representation AttachedClusterGroup JSON representation AttachedProxyConfig JSON representation KubernetesSecret JSON representation SecurityPostureConfig JSON representation VulnerabilityMode SystemComponentsConfig JSON representation Toleration JSON representation KeyOperator Effect Label JSON representation Methods Resource: AttachedCluster An Anthos cluster running on customer own infrastructure.
- The secret must be a JSON encoded proxy configuration as described in https://cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/use-a-proxy#configure-proxy-support for EKS clusters and https://cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/use-a-proxy#configure-proxy-support for AKS clusters.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) GKE Multi-Cloud GKE Multi-Cloud Reference Send feedback REST Resource: projects.locations.attachedClusters Stay organized with collections Save and categorize content based on your preferences.

