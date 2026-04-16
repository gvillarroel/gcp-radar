---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.142Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "SemanticCacheLookup policy"
feature_slug: "semanticcachelookup-policy"
latest_feature_date: "2025-09-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/external-callout-policy"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/generate-saml-assertion-policy"
keywords:
  - "semanticcachelookup"
  - "redundant"
  - "semantic"
  - "reduce"
  - "reuse"
  - "enables"
  - "response"
  - "policy"
---

# SemanticCacheLookup policy

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

The SemanticCacheLookup policy enables semantic response reuse to reduce redundant backend calls, latency, and cost for LLM workloads; The SemanticCacheLookup policy enables semantic response reuse to reduce redundant backend calls, latency, and cost for LLM workloads.

## Extended Definition

The SemanticCacheLookup policy enables semantic response reuse to reduce redundant backend calls, latency, and cost for LLM workloads; The SemanticCacheLookup policy enables semantic response reuse to reduce redundant backend calls, latency, and cost for LLM workloads.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/external-callout-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/external-callout-policy)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/generate-saml-assertion-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/generate-saml-assertion-policy)

## Supporting Pages

### "Get started with semantic caching policies \_|\_ Apigee \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)
- Source ID: `site-docs-reference`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When the proxy receives a request, the SemanticCacheLookup policy extracts the user prompt from the request and converts the prompt into a numerical representation using the Text embeddings API.
- This page describes how to configure and use the Apigee semantic caching policies to enable intelligent response reuse based on semantic similarity.
- SemanticCacheLookup and SemanticCachePopulate policies containing default values are already attached to the proxy request and response flows.
- The SemanticCacheLookup and SemanticCachePopulate policies attach to the request and response flows, respectively, of an Apigee API proxy.

