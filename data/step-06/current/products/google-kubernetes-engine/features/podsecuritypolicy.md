---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.827Z"
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
  - "podsecuritypolicy"
  - "kubernetes"
  - "policy"
  - "governing"
  - "pod"
  - "security"
  - "settings"
  - "deprecated"
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
- The following versions of GKE or later have been updated to address the providerID issue: 1.33.1-gke.1386000 1.32.4-gke.1533000 1.31.9-gke.1119000 1.30.12-gke.1208000 Optionally, if you cannot upgrade, implement the following validating admission policy on your cluster to mitigate the providerID issue: apiVersion : admissionregistration . k8s . io / v1 kind : ValidatingAdmissionPolicy metadata : name : validate - node - providerid spec : failurePolicy : Fail matchConstraints : resourceRules : - apiGroups : [ "" ] apiVersions : [ "v1" ] operations : [ "CREATE", "UPDATE" ] resources : [ "nodes" ] matchConditions : - name : "has-providerid" expression : "has(object.spec.providerID)" validations : - expression : "object.spec.providerID == '' object.spec.providerID.endsWith('/' + object.metadata.name)" message : "node.spec.providerID must match the node name" --- apiVersion : admissionregistration . k8s . io / v1 kind : ValidatingAdmissionPolicyBinding metadata : name : validate - node - providerid - binding spec : policyName : validate - node - providerid validationActions : [ Deny ] Use node restricted labels when isolating workloads to specific nodes as a security control If you are using labels for node isolation, as described in Kubernetes documentation , use node restricted labels (for example, labels of the form node-restriction.kubernetes.io/example-constraint ) in node affinity and node selector terms used for workload isolation.
- No action is needed None GCP-2023-014 Published: 2023-06-15 Updated: 2023-08-11 Reference: CVE-2023-2727 , CVE-2023-2728 2023-08-11 Update: Added patch versions for GKE on VMware, GKE on AWS, GKE on Azure, and GKE on Bare Metal GKE Description Severity Two new security issues were discovered in Kubernetes where users may be able to launch containers that bypass policy restrictions when using ephemeral containers and either ImagePolicyWebhook (CVE-2023-2727) or the ServiceAccount admission plugin (CVE-2023-2728).
- The following upcoming GKE on AWS versions or newer will include the fix for this vulnerability, and this bulletin will be updated when they are available: 1.5.0-gke.6 1.4.3-gke.7 Drop the CAP NET RAW capability from containers with one of the following methods: Enforce blocking these capabilities with PodSecurityPolicy , for example: Require dropping CAP NET RAW with a PSP apiversion: extensions/v1beta1 kind: PodSecurityPolicy metadata: name: no-cap-net-raw spec: requiredDropCapabilities: -NET RAW ...
- This and other powerful capabilities should be blocked by default through Anthos Policy Controller or by updating your Pod specs: Drop the CAP NET RAW capability from containers with one of the following methods: Enforce blocking these capabilities with PodSecurityPolicy , for example: Require dropping CAP NET RAW with a PSP apiversion: extensions/v1beta1 kind: PodSecurityPolicy metadata: name: no-cap-net-raw spec: requiredDropCapabilities: -NET RAW ...

### "About the security posture dashboard \_|\_ GKE security \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-security-posture-dashboard](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-security-posture-dashboard)
- Source ID: `site-iam-reference`
- Final score: 122
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- GKE security posture dashboard pricing The pricing for the capabilities of the security posture dashboard is as follows, applicable to standalone GKE clusters and fleet GKE clusters: GKE security posture dashboard pricing Workload configuration auditing No extra charge Security bulletin surfacing No extra charge (Deprecated) Container OS vulnerability scanning No extra charge (Deprecated) Advanced vulnerability insights Uses Artifact Analysis pricing.
- Cluster-specific feature enablement The GKE-specific capabilities in the security posture dashboard are categorized as follows: Kubernetes security posture : The security posture of Kubernetes objects and resources in the cluster, such as Pod specifications.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) GKE security Send feedback About the security posture dashboard Stay organized with collections Save and categorize content based on your preferences.
- The following table describes the cluster-specific features: Feature name Availability Included capabilities Kubernetes security posture - standard tier Requires GKE version 1.27 or later.

### GKE Autopilot security measures \_|\_ GKE security \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security)
- Source ID: `site-iam-reference`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- For additional protection, as of 11 July 2023, new 1.27+ clusters also have a policy rule to enforce the securityContext settings and reject Pods that use unsafe sysctls.
- Autopilot This page describes the security features, configurations, and settings in Google Kubernetes Engine (GKE) Autopilot mode.
- Industry surveys show that 76% of containers run as root, so Autopilot allows running as root to enable most workloads Built-in security configurations In addition to the Pod Security Standards, Google applies many security settings in Autopilot based on industry best practices and our expertise.
- As a security best practice, we recommend that you avoid granting powerful GKE or Kubernetes privileges widely and instead use namespace administrator delegation wherever possible as described in our multi-tenancy guidance .

