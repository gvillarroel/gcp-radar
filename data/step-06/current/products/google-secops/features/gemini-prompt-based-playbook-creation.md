---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.838Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Gemini prompt-based playbook creation"
feature_slug: "gemini-prompt-based-playbook-creation"
latest_feature_date: "2024-07-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security"
  - "https://docs.cloud.google.com/chronicle/docs/soar/respond/working-with-playbooks/whats-on-the-playbooks-screen"
  - "https://docs.cloud.google.com/chronicle/docs/detection/generate-yara-l-with-gemini"
keywords:
  - "gemini"
  - "prompt"
  - "based"
  - "playbook"
  - "creation"
  - "now"
  - "supports"
  - "creating"
---

# Gemini prompt-based playbook creation

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

Gemini now supports creating new playbooks from prompts.

## Extended Definition

Gemini now supports creating new playbooks from prompts.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security)
- [https://docs.cloud.google.com/chronicle/docs/soar/respond/working-with-playbooks/whats-on-the-playbooks-screen](https://docs.cloud.google.com/chronicle/docs/soar/respond/working-with-playbooks/whats-on-the-playbooks-screen)
- [https://docs.cloud.google.com/chronicle/docs/detection/generate-yara-l-with-gemini](https://docs.cloud.google.com/chronicle/docs/detection/generate-yara-l-with-gemini)

## Supporting Pages

### "Google Unified Security \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security)
- Source ID: `site-docs-reference-2`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- Model Armor is model-agnostic and supports a broad range of models across various clouds, including Google's models (like Gemini), open-source models (like Llama), and third-party proprietary models (like OpenAI and Anthropic Claude).
- Real-time insights from Gemini AI enhances threat detection and streamlines security operations, empowering organizations to shift from reactive to preemptive security and stay two steps ahead of increasingly sophisticated attackers The key components of Google Unified Security are: Modern Security Operations : Detect, investigate, and respond to threats at Google speed and scale Threat intelligence and exposure management : Know who is targeting you and where you are exposed.
- Enable Secure AI Adoption from Creation to Consumption Google Cloud's AI Protection is a comprehensive set of capabilities integrated directly into Security Command Center Enterprise (SCC-E), designed to help you proactively manage the unique risks associated across the AI lifecycle.
- Automated response :Leveraging native playbook orchestration capabilities, security teams can also automate response actions on Chrome Enterprise, such as blocking malicious URLs, blocking extensions, and even quarantining devices, directly from the Google SecOps platform.

### "Explore the Playbooks page \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/respond/working-with-playbooks/whats-on-the-playbooks-screen](https://docs.cloud.google.com/chronicle/docs/soar/respond/working-with-playbooks/whats-on-the-playbooks-screen)
- Source ID: `site-docs-reference-2`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- Filter : Click filter alt Filter and filter the display based on the following criteria: Playbook simulator is on toggle Show Active Playbooks toggle Priority : Set the attachment order of playbooks for the alert.
- This method gives the playbook the ability to make decisions based on the outcomes of previous actions and branch into different paths to reach a final resolution.
- Concise summary, detailing the playbook's name, creator, creation timestamp, and associated environment, along with a brief description.
- Only one playbook attaches automatically, based on priority.

### "Generate a YARA-L 2.0 rule using Gemini \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/generate-yara-l-with-gemini](https://docs.cloud.google.com/chronicle/docs/detection/generate-yara-l-with-gemini)
- Source ID: `site-docs-root`
- Final score: 96
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, using the previous rule prompt, Gemini could generate the following rule: rule gemini rule { meta: author = "Gemini in Google SecOps" description = "Prompt: Create a rule to count how many DNS responses were truncated per principal asset host." events: $e.metadata.event type = "NETWORK DNS" $e.network.dns.response = true $e.network.dns.truncated = true $ph principal asset hostname = $e.principal.asset.hostname match: $ph principal asset hostname over 1h outcome: $event count = count($e.metadata.id) condition: $e } To activate the rule, click Save New Rule .
- Generate a YARA-L 2.0 rule using Gemini Supported in: Google secops SIEM On the Gemini pane, use a natural language prompt to generate a rule (for example, Create a rule to count how many DNS responses were truncated per principal asset host. ), and then click Enter .
- Home Documentation Security Google Security Operations Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Gemini maintains all user conversation histories privately and adheres to Google Cloud's responsible AI practices .

