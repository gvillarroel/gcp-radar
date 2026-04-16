---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.590Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "HTTP/2 support"
feature_slug: "http-2-support"
latest_feature_date: "2021-01-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/triggering/https-request"
  - "https://docs.cloud.google.com/run/docs/securing/service-identity"
keywords:
  - "communication"
  - "http"
  - "supports"
---

# HTTP/2 support

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run supports HTTP/2 for service communication.

## Extended Definition

Cloud Run supports HTTP/2 for service communication.

## Evidence Summary

Fast-mode lexical matching selected 2 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/run/docs/triggering/https-request](https://docs.cloud.google.com/run/docs/triggering/https-request)
- [https://docs.cloud.google.com/run/docs/securing/service-identity](https://docs.cloud.google.com/run/docs/securing/service-identity)

## Supporting Pages

### Introduction to service identity \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/securing/service-identity](https://docs.cloud.google.com/run/docs/securing/service-identity)
- Source ID: `site-docs-reference-required-6`
- Final score: 29
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For Cloud Run services, the audience should be either the URL of the service you are invoking or a custom audience , such as a custom domain, configured for the service. https://service.domain.com For other resources, it is likely the OAuth Client ID of an IAP-protected resource: 1234567890.apps.googleusercontent.com Next steps Configure service identity for services or jobs .
- Response: { "name": "projects/ PROJECT ID /topics/ TOPIC ID " } ID tokens Use the Compute Metadata Server to fetch an identity token with a specific audience: curl "http://metadata.google.internal/computeMetadata/v1/instance/service-accounts/default/identity?audience= AUDIENCE " \ --header "Metadata-Flavor: Google" Where AUDIENCE is the JWT Audience requested.
- Use the Compute Metadata Server to fetch an access token : curl "http://metadata.google.internal/computeMetadata/v1/instance/service-accounts/default/token" \ --header "Metadata-Flavor: Google" This endpoint returns a JSON response with an access token attribute.
- In your HTTP protocol request, the request must be authenticated with an access token in the Authorization header: PUT https://pubsub.googleapis.com/v1/projects/ PROJECT ID /topics/ TOPIC ID Authorization: Bearer ACCESS TOKEN Where: PROJECT ID is your project ID.

### Invoke with an HTTPS Request \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/triggering/https-request](https://docs.cloud.google.com/run/docs/triggering/https-request)
- Source ID: `site-docs-root`
- Final score: 29
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- HTTP and HTTP/2 By default, Cloud Run downgrades HTTP/2 requests to HTTP/1 when those requests are sent to the container.
- If you want to explicitly set your service to use HTTP/2 end-to-end, refer to Using HTTP/2 .
- Response streaming Cloud Run supports streaming HTTP responses.
- Some of the use cases include the following: Custom RESTful web API Private microservice HTTP middleware or reverse proxy for your web applications Pre-packaged web application Create public services Creating a public service on Cloud Run requires the following: Access to the service from the public internet A URL intended for public use To make a service public, set your service to allow unauthenticated (public) access .

