---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.181Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Looker drill fields in Looker Studio"
feature_slug: "looker-drill-fields-in-looker-studio"
latest_feature_date: "2024-05-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/integrate/linking-api"
  - "https://developers.google.com/looker-studio/connector/calculated-fields"
  - "https://docs.cloud.google.com/iam/docs/roles-permissions/actions"
keywords:
  - "looker"
  - "drill"
  - "fields"
  - "studio"
  - "links"
  - "defined"
  - "lookml"
  - "available"
---

# Looker drill fields in Looker Studio

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

Looker drill fields and links defined in LookML are available to report viewers in the Drill Actions menu on table charts.

## Extended Definition

Looker drill fields and links defined in LookML are available to report viewers in the Drill Actions menu on table charts.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)
- [https://developers.google.com/looker-studio/connector/calculated-fields](https://developers.google.com/looker-studio/connector/calculated-fields)
- [https://docs.cloud.google.com/iam/docs/roles-permissions/actions](https://docs.cloud.google.com/iam/docs/roles-permissions/actions)

## Supporting Pages

### Linking API \_|\_ Integrate and share \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)
- Source ID: `site-api-reference`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- Examples A TABLE type configuration where the query is defined with a Table ID: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = bigquery - public - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = shakespeare & ds . ds0 . billingProjectId = myProject A TABLE type configuration to query a date sharded table using the wildcard character suffix: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = price - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = stock A TABLE type configuration to query a date sharded table using the YYYYMMDD suffix: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = price - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = stock YYYYMMDD A TABLE type configuration to query a BigQuery Export for Google Analytics table, using the SESSION fields template: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = my - gabq - project & ds . ds0 . datasetId = 1234567 & ds . ds0 . tableId = ga sessions YYYYMMDD & ds . ds0 . gaTemplateLevel = SESSION A TABLE type configuration to query an ingestion time partitioned table and use the partitioning column as a date range dimension: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = acme - co - logs & ds . ds0 . datasetId = logs & ds . ds0 . tableId = logs table & ds . ds0 . isPartitioned = true A CUSTOM QUERY type configuration where they query is defined with a SQL statement: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = CUSTOM QUERY & ds . ds0 . projectId = bigquery - public - data & ds . ds0 . sql = SELECT % 20 word % 2 C % 20 word count % 20 FROM % 20 % 60 bigquery - public - data . samples . shakespeare % 60 & ds . ds0 . billingProjectId = myProject A CUSTOM QUERY type configuration where only the SQL statement is updated and the template data source is used for the rest of the configuration: https://lookerstudio.google.com/reporting/create? c.reportId=123abc &ds.ds0.sql=SELECT%20corpus%20FROM%20%60bigquery-public-data.samples.shakespeare%60 A CUSTOM QUERY type configuration where the SQL statement of the template data source is updated using sqlReplace : https://lookerstudio.google.com/reporting/create? c.reportId=123abc &ds.ds0.sqlReplace=bigquery-public-data,new-project,samples,new-dataset The following shows a template query before and after sqlReplace is applied.
- Examples A Google Sheets configuration: https://lookerstudio.google.com/reporting/create? c.reportId=101112jkl &ds.ds3.connector=googleSheets &ds.ds3.spreadsheetId=1Qs8BdfxZXALh6vX4zrE7ZyGnR3h5k &ds.ds3.worksheetId=903806437 A Google Sheets configuration with the first row used as headers and hidden and filtered cells included: https://lookerstudio.google.com/reporting/create? c.reportId=101112jkl &ds.ds3.connector=googleSheets &ds.ds3.spreadsheetId=1Qs8BdfxZXALh6vX4zrE7ZyGnR3h5k &ds.ds3.worksheetId=903806437 &ds.ds3.hasHeader=true &ds.ds3.includeHiddenCells=true &ds.ds3.includeFilteredCells=true A Google Sheets configuration with a range (A1:D20): https://lookerstudio.google.com/reporting/create? c.reportId=101112jkl &ds.ds3.connector=googleSheets &ds.ds3.spreadsheetId=1Qs8BdfxZXALh6vX4zrE7ZyGnR3h5k &ds.ds3.worksheetId=903806437 &ds.ds3.range=A1%3AD20 Looker Parameter name Description ds. alias .connector link Optional.
- For example, if you have a template with three BigQuery data sources attached, and you want to replace the projectId and datasetId in each one, but preserve the tableId , you could write it as: https://lookerstudio.google.com/reporting/create? c.reportId=7890 &ds.ds1.projectId=client-project &ds.ds1.datasetId=client-dataset &ds.ds2.projectId=client-project &ds.ds2.datasetId=client-dataset &ds.ds3.projectId=client-project &ds.ds3.datasetId=client-dataset Or, with the ds. wildcard, you can use this equivalent url: https://lookerstudio.google.com/reporting/create? c.reportId=7890 &ds. .projectId=client-project &ds. .datasetId=client-dataset Parameters provided to the Linking API that don't use the ds. wildcard are given precedence over ones that are.
- The BigQuery data source configuration is replaced in its entirety, while the Google Analytics configuration updates a single parameter and relies on the ds1 template data source for any unspecified connector parameters: https : //lookerstudio.google.com/reporting/create? c . reportId = 7890 & r . reportName = MyNewReportWithMultipleDataSources & ds . ds0 . datasourceName = MyNewDataSource & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = bigquery - public - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = shakespeare & ds . ds1 . viewId = 92320289 Create vs Add It can sometimes be useful to have the same data source in multiple reports so updates to the data source affect all reports together.

### "Using calculated fields in schema \_|\_ Community Connectors \_|\_ Google\

- URL: [https://developers.google.com/looker-studio/connector/calculated-fields](https://developers.google.com/looker-studio/connector/calculated-fields)
- Source ID: `site-docs-reference`
- Final score: 61
- Re-rank relevance: N/A

Evidence snippets:
- Home Products Looker Studio Community Connectors Using calculated fields in schema Stay organized with collections Save and categorize content based on your preferences.
- Formula aggregation "SUM($cost) / SUM($units)" AUTO "$cost + $units" NONE Examples of calculated fields in schema function getSchema ( request ) { var cc = DataStudioApp . createCommunityConnector (); var fields = cc . getFields (); var types = cc .
- AUTO ); fields . newDimension () . setId ( 'feels like' ) . setName ( 'Feels Like' ) . setDescription ( 'What it feels like outside.' ) . setFormula ( 'CASE WHEN $t celsius < 0 THEN "Freezing" WHEN $t celsius > 40 THEN "Too warm" ELSE "Not bad" END' ) . setType ( types .
- AUTO ); fields . newMetric () . setId ( 'average temperature (Celsius)' ) . setName ( 'Average Temperature (Celsius)' ) . setDescription ( 'Temperature in Fahrenheit' ) . setFormula ( 'AVG($t celsius / 5 9 + 32)' ) . setType ( types .

### "Actions roles and permissions \_|\_ Identity and Access Management (IAM)\

- URL: [https://docs.cloud.google.com/iam/docs/roles-permissions/actions](https://docs.cloud.google.com/iam/docs/roles-permissions/actions)
- Source ID: `site-iam-reference`
- Final score: 60
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

