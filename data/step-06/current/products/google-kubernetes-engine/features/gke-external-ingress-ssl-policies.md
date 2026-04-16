---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.954Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "GKE external Ingress SSL policies"
feature_slug: "gke-external-ingress-ssl-policies"
latest_feature_date: "2020-11-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview"
keywords:
  - "gke"
  - "external"
  - "ingress"
  - "ssl"
  - "policies"
  - "lets"
  - "use"
  - "choose"
---

# GKE external Ingress SSL policies

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Lets external GKE Ingress use SSL policies to choose TLS versions and ciphers.

## Extended Definition

Lets external GKE Ingress use SSL policies to choose TLS versions and ciphers.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview)

## Supporting Pages

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- Check if your GKE clusters are using ingress-nginx by using one of the following commands: Check an individual cluster: kubectl get pods --all-namespaces --selector app.kubernetes.io/name = ingress-nginx Check multiple clusters at once using a Cloud Asset Inventory resource search query : gcloud asset search-all-resources \ --scope = 'organizations/ ORGANIZATION ID ' \ --asset-types = 'k8s.io/Pod' \ --query = 'labels."app.kubernetes.io/name"="ingress-nginx"' Replace ORGANIZATION ID with your organization resource ID.
- Medium GKE clusters on Description Severity Updated: 2021-12-22 The command for GKE in the following section should use gcloud beta instead of the gcloud command. gcloud beta container clusters update –no-enable-service-externalips Updated: 2021-12-15 For GKE, the following mitigation is now available: Starting in GKE version 1.21, services with ExternalIPs are blocked by a DenyServiceExternalIPs admission controller that is enabled by default for new clusters.
- Medium GKE clusters on Description Severity Updated: 2021-12-22 The command for GKE in the following section should use gcloud beta instead of the gcloud command. gcloud beta container clusters update –no-enable-service-externalips Updated: 2021-12-15 For GKE, the following mitigation is now available: Starting in GKE version 1.21, services with ExternalIPs are blocked by a DenyServiceExternalIPs admission controller that is enabled by default for new clusters.
- For security purposes, even if you have node auto-upgrades enabled, we recommend that you manually upgrade your node pools to one of the following GKE versions: Container-Optimized OS: 1.21.14-gke.7100 and later Ubuntu: 1.21.14-gke.9400 and later 1.22.15-gke.2400 and later 1.23.13-gke.800 and later 1.24.7-gke.800 and later 1.25.3-gke.700 and later A recent feature of release channels lets you apply a patch without having to unsubscribe from a channel.

### "Set up an external Application Load Balancer with Ingress \_|\_ GKE networking\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer)
- Source ID: `site-docs-root`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- Follow the installation instructions to install Config Connector on your cluster. apiVersion : compute.cnrm.cloud.google.com/v1beta1 kind : ComputeAddress metadata : name : web-static-ip spec : location : global To deploy this manifest, download it to your machine as compute-address.yaml, and run: kubectl apply -f compute-address.yaml The basic-ingress-static.yaml manifest adds an annotation on Ingress to use the static IP resource named web-static-ip : apiVersion : networking.k8s.io/v1 kind : Ingress metadata : name : basic-ingress annotations : kubernetes.io/ingress.global-static-ip-name : "web-static-ip" spec : defaultBackend : service : name : web port : number : 8080 View the manifest: cat basic-ingress-static.yaml Apply the resource to the cluster: kubectl apply -f basic-ingress-static.yaml Check the external IP address: kubectl get ingress basic-ingress Wait until the IP address of your application changes to use the reserved IP address of the web-static-ip resource.
- Delete the Ingress: This step deallocates the ephemeral external IP address and the load balancing resources associated with your application: kubectl delete ingress basic-ingress If you followed the optional step to create an Ingress to route requests by path, then delete the Ingress: kubectl delete ingress fanout-ingress Delete the static IP address: Complete this step only if you followed the optional step to create a static IP address.
- Visiting your application Find out the external IP address of the load balancer serving your application by running: kubectl get ingress basic-ingress Output: NAME HOSTS ADDRESS PORTS AGE basic-ingress 203.0.113.12 80 2m Note: It might take a few minutes for GKE to allocate an external IP address and set up forwarding rules before the load balancer is ready to serve your application.
- Version: 1.0.0 Hostname: web-6498765b79-fq5q5 You can visit Load Balancing on the Google Cloud console and inspect the networking resources created by the GKE Ingress controller. (Optional) Configuring a static IP address When you expose a web server on a domain name, you need the external IP address of an application to be a static IP that does not change.

### "GKE Autopilot overview \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview)
- Source ID: `site-iam-reference`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- Load balance incoming traffic To load balance external HTTP(S) traffic to multiple Services based on URIs and paths, for example a complex web application, use Ingress for external Application Load Balancers .
- To load balance internal HTTP(S) traffic to multiple Services based on URIs and paths, such as with a web application in your company intranet, use Ingress for internal Application Load Balancers .
- To load balance external traffic to a single Service, such as a Deployment running a public email server, use a LoadBalancer Service to create an external passthrough Network Load Balancer.
- In these cases, you can still use Autopilot for specific workloads in your Standard clusters, which lets you benefit from many Autopilot features at the workload level.

