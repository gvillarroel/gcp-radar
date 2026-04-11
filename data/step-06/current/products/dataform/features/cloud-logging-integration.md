---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T06:18:40.399Z"
product_name: "Dataform"
product_slug: "dataform"
feature_name: "Cloud Logging integration"
feature_slug: "cloud-logging-integration"
latest_feature_date: "2023-04-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataform/docs/overview"
  - "https://docs.cloud.google.com/dataform/docs/javascript-in-dataform"
  - "https://docs.cloud.google.com/dataform/docs/monitor-runs"
keywords:
  - "logging"
  - "integration"
  - "makes"
  - "dataform"
  - "logs"
  - "available"
  - "in"
---

# Cloud Logging integration

Product: Dataform
Coverage: LOW

## Step 02 Summary

Cloud Logging integration makes Dataform logs available in Cloud Logging.

## Extended Definition

Cloud Logging integration makes Dataform logs available in Cloud Logging.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataform/docs/overview](https://docs.cloud.google.com/dataform/docs/overview)
- [https://docs.cloud.google.com/dataform/docs/javascript-in-dataform](https://docs.cloud.google.com/dataform/docs/javascript-in-dataform)
- [https://docs.cloud.google.com/dataform/docs/monitor-runs](https://docs.cloud.google.com/dataform/docs/monitor-runs)

## Supporting Pages

### Dataform overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/overview](https://docs.cloud.google.com/dataform/docs/overview)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- To debug errors, you can monitor runs in the following ways: View detailed Dataform execution logs View audit logs for Dataform View Cloud Logging logs for Dataform Dataform core Dataform core is an open source meta-language to create SQL tables and workflows.
- Dataform offers a web environment for the following activities: Workflow development Connection with GitHub, GitLab, Azure DevOps Services, and Bitbucket Continuous integration and continuous deployment Workflow execution The following sections describe the main features of Dataform.
- Dataform lets you manage data transformation in the Extraction, Loading, and Transformation (ELT) process for data integration.
- The following code sample shows you how to reference a table in a SQLX file with the ref function. config { type : "table" } SELECT order date AS date , order id AS order id , order status AS order status , SUM ( item count ) AS item count , SUM ( amount ) AS revenue FROM ${ ref ( "store clean" ) } GROUP BY 1 , 2 , 3 The output is similar to the following: CREATE OR REPLACE TABLE Dataform . orders AS SELECT order date AS date , order id AS order id , order status AS order status , SUM ( item count ) AS item count , SUM ( amount ) AS revenue FROM Dataform stg . store clean GROUP BY 1 , 2 , 3 For more information on additional dependency management, for example, executing code conditionally, using other Dataform core built-in functions, see the Dataform core reference .

### Use JavaScript in Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/javascript-in-dataform](https://docs.cloud.google.com/dataform/docs/javascript-in-dataform)
- Source ID: `site-docs-root-2`
- Final score: 114
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can create your own custom package in Dataform or use one of the open-source Dataform packages, available on the GitHub open-source Dataform page .
- The following code sample shows the includes/script builder.js file with the renderScript JavaScript function that aggregates metrics by using SUM and groups them by dimension: function renderScript ( table , dimensions , metrics ) { return SELECT ${ dimensions . map (( field ) = > ${ field } AS ${ field } ). join ( ",\\n" ) } , ${ metrics . map (( field ) = > SUM( ${ field } ) AS ${ field } ). join ( ",\\n" ) } FROM ${ table } GROUP BY ${ dimensions . map (( field , i ) = > ${ i + 1 } ). join ( ", " ) } ; } module . exports = { renderScript }; The following code sample shows the renderScript JavaScript function used in the definitions/stats per country and device.sqlx file with the Dataform core ref function passed as an argument: $ { script builder . renderScript ( ref ( "source table" ), [ "country" , "device type" ], [ "revenue" , "pageviews" , "sessions" ])} The following code sample shows the definitions/stats per country and device.sqlx query compiled to SQL: SELECT country AS country, device type AS device type, SUM(revenue) AS revenue, SUM(pageviews) AS pageviews, SUM(sessions) AS sessions FROM my schema.source table GROUP BY 1, 2 For more information about the Dataform core ref function, see Dataform core .
- The function generates a SQL script: function renderScript ( table , dimensions , metrics ) { return select ${ dimensions . map ( field = > ${ field } as ${ field } ). join ( "," ) } , ${ metrics . map ( field = > sum( ${ field } ) as ${ field } ). join ( ",\n" ) } from ${ table } group by ${ dimensions . map (( field , i ) = > ${ i + 1 } ). join ( ", " ) } ; } module . exports = { renderScript }; The following code sample shows the use of the custom renderScript JavaScript function in a Dataform core table definition query: config { type: "table", tags: ["advanced", "hourly"], disabled: true } ${functions.renderScript(ref("source table"), ["country", "device type"], ["revenue", "pageviews", "sessions"] )} The following code sample shows the previous Dataform core table definition query compiled into SQL: select country as country, device type as device type, sum(revenue) as revenue, sum(pageviews) as pageviews, sum(sessions) as sessions from "dataform"."source table" group by 1, 2 Reference an include in a SQLX file You can reference any include function or constant inside a SQLX file.
- The following JavaScript code sample lets you create a view of each table where the value of the user id field does not correspond to one of the values in the blocked user ids list: const tableNames = [ "user events" , "user settings" , "user logs" ]; tableNames . forEach ( tableName = > { publish ( tableName + " blocked removed" ). query ( ctx = > SELECT FROM ${ ctx . ref ( tableName ) } WHERE user id NOT IN ( SELECT user id FROM ${ ctx . ref ( "blocked user ids" ) } ) ); }); This code sample creates three views named user events blocked removed , user settings blocked removed , and user logs blocked removed that don't contain any of the blocked user IDs.

### Monitor runs \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/monitor-runs](https://docs.cloud.google.com/dataform/docs/monitor-runs)
- Source ID: `site-docs-root-2`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- Log format Dataform sends workflow invocation log messages in the following format: { "insertId" : "14ip1tza5" , "jsonPayload" : { "terminalState" : "SUCCEEDED" , "workflowInvocationId" : "1678383230-ac4ed48c-eb70-4555-b2b0-cda54d13edfa" , "@type" : "type.googleapis.com/google.cloud.dataform.logging.v1.WorkflowInvocationCompletionLogEntry" }, "resource" : { "type" : "dataform.googleapis.com/Repository" , "labels" : { "repository id" : "repository-name-example" , "resource container" : " PROJECT ID " , "location" : "us-central1" } }, "timestamp" : "2023-03-09T17:34:06.965981805Z" , "severity" : "INFO" , "logName" : "projects/project-name-example/logs/dataform.googleapis.com%2Fworkflow invocation completion" , "receiveTimestamp" : "2023-03-09T17:34:07.362371980Z" } What is logged Dataform log entries contain information that is useful for monitoring and debugging your workflow invocations.
- Go to Logs Explorer In the Query pane, select Show query and enter the following query: resource.type="dataform.googleapis.com/Repository" jsonPayload.@type="type.googleapis.com/google.cloud.dataform.logging.v1.WorkflowInvocationCompletionLogEntry" jsonPayload.terminalState="FAILED" This query alerts you of all failed Dataform workflow invocations.
- To configure log-based alerts for failed Dataform workflow invocations, follow these steps: In the Google Cloud console, select Logging , and then select Logs Explorer .
- You can use Monitoring to observe trends in Logging logs for Dataform workflow invocations and to notify you when conditions that you describe occur.

