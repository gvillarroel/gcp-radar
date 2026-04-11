---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.789Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery CREATE VIEW with column name list"
feature_slug: "bigquery-create-view-with-column-name-list"
latest_feature_date: "2021-04-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/analysis-rules"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
keywords:
  - "named view columns"
  - "explicit column names"
  - "CREATE VIEW (column list)"
  - "CREATE VIEW column list"
  - "CREATE VIEW with columns"
  - "view definition"
  - "CREATE VIEW"
---

# BigQuery CREATE VIEW with column name list

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery now supports CREATE VIEW statements that include an explicit column name list.

## Extended Definition

BigQuery now supports CREATE VIEW statements that include an explicit column name list.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/analysis-rules](https://docs.cloud.google.com/bigquery/docs/analysis-rules)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library and create a client const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function ddlCreateView () { // Creates a view via a DDL query / TODO(developer): Uncomment the following lines before running the sample. / // const projectId = "my project" // const datasetId = "my dataset" // const tableId = "my new view" const query = CREATE VIEW \ ${ projectId } . ${ datasetId } . ${ tableId } \ OPTIONS( expiration timestamp=TIMESTAMP ADD( CURRENT TIMESTAMP(), INTERVAL 48 HOUR), friendly name="new view", description="a view that expires in 2 days", labels=[("org unit", "development")] ) AS SELECT name, state, year, number FROM \bigquery-public-data.usa names.usa 1910 current\ WHERE state LIKE 'W%' ; // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query const options = { query : query , }; // Run the query as a job const [ job ] = await bigquery . createQueryJob ( options ); job . on ( 'complete' , metadata = > { console . log ( Created new view ${ tableId } via job ${ metadata . id } ); }); } Python Call the Client.query() method to start a query job.
- For more information, see Set up authentication for client libraries . from google.cloud import bigquery project = 'my-project' dataset id = 'my dataset' table id = 'new view' client = bigquery.Client(project=project) sql = """ CREATE VIEW {} . {} . {} OPTIONS( expiration timestamp=TIMESTAMP ADD( CURRENT TIMESTAMP(), INTERVAL 48 HOUR), friendly name="new view", description="a view that expires in 2 days", labels=[("org unit", "development")] ) AS SELECT name, state, year, number FROM bigquery-public-data.usa names.usa 1910 current WHERE state LIKE 'W%' """ . format ( project , dataset id , table id ) job = client . query ( sql ) # API request. job . result () # Waits for the query to finish. print ( 'Created new view " {} . {} . {} ".' . format ( job . destination . project , job . destination . dataset id , job . destination . table id , ) ) On-demand query size calculation If you use on-demand billing, BigQuery charges for data definition language (DDL) queries based on the number of bytes processed by the query.
- Examples Creating a new view The following example creates a view named newview in mydataset : CREATE VIEW myproject.mydataset.newview OPTIONS ( expiration timestamp = TIMESTAMP ADD ( CURRENT TIMESTAMP (), INTERVAL 48 HOUR ), friendly name = "newview" , description = "a view that expires in 2 days" , labels =[ ( "org unit" , "development" ) ] ) AS SELECT column 1 , column 2 , column 3 FROM myproject.mydataset.mytable If the view name exists in the dataset, the following error is returned: Already Exists: project id:dataset.table The view is defined using the following GoogleSQL query: SELECT column 1, column 2, column 3 FROM myproject.mydataset.mytable The view option list specifies the: Expiration time: 48 hours from the time the view is created Friendly name: newview Description: A view that expires in 2 days Label: org unit = development Creating a view only if the view doesn't exist The following example creates a view named newview in mydataset only if no view named newview exists in mydataset .
- CREATE VIEW IF NOT EXISTS myproject.mydataset.newview OPTIONS ( expiration timestamp = TIMESTAMP ADD ( CURRENT TIMESTAMP (), INTERVAL 48 HOUR ), friendly name = "newview" , description = "a view that expires in 2 days" , labels =[ ( "org unit" , "development" ) ] ) AS SELECT column 1 , column 2 , column 3 FROM myproject.mydataset.mytable The view is defined using the following GoogleSQL query: SELECT column 1, column 2, column 3 FROM myproject.mydataset.mytable The view option list specifies the: Expiration time: 48 hours from the time the view is created Friendly name: newview Description: A view that expires in 2 days Label: org unit = development Creating or replacing a view The following example creates a view named newview in mydataset , and if newview exists in mydataset , it is overwritten using the specified query expression.

### "Restrict data access using analysis rules \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/analysis-rules](https://docs.cloud.google.com/bigquery/docs/analysis-rules)
- Source ID: `site-docs-root-2`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- You can define a differential privacy analysis rule for a view in a data clean room or with the CREATE VIEW statement: CREATE OR REPLACE VIEW VIEW NAME OPTIONS ( privacy policy = ' '' { "differential privacy policy": { "privacy unit column": " PRIVACY UNIT COLUMN ", "max epsilon per query": MAX EPSILON PER QUERY , "epsilon budget": EPSILON BUDGET , "delta per query": DELTA PER QUERY , "delta budget": DELTA BUDGET , "max groups contributed": MAX GROUPS CONTRIBUTED }, "join restriction policy": { "join condition": " JOIN CONDITION ", "join allowed columns": JOIN ALLOWED COLUMNS } } '' ' ) AS QUERY ; Definitions: differential privacy policy : The differential privacy policy for the differential privacy analysis rule.
- Define an aggregation threshold analysis rule for a view You can define an aggregation threshold analysis rule for a view in a data clean room or with the CREATE VIEW statement: CREATE OR REPLACE VIEW VIEW NAME OPTIONS ( privacy policy = ' '' { "aggregation threshold policy": { "threshold" : THRESHOLD , "privacy unit column": " PRIVACY UNIT COLUMN " }, "join restriction policy": { "join condition": " JOIN CONDITION ", "join allowed columns": JOIN ALLOWED COLUMNS } } '' ' ) AS QUERY ; Definitions: aggregation threshold policy : The aggregation threshold policy for the aggregation threshold analysis rule.
- Define a list overlap analysis rule for a view You can define a list overlap analysis rule for a view in a data clean room or with the CREATE VIEW statement: CREATE OR REPLACE VIEW VIEW NAME OPTIONS ( privacy policy = ' '' { "join restriction policy": { "join condition": " JOIN CONDITION ", "join allowed columns": JOIN ALLOWED COLUMNS } } '' ' ) AS QUERY ; Definitions: join restriction policy : The join restriction policy for the list overlap analysis rule.
- ExamTable ); To review the privacy policy syntax for CREATE VIEW , see the OPTIONS list in CREATE VIEW .

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- The following example creates a table named new table in mydataset : CREATE OR REPLACE TABLE myproject.mydataset.new table AS WITH RECURSIVE T1 AS ( SELECT 1 AS n UNION ALL SELECT n + 1 FROM T1 WHERE n < 3 ) SELECT FROM T1 Recursive CTEs can be used inside CREATE VIEW AS SELECT statements.
- CREATE VIEW my dataset . my view AS ( SELECT 1 AS a , 2 AS a ); Ambiguous aliases GoogleSQL provides an error if accessing a name is ambiguous, meaning it can resolve to more than one unique object in the query or in a table schema, including the schema of a destination table.
- Example: SELECT 1 AS a , 2 AS a ; / ---+-----+ a a 1 +---+-----+ 1 2 +---+----- / Duplicate column names in a table or view definition aren't supported.
- To work around this, use the WITH RECURSIVE clause as the query expression in the CREATE VIEW statement.

