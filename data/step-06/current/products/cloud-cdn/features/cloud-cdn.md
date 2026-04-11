---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:27:19.921Z"
product_name: "Cloud CDN"
product_slug: "cloud-cdn"
feature_name: "Cloud CDN"
feature_slug: "cloud-cdn"
latest_feature_date: "2016-06-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/cdn/docs/release-notes"
  - "https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring"
  - "https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-mig"
keywords:
  - "cdn"
  - "became"
  - "generally"
  - "available"
  - "as"
  - "in"
  - "beta"
---

# Cloud CDN

Product: Cloud CDN
Coverage: LOW

## Step 02 Summary

Cloud CDN became generally available as a Google Cloud service; Cloud CDN became available in beta.

## Extended Definition

Cloud CDN became generally available as a Google Cloud service; Cloud CDN became available in beta.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/cdn/docs/release-notes](https://docs.cloud.google.com/cdn/docs/release-notes)
- [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)
- [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-mig](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-mig)

## Supporting Pages

### Cloud CDN release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/release-notes](https://docs.cloud.google.com/cdn/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 208
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- September 14, 2023 Feature The Cloud CDN private origin authentication capability for Amazon Simple Storage Service (Amazon S3) and compatible object stores is now Generally Available .
- January 28, 2022 Feature Cloud CDN support for custom named cookies and headers in the cache key are Generally Available .
- February 01, 2017 Feature Cloud CDN support for Google Cloud Storage with HTTP(S) Load Balancing is available in Beta .
- April 07, 2021 Announcement Serve stale , bypassing cache , and negative caching are now Generally Available .

### "Logs and metrics for backend services \_|\_ Cloud CDN \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)
- Source ID: `site-docs-root-2`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- The metrics created are based on the Application Load Balancer Rule (Logs-based Metrics) resource ( l7 lb rule ), which is available under Cloud Monitoring dashboards instead of under the https lb rule resource.
- The zone is global . statusDetails HTTP success messages statusDetails (successful) Meaning Common accompanying response codes byte range caching The HTTP request was served using Cloud CDN byte range caching .
- If no instance group was available or if the request was served by another entity, you see one of the following values instead of the region or zone of the backend service instance group.
- Home Documentation Networking Cloud CDN Guides Send feedback Logs and metrics for backend services Stay organized with collections Save and categorize content based on your preferences.

### "Set up a managed instance group backend \_|\_ Cloud CDN \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-mig](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-mig)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- On the Load balancer details screen, note the IP:Port for your load balancer. gcloud Create a health check. gcloud compute health-checks create http http-basic-check \ --port 80 Create a backend service. gcloud compute backend-services create web-backend-service \ --load-balancing-scheme=EXTERNAL \ --protocol=HTTP \ --port-name=http \ --health-checks=http-basic-check \ --global Add your instance group as the backend to the backend service. gcloud beta compute backend-services add-backend web-backend-service \ --instance-group=lb-backend-example \ --instance-group-zone= ZONE A \ --global For HTTP, create a URL map to route the incoming requests to the default backend service. gcloud beta compute url-maps create web-map-http \ --default-service web-backend-service For HTTPS, create a URL map to route the incoming requests to the default backend service. gcloud beta compute url-maps create web-map-https \ --default-service web-backend-service Set up an HTTPS frontend Skip this section for HTTP load balancers.
- If your browser doesn't render this page, review the configuration settings in this guide. gcloud gcloud compute addresses describe lb-ipv4-1 \ --format="get(address)" \ --global After a few minutes have passed, you can test the setup by running the following curl command. curl http:// IP ADDRESS -OR- curl https:// HOSTNAME Disable Cloud CDN Console Disable Cloud CDN for a single backend service In the Google Cloud console, go to the Cloud CDN page.
- Home Documentation Networking Cloud CDN Guides Send feedback Set up a managed instance group backend Stay organized with collections Save and categorize content based on your preferences.
- Cloud CDN leverages Google Cloud global external Application Load Balancers to provide routing, health checking, and Anycast IP support.

