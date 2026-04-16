---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:54:52.854Z"
product_name: "Apigee hybrid"
product_slug: "apigee-hybrid"
feature_name: "GraphQL policy JSON payload support"
feature_slug: "graphql-policy-json-payload-support"
latest_feature_date: "2022-04-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/best-practices-api-proxy-design-and-development"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/v1.16/configure-large-payload-support"
keywords:
  - "graphql"
  - "encoded"
  - "json"
  - "payloads"
  - "payload"
  - "policy"
  - "supports"
---

# GraphQL policy JSON payload support

Product: Apigee hybrid
Coverage: MEDIUM

## Step 02 Summary

The GraphQL policy now supports JSON-encoded payloads.

## Extended Definition

The GraphQL policy now supports JSON-encoded payloads.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/best-practices-api-proxy-design-and-development](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/best-practices-api-proxy-design-and-development)
- [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref)
- [https://docs.cloud.google.com/apigee/docs/hybrid/v1.16/configure-large-payload-support](https://docs.cloud.google.com/apigee/docs/hybrid/v1.16/configure-large-payload-support)

## Supporting Pages

### "Best practices for API proxy design and development with Apigee \_|\_ Google\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/best-practices-api-proxy-design-and-development](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/best-practices-api-proxy-design-and-development)
- Source ID: `site-docs-reference`
- Final score: 126
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, use the standard AssignMessage policy and ExtractVariables policy policies instead of JavaScript (when possible) to create payloads, extract information from payloads (XPath, JSONPath), and so on.
- Build a ServiceCallout request message using the AssignMessage policy, and populate the request object in a message variable. (This includes setting the request payload, path, and method.) The URL that is configured within the policy requires the protocol specification, meaning the protocol portion of the URL, https:// for example, cannot be specified by a variable.
- Consider the following recommended strategies for handling large message sizes in Apigee: We highly recommend isolating API proxies that frequently handle large payloads in a dedicated environment to avoid a potential "noisy neighbor" scenario.
- System CPU and memory resources are consumed in greater quantities by proxies that manage large payloads, especially when used in conjunction with policies that interact with large payloads.

### Configuration property reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref)
- Source ID: `site-docs-reference`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- The secret file should contain the key: data: redis.auth.password: encoded value See also: redis.auth.password Storing data in a Kubernetes secret Secrets in the Kubernetes documentation Creating a Secret Using kubectl in the Kubernetes documentation redis.envoy.image.pullPolicy Advanced Introduced in version: 1.6.0 Default value: IfNotPresent Chart: apigee-redis Determines when kubelet pulls the pod's Docker image.
- Note: If you are using message payloads larger than 10MB for this environment, you must make the following configuration changes: Increase the heap size to 4Gi.
- Note: If you are using message payloads larger than 10MB for this environment, you must make the following configuration changes: Increase the heap size to 4Gi.
- Note: If you are using message payloads larger than 10MB, you must make the following configuration changes: Increase the heap size to 4Gi.

### "Configure large message payload support in Apigee hybrid \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.16/configure-large-payload-support](https://docs.cloud.google.com/apigee/docs/hybrid/v1.16/configure-large-payload-support)
- Source ID: `site-docs-reference-required-5`
- Final score: 100
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Version 1.16 (latest) keyboard arrow down Supported versions: v1.16 (latest) v1.15 v1.14 List of supported versions Unsupported versions: v1.13 v1.12 v1.11 v1.10 v1.9 v1.8 v1.7 v1.6 v1.5 v1.4 v1.3 v1.2 v1.1 Overview Apigee hybrid supports large message payloads up to 30MB with a theoretical maximum of 75MB.
- Add the following stanza to your overrides.yaml file: runtime: cwcAppend: bin setenv max mem: 4096Mi # Increase max heap size to 4 gigs resources: requests: memory: 4Gi limits: memory: 6Gi See: runtime.resources.limits.memory runtime.resources.requests.memory Upgrade the apigee-env chart for each environment in your installation: Dry run: helm upgrade ENV RELEASE NAME apigee-env/ \ --install \ --namespace APIGEE NAMESPACE \ --set env= ENV NAME \ -f OVERRIDES FILE \ --dry-run=server Upgrade the chart: helm upgrade ENV RELEASE NAME apigee-env/ \ --install \ --namespace APIGEE NAMESPACE \ --set env= ENV NAME \ -f OVERRIDES FILE Guidelines for message payloads between 30MB and 75MB Determining the optimal heap size for a Message Processor for large payload scenarios depends on your specific use case; however, Apigee offers general guidelines to assist in this process.
- Upgrade the chart: Dry run: helm upgrade ENV RELEASE NAME apigee-env/ \ --install \ --namespace APIGEE NAMESPACE \ --set env= ENV NAME \ -f OVERRIDES FILE Configure all environments to support large message payloads Changes to your runtime stanza will set the heap and memory limits for all environments in your installation.
- Configure individual environments to support large message payloads If the proxies configured to support large message payloads have endpoints in only one or a few environments in your installation, you can configure the environments to support large payloads.

