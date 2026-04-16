---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:47.669Z"
product_name: "Service Extensions"
product_slug: "service-extensions"
feature_name: "Cloud Load Balancing authorization extensions with custom authorization engines"
feature_slug: "cloud-load-balancing-authorization-extensions-with-custom-authorization-engines"
latest_feature_date: "2025-10-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview"
  - "https://docs.cloud.google.com/service-extensions/docs/configure-authorization-extensions"
  - "https://docs.cloud.google.com/service-extensions/docs/overview"
  - "https://docs.cloud.google.com/service-extensions/docs/configure-extensions-to-google-services"
keywords:
  - "load"
  - "balancing"
  - "authorization"
  - "extensions"
  - "with"
  - "custom"
  - "engines"
  - "enable"
---

# Cloud Load Balancing authorization extensions with custom authorization engines

Product: Service Extensions
Coverage: MEDIUM

## Step 02 Summary

Cloud Load Balancing authorization extensions enable authorization policies to use custom authorization engines and are generally available.

## Extended Definition

Cloud Load Balancing authorization extensions enable authorization policies to use custom authorization engines and are generally available.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview](https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview)
- [https://docs.cloud.google.com/service-extensions/docs/configure-authorization-extensions](https://docs.cloud.google.com/service-extensions/docs/configure-authorization-extensions)
- [https://docs.cloud.google.com/service-extensions/docs/overview](https://docs.cloud.google.com/service-extensions/docs/overview)
- [https://docs.cloud.google.com/service-extensions/docs/configure-extensions-to-google-services](https://docs.cloud.google.com/service-extensions/docs/configure-extensions-to-google-services)

## Supporting Pages

### "Cloud Load Balancing and Cloud CDN extensions overview \_|\_ Service Extensions\

- URL: [https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview](https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview)
- Source ID: `site-docs-reference`
- Final score: 258
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- After a load balancer calls an edge extension, it does the following: Selects the backend service by evaluating the URL map Applies Google Cloud Armor policies security policies Does a cache lookup and serves from cache if there is a cache hit Applies Cloud Armor policies for the selected backend service Applies CORS policies Applies the stateful session affinity policy Applies Identity-Aware Proxy (IAP) policies for the selected backend service Calls authorization extensions, if any are configured in the processing path of the selected backend service Performs fault injection Calls traffic extensions, if any Performs URL rewrites Performs header manipulation according to the URL map and adds custom request header variables Performs redirects or routing to the selected backend service while applying timeouts and retry policies in the URL map and the load balancing settings for the backend service Performs request mirroring How authorization extensions work On the request path, authorization extensions are called after route extensions are called and a backend for the request has been selected.
- Before a load balancer calls a traffic extension on the request path for a request, it does the following: Performs fault injection Selects a backend service for the request Applies Cloud Armor policies for the selected backend service Applies IAP policies for the selected backend service Applies Cloud CDN caching policies for the selected backend service in the case of global external Application Load Balancers After a load balancer calls a traffic extension on the request path for a request, it does the following: Performs URL rewrites Performs header manipulation according to the URL map and adds custom request header variables Performs redirects or routing to the selected backend service while applying timeouts and retry policies in the URL map and the load balancing settings for the backend service Performs request mirroring After a load balancer calls a traffic extension on the response path for a request, it does the following: Performs response header transformations and resolves custom response header variables Performs logging by using Cloud Logging Performs Cloud CDN caching in the case of global external Application Load Balancers Custom headers In the traffic path, edge and route extensions run at extensibility points before the stage at which the load balancer adds custom headers .
- After a load balancer calls a route extension for a request, it does the following: Selects the backend service by evaluating the URL map Applies Cloud Armor policies for the selected backend service Applies IAP policies for the selected backend service Performs fault injection Performs request header transformations and resolves custom request header variables Calls traffic extensions, if they exist in the processing path of the selected backend service Performs URL rewrites Performs redirects or routing to the selected backend service and applies timeouts and retry policies in the URL map and other load balancing settings for the backend service How traffic extensions work Load balancers run traffic extensions last in the request processing path and first in the response processing path.
- Home Documentation Networking Service Extensions Guides Send feedback Cloud Load Balancing and Cloud CDN extensions overview Stay organized with collections Save and categorize content based on your preferences.

### "Configure an authorization extension \_|\_ Service Extensions \_|\_ Google\

- URL: [https://docs.cloud.google.com/service-extensions/docs/configure-authorization-extensions](https://docs.cloud.google.com/service-extensions/docs/configure-authorization-extensions)
- Source ID: `site-docs-reference`
- Final score: 256
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The CUSTOM action indicates that an extension is being used. cat >authz-policy.yaml <<EOF name: my-authz-policy target: loadBalancingScheme: INTERNAL MANAGED resources: - "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/us-east1/forwardingRules/fr1" action: CUSTOM customProvider: authzExtension: resources: - "projects/ PROJECT ID /locations/us-east1/authzExtensions/my-authz-ext" EOF Import the authorization policy to the project.
- You can configure authorization policies with authorization extensions to delegate authorization decisions to custom authorization engines.
- Use the sample values provided. cat >authz-extension.yaml <<EOF name: my-authz-ext authority: ext11.com loadBalancingScheme: INTERNAL MANAGED service: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/us-west1/backendServices/authz-service forwardHeaders: - Authorization failOpen: false timeout: "0.1s" wireFormat: EXT AUTHZ GRPC forwardAttributes: - request.mcp param - connection.client cert leaf EOF Replace PROJECT ID with the project ID .
- Service Extensions enables Application Load Balancers to send callouts to backend services to insert custom processing in the processing path.

### Service Extensions overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-extensions/docs/overview](https://docs.cloud.google.com/service-extensions/docs/overview)
- Source ID: `site-docs-root`
- Final score: 230
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Service Extensions enables the users of Google Cloud products, such as Cloud Load Balancing and Media CDN, to insert custom code directly into the data path.
- Use callouts with Cloud Load Balancing for the following: When the amount of compute or storage is arbitrary When you want to maintain state When you want to use external services, such as BigQuery or third-party applications hosted anywhere Callouts are highly flexible and support a variety of customizations.
- Cloud Load Balancing extensions Service Extensions for Cloud Load Balancing empowers users to add rich customization to the load balancing request and response processing paths for supported Application Load Balancers .
- Use plugins with Cloud Load Balancing in the following sample scenarios: Exception handling Redirect clients to a custom error page for certain response classes.

### "Configure an extension to call a Google service \_|\_ Service Extensions\

- URL: [https://docs.cloud.google.com/service-extensions/docs/configure-extensions-to-google-services](https://docs.cloud.google.com/service-extensions/docs/configure-extensions-to-google-services)
- Source ID: `site-docs-reference`
- Final score: 218
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use the sample values provided. cat >traffic callout service.yaml <<EOF name : traffic-ext forwardingRules : - https://www.googleapis.com/compute/v1/projects/ LB PROJECT ID /regions/us-central1/forwardingRules/ FORWARDING RULE loadBalancingScheme : INTERNAL MANAGED extensionChains : - name : "chain1-model-armor" matchCondition : celExpression : 'request.path == "/v1/chat/completions"' extensions : - name : extension-chain-1-model-armor service : modelarmor.us-central1.rep.googleapis.com failOpen : true supportedEvents : - REQUEST HEADERS - REQUEST BODY - REQUEST TRAILERS - RESPONSE HEADERS - RESPONSE BODY - RESPONSE TRAILERS timeout : 1s metadata : model armor settings : '[ { "model": " MODEL NAME ", "model response template id": "projects/ TEMPLATE PROJECT ID /locations/ LOCATION /templates/ RESPONSE TEMPLATE ", "user prompt template id": "projects/ TEMPLATE PROJECT ID /locations/ LOCATION /templates/ PROMPT TEMPLATE " } ]' EOF Replace the following: TEMPLATE PROJECT ID : the project ID of the Model Armor templates LB PROJECT ID : the project ID of the load balancer forwarding rule FORWARDING RULE : one or more forwarding rules to associate with the extension.
- Before you begin Identify a suitable project where you have either a project owner or editor role or the following Compute Engine IAM roles : To create instances: Compute Instance Admin (v1) ( roles/compute.instanceAdmin.v1 ) To create Cloud Load Balancing components: Compute Network Admin ( roles/compute.networkAdmin ) Enable the required APIs.
- Service Extensions enables supported Application Load Balancers to configure extensions by using callouts to Google services.
- Use the sample values provided. cat >traffic callout service.yaml <<EOF apiVersion : networking.gke.io/v1 kind : GCPTrafficExtension metadata : name : traffic-ext spec : targetRefs : - group : "gateway.networking.k8s.io" kind : Gateway name : inference-gateway extensionChains : - name : "chain1-model-armor" matchCondition : celExpressions : - celMatcher : 'request.path == "/v1/chat/completions"' extensions : - name : extension-chain-1-model-armor googleAPIServiceName : modelarmor.us-central1.rep.googleapis.com failOpen : true supportedEvents : - RequestHeaders - RequestBody - RequestTrailers - ResponseHeaders - ResponseBody - ResponseTrailers timeout : 1s metadata : model armor settings : '[ { "model": " MODEL NAME ", "model response template id": "projects/ TEMPLATE PROJECT ID /locations/ LOCATION /templates/ RESPONSE TEMPLATE ", "user prompt template id": "projects/ TEMPLATE PROJECT ID /locations/ LOCATION /templates/ PROMPT TEMPLATE " } ]' EOF Replace the following: MODEL NAME : the name of the model as configured with the InferenceModel resource —for example, meta-llama/Llama-3.1-8B-Instruct TEMPLATE PROJECT ID : the project ID of the Model Armor templates LOCATION : the location of the Model Armor template—for example, us-central1 RESPONSE TEMPLATE : the response template for the model to use PROMPT TEMPLATE : the prompt template for the model to use In the metadata field, specify the Model Armor settings and templates to be used while screening prompts and responses corresponding to specific models.

