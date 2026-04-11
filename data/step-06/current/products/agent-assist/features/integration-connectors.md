---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:58:55.432Z"
product_name: "Agent Assist"
product_slug: "agent-assist"
feature_name: "Integration Connectors"
feature_slug: "integration-connectors"
latest_feature_date: "2025-10-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/agent-assist/docs/custom-events"
keywords:
  - "third-party integrations"
  - "Agent Assist Integration Connectors"
  - "Integration Connectors"
  - "agent assist connectors"
  - "integration runtime"
  - "integration toolkit"
  - "external integration connector"
  - "connectors"
---

# Integration Connectors

Product: Agent Assist
Coverage: MEDIUM

## Step 02 Summary

Adds generally available Integration Connectors tooling to support external integrations for Agent Assist.

## Extended Definition

Integration Connectors in Agent Assist include custom UI module connectors that let developers integrate Agent Assist UI modules into agent desktops that are not directly supported by Agent Assist. They are implemented using custom events: callers dispatch events with payloads and add listeners for events, enabling a connector to trigger actions (such as analysis requests) and handle responses or UI selections.

## Evidence Summary

The cited Agent Assist documentation provides event-based implementation details for custom UI module connectors, including how to dispatch and subscribe to custom events and how those connectors are used to integrate Agent Assist modules into unsupported desktops.

## Source Links

- [https://docs.cloud.google.com/agent-assist/docs/custom-events](https://docs.cloud.google.com/agent-assist/docs/custom-events)

## Supporting Pages

### "Custom events and custom UI module connectors \_|\_ Agent Assist \_|\_ Google\

- URL: [https://docs.cloud.google.com/agent-assist/docs/custom-events](https://docs.cloud.google.com/agent-assist/docs/custom-events)
- Source ID: `site-docs-reference`
- Final score: 62
- Re-rank relevance: STRONG
- Re-rank rationale: It explicitly covers creating and using custom UI module connectors to integrate Agent Assist modules into unsupported agent desktops, which is central to connector-based integrations.

Evidence snippets:
- To manually dispatch a custom event, use the following syntax: dispatchAgentAssistEvent ( 'event name' , { detail : event payload , }); The following example shows how to dispatch the analyze-content-received event: if (newMessageFromHumanAgent) { dispatchAgentAssistEvent('analyze-content-received', { detail: { participantRole: 'HUMAN AGENT', request: { textInput: {text: newMessageFromHumanAgent}, messageSendTime: new Date().toISOString() } } }); } After a you dispatch a custom event, you will see the following in the UI module connector service: this . api . analyzeContent (...) . then ( function ( response ) { dispatchAgentAssistEvent('analyze-content-response-received', { detail : { response : response } } ); } ); And you will see the following in the module: addAgentAssistEventListener('analyze-content-response-received', function (event) { // Use the AnalyzeContent response to render suggestions in the UI. }); To manually subscribe to a custom event, use the following syntax: addAgentAssistEventListener ( 'event name' , function ( event ) { // event . detail contains the event payload . }); The following example shows a custom event subscription: addAgentAssistEventListener('smart-reply-selected', function (event) { var chipContent = event.details; // Populate the agent chat box with the selected Smart Reply chip. }); Custom UI module connectors You can also use custom events to create your own custom UI module connectors, which allow you to integrate the UI modules into an agent desktop that isn't supported by Agent Assist.
- Home Documentation AI and ML Agent Assist Guides Send feedback Custom events and custom UI module connectors Stay organized with collections Save and categorize content based on your preferences.
- Once you have created a custom UI module connector, return to the UI module implementation documentation for details about configuring your connectors and implementing the modules.
- For more information about implementing modules and connectors, see the implementation documentation .

