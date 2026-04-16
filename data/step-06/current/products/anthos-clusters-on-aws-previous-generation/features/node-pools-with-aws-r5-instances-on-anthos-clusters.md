---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:04:30.742Z"
product_name: "Anthos clusters on AWS (previous generation)"
product_slug: "anthos-clusters-on-aws-previous-generation"
feature_name: "Node pools with AWS R5 instances on Anthos clusters"
feature_slug: "node-pools-with-aws-r5-instances-on-anthos-clusters"
latest_feature_date: "2021-09-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools/list"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools/create"
keywords:
  - "instances"
  - "pools"
  - "node"
---

# Node pools with AWS R5 instances on Anthos clusters

Product: Anthos clusters on AWS (previous generation)
Coverage: MEDIUM

## Step 02 Summary

Anthos clusters on AWS now support launching node pools backed by AWS R5 instance types.

## Extended Definition

Anthos clusters on AWS now support launching node pools backed by AWS R5 instance types.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools/list](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools/list)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools/create](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools/create)

## Supporting Pages

### "REST Resource: projects.locations.awsClusters.awsNodePools \_|\_ GKE Multi-Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools)
- Source ID: `site-api-reference`
- Final score: 144
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting Google Kubernetes Engine (GKE) GKE Multi-Cloud GKE Multi-Cloud Reference Send feedback REST Resource: projects.locations.awsClusters.awsNodePools Stay organized with collections Save and categorize content based on your preferences.
- Configuration for provisioning EC2 Spot instances When specified, the node pool will provision Spot instances from the set of spotConfig.instance types.
- Node pool names are formatted as projects/<project-number>/locations/<region>/awsClusters/<cluster-id>/awsNodePools/<node-pool-id> .
- AwsNodePoolError describes errors found on AWS node pools.

### "Method: projects.locations.awsClusters.awsNodePools.list \_|\_ GKE Multi-Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools/list](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools/list)
- Source ID: `site-api-reference`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- Regardless of the pageSize value, the response can include a partial list and a caller should only rely on response's nextPageToken to determine if there are more instances left to be queried. pageToken string The nextPageToken value returned from a previous awsNodePools.list request, if any.
- If successful, the response body contains data with the following structure: JSON representation { "awsNodePools" : [ { object ( AwsNodePool ) } ] , "nextPageToken" : string } Fields awsNodePools[] object ( AwsNodePool ) A list of AwsNodePool resources in the specified AwsCluster . nextPageToken string Token to retrieve the next page of results, or empty if there are no more results in the list.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) GKE Multi-Cloud GKE Multi-Cloud Reference Send feedback Method: projects.locations.awsClusters.awsNodePools.list Stay organized with collections Save and categorize content based on your preferences.
- IAM Permissions Requires the following IAM permission on the parent resource: gkemulticloud.awsNodePools.list For more information, see the IAM documentation .

### "Method: projects.locations.awsClusters.awsNodePools.create \_|\_ GKE Multi-Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools/create](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools/create)
- Source ID: `site-api-reference`
- Final score: 123
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting Google Kubernetes Engine (GKE) GKE Multi-Cloud GKE Multi-Cloud Reference Send feedback Method: projects.locations.awsClusters.awsNodePools.create Stay organized with collections Save and categorize content based on your preferences.
- The provided ID will be part of the AwsNodePool resource name formatted as projects/<project-id>/locations/<region>/awsClusters/<cluster-id>/awsNodePools/<node-pool-id> .
- IAM Permissions Requires the following IAM permission on the parent resource: gkemulticloud.awsNodePools.create For more information, see the IAM documentation .
- HTTP request POST https://{endpoint}/v1/{parent=projects/ /locations/ /awsClusters/ }/awsNodePools Where {endpoint} is one of the supported service endpoints .

