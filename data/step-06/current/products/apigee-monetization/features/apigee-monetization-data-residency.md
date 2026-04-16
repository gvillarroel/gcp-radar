---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:04:10.352Z"
product_name: "Apigee Monetization"
product_slug: "apigee-monetization"
feature_name: "Apigee Monetization Data Residency"
feature_slug: "apigee-monetization-data-residency"
latest_feature_date: "2024-07-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/monetization/manage-rate-plans"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/monetization/overview"
  - "https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data"
keywords:
  - "geographic"
  - "residency"
  - "specify"
  - "regions"
  - "supports"
---

# Apigee Monetization Data Residency

Product: Apigee Monetization
Coverage: MEDIUM

## Step 02 Summary

Monetization now supports data residency to specify the geographic regions where monetization data is stored.

## Extended Definition

Monetization now supports data residency to specify the geographic regions where monetization data is stored.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/monetization/manage-rate-plans](https://docs.cloud.google.com/apigee/docs/api-platform/monetization/manage-rate-plans)
- [https://docs.cloud.google.com/apigee/docs/api-platform/monetization/overview](https://docs.cloud.google.com/apigee/docs/api-platform/monetization/overview)
- [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data)

## Supporting Pages

### Managing rate plans for API products | Apigee | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/monetization/manage-rate-plans](https://docs.cloud.google.com/apigee/docs/api-platform/monetization/manage-rate-plans)
- Source ID: `feature-recovery-direct-http`
- Final score: 98
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Apigee technical feature overview Apigee terminology API development lifecycle Key points of API proxy development Apigee architecture overview Apigee locations GET STARTED Introduction to provisioning Compare eval and paid organizations Provisioning options Prerequisites About Apigee provisioning permissions Networking options Introduction to data residency Introduction to CMEK Best practices for Apigee CMEK Using organization policy constraints Understand Apigee observability Provision paid orgs Before you begin Subscription Cloud console Select your project Provision Apigee with one click Configure and customize Step 1: Enable required APIs Step 2: Set up networking Step 3: Configure hosting and encryption Step 4: Customize access routing Recommended next steps Command line With VPC peering Without VPC peering Pay-as-you-go Cloud console Select your project Provision Apigee with one click Configure and customize Step 1: Enable required APIs Step 2: Set up networking Step 3: Configure hosting and encryption Step 4: Customize access routing Recommended next steps Command line With VPC peering Without VPC peering Provision eval orgs Before you begin Wizard Command line With VPC peering Without VPC peering Next steps Calling a proxy with internal-only access Accessing Apigee Using the UI Using the API Get information about calls to your APIs Using gcloud Troubleshooting DEVELOP Tutorial: Building your first API proxy Overview Step 1: Create an API proxy Step 2: Deploy an API proxy Step 3: Call an API proxy Step 4: Change the target endpoint Step 5: Add a policy Next steps: Go deeper Tutorial: Creating an API proxy from an OpenAPI Specification Building API proxies Understanding APIs and API proxies Programmable proxy basics Introduction to API proxy building Creating an API proxy Editing an API proxy (create a revision) Downloading and uploading an API proxy configuration bundle Deleting an API proxy Environments and organizations Understanding organizations Overview of environments and environment groups Working with environments Working with environment groups Best practices Routes and flows Understanding routes Controlling API proxies with flows Conditional flows Flow variables Flow variable overview Request and response flow variables Message flow variable Conditions with flow variables Shared flows and flow hooks Creating reusable shared flows Attaching a shared flow using flow hooks Chaining API proxies together Handling faults Adding features to a programmable API proxy Using policies Tutorial: Adding the SpikeArrest policy What's a policy?
- Install Big picture Prerequisites Permissions and roles to install and manage Apigee hybrid Plan and prepare Minimal cluster configurations Configuring dedicated node pools Configuring Cassandra for production Configuring stateless components for production Configuring authentication for Cassandra StorageClass configuration Service account authentication methods in Apigee hybrid Configuring ports and setting up firewalls Using data residency with Apigee hybrid GCP URLs to allow for hybrid Part 1: Project and org setup Overview Step 1: Enable APIs Step 2: Create an organization Step 3: Create an environment group Part 2: Hybrid runtime setup Before you begin Step 1: Create a cluster Step 2: Download the Helm charts Step 3: Create the apigee namespace Step 4: Set up service accounts Step 5: Set up service account authentication Step 6: Create TLS certificates Step 7: Create the overrides Step 8: Enable Control Plane access Step 9: Install cert-manager Step 10: Install the CRDs Step 11: Install Apigee hybrid using Helm Part 3: Expose ingress and deploy proxy Step 1: Expose Apigee ingress Step 2: Deploy an API proxy Uninstall hybrid runtime Administer Administration overview Troubleshooting Automated issue surfacing Diagnosing issues with guardrails Data collection Data collection overview Where is your data stored?
- Install Big picture Prerequisites Permissions and roles to install and manage Apigee hybrid Plan and prepare Minimal cluster configurations Configuring dedicated node pools Configuring Cassandra for production Configuring authentication for Cassandra StorageClass configuration Service account authentication methods in Apigee hybrid Configuring ports and setting up firewalls Using data residency with Apigee hybrid GCP URLs to allow for hybrid Part 1: Project and org setup Overview Step 1: Enable APIs Step 2: Create an organization Step 3: Create an environment group Part 2: Hybrid runtime setup Before you begin Step 1: Create a cluster Step 2: Download the Helm charts Step 3: Create the apigee namespace Step 4: Set up service accounts Step 5: Set up service account authentication Step 6: Create TLS certificates Step 7: Create the overrides Step 8: Enable Control Plane access Step 9: Install cert-manager Step 10: Install the CRDs Step 11: Install Apigee hybrid using Helm Part 3: Expose ingress and deploy proxy Step 1: Expose Apigee ingress Step 2: Deploy an API proxy Uninstall hybrid runtime Administer Administration overview Troubleshooting Automated issue surfacing Diagnosing issues with guardrails Data collection Data collection overview Where is your data stored?
- Install Big picture Prerequisites Permissions and roles to install and manage Apigee hybrid Plan and prepare Minimal cluster configurations Configuring dedicated node pools Configuring Cassandra for production Configuring authentication for Cassandra StorageClass configuration Configuring ports and setting up firewalls Using data residency with Apigee hybrid GCP URLs to allow for hybrid Part 1: Project and org setup Overview Step 1: Enable APIs Step 2: Create an organization Step 3: Create an environment group Part 2: Hybrid runtime setup Before you begin Step 1: Create a cluster Step 2: Download the Helm charts Step 3: Create the apigee namespace Step 4: Set up service accounts Step 5: Create TLS certificates Step 6: Create the overrides Step 7: Enable Synchronizer access Step 8: Install cert-manager Step 9: Install the CRDs Step 10: Check cluster readiness Step 11: Install Apigee hybrid using Helm Step 12: Configure Workload Identity on GKE Part 3: Expose ingress and deploy proxy Step 1: Expose Apigee ingress Step 2: Deploy an API proxy Uninstall hybrid runtime Administer Administration overview Troubleshooting Automated issue surfacing Diagnosing issues with guardrails Data collection Data collection overview Where is your data stored?

### Overview of Apigee monetization | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/monetization/overview](https://docs.cloud.google.com/apigee/docs/api-platform/monetization/overview)
- Source ID: `feature-recovery-direct-http`
- Final score: 92
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Apigee technical feature overview Apigee terminology API development lifecycle Key points of API proxy development Apigee architecture overview Apigee locations GET STARTED Introduction to provisioning Compare eval and paid organizations Provisioning options Prerequisites About Apigee provisioning permissions Networking options Introduction to data residency Introduction to CMEK Best practices for Apigee CMEK Using organization policy constraints Understand Apigee observability Provision paid orgs Before you begin Subscription Cloud console Select your project Provision Apigee with one click Configure and customize Step 1: Enable required APIs Step 2: Set up networking Step 3: Configure hosting and encryption Step 4: Customize access routing Recommended next steps Command line With VPC peering Without VPC peering Pay-as-you-go Cloud console Select your project Provision Apigee with one click Configure and customize Step 1: Enable required APIs Step 2: Set up networking Step 3: Configure hosting and encryption Step 4: Customize access routing Recommended next steps Command line With VPC peering Without VPC peering Provision eval orgs Before you begin Wizard Command line With VPC peering Without VPC peering Next steps Calling a proxy with internal-only access Accessing Apigee Using the UI Using the API Get information about calls to your APIs Using gcloud Troubleshooting DEVELOP Tutorial: Building your first API proxy Overview Step 1: Create an API proxy Step 2: Deploy an API proxy Step 3: Call an API proxy Step 4: Change the target endpoint Step 5: Add a policy Next steps: Go deeper Tutorial: Creating an API proxy from an OpenAPI Specification Building API proxies Understanding APIs and API proxies Programmable proxy basics Introduction to API proxy building Creating an API proxy Editing an API proxy (create a revision) Downloading and uploading an API proxy configuration bundle Deleting an API proxy Environments and organizations Understanding organizations Overview of environments and environment groups Working with environments Working with environment groups Best practices Routes and flows Understanding routes Controlling API proxies with flows Conditional flows Flow variables Flow variable overview Request and response flow variables Message flow variable Conditions with flow variables Shared flows and flow hooks Creating reusable shared flows Attaching a shared flow using flow hooks Chaining API proxies together Handling faults Adding features to a programmable API proxy Using policies Tutorial: Adding the SpikeArrest policy What's a policy?
- Install Big picture Prerequisites Permissions and roles to install and manage Apigee hybrid Plan and prepare Minimal cluster configurations Configuring dedicated node pools Configuring Cassandra for production Configuring stateless components for production Configuring authentication for Cassandra StorageClass configuration Service account authentication methods in Apigee hybrid Configuring ports and setting up firewalls Using data residency with Apigee hybrid GCP URLs to allow for hybrid Part 1: Project and org setup Overview Step 1: Enable APIs Step 2: Create an organization Step 3: Create an environment group Part 2: Hybrid runtime setup Before you begin Step 1: Create a cluster Step 2: Download the Helm charts Step 3: Create the apigee namespace Step 4: Set up service accounts Step 5: Set up service account authentication Step 6: Create TLS certificates Step 7: Create the overrides Step 8: Enable Control Plane access Step 9: Install cert-manager Step 10: Install the CRDs Step 11: Install Apigee hybrid using Helm Part 3: Expose ingress and deploy proxy Step 1: Expose Apigee ingress Step 2: Deploy an API proxy Uninstall hybrid runtime Administer Administration overview Troubleshooting Automated issue surfacing Diagnosing issues with guardrails Data collection Data collection overview Where is your data stored?
- Install Big picture Prerequisites Permissions and roles to install and manage Apigee hybrid Plan and prepare Minimal cluster configurations Configuring dedicated node pools Configuring Cassandra for production Configuring authentication for Cassandra StorageClass configuration Service account authentication methods in Apigee hybrid Configuring ports and setting up firewalls Using data residency with Apigee hybrid GCP URLs to allow for hybrid Part 1: Project and org setup Overview Step 1: Enable APIs Step 2: Create an organization Step 3: Create an environment group Part 2: Hybrid runtime setup Before you begin Step 1: Create a cluster Step 2: Download the Helm charts Step 3: Create the apigee namespace Step 4: Set up service accounts Step 5: Set up service account authentication Step 6: Create TLS certificates Step 7: Create the overrides Step 8: Enable Control Plane access Step 9: Install cert-manager Step 10: Install the CRDs Step 11: Install Apigee hybrid using Helm Part 3: Expose ingress and deploy proxy Step 1: Expose Apigee ingress Step 2: Deploy an API proxy Uninstall hybrid runtime Administer Administration overview Troubleshooting Automated issue surfacing Diagnosing issues with guardrails Data collection Data collection overview Where is your data stored?
- Install Big picture Prerequisites Permissions and roles to install and manage Apigee hybrid Plan and prepare Minimal cluster configurations Configuring dedicated node pools Configuring Cassandra for production Configuring authentication for Cassandra StorageClass configuration Configuring ports and setting up firewalls Using data residency with Apigee hybrid GCP URLs to allow for hybrid Part 1: Project and org setup Overview Step 1: Enable APIs Step 2: Create an organization Step 3: Create an environment group Part 2: Hybrid runtime setup Before you begin Step 1: Create a cluster Step 2: Download the Helm charts Step 3: Create the apigee namespace Step 4: Set up service accounts Step 5: Create TLS certificates Step 6: Create the overrides Step 7: Enable Synchronizer access Step 8: Install cert-manager Step 9: Install the CRDs Step 10: Check cluster readiness Step 11: Install Apigee hybrid using Helm Step 12: Configure Workload Identity on GKE Part 3: Expose ingress and deploy proxy Step 1: Expose Apigee ingress Step 2: Deploy an API proxy Uninstall hybrid runtime Administer Administration overview Troubleshooting Automated issue surfacing Diagnosing issues with guardrails Data collection Data collection overview Where is your data stored?

### "Enrich API data with custom curation in API hub \_|\_ Apigee \_|\_ Google\

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data)
- Source ID: `site-docs-root`
- Final score: 42
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

