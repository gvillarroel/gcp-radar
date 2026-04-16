---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:04.327Z"
product_name: "Datastream"
product_slug: "datastream"
feature_name: "Terraform support for private connectivity resources"
feature_slug: "terraform-support-for-private-connectivity-resources"
latest_feature_date: "2023-02-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/datastream/docs/create-a-private-connectivity-configuration"
  - "https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamClient"
  - "https://docs.cloud.google.com/datastream/docs/use-the-datastream-api"
keywords:
  - "terraform"
  - "for"
  - "private"
  - "connectivity"
  - "resources"
  - "supports"
  - "datastream"
---

# Terraform support for private connectivity resources

Product: Datastream
Coverage: MEDIUM

## Step 02 Summary

Terraform supports Datastream private connectivity resources.

## Extended Definition

Terraform supports Datastream private connectivity resources.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/datastream/docs/create-a-private-connectivity-configuration](https://docs.cloud.google.com/datastream/docs/create-a-private-connectivity-configuration)
- [https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient](https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamClient](https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamClient)
- [https://docs.cloud.google.com/datastream/docs/use-the-datastream-api](https://docs.cloud.google.com/datastream/docs/use-the-datastream-api)

## Supporting Pages

### "Create a private connectivity configuration \_|\_ Datastream \_|\_ Google\

- URL: [https://docs.cloud.google.com/datastream/docs/create-a-private-connectivity-configuration](https://docs.cloud.google.com/datastream/docs/create-a-private-connectivity-configuration)
- Source ID: `site-docs-root`
- Final score: 213
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Datastream automatically deletes private connectivity configurations that haven't been used for a period of six consecutive months.
- This type of configuration contains information that Datastream uses to communicate with a data source over a private network (internally within Google Cloud, or with external sources connected over VPN or Interconnect).
- Home Documentation Data analytics Datastream Guides Send feedback Create a private connectivity configuration Stay organized with collections Save and categorize content based on your preferences.
- You need to provide the private IP addresses when setting up the private connectivity configuration because Datastream doesn't support Domain Name System (DNS) resolution in private connections.

### "Class DatastreamAsyncClient (1.18.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient](https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient)
- Source ID: `site-python-reference`
- Final score: 195
- Re-rank relevance: N/A

Evidence snippets:
- The result type for the operation will be PrivateConnection The PrivateConnection resource is used to establish private connectivity between Datastream and a customer's network. create route create route ( request : typing .
- CreatePrivateConnectionRequest ( parent="parent value", private connection id="private connection id value", private connection=private connection, ) Make the request operation = client. create private connection (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.datastream v1.types.CreatePrivateConnectionRequest , dict]] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import datastream v1 async def sample create private connection(): Create a client client = datastream v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import datastream v1 async def sample delete private connection(): Create a client client = datastream v1 .

### "Class DatastreamClient (1.18.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamClient](https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamClient)
- Source ID: `site-python-reference`
- Final score: 195
- Re-rank relevance: N/A

Evidence snippets:
- The result type for the operation will be PrivateConnection The PrivateConnection resource is used to establish private connectivity between Datastream and a customer's network. create route create route ( request : typing .
- CreatePrivateConnectionRequest ( parent="parent value", private connection id="private connection id value", private connection=private connection, ) Make the request operation = client. create private connection (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.datastream v1.types.CreatePrivateConnectionRequest , dict] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import datastream v1 def sample create private connection(): Create a client client = datastream v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import datastream v1 def sample delete private connection(): Create a client client = datastream v1 .

### Use the Datastream API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/use-the-datastream-api](https://docs.cloud.google.com/datastream/docs/use-the-datastream-api)
- Source ID: `site-api-reference`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- These permissions include: Datastream Admin: With this permission, a user gains access to all resources of Datastream used to manage private connectivity configurations, connection profiles, and streams.
- Datastream provides a REST API for administering your private connectivity configurations, connection profiles, and streams programmatically.
- API examples You can see examples of using the Datastream API with cURL in the following pages of the Datastream documentation: Manage private connectivity configurations Manage connection profiles Manage streams Provide JSON data from a file When you use the API with cURL, you provide property values using the command line.
- Datastream Viewer: With this permission, a user has read-only access to private connectivity configurations, connection profiles, and streams in Datastream.

