---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:04:30.743Z"
product_name: "Anthos clusters on AWS (previous generation)"
product_slug: "anthos-clusters-on-aws-previous-generation"
feature_name: "OIDC configuration updates on running Anthos clusters"
feature_slug: "oidc-configuration-updates-on-running-anthos-clusters"
latest_feature_date: "2021-09-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.attachedClusters"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/about-surge-updates"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest"
keywords:
  - "users"
  - "oidc"
  - "updates"
  - "configuration"
  - "running"
---

# OIDC configuration updates on running Anthos clusters

Product: Anthos clusters on AWS (previous generation)
Coverage: MEDIUM

## Step 02 Summary

Users can update the OIDC configuration on an Anthos cluster while it is running.

## Extended Definition

Users can update the OIDC configuration on an Anthos cluster while it is running.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.attachedClusters](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.attachedClusters)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/about-surge-updates](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/about-surge-updates)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest)

## Supporting Pages

### "REST Resource: projects.locations.attachedClusters \_|\_ GKE Multi-Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.attachedClusters](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.attachedClusters)
- Source ID: `site-api-reference`
- Final score: 126
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Resource: AttachedCluster JSON representation AttachedOidcConfig JSON representation State AttachedClusterError JSON representation AttachedClustersAuthorization JSON representation AttachedClusterUser JSON representation AttachedClusterGroup JSON representation AttachedProxyConfig JSON representation KubernetesSecret JSON representation SecurityPostureConfig JSON representation VulnerabilityMode SystemComponentsConfig JSON representation Toleration JSON representation KeyOperator Effect Label JSON representation Methods Resource: AttachedCluster An Anthos cluster running on customer own infrastructure.
- OpenID Connect (OIDC) configuration for the cluster. platformVersion string Required.
- JSON representation { "name" : string , "description" : string , "oidcConfig" : { object ( AttachedOidcConfig ) } , "platformVersion" : string , "distribution" : string , "clusterRegion" : string , "fleet" : { object ( Fleet ) } , "state" : enum ( State ) , "uid" : string , "reconciling" : boolean , "createTime" : string , "updateTime" : string , "etag" : string , "kubernetesVersion" : string , "annotations" : { string : string , ... } , "workloadIdentityConfig" : { object ( WorkloadIdentityConfig ) } , "loggingConfig" : { object ( LoggingConfig ) } , "errors" : [ { object ( AttachedClusterError ) } ] , "authorization" : { object ( AttachedClustersAuthorization ) } , "monitoringConfig" : { object ( MonitoringConfig ) } , "proxyConfig" : { object ( AttachedProxyConfig ) } , "binaryAuthorization" : { object ( BinaryAuthorization ) } , "securityPostureConfig" : { object ( SecurityPostureConfig ) } , "tags" : { string : string , ... } , "systemComponentsConfig" : { object ( SystemComponentsConfig ) } } Fields name string The name of this resource.
- Methods create Creates a new AttachedCluster resource on a given Google Cloud Platform project and region. delete Deletes a specific AttachedCluster resource. generateAttachedClusterAgentToken Generates an access token for a cluster agent. get Describes a specific AttachedCluster resource. import Imports creates a new AttachedCluster resource by importing an existing Fleet Membership resource. list Lists all AttachedCluster resources on a given Google Cloud project and region. patch Updates an AttachedCluster .

