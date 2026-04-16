---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:47.673Z"
product_name: "Service Extensions"
product_slug: "service-extensions"
feature_name: "Service Extensions support for Cloud Run backends via serverless NEGs"
feature_slug: "service-extensions-support-for-cloud-run-backends-via-serverless-negs"
latest_feature_date: "2024-09-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-extensions/docs/callouts-overview"
  - "https://docs.cloud.google.com/service-extensions/docs/configure-traffic-extensions"
  - "https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview"
  - "https://docs.cloud.google.com/service-extensions/docs/configure-route-extensions"
keywords:
  - "extensions"
  - "for"
  - "run"
  - "backends"
  - "via"
  - "serverless"
  - "negs"
  - "can"
---

# Service Extensions support for Cloud Run backends via serverless NEGs

Product: Service Extensions
Coverage: MEDIUM

## Step 02 Summary

Service Extensions can now be hosted on backend services that use serverless network endpoint groups pointing to Cloud Run services.

## Extended Definition

Service Extensions can now be hosted on backend services that use serverless network endpoint groups pointing to Cloud Run services.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-extensions/docs/callouts-overview](https://docs.cloud.google.com/service-extensions/docs/callouts-overview)
- [https://docs.cloud.google.com/service-extensions/docs/configure-traffic-extensions](https://docs.cloud.google.com/service-extensions/docs/configure-traffic-extensions)
- [https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview](https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview)
- [https://docs.cloud.google.com/service-extensions/docs/configure-route-extensions](https://docs.cloud.google.com/service-extensions/docs/configure-route-extensions)

## Supporting Pages

### "Cloud Load Balancing callouts overview \_|\_ Service Extensions \_|\_ Google\

- URL: [https://docs.cloud.google.com/service-extensions/docs/callouts-overview](https://docs.cloud.google.com/service-extensions/docs/callouts-overview)
- Source ID: `site-docs-reference`
- Final score: 228
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported backends for user-managed callout backend services You can host user-managed callout extensions on a backend service that uses one of the following types of backends that run Envoy gRPC services: All managed and unmanaged instance group backends All zonal NEGs All hybrid connectivity NEGs Private Service Connect NEGs pointing to VPC services Serverless NEGs pointing to Cloud Run services Note: When hosting the extension on Cloud Run, the Cloud Run service must listen on a plaintext gRPC port.
- Body processing modes For extensions that support body processing, you can configure one of the following two send modes for request and response body processing by setting the value of the request body send mode or response body send mode fields, respectively.
- For route and traffic extensions, callouts can execute asynchronously when observabilityMode for the extension is set to true and the body processing mode is STREAMED (default).
- For route extensions, the callout backend service can't override the processing mode of the ext proc stream.

### "Configure a traffic extension \_|\_ Service Extensions \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/service-extensions/docs/configure-traffic-extensions](https://docs.cloud.google.com/service-extensions/docs/configure-traffic-extensions)
- Source ID: `site-docs-reference`
- Final score: 212
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use the sample values provided. cat >traffic.yaml <<EOF name: traffic-ext forwardingRules: - https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/us-west1/forwardingRules/l7-ilb-forwarding-rule loadBalancingScheme: INTERNAL MANAGED extensionChains: - name: "chain1" matchCondition: celExpression: 'request.host == "example.com"' extensions: - name: 'ext11' authority: ext11.com service: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/us-west1/backendServices/l7-ilb-callout-service failOpen: false timeout: 0.1s metadata: "key": "value" "fr": "forwarding rule id" supportedEvents: - RESPONSE HEADERS forwardAttributes: - request.host - request.path EOF Replace PROJECT ID with the project ID .
- HTTP/1.1 200 OK ... content-length: 46 content-type: text/ hello: service-extensions via: 1.1 google Page served from: l7-ilb-backend-example-1c7t To validate that the extension targets only example.com traffic, repeat the curl command without the host header. curl -D - FORWARDING RULE IP The output is similar to the following: HTTP/1.1 200 OK ... content-length: 46 content-type: text/html via: 1.1 google Page served from: l7-ilb-backend-example-1c7t What's next View Rust, Go, and C++ plugin examples and testing tools in the Service Extensions GitHub repository for plugins .
- HTTP/1.1 200 OK ... content-length: 46 content-type: text/ hello: service-extensions via: 1.1 google To validate that the extension targets only example.com traffic, repeat the curl command without the host header. curl -D - FORWARDING RULE IP The output is similar to the following: HTTP/1.1 200 OK ... content-length: 46 content-type: text/html via: 1.1 google Configure traffic extensions to user-managed services by using callouts This section shows you how to configure a traffic extension to a user-managed callout backend service by using a callout.
- A traffic extension for an Application Load Balancer points to the following resources: A forwarding rule to attach to A plugin or a callout backend service whose backends run the ext proc gRPC API A traffic extension groups related extension services into one or more chains.

### "Cloud Load Balancing and Cloud CDN extensions overview \_|\_ Service Extensions\

- URL: [https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview](https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview)
- Source ID: `site-docs-reference`
- Final score: 187
- Re-rank relevance: N/A

Evidence snippets:
- Before a load balancer calls a traffic extension on the request path for a request, it does the following: Performs fault injection Selects a backend service for the request Applies Cloud Armor policies for the selected backend service Applies IAP policies for the selected backend service Applies Cloud CDN caching policies for the selected backend service in the case of global external Application Load Balancers After a load balancer calls a traffic extension on the request path for a request, it does the following: Performs URL rewrites Performs header manipulation according to the URL map and adds custom request header variables Performs redirects or routing to the selected backend service while applying timeouts and retry policies in the URL map and the load balancing settings for the backend service Performs request mirroring After a load balancer calls a traffic extension on the response path for a request, it does the following: Performs response header transformations and resolves custom response header variables Performs logging by using Cloud Logging Performs Cloud CDN caching in the case of global external Application Load Balancers Custom headers In the traffic path, edge and route extensions run at extensibility points before the stage at which the load balancer adds custom headers .
- After a load balancer calls a route extension for a request, it does the following: Selects the backend service by evaluating the URL map Applies Cloud Armor policies for the selected backend service Applies IAP policies for the selected backend service Performs fault injection Performs request header transformations and resolves custom request header variables Calls traffic extensions, if they exist in the processing path of the selected backend service Performs URL rewrites Performs redirects or routing to the selected backend service and applies timeouts and retry policies in the URL map and other load balancing settings for the backend service How traffic extensions work Load balancers run traffic extensions last in the request processing path and first in the response processing path.
- How route extensions work Route extensions run first in the request processing path when the load balancer receives request headers and before it evaluates the URL map .
- Limitations for extensions A forwarding rule can have only one LbEdgeExtension resource, one LbTrafficExtension resource, and one LbRouteExtension resource.

### "Configure a route extension \_|\_ Service Extensions \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/service-extensions/docs/configure-route-extensions](https://docs.cloud.google.com/service-extensions/docs/configure-route-extensions)
- Source ID: `site-docs-reference`
- Final score: 175
- Re-rank relevance: N/A

Evidence snippets:
- Use the sample values provided. cat >route.yaml <<EOF name: route-ext forwardingRules: - https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/us-west1/forwardingRules/l7-ilb-forwarding-rule loadBalancingScheme: INTERNAL MANAGED extensionChains: - name: "chain1" matchCondition: celExpression: 'request.path.startsWith("/extensions")' extensions: - name: 'ext11' authority: ext11.com service: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/us-west1/backendServices/l7-ilb-callout-service failOpen: false timeout: 0.1s metadata: "key": "value" "fr": "forwarding rule id" forwardAttributes: - request.host - request.path EOF Replace PROJECT ID with the project ID .
- To verify that the route extension works as expected, use the same curl command: curl FORWARDING RULE IP /extensions The output is similar to the following and indicates that the page is served from a VM in region B : Page served from region-B-vm To verify that the plugin runs only for requests with the /extension path prefix, repeat the curl command without a path. curl FORWARDING RULE IP The output is similar to the following: Page served from region-A-vm Configure using callouts This section shows you how to configure a route extension by using a callout.
- Use the gcloud compute url-maps add-path-matcher command with the following sample values: gcloud compute url-maps add-path-matcher gl7-gilb-url-map \ --path-matcher-name=rewrite-host \ --default-service=service-two \ --new-hosts=service-extensions.com \ --location=global Set up a way to send test requests to your service (for example, by running curl).
- A route extension for an Application Load Balancer points to the following resources: A forwarding rule to attach to A plugin or a callout backend service whose backends run the ext proc gRPC API A route extension groups related extension services into a chain.

