---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.170Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Anthos clusters on VMware 1.8.8-gke.1"
feature_slug: "anthos-clusters-on-vmware-1-8-8-gke-1"
latest_feature_date: "2022-03-15"
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

# Anthos clusters on VMware 1.8.8-gke.1

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

A maintenance release of Anthos clusters on VMware that runs on Kubernetes v1.20.12-gke.1500.

## Extended Definition

Anthos clusters on VMware 1.8.8-gke.1 is a maintenance-release variant of Anthos on VMware; in the cited Google docs, this platform is documented as not supporting the Kubernetes EventRateLimit admission controller because that feature is still alpha. The same documentation also indicates that Anthos patching is generally handled through regular monthly releases, while urgent Windows security patch needs between releases are handled by creating a new VM template and performing a rolling update, using release notes to select a qualified patch image version.

## Evidence Summary

The cited pages confirm specific Anthos-on-VMware behaviors (unsupported EventRateLimit alpha controller and patching workflow), but they do not provide direct, version-specific evidence for 1.8.8-gke.1 features.

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
- Re-rank rationale: The page does not contain this release, so it provides only peripheral context rather than a definition of that specific version.

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
- Re-rank rationale: The page includes version-related CIS matrix information, but it does not mention this specific release line.

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

