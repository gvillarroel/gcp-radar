---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:00:38.899Z"
product_name: "Cortex"
product_slug: "cortex"
feature_name: "Cloud Build regional build support"
feature_slug: "cloud-build-regional-build-support"
latest_feature_date: "2024-09-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/cortex/docs/deployment-step-four"
  - "https://docs.cloud.google.com/cortex/docs/deployment-step-six"
  - "https://docs.cloud.google.com/cortex/docs/deployment-step-five"
keywords:
  - "build"
  - "regional"
  - "lets"
  - "cortex"
  - "framework"
  - "deployments"
  - "run"
  - "builds"
---

# Cloud Build regional build support

Product: Cortex
Coverage: MEDIUM

## Step 02 Summary

Cloud Build regional build support lets Cortex Framework deployments run builds in a specified region.

## Extended Definition

Cloud Build regional build support lets Cortex Framework deployments run builds in a specified region.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/cortex/docs/deployment-step-four](https://docs.cloud.google.com/cortex/docs/deployment-step-four)
- [https://docs.cloud.google.com/cortex/docs/deployment-step-six](https://docs.cloud.google.com/cortex/docs/deployment-step-six)
- [https://docs.cloud.google.com/cortex/docs/deployment-step-five](https://docs.cloud.google.com/cortex/docs/deployment-step-five)

## Supporting Pages

### "Step 4: Set up components \_|\_ Google Cloud Cortex Framework \_|\_ Google\

- URL: [https://docs.cloud.google.com/cortex/docs/deployment-step-four](https://docs.cloud.google.com/cortex/docs/deployment-step-four)
- Source ID: `site-docs-reference`
- Final score: 111
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Assign the Service Account Token Creator role. gcloud Create a service account through an IAM policy with the following command: gcloud iam service-accounts create cortex-deployer \ --description = "Cortex Deployer Service Account" \ --display-name = "Cortex Deployer" Add the IAM policy to your Google Cloud project with the following command: gcloud projects add-iam-policy-binding SOURCE PROJECT \ --member = "serviceAccount: cortex-deployer @ SOURCE PROJECT .iam.gserviceaccount.com" \ --role = "roles/cloudbuild.builds.editor" Add the ID of all users (including your own) who can run the deployment through the service account, and assign them the Service Account Token Creator role with the following command: gcloud iam service-accounts add-iam-policy-binding cortex-deployer @ SOURCE PROJECT .iam.gserviceaccount.com \ --member = "user: USER EMAIL " \ --role = "roles/iam.serviceAccountTokenCreator" Replace the following: SOURCE PROJECT with the source project for Cortex Framework Data Foundation deployment.
- This section guides you through creating a dedicated service account for Cortex Framework deployments and granting the necessary permissions to the Cloud Build service account.
- As a best practice, we recommend that you specify your own service account to run your builds for Cortex Framework.
- The minimum required roles for a dedicated service account for Cortex for Meridian are the following: BigQuery Data Viewer ( roles/bigquery.dataViewer ) BigQuery Job User ( roles/bigquery.jobUser ) BigQuery Read Session User ( roles/bigquery.readSessionUser ) Cloud Build Editor ( roles/cloudbuild.builds.editor ) Colab Enterprise Admin ( roles/aiplatform.colabEnterpriseAdmin ) Logs Writer ( roles/logging.logWriter ) Notebook Runtime Admin ( aiplatform.notebookRuntimeAdmin ) Storage Admin ( roles/storage.admin ) Storage Object User ( roles/storage.objectUser ) Vertex AI Colab Service Agent ( roles/aiplatform.colabServiceAgent ) Use the following command to grant the roles to the dedicated service account for Cortex for Meridian: gcloud projects add-iam-policy-binding SOURCE PROJECT \ --member = "serviceAccount: cortex-meridian-colab-runner @ SOURCE PROJECT .iam.gserviceaccount.com" \ --role = 'roles/bigquery.dataViewer' gcloud projects add-iam-policy-binding SOURCE PROJECT \ --member = "serviceAccount: cortex-meridian-colab-runner @ SOURCE PROJECT .iam.gserviceaccount.com" \ --role = 'roles/bigquery.jobUser' gcloud projects add-iam-policy-binding SOURCE PROJECT \ --member = "serviceAccount: cortex-meridian-colab-runner @ SOURCE PROJECT .iam.gserviceaccount.com" \ --role = 'roles/bigquery.readSessionUser' gcloud projects add-iam-policy-binding SOURCE PROJECT \ --member = "serviceAccount: cortex-meridian-colab-runner @ SOURCE PROJECT .iam.gserviceaccount.com" \ --role = 'roles/cloudbuild.builds.editor' gcloud projects add-iam-policy-binding SOURCE PROJECT \ --member = "serviceAccount: cortex-meridian-colab-runner @ SOURCE PROJECT .iam.gserviceaccount.com" \ --role = 'roles/aiplatform.colabEnterpriseAdmin' gcloud projects add-iam-policy-binding SOURCE PROJECT \ --member = "serviceAccount: cortex-meridian-colab-runner @ SOURCE PROJECT .iam.gserviceaccount.com" \ --role = 'roles/logging.logWriter' gcloud projects add-iam-policy-binding SOURCE PROJECT \ --member = "serviceAccount: cortex-meridian-colab-runner @ SOURCE PROJECT .iam.gserviceaccount.com" \ --role = 'roles/aiplatform.notebookRuntimeAdmin' gcloud projects add-iam-policy-binding SOURCE PROJECT \ --member = "serviceAccount: cortex-meridian-colab-runner @ SOURCE PROJECT .iam.gserviceaccount.com" \ --role = 'roles/storage.admin' gcloud projects add-iam-policy-binding SOURCE PROJECT \ --member = "serviceAccount: cortex-meridian-colab-runner @ SOURCE PROJECT .iam.gserviceaccount.com" \ --role = 'roles/storage.objectUser' gcloud projects add-iam-policy-binding SOURCE PROJECT \ --member = "serviceAccount: cortex-meridian-colab-runner @ SOURCE PROJECT .iam.gserviceaccount.com" \ --role = 'roles/aiplatform.colabServiceAgent' Replace the following: SOURCE PROJECT with the project ID where Cortex for Meridian is deployed. cortex-meridian-colab-runner with your service account for Cortex for Meridian.

### "Step 5: Configure deployment \_|\_ Google Cloud Cortex Framework \_|\_ Google\

- URL: [https://docs.cloud.google.com/cortex/docs/deployment-step-five](https://docs.cloud.google.com/cortex/docs/deployment-step-five)
- Source ID: `site-docs-reference`
- Final score: 95
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: When installing multiple Cortex Framework workloads, you need to increase the Build and Operation Get requests per minute and Build and Operation Get requests per minute per user quotas.
- The configuration files for each workload are located in the following paths within the Cortex Framework Data Foundation repository: Data Source Settings files Operational - SAP src/SAP/SAP REPORTING/reporting settings ecc.yaml Operational - Salesforce Sales Cloud src/SFDC/config/reporting settings.yaml Operational - Oracle EBS src/oracleEBS/config/reporting settings.yaml Marketing - Google Ads src/marketing/src/GoogleAds/config/reporting settings.yaml Marketing - CM360 src/marketing/src/CM360/config/reporting settings.yaml Marketing - Meta src/marketing/src/Meta/config/reporting settings.yaml Marketing - Salesforce Marketing Cloud src/marketing/src/SFMC/config/reporting settings.yaml Marketing - TikTok src/marketing/src/TikTok/config/reporting settings.yaml Marketing - YouTube (with DV360) src/marketing/src/DV360/config/reporting settings.yaml Marketing - Google Analytics 4 src/marketing/src/GA4/config/reporting settings.yaml Marketing - Cross Media & Product Connected Insights src/marketing/src/CrossMedia/config/reporting settings.yaml Customizing reporting settings file The reporting settings files drives how the BigQuery objects (tables or views) are created for reporting datasets.
- For more information, see Task dependent DAGs . turboMode Deploy in Turbo mode . true Execute all views builds as a step in the same Cloud Build process, in parallel for a faster deployment.
- Home Documentation Data analytics Google Cloud Cortex Framework Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.

### "Step 6: Execute deployment \_|\_ Google Cloud Cortex Framework \_|\_ Google\

- URL: [https://docs.cloud.google.com/cortex/docs/deployment-step-six](https://docs.cloud.google.com/cortex/docs/deployment-step-six)
- Source ID: `site-docs-reference`
- Final score: 95
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Run the following command to locate yourself in the cloned repository: cd cortex-data-foundation Run the build command with the target log bucket: gcloud builds submit \ --substitutions = GCS BUCKET = LOGS BUCKET NAME , BUILD ACCOUNT = 'projects/ SOURCE PROJECT /serviceAccounts/ CLOUD BUILD SA @ SOURCE PROJECT .iam.gserviceaccount.com' Replace the following: LOGS BUCKET NAME with the bucket name for logs storage.
- A pipeline can reuse the cloudbuild.yaml scripts to trigger end-to-end deployment periodically, or based on git operations depending on your repository of choice by automating builds .
- Home Documentation Data analytics Google Cloud Cortex Framework Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Support If you encounter any issues or have feature requests related to these models or deployers, create an issue in the Cortex Framework Data Foundation repository.

