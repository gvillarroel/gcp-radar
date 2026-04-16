---
title: "Create a table using a template \_|\_ BigQuery \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-from-template
knowledge_key: corpus
source_id: site-docs-reference-required-15
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/samples/bigquerydatatransfer-copy-dataset
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-from-template
  title: "Create a table using a template \_|\_ BigQuery \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
BigQuery
Samples
Create a table using a template
Stay organized with collections
Save and categorize content based on your preferences.
Create a table using the properties of one table (schema, partitioning, clustering) to create a new empty table with the same configuration.
Code sample
Go
Before trying this sample, follow the Go setup instructions in the
BigQuery quickstart using
client libraries .
For more information, see the
BigQuery Go API
reference documentation .
To authenticate to BigQuery, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
import (
"context"
"fmt"
"cloud.google.com/go/bigquery"
)
// createTableFromTemplateTable demonstrates how to use the properties of one
// table (schema, partitioning, clustering) to create a new empty table with
// the same configuration.
func createTableFromTemplateTable ( srcProjectID , srcDatasetID , srcTableID , dstProjectID , dstDatasetID , dstTableID string ) error {
// srcProjectID := "bigquery-public-data"
// srcDatasetID := "samples"
// srcTableID := "shakespeare"
// dstProjectID := "my-project-id"
// dstDatasetID := "mydataset"
// dstTableID := "mytable"
ctx := context . Background ()
// We'll construct the client based on the destination project.
client , err := bigquery . NewClient ( ctx , dstProjectID )
if err != nil {
return fmt . Errorf ( "bigquery.NewClient: %w" , err )
}
defer client . Close ()
srcTableRef := client . DatasetInProject ( srcProjectID , srcDatasetID ). Table ( srcTableID )
srcMeta , err := srcTableRef . Metadata ( ctx )
if err != nil {
return fmt . Errorf ( "failed to get source table metadata: %w" , err )
}
dstTableRef := client . Dataset ( dstDatasetID ). Table ( dstTableID )
// We'll use some (but not all) of the metadata from the source table
// to define the destination table. Other properties to consider include
// attributes like expiration policy and managed encryption settings.
dstMeta := & bigquery . TableMetadata {
Description : fmt . Sprintf ( "table structure copied from %s.%s.%s" ,
srcTableRef . ProjectID , srcTableRef . DatasetID , srcTableRef . TableID ),
Schema : srcMeta . Schema ,
Clustering : srcMeta . Clustering ,
// A table will only have one partitioning configuration, the others will be empty/nil.
TimePartitioning : srcMeta . TimePartitioning ,
RangePartitioning : srcMeta . RangePartitioning ,
// Retain the same enforcement of partition filtering as well.
RequirePartitionFilter : srcMeta . RequirePartitionFilter ,
}
if err := dstTableRef . Create ( ctx , dstMeta ); err != nil {
return err
}
return nil
}
What's next
To search and filter code samples for other Google Cloud products, see the
Google Cloud sample browser .
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
