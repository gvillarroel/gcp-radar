---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.286Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "PodSecurityPolicy"
feature_slug: "podsecuritypolicy"
latest_feature_date: "2022-09-14"
deprecation_date: "2022-09-14"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-security-posture-dashboard"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security"
keywords:
  - "governing"
  - "podsecuritypolicy"
  - "settings"
  - "security"
  - "deprecated"
  - "policy"
---

# PodSecurityPolicy

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

PodSecurityPolicy is a Kubernetes policy API for governing pod security settings; PodSecurityPolicy is a Kubernetes policy API for governing pod security settings; deprecated on 2022-09-14.

## Extended Definition

PodSecurityPolicy is a Kubernetes policy API for governing pod security settings; PodSecurityPolicy is a Kubernetes policy API for governing pod security settings; deprecated on 2022-09-14.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-security-posture-dashboard](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-security-posture-dashboard)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security)

## Supporting Pages

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- The following upcoming GKE on AWS versions or newer will include the fix for this vulnerability, and this bulletin will be updated when they are available: 1.5.0-gke.6 1.4.3-gke.7 Drop the CAP NET RAW capability from containers with one of the following methods: Enforce blocking these capabilities with PodSecurityPolicy , for example: Require dropping CAP NET RAW with a PSP apiversion: extensions/v1beta1 kind: PodSecurityPolicy metadata: name: no-cap-net-raw spec: requiredDropCapabilities: -NET RAW ...
- This and other powerful capabilities should be blocked by default through Anthos Policy Controller or by updating your Pod specs: Drop the CAP NET RAW capability from containers with one of the following methods: Enforce blocking these capabilities with PodSecurityPolicy , for example: Require dropping CAP NET RAW with a PSP apiversion: extensions/v1beta1 kind: PodSecurityPolicy metadata: name: no-cap-net-raw spec: requiredDropCapabilities: -NET RAW ...
- This and other powerful capabilities should be blocked by default through Anthos Policy Controller or by updating your Pod specs: Drop the CAP NET RAW capability from containers with one of the following methods: Enforce blocking these capabilities with PodSecurityPolicy , for example: Require dropping CAP NET RAW with a PSP apiversion: extensions/v1beta1 kind: PodSecurityPolicy metadata: name: no-cap-net-raw spec: requiredDropCapabilities: -NET RAW ...
- This and other powerful capabilities should be blocked by default through PodSecurityPolicy or Anthos Policy Controller : Drop the CAP NET RAW capability from containers with one of the following methods: Enforce blocking these capabilities with PodSecurityPolicy , for example: Require dropping CAP NET RAW with a PSP apiversion: extensions/v1beta1 kind: PodSecurityPolicy metadata: name: no-cap-net-raw spec: requiredDropCapabilities: -NET RAW ...

### "About the security posture dashboard \_|\_ GKE security \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-security-posture-dashboard](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-security-posture-dashboard)
- Source ID: `site-iam-reference`
- Final score: 122
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- GKE security posture dashboard pricing The pricing for the capabilities of the security posture dashboard is as follows, applicable to standalone GKE clusters and fleet GKE clusters: GKE security posture dashboard pricing Workload configuration auditing No extra charge Security bulletin surfacing No extra charge (Deprecated) Container OS vulnerability scanning No extra charge (Deprecated) Advanced vulnerability insights Uses Artifact Analysis pricing.
- Settings The Settings tab lets you configure cluster-specific security posture features, like workload configuration auditing, on eligible GKE clusters in your project or fleet.
- The security posture dashboard integrates with products such as Cloud Logging, and Policy Controller to improve your visibility into your security posture.
- Settings : manage the security posture feature configuration for individual clusters or for fleets.

### GKE Autopilot security measures \_|\_ GKE security \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security)
- Source ID: `site-iam-reference`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- For additional protection, as of 11 July 2023, new 1.27+ clusters also have a policy rule to enforce the securityContext settings and reject Pods that use unsafe sysctls.
- Industry surveys show that 76% of containers run as root, so Autopilot allows running as root to enable most workloads Built-in security configurations In addition to the Pod Security Standards, Google applies many security settings in Autopilot based on industry best practices and our expertise.
- Additionally, the default admission policy includes many constraints from the Restricted level of the Pod Security Standards, but avoids restrictions that would block a majority of your workloads from running.
- Pod-level security policy enforcement Autopilot supports enforcement mechanisms for Pod-level security policies such as the PodSecurity admission controller , Gatekeeper , or Policy Controller .

