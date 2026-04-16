---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.439Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "PHP 8.4 runtime"
feature_slug: "php-8-4-runtime"
latest_feature_date: "2025-06-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-php-service"
  - "https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api"
  - "https://docs.cloud.google.com/python/docs/reference/run/latest"
keywords:
  - "workloads"
  - "deployed"
  - "runtime"
  - "supports"
---

# PHP 8.4 runtime

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run supports the PHP 8.4 runtime for deployed workloads; Cloud Run supports the PHP 8.4 runtime for deployed workloads.

## Extended Definition

Cloud Run supports the PHP 8.4 runtime for deployed workloads; Cloud Run supports the PHP 8.4 runtime for deployed workloads.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-php-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-php-service)
- [https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api](https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api)
- [https://docs.cloud.google.com/python/docs/reference/run/latest](https://docs.cloud.google.com/python/docs/reference/run/latest)

## Supporting Pages

### Authenticate to Cloud Run Admin API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api](https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api)
- Source ID: `site-docs-reference`
- Final score: 34
- Re-rank relevance: N/A

### "Quickstart: Build and deploy a PHP web app to Google Cloud with Cloud Run\

- URL: [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-php-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-php-service)
- Source ID: `site-docs-reference-2`
- Final score: 31
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The .dockerignore file excludes files from the container build process. https://docs.docker.com/engine/reference/builder/#dockerignore-file Exclude locally vendored dependencies. vendor/ Exclude "build-time" ignore files. .dockerignore .gcloudignore Exclude git history and configuration. .gitignore Your app is finished and ready to be deployed.
- If you are under a domain restriction organization policy restricting unauthenticated invocations for your project, you will need to access your deployed service as described under Testing private services .
- OK Clean up To avoid additional charges to your Google Cloud account, delete all the resources you deployed with this quickstart.
- Delete your repository Cloud Run doesn't charge you when your deployed service isn't in use.

### "Python Client for Cloud Run \_|\_ Python client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/python/docs/reference/run/latest](https://docs.cloud.google.com/python/docs/reference/run/latest)
- Source ID: `site-python-reference`
- Final score: 26
- Re-rank relevance: N/A

