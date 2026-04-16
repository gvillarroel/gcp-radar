---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T14:23:30.349Z"
product_name: "Cloud CDN"
product_slug: "cloud-cdn"
feature_name: "Private origin authentication for Amazon S3 origins"
feature_slug: "private-origin-authentication-for-amazon-s3-origins"
latest_feature_date: "2023-01-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/cdn/docs/configure-private-origin-authentication"
  - "https://docs.cloud.google.com/cdn/docs/private-content"
  - "https://docs.cloud.google.com/cdn/docs/authenticate-content"
keywords:
  - "authentication"
  - "private"
  - "amazon"
  - "origins"
  - "origin"
---

# Private origin authentication for Amazon S3 origins

Product: Cloud CDN
Coverage: MEDIUM

## Step 02 Summary

Cloud CDN now supports private origin authentication for Amazon S3 and compatible object stores to allow only trusted connections.

## Extended Definition

Cloud CDN now supports private origin authentication for Amazon S3 and compatible object stores to allow only trusted connections.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/cdn/docs/configure-private-origin-authentication](https://docs.cloud.google.com/cdn/docs/configure-private-origin-authentication)
- [https://docs.cloud.google.com/cdn/docs/private-content](https://docs.cloud.google.com/cdn/docs/private-content)
- [https://docs.cloud.google.com/cdn/docs/authenticate-content](https://docs.cloud.google.com/cdn/docs/authenticate-content)

## Supporting Pages

### "Configure private origin authentication \_|\_ Cloud CDN \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/cdn/docs/configure-private-origin-authentication](https://docs.cloud.google.com/cdn/docs/configure-private-origin-authentication)
- Source ID: `site-docs-reference-2`
- Final score: 208
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If necessary, update to the latest version of the Google Cloud CLI: gcloud components update Configure authentication for private origins To configure private origin authentication, use the following instructions: Console In the Google Cloud console, go to the Cloud CDN page.
- Private origin authentication gives Cloud CDN long-term resource access to private Amazon S3 buckets or other compatible object stores.
- Private origin authentication limits non-CDN access to your origins and content.
- The following snippet shows the contents of a sample my-private-origin.yaml file: name : shopping-cart-services backends : - description : cart-backend-1 group : 'https://www.googleapis.com/compute/v1/projects/my-project-id/global/networkEndpointGroups/my-network-origin-group' securitySettings : awsV4Authentication : accessKeyId : AKIDEXAMPLE accessKey : c4afb1cc5771d871763a393e44b703571b55cc28424d1a5e86da6ed3c154a4b9 accessKeyVersion : prod-access-key-v1.2 originRegion : us-east-2 To update your private origin, import the configuration to your backend service by using the gcloud compute backend-services import command: gcloud compute backend-services import BACKEND SERVICE NAME \ [--source= SOURCE ] Replace SOURCE with the name of the YAML file.

### Authenticate content \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/private-content](https://docs.cloud.google.com/cdn/docs/private-content)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Private origin authentication lets you limit connections to your Amazon Simple Storage Service (Amazon S3) buckets or other compatible object stores and prevent users from accessing them directly.
- Private origin authentication Private origin authentication gives Cloud CDN long-term access to private Amazon S3 buckets or compatible object stores.
- Private origin authentication limits non-CDN access to your origins and content.
- Private origin authentication is supported for Cloud CDN with a global external Application Load Balancer or a classic Application Load Balancer.

### Authenticate content \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/authenticate-content](https://docs.cloud.google.com/cdn/docs/authenticate-content)
- Source ID: `site-docs-root-2`
- Final score: 118
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Private origin authentication lets you limit connections to your Amazon Simple Storage Service (Amazon S3) buckets or other compatible object stores and prevent users from accessing them directly.
- Private origin authentication Private origin authentication gives Cloud CDN long-term access to private Amazon S3 buckets or compatible object stores.
- Private origin authentication limits non-CDN access to your origins and content.
- Private origin authentication is supported for Cloud CDN with a global external Application Load Balancer or a classic Application Load Balancer.

