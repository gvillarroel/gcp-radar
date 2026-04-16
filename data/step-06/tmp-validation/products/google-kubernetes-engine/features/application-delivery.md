---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.448Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Application Delivery"
feature_slug: "application-delivery"
latest_feature_date: "2020-01-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/modern-cicd-gke-user-guide"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/right-size-workloads-at-scale"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/quickstarts/create-cluster-using-terraform"
keywords:
  - "delivery"
  - "configurations"
  - "declaratively"
  - "application"
  - "workload"
  - "manage"
---

# Application Delivery

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE can manage workload configurations declaratively from Git.

## Extended Definition

GKE can manage workload configurations declaratively from Git.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/modern-cicd-gke-user-guide](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/modern-cicd-gke-user-guide)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/right-size-workloads-at-scale](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/right-size-workloads-at-scale)
- [https://docs.cloud.google.com/kubernetes-engine/docs/quickstarts/create-cluster-using-terraform](https://docs.cloud.google.com/kubernetes-engine/docs/quickstarts/create-cluster-using-terraform)

## Supporting Pages

### "Modern CI/CD with GKE: A software delivery framework \_|\_ Google Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/modern-cicd-gke-user-guide](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/modern-cicd-gke-user-guide)
- Source ID: `site-docs-reference-required-5`
- Final score: 144
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Some common configuration items that you can manage centrally include the following: Kubernetes namespaces Quotas Role-based access controls (RBAC) Network policies You should consistently enforce these types of configurations throughout your clusters so that application teams don't misuse or abuse the infrastructure.
- Although this document describes methods to improve source control management and application observability, it focuses mainly on continuous integration (CI), continuous delivery (CD), and configuration management.
- This document is part of a series: Modern CI/CD with GKE: A software delivery framework (this document) Modern CI/CD with GKE: Build a CI/CD system (reference architecture) Modern CI/CD with GKE: Apply the developer workflow This document is intended for enterprise architects and application developers, as well as IT security, DevOps, and Site Reliability Engineering teams.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Guides Send feedback Modern CI/CD with GKE: A software delivery framework Stay organized with collections Save and categorize content based on your preferences.

### "Right-size your GKE workloads at scale \_|\_ Kubernetes Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/right-size-workloads-at-scale](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/right-size-workloads-at-scale)
- Source ID: `site-docs-reference-required-5`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- Verify that the sample application is ready: kubectl get deployment The output is similar to the following: NAME READY UP-TO-DATE AVAILABLE AGE adservice 2/2 2 2 4m54s cartservice 1/1 1 1 4m55s checkoutservice 1/1 1 1 4m56s currencyservice 1/1 1 1 4m55s emailservice 1/1 1 1 4m56s frontend 1/1 1 1 4m55s loadgenerator 1/1 1 1 4m55s paymentservice 1/1 1 1 4m55s productcatalogservice 1/1 1 1 4m55s recommendationservice 1/1 1 1 4m56s redis-cart 1/1 1 1 4m54s shippingservice 1/1 1 1 4m54s Warning: Workloads with HPA enabled may provide incorrect recommendations if they frequently trigger scaling events.
- Create a new Docker repository: gcloud artifacts repositories create main --repository-format = docker \ --location = $REGION \ --description = "docker repository" Setup authentication to Docker repositories: gcloud auth configure-docker $REGION -docker.pkg.dev Deploy the image by running the following command: gcloud builds submit metrics-exporter --region = $REGION --tag $IMAGE Deploy the application In the following section, you use Terraform to perform the following tasks: Create a Service Account and assign the permissions required to manage and interact with Google Cloud resources.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Documentation Guides Send feedback Right-size your GKE workloads at scale Stay organized with collections Save and categorize content based on your preferences.
- Ensure workloads are healthy before updating resource configurations.

### "Quickstart: Create a GKE cluster and deploy a workload using Terraform \_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/quickstarts/create-cluster-using-terraform](https://docs.cloud.google.com/kubernetes-engine/docs/quickstarts/create-cluster-using-terraform)
- Source ID: `site-docs-root`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- Create a cluster and deploy a workload using Terraform Autopilot A Kubernetes cluster provides compute, storage, networking, and other services for applications, similar to a virtual data center.
- It serves as a bridge between Terraform configurations and Google Cloud APIs, letting you declaratively define infrastructure resources, such as virtual machines and networks.
- In Cloud Shell, run the following command to delete the Terraform resources: terraform destroy --auto-approve Troubleshoot cleanup errors If you see an error message similar to The network resource 'projects/PROJECT ID/global/networks/example-network' is already being used by 'projects/PROJECT ID/global/firewalls/example-network-yqjlfql57iydmsuzd4ot6n5v' , do the following: Delete the firewall rules: gcloud compute firewall-rules list --filter = "NETWORK:example-network" --format = "tableno-heading" xargs gcloud --quiet compute firewall-rules delete Re-run the Terraform command: terraform destroy --auto-approve What's next Explore your cluster and workload in the Google Cloud console to learn about the some of the key workload settings and resources that you deployed.
- To expose the demo application to the internet: In cluster.tf , change ipv6 access type from INTERNAL to EXTERNAL . ipv6 access type = "EXTERNAL" In app.tf , configure an external load balancer by removing the networking.gke.io/load-balancer-type annotation. annotations = { "networking.gke.io/load-balancer-type" = "Internal" # Remove this line } Create a cluster and deploy an application In Cloud Shell, run this command to verify that Terraform is available: terraform The output should be similar to the following: Usage: terraform [global options] <subcommand> [args] The available commands for execution are listed below.

