---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:49.774Z"
product_name: "Managed Cloud Service Mesh"
product_slug: "managed-cloud-service-mesh"
feature_name: "Cloud Service Mesh dual-stack support"
feature_slug: "cloud-service-mesh-dual-stack-support"
latest_feature_date: "2025-03-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-mesh/v1.26/docs/onboarding/kubernetes-off-gcp/install/install-in-cluster-cloud-service-mesh"
  - "https://docs.cloud.google.com/service-mesh/v1.20/docs/automate-tls"
  - "https://docs.cloud.google.com/service-mesh/v1.20/docs/observability/accessing-logs"
  - "https://docs.cloud.google.com/service-mesh/v1.26/docs/onboarding/provision-control-plane"
keywords:
  - "mesh"
  - "dual"
  - "stack"
  - "supports"
  - "ipv6"
  - "for"
  - "both"
  - "proxy"
---

# Cloud Service Mesh dual-stack support

Product: Managed Cloud Service Mesh
Coverage: MEDIUM

## Step 02 Summary

Cloud Service Mesh supports dual-stack IPv6 for both proxy-based Envoy and proxyless gRPC deployments; Cloud Service Mesh supports dual-stack IPv6 for both proxy-based Envoy and proxyless gRPC deployments.

## Extended Definition

Cloud Service Mesh supports dual-stack IPv6 for both proxy-based Envoy and proxyless gRPC deployments; Cloud Service Mesh supports dual-stack IPv6 for both proxy-based Envoy and proxyless gRPC deployments.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-mesh/v1.26/docs/onboarding/kubernetes-off-gcp/install/install-in-cluster-cloud-service-mesh](https://docs.cloud.google.com/service-mesh/v1.26/docs/onboarding/kubernetes-off-gcp/install/install-in-cluster-cloud-service-mesh)
- [https://docs.cloud.google.com/service-mesh/v1.20/docs/automate-tls](https://docs.cloud.google.com/service-mesh/v1.20/docs/automate-tls)
- [https://docs.cloud.google.com/service-mesh/v1.20/docs/observability/accessing-logs](https://docs.cloud.google.com/service-mesh/v1.20/docs/observability/accessing-logs)
- [https://docs.cloud.google.com/service-mesh/v1.26/docs/onboarding/provision-control-plane](https://docs.cloud.google.com/service-mesh/v1.26/docs/onboarding/provision-control-plane)

## Supporting Pages

### "Install Cloud Service Mesh for Kubernetes workloads off Google Cloud \_\

- URL: [https://docs.cloud.google.com/service-mesh/v1.26/docs/onboarding/kubernetes-off-gcp/install/install-in-cluster-cloud-service-mesh](https://docs.cloud.google.com/service-mesh/v1.26/docs/onboarding/kubernetes-off-gcp/install/install-in-cluster-cloud-service-mesh)
- Source ID: `site-docs-reference`
- Final score: 216
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Mesh Config Admin roles/meshconfig.admin Fleet and cluster project Provides permissions required to initialize managed components of Cloud Service Mesh, such as managed control plane and backend permission that allows workloads to talk to Stackdriver without each being individually authorized (for both managed and in-cluster control planes).
- Your installation isn't complete until you enable automatic sidecar proxy injection (auto-injection) and restart the Pods for any workloads that were running on your cluster before you installed Cloud Service Mesh.
- Install Cloud Service Mesh for Kubernetes workloads off Google Cloud Note: This guide only supports Cloud Service Mesh with Istio APIs and does not support Google Cloud APIs.
- Private Set the current context to your user cluster: kubectl config use-context CLUSTER NAME Save the following YAML to a file called istio-operator-internal-lb.yaml : apiVersion: install.istio.io/v1alpha1 kind: IstioOperator spec: components: ingressGateways: - enabled: true k8s: serviceAnnotations: service.beta.kubernetes.io/aws-load-balancer-internal: "true" name: istio-ingressgateway Run asmcli install : ./asmcli install \ --fleet id FLEET PROJECT ID \ --kubeconfig KUBECONFIG FILE \ --output dir DIR PATH \ --platform multicloud \ --enable all \ --ca citadel \ --ca cert FILE PATH \ --ca key FILE PATH \ --root cert FILE PATH \ --cert chain FILE PATH --custom overlay istio-operator-internal-lb.yaml \ --option stackdriver --fleet id The project ID of the fleet host project . --kubeconfig The full path to the kubeconfig file .

### "Automate TLS certificate management for Cloud Service Mesh ingress gateway\

- URL: [https://docs.cloud.google.com/service-mesh/v1.20/docs/automate-tls](https://docs.cloud.google.com/service-mesh/v1.20/docs/automate-tls)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create an operator manifest for the ingress gateway: cat << EOF > ingressgateway - operator . yaml apiVersion : install . istio . io / v1alpha1 kind : IstioOperator metadata : name : ingressgateway - operator annotations : config . kubernetes . io / local - config : "true" spec : profile : empty revision : asm - managed components : ingressGateways : - name : istio - ingressgateway namespace : GATEWAY NAMESPACE enabled : true k8s : overlays : - apiVersion : apps / v1 kind : Deployment name : istio - ingressgateway patches : - path : spec . template . metadata . annotations value : inject . istio . io / templates : gateway - path : spec . template . metadata . labels . sidecar \ . istio \ . io / inject value : "true" - path : spec . template . spec . containers [ name : istio - proxy ] value : name : istio - proxy image : auto service : loadBalancerIP : $ LOAD BALANCER IP serviceAnnotations : networking . gke . io / load - balancer - type : Internal networking . gke . io / internal - load - balancer - allow - global - access : "true" EOF Note the following about the operator manifest : The revision field specifies the managed Cloud Service Mesh release channel to use for the data plane.
- If you run into other problems with this tutorial, we recommend that you review these documents: CA Service frequently asked questions Troubleshooting Cloud Service Mesh step-by-step Resolving managed Cloud Service Mesh issues Istio operations common problems GKE troubleshooting Troubleshooting Kubernetes clusters Clean up To avoid incurring continuing charges to your Google Cloud account for the resources used in this tutorial, you can either delete the project or delete the individual resources.
- In Cloud Shell, create a namespace for the sample application resources: cat << EOF > sample-app-namespace.yaml apiVersion: v1 kind: Namespace metadata: name: APP NAMESPACE annotations: mesh.cloud.google.com/proxy: '{"managed":"true"}' labels: istio.io/rev: asm-managed EOF kubectl apply --filename sample-app-namespace.yaml APP NAMESPACE is the name of the namespace for the sample application.
- Both Cloud Service Mesh and the CA Service issuer for the cert-manager tool require that you set the cloud-platform scope on the cluster nodes.

### Request proxy logs \_|\_ Cloud Service Mesh v1.20 \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-mesh/v1.20/docs/observability/accessing-logs](https://docs.cloud.google.com/service-mesh/v1.20/docs/observability/accessing-logs)
- Source ID: `site-docs-root`
- Final score: 193
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Run the following query depending on whether you are viewing client or server access logs: Server logs resource.labels.cluster name=" CLUSTER NAME " logName="projects/ PROJECT NAME /logs/server-accesslog-stackdriver" Client logs resource.labels.cluster name=" CLUSTER NAME " logName="projects/ PROJECT NAME /logs/client-accesslog-stackdriver" View traffic logs in the Anthos Service Mesh page To view traffic logs in the Cloud Service Mesh page for a Service during a specified time span, follow these steps: In Google Cloud console, go to the Cloud Service Mesh page.
- For example, to query all requests that have MULTUAL TLS enabled and use protocol grpc , append following to the server access logs query: labels.protocol="grpc" labels.service authentication policy="MULTUAL TLS" Set an access log policy To configure proxy logging for managed Cloud Service Mesh, see Envoy access logs .
- View service or workload-specific information If you have an issue with a specific service or workload rather than a mesh-wide problem, inspect the individual Envoy proxies and gather relevant information from them.
- Interpret access logs The following steps explain how to use the access logs (also known as Envoy proxy logs) to show traffic between both ends of a connection for troubleshooting purposes.

### "Provision a managed Cloud Service Mesh control plane on GKE \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/service-mesh/v1.26/docs/onboarding/provision-control-plane](https://docs.cloud.google.com/service-mesh/v1.26/docs/onboarding/provision-control-plane)
- Source ID: `site-docs-reference`
- Final score: 192
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To disable the managed data plane at the cluster level and revert back to managing the sidecar proxies yourself, change the annotation: kubectl annotate --overwrite controlplanerevision -n istio-system \ mesh.cloud.google.com/proxy='{"managed":"false"}' To disable the managed data plane for a namespace: kubectl annotate --overwrite namespace NAMESPACE \ mesh.cloud.google.com/proxy='{"managed":"false"}' To disable the managed data plane for a pod: kubectl annotate --overwrite pod POD NAME \ mesh.cloud.google.com/proxy='{"managed":"false"}' Enable maintenance windows for the managed data plane If you have a GKE maintenance window configured, active upgrades will commence at the start of the next available maintenance window and continue without pause until all managed pods have been updated (usually 12 hours).
- For example, see the below resources annotation: spec : template : metadata : annotations : sidecar.istio.io/proxyCPU : "200m" sidecar.istio.io/proxyCPULimit : "200m" sidecar.istio.io/proxyMemory : "256Mi" sidecar.istio.io/proxyMemoryLimit : "256Mi" Migrate applications to managed Cloud Service Mesh Warning: During the migration process, Istio CRDs are installed in the specified cluster.
- Limitations The managed data plane doesn't manage the following: Uninjected pods Manually injected pods Jobs StatefulSets DaemonSets Disable the managed data plane (optional) If you are provisioning managed Cloud Service Mesh on a new cluster, then you can disable the managed data plane completely, or for individual namespaces or pods.
- Enabling managed Cloud Service Mesh as a default configuration for your fleet and registering clusters to the fleet during cluster creation only supports Mesh CA .

