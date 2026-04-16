---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:06:50.457Z"
product_name: "Mainframe Assessment Tool"
product_slug: "mainframe-assessment-tool"
feature_name: "GKE deployment support"
feature_slug: "gke-deployment-support"
latest_feature_date: "2025-09-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/create-instance"
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/create-vm"
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/upgrade"
keywords:
  - "gke"
  - "deployment"
  - "supports"
  - "deploying"
  - "mainframe"
  - "assessment"
  - "tool"
  - "kubernetes"
---

# GKE deployment support

Product: Mainframe Assessment Tool
Coverage: MEDIUM

## Step 02 Summary

Supports deploying Mainframe Assessment Tool on Google Kubernetes Engine clusters.

## Extended Definition

Supports deploying Mainframe Assessment Tool on Google Kubernetes Engine clusters.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/create-instance](https://docs.cloud.google.com/mainframe-assessment-tool/docs/create-instance)
- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/create-vm](https://docs.cloud.google.com/mainframe-assessment-tool/docs/create-vm)
- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/upgrade](https://docs.cloud.google.com/mainframe-assessment-tool/docs/upgrade)

## Supporting Pages

### Set up and access Mainframe Assessment Tool \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/create-instance](https://docs.cloud.google.com/mainframe-assessment-tool/docs/create-instance)
- Source ID: `site-docs-reference`
- Final score: 60
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To download the deployment scripts, run the following command: gcloud storage cp "gs://mainframe-ai-release/mat/ VERSION /kustomize deployment.zip" DESTINATION DIRECTORY Replace the following: VERSION : the version of Mainframe Assessment Tool that you want to install, for example, mainframe-assessment-2-8-0 .
- Mainframe Assessment Tool can be deployed either as a virtual machine (VM) instance, or on a Google Kubernetes Engine cluster.
- Go to the Google Cloud console To create a Mainframe Assessment Tool VM instance, run the following command: gcloud compute instances create mainframe - assessment - tool - 1 - instance \ -- machine - type = MACHINE TYPE \ -- service - account = SERVICE ACCOUNT NAME @ PROJECT ID . iam.gserviceaccount.com \ -- scopes = cloud - platform -- image - project = migrate - modernize - public \ -- image - family = mainframe - assessment - tool -- zone = ZONE \ -- boot - disk - size = DISK SIZE Replace the following: MACHINE TYPE : the machine type of the VM.
- To create encrypted port forwarding, follow these steps: To configure access to the cluster, run the following command: gcloud container clusters get-credentials CLUSTER NAME \ --zone ZONE --project PROJECT ID To configure port forwarding, run the following command: kubectl port-forward service/assessor-frontend LOCAL PORT :4000 -n VERSION Replace the following: LOCAL PORT : a port number on your local machine used for the tunneled connection to Mainframe Assessment Tool.

### Set up and access Mainframe Assessment Tool \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/create-vm](https://docs.cloud.google.com/mainframe-assessment-tool/docs/create-vm)
- Source ID: `site-docs-reference`
- Final score: 60
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To download the deployment scripts, run the following command: gcloud storage cp "gs://mainframe-ai-release/mat/ VERSION /kustomize deployment.zip" DESTINATION DIRECTORY Replace the following: VERSION : the version of Mainframe Assessment Tool that you want to install, for example, mainframe-assessment-2-8-0 .
- Mainframe Assessment Tool can be deployed either as a virtual machine (VM) instance, or on a Google Kubernetes Engine cluster.
- Go to the Google Cloud console To create a Mainframe Assessment Tool VM instance, run the following command: gcloud compute instances create mainframe - assessment - tool - 1 - instance \ -- machine - type = MACHINE TYPE \ -- service - account = SERVICE ACCOUNT NAME @ PROJECT ID . iam.gserviceaccount.com \ -- scopes = cloud - platform -- image - project = migrate - modernize - public \ -- image - family = mainframe - assessment - tool -- zone = ZONE \ -- boot - disk - size = DISK SIZE Replace the following: MACHINE TYPE : the machine type of the VM.
- To create encrypted port forwarding, follow these steps: To configure access to the cluster, run the following command: gcloud container clusters get-credentials CLUSTER NAME \ --zone ZONE --project PROJECT ID To configure port forwarding, run the following command: kubectl port-forward service/assessor-frontend LOCAL PORT :4000 -n VERSION Replace the following: LOCAL PORT : a port number on your local machine used for the tunneled connection to Mainframe Assessment Tool.

### Upgrade Mainframe Assessment Tool \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/upgrade](https://docs.cloud.google.com/mainframe-assessment-tool/docs/upgrade)
- Source ID: `site-docs-reference`
- Final score: 47
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Mainframe Assessment Tool supports only sequential upgrades.
- To make the script executable, run the following command: chmod +x DESTINATION DIRECTORY /upgrade Replace DESTINATION DIRECTORY with the directory in your Mainframe Assessment Tool VM To start the upgrade, run the following command: DESTINATION DIRECTORY /upgrade VERSION us-docker.pkg.dev/migrate-modernize-public/mainframe-assessment-prod Replace the following: DESTINATION DIRECTORY : the directory in your Mainframe Assessment Tool VM where you have downloaded the upgrade script.
- In the Mainframe Assessment Tool VM's command-line interface, to change your privileges to superuser, run the following command: sudo su To download the upgrade script, run the following command: gcloud storage cp "gs://mainframe-ai-release/mat/ VM IMAGE NAME /upgrade" DESTINATION DIRECTORY Replace the following: VM IMAGE NAME : the name of the VM image that you want to upgrade to.
- Go to the Google Cloud console To connect to the Mainframe Assessment Tool VM, run the following command: gcloud compute ssh VM NAME --tunnel-through-iap Replace VM NAME with the name of the Mainframe Assessment Tool VM.

