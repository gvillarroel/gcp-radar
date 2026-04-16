---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:27.973Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Dataflow job builder import integration for Bigtable"
feature_slug: "dataflow-job-builder-import-integration-for-bigtable"
latest_feature_date: "2025-12-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/dynamodb-users"
  - "https://docs.cloud.google.com/bigtable/docs/change-streams-use-dataflow"
  - "https://docs.cloud.google.com/bigtable/docs/create-instance-write-data-cbt-cli"
keywords:
  - "import"
  - "builder"
  - "dataflow"
  - "integration"
  - "supports"
---

# Dataflow job builder import integration for Bigtable

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

Bigtable data import now supports the Google Cloud console Dataflow job builder, including a Pub/Sub-to-Bigtable template and custom source jobs.

## Extended Definition

Bigtable data import now supports the Google Cloud console Dataflow job builder, including a Pub/Sub-to-Bigtable template and custom source jobs.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/dynamodb-users](https://docs.cloud.google.com/bigtable/docs/dynamodb-users)
- [https://docs.cloud.google.com/bigtable/docs/change-streams-use-dataflow](https://docs.cloud.google.com/bigtable/docs/change-streams-use-dataflow)
- [https://docs.cloud.google.com/bigtable/docs/create-instance-write-data-cbt-cli](https://docs.cloud.google.com/bigtable/docs/create-instance-write-data-cbt-cli)

## Supporting Pages

### "Quickstart: Create an instance and write data with the cbt CLI \_|\_ Bigtable\

- URL: [https://docs.cloud.google.com/bigtable/docs/create-instance-write-data-cbt-cli](https://docs.cloud.google.com/bigtable/docs/create-instance-write-data-cbt-cli)
- Source ID: `site-docs-root`
- Final score: 74
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

### Migrate from DynamoDB to Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/dynamodb-users](https://docs.cloud.google.com/bigtable/docs/dynamodb-users)
- Source ID: `site-docs-reference-2`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- While you can design the lexicographical row key in Bigtable to handle many scan patterns efficiently, Bigtable also supports asynchronous secondary indexes that you implement as continuous materialized views to provide efficient, eventually consistent lookups for alternative query patterns.
- GetItem BatchGetItem , Query , Scan ReadRow ReadRows ( range , prefix , reverse scan ) Bigtable supports efficient scanning by row key prefix, regular expression pattern, or row key range forward or backward.
- This page describes the migration tool, compares the two database systems, and describes the underlying architecture and interaction details that differ and that are important to understand before migrating.
- The tool reads the exported files from your Cloud Storage bucket and uses a Dataflow template to transform the data so that it's compatible with Bigtable.

### Stream changes with Dataflow \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/change-streams-use-dataflow](https://docs.cloud.google.com/bigtable/docs/change-streams-use-dataflow)
- Source ID: `site-docs-root-2`
- Final score: 67
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Autoscaling The connector supports Dataflow autoscaling , which is enabled by default when using Runner v2 (required).
- For a list of entry types that a data change record can contain, see What's in a data change record . static List<String> mutationEntriesToString ( KV<ByteString , ChangeStreamMutation > mutationPair ) { List<String> mutations = new ArrayList <> (); String rowKey = mutationPair . getKey (). toStringUtf8 (); ChangeStreamMutation mutation = mutationPair . getValue (); MutationType mutationType = mutation . getType (); for ( Entry entry : mutation . getEntries ()) { if ( entry instanceof SetCell ) { mutations . add ( setCellToString ( rowKey , mutationType , ( SetCell ) entry )); } else if ( entry instanceof DeleteCells ) { mutations . add ( deleteCellsToString ( rowKey , mutationType , ( DeleteCells ) entry )); } else if ( entry instanceof DeleteFamily ) { // Note: DeleteRow mutations are mapped into one DeleteFamily per-family mutations . add ( deleteFamilyToString ( rowKey , mutationType , ( DeleteFamily ) entry )); } else { throw new RuntimeException ( "Entry type not supported." ); } } return mutations ; } In this sample a write entry is converted: private static String setCellToString ( String rowKey , MutationType mutationType , SetCell setCell ) { List<String> mutationParts = Arrays . asList ( rowKey , mutationType . name (), "SetCell" , setCell . getFamilyName (), setCell . getQualifier (). toStringUtf8 (), setCell . getValue (). toStringUtf8 ()); return String . join ( "," , mutationParts ); } In this sample a deletion of cells entry is converted: private static String deleteCellsToString ( String rowKey , MutationType mutationType , DeleteCells deleteCells ) { String timestampRange = deleteCells . getTimestampRange (). getStart () + "-" + deleteCells . getTimestampRange (). getEnd (); List<String> mutationParts = Arrays . asList ( rowKey , mutationType . name (), "DeleteCells" , deleteCells . getFamilyName (), deleteCells . getQualifier (). toStringUtf8 (), timestampRange ); return String . join ( "," , mutationParts ); } In this sample, a deletion of a column family entry is converted: private static String deleteFamilyToString ( String rowKey , MutationType mutationType , DeleteFamily deleteFamily ) { List<String> mutationParts = Arrays . asList ( rowKey , mutationType . name (), "DeleteFamily" , deleteFamily . getFamilyName ()); return String . join ( "," , mutationParts ); } Monitor The following resources in the Google Cloud console let you monitor your Google Cloud resources while you run a Dataflow pipeline to read a Bigtable change stream: Dataflow monitoring Bigtable system insights In particular, check the following metrics: On the Bigtable system insights page, check the following metrics : CPU utilization by change streams data in the metric cpu load by app profile by method by table .
- To read the changes from Bigtable, you need this role: Bigtable Administrator ( roles/bigtable.admin ) on the Bigtable instance that contains the table you plan to stream changes from To run the Dataflow job, you need these roles: Dataflow Developer ( roles/dataflow.developer ) on the project containing your Cloud resources Dataflow Worker ( roles/dataflow.worker ) on the project containing your Cloud resources Storage Object Admin ( roles/storage.objectAdmin ) on the Cloud Storage buckets that you plan to use For more information about granting roles, see Manage access .
- The version must be 2.48.0 or later. < dependencies > < dependency > < groupId>org . apache . beam < / groupId > < artifactId>beam - sdks - java - io - google - cloud - platform < / artifactId > < version>VERSION < / version > < / dependency > < / dependencies > Read the change stream To build a Dataflow pipeline to read your data change records, you configure the connector and then add transforms and sinks.

