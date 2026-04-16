---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.852Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Gemini search summaries"
feature_slug: "gemini-search-summaries"
latest_feature_date: "2024-05-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/detection/answer-threat-intelligence-questions-gemini"
  - "https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent"
keywords:
  - "gemini"
  - "search"
  - "summaries"
  - "can"
  - "automatically"
  - "summarize"
  - "results"
  - "answer"
---

# Gemini search summaries

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

Gemini can automatically summarize search results and answer follow-up questions about those summaries.

## Extended Definition

Gemini can automatically summarize search results and answer follow-up questions about those summaries.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/detection/answer-threat-intelligence-questions-gemini](https://docs.cloud.google.com/chronicle/docs/detection/answer-threat-intelligence-questions-gemini)
- [https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent](https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-docs-reference-2`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- When you run a query, the search editor panel automatically collapses to provide more space for the results.
- For example, if you have a database called suspicious with a column of IP addresses you know are problematic, you can reference that database in Search instead of manually entering individual IP addresses in Search: events: $e.principal.ip in %susupicious.ip You can narrow your results by searching for specific metadata in addition to IP addresses, for example you might be specifically concerned with changes to user resources: events: $e.metadata.event type = "USER RESOURCE UPDATE CONTENT" $e.principal.ip in %susupicious.ip You can narrow a search against interrelated UDM fields and match against multiple data table columns.
- Click an entity to display the Entity context dialog, which can include the following items: Asset name First time seen Last time seen IP addresses MAC addresses Number of alerts Highest alert count by rule Alerts-over-time bar graph Open Alerts & IOCs link View in Alerts Tab link Use the Pivot Table to analyze events The Pivot Table lets you analyze events using expressions and functions against the results from the search.
- Use a block comment: additional.fields["pod name"] = "kube-scheduler" / Block comments can span multiple lines. / AND additional.fields["pod name1"] = "kube-scheduler1" Use a single-line comment: additional.fields["pod name"] != "" // my single-line comment Search settings You can set the maximum number of search results in UDM search settings .

### "Answer Threat Intelligence questions with Gemini \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/answer-threat-intelligence-questions-gemini](https://docs.cloud.google.com/chronicle/docs/detection/answer-threat-intelligence-questions-gemini)
- Source ID: `site-docs-reference`
- Final score: 125
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can ask Gemini questions about MITRE tactics, techniques, and procedures (TTPs), and receive contextually relevant answers that include the following MITRE details: Tactic Technique Sub-technique Detection suggestions Procedures Mitigations Gemini returns a link to the curated detections Google SecOps makes available for each TTP.
- Answer Threat Intelligence questions with Gemini Supported in: Google secops SIEM Gemini can answer questions related to threat intelligence about topics such as threat actors, their associations, and their behavior patterns, including questions about MITRE TTPs .
- Investigate further by asking Gemini to create queries to look for specific indicators of compromise (IOCs) referenced in the threat intelligence reports.
- Note: If Gemini responds to a prompt with text written by someone else, the original source is cited in the Referenced Sources section of the Gemini pane.

### "Use Triage and Investigation Agent to investigate alerts \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent](https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent)
- Source ID: `site-docs-reference-2`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- Review an investigation Each investigation opens in a detailed view that summarizes Gemini's analysis, its reasoning, and the supporting data it used.
- This view has the following components: Summary Investigation timeline View an alert or re-run an investigation Suggested next steps Feedback Summary At the top of the panel, the Summary by Gemini section provides a brief description of the alert and the investigation's findings.
- Performs deep-dive research : Iteratively generates new plans and executes specialized tools, such as GTI enrichment, ECG analysis, advanced command-line analysis, or targeted searches to uncover hidden threats.
- Investigation tools The agent uses the following built-in tools to complete its analysis: Dynamic search queries: Runs and refines searches in SecOps to collect additional context for the alert.

