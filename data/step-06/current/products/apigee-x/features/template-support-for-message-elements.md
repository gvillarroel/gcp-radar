---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T18:40:29.759Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Template support for message elements"
feature_slug: "template-support-for-message-elements"
latest_feature_date: "2023-07-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies"
keywords:
  - "templating"
  - "template"
  - "elements"
  - "element"
  - "message"
  - "added"
---

# Template support for message elements

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Template support for message elements was added to support URL and message element templating in API flows.

## Extended Definition

Template support for message elements was added to support URL and message element templating in API flows.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)
- [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)

## Supporting Pages

### Get started with Apigee Model Armor policies \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)
- Source ID: `site-docs-reference-2`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- The following example shows the configuration for the RaiseFault policy: <RaiseFault name="ModelArmorTemplateErrorCodeHandler"> <IgnoreUnresolvedVariables>true</IgnoreUnresolvedVariables> <FaultResponse> <Set> <Payload contentType="application/json"> <ErrorResponse> <Error> <Status>{sanitizationMetadata.errorCode}</Status> <Message>{sanitizationMetadata.errorMessage}</Message> </Error> </ErrorResponse> </Payload> <StatusCode>401</StatusCode> <ReasonPhrase>Invalid API Key</ReasonPhrase> </Set> </FaultResponse> </RaiseFault> Once the new policy is added and the API proxy is deployed, requests to the proxy that trigger the error specified in the Model Armor template metadata will raise a fault with the error code and error message defined in the RaiseFault policy.
- Create a Model Armor template Create a Model Armor template for sanitizing user prompts and LLM responses: gcloud model-armor templates create --location $LOCATION TEMPLATE NAME --rai-settings-filters = '[{ "filterType":"HATE SPEECH", "confidenceLevel": "MEDIUM AND ABOVE" },{ "filterType": "HARASSMENT", "confidenceLevel": "MEDIUM AND ABOVE" },{ "filterType": "SEXUALLY EXPLICIT", "confidenceLevel": "MEDIUM AND ABOVE" }]' --basic-config-filter-enforcement = enabled --pi-and-jailbreak-filter-settings-enforcement = enabled --pi-and-jailbreak-filter-settings-confidence-level = LOW AND ABOVE --malicious-uri-filter-settings-enforcement = enabled --template-metadata-custom-llm-response-safety-error-code = 798 --template-metadata-custom-llm-response-safety-error-message = "test template llm response evaluation failed" --template-metadata-custom-prompt-safety-error-code = 799 --template-metadata-custom-prompt-safety-error-message = "test template prompt evaluation failed" --template-metadata-ignore-partial-invocation-failures --template-metadata-log-operations --template-metadata-log-sanitize-operations Substitute TEMPLATE NAME with the name of the template you want to create.
- The following example shows the configuration for the ExtractVariables policy: <ExtractVariables enabled="true" continueOnError="false" async="false" name="ExtractFieldFromMaResponse"> <FaultRules/> <Properties/> <IgnoreUnresolvedVariables>false</IgnoreUnresolvedVariables> <VariablePrefix>sdp</VariablePrefix> <JSONPayload> <Variable type="string" name="info type"> <JSONPath>$.sanitizationResult.filterResults[1].sdpFilterResult.inspectResult.findings[0].infoType</JSONPath> </Variable> </JSONPayload> <Source>SanitizeUserPrompt.sanitize-response.response.content</Source> </ExtractVariables> Add a Model Armor response error code and error message with the RaiseFault policy You can add Model Armor template metadata to customize the error code and error message that is raised by the Model Armor policy.
- For example: projects/ my-project /locations/ us-central1 /templates/ my-ma-template SanitizeModelResponse: Change the value of the <UserPromptSource> element to {jsonPath('$.contents[-1].parts[-1].text',request.content,true)} Change the value of the <LLMResponseSource> element to {jsonPath('$.candidates[-1].content.parts[-1].text',response.content,true)} Change the value of the <TemplateName> element to reflect your Google Cloud project ID and the name and location of your template.

### Get started with the Apigee Extension Processor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- Source ID: `site-docs-reference-2`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Under the <Set> element, add the following child elements: <Set> <Authentication> <HeaderName>Authorization</HeaderName> <GoogleAccessToken> <Scopes> <Scope>https://www.googleapis.com/auth/cloud-platform</Scope> </Scopes> </GoogleAccessToken> </Authentication> </Set> Click Save .
- The following sections guide you through the steps to configure the key elements of the Apigee Extension Processor: Configure a load balancer for a backend service .
- With the successful application of the AssignMessage policy, the client's successful request (containing the API key) to Apigee in the example scenario is modified further to include a Google authentication token in the request header, as required by the Google-authenticated backend service.
- Add the AssignMessage policy for Google authentication If you want to use your Extension Processor to provide API management for a Google-authenticated service, you can inject a Google access token or Google ID token into requests sent to the backend service using the AssignMessage policy .

### "Get started with semantic caching policies \_|\_ Apigee \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)
- Source ID: `site-docs-reference-2`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- Note : The SemanticCachePopulate and SemanticCacheLookup policies support the use of URL templating for these elements.
- If you wish, you can provide a variable in this element to hold the value of the URL, as shown in the following example: <URL>https://{URL VARIABLE}</URL> Configure the semantic caching policies View the XML configuration of each policy by clicking on the policy name in the Detail view of the API proxy's Develop tab.
- Create an API proxy to enable semantic caching In this step, create a new API proxy using the Proxy with Semantic Cache template, if you have not done so already.
- SemanticCachePopulate policy: Set the <TTLInSeconds> element to specify the number of seconds until the cache expires, in seconds.

