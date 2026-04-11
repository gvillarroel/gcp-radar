---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T06:18:40.391Z"
product_name: "Dataform"
product_slug: "dataform"
feature_name: "Code formatting"
feature_slug: "code-formatting"
latest_feature_date: "2023-10-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataform/docs/reference/dataform-core-reference"
  - "https://docs.cloud.google.com/dataform/docs/javascript-in-dataform"
  - "https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient"
keywords:
  - "code"
  - "formatting"
  - "adds"
  - "for"
  - "dataform"
  - "core"
  - "and"
  - "javascript"
---

# Code formatting

Product: Dataform
Coverage: LOW

## Step 02 Summary

Code formatting adds formatting support for Dataform core and JavaScript code.

## Extended Definition

Code formatting adds formatting support for Dataform core and JavaScript code.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataform/docs/reference/dataform-core-reference](https://docs.cloud.google.com/dataform/docs/reference/dataform-core-reference)
- [https://docs.cloud.google.com/dataform/docs/javascript-in-dataform](https://docs.cloud.google.com/dataform/docs/javascript-in-dataform)
- [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient)

## Supporting Pages

### Dataform core reference \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/reference/dataform-core-reference](https://docs.cloud.google.com/dataform/docs/reference/dataform-core-reference)
- Source ID: `site-docs-root`
- Final score: 226
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can use Dataform core in SQLX and JavaScript files. assert() assert (name: string, query?: AContextable ) Adds a Dataform assertion the compiled graph.
- Example: // definitions/file.js assert ( "name" ). query ( ctx = > "select 1" ); CommonContext Context methods are available when evaluating contextable SQL code, such as within SQLX files, or when using a Contextable argument with Dataform core. database () => string Returns the database of this dataset, if applicable. name () => string Returns the name of this table. ref (ref: Resolvable string[], rest: string[]) => string References another action, adding it as a dependency to this action, returning valid SQL to be used in a from expression.
- ITableContext Context methods are available when evaluating contextable SQL code, such as within SQLX files, or when using a Contextable argument with Dataform core. incremental () => boolean Returns true when the current context indicates that the table will be built incrementally. name () => string Returns the fully qualified name of this table. ref (ref: Resolvable string[], rest: string[]) => string References another action, adding it as a dependency to this action, returning valid SQL to be used in a from expression.
- Home Documentation Data analytics Dataform Reference Send feedback Dataform core reference Stay organized with collections Save and categorize content based on your preferences.

### Use JavaScript in Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/javascript-in-dataform](https://docs.cloud.google.com/dataform/docs/javascript-in-dataform)
- Source ID: `site-docs-root-2`
- Final score: 218
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following code sample shows the includes/script builder.js file with the renderScript JavaScript function that aggregates metrics by using SUM and groups them by dimension: function renderScript ( table , dimensions , metrics ) { return SELECT ${ dimensions . map (( field ) = > ${ field } AS ${ field } ). join ( ",\\n" ) } , ${ metrics . map (( field ) = > SUM( ${ field } ) AS ${ field } ). join ( ",\\n" ) } FROM ${ table } GROUP BY ${ dimensions . map (( field , i ) = > ${ i + 1 } ). join ( ", " ) } ; } module . exports = { renderScript }; The following code sample shows the renderScript JavaScript function used in the definitions/stats per country and device.sqlx file with the Dataform core ref function passed as an argument: $ { script builder . renderScript ( ref ( "source table" ), [ "country" , "device type" ], [ "revenue" , "pageviews" , "sessions" ])} The following code sample shows the definitions/stats per country and device.sqlx query compiled to SQL: SELECT country AS country, device type AS device type, SUM(revenue) AS revenue, SUM(pageviews) AS pageviews, SUM(sessions) AS sessions FROM my schema.source table GROUP BY 1, 2 For more information about the Dataform core ref function, see Dataform core .
- The following code sample shows the self Dataform core built-in JavaScript function added inline to the post operations block in a SQLX file: config {type: "table"} SELECT FROM ... post operations { GRANT roles/bigquery.dataViewer ON TABLE ${self()} TO "group:allusers@example.com", "user:otheruser@example.com" } The following code sample shows a constant defined in a JavaScript block and used inline inside a query in a SQLX file: js { const columnName = "foo" ; } SELECT 1 AS $ { columnName } FROM "..." Reuse code across a single SQLX file with JavaScript encapsulation You can reuse JavaScript code to streamline development in Dataform.
- The function generates a SQL script: function renderScript ( table , dimensions , metrics ) { return select ${ dimensions . map ( field = > ${ field } as ${ field } ). join ( "," ) } , ${ metrics . map ( field = > sum( ${ field } ) as ${ field } ). join ( ",\n" ) } from ${ table } group by ${ dimensions . map (( field , i ) = > ${ i + 1 } ). join ( ", " ) } ; } module . exports = { renderScript }; The following code sample shows the use of the custom renderScript JavaScript function in a Dataform core table definition query: config { type: "table", tags: ["advanced", "hourly"], disabled: true } ${functions.renderScript(ref("source table"), ["country", "device type"], ["revenue", "pageviews", "sessions"] )} The following code sample shows the previous Dataform core table definition query compiled into SQL: select country as country, device type as device type, sum(revenue) as revenue, sum(pageviews) as pageviews, sum(sessions) as sessions from "dataform"."source table" group by 1, 2 Reference an include in a SQLX file You can reference any include function or constant inside a SQLX file.
- The following code sample references the firstDate constant, defined in the nested includes/allConstants/constants.js file, in a table definition SQLX file: config { type : "table" } js { var { firstDate } = require ( "includes/allConstants/constants" ); } select from source table where date > $ { firstDate } Use a JavaScript include function with the Dataform core ref function To use a JavaScript include function with the Dataform core ref function, you need to pass ref as an argument of the JavaScript include function inside a SQLX file.

### "Class DataformAsyncClient (0.10.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient)
- Source ID: `site-python-reference`
- Final score: 212
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataform v1 import google.iam.v1.iam policy pb2 as iam policy pb2 # type: ignore async def sample test iam permissions(): Create a client client = dataform v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataform v1 import google.iam.v1.iam policy pb2 as iam policy pb2 # type: ignore async def sample get iam policy(): Create a client client = dataform v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataform v1 import google.iam.v1.iam policy pb2 as iam policy pb2 # type: ignore async def sample set iam policy(): Create a client client = dataform v1 .

