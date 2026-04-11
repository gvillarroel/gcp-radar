---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T01:24:36.628Z"
product_name: "Apigee API hub"
product_slug: "apigee-api-hub"
feature_name: "gcloud CLI support for API hub"
feature_slug: "gcloud-cli-support-for-api-hub"
latest_feature_date: "2026-03-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/apihub/provision-terraform"
keywords:
  - "command-line administration"
  - "API catalog commands"
  - "gcloud apihub"
  - "gcloud CLI"
  - "API version management"
  - "lifecycle metadata"
  - "Cloud Shell"
  - "Cloud CLI"
---

# gcloud CLI support for API hub

Product: Apigee API hub
Coverage: LOW

## Step 02 Summary

Adds Google Cloud CLI support to manage API hub catalog, API versions, and lifecycle metadata from the command line.

## Extended Definition

According to the provided Apigee API hub provisioning documentation, API hub setup can be performed in environments where the Google Cloud CLI is installed and initialized (`gcloud init`), either in Cloud Shell or a local shell. The evidence also indicates the documentation covers CLI authentication (including federated identity flow) and gcloud/terraform environment preparation as part of API hub provisioning steps. It does not explicitly detail specific `gcloud apihub` command coverage in this excerpt.

## Evidence Summary

The cited page supports CLI prerequisite/setup steps (Cloud Shell or local shell, install and initialize gcloud, sign in) for API hub provisioning, but does not provide explicit evidence of complete command set coverage for catalog or version management operations.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/apihub/provision-terraform](https://docs.cloud.google.com/apigee/docs/apihub/provision-terraform)

## Supporting Pages

### Provision API hub using Terraform \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/provision-terraform](https://docs.cloud.google.com/apigee/docs/apihub/provision-terraform)
- Source ID: `site-iam-reference`
- Final score: 54
- Re-rank relevance: WEAK
- Re-rank rationale: The page mentions using gcloud CLI as part of environment setup for Terraform provisioning, but it does not describe CLI functionality for managing API hub resources.

Evidence snippets:
- Before you begin Prepare your development environment, either Cloud Shell or a local shell: Cloud Shell To use an online terminal with the gcloud CLI and Terraform already set up, activate Cloud Shell.
- If you're using an external identity provider (IdP), you must first sign in to the gcloud CLI with your federated identity .
- To initialize the gcloud CLI, run the following command: gcloud init Install Terraform .
- Local shell To use a local development environment, follow these steps: Install the Google Cloud CLI.

