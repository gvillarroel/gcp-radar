---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:10:02.158Z"
product_name: "Apigee UI"
product_slug: "apigee-ui"
feature_name: "Unused policy indicator"
feature_slug: "unused-policy-indicator"
latest_feature_date: "2025-09-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/add-spike-arrest"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events"
keywords:
  - "unused"
  - "policy"
  - "indicator"
  - "proxy"
  - "sharedflow"
  - "editor"
  - "shows"
  - "icon"
---

# Unused policy indicator

Product: Apigee UI
Coverage: MEDIUM

## Step 02 Summary

The proxy and sharedflow editor shows an icon next to policies that are not attached to any flow.

## Extended Definition

The proxy and sharedflow editor shows an icon next to policies that are not attached to any flow.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/add-spike-arrest](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/add-spike-arrest)
- [https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events](https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events)

## Supporting Pages

### API proxy configuration reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference)
- Source ID: `site-docs-reference-required-14`
- Final score: 111
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To use asynchronous behavior in API proxies, see JavaScript object model . false No Policy attachment The following image shows the API proxy flows execution sequence: As shown above: Policies are attached as processing steps to Flows .
- Optionally, use the <DisplayName> element to label the policy in the Apigee UI proxy editor with a different, natural-language name.
- For details, see Authentication element in the ServiceCallout policy reference. <Authentication> element error reference If you are using the <Authentication> element, you can find possible error messages and troubleshooting tips for deployment and runtime errors in the Errors section of the ServiceCallout policy documentation. <Authentication> element examples The following example shows how to call a service deployed on Cloud Run as the target using the Authentication element to generate an OpenID Connect token needed to authenticate the call: <TargetEndpoint name="TargetEndpoint-1"> <HTTPTargetConnection> <Properties/> <URL>https://cloudrun-hostname.a.run.app/test</URL> <Authentication> <GoogleIDToken> <Audience>https://cloudrun-hostname.a.run.app/test</Audience> </GoogleIDToken> </Authentication> </HTTPTargetConnection> </TargetEndpoint> The following example shows how to call a TargetService that points to Cloud Run using the Authentication element to generate an OpenID Connect token needed to authenticate the call.
- For example, in the following Flow configuration, any inbound request that does not include the path suffix /first or /second will cause the ThirdFlow to execute, enforcing the policy called Return404 . <Flows> <Flow name="FirstFlow"> <Condition>proxy.pathsuffix MatchesPath "/first"</Condition> <Request> <Step><Name>FirstPolicy</Name></Step> </Request> </Flow> <Flow name="SecondFlow"> <Condition>proxy.pathsuffix MatchesPath "/second"</Condition> <Request> <Step><Name>FirstPolicy</Name></Step> <Step><Name>SecondPolicy</Name></Step> </Request> </Flow> <Flow name="ThirdFlow"> <Request> <Step><Name>Return404</Name></Step> </Request> </Flow> </Flows> Resources "Resources" (resource files for use in API proxies) are scripts, code, and XSL transformations that can be attached to Flows using policies.

