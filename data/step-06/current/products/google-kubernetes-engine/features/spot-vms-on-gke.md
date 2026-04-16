---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.848Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Spot VMs on GKE"
feature_slug: "spot-vms-on-gke"
latest_feature_date: "2022-05-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview"
keywords:
  - "spot"
  - "vms"
  - "gke"
  - "let"
  - "you"
  - "run"
  - "fault"
  - "tolerant"
---

# Spot VMs on GKE

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Spot VMs let you run fault-tolerant workloads on GKE at lower cost; Spot VMs provide lower-cost, interruptible compute for GKE workloads.

## Extended Definition

Spot VMs let you run fault-tolerant workloads on GKE at lower cost; Spot VMs provide lower-cost, interruptible compute for GKE workloads.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview)

## Supporting Pages

### "Node upgrade strategies \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies)
- Source ID: `site-docs-reference-2`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- Tune surge upgrade settings to balance speed and disruption The following table describes four different upgrade profiles as examples to help you understand different configurations: Description Configuration Typical use case Balanced (Default), slower but least disruptive maxSurge=1 maxUnavailable=0 Most workloads Fast, no surge resources, most disruptive maxSurge=0 maxUnavailable=20 Large node pools after jobs have to run to completion Fast, most surge resources and less disruptive maxSurge=20 maxUnavailable=0 Large node pools Slowest, disruptive, no surge resources maxSurge=0 maxUnavailable=1 Resource-constrained node pool with reservation Balanced (Default) The simplest way to take advantage of surge upgrades is to use the default configuration, maxSurge=1;maxUnavailable=0.
- Blue-green upgrades are optimal for the following scenarios: if you want a gradual rollout where risk mitigation is most important, where graceful termination greater than 60 minutes is needed. if your workloads are less tolerant of disruptions. if a temporary cost increase due to higher resource usage is acceptable.
- Surge upgrades are optimal for the following scenarios: if you want to optimize for the speed of upgrades. if workloads are more tolerant of disruptions, where graceful termination up to 60 minutes is acceptable. if you want to control costs by minimizing the creation of new nodes.
- Autoscaled blue-green upgrades are a different type of upgrade strategy that maximizes the amount of time before disruption-intolerant workloads are evicted, while minimizing cost.

### "About GKE cluster autoscaling \_|\_ Google Kubernetes Engine (GKE) \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler)
- Source ID: `site-docs-reference-2`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- It is the default location policy for flex-start provisioning mode and node pools that use Spot VMs, but you can also use it for node pools using reservations or on-demand nodes.
- This policy is the default location policy for node pools using reservations or on-demand nodes, but you can also use it for Spot VMs.
- Default values For Spot VMs node pools, the default cluster autoscaler distribution policy is ANY .
- GKE will try to provision these VMs first. spot : true gpu : type : nvidia-l4 count : 2 If GKE can't satisfy the preceding rule, request on-demand nodes with the same configuration - machineType : g2-standard-24 spot : false gpu : type : nvidia-l4 count : 2 nodePoolAutoCreation : enabled : true Configures active migration behavior for workloads using this ComputeClass. activeMigration : optimizeRulePriority : true Enables Cluster Autoscaler to attempt to migrate workloads to Spot VMs if Spot capacity becomes available and the workload is currently running on an on-demand VM (based on the priority rules in this example).

### "GKE Autopilot overview \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview)
- Source ID: `site-iam-reference`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- Run fault-tolerant workloads such as batch jobs at lower costs.
- Networking : Autopilot enables some networking security features by default, such as passing all Pod network traffic through your Virtual Private Cloud firewall rules, even if the traffic is going to other Pods in the cluster.
- Resource management : if you deploy workloads without setting resource values such as CPU and memory, Autopilot automatically sets pre-configured default values and modifies your resource requests at the workload level.
- Security Autopilot clusters enable and apply security best practices and settings by default, including many of the recommendations in Harden your cluster security and the GKE security overview .

