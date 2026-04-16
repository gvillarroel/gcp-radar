---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.177Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Message element templating"
feature_slug: "message-element-templating"
latest_feature_date: "2023-09-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/message-template-intro"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy"
keywords:
  - "templating"
  - "elements"
  - "element"
  - "configurations"
  - "message"
  - "supports"
  - "proxy"
---

# Message element templating

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Apigee supports templating for message elements in proxy configurations; Apigee supports templating for message elements in proxy configurations.

## Extended Definition

Apigee supports templating for message elements in proxy configurations; Apigee supports templating for message elements in proxy configurations.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/message-template-intro](https://docs.cloud.google.com/apigee/docs/api-platform/reference/message-template-intro)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy)

## Supporting Pages

### API proxy configuration reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference)
- Source ID: `site-api-reference`
- Final score: 187
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Note: These elements support the dynamic string substitution feature called message templating . < SSLInfo > < Enabled > { myvars . ssl . enabled } < / Enabled > < ClientAuthEnabled > { myvars . ssl . client . auth . enabled } < / ClientAuthEnabled > < KeyStore > { myvars . ssl . keystore } < / KeyStore > < KeyAlias > { myvars . ssl . keyAlias } < / KeyAlias > < TrustStore > { myvars . ssl . trustStore } < / TrustStore > < / SSLInfo > Note: Variable replacement of TLS/SSL values can only be used for a target endpoint.
- Note: The <LocalTargetConnection> elements support the dynamic string substitution feature called message templating .
- Note: The <SSLInfo> element supports the dynamic string substitution feature called message templating .
- Here's a sample TargetEndpoint configuration: <TargetEndpoint name="default"> <PreFlow/> <Flows/> <PostFlow/> <EventFlow/> <HTTPTargetConnection> <URL>http://mocktarget.apigee.net</URL> <SSLInfo/> <Authentication/> </HTTPTargetConnection> <FaultRules/> <DefaultFaultRule/> <ScriptTarget/> <LocalTargetConnection/> </TargetEndpoint> TargetEndpoint configuration elements A target endpoint can call a target in one of the following ways: HTTPTargetConnection for HTTP or HTTPS calls LocalTargetConnection for local proxy-to-proxy chaining Configure only one of these in a target endpoint.

### Message templates \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/message-template-intro](https://docs.cloud.google.com/apigee/docs/api-platform/reference/message-template-intro)
- Source ID: `site-api-reference`
- Final score: 177
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- HTTPModifier policy <Set> child elements: <ContentType> <Verb> <Version> <Path> <StatusCode> <Headers> <QueryParams> <FormParams> <Add> child elements: <Headers> <QueryParams> <FormParams> MessageLogging policy <CloudLogging><Message> <Syslog><Message> <File><Message> OASValidation policy <OASResource> element RaiseFault policy <Set> elements: <ContentType> <FormParams> <Headers> <QueryParams> <StatusCode> <Path> <Payload> <Verb> <Version> <Add> elements: <FormParams> <Headers> <QueryParams> SAMLAssertion policy <Template> Only when the policy signature is <GenerateSAMLAssertion> ServiceCallout policy <Set> elements: <ContentType> <FormParams> <Headers> <QueryParams> <StatusCode> <Path> <Payload> <Verb> <Version> <Add> elements: <FormParams> <Headers> <QueryParams> <HTTPTargetConnection>/<URL> : See URL templating . <TargetEndpoint> elements that accept message templates <HTTPTargetConnection> elements Child elements that support message templates <SSLInfo> <Enabled> , <KeyAlias> , <KeyStore> , <TrustStore> , <ClientAuthEnabled> , <CLRStore> <LocalTargetConnection> <ApiProxy> , <ProxyEndpoint> , <Path> <Path> N/A <URL> No child elements.
- For example: Test message. id = Unknown URL templating The URL element supports templating following the same syntax as other elements.
- Example In a proxy <TargetEndpoint> definition, child-elements of <SSLInfo> support message templating.
- Quota - 1. available . count } < / Header > < / Headers > < Payload contentType = 'application/json' > { "error" : { "message" : "you have exceeded your quota" , "clientId" : "{request.queryparam.apikey}" } } < / Payload > < StatusCode > 429 < / StatusCode > < / Set > < / AssignMessage > In the AssignMessage policy , the following elements in the <Set> element support message templating: <Header> <QueryParam> <FormParam> <PayLoad> <Version> <Verb> <Path> <StatusCode> Again, note that flow variables in a message template must be enclosed in curly braces .

### AssignMessage policy \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy)
- Source ID: `site-api-reference`
- Final score: 157
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Optional Type Boolean Parent Element <Copy> Child Elements None The <Version> element uses the following syntax: Syntax <AssignMessage continueOnError="[false true]" enabled="[true false]" name=" POLICY NAME " > <Copy source=" VARIABLE NAME "> <Version>[false true]</Version> </Copy> </AssignMessage> Example 1 The following example sets <Version> to true on the request, which copies the version from the default request object to a new, custom request object: < AssignMessage name = "copy-version-1" > < Copy source = "request" > < Version>true < / Version > < / Copy > < AssignTo createNew = "true" transport = "http" type = "request" > MyCustomRequest < / AssignTo > < / AssignMessage > You can use <Copy> / <Version> only when the following criteria are met: The Message type for both source and destination is request <DisplayName> Use in addition to the name attribute to label the policy in the management UI proxy editor with a different, more natural-sounding name.
- Optional Type String Parent Element <AssignVariable> Child Elements None The <Template> element uses the following syntax: Syntax <AssignMessage continueOnError="[false true]" enabled="[true false]" name=" POLICY NAME " > <AssignVariable> <Template> MESSAGE TEMPLATE </Template> or <Template ref=' TEMPLATE VARIABLE '></Template> </AssignVariable> </AssignMessage> Example 1 The following example uses message templating syntax to concatenate two context variables with a literal string (a hyphen) between them: < AssignMessage name = 'AV-via-template-1' > < IgnoreUnresolvedVariables>false < / IgnoreUnresolvedVariables > < AssignVariable > < Name>my destination variable < / Name > < Value>BADDBEEF < / Value > < Template > { system . uuid } - { messageid } < / Template > < / AssignVariable > < / AssignMessage > Example 2 The following example specifies a flow variable, where the value of the variable is a pre-defined message template.
- Error name Cause Fix InvalidIndex If the index specified in the <Copy> and/or <Remove> elements of the AssignMessage policy is 0 or a negative number, then deployment of the API Proxy fails. build InvalidVariableName If the child element <Name> is empty or not specified in the <AssignVariable> element, then the deployment of the API proxy fails because there is no valid variable name to which to assign a value.
- Optional Type Complex type Parent Element <AssignMessage> Child Elements <Authentication> <FormParams> <Headers> <Payload> <Path> <QueryParams> <StatusCode> <Verb> <Version> Note : The sub-elements of <Set> support the dynamic string substitution feature called message templating .

