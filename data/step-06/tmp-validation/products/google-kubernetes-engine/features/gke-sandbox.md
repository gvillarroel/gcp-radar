---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.447Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "GKE Sandbox"
feature_slug: "gke-sandbox"
latest_feature_date: "2020-01-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/sandbox-pods"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security"
keywords:
  - "protects"
  - "sandbox"
  - "containers"
  - "kernel"
  - "host"
  - "when"
  - "nodes"
---

# GKE Sandbox

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE Sandbox protects the host kernel on nodes when containers run untrusted code.

## Extended Definition

GKE Sandbox protects the host kernel on nodes when containers run untrusted code.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/sandbox-pods](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/sandbox-pods)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security)

## Supporting Pages

### GKE Sandbox \_|\_ GKE security \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/sandbox-pods](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/sandbox-pods)
- Source ID: `site-iam-reference`
- Final score: 258
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Autopilot Standard This document describes how GKE Sandbox protects the host kernel on your nodes when containers in the Pod execute unknown or untrusted code.
- Direct access to hardware or virtualization Applies to Autopilot and Standard clusters If your workload needs any of the following, GKE Sandbox might not be a good fit because it prevents direct access to the host kernel on the node: Direct access to the node's hardware Kernel-level virtualization features Privileged containers What's next Configure GKE Sandbox .
- Overview GKE Sandbox provides an extra layer of security to prevent untrusted code from affecting the host kernel on your cluster nodes.
- System calls Applies to Autopilot and Standard clusters Workloads that generate a large volume of low-overhead system calls, such as a large number of small I/O operations, may require more system resources when running in a sandbox, so you may need to use more powerful nodes or add additional nodes to your cluster.

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- The patch mitigates the following vulnerability: The vulnerability CVE-2020-14386 , which allows containers with CAP NET RAW to write 1 to 10 bytes of kernel memory, and possibly escape the container and obtain root privileges on the host node.
- The patch mitigates the following vulnerability: The vulnerability CVE-2020-14386 , which allows containers with CAP NET RAW to write 1 to 10 bytes of kernel memory, and possibly escape the container and obtain root privileges on the host node.
- The patch mitigates the following vulnerability: The vulnerability CVE-2020-14386 , which allows containers with CAP NET RAW to write 1 to 10 bytes of kernel memory, and possibly escape the container and obtain root privileges on the host node.
- The following versions of GKE or later have been updated to address the providerID issue: 1.33.1-gke.1386000 1.32.4-gke.1533000 1.31.9-gke.1119000 1.30.12-gke.1208000 Optionally, if you cannot upgrade, implement the following validating admission policy on your cluster to mitigate the providerID issue: apiVersion : admissionregistration . k8s . io / v1 kind : ValidatingAdmissionPolicy metadata : name : validate - node - providerid spec : failurePolicy : Fail matchConstraints : resourceRules : - apiGroups : [ "" ] apiVersions : [ "v1" ] operations : [ "CREATE", "UPDATE" ] resources : [ "nodes" ] matchConditions : - name : "has-providerid" expression : "has(object.spec.providerID)" validations : - expression : "object.spec.providerID == '' object.spec.providerID.endsWith('/' + object.metadata.name)" message : "node.spec.providerID must match the node name" --- apiVersion : admissionregistration . k8s . io / v1 kind : ValidatingAdmissionPolicyBinding metadata : name : validate - node - providerid - binding spec : policyName : validate - node - providerid validationActions : [ Deny ] Use node restricted labels when isolating workloads to specific nodes as a security control If you are using labels for node isolation, as described in Kubernetes documentation , use node restricted labels (for example, labels of the form node-restriction.kubernetes.io/example-constraint ) in node affinity and node selector terms used for workload isolation.

### GKE Autopilot security measures \_|\_ GKE security \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security)
- Source ID: `site-iam-reference`
- Final score: 180
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Since the shared kernel represents a single security boundary, we recommend that if you require strong isolation, such as high-risk or untrusted workloads, run your workloads on GKE Sandbox Pods to provide multi-layer security protection.
- The following table describes some of the security configurations that Autopilot applies for you: Configuration Description Host options No hostNetwork , because GKE manages your nodes.
- HostPath volumes Partially complies Partially complies Autopilot allows containers to request read-only access to /var/log for debugging, but denies all other read or write access.
- Linux capabilities and kernel security Autopilot applies the RuntimeDefault seccomp profile to all Pods in the cluster unless the Pods use GKE Sandbox .

