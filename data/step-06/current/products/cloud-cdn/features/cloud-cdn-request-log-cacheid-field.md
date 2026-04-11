---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:27:19.908Z"
product_name: "Cloud CDN"
product_slug: "cloud-cdn"
feature_name: "Cloud CDN request log cacheId field"
feature_slug: "cloud-cdn-request-log-cacheid-field"
latest_feature_date: "2020-04-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring"
  - "https://docs.cloud.google.com/cdn/docs/logging"
  - "https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-third-party-storage"
keywords:
  - "cdn"
  - "request"
  - "log"
  - "cacheid"
  - "field"
  - "logs"
  - "now"
  - "include"
---

# Cloud CDN request log cacheId field

Product: Cloud CDN
Coverage: LOW

## Step 02 Summary

Cloud CDN request logs now include a cacheId field that identifies the edge cache node and location used to serve a response.

## Extended Definition

Cloud CDN request logs now include a cacheId field that identifies the edge cache node and location used to serve a response.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)
- [https://docs.cloud.google.com/cdn/docs/logging](https://docs.cloud.google.com/cdn/docs/logging)
- [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-third-party-storage](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-third-party-storage)

## Supporting Pages

### "Logs and metrics for backend services \_|\_ Cloud CDN \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)
- Source ID: `site-docs-root-2`
- Final score: 218
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Updating logging optional mode from CUSTOM to others gcloud compute backend-services update BACKEND SERVICE \ --global \ --enable-logging \ --logging-sample-rate= VALUE \ --logging-optional= LOGGING OPTIONAL MODE \ --logging-optional-fields= where --logging-optional lets you specify the optional fields that you want to include in the logs: INCLUDE ALL OPTIONAL to include all optional fields.
- CUSTOM to include a custom list of optional fields that you specify in OPTIONAL FIELDS . --logging-optional-fields lets you specify a comma-separated list of optional fields that you want to include in the logs.
- CUSTOM to include a custom list of optional fields that you specify in OPTIONAL FIELDS . --logging-optional-fields lets you specify a comma-separated list of optional fields that you want to include in the logs.
- CUSTOM to include a custom list of optional fields that you specify in OPTIONAL FIELDS . --logging-optional-fields lets you specify a comma-separated list of optional fields that you want to include in the logs.

### Logs and metrics for caching \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/logging](https://docs.cloud.google.com/cdn/docs/logging)
- Source ID: `site-docs-root-2`
- Final score: 196
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Request served from the backend To confirm that a request is served from a Cloud CDN-enabled backend, there are three main fields to look for, as follows: httpRequest : When a request is served from a backend, you can see that the cache is filled and you can confirm the request URL. cacheFillBytes: NUMBER OF BYTES cacheLookup: True requestURL : URL jsonPayload : From the statusDetails field, you can confirm that the response was served by the backend. statusDetails: "response sent by backend" Request served from cache The following log entry shows a cache hit. { insertId: "1oek5rg3l3fxj7" jsonPayload: { @type: "type.googleapis.com/google.cloud.loadbalancing.type.LoadBalancerLogEntry" cacheId: "SFO-fbae48ad" statusDetails: "response from cache" } httpRequest: { requestMethod: "GET" requestUrl: "http:// LOAD BALANCER IP ADDRESS /static/us/three-cats.jpg" requestSize: "577" status: 304 responseSize: "157" userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10 14 6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36" remoteIp: " CLIENT IP ADDRESS " cacheHit: true cacheLookup: true } resource: { type: "http load balancer" labels: { zone: "global" url map name: " URL MAP NAME " forwarding rule name: " FORWARDING RULE NAME " target proxy name: " TARGET PROXY NAME " backend service name: "" project id: " PROJECT ID " } } timestamp: "2020-06-08T23:41:30.078651Z" severity: "INFO" logName: "projects/ PROJECT ID /logs/requests" trace: "projects/ PROJECT ID /traces/241d69833e64b3bf83fabac8c873d992" receiveTimestamp: "2020-06-08T23:41:30.588272510Z" spanId: "7b6537d3672e08e1" } What is logged In addition to general information contained in most logs, such as severity, project ID, project number, and timestamp, the external Application Load Balancer and Cloud CDN logs contain the following: The HttpRequest log field, which captures the HTTP status code, bytes returned, and whether a cache lookup or cache fill was performed.
- A backend can be a Cloud Storage bucket, a Compute Engine VM group, or an external backend. histogram quantile( 0.95, sum by (proxy continent, le) ( rate({"loadbalancing.googleapis.com/https/frontend tcp rtt bucket", monitored resource="https lb rule", backend target name="example-backend" }[1m]) ) ) Request count broken out by response code class for Cloud CDN-enabled backends This query breaks out traffic by response code class (2xx, 3xx, 4xx, 5xx) to help separate client successes, client errors, and server errors. sum by (response code class) ( count over time( {"loadbalancing.googleapis.com/https/request count", monitored resource="https lb rule", cache result!="DISABLED" }[1h] ) ) Request count broken out by country of origin This query shows traffic broken out by country of origin, which is determined by using client IP addresses. sum by (client country) ( rate({"loadbalancing.googleapis.com/https/request count", monitored resource="https lb rule"}[1m]) ) What's next To learn more about logging, including how to export logs to BigQuery, Pub/Sub, or Cloud Storage, and how to configure logs-based metrics for monitoring and alerting, see the Cloud Logging documentation .
- When Cloud CDN serves a client request by initiating validation requests or byte range requests, it omits the serverIp field from the Cloud Logging log entry for the client request.
- You can use this field to identify the insertId of the log entry for the single client request that prompted Cloud CDN to initiate the validation request or byte range request.

### Set up third-party object storage \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-third-party-storage](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-third-party-storage)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- 200 OK Length: 3447106 (3.3M) [image/jpeg] Saving to: '/cart/id/1223515/image.jpg.45' /cart/id/1223515/image.jpg.45 100%[==============================================================================================================================================>] 3.29M --.-KB/s in 0.008s 2020-06-26 18:19:29 (423 MB/s) - '/cart/id/1223515/image.jpg.45' saved [3447106/3447106] real 0m0.018s user 0m0.001s sys 0m0.010s Verify by using logs Logs for Cloud CDN are associated with the external Application Load Balancer that your Cloud CDN-enabled backends are attached to.
- 200 OK Length: 3447106 (3.3M) [image/jpeg] Saving to: '/cart/id/1223515/image.jpg.44' /cart/id/1223515/image.jpg.44 100%[==============================================================================================================================================>] 3.29M 8.23MB/s in 0.4s 2020-06-26 18:19:28 (8.23 MB/s) - '/cart/id/1223515/image.jpg.44' saved [3447106/3447106] real 0m0.844s user 0m0.003s sys 0m0.012s Test 3: Second request through CDN Now we will make one more request using this load balancer IP.
- What's next To check whether Cloud CDN is serving responses from cache, see Logs and metrics for caching .
- Using the logs, you can check whether a request is a hit or a miss.

