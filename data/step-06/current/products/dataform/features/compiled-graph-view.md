---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T06:18:40.401Z"
product_name: "Dataform"
product_slug: "dataform"
feature_name: "Compiled graph view"
feature_slug: "compiled-graph-view"
latest_feature_date: "2023-01-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataform/docs/sql-workflows"
  - "https://docs.cloud.google.com/dataform/docs/javascript-in-dataform"
  - "https://docs.cloud.google.com/dataform/docs/create-workspace"
keywords:
  - "compiled"
  - "graph"
  - "view"
  - "displays"
  - "sql"
  - "workflow"
  - "as"
  - "in"
---

# Compiled graph view

Product: Dataform
Coverage: LOW

## Step 02 Summary

Compiled graph view displays a SQL workflow as a compiled graph in a Dataform workspace.

## Extended Definition

Compiled graph view displays a SQL workflow as a compiled graph in a Dataform workspace.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataform/docs/sql-workflows](https://docs.cloud.google.com/dataform/docs/sql-workflows)
- [https://docs.cloud.google.com/dataform/docs/javascript-in-dataform](https://docs.cloud.google.com/dataform/docs/javascript-in-dataform)
- [https://docs.cloud.google.com/dataform/docs/create-workspace](https://docs.cloud.google.com/dataform/docs/create-workspace)

## Supporting Pages

### Overview of workflows \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/sql-workflows](https://docs.cloud.google.com/dataform/docs/sql-workflows)
- Source ID: `site-docs-root-2`
- Final score: 176
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To view the DAG of your workflow, in your workspace, click Compiled graph .
- You can develop workflows with Dataform core , using SQLX files and optionally JavaScript files, or with JavaScript .
- Visualization of a workflow You can view your workflow visualized in the form of a Directed Acyclic Graph (DAG).
- A workflow can consist of the following objects: Data source declarations Declarations of BigQuery data sources that let you reference these data sources in Dataform table definitions and SQL operations.

### Use JavaScript in Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/javascript-in-dataform](https://docs.cloud.google.com/dataform/docs/javascript-in-dataform)
- Source ID: `site-docs-root-2`
- Final score: 166
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following code sample shows the includes/script builder.js file with the renderScript JavaScript function that aggregates metrics by using SUM and groups them by dimension: function renderScript ( table , dimensions , metrics ) { return SELECT ${ dimensions . map (( field ) = > ${ field } AS ${ field } ). join ( ",\\n" ) } , ${ metrics . map (( field ) = > SUM( ${ field } ) AS ${ field } ). join ( ",\\n" ) } FROM ${ table } GROUP BY ${ dimensions . map (( field , i ) = > ${ i + 1 } ). join ( ", " ) } ; } module . exports = { renderScript }; The following code sample shows the renderScript JavaScript function used in the definitions/stats per country and device.sqlx file with the Dataform core ref function passed as an argument: $ { script builder . renderScript ( ref ( "source table" ), [ "country" , "device type" ], [ "revenue" , "pageviews" , "sessions" ])} The following code sample shows the definitions/stats per country and device.sqlx query compiled to SQL: SELECT country AS country, device type AS device type, SUM(revenue) AS revenue, SUM(pageviews) AS pageviews, SUM(sessions) AS sessions FROM my schema.source table GROUP BY 1, 2 For more information about the Dataform core ref function, see Dataform core .
- The function generates a SQL script: function renderScript ( table , dimensions , metrics ) { return select ${ dimensions . map ( field = > ${ field } as ${ field } ). join ( "," ) } , ${ metrics . map ( field = > sum( ${ field } ) as ${ field } ). join ( ",\n" ) } from ${ table } group by ${ dimensions . map (( field , i ) = > ${ i + 1 } ). join ( ", " ) } ; } module . exports = { renderScript }; The following code sample shows the use of the custom renderScript JavaScript function in a Dataform core table definition query: config { type: "table", tags: ["advanced", "hourly"], disabled: true } ${functions.renderScript(ref("source table"), ["country", "device type"], ["revenue", "pageviews", "sessions"] )} The following code sample shows the previous Dataform core table definition query compiled into SQL: select country as country, device type as device type, sum(revenue) as revenue, sum(pageviews) as pageviews, sum(sessions) as sessions from "dataform"."source table" group by 1, 2 Reference an include in a SQLX file You can reference any include function or constant inside a SQLX file.
- The following code sample shows the self Dataform core built-in JavaScript function added inline to the post operations block in a SQLX file: config {type: "table"} SELECT FROM ... post operations { GRANT roles/bigquery.dataViewer ON TABLE ${self()} TO "group:allusers@example.com", "user:otheruser@example.com" } The following code sample shows a constant defined in a JavaScript block and used inline inside a query in a SQLX file: js { const columnName = "foo" ; } SELECT 1 AS $ { columnName } FROM "..." Reuse code across a single SQLX file with JavaScript encapsulation You can reuse JavaScript code to streamline development in Dataform.
- PROJECT ID }. my schema name . my table name The following code sample shows the previous Dataform core table definition query compiled into SQL: SELECT FROM my project name . my schema name . my table name Create a custom JavaScript function To create a custom JavaScript function that you can reuse across your project, follow these steps: Go to your development workspace.

### Create a development workspace \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/create-workspace](https://docs.cloud.google.com/dataform/docs/create-workspace)
- Source ID: `site-docs-root-2`
- Final score: 164
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This restriction also applies to viewing generated artifacts, such as compiled SQL, compilation errors, and run logs, for the workspace's compilations or workflow invocations.
- Compiled graph tab In the Compiled graph tab, you can see the compiled workflow defined in your workspace as an interactive directed acyclic graph (DAG).
- You can filter the graph by the following properties: Name Tag Type Assertion Declaration Incremental table Materialized view Operations Table Unknown View You can select multiple filters at once.
- You can click an action in the graph to view its details in the following panes: Metadata pane: displays the full name, type, dependencies, and dependents of the selected action.

