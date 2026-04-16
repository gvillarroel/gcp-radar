---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.177Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "GKE Sandbox (gVisor) SYS_ADMIN privilege support"
feature_slug: "gke-sandbox-gvisor-sys-admin-privilege-support"
latest_feature_date: "2025-05-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/sandbox-pods"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/security-overview"
keywords:
  - "privilege"
  - "gvisor"
  - "sandbox"
  - "configured"
  - "admin"
---

# GKE Sandbox (gVisor) SYS_ADMIN privilege support

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE Sandbox (gVisor) can be configured with SYS_ADMIN privileges in GKE Autopilot.

## Extended Definition

GKE Sandbox (gVisor) can be configured with SYS_ADMIN privileges in GKE Autopilot.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/sandbox-pods](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/sandbox-pods)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/security-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/security-overview)

## Supporting Pages

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Upgrade your admin clusters and user clusters to one of the following versions: 1.8.3 1.7.4 High GCP-2021-017 Published: 2021-09-01 Updated: 2021-09-23 Reference: CVE-2021-33909 CVE-2021-33910 GKE Description Severity 2021-09-23 update: Containers running inside of GKE Sandbox are unaffected by this vulnerability for attacks originating inside the container.
- 2024-03-20 Update: The following GKE on Azure versions have been updated with patches for CVE-2023-44487: 1.26.10-gke.600 1.27.7-gke.600 1.28.3-gke.700 If you have configured your GKE on Azure clusters to have direct access to the Internet or other untrusted networks, we recommend working with your firewall administrator to block or limit that access.
- The researcher used Cloud Service Mesh's privileged Kubernetes service account token to escalate their initial compromised privileges by creating a new pod with cluster-admin privileges We have removed Fluent Bit's access to the service account tokens and have redesigned the functionality of Cloud Service Mesh to remove excess privileges.
- 2024-03-20 Update: The following GKE on AWS versions have been updated with patches for CVE-2023-44487: 1.26.10-gke.600 1.27.7-gke.600 1.28.3-gke.700 If you have configured your GKE on AWS to have direct access to the Internet or other untrusted networks, we recommend working with your firewall administrator to block or limit that access.

### GKE Sandbox \_|\_ GKE security \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/sandbox-pods](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/sandbox-pods)
- Source ID: `site-iam-reference`
- Final score: 133
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- How GKE Sandbox mitigates potential threats gVisor is a userspace re-implementation of the Linux kernel API that does not need elevated privileges.
- If you are upgrading a node pool, add the label cloud.google.com/gke-smt-disabled=false and install the DaemonSet as specified in the following steps: GKE versions before 1.24.2-gke.300 Create a new node pool in your cluster with the node label cloud.google.com/gke-smt-disabled=false : gcloud container node-pools create smt-enabled \ --cluster = CLUSTER NAME \ --location = LOCATION \ --machine-type = MACHINE TYPE \ --node-labels = cloud.google.com/gke-smt-disabled = false \ --image-type = cos containerd \ --sandbox type = gvisor Replace the following: CLUSTER NAME : the name of an existing cluster where you want to create the new node pool.
- GKE version 1.24.2-gke.300 and later Set the --threads-per-core flag when creating a GKE Sandbox node pool: gcloud container node-pools create smt-enabled \ --cluster = CLUSTER NAME \ --location = LOCATION \ --machine-type = MACHINE TYPE \ --threads-per-core = 2 \ --sandbox type = gvisor CLUSTER NAME : the name of an existing cluster where you want to create the new node pool.
- Direct access to hardware or virtualization Applies to Autopilot and Standard clusters If your workload needs any of the following, GKE Sandbox might not be a good fit because it prevents direct access to the host kernel on the node: Direct access to the node's hardware Kernel-level virtualization features Privileged containers What's next Configure GKE Sandbox .

### GKE security overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/security-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/security-overview)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- GKE Sandbox is built using gVisor , an open source project.
- These settings allow you to change security settings of your processes like: User and group to run as Available Linux capabilities Ability to escalate privileges To enforce these restrictions at the cluster level rather than at the Pod or container levels, use the PodSecurityAdmission controller .
- This section describes tactics that administrators and users can employ to limit the effect a running container can have on other containers in the same cluster, the nodes where containers can run, and the Google Cloud services enabled in users' projects.
- This makes Google Cloud service accounts more powerful than Kubernetes service accounts; in order to follow the security principle of least privilege, you should consider using Google Cloud service accounts only when their capabilities are required.

