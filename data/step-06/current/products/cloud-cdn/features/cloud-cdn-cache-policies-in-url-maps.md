---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T14:23:30.340Z"
product_name: "Cloud CDN"
product_slug: "cloud-cdn"
feature_name: "Cloud CDN cache policies in URL maps"
feature_slug: "cloud-cdn-cache-policies-in-url-maps"
latest_feature_date: "2026-03-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/cdn/docs/caching"
  - "https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-mig"
  - "https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-bucket"
keywords:
  - "policies"
  - "policy"
  - "maps"
  - "configuration"
  - "adds"
  - "cache"
---

# Cloud CDN cache policies in URL maps

Product: Cloud CDN
Coverage: MEDIUM

## Step 02 Summary

Cloud CDN adds cache policy configuration in global external HTTP(S) Load Balancer URL maps with granular rules based on hostname, path, headers, and query parameters.

## Extended Definition

Cloud CDN adds cache policy configuration in global external HTTP(S) Load Balancer URL maps with granular rules based on hostname, path, headers, and query parameters.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-mig](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-mig)
- [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-bucket](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-bucket)

## Supporting Pages

### Caching overview \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- Source ID: `site-docs-reference-2`
- Final score: 164
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can configure cache policies in URL maps when: a single backend serves different types of content different paths require different caching behavior you want to enable caching for specific routes only For details on how to configure cache policies in URL map, see Configure a Cloud CDN cache policy .
- Cache policy configuration methods Depending on how much control you need over caching behavior, you can configure caching behavior for Cloud CDN at the backend service, backend bucket, or at a more granular level in URL maps.
- Cloud CDN doesn't allow the following headers to be included in the list of headers: Accept Accept-Encoding Authority , because this is controlled by configuration ( cdnPolicy.includeHost ) Authorization , typically per-user as in OAuth Bearer tokens CDN-Loop Connection Content-MD5 Content-Type Cookie Date Forwarded , often per-client or per-proxy From Host , because this is controlled by configuration ( cdnPolicy.includeHost ) If-Match , If-Modified-Since , or If-None-Match Origin Proxy-Authorization Range Referer (or Referrer ) User-Agent Want-Digest X-CSRFToken and X-CSRF-Token as used by Django and Ruby on Rails X-Forwarded-For , often per-client or per-proxy X-User-IP Any header starting with the following: Access-Control- , such as Access-Control-Request-Headers and Access-Control-Request-Method Sec-Fetch- Sec-GFE- Sec-Google- X-Amz- X-GFE- X-Goog- X-Google- Use custom variables with request headers Cache keys are helpful when you need to serve content differently based on each user's device and location.
- Cache policies in URL maps Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .

### "Set up a managed instance group backend \_|\_ Cloud CDN \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-mig](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-mig)
- Source ID: `site-docs-reference-2`
- Final score: 144
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To set up cache policies in URL maps, see Configure a Cloud CDN cache policy .
- To create a global SSL policy: gcloud compute ssl-policies create my-ssl-policy \ --profile MODERN \ --min-tls-version 1.0 To attach the SSL policy to the global target HTTPS proxy: gcloud compute target-https-proxies update https-lb-proxy \ --ssl-policy my-ssl-policy Set up an HTTP frontend Skip this section for HTTPS load balancers.
- If you have not created any SSL policies, a default SSL policy is applied.
- On the Load balancer details screen, note the IP:Port for your load balancer. gcloud Create a health check. gcloud compute health-checks create http http-basic-check \ --port 80 Create a backend service. gcloud compute backend-services create web-backend-service \ --load-balancing-scheme=EXTERNAL \ --protocol=HTTP \ --port-name=http \ --health-checks=http-basic-check \ --global Add your instance group as the backend to the backend service. gcloud beta compute backend-services add-backend web-backend-service \ --instance-group=lb-backend-example \ --instance-group-zone= ZONE A \ --global For HTTP, create a URL map to route the incoming requests to the default backend service. gcloud beta compute url-maps create web-map-http \ --default-service web-backend-service For HTTPS, create a URL map to route the incoming requests to the default backend service. gcloud beta compute url-maps create web-map-https \ --default-service web-backend-service Set up an HTTPS frontend Skip this section for HTTP load balancers.

