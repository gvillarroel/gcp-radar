---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:30.391Z"
product_name: "Infrastructure Manager"
product_slug: "infrastructure-manager"
feature_name: "Developer Connect repository integration"
feature_slug: "developer-connect-repository-integration"
latest_feature_date: "2025-08-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/infrastructure-manager/docs/automate-git"
  - "https://docs.cloud.google.com/infrastructure-manager/docs/deploy-resources"
  - "https://docs.cloud.google.com/infrastructure-manager/docs/preview-deployment"
  - "https://docs.cloud.google.com/infrastructure-manager/docs/authentication"
keywords:
  - "developer"
  - "connect"
  - "repository"
  - "integration"
  - "repositories"
  - "to"
  - "infrastructure"
  - "manager"
---

# Developer Connect repository integration

Product: Infrastructure Manager
Coverage: MEDIUM

## Step 02 Summary

Connect repositories to Infrastructure Manager through Developer Connect proxies.

## Extended Definition

Connect repositories to Infrastructure Manager through Developer Connect proxies.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/infrastructure-manager/docs/automate-git](https://docs.cloud.google.com/infrastructure-manager/docs/automate-git)
- [https://docs.cloud.google.com/infrastructure-manager/docs/deploy-resources](https://docs.cloud.google.com/infrastructure-manager/docs/deploy-resources)
- [https://docs.cloud.google.com/infrastructure-manager/docs/preview-deployment](https://docs.cloud.google.com/infrastructure-manager/docs/preview-deployment)
- [https://docs.cloud.google.com/infrastructure-manager/docs/authentication](https://docs.cloud.google.com/infrastructure-manager/docs/authentication)

## Supporting Pages

### "Automate the deployment of Google Cloud resources \_|\_ Infrastructure Manager\

- URL: [https://docs.cloud.google.com/infrastructure-manager/docs/automate-git](https://docs.cloud.google.com/infrastructure-manager/docs/automate-git)
- Source ID: `site-iam-reference`
- Final score: 235
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Copy the im cloudbuild workspace module into the main.tf file within your Git repository: module "im-workspace" { source = "terraform-google-modules/bootstrap/google//modules/im cloudbuild workspace" version = " > 7.0" project id = " PROJECT ID " deployment id = " DEPLOYMENT ID " im deployment repo uri = " GIT REPO " im deployment ref = " REF " github app installation id = " GIT APP ID " github personal access token = " TOKEN " } Replace: PROJECT ID : the project ID where Infrastructure Manager runs.
- Once Infra Manager connects to your Git repository, pull requests invoke a preview of a deployment, and commits invoke creating a deployment preview or updating the deployment .
- This page describes the process to set up Cloud Build triggers to automate deployments of Google Cloud resources using your existing repositories and Infrastructure Manager.
- To confirm that your Git repository is connected correctly with Infra Manager, create a pull request on your repository .

### Deploy infrastructure using Infrastructure Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/infrastructure-manager/docs/deploy-resources](https://docs.cloud.google.com/infrastructure-manager/docs/deploy-resources)
- Source ID: `site-docs-root`
- Final score: 235
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use Infra Manager in Google Cloud CLI to deploy Terraform configurations from: Cloud Storage buckets Git repositories Local directories See Terraform modules and blueprints for Google Cloud for examples and template Terraform configurations you can use with Infra Manager.
- Connect your private Git repository and host to Cloud Build If you are deploying a Terraform configuration from a private Git repository , you need to connect your Git host and repository to Cloud Build.
- This page describes how to use Infrastructure Manager to provision a set of Google Cloud resources that are defined in a Terraform configuration.
- If your Terraform configuration is stored in a private Git repository , ensure your Git host and repository are connected to Cloud Build .

### Preview a deployment \_|\_ Infrastructure Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/infrastructure-manager/docs/preview-deployment](https://docs.cloud.google.com/infrastructure-manager/docs/preview-deployment)
- Source ID: `site-iam-reference`
- Final score: 185
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To update a deployment stored in a Git repository: If you are using a private Git repository, ensure that you have connected to your GitHub host and GitHub repository using Cloud Build to provide Infra Manager access to your repository.
- To preview the deployment: gcloud infra - manager previews create projects / PROJECT ID / locations / LOCATION / previews / PREVIEW ID \ -- service - account projects / SERVICE ACCOUNT PROJECT ID / serviceAccounts / SERVICE ACCOUNT \ -- git - source - repo = " GIT REPO " \ -- git - source - directory = " DIRECTORY " \ -- git - source - ref = " REF " \ -- input - values = INPUT 1 NAME = VALUE , INPUT 2 NAME = VALUE \ -- tf - version - constraint = TERRAFORM VERSION \ -- annotations = " ANNOTATION KEY = ANNOTATION VALUE " -- provider - source = SERVICE MAINTAINED Replace: PROJECT ID is the project ID where Infrastructure Manager runs.
- To preview the update: gcloud infra - manager previews create projects / PROJECT ID / locations / LOCATION / previews / PREVIEW ID \ -- service - account projects / SERVICE ACCOUNT PROJECT ID / serviceAccounts / SERVICE ACCOUNT \ -- gcs - source gs : // BUCKET NAME / OBJECT NAME \ -- input - values = INPUT 1 NAME = VALUE , INPUT 2 NAME = VALUE \ -- tf - version - constraint = TERRAFORM VERSION \ -- annotations = " ANNOTATION KEY = ANNOTATION VALUE " -- provider - source = SERVICE MAINTAINED Replace: PROJECT ID is the project ID where Infrastructure Manager runs.
- This page describes how to use Infrastructure Manager to preview the deployment of resources defined in a Terraform configuration.

### "Authenticate to Infra Manager \_|\_ Infrastructure Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/infrastructure-manager/docs/authentication](https://docs.cloud.google.com/infrastructure-manager/docs/authentication)
- Source ID: `site-api-reference`
- Final score: 175
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Infrastructure as code Infrastructure Manager Reference Send feedback Authenticate to Infra Manager Stay organized with collections Save and categorize content based on your preferences.
- How you authenticate to Infrastructure Manager depends on the interface you use to access the API and the environment where your code is running.
- This document describes how to authenticate to Infrastructure Manager programmatically.
- You can access the API in the following ways: Google Cloud CLI REST Google Cloud CLI When you use the gcloud CLI to access Infra Manager, you log in to the gcloud CLI with a user account, which provides the credentials used by the gcloud CLI commands.

