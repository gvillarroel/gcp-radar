---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:47.674Z"
product_name: "Service Extensions"
product_slug: "service-extensions"
feature_name: "Cloud Load Balancing callouts"
feature_slug: "cloud-load-balancing-callouts"
latest_feature_date: "2023-10-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-extensions/docs/callouts-overview"
  - "https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview"
  - "https://docs.cloud.google.com/service-extensions/docs/configure-traffic-extensions"
  - "https://docs.cloud.google.com/service-extensions/docs/overview"
keywords:
  - "load"
  - "balancing"
  - "callouts"
  - "let"
  - "balancers"
  - "forward"
  - "traffic"
  - "through"
---

# Cloud Load Balancing callouts

Product: Service Extensions
Coverage: MEDIUM

## Step 02 Summary

Cloud Load Balancing callouts let load balancers forward traffic through gRPC to user-managed or partner-hosted applications for inline policy enforcement, traffic manipulation, security screening, or custom logging before continuing processing.

## Extended Definition

Cloud Load Balancing callouts let load balancers forward traffic through gRPC to user-managed or partner-hosted applications for inline policy enforcement, traffic manipulation, security screening, or custom logging before continuing processing.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-extensions/docs/callouts-overview](https://docs.cloud.google.com/service-extensions/docs/callouts-overview)
- [https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview](https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview)
- [https://docs.cloud.google.com/service-extensions/docs/configure-traffic-extensions](https://docs.cloud.google.com/service-extensions/docs/configure-traffic-extensions)
- [https://docs.cloud.google.com/service-extensions/docs/overview](https://docs.cloud.google.com/service-extensions/docs/overview)

## Supporting Pages

### "Cloud Load Balancing callouts overview \_|\_ Service Extensions \_|\_ Google\

- URL: [https://docs.cloud.google.com/service-extensions/docs/callouts-overview](https://docs.cloud.google.com/service-extensions/docs/callouts-overview)
- Source ID: `site-docs-reference`
- Final score: 284
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Service Extensions lets you instruct supported Application Load Balancers to send a callout from the load balancing data path to user-managed callout services or Google services.
- Home Documentation Networking Service Extensions Guides Send feedback Cloud Load Balancing callouts overview Stay organized with collections Save and categorize content based on your preferences.
- Recommended optimizations for callouts Integrating an extension into the load balancing processing path incurs additional latency for requests and responses.
- Application Load Balancers send Service Extensions callouts to callout backend services (click to enlarge).

### "Cloud Load Balancing and Cloud CDN extensions overview \_|\_ Service Extensions\

- URL: [https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview](https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview)
- Source ID: `site-docs-reference`
- Final score: 248
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Service Extensions lets you use extensions to instruct supported Application Load Balancers to use plugins or send callouts from the load balancing data path to callout backend services or Google services.
- Before a load balancer calls a traffic extension on the request path for a request, it does the following: Performs fault injection Selects a backend service for the request Applies Cloud Armor policies for the selected backend service Applies IAP policies for the selected backend service Applies Cloud CDN caching policies for the selected backend service in the case of global external Application Load Balancers After a load balancer calls a traffic extension on the request path for a request, it does the following: Performs URL rewrites Performs header manipulation according to the URL map and adds custom request header variables Performs redirects or routing to the selected backend service while applying timeouts and retry policies in the URL map and the load balancing settings for the backend service Performs request mirroring After a load balancer calls a traffic extension on the response path for a request, it does the following: Performs response header transformations and resolves custom response header variables Performs logging by using Cloud Logging Performs Cloud CDN caching in the case of global external Application Load Balancers Custom headers In the traffic path, edge and route extensions run at extensibility points before the stage at which the load balancer adds custom headers .
- After a load balancer calls a route extension for a request, it does the following: Selects the backend service by evaluating the URL map Applies Cloud Armor policies for the selected backend service Applies IAP policies for the selected backend service Performs fault injection Performs request header transformations and resolves custom request header variables Calls traffic extensions, if they exist in the processing path of the selected backend service Performs URL rewrites Performs redirects or routing to the selected backend service and applies timeouts and retry policies in the URL map and other load balancing settings for the backend service How traffic extensions work Load balancers run traffic extensions last in the request processing path and first in the response processing path.
- Supported Application Load Balancers for user-managed extensions Service Extensions supports user-managed extensions for the following Application Load Balancers : Application Load Balancers Extensions Edge Route Authorization Traffic Plugins Plugins Callouts Callouts Plugins Callouts Global external Application Load Balancer ✓ ✓ ✓ ✓ Regional external Application Load Balancer ✓ Preview ✓ ✓ ✓ Preview ✓ Regional internal Application Load Balancer ✓ Preview ✓ ✓ ✓ Preview ✓ Cross-region internal Application Load Balancer ✓ ✓ ✓ ✓ ✓ Note: Extensions aren't supported on classic Application Load Balancers.

### "Configure a traffic extension \_|\_ Service Extensions \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/service-extensions/docs/configure-traffic-extensions](https://docs.cloud.google.com/service-extensions/docs/configure-traffic-extensions)
- Source ID: `site-docs-reference`
- Final score: 232
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use the sample values provided. cat >traffic.yaml <<EOF name: traffic-ext forwardingRules: - https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/us-west1/forwardingRules/l7-ilb-forwarding-rule loadBalancingScheme: INTERNAL MANAGED extensionChains: - name: "chain1" matchCondition: celExpression: 'request.host == "example.com"' extensions: - name: 'ext11' authority: ext11.com service: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/us-west1/backendServices/l7-ilb-callout-service failOpen: false timeout: 0.1s metadata: "key": "value" "fr": "forwarding rule id" supportedEvents: - RESPONSE HEADERS forwardAttributes: - request.host - request.path EOF Replace PROJECT ID with the project ID .
- Click Create extension . gcloud Define the plugin in a YAML file and associate it with a forwarding rule—for example, http-content-rule . cat >traffic-plugin.yaml <<EOF name: traffic-ext forwardingRules: - https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /forwardingRules/http-content-rule loadBalancingScheme: EXTERNAL MANAGED extensionChains: - name: "chain1" matchCondition: celExpression: 'request.host == "example.com"' extensions: - name: 'ext1' service: projects/ PROJECT ID /locations/ LOCATION /wasmPlugins/ WASM PLUGIN failOpen: false supportedEvents: - RESPONSE HEADERS forwardAttributes: - request.host - request.path EOF Replace the following: PROJECT ID : the project ID .
- HTTP/1.1 200 OK ... content-length: 46 content-type: text/ hello: service-extensions via: 1.1 google To validate that the extension targets only example.com traffic, repeat the curl command without the host header. curl -D - FORWARDING RULE IP The output is similar to the following: HTTP/1.1 200 OK ... content-length: 46 content-type: text/html via: 1.1 google Configure traffic extensions to user-managed services by using callouts This section shows you how to configure a traffic extension to a user-managed callout backend service by using a callout.
- A traffic extension for an Application Load Balancer points to the following resources: A forwarding rule to attach to A plugin or a callout backend service whose backends run the ext proc gRPC API A traffic extension groups related extension services into one or more chains.

### Service Extensions overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-extensions/docs/overview](https://docs.cloud.google.com/service-extensions/docs/overview)
- Source ID: `site-docs-root`
- Final score: 214
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Callouts to user-managed services Service Extensions lets supported Application Load Balancers send a callout from the data processing path to backend services managed by the user.
- Callouts to Google services Service Extensions lets supported Application Load Balancers send a callout from the data processing path to selected Google services.
- Callouts Callouts let you use Cloud Load Balancing to make Envoy gRPC calls to Google services and user-managed services during data processing.
- Use callouts with Cloud Load Balancing for the following: When the amount of compute or storage is arbitrary When you want to maintain state When you want to use external services, such as BigQuery or third-party applications hosted anywhere Callouts are highly flexible and support a variety of customizations.

