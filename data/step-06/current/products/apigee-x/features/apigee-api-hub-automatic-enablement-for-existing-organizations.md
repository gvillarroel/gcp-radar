---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.149Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Apigee API hub automatic enablement for existing organizations"
feature_slug: "apigee-api-hub-automatic-enablement-for-existing-organizations"
latest_feature_date: "2025-04-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/external-callout-policy"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies"
keywords:
  - "being"
  - "enablement"
  - "automatic"
  - "enabled"
  - "existing"
  - "organizations"
---

# Apigee API hub automatic enablement for existing organizations

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Apigee API hub is being enabled for existing Apigee organizations in supported regions.

## Extended Definition

Apigee API hub is being enabled for existing Apigee organizations in supported regions.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery](https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/external-callout-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/external-callout-policy)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)

## Supporting Pages

### Shadow API Discovery overview \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery](https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery)
- Source ID: `site-docs-reference-2`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- Enable, disable, and delete observation jobs To change whether an existing observation job is enabled (active), select either Enable or Disable from the Actions menu in the row for that job in the Observation jobs page.
- Within your centralized Apigee API hub instance, you can attach those projects to view the results of those jobs and automatically compare them to "known" APIs documented in API hub.
- View API Observations To view API Observations for enabled observation jobs, choose the API Observations tab and then select the Observation job from the list.
- See Manage Advanced API Security for Subscription organizations Pay-as-you-go customers must enable the add-on for at least one environment.

