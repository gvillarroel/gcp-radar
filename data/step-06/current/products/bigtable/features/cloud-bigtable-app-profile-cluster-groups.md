---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:28.024Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable app profile cluster groups"
feature_slug: "cloud-bigtable-app-profile-cluster-groups"
latest_feature_date: "2021-10-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/app-profiles"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.models.AppProfile.MultiClusterRoutingPolicy"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.models.AppProfile.SingleClusterRoutingPolicy"
keywords:
  - "groups"
  - "traffic"
  - "introduces"
  - "profile"
  - "cluster"
---

# Cloud Bigtable app profile cluster groups

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

Introduces app profile cluster groups so app profile traffic can be routed to a subset of clusters in a Cloud Bigtable instance.

## Extended Definition

Introduces app profile cluster groups so app profile traffic can be routed to a subset of clusters in a Cloud Bigtable instance.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/app-profiles](https://docs.cloud.google.com/bigtable/docs/app-profiles)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.models.AppProfile.MultiClusterRoutingPolicy](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.models.AppProfile.MultiClusterRoutingPolicy)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.models.AppProfile.SingleClusterRoutingPolicy](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.models.AppProfile.SingleClusterRoutingPolicy)

## Supporting Pages

### "Class AppProfile.MultiClusterRoutingPolicy (2.74.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.models.AppProfile.MultiClusterRoutingPolicy](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.models.AppProfile.MultiClusterRoutingPolicy)
- Source ID: `site-java-reference`
- Final score: 117
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Parameter Name Description clusterIds Set < String > Returns Type Description AppProfile.MultiClusterRoutingPolicy Methods equals(Object o) public boolean equals ( Object o ) Parameter Name Description o Object Returns Type Description boolean Overrides Object.equals(Object) getClusterIds() public Set<String> getClusterIds () Returns Type Description Set < String > hashCode() public int hashCode () Returns Type Description int Overrides Object.hashCode() Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Inheritance Object > AppProfile.MultiClusterRoutingPolicy Implements AppProfile.RoutingPolicy Inherited Members Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Static Methods of() public static AppProfile .
- Home Documentation Developer tools Java Client libraries Send feedback Class AppProfile.MultiClusterRoutingPolicy (2.74.0) Stay organized with collections Save and categorize content based on your preferences.
- Parameter Name Description clusterIds String [] Returns Type Description AppProfile.MultiClusterRoutingPolicy withRowAffinity(Set<String> clusterIds) public static AppProfile .

### "Class AppProfile.SingleClusterRoutingPolicy (2.74.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.models.AppProfile.SingleClusterRoutingPolicy](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.models.AppProfile.SingleClusterRoutingPolicy)
- Source ID: `site-java-reference`
- Final score: 117
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Parameters Name Description clusterId String allowTransactionWrites boolean Returns Type Description AppProfile.SingleClusterRoutingPolicy Methods equals(Object o) public boolean equals ( Object o ) Parameter Name Description o Object Returns Type Description boolean Overrides Object.equals(Object) getAllowTransactionalWrites() public boolean getAllowTransactionalWrites () Checks if transactional writes are enabled.
- Inheritance Object > AppProfile.SingleClusterRoutingPolicy Implements AppProfile.RoutingPolicy Inherited Members Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Static Methods fromProto(AppProfile.SingleClusterRouting proto) public static AppProfile .
- Home Documentation Developer tools Java Client libraries Send feedback Class AppProfile.SingleClusterRoutingPolicy (2.74.0) Stay organized with collections Save and categorize content based on your preferences.
- Parameter Name Description proto com.google.bigtable.admin.v2.AppProfile.SingleClusterRouting Returns Type Description AppProfile.SingleClusterRoutingPolicy of(String clusterId) public static AppProfile .

### App profiles overview \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/app-profiles](https://docs.cloud.google.com/bigtable/docs/app-profiles)
- Source ID: `site-docs-reference-2`
- Final score: 117
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Similarly, if you change an app profile from Data Boost to standard, traffic that is sent by the app profile starts using cluster nodes for compute.
- A standard app profile uses provisioned cluster nodes for compute and is typically used for application-serving traffic.
- Standard app profiles A standard app profile routes traffic to an instance's clusters using the clusters' nodes.
- The settings in an instance's default app profile depend on the number of clusters the instance had when you first created it: If you created the instance with 1 cluster, the default app profile uses single-cluster routing , and it enables single-row transactions .

