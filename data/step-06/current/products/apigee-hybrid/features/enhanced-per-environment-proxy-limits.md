---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:54:52.836Z"
product_name: "Apigee hybrid"
product_slug: "apigee-hybrid"
feature_name: "Enhanced per-environment proxy limits"
feature_slug: "enhanced-per-environment-proxy-limits"
latest_feature_date: "2024-12-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/best-practices-api-proxy-design-and-development"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies"
keywords:
  - "enhanced"
  - "limits"
  - "higher"
  - "resource"
  - "environment"
  - "proxy"
  - "adds"
---

# Enhanced per-environment proxy limits

Product: Apigee hybrid
Coverage: MEDIUM

## Step 02 Summary

Adds higher per-environment API proxy and resource limits for new Apigee Hybrid organizations, including automatic partitioning into replica sets when more than 50 proxies are deployed.

## Extended Definition

Adds higher per-environment API proxy and resource limits for new Apigee Hybrid organizations, including automatic partitioning into replica sets when more than 50 proxies are deployed.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref)
- [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/best-practices-api-proxy-design-and-development](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/best-practices-api-proxy-design-and-development)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)

## Supporting Pages

### Configuration property reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref)
- Source ID: `site-docs-reference`
- Final score: 193
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Apply changes to customAutoscaling.enabled by updating the apigee-telemetry chart. enhanceProxyLimits Advanced Introduced in version: 1.14.0 Default value: false Chart: apigee-org , apigee-virtualhost Required enhanceProxyLimits is required for Apigee's Enhanced per-environment proxy limits feature.
- Set this to enhanceProxyLimits: true if your hybrid organization is entitled for Enhanced per-environment proxy limits.
- If using Enhanced per-environment proxy limits , this will be applied to all replicasets for the environment.
- If using Enhanced per-environment proxy limits , this will be applied to all replicasets for the environment.

### "Best practices for API proxy design and development with Apigee \_|\_ Google\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/best-practices-api-proxy-design-and-development](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/best-practices-api-proxy-design-and-development)
- Source ID: `site-docs-reference`
- Final score: 134
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Framework-style coding Framework-style coding involves storing API proxy resources in your own version control system for reuse across local development environments.
- Users who require large payload processing can configure a higher limit using the <Properties> element in the ProxyEndpoint or TargetEndpoint configurations of their API proxies.
- If your organization uses Pay-as-you-go billing , we recommend using configurable limits for large payloads only for API proxies deployed in Comprehensive environment.
- For example, to reuse a policy, store it in source control so that developers can sync to it and use it in their own proxy development environments.

### "Get started with semantic caching policies \_|\_ Apigee \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)
- Source ID: `site-docs-reference`
- Final score: 126
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Increase quotas for dependent services If you experience performance bottlenecks resulting from higher queries per second (QPS), you may need to increase the following quotas for dependent services in your Google Cloud project: Online prediction requests per minute per region (select by region) Regional online prediction requests per base model per minute per region (select by region and the textembedding-gecko model) Matching Engine stream update requests per minute per region (select by region) To increase a quota for one of these services: Go to the Quota & System Limits page: Go to Quota & System Limits In the filter bar, enter name of the specific quota you want to increase, along with the region and model , name if relevant.
- To confirm that the environment variables are set correctly, run the following command and review the output: echo $PROJECT ID $REGION $RUNTIME HOSTNAME Set the project Set the Google Cloud project in your development environment: gcloud auth login gcloud config set project $PROJECT ID Overview The semantic caching policies help Apigee users with LLM models to intelligently serve identical or semantically similar prompts efficiently, minimizing backend API calls and reducing resource consumption.
- Before creating the API proxy, set the following environment variable: export PUBLIC DOMAIN NAME = $( gcloud ai index-endpoints describe $INDEX ENDPOINT ID --region = $REGION --project = $PROJECT ID grep "publicEndpointDomainName" awk '{print $2}' ) To create a proxy for use with semantic caching: Go to the API proxies page in the Google Cloud console.
- In the Environment list, select the environment where you want to deploy the proxy.