### Streaming server-sent events \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events](https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events)
- Source ID: `site-docs-reference-required-14`
- Final score: 97
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create a new SanitizeModelResponse policy with the following definition: <?xml version="1.0" encoding="UTF-8" standalone="yes"?> <SanitizeModelResponse async="false" continueOnError="false" enabled="true" name="SMR-modelresponse"> <IgnoreUnresolvedVariables>true</IgnoreUnresolvedVariables> <DisplayName>SMR-modelresponse</DisplayName> <ModelArmor> <TemplateName>projects/{project}/locations/{location}/templates/{template-name}</TemplateName> </ModelArmor> <LLMResponseSource>{response partial}</LLMResponseSource> <!-- Use the below settings if you want to call a Model Armor policy on every event --> <LLMResponseSource>{response.event.current.content}</LLMResponseSource> </SanitizeModelResponse> (Optional) Add a JavaScript policy to group events before sending them to the Apigee Model Armor policy. < ? xml version = "1.0" encoding = "UTF-8" standalone = "yes" ? > < Javascript continueOnError = "false" enabled = "true" timeLimit = "200" name = "JS-combine-resp" > < DisplayName>JS - combine - events < / DisplayName > < Properties / > < Source > var eventText = JSON . parse ( context . getVariable ( "response.event.current.content" ) . substring ( 5 )) . candidates [ 0 ] . content . parts [ 0 ] . text ; var finishReason = JSON . parse ( context . getVariable ( "response.event.current.content" ) . substring ( 5 )) . candidates [ 0 ] . finishReason ; var idx = context . getVariable ( "response.event.current.count" ); if ( idx % 5 == 0 finishReason == "STOP" ) { context . setVariable ( "response partial" , context . getVariable ( "tmp buffer pre" )); context . setVariable ( "buff ready" , true ); context . setVariable ( "tmp buffer pre" , "" ); } else { context . setVariable ( "buff ready" , false ); context . setVariable ( "response partial" , "" ); var previousBufferVal = context . getVariable ( "tmp buffer pre" ); if ( previousBufferVal ) { context . setVariable ( "tmp buffer pre" , previousBufferVal + eventText ); } else { context . setVariable ( "tmp buffer pre" , eventText ); } } < / Source > < / Javascript > Add the JavaScript and ModelArmor policies to a step in the EventFlow of the proxy: < EventFlow name = "EventFlow" content - type = "text/event-stream" > < Request / > < Response > < Step > < Name>JS - combine - resp < / Name > < / Step > < Step > < ! -- Remove below Condition if you want to call model armor policy on every event -- > < Condition > buff ready = true < / Condition > < Name>SMR - modelresponse < / Name > < / Step > < / Response > < / EventFlow > Deploy and test the API proxy.
- For example: <?xml version="1.0" encoding="UTF-8" standalone="yes"?> <MessageLogging continueOnError="false" enabled="true" name="ML-log-error"> <DisplayName>ML-log-error</DisplayName> <CloudLogging> <LogName>projects/{organization.name}/logs/apigee errors</LogName> <Message contentType="text/plain">Request failed due to {faultReason}.</Message> <ResourceType>api</ResourceType> </CloudLogging> <logLevel>ALERT</logLevel> </MessageLogging> Add the MessageLogging policy to the FaultRules of the target or proxy endpoint: <TargetEndpoint> <?xml version="1.0" encoding="UTF-8" standalone="yes"?> <TargetEndpoint name="TargetEndpoint-1"> <Description/> <FaultRules> <FaultRule name="default-fault"> <Step> <Name>ML-log-error</Name> </Step> </FaultRule> </FaultRules> ... </TargetEndpoint> <ProxyEndpoint> <?xml version="1.0" encoding="UTF-8" standalone="yes"?> <ProxyEndpoint name="ProxyEndpoint-1"> <Description/> <FaultRules> <FaultRule name="default-fault"> <Step> <Name>ML-log-error</Name> </Step> </FaultRule> </FaultRules> ... </ProxyEndpoint> Deploy and test the API proxy.
- This step ensures that the EventFlow processes the policy during response handling: <TargetEndpoint> < ? xml version = "1.0" encoding = "UTF-8" standalone = "yes" ? > < TargetEndpoint name = "default" > < EventFlow content - type = "text/event-stream" > < Response > < Step > < Name>js - error < / Name > < / Step > < / Response > < / EventFlow > < HTTPTargetConnection > < URL>https : //generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:streamGenerateContent</URL> < / HTTPTargetConnection > < / TargetEndpoint > <ProxyEndpoint> < ? xml version = "1.0" encoding = "UTF-8" standalone = "yes" ? > < ProxyEndpoint name = "default" > < EventFlow content - type = "text/event-stream" > < Response > < Step > < Name>js - error < / Name > < / Step > < / Response > < / EventFlow > < HTTPProxyConnection > < URL>https : //generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:streamGenerateContent</URL> < / HTTPProxyConnection > < / ProxyEndpoint > Deploy the API proxy.
- Create a new PublishMessage policy with the following definition: <PublishMessage continueOnError="false" enabled="true" name="PM-record-event"> <DisplayName>PM-record-event</DisplayName> <Source>{response.event.current.content}</Source> <CloudPubSub> <Topic>projects/<customer project>/topics/<topic name></Topic> </CloudPubSub> </PublishMessage> Add the PublishMessage policy as a step in the EventFlow of the API proxy. <ProxyEndpoint> < ProxyEndpoint name = "default" > < EventFlow content - type = "text/event-stream" > < Response > < Step > < Name>PM - record - event < / Name > < / Step > < / Response > < / EventFlow > < HTTPProxyConnection > < / ProxyEndpoint > <TargetEndpoint> < TargetEndpoint name = "default" > < EventFlow content - type = "text/event-stream" > < Response > < Step > < Name>PM - record - event < / Name > < / Step > < / Response > < / EventFlow > < HTTPTargetConnection > < / TargetEndpoint > Deploy and test the API proxy.

### Add the SpikeArrest policy to your API \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/add-spike-arrest](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/add-spike-arrest)
- Source ID: `site-docs-reference`
- Final score: 95
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The text editor displays the XML code for the proxy, including the Spike Arrest policy step in the Response element of the PreFlow. <?xml version="1.0" encoding="UTF-8" standalone="yes"?> <SpikeArrest continueOnError="false" enabled="true" name="SA-"> <DisplayName>SA-</DisplayName> <Properties/> <Identifier ref="request.header.some-header-name"/> <MessageWeight ref="request.header.weight"/> <Rate>30ps</Rate> </SpikeArrest> In the XML for the policy, change the value of the <Rate> element to 1pm (which translates into roughly two requests allowed every 60 seconds in the cloud).
- Select Proxy Endpoints > default > PreFlow in the left-hand pane: Note: You may need to expand the visual editor in the right-hand pane to see all the elements.
- Click the + button next to PreFlow in the Response pane at the bottom-right of the visual editor: In the Add policy step dialog, select the Spike Arrest policy.
- To add the SpikeArrest policy to an API proxy: In the Google Cloud console, go to the Apigee > Proxy development > API Proxies page.

