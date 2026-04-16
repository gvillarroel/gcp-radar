---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.170Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Target server SSL enforcement"
feature_slug: "target-server-ssl-enforcement"
latest_feature_date: "2024-05-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/external-callout-policy"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events"
keywords:
  - "targetserver"
  - "enforcement"
  - "configurations"
  - "enforce"
  - "target"
  - "server"
---

# Target server SSL enforcement

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

TargetServer configurations can enforce strict SSL for southbound connections and service callouts.

## Extended Definition

TargetServer configurations can enforce strict SSL for southbound connections and service callouts.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/external-callout-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/external-callout-policy)
- [https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events](https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events)

## Supporting Pages

### API proxy configuration reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference)
- Source ID: `site-api-reference`
- Final score: 150
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- N/A No Specifying environment-level SSL enforcement If SSLInfo.Enforce is set to true or false , the value specified overrides any granular enforcement options specified in <SSLInfo> blocks in TargetEndpoint or TargetServer configurations.
- Named TargetServer configurations can be used for load balancing defining 2 or more endpoint configuration connections.
- N/A No LoadBalancer Defines one or more named TargetServer configurations.
- See Specifying environment-level SSL enforcement . false No TrustStore A keystore containing trusted root server certificates.

### ExternalCallout policy \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/external-callout-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/external-callout-policy)
- Source ID: `site-api-reference`
- Final score: 110
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Apigee hybrid users: If you use Apigee hybrid, note that the useTargetUrl attribute is available in Apigee hybrid version 1.8 and later versions. < ExternalCallout continueOnError = "false" enabled = "true" name = "External-Callout-1" > < DisplayName>External - Callout - 1 < / DisplayName > < GrpcConnection > < Server name = "cloud run server name" / > < Authentication > < GoogleIDToken > < Audience useTargetUrl = "true" / > < / GoogleIDToken > < / Authentication > < / GrpcConnection > < TimeoutMs>5000 < / TimeoutMs > < Configurations > < Property name = "with.request.content" > true < / Property > < Property name = "with.request.headers" > true < / Property > < Property name = "with.response.content" > true < / Property > < Property name = "with.response.headers" > true < / Property > < FlowVariable>example . flow . variable < / FlowVariable > < FlowVariable>another . flow . variable < / FlowVariable > < / Configurations > < / ExternalCallout > < DataCapture name = "capturepayment" continueOnError = "false" enabled = "true" > < DisplayName>Data - Capture - Policy - 1 < / DisplayName > < IgnoreUnresolvedVariables>false < / IgnoreUnresolvedVariables > < ThrowExceptionOnLimit>false < / ThrowExceptionOnLimit > < !-- Existing Variable -- > < Capture > < Collect ref = "existing-variable" default = "0" >< / Collect > < DataCollector>dc 1 < / DataCollector > < / Capture > < !-- JSONPayload -- > < Capture > < DataCollector>dc 2 < / DataCollector > < Collect default = "0" > < Source>request < / Source > < JSONPayload > < JSONPath>result . var < / JSONPath > < / JSONPayload > < / Collect > < / Capture > < !-- URIPath -- > < Capture > < DataCollector>dc 3 < / DataCollector > < Collect default = "0" > < URIPath > < !-- All patterns must specify a single variable to extract named $ -- > < Pattern ignoreCase = "false" > / foo / { $ } < / Pattern > < Pattern ignoreCase = "false" > / foo / bar / { $ } < / Pattern > < / URIPath > < / Collect > < / Capture > < / DataCapture > --> Child element reference The following sections describe the child elements of ExternalCallout . <TimeoutMs> The request timeout in milliseconds for gRPC requests. <TimeoutMs> must be a positive number. <GrpcConnection> The <GrpcConnection> element sets the gRPC server to be an existing TargetServer , specified by the name attribute.
- The following example illustrates an ExternalCallout policy configuration. < ExternalCallout enabled = "true" continueOnError = "false" name = "ExternalCallout-1" > < DisplayName>External Callout 1 < / DisplayName > < TimeoutMs>5000 < / TimeoutMs > < GrpcConnection > < Server name = "external-target-server" / > < / GrpcConnection > < Configurations > < Property name = "with.request.content" > true < / Property > < Property name = "with.request.headers" > false < / Property > < Property name = "with.response.content" > true < / Property > < Property name = "with.response.headers" > false < / Property > < FlowVariable>example1 . flow . variable < / FlowVariable > < FlowVariable>example2 . flow . variable < / FlowVariable > < / Configurations > < ExternalCallout > The example sends a request to an external gRPC server represented by the TargetServer named external-target-server , with the following configurations: <Property> : Include request and response content, but not the request and response headers, in the request sent to the gRPC server. <FlowVariable> : Include additional flow variables example1.flow.variable and example2.flow.variable , specified by the FlowVariable elements, in the request sent to the gRPC server.
- Child Element Required Description <TimeoutMs> Required The request timeout in milliseconds for gRPC requests. <GrpcConnection> Required Specifies the name of an existing TargetServer to be the gRPC server to send requests to. <Configurations> Optional Allows you to configure various aspects of the ExternalCallout policy, including the <Property> and <FlowVariable> elements.
- Type Complex type Parent Element <GrpcConnection> Child Elements <GoogleIDToken> The Authentication element uses the following syntax: Syntax < ExternalCallout > ... < GrpcConnection > < Server name = "cloud run server name" / > < Authentication > < HeaderName ref = "FLOW VARIABLE" > STRING < / HeaderName > < GoogleIDToken > < Audience ref = "variable-1" > STRING < / Audience > < IncludeEmail ref = "variable-2" > BOOLEAN < / IncludeEmail > < / GoogleIDToken > < / Authentication > < / GrpcConnection > < / ExternalCallout > Example The following example shows the GoogleIDToken element: < ExternalCallout continueOnError = "false" enabled = "true" name = "External-Callout-1" > < DisplayName>External - Callout - 1 < / DisplayName > < GrpcConnection > < Server name = "cloud run server name" / > < Authentication > < HeaderName ref = 'my-variable' > X - Serverless - Authorization < / HeaderName > < GoogleIDToken > < Audience>https : // cloudrun - hostname . a . run . app < / Audience > < / GoogleIDToken > < / Authentication > < / GrpcConnection > < TimeoutMs>5000 < / TimeoutMs > < Configurations > < Property name = "with.request.content" > true < / Property > < Property name = "with.request.headers" > true < / Property > < Property name = "with.response.content" > true < / Property > < Property name = "with.response.headers" > true < / Property > < FlowVariable>example . flow . variable < / FlowVariable > < FlowVariable>another . flow . variable < / FlowVariable > < / Configurations > < / ExternalCallout > Attributes None. <HeaderName> child element By default, when an Authentication configuration is present, Apigee generates a bearer token and injects it into the Authorization header in the message sent to the target system.

