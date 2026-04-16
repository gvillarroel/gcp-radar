---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:26:55.421Z"
product_name: "Apigee Advanced API Security"
product_slug: "apigee-advanced-api-security"
feature_name: "Advanced API Security data residency"
feature_slug: "advanced-api-security-data-residency"
latest_feature_date: "2024-07-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/latest/using-data-residency-with-apigee-hybrid"
  - "https://docs.cloud.google.com/apigee/docs/api-security"
keywords:
  - "configuring"
  - "residency"
  - "regional"
  - "stored"
  - "supports"
---

# Advanced API Security data residency

Product: Apigee Advanced API Security
Coverage: MEDIUM

## Step 02 Summary

Advanced API Security now supports configuring regional data residency for stored security data to meet compliance requirements.

## Extended Definition

Advanced API Security now supports configuring regional data residency for stored security data to meet compliance requirements.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts)
- [https://docs.cloud.google.com/apigee/docs/hybrid/latest/using-data-residency-with-apigee-hybrid](https://docs.cloud.google.com/apigee/docs/hybrid/latest/using-data-residency-with-apigee-hybrid)
- [https://docs.cloud.google.com/apigee/docs/api-security](https://docs.cloud.google.com/apigee/docs/api-security)

## Supporting Pages

### Introduction to data residency \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts)
- Source ID: `site-docs-root-2`
- Final score: 138
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you choose to enable data residency when provisioning an Apigee Subscription or Pay-as-you-go organization, the following services are in scope under Apigee's FedRAMP Authority To Operate (ATO): The regionalized Apigee organization's control plane, runtime plane, and analytics .
- By default, the control plane is a global entity unless you select data residency (regionalization) at the time of Apigee organization creation; it can not be changed later.
- Data residency for Apigee meets compliance and regulatory requirements by allowing you to specify the geographic locations (regions) where Apigee data is stored.
- Apigee hybrid version 1.14.0 and later with data residency enabled supports Advanced API Security , Apigee API analytics , the Debug tool , and Monetization .

### Using data residency with Apigee hybrid \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/latest/using-data-residency-with-apigee-hybrid](https://docs.cloud.google.com/apigee/docs/hybrid/latest/using-data-residency-with-apigee-hybrid)
- Source ID: `site-docs-root-2`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Basic steps for data residency configuration To configure Apigee hybrid for data residency, you need to follow a few basic steps, including: Creating an Apigee organization with data residency Creating an environment using the Apigee API Enabling the new data pipeline Configuring the overrides file(s) Creating an Apigee organization with data residency When you create an Apigee organization, you have the option of enabling the org with data residency.
- Data residency meets compliance and regulatory requirements by allowing you to specify the geographic locations (regions) where Apigee data is stored.
- With data residency, selecting the control plane location ensures that all customer content is stored within the specified region.
- For example: instanceID: "my hybrid example" namespace: apigee gcp: projectID: hybrid-example region: us-central1 k8sCluster: name: apigee-hybrid region: us-central1 org: hybrid-example contractProvider: https://us-apigee.googleapis.com See Step 7: Create the overrides When calling the Apigee APIs When you make curl calls to Apigee APIs to perform tasks in your hybrid installation, you will need to call APIs from within the control plane location: curl -H "Authorization: Bearer $TOKEN" \ "https:// CONTROL PLANE LOCATION -apigee.googleapis.com/v1/organizations/ ORG NAME /envgroups" For example: curl -H "Authorization: Bearer $TOKEN" \ "https:// us -apigee.googleapis.com/v1/organizations/my-hybrid-org/envgroups" URL allowlisting If you are using forward proxies with data residency, you must additionally allowlist in the forward proxy: CONTROL PLANE LOCATION -apigee.googleapis.com ANALYTICS REGION -pubsub.googleapis.com URLs required by Apigee hybrid, see Google Cloud URLs to allow for Hybrid .

### Overview of Advanced API Security | Apigee | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security](https://docs.cloud.google.com/apigee/docs/api-security)
- Source ID: `feature-recovery-direct-http`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Install Big picture Prerequisites Permissions and roles to install and manage Apigee hybrid Plan and prepare Minimal cluster configurations Configuring dedicated node pools Configuring Cassandra for production Configuring stateless components for production Configuring authentication for Cassandra StorageClass configuration Service account authentication methods in Apigee hybrid Configuring ports and setting up firewalls Using data residency with Apigee hybrid GCP URLs to allow for hybrid Part 1: Project and org setup Overview Step 1: Enable APIs Step 2: Create an organization Step 3: Create an environment group Part 2: Hybrid runtime setup Before you begin Step 1: Create a cluster Step 2: Download the Helm charts Step 3: Create the apigee namespace Step 4: Set up service accounts Step 5: Set up service account authentication Step 6: Create TLS certificates Step 7: Create the overrides Step 8: Enable Control Plane access Step 9: Install cert-manager Step 10: Install the CRDs Step 11: Install Apigee hybrid using Helm Part 3: Expose ingress and deploy proxy Step 1: Expose Apigee ingress Step 2: Deploy an API proxy Uninstall hybrid runtime Administer Administration overview Troubleshooting Automated issue surfacing Diagnosing issues with guardrails Data collection Data collection overview Where is your data stored?
- Install Big picture Prerequisites Permissions and roles to install and manage Apigee hybrid Plan and prepare Minimal cluster configurations Configuring dedicated node pools Configuring Cassandra for production Configuring authentication for Cassandra StorageClass configuration Service account authentication methods in Apigee hybrid Configuring ports and setting up firewalls Using data residency with Apigee hybrid GCP URLs to allow for hybrid Part 1: Project and org setup Overview Step 1: Enable APIs Step 2: Create an organization Step 3: Create an environment group Part 2: Hybrid runtime setup Before you begin Step 1: Create a cluster Step 2: Download the Helm charts Step 3: Create the apigee namespace Step 4: Set up service accounts Step 5: Set up service account authentication Step 6: Create TLS certificates Step 7: Create the overrides Step 8: Enable Control Plane access Step 9: Install cert-manager Step 10: Install the CRDs Step 11: Install Apigee hybrid using Helm Part 3: Expose ingress and deploy proxy Step 1: Expose Apigee ingress Step 2: Deploy an API proxy Uninstall hybrid runtime Administer Administration overview Troubleshooting Automated issue surfacing Diagnosing issues with guardrails Data collection Data collection overview Where is your data stored?
- Install Big picture Prerequisites Permissions and roles to install and manage Apigee hybrid Plan and prepare Minimal cluster configurations Configuring dedicated node pools Configuring Cassandra for production Configuring authentication for Cassandra StorageClass configuration Configuring ports and setting up firewalls Using data residency with Apigee hybrid GCP URLs to allow for hybrid Part 1: Project and org setup Overview Step 1: Enable APIs Step 2: Create an organization Step 3: Create an environment group Part 2: Hybrid runtime setup Before you begin Step 1: Create a cluster Step 2: Download the Helm charts Step 3: Create the apigee namespace Step 4: Set up service accounts Step 5: Create TLS certificates Step 6: Create the overrides Step 7: Enable Synchronizer access Step 8: Install cert-manager Step 9: Install the CRDs Step 10: Check cluster readiness Step 11: Install Apigee hybrid using Helm Step 12: Configure Workload Identity on GKE Part 3: Expose ingress and deploy proxy Step 1: Expose Apigee ingress Step 2: Deploy an API proxy Uninstall hybrid runtime Administer Administration overview Troubleshooting Automated issue surfacing Diagnosing issues with guardrails Data collection Data collection overview Where is your data stored?
- Install Big picture Prerequisites Permissions and roles to install and manage Apigee hybrid Plan and prepare Minimal cluster configurations Configuring dedicated node pools Configuring Cassandra for production Configuring authentication for Cassandra StorageClass configuration Configuring ports and setting up firewalls Using data residency with Apigee hybrid GCP URLs to allow for hybrid Part 1: Project and org setup Overview Step 1: Enable APIs Step 2: Create an organization Step 3: Create an environment group Part 2: Hybrid runtime setup Before you begin Step 1: Create a cluster Step 2: Download the Helm charts Step 3: Create the apigee namespace Step 4: Set up service accounts Step 5: Create TLS certificates Step 6: Create the overrides Step 7: Enable Control Plane access Step 8: Install cert-manager Step 9: Install the CRDs Step 10: Install Apigee hybrid using Helm Step 11: Configure Workload Identity on GKE Part 3: Expose ingress and deploy proxy Step 1: Expose Apigee ingress Step 2: Deploy an API proxy Uninstall hybrid runtime Administer Administration overview Troubleshooting Automated issue surfacing Diagnosing issues with guardrails Data collection Data collection overview Where is your data stored?

