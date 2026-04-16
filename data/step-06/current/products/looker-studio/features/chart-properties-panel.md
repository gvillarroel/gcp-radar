---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.155Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Chart Properties panel"
feature_slug: "chart-properties-panel"
latest_feature_date: "2025-05-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/integrate/linking-api"
  - "https://developers.google.com/looker-studio/visualization/define-config"
  - "https://developers.google.com/looker-studio/connector/data-source-parameters"
keywords:
  - "chart"
  - "properties"
  - "panel"
  - "setup"
  - "style"
  - "tabs"
  - "have"
  - "been"
---

# Chart Properties panel

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

The chart Properties panel Setup and Style tabs have been reorganized for a more user-friendly chart configuration flow.

## Extended Definition

The chart Properties panel Setup and Style tabs have been reorganized for a more user-friendly chart configuration flow.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)
- [https://developers.google.com/looker-studio/visualization/define-config](https://developers.google.com/looker-studio/visualization/define-config)
- [https://developers.google.com/looker-studio/connector/data-source-parameters](https://developers.google.com/looker-studio/connector/data-source-parameters)

## Supporting Pages

### Linking API \_|\_ Integrate and share \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)
- Source ID: `site-api-reference`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- For example, if you have a template with three BigQuery data sources attached, and you want to replace the projectId and datasetId in each one, but preserve the tableId , you could write it as: https://lookerstudio.google.com/reporting/create? c.reportId=7890 &ds.ds1.projectId=client-project &ds.ds1.datasetId=client-dataset &ds.ds2.projectId=client-project &ds.ds2.datasetId=client-dataset &ds.ds3.projectId=client-project &ds.ds3.datasetId=client-dataset Or, with the ds. wildcard, you can use this equivalent url: https://lookerstudio.google.com/reporting/create? c.reportId=7890 &ds. .projectId=client-project &ds. .datasetId=client-dataset Parameters provided to the Linking API that don't use the ds. wildcard are given precedence over ones that are.
- The BigQuery data source configuration is replaced in its entirety, while the Google Analytics configuration updates a single parameter and relies on the ds1 template data source for any unspecified connector parameters: https : //lookerstudio.google.com/reporting/create? c . reportId = 7890 & r . reportName = MyNewReportWithMultipleDataSources & ds . ds0 . datasourceName = MyNewDataSource & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = bigquery - public - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = shakespeare & ds . ds1 . viewId = 92320289 Create vs Add It can sometimes be useful to have the same data source in multiple reports so updates to the data source affect all reports together.
- Example https : //lookerstudio.google.com/reporting/create? c . reportId = 12345 & c . pageId = g7u8s9 & c . mode = edit & r . reportName = MyNewReport & ds . ds0 . datasourceName = MyNewDataSource & ds . ds0 . connector = bigQuery & ds . ds0 . projectId = project - 1234 & ds . ds0 . type = TABLE & ds . ds0 . datasetId = 456 & ds . ds0 . tableId = 789 Report parameters Report parameters override report properties.
- If the Linking API is used to provide a new data source configuration that yields the exact same fields, there are two outcomes based on the value of the refreshFields parameter: If set to true , the field configuration from the template data source will not carry-over, and charts may potentially fail to load if they depend on the same field configuration (i.e. a field of type Year is expected).

### "Defining the visualization config \_|\_ Community Visualizations \_|\_ Google\

- URL: [https://developers.google.com/looker-studio/visualization/define-config](https://developers.google.com/looker-studio/visualization/define-config)
- Source ID: `site-docs-reference-2`
- Final score: 70
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Sample data section: { "id" : "dimensionSection1" , "label" : "Dimension Section Heading" , "elements" : [ // array of data elements ] } This screenshot shows how Looker Studio renders the data section and data element above: Style configuration The style configuration defines the style selectors that are rendered in the property panel.
- A sample style section: { "id" : "styleGroup1" , "label" : "Header for style group" , "elements" : [ // insert Style Elements here ] } The following screenshot shows an example of a style panel with an opacity selector, with the tooltip "Link Opacity" corresponding to the label in the style element.
- Style configuration determines the appearance of the visualization by defining customizable style selectors within the property panel, offering flexibility in visual representation.
- The style configuration defines the style selectors available in the property panel.

### "Overridable config parameters \_|\_ Community Connectors \_|\_ Google for\

- URL: [https://developers.google.com/looker-studio/connector/data-source-parameters](https://developers.google.com/looker-studio/connector/data-source-parameters)
- Source ID: `site-docs-reference`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- Modifying parameter values Report editors can modify parameter values using the report properties panel while report viewers can modify parameter values through the report URL.
- Parameter values are set via report properties panel or report URL, with URL parameters overriding report and default values, and report properties overriding defaults.
- This is configured during creation or editing of a data source and is applicable only to parameters that have been defined as overridable by the Connector developer .
- The order of precedence (from lowest to highest) is: Data source (default) Report URL Report properties panel, following the data source parameter inheritance rules.

