---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:10:02.159Z"
product_name: "Apigee UI"
product_slug: "apigee-ui"
feature_name: "Debug view settings persistence"
feature_slug: "debug-view-settings-persistence"
latest_feature_date: "2025-08-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/ui-overview"
keywords:
  - "debug"
  - "view"
  - "settings"
  - "persistence"
  - "retains"
  - "expand"
  - "state"
  - "zoom"
---

# Debug view settings persistence

Product: Apigee UI
Coverage: MEDIUM

## Step 02 Summary

The debug view retains expand state, zoom level, viewport position, and search filter when switching between transactions.

## Extended Definition

The debug view retains expand state, zoom level, viewport position, and search filter when switching between transactions.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace)
- [https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events](https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events)
- [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/ui-overview](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/ui-overview)

## Supporting Pages

### View message data with the Debug view \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace)
- Source ID: `site-docs-reference`
- Final score: 112
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application development Apigee Guides Send feedback View message data with the Debug view Stay organized with collections Save and categorize content based on your preferences.
- View message data The Debug view in the Apigee Proxy Editor lets you view headers, variables, objects, and other details such as response time in the API proxy request and response flow.
- To use the Debug view in the Apigee UI to see what happens when the SpikeArrest policy rate is exceeded: In the Google Cloud console, go to the Proxy development > API Proxies page.
- A debug session is deleted within 24 hours of the time it is completed, so if you want to view the session after that time, you need to download it before then.

### Streaming server-sent events \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events](https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events)
- Source ID: `site-docs-reference-required-14`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- This limitation can be seen when viewing a debug session .
- Create a new SanitizeModelResponse policy with the following definition: <?xml version="1.0" encoding="UTF-8" standalone="yes"?> <SanitizeModelResponse async="false" continueOnError="false" enabled="true" name="SMR-modelresponse"> <IgnoreUnresolvedVariables>true</IgnoreUnresolvedVariables> <DisplayName>SMR-modelresponse</DisplayName> <ModelArmor> <TemplateName>projects/{project}/locations/{location}/templates/{template-name}</TemplateName> </ModelArmor> <LLMResponseSource>{response partial}</LLMResponseSource> <!-- Use the below settings if you want to call a Model Armor policy on every event --> <LLMResponseSource>{response.event.current.content}</LLMResponseSource> </SanitizeModelResponse> (Optional) Add a JavaScript policy to group events before sending them to the Apigee Model Armor policy. < ? xml version = "1.0" encoding = "UTF-8" standalone = "yes" ? > < Javascript continueOnError = "false" enabled = "true" timeLimit = "200" name = "JS-combine-resp" > < DisplayName>JS - combine - events < / DisplayName > < Properties / > < Source > var eventText = JSON . parse ( context . getVariable ( "response.event.current.content" ) . substring ( 5 )) . candidates [ 0 ] . content . parts [ 0 ] . text ; var finishReason = JSON . parse ( context . getVariable ( "response.event.current.content" ) . substring ( 5 )) . candidates [ 0 ] . finishReason ; var idx = context . getVariable ( "response.event.current.count" ); if ( idx % 5 == 0 finishReason == "STOP" ) { context . setVariable ( "response partial" , context . getVariable ( "tmp buffer pre" )); context . setVariable ( "buff ready" , true ); context . setVariable ( "tmp buffer pre" , "" ); } else { context . setVariable ( "buff ready" , false ); context . setVariable ( "response partial" , "" ); var previousBufferVal = context . getVariable ( "tmp buffer pre" ); if ( previousBufferVal ) { context . setVariable ( "tmp buffer pre" , previousBufferVal + eventText ); } else { context . setVariable ( "tmp buffer pre" , eventText ); } } < / Source > < / Javascript > Add the JavaScript and ModelArmor policies to a step in the EventFlow of the proxy: < EventFlow name = "EventFlow" content - type = "text/event-stream" > < Request / > < Response > < Step > < Name>JS - combine - resp < / Name > < / Step > < Step > < ! -- Remove below Condition if you want to call model armor policy on every event -- > < Condition > buff ready = true < / Condition > < Name>SMR - modelresponse < / Name > < / Step > < / Response > < / EventFlow > Deploy and test the API proxy.
- This can occur because the debug session entry is generated after the entire request has been processed, rather than at the beginning of the event stream.
- The debug session may reflect the fault code generated by the error, while the client only sees the 2xx status initially received in the headers.

### UI overview \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/ui-overview](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/ui-overview)
- Source ID: `site-docs-reference-required-14`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- The following table maps each Apigee UI feature page to its current location in the Apigee UI: Feature Apigee UI Proxies Proxy development > API proxies Go to API proxies Sharedflows Proxy development > Sharedflows Go to Sharedflows Offline debug Proxy development > Offline debug Go to Offline debug API products Distribution > API products Go to API products Portals Distribution > Portals Go to Portals Monetization Distribution > Monetization Go to Monetization Developers Distribution > Developers Go to Developers Apps Distribution > Apps Go to Apps API monitoring Proxy development > API monitoring Go to API monitoring API metrics Analytics > API metrics Go to API metrics Developer Engagement Analytics > Developer analysis Go to Developer analysis Traffic Composition Analytics > Developer analysis Go to Developer analysis Devices Analytics > End user analysis Go to End user analysis Geomap Analytics > End user analysis Go to End user analysis Custom reports Analytics > Custom reports Go to Custom reports Instances Management > Instances Go to Instances Data collectors Management > Data collectors Go to Data collectors Environments Management > Environments Go to Environments Endpoint attachments Management > Endpoint attachments Go to Endpoint attachments Roles Identity and Access Management (IAM) > Roles Go to Roles Users IAM Go to IAM Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Whether you are a Pay-as-you-go or Subscription customer, this view provides you with a snapshot of key resource usage, as well as shortcuts to other monitoring and identity management resources for your organization, including: Cloud Monitoring Cloud Billing Identity and Access Management Explore Apigee API management features From the main navigation menu, you can explore the range of Apigee API management features available for your organization, as described in the table below: Main navigation menu Purpose Proxy development Develop and deploy API proxies .
- Apigee API management From the Overview page, you can: Get started as a new Apigee user Test your Apigee runtime View key resource usage metrics Explore Apigee API management features Get started as a new Apigee user If you just are new to Apigee, you can begin your API management journey with quickstart learning options launched from the Overview page: Begin by deploying your first proxy : Watch a video tutorial that walks you through the steps required to create and deploy an API proxy.
- You can use the Apigee UI to develop and deploy your API proxies, trace their execution, view API analytics, and manage other aspects of your Apigee organization and its environments.

