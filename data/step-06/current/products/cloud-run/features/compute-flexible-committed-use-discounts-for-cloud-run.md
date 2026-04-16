---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.394Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Compute flexible committed use discounts for Cloud Run"
feature_slug: "compute-flexible-committed-use-discounts-for-cloud-run"
latest_feature_date: "2026-02-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/run/docs/resources"
  - "https://docs.cloud.google.com/run/docs/tutorials/function-returns-bigquery-query"
  - "https://docs.cloud.google.com/run/docs/tutorials/eventarc"
keywords:
  - "covered"
  - "usage"
  - "flexible"
  - "compute"
  - "committed"
  - "discounts"
---

# Compute flexible committed use discounts for Cloud Run

Product: Cloud Run
Coverage: MEDIUM

## Step 02 Summary

Cloud Run usage is covered by expanded compute flexible committed use discounts under the spend-based CUD model.

## Extended Definition

Cloud Run usage is covered by expanded compute flexible committed use discounts under the spend-based CUD model.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/run/docs/resources](https://docs.cloud.google.com/run/docs/resources)
- [https://docs.cloud.google.com/run/docs/tutorials/function-returns-bigquery-query](https://docs.cloud.google.com/run/docs/tutorials/function-returns-bigquery-query)
- [https://docs.cloud.google.com/run/docs/tutorials/eventarc](https://docs.cloud.google.com/run/docs/tutorials/eventarc)

## Supporting Pages

### Resources \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/resources](https://docs.cloud.google.com/run/docs/resources)
- Source ID: `site-api-reference`
- Final score: 74
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Compute flexible committed use discounts Flexible CUD details for Cloud Run.
- Quotas and Limits Usage policies for your Cloud Run resources.

### "Create a Cloud Run function that uses BigQuery to submit a query and return\

- URL: [https://docs.cloud.google.com/run/docs/tutorials/function-returns-bigquery-query](https://docs.cloud.google.com/run/docs/tutorials/function-returns-bigquery-query)
- Source ID: `site-docs-root-2`
- Final score: 65
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Required roles To get the permissions that you need to deploy Cloud Run services from source, ask your administrator to grant you the following IAM roles: Cloud Run Source Developer ( roles/run.sourceDeveloper ) on your project Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer ) on the Cloud Run service Service Account User ( roles/iam.serviceAccountUser ) on the service identity BigQuery Job User ( roles/bigquery.jobUser ) on the service identity For a list of IAM roles and permissions that are associated with Cloud Run, see Cloud Run IAM roles and Cloud Run IAM permissions .
- For Cloud Build to build your sources, ask your administrator to grant Cloud Run Builder ( roles/run.builder ) to the Compute Engine default service account on your project: gcloud projects add-iam-policy-binding PROJECT ID \ --member = serviceAccount: PROJECT NUMBER -compute@developer.gserviceaccount.com \ --role = roles/run.builder Replace PROJECT NUMBER with your Google Cloud project number, and PROJECT ID with your Google Cloud project ID.
- Click to view required roles for the Cloud Build service account Cloud Build automatically uses the Compute Engine default service account as the default Cloud Build service account to build your source code and Cloud Run resource, unless you override this behavior.
- Costs In this document, you use the following billable components of Google Cloud: Artifact Registry Cloud Build Cloud Run To generate a cost estimate based on your projected usage, use the pricing calculator .

### "Use Eventarc to receive events from Cloud Storage \_|\_ Cloud Run \_|\_\

- URL: [https://docs.cloud.google.com/run/docs/tutorials/eventarc](https://docs.cloud.google.com/run/docs/tutorials/eventarc)
- Source ID: `site-docs-root-2`
- Final score: 65
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To get the permissions that you need to complete this tutorial, ask your administrator to grant you the following IAM roles on your project: Cloud Build Editor ( roles/cloudbuild.builds.editor ) Cloud Run Admin ( roles/run.admin ) Cloud Run Source Developer ( roles/run.sourceDeveloper ) Eventarc Admin ( roles/eventarc.admin ) Logs View Accessor ( roles/logging.viewAccessor ) Project IAM Admin ( roles/resourcemanager.projectIamAdmin ) Service Account Admin ( roles/iam.serviceAccountAdmin ) Service Account User ( roles/iam.serviceAccountUser ) Service Usage Admin ( roles/serviceusage.serviceUsageAdmin ) Storage Admin ( roles/storage.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Grant the Eventarc Event Receiver role ( roles/eventarc.eventReceiver ) on the project to the Compute Engine default service account so that the Eventarc trigger can receive events from event providers. gcloud projects add-iam-policy-binding PROJECT ID \ --member = serviceAccount: PROJECT NUMBER -compute@developer.gserviceaccount.com \ --role = roles/eventarc.eventReceiver Optional role for the Pub/Sub service agent If you enabled the Cloud Pub/Sub service agent on or before April 8, 2021, to support authenticated Pub/Sub push requests, grant the Service Account Token Creator role ( roles/iam.serviceAccountTokenCreator ) to the service agent.
- Create a trigger that filters Cloud Storage events: gcloud eventarc triggers create ${ SERVICE NAME } \ --destination-run-service = ${ SERVICE NAME } \ --destination-run-region = ${ REGION } \ --location = ${ REGION } \ --event-filters = "type=google.cloud.storage.object.v1.finalized" \ --event-filters = "bucket= PROJECT ID -bucket" \ --service-account = PROJECT NUMBER -compute@developer.gserviceaccount.com This creates a trigger called helloworld-events .
- This grants the role on all Cloud Run services and jobs in a project. gcloud projects add-iam-policy-binding PROJECT ID \ --member = serviceAccount: PROJECT NUMBER -compute@developer.gserviceaccount.com \ --role = roles/run.invoker Note that if you create a trigger for an authenticated Cloud Run service without granting the Cloud Run Invoker role, the trigger is created successfully and is active.

