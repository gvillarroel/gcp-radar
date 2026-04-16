---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.205Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Table drill actions and tooltips"
feature_slug: "table-drill-actions-and-tooltips"
latest_feature_date: "2023-10-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/integrate/linking-api"
  - "https://docs.cloud.google.com/iam/docs/roles-permissions/actions"
  - "https://developers.google.com/looker-studio/visualization/library-reference"
keywords:
  - "table"
  - "drill"
  - "actions"
  - "tooltips"
  - "charts"
  - "now"
  - "provide"
  - "updated"
---

# Table drill actions and tooltips

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

Table charts now provide an updated drill experience for report creators and report viewers.

## Extended Definition

Table charts now provide an updated drill experience for report creators and report viewers.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)
- [https://docs.cloud.google.com/iam/docs/roles-permissions/actions](https://docs.cloud.google.com/iam/docs/roles-permissions/actions)
- [https://developers.google.com/looker-studio/visualization/library-reference](https://developers.google.com/looker-studio/visualization/library-reference)

## Supporting Pages

### "Actions roles and permissions \_|\_ Identity and Access Management (IAM)\

- URL: [https://docs.cloud.google.com/iam/docs/roles-permissions/actions](https://docs.cloud.google.com/iam/docs/roles-permissions/actions)
- Source ID: `site-iam-reference`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Actions roles Role Permissions Actions Admin ( roles/ actions.Admin ) Access to edit and deploy an action actions. actions. agent. claimContentProvider actions.agent.get actions.agent.update actions.agentVersions.create actions.agentVersions.delete actions.agentVersions.deploy actions.agentVersions.get actions.agentVersions.list firebase.projects.get firebase.projects.update resourcemanager.projects.get resourcemanager.projects.list serviceusage.services.use Actions Viewer ( roles/ actions.Viewer ) Access to view an action actions.agent.get actions.agentVersions.get actions.agentVersions.list firebase.projects.get resourcemanager.projects.get resourcemanager.projects.list serviceusage.services.use Actions permissions Permission Included in roles actions. agent. claimContentProvider Owner ( roles/ owner ) Editor ( roles/ editor ) Actions Admin ( roles/ actions.Admin ) actions.agent.get Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Actions Admin ( roles/ actions.Admin ) Actions Viewer ( roles/ actions.Viewer ) Support User ( roles/ iam.supportUser ) actions.agent.update Owner ( roles/ owner ) Editor ( roles/ editor ) Actions Admin ( roles/ actions.Admin ) actions.agentVersions.create Owner ( roles/ owner ) Editor ( roles/ editor ) Actions Admin ( roles/ actions.Admin ) Dialogflow Console Agent Editor ( roles/ dialogflow.consoleAgentEditor ) actions.agentVersions.delete Owner ( roles/ owner ) Editor ( roles/ editor ) Actions Admin ( roles/ actions.Admin ) actions.agentVersions.deploy Owner ( roles/ owner ) Editor ( roles/ editor ) Actions Admin ( roles/ actions.Admin ) actions.agentVersions.get Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Actions Admin ( roles/ actions.Admin ) Actions Viewer ( roles/ actions.Viewer ) Support User ( roles/ iam.supportUser ) actions.agentVersions.list Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Actions Admin ( roles/ actions.Admin ) Actions Viewer ( roles/ actions.Viewer ) Security Admin ( roles/ iam.securityAdmin ) Security Reviewer ( roles/ iam.securityReviewer ) Security Auditor ( roles/ iam.securityAuditor ) Support User ( roles/ iam.supportUser ) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
- Home Documentation Security IAM Reference Send feedback Actions roles and permissions Stay organized with collections Save and categorize content based on your preferences.
- This page lists the IAM roles and permissions for Actions.

### Linking API \_|\_ Integrate and share \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)
- Source ID: `site-api-reference`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- Examples A TABLE type configuration where the query is defined with a Table ID: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = bigquery - public - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = shakespeare & ds . ds0 . billingProjectId = myProject A TABLE type configuration to query a date sharded table using the wildcard character suffix: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = price - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = stock A TABLE type configuration to query a date sharded table using the YYYYMMDD suffix: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = price - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = stock YYYYMMDD A TABLE type configuration to query a BigQuery Export for Google Analytics table, using the SESSION fields template: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = my - gabq - project & ds . ds0 . datasetId = 1234567 & ds . ds0 . tableId = ga sessions YYYYMMDD & ds . ds0 . gaTemplateLevel = SESSION A TABLE type configuration to query an ingestion time partitioned table and use the partitioning column as a date range dimension: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = acme - co - logs & ds . ds0 . datasetId = logs & ds . ds0 . tableId = logs table & ds . ds0 . isPartitioned = true A CUSTOM QUERY type configuration where they query is defined with a SQL statement: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = CUSTOM QUERY & ds . ds0 . projectId = bigquery - public - data & ds . ds0 . sql = SELECT % 20 word % 2 C % 20 word count % 20 FROM % 20 % 60 bigquery - public - data . samples . shakespeare % 60 & ds . ds0 . billingProjectId = myProject A CUSTOM QUERY type configuration where only the SQL statement is updated and the template data source is used for the rest of the configuration: https://lookerstudio.google.com/reporting/create? c.reportId=123abc &ds.ds0.sql=SELECT%20corpus%20FROM%20%60bigquery-public-data.samples.shakespeare%60 A CUSTOM QUERY type configuration where the SQL statement of the template data source is updated using sqlReplace : https://lookerstudio.google.com/reporting/create? c.reportId=123abc &ds.ds0.sqlReplace=bigquery-public-data,new-project,samples,new-dataset The following shows a template query before and after sqlReplace is applied.
- For example, if you have a template with three BigQuery data sources attached, and you want to replace the projectId and datasetId in each one, but preserve the tableId , you could write it as: https://lookerstudio.google.com/reporting/create? c.reportId=7890 &ds.ds1.projectId=client-project &ds.ds1.datasetId=client-dataset &ds.ds2.projectId=client-project &ds.ds2.datasetId=client-dataset &ds.ds3.projectId=client-project &ds.ds3.datasetId=client-dataset Or, with the ds. wildcard, you can use this equivalent url: https://lookerstudio.google.com/reporting/create? c.reportId=7890 &ds. .projectId=client-project &ds. .datasetId=client-dataset Parameters provided to the Linking API that don't use the ds. wildcard are given precedence over ones that are.
- If the Linking API is used to provide a new data source configuration that yields the exact same fields, there are two outcomes based on the value of the refreshFields parameter: If set to true , the field configuration from the template data source will not carry-over, and charts may potentially fail to load if they depend on the same field configuration (i.e. a field of type Year is expected).
- The following table provides the recommended data source access for the optimal user experience based on the template data sources and Linking API configuration: Data source type Linking API configuration for data source Recommendation for data source permissions Notes Embedded Replace N/A - View access will be inherited from report.

### "Looker Studio Community Component (dscc) library reference \_|\_ Community\

- URL: [https://developers.google.com/looker-studio/visualization/library-reference](https://developers.google.com/looker-studio/visualization/library-reference)
- Source ID: `site-docs-reference-2`
- Final score: 89
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- These field objects additionally have a configId property that corresponds to the IDs from the config. rows Array<Array> An array of arrays: each array is a row of data Sample tableFormat data This is sample data returned by using dscc.subscribeToData() with the option dscc.tableFormat . { "tables" : { "DEFAULT" : { "headers" : [{ "id" : "qt ky8sltutsb" , "name" : "dimension" , "type" : "TEXT" , "concept" : "DIMENSION" , "configId" : "configId1" }, { "id" : "qt b5bvmtutsb" , "name" : "second dim" , "type" : "TEXT" , "concept" : "DIMENSION" "configId" : "configId1" }, { "id" : "qt m9dtntutsb" , "name" : "metric" , "type" : "NUMBER" , "concept" : "METRIC" , "configId" : "configId2" }], "rows" : [ [ "Week 4" , "lm" , 55 ] ] }, "COMPARISON" : { "headers" : [{ "id" : "qt ky8sltutsb" , "name" : "dimension" , "type" : "TEXT" , "concept" : "DIMENSION" , "configId" : "configId1" }, { "id" : "qt b5bvmtutsb" , "name" : "second dim" , "type" : "TEXT" , "concept" : "DIMENSION" "configId" : "configId1" }, { "id" : "qt m9dtntutsb" , "name" : "metric" , "type" : "NUMBER" , "concept" : "METRIC" , "configId" : "configId2" }], "rows" : [ [ "Week 5" , "no" , 123 ] ] } }, "fields" : { "configId1" : [ { "id" : "qt ky8sltutsb" , "name" : "week" , "type" : "TEXT" , "concept" : "DIMENSION" }, { "id" : "qt b5bvmtutsb" , "name" : "textId" , "type" : "TEXT" , "concept" : "DIMENSION" } ], "configId2" : [ { "id" : "qt m9dtntutsb" , "name" : "orders" , "type" : "NUMBER" , "concept" : "METRIC" } ] }, "style" : { "nodeColor" : { "value" : { "color" : "#000000" } } }, "theme" : {}, "dateRanges" : { "DEFAULT" : { "start" : "20210501" , "end" : "20210531" }, "COMPARISON" : { "start" : "20200501" , "end" : "20200531" } }, "interactions" : { "onClick" : { "value" : { "type" : "FILTER" , "data" : { "concepts" : [ "qt h6oibrb6wb" , "qt i6oibrb6wb" ], "values" : [ [ "Afternoon" , "Sunday" ], [ "Afternoon" , "Thursday" ], [ "Morning" , "Tuesday" ] ] } }, "supportedActions" : [ "FILTER" ] } } } objectFormat reference objectRow { configId1 : array ( string bool number ), configId2 : array ( string bool number ) } Field Type Description configId array array of values associated with a particular config ID Sample objectFormat data This is sample data returned by using dscc.subscribeToData() with the option dscc.objectFormat . { "tables" : { "COMPARISON" : [ { "configId1" : [ "Week 5" , "cd" ], "configId2" : [ 123 ] } ], "DEFAULT" : [ { "configId1" : [ "Week 1" , "ab" ], "configId2" : [ 24 ] } ] }, "fields" : { "configId1" : [ { "id" : "qt h6oibrb6wb" , "name" : "time of day" , "type" : "TEXT" , "concept" : "DIMENSION" }, { "id" : "qt i6oibrb6wb" , "name" : "day" , "type" : "TEXT" , "concept" : "DIMENSION" } ], "configId2" : [ { "id" : "qt m9dtntutsb" , "name" : "metric" , "type" : "NUMBER" , "concept" : "METRIC" } ] }, "style" : { "nodeColor" : { "value" : { "color" : "#000000" } } }, "theme" : {}, "dateRanges" : { "DEFAULT" : { "start" : "20210501" , "end" : "20210531" }, "COMPARISON" : { "start" : "20200501" , "end" : "20200531" } }, "interactions" : { "onClick" : { "value" : { "type" : "FILTER" , "data" : { "concepts" : [ "qt h6oibrb6wb" , "qt i6oibrb6wb" ], "values" : [ [ "Afternoon" , "Sunday" ], [ "Afternoon" , "Thursday" ], [ "Morning" , "Tuesday" ] ] } }, "supportedActions" : [ "FILTER" ] } } } Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Field Type Description fillColor object An object of the format {color: string, opacity: number} fontColor object An object of the format {color: string, opacity: number} accentFillColor object An object of the format {color: string, opacity: number} accentFontColor object An object of the format {color: string, opacity: number} fontFamily string A string describing the font family accentFontFamily string A string describing the accent font family increaseColor object An object of the format {color: string, opacity: number} decreaseColor object An object of the format {color: string, opacity: number} gridColor object An object of the format {color: string, opacity: number} seriesColor Array<object> An array of objects of the format {color: string, opacity: number} tablesById { "DEFAULT" : object ( tableObject ), "COMPARISON" : object ( tableObject ) undefined } The tableObject provides heading and data information for each row. "DEFAULT" always will return data, and "COMPARISON" will only be populated if the user configures the data with comparison rows.
- These following are the fields that are shared between dscc.objectFormat and dscc.tableFormat . { fields : object ( fieldsByConfigId ), style : object ( styleById ), interactions : object ( interactionsById ), theme : object ( themeStyle ), tables : object ( tablesById ), dateRanges : object ( dateRangesById ) } Field Type Description fields object(fieldsByConfigId) An object that contains fields indexed by their configId style object(styleById) An object that contains style objects indexed by their configId interactions object(interactionsById) An object that contains interaction objects theme themeStyle A themeStyle object that contains theme styling information for the report tables object(tablesById) An object that contains tableObjects dateRanges object(dateRangesById) An object that contains dateRanges fieldsByConfigId { configId : array ( field ) } The fieldsByConfigId object contains arrays of field objects indexed by the "id" defined in the visualization config .
- Field Type Description "DEFAULT" object(tableObject) OR Array<objectRow> The tableObject associated with the data a user adds to a visualization "COMPARISON" object(tableObject) OR Array<objectRow> The tableObject associated with the date comparison data , if applicable dateRangesById { "DEFAULT" : object ( dateRange ), "COMPARISON" : object ( dateRange ) } The dateRangesById object provides information about default and comparison date ranges .

