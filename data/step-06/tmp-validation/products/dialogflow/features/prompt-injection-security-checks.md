---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.660Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Prompt injection security checks"
feature_slug: "prompt-injection-security-checks"
latest_feature_date: "2024-09-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/best-practices"
keywords:
  - "injection"
  - "perform"
  - "checks"
  - "prompt"
  - "security"
---

# Prompt injection security checks

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX can perform security checks to help prevent prompt injection attacks.

## Extended Definition

Dialogflow CX can perform security checks to help prevent prompt injection attacks.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/best-practices](https://docs.cloud.google.com/dialogflow/cx/docs/concept/best-practices)

## Supporting Pages

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- When enabled, the agent will reject user queries that trigger the security filter, including prompt injection attacks.
- Prompt security link You can check the enable prompt security check setting to enable prompt security checks.
- Prompt security You can check the enable prompt security check setting to enable prompt security checks.
- Prompt security You can check the enable prompt security check setting to enable prompt security checks.

### "General agent design best practices \_|\_ Dialogflow CX \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design)
- Source ID: `site-docs-root`
- Final score: 57
- Re-rank relevance: N/A

Evidence snippets:
- For example: The stock you are considering for purchase has just increased in value by 10%. (custom event) Can you rephrase that? ( no-match event ) Initial prompts for forms : This fulfillment is called when the agent performs form filling.
- Reprompt handlers for forms : This fulfillment is called when the agent is performing form filling, and it does not understand the end-user selection for the current parameter.
- This answer does not satisfy the form parameter prompt, but if your agent has an intent route in scope that can match this answer, your agent can handle the situation well.
- It is less dangerous to use @sys.any with form parameters, because the agent is expecting specific information when prompting for form parameters.

### Service use best practices \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/best-practices](https://docs.cloud.google.com/dialogflow/cx/docs/concept/best-practices)
- Source ID: `site-docs-root`
- Final score: 57
- Re-rank relevance: N/A

Evidence snippets:
- Data stores: generative AI enabled Performance depends on the size of the data store, the language model in use, and the length of the prompt output and input, in that order.
- Generators Performance depends on the language model in use, the complexity of the prompt input and output length, and the number of generators in the turn.
- Playbooks execution Performance depends on the complexity of the playbook, the number of prompts, and the execution time of any tools called.
- Generative fallback Performance depends on the language in use and the prompt output and input length, in that order.

