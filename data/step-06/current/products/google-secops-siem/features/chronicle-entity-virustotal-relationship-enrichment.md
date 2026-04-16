---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.657Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Chronicle entity VirusTotal relationship enrichment"
feature_slug: "chronicle-entity-virustotal-relationship-enrichment"
latest_feature_date: "2023-04-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/detection/detection-delays"
keywords:
  - "chronicle"
  - "entity"
  - "virustotal"
  - "relationship"
  - "enrichment"
  - "now"
  - "enriches"
  - "entities"
---

# Chronicle entity VirusTotal relationship enrichment

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Chronicle now enriches entities with VirusTotal relationship data for additional investigative context.

## Extended Definition

Chronicle now enriches entities with VirusTotal relationship data for additional investigative context.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines](https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines)
- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/detection/detection-delays](https://docs.cloud.google.com/chronicle/docs/detection/detection-delays)

## Supporting Pages

### "Response integrations community contribution guidelines \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines](https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines)
- Source ID: `site-docs-reference-required-1`
- Final score: 124
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Some examples of output messages: Successfully enriched the following entities using information from VirusTotal: {entity.identifier} Action wasn't able to find any information for the following entities using VirusTotal: {entity.identifier} None of the provided entities were found in VirusTotal.
- Action outputs (entity enrichment) If actions are executing on entities, then during the action execution you can append additional metadata to them.
- For example, the following JSON object represents a poor structure as it would be unusable inside playbooks: { "10.10.10.10": { "is malicious": "false" } } Instead, format it like this: [ { "is malicious": "false", "ip": "10.10.10.10" } ] If you're using entities inside the action and return results Per Entity, then the best practice is to structure the JSON Result like this: [ { "Entity": "10.10.10.10", "EntityResult": { "is malicious": "false", } } ] Always consider how the output of the action can be used inside automation.
- If some entities were successfully enriched but others were not, then the best practice is to provide status information for each provided entity in the message.

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- Click an entity to display the Entity context dialog, which can include the following items: Asset name First time seen Last time seen IP addresses MAC addresses Number of alerts Highest alert count by rule Alerts-over-time bar graph Open Alerts & IOCs link View in Alerts Tab link Use the Pivot Table to analyze events The Pivot Table lets you analyze events using expressions and functions against the results from the search.
- To share column sets, you must have the following permissions: chronicle.googleapis.com/savedColumnSets.create chronicle.googleapis.com/savedColumnSets.delete chronicle.googleapis.com/savedColumnSets.update chronicle.googleapis.com/savedColumnSets.list chronicle.googleapis.com/savedColumnSets.get In the Column Manager, add or remove the columns to create your customized view.
- The Event Viewer includes these tabs: Event Fields Raw Log Alerts Entities Event Fields tab Note: This feature is covered by Pre-GA Offerings Terms of the Google Security Operations Service Specific Terms.
- This feature is designed for teams that require external analysis processing or audit trails where you must preserve the relationship between normalized data and original ingestion.

### "Understand rule detection delays \_|\_ Google Security Operations \_|\_\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/detection-delays](https://docs.cloud.google.com/chronicle/docs/detection/detection-delays)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- Enrichment system updates: If the enrichment system updates entity or process metadata, IP geolocation, or VirusTotal indicators, the rules engine re-evaluates these blocks 24 to 48 hours later to capture those updates.
- Google SecOps supports aliasing and enrichment for several entity types, including: assets (for example, hostnames, IP addresses, MACs), users, processes, file hash metadata, geographic locations, and cloud resources.
- Context-aware rules are rules that rely on enrichment sources such as asset and identity aliasing, or the entity context graph .
- Re-enrichment of UDM events For details, see Re-enrichment of UDM events and Entity context graph processing .

