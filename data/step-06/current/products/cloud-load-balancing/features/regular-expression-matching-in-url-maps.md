---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.676Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "Regular expression matching in URL maps"
feature_slug: "regular-expression-matching-in-url-maps"
latest_feature_date: "2025-12-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/url-map-concepts"
  - "https://docs.cloud.google.com/load-balancing/docs/quotas"
  - "https://docs.cloud.google.com/load-balancing/docs/https"
keywords:
  - "regular"
  - "expression"
  - "matching"
  - "url"
  - "maps"
  - "application"
  - "load"
  - "balancer"
---

# Regular expression matching in URL maps

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

Application Load Balancer URL maps support RE2 regular expressions for route rules, header matches, and query parameter matches.

## Extended Definition

Application Load Balancer URL maps support RE2 regular expressions for route rules, header matches, and query parameter matches.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/url-map-concepts](https://docs.cloud.google.com/load-balancing/docs/url-map-concepts)
- [https://docs.cloud.google.com/load-balancing/docs/quotas](https://docs.cloud.google.com/load-balancing/docs/quotas)
- [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)

## Supporting Pages

### URL maps overview \_|\_ Cloud Load Balancing \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/load-balancing/docs/url-map-concepts](https://docs.cloud.google.com/load-balancing/docs/url-map-concepts)
- Source ID: `site-docs-root`
- Final score: 197
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Additional usage notes: Regular expressions are supported only for the following products: Regional internal Application Load Balancers Cross-region internal Application Load Balancers Regional external Application Load Balancers Global and classic Application Load Balancers don't support regular expressions.
- For example, in the following sample URL maps, the route rule regular expression, /videos/hd. , would apply to a URL with the path /videos/hd-abcd?key=245 . defaultService : projects/example-project/global/backendServices/org-site name : rule-match-url-map hostRules : - hosts : - ' ' # Match any host pathMatcher : video-matcher - hosts : - example.net pathMatcher : video-matcher pathMatchers : - name : video-matcher Optional: default service for this path matcher if no routeRules match defaultService : projects/example-project/global/backendServices/video-site routeRules : - priority : 100000 matchRules : - regexMatch : /videos/hd. routeAction : weightedBackendServices : - backendService : projects/example-project/global/backendServices/video-hd weight : 100 Here is an explanation for each field of the sample URL map: defaultService : Specifies the default backend service to use if no other rules in the URL map match the incoming request. name : Assigns the name rule-match-url-map to this URL map configuration. hostRules : Defines a list of rules for matching the host header of incoming requests.
- Pattern matching with wildcards is supported only for the following products: Global external Application Load Balancer Regional external Application Load Balancer Regional internal Application Load Balancer Cross-region internal Application Load Balancer Cloud Service Mesh The following example routes traffic for an eCommerce application that has separate services for cart information and user information.
- URL maps are used with the following Google Cloud products: External Application Load Balancer (global, regional, and classic modes) Internal Application Load Balancer (cross-region and regional modes) Cloud Service Mesh , when Cloud Service Mesh is deployed with the load balancing APIs There are two types of URL map resources available: global and regional.

### Quotas and limits \_|\_ Cloud Load Balancing \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/load-balancing/docs/quotas](https://docs.cloud.google.com/load-balancing/docs/quotas)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- Host rules, path matchers per URL map Limit: 1000 Limit: 2000 Path rules or route rules per path matcher Limit: 1000 Limit: 1000 Hosts per host rule Limit: 1000 Limit: 1000 Predicates per path matcher Limit: 1000 Limit: 1000 pathTemplateMatch predicates per path matcher Global external Application Load Balancers and regional external Application Load Balancers: Limit: 100 Not supported for classic Application Load Balancers Limit: 100 Number of distinct backend services or backend buckets that can be referenced by a URL map Limit: 2500 Limit: 2500 Maximum number of regular expressions per path matcher For regional external Application Load Balancers: 5 Global external Application Load Balancers don't support regular expressions.
- 5 Maximum number of characters in a regular expression For regional external Application Load Balancers: 250 Global external Application Load Balancers don't support regular expressions.
- Quota name: REGIONAL INTERNAL MANAGED BACKEND SERVICES Available metrics: compute.googleapis.com/quota/regional internal managed backend services/limit compute.googleapis.com/quota/regional internal managed backend services/usage compute.googleapis.com/quota/regional internal managed backend services/exceeded Number of backend services per Application Load Balancer Varies based on the URL map configuration For more details, see URL maps .
- Size of URL maps Limit: 64 KB Limit: 128 KB Number of URL map tests Classic Application Load Balancer: Limit: 10000 N/A Internal Application Load Balancers don't support URL map tests.

### "External Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- Source ID: `site-docs-reference-required-3`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- The following table summarizes the required source IP address ranges for the firewall rules: Load balancer mode Health check source ranges Request source ranges Global external Application Load Balancer 35.191.0.0/16 130.211.0.0/22 For IPv6 traffic to the backends: 2600:2d00:1:b029::/64 The source of GFE traffic depends on the backend type: Instance groups and zonal NEGs ( GCE VM IP PORT ): 130.211.0.0/22 35.191.0.0/16 For IPv6 traffic to the backends: 2600:2d00:1:1::/64 Hybrid connectivity NEGs ( NON GCP PRIVATE IP PORT ): 130.211.0.0/22 35.191.0.0/16 Internet NEGs ( INTERNET FQDN PORT and INTERNET IP PORT ): 34.96.0.0/20 34.127.192.0/18 SERVERLESS NEGs and backend buckets: Google's production network handles packet routing Classic Application Load Balancer 35.191.0.0/16 130.211.0.0/22 The source of GFE traffic depends on the backend type: Instance groups, zonal NEGs ( GCE VM IP PORT ), and hybrid connectivity NEGs ( NON GCP PRIVATE IP PORT ): 35.191.0.0/16 130.211.0.0/22 Internet NEGs ( INTERNET FQDN PORT and INTERNET IP PORT ): 34.96.0.0/20 34.127.192.0/18 SERVERLESS NEGs and backend buckets: Google's production network handles packet routing.
- To update the load balancer, click Update . gcloud Configure the TLS early data mode on the target HTTPS proxy of an Application Load Balancer. gcloud compute target-https-proxies update TARGET HTTPS PROXY \ --tls-early-data= TLS EARLY DATA MODE Replace the following: TARGET HTTPS PROXY : the target HTTPS proxy of your load balancer TLS EARLY DATA MODE : STRICT , PERMISSIVE , DISABLED , or UNRESTRICTED API PATCH https://compute.googleapis.com/compute/v1/projects/{project}/global/targetHttpsProxies/ TARGET HTTPS PROXY { "tlsEarlyData":" TLS EARLY DATA MODE ", "fingerprint": " FINGERPRINT " } Replace the following: TARGET HTTPS PROXY : the target HTTPS proxy of your load balancer TLS EARLY DATA MODE : STRICT , PERMISSIVE , DISABLED , or UNRESTRICTED FINGERPRINT : a Base64 encoded string.
- Backend service scope The following table indicates which backend service resource and scope is used by external Application Load Balancers: Load balancer mode Backend service resource Global external Application Load Balancer backendServices (global) Classic Application Load Balancer backendServices (global) Regional external Application Load Balancer regionBackendServices (regional) Protocol to the backends Backend services for Application Load Balancers must use one of the following protocols to send requests to backends: HTTP, which uses HTTP/1.1 and no TLS HTTPS, which uses HTTP/1.1 and TLS HTTP/2, which uses HTTP/2 and TLS (HTTP/2 without encryption isn't supported.) H2C, which uses HTTP/2 over TCP.
- Configured on the backend service or backend bucket Regional external Application Load Balancer Regional HTTP , Regional HTTPS X-Forwarded-Proto : [http https] (requests only) Via: 1.1 google (requests and responses) X-Forwarded-For : [<supplied-value>,]<client-ip>,<load-balancer-ip> (see X-Forwarded-For header ) (requests only) Configured in the URL map Note: In accordance with RFC 2616 , the following hop-by-hop headers aren't propagated by the target proxy: Connection , Keep-Alive , Proxy-Authenticate , Proxy-Authorization , TE , Trailers , Transfer-Encoding , and Upgrade .

