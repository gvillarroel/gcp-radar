---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.137Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Autopilot privileged workloads"
feature_slug: "autopilot-privileged-workloads"
latest_feature_date: "2026-03-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-autopilot-privileged-workloads"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
keywords:
  - "privileged"
  - "administrators"
  - "which"
  - "workloads"
  - "autopilot"
  - "control"
  - "lets"
---

# Autopilot privileged workloads

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE Autopilot lets administrators control which privileged partner workloads can run and lets approved customers use custom allowlists for their own privileged workloads.

## Extended Definition

GKE Autopilot lets administrators control which privileged partner workloads can run and lets approved customers use custom allowlists for their own privileged workloads.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-autopilot-privileged-workloads](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-autopilot-privileged-workloads)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)

## Supporting Pages

### "About privileged workload admission in Autopilot mode \_|\_ Google Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-autopilot-privileged-workloads](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-autopilot-privileged-workloads)
- Source ID: `site-docs-reference-2`
- Final score: 221
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Autopilot You can control which privileged workloads can run in Google Kubernetes Engine (GKE) Autopilot mode by using allowlists and policies.
- For more information about the allowlist paths for these workloads, see the following pages: Autopilot partner workloads Privileged open source workloads with Autopilot support SELECTOR : the name of a specific file or the character, which selects every file in that directory.
- This document describes the default constraints that Autopilot enforces on workloads, the types of privileged workloads that you can run in Autopilot mode, and the methods of controlling privileged workload admission.
- You might want to control privileged workloads in Autopilot mode in situations like the following: You run workloads in Autopilot mode in Standard clusters and you want privileged workloads to run on those nodes.

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 171
- Re-rank relevance: N/A

Evidence snippets:
- Host access using third party policy exemptions In order to allow Google Cloud to offer full management of nodes, and a Pod-level SLA, GKE Autopilot restricts some highly privileged Kubernetes primitives to limit workloads from having low-level access to the node VM.
- The following versions of GKE or later have been updated to address the providerID issue: 1.33.1-gke.1386000 1.32.4-gke.1533000 1.31.9-gke.1119000 1.30.12-gke.1208000 Optionally, if you cannot upgrade, implement the following validating admission policy on your cluster to mitigate the providerID issue: apiVersion : admissionregistration . k8s . io / v1 kind : ValidatingAdmissionPolicy metadata : name : validate - node - providerid spec : failurePolicy : Fail matchConstraints : resourceRules : - apiGroups : [ "" ] apiVersions : [ "v1" ] operations : [ "CREATE", "UPDATE" ] resources : [ "nodes" ] matchConditions : - name : "has-providerid" expression : "has(object.spec.providerID)" validations : - expression : "object.spec.providerID == '' object.spec.providerID.endsWith('/' + object.metadata.name)" message : "node.spec.providerID must match the node name" --- apiVersion : admissionregistration . k8s . io / v1 kind : ValidatingAdmissionPolicyBinding metadata : name : validate - node - providerid - binding spec : policyName : validate - node - providerid validationActions : [ Deny ] Use node restricted labels when isolating workloads to specific nodes as a security control If you are using labels for node isolation, as described in Kubernetes documentation , use node restricted labels (for example, labels of the form node-restriction.kubernetes.io/example-constraint ) in node affinity and node selector terms used for workload isolation.
- The patch mitigate the following vulnerability: The vulnerability described in Kubernetes issue 91507 CAP NET RAW capability (which is included in the default container capability set) to maliciously configure the IPv6 stack on the node and redirect node traffic to the attacker controlled container.
- The patch mitigate the following vulnerability: The vulnerability described in Kubernetes issue 91507 CAP NET RAW capability (which is included in the default container capability set) to maliciously configure the IPv6 stack on the node and redirect node traffic to the attacker controlled container.

### GKE Autopilot security measures \_|\_ GKE security \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security)
- Source ID: `site-iam-reference`
- Final score: 171
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Harden clusters and workloads If you have specialized isolation or hardening requirements beyond the pre-configured Autopilot measures, consider the following resources: Use case Resources Restrict public access to your cluster endpoint Configure the network isolation of your Autopilot clusters and disable the external endpoint of the cluster control plane.
- You can optionally apply all of these configurations in your Standard cluster by enabling every Autopilot policy for that cluster , which forces all of the workloads in the Standard cluster to use Autopilot mode.
- Because user impersonation restrictions happen in the control plane, this constraint isn't enforced in Standard clusters, even when workloads use an Autopilot ComputeClass.
- Because admission control happens in the cluster control plane, this constraint isn't enforced in Standard clusters, even when workloads use an Autopilot ComputeClass.

