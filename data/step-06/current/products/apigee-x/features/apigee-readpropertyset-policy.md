---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T18:40:29.758Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Apigee ReadPropertySet policy"
feature_slug: "apigee-readpropertyset-policy"
latest_feature_date: "2023-07-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/create-api-proxy-openapi-spec"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-attach-policy"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/add-spike-arrest"
keywords:
  - "readpropertyset"
  - "read"
  - "property"
  - "introduced"
  - "standard"
  - "policy"
---

# Apigee ReadPropertySet policy

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

The ReadPropertySet standard policy was introduced to read property sets and populate flow variables with the results.

## Extended Definition

The ReadPropertySet standard policy was introduced to read property sets and populate flow variables with the results.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/create-api-proxy-openapi-spec](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/create-api-proxy-openapi-spec)
- [https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-attach-policy](https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-attach-policy)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/add-spike-arrest](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/add-spike-arrest)

## Supporting Pages

### "Creating an API proxy from an OpenAPI Specification \_|\_ Apigee \_|\_ Google\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/create-api-proxy-openapi-spec](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/create-api-proxy-openapi-spec)
- Source ID: `site-docs-reference-2`
- Final score: 65
- Re-rank relevance: N/A

Evidence snippets:
- For example: http://mocktarget.apigee.net servers property from the OpenAPI Specification The following provides an excerpt from the OpenAPI Specification showing the properties that are used to pre-populate the fields. openapi: 3.0.0 info: description : OpenAPI Specification for the Apigee mock target service endpoint. version: 1.0.0 title : Mock Target API paths: /: get: summary: View personalized greeting operationId: View a personalized greeting description: View a personalized greeting for the specified or guest user. parameters: - name: user in: query description: Your user name. required: false schema: type: string responses: "200": description: Success ... servers : - url: http://mocktarget.apigee.net - url: https://mocktarget.apigee.net ...
- For example: http://apitest.acme.com/mock-target-api Name field content converted to all lower case Description Description of the API proxy. description property from the OpenAPI Specification Target (Existing API) Target URL invoked on behalf of this API proxy.
- Conditional flows tell Apigee, "When you see this, perform this logic." For example, when an API call is a GET on the /xml resource (the condition), transform the response to JSON (through a policy attached to the conditional flow).
- Add an XML to JSON policy Next, you'll add the XML to JSON policy to the View XML Response conditional flow that was generated automatically when you created the API proxy from the OpenAPI Specification.

### Step 6: Attach a policy \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-attach-policy](https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-attach-policy)
- Source ID: `site-docs-reference-2`
- Final score: 65
- Re-rank relevance: N/A

Evidence snippets:
- Add a <Step> element that references the XMLtoJSON policy to the <Response> flow in the API proxy <PreFlow> : <ProxyEndpoint name="default"> <PreFlow name="PreFlow"> <Request> <Step> <Name>verify-api-key</Name> </Step> <Step> <Name>remove-query-param-apikey</Name> </Step> <Step> <Name>impose-quota</Name> </Step> </Request> <Response> <Step> <Name>XMLtoJSON</Name> </Step> </Response> </PreFlow> ... </ProxyEndpoint> Save your changes to the file.
- Note : You'll attach the policy to the response flow in the API proxy PreFlow in the next step. <?xml version="1.0" encoding="UTF-8" standalone="yes"?> <XMLToJSON async="false" continueOnError="false" enabled="true" name="XMLtoJSON"> <DisplayName>XMLtoJSON</DisplayName> <Properties/> <Format>yahoo</Format> <OutputVariable> response </OutputVariable> <Source> response </Source> </XMLToJSON> Attach the policy to the default proxy endpoint.
- Home Documentation Application development Apigee Guides Send feedback Step 6: Attach a policy Stay organized with collections Save and categorize content based on your preferences.
- In the following steps, you create a new policy and attach it to your API proxy in the PreFlow response flow to ensure the policy is applied before any other processing takes place.

### Add the SpikeArrest policy to your API \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/add-spike-arrest](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/add-spike-arrest)
- Source ID: `site-docs-reference-2`
- Final score: 63
- Re-rank relevance: N/A

Evidence snippets:
- The text editor displays the XML code for the proxy, including the Spike Arrest policy step in the Response element of the PreFlow. <?xml version="1.0" encoding="UTF-8" standalone="yes"?> <SpikeArrest continueOnError="false" enabled="true" name="SA-"> <DisplayName>SA-</DisplayName> <Properties/> <Identifier ref="request.header.some-header-name"/> <MessageWeight ref="request.header.weight"/> <Rate>30ps</Rate> </SpikeArrest> In the XML for the policy, change the value of the <Rate> element to 1pm (which translates into roughly two requests allowed every 60 seconds in the cloud).
- Add the SpikeArrest policy In this tutorial, you'll add and configure the SpikeArrest policy to guard the target service against sudden traffic spikes that can be caused by an increase in usage, buggy clients, or malicious attacks.
- Home Documentation Application development Apigee Guides Send feedback Add the SpikeArrest policy to your API Stay organized with collections Save and categorize content based on your preferences.
- Click the + button next to PreFlow in the Response pane at the bottom-right of the visual editor: In the Add policy step dialog, select the Spike Arrest policy.

