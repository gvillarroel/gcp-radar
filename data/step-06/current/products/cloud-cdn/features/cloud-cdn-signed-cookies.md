---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:27:19.910Z"
product_name: "Cloud CDN"
product_slug: "cloud-cdn"
feature_name: "Cloud CDN Signed Cookies"
feature_slug: "cloud-cdn-signed-cookies"
latest_feature_date: "2020-04-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/cdn/docs/release-notes"
  - "https://docs.cloud.google.com/cdn/docs/using-signed-cookies"
  - "https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring"
keywords:
  - "cdn"
  - "signed"
  - "cookies"
  - "are"
  - "generally"
  - "available"
  - "and"
  - "allow"
---

# Cloud CDN Signed Cookies

Product: Cloud CDN
Coverage: LOW

## Step 02 Summary

Cloud CDN Signed Cookies are generally available and allow signing a URL prefix and issuing cookies for protected cached content.

## Extended Definition

Cloud CDN Signed Cookies are generally available and allow signing a URL prefix and issuing cookies for protected cached content.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/cdn/docs/release-notes](https://docs.cloud.google.com/cdn/docs/release-notes)
- [https://docs.cloud.google.com/cdn/docs/using-signed-cookies](https://docs.cloud.google.com/cdn/docs/using-signed-cookies)
- [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)

## Supporting Pages

### Cloud CDN release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/release-notes](https://docs.cloud.google.com/cdn/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- January 28, 2022 Feature Cloud CDN support for custom named cookies and headers in the cache key are Generally Available .
- Signed Cookies complement our existing Signed URLs functionality by allowing you to sign a URL prefix and issue a cookie to a client, avoiding the need to sign content on a per-URL basis when protecting media or other content cached by Cloud CDN.
- March 29, 2021 Change Cloud CDN now treats the no-cache Cache-Control directive in a response as per RFC 7234 and allows these responses to be cached, provided that they are validated every time before being reused.
- September 14, 2023 Feature The Cloud CDN private origin authentication capability for Amazon Simple Storage Service (Amazon S3) and compatible object stores is now Generally Available .

### Use signed cookies \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/using-signed-cookies](https://docs.cloud.google.com/cdn/docs/using-signed-cookies)
- Source ID: `site-docs-root-2`
- Final score: 186
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create signed request keys You enable support for Cloud CDN signed URLs and signed cookies by creating one or more keys on a Cloud CDN-enabled backend service , backend bucket , or both.
- Home Documentation Networking Cloud CDN Guides Send feedback Use signed cookies Stay organized with collections Save and categorize content based on your preferences.
- This page provides an overview of signed cookies and instructions for using them with Cloud CDN.
- To set the maximum cache time for a backend service or backend bucket, run one of the following commands: gcloud compute backend-services update BACKEND NAME \ --signed-url-cache-max-age MAX AGE gcloud compute backend-buckets update BACKEND NAME \ --signed-url-cache-max-age MAX AGE List signed request key names To list the keys on a backend service or backend bucket, run one of the following commands: gcloud compute backend-services describe BACKEND NAME gcloud compute backend-buckets describe BACKEND NAME Delete signed request keys When URLs signed by a particular key should no longer be honored, run one of the following commands to delete that key from the backend service or backend bucket: gcloud compute backend-services \ delete-signed-url-key BACKEND NAME --key-name KEY NAME gcloud compute backend-buckets \ delete-signed-url-key BACKEND NAME --key-name KEY NAME Creating a policy Signed cookie policies are a series of key-value pairs (delimited by the : character), similar to the query parameters used in a signed URL.

### "Logs and metrics for backend services \_|\_ Cloud CDN \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)
- Source ID: `site-docs-root-2`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- This information is only available for global external Application Load Balancers using custom error responses . string Optional The cachePolicySource field holds the source of the caching policy that governs the caching behavior for a specific request: CACHE POLICY SOURCE ROUTE : A cache policy can be applied at different levels of the URL map, and that allows for more granular control over caching.
- 413 handled by identity aware proxy This response was generated by IAP during identity verification of the client before allowing access.
- To learn more about the IAM roles that are available, and the steps to provide access, see Grant access to Monitoring .
- Read about signed URLs and signed cookies .

