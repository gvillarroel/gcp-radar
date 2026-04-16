---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:04:30.749Z"
product_name: "Anthos clusters on AWS (previous generation)"
product_slug: "anthos-clusters-on-aws-previous-generation"
feature_name: "HTTP/HTTPS Proxy Support for GKE on AWS Management Traffic"
feature_slug: "http-https-proxy-support-for-gke-on-aws-management-traffic"
latest_feature_date: "2020-10-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters"
  - "https://docs.cloud.google.com/service-mesh/v1.21/docs/supported-features-in-cluster"
keywords:
  - "traffic"
  - "between"
  - "https"
  - "http"
  - "management"
  - "proxy"
---

# HTTP/HTTPS Proxy Support for GKE on AWS Management Traffic

Product: Anthos clusters on AWS (previous generation)
Coverage: MEDIUM

## Step 02 Summary

Traffic between the GKE on AWS management service and Connect can now be routed through an HTTP/HTTPS proxy.

## Extended Definition

Traffic between the GKE on AWS management service and Connect can now be routed through an HTTP/HTTPS proxy.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters)
- [https://docs.cloud.google.com/service-mesh/v1.21/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/v1.21/docs/supported-features-in-cluster)

## Supporting Pages

### "REST Resource: projects.locations.awsClusters.awsNodePools \_|\_ GKE Multi-Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools)
- Source ID: `site-api-reference`
- Final score: 169
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- See https://kubernetes.io/docs/tasks/administer-cluster/cpu-management-policies/ The following values are allowed. "none": the default, which represents the existing scheduling behavior. "static": allows pods with certain resource characteristics to be granted increased CPU affinity and exclusivity on the node.
- Proxy configuration for outbound HTTP(S) traffic. configEncryption object ( AwsConfigEncryption ) Required.
- This option is enabled by default which makes kubelet use CFS quota ( https://www.kernel.org/doc/Documentation/scheduler/sched-bwc.txt ) to enforce container CPU limits.
- See https://kubernetes.io/docs/concepts/policy/pid-limiting/#pod-pid-limits Controls the maximum number of processes allowed to run in a pod.

### "REST Resource: projects.locations.awsClusters \_|\_ GKE Multi-Cloud \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters)
- Source ID: `site-api-reference`
- Final score: 161
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Proxy configuration for outbound HTTP(S) traffic. configEncryption object ( AwsConfigEncryption ) Required.
- For more info on RBAC, see https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles adminGroups[] object ( AwsClusterGroup ) Optional.
- For more info on RBAC, see https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles AwsClusterUser GKE-on-AWS is deprecated.
- See https://cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/deprecations/deprecation-announcement for more details.

### "In-cluster control plane supported features \_|\_ Cloud Service Mesh v1.21\

- URL: [https://docs.cloud.google.com/service-mesh/v1.21/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/v1.21/docs/supported-features-in-cluster)
- Source ID: `site-docs-reference`
- Final score: 146
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Proxy request logging Feature GKE clusters on Google Cloud GKE Enterprise clusters on-premises Other GKE Enterprise clusters Traffic logs Access logs Tracing Feature GKE clusters on Google Cloud GKE Enterprise clusters on-premises Other GKE Enterprise clusters Cloud Trace Jaeger tracing (allows use of customer-managed Jaeger) Compatible Compatible Compatible Zipkin tracing (allows use of customer-managed Zipkin) Compatible Compatible Compatible Note: You can configure third-party telemetry products (such as Jaeger, Zipkin, and Grafana), but we cannot guarantee future compatibility and Cloud Support cannot provide help managing them.
- Telemetry Metrics Feature GKE clusters on Google Cloud GKE Enterprise clusters on-premises Other GKE Enterprise clusters Cloud Monitoring (HTTP in-proxy metrics) Cloud Monitoring (TCP in-proxy metrics) Istio Telemetry API Custom adapters/backends, in or out of process Arbitrary telemetry and logging backends Prometheus metrics export to customer-installed Prometheus, Grafana, and Kiali dashboards Compatible Compatible Compatible Google Cloud Managed Service for Prometheus, not including the Cloud Service Mesh dashboard The topology graph in the Google Cloud console no longer uses the Mesh telemetry service as its data source.
- Feature GKE clusters on Google Cloud Other GKE Enterprise clusters Ingress Gateway with class: istio HttpRoute using parentRef Mesh traffic Configuring Istio CRDs using the targetRef field including AuthorizationPolicy, RequestAuthentication, Telemetry and WasmPlugin Warning: Microsoft AKS attached and GKE on Azure clusters require an additional step to use the Kubernetes Gateway API.
- Base Images Feature GKE clusters on Google Cloud Other GKE Enterprise clusters Distroless proxy image Security Certificate distribution/rotation mechanisms Feature GKE clusters on Google Cloud Other GKE Enterprise clusters Workload certificate management External certificate management on ingress and egress gateways.

