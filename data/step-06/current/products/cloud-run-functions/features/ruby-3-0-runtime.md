---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:37:19.011Z"
product_name: "Cloud Run functions"
product_slug: "cloud-run-functions"
feature_name: "Ruby 3.0 runtime"
feature_slug: "ruby-3-0-runtime"
latest_feature_date: "2022-03-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/functions/docs/building"
keywords:
  - "ruby"
  - "runtime"
  - "run"
  - "functions"
  - "supports"
---

# Ruby 3.0 runtime

Product: Cloud Run functions
Coverage: LOW

## Step 02 Summary

Cloud Run functions supports the Ruby 3.0 runtime.

## Extended Definition

Cloud Run functions supports the Ruby 3.0 runtime.

## Evidence Summary

Fast-mode lexical matching selected 1 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building)

## Supporting Pages

### Build process overview \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building)
- Source ID: `site-iam-reference`
- Final score: 21
- Re-rank relevance: N/A

Evidence snippets:
- You can optionally use a private pool , which you specify using the --build-worker-pool flag. gcloud functions deploy FUNCTION NAME \ -- gen2 \ -- region = REGION \ -- project = PROJECT ID \ -- runtime = RUNTIME \ -- entry - point = CODE ENTRYPOINT \ -- build - service - account = projects / PROJECT ID / serviceAccounts / SA EMAIL \ -- memory = 256 Mi \ -- trigger - http \ -- source = .
- To stop using a given private pool and instead use the default Cloud Build pool, use the --clear-build-worker-pool flag when re-deploying. gcloud functions deploy FUNCTION NAME \ --runtime RUNTIME \ --clear-build-worker-pool [ FLAGS... ] Replace FUNCTION NAME with the name of the function and RUNTIME with the runtime you are using.
- Deploy your function to build using a private pool: gcloud functions deploy FUNCTION NAME \ --runtime RUNTIME \ --build-worker-pool PRIVATE POOL NAME [ FLAGS... ] Replace FUNCTION NAME with the name of the function, RUNTIME with the runtime you are using, and PRIVATE POOL NAME with the name of your pool.
- If your private worker pool is in a different project than your function, you need to grant the Cloud Functions Service Agent Service Account ( service-FUNCTION PROJECT NUMBER@gcf-admin-robot.iam.gserviceaccount.com ) the cloudbuild.workerPoolUser role so that the Cloud Build service can access the worker pool. gcloud projects add-iam-policy-binding PRIVATE POOL PROJECT ID \ --member serviceAccount:service- FUNCTION PROJECT NUMBER @gcf-admin-robot.iam.gserviceaccount.com --role roles/cloudbuild.workerPoolUser Replace FUNCTION PROJECT NUMBER with the number of the project where the function runs and PRIVATE POOL PROJECT ID with the ID of the project in which the worker pool is located.

