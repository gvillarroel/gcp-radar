---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.152Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spark Spanner connector write support"
feature_slug: "spark-spanner-connector-write-support"
latest_feature_date: "2026-03-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/change-streams/manage"
  - "https://docs.cloud.google.com/spanner/docs/batch-write"
  - "https://docs.cloud.google.com/spanner/docs/change-streams"
keywords:
  - "dataframes"
  - "writing"
  - "spark"
  - "connector"
  - "write"
  - "tables"
  - "added"
---

# Spark Spanner connector write support

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

The Spark Spanner connector added support for writing Spark DataFrames to Spanner tables using the Spark data source API.

## Extended Definition

The Spark Spanner connector added support for writing Spark DataFrames to Spanner tables using the Spark data source API.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/change-streams/manage](https://docs.cloud.google.com/spanner/docs/change-streams/manage)
- [https://docs.cloud.google.com/spanner/docs/batch-write](https://docs.cloud.google.com/spanner/docs/batch-write)
- [https://docs.cloud.google.com/spanner/docs/change-streams](https://docs.cloud.google.com/spanner/docs/change-streams)

## Supporting Pages

### Create and manage change streams \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams/manage](https://docs.cloud.google.com/spanner/docs/change-streams/manage)
- Source ID: `site-docs-root`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Watch specific tables To limit a change stream's scope to specific tables, rather than an entire database, specify a list of one or more tables: CREATE CHANGE STREAM SingerAlbumStream FOR Singers , Albums ; Spanner automatically updates change streams that watch whole tables to reflect any schema changes affecting those tables, such as added or dropped columns.
- Using a separate metadata database eliminates complexities that might arise from allowing the connector to write directly to your application database: By separating the metadata database from the production database with the change stream, the connector needs only read permissions to the production database.
- By restricting the traffic of the connector to a separate metadata database, writes performed by the connector itself are not included in the production change streams.
- The Spanner change streams connector needs read-write permissions to the metadata database.

### Modify data using batch write \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/batch-write](https://docs.cloud.google.com/spanner/docs/batch-write)
- Source ID: `site-docs-root`
- Final score: 101
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Build (), }, }); for ( auto & commit result : commit results ) { if ( ! commit result ) throw std :: move ( commit result ). status (); std :: cout << "Mutation group indexes [" ; for ( auto index : commit result - > indexes ) std :: cout << " " << index ; std :: cout << " ]: " ; if ( commit result - > commit timestamp ) { auto const & ts = commit result - > commit timestamp ; std :: cout << "Committed at " << ts . get<absl :: Time > (). value (); } else { std :: cout << commit result - > commit timestamp . status (); } std :: cout << " \n " ; } C# // Copyright 2026 Google LLC // // Licensed under the Apache License, Version 2.0 (the "License"); // you may not use this file except in compliance with the License. // You may obtain a copy of the License at // // http://www.apache.org/licenses/LICENSE-2.0 // // Unless required by applicable law or agreed to in writing, software // distributed under the License is distributed on an "AS IS" BASIS, // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. // See the License for the specific language governing permissions and // limitations under the License. using Google.Cloud.Spanner.Data ; using Google.Rpc ; using Google.Cloud.Spanner.V1 ; using Google.Protobuf.WellKnownTypes ; using System ; using System.Collections.Generic ; using System.Threading.Tasks ; public class BatchWriteAtLeastOnceAsyncSample { public async Task BatchWriteAtLeastOnceAsync ( string projectId , string instanceId , string databaseId ) { string connectionString = $"Data Source=projects/{projectId}/instances/{instanceId}/databases/{databaseId}" ; using var connection = new SpannerConnection ( connectionString ); await connection .
- WriteLine ( $"Error executing batch write: {ex.Message}" ); throw ; } } } Go import ( "context" "fmt" "io" "cloud.google.com/go/spanner" sppb "cloud.google.com/go/spanner/apiv1/spannerpb" "google.golang.org/grpc/status" ) // batchWrite demonstrates writing mutations to a Spanner database through // BatchWrite API - https://pkg.go.dev/cloud.google.com/go/spanner#Client.BatchWrite func batchWrite ( w io .
- You should group the following mutation types together when using batch write: Inserting rows with the same primary key prefix in both the parent and child tables.
- You can use Spanner batch write to insert, update, or delete multiple rows in your Spanner tables.

### Change streams overview \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams](https://docs.cloud.google.com/spanner/docs/change-streams)
- Source ID: `site-docs-root`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- They implicitly watch every column in every table, automatically watching any tables or columns added after the change stream's creation, and ceasing to watch any tables or columns dropped.
- If using the SpannerIO connector, then the owner of the Dataflow job that reads change stream data requires additional Identity and Access Management (IAM) permissions, either on your application database or on a separate metadata database; see Create a metadata database .
- Explicitly watching tables and columns If you configure a change stream to watch only particular columns in a table, and you later add columns to that table, the change stream will not begin to watch those columns unless you reconfigure that change stream to do so.
- After you configure the connector with details about a particular change stream, it automatically outputs new data change records into a single, unbounded PCollection data set, ready for further processing by subsequent transforms in the Dataflow pipeline.

