---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:00:38.896Z"
product_name: "Cortex"
product_slug: "cortex"
feature_name: "SAP Hierarchy Reader"
feature_slug: "sap-hierarchy-reader"
latest_feature_date: "2024-12-19"
deprecation_date: "2024-12-19"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/cortex/docs/datamesh-concepts"
  - "https://docs.cloud.google.com/cortex/docs/data-sources-and-workloads"
  - "https://docs.cloud.google.com/cortex/docs/deployment-step-four"
keywords:
  - "sap"
  - "hierarchy"
  - "reader"
  - "extracts"
  - "outputs"
  - "cortex"
  - "processing"
  - "workflows"
---

# SAP Hierarchy Reader

Product: Cortex
Coverage: MEDIUM

## Step 02 Summary

SAP Hierarchy Reader extracts and outputs hierarchy data for Cortex SAP processing workflows; deprecated on 2024-12-19.

## Extended Definition

SAP Hierarchy Reader extracts and outputs hierarchy data for Cortex SAP processing workflows; deprecated on 2024-12-19.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/cortex/docs/datamesh-concepts](https://docs.cloud.google.com/cortex/docs/datamesh-concepts)
- [https://docs.cloud.google.com/cortex/docs/data-sources-and-workloads](https://docs.cloud.google.com/cortex/docs/data-sources-and-workloads)
- [https://docs.cloud.google.com/cortex/docs/deployment-step-four](https://docs.cloud.google.com/cortex/docs/deployment-step-four)

## Supporting Pages

### "(Deprecated) Data Mesh concepts \_|\_ Google Cloud Cortex Framework \_|\_\

- URL: [https://docs.cloud.google.com/cortex/docs/datamesh-concepts](https://docs.cloud.google.com/cortex/docs/datamesh-concepts)
- Source ID: `site-docs-reference`
- Final score: 71
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- BigQuery The following table defines Data Mesh concepts within BigQuery: Concept Description Cortex Framework context Policy Taxonomy A hierarchy of policy tags.
- Home Documentation Data analytics Google Cloud Cortex Framework Guides Send feedback Stay organized with collections Save and categorize content based on your preferences. (Deprecated) Data Mesh concepts Warning: The Data Mesh feature within the Google Cloud Cortex Framework is now deprecated and disabled.
- Before diving into the detailed guide on deploying Data Mesh with Google Cloud Cortex Framework, this page provides a foundation for how relevant Data Mesh concepts are generally implemented within a Google Cloud product and specifically with the Cortex Framework context.
- Cortex Data Mesh concept The following table defines specific Data Mesh concepts within Cortex Framework: Concept Description Cortex Framework context Metadata Resource Metadata entities that can be re-used across multiple BigQuery assets.

### "Data sources and workloads \_|\_ Google Cloud Cortex Framework \_|\_ Google\

- URL: [https://docs.cloud.google.com/cortex/docs/data-sources-and-workloads](https://docs.cloud.google.com/cortex/docs/data-sources-and-workloads)
- Source ID: `site-docs-reference`
- Final score: 68
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following are the marketing related data sources available: Salesforce Marketing Cloud Google Ads Campaign Manager 360 (CM360) TikTok Meta LiveRamp YouTube (with DV360) Google Analytics 4 Cross Media & Product Connected Insights Cortex for Meridian Operational Cortex Framework incorporates operational platforms such as SAP (SAP ECC and SAP S/4 HANA) and Salesforce as valuable data sources to get real-time insights to improve efficiency and productivity in different areas.
- The following are the operational related data sources available: SAP (SAP ECC and SAP S/4 HANA) Salesforce Sales Cloud Oracle EBS Sustainability Cortex Framework for Sustainability empowers organizations to proactively address their environmental, social, and governance (ESG) responsibilities.
- The following is the sustainability related data source available: Dun & Bradstreet with SAP Deployment For more information about deployment, start exploring the prerequisites of the Cortex Framework Data Foundation deployment.
- By using advanced cloud technologies and data-driven insights, Cortex Framework helps businesses anticipate potential ESG challenges and develop proactive strategies, enabling informed decisions for a more sustainable future.

### "Step 4: Set up components \_|\_ Google Cloud Cortex Framework \_|\_ Google\

- URL: [https://docs.cloud.google.com/cortex/docs/deployment-step-four](https://docs.cloud.google.com/cortex/docs/deployment-step-four)
- Source ID: `site-docs-reference`
- Final score: 68
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You have successfully granted an IAM role. gcloud Use the following command to grant the roles to the Cloud Build service account: gcloud projects add-iam-policy-binding SOURCE PROJECT \ --member = "serviceAccount: cortex-deployer @ SOURCE PROJECT .iam.gserviceaccount.com" \ --role = "roles/cloudbuild.builds.builder" gcloud projects add-iam-policy-binding SOURCE PROJECT \ --member = "serviceAccount: cortex-deployer @ SOURCE PROJECT .iam.gserviceaccount.com" \ --role = "roles/iam.serviceAccountUser" gcloud projects add-iam-policy-binding SOURCE PROJECT \ --member = "serviceAccount: cortex-deployer @ SOURCE PROJECT .iam.gserviceaccount.com" \ --role = "roles/bigquery.dataEditor" gcloud projects add-iam-policy-binding SOURCE PROJECT \ --member = "serviceAccount: cortex-deployer @ SOURCE PROJECT .iam.gserviceaccount.com" \ --role = "roles/bigquery.jobUser" gcloud projects add-iam-policy-binding SOURCE PROJECT \ --member = "serviceAccount: cortex-deployer @ SOURCE PROJECT .iam.gserviceaccount.com" \ --role = "roles/logging.logWriter" gcloud projects add-iam-policy-binding SOURCE PROJECT \ --member = "serviceAccount: cortex-deployer @ SOURCE PROJECT .iam.gserviceaccount.com" \ --role = "roles/aiplatform.colabEnterpriseAdmin" gcloud projects add-iam-policy-binding SOURCE PROJECT \ --member = "serviceAccount: cortex-deployer @ SOURCE PROJECT .iam.gserviceaccount.com" \ --role = "roles/storage.objectUser" gcloud projects add-iam-policy-binding SOURCE PROJECT \ --member = "serviceAccount: cortex-deployer @ SOURCE PROJECT .iam.gserviceaccount.com" \ --role = "roles/workflows.editor" Replace the following: SOURCE PROJECT with the source project ID.
- Enable Google Cloud services In this section you enable the following Google Cloud services in your Google Cloud project: BigQuery instance and datasets Cloud Build API Cloud Storage Buckets Service account Cloud Resource Manager API Workflow executions (if deploying Cortex for Meridian ) AI Platform (if deploying Cortex for Meridian ) Enable these Google Cloud services using Cloud Shell : Copy and paste the following command: gcloud config set project SOURCE PROJECT gcloud services enable bigquery.googleapis.com \ cloudbuild.googleapis.com \ composer.googleapis.com \ storage-component.googleapis.com \ cloudresourcemanager.googleapis.com \ dataflow.googleapis.com \ datacatalog.googleapis.com \ workflowexecutions.googleapis.com \ workflows.googleapis.com \ aiplatform.googleapis.com Replace SOURCE PROJECT with your source project ID.
- Grant the following roles using either the Google Cloud console or the Google Cloud CLI: Cloud Build service account ( roles/cloudbuild.builds.builder ) Service account User ( roles/iam.serviceAccountUser ) BigQuery Data Editor ( roles/bigquery.dataEditor ) BigQuery Job User ( roles/bigquery.jobUser ) Logs Writer ( roles/logging.logWriter ) Colab Enterprise Admin ( roles/aiplatform.colabEnterpriseAdmin - if deploying Cortex for Meridian ) Storage Object User ( roles/storage.objectUser - if deploying Cortex for Meridian ) Workflows Editor ( roles/workflows.editor - if deploying Cortex for Meridian ) Console In the Google Cloud console, go to the IAM page.
- Repeat the previous step to add the rest of the roles: Service Account User BigQuery Data Editor BigQuery Job User Logs Writer Colab Enterprise Admin (if deploying Cortex for Meridian ) Storage Object User (if deploying Cortex for Meridian ) Workflows Editor (if deploying Cortex for Meridian ) Click Save .

