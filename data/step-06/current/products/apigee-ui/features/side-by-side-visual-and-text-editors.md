---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:10:02.164Z"
product_name: "Apigee UI"
product_slug: "apigee-ui"
feature_name: "Side-by-side visual and text editors"
feature_slug: "side-by-side-visual-and-text-editors"
latest_feature_date: "2022-08-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/best-practices-api-proxy-design-and-development"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/fault-handling"
keywords:
  - "side"
  - "visual"
  - "text"
  - "editors"
  - "develop"
  - "view"
  - "can"
  - "display"
---

# Side-by-side visual and text editors

Product: Apigee UI
Coverage: MEDIUM

## Step 02 Summary

The Develop view can display the visual editor and text editor simultaneously with resizable panes.

## Extended Definition

The Develop view can display the visual editor and text editor simultaneously with resizable panes.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events](https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events)
- [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/best-practices-api-proxy-design-and-development](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/best-practices-api-proxy-design-and-development)
- [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/fault-handling](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/fault-handling)

## Supporting Pages

### "Best practices for API proxy design and development with Apigee \_|\_ Google\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/best-practices-api-proxy-design-and-development](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/best-practices-api-proxy-design-and-development)
- Source ID: `site-docs-reference-required-14`
- Final score: 129
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- API proxy development Initial Design Considerations Warning: Do not call the Apigee API from inside API proxies.
- When not use: For lightweight logic that can execute quickly, inline The API proxy must transfer context (like variables) or receive context from the external implementation To summarize: If the logic is simple or trivial, use JavaScript (preferably) or PythonScript.
- Consider the following recommended strategies for handling large message sizes in Apigee: We highly recommend isolating API proxies that frequently handle large payloads in a dedicated environment to avoid a potential "noisy neighbor" scenario.
- Home Documentation Application development Apigee Guides Send feedback Best practices for API proxy design and development with Apigee Stay organized with collections Save and categorize content based on your preferences.

### Streaming server-sent events \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events](https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events)
- Source ID: `site-docs-reference-required-14`
- Final score: 127
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create a new SanitizeModelResponse policy with the following definition: <?xml version="1.0" encoding="UTF-8" standalone="yes"?> <SanitizeModelResponse async="false" continueOnError="false" enabled="true" name="SMR-modelresponse"> <IgnoreUnresolvedVariables>true</IgnoreUnresolvedVariables> <DisplayName>SMR-modelresponse</DisplayName> <ModelArmor> <TemplateName>projects/{project}/locations/{location}/templates/{template-name}</TemplateName> </ModelArmor> <LLMResponseSource>{response partial}</LLMResponseSource> <!-- Use the below settings if you want to call a Model Armor policy on every event --> <LLMResponseSource>{response.event.current.content}</LLMResponseSource> </SanitizeModelResponse> (Optional) Add a JavaScript policy to group events before sending them to the Apigee Model Armor policy. < ? xml version = "1.0" encoding = "UTF-8" standalone = "yes" ? > < Javascript continueOnError = "false" enabled = "true" timeLimit = "200" name = "JS-combine-resp" > < DisplayName>JS - combine - events < / DisplayName > < Properties / > < Source > var eventText = JSON . parse ( context . getVariable ( "response.event.current.content" ) . substring ( 5 )) . candidates [ 0 ] . content . parts [ 0 ] . text ; var finishReason = JSON . parse ( context . getVariable ( "response.event.current.content" ) . substring ( 5 )) . candidates [ 0 ] . finishReason ; var idx = context . getVariable ( "response.event.current.count" ); if ( idx % 5 == 0 finishReason == "STOP" ) { context . setVariable ( "response partial" , context . getVariable ( "tmp buffer pre" )); context . setVariable ( "buff ready" , true ); context . setVariable ( "tmp buffer pre" , "" ); } else { context . setVariable ( "buff ready" , false ); context . setVariable ( "response partial" , "" ); var previousBufferVal = context . getVariable ( "tmp buffer pre" ); if ( previousBufferVal ) { context . setVariable ( "tmp buffer pre" , previousBufferVal + eventText ); } else { context . setVariable ( "tmp buffer pre" , eventText ); } } < / Source > < / Javascript > Add the JavaScript and ModelArmor policies to a step in the EventFlow of the proxy: < EventFlow name = "EventFlow" content - type = "text/event-stream" > < Request / > < Response > < Step > < Name>JS - combine - resp < / Name > < / Step > < Step > < ! -- Remove below Condition if you want to call model armor policy on every event -- > < Condition > buff ready = true < / Condition > < Name>SMR - modelresponse < / Name > < / Step > < / Response > < / EventFlow > Deploy and test the API proxy.
- For example: <?xml version="1.0" encoding="UTF-8" standalone="yes"?> <MessageLogging continueOnError="false" enabled="true" name="ML-log-error"> <DisplayName>ML-log-error</DisplayName> <CloudLogging> <LogName>projects/{organization.name}/logs/apigee errors</LogName> <Message contentType="text/plain">Request failed due to {faultReason}.</Message> <ResourceType>api</ResourceType> </CloudLogging> <logLevel>ALERT</logLevel> </MessageLogging> Add the MessageLogging policy to the FaultRules of the target or proxy endpoint: <TargetEndpoint> <?xml version="1.0" encoding="UTF-8" standalone="yes"?> <TargetEndpoint name="TargetEndpoint-1"> <Description/> <FaultRules> <FaultRule name="default-fault"> <Step> <Name>ML-log-error</Name> </Step> </FaultRule> </FaultRules> ... </TargetEndpoint> <ProxyEndpoint> <?xml version="1.0" encoding="UTF-8" standalone="yes"?> <ProxyEndpoint name="ProxyEndpoint-1"> <Description/> <FaultRules> <FaultRule name="default-fault"> <Step> <Name>ML-log-error</Name> </Step> </FaultRule> </FaultRules> ... </ProxyEndpoint> Deploy and test the API proxy.
- An EventFlow can be placed inside a TargetEndpoint or a ProxyEndpoint definition as shown in the following code samples: <ProxyEndpoint> <ProxyEndpoint name="default"> <Description/> <FaultRules/> <PreFlow name="PreFlow"> <Request/> <Response/> </PreFlow> <PostFlow name="PostFlow"> <Request/> <Response/> </PostFlow> <Flows/> <EventFlow name="EventFlow" content-type="text/event-stream"> <Response/> </EventFlow> <HTTPProxyConnection> <Properties/> <URL>https://httpbin.org/sse</URL> </HTTPProxyConnection> </ProxyEndpoint> <TargetEndpoint> <TargetEndpoint name="default"> <Description/> <FaultRules/> <PreFlow name="PreFlow"> <Request/> <Response/> </PreFlow> <PostFlow name="PostFlow"> <Request/> <Response/> </PostFlow> <Flows/> <EventFlow name="EventFlow" content-type="text/event-stream"> <Response/> </EventFlow> <HTTPTargetConnection> <Properties/> <URL>https://httpbin.org/sse</URL> </HTTPTargetConnection> </TargetEndpoint> Note: If you add multiple EventFlow stanzas to a endpoint, only the last one in the endpoint definition is executed.
- Create a new PublishMessage policy with the following definition: <PublishMessage continueOnError="false" enabled="true" name="PM-record-event"> <DisplayName>PM-record-event</DisplayName> <Source>{response.event.current.content}</Source> <CloudPubSub> <Topic>projects/<customer project>/topics/<topic name></Topic> </CloudPubSub> </PublishMessage> Add the PublishMessage policy as a step in the EventFlow of the API proxy. <ProxyEndpoint> < ProxyEndpoint name = "default" > < EventFlow content - type = "text/event-stream" > < Response > < Step > < Name>PM - record - event < / Name > < / Step > < / Response > < / EventFlow > < HTTPProxyConnection > < / ProxyEndpoint > <TargetEndpoint> < TargetEndpoint name = "default" > < EventFlow content - type = "text/event-stream" > < Response > < Step > < Name>PM - record - event < / Name > < / Step > < / Response > < / EventFlow > < HTTPTargetConnection > < / TargetEndpoint > Deploy and test the API proxy.

