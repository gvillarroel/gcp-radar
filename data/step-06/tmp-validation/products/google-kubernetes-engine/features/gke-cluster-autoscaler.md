---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.315Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "GKE cluster autoscaler"
feature_slug: "gke-cluster-autoscaler"
latest_feature_date: "2021-10-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/reducing-costs-by-scaling-down-gke-off-hours"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning"
keywords:
  - "empty"
  - "down"
  - "autoscaler"
  - "scale"
  - "clusters"
  - "cluster"
---

# GKE cluster autoscaler

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

The cluster autoscaler can scale from empty clusters and scale down nodes that run pods requesting local storage in GKE 1.22 and later.

## Extended Definition

The cluster autoscaler can scale from empty clusters and scale down nodes that run pods requesting local storage in GKE 1.22 and later.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/reducing-costs-by-scaling-down-gke-off-hours](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/reducing-costs-by-scaling-down-gke-off-hours)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning)

## Supporting Pages

### "About GKE cluster autoscaling \_|\_ Google Kubernetes Engine (GKE) \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler)
- Source ID: `site-docs-reference-2`
- Final score: 237
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following command enables optimize-utilization autoscaling profile in an existing cluster: gcloud container clusters update CLUSTER NAME \ --autoscaling-profile optimize-utilization Considering Pod scheduling and disruption When scaling down, the cluster autoscaler respects scheduling and eviction rules set on Pods.
- Known issues In GKE control plane version prior to 1.22, GKE cluster autoscaler stops scaling up all node pools on empty (zero node) clusters.
- On Standard clusters, the cluster autoscaler never automatically scales down a cluster to zero nodes.
- Cluster autoscaler scales down underutilized nodes regardless of the relative sizes of underlying managed instance groups in a node pool, which can cause the nodes to be distributed unevenly across zones.

### "Reducing costs by scaling down GKE clusters during off-peak hours \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/reducing-costs-by-scaling-down-gke-off-hours](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/reducing-costs-by-scaling-down-gke-off-hours)
- Source ID: `site-docs-reference-required-5`
- Final score: 195
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This kind of autoscaler scales clusters up or down according to a schedule based on time of day or day of the week.
- Create the GKE cluster In Cloud Shell, create a GKE cluster for running the scheduled autoscaler: gcloud container clusters create scheduled-autoscaler \ --enable-ip-alias \ --release-channel = stable \ --machine-type = e2-standard-2 \ --enable-autoscaling --min-nodes = 1 --max-nodes = 10 \ --num-nodes = 1 \ --autoscaling-profile = optimize-utilization The output is similar to the following: NAME LOCATION MASTER VERSION MASTER IP MACHINE TYPE NODE VERSION NUM NODES STATUS scheduled-autoscaler us-central1-f 1.22.15-gke.100 34.69.187.253 e2-standard-2 1.22.15-gke.100 1 RUNNING This is not a production configuration, but it's a configuration that's suitable for this tutorial.
- This document shows how to scale GKE clusters up in the morning and down at night, but you can use a similar approach to increase and decrease capacity for any known events, such as peak scale events, ad campaigns, or weekend traffic.
- The tutorial is for developers and operators who want to reliably scale up clusters before spikes arrive, and scale them down again to save money at night, on weekends, or any other time when fewer users are online.

### "About node pool auto-creation \_|\_ Google Kubernetes Engine (GKE) \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning)
- Source ID: `site-docs-reference-2`
- Final score: 189
- Re-rank relevance: N/A

Evidence snippets:
- If the number of Pods in an auto-created node pool decreases, the cluster autoscaler gradually scales the node pool down.
- Node pool auto-creation is designed to let GKE automatically scale down and remove empty node pools from your cluster.
- For more information about how the cluster autoscaler scales node pools down, see How cluster autoscaler works .
- These priorities help to ensure that your clusters have efficient compute resource usage at scale, like in the following example scenarios: In clusters that have a small number of node pools and less resource usage, GKE creates new node pools more frequently and uses smaller machine types for those node pools.

