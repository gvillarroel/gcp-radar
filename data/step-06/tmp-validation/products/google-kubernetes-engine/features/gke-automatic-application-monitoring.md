---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.197Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "GKE automatic application monitoring"
feature_slug: "gke-automatic-application-monitoring"
latest_feature_date: "2024-11-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/best-practices/batch-platform-on-gke"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/automatically-bootstrapping-gke-nodes-with-daemonsets"
keywords:
  - "podmonitoring"
  - "deploys"
  - "configurations"
  - "automatic"
  - "application"
  - "monitoring"
  - "workloads"
---

# GKE automatic application monitoring

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Automatic application monitoring deploys PodMonitoring configurations for supported workloads and surfaces their metrics in Cloud Monitoring.

## Extended Definition

Automatic application monitoring deploys PodMonitoring configurations for supported workloads and surfaces their metrics in Cloud Monitoring.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart)
- [https://docs.cloud.google.com/kubernetes-engine/docs/best-practices/batch-platform-on-gke](https://docs.cloud.google.com/kubernetes-engine/docs/best-practices/batch-platform-on-gke)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/automatically-bootstrapping-gke-nodes-with-daemonsets](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/automatically-bootstrapping-gke-nodes-with-daemonsets)

## Supporting Pages

### "Analyze model serving performance and costs with GKE Inference Quickstart\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart)
- Source ID: `site-docs-reference-2`
- Final score: 170
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This feature scans the cluster for workloads that run on supported model servers and deploys the PodMonitoring resources that enable these workload metrics to be visible in Cloud Monitoring.
- For more information about enabling and configuring auto-monitoring, see Configure automatic application monitoring for workloads .
- Important: If PodMonitoring resources have already been deployed to collect metrics from supported workloads , remove them before enabling the auto-monitoring feature to avoid double collection.
- If you deploy from the GKE AI/ML page in the Google Cloud console, PodMonitoring and HPA resources are automatically created for you by using the targetNtpot configuration.

### "Best practices for running batch workloads on GKE \_|\_ Google Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/best-practices/batch-platform-on-gke](https://docs.cloud.google.com/kubernetes-engine/docs/best-practices/batch-platform-on-gke)
- Source ID: `site-docs-reference-required-4`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Autopilot Standard This page introduces the best practices for building and optimizing batch processing platforms with Google Kubernetes Engine (GKE), including best practices for: Architecture Job management Multi-tenancy Security Queueing Storage Performance Cost efficiency Monitoring GKE provides a powerful framework for orchestrating batch workloads such as data processing, training machine learning models , running scientific simulations , and other high performance computing workloads .
- The following table lists the key recommendations when managing queueing and fair sharing among batch workloads: Recommendation Resources Use Kueue Kueue is a kubernetes-native Job queueing system for batch, high performance computing, machine learning, and similar applications in a Kubernetes cluster.
- With Autopilot clusters, you don't need to worry about provisioning nodes or managing node pools because node pools are automatically provisioned through node auto-provisioning, and are automatically scaled to meet the requirements of your workloads.
- This driver allows Kubernetes applications to mount Cloud Storage buckets as local file systems Specify tuning parameters for your workload We recommend you use the following configurations: Customize your node system configuration for your workload.

### "Automatically bootstrap GKE nodes with DaemonSets \_|\_ Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/automatically-bootstrapping-gke-nodes-with-daemonsets](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/automatically-bootstrapping-gke-nodes-with-daemonsets)
- Source ID: `site-docs-reference-required-5`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- In Cloud Shell, create and launch a regional GKE cluster: gcloud container clusters create ds-init-tutorial \ --enable-ip-alias \ --machine-type = n1-standard-2 \ --metadata disable-legacy-endpoints = true \ --node-labels = app = default-init \ --node-locations us-central1-a,us-central1-b,us-central1-c \ --no-enable-basic-auth \ --no-issue-client-certificate \ --num-nodes = 1 \ --location us-central1 \ --service-account = " $GKE SERVICE ACCOUNT EMAIL " Apply node configurations using a DaemonSet In this section, you prevent workloads from running on nodes before configuration is complete by applying a taint to the node pool.
- Before reading this page, ensure that you're familiar with: Kubernetes GKE Docker chroot In this tutorial, you learn to use Kubernetes taints and tolerations to help ensure that nodes are configured by a DaemonSet before application workloads can be scheduled on them.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Documentation Guides Send feedback Automatically bootstrap GKE nodes with DaemonSets Stay organized with collections Save and categorize content based on your preferences.
- To provision a service account, follow these steps: In Cloud Shell, initialize an environment variable that stores the service account name: GKE SERVICE ACCOUNT NAME = ds-init-tutorial-gke Create a service account: gcloud iam service-accounts create " $GKE SERVICE ACCOUNT NAME " \ --display-name = " $GKE SERVICE ACCOUNT NAME " Initialize an environment variable that stores the service account email account name: GKE SERVICE ACCOUNT EMAIL = " $( gcloud iam service-accounts list \ --format = 'value(email)' \ --filter = displayName: " $GKE SERVICE ACCOUNT NAME " ) " Bind the Identity and Access Management (IAM) roles to the service account: gcloud projects add-iam-policy-binding \ " $( gcloud config get-value project 2 > /dev/null ) " \ --member serviceAccount: " $GKE SERVICE ACCOUNT EMAIL " \ --role roles/monitoring.viewer gcloud projects add-iam-policy-binding \ " $( gcloud config get-value project 2 > /dev/null ) " \ --member serviceAccount: " $GKE SERVICE ACCOUNT EMAIL " \ --role roles/monitoring.metricWriter gcloud projects add-iam-policy-binding \ " $( gcloud config get-value project 2 > /dev/null ) " \ --member serviceAccount: " $GKE SERVICE ACCOUNT EMAIL " \ --role roles/logging.logWriter Prepare the GKE cluster In this section, you launch the GKE cluster, grant permissions, and finish the cluster configuration.

