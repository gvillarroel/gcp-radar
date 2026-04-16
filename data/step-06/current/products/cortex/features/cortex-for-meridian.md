---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:00:38.893Z"
product_name: "Cortex"
product_slug: "cortex"
feature_name: "Cortex for Meridian"
feature_slug: "cortex-for-meridian"
latest_feature_date: "2025-04-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/cortex/docs/deployment-step-four"
  - "https://docs.cloud.google.com/cortex/docs/deployment-step-three"
  - "https://docs.cloud.google.com/cortex/docs/data-sources-and-workloads"
keywords:
  - "cortex"
  - "meridian"
  - "supplies"
  - "ready"
  - "models"
  - "automated"
  - "model"
  - "execution"
---

# Cortex for Meridian

Product: Cortex
Coverage: MEDIUM

## Step 02 Summary

Cortex for Meridian supplies ready data models and automated Meridian model execution workflows for marketing mix modeling on Google Cloud.

## Extended Definition

Cortex for Meridian supplies ready data models and automated Meridian model execution workflows for marketing mix modeling on Google Cloud.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/cortex/docs/deployment-step-four](https://docs.cloud.google.com/cortex/docs/deployment-step-four)
- [https://docs.cloud.google.com/cortex/docs/deployment-step-three](https://docs.cloud.google.com/cortex/docs/deployment-step-three)
- [https://docs.cloud.google.com/cortex/docs/data-sources-and-workloads](https://docs.cloud.google.com/cortex/docs/data-sources-and-workloads)

## Supporting Pages

### "Step 4: Set up components \_|\_ Google Cloud Cortex Framework \_|\_ Google\

- URL: [https://docs.cloud.google.com/cortex/docs/deployment-step-four](https://docs.cloud.google.com/cortex/docs/deployment-step-four)
- Source ID: `site-docs-reference`
- Final score: 140
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enable Google Cloud services In this section you enable the following Google Cloud services in your Google Cloud project: BigQuery instance and datasets Cloud Build API Cloud Storage Buckets Service account Cloud Resource Manager API Workflow executions (if deploying Cortex for Meridian ) AI Platform (if deploying Cortex for Meridian ) Enable these Google Cloud services using Cloud Shell : Copy and paste the following command: gcloud config set project SOURCE PROJECT gcloud services enable bigquery.googleapis.com \ cloudbuild.googleapis.com \ composer.googleapis.com \ storage-component.googleapis.com \ cloudresourcemanager.googleapis.com \ dataflow.googleapis.com \ datacatalog.googleapis.com \ workflowexecutions.googleapis.com \ workflows.googleapis.com \ aiplatform.googleapis.com Replace SOURCE PROJECT with your source project ID.
- For Cortex Framework with Meridian: Colab Enterprise: Running the Colab Enterprise notebook during and execution having access to the following: The notebook and configuration file on Cloud Storage.
- Note: workflowexecutions.googleapis.com , workflows.googleapis.com , and aiplatform.googleapis.com are only needed with Cortex Framework for Meridian.
- The minimum required roles for a dedicated service account for Cortex for Meridian are the following: BigQuery Data Viewer ( roles/bigquery.dataViewer ) BigQuery Job User ( roles/bigquery.jobUser ) BigQuery Read Session User ( roles/bigquery.readSessionUser ) Cloud Build Editor ( roles/cloudbuild.builds.editor ) Colab Enterprise Admin ( roles/aiplatform.colabEnterpriseAdmin ) Logs Writer ( roles/logging.logWriter ) Notebook Runtime Admin ( aiplatform.notebookRuntimeAdmin ) Storage Admin ( roles/storage.admin ) Storage Object User ( roles/storage.objectUser ) Vertex AI Colab Service Agent ( roles/aiplatform.colabServiceAgent ) Use the following command to grant the roles to the dedicated service account for Cortex for Meridian: gcloud projects add-iam-policy-binding SOURCE PROJECT \ --member = "serviceAccount: cortex-meridian-colab-runner @ SOURCE PROJECT .iam.gserviceaccount.com" \ --role = 'roles/bigquery.dataViewer' gcloud projects add-iam-policy-binding SOURCE PROJECT \ --member = "serviceAccount: cortex-meridian-colab-runner @ SOURCE PROJECT .iam.gserviceaccount.com" \ --role = 'roles/bigquery.jobUser' gcloud projects add-iam-policy-binding SOURCE PROJECT \ --member = "serviceAccount: cortex-meridian-colab-runner @ SOURCE PROJECT .iam.gserviceaccount.com" \ --role = 'roles/bigquery.readSessionUser' gcloud projects add-iam-policy-binding SOURCE PROJECT \ --member = "serviceAccount: cortex-meridian-colab-runner @ SOURCE PROJECT .iam.gserviceaccount.com" \ --role = 'roles/cloudbuild.builds.editor' gcloud projects add-iam-policy-binding SOURCE PROJECT \ --member = "serviceAccount: cortex-meridian-colab-runner @ SOURCE PROJECT .iam.gserviceaccount.com" \ --role = 'roles/aiplatform.colabEnterpriseAdmin' gcloud projects add-iam-policy-binding SOURCE PROJECT \ --member = "serviceAccount: cortex-meridian-colab-runner @ SOURCE PROJECT .iam.gserviceaccount.com" \ --role = 'roles/logging.logWriter' gcloud projects add-iam-policy-binding SOURCE PROJECT \ --member = "serviceAccount: cortex-meridian-colab-runner @ SOURCE PROJECT .iam.gserviceaccount.com" \ --role = 'roles/aiplatform.notebookRuntimeAdmin' gcloud projects add-iam-policy-binding SOURCE PROJECT \ --member = "serviceAccount: cortex-meridian-colab-runner @ SOURCE PROJECT .iam.gserviceaccount.com" \ --role = 'roles/storage.admin' gcloud projects add-iam-policy-binding SOURCE PROJECT \ --member = "serviceAccount: cortex-meridian-colab-runner @ SOURCE PROJECT .iam.gserviceaccount.com" \ --role = 'roles/storage.objectUser' gcloud projects add-iam-policy-binding SOURCE PROJECT \ --member = "serviceAccount: cortex-meridian-colab-runner @ SOURCE PROJECT .iam.gserviceaccount.com" \ --role = 'roles/aiplatform.colabServiceAgent' Replace the following: SOURCE PROJECT with the project ID where Cortex for Meridian is deployed. cortex-meridian-colab-runner with your service account for Cortex for Meridian.

### "Step 3: Determine integration mechanism \_|\_ Google Cloud Cortex Framework\

- URL: [https://docs.cloud.google.com/cortex/docs/deployment-step-three](https://docs.cloud.google.com/cortex/docs/deployment-step-three)
- Source ID: `site-docs-reference`
- Final score: 112
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Operational: SAP (SAP ECC or SAP S/4 HANA) Salesforce Sales Cloud Oracle EBS Marketing: Google Ads Campaign Manager 360 (CM360) TikTok LiveRamp Meta (Facebook / Instagram) Salesforce Marketing Cloud (SFMC) YouTube (with DV360) Google Analytics 4 Cross Media & Product Connected Insights Cortex for Meridian Sustainability: Dun & Bradstreet For more information about the Entity-Relationship Diagrams that each data source supports, see the docs folder in the Cortex Framework Data Foundation repository.
- The post-processing K9 steps occurs after all workloads have deployed their reporting models to enable cross-workload reporting or augmenting models to find their necessary dependencies within each individual reporting dataset.
- The pre-processing K9 step runs before all workloads start their deployment, so the reusable models are available during their deployment.
- Configure the K9 deployment Configure the Directed Acyclic Graphs (DAGs) and models to be generated in the K9 manifest file .

### "Data sources and workloads \_|\_ Google Cloud Cortex Framework \_|\_ Google\

- URL: [https://docs.cloud.google.com/cortex/docs/data-sources-and-workloads](https://docs.cloud.google.com/cortex/docs/data-sources-and-workloads)
- Source ID: `site-docs-reference`
- Final score: 102
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- By integrating data from diverse sources and using Cortex Framework's predefined models, you can make informed decisions, optimize resources, and gain accurate, up-to-date insights into your marketing efforts.
- The Cortex Framework gives you the tools to use this data foundation, create pipelines for new data ingestion, perform analysis, and build dashboards or AI models.
- The following are the marketing related data sources available: Salesforce Marketing Cloud Google Ads Campaign Manager 360 (CM360) TikTok Meta LiveRamp YouTube (with DV360) Google Analytics 4 Cross Media & Product Connected Insights Cortex for Meridian Operational Cortex Framework incorporates operational platforms such as SAP (SAP ECC and SAP S/4 HANA) and Salesforce as valuable data sources to get real-time insights to improve efficiency and productivity in different areas.
- Built on BigQuery, the Data Foundation provides a robust and organized data layer for analysis and AI development, complete with prebuilt data models for common business scenarios.

