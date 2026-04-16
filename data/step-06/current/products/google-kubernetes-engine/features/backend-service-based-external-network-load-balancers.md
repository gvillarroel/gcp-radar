---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.803Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Backend Service-based external Network Load Balancers"
feature_slug: "backend-service-based-external-network-load-balancers"
latest_feature_date: "2023-03-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/explore-gke-networking-docs-use-cases"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/network-overview"
keywords:
  - "backend"
  - "based"
  - "external"
  - "network"
  - "load"
  - "balancers"
  - "gke"
  - "now"
---

# Backend Service-based external Network Load Balancers

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE now generally supports backend service-based external Network Load Balancers for external LoadBalancer Services.

## Extended Definition

GKE now generally supports backend service-based external Network Load Balancers for external LoadBalancer Services.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/explore-gke-networking-docs-use-cases](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/explore-gke-networking-docs-use-cases)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/network-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/network-overview)

## Supporting Pages

### "Set up an external Application Load Balancer with Ingress \_|\_ GKE networking\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer)
- Source ID: `site-docs-root`
- Final score: 211
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Follow the installation instructions to install Config Connector on your cluster. apiVersion : compute.cnrm.cloud.google.com/v1beta1 kind : ComputeAddress metadata : name : web-static-ip spec : location : global To deploy this manifest, download it to your machine as compute-address.yaml, and run: kubectl apply -f compute-address.yaml The basic-ingress-static.yaml manifest adds an annotation on Ingress to use the static IP resource named web-static-ip : apiVersion : networking.k8s.io/v1 kind : Ingress metadata : name : basic-ingress annotations : kubernetes.io/ingress.global-static-ip-name : "web-static-ip" spec : defaultBackend : service : name : web port : number : 8080 View the manifest: cat basic-ingress-static.yaml Apply the resource to the cluster: kubectl apply -f basic-ingress-static.yaml Check the external IP address: kubectl get ingress basic-ingress Wait until the IP address of your application changes to use the reserved IP address of the web-static-ip resource.
- Home Technology areas Google Kubernetes Engine (GKE) GKE networking Guides Send feedback Set up an external Application Load Balancer with Ingress Stay organized with collections Save and categorize content based on your preferences.
- Version: 1.0.0 Hostname: web-6498765b79-fq5q5 You can visit Load Balancing on the Google Cloud console and inspect the networking resources created by the GKE Ingress controller. (Optional) Configuring a static IP address When you expose a web server on a domain name, you need the external IP address of an application to be a static IP that does not change.
- Background Google Kubernetes Engine (GKE) offers integrated support for two types of Cloud Load Balancing for a publicly accessible application: Ingress External passthrough Network Load Balancer In this tutorial, you use Ingresses .

### Explore GKE networking documentation and use cases \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/network-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/network-overview)
- Source ID: `site-docs-root`
- Final score: 171
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Route requests to different services based on the URL path (for example, sending / to the frontend workload and /api/v1 to the backend workload).
- Phase 5: Accelerate machine learning workloads Challenge: eliminate network bottlenecks for GPU-based model training.
- GKE provisions a regional external passthrough Network Load Balancer with a public IP address.
- Solution: use internal load balancers for private backends.

### Explore GKE networking documentation and use cases \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/explore-gke-networking-docs-use-cases](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/explore-gke-networking-docs-use-cases)
- Source ID: `site-iam-reference`
- Final score: 171
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Route requests to different services based on the URL path (for example, sending / to the frontend workload and /api/v1 to the backend workload).
- Phase 5: Accelerate machine learning workloads Challenge: eliminate network bottlenecks for GPU-based model training.
- GKE provisions a regional external passthrough Network Load Balancer with a public IP address.
- Solution: use internal load balancers for private backends.

