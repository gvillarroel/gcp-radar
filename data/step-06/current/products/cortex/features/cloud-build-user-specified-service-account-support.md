---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:00:38.899Z"
product_name: "Cortex"
product_slug: "cortex"
feature_name: "Cloud Build user-specified service account support"
feature_slug: "cloud-build-user-specified-service-account-support"
latest_feature_date: "2024-09-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/cortex/docs/datamesh"
  - "https://docs.cloud.google.com/cortex/docs/deployment-step-four"
  - "https://docs.cloud.google.com/cortex/docs/deployment-prerequisites"
keywords:
  - "build"
  - "user"
  - "specified"
  - "account"
  - "lets"
  - "cortex"
  - "framework"
  - "deployments"
---

# Cloud Build user-specified service account support

Product: Cortex
Coverage: MEDIUM

## Step 02 Summary

Cloud Build user-specified service account support lets Cortex Framework deployments run builds with a chosen service account.

## Extended Definition

Cloud Build user-specified service account support lets Cortex Framework deployments run builds with a chosen service account.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/cortex/docs/datamesh](https://docs.cloud.google.com/cortex/docs/datamesh)
- [https://docs.cloud.google.com/cortex/docs/deployment-step-four](https://docs.cloud.google.com/cortex/docs/deployment-step-four)
- [https://docs.cloud.google.com/cortex/docs/deployment-prerequisites](https://docs.cloud.google.com/cortex/docs/deployment-prerequisites)

## Supporting Pages

### "(Deprecated) Data Mesh User Guide \_|\_ Google Cloud Cortex Framework \_\

- URL: [https://docs.cloud.google.com/cortex/docs/datamesh](https://docs.cloud.google.com/cortex/docs/datamesh)
- Source ID: `site-docs-reference`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following sections are particularly relevant: Roles interact Authorization inheritance Masking rules and hierarchy Policy tag best practices Cortex Framework provides sample policy tags to demonstrate how they are specified and potential uses, however resources that affect access control are not enabled in the Data Mesh deployment by default.
- Home Documentation Data analytics Google Cloud Cortex Framework Guides Send feedback Stay organized with collections Save and categorize content based on your preferences. (Deprecated) Data Mesh User Guide Warning: The Data Mesh feature within the Google Cloud Cortex Framework is now deprecated and disabled.
- For existing Cortex Framework users who have implemented the Data Mesh feature, we recommend transitioning to Dataplex Universal Catalog to ensure continued support and access to the latest features.
- When deploying Data Mesh with the data foundation, grant permissions to the deploying user or the Cloud Build account.

### "Step 4: Set up components \_|\_ Google Cloud Cortex Framework \_|\_ Google\

- URL: [https://docs.cloud.google.com/cortex/docs/deployment-step-four](https://docs.cloud.google.com/cortex/docs/deployment-step-four)
- Source ID: `site-docs-reference`
- Final score: 148
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Assign the Service Account Token Creator role. gcloud Create a service account through an IAM policy with the following command: gcloud iam service-accounts create cortex-deployer \ --description = "Cortex Deployer Service Account" \ --display-name = "Cortex Deployer" Add the IAM policy to your Google Cloud project with the following command: gcloud projects add-iam-policy-binding SOURCE PROJECT \ --member = "serviceAccount: cortex-deployer @ SOURCE PROJECT .iam.gserviceaccount.com" \ --role = "roles/cloudbuild.builds.editor" Add the ID of all users (including your own) who can run the deployment through the service account, and assign them the Service Account Token Creator role with the following command: gcloud iam service-accounts add-iam-policy-binding cortex-deployer @ SOURCE PROJECT .iam.gserviceaccount.com \ --member = "user: USER EMAIL " \ --role = "roles/iam.serviceAccountTokenCreator" Replace the following: SOURCE PROJECT with the source project for Cortex Framework Data Foundation deployment.
- This section guides you through creating a dedicated service account for Cortex Framework deployments and granting the necessary permissions to the Cloud Build service account.
- The minimum required roles for a dedicated service account for Cortex for Meridian are the following: BigQuery Data Viewer ( roles/bigquery.dataViewer ) BigQuery Job User ( roles/bigquery.jobUser ) BigQuery Read Session User ( roles/bigquery.readSessionUser ) Cloud Build Editor ( roles/cloudbuild.builds.editor ) Colab Enterprise Admin ( roles/aiplatform.colabEnterpriseAdmin ) Logs Writer ( roles/logging.logWriter ) Notebook Runtime Admin ( aiplatform.notebookRuntimeAdmin ) Storage Admin ( roles/storage.admin ) Storage Object User ( roles/storage.objectUser ) Vertex AI Colab Service Agent ( roles/aiplatform.colabServiceAgent ) Use the following command to grant the roles to the dedicated service account for Cortex for Meridian: gcloud projects add-iam-policy-binding SOURCE PROJECT \ --member = "serviceAccount: cortex-meridian-colab-runner @ SOURCE PROJECT .iam.gserviceaccount.com" \ --role = 'roles/bigquery.dataViewer' gcloud projects add-iam-policy-binding SOURCE PROJECT \ --member = "serviceAccount: cortex-meridian-colab-runner @ SOURCE PROJECT .iam.gserviceaccount.com" \ --role = 'roles/bigquery.jobUser' gcloud projects add-iam-policy-binding SOURCE PROJECT \ --member = "serviceAccount: cortex-meridian-colab-runner @ SOURCE PROJECT .iam.gserviceaccount.com" \ --role = 'roles/bigquery.readSessionUser' gcloud projects add-iam-policy-binding SOURCE PROJECT \ --member = "serviceAccount: cortex-meridian-colab-runner @ SOURCE PROJECT .iam.gserviceaccount.com" \ --role = 'roles/cloudbuild.builds.editor' gcloud projects add-iam-policy-binding SOURCE PROJECT \ --member = "serviceAccount: cortex-meridian-colab-runner @ SOURCE PROJECT .iam.gserviceaccount.com" \ --role = 'roles/aiplatform.colabEnterpriseAdmin' gcloud projects add-iam-policy-binding SOURCE PROJECT \ --member = "serviceAccount: cortex-meridian-colab-runner @ SOURCE PROJECT .iam.gserviceaccount.com" \ --role = 'roles/logging.logWriter' gcloud projects add-iam-policy-binding SOURCE PROJECT \ --member = "serviceAccount: cortex-meridian-colab-runner @ SOURCE PROJECT .iam.gserviceaccount.com" \ --role = 'roles/aiplatform.notebookRuntimeAdmin' gcloud projects add-iam-policy-binding SOURCE PROJECT \ --member = "serviceAccount: cortex-meridian-colab-runner @ SOURCE PROJECT .iam.gserviceaccount.com" \ --role = 'roles/storage.admin' gcloud projects add-iam-policy-binding SOURCE PROJECT \ --member = "serviceAccount: cortex-meridian-colab-runner @ SOURCE PROJECT .iam.gserviceaccount.com" \ --role = 'roles/storage.objectUser' gcloud projects add-iam-policy-binding SOURCE PROJECT \ --member = "serviceAccount: cortex-meridian-colab-runner @ SOURCE PROJECT .iam.gserviceaccount.com" \ --role = 'roles/aiplatform.colabServiceAgent' Replace the following: SOURCE PROJECT with the project ID where Cortex for Meridian is deployed. cortex-meridian-colab-runner with your service account for Cortex for Meridian.
- You have successfully granted an IAM role. gcloud Use the following command to grant the roles to the Cloud Build service account: gcloud projects add-iam-policy-binding SOURCE PROJECT \ --member = "serviceAccount: cortex-deployer @ SOURCE PROJECT .iam.gserviceaccount.com" \ --role = "roles/cloudbuild.builds.builder" gcloud projects add-iam-policy-binding SOURCE PROJECT \ --member = "serviceAccount: cortex-deployer @ SOURCE PROJECT .iam.gserviceaccount.com" \ --role = "roles/iam.serviceAccountUser" gcloud projects add-iam-policy-binding SOURCE PROJECT \ --member = "serviceAccount: cortex-deployer @ SOURCE PROJECT .iam.gserviceaccount.com" \ --role = "roles/bigquery.dataEditor" gcloud projects add-iam-policy-binding SOURCE PROJECT \ --member = "serviceAccount: cortex-deployer @ SOURCE PROJECT .iam.gserviceaccount.com" \ --role = "roles/bigquery.jobUser" gcloud projects add-iam-policy-binding SOURCE PROJECT \ --member = "serviceAccount: cortex-deployer @ SOURCE PROJECT .iam.gserviceaccount.com" \ --role = "roles/logging.logWriter" gcloud projects add-iam-policy-binding SOURCE PROJECT \ --member = "serviceAccount: cortex-deployer @ SOURCE PROJECT .iam.gserviceaccount.com" \ --role = "roles/aiplatform.colabEnterpriseAdmin" gcloud projects add-iam-policy-binding SOURCE PROJECT \ --member = "serviceAccount: cortex-deployer @ SOURCE PROJECT .iam.gserviceaccount.com" \ --role = "roles/storage.objectUser" gcloud projects add-iam-policy-binding SOURCE PROJECT \ --member = "serviceAccount: cortex-deployer @ SOURCE PROJECT .iam.gserviceaccount.com" \ --role = "roles/workflows.editor" Replace the following: SOURCE PROJECT with the source project ID.

### Prerequisites \_|\_ Google Cloud Cortex Framework \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cortex/docs/deployment-prerequisites](https://docs.cloud.google.com/cortex/docs/deployment-prerequisites)
- Source ID: `site-docs-reference`
- Final score: 120
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Get the required roles To get the permissions that you need to deploy Cortex Framework Data Foundation solution content, ask your administrator to grant you the following IAM roles on your source project and target project: BigQuery Job User ( roles/bigquery.jobUser ) BigQuery Data Editor ( roles/bigquery.dataEditor ) Create Service Accounts ( roles/iam.serviceAccountCreator ) Project IAM Admin ( roles/resourcemanager.projectIamAdmin ) Project Reader ( roles/reader ) Service Usage Admin ( roles/serviceusage.serviceUsageAdmin ) Storage Object Viewer ( roles/storage.objectViewer ) Storage Admin ( roles/storage.admin ) Cloud Build Editor ( roles/cloudbuild.builds.editor ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Explore the repository The prerequisites outlined on this page are specifically designed for deploying Cortex Framework Data Foundation content from the official GitHub repository .
- When deploying Cortex Framework content you will want to understand which data sources and workloads are required to meet your business needs and are relevant for deployment.
- Home Documentation Data analytics Google Cloud Cortex Framework Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.

