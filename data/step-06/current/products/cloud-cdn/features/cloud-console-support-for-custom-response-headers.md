---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T14:23:30.363Z"
product_name: "Cloud CDN"
product_slug: "cloud-cdn"
feature_name: "Cloud Console support for custom response headers"
feature_slug: "cloud-console-support-for-custom-response-headers"
latest_feature_date: "2020-11-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/cdn/docs/caching"
  - "https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-third-party-storage"
  - "https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring"
keywords:
  - "setting"
  - "console"
  - "response"
  - "headers"
  - "custom"
  - "supports"
---

# Cloud Console support for custom response headers

Product: Cloud CDN
Coverage: MEDIUM

## Step 02 Summary

Cloud Console now supports setting custom response headers for Cloud CDN.

## Extended Definition

Cloud Console now supports setting custom response headers for Cloud CDN.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-third-party-storage](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-third-party-storage)
- [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)

## Supporting Pages

### Caching overview \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- Source ID: `site-docs-reference-2`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- For example, if you could specify X-Lat-Long:{client city lat long} as a custom request header and then add X-Lat-Long to your set of cache key headers, Cloud CDN would attempt to cache one copy of the response for each value of client city lat long .
- Custom response headers With custom response headers , you can specify headers that the classic Application Load Balancer adds to proxied responses.
- Custom response headers let you reflect the cache status to your clients, client geographic data, and your own static response headers.
- For instructions, see Configure custom response headers .

### Set up third-party object storage \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-third-party-storage](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-third-party-storage)
- Source ID: `site-docs-root`
- Final score: 155
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If everything looks correct, click Update . gcloud Create a new backend service for the NEG: gcloud compute backend-services create images \ --global \ --enable-cdn \ --cache-mode= CACHE MODE \ --protocol=HTTP2 Set the cache mode by replacing CACHE MODE with one of the following: CACHE ALL STATIC : automatically caches static content USE ORIGIN HEADERS (default): requires the origin to set valid caching headers to cache content FORCE CACHE ALL : caches all content, ignoring any private , no-store , or no-cache directives in Cache-Control response headers Configure the backend service to add the custom request header Host: backend.example.com to the request: gcloud compute backend-services update images \ --custom-request-header "Host: backend.example.com" --global Use the backend-services add-backend command to add the internet NEG to the backend service: gcloud compute backend-services add-backend images \ --network-endpoint-group "example-fqdn-neg" \ --global-network-endpoint-group \ --global Attach the new backend service to the load balancer's URL map by creating a new matching rule to direct requests to that backend: gcloud compute url-maps add-path-matcher EXAMPLE URL MAP \ --default-service= GCP SERVICE EXAMPLE \ --path-matcher-name= CUSTOM ORIGIN PATH MATCHER EXAMPLE \ --backend-service-path-rules= /CART/ID/1223515 = IMAGES Replace the following: EXAMPLE URL MAP : the name of your existing URL map GCP SERVICE EXAMPLE : the name of an existing default backend service CUSTOM ORIGIN PATH MATCHER EXAMPLE : the name of this new path rule /CART/ID/1223515 : the path IMAGES : the name of the new backend service with the attached internet NEG Allowlist the necessary IP ranges To allow an external Application Load Balancer to send requests to your internet NEG, you must query the cloud-eoips.googleusercontent.com DNS TXT record by using a tool like dig or nslookup .
- For example: curl -s 'https://www.example.com:443' --resolve www.example.com:443: IP ADDRESS Optional: If you are using a custom domain, you might need to wait for the updated DNS settings to propagate.
- For general information about custom headers, see Configure custom request headers .
- In Advanced configurations , under Custom request headers , click Add header .

### "Logs and metrics for backend services \_|\_ Cloud CDN \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)
- Source ID: `site-docs-root-2`
- Final score: 149
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This information is only available for global external Application Load Balancers using custom error responses . string Optional The cachePolicySource field holds the source of the caching policy that governs the caching behavior for a specific request: CACHE POLICY SOURCE ROUTE : A cache policy can be applied at different levels of the URL map, and that allows for more granular control over caching.
- This information is only available for global external Application Load Balancers using custom error responses . string Required The errorBackendStatusDetails field holds the statusDetails of the final response served to the client.
- This information is only available for global external Application Load Balancers using custom error responses . string Required The errorService field holds the backend service that provided the custom error response.
- Often 502 , 503 . backend response headers too long The HTTP response headers sent by the backend exceeded the allowed limit.

