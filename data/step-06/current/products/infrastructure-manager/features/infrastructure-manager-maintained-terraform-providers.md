---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:30.391Z"
product_name: "Infrastructure Manager"
product_slug: "infrastructure-manager"
feature_name: "Infrastructure Manager-maintained Terraform providers"
feature_slug: "infrastructure-manager-maintained-terraform-providers"
latest_feature_date: "2025-08-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/infrastructure-manager/docs/terraform"
  - "https://docs.cloud.google.com/infrastructure-manager/docs/deploy-resources"
  - "https://docs.cloud.google.com/infrastructure-manager/docs/preview-deployment"
  - "https://docs.cloud.google.com/infrastructure-manager/docs/overview"
keywords:
  - "infrastructure"
  - "manager"
  - "maintained"
  - "terraform"
  - "providers"
  - "use"
  - "by"
  - "during"
---

# Infrastructure Manager-maintained Terraform providers

Product: Infrastructure Manager
Coverage: MEDIUM

## Step 02 Summary

Use Terraform providers maintained by Infrastructure Manager during deployment creation, updates, and previews.

## Extended Definition

Use Terraform providers maintained by Infrastructure Manager during deployment creation, updates, and previews.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/infrastructure-manager/docs/terraform](https://docs.cloud.google.com/infrastructure-manager/docs/terraform)
- [https://docs.cloud.google.com/infrastructure-manager/docs/deploy-resources](https://docs.cloud.google.com/infrastructure-manager/docs/deploy-resources)
- [https://docs.cloud.google.com/infrastructure-manager/docs/preview-deployment](https://docs.cloud.google.com/infrastructure-manager/docs/preview-deployment)
- [https://docs.cloud.google.com/infrastructure-manager/docs/overview](https://docs.cloud.google.com/infrastructure-manager/docs/overview)

## Supporting Pages

### Terraform and Infrastructure Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/infrastructure-manager/docs/terraform](https://docs.cloud.google.com/infrastructure-manager/docs/terraform)
- Source ID: `site-docs-root`
- Final score: 275
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To learn how to specify the use of a Infra Manager maintained Terraform provider, see Deploy infrastructure using Infrastructure Manager , Update a deployment , or Preview a deployment .
- Infra Manager supports Terraform providers for Google Cloud: google google-beta Omit this field to use the HashiCorp-maintained Terraform provider for Google Cloud .
- Use the Terraform provider for Google Cloud You can configure deployments and previews to use Infra Manager maintained Terraform providers for Google Cloud.
- This optional field lets you specify the use of the Infra Manager maintained Terraform providers to create or update a deployment or preview deployment.

### Deploy infrastructure using Infrastructure Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/infrastructure-manager/docs/deploy-resources](https://docs.cloud.google.com/infrastructure-manager/docs/deploy-resources)
- Source ID: `site-docs-root`
- Final score: 240
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This page describes how to use Infrastructure Manager to provision a set of Google Cloud resources that are defined in a Terraform configuration.
- Set to SERVICE MAINTAINED to use the Infra Manager maintained Terraform provider.
- Set to SERVICE MAINTAINED to use the Infra Manager maintained Terraform provider.
- Set to SERVICE MAINTAINED to use the Infra Manager maintained Terraform provider.

### Preview a deployment \_|\_ Infrastructure Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/infrastructure-manager/docs/preview-deployment](https://docs.cloud.google.com/infrastructure-manager/docs/preview-deployment)
- Source ID: `site-iam-reference`
- Final score: 224
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To preview the deployment: gcloud infra - manager previews create projects / PROJECT ID / locations / LOCATION / previews / PREVIEW ID \ -- service - account projects / SERVICE ACCOUNT PROJECT ID / serviceAccounts / SERVICE ACCOUNT \ -- git - source - repo = " GIT REPO " \ -- git - source - directory = " DIRECTORY " \ -- git - source - ref = " REF " \ -- input - values = INPUT 1 NAME = VALUE , INPUT 2 NAME = VALUE \ -- tf - version - constraint = TERRAFORM VERSION \ -- annotations = " ANNOTATION KEY = ANNOTATION VALUE " -- provider - source = SERVICE MAINTAINED Replace: PROJECT ID is the project ID where Infrastructure Manager runs.
- To preview the update: gcloud infra - manager previews create projects / PROJECT ID / locations / LOCATION / previews / PREVIEW ID \ -- service - account projects / SERVICE ACCOUNT PROJECT ID / serviceAccounts / SERVICE ACCOUNT \ -- gcs - source gs : // BUCKET NAME / OBJECT NAME \ -- input - values = INPUT 1 NAME = VALUE , INPUT 2 NAME = VALUE \ -- tf - version - constraint = TERRAFORM VERSION \ -- annotations = " ANNOTATION KEY = ANNOTATION VALUE " -- provider - source = SERVICE MAINTAINED Replace: PROJECT ID is the project ID where Infrastructure Manager runs.
- This page describes how to use Infrastructure Manager to preview the deployment of resources defined in a Terraform configuration.
- Set to SERVICE MAINTAINED to use the Infra Manager maintained Terraform provider.

### Infrastructure Manager overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/infrastructure-manager/docs/overview](https://docs.cloud.google.com/infrastructure-manager/docs/overview)
- Source ID: `site-api-reference`
- Final score: 208
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For each revision, Infra Manager stores the following: Logs The configuration used to do the revision The list of Google Cloud resources created by the revision The state file created as part of each deployment and revision See Infrastructure as Code on Google Cloud for more information about IaC.
- Infra Manager and Infrastructure as Code Infra Manager allows you to use IaC to manage the lifecycle of Google Cloud resources: Terraform is defined declaratively in a Terraform configuration .
- Initializes Terraform ( terraform init ) Validates the Terraform configuration ( terraform validate ) Actuates the configuration ( terraform apply , or terraform destroy if you are deleting a deployment) Streams Cloud Build logs into a storage bucket created by Infra Manager.
- Infra Manager allows you to deploy programmatically to Google Cloud, allowing you to use this service rather than maintaining a different toolchain to work with Terraform on Google Cloud.

