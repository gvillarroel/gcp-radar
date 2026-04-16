---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.230Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "GKE threat detection"
feature_slug: "gke-threat-detection"
latest_feature_date: "2024-04-03"
deprecation_date: "2025-01-28"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/apis-1-16"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-security-posture-dashboard"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
keywords:
  - "detection"
  - "detects"
  - "posture"
  - "threat"
  - "management"
  - "preview"
  - "feature"
---

# GKE threat detection

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

This preview posture-management feature detects threat-related issues in GKE clusters; GKE threat detection shows control plane threats in the GKE security posture dashboard; deprecated on 2025-01-28.

## Extended Definition

This preview posture-management feature detects threat-related issues in GKE clusters; GKE threat detection shows control plane threats in the GKE security posture dashboard; deprecated on 2025-01-28.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/apis-1-16](https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/apis-1-16)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-security-posture-dashboard](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-security-posture-dashboard)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)

## Supporting Pages

### "Feature and API deprecations \_|\_ Google Kubernetes Engine (GKE) \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/apis-1-16](https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/apis-1-16)
- Source ID: `site-iam-reference-required-2`
- Final score: 146
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Container Registry May 15, 2023 March 18, 2025 Transition from Container Registry to Artifact Registry in GKE No GKE Compliance dashboard (Preview) January 28, 2025 June 30, 2025 Posture management feature deprecations No Workload vulnerability scanning GKE security posture dashboard Standard tier: July 23, 2024 Advanced Vulnerability Insights: June 16, 2025 Standard tier: July 31, 2025 Advanced Vulnerability Insights: June 16, 2026 Vulnerability scanning removal from GKE Standard edition Yes Supply chain concerns - Binary Authorization (Preview) GKE security posture dashboard January 28, 2025 March 31, 2025 Posture management feature deprecations No Kubernetes security posture - advanced tier (Preview) GKE security posture dashboard January 28, 2025 March 31, 2025 Posture management feature deprecations Yes containerd 1.7 features GKE version 1.32 GKE version 1.33 Migrate nodes to containerd 2 Yes Linux cgroupv1 mode GKE version 1.31 TBD Migrate nodes to Linux cgroupv2 No Vulnerability scanning removal from GKE standard edition July 23, 2024 July 31, 2025 Vulnerability scanning removal from GKE Standard edition No TLS certificates signed with SHA-1 algorithm GKE version 1.24 GKE version 1.29 SHA-1 TLS certificates support removal Yes Built-in authentication plugin for Kubernetes clients GKE version 1.22 GKE version 1.25 Deprecated authentication plugin for Kubernetes clients No PodSecurityPolicy GKE version 1.21 GKE version 1.25 PodSecurityPolicy deprecation Yes Docker-based node images GKE version 1.20 GKE version 1.24 Docker node image deprecation Yes X.509 Common Name field in webhook certificates GKE version 1.19 GKE version 1.23 Webhook certificates CN field deprecation Yes Kubernetes API deprecations The following table provides an overview of Kubernetes APIs that are deprecated and no longer served, sorted by Kubernetes version: Kubernetes version More information Does GKE detect and report usage?
- If GKE detects that a cluster is using a feature that is removed in an upcoming minor version of Kubernetes, automatic cluster upgrades to the next minor version are paused, and GKE shares a deprecation insight and recommendation.
- If GKE detects that a cluster is using a feature that is removed in an upcoming minor version of Kubernetes, GKE shares a deprecation insight and recommendation , notifying you of your cluster's usage of a deprecated feature.
- If GKE detects usage of a deprecated feature or API, GKE pauses automatic upgrades to prevent your cluster from being upgraded into a broken state.

### "About the security posture dashboard \_|\_ GKE security \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-security-posture-dashboard](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-security-posture-dashboard)
- Source ID: `site-iam-reference`
- Final score: 133
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When to use the security posture dashboard You should use the security posture dashboard if you're a cluster administrator or a security administrator who wants to automate detection and reporting of common security concerns across multiple clusters and workloads, with minimal intrusion and disruption to your running applications.
- Also, if you activate the Premium or Enterprise service tier of Security Command Center in your organization or project, then the security posture dashboard shows the following additional panes: Top threats : summarizes the top threats that affect your GKE workloads, grouped by severity and category.
- Cluster-specific feature enablement The GKE-specific capabilities in the security posture dashboard are categorized as follows: Kubernetes security posture : The security posture of Kubernetes objects and resources in the cluster, such as Pod specifications.
- Google Cloud recommends using the security posture dashboard for all your clusters for the following reasons: Minimal disruptions : Features don't interfere with or disrupt running workloads.

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- Built detection rules into Event Threat Detection (GKE CONTROL PLANE CREATE SENSITIVE BINDING) as part of Security Command Center.
- To list the MCG managed firewall rules in your current environment, run the following command: gcloud compute firewall-rules list --format = "json" --filter = "name:gkemcg1-l7- " jq -r '.[] "\(.name): \(.sourceRanges // "No source range")"' awk -F: '{if ($2 /No source range ^\s $/) print "Rule "$1" has an EMPTY or MISSING source range."; else print "Rule "$1" has source range(s): "$2;}' To search logs for updates to MCG managed firewall configurations, use the Logs Explorer with the below query: protoPayload.serviceName="compute.googleapis.com" resource.type="gce firewall rule" protoPayload.resourceName= "projects/[^/]+/global/firewalls/gkemcg1-" -operation.last="true" To list the MCG managed firewall rules across your organization, run the following command to query Cloud Asset Inventory: gcloud asset search-all-resources --scope = 'organizations/ ' --asset-types = 'compute.googleapis.com/Firewall' --query 'name: //compute.googleapis.com/projects/ / /firewalls/gkemcg ' The following additional controls provide defense in depth against untrusted networks and can be considered to strengthen security posture: Use private GKE nodes to ensure your nodes only get private IPs.
- You can use the following tools to check inbound traffic to your resources running in Google Cloud: VPC Flow Logs for visibility into network throughput and performance Cloud Logging to search and analyze logging data and events from Google Cloud services and applications configured to send logs Firewall Rules Logging to audit, verify, and analyze the effects of your firewall rules Security Command Center for visibility into security findings indicating suspicious network activity Your application logs High GDC (VMware) Description Severity A security issue was discovered that impacts Multi-Cluster Gateway (MCG), a GKE feature that allows customers to load balance traffic across multiple clusters.
- It is recommended that you: Upgrade your AWSManagementService , AWSCluster and AWSNodePool objects to the following version: 1.8.2 Update the gke-version of your AWSCluster and AWSNodePool objects to one of the supported Kubernetes versions : 1.17.17-gke.15800 1.18.20-gke.4800 1.19.14-gke.600 1.20.10-gke.600 High GKE clusters on Description Severity A security issue was discovered in Kubernetes , CVE-2021-25741, where a user may be able to create a container with subpath volume mounts to access files & directories outside of the volume, including on the host filesystem.

