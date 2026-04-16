---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:04.327Z"
product_name: "Datastream"
product_slug: "datastream"
feature_name: "Terraform support for stream resources"
feature_slug: "terraform-support-for-stream-resources"
latest_feature_date: "2023-02-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamClient"
  - "https://docs.cloud.google.com/datastream/docs/create-a-stream"
  - "https://docs.cloud.google.com/datastream/docs/implementing-datastream-dataflow-analytics"
keywords:
  - "terraform"
  - "for"
  - "stream"
  - "resources"
  - "supports"
  - "datastream"
---

# Terraform support for stream resources

Product: Datastream
Coverage: MEDIUM

## Step 02 Summary

Terraform supports Datastream stream resources.

## Extended Definition

Terraform supports Datastream stream resources.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient](https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamClient](https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamClient)
- [https://docs.cloud.google.com/datastream/docs/create-a-stream](https://docs.cloud.google.com/datastream/docs/create-a-stream)
- [https://docs.cloud.google.com/datastream/docs/implementing-datastream-dataflow-analytics](https://docs.cloud.google.com/datastream/docs/implementing-datastream-dataflow-analytics)

## Supporting Pages

### "Class DatastreamAsyncClient (1.18.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient](https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient)
- Source ID: `site-python-reference`
- Final score: 227
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description google.cloud.datastream v1.types.StopBackfillJobResponse Response for manually stop a backfill job for a specific stream object. stream object path stream object path ( project : str , location : str , stream : str , object : str ) - > str Returns a fully-qualified stream object string. stream path stream path ( project : str , location : str , stream : str ) - > str Returns a fully-qualified stream string. update connection profile update connection profile ( request : typing .
- CreateConnectionProfileRequest ( parent="parent value", connection profile id="connection profile id value", connection profile=connection profile, ) Make the request operation = client. create connection profile (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.datastream v1.types.CreateConnectionProfileRequest , dict]] The request object.
- CreatePrivateConnectionRequest ( parent="parent value", private connection id="private connection id value", private connection=private connection, ) Make the request operation = client. create private connection (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.datastream v1.types.CreatePrivateConnectionRequest , dict]] The request object.
- UpdateConnectionProfileRequest ( connection profile=connection profile, ) Make the request operation = client. update connection profile (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.datastream v1.types.UpdateConnectionProfileRequest , dict]] The request object.

### "Class DatastreamClient (1.18.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamClient](https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamClient)
- Source ID: `site-python-reference`
- Final score: 227
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description google.cloud.datastream v1.types.StopBackfillJobResponse Response for manually stop a backfill job for a specific stream object. stream object path stream object path ( project : str , location : str , stream : str , object : str ) - > str Returns a fully-qualified stream object string. stream path stream path ( project : str , location : str , stream : str ) - > str Returns a fully-qualified stream string. update connection profile update connection profile ( request : typing .
- CreateConnectionProfileRequest ( parent="parent value", connection profile id="connection profile id value", connection profile=connection profile, ) Make the request operation = client. create connection profile (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.datastream v1.types.CreateConnectionProfileRequest , dict] The request object.
- CreatePrivateConnectionRequest ( parent="parent value", private connection id="private connection id value", private connection=private connection, ) Make the request operation = client. create private connection (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.datastream v1.types.CreatePrivateConnectionRequest , dict] The request object.
- UpdateConnectionProfileRequest ( connection profile=connection profile, ) Make the request operation = client. update connection profile (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.datastream v1.types.UpdateConnectionProfileRequest , dict] The request object.

### Create a stream \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/create-a-stream](https://docs.cloud.google.com/datastream/docs/create-a-stream)
- Source ID: `site-docs-root`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- Datastream supports the Parquet file format and the Iceberg table format.
- Datastream supports two output formats: Avro and JSON.
- BigLake Iceberg tables destination In the Specify how Datastream should stream into a BigQuery dataset section, select how you want Datastream to create new schemas and tables from the Schema grouping drop-down: Dataset for each schema : Datastream creates a BigQuery dataset for each source schema, based on the schema name.
- BigQuery destination In the Specify how Datastream should stream into a BigQuery dataset section, select one of the following options from the Schema grouping drop-down: Dataset for each schema : Datastream creates a BigQuery dataset for each source schema, based on the schema name.

### Implement Datastream and Dataflow for analytics \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/implementing-datastream-dataflow-analytics](https://docs.cloud.google.com/datastream/docs/implementing-datastream-dataflow-analytics)
- Source ID: `site-docs-root`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- Clean up To avoid incurring charges to your Google Cloud account for the resources used in this tutorial, use the Google Cloud console to do the following: Delete your project, Datastream stream, and Datastream connection profiles.
- By cleaning up the resources that you created on Datastream, Dataflow, BigQuery, Pub/Sub, and Cloud Storage, you prevent the resources from taking up quota and you aren't billed for them in the future.
- Clean up the resources that you created on Datastream, Cloud Storage, Pub/Sub, Dataflow, and BigQuery so they don't take up quota and you aren't billed for them in the future.
- Datastream supports two output formats: Avro and JSON.