### Streaming server-sent events \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events](https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events)
- Source ID: `site-docs-reference-required-3`
- Final score: 99
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- No other types of policies are allowed in an EventFlow : Javascript LLMTokenQuota MessageLogging PublishMessage RaiseFault SanitizeModelResponse When using LLMTokenQuota with SSE streams, quota enforcement skips events that lack token usage metadata.
- For example: <?xml version="1.0" encoding="UTF-8" standalone="yes"?> <MessageLogging continueOnError="false" enabled="true" name="ML-log-error"> <DisplayName>ML-log-error</DisplayName> <CloudLogging> <LogName>projects/{organization.name}/logs/apigee errors</LogName> <Message contentType="text/plain">Request failed due to {faultReason}.</Message> <ResourceType>api</ResourceType> </CloudLogging> <logLevel>ALERT</logLevel> </MessageLogging> Add the MessageLogging policy to the FaultRules of the target or proxy endpoint: <TargetEndpoint> <?xml version="1.0" encoding="UTF-8" standalone="yes"?> <TargetEndpoint name="TargetEndpoint-1"> <Description/> <FaultRules> <FaultRule name="default-fault"> <Step> <Name>ML-log-error</Name> </Step> </FaultRule> </FaultRules> ... </TargetEndpoint> <ProxyEndpoint> <?xml version="1.0" encoding="UTF-8" standalone="yes"?> <ProxyEndpoint name="ProxyEndpoint-1"> <Description/> <FaultRules> <FaultRule name="default-fault"> <Step> <Name>ML-log-error</Name> </Step> </FaultRule> </FaultRules> ... </ProxyEndpoint> Deploy and test the API proxy.
- An EventFlow can be placed inside a TargetEndpoint or a ProxyEndpoint definition as shown in the following code samples: <ProxyEndpoint> <ProxyEndpoint name="default"> <Description/> <FaultRules/> <PreFlow name="PreFlow"> <Request/> <Response/> </PreFlow> <PostFlow name="PostFlow"> <Request/> <Response/> </PostFlow> <Flows/> <EventFlow name="EventFlow" content-type="text/event-stream"> <Response/> </EventFlow> <HTTPProxyConnection> <Properties/> <URL>https://httpbin.org/sse</URL> </HTTPProxyConnection> </ProxyEndpoint> <TargetEndpoint> <TargetEndpoint name="default"> <Description/> <FaultRules/> <PreFlow name="PreFlow"> <Request/> <Response/> </PreFlow> <PostFlow name="PostFlow"> <Request/> <Response/> </PostFlow> <Flows/> <EventFlow name="EventFlow" content-type="text/event-stream"> <Response/> </EventFlow> <HTTPTargetConnection> <Properties/> <URL>https://httpbin.org/sse</URL> </HTTPTargetConnection> </TargetEndpoint> Note: If you add multiple EventFlow stanzas to a endpoint, only the last one in the endpoint definition is executed.
- This step ensures that the EventFlow processes the policy during response handling: <TargetEndpoint> < ? xml version = "1.0" encoding = "UTF-8" standalone = "yes" ? > < TargetEndpoint name = "default" > < EventFlow content - type = "text/event-stream" > < Response > < Step > < Name>js - error < / Name > < / Step > < / Response > < / EventFlow > < HTTPTargetConnection > < URL>https : //generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:streamGenerateContent</URL> < / HTTPTargetConnection > < / TargetEndpoint > <ProxyEndpoint> < ? xml version = "1.0" encoding = "UTF-8" standalone = "yes" ? > < ProxyEndpoint name = "default" > < EventFlow content - type = "text/event-stream" > < Response > < Step > < Name>js - error < / Name > < / Step > < / Response > < / EventFlow > < HTTPProxyConnection > < URL>https : //generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:streamGenerateContent</URL> < / HTTPProxyConnection > < / ProxyEndpoint > Deploy the API proxy.

