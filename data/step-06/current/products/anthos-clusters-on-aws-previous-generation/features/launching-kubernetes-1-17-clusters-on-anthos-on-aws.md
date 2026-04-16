---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:04:30.739Z"
product_name: "Anthos clusters on AWS (previous generation)"
product_slug: "anthos-clusters-on-aws-previous-generation"
feature_name: "Launching Kubernetes 1.17 clusters on Anthos on AWS"
feature_slug: "launching-kubernetes-1-17-clusters-on-anthos-on-aws"
latest_feature_date: "2021-12-14"
deprecation_date: "2021-12-14"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/quickstart"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/security"
keywords:
  - "launching"
  - "kubernetes"
  - "creating"
---

# Launching Kubernetes 1.17 clusters on Anthos on AWS

Product: Anthos clusters on AWS (previous generation)
Coverage: MEDIUM

## Step 02 Summary

Creating new clusters with Kubernetes 1.17 on Anthos clusters on AWS is no longer allowed; deprecated on 2021-12-14.

## Extended Definition

Creating new clusters with Kubernetes 1.17 on Anthos clusters on AWS is no longer allowed; deprecated on 2021-12-14.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/quickstart](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/quickstart)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/security](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/security)

## Supporting Pages

### Create a cluster \_|\_ GKE on AWS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster)
- Source ID: `site-docs-root-2`
- Final score: 73
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Pod address ranges table Pod address range Maximum Pod IP addresses Maximum nodes Maximum Pods /24 Smallest possible Pod address range 256 addresses 1 node 110 Pods /23 512 addresses 2 nodes 220 Pods /22 1,024 addresses 4 nodes 440 Pods /21 2,048 addresses 8 nodes 880 Pods /20 4,096 addresses 16 nodes 1,760 Pods /19 8,192 addresses 32 nodes 3,520 Pods /18 16,384 addresses 64 nodes 7,040 Pods /17 32,768 addresses 128 nodes 14,080 Pods /16 65,536 addresses 256 nodes 28,160 Pods /15 131,072 addresses 512 nodes 56,320 Pods /14 262,144 addresses 1,024 nodes 112,640 Pods Details about the service address range Kubernetes allocates virtual IP addresses for Service objects — for example, load balancers from this address range.
- To authorize the Kubernetes workload identity gke-system/gke-telemetry-agent to write logs to Google Cloud Logging, and metrics to Google Cloud Monitoring, run this command: gcloud projects add-iam-policy-binding GOOGLE PROJECT ID \ --member = "serviceAccount: GOOGLE PROJECT ID .svc.id.goog[gke-system/gke-telemetry-agent]" \ --role = roles/gkemulticloud.telemetryWriter Replace GOOGLE PROJECT ID with the cluster's Google Cloud project ID.
- To see all supported Kubernetes versions on a given Google Cloud location, run the following command. gcloud container aws get-server-config --location GCP LOCATION Authorize Cloud Logging / Cloud Monitoring Note: Starting with Kubernetes version 1.28, manual policy binding to authorize the gke-system/gke-telemetry-agent service account for log and metric collection is no longer necessary.
- This overlap might prevent workloads from communicating with the control plane replica in the VPC network: VPC network: 10.0.0.0/16 Pod network: 10.0.1.0/24 Service network: 10.1.0.0/24 Control Plane Replica subnets: 10.0.1.0/24 , 10.0.2.0/24 , 10.0.3.0/24 Details about the Pod address range Kubernetes allocates addresses to Pod objects from the Pod address range.

### Deploy an application on GKE on AWS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/quickstart](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/quickstart)
- Source ID: `site-docs-root-2`
- Final score: 73
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can expose your application by creating a Service, a Kubernetes resource that exposes your application to external traffic.
- To view the cluster's status, choose if you are using the Google Cloud CLI or Google Cloud console and follow these steps: gcloud Use the gcloud container aws clusters describe command to get details about your cluster: gcloud container aws clusters describe CLUSTER NAME \ --location GOOGLE CLOUD LOCATION Replace the following: CLUSTER NAME : your cluster's name GOOGLE CLOUD LOCATION : the name of the Google Cloud location that manages the cluster Google Cloud console In the Google Cloud console, go to the Google Kubernetes Engine clusters overview page.
- Create the Deployment To run hello-app in your cluster, you need to deploy the application by running the following command: kubectl create deployment hello-server --image=us-docker.pkg.dev/google-samples/containers/gke/hello-app:1.0 This Kubernetes command, kubectl create deployment creates a Deployment named hello-server .
- Get authentication credentials for the cluster After creating your cluster, you need to get authentication credentials to interact with the cluster: gcloud container aws clusters get-credentials aws-cluster-0 This command configures kubectl to access the cluster you created using Connect gateway .

### Security overview \_|\_ GKE on AWS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/security](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/security)
- Source ID: `site-iam-reference`
- Final score: 67
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Among other things, this profile denies containers the following abilities: Writing to files directly in a process ID directory ( /proc/ ) Writing to files that are not in /proc/ Writing to files in /proc/sys other than /proc/sys/kernel/shm Mounting file systems Restrict the ability for workloads to self-modify Certain Kubernetes workloads, especially system workloads, have permission to self-modify.
- GKE clusters implement several security features, including the following: Optimized package set Google Cloud-tailored Linux kernel Limited user accounts and disabled root login Additional security guides are available for Ubuntu, such as the following: CIS Benchmark DISA STIG FIPS 140-2 Secure your workloads Kubernetes allows users to quickly provision, scale, and update container-based workloads.
- AWS KMS encryption GKE on AWS uses customer-managed AWS Key Management Service (KMS) symmetric keys to encrypt: Kubernetes state data in etcd EC2 instance user data EBS volumes for at-rest encryption of control plane and node pool data For production environments, we recommend using different keys for configuration and volume encryption.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) GKE Multi-Cloud GKE on AWS Guides Send feedback Security overview Stay organized with collections Save and categorize content based on your preferences.

