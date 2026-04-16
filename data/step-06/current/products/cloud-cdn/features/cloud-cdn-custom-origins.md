---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T14:23:30.374Z"
product_name: "Cloud CDN"
product_slug: "cloud-cdn"
feature_name: "Cloud CDN custom origins"
feature_slug: "cloud-cdn-custom-origins"
latest_feature_date: "2020-03-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/cdn/docs/best-practices"
  - "https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring"
  - "https://docs.cloud.google.com/cdn/docs/logging"
keywords:
  - "caches"
  - "source"
  - "enabling"
  - "origins"
  - "generally"
  - "available"
  - "custom"
---

# Cloud CDN custom origins

Product: Cloud CDN
Coverage: MEDIUM

## Step 02 Summary

Cloud CDN custom origins is generally available, enabling caches to source content from on-premises or other-cloud origins; Cloud CDN custom origins support is available in beta for serving cached content from external origins.

## Extended Definition

Cloud CDN custom origins is generally available, enabling caches to source content from on-premises or other-cloud origins; Cloud CDN custom origins support is available in beta for serving cached content from external origins.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/cdn/docs/best-practices](https://docs.cloud.google.com/cdn/docs/best-practices)
- [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)
- [https://docs.cloud.google.com/cdn/docs/logging](https://docs.cloud.google.com/cdn/docs/logging)

## Supporting Pages

### "Logs and metrics for backend services \_|\_ Cloud CDN \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)
- Source ID: `site-docs-root-2`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- This information is only available for global external Application Load Balancers using custom error responses . string Optional The cachePolicySource field holds the source of the caching policy that governs the caching behavior for a specific request: CACHE POLICY SOURCE ROUTE : A cache policy can be applied at different levels of the URL map, and that allows for more granular control over caching.
- This information is only available for global external Application Load Balancers using custom error responses . string Required The errorBackendStatusDetails field holds the statusDetails of the final response served to the client.
- This information is only available for global external Application Load Balancers using custom error responses . string Required The errorService field holds the backend service that provided the custom error response.
- The metrics created are based on the Application Load Balancer Rule (Logs-based Metrics) resource ( l7 lb rule ), which is available under Cloud Monitoring dashboards instead of under the https lb rule resource.

### Content delivery best practices \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/best-practices](https://docs.cloud.google.com/cdn/docs/best-practices)
- Source ID: `site-docs-reference-2`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- When you enable Cloud CDN and customize the cache keys for the backend service that holds the logo, clear the Host checkbox so that the cache ignores the domain but caches the logo.
- Instead, use GCPHTTPFilter , a custom resource for GKE Gateway, to customize cacheKeyPolicy and TTL settings for specific URL paths within an HTTPRoute resource.
- When you customize the cache keys for the backend service that holds the logo, clear the Protocol checkbox so that requests through HTTP and HTTPS count as matches for the logo's cache entry.
- Use the custom monitoring dashboard for Cloud CDN To ensure greater reliability and performance, a best practice is to regularly review monitoring metrics related to Cloud CDN.

### Logs and metrics for caching \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/logging](https://docs.cloud.google.com/cdn/docs/logging)
- Source ID: `site-docs-reference-2`
- Final score: 104
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can filter on the following fields to determine the cache hit, miss, or revalidation status of a request served by Cloud CDN: Cache Hit jsonPayload.statusDetails=("response from cache" OR "byte range caching") or httpRequest.cacheHit=true httpRequest.cacheValidatedWithOriginServer!=true Cache Hit Validated With Origin Server jsonPayload.statusDetails="response from cache validated" or httpRequest.cacheHit=true httpRequest.cacheValidatedWithOriginServer=true Cache Miss jsonPayload.statusDetails="response sent by backend" or httpRequest.cacheHit!=true httpRequest.cacheLookup=true Alternatively, you can observe the cache status from the client side by configuring a custom response header with cdn cache status .
- Metrics on the dashboards The predefined dashboards provide the following key metrics about your CDN origins: Client traffic distribution A dynamic geographical map displaying the source of client requests.
- The definitions of these custom dashboards are available on GitHub in the monitoring-dashboard-samples repository as JSON files.
- Request served from the backend To confirm that a request is served from a Cloud CDN-enabled backend, there are three main fields to look for, as follows: httpRequest : When a request is served from a backend, you can see that the cache is filled and you can confirm the request URL. cacheFillBytes: NUMBER OF BYTES cacheLookup: True requestURL : URL jsonPayload : From the statusDetails field, you can confirm that the response was served by the backend. statusDetails: "response sent by backend" Request served from cache The following log entry shows a cache hit. { insertId: "1oek5rg3l3fxj7" jsonPayload: { @type: "type.googleapis.com/google.cloud.loadbalancing.type.LoadBalancerLogEntry" cacheId: "SFO-fbae48ad" statusDetails: "response from cache" } httpRequest: { requestMethod: "GET" requestUrl: "http:// LOAD BALANCER IP ADDRESS /static/us/three-cats.jpg" requestSize: "577" status: 304 responseSize: "157" userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10 14 6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36" remoteIp: " CLIENT IP ADDRESS " cacheHit: true cacheLookup: true } resource: { type: "http load balancer" labels: { zone: "global" url map name: " URL MAP NAME " forwarding rule name: " FORWARDING RULE NAME " target proxy name: " TARGET PROXY NAME " backend service name: "" project id: " PROJECT ID " } } timestamp: "2020-06-08T23:41:30.078651Z" severity: "INFO" logName: "projects/ PROJECT ID /logs/requests" trace: "projects/ PROJECT ID /traces/241d69833e64b3bf83fabac8c873d992" receiveTimestamp: "2020-06-08T23:41:30.588272510Z" spanId: "7b6537d3672e08e1" } What is logged In addition to general information contained in most logs, such as severity, project ID, project number, and timestamp, the external Application Load Balancer and Cloud CDN logs contain the following: The HttpRequest log field, which captures the HTTP status code, bytes returned, and whether a cache lookup or cache fill was performed.

