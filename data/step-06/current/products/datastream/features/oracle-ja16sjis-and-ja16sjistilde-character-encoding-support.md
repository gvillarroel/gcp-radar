---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:11:59.745Z"
product_name: "Datastream"
product_slug: "datastream"
feature_name: "Oracle JA16SJIS and JA16SJISTILDE character encoding support"
feature_slug: "oracle-ja16sjis-and-ja16sjistilde-character-encoding-support"
latest_feature_date: "2024-01-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/datastream/docs/release-notes"
  - "https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamClient"
keywords:
  - "oracle"
  - "ja16sjis"
  - "and"
  - "ja16sjistilde"
  - "character"
  - "encoding"
  - "datastream"
  - "supports"
---

# Oracle JA16SJIS and JA16SJISTILDE character encoding support

Product: Datastream
Coverage: LOW

## Step 02 Summary

Datastream supports the JA16SJIS and JA16SJISTILDE character encodings for Oracle sources.

## Extended Definition

Datastream supports the JA16SJIS and JA16SJISTILDE character encodings for Oracle sources.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/datastream/docs/release-notes](https://docs.cloud.google.com/datastream/docs/release-notes)
- [https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient](https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamClient](https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamClient)

## Supporting Pages

### Datastream release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/release-notes](https://docs.cloud.google.com/datastream/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- January 23, 2024 Feature Datastream now supports the JA16SJIS and JA16SJISTILDE character encodings for Oracle sources.
- Datastream supports streaming from Oracle and MySQL databases into Cloud Storage.
- June 16, 2022 Feature Datastream now supports the use of tags on its resources, which include private connectivity configurations, connection profiles, and streams.
- June 23, 2025 Feature Datastream now supports BigLake Iceberg tables as a destination both in the Google Cloud console and the Datastream API.

### "Class DatastreamAsyncClient (1.18.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient](https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient)
- Source ID: `site-python-reference`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- CreateConnectionProfileRequest ( parent="parent value", connection profile id="connection profile id value", connection profile=connection profile, ) Make the request operation = client. create connection profile (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.datastream v1.types.CreateConnectionProfileRequest , dict]] The request object.
- CreatePrivateConnectionRequest ( parent="parent value", private connection id="private connection id value", private connection=private connection, ) Make the request operation = client. create private connection (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.datastream v1.types.CreatePrivateConnectionRequest , dict]] The request object.
- UpdateConnectionProfileRequest ( connection profile=connection profile, ) Make the request operation = client. update connection profile (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.datastream v1.types.UpdateConnectionProfileRequest , dict]] The request object.
- CreateStreamRequest ( parent="parent value", stream id="stream id value", stream=stream, ) Make the request operation = client. create stream (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.datastream v1.types.CreateStreamRequest , dict]] The request object.

### "Class DatastreamClient (1.18.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamClient](https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamClient)
- Source ID: `site-python-reference`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- CreateConnectionProfileRequest ( parent="parent value", connection profile id="connection profile id value", connection profile=connection profile, ) Make the request operation = client. create connection profile (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.datastream v1.types.CreateConnectionProfileRequest , dict] The request object.
- CreatePrivateConnectionRequest ( parent="parent value", private connection id="private connection id value", private connection=private connection, ) Make the request operation = client. create private connection (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.datastream v1.types.CreatePrivateConnectionRequest , dict] The request object.
- UpdateConnectionProfileRequest ( connection profile=connection profile, ) Make the request operation = client. update connection profile (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.datastream v1.types.UpdateConnectionProfileRequest , dict] The request object.
- CreateStreamRequest ( parent="parent value", stream id="stream id value", stream=stream, ) Make the request operation = client. create stream (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.datastream v1.types.CreateStreamRequest , dict] The request object.

