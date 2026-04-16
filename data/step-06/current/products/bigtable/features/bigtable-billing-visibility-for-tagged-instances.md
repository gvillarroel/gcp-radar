---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:27.986Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Bigtable billing visibility for tagged instances"
feature_slug: "bigtable-billing-visibility-for-tagged-instances"
latest_feature_date: "2025-02-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/creating-managing-labels"
  - "https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient"
keywords:
  - "applied"
  - "tagged"
  - "visibility"
  - "billing"
  - "tags"
  - "instances"
---

# Bigtable billing visibility for tagged instances

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

Tags applied to Bigtable instances are now included in Cloud Billing data to improve usage and spend visibility.

## Extended Definition

Tags applied to Bigtable instances are now included in Cloud Billing data to improve usage and spend visibility.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/creating-managing-labels](https://docs.cloud.google.com/bigtable/docs/creating-managing-labels)
- [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient)

## Supporting Pages

### Create and manage instance labels \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/creating-managing-labels](https://docs.cloud.google.com/bigtable/docs/creating-managing-labels)
- Source ID: `site-docs-reference-2`
- Final score: 83
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Common uses of labels Here are some common use cases for labels: Team or cost center labels : Add labels based on team or cost center to distinguish instances owned by different teams (for example, team:research and team:analytics ).
- Remove a label from an instance To remove a label from a Bigtable instance using the Google Cloud console: Open the list of Bigtable instances in the Google Cloud console.
- Tags provide a way to conditionally allow or deny policies based on whether a resource has a specific tag, by providing fine-grained control over policies.
- To add or update labels for a Bigtable instance using the Google Cloud console: Open the list of Bigtable instances in the Google Cloud console.

### "Class BigtableTableAdminAsyncClient (2.35.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient)
- Source ID: `site-python-reference`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description google.cloud.bigtable admin v2.types.CheckConsistencyResponse Response message for google.bigtable.admin.v2.BigtableTableAdmin.CheckConsistency][google.bigtable.admin.v2.BigtableTableAdmin.CheckConsistency] cluster path cluster path ( project : str , instance : str , cluster : str ) - > str Returns a fully-qualified cluster string. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. copy backup copy backup ( request : typing .
- Values are of the form projects/{project}/instances/{instance}/tables/{table}/schemaBundles/{schema bundle} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Values are of the form projects/{project}/instances/{instance}/tables/{table}/schemaBundles/{schema bundle} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Values are of the form projects/{project}/instances/{instance}/tables/{table}/schemaBundles/{schema bundle} This corresponds to the schema bundle field on the request instance; if request is provided, this should not be set. update mask google.protobuf.field mask pb2.FieldMask Optional.

### "Class BigtableTableAdminClient (2.35.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient)
- Source ID: `site-python-reference`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description google.cloud.bigtable admin v2.types.CheckConsistencyResponse Response message for google.bigtable.admin.v2.BigtableTableAdmin.CheckConsistency][google.bigtable.admin.v2.BigtableTableAdmin.CheckConsistency] cluster path cluster path ( project : str , instance : str , cluster : str ) - > str Returns a fully-qualified cluster string. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. copy backup copy backup ( request : typing .
- Values are of the form projects/{project}/instances/{instance}/tables/{table}/schemaBundles/{schema bundle} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Values are of the form projects/{project}/instances/{instance}/tables/{table}/schemaBundles/{schema bundle} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Values are of the form projects/{project}/instances/{instance}/tables/{table}/schemaBundles/{schema bundle} This corresponds to the schema bundle field on the request instance; if request is provided, this should not be set. update mask google.protobuf.field mask pb2.FieldMask Optional.

