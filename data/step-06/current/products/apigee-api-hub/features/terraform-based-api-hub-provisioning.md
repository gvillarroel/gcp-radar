---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T01:24:36.637Z"
product_name: "Apigee API hub"
product_slug: "apigee-api-hub"
feature_name: "Terraform-based API hub provisioning"
feature_slug: "terraform-based-api-hub-provisioning"
latest_feature_date: "2025-04-02"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/apihub/provision-terraform"
keywords:
  - "infrastructure as code"
  - "Terraform apply"
  - "programmatic API hub instance"
  - "Terraform provisioning"
  - "Terraform deployment"
  - "Google Cloud Terraform"
  - "IaC provisioning"
  - "Cloud Shell"
---

# Terraform-based API hub provisioning

Product: Apigee API hub
Coverage: HIGH

## Step 02 Summary

API hub instances can now be provisioned programmatically with Terraform in Google Cloud, including support in Cloud Shell.

## Extended Definition

Terraform-based API hub provisioning is a documented Google Cloud deployment method that uses Terraform workflows (`terraform init`, `terraform plan`, and `terraform apply`) to provision an API hub instance from configuration in a project directory. The process can be performed from a Cloud Shell session, and the documentation also mentions support for local shell environments.

## Evidence Summary

The cited Apigee API hub documentation page explicitly details Terraform commands for provisioning API hub and confirms that provisioning is supported in Cloud Shell as well as local shells.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/apihub/provision-terraform](https://docs.cloud.google.com/apigee/docs/apihub/provision-terraform)

## Supporting Pages

### Provision API hub using Terraform \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/provision-terraform](https://docs.cloud.google.com/apigee/docs/apihub/provision-terraform)
- Source ID: `site-iam-reference`
- Final score: 52
- Re-rank relevance: STRONG
- Re-rank rationale: The page specifically explains how to provision API hub using Terraform, including support via Cloud Shell and local shells.

Evidence snippets:
- Initialize Terraform in the directory: terraform init Generate the Terraform execution plan based on the current state of your project and the configuration file: terraform plan Apply the plan to provision API hub: terraform apply If prompted, enter yes to confirm the deployment.
- Before you begin Prepare your development environment, either Cloud Shell or a local shell: Cloud Shell To use an online terminal with the gcloud CLI and Terraform already set up, activate Cloud Shell.
- This page explains how to provision API hub using Terraform for Google Cloud in Cloud Shell .
- At the bottom of this page, a Cloud Shell session starts and displays a command-line prompt.

