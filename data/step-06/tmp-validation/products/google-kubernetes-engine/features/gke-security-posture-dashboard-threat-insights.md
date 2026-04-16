---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.174Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "GKE security posture dashboard threat insights"
feature_slug: "gke-security-posture-dashboard-threat-insights"
latest_feature_date: "2025-05-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-security-posture-dashboard"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security"
keywords:
  - "posture"
  - "command"
  - "threat"
  - "dashboard"
  - "security"
  - "insights"
  - "uses"
---

# GKE security posture dashboard threat insights

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

The GKE security posture dashboard uses Security Command Center to show the top threats affecting GKE workloads.

## Extended Definition

The GKE security posture dashboard uses Security Command Center to show the top threats affecting GKE workloads.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-security-posture-dashboard](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-security-posture-dashboard)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security)

## Supporting Pages

### "About the security posture dashboard \_|\_ GKE security \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-security-posture-dashboard](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-security-posture-dashboard)
- Source ID: `site-iam-reference`
- Final score: 276
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- GKE security posture dashboard pricing The pricing for the capabilities of the security posture dashboard is as follows, applicable to standalone GKE clusters and fleet GKE clusters: GKE security posture dashboard pricing Workload configuration auditing No extra charge Security bulletin surfacing No extra charge (Deprecated) Container OS vulnerability scanning No extra charge (Deprecated) Advanced vulnerability insights Uses Artifact Analysis pricing.
- Also, if you activate the Premium or Enterprise service tier of Security Command Center in your organization or project, then the security posture dashboard shows the following additional panes: Top threats : summarizes the top threats that affect your GKE workloads, grouped by severity and category.
- Integration with Security Command Center If you activate Security Command Center in your organization or project, then you see security posture dashboard findings in Security Command Center.
- Usage as part of a broad security strategy The security posture dashboard provides insights about your workload security posture at the runtime phase of the software delivery lifecycle.

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- To list the MCG managed firewall rules in your current environment, run the following command: gcloud compute firewall-rules list --format = "json" --filter = "name:gkemcg1-l7- " jq -r '.[] "\(.name): \(.sourceRanges // "No source range")"' awk -F: '{if ($2 /No source range ^\s $/) print "Rule "$1" has an EMPTY or MISSING source range."; else print "Rule "$1" has source range(s): "$2;}' To search logs for updates to MCG managed firewall configurations, use the Logs Explorer with the below query: protoPayload.serviceName="compute.googleapis.com" resource.type="gce firewall rule" protoPayload.resourceName= "projects/[^/]+/global/firewalls/gkemcg1-" -operation.last="true" To list the MCG managed firewall rules across your organization, run the following command to query Cloud Asset Inventory: gcloud asset search-all-resources --scope = 'organizations/ ' --asset-types = 'compute.googleapis.com/Firewall' --query 'name: //compute.googleapis.com/projects/ / /firewalls/gkemcg ' The following additional controls provide defense in depth against untrusted networks and can be considered to strengthen security posture: Use private GKE nodes to ensure your nodes only get private IPs.
- Built detection rules into Event Threat Detection (GKE CONTROL PLANE CREATE SENSITIVE BINDING) as part of Security Command Center.
- You can use the following tools to check inbound traffic to your resources running in Google Cloud: VPC Flow Logs for visibility into network throughput and performance Cloud Logging to search and analyze logging data and events from Google Cloud services and applications configured to send logs Firewall Rules Logging to audit, verify, and analyze the effects of your firewall rules Security Command Center for visibility into security findings indicating suspicious network activity Your application logs High GDC (VMware) Description Severity A security issue was discovered that impacts Multi-Cluster Gateway (MCG), a GKE feature that allows customers to load balance traffic across multiple clusters.
- The following sample manifest describes a BackendConfig resource that uses the v1 API: apiVersion: cloud.google.com/v1 kind: BackendConfig metadata: name: my-backend-config spec: securityPolicy: name: "ca-how-to-security-policy" If you have CI/CD systems or tools which regularly update BackendConfig resources, ensure that you are using the cloud.google.com/v1 API group in those systems Low GCP-2021-022 Published: 2021-09-23 GKE clusters on Description Severity A vulnerability has been discovered in the GKE Enterprise Identity Service (AIS) LDAP module of GKE on VMware versions 1.8 and 1.8.1 where a seed key used in generating keys is predictable.

### GKE Autopilot security measures \_|\_ GKE security \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security)
- Source ID: `site-iam-reference`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- We recommend that you do all of the following: Enroll your clusters in the GKE security posture dashboard to audit workloads for concerns such as problematic security configurations or vulnerabilities in your container operating system packages and get actionable mitigation information.
- You can manually enable the following capabilities: NET RAW for ping and SYS PTRACE for debugging: Add to Pod SecurityContext NET ADMIN for service meshes such as Istio: Specify --workload-policies=allow-net-admin in your cluster creation command.
- Monitor your security posture After setting up your clusters and deploying your workloads, you should set up and configure monitoring and logging so that you have observability over your cluster security posture.
- This page describes security measures for Autopilot in both of these situations by using the following terminology: Autopilot cluster The entire cluster uses Autopilot mode.

