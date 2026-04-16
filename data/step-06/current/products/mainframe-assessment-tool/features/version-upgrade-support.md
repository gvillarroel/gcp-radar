---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:06:50.466Z"
product_name: "Mainframe Assessment Tool"
product_slug: "mainframe-assessment-tool"
feature_name: "Version upgrade support"
feature_slug: "version-upgrade-support"
latest_feature_date: "2025-04-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/upgrade"
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/create-instance"
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/create-vm"
keywords:
  - "version"
  - "upgrade"
  - "supports"
  - "upgrades"
  - "mainframe"
  - "assessment"
  - "tool"
---

# Version upgrade support

Product: Mainframe Assessment Tool
Coverage: MEDIUM

## Step 02 Summary

Supports upgrades from Mainframe Assessment Tool 2.1.0.

## Extended Definition

Supports upgrades from Mainframe Assessment Tool 2.1.0.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/upgrade](https://docs.cloud.google.com/mainframe-assessment-tool/docs/upgrade)
- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/create-instance](https://docs.cloud.google.com/mainframe-assessment-tool/docs/create-instance)
- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/create-vm](https://docs.cloud.google.com/mainframe-assessment-tool/docs/create-vm)

## Supporting Pages

### Upgrade Mainframe Assessment Tool \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/upgrade](https://docs.cloud.google.com/mainframe-assessment-tool/docs/upgrade)
- Source ID: `site-docs-reference`
- Final score: 114
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Mainframe Assessment Tool supports only sequential upgrades.
- To make the script executable, run the following command: chmod +x DESTINATION DIRECTORY /upgrade Replace DESTINATION DIRECTORY with the directory in your Mainframe Assessment Tool VM To start the upgrade, run the following command: DESTINATION DIRECTORY /upgrade VERSION us-docker.pkg.dev/migrate-modernize-public/mainframe-assessment-prod Replace the following: DESTINATION DIRECTORY : the directory in your Mainframe Assessment Tool VM where you have downloaded the upgrade script.
- VERSION : the Mainframe Assessment Tool version that you want to upgrade to.
- In the Mainframe Assessment Tool VM's command-line interface, to change your privileges to superuser, run the following command: sudo su To download the upgrade script, run the following command: gcloud storage cp "gs://mainframe-ai-release/mat/ VM IMAGE NAME /upgrade" DESTINATION DIRECTORY Replace the following: VM IMAGE NAME : the name of the VM image that you want to upgrade to.

### Set up and access Mainframe Assessment Tool \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/create-instance](https://docs.cloud.google.com/mainframe-assessment-tool/docs/create-instance)
- Source ID: `site-docs-reference`
- Final score: 52
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To create encrypted port forwarding, follow these steps: To configure access to the cluster, run the following command: gcloud container clusters get-credentials CLUSTER NAME \ --zone ZONE --project PROJECT ID To configure port forwarding, run the following command: kubectl port-forward service/assessor-frontend LOCAL PORT :4000 -n VERSION Replace the following: LOCAL PORT : a port number on your local machine used for the tunneled connection to Mainframe Assessment Tool.
- To create the containers and deploy Mainframe Assessment Tool, run the following command: ./deploy.sh PROJECT ID ZONE \ CLUSTER NAME VERSION \ us-docker.pkg.dev/migrate-modernize-public/mainframe-assessment-prod \ SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com The containers should be operational within a few minutes.
- To download the deployment scripts, run the following command: gcloud storage cp "gs://mainframe-ai-release/mat/ VERSION /kustomize deployment.zip" DESTINATION DIRECTORY Replace the following: VERSION : the version of Mainframe Assessment Tool that you want to install, for example, mainframe-assessment-2-8-0 .
- VERSION : the version of Mainframe Assessment Tool, for example, mainframe-assessment-2-8-0 .

### Set up and access Mainframe Assessment Tool \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/create-vm](https://docs.cloud.google.com/mainframe-assessment-tool/docs/create-vm)
- Source ID: `site-docs-reference`
- Final score: 52
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To create encrypted port forwarding, follow these steps: To configure access to the cluster, run the following command: gcloud container clusters get-credentials CLUSTER NAME \ --zone ZONE --project PROJECT ID To configure port forwarding, run the following command: kubectl port-forward service/assessor-frontend LOCAL PORT :4000 -n VERSION Replace the following: LOCAL PORT : a port number on your local machine used for the tunneled connection to Mainframe Assessment Tool.
- To create the containers and deploy Mainframe Assessment Tool, run the following command: ./deploy.sh PROJECT ID ZONE \ CLUSTER NAME VERSION \ us-docker.pkg.dev/migrate-modernize-public/mainframe-assessment-prod \ SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com The containers should be operational within a few minutes.
- To download the deployment scripts, run the following command: gcloud storage cp "gs://mainframe-ai-release/mat/ VERSION /kustomize deployment.zip" DESTINATION DIRECTORY Replace the following: VERSION : the version of Mainframe Assessment Tool that you want to install, for example, mainframe-assessment-2-8-0 .
- VERSION : the version of Mainframe Assessment Tool, for example, mainframe-assessment-2-8-0 .

