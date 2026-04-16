---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:04.324Z"
product_name: "Datastream"
product_slug: "datastream"
feature_name: "Oracle SSL/TLS encryption"
feature_slug: "oracle-ssl-tls-encryption"
latest_feature_date: "2023-09-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/datastream/docs/faq"
  - "https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_connection_profiles"
  - "https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamClient"
keywords:
  - "oracle"
  - "ssl"
  - "tls"
  - "encryption"
  - "datastream"
  - "supports"
  - "for"
  - "sources"
---

# Oracle SSL/TLS encryption

Product: Datastream
Coverage: MEDIUM

## Step 02 Summary

Datastream supports SSL/TLS encryption for Oracle sources.

## Extended Definition

Datastream supports SSL/TLS encryption for Oracle sources.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/datastream/docs/faq](https://docs.cloud.google.com/datastream/docs/faq)
- [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_connection_profiles](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_connection_profiles)
- [https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient](https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamClient](https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamClient)

## Supporting Pages

### FAQ \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/faq](https://docs.cloud.google.com/datastream/docs/faq)
- Source ID: `site-docs-root`
- Final score: 228
- Re-rank relevance: N/A

Evidence snippets:
- Yes, Datastream supports the TCPS protocol for SSL/TLS-encrypted connections to Oracle sources.
- Datastream supports streaming data from Oracle, MySQL, PostgreSQL, AlloyDB for PostgreSQL, SQL Server, Salesforce, and MongoDB sources, both cloud-hosted and self-managed.
- Datastream enables seamless replication of data from relational database sources such as AlloyDB for PostgreSQL, PostgreSQL, MySQL, SQL Server and Oracle, as well as from Salesforce and MongoDB, directly into BigQuery.
- Does Datastream support Secure Sockets Layer (SSL) and Transport Layer Security (TLS) encryption?

### MCP Tools Reference: datastream \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_connection_profiles](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_connection_profiles)
- Source ID: `site-api-reference`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- This captures various options like no TLS encryption from client if server doesn't ask for it, only encryption without validation and both encryption as well as validation of server certificate. encryption setting can be only one of the following: encryptionNotEnforced object ( EncryptionNotEnforced ) If set, Datastream will not enforce encryption.
- This captures various SSL mode supported by PostgreSQL, which includes TLS encryption with server verification, TLS encryption with both server and client verification and no TLS encryption. encryption setting can be only one of the following: serverVerification object ( ServerVerification ) If this field is set, the communication will be encrypted with TLS encryption and the server identity will be authenticated. serverAndClientVerification object ( ServerAndClientVerification ) If this field is set, the communication will be encrypted with TLS encryption and both the server identity and the client identity will be authenticated.
- In case PostgresqlSslConfig is not set, the connection will use the default SSL mode, which is prefer (i.e. this mode will only use encryption if enabled from database side, otherwise will use unencrypted communication) PostgresqlSslConfig JSON representation { // Union field encryption setting can be only one of the following: "serverVerification" : { object ( ServerVerification ) } , "serverAndClientVerification" : { object ( ServerAndClientVerification ) } // End of list of possible types for union field encryption setting . } Fields Union field encryption setting .
- SqlServerSslConfig JSON representation { // Union field encryption setting can be only one of the following: "encryptionNotEnforced" : { object ( EncryptionNotEnforced ) } , "basicEncryption" : { object ( BasicEncryption ) } , "encryptionAndServerValidation" : { object ( EncryptionAndServerValidation ) } // End of list of possible types for union field encryption setting . } Fields Union field encryption setting .

### "Class DatastreamAsyncClient (1.18.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient](https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient)
- Source ID: `site-python-reference`
- Final score: 197
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description google.cloud.datastream v1.types.StopBackfillJobResponse Response for manually stop a backfill job for a specific stream object. stream object path stream object path ( project : str , location : str , stream : str , object : str ) - > str Returns a fully-qualified stream object string. stream path stream path ( project : str , location : str , stream : str ) - > str Returns a fully-qualified stream string. update connection profile update connection profile ( request : typing .
- CreateConnectionProfileRequest ( parent="parent value", connection profile id="connection profile id value", connection profile=connection profile, ) Make the request operation = client. create connection profile (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.datastream v1.types.CreateConnectionProfileRequest , dict]] The request object.
- CreatePrivateConnectionRequest ( parent="parent value", private connection id="private connection id value", private connection=private connection, ) Make the request operation = client. create private connection (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.datastream v1.types.CreatePrivateConnectionRequest , dict]] The request object.
- UpdateConnectionProfileRequest ( connection profile=connection profile, ) Make the request operation = client. update connection profile (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.datastream v1.types.UpdateConnectionProfileRequest , dict]] The request object.

### "Class DatastreamClient (1.18.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamClient](https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamClient)
- Source ID: `site-python-reference`
- Final score: 197
- Re-rank relevance: N/A

Evidence snippets:
- Exceptions Type Description google.auth.exceptions.MutualTLSChannelError If mutual TLS transport creation failed for any reason. exit exit ( type , value , traceback ) Releases underlying transport's resources.
- Returns Type Description google.cloud.datastream v1.types.StopBackfillJobResponse Response for manually stop a backfill job for a specific stream object. stream object path stream object path ( project : str , location : str , stream : str , object : str ) - > str Returns a fully-qualified stream object string. stream path stream path ( project : str , location : str , stream : str ) - > str Returns a fully-qualified stream string. update connection profile update connection profile ( request : typing .
- CreateConnectionProfileRequest ( parent="parent value", connection profile id="connection profile id value", connection profile=connection profile, ) Make the request operation = client. create connection profile (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.datastream v1.types.CreateConnectionProfileRequest , dict] The request object.
- CreatePrivateConnectionRequest ( parent="parent value", private connection id="private connection id value", private connection=private connection, ) Make the request operation = client. create private connection (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.datastream v1.types.CreatePrivateConnectionRequest , dict] The request object.

