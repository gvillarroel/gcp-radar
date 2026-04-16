---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:04.854Z"
product_name: "Cloud Service Mesh"
product_slug: "cloud-service-mesh"
feature_name: "Cross-cluster load balancing"
feature_slug: "cross-cluster-load-balancing"
latest_feature_date: "2020-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-mesh/docs/service-routing/features"
  - "https://docs.cloud.google.com/service-mesh/docs/overview"
  - "https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster"
  - "https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster"
keywords:
  - "cross"
  - "cluster"
  - "load"
  - "balancing"
  - "anthos"
  - "mesh"
  - "supports"
  - "for"
---

# Cross-cluster load balancing

Product: Cloud Service Mesh
Coverage: MEDIUM

## Step 02 Summary

Anthos Service Mesh supports cross-cluster load balancing for multi-cluster meshes on GKE in beta; Anthos Service Mesh supports cross-cluster load balancing for multi-cluster meshes on GKE in beta.

## Extended Definition

Anthos Service Mesh supports cross-cluster load balancing for multi-cluster meshes on GKE in beta; Anthos Service Mesh supports cross-cluster load balancing for multi-cluster meshes on GKE in beta.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-mesh/docs/service-routing/features](https://docs.cloud.google.com/service-mesh/docs/service-routing/features)
- [https://docs.cloud.google.com/service-mesh/docs/overview](https://docs.cloud.google.com/service-mesh/docs/overview)
- [https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster)
- [https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster](https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster)

## Supporting Pages

### "Cloud Service Mesh with Google Cloud APIs supported features \_|\_ Google\

- URL: [https://docs.cloud.google.com/service-mesh/docs/service-routing/features](https://docs.cloud.google.com/service-mesh/docs/service-routing/features)
- Source ID: `site-docs-root`
- Final score: 208
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Feature Supported Automated deployment of sidecar proxies for Compute Engine VMs ✔ Automated injection of sidecar proxies for GKE Pods ✔ Service discovery based on hostname ✔ Instance autoscaling based on CPU utilization ✔ Instance autoscaling based on traffic load/serving capacity (Compute Engine VMs in managed instance groups, or MIGs, only) ✔ Instance autohealing based on configurable health checks ✔ Automatic endpoint registration for Compute Engine VMs ✔ Automatic endpoint registration for GKE container instances/Pods ✔ API to programmatically add or remove endpoints ✔ Endpoints for your data plane traffic Microservices use the data plane to reach services in your mesh and outside of your mesh.
- Feature Supported Sidecar proxies running alongside applications ✔ Proxyless gRPC applications ✔ Middle proxies between two applications in a mesh ✔ Edge proxies at the boundary of your mesh ✔ Mesh spanning multiple GKE clusters and/or Compute Engine VMs in multiple regions ✔ Programmatic, API-driven configuration All configuration is exposed through our REST API and dashboard out-of-the-box, letting you automate changes across large teams and manage changes programmatically.
- Retries ✔ ✔ Except per retry timeout Redirects ✔ URI rewrites ✔ Request/response header transformations ✔ Traffic splitting ✔ ✔ Traffic mirroring ✔ Outlier detection ✔ ✔ Circuit breaking ✔ ✔ Only maxRequests Max stream duration ✔ ✔ Load balancing You can configure advanced load-balancing methods and algorithms to load balance at the service, backend group (instance groups or network endpoint groups), and individual backend or endpoint levels.
- Feature Supported Single network in a Google Cloud project ✔ Multiple meshes in a Google Cloud project ✔ Multiple gateways in a Google Cloud project ✔ Shared VPC (single network shared across multiple Google Cloud projects) ✔ For a detailed explanation of how Shared VPC is supported with Cloud Service Mesh, see Limitations .

### Cloud Service Mesh overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-mesh/docs/overview](https://docs.cloud.google.com/service-mesh/docs/overview)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Off Google Cloud: With Distributed Cloud or GKE multicloud, Cloud Service Mesh supports the Istio APIs for Kubernetes workloads.
- Deployment options You have the following deployment options in Cloud Service Mesh: On Google Cloud Managed Cloud Service Mesh - managed control and data plane for GKE (recommended) Managed Cloud Service Mesh - managed control and data plane for Compute Engine with VMs (recommended) In-cluster control plane for GKE with Istio APIs (Discouraged) Off Google Cloud In-cluster control plane for Kubernetes with Istio APIs Managed Cloud Service Mesh Managed Cloud Service Mesh consists of the managed control plane for all infrastructures and the managed data plane for GKE.
- Control plane migration If you are a continuing Anthos Service Mesh customer and you use the Istio APIs, your clusters will start migrating to the Traffic Director control plane.
- Control plane implementation for new users If you are planning an off-Google Cloud configuration, you are choosing Cloud Service Mesh's in-cluster, unmanaged control plane.

### "In-cluster control plane supported features \_|\_ Cloud Service Mesh \_\

- URL: [https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster)
- Source ID: `site-docs-root`
- Final score: 201
- Re-rank relevance: N/A

Evidence snippets:
- Load balancing policies Feature GKE clusters on Google Cloud Other GKE Enterprise clusters Round robin Least connections Random Passthrough Consistent hash Locality For more information on load balancing policies, see Destination Rules .
- For self-installed in-cluster Cloud Service Mesh , Google supports the current and previous two (n-2) minor versions of Cloud Service Mesh.
- Telemetry Metrics Feature GKE clusters on Google Cloud GKE Enterprise clusters on-premises Other GKE Enterprise clusters Cloud Monitoring (HTTP in-proxy metrics) Cloud Monitoring (TCP in-proxy metrics) Istio Telemetry API Custom adapters/backends, in or out of process Arbitrary telemetry and logging backends Prometheus metrics export to customer-installed Prometheus, Grafana, and Kiali dashboards Compatible Compatible Compatible Google Cloud Managed Service for Prometheus, not including the Cloud Service Mesh dashboard The topology graph in the Google Cloud console no longer uses the Mesh telemetry service as its data source.
- For information on configuring load balancers, see the following: Setting up your load balancer for Google Distributed Cloud (software only) for VMware GKE on AWS: Creating a load balancer Expose an ingress gateway using an external load balancer Kubernetes Gateway API (preview) In Cloud Service Mesh v1.20 the Kubernetes Gateway API is available as a public preview.

### "Migrate in-cluster to managed control plane on a new cluster \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster](https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster)
- Source ID: `site-docs-reference`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- Download sample code Clone the git repositories containing the Kubernetes and Istio resources you will use: git clone https://github.com/GoogleCloudPlatform/anthos-service-mesh-samples.git git clone https://github.com/GoogleCloudPlatform/microservices-demo.git Set up the cluster with in-cluster Cloud Service Mesh Create the cluster and install in-cluster Cloud Service Mesh In the section, you create your cluster that uses in-cluster Cloud Service Mesh.
- Create the namespace: kubectl \ --context cluster-with-in-cluster-asm \ create namespace onlineboutique Use the istio.io/rev=asm-1285-9 label to add the onlineboutique namespace to the service mesh and enable automatic sidecar proxy injection. kubectl \ --context cluster-with-in-cluster-asm \ label --overwrite namespace onlineboutique istio.io/rev=asm-1285-9 The output is similar to: namespace/onlineboutique labeled Deploy Online Boutique's 12 services, including the load generator that imitates user traffic: kubectl \ --context cluster-with-in-cluster-asm \ --namespace = onlineboutique \ apply -f anthos-service-mesh-samples/docs/shared/online-boutique/kubernetes-manifests.yaml kubectl \ --context cluster-with-in-cluster-asm \ --namespace = onlineboutique \ apply -f anthos-service-mesh-samples/docs/shared/online-boutique/virtual-service.yaml Get the external IP address of the Cloud Service Mesh ingress gateway: kubectl \ --context cluster-with-in-cluster-asm \ --namespace asm-ingress \ get service --output jsonpath = '{.items[0].status.loadBalancer.ingress[0].ip}' Copy the external IP address of the ingress gateway, and access it through your web browser.
- Create the namespace: kubectl \ --context cluster-with-csm \ create namespace onlineboutique Use the istio.io/rev=asm-managed label to add the onlineboutique namespace to the service mesh and enable automatic sidecar proxy injection. kubectl \ --context cluster-with-csm \ label namespace onlineboutique 'istio.io/rev=asm-managed' Deploy Online Boutique's 12 services, including the load generator that imitates user traffic: kubectl \ --context cluster-with-csm \ --namespace = onlineboutique \ apply -f anthos-service-mesh-samples/docs/shared/online-boutique/kubernetes-manifests.yaml kubectl \ --context cluster-with-csm \ --namespace = onlineboutique \ apply -f anthos-service-mesh-samples/docs/shared/online-boutique/virtual-service.yaml Get the external IP address of the Cloud Service Mesh ingress gateway: kubectl \ --context cluster-with-csm \ --namespace asm-ingress \ get service --output jsonpath = '{.items[0].status.loadBalancer.ingress[0].ip}' Copy the external IP address of the asm-ingressgateway Service, and access it through your web browser.
- The output is similar to: % Total % Received % Xferd Average Speed Time Time Time Current Dload Upload Total Spent Left Speed 100 167k 100 167k 0 0 701k 0 --:--:-- --:--:-- --:--:-- 701k Make the asmcli script executable: chmod +x asmcli Install in-cluster Cloud Service Mesh using asmcli : ./asmcli install \ --project id PROJECT ID \ --cluster name cluster-with-in-cluster-asm \ --cluster location us-central1-a \ --output dir . \ --enable all \ --ca mesh ca It can take several minutes for the asmcli tool to finish.

