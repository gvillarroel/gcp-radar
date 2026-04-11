---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.953Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Table decorators"
feature_slug: "table-decorators"
latest_feature_date: "2013-09-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/table-decorators"
  - "https://docs.cloud.google.com/bigquery/docs/access-historical-data"
keywords:
  - "snapshot decorator"
  - "table decorators"
  - "table versioning"
  - "table snapshots"
  - "time travel query"
  - "table@timestamp"
  - "table@"
---

# Table decorators

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery added table decorators to support time-based table snapshots.

## Extended Definition

BigQuery added table decorators to support time-based table snapshots.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/table-decorators](https://docs.cloud.google.com/bigquery/docs/table-decorators)
- [https://docs.cloud.google.com/bigquery/docs/access-historical-data](https://docs.cloud.google.com/bigquery/docs/access-historical-data)

## Supporting Pages

### Table decorators in legacy SQL \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/table-decorators](https://docs.cloud.google.com/bigquery/docs/table-decorators)
- Source ID: `site-docs-reference`
- Final score: 110
- Re-rank relevance: STRONG
- Re-rank rationale: The page is specifically about table decorators in legacy SQL and defines their syntax, time semantics, and usage.

Evidence snippets:
- Standard SQL does not support table decorators, but the FOR SYSTEM TIME AS OF clause in GoogleSQL provides functionality equivalent to time decorators.
- Table decorators can be used whenever a table is read, such as when copying a table, exporting a table , or listing data using tabledata.list .
- Time decorators Time decorators (formerly known as snapshot decorators ) reference a table's historical data at a point in time.
- For more information, see Table decorators in the GoogleSQL migration guide and Legacy SQL feature availability .

### Access historical data \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/access-historical-data](https://docs.cloud.google.com/bigquery/docs/access-historical-data)
- Source ID: `site-docs-root-2`
- Final score: 46
- Re-rank relevance: WEAK
- Re-rank rationale: The page mentions legacy SQL time decorators and the @<time> decorator only as alternate or restoration syntax, without detailing decorator feature behavior.

Evidence snippets:
- For this example, we choose the current time as we're about to delete the table immediately afterwards. / const snapshotEpoch = Date . now (); // Delete the table await bigquery . dataset ( datasetId ) . table ( tableId ) . delete (); console . log ( Table ${ tableId } deleted. ); // Construct the restore-from table ID using a snapshot decorator. const snapshotTableId = ${ tableId } @ ${ snapshotEpoch } ; // Construct and run a copy job. await bigquery . dataset ( datasetId ) . table ( snapshotTableId ) . copy ( bigquery . dataset ( datasetId ). table ( recoveredTableId )); console . log ( Copied data from deleted table ${ tableId } to ${ recoveredTableId } ); } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- Construct the restore-from table ID using a snapshot decorator. snapshot table id = " {} @ {} " . format ( table id , snapshot epoch ) Construct and run a copy job. job = client . copy table ( snapshot table id , recovered table id , Must match the source and destination tables location. location = "US" , ) # Make an API request. job . result () # Wait for the job to complete. print ( "Copied data from deleted table {} to {} " . format ( table id , recovered table id ) ) If you anticipate that you might want to restore a table later than what is allowed by the time travel window, then create a table snapshot of the table.
- We'll use this as the snapshot time // for recovering the table. long snapTime = System . currentTimeMillis (); // Construct the restore-from tableID using a snapshot decorator.
- Delete ( ctx ); err != nil { return err } // Construct the restore-from tableID using a snapshot decorator. snapshotTableID := fmt .

