---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.420Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Service-level maximum instance configuration"
feature_slug: "service-level-maximum-instance-configuration"
latest_feature_date: "2025-10-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.services.ServicesAsyncClient"
  - "https://docs.cloud.google.com/run/docs/configuring"
  - "https://docs.cloud.google.com/run/docs/securing/service-identity"
keywords:
  - "applying"
  - "configuration"
  - "maximum"
  - "level"
  - "instance"
  - "supports"
---

# Service-level maximum instance configuration

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run supports applying maximum instance configuration at the service level.

## Extended Definition

Cloud Run supports applying maximum instance configuration at the service level.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.services.ServicesAsyncClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.services.ServicesAsyncClient)
- [https://docs.cloud.google.com/run/docs/configuring](https://docs.cloud.google.com/run/docs/configuring)
- [https://docs.cloud.google.com/run/docs/securing/service-identity](https://docs.cloud.google.com/run/docs/securing/service-identity)

## Supporting Pages

### Introduction to service identity \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/securing/service-identity](https://docs.cloud.google.com/run/docs/securing/service-identity)
- Source ID: `site-docs-reference-required-6`
- Final score: 41
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Call Google Cloud APIs with the service identity When a Cloud Run instance interacts with other IAM-authenticated Cloud Run services, or calls Cloud Client Libraries either through application code or built-in features like Cloud Run integrations or Cloud Storage volume mounts , the Google Cloud environment uses Application Default Credentials (ADC) to automatically detect whether the Cloud Run service identity is authenticated to perform the API operation.
- Response: { "name": "projects/ PROJECT ID /topics/ TOPIC ID " } ID tokens Use the Compute Metadata Server to fetch an identity token with a specific audience: curl "http://metadata.google.internal/computeMetadata/v1/instance/service-accounts/default/identity?audience= AUDIENCE " \ --header "Metadata-Flavor: Google" Where AUDIENCE is the JWT Audience requested.
- Use the Compute Metadata Server to fetch an access token : curl "http://metadata.google.internal/computeMetadata/v1/instance/service-accounts/default/token" \ --header "Metadata-Flavor: Google" This endpoint returns a JSON response with an access token attribute.
- How service identity works When your code uses Cloud Client Libraries that makes requests to Google Cloud API, the following happens: The client library requests an OAuth 2.0 access token for the service identity from the instance metadata server.

### "Class ServicesAsyncClient (0.16.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.services.ServicesAsyncClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.services.ServicesAsyncClient)
- Source ID: `site-python-reference`
- Final score: 40
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Returns Type Description google.cloud.run v2.types.Service Service acts as a top-level container that manages a set of configurations and revision templates which implement a network service.
- The result type for the operation will be Service Service acts as a top-level container that manages a set of configurations and revision templates which implement a network service.
- The result type for the operation will be Service Service acts as a top-level container that manages a set of configurations and revision templates which implement a network service.
- The result type for the operation will be Service Service acts as a top-level container that manages a set of configurations and revision templates which implement a network service.

### Configure Cloud Run services \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/configuring](https://docs.cloud.google.com/run/docs/configuring)
- Source ID: `site-docs-reference-2`
- Final score: 37
- Re-rank relevance: N/A

Evidence snippets:
- If you need to change the default number of container instances that are kept warm, ready to receive requests, you can set revision-level maximum instances and minimum instances .
- Setting a maximum number of instances can help to curb costs and guard against abnormally high request levels .
- B Maximum concurrency You can configure the maximum concurrent requests per instance to specify the maximum number of requests that can be processed simultaneously by a given instance.
- You can also configure timeouts, maximum concurrency, the execution environment, revision scaling, startup CPU boost, or connect to a Cloud SQL instance.

