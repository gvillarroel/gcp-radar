---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T18:40:29.748Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "TargetServer strict SSL enforcement"
feature_slug: "targetserver-strict-ssl-enforcement"
latest_feature_date: "2024-05-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/add-spike-arrest"
keywords:
  - "targetserver"
  - "configurations"
  - "strict"
  - "enforcement"
  - "southbound"
---

# TargetServer strict SSL enforcement

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Apigee TargetServer configurations now support strict southbound SSL enforcement using the enforce setting, including service callouts.

## Extended Definition

Apigee TargetServer configurations now support strict southbound SSL enforcement using the enforce setting, including service callouts.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)
- [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/add-spike-arrest](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/add-spike-arrest)

## Supporting Pages

### Get started with Apigee Model Armor policies \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)
- Source ID: `site-docs-reference-2`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- Create a Model Armor template Create a Model Armor template for sanitizing user prompts and LLM responses: gcloud model-armor templates create --location $LOCATION TEMPLATE NAME --rai-settings-filters = '[{ "filterType":"HATE SPEECH", "confidenceLevel": "MEDIUM AND ABOVE" },{ "filterType": "HARASSMENT", "confidenceLevel": "MEDIUM AND ABOVE" },{ "filterType": "SEXUALLY EXPLICIT", "confidenceLevel": "MEDIUM AND ABOVE" }]' --basic-config-filter-enforcement = enabled --pi-and-jailbreak-filter-settings-enforcement = enabled --pi-and-jailbreak-filter-settings-confidence-level = LOW AND ABOVE --malicious-uri-filter-settings-enforcement = enabled --template-metadata-custom-llm-response-safety-error-code = 798 --template-metadata-custom-llm-response-safety-error-message = "test template llm response evaluation failed" --template-metadata-custom-prompt-safety-error-code = 799 --template-metadata-custom-prompt-safety-error-message = "test template prompt evaluation failed" --template-metadata-ignore-partial-invocation-failures --template-metadata-log-operations --template-metadata-log-sanitize-operations Substitute TEMPLATE NAME with the name of the template you want to create.
- Policy caught the offending text. filter matched: RAIMatchesFound: false, SDPMatchesFound: false, PIMatchesFound: true , CSAMMatchesFound: false, URIMatchesFound: false" , "detail" : { "errorcode" : "steps.sanitize.user.prompt.FilterMatched" } } } Working with Model Armor policies The following sections provide examples of common configurations for Model Armor policies.
- Before using the Model Armor policies, we recommend that you carefully review the Model Armor documentation to make sure you understand the supported use cases, quota restrictions, regional availability, and pricing specific to Model Armor.
- Increase quotas for dependent services There are no Apigee quotarestrictions on the number of requests that can be sent to Model Armor through Apigee.

### Add the SpikeArrest policy to your API \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/add-spike-arrest](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/add-spike-arrest)
- Source ID: `site-docs-reference-2`
- Final score: 30
- Re-rank relevance: N/A

### Get started with the Apigee Extension Processor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- Source ID: `site-docs-reference-2`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- For Regional Application Load Balancers, the networkConfigs can't be updated; you must delete and recreate the extension to modify network configurations. extensions : updates the name , matchCondition , failOpen , hostname , and supportedEvents fields. extensionProcessor : updates the extensionProcessor field.
- This page describes how to configure the Apigee Extension Processor to enable API policy enforcement for API traffic using a Service Extensions-enabled load balancer.

