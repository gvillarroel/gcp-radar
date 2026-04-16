---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:10:02.163Z"
product_name: "Apigee UI"
product_slug: "apigee-ui"
feature_name: "New Proxy Editor"
feature_slug: "new-proxy-editor"
latest_feature_date: "2023-01-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events"
keywords:
  - "proxy"
  - "editor"
  - "simplifies"
  - "adding"
  - "policies"
  - "configuring"
  - "them"
  - "deploying"
---

# New Proxy Editor

Product: Apigee UI
Coverage: MEDIUM

## Step 02 Summary

The new Proxy Editor simplifies adding policies to an API proxy, configuring them, and deploying the proxy.

## Extended Definition

The new Proxy Editor simplifies adding policies to an API proxy, configuring them, and deploying the proxy.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference)
- [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy)
- [https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events](https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events)

## Supporting Pages

### API proxy configuration reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference)
- Source ID: `site-docs-reference-required-14`
- Final score: 145
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, in the following Flow configuration, any inbound request that does not include the path suffix /first or /second will cause the ThirdFlow to execute, enforcing the policy called Return404 . <Flows> <Flow name="FirstFlow"> <Condition>proxy.pathsuffix MatchesPath "/first"</Condition> <Request> <Step><Name>FirstPolicy</Name></Step> </Request> </Flow> <Flow name="SecondFlow"> <Condition>proxy.pathsuffix MatchesPath "/second"</Condition> <Request> <Step><Name>FirstPolicy</Name></Step> <Step><Name>SecondPolicy</Name></Step> </Request> </Flow> <Flow name="ThirdFlow"> <Request> <Step><Name>Return404</Name></Step> </Request> </Flow> </Flows> Resources "Resources" (resource files for use in API proxies) are scripts, code, and XSL transformations that can be attached to Flows using policies.
- The following example sets the AsyncExecution to true : <IntegrationEndpoint name="my-int-endpoint"> <AsyncExecution>true</AsyncExecution> </IntegrationEndpoint> Policies The /policies directory in an API proxy contains all policies available to be attached to Flows in the API proxy.
- To use asynchronous behavior in API proxies, see JavaScript object model . false No Policy attachment The following image shows the API proxy flows execution sequence: As shown above: Policies are attached as processing steps to Flows .
- Configuring IntegrationEndpoint To configure an integration endpoint as your target endpoint, add the IntegrationEndpoint element to your ProxyEndpoint configuration.

### Building a simple API proxy \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy)
- Source ID: `site-docs-reference-required-14`
- Final score: 140
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Importing an API proxy from an API proxy bundle Note: When importing an API proxy from an API proxy bundle, you are responsible for configuring security in and adding policies to the bundle.
- Once the proxy is generated, you can use the Apigee UI to further develop it by adding policies, implementing custom code, and so on&emdash;just like any Apigee proxy.
- Otherwise, create a YAML file at /tmp/apigee-map.yaml with this configuration. defaultService : projects / dg - runtime - test1 / global / backendServices / YOUR BACKEND 1 name : matcher1 routeRules : - matchRules : - headerMatches : - headerName : Content - Type prefixMatch : application / grpc prefixMatch : / priority : 100 routeAction : weightedBackendServices : - backendService : projects / dg - runtime - test1 / global / backendServices / YOUR BACKEND 2 weight : 100 Apply the new YAML for gRPC routing gcloud compute url - maps import APIGEE URL MAP NAME \ -- source / tmp / apigee - map . yaml \ -- global - project $ PROJECT ID Adding security Proxy security is achieved by adding a policy to your proxy.
- For more detailed information about CORS support, including adding CORS preflight support to a proxy, see Adding CORS support to an API proxy .

