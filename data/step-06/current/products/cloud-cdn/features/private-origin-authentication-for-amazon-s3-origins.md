---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:27:19.866Z"
product_name: "Cloud CDN"
product_slug: "cloud-cdn"
feature_name: "Private origin authentication for Amazon S3 origins"
feature_slug: "private-origin-authentication-for-amazon-s3-origins"
latest_feature_date: "2023-01-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/cdn/docs/configure-private-origin-authentication"
  - "https://docs.cloud.google.com/cdn/docs/release-notes"
  - "https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-third-party-storage"
keywords:
  - "private"
  - "origin"
  - "authentication"
  - "for"
  - "amazon"
  - "s3"
  - "origins"
  - "cdn"
---

# Private origin authentication for Amazon S3 origins

Product: Cloud CDN
Coverage: LOW

## Step 02 Summary

Cloud CDN now supports private origin authentication for Amazon S3 and compatible object stores to allow only trusted connections.

## Extended Definition

Cloud CDN now supports private origin authentication for Amazon S3 and compatible object stores to allow only trusted connections.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/cdn/docs/configure-private-origin-authentication](https://docs.cloud.google.com/cdn/docs/configure-private-origin-authentication)
- [https://docs.cloud.google.com/cdn/docs/release-notes](https://docs.cloud.google.com/cdn/docs/release-notes)
- [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-third-party-storage](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-third-party-storage)

## Supporting Pages

### "Configure private origin authentication \_|\_ Cloud CDN \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/cdn/docs/configure-private-origin-authentication](https://docs.cloud.google.com/cdn/docs/configure-private-origin-authentication)
- Source ID: `site-docs-root-2`
- Final score: 250
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If necessary, update to the latest version of the Google Cloud CLI: gcloud components update Configure authentication for private origins To configure private origin authentication, use the following instructions: Console In the Google Cloud console, go to the Cloud CDN page.
- Private origin authentication gives Cloud CDN long-term resource access to private Amazon S3 buckets or other compatible object stores.
- This page provides an overview of private origin authentication and instructions for using it with Cloud CDN.
- Private origin authentication limits non-CDN access to your origins and content.

### Cloud CDN release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/release-notes](https://docs.cloud.google.com/cdn/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- September 14, 2023 Feature The Cloud CDN private origin authentication capability for Amazon Simple Storage Service (Amazon S3) and compatible object stores is now Generally Available .
- January 17, 2023 Feature Cloud CDN supports private origin authentication for Amazon Simple Storage Service (Amazon S3) and compatible object stores.
- October 31, 2024 Feature You can also use the Google Cloud Console to enable private origin authentication for Amazon Simple Storage Service (Amazon S3) and compatible object stores.
- July 13, 2020 Change Added a new setup guide for custom (external) origins with Cloud CDN and external HTTP(S) Load Balancing.

### Set up third-party object storage \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-third-party-storage](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-third-party-storage)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Make sure that either the Amazon S3 bucket and the objects in the bucket are public or that you have configured private origin authentication for the Amazon S3 bucket.
- If everything looks correct, click Update . gcloud Create a new backend service for the NEG: gcloud compute backend-services create images \ --global \ --enable-cdn \ --cache-mode= CACHE MODE \ --protocol=HTTP2 Set the cache mode by replacing CACHE MODE with one of the following: CACHE ALL STATIC : automatically caches static content USE ORIGIN HEADERS (default): requires the origin to set valid caching headers to cache content FORCE CACHE ALL : caches all content, ignoring any private , no-store , or no-cache directives in Cache-Control response headers Configure the backend service to add the custom request header Host: backend.example.com to the request: gcloud compute backend-services update images \ --custom-request-header "Host: backend.example.com" --global Use the backend-services add-backend command to add the internet NEG to the backend service: gcloud compute backend-services add-backend images \ --network-endpoint-group "example-fqdn-neg" \ --global-network-endpoint-group \ --global Attach the new backend service to the load balancer's URL map by creating a new matching rule to direct requests to that backend: gcloud compute url-maps add-path-matcher EXAMPLE URL MAP \ --default-service= GCP SERVICE EXAMPLE \ --path-matcher-name= CUSTOM ORIGIN PATH MATCHER EXAMPLE \ --backend-service-path-rules= /CART/ID/1223515 = IMAGES Replace the following: EXAMPLE URL MAP : the name of your existing URL map GCP SERVICE EXAMPLE : the name of an existing default backend service CUSTOM ORIGIN PATH MATCHER EXAMPLE : the name of this new path rule /CART/ID/1223515 : the path IMAGES : the name of the new backend service with the attached internet NEG Allowlist the necessary IP ranges To allow an external Application Load Balancer to send requests to your internet NEG, you must query the cloud-eoips.googleusercontent.com DNS TXT record by using a tool like dig or nslookup .
- This document walks through the process of setting up third-party object storage—such as Amazon Simple Storage Service (Amazon S3) or Azure Blob Storage—as an external backend for Cloud CDN.
- Because this is the first request, it should be a miss and Cloud CDN should fetch the image from the origin, which is Amazon S3.

