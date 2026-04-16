---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:30.394Z"
product_name: "Infrastructure Manager"
product_slug: "infrastructure-manager"
feature_name: "Infrastructure Manager gcloud CLI commands"
feature_slug: "infrastructure-manager-gcloud-cli-commands"
latest_feature_date: "2023-10-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/infrastructure-manager/docs/authentication"
  - "https://docs.cloud.google.com/infrastructure-manager/docs/reference/libraries"
  - "https://docs.cloud.google.com/infrastructure-manager/docs/deploy-resources"
  - "https://docs.cloud.google.com/infrastructure-manager/docs/enable-service"
keywords:
  - "infrastructure"
  - "manager"
  - "gcloud"
  - "cli"
  - "commands"
  - "the"
  - "for"
  - "reached"
---

# Infrastructure Manager gcloud CLI commands

Product: Infrastructure Manager
Coverage: MEDIUM

## Step 02 Summary

The gcloud CLI commands for Infrastructure Manager reached general availability.

## Extended Definition

The gcloud CLI commands for Infrastructure Manager reached general availability.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/infrastructure-manager/docs/authentication](https://docs.cloud.google.com/infrastructure-manager/docs/authentication)
- [https://docs.cloud.google.com/infrastructure-manager/docs/reference/libraries](https://docs.cloud.google.com/infrastructure-manager/docs/reference/libraries)
- [https://docs.cloud.google.com/infrastructure-manager/docs/deploy-resources](https://docs.cloud.google.com/infrastructure-manager/docs/deploy-resources)
- [https://docs.cloud.google.com/infrastructure-manager/docs/enable-service](https://docs.cloud.google.com/infrastructure-manager/docs/enable-service)

## Supporting Pages

### "Authenticate to Infra Manager \_|\_ Infrastructure Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/infrastructure-manager/docs/authentication](https://docs.cloud.google.com/infrastructure-manager/docs/authentication)
- Source ID: `site-api-reference`
- Final score: 275
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can access the API in the following ways: Google Cloud CLI REST Google Cloud CLI When you use the gcloud CLI to access Infra Manager, you log in to the gcloud CLI with a user account, which provides the credentials used by the gcloud CLI commands.
- For more information about using the gcloud CLI with Infra Manager, see the gcloud CLI reference pages .
- You can set up the gcloud CLI to use service account impersonation by using the gcloud config set command : gcloud config set auth/impersonate service account SERVICE ACCT EMAIL For select languages, you can use service account impersonation to create a local ADC file for use by client libraries.
- For information about the difference between your local ADC credentials and your gcloud CLI credentials, see gcloud CLI authentication configuration and ADC configuration .

### "Infra Manager client libraries \_|\_ Infrastructure Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/infrastructure-manager/docs/reference/libraries](https://docs.cloud.google.com/infrastructure-manager/docs/reference/libraries)
- Source ID: `site-api-reference`
- Final score: 246
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This page shows how to get started with the Cloud Client Libraries for the Infrastructure Manager API.
- Additional resources C++ The following list contains links to more resources related to the client library for C++: API reference Client libraries best practices Issue tracker on Stack Overflow Source code C# The following list contains links to more resources related to the client library for C#: API reference Client libraries best practices Issue tracker on Stack Overflow Source code Go The following list contains links to more resources related to the client library for Go: API reference Client libraries best practices Issue tracker on Stack Overflow Source code Java The following list contains links to more resources related to the client library for Java: API reference Client libraries best practices Issue tracker on Stack Overflow Source code Node.js The following list contains links to more resources related to the client library for Node.js: API reference Client libraries best practices Issue tracker on Stack Overflow Source code PHP The following list contains links to more resources related to the client library for PHP: API reference Client libraries best practices Issue tracker on Stack Overflow Source code Python The following list contains links to more resources related to the client library for Python: API reference Client libraries best practices Issue tracker on Stack Overflow Source code Ruby The following list contains links to more resources related to the client library for Ruby: API reference Client libraries best practices Issue tracker on Stack Overflow Source code Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Set up authentication To authenticate calls to Google Cloud APIs, client libraries support Application Default Credentials (ADC) ; the libraries look for credentials in a set of defined locations and use those credentials to authenticate requests to the API.
- After installation, initialize the Google Cloud CLI by running the following command: gcloud init If you're using an external identity provider (IdP), you must first sign in to the gcloud CLI with your federated identity .

### Deploy infrastructure using Infrastructure Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/infrastructure-manager/docs/deploy-resources](https://docs.cloud.google.com/infrastructure-manager/docs/deploy-resources)
- Source ID: `site-docs-root`
- Final score: 240
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Deploy the Terraform configuration: gcloud infra-manager deployments apply projects/ PROJECT ID /locations/ LOCATION /deployments/ DEPLOYMENT ID \ --service-account projects/ SERVICE ACCOUNT PROJECT ID /serviceAccounts/ SERVICE ACCOUNT \ --git-source-repo = " GIT REPO " \ --git-source-directory = " DIRECTORY " \ --git-source-ref = " REF " \ --quota-validation = QUOTA VALIDATION \ --input-values = INPUT 1 NAME = VALUE , INPUT 2 NAME = VALUE \ --tf-version-constraint = TERRAFORM VERSION \ --annotations = " ANNOTATION KEY = ANNOTATION VALUE " --provider-source = SERVICE MAINTAINED Replace: PROJECT ID : the project ID where Infra Manager runs.
- Deploy the Terraform configuration: gcloud infra-manager deployments apply projects/ PROJECT ID /locations/ LOCATION /deployments/ DEPLOYMENT ID \ --service-account projects/ SERVICE ACCOUNT PROJECT ID /serviceAccounts/ SERVICE ACCOUNT \ --gcs-source gs:// BUCKET NAME / OBJECT NAME \ --quota-validation = QUOTA VALIDATION \ --input-values = INPUT 1 NAME = VALUE , INPUT 2 NAME = VALUE \ --tf-version-constraint = TERRAFORM VERSION \ --annotations = " ANNOTATION KEY = ANNOTATION VALUE " --provider-source = SERVICE MAINTAINED Replace: PROJECT ID : the project ID where Infra Manager runs.
- Deploy the Terraform configuration: gcloud infra-manager deployments apply projects/ PROJECT ID /locations/ LOCATION /deployments/ DEPLOYMENT ID \ --service-account projects/ SERVICE ACCOUNT PROJECT ID /serviceAccounts/ SERVICE ACCOUNT \ --local-source = " LOCAL DIRECTORY " \ --quota-validation = QUOTA VALIDATION \ --input-values = INPUT 1 NAME = VALUE , INPUT 2 NAME = VALUE \ --tf-version-constraint = TERRAFORM VERSION \ --annotations = " ANNOTATION KEY = ANNOTATION VALUE " --provider-source = SERVICE MAINTAINED Replace: PROJECT ID : the project ID where Infra Manager runs.
- For more information, see Use the Terraform provider for Google Cloud . gcloud CLI This section describes how to work with a Terraform configuration that is stored on your local machine.

### "Enable and disable the service \_|\_ Infrastructure Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/infrastructure-manager/docs/enable-service](https://docs.cloud.google.com/infrastructure-manager/docs/enable-service)
- Source ID: `site-iam-reference`
- Final score: 238
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Click Disable API . gcloud Run the following command to disable the API for your current project: gcloud services disable config.googleapis.com What's next Learn more about Terraform with Google Cloud .
- The gcloud CLI snap package does not include kubectl or extensions to authenticate with Infra Manager using the gcloud CLI.
- For an existing installation, update components of the Google Cloud CLI with the command: gcloud components update .
- Enable the API from Google Cloud console or with the following gcloud command: gcloud services enable config.googleapis.com Optional: In order to use quota validation with Infra Manager, enable the API from Google Cloud console or with the following gcloud command: gcloud services enable cloudquotas.googleapis.com Disabling service When you disable the Infra Manager API, any related resources will continue to exist in the project.

