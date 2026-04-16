---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.166Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "External link redirect notice"
feature_slug: "external-link-redirect-notice"
latest_feature_date: "2024-12-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/integrate/linking-api"
  - "https://developers.google.com/looker-studio/connector/direct-links"
  - "https://developers.google.com/looker-studio/connector/error-handling"
keywords:
  - "external"
  - "link"
  - "redirect"
  - "notice"
  - "looker"
  - "studio"
  - "shows"
  - "when"
---

# External link redirect notice

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

Looker Studio shows a redirect notice when a user clicks an external link.

## Extended Definition

Looker Studio shows a redirect notice when a user clicks an external link.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)
- [https://developers.google.com/looker-studio/connector/direct-links](https://developers.google.com/looker-studio/connector/direct-links)
- [https://developers.google.com/looker-studio/connector/error-handling](https://developers.google.com/looker-studio/connector/error-handling)

## Supporting Pages

### Linking API \_|\_ Integrate and share \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)
- Source ID: `site-api-reference`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- URL parameters A Linking API URL must be of the following form: https://lookerstudio.google.com/reporting/create? parameters The URL is expected to be used in the context of a web browser, typically by a user clicking on a link or being redirected to the URL.
- Examples A TABLE type configuration where the query is defined with a Table ID: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = bigquery - public - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = shakespeare & ds . ds0 . billingProjectId = myProject A TABLE type configuration to query a date sharded table using the wildcard character suffix: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = price - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = stock A TABLE type configuration to query a date sharded table using the YYYYMMDD suffix: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = price - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = stock YYYYMMDD A TABLE type configuration to query a BigQuery Export for Google Analytics table, using the SESSION fields template: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = my - gabq - project & ds . ds0 . datasetId = 1234567 & ds . ds0 . tableId = ga sessions YYYYMMDD & ds . ds0 . gaTemplateLevel = SESSION A TABLE type configuration to query an ingestion time partitioned table and use the partitioning column as a date range dimension: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = acme - co - logs & ds . ds0 . datasetId = logs & ds . ds0 . tableId = logs table & ds . ds0 . isPartitioned = true A CUSTOM QUERY type configuration where they query is defined with a SQL statement: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = CUSTOM QUERY & ds . ds0 . projectId = bigquery - public - data & ds . ds0 . sql = SELECT % 20 word % 2 C % 20 word count % 20 FROM % 20 % 60 bigquery - public - data . samples . shakespeare % 60 & ds . ds0 . billingProjectId = myProject A CUSTOM QUERY type configuration where only the SQL statement is updated and the template data source is used for the rest of the configuration: https://lookerstudio.google.com/reporting/create? c.reportId=123abc &ds.ds0.sql=SELECT%20corpus%20FROM%20%60bigquery-public-data.samples.shakespeare%60 A CUSTOM QUERY type configuration where the SQL statement of the template data source is updated using sqlReplace : https://lookerstudio.google.com/reporting/create? c.reportId=123abc &ds.ds0.sqlReplace=bigquery-public-data,new-project,samples,new-dataset The following shows a template query before and after sqlReplace is applied.
- Examples A Google Sheets configuration: https://lookerstudio.google.com/reporting/create? c.reportId=101112jkl &ds.ds3.connector=googleSheets &ds.ds3.spreadsheetId=1Qs8BdfxZXALh6vX4zrE7ZyGnR3h5k &ds.ds3.worksheetId=903806437 A Google Sheets configuration with the first row used as headers and hidden and filtered cells included: https://lookerstudio.google.com/reporting/create? c.reportId=101112jkl &ds.ds3.connector=googleSheets &ds.ds3.spreadsheetId=1Qs8BdfxZXALh6vX4zrE7ZyGnR3h5k &ds.ds3.worksheetId=903806437 &ds.ds3.hasHeader=true &ds.ds3.includeHiddenCells=true &ds.ds3.includeFilteredCells=true A Google Sheets configuration with a range (A1:D20): https://lookerstudio.google.com/reporting/create? c.reportId=101112jkl &ds.ds3.connector=googleSheets &ds.ds3.spreadsheetId=1Qs8BdfxZXALh6vX4zrE7ZyGnR3h5k &ds.ds3.worksheetId=903806437 &ds.ds3.range=A1%3AD20 Looker Parameter name Description ds. alias .connector link Optional.
- For example, if you have a template with three BigQuery data sources attached, and you want to replace the projectId and datasetId in each one, but preserve the tableId , you could write it as: https://lookerstudio.google.com/reporting/create? c.reportId=7890 &ds.ds1.projectId=client-project &ds.ds1.datasetId=client-dataset &ds.ds2.projectId=client-project &ds.ds2.datasetId=client-dataset &ds.ds3.projectId=client-project &ds.ds3.datasetId=client-dataset Or, with the ds. wildcard, you can use this equivalent url: https://lookerstudio.google.com/reporting/create? c.reportId=7890 &ds. .projectId=client-project &ds. .datasetId=client-dataset Parameters provided to the Linking API that don't use the ds. wildcard are given precedence over ones that are.

### Direct Link \_|\_ Community Connectors \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/connector/direct-links](https://developers.google.com/looker-studio/connector/direct-links)
- Source ID: `site-docs-reference`
- Final score: 65
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When a user follows the link, it will take them directly to Looker Studio with your connector selected.
- This returns the following encoded URL, a pre-populated direct link for the connector: https://lookerstudio.google.com/datasources/create?connectorConfig=%7B%22tagged%22%3A%22looker-studio%22%2C%22pagesize%22%3A%2225%22%2C%22sort%22%3A%22activity%22%7D&reportTemplateId=1lR9CGfx3uyQp6oz7oAgA1rsqZViA-IQs&connectorId=AKfycbwGMj-oe532y-NEbMHo-KLUCEz0EEGOZj-3lhEgw7q65-hs-T F9B3Qjw Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Encoding Url // get a reference to the jsonConfig var jsonConfig ; var encoded = encodeURIComponent ( jsonConfig ); The result is the following encoded string: "%7B%22tagged%22%3A%22looker-studio%22%2C%22pagesize%22%3A%2225%22%2C%22sort%22%3A%22activity%22%7D" Step 3: Build the URL The following code builds the direct link.
- Alternatively, under Deployment ID click Copy and append the copied Deployment ID to the following URL to form a direct link: https://lookerstudio.google.com/datasources/create?connectorId= DEPLOYMENT ID The direct link can be shared with users.

### Error handling and messages for Community Connectors \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/connector/error-handling](https://developers.google.com/looker-studio/connector/error-handling)
- Source ID: `site-docs-reference`
- Final score: 55
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Types of errors The types and causes of errors that a user may encounter when using your connector typically fall into one of the following three categories: connector internal errors connector external errors Looker Studio errors Connector internal and external errors should be handled by the connector developer.
- Showing error messages Showing error details based on admin status When a connector throws an error, Looker Studio shows the error message depending on the user's admin status.
- Page Summary outlined flag Connectors can experience internal, external, or Looker Studio errors, with internal and external errors requiring developer attention.
- Home Products Looker Studio Community Connectors Error handling and messages for Community Connectors Stay organized with collections Save and categorize content based on your preferences.

