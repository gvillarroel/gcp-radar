---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:27:19.861Z"
product_name: "Cloud CDN"
product_slug: "cloud-cdn"
feature_name: "Cloud CDN predefined dashboards"
feature_slug: "cloud-cdn-predefined-dashboards"
latest_feature_date: "2025-10-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/cdn/docs/logging"
  - "https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring"
  - "https://docs.cloud.google.com/cdn/docs/caching"
keywords:
  - "cdn"
  - "predefined"
  - "dashboards"
  - "provides"
  - "built"
  - "in"
  - "enabled"
  - "by"
---

# Cloud CDN predefined dashboards

Product: Cloud CDN
Coverage: LOW

## Step 02 Summary

Cloud CDN provides built-in predefined dashboards enabled by default for monitoring CDN traffic distribution and cache effectiveness.

## Extended Definition

Cloud CDN provides built-in predefined dashboards enabled by default for monitoring CDN traffic distribution and cache effectiveness.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/cdn/docs/logging](https://docs.cloud.google.com/cdn/docs/logging)
- [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)
- [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)

## Supporting Pages

### Logs and metrics for caching \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/logging](https://docs.cloud.google.com/cdn/docs/logging)
- Source ID: `site-docs-root-2`
- Final score: 182
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cloud Monitoring provides predefined dashboards that are enabled by default for a quick insight into system health and performance.
- Request served from the backend To confirm that a request is served from a Cloud CDN-enabled backend, there are three main fields to look for, as follows: httpRequest : When a request is served from a backend, you can see that the cache is filled and you can confirm the request URL. cacheFillBytes: NUMBER OF BYTES cacheLookup: True requestURL : URL jsonPayload : From the statusDetails field, you can confirm that the response was served by the backend. statusDetails: "response sent by backend" Request served from cache The following log entry shows a cache hit. { insertId: "1oek5rg3l3fxj7" jsonPayload: { @type: "type.googleapis.com/google.cloud.loadbalancing.type.LoadBalancerLogEntry" cacheId: "SFO-fbae48ad" statusDetails: "response from cache" } httpRequest: { requestMethod: "GET" requestUrl: "http:// LOAD BALANCER IP ADDRESS /static/us/three-cats.jpg" requestSize: "577" status: 304 responseSize: "157" userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10 14 6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36" remoteIp: " CLIENT IP ADDRESS " cacheHit: true cacheLookup: true } resource: { type: "http load balancer" labels: { zone: "global" url map name: " URL MAP NAME " forwarding rule name: " FORWARDING RULE NAME " target proxy name: " TARGET PROXY NAME " backend service name: "" project id: " PROJECT ID " } } timestamp: "2020-06-08T23:41:30.078651Z" severity: "INFO" logName: "projects/ PROJECT ID /logs/requests" trace: "projects/ PROJECT ID /traces/241d69833e64b3bf83fabac8c873d992" receiveTimestamp: "2020-06-08T23:41:30.588272510Z" spanId: "7b6537d3672e08e1" } What is logged In addition to general information contained in most logs, such as severity, project ID, project number, and timestamp, the external Application Load Balancer and Cloud CDN logs contain the following: The HttpRequest log field, which captures the HTTP status code, bytes returned, and whether a cache lookup or cache fill was performed.
- A backend can be a Cloud Storage bucket, a Compute Engine VM group, or an external backend. histogram quantile( 0.95, sum by (proxy continent, le) ( rate({"loadbalancing.googleapis.com/https/frontend tcp rtt bucket", monitored resource="https lb rule", backend target name="example-backend" }[1m]) ) ) Request count broken out by response code class for Cloud CDN-enabled backends This query breaks out traffic by response code class (2xx, 3xx, 4xx, 5xx) to help separate client successes, client errors, and server errors. sum by (response code class) ( count over time( {"loadbalancing.googleapis.com/https/request count", monitored resource="https lb rule", cache result!="DISABLED" }[1h] ) ) Request count broken out by country of origin This query shows traffic broken out by country of origin, which is determined by using client IP addresses. sum by (client country) ( rate({"loadbalancing.googleapis.com/https/request count", monitored resource="https lb rule"}[1m]) ) What's next To learn more about logging, including how to export logs to BigQuery, Pub/Sub, or Cloud Storage, and how to configure logs-based metrics for monitoring and alerting, see the Cloud Logging documentation .
- Request bytes count broken out by cache result This query focuses on backends that have Cloud CDN enabled, which is done by including cache result!="DISABLED" . sum by (cache result) ( rate({"loadbalancing.googleapis.com/https/response bytes count", monitored resource="https lb rule", cache result!="DISABLED"}[1m]) ) Client roundtrip TCP latency at 95% for a specific backend target This query includes backend target name="example-backend" , which narrows down traffic to the backend example-backend .

### "Logs and metrics for backend services \_|\_ Cloud CDN \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)
- Source ID: `site-docs-root-2`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- CACHE POLICY SOURCE BACKEND : The caching behavior determined by the Cloud CDN configuration on the backend service or bucket. integer Required The overrideResponseCode holds the override response code applied to the response sent to the client.
- Returned from the backend—any status code is possible. byte range caching retrieval from backend failed after partial response A byte range request or validation request initiated by Cloud CDN encountered an error.
- The zone is global . statusDetails HTTP success messages statusDetails (successful) Meaning Common accompanying response codes byte range caching The HTTP request was served using Cloud CDN byte range caching .
- Returned from the backend—any status code is possible. byte range caching retrieval abandoned The client canceled a byte range request or validation request initiated by Cloud CDN.

### Caching overview \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Request type Default behavior Configurable Benefits of collapsing Chunk requests Enabled No Can significantly reduce origin bandwidth Item requests Enabled Yes Can reduce origin request volume To disable item request collapsing using the Google Cloud CLI for a backend bucket that references a Cloud Storage bucket: Note: Google Cloud CLI support for the --request-coalescing flag was introduced in Google Cloud CLI version 330.0.0 . gcloud Use the gcloud compute backend-services or backend-buckets command: gcloud compute backend-services update BACKEND SERVICE NAME \ --no-request-coalescing To enable item request collapsing on a backend bucket using the Google Cloud CLI: gcloud Use the gcloud compute backend-buckets command: gcloud compute backend-buckets update BACKEND BUCKET NAME \ --request-coalescing To enable item request collapsing using the Google Cloud CLI for a backend service, including VM groups and external backends: gcloud Use the gcloud compute backend-services command: gcloud compute backend-services update BACKEND SERVICE NAME \ --request-coalescing Requests initiated by Cloud CDN When your origin server supports byte range requests , Cloud CDN can send multiple requests to your origin server in reaction to a single client request.
- Attribute Requirement Served by Backend service or external backend that doesn't have Cloud CDN enabled Cookie Has a Set-Cookie header Vary header Has a value other than Accept , Accept-Encoding , Access-Control-Request-Headers , Access-Control-Request-Method , Origin , Sec-Fetch-Dest , Sec-Fetch-Mode , Sec-Fetch-Site , X-Goog-Allowed-Resources , X-Origin , or one of the headers that are configured to be part of the cache key settings .
- Attribute Requirement Served by Backend service, backend bucket, or an external backend with Cloud CDN enabled In response to GET request Status code 200 , 203 , 204 , 206 , 300 , 301 , 302 , 307 , 308 , 404 , 405 , 410 , 421 , 451 , or 501 .
- This behavior can be enabled for all responses by setting cdnPolicy.serveWhileStale on the backend. stale-if-error= SECONDS The stale-if-error request directive is ignored.