### ExternalCallout policy \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/external-callout-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/external-callout-policy)
- Source ID: `site-api-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- Apigee hybrid users: If you use Apigee hybrid, note that the useTargetUrl attribute is available in Apigee hybrid version 1.8 and later versions. < ExternalCallout continueOnError = "false" enabled = "true" name = "External-Callout-1" > < DisplayName>External - Callout - 1 < / DisplayName > < GrpcConnection > < Server name = "cloud run server name" / > < Authentication > < GoogleIDToken > < Audience useTargetUrl = "true" / > < / GoogleIDToken > < / Authentication > < / GrpcConnection > < TimeoutMs>5000 < / TimeoutMs > < Configurations > < Property name = "with.request.content" > true < / Property > < Property name = "with.request.headers" > true < / Property > < Property name = "with.response.content" > true < / Property > < Property name = "with.response.headers" > true < / Property > < FlowVariable>example . flow . variable < / FlowVariable > < FlowVariable>another . flow . variable < / FlowVariable > < / Configurations > < / ExternalCallout > < DataCapture name = "capturepayment" continueOnError = "false" enabled = "true" > < DisplayName>Data - Capture - Policy - 1 < / DisplayName > < IgnoreUnresolvedVariables>false < / IgnoreUnresolvedVariables > < ThrowExceptionOnLimit>false < / ThrowExceptionOnLimit > < !-- Existing Variable -- > < Capture > < Collect ref = "existing-variable" default = "0" >< / Collect > < DataCollector>dc 1 < / DataCollector > < / Capture > < !-- JSONPayload -- > < Capture > < DataCollector>dc 2 < / DataCollector > < Collect default = "0" > < Source>request < / Source > < JSONPayload > < JSONPath>result . var < / JSONPath > < / JSONPayload > < / Collect > < / Capture > < !-- URIPath -- > < Capture > < DataCollector>dc 3 < / DataCollector > < Collect default = "0" > < URIPath > < !-- All patterns must specify a single variable to extract named $ -- > < Pattern ignoreCase = "false" > / foo / { $ } < / Pattern > < Pattern ignoreCase = "false" > / foo / bar / { $ } < / Pattern > < / URIPath > < / Collect > < / Capture > < / DataCapture > --> Child element reference The following sections describe the child elements of ExternalCallout . <TimeoutMs> The request timeout in milliseconds for gRPC requests. <TimeoutMs> must be a positive number. <GrpcConnection> The <GrpcConnection> element sets the gRPC server to be an existing TargetServer , specified by the name attribute.
- The following example illustrates an ExternalCallout policy configuration. < ExternalCallout enabled = "true" continueOnError = "false" name = "ExternalCallout-1" > < DisplayName>External Callout 1 < / DisplayName > < TimeoutMs>5000 < / TimeoutMs > < GrpcConnection > < Server name = "external-target-server" / > < / GrpcConnection > < Configurations > < Property name = "with.request.content" > true < / Property > < Property name = "with.request.headers" > false < / Property > < Property name = "with.response.content" > true < / Property > < Property name = "with.response.headers" > false < / Property > < FlowVariable>example1 . flow . variable < / FlowVariable > < FlowVariable>example2 . flow . variable < / FlowVariable > < / Configurations > < ExternalCallout > The example sends a request to an external gRPC server represented by the TargetServer named external-target-server , with the following configurations: <Property> : Include request and response content, but not the request and response headers, in the request sent to the gRPC server. <FlowVariable> : Include additional flow variables example1.flow.variable and example2.flow.variable , specified by the FlowVariable elements, in the request sent to the gRPC server.
- The ExternalCallout policy enables you to send gRPC requests to your gRPC server to implement custom behavior that isn't supported by Apigee policies.
- Type Complex type Parent Element <GrpcConnection> Child Elements <GoogleIDToken> The Authentication element uses the following syntax: Syntax < ExternalCallout > ... < GrpcConnection > < Server name = "cloud run server name" / > < Authentication > < HeaderName ref = "FLOW VARIABLE" > STRING < / HeaderName > < GoogleIDToken > < Audience ref = "variable-1" > STRING < / Audience > < IncludeEmail ref = "variable-2" > BOOLEAN < / IncludeEmail > < / GoogleIDToken > < / Authentication > < / GrpcConnection > < / ExternalCallout > Example The following example shows the GoogleIDToken element: < ExternalCallout continueOnError = "false" enabled = "true" name = "External-Callout-1" > < DisplayName>External - Callout - 1 < / DisplayName > < GrpcConnection > < Server name = "cloud run server name" / > < Authentication > < HeaderName ref = 'my-variable' > X - Serverless - Authorization < / HeaderName > < GoogleIDToken > < Audience>https : // cloudrun - hostname . a . run . app < / Audience > < / GoogleIDToken > < / Authentication > < / GrpcConnection > < TimeoutMs>5000 < / TimeoutMs > < Configurations > < Property name = "with.request.content" > true < / Property > < Property name = "with.request.headers" > true < / Property > < Property name = "with.response.content" > true < / Property > < Property name = "with.response.headers" > true < / Property > < FlowVariable>example . flow . variable < / FlowVariable > < FlowVariable>another . flow . variable < / FlowVariable > < / Configurations > < / ExternalCallout > Attributes None. <HeaderName> child element By default, when an Authentication configuration is present, Apigee generates a bearer token and injects it into the Authorization header in the message sent to the target system.

### GenerateSAMLAssertion policy \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/generate-saml-assertion-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/generate-saml-assertion-policy)
- Source ID: `site-api-reference`
- Final score: 87
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When attached to the request Flow, the policy resolves message to request, and when attached to the response Flow, the policy resolves message to response.
- The GenerateSAMLAssertion policy enables API proxies to attach SAML assertions to outbound XML requests.
- Samples < GenerateSAMLAssertion name = "SAML" ignoreContentType = "false" > < CanonicalizationAlgorithm / > < Issuer ref = "reference" > Issuer name < / Issuer > < KeyStore > < Name ref = "reference" > keystorename < / Name > < Alias ref = "reference" > alias < / Alias > < / KeyStore > < OutputVariable > < FlowVariable>assertion . content < / FlowVariable > < Message name = "request" > < Namespaces > < Namespace prefix = "soap" > http : // schemas . xmlsoap . org / soap / envelope /</ Namespace > < Namespace prefix = 'wsse'>http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd</Namespace> < / Namespaces > < XPath > / soap : Envelope / soap : Header / wsse : Security < / XPath > < / Message > < / OutputVariable > < SignatureAlgorithm / > < Subject ref = "reference" > Subject name < / Subject > < Template ignoreUnresolvedVariables = "false" > < ! -- A lot of XML goes here , within CDATA , with {} around each variable -- > < / Template > < / GenerateSAMLAssertion > Element reference This section lists the elements and attributes of the GenerateSAMLAssertion policy.
- Do not rely on the text in the faultstring , because it could change. { "fault" : { "faultstring" : "GenerateSAMLAssertion[GenSAMLAssert]: Invalid media type" , "detail" : { "errorcode" : "steps.saml.generate.InvalidMediaTpe" } } } Example fault rule <FaultRules> <FaultRule name="invalid saml rule"> <Step> <Name>invalid-saml</Name> </Step> <Condition>(GenerateSAMLAssertion.failed = "true")</Condition> </FaultRule> </FaultRules> Related topics Extracting variables: Extract Variables policy Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

