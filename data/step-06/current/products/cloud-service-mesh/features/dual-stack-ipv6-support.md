---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:04.760Z"
product_name: "Cloud Service Mesh"
product_slug: "cloud-service-mesh"
feature_name: "Dual-stack IPv6 support"
feature_slug: "dual-stack-ipv6-support"
latest_feature_date: "2025-03-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-mesh/docs/supported-features-managed"
  - "https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster"
  - "https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane"
  - "https://docs.cloud.google.com/service-mesh/docs/tutorials/authz-audit-policies"
keywords:
  - "dual"
  - "stack"
  - "ipv6"
  - "mesh"
  - "supports"
  - "ipv4"
  - "and"
  - "for"
---

# Dual-stack IPv6 support

Product: Cloud Service Mesh
Coverage: MEDIUM

## Step 02 Summary

Cloud Service Mesh supports dual-stack IPv4 and IPv6 for proxy-based Envoy and proxyless gRPC; Cloud Service Mesh supports dual-stack IPv4 and IPv6 for proxy-based Envoy and proxyless gRPC.

## Extended Definition

Cloud Service Mesh supports dual-stack IPv4 and IPv6 for proxy-based Envoy and proxyless gRPC; Cloud Service Mesh supports dual-stack IPv4 and IPv6 for proxy-based Envoy and proxyless gRPC.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-mesh/docs/supported-features-managed](https://docs.cloud.google.com/service-mesh/docs/supported-features-managed)
- [https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster)
- [https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane](https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane)
- [https://docs.cloud.google.com/service-mesh/docs/tutorials/authz-audit-policies](https://docs.cloud.google.com/service-mesh/docs/tutorials/authz-audit-policies)

## Supporting Pages

### "Supported features using Istio APIs (managed control plane) \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/service-mesh/docs/supported-features-managed](https://docs.cloud.google.com/service-mesh/docs/supported-features-managed)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Although gateway ports can be created with Mongo, MySQL and Redis protocol, the mesh treats the resulting traffic as standard TCP, lacking protocol-specific handling. † In proxyless gRPC, IPv6 dual-stack features are supported only in gRPC 1.66.1 or newer in C++ and Python , gRPC Go v1.71 , and or gRPC Node.js v1.12 .
- EnvoyFilter Feature Managed (TD) Managed (istiod) EnvoyFilter v1alpha3 † † Refer to Dataplane Extensibility page for supported fields and configurable extensions MeshConfig Feature Managed (TD) Managed (istiod) DiscoverySelectors clusterLocal LocalityLB § ExtensionProviders § CACert ImageType - distroless § OutboundTrafficPolicy § defaultProviders.accessLogging defaultProviders.tracing defaultConfig.tracing.stackdriver § accessLogFile § ProxyConfig Feature Managed (TD) Managed (istiod) HTTP/1.0 support (ISTIO META NETWORK) Image selection (distroless or base image) † Kubernetes native sidecar (ENABLE NATIVE SIDECARS) † Distroless image is used for the injection.
- Telemetry Metrics Feature Managed (TD) Managed (istiod) Cloud Monitoring (HTTP in-proxy metrics) Cloud Monitoring (TCP in-proxy metrics) Prometheus metrics export to Grafana (Envoy metrics only) Prometheus metrics export to Kiali Google Cloud Managed Service for Prometheus, not including the Cloud Service Mesh dashboard Istio Telemetry API † Custom adapters/backends, in or out of process Arbitrary telemetry and logging backends † The TRAFFIC DIRECTOR control plane supports a subset of Istio telemetry API used to configure access logs and trace .
- Protocol support Feature Managed (TD) Managed (istiod) IPv4 HTTP/1.1 HTTP/2 TCP byte streams (Note 1) gRPC IPv6 † Notes: Although TCP is a supported protocol for networking and TCP metrics are collected, they are not reported.

### "In-cluster control plane supported features \_|\_ Cloud Service Mesh \_\

- URL: [https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Feature GKE clusters on Google Cloud Other GKE Enterprise clusters IPv4 HTTP/1.1 HTTP/2 TCP byte streams (Note 1) gRPC IPv6 Istio DualStack Notes: Although TCP is a supported protocol for networking, TCP metrics aren't collected or reported.
- For self-installed in-cluster Cloud Service Mesh , Google supports the current and previous two (n-2) minor versions of Cloud Service Mesh.
- Telemetry Metrics Feature GKE clusters on Google Cloud GKE Enterprise clusters on-premises Other GKE Enterprise clusters Cloud Monitoring (HTTP in-proxy metrics) Cloud Monitoring (TCP in-proxy metrics) Istio Telemetry API Custom adapters/backends, in or out of process Arbitrary telemetry and logging backends Prometheus metrics export to customer-installed Prometheus, Grafana, and Kiali dashboards Compatible Compatible Compatible Google Cloud Managed Service for Prometheus, not including the Cloud Service Mesh dashboard The topology graph in the Google Cloud console no longer uses the Mesh telemetry service as its data source.
- Cloud Service Mesh is supported on the following cluster types: Amazon EKS clusters Microsoft AKS clusters In the following tables: – indicates the feature is enabled by default. – indicates the feature is supported for the platform and can be enabled, as described in Enabling optional features or the feature guide linked in the feature table.

### "Provision a managed Cloud Service Mesh control plane on GKE \_|\_ Google\

- URL: [https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane](https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane)
- Source ID: `site-docs-root`
- Final score: 159
- Re-rank relevance: N/A

Evidence snippets:
- Enabling managed Cloud Service Mesh as a default configuration for your fleet and registering clusters to the fleet during cluster creation only supports Mesh CA .
- To disable the managed data plane for a namespace: kubectl annotate --overwrite namespace NAMESPACE \ mesh.cloud.google.com/proxy='{"managed":"false"}' To disable the managed data plane for a pod: kubectl annotate --overwrite pod POD NAME \ mesh.cloud.google.com/proxy='{"managed":"false"}' Enable maintenance windows for the managed data plane If you have a GKE maintenance window configured, active upgrades will commence at the start of the next available maintenance window and continue without pause until all managed pods have been updated (usually 12 hours).
- Service Usage Admin roles/serviceusage.serviceUsageAdmin Fleet project Ability to enable, disable, and inspect service states, inspect operations, and consume quota and billing for a consumer project. (Note 1) CA Service Admin Beta roles/privateca.admin Fleet project Full access to all CA Service resources. (Note 2) Roles required to run Cloud Service Mesh The following table describes the roles that are required by the service account to run managed Cloud Service Mesh.
- You can opt out of maintenance window notifications by editing your user preferences: https://console.cloud.google.com/user-preferences/communication?project=${project id} Configure endpoint discovery (only for multi-cluster installations) If your mesh has only one cluster, skip these multi-cluster steps and proceed to Deploy applications or Migrate applications .

### "Configuring audit policies for your services \_|\_ Cloud Service Mesh \_\

- URL: [https://docs.cloud.google.com/service-mesh/docs/tutorials/authz-audit-policies](https://docs.cloud.google.com/service-mesh/docs/tutorials/authz-audit-policies)
- Source ID: `site-docs-reference`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- Configuring audit policies for your services Note: This guide only supports Cloud Service Mesh with Istio APIs and does not support Google Cloud APIs.
- Turn on RBAC debug logging with the following command: kubectl exec POD NAME -n NAMESPACE -c istio-proxy -- pilot-agent request POST 'logging?rbac=debug' Send some requests, and then check logs for the Pod with the kubectl logs command: kubectl logs POD NAME -n NAMESPACE -c istio-proxy What's next Learn about security in Cloud Service Mesh Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Before you begin Follow the steps in Install dependent tools and validate cluster to: Install required tools Download asmcli Grant cluster admin permissions Validate your project and cluster Prepare gateway configuration Cloud Service Mesh gives you the option to deploy and manage gateways as part of your service mesh.
- To see stackdriver access logs, enter the following query in the Query builder field, and click Run query : logName="projects/ PROJECT ID /logs/server-accesslog-stackdriver" For more information on using Logs Explorer, see Logs Explorer overview .

