---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.982Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "DaemonSet API"
feature_slug: "daemonset-api"
latest_feature_date: "2020-02-25"
deprecation_date: "2020-02-25"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
keywords:
  - "daemonset"
  - "deprecated"
  - "beta"
  - "versions"
  - "no"
  - "longer"
  - "served"
  - "gke"
---

# DaemonSet API

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

The deprecated DaemonSet beta API versions are no longer served in GKE v1.16 and should be migrated to apps/v1; deprecated on 2020-02-25.

## Extended Definition

The deprecated DaemonSet beta API versions are no longer served in GKE v1.16 and should be migrated to apps/v1; deprecated on 2020-02-25.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)

## Supporting Pages

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-api-reference`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- Enable/Disable Security Posture API features for the cluster. controlPlaneEndpointsConfig object ( ControlPlaneEndpointsConfig ) Configuration for all cluster's control plane endpoints. enableK8sBetaApis object ( K8sBetaAPIConfig ) Beta APIs Config enterpriseConfig (deprecated) object ( EnterpriseConfig ) This item is deprecated!
- Deprecated: This flag is no longer required as of GKE node version 1.33.2-gke.4655000, unless you are connecting to a Lustre instance that has the gke-support-enabled flag. disableMultiNic boolean When set to true, this disables multi-NIC support for the Lustre CSI driver.
- Warning: basic authentication is deprecated, and will be removed in GKE control plane versions 1.19 and newer.
- Warning: basic authentication is deprecated, and will be removed in GKE control plane versions 1.19 and newer.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- Source ID: `site-api-reference`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- Enable/Disable Security Posture API features for the cluster. controlPlaneEndpointsConfig object ( ControlPlaneEndpointsConfig ) Configuration for all cluster's control plane endpoints. enableK8sBetaApis object ( K8sBetaAPIConfig ) Beta APIs Config enterpriseConfig (deprecated) object ( EnterpriseConfig ) This item is deprecated!
- Deprecated: This flag is no longer required as of GKE node version 1.33.2-gke.4655000, unless you are connecting to a Lustre instance that has the gke-support-enabled flag. disableMultiNic boolean When set to true, this disables multi-NIC support for the Lustre CSI driver.
- Warning: basic authentication is deprecated, and will be removed in GKE control plane versions 1.19 and newer.
- Warning: basic authentication is deprecated, and will be removed in GKE control plane versions 1.19 and newer.

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- The following upcoming GKE on AWS versions or newer will include the fix for this vulnerability, and this bulletin will be updated when they are available: 1.5.0-gke.6 1.4.3-gke.7 Drop the CAP NET RAW capability from containers with one of the following methods: Enforce blocking these capabilities with PodSecurityPolicy , for example: Require dropping CAP NET RAW with a PSP apiversion: extensions/v1beta1 kind: PodSecurityPolicy metadata: name: no-cap-net-raw spec: requiredDropCapabilities: -NET RAW ...
- Upgrade your GKE control plane to one of the following updated versions that patches this issue and allows v1beta1 BackendConfig resources to be used safely: 1.21.1-gke.2700 and later 1.20.9-gke.900 and later 1.19.14-gke.300 and later 1.18.20-gke.5100 and later This issue can also be prevented by avoiding the deployment of v1beta1 BackendConfig resources.
- If you are using Istio on GKE 1.4: Istio on GKE 1.4 releases are no longer supported by Istio and we do not backport CVE fixes to these versions.
- The following versions of GKE or later have been updated to address the providerID issue: 1.33.1-gke.1386000 1.32.4-gke.1533000 1.31.9-gke.1119000 1.30.12-gke.1208000 Optionally, if you cannot upgrade, implement the following validating admission policy on your cluster to mitigate the providerID issue: apiVersion : admissionregistration . k8s . io / v1 kind : ValidatingAdmissionPolicy metadata : name : validate - node - providerid spec : failurePolicy : Fail matchConstraints : resourceRules : - apiGroups : [ "" ] apiVersions : [ "v1" ] operations : [ "CREATE", "UPDATE" ] resources : [ "nodes" ] matchConditions : - name : "has-providerid" expression : "has(object.spec.providerID)" validations : - expression : "object.spec.providerID == '' object.spec.providerID.endsWith('/' + object.metadata.name)" message : "node.spec.providerID must match the node name" --- apiVersion : admissionregistration . k8s . io / v1 kind : ValidatingAdmissionPolicyBinding metadata : name : validate - node - providerid - binding spec : policyName : validate - node - providerid validationActions : [ Deny ] Use node restricted labels when isolating workloads to specific nodes as a security control If you are using labels for node isolation, as described in Kubernetes documentation , use node restricted labels (for example, labels of the form node-restriction.kubernetes.io/example-constraint ) in node affinity and node selector terms used for workload isolation.

