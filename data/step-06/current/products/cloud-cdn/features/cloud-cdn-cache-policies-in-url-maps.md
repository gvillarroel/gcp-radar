---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:27:19.857Z"
product_name: "Cloud CDN"
product_slug: "cloud-cdn"
feature_name: "Cloud CDN cache policies in URL maps"
feature_slug: "cloud-cdn-cache-policies-in-url-maps"
latest_feature_date: "2026-03-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/cdn/docs/caching"
  - "https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-mig"
  - "https://docs.cloud.google.com/cdn/docs/invalidating-cached-content"
keywords:
  - "cdn"
  - "cache"
  - "policies"
  - "in"
  - "url"
  - "maps"
  - "adds"
  - "policy"
---

# Cloud CDN cache policies in URL maps

Product: Cloud CDN
Coverage: LOW

## Step 02 Summary

Cloud CDN adds cache policy configuration in global external HTTP(S) Load Balancer URL maps with granular rules based on hostname, path, headers, and query parameters.

## Extended Definition

Cloud CDN adds cache policy configuration in global external HTTP(S) Load Balancer URL maps with granular rules based on hostname, path, headers, and query parameters.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-mig](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-mig)
- [https://docs.cloud.google.com/cdn/docs/invalidating-cached-content](https://docs.cloud.google.com/cdn/docs/invalidating-cached-content)

## Supporting Pages

### Caching overview \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can configure cache policies in URL maps when: a single backend serves different types of content different paths require different caching behavior you want to enable caching for specific routes only For details on how to configure cache policies in URL map, see Configure a Cloud CDN cache policy .
- Cache policy configuration methods Depending on how much control you need over caching behavior, you can configure caching behavior for Cloud CDN at the backend service, backend bucket, or at a more granular level in URL maps.
- Cache policies in URL maps Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Cloud CDN doesn't allow the following headers to be included in the list of headers: Accept Accept-Encoding Authority , because this is controlled by configuration ( cdnPolicy.includeHost ) Authorization , typically per-user as in OAuth Bearer tokens CDN-Loop Connection Content-MD5 Content-Type Cookie Date Forwarded , often per-client or per-proxy From Host , because this is controlled by configuration ( cdnPolicy.includeHost ) If-Match , If-Modified-Since , or If-None-Match Origin Proxy-Authorization Range Referer (or Referrer ) User-Agent Want-Digest X-CSRFToken and X-CSRF-Token as used by Django and Ruby on Rails X-Forwarded-For , often per-client or per-proxy X-User-IP Any header starting with the following: Access-Control- , such as Access-Control-Request-Headers and Access-Control-Request-Method Sec-Fetch- Sec-GFE- Sec-Google- X-Amz- X-GFE- X-Goog- X-Google- Use custom variables with request headers Cache keys are helpful when you need to serve content differently based on each user's device and location.

### "Set up a managed instance group backend \_|\_ Cloud CDN \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-mig](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-mig)
- Source ID: `site-docs-root`
- Final score: 194
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To set up cache policies in URL maps, see Configure a Cloud CDN cache policy .
- On the Load balancer details screen, note the IP:Port for your load balancer. gcloud Create a health check. gcloud compute health-checks create http http-basic-check \ --port 80 Create a backend service. gcloud compute backend-services create web-backend-service \ --load-balancing-scheme=EXTERNAL \ --protocol=HTTP \ --port-name=http \ --health-checks=http-basic-check \ --global Add your instance group as the backend to the backend service. gcloud beta compute backend-services add-backend web-backend-service \ --instance-group=lb-backend-example \ --instance-group-zone= ZONE A \ --global For HTTP, create a URL map to route the incoming requests to the default backend service. gcloud beta compute url-maps create web-map-http \ --default-service web-backend-service For HTTPS, create a URL map to route the incoming requests to the default backend service. gcloud beta compute url-maps create web-map-https \ --default-service web-backend-service Set up an HTTPS frontend Skip this section for HTTP load balancers.
- The proxy is the portion of the load balancer that holds the SSL certificate for an HTTPS load balancer, so you also load your certificate in this step. gcloud compute target-https-proxies create https-lb-proxy \ --url-map=web-map-https \ --ssl-certificates=www-ssl-cert For HTTPS, create a global forwarding rule to route incoming requests to the proxy. gcloud compute forwarding-rules create https-content-rule \ --load-balancing-scheme=EXTERNAL \ --network-tier=PREMIUM \ --address=lb-ipv4-1 \ --global \ --target-https-proxy=https-lb-proxy \ --ports=443 Optional: For HTTPS, create a global SSL policy and attach it to the HTTPS proxy.
- If your browser doesn't render this page, review the configuration settings in this guide. gcloud gcloud compute addresses describe lb-ipv4-1 \ --format="get(address)" \ --global After a few minutes have passed, you can test the setup by running the following curl command. curl http:// IP ADDRESS -OR- curl https:// HOSTNAME Disable Cloud CDN Console Disable Cloud CDN for a single backend service In the Google Cloud console, go to the Cloud CDN page.

### Invalidate cached content \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/invalidating-cached-content](https://docs.cloud.google.com/cdn/docs/invalidating-cached-content)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Click Invalidate and then click Confirm to indicate that you want Cloud CDN to invalidate everything. gcloud Use the gcloud compute url-maps invalidate-cdn-cache command . gcloud compute url-maps invalidate-cdn-cache URL MAP NAME \ --path " / " Replace the following: URL MAP NAME : the name of the URL map / : the URL path that you want to invalidate; doesn't include the hostname; the path can use an explicit filename or an asterisk as a wildcard To invalidate for only one host, add the --host flag—for example, --host host1.com . gcloud compute url-maps invalidate-cdn-cache URL MAP NAME \ --host host1.com \ --path " / " API Use the urlMaps.invalidateCache method .
- POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/urlMaps/ URL MAP NAME /invalidateCache Replace the following: PROJECT ID : your Google Cloud console project ID URL MAP NAME : the name of the URL map To specify a URL path for invalidation, use the following sample JSON request body: { "path": "/ " } To invalidate the URL path for only one host, use the following sample JSON request body: { "host": "host1.com", "path": "/ " } See the status of your invalidation request Cloud CDN emits two log lines per invalidation, one when the invalidation is accepted and the other when it's complete.
- POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/urlMaps/ URL MAP NAME /invalidateCache Replace the following: PROJECT ID : your Google Cloud console project ID URL MAP NAME : the name of the URL map To specify a file for invalidation, use the following sample JSON request body: { "path": "/images/file.jpg" } To invalidate the file for only one host, use the following sample JSON request body: { "host": "host1.com", "path": "/images/file.jpg" } Invalidate the whole directory Console In the Google Cloud console, go to the Cloud CDN page.
- POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/urlMaps/ URL MAP NAME /invalidateCache Replace the following: PROJECT ID : your Google Cloud console project ID URL MAP NAME : the name of the URL map To specify a directory for invalidation, use the following sample JSON request body: { "path": "/images/ " } To invalidate a directory for only one host, use the following sample JSON request body: { "host": "host1.com", "path": "/images/ " } Invalidate by cache tags Console In the Google Cloud console, go to the Cloud CDN page.

