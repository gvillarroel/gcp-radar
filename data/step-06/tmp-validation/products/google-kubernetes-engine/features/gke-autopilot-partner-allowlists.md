---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.184Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "GKE Autopilot partner allowlists"
feature_slug: "gke-autopilot-partner-allowlists"
latest_feature_date: "2025-02-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/resources/autopilot-partners"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-autopilot-privileged-workloads"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security"
keywords:
  - "partners"
  - "allowlists"
  - "partner"
  - "create"
  - "autopilot"
  - "feature"
  - "lets"
---

# GKE Autopilot partner allowlists

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

This feature lets GKE Autopilot partners create and manage allowlists for specific partner workloads and install them in clusters.

## Extended Definition

This feature lets GKE Autopilot partners create and manage allowlists for specific partner workloads and install them in clusters.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/resources/autopilot-partners](https://docs.cloud.google.com/kubernetes-engine/docs/resources/autopilot-partners)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-autopilot-privileged-workloads](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-autopilot-privileged-workloads)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security)

## Supporting Pages

### "Autopilot partners \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/resources/autopilot-partners](https://docs.cloud.google.com/kubernetes-engine/docs/resources/autopilot-partners)
- Source ID: `site-docs-reference-2`
- Final score: 234
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Run privileged partner workloads in Autopilot In GKE version 1.32.2-gke.1652000 and later, some partners provide allowlists that correspond to their privileged workloads.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Resources Send feedback Autopilot partners Stay organized with collections Save and categorize content based on your preferences.
- Pricing Any resources that partner workloads create in your Autopilot clusters are billed according to the Autopilot pricing model .
- Partners that support allowlists The following table describes partners whose workloads are available to install with allowlists.

### "About privileged workload admission in Autopilot mode \_|\_ Google Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-autopilot-privileged-workloads](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-autopilot-privileged-workloads)
- Source ID: `site-docs-reference-2`
- Final score: 184
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The syntax for these paths depends on who created the WorkloadAllowlist, as follows: Specific Autopilot partners and approved open source projects: gke:// REPOSITORY PATH / SELECTOR Replace the following: REPOSITORY PATH : the path to the directory that contains allowlists for the workload, such as Grafana/alloy .
- By default, every Autopilot or Standard cluster in a Google Cloud organization lets you install WorkloadAllowlists for Autopilot partner workloads and for open source workloads.
- By default, the autopilotPrivilegedAdmission constraint allows the use of all allowlists that are owned by approved GKE partners and open source projects.
- By default, every Google Cloud organization supports allowlists from Autopilot partners and verified open source projects.

### GKE Autopilot security measures \_|\_ GKE security \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security)
- Source ID: `site-iam-reference`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- Autopilot allows privileged containers from verified partners for purposes such as running security and monitoring tooling.
- This information is for Security specialists who want to understand the security constraints that Google applies in Autopilot mode, and the security features that are available for use in Autopilot.
- Security boundaries in Autopilot Autopilot provides access to the Kubernetes API but removes permissions to use some highly privileged Kubernetes features, such as privileged Pods.
- Certificate signing requests You can create CertificateSigningRequests in Autopilot to create certificates that are signed by the cluster certificate authority.

