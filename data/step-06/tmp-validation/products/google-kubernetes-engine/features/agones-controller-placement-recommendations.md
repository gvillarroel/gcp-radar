---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.267Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Agones controller placement recommendations"
feature_slug: "agones-controller-placement-recommendations"
latest_feature_date: "2023-06-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/apis-1-16"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-security-posture-dashboard"
keywords:
  - "agones"
  - "recommendations"
  - "placement"
  - "controller"
  - "insights"
  - "provides"
  - "when"
---

# Agones controller placement recommendations

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE provides recommendations and insights when the Agones controller is not installed on dedicated nodes.

## Extended Definition

GKE provides recommendations and insights when the Agones controller is not installed on dedicated nodes.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/apis-1-16](https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/apis-1-16)
- [https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2](https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-security-posture-dashboard](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-security-posture-dashboard)

## Supporting Pages

### "Feature and API deprecations \_|\_ Google Kubernetes Engine (GKE) \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/apis-1-16](https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/apis-1-16)
- Source ID: `site-iam-reference-required-2`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- Container Registry May 15, 2023 March 18, 2025 Transition from Container Registry to Artifact Registry in GKE No GKE Compliance dashboard (Preview) January 28, 2025 June 30, 2025 Posture management feature deprecations No Workload vulnerability scanning GKE security posture dashboard Standard tier: July 23, 2024 Advanced Vulnerability Insights: June 16, 2025 Standard tier: July 31, 2025 Advanced Vulnerability Insights: June 16, 2026 Vulnerability scanning removal from GKE Standard edition Yes Supply chain concerns - Binary Authorization (Preview) GKE security posture dashboard January 28, 2025 March 31, 2025 Posture management feature deprecations No Kubernetes security posture - advanced tier (Preview) GKE security posture dashboard January 28, 2025 March 31, 2025 Posture management feature deprecations Yes containerd 1.7 features GKE version 1.32 GKE version 1.33 Migrate nodes to containerd 2 Yes Linux cgroupv1 mode GKE version 1.31 TBD Migrate nodes to Linux cgroupv2 No Vulnerability scanning removal from GKE standard edition July 23, 2024 July 31, 2025 Vulnerability scanning removal from GKE Standard edition No TLS certificates signed with SHA-1 algorithm GKE version 1.24 GKE version 1.29 SHA-1 TLS certificates support removal Yes Built-in authentication plugin for Kubernetes clients GKE version 1.22 GKE version 1.25 Deprecated authentication plugin for Kubernetes clients No PodSecurityPolicy GKE version 1.21 GKE version 1.25 PodSecurityPolicy deprecation Yes Docker-based node images GKE version 1.20 GKE version 1.24 Docker node image deprecation Yes X.509 Common Name field in webhook certificates GKE version 1.19 GKE version 1.23 Webhook certificates CN field deprecation Yes Kubernetes API deprecations The following table provides an overview of Kubernetes APIs that are deprecated and no longer served, sorted by Kubernetes version: Kubernetes version More information Does GKE detect and report usage?
- Windows Server Semi-Annual Channel (SAC) node images N/A August 9, 2022 Windows Server SAC end of servicing No Saxml for multi-host serving on TPUs and GKE N/A April 24, 2025 Release note No What's next Viewing deprecation insights and recommendations Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- In the next sections, learn about how GKE makes this process easier by detecting usage of deprecated Kubernetes features and APIs, sharing insights about this usage, and providing recommendations about how to migrate to features and APIs compatible with upcoming minor versions.
- View deprecation insights and recommendations , to assess if your cluster is exposed, and use migration guides to mitigate the exposure before the last available minor version supporting the feature reaches its end of support .

### "Migrate nodes to containerd 2 \_|\_ Google Kubernetes Engine (GKE) \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2](https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2)
- Source ID: `site-docs-reference-2`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- Version requirements Clusters receive these insights and recommendations if they're running the following versions or later: 1.28.15-gke.1159000 1.29.9-gke.1541000 1.30.5-gke.1355000 1.31.1-gke.1621000 Get insights and recommendations Follow the instructions to view insights and recommendations .
- Use insights and recommendations or Cloud Logging As explained in the Identify affected clusters section, you can use insights and recommendations to find clusters with Linux nodes that use Docker Schema 1 images if your cluster is running a minimum version or later.
- When viewing insights in the Google Cloud console, see the sidebar panel Migrate your containerd configuration off deprecated CRI registry auths field or Migrate your containerd configuration off deprecated CRI registry mirrors field .
- Identify affected clusters GKE monitors your clusters and uses the Recommender service to deliver guidance through insights and recommendations for identifying Linux nodes in your cluster that use these deprecated features.

### "About the security posture dashboard \_|\_ GKE security \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-security-posture-dashboard](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-security-posture-dashboard)
- Source ID: `site-iam-reference`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- Actionable recommendations : When available, the security posture dashboard provides action items to fix discovered concerns.
- Autopilot Standard This page provides an overview of the security posture dashboard in the Google Cloud console, which provides you with opinionated, actionable recommendations to improve your security posture.
- Usage as part of a broad security strategy The security posture dashboard provides insights about your workload security posture at the runtime phase of the software delivery lifecycle.
- GKE security posture dashboard pricing The pricing for the capabilities of the security posture dashboard is as follows, applicable to standalone GKE clusters and fleet GKE clusters: GKE security posture dashboard pricing Workload configuration auditing No extra charge Security bulletin surfacing No extra charge (Deprecated) Container OS vulnerability scanning No extra charge (Deprecated) Advanced vulnerability insights Uses Artifact Analysis pricing.

