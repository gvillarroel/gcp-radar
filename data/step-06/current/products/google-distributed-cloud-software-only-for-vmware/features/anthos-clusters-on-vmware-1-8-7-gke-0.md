---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.173Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Anthos clusters on VMware 1.8.7-gke.0"
feature_slug: "anthos-clusters-on-vmware-1-8-7-gke-0"
latest_feature_date: "2022-02-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/cis-benchmarks"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/cis-benchmarks"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools"
keywords:
  - "anthos"
  - "clusters"
  - "vmware"
  - "gke"
  - "maintenance"
  - "release"
  - "runs"
  - "kubernetes"
---

# Anthos clusters on VMware 1.8.7-gke.0

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

A maintenance release of Anthos clusters on VMware that runs on Kubernetes v1.20.12-gke.1500.

## Extended Definition

Based on the provided Google Distributed Cloud for VMware documentation excerpts, this feature is tied to an Anthos clusters on VMware release train that is maintained through monthly Anthos patch releases, with Anthos-side changes requiring a wait for the next patch to upgrade clusters. The documentation also states that Anthos clusters on VMware do not support the EventRateLimit admission controller because it is a Kubernetes alpha feature. For Windows node pools, urgent OS patching can be handled by creating a new VM template and performing a rolling node-pool update, while broader changes still follow the Anthos patch cadence.

## Evidence Summary

The CIS Benchmark page provides explicit security-feature support guidance (including the EventRateLimit limitation), and the Windows node pools guide provides patching/upgrade behavior for Anthos on VMware clusters, but neither excerpt directly confirms the specific 1.8.7-gke.0 release metadata.

## Source Links

- [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/cis-benchmarks](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/cis-benchmarks)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/cis-benchmarks](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/cis-benchmarks)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)

## Supporting Pages

### "CIS Kubernetes Benchmark \_|\_ Google Distributed Cloud (software only)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/cis-benchmarks](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/cis-benchmarks)
- Source ID: `site-docs-reference-2`
- Final score: 163
- Re-rank relevance: WEAK
- Re-rank rationale: Only versioning is discussed for a different Kubernetes/CIS mapping, with no evidence supporting this specific 1.8.7-gke.0 maintenance release.

Evidence snippets:
- 1.2.3 Ensure that the -- DenyServiceExternalIPs is set (Manual) L1 Warn 1.2.9 Ensure that the admission control plugin EventRateLimit is set (Manual) L1 Warn not set Anthos clusters on VMware does not support the Event Rate Limit admission controller as it is a Kubernetes Alpha feature.
- 4.1.9 If the kubelet config . yaml configuration file is being used validate permissions set to 600 or more restrictive (Manual) L1 Warn not set Anthos clusters on VMware does not support the Event Rate Limit admission controller as it is a Kubernetes Alpha feature.
- 4.1.9 If the kubelet config . yaml configuration file is being used validate permissions set to 600 or more restrictive (Manual) L1 Warn not set Anthos clusters on VMware does not support the Event Rate Limit admission controller as it is a Kubernetes Alpha feature.
- 4.1.9 If the kubelet config . yaml configuration file is being used validate permissions set to 600 or more restrictive (Manual) L1 Warn not set Anthos clusters on VMware does not support the Event Rate Limit admission controller as it is a Kubernetes Alpha feature.

### "CIS Kubernetes Benchmark \_|\_ Google Distributed Cloud (software only)\

- URL: [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/cis-benchmarks](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/cis-benchmarks)
- Source ID: `site-docs-reference-3`
- Final score: 163
- Re-rank relevance: WEAK
- Re-rank rationale: Only broad benchmark/version context for Anthos is provided, with different version numbers than the candidate release.

Evidence snippets:
- 1.2.3 Ensure that the -- DenyServiceExternalIPs is set (Manual) L1 Warn 1.2.9 Ensure that the admission control plugin EventRateLimit is set (Manual) L1 Warn not set Anthos clusters on VMware does not support the Event Rate Limit admission controller as it is a Kubernetes Alpha feature.
- 4.1.9 If the kubelet config . yaml configuration file is being used validate permissions set to 600 or more restrictive (Manual) L1 Warn not set Anthos clusters on VMware does not support the Event Rate Limit admission controller as it is a Kubernetes Alpha feature.
- 4.1.9 If the kubelet config . yaml configuration file is being used validate permissions set to 600 or more restrictive (Manual) L1 Warn not set Anthos clusters on VMware does not support the Event Rate Limit admission controller as it is a Kubernetes Alpha feature.
- 4.1.9 If the kubelet config . yaml configuration file is being used validate permissions set to 600 or more restrictive (Manual) L1 Warn not set Anthos clusters on VMware does not support the Event Rate Limit admission controller as it is a Kubernetes Alpha feature.

### "User guide for Windows Server OS node pools \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)
- Source ID: `site-docs-reference`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- Update the Windows node pools to use the new template by running: gkectl update cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG If the new version requires changes from Anthos's side, you must wait for the next monthly Anthos patch release and upgrade the clusters .
- Security patch process Besides the regular patch releases for the supported Anthos versions, the Anthos team also continuously qualifies newer Windows patch updates during non-release time periods, and publishes the results for your reference.
- If an urgent security patch update is needed between Anthos patch releases, you can build a new VM template using the latest version, and then perform a rolling update for the existing Windows node pools to use the new template.
- Make sure you are using the latest qualified patch version for Windows Server 2019, check our release notes to find out the latest qualified Windows OS image version for a given Anthos release version.

