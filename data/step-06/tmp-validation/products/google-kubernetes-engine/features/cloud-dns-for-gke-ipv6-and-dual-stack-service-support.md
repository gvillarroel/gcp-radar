---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.269Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Cloud DNS for GKE IPv6 and dual-stack service support"
feature_slug: "cloud-dns-for-gke-ipv6-and-dual-stack-service-support"
latest_feature_date: "2023-01-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/quickstarts/create-cluster-using-terraform"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/elk-stack"
keywords:
  - "singlestack"
  - "ipv6"
  - "dual"
  - "stack"
  - "supports"
---

# Cloud DNS for GKE IPv6 and dual-stack service support

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Cloud DNS for GKE now supports SingleStack IPv6 and DualStack services.

## Extended Definition

Cloud DNS for GKE now supports SingleStack IPv6 and DualStack services.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/quickstarts/create-cluster-using-terraform](https://docs.cloud.google.com/kubernetes-engine/docs/quickstarts/create-cluster-using-terraform)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/elk-stack](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/elk-stack)

## Supporting Pages

### "Quickstart: Create a GKE cluster and deploy a workload using Terraform \_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/quickstarts/create-cluster-using-terraform](https://docs.cloud.google.com/kubernetes-engine/docs/quickstarts/create-cluster-using-terraform)
- Source ID: `site-docs-root`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- Review the cluster.tf file: cat cluster.tf The output is similar to the following resource "google compute network" "default" { name = "example-network" auto create subnetworks = false enable ula internal ipv6 = true } resource "google compute subnetwork" "default" { name = "example-subnetwork" ip cidr range = "10.0.0.0/16" region = "us-central1" stack type = "IPV4 IPV6" ipv6 access type = "INTERNAL" # Change to "EXTERNAL" if creating an external loadbalancer network = google compute network.default.id secondary ip range { range name = "services-range" ip cidr range = "192.168.0.0/24" } secondary ip range { range name = "pod-ranges" ip cidr range = "192.168.1.0/24" } } resource "google container cluster" "default" { name = "example-autopilot-cluster" location = "us-central1" enable autopilot = true enable l4 ilb subsetting = true network = google compute network.default.id subnetwork = google compute subnetwork.default.id ip allocation policy { stack type = "IPV4 IPV6" services secondary range name = google compute subnetwork.default.secondary ip range[0].range name cluster secondary range name = google compute subnetwork.default.secondary ip range[1].range name } Set deletion protection to true will ensure that one cannot accidentally delete this instance by use of Terraform. deletion protection = false } This file describes the following resources: google compute network : a VPC network with internal IPv6 enabled. google compute subnetwork : a dual-stack subnetwork . google container cluster : a dual-stack Autopilot mode cluster located in us-central1 .
- Review the app.tf file: cat app.tf The output is similar to the following: data "google client config" "default" {} provider "kubernetes" { host = "https://${google container cluster.default.endpoint}" token = data.google client config.default.access token cluster ca certificate = base64decode ( google container cluster.default.master auth[0].cluster ca certificate ) ignore annotations = [ "^autopilot\\.gke\\.io\\/. " , "^cloud\\.google\\.com\\/. " ] } resource "kubernetes deployment v1" "default" { metadata { name = "example-hello-app-deployment" } spec { selector { match labels = { app = "hello-app" } } template { metadata { labels = { app = "hello-app" } } spec { container { image = "us-docker.pkg.dev/google-samples/containers/gke/hello-app:2.0" name = "hello-app-container" port { container port = 8080 name = "hello-app-svc" } security context { allow privilege escalation = false privileged = false read only root filesystem = false capabilities { add = [] drop = [ "NET RAW" ] } } liveness probe { http get { path = "/" port = "hello-app-svc" http header { name = "X-Custom-Header" value = "Awesome" } } initial delay seconds = 3 period seconds = 3 } } security context { run as non root = true seccomp profile { type = "RuntimeDefault" } } Toleration is currently required to prevent perpetual diff: https://github.com/hashicorp/terraform-provider-kubernetes/pull/2380 toleration { effect = "NoSchedule" key = "kubernetes.io/arch" operator = "Equal" value = "amd64" } } } } } resource "kubernetes service v1" "default" { metadata { name = "example-hello-app-loadbalancer" annotations = { "networking.gke.io/load-balancer-type" = "Internal" # Remove to create an external loadbalancer } } spec { selector = { app = kubernetes deployment v1.default.spec[0].selector[0].match labels.app } ip family policy = "RequireDualStack" port { port = 80 target port = kubernetes deployment v1.default.spec[0].template[0].spec[0].container[0].port[0].name } type = "LoadBalancer" } depends on = [ time sleep.wait service cleanup ] } Provide time for Service cleanup resource "time sleep" "wait service cleanup" { depends on = [ google container cluster.default ] destroy duration = "180s" } This file describes the following resources: A Deployment with a sample container image.
- To expose the demo application to the internet: In cluster.tf , change ipv6 access type from INTERNAL to EXTERNAL . ipv6 access type = "EXTERNAL" In app.tf , configure an external load balancer by removing the networking.gke.io/load-balancer-type annotation. annotations = { "networking.gke.io/load-balancer-type" = "Internal" # Remove this line } Create a cluster and deploy an application In Cloud Shell, run this command to verify that Terraform is available: terraform The output should be similar to the following: Usage: terraform [global options] <subcommand> [args] The available commands for execution are listed below.
- Terraform is a popular open source IaC tool created by HashiCorp that supports a wide range of Cloud services, including GKE.

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- The patch mitigate the following vulnerability: The vulnerability described in Kubernetes issue 91507 CAP NET RAW capability (which is included in the default container capability set) to maliciously configure the IPv6 stack on the node and redirect node traffic to the attacker controlled container.
- The patch mitigate the following vulnerability: The vulnerability described in Kubernetes issue 91507 CAP NET RAW capability (which is included in the default container capability set) to maliciously configure the IPv6 stack on the node and redirect node traffic to the attacker controlled container.
- The patch mitigate the following vulnerability: The vulnerability described in Kubernetes issue 91507 CAP NET RAW capability (which is included in the default container capability set) to maliciously configure the IPv6 stack on the node and redirect node traffic to the attacker controlled container.
- Check if your GKE clusters are using ingress-nginx by using one of the following commands: Check an individual cluster: kubectl get pods --all-namespaces --selector app.kubernetes.io/name = ingress-nginx Check multiple clusters at once using a Cloud Asset Inventory resource search query : gcloud asset search-all-resources \ --scope = 'organizations/ ORGANIZATION ID ' \ --asset-types = 'k8s.io/Pod' \ --query = 'labels."app.kubernetes.io/name"="ingress-nginx"' Replace ORGANIZATION ID with your organization resource ID.

### Set up Elastic Stack on GKE \_|\_ Kubernetes Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/elk-stack](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/elk-stack)
- Source ID: `site-docs-root`
- Final score: 95
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Delete the Elastic Stack components, ECK operator, and kube-state-metrics: kubectl --namespace elastic-system delete ingresses.networking.k8s.io elastic-stack kubectl --namespace elastic-system delete managedcertificates.networking.gke.io elastic-stack kubectl --namespace elastic-system delete frontendconfigs.networking.gke.io elastic-stack kubectl --namespace elastic-system delete agents.agent.k8s.elastic.co elastic-agent kubectl --namespace elastic-system delete agents.agent.k8s.elastic.co fleet-server kubectl --namespace elastic-system delete kibanas.kibana.k8s.elastic.co kibana kubectl --namespace elastic-system delete elasticsearches.elasticsearch.k8s.elastic.co elasticsearch kubectl --namespace elastic-system delete daemonsets.apps max-map-count-setter kubectl --namespace elastic-system delete pvc --selector = 'elasticsearch.k8s.elastic.co/cluster-name=elasticsearch' helm --namespace elastic-system uninstall kube-state-metrics helm --namespace elastic-system uninstall elastic-operator Delete the DNS record set, IP address, DNS managed zone, and GKE cluster: gcloud dns record-sets delete "elk.
- See the License for the specific language governing permissions and limitations under the License. apiVersion : networking.gke.io/v1beta1 kind : FrontendConfig metadata : name : elastic-stack namespace : elastic-system spec : redirectToHttps : enabled : true responseCodeName : MOVED PERMANENTLY DEFAULT --- apiVersion : networking.gke.io/v1 kind : ManagedCertificate metadata : name : elastic-stack namespace : elastic-system spec : domains : - elk.BASE DOMAIN --- apiVersion : networking.k8s.io/v1 kind : Ingress metadata : name : kibana namespace : elastic-system annotations : networking.gke.io/managed-certificates : elastic-stack networking.gke.io/v1beta1.FrontendConfig : elastic-stack kubernetes.io/ingress.global-static-ip-name : elastic-stack kubernetes.io/ingress.class : gce spec : defaultBackend : service : name : kibana-kb-http port : number : 5601 This manifest describes a ManagedCertificate that provisions an SSL certificate to establish the TLS connection.
- Add a Helm chart repository and update it: helm repo add elastic https://helm.elastic.co helm repo update Clone the GitHub repository: git clone https://github.com/GoogleCloudPlatform/kubernetes-engine-samples.git Change to the working directory: cd kubernetes-engine-samples/observability/elastic-stack-tutorial Create a GKE cluster Create a GKE cluster with control plane metrics collection enabled: gcloud container clusters create-auto elk-stack \ --location = "us-central1" \ --monitoring = "SYSTEM,WORKLOAD,API SERVER,SCHEDULER,CONTROLLER MANAGER" Deploy the ECK operator Elastic Cloud on Kubernetes (ECK) is a platform for deploying and managing the Elastic Stack on Kubernetes clusters.
- BASE DOMAIN " \ --type = "A" \ --zone = "elk" \ --quiet gcloud compute addresses delete "elastic-stack" \ --global \ --quiet gcloud dns managed-zones delete "elk" --quiet gcloud container clusters delete "elk-stack" \ --location = "us-central1" \ --quiet What's next Explore reference architectures, diagrams, and best practices about Google Cloud.

