---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.855Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "PodSecurity admission"
feature_slug: "podsecurity-admission"
latest_feature_date: "2022-01-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
keywords:
  - "podsecurity"
  - "admission"
  - "controller"
  - "enforces"
  - "pod"
  - "security"
  - "standards"
  - "pods"
---

# PodSecurity admission

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

PodSecurity is an admission controller that enforces Pod Security Standards on Pods using namespace labels; PodSecurity is an admission controller that enforces Pod Security Standards on Pods using namespace labels.

## Extended Definition

PodSecurity is an admission controller that enforces Pod Security Standards on Pods using namespace labels; PodSecurity is an admission controller that enforces Pod Security Standards on Pods using namespace labels.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)

## Supporting Pages

### GKE Autopilot security measures \_|\_ GKE security \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security)
- Source ID: `site-iam-reference`
- Final score: 226
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Pod-level security policy enforcement Autopilot supports enforcement mechanisms for Pod-level security policies such as the PodSecurity admission controller , Gatekeeper , or Policy Controller .
- To apply additional restrictions to comply with the full Restricted policy, you can optionally use the PodSecurity admission controller in specific namespaces.
- In Autopilot mode, GKE enforces Pod security constraints by using Kubernetes admission controllers.
- Additionally, the default admission policy includes many constraints from the Restricted level of the Pod Security Standards, but avoids restrictions that would block a majority of your workloads from running.

### Harden your cluster's security \_|\_ GKE security \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster)
- Source ID: `site-docs-reference-2`
- Final score: 180
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- PodSecurity admission controller : enforce the Kubernetes Pod Security Standards by applying predefined policies to entire clusters or to specific namespaces.
- Enforce policies during workload admission Recommended : use an admission controller like Policy Controller or the PodSecurity admission controller to review incoming API requests and enforce policies on those requests.
- For cluster that were originally created on an earlier GKE version, enable the admission controller: gcloud container clusters update CLUSTER NAME \ --location = LOCATION \ --no-enable-service-externalips To enforce this recommendation in your organization, use the constraints/container.managed.denyServiceExternalIPs managed Organization Policy constraint .
- Best practices Leave legacy client authentication methods disabled Leave ABAC disabled Leave the DenyServiceExternalIPs admission controller enabled Leave legacy client authentication methods disabled Recommended : disable legacy API server authentication methods like static certificates and passwords.

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- This and other powerful capabilities should be blocked by default through Anthos Policy Controller or by updating your Pod specs: Drop the CAP NET RAW capability from containers with one of the following methods: Enforce blocking these capabilities with PodSecurityPolicy , for example: Require dropping CAP NET RAW with a PSP apiversion: extensions/v1beta1 kind: PodSecurityPolicy metadata: name: no-cap-net-raw spec: requiredDropCapabilities: -NET RAW ...
- This and other powerful capabilities should be blocked by default through Anthos Policy Controller or by updating your Pod specs: Drop the CAP NET RAW capability from containers with one of the following methods: Enforce blocking these capabilities with PodSecurityPolicy , for example: Require dropping CAP NET RAW with a PSP apiversion: extensions/v1beta1 kind: PodSecurityPolicy metadata: name: no-cap-net-raw spec: requiredDropCapabilities: -NET RAW ...
- This and other powerful capabilities should be blocked by default through PodSecurityPolicy or Anthos Policy Controller : Drop the CAP NET RAW capability from containers with one of the following methods: Enforce blocking these capabilities with PodSecurityPolicy , for example: Require dropping CAP NET RAW with a PSP apiversion: extensions/v1beta1 kind: PodSecurityPolicy metadata: name: no-cap-net-raw spec: requiredDropCapabilities: -NET RAW ...
- This and other powerful capabilities should be blocked by default through PodSecurityPolicy or Policy Controller: Drop the CAP NET RAW capability from containers with one of the following methods: Enforce blocking these capabilities with PodSecurityPolicy , for example: Require dropping CAP NET RAW with a PSP apiversion: extensions/v1beta1 kind: PodSecurityPolicy metadata: name: no-cap-net-raw spec: requiredDropCapabilities: -NET RAW ...

