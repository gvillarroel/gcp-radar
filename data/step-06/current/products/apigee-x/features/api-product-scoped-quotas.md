---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.139Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "API product-scoped quotas"
feature_slug: "api-product-scoped-quotas"
latest_feature_date: "2025-10-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/monetization/enforce-monetization-limits"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/publish/what-api-product"
keywords:
  - "scoped"
  - "quotas"
  - "enforce"
  - "limits"
  - "across"
  - "request"
---

# API product-scoped quotas

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

API product-scoped quotas let you enforce request limits across all API proxies within an API product.

## Extended Definition

API product-scoped quotas let you enforce request limits across all API proxies within an API product.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/monetization/enforce-monetization-limits](https://docs.cloud.google.com/apigee/docs/api-platform/monetization/enforce-monetization-limits)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)
- [https://docs.cloud.google.com/apigee/docs/api-platform/publish/what-api-product](https://docs.cloud.google.com/apigee/docs/api-platform/publish/what-api-product)

## Supporting Pages

### "Enforce monetization limits in API proxies \_|\_ Apigee \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/monetization/enforce-monetization-limits](https://docs.cloud.google.com/apigee/docs/api-platform/monetization/enforce-monetization-limits)
- Source ID: `site-docs-reference-required-3`
- Final score: 137
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information, see: Creating an API proxy Editing an API proxy Attaching a policy to a flow Debugging the MonetizationLimitsCheck policy using Debug MonetizationLimitsCheck policy Enforce monetization quotas in API proxies Note: If you add a quota after the API product has been in use, the quota calculation starts from the next monetized transaction.
- See also: Attaching a policy to a flow Verifying access tokens Monitoring and debugging the authentication policy using Debug Enforce subscriptions on API products Attach the MonetizationLimitsCheck policy to API proxies to enforce subscriptions on the API product by developer or AppGroup: If no active rate plan exists for the API product fetched during the proxy call execution, the product is deemed non-monetized, the MonetizationLimitsCheck policy does not fetch any further data, and the policy has no effect.
- Home Documentation Application development Apigee Guides Send feedback Enforce monetization limits in API proxies Stay organized with collections Save and categorize content based on your preferences.
- This page describes how to enforce monetization limits by attaching policies to API proxies in a monetized API product.

### Get started with Apigee Model Armor policies \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)
- Source ID: `site-docs-reference`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- If you experience performance bottlenecks resulting from higher queries per second (QPS), you may need to increase the following quotas for dependent services in your Google Cloud project: Online prediction requests per minute per region Regional online prediction requests per base model per minute per region Matching Engine stream update requests per minute per region To increase a quota for one of these services, reach out to Google Cloud support.
- Increase quotas for dependent services There are no Apigee quotarestrictions on the number of requests that can be sent to Model Armor through Apigee.
- Create a Model Armor template Create a Model Armor template for sanitizing user prompts and LLM responses: gcloud model-armor templates create --location $LOCATION TEMPLATE NAME --rai-settings-filters = '[{ "filterType":"HATE SPEECH", "confidenceLevel": "MEDIUM AND ABOVE" },{ "filterType": "HARASSMENT", "confidenceLevel": "MEDIUM AND ABOVE" },{ "filterType": "SEXUALLY EXPLICIT", "confidenceLevel": "MEDIUM AND ABOVE" }]' --basic-config-filter-enforcement = enabled --pi-and-jailbreak-filter-settings-enforcement = enabled --pi-and-jailbreak-filter-settings-confidence-level = LOW AND ABOVE --malicious-uri-filter-settings-enforcement = enabled --template-metadata-custom-llm-response-safety-error-code = 798 --template-metadata-custom-llm-response-safety-error-message = "test template llm response evaluation failed" --template-metadata-custom-prompt-safety-error-code = 799 --template-metadata-custom-prompt-safety-error-message = "test template prompt evaluation failed" --template-metadata-ignore-partial-invocation-failures --template-metadata-log-operations --template-metadata-log-sanitize-operations Substitute TEMPLATE NAME with the name of the template you want to create.
- This region name can be used to identify the correct Model Armor template to use for that instance For example: <SanitizeModelResponse async="false" continueOnError="false" enabled="true" name="sanitize-response"> <IgnoreUnresolvedVariables>true</IgnoreUnresolvedVariables> <DisplayName>Sanitize-Response-sample</DisplayName> <ModelArmor> <TemplateName>projects/$PROJECT/locations/ {system.region.name} /templates/$TEMPLATE NAME</TemplateName> </ModelArmor> <UserPromptSource>{jsonPath('$.contents[-1].parts[-1].text',request.content,true)}</UserPromptSource> <LLMResponseSource>{jsonPath('$.candidates[-1].content.parts[-1].text',response.content,true)}</LLMResponseSource> </SanitizeModelResponse> Model Armor response processing You can add additional processing logic after the Model Armor policy processes the LLM response.

### Introduction to API products \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/publish/what-api-product](https://docs.cloud.google.com/apigee/docs/api-platform/publish/what-api-product)
- Source ID: `site-docs-reference-required-3`
- Final score: 105
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Setting quota limits on an API product does not automatically enforce quotas.
- Quotas can help protect your servers from being overwhelmed if a product is popular and receives a large number of requests in a short period of time.
- In addition, you can use API products to define pricing levels based on criteria such as: The number of requests: Premium: Unlimited requests per day Basic: Up to 1000 requests per day Free: Up to 100 requests per day Or level of access: Premium: Read, write, update and delete Basic: Read and update Free: Read-only Or any combination of the above: Extra Premium: Read and write unlimited times per day Premium: Read and write up to 1000 requests per day Basic: Read and write access up to 100 times per day Free: Read up to 1000 times per day Free: Read-only access limited to 100 requests per day Note: Apigee recommends that you maintain a one-to-one relationship between your OpenAPI Specifications, API proxies, and API products.
- The app developer embeds the consumer key into the app, so that when the app makes a request to an API hosted by Apigee, the app passes the consumer key in the request in one of the following ways: When the API uses API key verification, the app must pass the consumer key directly.

