---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T14:23:30.374Z"
product_name: "Cloud CDN"
product_slug: "cloud-cdn"
feature_name: "Cloud CDN TLS v1.3 by default"
feature_slug: "cloud-cdn-tls-v1-3-by-default"
latest_feature_date: "2020-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/cdn/docs/caching"
  - "https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring"
  - "https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-external-origin"
keywords:
  - "applicable"
  - "default"
  - "enabled"
  - "external"
  - "load"
---

# Cloud CDN TLS v1.3 by default

Product: Cloud CDN
Coverage: MEDIUM

## Step 02 Summary

Cloud CDN is enabled for TLS v1.3 by default on applicable external load balancer integrations.

## Extended Definition

Cloud CDN is enabled for TLS v1.3 by default on applicable external load balancer integrations.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)
- [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-external-origin](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-external-origin)

## Supporting Pages

### "Logs and metrics for backend services \_|\_ Cloud CDN \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)
- Source ID: `site-docs-root-2`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- This information is only available for global external Application Load Balancers that have enabled authorization policies .
- For external Application Load Balancers with backend buckets , logging is automatically enabled and cannot be disabled.
- Request count loadbalancing.googleapis.com/https/request count The number of requests served by the external Application Load Balancer Request bytes count loadbalancing.googleapis.com/https/request bytes count The number of bytes sent as requests from clients to the external Application Load Balancer Response bytes count loadbalancing.googleapis.com/https/response bytes count The number of bytes sent as responses from the external Application Load Balancer to clients Total latencies loadbalancing.googleapis.com/https/total latencies A distribution of the total latency.
- To finish editing the load balancer, click Update . gcloud Create a backend service and enable logging by using the gcloud compute backend-services create command . gcloud compute backend-services create BACKEND SERVICE \ --global \ --enable-logging \ --logging-sample-rate= VALUE \ --load-balancing-scheme=EXTERNAL MANAGED \ --logging-optional= LOGGING OPTIONAL MODE \ --logging-optional-fields= OPTIONAL FIELDS The gcloud compute backend-services create command supports the following fields: --global indicates that the backend service is global.

### Caching overview \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- Source ID: `site-docs-reference-2`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- Request type Default behavior Configurable Benefits of collapsing Chunk requests Enabled No Can significantly reduce origin bandwidth Item requests Enabled Yes Can reduce origin request volume To disable item request collapsing using the Google Cloud CLI for a backend bucket that references a Cloud Storage bucket: Note: Google Cloud CLI support for the --request-coalescing flag was introduced in Google Cloud CLI version 330.0.0 . gcloud Use the gcloud compute backend-services or backend-buckets command: gcloud compute backend-services update BACKEND SERVICE NAME \ --no-request-coalescing To enable item request collapsing on a backend bucket using the Google Cloud CLI: gcloud Use the gcloud compute backend-buckets command: gcloud compute backend-buckets update BACKEND BUCKET NAME \ --request-coalescing To enable item request collapsing using the Google Cloud CLI for a backend service, including VM groups and external backends: gcloud Use the gcloud compute backend-services command: gcloud compute backend-services update BACKEND SERVICE NAME \ --request-coalescing Requests initiated by Cloud CDN When your origin server supports byte range requests , Cloud CDN can send multiple requests to your origin server in reaction to a single client request.
- Attribute Requirement Served by Backend service or external backend that doesn't have Cloud CDN enabled Cookie Has a Set-Cookie header Vary header Has a value other than Accept , Accept-Encoding , Access-Control-Request-Headers , Access-Control-Request-Method , Origin , Sec-Fetch-Dest , Sec-Fetch-Mode , Sec-Fetch-Site , X-Goog-Allowed-Resources , X-Origin , or one of the headers that are configured to be part of the cache key settings .
- Attribute Requirement Served by Backend service, backend bucket, or an external backend with Cloud CDN enabled In response to GET request Status code 200 , 203 , 204 , 206 , 300 , 301 , 302 , 307 , 308 , 404 , 405 , 410 , 421 , 451 , or 501 .
- Note: Setting cache policies at various levels of the URL map is supported only for the global external Application Load Balancer, and not for the classic Application Load Balancer.

### "Set up an external backend with an internet NEG \_|\_ Cloud CDN \_|\_ Google\

- URL: [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-external-origin](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-external-origin)
- Source ID: `site-docs-reference-2`
- Final score: 113
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If everything looks correct, click Update . gcloud Create a new backend service for the NEG: gcloud compute backend-services create images \ --global \ --enable-cdn \ --cache-mode= CACHE MODE \ --protocol=HTTP2 Set the cache mode by replacing CACHE MODE with one of the following: CACHE ALL STATIC : automatically caches static content USE ORIGIN HEADERS (default): requires the origin to set valid caching headers to cache content FORCE CACHE ALL : caches all content, ignoring any private , no-store , or no-cache directives in Cache-Control response headers Configure the backend service to add the custom request header Host: backend.example.com to the request: gcloud compute backend-services update images \ --custom-request-header "Host: backend.example.com" --global Use the backend-services add-backend command to add the internet NEG to the backend service: gcloud compute backend-services add-backend images \ --network-endpoint-group "example-fqdn-neg" \ --global-network-endpoint-group \ --global Attach the new backend service to the load balancer's URL map by creating a new matching rule to direct requests to that backend: gcloud compute url-maps add-path-matcher EXAMPLE URL MAP \ --default-service= GCP SERVICE EXAMPLE \ --path-matcher-name= CUSTOM ORIGIN PATH MATCHER EXAMPLE \ --backend-service-path-rules= /CART/ID/1223515 = IMAGES Replace the following: EXAMPLE URL MAP : the name of your existing URL map GCP SERVICE EXAMPLE : the name of an existing default backend service CUSTOM ORIGIN PATH MATCHER EXAMPLE : the name of this new path rule /CART/ID/1223515 : the path IMAGES : the name of the new backend service with the attached internet NEG Allowlist the necessary IP ranges To allow an external Application Load Balancer to send requests to your internet NEG, you must query the cloud-eoips.googleusercontent.com DNS TXT record by using a tool like dig or nslookup .
- The guide steps through how to configure a global external Application Load Balancer with a Cloud CDN-enabled backend service that proxies to an external backend server at backend.example.com .
- Make sure to include the --global flag: gcloud compute network-endpoint-groups update example-fqdn-neg \ --add-endpoint="fqdn=backend.example.com,port=443" \ --global List the created internet NEG: gcloud compute network-endpoint-groups list --global Output: NAME LOCATION ENDPOINT TYPE SIZE example-fqdn-neg global INTERNET FQDN PORT 1 List the endpoint within that NEG: gcloud compute network-endpoint-groups list-network-endpoints example-fqdn-neg \ --global Output: INSTANCE IP ADDRESS PORT FQDN backend.example.com Add an external backend to a load balancer The following example updates an existing load balancer.
- Task Required role Create and modify load balancer components Network Admin Create and modify NEGs Compute Instance Admin Configure a load balancer with an external backend This section shows you how to configure and test an internet NEG.

