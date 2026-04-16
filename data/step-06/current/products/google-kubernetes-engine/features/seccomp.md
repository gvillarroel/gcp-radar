---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.937Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Seccomp"
feature_slug: "seccomp"
latest_feature_date: "2021-04-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/seccomp-in-gke"
keywords:
  - "seccomp"
  - "has"
  - "graduated"
  - "availability"
  - "pods"
  - "individual"
  - "containers"
---

# Seccomp

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Seccomp support has graduated to General Availability for Pods and individual containers.

## Extended Definition

Seccomp support has graduated to General Availability for Pods and individual containers.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/seccomp-in-gke](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/seccomp-in-gke)

## Supporting Pages

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- Unrelated fields omitted Or by using Policy Controller or Gatekeeper with this constraint template and applying it, for example: Dropping CAP NET RAW with Gatekeeper (requires the K8sPSPCapabilities template) apiversion: constraints.gatekeeper.sh/v1beta1 kind: K8sPSPCapabilities metadata: name: forbid-cap-net-raw spec: match: kinds: - apiGroups: [""] kinds: ["Pod"] namespaces: #List of namespaces to enforce this constraint on - default If running gatekeeper >= v3.1.0-beta.5, you can exclude namespaces rather than including them above. excludedNamespaces: - kube-system parameters: requiredDropCapabilities: - "NET RAW" Or by updating your Pod specs: Dropping CAP NET RAW from a Pod: apiVersion: v1 kind: Pod metadata: name: no-cap-net-raw spec: containers: -name: my-container ... securityContext: capabilities: drop: -NET RAW Note: GKE Sandbox pods already disable CAP NET RAW by default and do not require the changes above.
- Unrelated fields omitted Or by using Policy Controller or Gatekeeper with this constraint template and applying it, for example: Dropping CAP NET RAW with Gatekeeper (requires the K8sPSPCapabilities template) apiversion: constraints.gatekeeper.sh/v1beta1 kind: K8sPSPCapabilities metadata: name: forbid-cap-net-raw spec: match: kinds: - apiGroups: [""] kinds: ["Pod"] namespaces: #List of namespaces to enforce this constraint on - default If running gatekeeper >= v3.1.0-beta.5, you can exclude namespaces rather than including them above. excludedNamespaces: - kube-system parameters: requiredDropCapabilities: - "NET RAW" Or by updating your Pod specs: Dropping CAP NET RAW from a Pod: apiVersion: v1 kind: Pod metadata: name: no-cap-net-raw spec: containers: -name: my-container ... securityContext: capabilities: drop: -NET RAW Note: GKE Sandbox pods already disable CAP NET RAW by default and do not require the changes above.
- Check if your GKE clusters are using ingress-nginx by using one of the following commands: Check an individual cluster: kubectl get pods --all-namespaces --selector app.kubernetes.io/name = ingress-nginx Check multiple clusters at once using a Cloud Asset Inventory resource search query : gcloud asset search-all-resources \ --scope = 'organizations/ ORGANIZATION ID ' \ --asset-types = 'k8s.io/Pod' \ --query = 'labels."app.kubernetes.io/name"="ingress-nginx"' Replace ORGANIZATION ID with your organization resource ID.
- The following upcoming GKE on AWS versions or newer will include the fix for this vulnerability, and this bulletin will be updated when they are available: 1.5.0-gke.6 1.4.3-gke.7 Drop the CAP NET RAW capability from containers with one of the following methods: Enforce blocking these capabilities with PodSecurityPolicy , for example: Require dropping CAP NET RAW with a PSP apiversion: extensions/v1beta1 kind: PodSecurityPolicy metadata: name: no-cap-net-raw spec: requiredDropCapabilities: -NET RAW ...

### GKE Autopilot security measures \_|\_ GKE security \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security)
- Source ID: `site-iam-reference`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- Linux capabilities and kernel security Autopilot applies the RuntimeDefault seccomp profile to all Pods in the cluster unless the Pods use GKE Sandbox .
- Industry surveys show that 76% of containers run as root, so Autopilot allows running as root to enable most workloads Built-in security configurations In addition to the Pod Security Standards, Google applies many security settings in Autopilot based on industry best practices and our expertise.
- You can still connect remotely to your running containers using the Kubernetes exec functionality to execute commands in your containers for debugging, including connecting to an interactive shell, for example with kubectl exec -it deploy/YOUR DEPLOYMENT -- sh .
- Since the shared kernel represents a single security boundary, we recommend that if you require strong isolation, such as high-risk or untrusted workloads, run your workloads on GKE Sandbox Pods to provide multi-layer security protection.

### About seccomp in GKE \_|\_ GKE security \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/seccomp-in-gke](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/seccomp-in-gke)
- Source ID: `site-iam-reference`
- Final score: 97
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following example manifest sets the seccomp profile to the runtime default profile: apiVersion : apps/v1 kind : Deployment metadata : name : my-deployment labels : app : default-pod spec : replicas : 3 selector : matchLabels : app : default-pod template : metadata : labels : app : default-pod spec : securityContext : seccompProfile : type : RuntimeDefault containers : - name : seccomp-test image : nginx Important: You can't apply a seccomp profile to containers that run in Privileged mode .
- Use a custom seccomp profile in Standard clusters If the runtime default seccomp profile is too restrictive for your application (or not restrictive enough), you can apply a custom seccomp profile to Pods in Standard clusters.
- The default seccomp profile blocks syscalls that can be used to bypass container isolation boundaries and allow privileged access to the node or to other containers.
- What's next Use PodSecurityAdmission to enforce pre-defined Pod-level policies Use Organization Policy Service to set project or organization-level policies Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

