---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:04.314Z"
product_name: "Datastream"
product_slug: "datastream"
feature_name: "Salesforce source support"
feature_slug: "salesforce-source-support"
latest_feature_date: "2025-09-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamClient"
  - "https://docs.cloud.google.com/datastream/docs/configure-salesforce-org"
  - "https://docs.cloud.google.com/datastream/docs/implementing-datastream-dataflow-analytics"
keywords:
  - "salesforce"
  - "source"
  - "datastream"
  - "can"
  - "use"
  - "as"
  - "for"
  - "streaming"
---

# Salesforce source support

Product: Datastream
Coverage: MEDIUM

## Step 02 Summary

Datastream can use Salesforce as a source for streaming data; Datastream can use Salesforce as a source for streaming data.

## Extended Definition

Datastream can use Salesforce as a source for streaming data; Datastream can use Salesforce as a source for streaming data.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient](https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamClient](https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamClient)
- [https://docs.cloud.google.com/datastream/docs/configure-salesforce-org](https://docs.cloud.google.com/datastream/docs/configure-salesforce-org)
- [https://docs.cloud.google.com/datastream/docs/implementing-datastream-dataflow-analytics](https://docs.cloud.google.com/datastream/docs/implementing-datastream-dataflow-analytics)

## Supporting Pages

### "Class DatastreamAsyncClient (1.18.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient](https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient)
- Source ID: `site-python-reference`
- Final score: 336
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Returns Type Description google.cloud.datastream v1.types.Route The route resource is the child of the private connection resource, used for defining a route for a private connection. get stream get stream ( request : typing .
- The result type for the operation will be PrivateConnection The PrivateConnection resource is used to establish private connectivity between Datastream and a customer's network. create route create route ( request : typing .
- Returns Type Description google.cloud.datastream v1.types.ConnectionProfile A set of reusable connection configurations to be used as a source or destination for a stream. get location get location ( request : typing .
- Returns Type Description google.cloud.datastream v1.types.PrivateConnection The PrivateConnection resource is used to establish private connectivity between Datastream and a customer's network. get route get route ( request : typing .

### "Class DatastreamClient (1.18.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamClient](https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamClient)
- Source ID: `site-python-reference`
- Final score: 312
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Returns Type Description google.cloud.datastream v1.types.Route The route resource is the child of the private connection resource, used for defining a route for a private connection. get stream get stream ( request : typing .
- The result type for the operation will be PrivateConnection The PrivateConnection resource is used to establish private connectivity between Datastream and a customer's network. create route create route ( request : typing .
- Returns Type Description google.cloud.datastream v1.types.ConnectionProfile A set of reusable connection configurations to be used as a source or destination for a stream. get location get location ( request : typing .
- Returns Type Description google.cloud.datastream v1.types.PrivateConnection The PrivateConnection resource is used to establish private connectivity between Datastream and a customer's network. get route get route ( request : typing .

### "Configure a Salesforce organization for CDC \_|\_ Datastream \_|\_ Google\

- URL: [https://docs.cloud.google.com/datastream/docs/configure-salesforce-org](https://docs.cloud.google.com/datastream/docs/configure-salesforce-org)
- Source ID: `site-docs-root-2`
- Final score: 295
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before you begin Before you start configuring Salesforce for use with Datastream, you need to: Have access to an active Salesforce organization Have knowledge of how to navigate and change settings in Salesforce Have knowledge of how to create users and profiles in Salesforce Configure a Salesforce organization for use with Datastream To establish a connection between your Salesforce org and Datastream, you need to authenticate either by using a username and a password, or by using the OAuth 2.0 client credentials flow.
- If you prefer to use a connected app to authenticate your Salesforce instance in Datastream, perform the following steps: Create a connected app.
- Make sure that the user profile has the API Enabled permission so that the user can use both the Salesforce REST API and Bulk API 2.0 .
- Make sure that your connected app can access the Salesforce APIs with the Datastream IP addresses.

### Implement Datastream and Dataflow for analytics \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/implementing-datastream-dataflow-analytics](https://docs.cloud.google.com/datastream/docs/implementing-datastream-dataflow-analytics)
- Source ID: `site-docs-root`
- Final score: 276
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Datastream uses the information defined in the connection profiles to connect to both the source and the destination so that it can stream data from the source database into your destination bucket in Cloud Storage.
- Configure information about the source database for the stream In this section, you configure information about the source database for the stream by specifying the tables and schemas in the source database that Datastream: Can transfer into the destination.
- Clean up To avoid incurring charges to your Google Cloud account for the resources used in this tutorial, use the Google Cloud console to do the following: Delete your project, Datastream stream, and Datastream connection profiles.
- Use the Objects to include menu to specify the tables and schemas in your source database that Datastream can transfer into a folder in the destination bucket in Cloud Storage.

