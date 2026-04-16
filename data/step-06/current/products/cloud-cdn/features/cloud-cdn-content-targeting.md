---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T14:23:30.345Z"
product_name: "Cloud CDN"
product_slug: "cloud-cdn"
feature_name: "Cloud CDN content targeting"
feature_slug: "cloud-cdn-content-targeting"
latest_feature_date: "2025-05-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/cdn/docs/best-practices"
  - "https://docs.cloud.google.com/cdn/docs/apis"
  - "https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring"
keywords:
  - "targeting"
  - "customize"
  - "delivery"
  - "context"
  - "caching"
  - "content"
  - "supports"
---

# Cloud CDN content targeting

Product: Cloud CDN
Coverage: LOW

## Step 02 Summary

Cloud CDN supports content targeting to customize caching and delivery by context, including device and geolocation characteristics.

## Extended Definition

Cloud CDN supports content targeting to customize caching and delivery by context, including device and geolocation characteristics.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/cdn/docs/best-practices](https://docs.cloud.google.com/cdn/docs/best-practices)
- [https://docs.cloud.google.com/cdn/docs/apis](https://docs.cloud.google.com/cdn/docs/apis)
- [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)

## Supporting Pages

### Content delivery best practices \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/best-practices](https://docs.cloud.google.com/cdn/docs/best-practices)
- Source ID: `site-docs-reference-2`
- Final score: 23
- Re-rank relevance: N/A

Evidence snippets:
- For example, the following Cache-Control header makes the associated content publicly readable and cacheable with a cache expiration of 72 hours (259200 seconds): Cache-Control: public, max-age=259200 To maximize caching, follow the guidelines in the Caching overview .
- Home Documentation Networking Cloud CDN Guides Send feedback Content delivery best practices Stay organized with collections Save and categorize content based on your preferences.
- This setting lets Cloud CDN cache common static content types when the origin does not specify any caching directives in the response headers.
- This page provides best practices for optimizing and accelerating content delivery with Cloud CDN .

### "Logs and metrics for backend services \_|\_ Cloud CDN \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)
- Source ID: `site-docs-root-2`
- Final score: 21
- Re-rank relevance: N/A

Evidence snippets:
- To finish editing the load balancer, click Update . gcloud Create a backend service and enable logging by using the gcloud compute backend-services create command . gcloud compute backend-services create BACKEND SERVICE \ --global \ --enable-logging \ --logging-sample-rate= VALUE \ --load-balancing-scheme=EXTERNAL MANAGED \ --logging-optional= LOGGING OPTIONAL MODE \ --logging-optional-fields= OPTIONAL FIELDS The gcloud compute backend-services create command supports the following fields: --global indicates that the backend service is global.
- This information is only available for global external Application Load Balancers using custom error responses . string Optional The cachePolicySource field holds the source of the caching policy that governs the caching behavior for a specific request: CACHE POLICY SOURCE ROUTE : A cache policy can be applied at different levels of the URL map, and that allows for more granular control over caching.
- CACHE POLICY SOURCE BACKEND : The caching behavior determined by the Cloud CDN configuration on the backend service or bucket. integer Required The overrideResponseCode holds the override response code applied to the response sent to the client.
- Returned from the backend—any status code is possible. byte range caching retrieval from backend failed after partial response A byte range request or validation request initiated by Cloud CDN encountered an error.

### API and gcloud references \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/apis](https://docs.cloud.google.com/cdn/docs/apis)
- Source ID: `site-docs-reference`
- Final score: 21
- Re-rank relevance: N/A

Evidence snippets:
- Backend buckets gcloud API Backend services gcloud API URL maps gcloud API Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Networking Cloud CDN Reference Send feedback API and gcloud references Stay organized with collections Save and categorize content based on your preferences.
- For contextual how-to information about using these commands, see the Cloud CDN How-to guides .

