---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:10:02.160Z"
product_name: "Apigee UI"
product_slug: "apigee-ui"
feature_name: "Recent debug sessions list"
feature_slug: "recent-debug-sessions-list"
latest_feature_date: "2025-05-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/fault-handling"
keywords:
  - "recent"
  - "debug"
  - "sessions"
  - "list"
  - "apigee"
  - "ui"
  - "can"
  - "show"
---

# Recent debug sessions list

Product: Apigee UI
Coverage: MEDIUM

## Step 02 Summary

The Apigee Debug UI can show recent debug sessions for a proxy across revisions, environments, and deployment states.

## Extended Definition

The Apigee Debug UI can show recent debug sessions for a proxy across revisions, environments, and deployment states.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events](https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace)
- [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/fault-handling](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/fault-handling)

## Supporting Pages

### Streaming server-sent events \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events](https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events)
- Source ID: `site-docs-reference-required-14`
- Final score: 64
- Re-rank relevance: N/A

Evidence snippets:
- EventFlow use cases and examples The following examples show how to implement common use cases for SSE proxies: Modify an SSE response Filter an SSE response Send an SSE event to an external system Use an Apigee Model Armor policy in an EventFlows Error handling in the EventFlow Propagate fault messages in an EventFlow Modify an SSE response This example shows how to remove data from an SSE EventFlow response before returning it to the client.
- Call the deployed proxy: curl -X POST -H 'Content-Type: application/json' \ "https:// YOUR APIGEE ENVIRONMENT GROUP HOSTNAME / YOUR API PATH " \ -d '{ "contents":[{"parts":[{"text": "Write a story about a magic pen."}]}]}' Show a sample response Here's a sample of how the response might look without applying any filtering.
- Call the deployed proxy: curl -X POST -H 'Content-Type: application/json' \ "https:// YOUR APIGEE ENVIRONMENT GROUP HOSTNAME / YOUR API PATH " \ -d '{ "contents":[{"parts":[{"text": "Write a story about a magic pen."}]}]}' Show a sample response This is a sample response without any filtering applied.
- Viewing SSE data in Apigee analytics Data for SSE proxies shows up in Apigee analytics as expected for any API proxy.

### View message data with the Debug view \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace)
- Source ID: `site-docs-reference`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- In the dialog: Select the Environment in which you want to run the debug session. (Optional) From the Filter list, select a filter to apply to all transactions in the debug session you are creating.
- Home Documentation Application development Apigee Guides Send feedback View message data with the Debug view Stay organized with collections Save and categorize content based on your preferences.
- View message data The Debug view in the Apigee Proxy Editor lets you view headers, variables, objects, and other details such as response time in the API proxy request and response flow.
- To use the Debug view in the Apigee UI to see what happens when the SpikeArrest policy rate is exceeded: In the Google Cloud console, go to the Proxy development > API Proxies page.

### Handling faults \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/fault-handling](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/fault-handling)
- Source ID: `site-docs-reference-required-14`
- Final score: 58
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Therefore, when using the Apigee UI to create a policy for a FaultRule, select the plus sign, + , next to Policies in the UI to add the policy: The example below shows a typical AssignMessage policy configuration: < AssignMessage name = "AM-Invalid-Key" > < Set > < Payload contentType = "text/plain" > That is an error .</ Payload > < StatusCode>401 < / StatusCode > < / Set > < IgnoreUnresolvedVariables>true < / IgnoreUnresolvedVariables > < / AssignMessage > Notice that it does not specify an <AssignTo> element.
- The name comes from the policy's name attribute on the parent element, as shown in the policy example earlier. <Condition> : Apigee evaluates the condition and executes the policy only if the condition is true.
- By default, following is the response that gets returned to the client app: HTTP / 1.1 401 Unauthorized Date : Wed, 20 Jul 2016 19:19:32 GMT Content-Type : application/json Content-Length : 150 Connection : keep-alive Server : Apigee Router Co nne c t io n # 0 t o hos t myorg - test .apigee. net le ft i nta c t { "fault" :{ "faultstring" : "Failed to resolve API Key variable request.queryparam.apikey" , "detail" :{ "errorcode" : "steps.oauth.v2.FailedToResolveAPIKey" }}} Your API users may be able to figure out the error message, but they may not.
- If a FaultRule is executed, but none of its Steps are executed, The DefaultFaultRule is not executed (because Apigee has already executed its one FaultRule). --> <DefaultFaultRule name="default-fault"> <Step> <Name>Default-message</Name> </Step> </DefaultFaultRule> Fault rule order As you can see in the previous example, the order in which you put your FaultRules is important depending on whether the error occurs in the ProxyEndpoint versus the TargetEndpoint.