### About surge updates \_|\_ GKE on AWS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/about-surge-updates](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/about-surge-updates)
- Source ID: `site-iam-reference`
- Final score: 123
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table shows three example settings, and highlights their impact on the speed of the update and the potential disruption to your workloads: Name Description Configuration Balanced setting (default) Balanced, slower but least disruptive. maxSurge=1, maxUnavailable=0 Rapid updates without extra resources Fast, no surge resources, most disruptive. maxSurge=0, maxUnavailable=20 Rapid updates that are less disruptive Fast, most surge resources and less disruptive. maxSurge=20, maxUnavailable=0 Each of the settings in the table is described in the following sections.
- Although the configurations of PDBs may vary, if you create a PDB with maxUnavailable equal to 1 for one or more workloads running on the node pool, then only one Pod of those workloads can be evicted at a time, limiting the parallelism of the entire update.
- Recall that initiating multiple surge nodes at the start of the update process can lead to a temporary increase in costs, especially when compared to configurations that don't add extra nodes or add fewer nodes during updates.
- Things to consider before running surge updates Before running a surge update, keep in mind the following: Additional instances created as part of this surge step can potentially exceed your AWS instance quota limit.

### GKE Multi-Cloud API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 100
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v1.projects.locations.azureClusters.well-known Methods getOpenid-configuration (deprecated) GET /v1/{azureCluster=projects/ /locations/ /azureClusters/ }/.well-known/openid-configuration Gets the OIDC discovery document for the cluster.
- REST Resource: v1.projects.locations.awsClusters.well-known Methods getOpenid-configuration (deprecated) GET /v1/{awsCluster=projects/ /locations/ /awsClusters/ }/.well-known/openid-configuration Gets the OIDC discovery document for the cluster.
- REST Resource: v1.projects.locations.azureClusters Methods create (deprecated) POST /v1/{parent=projects/ /locations/ }/azureClusters Creates a new AzureCluster resource on a given Google Cloud Platform project and region. delete (deprecated) DELETE /v1/{name=projects/ /locations/ /azureClusters/ } Deletes a specific AzureCluster resource. generateAzureAccessToken (deprecated) GET /v1/{azureCluster=projects/ /locations/ /azureClusters/ }:generateAzureAccessToken Generates a short-lived access token to authenticate to a given AzureCluster resource. generateAzureClusterAgentToken (deprecated) POST /v1/{azureCluster=projects/ /locations/ /azureClusters/ }:generateAzureClusterAgentToken Generates an access token for a cluster agent. get (deprecated) GET /v1/{name=projects/ /locations/ /azureClusters/ } Describes a specific AzureCluster resource. getJwks (deprecated) GET /v1/{azureCluster=projects/ /locations/ /azureClusters/ }/jwks Gets the public component of the cluster signing keys in JSON Web Key format. list (deprecated) GET /v1/{parent=projects/ /locations/ }/azureClusters Lists all AzureCluster resources on a given Google Cloud project and region. patch (deprecated) PATCH /v1/{azureCluster.name=projects/ /locations/ /azureClusters/ } Updates an AzureCluster .
- REST Resource: v1.projects.locations.awsClusters Methods create (deprecated) POST /v1/{parent=projects/ /locations/ }/awsClusters Creates a new AwsCluster resource on a given Google Cloud Platform project and region. delete (deprecated) DELETE /v1/{name=projects/ /locations/ /awsClusters/ } Deletes a specific AwsCluster resource. generateAwsAccessToken (deprecated) GET /v1/{awsCluster=projects/ /locations/ /awsClusters/ }:generateAwsAccessToken Generates a short-lived access token to authenticate to a given AwsCluster resource. generateAwsClusterAgentToken (deprecated) POST /v1/{awsCluster=projects/ /locations/ /awsClusters/ }:generateAwsClusterAgentToken Generates an access token for a cluster agent. get (deprecated) GET /v1/{name=projects/ /locations/ /awsClusters/ } Describes a specific AwsCluster resource. getJwks (deprecated) GET /v1/{awsCluster=projects/ /locations/ /awsClusters/ }/jwks Gets the public component of the cluster signing keys in JSON Web Key format. list (deprecated) GET /v1/{parent=projects/ /locations/ }/awsClusters Lists all AwsCluster resources on a given Google Cloud project and region. patch (deprecated) PATCH /v1/{awsCluster.name=projects/ /locations/ /awsClusters/ } Updates an AwsCluster .

