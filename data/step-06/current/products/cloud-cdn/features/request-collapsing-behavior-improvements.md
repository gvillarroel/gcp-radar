---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:27:19.896Z"
product_name: "Cloud CDN"
product_slug: "cloud-cdn"
feature_name: "Request collapsing behavior improvements"
feature_slug: "request-collapsing-behavior-improvements"
latest_feature_date: "2020-09-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/cdn/docs/caching"
  - "https://docs.cloud.google.com/cdn/docs/release-notes"
  - "https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-third-party-storage"
keywords:
  - "request"
  - "collapsing"
  - "behavior"
  - "improvements"
  - "cdn"
  - "improved"
  - "to"
  - "reduce"
---

# Request collapsing behavior improvements

Product: Cloud CDN
Coverage: LOW

## Step 02 Summary

Cloud CDN improved request collapsing to reduce origin load during revalidation and cache fill operations.

## Extended Definition

Cloud CDN improved request collapsing to reduce origin load during revalidation and cache fill operations.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- [https://docs.cloud.google.com/cdn/docs/release-notes](https://docs.cloud.google.com/cdn/docs/release-notes)
- [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-third-party-storage](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-third-party-storage)

## Supporting Pages

### Caching overview \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Request type Default behavior Configurable Benefits of collapsing Chunk requests Enabled No Can significantly reduce origin bandwidth Item requests Enabled Yes Can reduce origin request volume To disable item request collapsing using the Google Cloud CLI for a backend bucket that references a Cloud Storage bucket: Note: Google Cloud CLI support for the --request-coalescing flag was introduced in Google Cloud CLI version 330.0.0 . gcloud Use the gcloud compute backend-services or backend-buckets command: gcloud compute backend-services update BACKEND SERVICE NAME \ --no-request-coalescing To enable item request collapsing on a backend bucket using the Google Cloud CLI: gcloud Use the gcloud compute backend-buckets command: gcloud compute backend-buckets update BACKEND BUCKET NAME \ --request-coalescing To enable item request collapsing using the Google Cloud CLI for a backend service, including VM groups and external backends: gcloud Use the gcloud compute backend-services command: gcloud compute backend-services update BACKEND SERVICE NAME \ --request-coalescing Requests initiated by Cloud CDN When your origin server supports byte range requests , Cloud CDN can send multiple requests to your origin server in reaction to a single client request.
- This can actively reduce the load on the origin, and applies to both item requests (responses fetched directly) and chunk requests , where Cloud CDN uses Range requests to fetch larger objects more efficiently.
- The following diagram shows how requests are coalesced: Cloud CDN with request collapsing enabled (click to enlarge).
- Cloud CDN without request collapsing enabled (click to enlarge).

### Cloud CDN release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/release-notes](https://docs.cloud.google.com/cdn/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- September 29, 2020 Feature Improvements to Cloud CDN's request collapsing behavior: If your deployment serves large objects, these improvements reduce origin load during revalidation and cache fill.
- November 13, 2025 Feature Cloud CDN lets you add custom code to the request processing path of global external Application Load Balancers by using Service Extensions edge extensions (pre-cache) and traffic extensions (post-cache).
- June 23, 2025 Feature Cloud CDN lets you add custom code to the request processing path of global external Application Load Balancers by using Service Extensions edge extensions.
- This capability allows you to use wildcards anywhere in your path matcher and customize origin routing for different types of traffic and request and response behaviors.

### Set up third-party object storage \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-third-party-storage](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-third-party-storage)
- Source ID: `site-docs-root`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- If everything looks correct, click Update . gcloud Create a new backend service for the NEG: gcloud compute backend-services create images \ --global \ --enable-cdn \ --cache-mode= CACHE MODE \ --protocol=HTTP2 Set the cache mode by replacing CACHE MODE with one of the following: CACHE ALL STATIC : automatically caches static content USE ORIGIN HEADERS (default): requires the origin to set valid caching headers to cache content FORCE CACHE ALL : caches all content, ignoring any private , no-store , or no-cache directives in Cache-Control response headers Configure the backend service to add the custom request header Host: backend.example.com to the request: gcloud compute backend-services update images \ --custom-request-header "Host: backend.example.com" --global Use the backend-services add-backend command to add the internet NEG to the backend service: gcloud compute backend-services add-backend images \ --network-endpoint-group "example-fqdn-neg" \ --global-network-endpoint-group \ --global Attach the new backend service to the load balancer's URL map by creating a new matching rule to direct requests to that backend: gcloud compute url-maps add-path-matcher EXAMPLE URL MAP \ --default-service= GCP SERVICE EXAMPLE \ --path-matcher-name= CUSTOM ORIGIN PATH MATCHER EXAMPLE \ --backend-service-path-rules= /CART/ID/1223515 = IMAGES Replace the following: EXAMPLE URL MAP : the name of your existing URL map GCP SERVICE EXAMPLE : the name of an existing default backend service CUSTOM ORIGIN PATH MATCHER EXAMPLE : the name of this new path rule /CART/ID/1223515 : the path IMAGES : the name of the new backend service with the attached internet NEG Allowlist the necessary IP ranges To allow an external Application Load Balancer to send requests to your internet NEG, you must query the cloud-eoips.googleusercontent.com DNS TXT record by using a tool like dig or nslookup .
- 200 OK Length: 3447106 (3.3M) [image/jpeg] Saving to: '/cart/id/1223515/image.jpg.47' /cart/id/1223515/image.jpg.47 100%[==============================================================================================================================================>] 3.29M 6.25MB/s in 0.5s 2020-06-26 18:22:47 (6.25 MB/s) - '/cart/id/1223515/image.jpg.47' saved [3447106/3447106] real 0m0.780s user 0m0.003s sys 0m0.012s Test 2: First request through Cloud CDN This test uses the load balancer's IP address to retrieve the /cart/id/1223515/image.jpg file.
- 200 OK Length: 3447106 (3.3M) [image/jpeg] Saving to: '/cart/id/1223515/image.jpg.44' /cart/id/1223515/image.jpg.44 100%[==============================================================================================================================================>] 3.29M 8.23MB/s in 0.4s 2020-06-26 18:19:28 (8.23 MB/s) - '/cart/id/1223515/image.jpg.44' saved [3447106/3447106] real 0m0.844s user 0m0.003s sys 0m0.012s Test 3: Second request through CDN Now we will make one more request using this load balancer IP.
- 200 OK Length: 3447106 (3.3M) [image/jpeg] Saving to: '/cart/id/1223515/image.jpg.45' /cart/id/1223515/image.jpg.45 100%[==============================================================================================================================================>] 3.29M --.-KB/s in 0.008s 2020-06-26 18:19:29 (423 MB/s) - '/cart/id/1223515/image.jpg.45' saved [3447106/3447106] real 0m0.018s user 0m0.001s sys 0m0.010s Verify by using logs Logs for Cloud CDN are associated with the external Application Load Balancer that your Cloud CDN-enabled backends are attached to.