### ExternalCallout policy \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/external-callout-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/external-callout-policy)
- Source ID: `site-api-reference`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- Apigee hybrid users: If you use Apigee hybrid, note that the useTargetUrl attribute is available in Apigee hybrid version 1.8 and later versions. < ExternalCallout continueOnError = "false" enabled = "true" name = "External-Callout-1" > < DisplayName>External - Callout - 1 < / DisplayName > < GrpcConnection > < Server name = "cloud run server name" / > < Authentication > < GoogleIDToken > < Audience useTargetUrl = "true" / > < / GoogleIDToken > < / Authentication > < / GrpcConnection > < TimeoutMs>5000 < / TimeoutMs > < Configurations > < Property name = "with.request.content" > true < / Property > < Property name = "with.request.headers" > true < / Property > < Property name = "with.response.content" > true < / Property > < Property name = "with.response.headers" > true < / Property > < FlowVariable>example . flow . variable < / FlowVariable > < FlowVariable>another . flow . variable < / FlowVariable > < / Configurations > < / ExternalCallout > < DataCapture name = "capturepayment" continueOnError = "false" enabled = "true" > < DisplayName>Data - Capture - Policy - 1 < / DisplayName > < IgnoreUnresolvedVariables>false < / IgnoreUnresolvedVariables > < ThrowExceptionOnLimit>false < / ThrowExceptionOnLimit > < !-- Existing Variable -- > < Capture > < Collect ref = "existing-variable" default = "0" >< / Collect > < DataCollector>dc 1 < / DataCollector > < / Capture > < !-- JSONPayload -- > < Capture > < DataCollector>dc 2 < / DataCollector > < Collect default = "0" > < Source>request < / Source > < JSONPayload > < JSONPath>result . var < / JSONPath > < / JSONPayload > < / Collect > < / Capture > < !-- URIPath -- > < Capture > < DataCollector>dc 3 < / DataCollector > < Collect default = "0" > < URIPath > < !-- All patterns must specify a single variable to extract named $ -- > < Pattern ignoreCase = "false" > / foo / { $ } < / Pattern > < Pattern ignoreCase = "false" > / foo / bar / { $ } < / Pattern > < / URIPath > < / Collect > < / Capture > < / DataCapture > --> Child element reference The following sections describe the child elements of ExternalCallout . <TimeoutMs> The request timeout in milliseconds for gRPC requests. <TimeoutMs> must be a positive number. <GrpcConnection> The <GrpcConnection> element sets the gRPC server to be an existing TargetServer , specified by the name attribute.
- To learn more about sending gRPC requests, see the following links: gRPC Protocol Buffers <ExternalCallout> Defines an ExternalCallout policy. <ExternalCallout async="true" continueOnError="true" enabled="true" name="EC"> < DataCapture name = "capturepayment" continueOnError = "false" enabled = "true" > < DisplayName>Data - Capture - Policy - 1 < / DisplayName > < IgnoreUnresolvedVariables>false < / IgnoreUnresolvedVariables > < ThrowExceptionOnLimit>false < / ThrowExceptionOnLimit > < !-- Existing Variable -- > < Capture > < Collect ref = "existing-variable" default = "0" >< / Collect > < DataCollector>dc 1 < / DataCollector > < / Capture > < !-- JSONPayload -- > < Capture > < DataCollector>dc 2 < / DataCollector > < Collect default = "0" > < Source>request < / Source > < JSONPayload > < JSONPath>result . var < / JSONPath > < / JSONPayload > < / Collect > < / Capture > < !-- URIPath -- > < Capture > < DataCollector>dc 3 < / DataCollector > < Collect default = "0" > < URIPath > < !-- All patterns must specify a single variable to extract named $ -- > < Pattern ignoreCase = "false" > / foo / { $ } < / Pattern > < Pattern ignoreCase = "false" > / foo / bar / { $ } < / Pattern > < / URIPath > < / Collect > < / Capture > < / DataCapture > --> This element has the following attributes that are common to all policies: Attribute Default Required?
- Type Complex type Parent Element <GrpcConnection> Child Elements <GoogleIDToken> The Authentication element uses the following syntax: Syntax < ExternalCallout > ... < GrpcConnection > < Server name = "cloud run server name" / > < Authentication > < HeaderName ref = "FLOW VARIABLE" > STRING < / HeaderName > < GoogleIDToken > < Audience ref = "variable-1" > STRING < / Audience > < IncludeEmail ref = "variable-2" > BOOLEAN < / IncludeEmail > < / GoogleIDToken > < / Authentication > < / GrpcConnection > < / ExternalCallout > Example The following example shows the GoogleIDToken element: < ExternalCallout continueOnError = "false" enabled = "true" name = "External-Callout-1" > < DisplayName>External - Callout - 1 < / DisplayName > < GrpcConnection > < Server name = "cloud run server name" / > < Authentication > < HeaderName ref = 'my-variable' > X - Serverless - Authorization < / HeaderName > < GoogleIDToken > < Audience>https : // cloudrun - hostname . a . run . app < / Audience > < / GoogleIDToken > < / Authentication > < / GrpcConnection > < TimeoutMs>5000 < / TimeoutMs > < Configurations > < Property name = "with.request.content" > true < / Property > < Property name = "with.request.headers" > true < / Property > < Property name = "with.response.content" > true < / Property > < Property name = "with.response.headers" > true < / Property > < FlowVariable>example . flow . variable < / FlowVariable > < FlowVariable>another . flow . variable < / FlowVariable > < / Configurations > < / ExternalCallout > Attributes None. <HeaderName> child element By default, when an Authentication configuration is present, Apigee generates a bearer token and injects it into the Authorization header in the message sent to the target system.
- The following example illustrates an ExternalCallout policy configuration. < ExternalCallout enabled = "true" continueOnError = "false" name = "ExternalCallout-1" > < DisplayName>External Callout 1 < / DisplayName > < TimeoutMs>5000 < / TimeoutMs > < GrpcConnection > < Server name = "external-target-server" / > < / GrpcConnection > < Configurations > < Property name = "with.request.content" > true < / Property > < Property name = "with.request.headers" > false < / Property > < Property name = "with.response.content" > true < / Property > < Property name = "with.response.headers" > false < / Property > < FlowVariable>example1 . flow . variable < / FlowVariable > < FlowVariable>example2 . flow . variable < / FlowVariable > < / Configurations > < ExternalCallout > The example sends a request to an external gRPC server represented by the TargetServer named external-target-server , with the following configurations: <Property> : Include request and response content, but not the request and response headers, in the request sent to the gRPC server. <FlowVariable> : Include additional flow variables example1.flow.variable and example2.flow.variable , specified by the FlowVariable elements, in the request sent to the gRPC server.

