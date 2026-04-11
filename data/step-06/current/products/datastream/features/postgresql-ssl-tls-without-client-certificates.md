---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:11:59.746Z"
product_name: "Datastream"
product_slug: "datastream"
feature_name: "PostgreSQL SSL/TLS without client certificates"
feature_slug: "postgresql-ssl-tls-without-client-certificates"
latest_feature_date: "2023-11-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_connection_profiles"
  - "https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamClient"
keywords:
  - "postgresql"
  - "ssl"
  - "tls"
  - "without"
  - "client"
  - "certificates"
  - "datastream"
  - "supports"
---

# PostgreSQL SSL/TLS without client certificates

Product: Datastream
Coverage: LOW

## Step 02 Summary

Datastream supports SSL/TLS encryption for PostgreSQL source connections that do not require client certificates.

## Extended Definition

Datastream supports SSL/TLS encryption for PostgreSQL source connections that do not require client certificates.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_connection_profiles](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_connection_profiles)
- [https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient](https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamClient](https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamClient)

## Supporting Pages

### MCP Tools Reference: datastream \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_connection_profiles](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_connection_profiles)
- Source ID: `site-api-reference`
- Final score: 174
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This value will be used during the SSL/TLS handshake, allowing the PostgreSQL server to authenticate the client's identity, i.e. identity of the Datastream. caCertificate string Required.
- This captures various SSL mode supported by PostgreSQL, which includes TLS encryption with server verification, TLS encryption with both server and client verification and no TLS encryption. encryption setting can be only one of the following: serverVerification object ( ServerVerification ) If this field is set, the communication will be encrypted with TLS encryption and the server identity will be authenticated. serverAndClientVerification object ( ServerAndClientVerification ) If this field is set, the communication will be encrypted with TLS encryption and both the server identity and the client identity will be authenticated.
- This captures various options like no TLS encryption from client if server doesn't ask for it, only encryption without validation and both encryption as well as validation of server certificate. encryption setting can be only one of the following: encryptionNotEnforced object ( EncryptionNotEnforced ) If set, Datastream will not enforce encryption.
- In case PostgresqlSslConfig is not set, the connection will use the default SSL mode, which is prefer (i.e. this mode will only use encryption if enabled from database side, otherwise will use unencrypted communication) PostgresqlSslConfig JSON representation { // Union field encryption setting can be only one of the following: "serverVerification" : { object ( ServerVerification ) } , "serverAndClientVerification" : { object ( ServerAndClientVerification ) } // End of list of possible types for union field encryption setting . } Fields Union field encryption setting .

### "Class DatastreamAsyncClient (1.18.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient](https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient)
- Source ID: `site-python-reference`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- CreateConnectionProfileRequest ( parent="parent value", connection profile id="connection profile id value", connection profile=connection profile, ) Make the request operation = client. create connection profile (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.datastream v1.types.CreateConnectionProfileRequest , dict]] The request object.
- CreatePrivateConnectionRequest ( parent="parent value", private connection id="private connection id value", private connection=private connection, ) Make the request operation = client. create private connection (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.datastream v1.types.CreatePrivateConnectionRequest , dict]] The request object.
- UpdateConnectionProfileRequest ( connection profile=connection profile, ) Make the request operation = client. update connection profile (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.datastream v1.types.UpdateConnectionProfileRequest , dict]] The request object.
- Only if this property is not set and transport was not explicitly provided, the endpoint is determined by the GOOGLE API USE MTLS ENDPOINT environment variable, which have one of the following values: "always" (always use the default mTLS endpoint), "never" (always use the default regular endpoint) and "auto" (auto-switch to the default mTLS endpoint if client certificate is present; this is the default value).

### "Class DatastreamClient (1.18.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamClient](https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamClient)
- Source ID: `site-python-reference`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- CreateConnectionProfileRequest ( parent="parent value", connection profile id="connection profile id value", connection profile=connection profile, ) Make the request operation = client. create connection profile (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.datastream v1.types.CreateConnectionProfileRequest , dict] The request object.
- CreatePrivateConnectionRequest ( parent="parent value", private connection id="private connection id value", private connection=private connection, ) Make the request operation = client. create private connection (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.datastream v1.types.CreatePrivateConnectionRequest , dict] The request object.
- Only if this property is not set and transport was not explicitly provided, the endpoint is determined by the GOOGLE API USE MTLS ENDPOINT environment variable, which have one of the following values: "always" (always use the default mTLS endpoint), "never" (always use the default regular endpoint) and "auto" (auto-switch to the default mTLS endpoint if client certificate is present; this is the default value).
- The API endpoint is determined in the following order: (1) if client options.api endpoint if provided, use the provided one. (2) if GOOGLE API USE CLIENT CERTIFICATE environment variable is "always", use the default mTLS endpoint; if the environment variable is "never", use the default API endpoint; otherwise if client cert source exists, use the default mTLS endpoint, otherwise use the default API endpoint.

