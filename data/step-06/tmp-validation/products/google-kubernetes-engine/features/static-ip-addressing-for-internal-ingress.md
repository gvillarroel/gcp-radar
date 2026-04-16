---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.410Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Static IP addressing for internal Ingress"
feature_slug: "static-ip-addressing-for-internal-ingress"
latest_feature_date: "2020-11-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/configuring-domain-name-static-ip"
keywords:
  - "static"
  - "addressing"
  - "internal"
  - "available"
  - "ingress"
  - "beta"
---

# Static IP addressing for internal Ingress

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Static IP addressing for internal Ingress is available in beta.

## Extended Definition

Static IP addressing for internal Ingress is available in beta.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/configuring-domain-name-static-ip](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/configuring-domain-name-static-ip)

## Supporting Pages

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- The following upcoming GKE on AWS versions or newer will include the fix for this vulnerability, and this bulletin will be updated when they are available: 1.5.0-gke.6 1.4.3-gke.7 Drop the CAP NET RAW capability from containers with one of the following methods: Enforce blocking these capabilities with PodSecurityPolicy , for example: Require dropping CAP NET RAW with a PSP apiversion: extensions/v1beta1 kind: PodSecurityPolicy metadata: name: no-cap-net-raw spec: requiredDropCapabilities: -NET RAW ...
- Medium GKE clusters on Description Severity Updated: 2021-12-22 The command for GKE in the following section should use gcloud beta instead of the gcloud command. gcloud beta container clusters update –no-enable-service-externalips Updated: 2021-12-15 For GKE, the following mitigation is now available: Starting in GKE version 1.21, services with ExternalIPs are blocked by a DenyServiceExternalIPs admission controller that is enabled by default for new clusters.
- Medium GKE clusters on Description Severity Updated: 2021-12-22 The command for GKE in the following section should use gcloud beta instead of the gcloud command. gcloud beta container clusters update –no-enable-service-externalips Updated: 2021-12-15 For GKE, the following mitigation is now available: Starting in GKE version 1.21, services with ExternalIPs are blocked by a DenyServiceExternalIPs admission controller that is enabled by default for new clusters.
- GKE Description Severity Updated: 2021-12-22 The command for GKE in the following section should use gcloud beta instead of the gcloud command. gcloud beta container clusters update –no-enable-service-externalips Updated: 2021-12-15 For GKE, the following mitigation is now available: Starting in GKE version 1.21, services with ExternalIPs are blocked by a DenyServiceExternalIPs admission controller that is enabled by default for new clusters.

### "Configure domain names with static IP addresses \_|\_ GKE networking \_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/configuring-domain-name-static-ip](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/configuring-domain-name-static-ip)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To expose your application to clients and services in a region, use a regional static internal IP address while deploying an internal ingress resource for GKE along with the required annotations .
- Apply the manifest to your cluster: kubectl apply -f compute-address-global.yaml The following manifest describes an Ingress that exposes a web application on a static IP with two resources: A Service with type:NodePort An Ingress configured with the service name and static IP annotation apiVersion : networking.k8s.io/v1 kind : Ingress metadata : name : helloweb annotations : kubernetes.io/ingress.global-static-ip-name : helloweb-ip labels : app : hello spec : defaultBackend : service : name : helloweb-backend port : number : 8080 --- apiVersion : v1 kind : Service metadata : name : helloweb-backend labels : app : hello spec : type : NodePort selector : app : hello tier : web ports : - port : 8080 targetPort : 8080 The kubernetes.io/ingress.global-static-ip-name annotation specifies the name of the global IP address resource to be associated with the load balancer.
- Objectives This tutorial demonstrates the following steps: Reserve a static external IP address for your application Configure either Service or Ingress resources to use the static IP address Update DNS records of your domain name to point to your application Costs In this document, you use the following billable components of Google Cloud: GKE To generate a cost estimate based on your projected usage, use the pricing calculator .
- Apply the manifest to your cluster: kubectl apply -f helloweb-ingress-static-ip.yaml View the IP address associated with the load balancer: kubectl get ingress The output is similar to the following NAME HOSTS ADDRESS PORTS AGE helloweb 203.0.113.32 80 4m Note: Provisioning and configuring the load balancer might take a few minutes.

### "Set up an external Application Load Balancer with Ingress \_|\_ GKE networking\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Follow the installation instructions to install Config Connector on your cluster. apiVersion : compute.cnrm.cloud.google.com/v1beta1 kind : ComputeAddress metadata : name : web-static-ip spec : location : global To deploy this manifest, download it to your machine as compute-address.yaml, and run: kubectl apply -f compute-address.yaml The basic-ingress-static.yaml manifest adds an annotation on Ingress to use the static IP resource named web-static-ip : apiVersion : networking.k8s.io/v1 kind : Ingress metadata : name : basic-ingress annotations : kubernetes.io/ingress.global-static-ip-name : "web-static-ip" spec : defaultBackend : service : name : web port : number : 8080 View the manifest: cat basic-ingress-static.yaml Apply the resource to the cluster: kubectl apply -f basic-ingress-static.yaml Check the external IP address: kubectl get ingress basic-ingress Wait until the IP address of your application changes to use the reserved IP address of the web-static-ip resource.
- The following manifest describes a Deployment with version 2.0 of the same web application: apiVersion : apps/v1 kind : Deployment metadata : name : web2 namespace : default spec : selector : matchLabels : run : web2 template : metadata : labels : run : web2 spec : containers : - image : us-docker.pkg.dev/google-samples/containers/gke/hello-app:2.0 imagePullPolicy : IfNotPresent name : web2 ports : - containerPort : 8080 protocol : TCP Apply the resource to the cluster: kubectl apply -f web-deployment-v2.yaml The following manifest describes a Service that exposes web2 internally to the cluster on a NodePort Service called web2 : apiVersion : v1 kind : Service metadata : name : web2 namespace : default spec : ports : - port : 8080 protocol : TCP targetPort : 8080 selector : run : web2 type : NodePort Apply the resource to the cluster: kubectl apply -f web-service-v2.yaml The following manifest describes an Ingress resource that: routes the requests with path starting with /v2/ to the web2 Service routes all other requests to the web Service apiVersion : networking.k8s.io/v1 kind : Ingress metadata : name : fanout-ingress spec : rules : - http : paths : - path : / pathType : ImplementationSpecific backend : service : name : web port : number : 8080 - path : /v2/ pathType : ImplementationSpecific backend : service : name : web2 port : number : 8080 Apply the resource to the cluster: kubectl create -f fanout-ingress.yaml After the Ingress is deployed, run kubectl get ingress fanout-ingress to find out the public IP address of the cluster.
- If you followed "Option 2" to create a new static IP address, then run the following command to delete the static IP address: gcloud compute addresses delete web-static-ip --global Delete the cluster: This step deletes the compute nodes of your container cluster and other resources such as the Deployments in the cluster: gcloud container clusters delete loadbalancedcluster What's next Check out the Ingress user guide for details about Ingress features.
- Delete the Ingress: This step deallocates the ephemeral external IP address and the load balancing resources associated with your application: kubectl delete ingress basic-ingress If you followed the optional step to create an Ingress to route requests by path, then delete the Ingress: kubectl delete ingress fanout-ingress Delete the static IP address: Complete this step only if you followed the optional step to create a static IP address.