### Get started with Apigee Model Armor policies \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)
- Source ID: `site-docs-reference`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- The sample policy shown below uses all default parameters: <SanitizeUserPrompt async="false" continueOnError="false" enabled="true" name="sanitize-response"> <IgnoreUnresolvedVariables>true</IgnoreUnresolvedVariables> <DisplayName>Sanitize-Response-sample</DisplayName> <ModelArmor> <TemplateName>projects/$PROJECT/locations/$LOCATION/templates/$TEMPLATE NAME</TemplateName> </ModelArmor> <UserPromptSource>{jsonPath('$.contents[-1].parts[-1].text',request.content,true)}</UserPromptSource> </SanitizeUserPrompt> When you call your API proxy, the input from the prompt is automatically extracted and passed on to Model Armor and processed according to the parameters of your Model Armor template.
- Create a Model Armor template Create a Model Armor template for sanitizing user prompts and LLM responses: gcloud model-armor templates create --location $LOCATION TEMPLATE NAME --rai-settings-filters = '[{ "filterType":"HATE SPEECH", "confidenceLevel": "MEDIUM AND ABOVE" },{ "filterType": "HARASSMENT", "confidenceLevel": "MEDIUM AND ABOVE" },{ "filterType": "SEXUALLY EXPLICIT", "confidenceLevel": "MEDIUM AND ABOVE" }]' --basic-config-filter-enforcement = enabled --pi-and-jailbreak-filter-settings-enforcement = enabled --pi-and-jailbreak-filter-settings-confidence-level = LOW AND ABOVE --malicious-uri-filter-settings-enforcement = enabled --template-metadata-custom-llm-response-safety-error-code = 798 --template-metadata-custom-llm-response-safety-error-message = "test template llm response evaluation failed" --template-metadata-custom-prompt-safety-error-code = 799 --template-metadata-custom-prompt-safety-error-message = "test template prompt evaluation failed" --template-metadata-ignore-partial-invocation-failures --template-metadata-log-operations --template-metadata-log-sanitize-operations Substitute TEMPLATE NAME with the name of the template you want to create.
- This region name can be used to identify the correct Model Armor template to use for that instance For example: <SanitizeModelResponse async="false" continueOnError="false" enabled="true" name="sanitize-response"> <IgnoreUnresolvedVariables>true</IgnoreUnresolvedVariables> <DisplayName>Sanitize-Response-sample</DisplayName> <ModelArmor> <TemplateName>projects/$PROJECT/locations/ {system.region.name} /templates/$TEMPLATE NAME</TemplateName> </ModelArmor> <UserPromptSource>{jsonPath('$.contents[-1].parts[-1].text',request.content,true)}</UserPromptSource> <LLMResponseSource>{jsonPath('$.candidates[-1].content.parts[-1].text',response.content,true)}</LLMResponseSource> </SanitizeModelResponse> Model Armor response processing You can add additional processing logic after the Model Armor policy processes the LLM response.
- The following example shows the configuration for the ExtractVariables policy: <ExtractVariables enabled="true" continueOnError="false" async="false" name="ExtractFieldFromMaResponse"> <FaultRules/> <Properties/> <IgnoreUnresolvedVariables>false</IgnoreUnresolvedVariables> <VariablePrefix>sdp</VariablePrefix> <JSONPayload> <Variable type="string" name="info type"> <JSONPath>$.sanitizationResult.filterResults[1].sdpFilterResult.inspectResult.findings[0].infoType</JSONPath> </Variable> </JSONPayload> <Source>SanitizeUserPrompt.sanitize-response.response.content</Source> </ExtractVariables> Add a Model Armor response error code and error message with the RaiseFault policy You can add Model Armor template metadata to customize the error code and error message that is raised by the Model Armor policy.

