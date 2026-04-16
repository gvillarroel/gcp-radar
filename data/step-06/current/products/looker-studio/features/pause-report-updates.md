---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.228Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Pause report updates"
feature_slug: "pause-report-updates"
latest_feature_date: "2023-05-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/integrate/linking-api"
  - "https://developers.google.com/looker-studio/connector/report-templates"
  - "https://developers.google.com/looker-studio/integrate"
keywords:
  - "pause"
  - "report"
  - "updates"
  - "users"
  - "can"
  - "while"
  - "editing"
  - "reduce"
---

# Pause report updates

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

Users can pause report updates while editing to reduce data requests and defer data-setting changes until updates resume.

## Extended Definition

Users can pause report updates while editing to reduce data requests and defer data-setting changes until updates resume.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)
- [https://developers.google.com/looker-studio/connector/report-templates](https://developers.google.com/looker-studio/connector/report-templates)
- [https://developers.google.com/looker-studio/integrate](https://developers.google.com/looker-studio/integrate)

## Supporting Pages

### Providing report templates \_|\_ Community Connectors \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/connector/report-templates](https://developers.google.com/looker-studio/connector/report-templates)
- Source ID: `site-docs-reference`
- Final score: 83
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Page Summary outlined flag Report templates offer users pre-built reports to quickly understand a connector's capabilities and data source.
- Report templates can help users to quickly understand the capabilities of your connector if they are unfamiliar with the data source..
- It also gives the users a foundation to build on rather than starting from a blank report.
- Give the report a name that will be useful for users.

### Linking API \_|\_ Integrate and share \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)
- Source ID: `site-api-reference`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- The BigQuery data source configuration is replaced in its entirety, while the Google Analytics configuration updates a single parameter and relies on the ds1 template data source for any unspecified connector parameters: https : //lookerstudio.google.com/reporting/create? c . reportId = 7890 & r . reportName = MyNewReportWithMultipleDataSources & ds . ds0 . datasourceName = MyNewDataSource & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = bigquery - public - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = shakespeare & ds . ds1 . viewId = 92320289 Create vs Add It can sometimes be useful to have the same data source in multiple reports so updates to the data source affect all reports together.
- The URL above can be simplified to the following: https : //lookerstudio.google.com/reporting/create? c . reportId = 12345 & r . reportName = MyNewReport & ds . datasourceName = MyNewDataSource & ds . connector = bigQuery & ds . type = TABLE & ds . projectId = bigquery - public - data & ds . datasetId = samples & ds . tableId = shakespeare Configures a report with a single BigQuery data source ( ds0 ) and updates only the billing project ID of the data source: https://lookerstudio.google.com/reporting/create? c.reportId=12345 &r.reportName=MyNewReport &ds.ds0.billingProjectId=my-billing-project Configures a report with two data sources, a BigQuery data source ( ds0 ) and a Google Analytics data source ( ds1 ).
- Example A Search Console configuration for a URL-prefix property : https://lookerstudio.google.com/reporting/create? c.reportId=161718pqr &ds.ds5.connector=searchConsole &ds.ds5.siteUrl=https%3A%2F%2Fwww.example.com%2Fwelcome &ds.ds5.tableType=SITE IMPRESSION &ds.ds5.searchType=WEB A Search Console configuration for a Domain property : https://lookerstudio.google.com/reporting/create? c.reportId=161718pqr ds.ds5.connector=searchConsole &ds.ds5.siteUrl=sc-domain%3Aexample.com &ds.ds5.tableType=SITE IMPRESSION &ds.ds5.searchType=WEB Template permissions To ensure the best user experience for users, it's important to correctly set report access permissions for your template report and associated data sources.
- Depending on the type of data sources used in the report and the configuration provided via the Linking API, users may also require view access to data sources.

### "Publish a connector, visualization or report \_|\_ Integrate and share \_\

- URL: [https://developers.google.com/looker-studio/integrate](https://developers.google.com/looker-studio/integrate)
- Source ID: `site-api-reference`
- Final score: 67
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Looker Studio connector gallery Publish a visualization Publish your visualization to the Looker Studio visualization gallery and enable Looker Studio users to easily explore new ways to visualize their data.
- The Looker Studio report gallery Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The Looker Studio visualization gallery Publish a report template Publish a report template in the Looker Studio report gallery to showcase and contribute your skills to the Looker Studio community.
- Home Products Looker Studio Integrate Publish a connector, visualization or report Stay organized with collections Save and categorize content based on your preferences.