### Handling faults \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/fault-handling](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/fault-handling)
- Source ID: `site-docs-reference-required-14`
- Final score: 121
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can use the Apigee UI to make this edit in the Code pane of the Develop view for an API proxy, or edit the XML file that defines the ProxyEndpoint or TargetEndpoint.
- For example, you can specify that different AssignMessage policy steps execute in different conditions, like this: <FaultRule name="raise-fault-3"> <!-- This condition catches any error in the Verify-API-Key-1 policy. --> <Condition>oauthV2.Verify-API-Key-1.failed = "true"</Condition> <!-- This first step always executes, which handles errors you haven't mapped with inner conditions. --> <Step> <Name>AM-Generic-Key-Fault</Name> </Step> <Step> <Name>AM-API-Key-NotFound</Name> <Condition>fault.name = "FailedToResolveAPIKey"</Condition> </Step> <Step> <Name>AM-API-Key-Invalid</Name> <Condition>fault.name = "InvalidApiKey"</Condition> </Step> </FaultRule> Note: When using this pattern, consider including one step that will always execute (by not providing a condition for it).
- To put the rest of this section in context, here's a sample fault rule that has an outer FaultRule condition and an inner Step condition. <FaultRule name="invalid key rule"> <Step> <Name>invalid-key-message</Name> <Condition> oauthV2.Verify-API-Key-1.failed = true</Condition> </Step> <Condition> fault.name = "FailedToResolveAPIKey"</Condition> </FaultRule> Variables specific to policy errors The fault.name and {policy namespace}.{policy name}.failed variables are available when a policy throws an error. fault.name When a policy fails, catch the error in a condition using the fault.name variable.
- Here's an example of this configuration: <FaultRule name="over quota"> <!-- This condition catches a QuotaViolation in any Quota policy --> <Condition>fault.name = "QuotaViolation"</Condition> <Step> <Name>AM-developer-over-quota-fault</Name> <Condition>ratelimit.developer-quota-policy.exceed.count GreaterThan 0</Condition> </Step> <Step> <Name>AM-global-over-quota-fault</Name> <Condition>ratelimit.global-quota-policy.exceed.count GreaterThan 0</Condition> </Step> </FaultRule> For another example, see this discussion on Policy fault handling .

