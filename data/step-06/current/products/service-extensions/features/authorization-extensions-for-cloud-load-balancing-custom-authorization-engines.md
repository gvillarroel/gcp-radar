---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:47.673Z"
product_name: "Service Extensions"
product_slug: "service-extensions"
feature_name: "Authorization extensions for Cloud Load Balancing custom authorization engines"
feature_slug: "authorization-extensions-for-cloud-load-balancing-custom-authorization-engines"
latest_feature_date: "2024-09-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview"
  - "https://docs.cloud.google.com/service-extensions/docs/configure-authorization-extensions"
  - "https://docs.cloud.google.com/service-extensions/docs/overview"
  - "https://docs.cloud.google.com/service-extensions/docs/callouts-overview"
keywords:
  - "authorization"
  - "extensions"
  - "for"
  - "load"
  - "balancing"
  - "custom"
  - "engines"
  - "now"
---

# Authorization extensions for Cloud Load Balancing custom authorization engines

Product: Service Extensions
Coverage: MEDIUM

## Step 02 Summary

Authorization extensions now enable configuring Cloud Load Balancing authorization policies to use custom authorization engines.

## Extended Definition

Authorization extensions now enable configuring Cloud Load Balancing authorization policies to use custom authorization engines.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview](https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview)
- [https://docs.cloud.google.com/service-extensions/docs/configure-authorization-extensions](https://docs.cloud.google.com/service-extensions/docs/configure-authorization-extensions)
- [https://docs.cloud.google.com/service-extensions/docs/overview](https://docs.cloud.google.com/service-extensions/docs/overview)
- [https://docs.cloud.google.com/service-extensions/docs/callouts-overview](https://docs.cloud.google.com/service-extensions/docs/callouts-overview)

## Supporting Pages

### "Cloud Load Balancing and Cloud CDN extensions overview \_|\_ Service Extensions\

- URL: [https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview](https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview)
- Source ID: `site-docs-reference`
- Final score: 266
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- After a load balancer calls an edge extension, it does the following: Selects the backend service by evaluating the URL map Applies Google Cloud Armor policies security policies Does a cache lookup and serves from cache if there is a cache hit Applies Cloud Armor policies for the selected backend service Applies CORS policies Applies the stateful session affinity policy Applies Identity-Aware Proxy (IAP) policies for the selected backend service Calls authorization extensions, if any are configured in the processing path of the selected backend service Performs fault injection Calls traffic extensions, if any Performs URL rewrites Performs header manipulation according to the URL map and adds custom request header variables Performs redirects or routing to the selected backend service while applying timeouts and retry policies in the URL map and the load balancing settings for the backend service Performs request mirroring How authorization extensions work On the request path, authorization extensions are called after route extensions are called and a backend for the request has been selected.
- Before a load balancer calls a traffic extension on the request path for a request, it does the following: Performs fault injection Selects a backend service for the request Applies Cloud Armor policies for the selected backend service Applies IAP policies for the selected backend service Applies Cloud CDN caching policies for the selected backend service in the case of global external Application Load Balancers After a load balancer calls a traffic extension on the request path for a request, it does the following: Performs URL rewrites Performs header manipulation according to the URL map and adds custom request header variables Performs redirects or routing to the selected backend service while applying timeouts and retry policies in the URL map and the load balancing settings for the backend service Performs request mirroring After a load balancer calls a traffic extension on the response path for a request, it does the following: Performs response header transformations and resolves custom response header variables Performs logging by using Cloud Logging Performs Cloud CDN caching in the case of global external Application Load Balancers Custom headers In the traffic path, edge and route extensions run at extensibility points before the stage at which the load balancer adds custom headers .
- After a load balancer calls a route extension for a request, it does the following: Selects the backend service by evaluating the URL map Applies Cloud Armor policies for the selected backend service Applies IAP policies for the selected backend service Performs fault injection Performs request header transformations and resolves custom request header variables Calls traffic extensions, if they exist in the processing path of the selected backend service Performs URL rewrites Performs redirects or routing to the selected backend service and applies timeouts and retry policies in the URL map and other load balancing settings for the backend service How traffic extensions work Load balancers run traffic extensions last in the request processing path and first in the response processing path.
- Supported Application Load Balancers for user-managed extensions Service Extensions supports user-managed extensions for the following Application Load Balancers : Application Load Balancers Extensions Edge Route Authorization Traffic Plugins Plugins Callouts Callouts Plugins Callouts Global external Application Load Balancer ✓ ✓ ✓ ✓ Regional external Application Load Balancer ✓ Preview ✓ ✓ ✓ Preview ✓ Regional internal Application Load Balancer ✓ Preview ✓ ✓ ✓ Preview ✓ Cross-region internal Application Load Balancer ✓ ✓ ✓ ✓ ✓ Note: Extensions aren't supported on classic Application Load Balancers.

### "Configure an authorization extension \_|\_ Service Extensions \_|\_ Google\

- URL: [https://docs.cloud.google.com/service-extensions/docs/configure-authorization-extensions](https://docs.cloud.google.com/service-extensions/docs/configure-authorization-extensions)
- Source ID: `site-docs-reference`
- Final score: 248
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The CUSTOM action indicates that an extension is being used. cat >authz-policy.yaml <<EOF name: my-authz-policy target: loadBalancingScheme: INTERNAL MANAGED resources: - "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/us-east1/forwardingRules/fr1" action: CUSTOM customProvider: authzExtension: resources: - "projects/ PROJECT ID /locations/us-east1/authzExtensions/my-authz-ext" EOF Import the authorization policy to the project.
- Use the sample values provided. cat >authz-extension.yaml <<EOF name: my-authz-ext authority: ext11.com loadBalancingScheme: INTERNAL MANAGED service: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/us-west1/backendServices/authz-service forwardHeaders: - Authorization failOpen: false timeout: "0.1s" wireFormat: EXT AUTHZ GRPC forwardAttributes: - request.mcp param - connection.client cert leaf EOF Replace PROJECT ID with the project ID .
- Introduction Cloud Load Balancing lets you configure authorization policies that enforce access control on traffic entering load balancers.
- You can configure authorization policies with authorization extensions to delegate authorization decisions to custom authorization engines.

### Service Extensions overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-extensions/docs/overview](https://docs.cloud.google.com/service-extensions/docs/overview)
- Source ID: `site-docs-root`
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Load Balancing extensions Service Extensions for Cloud Load Balancing empowers users to add rich customization to the load balancing request and response processing paths for supported Application Load Balancers .
- Plugins Service Extensions helps you use prepublished plugins for your custom needs by adding them in the Cloud Load Balancing processing path.
- Use callouts with Cloud Load Balancing for the following: When the amount of compute or storage is arbitrary When you want to maintain state When you want to use external services, such as BigQuery or third-party applications hosted anywhere Callouts are highly flexible and support a variety of customizations.
- Use plugins with Cloud Load Balancing in the following sample scenarios: Exception handling Redirect clients to a custom error page for certain response classes.

### "Cloud Load Balancing callouts overview \_|\_ Service Extensions \_|\_ Google\

- URL: [https://docs.cloud.google.com/service-extensions/docs/callouts-overview](https://docs.cloud.google.com/service-extensions/docs/callouts-overview)
- Source ID: `site-docs-reference`
- Final score: 217
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For authorization extensions, the load balancer doesn't forward any request body to the callout backend service.
- The following are the limitations with header manipulation: Header manipulation isn't supported for the following headers: X-user-IP CDN-Loop Headers starting with X-Forwarded , X-Google , X-GFE , or X-Amz- connection keep-alive transfer-encoding , te upgrade proxy-connection , proxy-authenticate , proxy-authorization trailers For traffic and authorization extensions, header manipulation is also not supported for these: :method , :authority , :scheme , or host headers.
- For information about disallowed headers, see Limitations with header manipulation . dynamic metadata : includes optional metadata for use by any extensions that are called after the authorization extension, such as traffic extensions.
- Home Documentation Networking Service Extensions Guides Send feedback Cloud Load Balancing callouts overview Stay organized with collections Save and categorize content based on your preferences.

