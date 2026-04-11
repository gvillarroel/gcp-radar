---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T01:24:42.836Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Apigee Extension Processor request/response body processing"
feature_slug: "apigee-extension-processor-request-response-body-processing"
latest_feature_date: "2025-05-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart"
keywords:
  - "body transform in extension processor"
  - "load balancer service extensions"
  - "Extension Processor body"
  - "response body processing"
  - "request body processing"
  - "request and response bodies"
  - "body processing"
  - "Extension Processor proxy"
---

# Apigee Extension Processor request/response body processing

Product: Apigee X
Coverage: LOW

## Step 02 Summary

Load balancer service extensions can configure the Apigee Extension Processor proxy to process request bodies, response bodies, or both.

## Extended Definition

The Apigee Extension Processor is an Apigee API proxy used to apply API management policies to load balancer traffic via service extensions, and it is created and attached as part of that extension processor setup. The provided excerpt supports this proxy role and attachment flow, but it does not directly document configuration for request-body versus response-body processing behavior, so that part should be treated as weaker evidence.

## Evidence Summary

The cited page provides evidence that an Extension Processor proxy is created and attached to process load balancer API traffic, but it does not explicitly describe request/response body transformation options.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)

## Supporting Pages

### Get started with the Apigee Extension Processor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: WEAK
- Re-rank rationale: The page explains policy-based traffic processing flow, but it does not explicitly define request/response body processing capabilities.

Evidence snippets:
- The XML specification for the VerifyAPIKey policy included in the Extension Processor proxy should appear similar to the following: <?xml version="1.0" encoding="UTF-8" standalone="yes"?> <VerifyAPIKey continueOnError="false" enabled="true" name="VA-verify-api-key"> <DisplayName>VA-verify-api-key</DisplayName> <Properties/> <APIKey ref="request.queryparam.x-api-key"/> </VerifyAPIKey> Deploy the new proxy revision.
- Attach the VerifyAPIKey policy to the proxy To attach a VerifyAPIKey policy to the Extension Processor proxy: In the Google Cloud console, go to the Apigee > Proxy Development > API Proxies page.
- Create the Extension Processor proxy The Extension Processor proxy is an Apigee API proxy that is used to apply API management policies to the load balancer traffic.
- Go to API Proxies Select the Extension Processor proxy you created in Create an extension processor section.

