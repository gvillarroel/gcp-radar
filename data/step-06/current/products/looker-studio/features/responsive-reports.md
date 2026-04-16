---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.158Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Responsive reports"
feature_slug: "responsive-reports"
latest_feature_date: "2025-03-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/integrate/linking-api"
  - "https://developers.google.com/looker-studio/connector/data-source-parameters"
  - "https://docs.cloud.google.com/iam/docs/roles-permissions/androidmanagement"
keywords:
  - "responsive"
  - "reports"
  - "scale"
  - "across"
  - "different"
  - "screen"
  - "sizes"
  - "viewing"
---

# Responsive reports

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

Responsive reports scale across different screen sizes for viewing on desktop, tablet, and mobile devices.

## Extended Definition

Responsive reports scale across different screen sizes for viewing on desktop, tablet, and mobile devices.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)
- [https://developers.google.com/looker-studio/connector/data-source-parameters](https://developers.google.com/looker-studio/connector/data-source-parameters)
- [https://docs.cloud.google.com/iam/docs/roles-permissions/androidmanagement](https://docs.cloud.google.com/iam/docs/roles-permissions/androidmanagement)

## Supporting Pages

### Linking API \_|\_ Integrate and share \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)
- Source ID: `site-api-reference`
- Final score: 53
- Re-rank relevance: N/A

Evidence snippets:
- The BigQuery data source configuration is replaced in its entirety, while the Google Analytics configuration updates a single parameter and relies on the ds1 template data source for any unspecified connector parameters: https : //lookerstudio.google.com/reporting/create? c . reportId = 7890 & r . reportName = MyNewReportWithMultipleDataSources & ds . ds0 . datasourceName = MyNewDataSource & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = bigquery - public - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = shakespeare & ds . ds1 . viewId = 92320289 Create vs Add It can sometimes be useful to have the same data source in multiple reports so updates to the data source affect all reports together.
- Set to true to use the data source configuration specified via the Linking API to refresh data source fields and update report components with new field selections. true is typically specified when switching the connector type or for connector types where a configuration change yields different fields (e.g. fields for BigQuery data sources often change with different table configurations).
- Considerations when using refreshFields : If refreshFields is set to false and the data source configuration specified via the Linking API yields different fields from what's used in the template report, the user will likely see a configuration error for the affected components.
- Page Summary outlined flag The Looker Studio Linking API enables the creation of dynamic URLs that link to pre-configured reports, streamlining user access and data interaction.

### "Android Management roles and permissions \_|\_ Identity and Access Management\

- URL: [https://docs.cloud.google.com/iam/docs/roles-permissions/androidmanagement](https://docs.cloud.google.com/iam/docs/roles-permissions/androidmanagement)
- Source ID: `site-iam-reference`
- Final score: 46
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### "Overridable config parameters \_|\_ Community Connectors \_|\_ Google for\

- URL: [https://developers.google.com/looker-studio/connector/data-source-parameters](https://developers.google.com/looker-studio/connector/data-source-parameters)
- Source ID: `site-docs-reference`
- Final score: 45
- Re-rank relevance: N/A

Evidence snippets:
- When to avoid defining a parameter as overridable It is recommended to learn how Connectors, Data Sources, and Reports work in relation to each other by reviewing How Looker Studio connects to your data .
- It also illustrates setting parameter values for the different input types. ds0.includeToday is a checkbox input ds0.units is a single select input ds1.countries is a multi-select input ds1.labelName is a text input. { "ds0.includeToday" : true , "ds0.units" : "Metric" , "ds1.countries" : [ "Canada" , "Mexico" ], "ds1.labelName" : "Population" } Parameter inheritance The value used for a parameter follows an order of precedence based on where the parameter is set.
- If a user changes a parameter value and the schema of the new data returned is different than defined in the data source, any report dependent on the data source could break because of missing fields.
- If the data source owner has allowed zipcode to be modified in reports (figure 2) then report editors will only be capable of allowing zipcode to be modified by report viewers .

