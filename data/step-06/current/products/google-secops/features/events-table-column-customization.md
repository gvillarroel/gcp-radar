---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.743Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Events table column customization"
feature_slug: "events-table-column-customization"
latest_feature_date: "2025-09-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/arcsight"
keywords:
  - "events"
  - "table"
  - "column"
  - "customization"
  - "search"
  - "feature"
  - "lets"
  - "you"
---

# Events table column customization

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

A Search feature that lets you choose which columns appear in the Events table and dashboard widget tables.

## Extended Definition

A Search feature that lets you choose which columns appear in the Events table and dashboard widget tables.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact](https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/arcsight](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/arcsight)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-docs-reference-2`
- Final score: 211
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, if you have a database called suspicious with a column of IP addresses you know are problematic, you can reference that database in Search instead of manually entering individual IP addresses in Search: events: $e.principal.ip in %susupicious.ip You can narrow your results by searching for specific metadata in addition to IP addresses, for example you might be specifically concerned with changes to user resources: events: $e.metadata.event type = "USER RESOURCE UPDATE CONTENT" $e.principal.ip in %susupicious.ip You can narrow a search against interrelated UDM fields and match against multiple data table columns.
- Click an entity to display the Entity context dialog, which can include the following items: Asset name First time seen Last time seen IP addresses MAC addresses Number of alerts Highest alert count by rule Alerts-over-time bar graph Open Alerts & IOCs link View in Alerts Tab link Use the Pivot Table to analyze events The Pivot Table lets you analyze events using expressions and functions against the results from the search.
- It then matches those events against the hostnames column and the ip column in the badApps data table. events: $e.metadata.event type = "NETWORK CONNECTION" $e.security result.action = "ALLOW" $e.target.asset.asset id = $assetid // Event hostname matches at least one value in table column hostname. $e.target.hostname in %badApps.hostname // Event IP matches at least one value in table column ip. $e.target.ip in %badApps.ip For more information, see Use data tables .
- Search for events and alerts Supported in: Google secops SIEM The search function lets you find Unified Data Model (UDM) events and alerts in your Google Security Operations instance using YARA-L 2.0 syntax .

### "Impact of data RBAC on Google SecOps features \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact](https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact)
- Source ID: `site-docs-reference`
- Final score: 129
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Can view and use unscoped data table Yes Yes Can run search queries with unscoped data tables Yes Yes Can run search queries with scoped data tables Yes Yes (if there's at least one matching scope between the user and the data table) For example, a user with scope A can run search queries with data tables with scopes A, B, and C, but not with data tables with scopes B and C.
- Access control : While feature RBAC determines who can create or edit a dashboard, data RBAC determines what specific data is visible within the charts and tables.
- Data tables Data tables are multicolumn data constructs that let you input your own data into Google SecOps.
- They can act as lookup tables with defined columns and the data stored in rows.

### "Integrate ArcSight with Google SecOps \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/arcsight](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/arcsight)
- Source ID: `site-api-reference`
- Final score: 119
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The search for events searches for a value (for example, abc) stored in the field specified (for example, in the field of name only).
- Google Security Operations uses the following main methods when using ArcSight ESM API: Core Service: Login , GetSession Manager Service: GetSecurityEvents Network access with ArcSight ESM To access from Google SecOps to ArcSight ESM, allow traffic over ports 443 (HTTPS) and 8443 (API over SSL), or as configured in your environment.
- Parameters Parameter name Type Default value Is mandatory Description Columns String N/A Yes Example: Message;Username Entries String N/A Yes Example: test1 Me1;Test Me2 Active List UUID String N/A Yes Example: HCN75QGABABCZXCOdT9P51w== Run on This action runs on all entities.
- Action results Script result Script result name Value options Example is succeed True or False is succeed:False Search Description You can start a search at the ArcSight Command Center from the console event channel.

