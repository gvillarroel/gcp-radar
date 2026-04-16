---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.069Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Agent-level deflections"
feature_slug: "agent-level-deflections"
latest_feature_date: "2024-09-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Agents_and_Teams_Data_Set"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-set-desktop-layouts"
keywords:
  - "agent"
  - "level"
  - "deflections"
  - "let"
  - "agents"
  - "choose"
  - "how"
  - "route"
---

# Agent-level deflections

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Agent-level deflections let agents choose how to route agent-to-agent calls for over-capacity, after-hours, and automatic redirection scenarios.

## Extended Definition

Agent-level deflections let agents choose how to route agent-to-agent calls for over-capacity, after-hours, and automatic redirection scenarios.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Agents_and_Teams_Data_Set](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Agents_and_Teams_Data_Set)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-set-desktop-layouts](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-set-desktop-layouts)

## Supporting Pages

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- Emergency queues don't support the following: Virtual agents Overcapacity deflections Automatic redirections Target metrics Blended SMS Presession SMS deflections Call redaction Surveys CSAT ratings IVR payments Custom URLs Before you begin To configure an emergency service callback queue, you'll need a phone number that is dedicated to emergency or special services calls .
- Deflections for agent to agent, end-user to agent, and direct calls When you set up agent to agent calling , end-user to agent calling or direct inbound calling , Google recommends configuring deflections or redirects for times when agents aren't available.
- Configure deflections at the agent level For agent to agent , end-user to agent or direct inbound call types, you can configure the following deflection types at the agent level: after hours, overcapacity, and automatic redirection.
- Configure deflections at the global level For agent to agent , end-user to agent or direct inbound call types, you can configure the following deflection types at the global level: after hours and overcapacity.

### "Standard Reports Agent and Teams Data Sets \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Agents_and_Teams_Data_Set](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Agents_and_Teams_Data_Set)
- Source ID: `site-docs-reference`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- Date and Timestamp Agent Status Summary and Timeline Report Agent statuses, also known as Aux codes, are used to track time spent on different tasks, make agents available for calls or chats, and are used extensively for workforce management.
- Summary Metrics Service Level : Count of interactions that were answered by an Agent before the service level target has been reached / Count of offered interactions that are eligible for service level.
- This field always displays the value set at the individual agent level an does not show the global concurrency setting, even if the concurrency limit is disabled for a user.
- This field always displays the value set at the individual agent level an does not show the global concurrency setting, even if the concurrency limit is disabled for a user.

### "Configure desktop layouts for agents \_|\_ Google Cloud Contact Center as\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-set-desktop-layouts](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-set-desktop-layouts)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Configure desktop layouts at the team level You can configure desktop layouts at the team level for agents receiving inbound calls, placing outbound calls, and handling messages.
- Configure desktop layouts at the queue level You can configure desktop layouts at the queue level for agents receiving inbound calls and handling messages (mobile and web only).
- Home Documentation AI and ML Google Cloud CCaaS User Guides Send feedback Configure desktop layouts for agents Stay organized with collections Save and categorize content based on your preferences.
- Configure desktop layouts globally You can configure desktop layouts globally for agents receiving inbound calls, placing outbound calls, and handling messages.

