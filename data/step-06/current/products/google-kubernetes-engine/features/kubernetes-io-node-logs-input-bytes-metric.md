---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.831Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "kubernetes.io/node/logs/input_bytes metric"
feature_slug: "kubernetes-io-node-logs-input-bytes-metric"
latest_feature_date: "2022-09-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters"
keywords:
  - "kubernetes"
  - "io"
  - "node"
  - "logs"
  - "input"
  - "bytes"
  - "metric"
  - "gke"
---

# kubernetes.io/node/logs/input_bytes metric

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE exports the kubernetes.io/node/logs/input_bytes metric to show how many log bytes a node generates.

## Extended Definition

GKE exports the kubernetes.io/node/logs/input_bytes metric to show how many log bytes a node generates.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)

## Supporting Pages

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 283
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Determine if you have Windows Server nodes in use on your clusters: kubectl get nodes -l kubernetes.io/os=windows Check audit logs for evidence of exploitation.
- Determine if you have Windows Server nodes in use on your clusters: kubectl get nodes -l kubernetes.io/os=windows Check audit logs for evidence of exploitation.
- The following versions of GKE or later have been updated to address the providerID issue: 1.33.1-gke.1386000 1.32.4-gke.1533000 1.31.9-gke.1119000 1.30.12-gke.1208000 Optionally, if you cannot upgrade, implement the following validating admission policy on your cluster to mitigate the providerID issue: apiVersion : admissionregistration . k8s . io / v1 kind : ValidatingAdmissionPolicy metadata : name : validate - node - providerid spec : failurePolicy : Fail matchConstraints : resourceRules : - apiGroups : [ "" ] apiVersions : [ "v1" ] operations : [ "CREATE", "UPDATE" ] resources : [ "nodes" ] matchConditions : - name : "has-providerid" expression : "has(object.spec.providerID)" validations : - expression : "object.spec.providerID == '' object.spec.providerID.endsWith('/' + object.metadata.name)" message : "node.spec.providerID must match the node name" --- apiVersion : admissionregistration . k8s . io / v1 kind : ValidatingAdmissionPolicyBinding metadata : name : validate - node - providerid - binding spec : policyName : validate - node - providerid validationActions : [ Deny ] Use node restricted labels when isolating workloads to specific nodes as a security control If you are using labels for node isolation, as described in Kubernetes documentation , use node restricted labels (for example, labels of the form node-restriction.kubernetes.io/example-constraint ) in node affinity and node selector terms used for workload isolation.
- When implementing node isolation as a security control, you must use labels and label selectors with the node-restriction.kubernetes.io/ prefix to prevent compromised nodes from manipulating scheduling behavior.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-api-reference`
- Final score: 271
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals EvictionMinimumReclaim JSON representation { "memoryAvailable" : string , "nodefsAvailable" : string , "nodefsInodesFree" : string , "imagefsAvailable" : string , "imagefsInodesFree" : string , "pidAvailable" : string } Fields memoryAvailable string Optional.
- See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals EvictionGracePeriod JSON representation { "memoryAvailable" : string , "nodefsAvailable" : string , "nodefsInodesFree" : string , "imagefsAvailable" : string , "imagefsInodesFree" : string , "pidAvailable" : string } Fields memoryAvailable string Optional.
- For more information, including usage and the valid values, see: https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/ sandboxConfig object ( SandboxConfig ) Sandbox configuration for this node. nodeGroup string Setting this field will assign instances of this pool to run on the specified node group.
- See https://kubernetes.io/docs/tasks/administer-cluster/cpu-management-policies/ The following values are allowed. "none": the default, which represents the existing scheduling behavior. "static": allows pods with certain resource characteristics to be granted increased CPU affinity and exclusivity on the node.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- Source ID: `site-api-reference`
- Final score: 271
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals EvictionMinimumReclaim JSON representation { "memoryAvailable" : string , "nodefsAvailable" : string , "nodefsInodesFree" : string , "imagefsAvailable" : string , "imagefsInodesFree" : string , "pidAvailable" : string } Fields memoryAvailable string Optional.
- See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals EvictionGracePeriod JSON representation { "memoryAvailable" : string , "nodefsAvailable" : string , "nodefsInodesFree" : string , "imagefsAvailable" : string , "imagefsInodesFree" : string , "pidAvailable" : string } Fields memoryAvailable string Optional.
- For more information, including usage and the valid values, see: https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/ sandboxConfig object ( SandboxConfig ) Sandbox configuration for this node. nodeGroup string Setting this field will assign instances of this pool to run on the specified node group.
- See https://kubernetes.io/docs/tasks/administer-cluster/cpu-management-policies/ The following values are allowed. "none": the default, which represents the existing scheduling behavior. "static": allows pods with certain resource characteristics to be granted increased CPU affinity and exclusivity on the node.

