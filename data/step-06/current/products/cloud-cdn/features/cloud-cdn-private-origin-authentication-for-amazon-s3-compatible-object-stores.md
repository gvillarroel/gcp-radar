---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:27:19.864Z"
product_name: "Cloud CDN"
product_slug: "cloud-cdn"
feature_name: "Cloud CDN private origin authentication for Amazon S3-compatible object stores"
feature_slug: "cloud-cdn-private-origin-authentication-for-amazon-s3-compatible-object-stores"
latest_feature_date: "2024-10-31"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/cdn/docs/configure-private-origin-authentication"
  - "https://docs.cloud.google.com/cdn/docs/private-content"
  - "https://docs.cloud.google.com/cdn/docs/release-notes"
keywords:
  - "cdn"
  - "private"
  - "origin"
  - "authentication"
  - "for"
  - "amazon"
  - "s3"
  - "compatible"
---

# Cloud CDN private origin authentication for Amazon S3-compatible object stores

Product: Cloud CDN
Coverage: LOW

## Step 02 Summary

Cloud CDN adds support for enabling private origin authentication for Amazon S3 and compatible object stores through the Google Cloud Console; Cloud CDN's private origin authentication for Amazon S3 and compatible object stores is available as a general availability capability.

## Extended Definition

Cloud CDN adds support for enabling private origin authentication for Amazon S3 and compatible object stores through the Google Cloud Console; Cloud CDN's private origin authentication for Amazon S3 and compatible object stores is available as a general availability capability.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/cdn/docs/configure-private-origin-authentication](https://docs.cloud.google.com/cdn/docs/configure-private-origin-authentication)
- [https://docs.cloud.google.com/cdn/docs/private-content](https://docs.cloud.google.com/cdn/docs/private-content)
- [https://docs.cloud.google.com/cdn/docs/release-notes](https://docs.cloud.google.com/cdn/docs/release-notes)

## Supporting Pages

### "Configure private origin authentication \_|\_ Cloud CDN \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/cdn/docs/configure-private-origin-authentication](https://docs.cloud.google.com/cdn/docs/configure-private-origin-authentication)
- Source ID: `site-docs-root-2`
- Final score: 246
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Private origin authentication gives Cloud CDN long-term resource access to private Amazon S3 buckets or other compatible object stores.
- If necessary, update to the latest version of the Google Cloud CLI: gcloud components update Configure authentication for private origins To configure private origin authentication, use the following instructions: Console In the Google Cloud console, go to the Cloud CDN page.
- This page provides an overview of private origin authentication and instructions for using it with Cloud CDN.
- The following snippet shows the contents of a sample JSON request body: securitySettings: { awsV4Authentication: { accessKeyId: "AKIDEXAMPLE", accessKey: "c4afb1cc5771d871763a393e44b703571b55cc28424d1a5e86da6ed3c154a4b9", accessKeyVersion: "prod-access-key-v1.2", originRegion: "us-east-2" } } The service name is automatically set to s3 for creating the signature.

### Authenticate content \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/private-content](https://docs.cloud.google.com/cdn/docs/private-content)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Private origin authentication Private origin authentication gives Cloud CDN long-term access to private Amazon S3 buckets or compatible object stores.
- Private origin authentication lets you limit connections to your Amazon Simple Storage Service (Amazon S3) buckets or other compatible object stores and prevent users from accessing them directly.
- Private origin authentication is supported for Cloud CDN with a global external Application Load Balancer or a classic Application Load Balancer.
- For instructions for using private origin authentication with Cloud CDN, see Configure private origin authentication .

### Cloud CDN release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/release-notes](https://docs.cloud.google.com/cdn/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- September 14, 2023 Feature The Cloud CDN private origin authentication capability for Amazon Simple Storage Service (Amazon S3) and compatible object stores is now Generally Available .
- January 17, 2023 Feature Cloud CDN supports private origin authentication for Amazon Simple Storage Service (Amazon S3) and compatible object stores.
- October 31, 2024 Feature You can also use the Google Cloud Console to enable private origin authentication for Amazon Simple Storage Service (Amazon S3) and compatible object stores.
- July 13, 2020 Change Added a new setup guide for custom (external) origins with Cloud CDN and external HTTP(S) Load Balancing.

