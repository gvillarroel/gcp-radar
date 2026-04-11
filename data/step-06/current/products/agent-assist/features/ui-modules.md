---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:58:55.447Z"
product_name: "Agent Assist"
product_slug: "agent-assist"
feature_name: "UI Modules"
feature_slug: "ui-modules"
latest_feature_date: "2022-07-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/agent-assist/docs/custom-events"
  - "https://docs.cloud.google.com/agent-assist/docs/genesys-cloud-app"
keywords:
  - "agent desktop UI modules"
  - "Agent Assist module integration"
  - "prebuilt UI modules"
  - "agent UI module"
  - "UI module"
  - "Agent Assist UI modules"
  - "UI modules"
  - "Agent Assist UI"
---

# UI Modules

Product: Agent Assist
Coverage: MEDIUM

## Step 02 Summary

UI Modules provide ready-made components for integrating Agent Assist capabilities into agent user interfaces.

## Extended Definition

UI Modules in Agent Assist are embeddable UI components that connect to Agent Assist via UI module connectors and event messages. Agents can integrate them into agent desktops through prebuilt connectors, or implement a custom connector when a desktop is unsupported, using custom events to send requests (for example, analyze-content-received) and receive responses (for example, analyze-content-response-received or smart-reply-selected). The feature also requires a deployed Agent Assist UI modules backend/application server (for example, in Cloud Run) to render the modules.

## Evidence Summary

The first page documents event-driven and custom UI module connector integration behavior, while the second shows how to deploy the Agent Assist UI modules backend needed to render modules.

## Source Links

- [https://docs.cloud.google.com/agent-assist/docs/custom-events](https://docs.cloud.google.com/agent-assist/docs/custom-events)
- [https://docs.cloud.google.com/agent-assist/docs/genesys-cloud-app](https://docs.cloud.google.com/agent-assist/docs/genesys-cloud-app)

## Supporting Pages

### "Custom events and custom UI module connectors \_|\_ Agent Assist \_|\_ Google\

- URL: [https://docs.cloud.google.com/agent-assist/docs/custom-events](https://docs.cloud.google.com/agent-assist/docs/custom-events)
- Source ID: `site-docs-reference`
- Final score: 94
- Re-rank relevance: STRONG
- Re-rank rationale: The page is directly about Agent Assist UI module behavior, stating that all communication happens through custom events and showing how to dispatch and handle UI module events.

Evidence snippets:
- If you're integrating Agent Assist UI modules into any agent desktop without a prebuilt UI module connector, you will need to write a custom one.
- To manually dispatch a custom event, use the following syntax: dispatchAgentAssistEvent ( 'event name' , { detail : event payload , }); The following example shows how to dispatch the analyze-content-received event: if (newMessageFromHumanAgent) { dispatchAgentAssistEvent('analyze-content-received', { detail: { participantRole: 'HUMAN AGENT', request: { textInput: {text: newMessageFromHumanAgent}, messageSendTime: new Date().toISOString() } } }); } After a you dispatch a custom event, you will see the following in the UI module connector service: this . api . analyzeContent (...) . then ( function ( response ) { dispatchAgentAssistEvent('analyze-content-response-received', { detail : { response : response } } ); } ); And you will see the following in the module: addAgentAssistEventListener('analyze-content-response-received', function (event) { // Use the AnalyzeContent response to render suggestions in the UI. }); To manually subscribe to a custom event, use the following syntax: addAgentAssistEventListener ( 'event name' , function ( event ) { // event . detail contains the event payload . }); The following example shows a custom event subscription: addAgentAssistEventListener('smart-reply-selected', function (event) { var chipContent = event.details; // Populate the agent chat box with the selected Smart Reply chip. }); Custom UI module connectors You can also use custom events to create your own custom UI module connectors, which allow you to integrate the UI modules into an agent desktop that isn't supported by Agent Assist.
- For example: const connector = new UiModulesConnector (); const config = {}; // ...other UI module connector config options config . uiModuleEventOptions = { namespace : this . recordId } const containerElement = document . createElement ( "agent-assist-ui-modules-v2" ); // ...other UI modules HTML attributes containerEl . setAttribute ( "namespace" , this . recordId ); Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For example, when an Agent Assist suggestion is received, a UI module connector service will dispatch an analyze-content-received event to the UI modules, and the modules are subscribed to such events.

### "Deploy the Genesys Cloud application server \_|\_ Agent Assist \_|\_ Google\

- URL: [https://docs.cloud.google.com/agent-assist/docs/genesys-cloud-app](https://docs.cloud.google.com/agent-assist/docs/genesys-cloud-app)
- Source ID: `site-docs-root`
- Final score: 64
- Re-rank relevance: STRONG
- Re-rank rationale: The page is specifically about deploying and configuring the Genesys Cloud UI module/server used to render Agent Assist suggestions in the Genesys Cloud interface.

Evidence snippets:
- Deploy an Agent Assist UI modules backend .
- Deploy the Genesys Cloud application server for rendering the Agent Assist UI module in Cloud Run .
- Run the deployment command with updated environment variables. gcloud run deploy $ AA MODULE APPLICATION SERVER --source ./ --service-account=$ ui module service account --memory 1Gi --platform managed --region us-central1 --allow-unauthenticated --set-env-vars ^ ^OAUTH CLIENT ID=$ OAUTH CLIENT ID GENESYS CLOUD REGION=$ GENESYS CLOUD REGION GENESYS CLOUD ENVIRONMENT=$ GENESYS CLOUD ENVIRONMENT CONVERSATION PROFILE=$ CONVERSATION PROFILE FEATURES=$ FEATURES PROJECT ID=$ PROJECT ID APPLICATION SERVER URL='' PROXY SERVER=$ PROXY SERVER APPLICATION SERVER URL=$ APPLICATION SERVER URL The Genesys Cloud application server must be deployed to a Google Cloud hosting service.
- Replace PROJECT-ID with your agent's Google Cloud project ID, UI MODULE SERVICE ACCOUNT with your service account client email, and set the REGION for Cloud Run . gcloud run deploy $ AA MODULE APPLICATION SERVER --source ./ --service-account=$ ui module service account --memory 1Gi --platform managed --region us-central1 --allow-unauthenticated Click Enter to accept the default service name.

