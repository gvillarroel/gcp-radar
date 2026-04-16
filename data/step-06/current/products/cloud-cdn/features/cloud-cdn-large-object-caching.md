---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T14:23:30.375Z"
product_name: "Cloud CDN"
product_slug: "cloud-cdn"
feature_name: "Cloud CDN Large Object Caching"
feature_slug: "cloud-cdn-large-object-caching"
latest_feature_date: "2018-08-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/cdn/docs/caching"
  - "https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring"
  - "https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-third-party-storage"
keywords:
  - "large"
  - "objects"
  - "object"
  - "caching"
  - "supports"
---

# Cloud CDN Large Object Caching

Product: Cloud CDN
Coverage: MEDIUM

## Step 02 Summary

Cloud CDN Large Object Caching supports caching objects up to 5 TB; Cloud CDN Large Object Caching is available in beta and supports object sizes up to 5 TB.

## Extended Definition

Cloud CDN Large Object Caching supports caching objects up to 5 TB; Cloud CDN Large Object Caching is available in beta and supports object sizes up to 5 TB.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)
- [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-third-party-storage](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-third-party-storage)

## Supporting Pages

### Caching overview \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- Source ID: `site-docs-reference-2`
- Final score: 167
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This can actively reduce the load on the origin, and applies to both item requests (responses fetched directly) and chunk requests , where Cloud CDN uses Range requests to fetch larger objects more efficiently.
- If you have Cloud Storage objects larger than 10 MB, make sure that they don't have Content-Encoding: gzip metadata.
- Cloud Storage supports byte range requests for most objects.
- Support for byte range requests A response that satisfies the following criteria indicates that the origin server supports byte range requests: Status code: 200 OK or 206 Partial Content Header: Accept-Ranges: bytes Header: Content-Length , and for a 206 Partial Content response, a Content-Range value that indicates the complete length of the origin object.

### "Logs and metrics for backend services \_|\_ Cloud CDN \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)
- Source ID: `site-docs-root-2`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- Serverless objects include App Engine, Cloud Run, and Cloud Run functions.
- To finish editing the load balancer, click Update . gcloud Create a backend service and enable logging by using the gcloud compute backend-services create command . gcloud compute backend-services create BACKEND SERVICE \ --global \ --enable-logging \ --logging-sample-rate= VALUE \ --load-balancing-scheme=EXTERNAL MANAGED \ --logging-optional= LOGGING OPTIONAL MODE \ --logging-optional-fields= OPTIONAL FIELDS The gcloud compute backend-services create command supports the following fields: --global indicates that the backend service is global.
- Field Type Description backend service name string The name of the backend service. forwarding rule name string The name of the forwarding rule object. project id string The identifier of the Google Cloud project associated with this resource. target proxy name string The name of the target proxy object referenced by the forwarding rule. url map name string The name of the URL map object configured to select a backend service. zone string The zone in which the load balancer is running.
- This information is only available for global external Application Load Balancers using custom error responses . string Optional The cachePolicySource field holds the source of the caching policy that governs the caching behavior for a specific request: CACHE POLICY SOURCE ROUTE : A cache policy can be applied at different levels of the URL map, and that allows for more granular control over caching.

### Set up third-party object storage \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-third-party-storage](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-third-party-storage)
- Source ID: `site-docs-root`
- Final score: 106
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Make sure that either the Amazon S3 bucket and the objects in the bucket are public or that you have configured private origin authentication for the Amazon S3 bucket.
- These instructions assume that you are using an Amazon S3 bucket and have the required permissions to make changes to the Amazon S3 bucket and objects.
- Alternatively, you can keep your bucket and objects private if you configure private origin authentication .
- Limitations The third-party bucket and the objects must be public.

