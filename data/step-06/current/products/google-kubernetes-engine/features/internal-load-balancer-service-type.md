---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.961Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Internal load balancer Service type"
feature_slug: "internal-load-balancer-service-type"
latest_feature_date: "2020-08-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/quickstarts/create-cluster-using-terraform"
keywords:
  - "internal"
  - "load"
  - "balancer"
  - "type"
  - "generally"
  - "available"
  - "gke"
  - "17"
---

# Internal load balancer Service type

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

The internal load balancer Service type is generally available in GKE 1.17.9-gke.600 and later.

## Extended Definition

The internal load balancer Service type is generally available in GKE 1.17.9-gke.600 and later.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- [https://docs.cloud.google.com/kubernetes-engine/docs/quickstarts/create-cluster-using-terraform](https://docs.cloud.google.com/kubernetes-engine/docs/quickstarts/create-cluster-using-terraform)

## Supporting Pages

### "Set up an external Application Load Balancer with Ingress \_|\_ GKE networking\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer)
- Source ID: `site-docs-root`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- You can install kubectl using gcloud : gcloud components install kubectl Clone the sample code from GitHub: git clone https://github.com/GoogleCloudPlatform/kubernetes-engine-samples cd kubernetes-engine-samples/networking/load-balancing Set defaults for the gcloud command-line tool To save time typing your project ID and Compute Engine zone options in the gcloud command-line tool, you can set the defaults: gcloud config set project project-id gcloud config set compute/zone compute-zone Create a GKE cluster Create a GKE Autopilot cluster: gcloud container clusters create-auto loadbalancedcluster Deploying a web application The following manifest describes a Deployment that runs the sample web application container image on an HTTP server on port 8080: apiVersion : apps/v1 kind : Deployment metadata : name : web namespace : default spec : selector : matchLabels : run : web template : metadata : labels : run : web spec : containers : - image : us-docker.pkg.dev/google-samples/containers/gke/hello-app:1.0 imagePullPolicy : IfNotPresent name : web ports : - containerPort : 8080 protocol : TCP Apply the resource to the cluster: kubectl apply -f web-deployment.yaml Exposing your Deployment inside your cluster The following manifest describes a Service that makes the web deployment accessible within your container cluster: apiVersion : v1 kind : Service metadata : name : web namespace : default spec : ports : - port : 8080 protocol : TCP targetPort : 8080 selector : run : web type : NodePort Apply the resource to the cluster: kubectl apply -f web-service.yaml When you create a Service of type NodePort with this command, GKE makes your Service available on a randomly selected high port number (e.g.
- Background Google Kubernetes Engine (GKE) offers integrated support for two types of Cloud Load Balancing for a publicly accessible application: Ingress External passthrough Network Load Balancer In this tutorial, you use Ingresses .
- The load balancer's URL map's host rules and path matchers reference one or more backend services, where each backend service corresponds to a GKE Service of type NodePort , as referenced in the Ingress .
- The following manifest describes a Deployment with version 2.0 of the same web application: apiVersion : apps/v1 kind : Deployment metadata : name : web2 namespace : default spec : selector : matchLabels : run : web2 template : metadata : labels : run : web2 spec : containers : - image : us-docker.pkg.dev/google-samples/containers/gke/hello-app:2.0 imagePullPolicy : IfNotPresent name : web2 ports : - containerPort : 8080 protocol : TCP Apply the resource to the cluster: kubectl apply -f web-deployment-v2.yaml The following manifest describes a Service that exposes web2 internally to the cluster on a NodePort Service called web2 : apiVersion : v1 kind : Service metadata : name : web2 namespace : default spec : ports : - port : 8080 protocol : TCP targetPort : 8080 selector : run : web2 type : NodePort Apply the resource to the cluster: kubectl apply -f web-service-v2.yaml The following manifest describes an Ingress resource that: routes the requests with path starting with /v2/ to the web2 Service routes all other requests to the web Service apiVersion : networking.k8s.io/v1 kind : Ingress metadata : name : fanout-ingress spec : rules : - http : paths : - path : / pathType : ImplementationSpecific backend : service : name : web port : number : 8080 - path : /v2/ pathType : ImplementationSpecific backend : service : name : web2 port : number : 8080 Apply the resource to the cluster: kubectl create -f fanout-ingress.yaml After the Ingress is deployed, run kubectl get ingress fanout-ingress to find out the public IP address of the cluster.

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- As mentioned in the Kubernetes announcement , no mitigation is provided for Services of type LoadBalancer because, by default, only highly privileged users and system components are granted the container.services.updateStatus permission which is required to leverage this vulnerability.
- As mentioned in the Kubernetes announcement , no mitigation is provided for Services of type LoadBalancer because, by default, only highly privileged users and system components are granted the container.services.updateStatus permission which is required to leverage this vulnerability.
- As mentioned in the Kubernetes announcement , no mitigation is provided for Services of type LoadBalancer because, by default, only highly privileged users and system components are granted the container.services.updateStatus permission which is required to leverage this vulnerability.
- The Kubernetes project recently discovered a new security vulnerability, CVE-2020-8554 , that might allow an attacker who has obtained permissions to create a Kubernetes Service of type LoadBalancer or ClusterIP to intercept network traffic originating from other Pods in the cluster.

### "Quickstart: Create a GKE cluster and deploy a workload using Terraform \_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/quickstarts/create-cluster-using-terraform](https://docs.cloud.google.com/kubernetes-engine/docs/quickstarts/create-cluster-using-terraform)
- Source ID: `site-docs-root`
- Final score: 145
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To expose the demo application to the internet: In cluster.tf , change ipv6 access type from INTERNAL to EXTERNAL . ipv6 access type = "EXTERNAL" In app.tf , configure an external load balancer by removing the networking.gke.io/load-balancer-type annotation. annotations = { "networking.gke.io/load-balancer-type" = "Internal" # Remove this line } Create a cluster and deploy an application In Cloud Shell, run this command to verify that Terraform is available: terraform The output should be similar to the following: Usage: terraform [global options] <subcommand> [args] The available commands for execution are listed below.
- Review the app.tf file: cat app.tf The output is similar to the following: data "google client config" "default" {} provider "kubernetes" { host = "https://${google container cluster.default.endpoint}" token = data.google client config.default.access token cluster ca certificate = base64decode ( google container cluster.default.master auth[0].cluster ca certificate ) ignore annotations = [ "^autopilot\\.gke\\.io\\/. " , "^cloud\\.google\\.com\\/. " ] } resource "kubernetes deployment v1" "default" { metadata { name = "example-hello-app-deployment" } spec { selector { match labels = { app = "hello-app" } } template { metadata { labels = { app = "hello-app" } } spec { container { image = "us-docker.pkg.dev/google-samples/containers/gke/hello-app:2.0" name = "hello-app-container" port { container port = 8080 name = "hello-app-svc" } security context { allow privilege escalation = false privileged = false read only root filesystem = false capabilities { add = [] drop = [ "NET RAW" ] } } liveness probe { http get { path = "/" port = "hello-app-svc" http header { name = "X-Custom-Header" value = "Awesome" } } initial delay seconds = 3 period seconds = 3 } } security context { run as non root = true seccomp profile { type = "RuntimeDefault" } } Toleration is currently required to prevent perpetual diff: https://github.com/hashicorp/terraform-provider-kubernetes/pull/2380 toleration { effect = "NoSchedule" key = "kubernetes.io/arch" operator = "Equal" value = "amd64" } } } } } resource "kubernetes service v1" "default" { metadata { name = "example-hello-app-loadbalancer" annotations = { "networking.gke.io/load-balancer-type" = "Internal" # Remove to create an external loadbalancer } } spec { selector = { app = kubernetes deployment v1.default.spec[0].selector[0].match labels.app } ip family policy = "RequireDualStack" port { port = 80 target port = kubernetes deployment v1.default.spec[0].template[0].spec[0].container[0].port[0].name } type = "LoadBalancer" } depends on = [ time sleep.wait service cleanup ] } Provide time for Service cleanup resource "time sleep" "wait service cleanup" { depends on = [ google container cluster.default ] destroy duration = "180s" } This file describes the following resources: A Deployment with a sample container image.
- Review the cluster.tf file: cat cluster.tf The output is similar to the following resource "google compute network" "default" { name = "example-network" auto create subnetworks = false enable ula internal ipv6 = true } resource "google compute subnetwork" "default" { name = "example-subnetwork" ip cidr range = "10.0.0.0/16" region = "us-central1" stack type = "IPV4 IPV6" ipv6 access type = "INTERNAL" # Change to "EXTERNAL" if creating an external loadbalancer network = google compute network.default.id secondary ip range { range name = "services-range" ip cidr range = "192.168.0.0/24" } secondary ip range { range name = "pod-ranges" ip cidr range = "192.168.1.0/24" } } resource "google container cluster" "default" { name = "example-autopilot-cluster" location = "us-central1" enable autopilot = true enable l4 ilb subsetting = true network = google compute network.default.id subnetwork = google compute subnetwork.default.id ip allocation policy { stack type = "IPV4 IPV6" services secondary range name = google compute subnetwork.default.secondary ip range[0].range name cluster secondary range name = google compute subnetwork.default.secondary ip range[1].range name } Set deletion protection to true will ensure that one cannot accidentally delete this instance by use of Terraform. deletion protection = false } This file describes the following resources: google compute network : a VPC network with internal IPv6 enabled. google compute subnetwork : a dual-stack subnetwork . google container cluster : a dual-stack Autopilot mode cluster located in us-central1 .
- A Service of type LoadBalancer .

