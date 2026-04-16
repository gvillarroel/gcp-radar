---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.182Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "VS Code emulator keystore configuration"
feature_slug: "vs-code-emulator-keystore-configuration"
latest_feature_date: "2023-04-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/options-configuring-tls"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events"
keywords:
  - "configuring"
  - "keystore"
  - "configuration"
  - "emulator"
  - "supports"
  - "code"
---

# VS Code emulator keystore configuration

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Apigee in VS Code supports configuring environment-level keystores in the Apigee Emulator by using locally available keys.

## Extended Definition

Apigee in VS Code supports configuring environment-level keystores in the Apigee Emulator by using locally available keys.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference)
- [https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/options-configuring-tls](https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/options-configuring-tls)
- [https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events](https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events)

## Supporting Pages

### API proxy configuration reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference)
- Source ID: `site-api-reference`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- VALUE=true curl -Ss -v -X PUT \ "https://apigee.googleapis.com/v1/organizations/ MYORG /environments/ MYENV " \ -H "Content-Type: application/json" \ -H "Authorization: Bearer TOKEN " \ -d '{ "name": " MYENV ", "properties": { "property": [{ "name": "features.SSLInfo.Enforce", "value": "'"$VALUE"'" }] } }' Output: { ... "properties": { "property": [ { "name": "features.SSLInfo.Enforce", "value": "true" } ] }, ... } Sample target endpoint with outbound client authentication enabled <TargetEndpoint name="default"> <HttpTargetConnection> <URL>https://myservice.com</URL> <SSLInfo> <Enabled>true</Enabled> <Enforce>true</Enforce> <ClientAuthEnabled>true</ClientAuthEnabled> <KeyStore>myKeystore</KeyStore> <KeyAlias>myKey</KeyAlias> <TrustStore>myTruststore</TrustStore> </SSLInfo> </HttpTargetConnection> </TargetEndpoint> For detailed instructions, see Options for configuring TLS .
- For example, in the following Flow configuration, any inbound request that does not include the path suffix /first or /second will cause the ThirdFlow to execute, enforcing the policy called Return404 . <Flows> <Flow name="FirstFlow"> <Condition>proxy.pathsuffix MatchesPath "/first"</Condition> <Request> <Step><Name>FirstPolicy</Name></Step> </Request> </Flow> <Flow name="SecondFlow"> <Condition>proxy.pathsuffix MatchesPath "/second"</Condition> <Request> <Step><Name>FirstPolicy</Name></Step> <Step><Name>SecondPolicy</Name></Step> </Request> </Flow> <Flow name="ThirdFlow"> <Request> <Step><Name>Return404</Name></Step> </Request> </Flow> </Flows> Resources "Resources" (resource files for use in API proxies) are scripts, code, and XSL transformations that can be attached to Flows using policies.
- Using references to set TLS/SSL values dynamically When configuring a target endpoint that uses HTTPS, you have to consider the case when the TLS/SSL cert expires, or a change to the system configuration requires you to update the cert.
- Configuring IntegrationEndpoint To configure an integration endpoint as your target endpoint, add the IntegrationEndpoint element to your ProxyEndpoint configuration.

### Options for configuring TLS \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/options-configuring-tls](https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/options-configuring-tls)
- Source ID: `site-docs-reference-required-3`
- Final score: 123
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- About setting TLS options in a target endpoint or target server A target can be represented by an XML object like the one below: <HTTPTargetConnection> <Properties/> <URL> https:myTargetAddress </URL> <SSLInfo> <Enabled>true</Enabled> <Enforce>true</Enforce> <ClientAuthEnabled>true</ClientAuthEnabled> <KeyStore>ref://myKeystoreRef</KeyStore> <KeyAlias>myKeyAlias</KeyAlias> <TrustStore>ref://myTruststoreRef</TrustStore> <IgnoreValidationErrors>false</IgnoreValidationErrors> <Protocols>myProtocols</Protocols> <Ciphers>myCipher</Ciphers> </SSLInfo> </HTTPTargetConnection> The area of the target endpoint configuration that you modify to configure TLS is defined by the <SSLInfo> tag.
- When configuring TLS for a target endpoint/target server, you should decide how you are going to perform that update before you perform any configuration.
- About configuring TLS All Apigee customers, both paid and evaluation, have complete control over the configuration of target endpoints/target servers.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

### Streaming server-sent events \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events](https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events)
- Source ID: `site-docs-reference-required-3`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Putting the JavaScript code in a resource file is another option for configuring the policy. < ? xml version = "1.0" encoding = "UTF-8" standalone = "yes" ? > < Javascript continueOnError = "false" enabled = "true" timeLimit = "200" name = "js-update-resp" > < DisplayName>js - update - resp < / DisplayName > < Properties / > < Source > var event = JSON . parse ( context . getVariable ( "response.event.current.content" )); event . modelVersion = null ; context . setVariable ( "response.event.current.content" , JSON . stringify ( event )); < / Source > < / Javascript > Add the JavaScript policy to the EventFlow of the proxy.
- Putting the JavaScript code in a resource file is another option for configuring the policy. < Javascript continueOnError = "false" enabled = "true" timeLimit = "200" name = "js-filter-resp" > < DisplayName>js - filter - resp < / DisplayName > < Properties / > < Source > var event = JSON . parse ( context . getVariable ( "response.event.current.content" )); if ( "error" in event ){ // Do not send event to customer context . setVariable ( "response.event.current.content" , "" ); } < / Source > < / Javascript > Add the JavaScript policy to the EventFlow of the proxy.
- An EventFlow can be placed inside a TargetEndpoint or a ProxyEndpoint definition as shown in the following code samples: <ProxyEndpoint> <ProxyEndpoint name="default"> <Description/> <FaultRules/> <PreFlow name="PreFlow"> <Request/> <Response/> </PreFlow> <PostFlow name="PostFlow"> <Request/> <Response/> </PostFlow> <Flows/> <EventFlow name="EventFlow" content-type="text/event-stream"> <Response/> </EventFlow> <HTTPProxyConnection> <Properties/> <URL>https://httpbin.org/sse</URL> </HTTPProxyConnection> </ProxyEndpoint> <TargetEndpoint> <TargetEndpoint name="default"> <Description/> <FaultRules/> <PreFlow name="PreFlow"> <Request/> <Response/> </PreFlow> <PostFlow name="PostFlow"> <Request/> <Response/> </PostFlow> <Flows/> <EventFlow name="EventFlow" content-type="text/event-stream"> <Response/> </EventFlow> <HTTPTargetConnection> <Properties/> <URL>https://httpbin.org/sse</URL> </HTTPTargetConnection> </TargetEndpoint> Note: If you add multiple EventFlow stanzas to a endpoint, only the last one in the endpoint definition is executed.
- The following examples show an EventFlow with a conditional RaiseFault policy step added: <ProxyEndpoint> < ProxyEndpoint name = "default" > < EventFlow content - type = "text/event-stream" > < Response > < Step > < Name>Raise - Fault - Cred - Invalid < / Name > < Condition>fault . name equals "invalid access token" < / Condition > < / Step > < / Response > < / EventFlow > < HTTPProxyConnection > < / ProxyEndpoint >< / pre > <TargetEndpoint> < TargetEndpoint name = "default" > < EventFlow content - type = "text/event-stream" > < Response > < Step > < Name>Raise - Fault - Cred - Invalid < / Name > < Condition>fault . name equals "invalid access token" < / Condition > < / Step > < / Response > < / EventFlow > < HTTPTargetConnection > < / TargetEndpoint >< / pre > For more EventFlow code examples, see the EventFlow use cases and examples section.

