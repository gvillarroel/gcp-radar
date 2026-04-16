---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T18:40:29.758Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Apigee HTTPModifier policy"
feature_slug: "apigee-httpmodifier-policy"
latest_feature_date: "2023-07-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-attach-policy"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-api-key-validation"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/add-spike-arrest"
keywords:
  - "httpmodifier"
  - "modify"
  - "introduced"
  - "standard"
  - "request"
  - "policy"
---

# Apigee HTTPModifier policy

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

The HTTPModifier standard policy was introduced to modify request and response messages with partial functionality similar to AssignMessage.

## Extended Definition

The HTTPModifier standard policy was introduced to modify request and response messages with partial functionality similar to AssignMessage.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-attach-policy](https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-attach-policy)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-api-key-validation](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-api-key-validation)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/add-spike-arrest](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/add-spike-arrest)

## Supporting Pages

### Step 6: Attach a policy \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-attach-policy](https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-attach-policy)
- Source ID: `site-docs-reference-2`
- Final score: 77
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Add a <Step> element that references the XMLtoJSON policy to the <Response> flow in the API proxy <PreFlow> : <ProxyEndpoint name="default"> <PreFlow name="PreFlow"> <Request> <Step> <Name>verify-api-key</Name> </Step> <Step> <Name>remove-query-param-apikey</Name> </Step> <Step> <Name>impose-quota</Name> </Step> </Request> <Response> <Step> <Name>XMLtoJSON</Name> </Step> </Response> </PreFlow> ... </ProxyEndpoint> Save your changes to the file.
- Note : You'll attach the policy to the response flow in the API proxy PreFlow in the next step. <?xml version="1.0" encoding="UTF-8" standalone="yes"?> <XMLToJSON async="false" continueOnError="false" enabled="true" name="XMLtoJSON"> <DisplayName>XMLtoJSON</DisplayName> <Properties/> <Format>yahoo</Format> <OutputVariable> response </OutputVariable> <Source> response </Source> </XMLToJSON> Attach the policy to the default proxy endpoint.
- Home Documentation Application development Apigee Guides Send feedback Step 6: Attach a policy Stay organized with collections Save and categorize content based on your preferences.
- In the following steps, you create a new policy and attach it to your API proxy in the PreFlow response flow to ensure the policy is applied before any other processing takes place.

### Secure an API by requiring API keys \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-api-key-validation](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-api-key-validation)
- Source ID: `site-docs-reference-2`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- Modify the policy XML to tell the policy to look in the header rather than in the queryparam: <APIKey ref="request. header .x-apikey"/> Click Save to save the changes.
- Update the contents of the Assign Message policy to the following: Note: The policy name will change to Remove Query Param apikey once you make this edit. < AssignMessage async = "false" continueOnError = "false" enabled = "true" name = "remove-query-param-apikey" > < DisplayName>Remove Query Param apikey < / DisplayName > < Remove > < QueryParams > < QueryParam name = "apikey" / > < / QueryParams > < / Remove > < IgnoreUnresolvedVariables>true < / IgnoreUnresolvedVariables > < AssignTo createNew = "false" transport = "http" type = "request" / > < / AssignMessage > Add the VerifyApiKey and Remove Query Param apikey policies.
- At runtime, the Verify API Key policy checks that the supplied API key: Is valid Hasn't been revoked Matches the API key for the API product that exposes the requested resources If the key is valid, the request is allowed.
- By default, the policy retrieves the key from a query parameter named apikey in the HTTP request. <APIKey ref="request.queryparam.apikey" /> The name apikey is arbitrary and can be any property that contains the API key.

### Add the SpikeArrest policy to your API \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/add-spike-arrest](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/add-spike-arrest)
- Source ID: `site-docs-reference-2`
- Final score: 71
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The text editor displays the XML code for the proxy, including the Spike Arrest policy step in the Response element of the PreFlow. <?xml version="1.0" encoding="UTF-8" standalone="yes"?> <SpikeArrest continueOnError="false" enabled="true" name="SA-"> <DisplayName>SA-</DisplayName> <Properties/> <Identifier ref="request.header.some-header-name"/> <MessageWeight ref="request.header.weight"/> <Rate>30ps</Rate> </SpikeArrest> In the XML for the policy, change the value of the <Rate> element to 1pm (which translates into roughly two requests allowed every 60 seconds in the cloud).
- What you'll learn Through this tutorial, you'll learn to: Add a policy that affects the request and response.
- Add the SpikeArrest policy In this tutorial, you'll add and configure the SpikeArrest policy to guard the target service against sudden traffic spikes that can be caused by an increase in usage, buggy clients, or malicious attacks.
- Home Documentation Application development Apigee Guides Send feedback Add the SpikeArrest policy to your API Stay organized with collections Save and categorize content based on your preferences.

