---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:54:52.835Z"
product_name: "Apigee hybrid"
product_slug: "apigee-hybrid"
feature_name: "Data residency support for Apigee data collectors"
feature_slug: "data-residency-support-for-apigee-data-collectors"
latest_feature_date: "2025-04-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/using-data-residency-with-apigee-hybrid"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/supported-platforms"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts"
keywords:
  - "subscription"
  - "collectors"
  - "compliance"
  - "residency"
---

# Data residency support for Apigee data collectors

Product: Apigee hybrid
Coverage: MEDIUM

## Step 02 Summary

Apigee and Apigee Hybrid data collectors now support data residency (DRZ) compliance for supported subscription and pay-as-you-go organizations.

## Extended Definition

Apigee and Apigee Hybrid data collectors now support data residency (DRZ) compliance for supported subscription and pay-as-you-go organizations.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/using-data-residency-with-apigee-hybrid](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/using-data-residency-with-apigee-hybrid)
- [https://docs.cloud.google.com/apigee/docs/hybrid/supported-platforms](https://docs.cloud.google.com/apigee/docs/hybrid/supported-platforms)
- [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts)

## Supporting Pages

### Using data residency with Apigee hybrid | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/using-data-residency-with-apigee-hybrid](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/using-data-residency-with-apigee-hybrid)
- Source ID: `feature-recovery-direct-http`
- Final score: 248
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Apigee technical feature overview Apigee terminology API development lifecycle Key points of API proxy development Apigee architecture overview Apigee locations GET STARTED Introduction to provisioning Compare eval and paid organizations Provisioning options Prerequisites About Apigee provisioning permissions Networking options Introduction to data residency Introduction to CMEK Best practices for Apigee CMEK Using organization policy constraints Understand Apigee observability Provision paid orgs Before you begin Subscription Cloud console Select your project Provision Apigee with one click Configure and customize Step 1: Enable required APIs Step 2: Set up networking Step 3: Configure hosting and encryption Step 4: Customize access routing Recommended next steps Command line With VPC peering Without VPC peering Pay-as-you-go Cloud console Select your project Provision Apigee with one click Configure and customize Step 1: Enable required APIs Step 2: Set up networking Step 3: Configure hosting and encryption Step 4: Customize access routing Recommended next steps Command line With VPC peering Without VPC peering Provision eval orgs Before you begin Wizard Command line With VPC peering Without VPC peering Next steps Calling a proxy with internal-only access Accessing Apigee Using the UI Using the API Get information about calls to your APIs Using gcloud Troubleshooting DEVELOP Tutorial: Building your first API proxy Overview Step 1: Create an API proxy Step 2: Deploy an API proxy Step 3: Call an API proxy Step 4: Change the target endpoint Step 5: Add a policy Next steps: Go deeper Tutorial: Creating an API proxy from an OpenAPI Specification Building API proxies Understanding APIs and API proxies Programmable proxy basics Introduction to API proxy building Creating an API proxy Editing an API proxy (create a revision) Downloading and uploading an API proxy configuration bundle Deleting an API proxy Environments and organizations Understanding organizations Overview of environments and environment groups Working with environments Working with environment groups Best practices Routes and flows Understanding routes Controlling API proxies with flows Conditional flows Flow variables Flow variable overview Request and response flow variables Message flow variable Conditions with flow variables Shared flows and flow hooks Creating reusable shared flows Attaching a shared flow using flow hooks Chaining API proxies together Handling faults Adding features to a programmable API proxy Using policies Tutorial: Adding the SpikeArrest policy What's a policy?
- Version 1.14 keyboard_arrow_down Supported versions: v1.16 (latest) v1.15 v1.14 List of supported versions Unsupported versions: v1.13 v1.12 v1.11 v1.10 v1.9 v1.8 v1.7 v1.6 v1.5 v1.4 v1.3 v1.2 v1.1 This topic explains how to configure a new Apigee hybrid installation for data residency compliance.
- Data residency meets compliance and regulatory requirements by allowing you to specify the geographic locations (regions) where Apigee data is stored.
- Billing type : You can only use data residency with paid subscription orgs.

### Apigee hybrid supported platforms and versions | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/supported-platforms](https://docs.cloud.google.com/apigee/docs/hybrid/supported-platforms)
- Source ID: `feature-recovery-direct-http`
- Final score: 218
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Apigee technical feature overview Apigee terminology API development lifecycle Key points of API proxy development Apigee architecture overview Apigee locations GET STARTED Introduction to provisioning Compare eval and paid organizations Provisioning options Prerequisites About Apigee provisioning permissions Networking options Introduction to data residency Introduction to CMEK Best practices for Apigee CMEK Using organization policy constraints Understand Apigee observability Provision paid orgs Before you begin Subscription Cloud console Select your project Provision Apigee with one click Configure and customize Step 1: Enable required APIs Step 2: Set up networking Step 3: Configure hosting and encryption Step 4: Customize access routing Recommended next steps Command line With VPC peering Without VPC peering Pay-as-you-go Cloud console Select your project Provision Apigee with one click Configure and customize Step 1: Enable required APIs Step 2: Set up networking Step 3: Configure hosting and encryption Step 4: Customize access routing Recommended next steps Command line With VPC peering Without VPC peering Provision eval orgs Before you begin Wizard Command line With VPC peering Without VPC peering Next steps Calling a proxy with internal-only access Accessing Apigee Using the UI Using the API Get information about calls to your APIs Using gcloud Troubleshooting DEVELOP Tutorial: Building your first API proxy Overview Step 1: Create an API proxy Step 2: Deploy an API proxy Step 3: Call an API proxy Step 4: Change the target endpoint Step 5: Add a policy Next steps: Go deeper Tutorial: Creating an API proxy from an OpenAPI Specification Building API proxies Understanding APIs and API proxies Programmable proxy basics Introduction to API proxy building Creating an API proxy Editing an API proxy (create a revision) Downloading and uploading an API proxy configuration bundle Deleting an API proxy Environments and organizations Understanding organizations Overview of environments and environment groups Working with environments Working with environment groups Best practices Routes and flows Understanding routes Controlling API proxies with flows Conditional flows Flow variables Flow variable overview Request and response flow variables Message flow variable Conditions with flow variables Shared flows and flow hooks Creating reusable shared flows Attaching a shared flow using flow hooks Chaining API proxies together Handling faults Adding features to a programmable API proxy Using policies Tutorial: Adding the SpikeArrest policy What's a policy?
- Install Big picture Prerequisites Permissions and roles to install and manage Apigee hybrid Plan and prepare Minimal cluster configurations Configuring dedicated node pools Configuring Cassandra for production Configuring stateless components for production Configuring authentication for Cassandra StorageClass configuration Service account authentication methods in Apigee hybrid Configuring ports and setting up firewalls Using data residency with Apigee hybrid GCP URLs to allow for hybrid Part 1: Project and org setup Overview Step 1: Enable APIs Step 2: Create an organization Step 3: Create an environment group Part 2: Hybrid runtime setup Before you begin Step 1: Create a cluster Step 2: Download the Helm charts Step 3: Create the apigee namespace Step 4: Set up service accounts Step 5: Set up service account authentication Step 6: Create TLS certificates Step 7: Create the overrides Step 8: Enable Control Plane access Step 9: Install cert-manager Step 10: Install the CRDs Step 11: Install Apigee hybrid using Helm Part 3: Expose ingress and deploy proxy Step 1: Expose Apigee ingress Step 2: Deploy an API proxy Uninstall hybrid runtime Administer Administration overview Troubleshooting Automated issue surfacing Diagnosing issues with guardrails Data collection Data collection overview Where is your data stored?
- Install Big picture Prerequisites Permissions and roles to install and manage Apigee hybrid Plan and prepare Minimal cluster configurations Configuring dedicated node pools Configuring Cassandra for production Configuring authentication for Cassandra StorageClass configuration Service account authentication methods in Apigee hybrid Configuring ports and setting up firewalls Using data residency with Apigee hybrid GCP URLs to allow for hybrid Part 1: Project and org setup Overview Step 1: Enable APIs Step 2: Create an organization Step 3: Create an environment group Part 2: Hybrid runtime setup Before you begin Step 1: Create a cluster Step 2: Download the Helm charts Step 3: Create the apigee namespace Step 4: Set up service accounts Step 5: Set up service account authentication Step 6: Create TLS certificates Step 7: Create the overrides Step 8: Enable Control Plane access Step 9: Install cert-manager Step 10: Install the CRDs Step 11: Install Apigee hybrid using Helm Part 3: Expose ingress and deploy proxy Step 1: Expose Apigee ingress Step 2: Deploy an API proxy Uninstall hybrid runtime Administer Administration overview Troubleshooting Automated issue surfacing Diagnosing issues with guardrails Data collection Data collection overview Where is your data stored?
- Install Big picture Prerequisites Permissions and roles to install and manage Apigee hybrid Plan and prepare Minimal cluster configurations Configuring dedicated node pools Configuring Cassandra for production Configuring authentication for Cassandra StorageClass configuration Configuring ports and setting up firewalls Using data residency with Apigee hybrid GCP URLs to allow for hybrid Part 1: Project and org setup Overview Step 1: Enable APIs Step 2: Create an organization Step 3: Create an environment group Part 2: Hybrid runtime setup Before you begin Step 1: Create a cluster Step 2: Download the Helm charts Step 3: Create the apigee namespace Step 4: Set up service accounts Step 5: Create TLS certificates Step 6: Create the overrides Step 7: Enable Synchronizer access Step 8: Install cert-manager Step 9: Install the CRDs Step 10: Check cluster readiness Step 11: Install Apigee hybrid using Helm Step 12: Configure Workload Identity on GKE Part 3: Expose ingress and deploy proxy Step 1: Expose Apigee ingress Step 2: Deploy an API proxy Uninstall hybrid runtime Administer Administration overview Troubleshooting Automated issue surfacing Diagnosing issues with guardrails Data collection Data collection overview Where is your data stored?

### Introduction to data residency \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts)
- Source ID: `site-docs-reference`
- Final score: 158
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you choose to enable data residency when provisioning an Apigee Subscription or Pay-as-you-go organization, the following services are in scope under Apigee's FedRAMP Authority To Operate (ATO): The regionalized Apigee organization's control plane, runtime plane, and analytics .
- Data residency for Apigee meets compliance and regulatory requirements by allowing you to specify the geographic locations (regions) where Apigee data is stored.
- Data residency compatibility Data residency can be used with the following: Apigee organizations (Subscription or Pay-as-you-go) Apigee hybrid .
- Data residency and FedRAMP compliance Apigee is authorized as a FedRAMP High service for organizations where data residency is enabled.

