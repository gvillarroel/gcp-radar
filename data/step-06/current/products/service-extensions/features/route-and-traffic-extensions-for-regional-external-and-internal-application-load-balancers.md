---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:47.668Z"
product_name: "Service Extensions"
product_slug: "service-extensions"
feature_name: "Route and traffic extensions for regional external and internal Application Load Balancers"
feature_slug: "route-and-traffic-extensions-for-regional-external-and-internal-application-load-balancers"
latest_feature_date: "2025-11-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview"
  - "https://docs.cloud.google.com/service-extensions/docs/configure-route-extensions"
  - "https://docs.cloud.google.com/service-extensions/docs/configure-traffic-extensions"
  - "https://docs.cloud.google.com/service-extensions/docs/callouts-overview"
keywords:
  - "route"
  - "and"
  - "traffic"
  - "extensions"
  - "for"
  - "regional"
  - "external"
  - "internal"
---

# Route and traffic extensions for regional external and internal Application Load Balancers

Product: Service Extensions
Coverage: MEDIUM

## Step 02 Summary

Route and traffic extensions add plugin-based extension support for regional external and internal Application Load Balancers.

## Extended Definition

Route and traffic extensions add plugin-based extension support for regional external and internal Application Load Balancers.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview](https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview)
- [https://docs.cloud.google.com/service-extensions/docs/configure-route-extensions](https://docs.cloud.google.com/service-extensions/docs/configure-route-extensions)
- [https://docs.cloud.google.com/service-extensions/docs/configure-traffic-extensions](https://docs.cloud.google.com/service-extensions/docs/configure-traffic-extensions)
- [https://docs.cloud.google.com/service-extensions/docs/callouts-overview](https://docs.cloud.google.com/service-extensions/docs/callouts-overview)

## Supporting Pages

### "Cloud Load Balancing and Cloud CDN extensions overview \_|\_ Service Extensions\

- URL: [https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview](https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview)
- Source ID: `site-docs-reference`
- Final score: 300
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported Application Load Balancers for user-managed extensions Service Extensions supports user-managed extensions for the following Application Load Balancers : Application Load Balancers Extensions Edge Route Authorization Traffic Plugins Plugins Callouts Callouts Plugins Callouts Global external Application Load Balancer ✓ ✓ ✓ ✓ Regional external Application Load Balancer ✓ Preview ✓ ✓ ✓ Preview ✓ Regional internal Application Load Balancer ✓ Preview ✓ ✓ ✓ Preview ✓ Cross-region internal Application Load Balancer ✓ ✓ ✓ ✓ ✓ Note: Extensions aren't supported on classic Application Load Balancers.
- Figure 2 shows how Service Extensions supports extensions in the routing, application security, and traffic management stages for these types of load balancers: Regional external Application Load Balancer, Regional internal Application Load Balancer, and Cross-region internal Application Load Balancer.
- Before a load balancer calls a traffic extension on the request path for a request, it does the following: Performs fault injection Selects a backend service for the request Applies Cloud Armor policies for the selected backend service Applies IAP policies for the selected backend service Applies Cloud CDN caching policies for the selected backend service in the case of global external Application Load Balancers After a load balancer calls a traffic extension on the request path for a request, it does the following: Performs URL rewrites Performs header manipulation according to the URL map and adds custom request header variables Performs redirects or routing to the selected backend service while applying timeouts and retry policies in the URL map and the load balancing settings for the backend service Performs request mirroring After a load balancer calls a traffic extension on the response path for a request, it does the following: Performs response header transformations and resolves custom response header variables Performs logging by using Cloud Logging Performs Cloud CDN caching in the case of global external Application Load Balancers Custom headers In the traffic path, edge and route extensions run at extensibility points before the stage at which the load balancer adds custom headers .
- Regional external Application Load Balancers, regional internal Application Load Balancers, and cross-region internal Application Load Balancers support extensions at the routing and traffic management stages (click to enlarge).

### "Configure a route extension \_|\_ Service Extensions \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/service-extensions/docs/configure-route-extensions](https://docs.cloud.google.com/service-extensions/docs/configure-route-extensions)
- Source ID: `site-docs-reference`
- Final score: 246
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Click Create extension . gcloud Define the plugin in a YAML file and associate it with a global forwarding rule—for example, cr-ilb-forwarding-rule . cat >route-plugin.yaml <<EOF name: route-ext forwardingRules: - https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /forwardingRules/cr-ilb-forwarding-rule loadBalancingScheme: INTERNAL MANAGED extensionChains: - name: "chain1" matchCondition: celExpression: 'request.path.startsWith("/extensions")' extensions: - name: 'ext1' service: projects/ PROJECT ID /locations/ LOCATION /wasmPlugins/ WASM PLUGIN failOpen: false supportedEvents: - REQUEST HEADERS forwardAttributes: - request.host - request.path EOF Replace the following: PROJECT ID : the project ID .
- Use the sample values provided. cat >route.yaml <<EOF name: route-ext forwardingRules: - https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/us-west1/forwardingRules/l7-ilb-forwarding-rule loadBalancingScheme: INTERNAL MANAGED extensionChains: - name: "chain1" matchCondition: celExpression: 'request.path.startsWith("/extensions")' extensions: - name: 'ext11' authority: ext11.com service: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/us-west1/backendServices/l7-ilb-callout-service failOpen: false timeout: 0.1s metadata: "key": "value" "fr": "forwarding rule id" forwardAttributes: - request.host - request.path EOF Replace PROJECT ID with the project ID .
- To verify that the route extension works as expected, use the same curl command: curl FORWARDING RULE IP /extensions The output is similar to the following and indicates that the page is served from a VM in region B : Page served from region-B-vm To verify that the plugin runs only for requests with the /extension path prefix, repeat the curl command without a path. curl FORWARDING RULE IP The output is similar to the following: Page served from region-A-vm Configure using callouts This section shows you how to configure a route extension by using a callout.
- The output is similar to the following: Page served from second backend service To validate that the callout is targeting only requests with the /extension prefix, repeat the curl command without the path prefix. curl FORWARDING RULE IP The output is similar to the following: Page served from: l7-ilb-backend-example-1c7t Limitations for route extensions Route extensions don't support HTTP body processing.

### "Configure a traffic extension \_|\_ Service Extensions \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/service-extensions/docs/configure-traffic-extensions](https://docs.cloud.google.com/service-extensions/docs/configure-traffic-extensions)
- Source ID: `site-docs-reference`
- Final score: 242
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Click Create extension . gcloud Define the plugin in a YAML file and associate it with a forwarding rule—for example, http-content-rule . cat >traffic-plugin.yaml <<EOF name: traffic-ext forwardingRules: - https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /forwardingRules/http-content-rule loadBalancingScheme: EXTERNAL MANAGED extensionChains: - name: "chain1" matchCondition: celExpression: 'request.host == "example.com"' extensions: - name: 'ext1' service: projects/ PROJECT ID /locations/ LOCATION /wasmPlugins/ WASM PLUGIN failOpen: false supportedEvents: - RESPONSE HEADERS forwardAttributes: - request.host - request.path EOF Replace the following: PROJECT ID : the project ID .
- Use the sample values provided. cat >traffic.yaml <<EOF name: traffic-ext forwardingRules: - https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/us-west1/forwardingRules/l7-ilb-forwarding-rule loadBalancingScheme: INTERNAL MANAGED extensionChains: - name: "chain1" matchCondition: celExpression: 'request.host == "example.com"' extensions: - name: 'ext11' authority: ext11.com service: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/us-west1/backendServices/l7-ilb-callout-service failOpen: false timeout: 0.1s metadata: "key": "value" "fr": "forwarding rule id" supportedEvents: - RESPONSE HEADERS forwardAttributes: - request.host - request.path EOF Replace PROJECT ID with the project ID .
- HTTP/1.1 200 OK ... content-length: 46 content-type: text/ hello: service-extensions via: 1.1 google Page served from: l7-ilb-backend-example-1c7t To validate that the extension targets only example.com traffic, repeat the curl command without the host header. curl -D - FORWARDING RULE IP The output is similar to the following: HTTP/1.1 200 OK ... content-length: 46 content-type: text/html via: 1.1 google Page served from: l7-ilb-backend-example-1c7t What's next View Rust, Go, and C++ plugin examples and testing tools in the Service Extensions GitHub repository for plugins .
- HTTP/1.1 200 OK ... content-length: 46 content-type: text/ hello: service-extensions via: 1.1 google To validate that the extension targets only example.com traffic, repeat the curl command without the host header. curl -D - FORWARDING RULE IP The output is similar to the following: HTTP/1.1 200 OK ... content-length: 46 content-type: text/html via: 1.1 google Configure traffic extensions to user-managed services by using callouts This section shows you how to configure a traffic extension to a user-managed callout backend service by using a callout.

### "Cloud Load Balancing callouts overview \_|\_ Service Extensions \_|\_ Google\

- URL: [https://docs.cloud.google.com/service-extensions/docs/callouts-overview](https://docs.cloud.google.com/service-extensions/docs/callouts-overview)
- Source ID: `site-docs-reference`
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For route and traffic extensions, callouts can execute asynchronously when observabilityMode for the extension is set to true and the body processing mode is STREAMED (default).
- For example, to modify only request headers for route and traffic extensions, set the supported events field in the extension to REQUEST HEADERS .
- This protocol is supported for route, traffic, and authorization extensions and is used by default.
- The following are the limitations with header manipulation: Header manipulation isn't supported for the following headers: X-user-IP CDN-Loop Headers starting with X-Forwarded , X-Google , X-GFE , or X-Amz- connection keep-alive transfer-encoding , te upgrade proxy-connection , proxy-authenticate , proxy-authorization trailers For traffic and authorization extensions, header manipulation is also not supported for these: :method , :authority , :scheme , or host headers.

