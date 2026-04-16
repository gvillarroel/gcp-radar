---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:47.669Z"
product_name: "Service Extensions"
product_slug: "service-extensions"
feature_name: "Service Extensions traffic extension integration with Model Armor"
feature_slug: "service-extensions-traffic-extension-integration-with-model-armor"
latest_feature_date: "2025-09-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-extensions/docs/integration-with-google-services"
  - "https://docs.cloud.google.com/service-extensions/docs/configure-extensions-to-google-services"
  - "https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview"
  - "https://docs.cloud.google.com/service-extensions/docs/configure-traffic-extensions"
keywords:
  - "extensions"
  - "traffic"
  - "extension"
  - "integration"
  - "with"
  - "model"
  - "armor"
  - "supports"
---

# Service Extensions traffic extension integration with Model Armor

Product: Service Extensions
Coverage: MEDIUM

## Step 02 Summary

Service Extensions supports configuring traffic extensions to call the Model Armor service on supported Application Load Balancers for AI workload protection.

## Extended Definition

Service Extensions supports configuring traffic extensions to call the Model Armor service on supported Application Load Balancers for AI workload protection.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-extensions/docs/integration-with-google-services](https://docs.cloud.google.com/service-extensions/docs/integration-with-google-services)
- [https://docs.cloud.google.com/service-extensions/docs/configure-extensions-to-google-services](https://docs.cloud.google.com/service-extensions/docs/configure-extensions-to-google-services)
- [https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview](https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview)
- [https://docs.cloud.google.com/service-extensions/docs/configure-traffic-extensions](https://docs.cloud.google.com/service-extensions/docs/configure-traffic-extensions)

## Supporting Pages

### "Integration with Google services \_|\_ Service Extensions \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/service-extensions/docs/integration-with-google-services](https://docs.cloud.google.com/service-extensions/docs/integration-with-google-services)
- Source ID: `site-docs-reference`
- Final score: 288
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported Application Load Balancers for callouts to Google services Service Extensions supports traffic extensions by using callouts to selected Google services for the following Application Load Balancers : Application Load Balancers Model Armor (traffic extensions by using callouts) Global external Application Load Balancer Regional external Application Load Balancer Regional internal Application Load Balancer Cross-region internal Application Load Balancer Classic Application Load Balancer What's next Configure an extension to call a Google service Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- You can configure a traffic extension to call the Model Armor Google service to uniformly apply and enforce security policies to screen LLM prompts and responses for your networking applications.
- Home Documentation Networking Service Extensions Guides Send feedback Integration with Google services Stay organized with collections Save and categorize content based on your preferences.
- Integration with Model Armor Model Armor enhances the security of AI applications by enforcing runtime controls on LLM prompts and responses.

### "Configure an extension to call a Google service \_|\_ Service Extensions\

- URL: [https://docs.cloud.google.com/service-extensions/docs/configure-extensions-to-google-services](https://docs.cloud.google.com/service-extensions/docs/configure-extensions-to-google-services)
- Source ID: `site-docs-reference`
- Final score: 276
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use the sample values provided. cat >traffic callout service.yaml <<EOF apiVersion : networking.gke.io/v1 kind : GCPTrafficExtension metadata : name : traffic-ext spec : targetRefs : - group : "gateway.networking.k8s.io" kind : Gateway name : inference-gateway extensionChains : - name : "chain1-model-armor" matchCondition : celExpressions : - celMatcher : 'request.path == "/v1/chat/completions"' extensions : - name : extension-chain-1-model-armor googleAPIServiceName : modelarmor.us-central1.rep.googleapis.com failOpen : true supportedEvents : - RequestHeaders - RequestBody - RequestTrailers - ResponseHeaders - ResponseBody - ResponseTrailers timeout : 1s metadata : model armor settings : '[ { "model": " MODEL NAME ", "model response template id": "projects/ TEMPLATE PROJECT ID /locations/ LOCATION /templates/ RESPONSE TEMPLATE ", "user prompt template id": "projects/ TEMPLATE PROJECT ID /locations/ LOCATION /templates/ PROMPT TEMPLATE " } ]' EOF Replace the following: MODEL NAME : the name of the model as configured with the InferenceModel resource —for example, meta-llama/Llama-3.1-8B-Instruct TEMPLATE PROJECT ID : the project ID of the Model Armor templates LOCATION : the location of the Model Armor template—for example, us-central1 RESPONSE TEMPLATE : the response template for the model to use PROMPT TEMPLATE : the prompt template for the model to use In the metadata field, specify the Model Armor settings and templates to be used while screening prompts and responses corresponding to specific models.
- Use the sample values provided. cat >traffic callout service.yaml <<EOF name : traffic-ext forwardingRules : - https://www.googleapis.com/compute/v1/projects/ LB PROJECT ID /regions/us-central1/forwardingRules/ FORWARDING RULE loadBalancingScheme : INTERNAL MANAGED extensionChains : - name : "chain1-model-armor" matchCondition : celExpression : 'request.path == "/v1/chat/completions"' extensions : - name : extension-chain-1-model-armor service : modelarmor.us-central1.rep.googleapis.com failOpen : true supportedEvents : - REQUEST HEADERS - REQUEST BODY - REQUEST TRAILERS - RESPONSE HEADERS - RESPONSE BODY - RESPONSE TRAILERS timeout : 1s metadata : model armor settings : '[ { "model": " MODEL NAME ", "model response template id": "projects/ TEMPLATE PROJECT ID /locations/ LOCATION /templates/ RESPONSE TEMPLATE ", "user prompt template id": "projects/ TEMPLATE PROJECT ID /locations/ LOCATION /templates/ PROMPT TEMPLATE " } ]' EOF Replace the following: TEMPLATE PROJECT ID : the project ID of the Model Armor templates LB PROJECT ID : the project ID of the load balancer forwarding rule FORWARDING RULE : one or more forwarding rules to associate with the extension.
- This command creates the GCPTrafficExtension resource, which links your Inference Gateway to the Model Armor service. kubectl apply -f traffic callout service.yaml Grant the required roles to the Service Extensions service account.
- To verify that the traffic extension works as expected, run the same curl command: curl -v http:// ${ IP } /v1/chat/completions \ -H "Content-Type: application/json" \ -H 'Authorization: Bearer $(gcloud auth print-access-token)' \ -d '{"model": "meta-llama/Llama-3.1-8B-Instruct", "messages": [ { "role": "user", "content": "Can you remember my ITIN: 123-45-6789" } ], "max tokens": 250, "temperature": 0.1}' ``` With the service extension configured, a request with sensitive data generates an HTTP 403 Forbidden status code, logs an error message as configured in the template, and closes the connection.

### "Cloud Load Balancing and Cloud CDN extensions overview \_|\_ Service Extensions\

- URL: [https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview](https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview)
- Source ID: `site-docs-reference`
- Final score: 275
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before a load balancer calls a traffic extension on the request path for a request, it does the following: Performs fault injection Selects a backend service for the request Applies Cloud Armor policies for the selected backend service Applies IAP policies for the selected backend service Applies Cloud CDN caching policies for the selected backend service in the case of global external Application Load Balancers After a load balancer calls a traffic extension on the request path for a request, it does the following: Performs URL rewrites Performs header manipulation according to the URL map and adds custom request header variables Performs redirects or routing to the selected backend service while applying timeouts and retry policies in the URL map and the load balancing settings for the backend service Performs request mirroring After a load balancer calls a traffic extension on the response path for a request, it does the following: Performs response header transformations and resolves custom response header variables Performs logging by using Cloud Logging Performs Cloud CDN caching in the case of global external Application Load Balancers Custom headers In the traffic path, edge and route extensions run at extensibility points before the stage at which the load balancer adds custom headers .
- After a load balancer calls an edge extension, it does the following: Selects the backend service by evaluating the URL map Applies Google Cloud Armor policies security policies Does a cache lookup and serves from cache if there is a cache hit Applies Cloud Armor policies for the selected backend service Applies CORS policies Applies the stateful session affinity policy Applies Identity-Aware Proxy (IAP) policies for the selected backend service Calls authorization extensions, if any are configured in the processing path of the selected backend service Performs fault injection Calls traffic extensions, if any Performs URL rewrites Performs header manipulation according to the URL map and adds custom request header variables Performs redirects or routing to the selected backend service while applying timeouts and retry policies in the URL map and the load balancing settings for the backend service Performs request mirroring How authorization extensions work On the request path, authorization extensions are called after route extensions are called and a backend for the request has been selected.
- After a load balancer calls a route extension for a request, it does the following: Selects the backend service by evaluating the URL map Applies Cloud Armor policies for the selected backend service Applies IAP policies for the selected backend service Performs fault injection Performs request header transformations and resolves custom request header variables Calls traffic extensions, if they exist in the processing path of the selected backend service Performs URL rewrites Performs redirects or routing to the selected backend service and applies timeouts and retry policies in the URL map and other load balancing settings for the backend service How traffic extensions work Load balancers run traffic extensions last in the request processing path and first in the response processing path.
- Supported Application Load Balancers for user-managed extensions Service Extensions supports user-managed extensions for the following Application Load Balancers : Application Load Balancers Extensions Edge Route Authorization Traffic Plugins Plugins Callouts Callouts Plugins Callouts Global external Application Load Balancer ✓ ✓ ✓ ✓ Regional external Application Load Balancer ✓ Preview ✓ ✓ ✓ Preview ✓ Regional internal Application Load Balancer ✓ Preview ✓ ✓ ✓ Preview ✓ Cross-region internal Application Load Balancer ✓ ✓ ✓ ✓ ✓ Note: Extensions aren't supported on classic Application Load Balancers.

### "Configure a traffic extension \_|\_ Service Extensions \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/service-extensions/docs/configure-traffic-extensions](https://docs.cloud.google.com/service-extensions/docs/configure-traffic-extensions)
- Source ID: `site-docs-reference`
- Final score: 247
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use the sample values provided. cat >traffic.yaml <<EOF name: traffic-ext forwardingRules: - https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/us-west1/forwardingRules/l7-ilb-forwarding-rule loadBalancingScheme: INTERNAL MANAGED extensionChains: - name: "chain1" matchCondition: celExpression: 'request.host == "example.com"' extensions: - name: 'ext11' authority: ext11.com service: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/us-west1/backendServices/l7-ilb-callout-service failOpen: false timeout: 0.1s metadata: "key": "value" "fr": "forwarding rule id" supportedEvents: - RESPONSE HEADERS forwardAttributes: - request.host - request.path EOF Replace PROJECT ID with the project ID .
- Click Create extension . gcloud Define the plugin in a YAML file and associate it with a forwarding rule—for example, http-content-rule . cat >traffic-plugin.yaml <<EOF name: traffic-ext forwardingRules: - https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /forwardingRules/http-content-rule loadBalancingScheme: EXTERNAL MANAGED extensionChains: - name: "chain1" matchCondition: celExpression: 'request.host == "example.com"' extensions: - name: 'ext1' service: projects/ PROJECT ID /locations/ LOCATION /wasmPlugins/ WASM PLUGIN failOpen: false supportedEvents: - RESPONSE HEADERS forwardAttributes: - request.host - request.path EOF Replace the following: PROJECT ID : the project ID .
- HTTP/1.1 200 OK ... content-length: 46 content-type: text/ hello: service-extensions via: 1.1 google Page served from: l7-ilb-backend-example-1c7t To validate that the extension targets only example.com traffic, repeat the curl command without the host header. curl -D - FORWARDING RULE IP The output is similar to the following: HTTP/1.1 200 OK ... content-length: 46 content-type: text/html via: 1.1 google Page served from: l7-ilb-backend-example-1c7t What's next View Rust, Go, and C++ plugin examples and testing tools in the Service Extensions GitHub repository for plugins .
- HTTP/1.1 200 OK ... content-length: 46 content-type: text/ hello: service-extensions via: 1.1 google To validate that the extension targets only example.com traffic, repeat the curl command without the host header. curl -D - FORWARDING RULE IP The output is similar to the following: HTTP/1.1 200 OK ... content-length: 46 content-type: text/html via: 1.1 google Configure traffic extensions to user-managed services by using callouts This section shows you how to configure a traffic extension to a user-managed callout backend service by using a callout.

