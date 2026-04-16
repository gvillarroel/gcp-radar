---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.775Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Playbook Loops"
feature_slug: "playbook-loops"
latest_feature_date: "2025-07-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/respond/working-with-playbooks/whats-on-the-playbooks-screen"
  - "https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview"
  - "https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-alerts/whats-on-the-alert-overview-tab"
keywords:
  - "playbook"
  - "loops"
  - "playbooks"
  - "can"
  - "iterate"
  - "over"
  - "lists"
  - "entities"
---

# Playbook Loops

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

Playbooks can iterate over lists or entities and run actions for each item, including inside playbook blocks.

## Extended Definition

Playbooks can iterate over lists or entities and run actions for each item, including inside playbook blocks.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/respond/working-with-playbooks/whats-on-the-playbooks-screen](https://docs.cloud.google.com/chronicle/docs/soar/respond/working-with-playbooks/whats-on-the-playbooks-screen)
- [https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview](https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview)
- [https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-alerts/whats-on-the-alert-overview-tab](https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-alerts/whats-on-the-alert-overview-tab)

## Supporting Pages

### "Explore the Playbooks page \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/respond/working-with-playbooks/whats-on-the-playbooks-screen](https://docs.cloud.google.com/chronicle/docs/soar/respond/working-with-playbooks/whats-on-the-playbooks-screen)
- Source ID: `site-docs-reference-2`
- Final score: 149
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information about the Playbooks page and how to collaborate with it, see the following: Define custom alert views from Playbook Designer Work with the Playbook Simulator Understand playbook monitoring Use the Playbook Navigator Playbook icons legend The following icons appear on the Cases > Playbooks tab when a playbook is attached.
- Menu : Click edit Edit and select the required playbooks or blocks before using Menu to perform bulk actions: New Folder : Add a new playbooks folder; the playbook automatically inherits any changes made to its associated environment groups.
- Filter : Click filter alt Filter and filter the display based on the following criteria: Playbook simulator is on toggle Show Active Playbooks toggle Priority : Set the attachment order of playbooks for the alert.
- Explore the Playbooks page Supported in: Google secops SOAR A playbook is built on triggers, actions, and flows, working together to automate incident response and other security operations tasks.

### Cases overview \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview](https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview)
- Source ID: `site-docs-reference-2`
- Final score: 125
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Playbook automation Playbooks are predefined sets of actions that collect information from internal and external alert sources.
- Alert Overview tab: Lists all alerts linked to the case, including associated events and metadata.
- The case queue—automatically refreshed every minute—lists all active cases and lets you manually refresh, sort, filter, add, or close cases as needed.
- During this analysis, key indicators—such as source and destination IPs, file hashes, or user accounts—are extracted and represented as entities.

### "Explore the alert overview tab \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-alerts/whats-on-the-alert-overview-tab](https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-alerts/whats-on-the-alert-overview-tab)
- Source ID: `site-docs-reference-2`
- Final score: 111
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The display you see in the Alert Overview tab depends on a variety of factors: If no playbook is attached to the alert, the default display is defined by the administrator in SOAR Settings .
- If several playbooks are attached to an alert, and have customized views, you can select a different view from the Alert View menu.
- Explore the alert overview tab Supported in: Google secops SOAR This document serves as a reference for the Alert Overview tab, the central interface for triaging alerts within a case.
- Key value : View and display specific details from various sources; for example, Key-Product Value- [Alert.Product] Entities Graph : View a visual graph and other case entity details.

