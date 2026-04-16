---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.623Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "UDM Search entity investigation"
feature_slug: "udm-search-entity-investigation"
latest_feature_date: "2024-01-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security"
  - "https://docs.cloud.google.com/chronicle/docs/detection/emerging-threats-detailed-view"
keywords:
  - "udm"
  - "search"
  - "entity"
  - "investigation"
  - "can"
  - "investigate"
  - "entities"
  - "such"
---

# UDM Search entity investigation

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

UDM Search can investigate entities such as IP addresses, users, and assets in addition to matching events and alerts.

## Extended Definition

UDM Search can investigate entities such as IP addresses, users, and assets in addition to matching events and alerts.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security)
- [https://docs.cloud.google.com/chronicle/docs/detection/emerging-threats-detailed-view](https://docs.cloud.google.com/chronicle/docs/detection/emerging-threats-detailed-view)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- Click an entity to display the Entity context dialog, which can include the following items: Asset name First time seen Last time seen IP addresses MAC addresses Number of alerts Highest alert count by rule Alerts-over-time bar graph Open Alerts & IOCs link View in Alerts Tab link Use the Pivot Table to analyze events The Pivot Table lets you analyze events using expressions and functions against the results from the search.
- Access search You can access Google SecOps search using the following options: On the navigation bar, click Investigation > Search .
- For ${vendor name} , you need to add a prompt for future users, such as Enter the name of the vendor for your search .
- In such cases, the system retrieves only the latest results, up to the search limit of 1M events and 1,000 alerts.

### "Google Unified Security \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security)
- Source ID: `site-api-reference`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Google SecOps provides Cloud Detection Investigation and Response (CDIR), Case Management, SIEM log searching and investigation, Cloud Asset Inventory collection for Entity Graph Enrichment, and the ability to automate common SOC workflows using the SOAR component of Google SecOps.
- SIEM Log Searching and Investigation : During a CDIR investigation, or on an ad-hoc basis, analysts can use either natural language syntax, Yara-L syntax, or raw log searching to surface information in various logs ingested into Google SecOps related to cloud infrastructure and services.
- See activate enterprise tier Validate Security Command Center Detection Services are enabled: See How to configure Security Command Center Connect Security Command Center to AWS to get configuration and resource data that flows through to the Entity Graph: See Connect Security Command Center to AWS Preview - Connect Security Command Center to Azure to get configuration and resource data that flows through to the Entity Graph. (Optional) Integrate Security Command Center with ticketing systems.
- Real-time insights from Gemini AI enhances threat detection and streamlines security operations, empowering organizations to shift from reactive to preemptive security and stay two steps ahead of increasingly sophisticated attackers The key components of Google Unified Security are: Modern Security Operations : Detect, investigate, and respond to threats at Google speed and scale Threat intelligence and exposure management : Know who is targeting you and where you are exposed.

### "Emerging Threats Center detail view \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/emerging-threats-detailed-view](https://docs.cloud.google.com/chronicle/docs/detection/emerging-threats-detailed-view)
- Source ID: `site-docs-root`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- For general information about reviewing entity attributes, alerts, and taking quick actions, see Use UDM Search to investigate an entity .
- The following table describes the columns in the Recent Associated Entities panel: Column name Description Entity name Displays the asset or entity associated with a campaign.
- Associations Displays related GTI entities for the indicator, such as threat actors or campaigns.
- Entity type Indicates the type of entity, such as asset or user account .

