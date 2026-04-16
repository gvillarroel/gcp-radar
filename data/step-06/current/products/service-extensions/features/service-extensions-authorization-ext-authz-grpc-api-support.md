---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:47.666Z"
product_name: "Service Extensions"
product_slug: "service-extensions"
feature_name: "Service Extensions authorization ext_authz gRPC API support"
feature_slug: "service-extensions-authorization-ext-authz-grpc-api-support"
latest_feature_date: "2025-11-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-extensions/docs/configure-authorization-extensions"
  - "https://docs.cloud.google.com/service-extensions/docs/callouts-overview"
  - "https://docs.cloud.google.com/service-extensions/docs/manage-extensions"
  - "https://docs.cloud.google.com/service-extensions/docs/configure-route-extensions"
keywords:
  - "extensions"
  - "authorization"
  - "ext"
  - "authz"
  - "grpc"
  - "api"
  - "now"
  - "the"
---

# Service Extensions authorization ext_authz gRPC API support

Product: Service Extensions
Coverage: MEDIUM

## Step 02 Summary

Authorization extensions now support the ext_authz Envoy gRPC API in addition to ext_proc, enabling broader integration with authorization ecosystems.

## Extended Definition

Authorization extensions now support the ext_authz Envoy gRPC API in addition to ext_proc, enabling broader integration with authorization ecosystems.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-extensions/docs/configure-authorization-extensions](https://docs.cloud.google.com/service-extensions/docs/configure-authorization-extensions)
- [https://docs.cloud.google.com/service-extensions/docs/callouts-overview](https://docs.cloud.google.com/service-extensions/docs/callouts-overview)
- [https://docs.cloud.google.com/service-extensions/docs/manage-extensions](https://docs.cloud.google.com/service-extensions/docs/manage-extensions)
- [https://docs.cloud.google.com/service-extensions/docs/configure-route-extensions](https://docs.cloud.google.com/service-extensions/docs/configure-route-extensions)

## Supporting Pages

### "Configure an authorization extension \_|\_ Service Extensions \_|\_ Google\

- URL: [https://docs.cloud.google.com/service-extensions/docs/configure-authorization-extensions](https://docs.cloud.google.com/service-extensions/docs/configure-authorization-extensions)
- Source ID: `site-docs-reference`
- Final score: 298
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use the sample values provided. cat >authz-extension.yaml <<EOF name: my-authz-ext authority: ext11.com loadBalancingScheme: INTERNAL MANAGED service: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/us-west1/backendServices/authz-service forwardHeaders: - Authorization failOpen: false timeout: "0.1s" wireFormat: EXT AUTHZ GRPC forwardAttributes: - request.mcp param - connection.client cert leaf EOF Replace PROJECT ID with the project ID .
- The CUSTOM action indicates that an extension is being used. cat >authz-policy.yaml <<EOF name: my-authz-policy target: loadBalancingScheme: INTERNAL MANAGED resources: - "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/us-east1/forwardingRules/fr1" action: CUSTOM customProvider: authzExtension: resources: - "projects/ PROJECT ID /locations/us-east1/authzExtensions/my-authz-ext" EOF Import the authorization policy to the project.
- Use the gcloud network-security authz-policies import command with the following sample values. gcloud network-security authz-policies import my-authz-policy \ --source=authz-policy.yaml \ --location=us-east1 Limitations for authorization extensions The following are some limitations of authorization extensions: An authorization policy can have only one authorization extension.
- Use the gcloud service-extensions authz-extensions import command with the following sample values. gcloud service-extensions authz-extensions import my-authz-ext \ --source=authz-extension.yaml \ --location=us-east1 If you want to set the protocol to ext authz , use the gcloud beta service-extensions authz-extensions import command instead.

### "Cloud Load Balancing callouts overview \_|\_ Service Extensions \_|\_ Google\

- URL: [https://docs.cloud.google.com/service-extensions/docs/callouts-overview](https://docs.cloud.google.com/service-extensions/docs/callouts-overview)
- Source ID: `site-docs-reference`
- Final score: 272
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The ext authz API supports only authorization callout extensions.
- How callouts work with ext proc An abbreviated version of the ext proc gRPC API is as follows. // The gRPC API to be implemented by the external processing server service ExternalProcessor { rpc Process ( stream ProcessingRequest ) returns ( stream ProcessingResponse ) { } } // Envoy sets one of these fields depending on the processing stage. message ProcessingRequest { oneof request { HttpHeaders request headers = 2 ; HttpHeaders response headers = 3 ; HttpBody request body = 4 ; HttpBody response body = 5 ; } } message ProcessingResponse { oneof response { HeadersResponse request headers = 1 ; HeadersResponse response headers = 2 ; BodyResponse request body = 3 ; BodyResponse response body = 4 ; ImmediateResponse immediate response = 7 ; } } After receiving the headers for an HTTP request, the load balancer sends the ProcessingRequest message to the extension service with the request headers field set to the HTTP headers from the client.
- Supported backends for user-managed callout backend services You can host user-managed callout extensions on a backend service that uses one of the following types of backends that run Envoy gRPC services: All managed and unmanaged instance group backends All zonal NEGs All hybrid connectivity NEGs Private Service Connect NEGs pointing to VPC services Serverless NEGs pointing to Cloud Run services Note: When hosting the extension on Cloud Run, the Cloud Run service must listen on a plaintext gRPC port.
- The following are the limitations with header manipulation: Header manipulation isn't supported for the following headers: X-user-IP CDN-Loop Headers starting with X-Forwarded , X-Google , X-GFE , or X-Amz- connection keep-alive transfer-encoding , te upgrade proxy-connection , proxy-authenticate , proxy-authorization trailers For traffic and authorization extensions, header manipulation is also not supported for these: :method , :authority , :scheme , or host headers.

### Manage extensions \_|\_ Service Extensions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-extensions/docs/manage-extensions](https://docs.cloud.google.com/service-extensions/docs/manage-extensions)
- Source ID: `site-docs-reference`
- Final score: 252
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the confirmation message box, to confirm the operation, click Delete . gcloud Authorization extensions To delete a authorization extension, use the gcloud service-extensions authz-extensions delete command . gcloud service-extensions authz-extensions delete EXTENSION ID \ --location LOCATION Replace the following: EXTENSION ID : the ID or the fully qualified name of the authorization extension LOCATION : the location of the backend Edge extensions To delete an edge extension, use the gcloud service-extensions lb-edge-extensions delete command . gcloud service-extensions lb-edge-extensions delete EXTENSION ID \ --location LOCATION Replace the following: EXTENSION ID : the ID or the fully qualified name of the edge extension LOCATION : the location of the backend Route extensions To delete a route extension, use the gcloud service-extensions lb-route-extensions delete command . gcloud service-extensions lb-route-extensions delete EXTENSION ID \ --location LOCATION Replace the following: EXTENSION ID : the ID or the fully qualified name of the route extension LOCATION : the location of the backend Traffic extensions To delete a traffic extension, use the gcloud service-extensions lb-traffic-extensions delete command . gcloud service-extensions lb-traffic-extensions delete EXTENSION ID \ --location LOCATION Replace the following: EXTENSION ID : the ID or the fully qualified name of the traffic extension LOCATION : the location of the backend What's next Manage plugins Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The name of the backend service is a link that you can click to view its details and, if required, edit it. gcloud Authorization extensions To view the details of an authorization extension, use the gcloud service-extensions authz-extensions describe command . gcloud service-extensions authz-extensions describe EXTENSION ID \ --location LOCATION Replace the following: EXTENSION ID : the ID or the fully qualified name of the route extension LOCATION : the location of the extension resource Edge extensions To view the details of an edge extension, use the gcloud service-extensions lb-edge-extensions describe command . gcloud service-extensions lb-edge-extensions describe EXTENSION ID \ --location LOCATION Replace the following: EXTENSION ID : the ID or the fully qualified name of the edge extension LOCATION : the location of the extension resource Route extensions To view the details of a route extension, use the gcloud service-extensions lb-route-extensions describe command . gcloud service-extensions lb-route-extensions describe EXTENSION ID \ --location LOCATION Replace the following: EXTENSION ID : the ID or the fully qualified name of the route extension LOCATION : the location of the extension resource Traffic extensions To view the details of a traffic extension, use the gcloud service-extensions lb-traffic-extensions describe command . gcloud service-extensions lb-traffic-extensions describe EXTENSION ID \ --location LOCATION Replace the following: EXTENSION ID : the ID or the fully qualified name of the traffic extension LOCATION : the location of the backend Edit an extension Console Go to the Service Extensions page.
- To delete the extension , click Delete . gcloud Authorization extensions To list the authorization extensions in the current project, use the gcloud service-extensions authz-extensions list command . gcloud service-extensions authz-extensions list \ --location LOCATION Replace LOCATION with the location of the extension resource.
- For more information, see the pages about how to configure route extensions , authorization extensions , and traffic extensions .

### "Configure a route extension \_|\_ Service Extensions \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/service-extensions/docs/configure-route-extensions](https://docs.cloud.google.com/service-extensions/docs/configure-route-extensions)
- Source ID: `site-docs-reference`
- Final score: 226
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Click Create extension . gcloud Define the plugin in a YAML file and associate it with a global forwarding rule—for example, cr-ilb-forwarding-rule . cat >route-plugin.yaml <<EOF name: route-ext forwardingRules: - https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /forwardingRules/cr-ilb-forwarding-rule loadBalancingScheme: INTERNAL MANAGED extensionChains: - name: "chain1" matchCondition: celExpression: 'request.path.startsWith("/extensions")' extensions: - name: 'ext1' service: projects/ PROJECT ID /locations/ LOCATION /wasmPlugins/ WASM PLUGIN failOpen: false supportedEvents: - REQUEST HEADERS forwardAttributes: - request.host - request.path EOF Replace the following: PROJECT ID : the project ID .
- Use the sample values provided. cat >route.yaml <<EOF name: route-ext forwardingRules: - https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/us-west1/forwardingRules/l7-ilb-forwarding-rule loadBalancingScheme: INTERNAL MANAGED extensionChains: - name: "chain1" matchCondition: celExpression: 'request.path.startsWith("/extensions")' extensions: - name: 'ext11' authority: ext11.com service: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/us-west1/backendServices/l7-ilb-callout-service failOpen: false timeout: 0.1s metadata: "key": "value" "fr": "forwarding rule id" forwardAttributes: - request.host - request.path EOF Replace PROJECT ID with the project ID .
- A route extension for an Application Load Balancer points to the following resources: A forwarding rule to attach to A plugin or a callout backend service whose backends run the ext proc gRPC API A route extension groups related extension services into a chain.
- To verify that the route extension works as expected, use the same curl command: curl FORWARDING RULE IP /extensions The output is similar to the following and indicates that the page is served from a VM in region B : Page served from region-B-vm To verify that the plugin runs only for requests with the /extension path prefix, repeat the curl command without a path. curl FORWARDING RULE IP The output is similar to the following: Page served from region-A-vm Configure using callouts This section shows you how to configure a route extension by using a callout.

