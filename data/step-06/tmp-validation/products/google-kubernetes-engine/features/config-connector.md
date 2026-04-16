---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.447Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Config Connector"
feature_slug: "config-connector"
latest_feature_date: "2020-01-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/configuring-domain-name-static-ip"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra"
keywords:
  - "connector"
  - "config"
  - "through"
  - "resources"
  - "manage"
  - "lets"
---

# Config Connector

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Config Connector lets you manage Google Cloud resources through Kubernetes configuration.

## Extended Definition

Config Connector lets you manage Google Cloud resources through Kubernetes configuration.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/configuring-domain-name-static-ip](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/configuring-domain-name-static-ip)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra)

## Supporting Pages

### "Configure domain names with static IP addresses \_|\_ GKE networking \_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/configuring-domain-name-static-ip](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/configuring-domain-name-static-ip)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can install kubectl using gcloud : gcloud components install kubectl Clone the sample code from GitHub: git clone https://github.com/GoogleCloudPlatform/kubernetes-engine-samples cd kubernetes-engine-samples/quickstarts/hello-app/manifests Set defaults for the gcloud command-line tool To save time typing your project ID and Compute Engine zone options in the gcloud command-line tool, you can set the defaults: gcloud config set project project-id gcloud config set compute/zone compute-zone Create a cluster Create a cluster: gcloud container clusters create-auto domain-test Deploy your web application The following manifest describes a Deployment that runs a sample web application container image: apiVersion : apps/v1 kind : Deployment metadata : name : helloweb labels : app : hello spec : selector : matchLabels : app : hello tier : web template : metadata : labels : app : hello tier : web spec : containers : - name : hello-app image : us-docker.pkg.dev/google-samples/containers/gke/hello-app:1.0 ports : - containerPort : 8080 resources : requests : cpu : 200m Create the Deployment: kubectl apply -f helloweb-deployment.yaml Expose your application You can expose your application on GKE using either of the following methods: Use a Service , which creates an external passthrough Network Load Balancer that works with regional IP addresses.
- Apply the manifest to your cluster: kubectl apply -f compute-address-regional.yaml Find the static IP address that you created: kubectl get computeaddress helloweb-ip -o jsonpath = '{.spec.address}' The following manifest describes a Service of type LoadBalancer, which creates an external passthrough Network Load Balancer to expose Pods with an external IP address. apiVersion : v1 kind : Service metadata : name : helloweb labels : app : hello annotations : networking.gke.io/load-balancer-ip-addresses : "helloweb-ip" spec : selector : app : hello tier : web ports : - port : 80 targetPort : 8080 type : LoadBalancer Create the Service: kubectl apply -f helloweb-service-static-ip.yaml View the reserved IP address associated with the load balancer: kubectl get service The output is similar to the following: NAME CLUSTER-IP EXTERNAL-IP PORT(S) AGE helloweb 10.31.254.176 203.0.113.32 80:30690/TCP 54s Note: Provisioning and configuring the load balancer might take a few minutes.
- Apply the manifest to your cluster: kubectl apply -f compute-address-global.yaml The following manifest describes an Ingress that exposes a web application on a static IP with two resources: A Service with type:NodePort An Ingress configured with the service name and static IP annotation apiVersion : networking.k8s.io/v1 kind : Ingress metadata : name : helloweb annotations : kubernetes.io/ingress.global-static-ip-name : helloweb-ip labels : app : hello spec : defaultBackend : service : name : helloweb-backend port : number : 8080 --- apiVersion : v1 kind : Service metadata : name : helloweb-backend labels : app : hello spec : type : NodePort selector : app : hello tier : web ports : - port : 8080 targetPort : 8080 The kubernetes.io/ingress.global-static-ip-name annotation specifies the name of the global IP address resource to be associated with the load balancer.
- Objectives This tutorial demonstrates the following steps: Reserve a static external IP address for your application Configure either Service or Ingress resources to use the static IP address Update DNS records of your domain name to point to your application Costs In this document, you use the following billable components of Google Cloud: GKE To generate a cost estimate based on your projected usage, use the pricing calculator .

