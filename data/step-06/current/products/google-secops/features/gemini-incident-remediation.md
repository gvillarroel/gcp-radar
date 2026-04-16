---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.849Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Gemini incident remediation"
feature_slug: "gemini-incident-remediation"
latest_feature_date: "2024-05-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent"
  - "https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
keywords:
  - "gemini"
  - "incident"
  - "remediation"
  - "can"
  - "suggest"
  - "follow"
  - "steps"
  - "based"
---

# Gemini incident remediation

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

Gemini can suggest follow-on remediation steps based on the event information it returns.

## Extended Definition

Gemini can suggest follow-on remediation steps based on the event information it returns.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent](https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent)
- [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security)
- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)

## Supporting Pages

### "Use Triage and Investigation Agent to investigate alerts \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent](https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent)
- Source ID: `site-docs-reference-2`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- This view has the following components: Summary Investigation timeline View an alert or re-run an investigation Suggested next steps Feedback Summary At the top of the panel, the Summary by Gemini section provides a brief description of the alert and the investigation's findings.
- Suggested next steps For all investigations, Gemini provides further investigation steps.
- Adaptive Investigation Based on the findings from the earlier investigation steps, the agent dynamically determines the next course of action: Evaluates findings : Assesses information gathered in previous steps to identify potential gaps or new avenues for inquiry.
- The summary provides the following information: Disposition: Indicates if Gemini determined the alert to be a true or false positive.

### "Google Unified Security \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security)
- Source ID: `site-docs-reference-2`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- Real-time insights from Gemini AI enhances threat detection and streamlines security operations, empowering organizations to shift from reactive to preemptive security and stay two steps ahead of increasingly sophisticated attackers The key components of Google Unified Security are: Modern Security Operations : Detect, investigate, and respond to threats at Google speed and scale Threat intelligence and exposure management : Know who is targeting you and where you are exposed.
- Onboarding and Activating Google Unified Security This portfolio brings together the following Google's leading security solutions: Security Command Center (SCCE) Google SecOps (SecOps Enterprise Plus) Google Threat Intelligence (Enterprise) Chrome Enterprise Browser (Premium) Mandiant Threat Defense Getting Started Embark on your journey to a more secure future with Google Unified Security.
- With the unified capabilities between Google SecOps and Security Command Center, SOC analysts and Cloud Security engineers have a single converged platform within which to view and respond to incidents and cases related to threats in their Google Cloud, Azure, and AWS platforms.
- Model Armor is model-agnostic and supports a broad range of models across various clouds, including Google's models (like Gemini), open-source models (like Llama), and third-party proprietary models (like OpenAI and Anthropic Claude).

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-docs-reference-2`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- Understand suggestion ranking The editor organizes suggestions into three distinct categories to help you find fields quickly: Recently used fields : The top seven suggestions are based on fields you have used recently that match your typed field.
- Format the data value to search for Format the data value using the following guidelines: Data type: Format the data value based it's the data type: Enumerated values: Use a valid enumerated value defined for the selected UDM field.
- Manage auto-suggestion settings To globally manage how suggestions are displayed, do the following: Click your profile avatar and select User Preferences from the list.
- How to investigate an alert To learn how to use Alert graph and Alert details to investigate an alert, follow the steps outlined in Investigate an alert .

