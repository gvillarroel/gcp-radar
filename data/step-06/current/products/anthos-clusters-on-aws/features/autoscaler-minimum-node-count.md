---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:58:55.382Z"
product_name: "Anthos clusters on AWS"
product_slug: "anthos-clusters-on-aws"
feature_name: "Autoscaler minimum node count"
feature_slug: "autoscaler-minimum-node-count"
latest_feature_date: "2022-04-13"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/cluster-autoscaler"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/about-surge-updates"
keywords:
  - "autoscaler minimum node count"
  - "minimum node count 0"
  - "scale-to-zero"
  - "scale to zero"
  - "minimum nodes"
  - "node pool autoscaling"
  - "cluster autoscaler"
  - "minNodeCount"
---

# Autoscaler minimum node count

Product: Anthos clusters on AWS
Coverage: HIGH

## Step 02 Summary

The autoscaler now supports setting the minimum node count to zero.

## Extended Definition

In GKE on AWS, the cluster autoscaler feature supports scaling node pools from zero nodes, which means a node pool can effectively have a minimum node count of zero on supported versions of the platform. The feature is version-gated: the docs specify minimum version levels required for this behavior (for example, 1.29+ and later 1.28/1.27 patch levels as listed). During autoscaling operations such as surge updates, node provisioning by the autoscaler is constrained by the configured minimum and maximum node settings (min-nodes/max-nodes).

## Evidence Summary

These pages confirm zero-node scale-up support for the GKE on AWS cluster autoscaler and show that autoscaler activity is bounded by min-nodes/max-nodes limits.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/cluster-autoscaler)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/about-surge-updates](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/about-surge-updates)

## Supporting Pages

### About cluster autoscaler \_|\_ GKE on AWS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/cluster-autoscaler)
- Source ID: `site-iam-reference`
- Final score: 50
- Re-rank relevance: MODERATE
- Re-rank rationale: The page explains that the cluster autoscaler is configured by setting minimum and maximum node pool size values and scales node counts automatically, which is directly related to minimum node count behavior.

Evidence snippets:
- Scale up from zero nodes Starting with the following GKE on AWS versions, the cluster autoscaler supports scaling up node pools from zero nodes: Version 1.29 and later Versions of 1.28 from 1.28.8-gke.800 and later Versions of 1.27 from 1.27.12-gke.800 and later If you're using an earlier version, you need to upgrade your cluster to one of these versions to use this feature.
- When configuring taints on your node pools, be aware that AWS Auto Scaling groups have a limitation: if you apply multiple taints with the same key but different value-effect combinations, only the last applied taint with the duplicated key is considered by the cluster autoscaler.
- Official Kubernetes Cluster Autoscaler documentation Operating criteria The cluster autoscaler makes the following assumptions when resizing a node pool: All replicated Pod objects can be restarted on some other node, possibly causing a brief disruption.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) GKE Multi-Cloud GKE on AWS Guides Send feedback About cluster autoscaler Stay organized with collections Save and categorize content based on your preferences.

### About surge updates \_|\_ GKE on AWS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/about-surge-updates](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/about-surge-updates)
- Source ID: `site-iam-reference`
- Final score: 20
- Re-rank relevance: WEAK
- Re-rank rationale: The page briefly mentions the autoscaler running during rolling updates and scaling up for capacity, but it does not describe minimum node count behavior or zero-node configuration.

Evidence snippets:
- The cluster autoscaler plays a more important role in surge updates than in standard rolling updates, which is why it figures prominently in the following list of actions GKE on AWS takes during a surge update: Creation of new autoscaling group : GKE on AWS provisions new nodes with the modifications specified by the update command, and assigns these new nodes to a new AWS autoscaling group (ASG).
- Otherwise, the cluster autoscaler, which remains active during a standard rolling update, starts a scale up and provisions additional nodes to ensure that there's enough capacity to schedule the evicted Pods.
- The cluster autoscaler might launch more nodes in the new ASG if it detects that Pods are unable to be scheduled but it stays within the limits defined by min-nodes and max-nodes .
- Cluster autoscaler behavior : As the surge update begins, the cluster autoscaler is activated for the new autoscaling group.

