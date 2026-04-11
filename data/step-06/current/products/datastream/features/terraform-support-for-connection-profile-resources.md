---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:11:59.755Z"
product_name: "Datastream"
product_slug: "datastream"
feature_name: "Terraform support for connection profile resources"
feature_slug: "terraform-support-for-connection-profile-resources"
latest_feature_date: "2023-02-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/datastream/docs/create-connection-profiles"
  - "https://docs.cloud.google.com/datastream/docs/implementing-datastream-dataflow-analytics"
  - "https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.pagers.ListConnectionProfilesAsyncPager"
keywords:
  - "terraform"
  - "for"
  - "connection"
  - "profile"
  - "resources"
  - "supports"
  - "datastream"
---

# Terraform support for connection profile resources

Product: Datastream
Coverage: LOW

## Step 02 Summary

Terraform supports Datastream connection profile resources.

## Extended Definition

Terraform supports Datastream connection profile resources.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/datastream/docs/create-connection-profiles](https://docs.cloud.google.com/datastream/docs/create-connection-profiles)
- [https://docs.cloud.google.com/datastream/docs/implementing-datastream-dataflow-analytics](https://docs.cloud.google.com/datastream/docs/implementing-datastream-dataflow-analytics)
- [https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.pagers.ListConnectionProfilesAsyncPager](https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.pagers.ListConnectionProfilesAsyncPager)

## Supporting Pages

### Create connection profiles \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/create-connection-profiles](https://docs.cloud.google.com/datastream/docs/create-connection-profiles)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In this section, you learn how to create the following connection profiles: A connection profile to an Oracle , a MySQL , SQL Server , PostgreSQL , MongoDB and a Salesforce source A connection profile to destination datasets in BigQuery A connection profile to a destination bucket in Cloud Storage By creating these connection profiles, Datastream can transfer data from the source database into the destination.
- Although the region that you select for your connection profile is independent of the location type that you selected for your BigQuery destination dataset, we recommend keeping all resources for the stream in the same region as your source data for cost and performance optimization.
- If you select this network connectivity method, then configure your source database to allow incoming connections from the Datastream public IP addresses for the region that you specified for the connection profile.
- If you select this network connectivity method, then configure your source database to allow incoming connections from the Datastream public IP addresses for the region that you specified for the connection profile.

### Implement Datastream and Dataflow for analytics \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/implementing-datastream-dataflow-analytics](https://docs.cloud.google.com/datastream/docs/implementing-datastream-dataflow-analytics)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Clean up To avoid incurring charges to your Google Cloud account for the resources used in this tutorial, use the Google Cloud console to do the following: Delete your project, Datastream stream, and Datastream connection profiles.
- Datastream uses the information defined in the connection profiles to connect to both the source and the destination so that it can stream data from the source database into your destination bucket in Cloud Storage.
- You're also configuring the Pub/Sub notifications to only listen to the Datastream output path which you define in the Create a destination connection profile for Cloud Storage step.
- In the Connection profile path prefix field, provide a prefix for the path that you want to append to the bucket name when Datastream streams data to the destination.

### "Class ListConnectionProfilesAsyncPager (1.18.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.pagers.ListConnectionProfilesAsyncPager](https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.pagers.ListConnectionProfilesAsyncPager)
- Source ID: `site-python-reference`
- Final score: 161
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.datastream v1.types.ListConnectionProfilesRequest The initial request object. response google.cloud.datastream v1.types.ListConnectionProfilesResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- ListConnectionProfilesResponse ], ], request : google . cloud . datastream v1 . types . datastream .
- ListConnectionProfilesResponse ], ], request : google . cloud . datastream v1 . types . datastream .
- ListConnectionProfilesRequest , response : google . cloud . datastream v1 . types . datastream .