### Set up a backend bucket \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-bucket](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-bucket)
- Source ID: `site-docs-reference-2`
- Final score: 140
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To set up cache policies in URL maps, see Configure a Cloud CDN cache policy .
- For an classic Application Load Balancer, use load-balancing-scheme=EXTERNAL . gcloud compute forwarding-rules create http-lb-forwarding-rule \ --load-balancing-scheme= LOAD BALANCING SCHEME \ --network-tier=PREMIUM \ --address=example-ip \ --global \ --target-http-proxy=http-lb-proxy \ --ports=80 Terraform Configure the backend To configure the backend, use the google compute backend bucket resource . backend bucket with CDN policy with default ttl settings resource "google compute backend bucket" "default" { name = "cat-backend-bucket" description = "Contains beautiful images" bucket name = google storage bucket.default.name enable cdn = true cdn policy { cache mode = "CACHE ALL STATIC" client ttl = 3600 default ttl = 3600 max ttl = 86400 negative caching = true serve while stale = 86400 } } Configure the URL map To configure the backend, use the google compute url map resource . url map resource "google compute url map" "default" { name = "http-lb" default service = google compute backend bucket.default.id } Configure the target proxy To configure the target proxy, use the google compute target http proxy resource or the google compute target https proxy resource . http proxy resource "google compute target http proxy" "default" { name = "http-lb-proxy" url map = google compute url map.default.id } Configure the forwarding rule To configure the forwarding rule, use the google compute global forwarding rule resource . forwarding rule resource "google compute global forwarding rule" "default" { name = "http-lb-forwarding-rule" ip protocol = "TCP" load balancing scheme = "EXTERNAL" port range = "80" target = google compute target http proxy.default.id ip address = google compute global address.default.id } For a global external Application Load Balancer, use with load balancing scheme="EXTERNAL MANAGED" .
- Click Save . gcloud gcloud storage buckets add-iam-policy-binding gs:// BUCKET NAME --member=allUsers --role=roles/storage.objectViewer Terraform To make your Cloud Storage bucket public, use the google storage bucket iam member resource . make bucket public resource "google storage bucket iam member" "default" { bucket = google storage bucket.default.name role = "roles/storage.objectViewer" member = "allUsers" } To learn how to apply or remove a Terraform configuration, see Basic Terraform commands .
- Logs Explorer { insertId: "1oek5rg3l3fxj7" jsonPayload: { @type: "type.googleapis.com/google.cloud.loadbalancing.type.LoadBalancerLogEntry" cacheId: "SFO-fbae48ad" statusDetails: "response from cache" } httpRequest: { requestMethod: "GET" requestUrl: "http:// LOAD BALANCER IP ADDRESS /never-fetch/three-cats.jpg" requestSize: "577" status: 254 responseSize: "157" userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10 14 6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36" remoteIp: " CLIENT IP ADDRESS " cacheHit: true cacheLookup: true } resource: { type: "http load balancer" labels: { zone: "global" url map name: " URL MAP NAME " forwarding rule name: " FORWARDING RULE NAME " target proxy name: " TARGET PROXY NAME " backend service name: "" project id: " PROJECT ID " } } timestamp: "2020-06-08T23:41:25.078651Z" severity: "INFO" logName: "projects/ PROJECT ID /logs/requests" trace: "projects/ PROJECT ID /traces/241d69833e64b3bf83fabac8c873d992" receiveTimestamp: "2020-06-08T23:41:25.588272510Z" spanId: "7b6537d3672e08e1" } Console Note: For global external Application Load Balancers, the Google Cloud console isn't supported.

