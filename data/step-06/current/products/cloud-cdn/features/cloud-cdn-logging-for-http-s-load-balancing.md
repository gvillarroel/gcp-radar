---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T14:23:30.369Z"
product_name: "Cloud CDN"
product_slug: "cloud-cdn"
feature_name: "Cloud CDN logging for HTTP(S) Load Balancing"
feature_slug: "cloud-cdn-logging-for-http-s-load-balancing"
latest_feature_date: "2020-06-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring"
  - "https://docs.cloud.google.com/cdn/docs/logging"
  - "https://docs.cloud.google.com/cdn/docs/setting-up-http-https-redirect"
keywords:
  - "logging"
  - "served"
  - "balancing"
  - "traffic"
  - "available"
  - "http"
  - "load"
---

# Cloud CDN logging for HTTP(S) Load Balancing

Product: Cloud CDN
Coverage: MEDIUM

## Step 02 Summary

Cloud CDN logging is available for traffic served through HTTP(S) Load Balancing.

## Extended Definition

Cloud CDN logging is available for traffic served through HTTP(S) Load Balancing.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)
- [https://docs.cloud.google.com/cdn/docs/logging](https://docs.cloud.google.com/cdn/docs/logging)
- [https://docs.cloud.google.com/cdn/docs/setting-up-http-https-redirect](https://docs.cloud.google.com/cdn/docs/setting-up-http-https-redirect)

## Supporting Pages

### "Logs and metrics for backend services \_|\_ Cloud CDN \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)
- Source ID: `site-docs-root-2`
- Final score: 205
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Multiple queries are sent to the same backend for different chunks of data to support a single client request. proxy continent Continent of the HTTP(S) GFE that terminated the HTTP(S) connection—for example, America , Europe , Asia protocol Protocol used by the client, one of HTTP/1.0 , HTTP/1.1 , HTTP/2.0 , QUIC/HTTP/2.0 , UNKNOWN . response code The HTTP status code of the request. response code class The HTTP status code class of the request: 200 , 300 , 400 , 500 or 0 for none. cache result Cache result for serving HTTP request by proxy: HIT , MISS , DISABLED , PARTIAL HIT (for a request served partially from cache and partially from backend), or UNKNOWN . client country Country of the client that issued the HTTP request—for example, United States or Germany . load balancing scheme The load balancing scheme used.
- Request count loadbalancing.googleapis.com/https/request count The number of requests served by the external Application Load Balancer Request bytes count loadbalancing.googleapis.com/https/request bytes count The number of bytes sent as requests from clients to the external Application Load Balancer Response bytes count loadbalancing.googleapis.com/https/response bytes count The number of bytes sent as responses from the external Application Load Balancer to clients Total latencies loadbalancing.googleapis.com/https/total latencies A distribution of the total latency.
- To finish editing the load balancer, click Update . gcloud Create a backend service and enable logging by using the gcloud compute backend-services create command . gcloud compute backend-services create BACKEND SERVICE \ --global \ --enable-logging \ --logging-sample-rate= VALUE \ --load-balancing-scheme=EXTERNAL MANAGED \ --logging-optional= LOGGING OPTIONAL MODE \ --logging-optional-fields= OPTIONAL FIELDS The gcloud compute backend-services create command supports the following fields: --global indicates that the backend service is global.
- The JSON object contains the following fields: statusDetails backendTargetProjectNumber cachePolicySource overrideResponseCode errorService errorBackendStatusDetails authzPolicyInfo loadBalancingScheme tls orca load report string Required The statusDetails field holds a string that explains why the load balancer returned the HTTP status code that it did.

### Logs and metrics for caching \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/logging](https://docs.cloud.google.com/cdn/docs/logging)
- Source ID: `site-docs-reference-2`
- Final score: 197
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- A backend can be a Cloud Storage bucket, a Compute Engine VM group, or an external backend. histogram quantile( 0.95, sum by (proxy continent, le) ( rate({"loadbalancing.googleapis.com/https/frontend tcp rtt bucket", monitored resource="https lb rule", backend target name="example-backend" }[1m]) ) ) Request count broken out by response code class for Cloud CDN-enabled backends This query breaks out traffic by response code class (2xx, 3xx, 4xx, 5xx) to help separate client successes, client errors, and server errors. sum by (response code class) ( count over time( {"loadbalancing.googleapis.com/https/request count", monitored resource="https lb rule", cache result!="DISABLED" }[1h] ) ) Request count broken out by country of origin This query shows traffic broken out by country of origin, which is determined by using client IP addresses. sum by (client country) ( rate({"loadbalancing.googleapis.com/https/request count", monitored resource="https lb rule"}[1m]) ) What's next To learn more about logging, including how to export logs to BigQuery, Pub/Sub, or Cloud Storage, and how to configure logs-based metrics for monitoring and alerting, see the Cloud Logging documentation .
- Request served from the backend To confirm that a request is served from a Cloud CDN-enabled backend, there are three main fields to look for, as follows: httpRequest : When a request is served from a backend, you can see that the cache is filled and you can confirm the request URL. cacheFillBytes: NUMBER OF BYTES cacheLookup: True requestURL : URL jsonPayload : From the statusDetails field, you can confirm that the response was served by the backend. statusDetails: "response sent by backend" Request served from cache The following log entry shows a cache hit. { insertId: "1oek5rg3l3fxj7" jsonPayload: { @type: "type.googleapis.com/google.cloud.loadbalancing.type.LoadBalancerLogEntry" cacheId: "SFO-fbae48ad" statusDetails: "response from cache" } httpRequest: { requestMethod: "GET" requestUrl: "http:// LOAD BALANCER IP ADDRESS /static/us/three-cats.jpg" requestSize: "577" status: 304 responseSize: "157" userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10 14 6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36" remoteIp: " CLIENT IP ADDRESS " cacheHit: true cacheLookup: true } resource: { type: "http load balancer" labels: { zone: "global" url map name: " URL MAP NAME " forwarding rule name: " FORWARDING RULE NAME " target proxy name: " TARGET PROXY NAME " backend service name: "" project id: " PROJECT ID " } } timestamp: "2020-06-08T23:41:30.078651Z" severity: "INFO" logName: "projects/ PROJECT ID /logs/requests" trace: "projects/ PROJECT ID /traces/241d69833e64b3bf83fabac8c873d992" receiveTimestamp: "2020-06-08T23:41:30.588272510Z" spanId: "7b6537d3672e08e1" } What is logged In addition to general information contained in most logs, such as severity, project ID, project number, and timestamp, the external Application Load Balancer and Cloud CDN logs contain the following: The HttpRequest log field, which captures the HTTP status code, bytes returned, and whether a cache lookup or cache fill was performed.
- Request bytes count broken out by cache result This query focuses on backends that have Cloud CDN enabled, which is done by including cache result!="DISABLED" . sum by (cache result) ( rate({"loadbalancing.googleapis.com/https/response bytes count", monitored resource="https lb rule", cache result!="DISABLED"}[1m]) ) Client roundtrip TCP latency at 95% for a specific backend target This query includes backend target name="example-backend" , which narrows down traffic to the backend example-backend .
- You can filter on the following fields to determine the cache hit, miss, or revalidation status of a request served by Cloud CDN: Cache Hit jsonPayload.statusDetails=("response from cache" OR "byte range caching") or httpRequest.cacheHit=true httpRequest.cacheValidatedWithOriginServer!=true Cache Hit Validated With Origin Server jsonPayload.statusDetails="response from cache validated" or httpRequest.cacheHit=true httpRequest.cacheValidatedWithOriginServer=true Cache Miss jsonPayload.statusDetails="response sent by backend" or httpRequest.cacheHit!=true httpRequest.cacheLookup=true Alternatively, you can observe the cache status from the client side by configuring a custom response header with cdn cache status .

### Redirect HTTP requests to HTTPS \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/setting-up-http-https-redirect](https://docs.cloud.google.com/cdn/docs/setting-up-http-https-redirect)
- Source ID: `site-docs-reference-2`
- Final score: 190
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The --address flag specifies lb-ipv4-1 , which is the same IP address used for the external HTTPS load balancer. gcloud compute forwarding-rules create http-content-rule \ --load-balancing-scheme=EXTERNAL MANAGED \ --address=lb-ipv4-1 \ --network-tier=PREMIUM \ --global \ --target-http-proxy=http-lb-proxy \ --ports=80 Add a custom HSTS header When you add the HTTP Strict-Transport-Security header to your HTTPS load balancer's backend service, the load balancer sends the custom header to the client so that the next time the client tries to access the URL through HTTP, the browser redirects the request.
- For existing load balancers If you already have an HTTPS Application Load Balancer (called here LB1 ) that is serving HTTPS traffic on port 443, you must create a partial HTTP Application Load Balancer (called here LB2 ) with the following setup: The same frontend IP address used by LB1 A redirect configured in the URL map This partial HTTP load balancer uses the same IP address as your HTTPS load balancer and redirects HTTP requests to your load balancer's HTTPS frontend.
- Testing the HTTP-to-HTTPS redirect Note the reserved IP address that you are using for both load balancers. gcloud compute addresses describe lb-ipv4-1 --format="get(address)" --global Important: If LB1 and LB2 don't have the same IP address, the redirect won't work.
- Redirecting traffic to your HTTPS load balancer After you have verified that your HTTPS load balancer (LB1) is working, you can create the partial HTTP load balancer (LB2) with its frontend configured to redirect traffic to LB1.

