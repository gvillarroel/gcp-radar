---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:58:55.361Z"
product_name: "Anthos clusters on AWS"
product_slug: "anthos-clusters-on-aws"
feature_name: "ignore_errors query parameter for delete API"
feature_slug: "ignore-errors-query-parameter-for-delete-api"
latest_feature_date: "2023-09-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools/delete"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/release-notes"
keywords:
  - "ignore_errors=true"
  - "orphaned resources"
  - "query parameter"
  - "forced deletion"
  - "force delete"
  - "ignore_errors"
  - "ignore-errors"
  - "delete node pool"
---

# ignore_errors query parameter for delete API

Product: Anthos clusters on AWS
Coverage: MEDIUM

## Step 02 Summary

A new ignore_errors=true query option allows forced deletion of clusters or node pools when IAM roles or resources are missing.

## Extended Definition

In Anthos GKE on AWS, the `ignore_errors=true` delete query option allows a forced DELETE of clusters or node pools when deletion would otherwise fail due to missing IAM roles or prior manual resource removal. It is intended to let the delete request complete despite these error conditions, but the operation can leave orphaned resources in AWS that may require manual cleanup.

## Evidence Summary

The release notes explicitly add a DELETE `ignore errors` option for forcefully removing clusters/node pools, while the API reference details delete-time behavior and cautions about orphaned resources (though it does not clearly enumerate `ignore_errors` in the shown snippet).

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools/delete](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools/delete)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/release-notes](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/release-notes)

## Supporting Pages

### "Method: projects.locations.awsClusters.awsNodePools.delete \_|\_ GKE Multi-Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools/delete](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools/delete)
- Source ID: `site-api-reference`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- Query parameters Parameters validateOnly boolean If set, only validate the request, but do not actually delete the node pool. allowMissing boolean If set to true, and the AwsNodePool resource is not found, the request will succeed but no action will be taken on the server and a completed Operation will be returned.
- HTTP request Path parameters Query parameters Request body Response body Authorization scopes IAM Permissions GKE-on-AWS is deprecated.
- Using this parameter may result in orphaned resources in the node pool. etag string The current ETag of the AwsNodePool .

### GKE on AWS release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/release-notes](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/release-notes)
- Source ID: `site-docs-root`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- By appending ?ignore errors=true to the DELETE request URL, users can now forcibly remove clusters or node pools.
- Added an ignore errors option to the delete API to handle cases where accidentally deleted IAM roles or manual removal of resources prevent the deletion of clusters or node pools.
- However, this approach might result in orphaned resources in AWS or Azure, requiring manual cleanup.

