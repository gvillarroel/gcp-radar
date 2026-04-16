---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.810Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Case SLA pause and resume"
feature_slug: "case-sla-pause-and-resume"
latest_feature_date: "2025-03-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview"
  - "https://docs.cloud.google.com/chronicle/docs/secops/understand-the-secops-platform"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
keywords:
  - "case"
  - "sla"
  - "pause"
  - "resume"
  - "users"
  - "can"
  - "timers"
  - "cases"
---

# Case SLA pause and resume

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

Users can pause and resume SLA timers on cases.

## Extended Definition

Users can pause and resume SLA timers on cases.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview](https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview)
- [https://docs.cloud.google.com/chronicle/docs/secops/understand-the-secops-platform](https://docs.cloud.google.com/chronicle/docs/secops/understand-the-secops-platform)
- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)

## Supporting Pages

### Cases overview \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview](https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview)
- Source ID: `site-docs-reference-2`
- Final score: 138
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The case queue—automatically refreshed every minute—lists all active cases and lets you manually refresh, sort, filter, add, or close cases as needed.
- They collect enrichment data, analyst comments, and historical context, letting analysts track entity behavior over time and across cases.
- Analysts can also: Automatically group additional alerts into existing cases based on shared entities and configurable rules.
- Case creation and grouping The Cases page is where analysts can investigate incoming alerts and manage incident workflows.

### "Understand the Google SecOps platform \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/understand-the-secops-platform](https://docs.cloud.google.com/chronicle/docs/secops/understand-the-secops-platform)
- Source ID: `site-docs-reference`
- Final score: 76
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Alerts ingested from both the inbuilt SIEM and third party SIEMS can be grouped into Cases and looked at as part of the Case Management features.
- From this screen, you can search for both open or closed cases or search for entities that were involved in cases.
- For more information, see SIEM Search The SOAR Search screen focuses on two main areas: cases and entities.
- The SOAR Dashboards display information on cases, playbooks, and SOC analyst data.

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-docs-reference-2`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- When searching Values , UDM Lookup displays Possible value match when a match is found in the following cases: Matches in the following UDM fields: metadata.description security result.description security result.detection fields.value security result.summary network.http.user agent Matches in fields with a full path that ends in one of the following values: .command line For example principal.process.command line . .file.full path For example principal.process.file.full path . .labels.value For example src.labels.value . .registry.registry key For example principal.registry.registry key . .url For example principal.url .
- When searching Values , UDM Lookup does not return matches in the following cases: Matches in the following UDM fields: metadata.product log id network.session id security result.rule id network.parent session id Matches in UDM fields with a full path that ends in one of the following values: .pid For example target.process.pid . .asset id For example principal.asset id . .product specific process id For example principal.process.product specific process id . .resource.id For example principal.resource.id .
- In such cases, the system retrieves only the latest results, up to the search limit of 1M events and 1,000 alerts.
- Search for events that use multiple keys with the same name, using a regular expression: additional.fields.key = /myKeynumber / Use regular expressions and the nocase operator: additional.fields["pod name"] = /br/ additional.fields["pod name"] = bar nocase Use block and single-line comments.

