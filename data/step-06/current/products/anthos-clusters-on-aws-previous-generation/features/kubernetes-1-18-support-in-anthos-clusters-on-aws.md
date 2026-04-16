---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:04:30.738Z"
product_name: "Anthos clusters on AWS (previous generation)"
product_slug: "anthos-clusters-on-aws-previous-generation"
feature_name: "Kubernetes 1.18 support in Anthos clusters on AWS"
feature_slug: "kubernetes-1-18-support-in-anthos-clusters-on-aws"
latest_feature_date: "2021-12-14"
deprecation_date: "2021-12-14"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools"
keywords:
  - "removed"
  - "deprecated"
  - "2021"
  - "kubernetes"
---

# Kubernetes 1.18 support in Anthos clusters on AWS

Product: Anthos clusters on AWS (previous generation)
Coverage: MEDIUM

## Step 02 Summary

Support for Kubernetes 1.18 clusters on Anthos clusters on AWS is removed; deprecated on 2021-12-14.

## Extended Definition

Support for Kubernetes 1.18 clusters on Anthos clusters on AWS is removed; deprecated on 2021-12-14.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools)

## Supporting Pages

### GKE Multi-Cloud API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 77
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This service has the following service endpoints and all URIs below are relative to these service endpoints: https://asia-east2-gkemulticloud.googleapis.com https://asia-northeast2-gkemulticloud.googleapis.com https://asia-south1-gkemulticloud.googleapis.com https://asia-southeast1-gkemulticloud.googleapis.com https://asia-southeast2-gkemulticloud.googleapis.com https://australia-southeast1-gkemulticloud.googleapis.com https://europe-north1-gkemulticloud.googleapis.com https://europe-west1-gkemulticloud.googleapis.com https://europe-west2-gkemulticloud.googleapis.com https://europe-west3-gkemulticloud.googleapis.com https://europe-west4-gkemulticloud.googleapis.com https://europe-west6-gkemulticloud.googleapis.com https://europe-west8-gkemulticloud.googleapis.com https://europe-west9-gkemulticloud.googleapis.com https://me-central2-gkemulticloud.googleapis.com https://northamerica-northeast1-gkemulticloud.googleapis.com https://southamerica-east1-gkemulticloud.googleapis.com https://us-central1-gkemulticloud.googleapis.com https://us-east4-gkemulticloud.googleapis.com https://us-east7-gkemulticloud.googleapis.com https://us-west1-gkemulticloud.googleapis.com REST Resource: v1.projects.locations Methods generateAttachedClusterInstallManifest GET /v1/{parent=projects/ /locations/ }:generateAttachedClusterInstallManifest Generates the install manifest to be installed on the target cluster. getAttachedServerConfig GET /v1/{name=projects/ /locations/ /attachedServerConfig} Returns information, such as supported Kubernetes versions, on a given Google Cloud location. getAwsServerConfig (deprecated) GET /v1/{name=projects/ /locations/ /awsServerConfig} Returns information, such as supported AWS regions and Kubernetes versions, on a given Google Cloud location. getAzureServerConfig (deprecated) GET /v1/{name=projects/ /locations/ /azureServerConfig} Returns information, such as supported Azure regions and Kubernetes versions, on a given Google Cloud location.
- REST Resource: v1.projects.locations.azureClusters Methods create (deprecated) POST /v1/{parent=projects/ /locations/ }/azureClusters Creates a new AzureCluster resource on a given Google Cloud Platform project and region. delete (deprecated) DELETE /v1/{name=projects/ /locations/ /azureClusters/ } Deletes a specific AzureCluster resource. generateAzureAccessToken (deprecated) GET /v1/{azureCluster=projects/ /locations/ /azureClusters/ }:generateAzureAccessToken Generates a short-lived access token to authenticate to a given AzureCluster resource. generateAzureClusterAgentToken (deprecated) POST /v1/{azureCluster=projects/ /locations/ /azureClusters/ }:generateAzureClusterAgentToken Generates an access token for a cluster agent. get (deprecated) GET /v1/{name=projects/ /locations/ /azureClusters/ } Describes a specific AzureCluster resource. getJwks (deprecated) GET /v1/{azureCluster=projects/ /locations/ /azureClusters/ }/jwks Gets the public component of the cluster signing keys in JSON Web Key format. list (deprecated) GET /v1/{parent=projects/ /locations/ }/azureClusters Lists all AzureCluster resources on a given Google Cloud project and region. patch (deprecated) PATCH /v1/{azureCluster.name=projects/ /locations/ /azureClusters/ } Updates an AzureCluster .
- REST Resource: v1.projects.locations.awsClusters Methods create (deprecated) POST /v1/{parent=projects/ /locations/ }/awsClusters Creates a new AwsCluster resource on a given Google Cloud Platform project and region. delete (deprecated) DELETE /v1/{name=projects/ /locations/ /awsClusters/ } Deletes a specific AwsCluster resource. generateAwsAccessToken (deprecated) GET /v1/{awsCluster=projects/ /locations/ /awsClusters/ }:generateAwsAccessToken Generates a short-lived access token to authenticate to a given AwsCluster resource. generateAwsClusterAgentToken (deprecated) POST /v1/{awsCluster=projects/ /locations/ /awsClusters/ }:generateAwsClusterAgentToken Generates an access token for a cluster agent. get (deprecated) GET /v1/{name=projects/ /locations/ /awsClusters/ } Describes a specific AwsCluster resource. getJwks (deprecated) GET /v1/{awsCluster=projects/ /locations/ /awsClusters/ }/jwks Gets the public component of the cluster signing keys in JSON Web Key format. list (deprecated) GET /v1/{parent=projects/ /locations/ }/awsClusters Lists all AwsCluster resources on a given Google Cloud project and region. patch (deprecated) PATCH /v1/{awsCluster.name=projects/ /locations/ /awsClusters/ } Updates an AwsCluster .
- REST Resource: v1.projects.locations.awsClusters.awsNodePools Methods create (deprecated) POST /v1/{parent=projects/ /locations/ /awsClusters/ }/awsNodePools Creates a new AwsNodePool , attached to a given AwsCluster . delete (deprecated) DELETE /v1/{name=projects/ /locations/ /awsClusters/ /awsNodePools/ } Deletes a specific AwsNodePool resource. get (deprecated) GET /v1/{name=projects/ /locations/ /awsClusters/ /awsNodePools/ } Describes a specific AwsNodePool resource. list (deprecated) GET /v1/{parent=projects/ /locations/ /awsClusters/ }/awsNodePools Lists all AwsNodePool resources on a given AwsCluster . patch (deprecated) PATCH /v1/{awsNodePool.name=projects/ /locations/ /awsClusters/ /awsNodePools/ } Updates an AwsNodePool . rollback (deprecated) POST /v1/{name=projects/ /locations/ /awsClusters/ /awsNodePools/ }:rollback Rolls back a previously aborted or failed AwsNodePool update request.