### "Allocate network resources by using GKE managed DRANET \_|\_ GKE networking\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra)
- Source ID: `site-docs-reference-2`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- Verify networking DeviceClasses Verify that the DeviceClass resources for networking exist in your cluster. kubectl get deviceclass netdev.google.com The output is similar to the following: NAME AGE netdev.google.com 2d22h Enable GKE managed DRANET driver on a TPU slice node pool To enable the GKE DRANET driver when creating a TPU slice node pool, add the cloud.google.com/gke-networking-dra-driver=true label. gcloud beta container node-pools create NODE POOL NAME \ --location = LOCATION \ --cluster = CLUSTER NAME \ --node-locations = NODE LOCATIONS \ --machine-type = MACHINE TYPE \ --tpu-topology = TPU TOPOLOGY \ --num-nodes = NUM NODES \ --accelerator-network-profile = auto \ --node-labels = cloud.google.com/gke-networking-dra-driver = true Replace the following: NODE POOL NAME : The name of your new node pool.
- Before reading this document, ensure that you are familiar with the following: Dynamic Resource Allocation About dynamic resource allocation in GKE Kubernetes concepts GKE networking GKE Networking fundamentals How GKE managed DRANET works GKE managed DRANET is implemented through a networking-dra-driver DaemonSet.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) GKE networking Guides Send feedback Allocate network resources by using GKE managed DRANET Stay organized with collections Save and categorize content based on your preferences.
- Autopilot Standard Google Kubernetes Engine (GKE) DRANET is a managed GKE feature that builds upon the open-source DRANET project, which implements the Kubernetes DRA API for networking resources.

### "Set up an external Application Load Balancer with Ingress \_|\_ GKE networking\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Follow the installation instructions to install Config Connector on your cluster. apiVersion : compute.cnrm.cloud.google.com/v1beta1 kind : ComputeAddress metadata : name : web-static-ip spec : location : global To deploy this manifest, download it to your machine as compute-address.yaml, and run: kubectl apply -f compute-address.yaml The basic-ingress-static.yaml manifest adds an annotation on Ingress to use the static IP resource named web-static-ip : apiVersion : networking.k8s.io/v1 kind : Ingress metadata : name : basic-ingress annotations : kubernetes.io/ingress.global-static-ip-name : "web-static-ip" spec : defaultBackend : service : name : web port : number : 8080 View the manifest: cat basic-ingress-static.yaml Apply the resource to the cluster: kubectl apply -f basic-ingress-static.yaml Check the external IP address: kubectl get ingress basic-ingress Wait until the IP address of your application changes to use the reserved IP address of the web-static-ip resource.
- Version: 1.0.0 Hostname: web-6498765b79-fq5q5 You can visit Load Balancing on the Google Cloud console and inspect the networking resources created by the GKE Ingress controller. (Optional) Configuring a static IP address When you expose a web server on a domain name, you need the external IP address of an application to be a static IP that does not change.
- To configure a static IP address, complete the following steps: Reserve a static external IP address named web-static-ip : gcloud gcloud compute addresses create web-static-ip --global Config Connector Note: This step requires Config Connector .
- You can install kubectl using gcloud : gcloud components install kubectl Clone the sample code from GitHub: git clone https://github.com/GoogleCloudPlatform/kubernetes-engine-samples cd kubernetes-engine-samples/networking/load-balancing Set defaults for the gcloud command-line tool To save time typing your project ID and Compute Engine zone options in the gcloud command-line tool, you can set the defaults: gcloud config set project project-id gcloud config set compute/zone compute-zone Create a GKE cluster Create a GKE Autopilot cluster: gcloud container clusters create-auto loadbalancedcluster Deploying a web application The following manifest describes a Deployment that runs the sample web application container image on an HTTP server on port 8080: apiVersion : apps/v1 kind : Deployment metadata : name : web namespace : default spec : selector : matchLabels : run : web template : metadata : labels : run : web spec : containers : - image : us-docker.pkg.dev/google-samples/containers/gke/hello-app:1.0 imagePullPolicy : IfNotPresent name : web ports : - containerPort : 8080 protocol : TCP Apply the resource to the cluster: kubectl apply -f web-deployment.yaml Exposing your Deployment inside your cluster The following manifest describes a Service that makes the web deployment accessible within your container cluster: apiVersion : v1 kind : Service metadata : name : web namespace : default spec : ports : - port : 8080 protocol : TCP targetPort : 8080 selector : run : web type : NodePort Apply the resource to the cluster: kubectl apply -f web-service.yaml When you create a Service of type NodePort with this command, GKE makes your Service available on a randomly selected high port number (e.g.

