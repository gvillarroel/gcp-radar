---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.659Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "H4D machine series"
feature_slug: "h4d-machine-series"
latest_feature_date: "2026-03-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/fast-starting-nodes"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview"
keywords:
  - "h4d"
  - "machine"
  - "series"
  - "provides"
  - "hpc"
  - "optimized"
  - "gke"
  - "nodes"
---

# H4D machine series

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

The H4D machine series provides HPC-optimized GKE nodes with AMD EPYC Turin CPUs and 200 Gbps RDMA networking.

## Extended Definition

The H4D machine series provides HPC-optimized GKE nodes with AMD EPYC Turin CPUs and 200 Gbps RDMA networking.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/fast-starting-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/fast-starting-nodes)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview)

## Supporting Pages

### "About quicker workload startup with fast-starting nodes \_|\_ Google Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/fast-starting-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/fast-starting-nodes)
- Source ID: `site-docs-reference-2`
- Final score: 140
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Use one of the following compute resources which are described in the respective tables in the Configuration requirements for eligible compute resources section: Autopilot container-optimized compute platform G2 machine series A2 machine series Limitations The following features aren't compatible with fast-starting GKE nodes.
- G2 machine series See the following requirements for GKE to provision G2 machines as fast-starting nodes.
- A2 machine series See the following requirements for GKE to provision A2 machines as fast-starting nodes.
- The accelerated startup time provides you with the following benefits: Faster cold start Faster autoscaling Improved Pod scheduling long-tail latency Improved infrastructure cost efficiency With fast-starting nodes, GKE pre-initializes hardware resources to accelerate startup time.

### "Encrypt workload data in-use with Confidential GKE Nodes \_|\_ GKE security\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes)
- Source ID: `site-iam-reference`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Pricing The following pricing applies, depending on how you configure Confidential GKE Nodes: Confidential GKE Nodes pricing Workload-level In Autopilot workloads, both of the following costs apply: Autopilot node-based billing for the Compute Engine machine series that the Pods run on.
- When you enable Confidential GKE Nodes, the default machine series in the Autopilot cluster changes to N2D.
- MACHINE SERIES : the machine series for the nodes, such as n2d .
- For more information about the supported fields and values for ComputeClasses, see the ComputeClass CustomResourceDefinition . apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : COMPUTE CLASS spec : nodePoolConfig : confidentialNodeType : CONFIDENTIAL COMPUTE TECHNOLOGY nodePoolAutoCreation : enabled : true activeMigration : optimizeRulePriority : true priorityDefaults : location : zones : [ ' ZONE1 ' , ' ZONE2 ' ] priorities : - machineFamily : MACHINE SERIES - machineType : MACHINE TYPE whenUnsatisfiable : DoNotScaleUp Replace the following: COMPUTE CLASS : a name for your new compute class.

### "GKE Autopilot overview \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview)
- Source ID: `site-iam-reference`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- The container-optimized compute platform provides the following benefits: Compute capacity matches workloads : Autopilot dynamically adjusts the compute capacity for the container-optimized compute platform based on factors like the number of Pods and resource consumption.
- Autopilot workloads that select specific hardware : Pods that select specific hardware, such as Compute Engine machine series or hardware accelerators, use a node-based billing model .
- The container-optimized compute platform uses GKE Autopilot nodes that can dynamically resize while running, designed to scale up from fractions of a CPU with minimal disruptions.
- Run Arm workloads Request a machine series that has Arm CPUs in a ComputeClass or in your workload manifest.

