---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.292Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Prompt security controls"
feature_slug: "prompt-security-controls"
latest_feature_date: "2025-09-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
  - "https://docs.cloud.google.com/dialogflow/docs/compliance-security-controls"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design"
keywords:
  - "prompt"
  - "security"
  - "controls"
  - "agent"
  - "settings"
  - "now"
  - "include"
---

# Prompt security controls

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Agent settings now include new prompt security controls.

## Extended Definition

Agent settings now include new prompt security controls.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- [https://docs.cloud.google.com/dialogflow/docs/compliance-security-controls](https://docs.cloud.google.com/dialogflow/docs/compliance-security-controls)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design)

## Supporting Pages

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 213
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When enabled, you can provide the following options: Prompt security settings : You can select either Default for default security settings or Customize to clarify what user queries should be considered safe or unsafe.
- When enabled, the agent will reject user queries that trigger the security filter, including prompt injection attacks.
- Go to the Agent API reference Select a protocol and version for the Agent reference: Protocol V3 V3beta1 REST Agent resource Agent resource RPC Agent interface Agent interface C++ AgentsClient Not available C# AgentsClient Not available Go AgentsClient Not available Java AgentsClient AgentsClient Node.js AgentsClient AgentsClient PHP Not available Not available Python AgentsClient AgentsClient Ruby Not available Not available Close General settings The following general settings are available for agents: Display name A human-readable name for your agent.
- Go to the Agent API reference Select a protocol and version for the Agent reference: Protocol V3 V3beta1 REST Agent resource Agent resource RPC Agent interface Agent interface C++ AgentsClient Not available C# AgentsClient Not available Go AgentsClient Not available Java AgentsClient AgentsClient Node.js AgentsClient AgentsClient PHP Not available Not available Python AgentsClient AgentsClient Ruby Not available Not available Close The following subsections describe the different categories of agent settings.

### Compliance and security controls \_|\_ Dialogflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/docs/compliance-security-controls](https://docs.cloud.google.com/dialogflow/docs/compliance-security-controls)
- Source ID: `site-docs-root-2`
- Final score: 131
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Certifications Dialogflow CX is compliant with the following: Compliance Certification Dialogflow CX (including generative features ) Dialogflow ES HIPAA ✔ ✔ ISO 27001 , ISO 27017 , ISO 27018 , and ISO 27701 ✔ ✔ SOC 1 , SOC 2 , SOC 3 ✔ ✔ Security controls Dialogflow CX provides the following security controls: Security controls compliance Dialogflow CX (including generative features ) Dialogflow ES Data Residency Regionalization and location settings Regionalization and data residency Customer-managed encryption keys (CMEK) Customer-managed encryption keys (CMEK) - VPC Service Controls (VPC-SC) Using VPC Service Controls Using VPC Service Controls Access Transparency Access Transparency - Government authorizations Dialogflow CX has received the following authorizations: Authorization Dialogflow CX (including generative features ) Dialogflow ES FedRAMP High Authorization - Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation AI and ML Dialogflow Resources Send feedback Compliance and security controls Stay organized with collections Save and categorize content based on your preferences.
- This page provides information on compliance certifications and security controls that are supported by Dialogflow CX.
- Any certifications, security controls, and government authorizations cover Dialogflow in its entirety.

### "General agent design best practices \_|\_ Dialogflow CX \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design)
- Source ID: `site-docs-root`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- For example: The stock you are considering for purchase has just increased in value by 10%. (custom event) Can you rephrase that? ( no-match event ) Initial prompts for forms : This fulfillment is called when the agent performs form filling.
- Reprompt handlers for forms : This fulfillment is called when the agent is performing form filling, and it does not understand the end-user selection for the current parameter.
- This answer does not satisfy the form parameter prompt, but if your agent has an intent route in scope that can match this answer, your agent can handle the situation well.
- In addition, each flow can have some of its own settings, and it can be owned by a subset of team members, which helps to divide the work when designing large agents.

