---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:30.395Z"
product_name: "Infrastructure Manager"
product_slug: "infrastructure-manager"
feature_name: "Infrastructure Manager gcloud CLI support"
feature_slug: "infrastructure-manager-gcloud-cli-support"
latest_feature_date: "2023-08-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/infrastructure-manager/docs/deploy-resources"
  - "https://docs.cloud.google.com/infrastructure-manager/docs/custom-constraints"
  - "https://docs.cloud.google.com/infrastructure-manager/docs/reference/libraries"
  - "https://docs.cloud.google.com/infrastructure-manager/docs/authentication"
keywords:
  - "infrastructure"
  - "manager"
  - "gcloud"
  - "cli"
  - "became"
  - "available"
  - "in"
  - "alpha"
---

# Infrastructure Manager gcloud CLI support

Product: Infrastructure Manager
Coverage: MEDIUM

## Step 02 Summary

Infrastructure Manager gcloud CLI support became available in alpha.

## Extended Definition

Infrastructure Manager gcloud CLI support became available in alpha.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/infrastructure-manager/docs/deploy-resources](https://docs.cloud.google.com/infrastructure-manager/docs/deploy-resources)
- [https://docs.cloud.google.com/infrastructure-manager/docs/custom-constraints](https://docs.cloud.google.com/infrastructure-manager/docs/custom-constraints)
- [https://docs.cloud.google.com/infrastructure-manager/docs/reference/libraries](https://docs.cloud.google.com/infrastructure-manager/docs/reference/libraries)
- [https://docs.cloud.google.com/infrastructure-manager/docs/authentication](https://docs.cloud.google.com/infrastructure-manager/docs/authentication)

## Supporting Pages

### Deploy infrastructure using Infrastructure Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/infrastructure-manager/docs/deploy-resources](https://docs.cloud.google.com/infrastructure-manager/docs/deploy-resources)
- Source ID: `site-docs-root`
- Final score: 291
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You have deployed your Terraform configuration using Infra Manager. gcloud CLI This section describes deploying a Terraform configuration that is stored in a Cloud Storage bucket.
- Deploy the Terraform configuration: gcloud infra-manager deployments apply projects/ PROJECT ID /locations/ LOCATION /deployments/ DEPLOYMENT ID \ --service-account projects/ SERVICE ACCOUNT PROJECT ID /serviceAccounts/ SERVICE ACCOUNT \ --git-source-repo = " GIT REPO " \ --git-source-directory = " DIRECTORY " \ --git-source-ref = " REF " \ --quota-validation = QUOTA VALIDATION \ --input-values = INPUT 1 NAME = VALUE , INPUT 2 NAME = VALUE \ --tf-version-constraint = TERRAFORM VERSION \ --annotations = " ANNOTATION KEY = ANNOTATION VALUE " --provider-source = SERVICE MAINTAINED Replace: PROJECT ID : the project ID where Infra Manager runs.
- Deploy the Terraform configuration: gcloud infra-manager deployments apply projects/ PROJECT ID /locations/ LOCATION /deployments/ DEPLOYMENT ID \ --service-account projects/ SERVICE ACCOUNT PROJECT ID /serviceAccounts/ SERVICE ACCOUNT \ --gcs-source gs:// BUCKET NAME / OBJECT NAME \ --quota-validation = QUOTA VALIDATION \ --input-values = INPUT 1 NAME = VALUE , INPUT 2 NAME = VALUE \ --tf-version-constraint = TERRAFORM VERSION \ --annotations = " ANNOTATION KEY = ANNOTATION VALUE " --provider-source = SERVICE MAINTAINED Replace: PROJECT ID : the project ID where Infra Manager runs.
- Deploy the Terraform configuration: gcloud infra-manager deployments apply projects/ PROJECT ID /locations/ LOCATION /deployments/ DEPLOYMENT ID \ --service-account projects/ SERVICE ACCOUNT PROJECT ID /serviceAccounts/ SERVICE ACCOUNT \ --local-source = " LOCAL DIRECTORY " \ --quota-validation = QUOTA VALIDATION \ --input-values = INPUT 1 NAME = VALUE , INPUT 2 NAME = VALUE \ --tf-version-constraint = TERRAFORM VERSION \ --annotations = " ANNOTATION KEY = ANNOTATION VALUE " --provider-source = SERVICE MAINTAINED Replace: PROJECT ID : the project ID where Infra Manager runs.

### "Manage Infrastructure Manager resources using custom constraints \_|\_ Google\

- URL: [https://docs.cloud.google.com/infrastructure-manager/docs/custom-constraints](https://docs.cloud.google.com/infrastructure-manager/docs/custom-constraints)
- Source ID: `site-iam-reference`
- Final score: 283
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Test the policy Try to create a Infra Manager deployment that imports existing resources in the project: gcloud infra-manager deployments apply projects/ PROJECT ID /locations/us-central1/deployments/quickstart-deployment \ --service-account = projects/ PROJECT ID /serviceAccounts/ SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com \ --git-source-repo = https://github.com/terraform-google-modules/terraform-google-network \ --git-source-directory = modules/vpc \ --git-source-ref = main \ --input-values = project id = PROJECT ID ,network name = quickstart-vpc The output is the following: Operation denied by custom org policies: ["customConstraints/custom.disallowImportExistingResources": "New deployments disallow the import of existing resources."] Example custom organization policies for common use cases This table provides syntax examples for some common custom constraints.
- Description Constraint syntax Disable importing existing resources for new deployments name : organizations/ ORGANIZATION ID /customConstraints/custom.disallowImportExistingResources resourceTypes : ‐ config.googleapis.com/Deployment methodTypes : ‐ CREATE condition : "resource.importExistingResources == true" actionType : DENY displayName : Reject existing resources description : New deployments disallow the import of existing resources Infrastructure Manager supported resources The following table lists the Infrastructure Manager resources that you can reference in custom constraints.
- Home Documentation Infrastructure as code Infrastructure Manager Guides Send feedback Manage Infrastructure Manager resources using custom constraints Stay organized with collections Save and categorize content based on your preferences.
- To initialize the gcloud CLI, run the following command: gcloud init In the Google Cloud console, on the project selector page, select or create a Google Cloud project.

### "Infra Manager client libraries \_|\_ Infrastructure Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/infrastructure-manager/docs/reference/libraries](https://docs.cloud.google.com/infrastructure-manager/docs/reference/libraries)
- Source ID: `site-api-reference`
- Final score: 269
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Infrastructure as code Infrastructure Manager Reference Send feedback Infra Manager client libraries Stay organized with collections Save and categorize content based on your preferences.
- This page shows how to get started with the Cloud Client Libraries for the Infrastructure Manager API.
- After installation, initialize the Google Cloud CLI by running the following command: gcloud init If you're using an external identity provider (IdP), you must first sign in to the gcloud CLI with your federated identity .
- If an authentication error is returned, and you are using an external identity provider (IdP), confirm that you have signed in to the gcloud CLI with your federated identity .

### "Authenticate to Infra Manager \_|\_ Infrastructure Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/infrastructure-manager/docs/authentication](https://docs.cloud.google.com/infrastructure-manager/docs/authentication)
- Source ID: `site-api-reference`
- Final score: 257
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can access the API in the following ways: Google Cloud CLI REST Google Cloud CLI When you use the gcloud CLI to access Infra Manager, you log in to the gcloud CLI with a user account, which provides the credentials used by the gcloud CLI commands.
- REST You can authenticate to the Infra Manager API by using your gcloud CLI credentials or by using Application Default Credentials .
- For more information about using the gcloud CLI with Infra Manager, see the gcloud CLI reference pages .
- You can set up the gcloud CLI to use service account impersonation by using the gcloud config set command : gcloud config set auth/impersonate service account SERVICE ACCT EMAIL For select languages, you can use service account impersonation to create a local ADC file for use by client libraries.

