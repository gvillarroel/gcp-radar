---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.845Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "PodSecurityPolicy API v1beta1"
feature_slug: "podsecuritypolicy-api-v1beta1"
latest_feature_date: "2022-05-26"
deprecation_date: "2022-05-26"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging-container-security"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-security-posture-dashboard"
keywords:
  - "podsecuritypolicy"
  - "v1beta1"
  - "kubernetes"
  - "beta"
  - "controlling"
  - "pod"
  - "security"
  - "settings"
---

# PodSecurityPolicy API v1beta1

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

PodSecurityPolicy API v1beta1 is a Kubernetes beta API for controlling pod security settings; PodSecurityPolicy API v1beta1 is a Kubernetes beta API for controlling pod security settings; deprecated on 2022-05-26.

## Extended Definition

PodSecurityPolicy API v1beta1 is a Kubernetes beta API for controlling pod security settings; PodSecurityPolicy API v1beta1 is a Kubernetes beta API for controlling pod security settings; deprecated on 2022-05-26.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging-container-security](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging-container-security)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-security-posture-dashboard](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-security-posture-dashboard)

## Supporting Pages

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 155
- Re-rank relevance: N/A

Evidence snippets:
- The following upcoming GKE on AWS versions or newer will include the fix for this vulnerability, and this bulletin will be updated when they are available: 1.5.0-gke.6 1.4.3-gke.7 Drop the CAP NET RAW capability from containers with one of the following methods: Enforce blocking these capabilities with PodSecurityPolicy , for example: Require dropping CAP NET RAW with a PSP apiversion: extensions/v1beta1 kind: PodSecurityPolicy metadata: name: no-cap-net-raw spec: requiredDropCapabilities: -NET RAW ...
- This and other powerful capabilities should be blocked by default through Anthos Policy Controller or by updating your Pod specs: Drop the CAP NET RAW capability from containers with one of the following methods: Enforce blocking these capabilities with PodSecurityPolicy , for example: Require dropping CAP NET RAW with a PSP apiversion: extensions/v1beta1 kind: PodSecurityPolicy metadata: name: no-cap-net-raw spec: requiredDropCapabilities: -NET RAW ...
- This and other powerful capabilities should be blocked by default through Anthos Policy Controller or by updating your Pod specs: Drop the CAP NET RAW capability from containers with one of the following methods: Enforce blocking these capabilities with PodSecurityPolicy , for example: Require dropping CAP NET RAW with a PSP apiversion: extensions/v1beta1 kind: PodSecurityPolicy metadata: name: no-cap-net-raw spec: requiredDropCapabilities: -NET RAW ...
- This and other powerful capabilities should be blocked by default through PodSecurityPolicy or Anthos Policy Controller : Drop the CAP NET RAW capability from containers with one of the following methods: Enforce blocking these capabilities with PodSecurityPolicy , for example: Require dropping CAP NET RAW with a PSP apiversion: extensions/v1beta1 kind: PodSecurityPolicy metadata: name: no-cap-net-raw spec: requiredDropCapabilities: -NET RAW ...

### "Container Security API audit logging \_|\_ GKE security \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging-container-security](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging-container-security)
- Source ID: `site-iam-reference`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- Permission type Methods DATA READ google.cloud.containersecurity.v1beta.ContainerSecurity.ListFindings google.cloud.containersecurity.v1beta.ContainerSecurity.SearchClusterFindingSummaries API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Container Security API. google.cloud.containersecurity.v1beta.ContainerSecurity The following audit logs are associated with methods belonging to google.cloud.containersecurity.v1beta.ContainerSecurity .
- Filter for this method : protoPayload.methodName="google.cloud.containersecurity.v1beta.ContainerSecurity.ListFindings" SearchClusterFindingSummaries Method : google.cloud.containersecurity.v1beta.ContainerSecurity.SearchClusterFindingSummaries Audit log type : Data access Permissions : containersecurity.clusterSummaries.list - DATA READ Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="google.cloud.containersecurity.v1beta.ContainerSecurity.SearchClusterFindingSummaries" Methods that don't produce audit logs A method might not produce audit logs for one or more of the following reasons: It is a high volume method involving significant log generation and storage costs.
- ListFindings Method : google.cloud.containersecurity.v1beta.ContainerSecurity.ListFindings Audit log type : Data access Permissions : containersecurity.findings.list - DATA READ Method is a long-running or streaming operation : No.

### "About the security posture dashboard \_|\_ GKE security \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-security-posture-dashboard](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-security-posture-dashboard)
- Source ID: `site-iam-reference`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- Cluster-specific feature enablement The GKE-specific capabilities in the security posture dashboard are categorized as follows: Kubernetes security posture : The security posture of Kubernetes objects and resources in the cluster, such as Pod specifications.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) GKE security Send feedback About the security posture dashboard Stay organized with collections Save and categorize content based on your preferences.
- The following table describes the cluster-specific features: Feature name Availability Included capabilities Kubernetes security posture - standard tier Requires GKE version 1.27 or later.
- Settings The Settings tab lets you configure cluster-specific security posture features, like workload configuration auditing, on eligible GKE clusters in your project or fleet.

