---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:04.782Z"
product_name: "Cloud Service Mesh"
product_slug: "cloud-service-mesh"
feature_name: "Multi-cloud mesh for GKE and Amazon EKS"
feature_slug: "multi-cloud-mesh-for-gke-and-amazon-eks"
latest_feature_date: "2022-03-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster"
  - "https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane"
  - "https://docs.cloud.google.com/service-mesh/docs/service-routing/features"
  - "https://docs.cloud.google.com/service-mesh/docs/gateway/set-up-envoy-mesh"
keywords:
  - "multi"
  - "mesh"
  - "for"
  - "gke"
  - "and"
  - "amazon"
  - "eks"
  - "supports"
---

# Multi-cloud mesh for GKE and Amazon EKS

Product: Cloud Service Mesh
Coverage: MEDIUM

## Step 02 Summary

Cloud Service Mesh supports a multi-cloud mesh spanning Google Kubernetes Engine on Google Cloud and Amazon EKS; Cloud Service Mesh supports a multi-cloud mesh spanning Google Kubernetes Engine on Google Cloud and Amazon EKS.

## Extended Definition

Cloud Service Mesh supports a multi-cloud mesh spanning Google Kubernetes Engine on Google Cloud and Amazon EKS; Cloud Service Mesh supports a multi-cloud mesh spanning Google Kubernetes Engine on Google Cloud and Amazon EKS.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster)
- [https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane](https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane)
- [https://docs.cloud.google.com/service-mesh/docs/service-routing/features](https://docs.cloud.google.com/service-mesh/docs/service-routing/features)
- [https://docs.cloud.google.com/service-mesh/docs/gateway/set-up-envoy-mesh](https://docs.cloud.google.com/service-mesh/docs/gateway/set-up-envoy-mesh)

## Supporting Pages

### "In-cluster control plane supported features \_|\_ Cloud Service Mesh \_\

- URL: [https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster)
- Source ID: `site-docs-root`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- Network Feature GKE clusters on Google Cloud GKE Enterprise clusters on-premises GKE on AWS GKE on Azure Attached clusters Single network Multi-network Notes: For attached clusters, only multi-cluster meshes spanning a single platform (Microsoft AKS, Amazon EKS) are supported at this time.
- Cloud Service Mesh is supported on the following cluster types: Amazon EKS clusters Microsoft AKS clusters In the following tables: – indicates the feature is enabled by default. – indicates the feature is supported for the platform and can be enabled, as described in Enabling optional features or the feature guide linked in the feature table.
- Telemetry Metrics Feature GKE clusters on Google Cloud GKE Enterprise clusters on-premises Other GKE Enterprise clusters Cloud Monitoring (HTTP in-proxy metrics) Cloud Monitoring (TCP in-proxy metrics) Istio Telemetry API Custom adapters/backends, in or out of process Arbitrary telemetry and logging backends Prometheus metrics export to customer-installed Prometheus, Grafana, and Kiali dashboards Compatible Compatible Compatible Google Cloud Managed Service for Prometheus, not including the Cloud Service Mesh dashboard The topology graph in the Google Cloud console no longer uses the Mesh telemetry service as its data source.
- For self-installed in-cluster Cloud Service Mesh , Google supports the current and previous two (n-2) minor versions of Cloud Service Mesh.

### "Provision a managed Cloud Service Mesh control plane on GKE \_|\_ Google\

- URL: [https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane](https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane)
- Source ID: `site-docs-root`
- Final score: 215
- Re-rank relevance: N/A

Evidence snippets:
- To disable the managed data plane for a namespace: kubectl annotate --overwrite namespace NAMESPACE \ mesh.cloud.google.com/proxy='{"managed":"false"}' To disable the managed data plane for a pod: kubectl annotate --overwrite pod POD NAME \ mesh.cloud.google.com/proxy='{"managed":"false"}' Enable maintenance windows for the managed data plane If you have a GKE maintenance window configured, active upgrades will commence at the start of the next available maintenance window and continue without pause until all managed pods have been updated (usually 12 hours).
- You can opt out of maintenance window notifications by editing your user preferences: https://console.cloud.google.com/user-preferences/communication?project=${project id} Configure endpoint discovery (only for multi-cluster installations) If your mesh has only one cluster, skip these multi-cluster steps and proceed to Deploy applications or Migrate applications .
- 1 New Pod creation When you or horizontal Pod autoscaling deploy new Workloads GKE Maintenance Windows When nodes are replaced during a GKE maintenance window Enabled Disabled 1 Cloud Service Mesh active updates automatically replace Pods in Workloads, except for StatefulSets , Jobs , DaemonSets , and manually injected Pods .
- Note that if you plan to register multiple clusters, enabling the Cloud Service Mesh fleet feature happens at the fleet-level so you only have to run this command once. gcloud container fleet mesh enable --project FLEET PROJECT ID Register clusters to a fleet Register a GKE cluster using fleet workload identity.

### "Cloud Service Mesh with Google Cloud APIs supported features \_|\_ Google\

- URL: [https://docs.cloud.google.com/service-mesh/docs/service-routing/features](https://docs.cloud.google.com/service-mesh/docs/service-routing/features)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Feature Supported Automated deployment of sidecar proxies for Compute Engine VMs ✔ Automated injection of sidecar proxies for GKE Pods ✔ Service discovery based on hostname ✔ Instance autoscaling based on CPU utilization ✔ Instance autoscaling based on traffic load/serving capacity (Compute Engine VMs in managed instance groups, or MIGs, only) ✔ Instance autohealing based on configurable health checks ✔ Automatic endpoint registration for Compute Engine VMs ✔ Automatic endpoint registration for GKE container instances/Pods ✔ API to programmatically add or remove endpoints ✔ Endpoints for your data plane traffic Microservices use the data plane to reach services in your mesh and outside of your mesh.
- Feature Supported Sidecar proxies running alongside applications ✔ Proxyless gRPC applications ✔ Middle proxies between two applications in a mesh ✔ Edge proxies at the boundary of your mesh ✔ Mesh spanning multiple GKE clusters and/or Compute Engine VMs in multiple regions ✔ Programmatic, API-driven configuration All configuration is exposed through our REST API and dashboard out-of-the-box, letting you automate changes across large teams and manage changes programmatically.
- Feature Envoy gRPC TLS with GKE Pods ✔ ✔ mTLS with GKE Pods ✔ ✔ Access control and authorization ✔ ✔ Rate limiting with Google Cloud Armor ✔ Routing and traffic management Cloud Service Mesh supports advanced traffic management policies that you can use to steer, split, and shape traffic as it passes through your data plane.
- Feature Supported gRPC health checks ✔ HTTP health checks ✔ HTTPS health checks ✔ HTTP/2 health checks ✔ TCP health checks ✔ Configurable health checks: Port Check intervals Timeouts Healthy and unhealthy thresholds ✔ Configurable request path (HTTP, HTTPS, HTTP/2) ✔ Configurable request string or path (TCP or SSL) ✔ Configurable expected response string ✔ Observability Observability tools provide monitoring, debugging, and performance information to help you understand your service mesh.

### "Set up an Envoy sidecar service mesh on GKE \_|\_ Cloud Service Mesh \_\

- URL: [https://docs.cloud.google.com/service-mesh/docs/gateway/set-up-envoy-mesh](https://docs.cloud.google.com/service-mesh/docs/gateway/set-up-envoy-mesh)
- Source ID: `site-docs-root-2`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Set up the Client Run the following command to enable sidecar injection in the sidecar-example namespace: kubectl label namespace sidecar-example mesh.cloud.google.com/csm-injection = sidecar Create a client: kubectl apply -f - <<EOF apiVersion: apps/v1 kind: Deployment metadata: labels: run: client name: client namespace: sidecar-example spec: replicas: 1 selector: matchLabels: run: client template: metadata: labels: run: client spec: containers: - name: client image: curlimages/curl command: - sh - -c - while true ; do sleep 1 ; done EOF Verify that the client Pod has an Envoy sidecar container automatically injected: kubectl get pods -n sidecar-example -l run = client The output is similar to: NAME READY STATUS RESTARTS AGE client-xxxx 2/2 Running 0 20s Wait for the client to be ready and have the Status Running before continuing.
- Set up the Service Create a sample HTTP service: kubectl apply -f - <<EOF kind: Namespace apiVersion: v1 metadata: name: sidecar-example --- apiVersion: apps/v1 kind: Deployment metadata: name: whereami namespace: sidecar-example spec: replicas: 2 selector: matchLabels: app: whereami template: metadata: labels: app: whereami spec: containers: - name: whereami image: us-docker.pkg.dev/google-samples/containers/gke/whereami:v1 ports: - containerPort: 8080 --- apiVersion: v1 kind: Service metadata: name: whereami namespace: sidecar-example spec: selector: app: whereami ports: - port: 8080 targetPort: 8080 EOF Create a baseline HTTPRoute for the service: kubectl apply -f - <<EOF apiVersion: gateway.networking.k8s.io/v1beta1 kind: HTTPRoute metadata: name: whereami-route namespace: sidecar-example spec: parentRefs: - name: whereami kind: Service group: "" rules: - backendRefs: - name: whereami port: 8080 EOF Alternatively, the following manifest describes a sample gRPC Service: apiVersion: v1 kind: Service metadata: name: sample-service namespace: sample-ns annotations: networking.gke.io/app-protocols: '{"50051": "HTTP2"}' # 50051 is backendref.port spec: ports: - port: 50051 targetPort: 50051 Note: If you are setting up a Service that runs gRPC but uses an Envoy sidecar proxy, the Service metadata should include networking.gke.io/app-protocols: '{"<port>": "HTTP2"}' label to apply the correct protocol to the backend service.
- VIP = '10.0.0.1' TEST CMD = "curl -v -H 'host: whereami.sidecar-example.svc.cluster.local' $VIP " kubectl exec -it $CLIENT POD -n sidecar-example -c client -- /bin/sh -c " $TEST CMD " The output is similar to: < Trying 10.0.0.1:80... < Connected to 10.0.0.1 (10.0.0.1) port 80 (#0) < GET / HTTP/1.1 < Host: whereami < User-Agent: curl/7.82.0-DEV < Accept: / < < Mark bundle as not supporting multiuse < HTTP/1.1 200 OK < content-type: application/json < content-length: 318 < access-control-allow-origin: < server: envoy < date: Tue, 12 Apr 2022 22:30:13 GMT < { "cluster name": "${CLUSTER NAME}", "location": "${LOCATION}", "host header": "whereami", ... } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

