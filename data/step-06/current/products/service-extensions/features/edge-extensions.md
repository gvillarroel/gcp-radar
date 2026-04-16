---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:47.671Z"
product_name: "Service Extensions"
product_slug: "service-extensions"
feature_name: "Edge extensions"
feature_slug: "edge-extensions"
latest_feature_date: "2025-06-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview"
  - "https://docs.cloud.google.com/service-extensions/docs/configure-edge-extensions"
  - "https://docs.cloud.google.com/service-extensions/docs/cel-matcher-language-reference"
  - "https://docs.cloud.google.com/service-extensions/docs/callouts-overview"
keywords:
  - "edge"
  - "extensions"
  - "now"
  - "supports"
  - "to"
  - "modify"
  - "request"
  - "headers"
---

# Edge extensions

Product: Service Extensions
Coverage: MEDIUM

## Step 02 Summary

Service Extensions now supports edge extensions to modify request headers early in the request lifecycle for global external Application Load Balancers to influence caching and routing behavior.

## Extended Definition

Service Extensions now supports edge extensions to modify request headers early in the request lifecycle for global external Application Load Balancers to influence caching and routing behavior.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview](https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview)
- [https://docs.cloud.google.com/service-extensions/docs/configure-edge-extensions](https://docs.cloud.google.com/service-extensions/docs/configure-edge-extensions)
- [https://docs.cloud.google.com/service-extensions/docs/cel-matcher-language-reference](https://docs.cloud.google.com/service-extensions/docs/cel-matcher-language-reference)
- [https://docs.cloud.google.com/service-extensions/docs/callouts-overview](https://docs.cloud.google.com/service-extensions/docs/callouts-overview)

## Supporting Pages

### "Cloud Load Balancing and Cloud CDN extensions overview \_|\_ Service Extensions\

- URL: [https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview](https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview)
- Source ID: `site-docs-reference`
- Final score: 256
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before a load balancer calls a traffic extension on the request path for a request, it does the following: Performs fault injection Selects a backend service for the request Applies Cloud Armor policies for the selected backend service Applies IAP policies for the selected backend service Applies Cloud CDN caching policies for the selected backend service in the case of global external Application Load Balancers After a load balancer calls a traffic extension on the request path for a request, it does the following: Performs URL rewrites Performs header manipulation according to the URL map and adds custom request header variables Performs redirects or routing to the selected backend service while applying timeouts and retry policies in the URL map and the load balancing settings for the backend service Performs request mirroring After a load balancer calls a traffic extension on the response path for a request, it does the following: Performs response header transformations and resolves custom response header variables Performs logging by using Cloud Logging Performs Cloud CDN caching in the case of global external Application Load Balancers Custom headers In the traffic path, edge and route extensions run at extensibility points before the stage at which the load balancer adds custom headers .
- You can configure Application Load Balancers to use the following types of extensions: Edge extensions help you manipulate request headers to influence backend service selection and the content that Cloud CDN serves from cache.
- How edge extensions work Edge extensions run first on the request processing path and let you use request headers to influence backend service selection and the content that Cloud CDN serves from cache.
- After a load balancer calls an edge extension, it does the following: Selects the backend service by evaluating the URL map Applies Google Cloud Armor policies security policies Does a cache lookup and serves from cache if there is a cache hit Applies Cloud Armor policies for the selected backend service Applies CORS policies Applies the stateful session affinity policy Applies Identity-Aware Proxy (IAP) policies for the selected backend service Calls authorization extensions, if any are configured in the processing path of the selected backend service Performs fault injection Calls traffic extensions, if any Performs URL rewrites Performs header manipulation according to the URL map and adds custom request header variables Performs redirects or routing to the selected backend service while applying timeouts and retry policies in the URL map and the load balancing settings for the backend service Performs request mirroring How authorization extensions work On the request path, authorization extensions are called after route extensions are called and a backend for the request has been selected.

### "Configure an edge extension \_|\_ Service Extensions \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/service-extensions/docs/configure-edge-extensions](https://docs.cloud.google.com/service-extensions/docs/configure-edge-extensions)
- Source ID: `site-docs-reference`
- Final score: 250
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Click Create extension . gcloud Define the plugin in a YAML file and associate it with a global forwarding rule—for example, cr-xlb-forwarding-rule . cat >edge-plugin.yaml <<EOF name: edge-ext forwardingRules: - https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/global/forwardingRules/cr-xlb-forwarding-rule loadBalancingScheme: EXTERNAL MANAGED extensionChains: - name: "chain1" matchCondition: celExpression: 'request.path.startsWith("/extensions")' extensions: - name: 'ext1' service: projects/ PROJECT ID /locations/global/wasmPlugins/ WASM PLUGIN failOpen: false supportedEvents: - REQUEST HEADERS forwardAttributes: - request.host - request.path EOF Replace the following: PROJECT ID : the project ID WASM PLUGIN : the ID or the fully qualified name of the plugin Edge extensions let you use only one regular expression per CEL expression.
- To verify that the edge extension works as expected, use the same curl command: curl FORWARDING RULE IP /extensions The output is similar to the following and indicates that the page is served from a VM in region B : Page served from region-B-vm To verify that the plugin runs only for requests with the /extension path prefix, repeat the curl command without a path. curl FORWARDING RULE IP The output is similar to the following: Page served from region-A-vm Limitations for edge extensions You can attach only one edge extension to a forwarding rule.
- Configure using plugins This section uses an example to show you how to configure an edge extension by using a plugin that rewrites the :host request header to service-extensions.com when the path matches /extensions .
- Edge extensions run in the request processing path when the load balancer receives request headers and before it evaluates the URL map or calls Cloud CDN, which lets you influence caching and routing.

### "CEL matcher language reference \_|\_ Service Extensions \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/service-extensions/docs/cel-matcher-language-reference](https://docs.cloud.google.com/service-extensions/docs/cel-matcher-language-reference)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- Sample expressions Match all requests to host example.com with backend service bs1 in 123 as the final destination: request.host == "example.com" && request.backend service name == "bs1" && request.backend service project number == 123 Match all requests for the path /inventory with an HTTP header Hello : request.path.endsWith("/inventory") && request.headers["Hello"] != "" Limitations The following limitations apply to CEL expressions when specified for Service Extensions: Maximum expressions per extension: 1 for edge extensions and 5 for other extensions Maximum number of characters per regular expression: 100 Maximum number of characters per CEL expression: 500 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Not applicable for edge extensions. request.backend service project number int When using Shared VPC, the project number of the backend service to which the request is forwarded.
- The keys in this map are in lowercase. request.method string The HTTP request method, such as GET or POST . request.host string Convenience equivalent to request.headers['host'] . request.path string The requested HTTP URL path. request.query string The HTTP URL query in the format of name1=value&name2=value2 , as it appears in the first line of the HTTP request.
- Edge extensions let you use only one regular expression per CEL expression. x.lower() Returns the lowercase value of string x . x.upper() Returns the uppercase value of string x . int(x) Converts the string result of x to an int type.

### "Cloud Load Balancing callouts overview \_|\_ Service Extensions \_|\_ Google\

- URL: [https://docs.cloud.google.com/service-extensions/docs/callouts-overview](https://docs.cloud.google.com/service-extensions/docs/callouts-overview)
- Source ID: `site-docs-reference`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- For example, to modify only request headers for route and traffic extensions, set the supported events field in the extension to REQUEST HEADERS .
- The ext proc protocol lets the extension service respond to events in the lifecycle of an HTTP request by examining and modifying the headers or the body of the request.
- The service can modify, add, or remove any original request headers and update HTTP response headers that are sent to the client.
- How callouts work with ext proc An abbreviated version of the ext proc gRPC API is as follows. // The gRPC API to be implemented by the external processing server service ExternalProcessor { rpc Process ( stream ProcessingRequest ) returns ( stream ProcessingResponse ) { } } // Envoy sets one of these fields depending on the processing stage. message ProcessingRequest { oneof request { HttpHeaders request headers = 2 ; HttpHeaders response headers = 3 ; HttpBody request body = 4 ; HttpBody response body = 5 ; } } message ProcessingResponse { oneof response { HeadersResponse request headers = 1 ; HeadersResponse response headers = 2 ; BodyResponse request body = 3 ; BodyResponse response body = 4 ; ImmediateResponse immediate response = 7 ; } } After receiving the headers for an HTTP request, the load balancer sends the ProcessingRequest message to the extension service with the request headers field set to the HTTP headers from the client.

