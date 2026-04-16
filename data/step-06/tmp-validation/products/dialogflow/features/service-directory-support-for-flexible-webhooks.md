---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.656Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Service Directory support for flexible webhooks"
feature_slug: "service-directory-support-for-flexible-webhooks"
latest_feature_date: "2025-01-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/custom-ca"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/reference/json-export"
keywords:
  - "directory"
  - "integrate"
  - "flexible"
  - "webhooks"
---

# Service Directory support for flexible webhooks

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX flexible webhooks can integrate with Service Directory.

## Extended Definition

Dialogflow CX flexible webhooks can integrate with Service Directory.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/custom-ca](https://docs.cloud.google.com/dialogflow/cx/docs/concept/custom-ca)
- [https://docs.cloud.google.com/dialogflow/cx/docs/reference/json-export](https://docs.cloud.google.com/dialogflow/cx/docs/reference/json-export)

## Supporting Pages

### "General agent design best practices \_|\_ Dialogflow CX \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design)
- Source ID: `site-docs-root`
- Final score: 58
- Re-rank relevance: N/A

Evidence snippets:
- Webhooks Unless your agent can be completely defined with static data, you need to use webhooks to connect your service and provide an agent that can handle dynamic scenarios.
- By defining this parameter in both ways, your agent is more flexible with how it extracts the information.
- Integrations and connecting your services There are multiple ways to integrate with Dialogflow CX agents.
- This section provides best practices for choosing how to integrate.

### Custom CA certificates \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/custom-ca](https://docs.cloud.google.com/dialogflow/cx/docs/concept/custom-ca)
- Source ID: `site-docs-root`
- Final score: 58
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For webhooks integrated with Service Directory private network access , Setup your Service Directory Endpoint with the IP address and port of your server, and provide the Service Directory Service when creating webhook.
- In this case, you can upload the custom certificates to Dialogflow CX when creating webhooks, and the uploaded certificates will override Google's default trust store.
- Dialogflow CX webhooks require HTTPS endpoints that present valid TLS certificates when they are verified using Google's default trust store.

### JSON package export format \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/reference/json-export](https://docs.cloud.google.com/dialogflow/cx/docs/reference/json-export)
- Source ID: `site-docs-reference`
- Final score: 55
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Each file contains test-case-specific data. webhooks : This directory contains your webhook data. <webhook name>.json : One or more of these files exist, and the file names correspond to webhook display names.
- For example: folder entityTypes ⤷ folder Entity Type A ⤷ folder entities ⤷ insert drive file en.json ⤷ insert drive file en-gb.json ⤷ insert drive file en-ca.json ⤷ folder excludedPhrases ⤷ insert drive file en.json ⤷ insert drive file en-gb.json ⤷ insert drive file en-ca.json ⤷ insert drive file Entity Type A.json ⤷ folder Entity Type B ⤷ folder entities ⤷ insert drive file en.json ⤷ insert drive file en-gb.json ⤷ insert drive file en-ca.json ⤷ folder excludedPhrases ⤷ insert drive file en.json ⤷ insert drive file en-gb.json ⤷ insert drive file en-ca.json ⤷ insert drive file Entity Type B.json folder flows ⤷ folder Flow A ⤷ folder pages ⤷ insert drive file Page A.json ⤷ insert drive file Page B.json ⤷ insert drive file Page C.json ⤷ folder transitionRouteGroups ⤷ insert drive file Route Group A.json ⤷ insert drive file Route Group B.json ⤷ insert drive file Route Group C.json ⤷ insert drive file Flow A.json ⤷ folder Flow B ⤷ folder pages ⤷ insert drive file Page D.json ⤷ insert drive file Page E.json ⤷ insert drive file Page F.json ⤷ folder transitionRouteGroups ⤷ insert drive file Route Group D.json ⤷ insert drive file Route Group E.json ⤷ insert drive file Route Group F.json ⤷ insert drive file Flow B.json folder intents ⤷ folder Intent A ⤷ folder trainingPhrases ⤷ insert drive file en.json ⤷ insert drive file en-gb.json ⤷ insert drive file en-ca.json ⤷ insert drive file Intent A.json ⤷ folder Intent B ⤷ folder trainingPhrases ⤷ insert drive file en.json ⤷ insert drive file en-gb.json ⤷ insert drive file en-ca.json ⤷ insert drive file Intent B.json folder testCases ⤷ insert drive file Test Case A.json ⤷ insert drive file Test Case B.json folder webhooks ⤷ insert drive file Webhook A.json ⤷ insert drive file Webhook B.json folder agentTransitionRouteGroups ⤷ insert drive file Agent Transition Route Group A.json ⤷ insert drive file Agent Transition Route Group B.json insert drive file agent.json Agent restore guidance When restoring an agent, you must provide a zip file as described above.
- The file contains flow-specific data not found in other files. intents : This directory contains your intent data. <intent name> : One or more of these directories exist, and the directory names correspond to intent display names. trainingPhrases : This directory contains training phrase data. <language tag>.json : One or more of these files exist, and the file names correspond to language tags.
- The file contains entity-type-specific data not found in other files. flows : This directory contains your flow data. <flow name> : One or more of these directories exist, and the directory names correspond to flow display names. pages : This directory contains the page data for the flow. <page name>.json : One or more of these files exist, and the file names correspond to page display names.

