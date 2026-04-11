---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:58:55.362Z"
product_name: "Anthos clusters on AWS"
product_slug: "anthos-clusters-on-aws"
feature_name: "Surge updates for node pool updates"
feature_slug: "surge-updates-for-node-pool-updates"
latest_feature_date: "2023-09-06"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/about-surge-updates"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools"
keywords:
  - "surge update strategy"
  - "node pool update settings"
  - "update disruption control"
  - "max surge"
  - "node pool surge"
  - "surge updates"
  - "maxUnavailable"
  - "maxSurge"
---

# Surge updates for node pool updates

Product: Anthos clusters on AWS
Coverage: HIGH

## Step 02 Summary

Anthos on AWS introduces surge updates to control the speed and disruption of node pool updates.

## Extended Definition

Surge updates for node pool updates in Anthos clusters on AWS let you control how node replacements are performed during an update by using `maxSurge` (temporary extra nodes created beyond current pool size) and `maxUnavailable` (pods/nodes allowed to be unavailable), which together determine update parallelism. This strategy is used to balance update speed and workload disruption, with documented preset combinations for different disruption/speed tradeoffs, and clusters on node pool API minor version 1.27+ default to `maxSurge = 1` and `maxUnavailable = 0` unless configured otherwise.

## Evidence Summary

The about page describes the surge update behavior, presets, and disruption tradeoffs, while the REST reference defines `maxSurge`/`maxUnavailable` semantics, defaults, and that their sum drives update parallelism.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/about-surge-updates](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/about-surge-updates)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools)

## Supporting Pages

### About surge updates \_|\_ GKE on AWS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/about-surge-updates](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/about-surge-updates)
- Source ID: `site-iam-reference`
- Final score: 90
- Re-rank relevance: STRONG
- Re-rank rationale: The page is a dedicated overview of surge updates in GKE on AWS, detailing their behavior and how they control node pool update speed and disruption.

Evidence snippets:
- The following table shows three example settings, and highlights their impact on the speed of the update and the potential disruption to your workloads: Name Description Configuration Balanced setting (default) Balanced, slower but least disruptive. maxSurge=1, maxUnavailable=0 Rapid updates without extra resources Fast, no surge resources, most disruptive. maxSurge=0, maxUnavailable=20 Rapid updates that are less disruptive Fast, most surge resources and less disruptive. maxSurge=20, maxUnavailable=0 Each of the settings in the table is described in the following sections.
- The cluster autoscaler plays a more important role in surge updates than in standard rolling updates, which is why it figures prominently in the following list of actions GKE on AWS takes during a surge update: Creation of new autoscaling group : GKE on AWS provisions new nodes with the modifications specified by the update command, and assigns these new nodes to a new AWS autoscaling group (ASG).
- Although the configurations of PDBs may vary, if you create a PDB with maxUnavailable equal to 1 for one or more workloads running on the node pool, then only one Pod of those workloads can be evicted at a time, limiting the parallelism of the entire update.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) GKE Multi-Cloud GKE on AWS Guides Send feedback About surge updates Stay organized with collections Save and categorize content based on your preferences.

### "REST Resource: projects.locations.awsClusters.awsNodePools \_|\_ GKE Multi-Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools)
- Source ID: `site-api-reference`
- Final score: 58
- Re-rank relevance: MODERATE
- Re-rank rationale: The page defines an AwsNodePool resource with an `updateSettings` field and references `SurgeSettings`, which are directly related to node pool update behavior.

Evidence snippets:
- For clusters with minor version 1.27 and later, a default surgeSettings configuration with maxSurge = 1 and maxUnavailable = 0 is used.
- 3. (maxSurge + maxUnavailable) determines the level of parallelism (i.e., the number of nodes being updated at the same time).
- JSON representation { "maxSurge" : integer , "maxUnavailable" : integer } Fields maxSurge integer Optional.
- 1. maxSurge controls the number of additional nodes that can be created beyond the current size of the node pool temporarily for the time of the update to increase the number of available nodes.

