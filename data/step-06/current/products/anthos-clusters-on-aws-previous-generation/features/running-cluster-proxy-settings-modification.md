---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:04:30.744Z"
product_name: "Anthos clusters on AWS (previous generation)"
product_slug: "anthos-clusters-on-aws-previous-generation"
feature_name: "Running-cluster proxy settings modification"
feature_slug: "running-cluster-proxy-settings-modification"
latest_feature_date: "2021-07-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.attachedClusters"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters"
keywords:
  - "modification"
  - "settings"
  - "proxy"
  - "running"
  - "cluster"
---

# Running-cluster proxy settings modification

Product: Anthos clusters on AWS (previous generation)
Coverage: MEDIUM

## Step 02 Summary

Anthos clusters on AWS now allow modifying proxy settings on a running cluster.

## Extended Definition

Anthos clusters on AWS now allow modifying proxy settings on a running cluster.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.attachedClusters](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.attachedClusters)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters)

## Supporting Pages

### "REST Resource: projects.locations.awsClusters.awsNodePools \_|\_ GKE Multi-Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools)
- Source ID: `site-api-reference`
- Final score: 146
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For clusters with older versions, node pool updates use the traditional rolling update mechanism of updating one node at a time in a "terminate before create" fashion and updateSettings is not applicable.
- The manager will automatically create security groups with minimum rules needed for a functioning cluster. proxyConfig object ( AwsProxyConfig ) Optional.
- For clusters with minor version 1.27 and later, a default surgeSettings configuration with maxSurge = 1 and maxUnavailable = 0 is used.
- When UpdateSettings are not specified during the node pool creation, a default is chosen based on the parent cluster's version.

### "REST Resource: projects.locations.attachedClusters \_|\_ GKE Multi-Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.attachedClusters](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.attachedClusters)
- Source ID: `site-api-reference`
- Final score: 138
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Resource: AttachedCluster JSON representation AttachedOidcConfig JSON representation State AttachedClusterError JSON representation AttachedClustersAuthorization JSON representation AttachedClusterUser JSON representation AttachedClusterGroup JSON representation AttachedProxyConfig JSON representation KubernetesSecret JSON representation SecurityPostureConfig JSON representation VulnerabilityMode SystemComponentsConfig JSON representation Toleration JSON representation KeyOperator Effect Label JSON representation Methods Resource: AttachedCluster An Anthos cluster running on customer own infrastructure.
- JSON representation { "name" : string , "description" : string , "oidcConfig" : { object ( AttachedOidcConfig ) } , "platformVersion" : string , "distribution" : string , "clusterRegion" : string , "fleet" : { object ( Fleet ) } , "state" : enum ( State ) , "uid" : string , "reconciling" : boolean , "createTime" : string , "updateTime" : string , "etag" : string , "kubernetesVersion" : string , "annotations" : { string : string , ... } , "workloadIdentityConfig" : { object ( WorkloadIdentityConfig ) } , "loggingConfig" : { object ( LoggingConfig ) } , "errors" : [ { object ( AttachedClusterError ) } ] , "authorization" : { object ( AttachedClustersAuthorization ) } , "monitoringConfig" : { object ( MonitoringConfig ) } , "proxyConfig" : { object ( AttachedProxyConfig ) } , "binaryAuthorization" : { object ( BinaryAuthorization ) } , "securityPostureConfig" : { object ( SecurityPostureConfig ) } , "tags" : { string : string , ... } , "systemComponentsConfig" : { object ( SystemComponentsConfig ) } } Fields name string The name of this resource.
- The secret must be a JSON encoded proxy configuration as described in https://cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/use-a-proxy#configure-proxy-support for EKS clusters and https://cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/use-a-proxy#configure-proxy-support for AKS clusters.
- Configuration related to the cluster RBAC settings. monitoringConfig object ( MonitoringConfig ) Optional.

### "REST Resource: projects.locations.awsClusters \_|\_ GKE Multi-Cloud \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters)
- Source ID: `site-api-reference`
- Final score: 138
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Configuration related to the cluster RBAC settings. state enum ( State ) Output only.
- RUNNING The RUNNING state indicates the cluster has been created and is fully usable.
- Workload Identity settings. clusterCaCertificate string Output only.
- Configuration related to the cluster RBAC settings.

