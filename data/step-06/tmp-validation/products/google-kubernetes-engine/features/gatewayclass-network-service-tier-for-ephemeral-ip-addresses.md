---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.161Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "GatewayClass network service tier for ephemeral IP addresses"
feature_slug: "gatewayclass-network-service-tier-for-ephemeral-ip-addresses"
latest_feature_date: "2025-08-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/configuring-domain-name-static-ip"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/explore-gke-networking-docs-use-cases"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/network-overview"
keywords:
  - "gatewayclass"
  - "tier"
  - "addresses"
  - "ephemeral"
  - "network"
---

# GatewayClass network service tier for ephemeral IP addresses

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

The gke-l7-regional-external-managed GatewayClass can use Standard or Premium network service tiers for ephemeral IP addresses; The gke-l7-regional-external-managed GatewayClass can use Standard or Premium network service tiers for ephemeral IP addresses.

## Extended Definition

The gke-l7-regional-external-managed GatewayClass can use Standard or Premium network service tiers for ephemeral IP addresses; The gke-l7-regional-external-managed GatewayClass can use Standard or Premium network service tiers for ephemeral IP addresses.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/configuring-domain-name-static-ip](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/configuring-domain-name-static-ip)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/explore-gke-networking-docs-use-cases](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/explore-gke-networking-docs-use-cases)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/network-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/network-overview)

## Supporting Pages

### Explore GKE networking documentation and use cases \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/network-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/network-overview)
- Source ID: `site-docs-root`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- An end-to-end architecture for a secure, multi-tier retail application on GKE, highlighting the key networking components used in each phase of deployment and scaling.
- Phase 1: Build the platform foundation Challenge: Centralize networking for multiple application teams and allocate sufficient IP addresses to handle scaling.
- You need to centralize network control, conserve IP addresses, and enforce strict security.
- Configure Tier 1 networking on critical nodes for maximum throughput.

### Explore GKE networking documentation and use cases \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/explore-gke-networking-docs-use-cases](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/explore-gke-networking-docs-use-cases)
- Source ID: `site-iam-reference`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- An end-to-end architecture for a secure, multi-tier retail application on GKE, highlighting the key networking components used in each phase of deployment and scaling.
- Phase 1: Build the platform foundation Challenge: Centralize networking for multiple application teams and allocate sufficient IP addresses to handle scaling.
- You need to centralize network control, conserve IP addresses, and enforce strict security.
- Configure Tier 1 networking on critical nodes for maximum throughput.

### "Configure domain names with static IP addresses \_|\_ GKE networking \_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/configuring-domain-name-static-ip](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/configuring-domain-name-static-ip)
- Source ID: `site-docs-root`
- Final score: 117
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can install kubectl using gcloud : gcloud components install kubectl Clone the sample code from GitHub: git clone https://github.com/GoogleCloudPlatform/kubernetes-engine-samples cd kubernetes-engine-samples/quickstarts/hello-app/manifests Set defaults for the gcloud command-line tool To save time typing your project ID and Compute Engine zone options in the gcloud command-line tool, you can set the defaults: gcloud config set project project-id gcloud config set compute/zone compute-zone Create a cluster Create a cluster: gcloud container clusters create-auto domain-test Deploy your web application The following manifest describes a Deployment that runs a sample web application container image: apiVersion : apps/v1 kind : Deployment metadata : name : helloweb labels : app : hello spec : selector : matchLabels : app : hello tier : web template : metadata : labels : app : hello tier : web spec : containers : - name : hello-app image : us-docker.pkg.dev/google-samples/containers/gke/hello-app:1.0 ports : - containerPort : 8080 resources : requests : cpu : 200m Create the Deployment: kubectl apply -f helloweb-deployment.yaml Expose your application You can expose your application on GKE using either of the following methods: Use a Service , which creates an external passthrough Network Load Balancer that works with regional IP addresses.
- Apply the manifest to your cluster: kubectl apply -f compute-address-regional.yaml Find the static IP address that you created: kubectl get computeaddress helloweb-ip -o jsonpath = '{.spec.address}' The following manifest describes a Service of type LoadBalancer, which creates an external passthrough Network Load Balancer to expose Pods with an external IP address. apiVersion : v1 kind : Service metadata : name : helloweb labels : app : hello annotations : networking.gke.io/load-balancer-ip-addresses : "helloweb-ip" spec : selector : app : hello tier : web ports : - port : 80 targetPort : 8080 type : LoadBalancer Create the Service: kubectl apply -f helloweb-service-static-ip.yaml View the reserved IP address associated with the load balancer: kubectl get service The output is similar to the following: NAME CLUSTER-IP EXTERNAL-IP PORT(S) AGE helloweb 10.31.254.176 203.0.113.32 80:30690/TCP 54s Note: Provisioning and configuring the load balancer might take a few minutes.
- Apply the manifest to your cluster: kubectl apply -f compute-address-global.yaml The following manifest describes an Ingress that exposes a web application on a static IP with two resources: A Service with type:NodePort An Ingress configured with the service name and static IP annotation apiVersion : networking.k8s.io/v1 kind : Ingress metadata : name : helloweb annotations : kubernetes.io/ingress.global-static-ip-name : helloweb-ip labels : app : hello spec : defaultBackend : service : name : helloweb-backend port : number : 8080 --- apiVersion : v1 kind : Service metadata : name : helloweb-backend labels : app : hello spec : type : NodePort selector : app : hello tier : web ports : - port : 8080 targetPort : 8080 The kubernetes.io/ingress.global-static-ip-name annotation specifies the name of the global IP address resource to be associated with the load balancer.
- Home Technology areas Google Kubernetes Engine (GKE) GKE networking Guides Send feedback Configure domain names with static IP addresses Stay organized with collections Save and categorize content based on your preferences.

