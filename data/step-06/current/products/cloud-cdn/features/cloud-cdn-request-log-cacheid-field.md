---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T14:23:30.370Z"
product_name: "Cloud CDN"
product_slug: "cloud-cdn"
feature_name: "Cloud CDN request log cacheId field"
feature_slug: "cloud-cdn-request-log-cacheid-field"
latest_feature_date: "2020-04-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/cdn/docs/logging"
  - "https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring"
  - "https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-bucket"
keywords:
  - "cacheid"
  - "include"
  - "field"
  - "logs"
  - "request"
---

# Cloud CDN request log cacheId field

Product: Cloud CDN
Coverage: MEDIUM

## Step 02 Summary

Cloud CDN request logs now include a cacheId field that identifies the edge cache node and location used to serve a response.

## Extended Definition

Cloud CDN request logs now include a cacheId field that identifies the edge cache node and location used to serve a response.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/cdn/docs/logging](https://docs.cloud.google.com/cdn/docs/logging)
- [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)
- [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-bucket](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-bucket)

## Supporting Pages

### Logs and metrics for caching \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/logging](https://docs.cloud.google.com/cdn/docs/logging)
- Source ID: `site-docs-reference-2`
- Final score: 144
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Request served from the backend To confirm that a request is served from a Cloud CDN-enabled backend, there are three main fields to look for, as follows: httpRequest : When a request is served from a backend, you can see that the cache is filled and you can confirm the request URL. cacheFillBytes: NUMBER OF BYTES cacheLookup: True requestURL : URL jsonPayload : From the statusDetails field, you can confirm that the response was served by the backend. statusDetails: "response sent by backend" Request served from cache The following log entry shows a cache hit. { insertId: "1oek5rg3l3fxj7" jsonPayload: { @type: "type.googleapis.com/google.cloud.loadbalancing.type.LoadBalancerLogEntry" cacheId: "SFO-fbae48ad" statusDetails: "response from cache" } httpRequest: { requestMethod: "GET" requestUrl: "http:// LOAD BALANCER IP ADDRESS /static/us/three-cats.jpg" requestSize: "577" status: 304 responseSize: "157" userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10 14 6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36" remoteIp: " CLIENT IP ADDRESS " cacheHit: true cacheLookup: true } resource: { type: "http load balancer" labels: { zone: "global" url map name: " URL MAP NAME " forwarding rule name: " FORWARDING RULE NAME " target proxy name: " TARGET PROXY NAME " backend service name: "" project id: " PROJECT ID " } } timestamp: "2020-06-08T23:41:30.078651Z" severity: "INFO" logName: "projects/ PROJECT ID /logs/requests" trace: "projects/ PROJECT ID /traces/241d69833e64b3bf83fabac8c873d992" receiveTimestamp: "2020-06-08T23:41:30.588272510Z" spanId: "7b6537d3672e08e1" } What is logged In addition to general information contained in most logs, such as severity, project ID, project number, and timestamp, the external Application Load Balancer and Cloud CDN logs contain the following: The HttpRequest log field, which captures the HTTP status code, bytes returned, and whether a cache lookup or cache fill was performed.
- To learn about the fields that are included in the httpRequest log entry, see HttpRequest .
- A backend can be a Cloud Storage bucket, a Compute Engine VM group, or an external backend. histogram quantile( 0.95, sum by (proxy continent, le) ( rate({"loadbalancing.googleapis.com/https/frontend tcp rtt bucket", monitored resource="https lb rule", backend target name="example-backend" }[1m]) ) ) Request count broken out by response code class for Cloud CDN-enabled backends This query breaks out traffic by response code class (2xx, 3xx, 4xx, 5xx) to help separate client successes, client errors, and server errors. sum by (response code class) ( count over time( {"loadbalancing.googleapis.com/https/request count", monitored resource="https lb rule", cache result!="DISABLED" }[1h] ) ) Request count broken out by country of origin This query shows traffic broken out by country of origin, which is determined by using client IP addresses. sum by (client country) ( rate({"loadbalancing.googleapis.com/https/request count", monitored resource="https lb rule"}[1m]) ) What's next To learn more about logging, including how to export logs to BigQuery, Pub/Sub, or Cloud Storage, and how to configure logs-based metrics for monitoring and alerting, see the Cloud Logging documentation .
- You can filter on the following fields to determine the cache hit, miss, or revalidation status of a request served by Cloud CDN: Cache Hit jsonPayload.statusDetails=("response from cache" OR "byte range caching") or httpRequest.cacheHit=true httpRequest.cacheValidatedWithOriginServer!=true Cache Hit Validated With Origin Server jsonPayload.statusDetails="response from cache validated" or httpRequest.cacheHit=true httpRequest.cacheValidatedWithOriginServer=true Cache Miss jsonPayload.statusDetails="response sent by backend" or httpRequest.cacheHit!=true httpRequest.cacheLookup=true Alternatively, you can observe the cache status from the client side by configuring a custom response header with cdn cache status .

### "Logs and metrics for backend services \_|\_ Cloud CDN \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)
- Source ID: `site-docs-root-2`
- Final score: 127
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Updating logging optional mode from CUSTOM to others gcloud compute backend-services update BACKEND SERVICE \ --global \ --enable-logging \ --logging-sample-rate= VALUE \ --logging-optional= LOGGING OPTIONAL MODE \ --logging-optional-fields= where --logging-optional lets you specify the optional fields that you want to include in the logs: INCLUDE ALL OPTIONAL to include all optional fields.
- CUSTOM to include a custom list of optional fields that you specify in OPTIONAL FIELDS . --logging-optional-fields lets you specify a comma-separated list of optional fields that you want to include in the logs.
- CUSTOM to include a custom list of optional fields that you specify in OPTIONAL FIELDS . --logging-optional-fields lets you specify a comma-separated list of optional fields that you want to include in the logs.
- CUSTOM to include a custom list of optional fields that you specify in OPTIONAL FIELDS . --logging-optional-fields lets you specify a comma-separated list of optional fields that you want to include in the logs.

### Set up a backend bucket \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-bucket](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-bucket)
- Source ID: `site-docs-reference-2`
- Final score: 92
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Logs Explorer { insertId: "1oek5rg3l3fxj7" jsonPayload: { @type: "type.googleapis.com/google.cloud.loadbalancing.type.LoadBalancerLogEntry" cacheId: "SFO-fbae48ad" statusDetails: "response from cache" } httpRequest: { requestMethod: "GET" requestUrl: "http:// LOAD BALANCER IP ADDRESS /never-fetch/three-cats.jpg" requestSize: "577" status: 254 responseSize: "157" userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10 14 6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36" remoteIp: " CLIENT IP ADDRESS " cacheHit: true cacheLookup: true } resource: { type: "http load balancer" labels: { zone: "global" url map name: " URL MAP NAME " forwarding rule name: " FORWARDING RULE NAME " target proxy name: " TARGET PROXY NAME " backend service name: "" project id: " PROJECT ID " } } timestamp: "2020-06-08T23:41:25.078651Z" severity: "INFO" logName: "projects/ PROJECT ID /logs/requests" trace: "projects/ PROJECT ID /traces/241d69833e64b3bf83fabac8c873d992" receiveTimestamp: "2020-06-08T23:41:25.588272510Z" spanId: "7b6537d3672e08e1" } Console Note: For global external Application Load Balancers, the Google Cloud console isn't supported.
- Note the IPv4 address that was reserved: gcloud compute addresses describe example-ip \ --format="get(address)" \ --global Send a curl request: curl -D- -o /dev/null /dev/null http:// IP ADDRESS /never-fetch/three-cats.jpg Content is fetched from Cloud Storage, cached by Cloud CDN, and then validated and re-fetched when it expires or is otherwise evicted from the cache.
- Note the IPv4 address that was reserved: gcloud compute addresses describe example-ip \ --format="get(address)" \ --global Send a curl request: curl http:// IP ADDRESS /never-fetch/three-cats.jpg Verify that Cloud CDN is working If you reload the http:// IP ADDRESS /never-fetch/three-cats.jpg page several times in quick succession, there should be several cache hits.
- Property Value (type a value or select an option as specified) Protocol HTTP Network Service Tier Premium IP version IPv4 IP address example-ip Port 80 If you want to create an HTTPS load balancer instead of an HTTP load balancer, you must have an SSL certificate ( gcloud compute ssl-certificates list ), and you must fill in the fields as follows.

