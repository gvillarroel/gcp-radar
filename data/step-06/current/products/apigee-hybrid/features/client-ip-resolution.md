---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:33:10.244Z"
product_name: "Apigee hybrid"
product_slug: "apigee-hybrid"
feature_name: "Client IP resolution"
feature_slug: "client-ip-resolution"
latest_feature_date: "2025-03-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/client-ip-resolution"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/release-notes"
keywords:
  - "preserve original client address"
  - "source IP preservation"
  - "client IP resolution"
  - "client IP detection"
  - "real client IP"
  - "client IP"
  - "X-Forwarded-For"
  - "XFF"
---

# Client IP resolution

Product: Apigee hybrid
Coverage: LOW

## Step 02 Summary

Apigee Hybrid adds client IP resolution functionality in versions 1.14.0 and later.

## Extended Definition

Apigee Hybrid adds client IP resolution functionality in versions 1.14.0 and later.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/client-ip-resolution](https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/client-ip-resolution)
- [https://docs.cloud.google.com/apigee/docs/hybrid/release-notes](https://docs.cloud.google.com/apigee/docs/hybrid/release-notes)

## Supporting Pages

### Client IP resolution \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/client-ip-resolution](https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/client-ip-resolution)
- Source ID: `site-docs-reference`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- Understand the client IP resolution configuration syntax The client IP resolution setting has this format: "clientIpResolutionConfig": { "headerIndexAlgorithm": { "ipHeaderName" : "X-Forwarded-For", "ipHeaderIndex": 2 } } The following example uses the True-Client-Ip header: "clientIpResolutionConfig": { "headerIndexAlgorithm": { "ipHeaderName" : "True-Client-Ip", "ipHeaderIndex": 0 } } where ipHeaderName is the header to use for the client IP.
- When to set the client IP resolution for an environment Although it's not required to set client IP resolution, you might want to if the default client IP address resolution does not meet your needs and you want to override it to provide a specified client IP address resolution for Analytics, Advanced API Security, or performing any other function that requires consistent and reliable information on client IP addresses.
- If the environment-level client IP resolution is not configured, or if the configured header does not exist or does not contain an IP address at the specified index, the client IP address variables are populated using the default client IP address resolution behavior.
- Default client IP address resolution If client IP resolution is not configured at the environment level, the default value of the ax resolved client ip dimension is calculated as described in Analytics dimensions .

### Apigee hybrid release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/release-notes](https://docs.cloud.google.com/apigee/docs/hybrid/release-notes)
- Source ID: `site-docs-reference`
- Final score: 40
- Re-rank relevance: N/A

Evidence snippets:
- March 27, 2025 v1.14.0 Announcement On March 27, 2025, we released an updated version of Apigee. v1.14.0 Feature Availability of client IP resolution functionality with Apigee hybrid.
- Client IP resolution functonality is now available with Apigee hybrid versions 1.14.0 and later.
- See Client IP resolution for information.
- The proxy.url flow variable could show as http even when the request is https . (Fixed in Apigee hybrid v1.6.4) 210314786 The backup utility did not work with workload identity. (Fixed in Apigee hybrid v1.6.4) 209622008 Dynamic updates to rate in spike arrest are now reflected immediately. (Fixed in Apigee X, March 15, 2022) 209484701 Invalid client IP sent to analytics. (Fixed in Apigee hybrid v1.6.5) 209097822 Fixed and issue where SpikeArrest was not reflecting updated rate (Fixed in Apigee hybrid v1.6.3) 208474799 Apigee hybrid now supports ASM version 1.12.

