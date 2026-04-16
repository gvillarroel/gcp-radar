---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:47.666Z"
product_name: "Service Extensions"
product_slug: "service-extensions"
feature_name: "Service Extensions dynamic forwarding"
feature_slug: "service-extensions-dynamic-forwarding"
latest_feature_date: "2025-12-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-extensions/docs/lb-advanced-use-cases"
  - "https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview"
  - "https://docs.cloud.google.com/service-extensions/docs/configure-extensions-to-google-services"
  - "https://docs.cloud.google.com/service-extensions/docs/overview"
keywords:
  - "extensions"
  - "dynamic"
  - "forwarding"
  - "now"
  - "supports"
  - "allowing"
  - "tenants"
  - "to"
---

# Service Extensions dynamic forwarding

Product: Service Extensions
Coverage: MEDIUM

## Step 02 Summary

Service Extensions now supports dynamic forwarding, allowing tenants to be mapped to endpoints programmatically without updating URL maps.

## Extended Definition

Service Extensions now supports dynamic forwarding, allowing tenants to be mapped to endpoints programmatically without updating URL maps.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-extensions/docs/lb-advanced-use-cases](https://docs.cloud.google.com/service-extensions/docs/lb-advanced-use-cases)
- [https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview](https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview)
- [https://docs.cloud.google.com/service-extensions/docs/configure-extensions-to-google-services](https://docs.cloud.google.com/service-extensions/docs/configure-extensions-to-google-services)
- [https://docs.cloud.google.com/service-extensions/docs/overview](https://docs.cloud.google.com/service-extensions/docs/overview)

## Supporting Pages

### Advanced use cases \_|\_ Service Extensions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-extensions/docs/lb-advanced-use-cases](https://docs.cloud.google.com/service-extensions/docs/lb-advanced-use-cases)
- Source ID: `site-docs-reference`
- Final score: 162
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Import the traffic extension to the forwarding rule: gcloud beta service-extensions lb-traffic-extensions import traffic-ext \ --source=dynamic-ext.yaml \ --location=us-west1 With the extension configured, traffic is routed based on the extension server implementation.
- Dynamic forwarding Dynamic forwarding helps you bind thousands or even millions of tenants to individual virtual machine (VM) instances or sets of VMs.
- For the extension server, use the dynamic forwarding example in the Service Extensions GitHub repository .
- Configure a firewall rule, fw-allow-proxies , that allows traffic from the proxy subnet to VMs in your network. gcloud compute firewall-rules create fw-allow-proxies \ --network=df-network \ --action=allow \ --direction=ingress \ --source-ranges=source-range \ --target-tags=load-balanced-backend \ --rules=tcp:80,tcp:443,tcp:8080 Create a backend service , l7-ilb-backend-service , with dynamic forwarding and logging enabled: gcloud beta compute backend-services create l7-ilb-backend-service \ --ip-port-dynamic-forwarding \ --enable-logging \ --region=us-west1 Create a URL map , l7-ilb-map , for the backend service. gcloud compute url-maps create l7-ilb-map \ --default-service=l7-ilb-backend-service \ --region=us-west1 Create a target proxy , l7-ilb-proxy . gcloud compute target-http-proxies create l7-ilb-proxy \ --url-map=l7-ilb-map \ --url-map-region=us-west1 \ --region=us-west1 Create a forwarding rule and reserve an IP address for the Application Load Balancer . gcloud compute forwarding-rules create l7-ilb-forwarding-rule \ --load-balancing-scheme=INTERNAL MANAGED \ --network=lb-network \ --subnet=backend-subnet \ --subnet-region=us-west1 \ --ports=80 \ --region=us-west1 \ --target-http-proxy=l7-ilb-proxy \ --target-http-proxy-region=us-west1 Set up a callout backend service for the traffic extension.

### "Cloud Load Balancing and Cloud CDN extensions overview \_|\_ Service Extensions\

- URL: [https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview](https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview)
- Source ID: `site-docs-reference`
- Final score: 155
- Re-rank relevance: N/A

Evidence snippets:
- Before a load balancer calls a traffic extension on the request path for a request, it does the following: Performs fault injection Selects a backend service for the request Applies Cloud Armor policies for the selected backend service Applies IAP policies for the selected backend service Applies Cloud CDN caching policies for the selected backend service in the case of global external Application Load Balancers After a load balancer calls a traffic extension on the request path for a request, it does the following: Performs URL rewrites Performs header manipulation according to the URL map and adds custom request header variables Performs redirects or routing to the selected backend service while applying timeouts and retry policies in the URL map and the load balancing settings for the backend service Performs request mirroring After a load balancer calls a traffic extension on the response path for a request, it does the following: Performs response header transformations and resolves custom response header variables Performs logging by using Cloud Logging Performs Cloud CDN caching in the case of global external Application Load Balancers Custom headers In the traffic path, edge and route extensions run at extensibility points before the stage at which the load balancer adds custom headers .
- After a load balancer calls an edge extension, it does the following: Selects the backend service by evaluating the URL map Applies Google Cloud Armor policies security policies Does a cache lookup and serves from cache if there is a cache hit Applies Cloud Armor policies for the selected backend service Applies CORS policies Applies the stateful session affinity policy Applies Identity-Aware Proxy (IAP) policies for the selected backend service Calls authorization extensions, if any are configured in the processing path of the selected backend service Performs fault injection Calls traffic extensions, if any Performs URL rewrites Performs header manipulation according to the URL map and adds custom request header variables Performs redirects or routing to the selected backend service while applying timeouts and retry policies in the URL map and the load balancing settings for the backend service Performs request mirroring How authorization extensions work On the request path, authorization extensions are called after route extensions are called and a backend for the request has been selected.
- After a load balancer calls a route extension for a request, it does the following: Selects the backend service by evaluating the URL map Applies Cloud Armor policies for the selected backend service Applies IAP policies for the selected backend service Performs fault injection Performs request header transformations and resolves custom request header variables Calls traffic extensions, if they exist in the processing path of the selected backend service Performs URL rewrites Performs redirects or routing to the selected backend service and applies timeouts and retry policies in the URL map and other load balancing settings for the backend service How traffic extensions work Load balancers run traffic extensions last in the request processing path and first in the response processing path.
- Supported Application Load Balancers for user-managed extensions Service Extensions supports user-managed extensions for the following Application Load Balancers : Application Load Balancers Extensions Edge Route Authorization Traffic Plugins Plugins Callouts Callouts Plugins Callouts Global external Application Load Balancer ✓ ✓ ✓ ✓ Regional external Application Load Balancer ✓ Preview ✓ ✓ ✓ Preview ✓ Regional internal Application Load Balancer ✓ Preview ✓ ✓ ✓ Preview ✓ Cross-region internal Application Load Balancer ✓ ✓ ✓ ✓ ✓ Note: Extensions aren't supported on classic Application Load Balancers.

### "Configure an extension to call a Google service \_|\_ Service Extensions\

- URL: [https://docs.cloud.google.com/service-extensions/docs/configure-extensions-to-google-services](https://docs.cloud.google.com/service-extensions/docs/configure-extensions-to-google-services)
- Source ID: `site-docs-reference`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- Use the sample values provided. cat >traffic callout service.yaml <<EOF name : traffic-ext forwardingRules : - https://www.googleapis.com/compute/v1/projects/ LB PROJECT ID /regions/us-central1/forwardingRules/ FORWARDING RULE loadBalancingScheme : INTERNAL MANAGED extensionChains : - name : "chain1-model-armor" matchCondition : celExpression : 'request.path == "/v1/chat/completions"' extensions : - name : extension-chain-1-model-armor service : modelarmor.us-central1.rep.googleapis.com failOpen : true supportedEvents : - REQUEST HEADERS - REQUEST BODY - REQUEST TRAILERS - RESPONSE HEADERS - RESPONSE BODY - RESPONSE TRAILERS timeout : 1s metadata : model armor settings : '[ { "model": " MODEL NAME ", "model response template id": "projects/ TEMPLATE PROJECT ID /locations/ LOCATION /templates/ RESPONSE TEMPLATE ", "user prompt template id": "projects/ TEMPLATE PROJECT ID /locations/ LOCATION /templates/ PROMPT TEMPLATE " } ]' EOF Replace the following: TEMPLATE PROJECT ID : the project ID of the Model Armor templates LB PROJECT ID : the project ID of the load balancer forwarding rule FORWARDING RULE : one or more forwarding rules to associate with the extension.
- Use the sample values provided. cat >traffic callout service.yaml <<EOF apiVersion : networking.gke.io/v1 kind : GCPTrafficExtension metadata : name : traffic-ext spec : targetRefs : - group : "gateway.networking.k8s.io" kind : Gateway name : inference-gateway extensionChains : - name : "chain1-model-armor" matchCondition : celExpressions : - celMatcher : 'request.path == "/v1/chat/completions"' extensions : - name : extension-chain-1-model-armor googleAPIServiceName : modelarmor.us-central1.rep.googleapis.com failOpen : true supportedEvents : - RequestHeaders - RequestBody - RequestTrailers - ResponseHeaders - ResponseBody - ResponseTrailers timeout : 1s metadata : model armor settings : '[ { "model": " MODEL NAME ", "model response template id": "projects/ TEMPLATE PROJECT ID /locations/ LOCATION /templates/ RESPONSE TEMPLATE ", "user prompt template id": "projects/ TEMPLATE PROJECT ID /locations/ LOCATION /templates/ PROMPT TEMPLATE " } ]' EOF Replace the following: MODEL NAME : the name of the model as configured with the InferenceModel resource —for example, meta-llama/Llama-3.1-8B-Instruct TEMPLATE PROJECT ID : the project ID of the Model Armor templates LOCATION : the location of the Model Armor template—for example, us-central1 RESPONSE TEMPLATE : the response template for the model to use PROMPT TEMPLATE : the prompt template for the model to use In the metadata field, specify the Model Armor settings and templates to be used while screening prompts and responses corresponding to specific models.
- This command creates the GCPTrafficExtension resource, which links your Inference Gateway to the Model Armor service. kubectl apply -f traffic callout service.yaml Grant the required roles to the Service Extensions service account.
- Home Documentation Networking Service Extensions Guides Send feedback Configure an extension to call a Google service Stay organized with collections Save and categorize content based on your preferences.

### Service Extensions overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-extensions/docs/overview](https://docs.cloud.google.com/service-extensions/docs/overview)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- In Preview , implement dynamic forwarding , which maps tenants to endpoints programmatically.
- GKE extensions The Google Kubernetes Engine (GKE) Gateway supports using extensions to add custom code into the load balancing processing path.
- Cloud Load Balancing extensions Service Extensions for Cloud Load Balancing empowers users to add rich customization to the load balancing request and response processing paths for supported Application Load Balancers .
- Callouts to user-managed services Service Extensions lets supported Application Load Balancers send a callout from the data processing path to backend services managed by the user.

