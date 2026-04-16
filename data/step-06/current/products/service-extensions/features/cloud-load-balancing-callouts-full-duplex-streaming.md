---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:47.668Z"
product_name: "Service Extensions"
product_slug: "service-extensions"
feature_name: "Cloud Load Balancing callouts full-duplex streaming"
feature_slug: "cloud-load-balancing-callouts-full-duplex-streaming"
latest_feature_date: "2025-11-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-extensions/docs/callouts-overview"
  - "https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview"
  - "https://docs.cloud.google.com/service-extensions/docs/configure-route-extensions"
  - "https://docs.cloud.google.com/service-extensions/docs/configure-traffic-extensions"
keywords:
  - "load"
  - "balancing"
  - "callouts"
  - "full"
  - "duplex"
  - "streaming"
  - "now"
---

# Cloud Load Balancing callouts full-duplex streaming

Product: Service Extensions
Coverage: MEDIUM

## Step 02 Summary

Cloud Load Balancing callouts now support full-duplex streaming.

## Extended Definition

Cloud Load Balancing callouts now support full-duplex streaming.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-extensions/docs/callouts-overview](https://docs.cloud.google.com/service-extensions/docs/callouts-overview)
- [https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview](https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview)
- [https://docs.cloud.google.com/service-extensions/docs/configure-route-extensions](https://docs.cloud.google.com/service-extensions/docs/configure-route-extensions)
- [https://docs.cloud.google.com/service-extensions/docs/configure-traffic-extensions](https://docs.cloud.google.com/service-extensions/docs/configure-traffic-extensions)

## Supporting Pages

### "Cloud Load Balancing callouts overview \_|\_ Service Extensions \_|\_ Google\

- URL: [https://docs.cloud.google.com/service-extensions/docs/callouts-overview](https://docs.cloud.google.com/service-extensions/docs/callouts-overview)
- Source ID: `site-docs-reference`
- Final score: 213
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Networking Service Extensions Guides Send feedback Cloud Load Balancing callouts overview Stay organized with collections Save and categorize content based on your preferences.
- Recommended optimizations for callouts Integrating an extension into the load balancing processing path incurs additional latency for requests and responses.
- How callouts work with ext proc An abbreviated version of the ext proc gRPC API is as follows. // The gRPC API to be implemented by the external processing server service ExternalProcessor { rpc Process ( stream ProcessingRequest ) returns ( stream ProcessingResponse ) { } } // Envoy sets one of these fields depending on the processing stage. message ProcessingRequest { oneof request { HttpHeaders request headers = 2 ; HttpHeaders response headers = 3 ; HttpBody request body = 4 ; HttpBody response body = 5 ; } } message ProcessingResponse { oneof response { HeadersResponse request headers = 1 ; HeadersResponse response headers = 2 ; BodyResponse request body = 3 ; BodyResponse response body = 4 ; ImmediateResponse immediate response = 7 ; } } After receiving the headers for an HTTP request, the load balancer sends the ProcessingRequest message to the extension service with the request headers field set to the HTTP headers from the client.
- While streaming a message body to the ext proc server, at the end, the load balancer might send a tailing ProcessingRequest message with an empty body with end stream set to true to indicate that the stream has ended.

### "Cloud Load Balancing and Cloud CDN extensions overview \_|\_ Service Extensions\

- URL: [https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview](https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview)
- Source ID: `site-docs-reference`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- What's next Plugins overview Cloud Load Balancing callouts overview Integration with Google services Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Service Extensions lets you use extensions to instruct supported Application Load Balancers to use plugins or send callouts from the load balancing data path to callout backend services or Google services.
- Before a load balancer calls a traffic extension on the request path for a request, it does the following: Performs fault injection Selects a backend service for the request Applies Cloud Armor policies for the selected backend service Applies IAP policies for the selected backend service Applies Cloud CDN caching policies for the selected backend service in the case of global external Application Load Balancers After a load balancer calls a traffic extension on the request path for a request, it does the following: Performs URL rewrites Performs header manipulation according to the URL map and adds custom request header variables Performs redirects or routing to the selected backend service while applying timeouts and retry policies in the URL map and the load balancing settings for the backend service Performs request mirroring After a load balancer calls a traffic extension on the response path for a request, it does the following: Performs response header transformations and resolves custom response header variables Performs logging by using Cloud Logging Performs Cloud CDN caching in the case of global external Application Load Balancers Custom headers In the traffic path, edge and route extensions run at extensibility points before the stage at which the load balancer adds custom headers .
- After a load balancer calls an edge extension, it does the following: Selects the backend service by evaluating the URL map Applies Google Cloud Armor policies security policies Does a cache lookup and serves from cache if there is a cache hit Applies Cloud Armor policies for the selected backend service Applies CORS policies Applies the stateful session affinity policy Applies Identity-Aware Proxy (IAP) policies for the selected backend service Calls authorization extensions, if any are configured in the processing path of the selected backend service Performs fault injection Calls traffic extensions, if any Performs URL rewrites Performs header manipulation according to the URL map and adds custom request header variables Performs redirects or routing to the selected backend service while applying timeouts and retry policies in the URL map and the load balancing settings for the backend service Performs request mirroring How authorization extensions work On the request path, authorization extensions are called after route extensions are called and a backend for the request has been selected.

### "Configure a route extension \_|\_ Service Extensions \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/service-extensions/docs/configure-route-extensions](https://docs.cloud.google.com/service-extensions/docs/configure-route-extensions)
- Source ID: `site-docs-reference`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- Click Create extension . gcloud Define the plugin in a YAML file and associate it with a global forwarding rule—for example, cr-ilb-forwarding-rule . cat >route-plugin.yaml <<EOF name: route-ext forwardingRules: - https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /forwardingRules/cr-ilb-forwarding-rule loadBalancingScheme: INTERNAL MANAGED extensionChains: - name: "chain1" matchCondition: celExpression: 'request.path.startsWith("/extensions")' extensions: - name: 'ext1' service: projects/ PROJECT ID /locations/ LOCATION /wasmPlugins/ WASM PLUGIN failOpen: false supportedEvents: - REQUEST HEADERS forwardAttributes: - request.host - request.path EOF Replace the following: PROJECT ID : the project ID .
- Use the sample values provided. cat >route.yaml <<EOF name: route-ext forwardingRules: - https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/us-west1/forwardingRules/l7-ilb-forwarding-rule loadBalancingScheme: INTERNAL MANAGED extensionChains: - name: "chain1" matchCondition: celExpression: 'request.path.startsWith("/extensions")' extensions: - name: 'ext11' authority: ext11.com service: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/us-west1/backendServices/l7-ilb-callout-service failOpen: false timeout: 0.1s metadata: "key": "value" "fr": "forwarding rule id" forwardAttributes: - request.host - request.path EOF Replace PROJECT ID with the project ID .
- Service Extensions enables supported Application Load Balancers to use plugins or send callouts to backend services to insert custom processing in the processing path.
- You can't configure Cloud Load Balancing extensions with plugins that are already used in Media CDN extensions.

### "Configure a traffic extension \_|\_ Service Extensions \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/service-extensions/docs/configure-traffic-extensions](https://docs.cloud.google.com/service-extensions/docs/configure-traffic-extensions)
- Source ID: `site-docs-reference`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- Use the sample values provided. cat >traffic.yaml <<EOF name: traffic-ext forwardingRules: - https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/us-west1/forwardingRules/l7-ilb-forwarding-rule loadBalancingScheme: INTERNAL MANAGED extensionChains: - name: "chain1" matchCondition: celExpression: 'request.host == "example.com"' extensions: - name: 'ext11' authority: ext11.com service: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/us-west1/backendServices/l7-ilb-callout-service failOpen: false timeout: 0.1s metadata: "key": "value" "fr": "forwarding rule id" supportedEvents: - RESPONSE HEADERS forwardAttributes: - request.host - request.path EOF Replace PROJECT ID with the project ID .
- Click Create extension . gcloud Define the plugin in a YAML file and associate it with a forwarding rule—for example, http-content-rule . cat >traffic-plugin.yaml <<EOF name: traffic-ext forwardingRules: - https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /forwardingRules/http-content-rule loadBalancingScheme: EXTERNAL MANAGED extensionChains: - name: "chain1" matchCondition: celExpression: 'request.host == "example.com"' extensions: - name: 'ext1' service: projects/ PROJECT ID /locations/ LOCATION /wasmPlugins/ WASM PLUGIN failOpen: false supportedEvents: - RESPONSE HEADERS forwardAttributes: - request.host - request.path EOF Replace the following: PROJECT ID : the project ID .
- Service Extensions enables supported Application Load Balancers to use plugins or send callouts to backend services to insert custom processing in the processing path.
- You can't configure Cloud Load Balancing extensions with plugins that are already used in Media CDN extensions.

