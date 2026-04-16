---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:37:19.014Z"
product_name: "Cloud Run functions"
product_slug: "cloud-run-functions"
feature_name: "Private dependencies on Artifact Registry"
feature_slug: "private-dependencies-on-artifact-registry"
latest_feature_date: "2022-02-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/functions/docs/securing/managing-access-iam"
  - "https://docs.cloud.google.com/functions/docs/building"
  - "https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/Policy"
keywords:
  - "private"
  - "dependencies"
  - "artifact"
  - "registry"
  - "run"
  - "functions"
  - "supports"
  - "low"
---

# Private dependencies on Artifact Registry

Product: Cloud Run functions
Coverage: LOW

## Step 02 Summary

Cloud Run functions supports low-configuration access to private dependencies on Artifact Registry for Node.js and Python.

## Extended Definition

Cloud Run functions supports low-configuration access to private dependencies on Artifact Registry for Node.js and Python.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/functions/docs/securing/managing-access-iam](https://docs.cloud.google.com/functions/docs/securing/managing-access-iam)
- [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building)
- [https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/Policy](https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/Policy)

## Supporting Pages

### Authorize access with IAM \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/securing/managing-access-iam](https://docs.cloud.google.com/functions/docs/securing/managing-access-iam)
- Source ID: `site-iam-reference`
- Final score: 50
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Removing roles from principals Use the gcloud functions remove-iam-policy-binding command: gcloud functions remove-iam-policy-binding FUNCTION NAME \ --member = PRINCIPAL ID \ --role = ROLE where FUNCTION NAME is the function name, PRINCIPAL ID is the email address that identifies the service account, prefaced with serviceAccount: , and ROLE is the role.
- Bulk addition of principals Create an IAM policy named, for example, policy.json : { "bindings" : [ { "role" : ROLE , "members" : [ PRINCIPAL ID ] } ] } Use the gcloud functions set-iam-policy command: gcloud functions set-iam-policy FUNCTION NAME policy.json For a list of acceptable sources for PRINCIPAL ID , see Principal identifiers .
- Adding principals and granting roles Use the gcloud functions add-iam-policy-binding command: gcloud functions add-iam-policy-binding FUNCTION NAME \ --member = PRINCIPAL ID \ --role = ROLE where FUNCTION NAME is the function name, PRINCIPAL ID is the principal's identifier, usually an email, and ROLE is the role.
- Viewing principals To view principals, use the gcloud functions get-iam-policy command: gcloud functions get-iam-policy FUNCTION NAME Allowing unauthenticated HTTP function invocation Note: If you created functions using the Cloud Run Admin API, see the Allowing public (unauthenticated) access guide instead.

### Build process overview \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building)
- Source ID: `site-iam-reference`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- To specify a self-managed Artifact Registry repository, run the following command: gcloud functions deploy FUNCTION NAME \ --docker-repository = REPOSITORY \ [ FLAGS... ] Replace the following: FUNCTION NAME : The name of the function.
- Secure your build with private pools To allow your functions to use dependencies (for example, npm packages), Cloud Build has by default unlimited internet access during the build process.
- This can be accomplished by adding an IAM condition to the role grant such as (resource.type == "storage.googleapis.com/Object" && (resource.name.startsWith("projects/ /buckets/gcf-v2-sources-") resource.name.startsWith("projects/ /buckets/gcf-v2-uploads-") resource.name.startsWith("projects/ /buckets/run-sources-"))) Grant the following roles using the Google Cloud CLI , or use Google Cloud console . gcloud projects add - iam - policy - binding PROJECT ID \ -- member = serviceAccount: SA EMAIL \ -- role = roles / logging . logWriter gcloud projects add - iam - policy - binding PROJECT ID \ -- member = serviceAccount: SA EMAIL \ -- role = roles / artifactregistry . writer gcloud projects add - iam - policy - binding PROJECT ID \ -- member = serviceAccount: SA EMAIL \ -- role = roles / storage . objectViewer Replace the following: PROJECT ID : Your Google Cloud project ID .
- If your private worker pool is in a different project than your function, you need to grant the Cloud Functions Service Agent Service Account ( service-FUNCTION PROJECT NUMBER@gcf-admin-robot.iam.gserviceaccount.com ) the cloudbuild.workerPoolUser role so that the Cloud Build service can access the worker pool. gcloud projects add-iam-policy-binding PRIVATE POOL PROJECT ID \ --member serviceAccount:service- FUNCTION PROJECT NUMBER @gcf-admin-robot.iam.gserviceaccount.com --role roles/cloudbuild.workerPoolUser Replace FUNCTION PROJECT NUMBER with the number of the project where the function runs and PRIVATE POOL PROJECT ID with the ID of the project in which the worker pool is located.

### Policy \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/Policy](https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/Policy)
- Source ID: `site-docs-reference-2`
- Final score: 36
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting Cloud Run Cloud Run functions Reference Send feedback Policy Stay organized with collections Save and categorize content based on your preferences.

