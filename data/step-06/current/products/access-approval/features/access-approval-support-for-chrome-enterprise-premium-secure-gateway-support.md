---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:42:38.047Z"
product_name: "Access Approval"
product_slug: "access-approval"
feature_name: "Access Approval support for Chrome Enterprise Premium secure gateway support"
feature_slug: "access-approval-support-for-chrome-enterprise-premium-secure-gateway-support"
latest_feature_date: "2025-09-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform"
  - "https://docs.cloud.google.com/python/docs/reference/accessapproval/latest"
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services"
keywords:
  - "access"
  - "approval"
  - "chrome"
  - "enterprise"
  - "premium"
  - "secure"
  - "gateway"
---

# Access Approval support for Chrome Enterprise Premium secure gateway support

Product: Access Approval
Coverage: LOW

## Step 02 Summary

Chrome Enterprise Premium secure gateway support is supported by Access Approval.

## Extended Definition

Chrome Enterprise Premium secure gateway support is supported by Access Approval.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform](https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform)
- [https://docs.cloud.google.com/python/docs/reference/accessapproval/latest](https://docs.cloud.google.com/python/docs/reference/accessapproval/latest)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services](https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services)

## Supporting Pages

### Supported services \_|\_ Access Approval \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services](https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services)
- Source ID: `site-docs-reference`
- Final score: 40
- Re-rank relevance: N/A

Evidence snippets:
- Bigtable GA None Certificate Authority Service GA None Certificate Manager GA None Chrome Enterprise Premium GA Access Approval supports Chrome Enterprise Premium secure gateway .
- Identity-Aware Proxy GA None Image streaming GA None Infrastructure Manager GA None Integration Connectors GA None Internal passthrough Network Load Balancer GA None Google Kubernetes Engine GA None Looker (Google Cloud core) GA None Looker Studio GA None Memorystore for Redis GA None Memorystore for Redis Cluster GA None Memorystore for Valkey GA None Model Armor GA None Cloud Monitoring GA None NCC Gateway GA None Network Connectivity Center GA None Org Lifecycle API GA None Organization Policy Service GA None Parameter Manager GA None Persistent Disk GA None Pub/Sub GA None regional external Application Load Balancer GA None regional external proxy Network Load Balancer GA None regional internal Application Load Balancer GA None regional internal proxy Network Load Balancer GA None Resource Manager GA None Secret Manager GA None Secure Source Manager GA None Secure Web Proxy GA None Security Command Center GA Access Approval supports the Security Command Center Premium tier.
- Cloud Asset Inventory GA None Cloud Billing Preview None Cloud Build GA None Cloud Composer GA None Cloud Data Fusion GA None Cloud Deploy GA None Cloud DNS GA None Cloud Domains GA None Cloud External Key Manager (Cloud EKM) GA None Cloud Run functions GA None Cloud Healthcare API GA None Cloud Interconnect GA None Cloud Key Management Service (Cloud KMS) GA None Cloud Logging GA None Cloud NAT GA None Cloud OS Login API GA None Cloud Run GA None Cloud Scheduler GA None Cloud SQL GA None Cloud Service Mesh GA None Cloud Storage GA None Cloud Tasks GA None Cloud TPU GA None Cloud Trace GA None Cloud VPN GA None Cloud Workstations GA None Compute Engine GA None Connect Agent GA None Dialogflow CX GA None Database Center GA None Dataflow GA None Dataform GA None Knowledge Catalog GA None Managed Service for Apache Spark GA None Google Distributed Cloud GA None Document AI GA None Eventarc GA None External passthrough Network Load Balancer GA None Filestore GA None Firebase Data Connect GA None Firebase Security Rules GA None Firestore GA None Flow Analyzer GA None Gemini Enterprise GA None GKE Connect GA None GKE Hub GA None GKE Hub API GA None GKE Identity Service GA None Google Cloud Armor GA Access Approval is available for regional Google Cloud Armor security policies.
- Supported Google Cloud services Access Approval supports the following Google Cloud services: Supported service Launch stage Notes Access Context Manager GA None Access Transparency GA None AlloyDB for PostgreSQL GA None Apigee GA The following Apigee features are not supported by Access Approval: Apigee portal Features in the Preview launch stage Additionally, Apigee Hybrid customers must upgrade to the latest version to get full Access Approval support.

### Enabling Access Approval using Terraform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform](https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform)
- Source ID: `site-docs-root`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- Copy the following resource, and paste it in your main.tf file. main.tf variable "parent value" { type = string } variable "email 1" { type = string } variable "email 2" { type = string } resource "google folder" "my folder" { display name = "my-folder" parent = var.parent value parent = "organizations/123456789" } resource "google folder access approval settings" "folder access approval" { folder id = google folder.my folder.folder id notification emails = [ var.email 1 , var.email 2 ] enrolled services { cloud product = "all" } } Enter values for the following variables: email 1 and email 2 : provide the email addresses of users who you want to set as reviewers for the access requests for this project.
- What's next Using Terraform with Google Cloud Using Terraform with Access Approval Getting started with Terraform on Google Cloud Kickstart Terraform on Google Cloud with Cloud Shell Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To enable a user or service account to approve access requests for a project, grant them the Access Approval Approver ( roles/accessapproval.approver ) IAM role. parent value : name of the folder in which you want to create the my folder folder.
- Home Documentation Security Cloud provider access management Access Approval Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.

### "Python Client for Access Approval \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/accessapproval/latest](https://docs.cloud.google.com/python/docs/reference/accessapproval/latest)
- Source ID: `site-python-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Mac/Linux python3 -m venv <your-env> source <your-env>/bin/activate pip install google-cloud-access-approval Windows py -m venv <your-env> .\<your-env>\Scripts\activate pip install google-cloud-access-approval Next Steps Read the Client Library Documentation for Access Approval to see other available methods on the client.
- 1.19.0 (latest) 1.18.0 1.17.0 1.16.2 1.15.0 1.14.1 1.13.5 1.12.0 1.11.3 1.10.1 1.9.1 1.8.0 1.7.5 1.6.1 1.5.1 1.4.1 1.3.5 1.2.0 1.1.1 1.0.0 0.2.2 0.1.0 Access Approval : enables controlling access to your organization’s data by Google personnel.
- Home Documentation Developer tools Python Client libraries Send feedback Python Client for Access Approval Stay organized with collections Save and categorize content based on your preferences.
- Read the Access Approval Product documentation to learn more about the product and see How-to Guides.

