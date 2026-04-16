---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.889Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build BigQuery metrics notifier"
feature_slug: "cloud-build-bigquery-metrics-notifier"
latest_feature_date: "2020-11-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/build/docs/automating-builds/gitlab/build-repos-from-gitlab-enterprise-edition-private-network"
  - "https://docs.cloud.google.com/appengine/docs/flexible/ruby"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/shared-vpc-host-project"
keywords:
  - "export"
  - "metrics"
  - "notifier"
---

# Cloud Build BigQuery metrics notifier

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

Cloud Build can export build metrics to BigQuery via the BigQuery notifier.

## Extended Definition

Cloud Build can export build metrics to BigQuery via the BigQuery notifier.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/build/docs/automating-builds/gitlab/build-repos-from-gitlab-enterprise-edition-private-network](https://docs.cloud.google.com/build/docs/automating-builds/gitlab/build-repos-from-gitlab-enterprise-edition-private-network)
- [https://docs.cloud.google.com/appengine/docs/flexible/ruby](https://docs.cloud.google.com/appengine/docs/flexible/ruby)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/shared-vpc-host-project](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/shared-vpc-host-project)

## Supporting Pages

### "Build repositories from GitLab Enterprise Edition in a private network \_\

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/gitlab/build-repos-from-gitlab-enterprise-edition-private-network](https://docs.cloud.google.com/build/docs/automating-builds/gitlab/build-repos-from-gitlab-enterprise-edition-private-network)
- Source ID: `site-docs-root-2`
- Final score: 38
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Grant VPC network resource access to the Cloud Build service agent: export PROJECT NUMBER = $( gcloud projects describe PROJECT ID --format = "value(projectNumber)" ) export CLOUD BUILD SERVICE AGENT = "service- $PROJECT NUMBER @gcp-sa-cloudbuild.iam.gserviceaccount.com" gcloud projects add-iam-policy-binding PROJECT ID CONTAINING NETWORK RESOURCE \ --member = "serviceAccount: $CLOUD BUILD SERVICE AGENT " \ --role = "roles/servicedirectory.pscAuthorizedService" Replace the following: PROJECT ID is your Cloud Build project ID.
- Grant Service Directory access to the Cloud Build service agent: export PROJECT NUMBER = $( gcloud projects describe PROJECT ID --format = "value(projectNumber)" ) export CLOUD BUILD SERVICE AGENT = "service- $PROJECT NUMBER @gcp-sa-cloudbuild.iam.gserviceaccount.com" gcloud projects add-iam-policy-binding PROJECT ID CONTAINING SERVICE DIRECTORY \ --member = "serviceAccount: $CLOUD BUILD SERVICE AGENT " \ --role = "roles/servicedirectory.viewer" Replace the following: PROJECT ID is your Cloud Build project ID.

### "Configure connectors in the Shared VPC host project \_|\_ App Engine standard\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/shared-vpc-host-project](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/shared-vpc-host-project)
- Source ID: `site-docs-reference-2`
- Final score: 34
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### "The Ruby runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/ruby](https://docs.cloud.google.com/appengine/docs/flexible/ruby)
- Source ID: `site-docs-reference-2`
- Final score: 34
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

