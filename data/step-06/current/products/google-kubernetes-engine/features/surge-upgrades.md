---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.988Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Surge upgrades"
feature_slug: "surge-upgrades"
latest_feature_date: "2020-02-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/upgrading-stateful-workload"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus"
keywords:
  - "surge"
  - "upgrades"
  - "let"
  - "you"
  - "configure"
  - "speed"
  - "disruption"
  - "node"
---

# Surge upgrades

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Surge upgrades let you configure the speed and disruption of node upgrades.

## Extended Definition

Surge upgrades let you configure the speed and disruption of node upgrades.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/upgrading-stateful-workload](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/upgrading-stateful-workload)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus)

## Supporting Pages

### "Node upgrade strategies \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies)
- Source ID: `site-docs-reference-2`
- Final score: 212
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Tune surge upgrade settings to balance speed and disruption The following table describes four different upgrade profiles as examples to help you understand different configurations: Description Configuration Typical use case Balanced (Default), slower but least disruptive maxSurge=1 maxUnavailable=0 Most workloads Fast, no surge resources, most disruptive maxSurge=0 maxUnavailable=20 Large node pools after jobs have to run to completion Fast, most surge resources and less disruptive maxSurge=20 maxUnavailable=0 Large node pools Slowest, disruptive, no surge resources maxSurge=0 maxUnavailable=1 Resource-constrained node pool with reservation Balanced (Default) The simplest way to take advantage of surge upgrades is to use the default configuration, maxSurge=1;maxUnavailable=0.
- Surge upgrades are optimal for the following scenarios: if you want to optimize for the speed of upgrades. if workloads are more tolerant of disruptions, where graceful termination up to 60 minutes is acceptable. if you want to control costs by minimizing the creation of new nodes.
- For more information about which node upgrade strategy is right for your environment, see the following: When to choose surge upgrades When to choose blue-green upgrades When to choose autoscaled blue-green upgrades With each of these strategies, you can configure upgrade settings to optimize the process based on your environment's needs.
- Fast and less disruptive If your workload is sensitive to disruption and you have already set up PodDisruptionBudgets (PDB) and you are not using externalTrafficPolicy: Local , which does not work with parallel node drains, you can increase the speed of the upgrade by using maxSurge=20;maxUnavailable=0 .

### "Deploy a Redis cluster on GKE \_|\_ Kubernetes Engine \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/upgrading-stateful-workload](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/upgrading-stateful-workload)
- Source ID: `site-docs-root-2`
- Final score: 170
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Configure a node upgrade strategy There are two node upgrade strategies you can use for the node pools in your GKE cluster: Blue-green upgrades and surge upgrades .
- You use this value when you create scripts to test your application in the next section: export IP = EXTERNAL IP Configure best practices for node pool upgrades Perform these best practices for stateful applications to optimize for better availability during node pool upgrades.
- Perform these best practices for node pool upgrades: Set up the Pod Disruption Budget (PDB) .
- For more information about configuring surge upgrades, see Configure surge upgrades .

### Run GPUs in GKE Standard node pools \_|\_ GKE AI/ML \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- You can also configure a node upgrade strategy for your node pool, such as surge upgrades , blue-green upgrades or short-lived upgrades .
- By configuring these strategies, you can ensure that the node pools are upgraded in a way that achieves the optimal balance between speed and disruption for your environment.
- To configure GKE to terminate your workloads gracefully within this notification timeframe, follow the steps in Manage GKE node disruption for GPUs and TPUs .
- Test new GKE versions for compatibility in a staging environment before automatic upgrades change the version on your production GPU nodes, or disable automatic upgrades in those node pools. gcloud To create a node pool with GPUs in a cluster, run the following command: gcloud container node-pools create POOL NAME \ --accelerator type = GPU TYPE ,count = AMOUNT ,gpu-driver-version = DRIVER VERSION \ --machine-type MACHINE TYPE \ --cluster CLUSTER NAME \ --location CONTROL PLANE LOCATION \ --node-locations COMPUTE ZONE1 [ , COMPUTE ZONE2 ] \ [ --sandbox = type = gvisor ] [ --enable-autoscaling \ --min-nodes MIN NODES \ --max-nodes MAX NODES ] \ [ --scopes = SCOPES ] \ [ --service-account = SERVICE ACCOUNT ] \ [ --reservation-affinity = specific --reservation = RESERVATION NAME ] Replace the following: POOL NAME : the name you choose for the node pool.

