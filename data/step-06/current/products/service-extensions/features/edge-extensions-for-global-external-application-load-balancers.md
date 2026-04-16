---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:47.667Z"
product_name: "Service Extensions"
product_slug: "service-extensions"
feature_name: "Edge extensions for Global External Application Load Balancers"
feature_slug: "edge-extensions-for-global-external-application-load-balancers"
latest_feature_date: "2025-11-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview"
  - "https://docs.cloud.google.com/service-extensions/docs/configure-edge-extensions"
  - "https://docs.cloud.google.com/service-extensions/docs/callouts-overview"
  - "https://docs.cloud.google.com/service-extensions/docs/configure-traffic-extensions"
keywords:
  - "edge"
  - "extensions"
  - "for"
  - "global"
  - "external"
  - "application"
  - "load"
  - "balancers"
---

# Edge extensions for Global External Application Load Balancers

Product: Service Extensions
Coverage: MEDIUM

## Step 02 Summary

Edge extensions allow manipulation of request headers early in the processing lifecycle of global external Application Load Balancers to influence caching and routing decisions.

## Extended Definition

Edge extensions allow manipulation of request headers early in the processing lifecycle of global external Application Load Balancers to influence caching and routing decisions.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview](https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview)
- [https://docs.cloud.google.com/service-extensions/docs/configure-edge-extensions](https://docs.cloud.google.com/service-extensions/docs/configure-edge-extensions)
- [https://docs.cloud.google.com/service-extensions/docs/callouts-overview](https://docs.cloud.google.com/service-extensions/docs/callouts-overview)
- [https://docs.cloud.google.com/service-extensions/docs/configure-traffic-extensions](https://docs.cloud.google.com/service-extensions/docs/configure-traffic-extensions)

## Supporting Pages

### "Cloud Load Balancing and Cloud CDN extensions overview \_|\_ Service Extensions\

- URL: [https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview](https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview)
- Source ID: `site-docs-reference`
- Final score: 296
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before a load balancer calls a traffic extension on the request path for a request, it does the following: Performs fault injection Selects a backend service for the request Applies Cloud Armor policies for the selected backend service Applies IAP policies for the selected backend service Applies Cloud CDN caching policies for the selected backend service in the case of global external Application Load Balancers After a load balancer calls a traffic extension on the request path for a request, it does the following: Performs URL rewrites Performs header manipulation according to the URL map and adds custom request header variables Performs redirects or routing to the selected backend service while applying timeouts and retry policies in the URL map and the load balancing settings for the backend service Performs request mirroring After a load balancer calls a traffic extension on the response path for a request, it does the following: Performs response header transformations and resolves custom response header variables Performs logging by using Cloud Logging Performs Cloud CDN caching in the case of global external Application Load Balancers Custom headers In the traffic path, edge and route extensions run at extensibility points before the stage at which the load balancer adds custom headers .
- Supported Application Load Balancers for user-managed extensions Service Extensions supports user-managed extensions for the following Application Load Balancers : Application Load Balancers Extensions Edge Route Authorization Traffic Plugins Plugins Callouts Callouts Plugins Callouts Global external Application Load Balancer ✓ ✓ ✓ ✓ Regional external Application Load Balancer ✓ Preview ✓ ✓ ✓ Preview ✓ Regional internal Application Load Balancer ✓ Preview ✓ ✓ ✓ Preview ✓ Cross-region internal Application Load Balancer ✓ ✓ ✓ ✓ ✓ Note: Extensions aren't supported on classic Application Load Balancers.
- Figure 1 shows how Service Extensions supports extensions in the application security and traffic management stages for global external Application Load Balancers.
- Global external Application Load Balancers support extensions at the edge routing, application security, and traffic management stages (click to enlarge).

### "Configure an edge extension \_|\_ Service Extensions \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/service-extensions/docs/configure-edge-extensions](https://docs.cloud.google.com/service-extensions/docs/configure-edge-extensions)
- Source ID: `site-docs-reference`
- Final score: 268
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Click Create extension . gcloud Define the plugin in a YAML file and associate it with a global forwarding rule—for example, cr-xlb-forwarding-rule . cat >edge-plugin.yaml <<EOF name: edge-ext forwardingRules: - https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/global/forwardingRules/cr-xlb-forwarding-rule loadBalancingScheme: EXTERNAL MANAGED extensionChains: - name: "chain1" matchCondition: celExpression: 'request.path.startsWith("/extensions")' extensions: - name: 'ext1' service: projects/ PROJECT ID /locations/global/wasmPlugins/ WASM PLUGIN failOpen: false supportedEvents: - REQUEST HEADERS forwardAttributes: - request.host - request.path EOF Replace the following: PROJECT ID : the project ID WASM PLUGIN : the ID or the fully qualified name of the plugin Edge extensions let you use only one regular expression per CEL expression.
- Follow the instructions on the Set up a global external Application Load Balancer with VM instance group backends page for all steps, except the following: Name the backend service as service-one .
- For the load balancer type, select global external Application Load Balancer.
- Use the gcloud service-extensions lb-edge-extensions import command with the following sample values: gcloud service-extensions lb-edge-extensions import edge-ext \ --source=edge-plugin.yaml \ --location=global After an edge extension is created, it takes a little time for the new plugin to be distributed across all locations.

### "Cloud Load Balancing callouts overview \_|\_ Service Extensions \_|\_ Google\

- URL: [https://docs.cloud.google.com/service-extensions/docs/callouts-overview](https://docs.cloud.google.com/service-extensions/docs/callouts-overview)
- Source ID: `site-docs-reference`
- Final score: 236
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When using a global external Application Load Balancer, place the callout service backends in the geographic regions where the regular load balancer's destination VMs, GKE workloads, and Cloud Run functions are located.
- Service Extensions lets you instruct supported Application Load Balancers to send a callout from the load balancing data path to user-managed callout services or Google services.
- Application Load Balancers send Service Extensions callouts to callout backend services (click to enlarge).
- How callouts work with ext proc An abbreviated version of the ext proc gRPC API is as follows. // The gRPC API to be implemented by the external processing server service ExternalProcessor { rpc Process ( stream ProcessingRequest ) returns ( stream ProcessingResponse ) { } } // Envoy sets one of these fields depending on the processing stage. message ProcessingRequest { oneof request { HttpHeaders request headers = 2 ; HttpHeaders response headers = 3 ; HttpBody request body = 4 ; HttpBody response body = 5 ; } } message ProcessingResponse { oneof response { HeadersResponse request headers = 1 ; HeadersResponse response headers = 2 ; BodyResponse request body = 3 ; BodyResponse response body = 4 ; ImmediateResponse immediate response = 7 ; } } After receiving the headers for an HTTP request, the load balancer sends the ProcessingRequest message to the extension service with the request headers field set to the HTTP headers from the client.

### "Configure a traffic extension \_|\_ Service Extensions \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/service-extensions/docs/configure-traffic-extensions](https://docs.cloud.google.com/service-extensions/docs/configure-traffic-extensions)
- Source ID: `site-docs-reference`
- Final score: 219
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For the load balancer type, select either global external Application Load Balancer or cross-region internal Application Load Balancer.
- For example, set up a global external Application Load Balancer with VM instance group backends .
- Click Create extension . gcloud Define the plugin in a YAML file and associate it with a forwarding rule—for example, http-content-rule . cat >traffic-plugin.yaml <<EOF name: traffic-ext forwardingRules: - https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /forwardingRules/http-content-rule loadBalancingScheme: EXTERNAL MANAGED extensionChains: - name: "chain1" matchCondition: celExpression: 'request.host == "example.com"' extensions: - name: 'ext1' service: projects/ PROJECT ID /locations/ LOCATION /wasmPlugins/ WASM PLUGIN failOpen: false supportedEvents: - RESPONSE HEADERS forwardAttributes: - request.host - request.path EOF Replace the following: PROJECT ID : the project ID .
- Service Extensions enables supported Application Load Balancers to use plugins or send callouts to backend services to insert custom processing in the processing path.