### "REST Resource: projects.locations.awsClusters \_|\_ GKE Multi-Cloud \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters)
- Source ID: `site-api-reference`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- For more info on RBAC, see https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles AwsClusterUser GKE-on-AWS is deprecated.
- Methods create (deprecated) Creates a new AwsCluster resource on a given Google Cloud Platform project and region. delete (deprecated) Deletes a specific AwsCluster resource. generateAwsAccessToken (deprecated) Generates a short-lived access token to authenticate to a given AwsCluster resource. generateAwsClusterAgentToken (deprecated) Generates an access token for a cluster agent. get (deprecated) Describes a specific AwsCluster resource. getJwks (deprecated) Gets the public component of the cluster signing keys in JSON Web Key format. list (deprecated) Lists all AwsCluster resources on a given Google Cloud project and region. patch (deprecated) Updates an AwsCluster .
- Resource: AwsCluster JSON representation AwsClusterNetworking JSON representation AwsControlPlane JSON representation AwsDatabaseEncryption JSON representation AwsServicesAuthentication JSON representation AwsAuthorization JSON representation AwsClusterUser JSON representation AwsClusterGroup JSON representation State AwsClusterError JSON representation Methods Resource: AwsCluster GKE-on-AWS is deprecated.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) GKE Multi-Cloud GKE Multi-Cloud Reference Send feedback REST Resource: projects.locations.awsClusters Stay organized with collections Save and categorize content based on your preferences.

### "REST Resource: projects.locations.awsClusters.awsNodePools \_|\_ GKE Multi-Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools)
- Source ID: `site-api-reference`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- Resource: AwsNodePool JSON representation AwsNodeConfig JSON representation AwsAutoscalingGroupMetricsCollection JSON representation SpotConfig JSON representation AwsNodePoolAutoscaling JSON representation State AwsNodePoolError JSON representation AwsNodeManagement JSON representation NodeKubeletConfig JSON representation UpdateSettings JSON representation SurgeSettings JSON representation Methods Resource: AwsNodePool GKE-on-AWS is deprecated.
- Methods create (deprecated) Creates a new AwsNodePool , attached to a given AwsCluster . delete (deprecated) Deletes a specific AwsNodePool resource. get (deprecated) Describes a specific AwsNodePool resource. list (deprecated) Lists all AwsNodePool resources on a given AwsCluster . patch (deprecated) Updates an AwsNodePool . rollback (deprecated) Rolls back a previously aborted or failed AwsNodePool update request.
- See https://kubernetes.io/docs/tasks/administer-cluster/cpu-management-policies/ The following values are allowed. "none": the default, which represents the existing scheduling behavior. "static": allows pods with certain resource characteristics to be granted increased CPU affinity and exclusivity on the node.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) GKE Multi-Cloud GKE Multi-Cloud Reference Send feedback REST Resource: projects.locations.awsClusters.awsNodePools Stay organized with collections Save and categorize content based on your preferences.