### Streaming server-sent events \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events](https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events)
- Source ID: `site-docs-reference-required-14`
- Final score: 119
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create a new SanitizeModelResponse policy with the following definition: <?xml version="1.0" encoding="UTF-8" standalone="yes"?> <SanitizeModelResponse async="false" continueOnError="false" enabled="true" name="SMR-modelresponse"> <IgnoreUnresolvedVariables>true</IgnoreUnresolvedVariables> <DisplayName>SMR-modelresponse</DisplayName> <ModelArmor> <TemplateName>projects/{project}/locations/{location}/templates/{template-name}</TemplateName> </ModelArmor> <LLMResponseSource>{response partial}</LLMResponseSource> <!-- Use the below settings if you want to call a Model Armor policy on every event --> <LLMResponseSource>{response.event.current.content}</LLMResponseSource> </SanitizeModelResponse> (Optional) Add a JavaScript policy to group events before sending them to the Apigee Model Armor policy. < ? xml version = "1.0" encoding = "UTF-8" standalone = "yes" ? > < Javascript continueOnError = "false" enabled = "true" timeLimit = "200" name = "JS-combine-resp" > < DisplayName>JS - combine - events < / DisplayName > < Properties / > < Source > var eventText = JSON . parse ( context . getVariable ( "response.event.current.content" ) . substring ( 5 )) . candidates [ 0 ] . content . parts [ 0 ] . text ; var finishReason = JSON . parse ( context . getVariable ( "response.event.current.content" ) . substring ( 5 )) . candidates [ 0 ] . finishReason ; var idx = context . getVariable ( "response.event.current.count" ); if ( idx % 5 == 0 finishReason == "STOP" ) { context . setVariable ( "response partial" , context . getVariable ( "tmp buffer pre" )); context . setVariable ( "buff ready" , true ); context . setVariable ( "tmp buffer pre" , "" ); } else { context . setVariable ( "buff ready" , false ); context . setVariable ( "response partial" , "" ); var previousBufferVal = context . getVariable ( "tmp buffer pre" ); if ( previousBufferVal ) { context . setVariable ( "tmp buffer pre" , previousBufferVal + eventText ); } else { context . setVariable ( "tmp buffer pre" , eventText ); } } < / Source > < / Javascript > Add the JavaScript and ModelArmor policies to a step in the EventFlow of the proxy: < EventFlow name = "EventFlow" content - type = "text/event-stream" > < Request / > < Response > < Step > < Name>JS - combine - resp < / Name > < / Step > < Step > < ! -- Remove below Condition if you want to call model armor policy on every event -- > < Condition > buff ready = true < / Condition > < Name>SMR - modelresponse < / Name > < / Step > < / Response > < / EventFlow > Deploy and test the API proxy.
- Putting the JavaScript code in a resource file is another option for configuring the policy. < ? xml version = "1.0" encoding = "UTF-8" standalone = "yes" ? > < Javascript continueOnError = "false" enabled = "true" timeLimit = "200" name = "js-update-resp" > < DisplayName>js - update - resp < / DisplayName > < Properties / > < Source > var event = JSON . parse ( context . getVariable ( "response.event.current.content" )); event . modelVersion = null ; context . setVariable ( "response.event.current.content" , JSON . stringify ( event )); < / Source > < / Javascript > Add the JavaScript policy to the EventFlow of the proxy.
- Putting the JavaScript code in a resource file is another option for configuring the policy. < Javascript continueOnError = "false" enabled = "true" timeLimit = "200" name = "js-filter-resp" > < DisplayName>js - filter - resp < / DisplayName > < Properties / > < Source > var event = JSON . parse ( context . getVariable ( "response.event.current.content" )); if ( "error" in event ){ // Do not send event to customer context . setVariable ( "response.event.current.content" , "" ); } < / Source > < / Javascript > Add the JavaScript policy to the EventFlow of the proxy.
- The following table shows the execution of EventFlow stanzas based on endpoint placement: ProxyEndpoint TargetEndpoint EventFlow used EventFlow in ProxyEndpoint EventFlow in TargetEndpoint EventFlow in TargetEndpoint No EventFlow EventFlow in TargetEndpoint EventFlow in TargetEndpoint EventFlow in ProxyEndpoint No EventFlow EventFlow in ProxyEndpoint Add policies to an EventFlow You can add up to a total of four policies to the Response element of the EventFlow .

