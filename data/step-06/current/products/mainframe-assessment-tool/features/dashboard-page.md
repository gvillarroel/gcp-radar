---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:06:50.474Z"
product_name: "Mainframe Assessment Tool"
product_slug: "mainframe-assessment-tool"
feature_name: "Dashboard page"
feature_slug: "dashboard-page"
latest_feature_date: "2025-02-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/configure-your-project"
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/create-instance"
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/create-vm"
keywords:
  - "dashboard"
  - "page"
  - "adds"
  - "quick"
  - "access"
  - "helpful"
  - "resources"
---

# Dashboard page

Product: Mainframe Assessment Tool
Coverage: MEDIUM

## Step 02 Summary

Adds a Dashboard page for quick access to helpful resources.

## Extended Definition

Adds a Dashboard page for quick access to helpful resources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/configure-your-project](https://docs.cloud.google.com/mainframe-assessment-tool/docs/configure-your-project)
- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/create-instance](https://docs.cloud.google.com/mainframe-assessment-tool/docs/create-instance)
- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/create-vm](https://docs.cloud.google.com/mainframe-assessment-tool/docs/create-vm)

## Supporting Pages

### Set up and access Mainframe Assessment Tool \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/create-instance](https://docs.cloud.google.com/mainframe-assessment-tool/docs/create-instance)
- Source ID: `site-docs-reference`
- Final score: 67
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This page describes how to set up and access Mainframe Assessment Tool.
- To create encrypted port forwarding, follow these steps: To configure access to the cluster, run the following command: gcloud container clusters get-credentials CLUSTER NAME \ --zone ZONE --project PROJECT ID To configure port forwarding, run the following command: kubectl port-forward service/assessor-frontend LOCAL PORT :4000 -n VERSION Replace the following: LOCAL PORT : a port number on your local machine used for the tunneled connection to Mainframe Assessment Tool.
- Access Mainframe Assessment Tool VM from your computer You can access Mainframe Assessment Tool from your Linux, macOS, or Windows-based computer by using Google Cloud CLI through an Identity-Aware Proxy tunnel.
- Access GKE-deployed Mainframe Assessment Tool from your computer You can access Mainframe Assessment Tool from your Linux, macOS, or Windows computer by using the kubectl command to configure port forwarding.

### Set up and access Mainframe Assessment Tool \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/create-vm](https://docs.cloud.google.com/mainframe-assessment-tool/docs/create-vm)
- Source ID: `site-docs-reference`
- Final score: 67
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This page describes how to set up and access Mainframe Assessment Tool.
- To create encrypted port forwarding, follow these steps: To configure access to the cluster, run the following command: gcloud container clusters get-credentials CLUSTER NAME \ --zone ZONE --project PROJECT ID To configure port forwarding, run the following command: kubectl port-forward service/assessor-frontend LOCAL PORT :4000 -n VERSION Replace the following: LOCAL PORT : a port number on your local machine used for the tunneled connection to Mainframe Assessment Tool.
- Access Mainframe Assessment Tool VM from your computer You can access Mainframe Assessment Tool from your Linux, macOS, or Windows-based computer by using Google Cloud CLI through an Identity-Aware Proxy tunnel.
- Access GKE-deployed Mainframe Assessment Tool from your computer You can access Mainframe Assessment Tool from your Linux, macOS, or Windows computer by using the kubectl command to configure port forwarding.

### "Configure your Google Cloud project for Mainframe Assessment Tool \_|\_\

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/configure-your-project](https://docs.cloud.google.com/mainframe-assessment-tool/docs/configure-your-project)
- Source ID: `site-docs-reference`
- Final score: 65
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enable Vertex AI API Configure firewall rules To enable secure access to the Mainframe Assessment Tool instance through IAP, create the following firewall rules: Create a firewall rule to allow ingress traffic on TCP port 4000 by using IAP for TCP forwarding : gcloud compute firewall-rules create allow-ingress-from-iap \ --direction=INGRESS \ --action=allow \ --rules=tcp:4000\ --source-ranges=35.235.240.0/20 Create a firewall rule to deny all other ingress traffic to your Mainframe Assessment Tool instance: gcloud compute firewall-rules create deny-all-other-ingress \ --direction=ingress \ --action=deny \ --rules=all \ --source-ranges=0.0.0.0/0 \ --network=your-network-name \ --priority=65535 Assign IAM roles and permissions To ensure that the dedicated service account that you created has the necessary permissions to give the Mainframe Assessment Tool components the required access to the Vertex AI API and other services, ask your administrator to grant the following IAM roles to the dedicated service account that you created: Important: You must grant these roles to the dedicated service account that you created, not to your user account.
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Vertex AI User ( roles/aiplatform.user ) Cloud Logging: Cloud Logging Writer ( roles/logging.logWriter ) What's next Learn how to Set up and access Mainframe Assessment Tool .
- Note: If you don't plan to keep the resources that you create in this procedure, create a project instead of selecting an existing project.

