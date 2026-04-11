---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T06:18:42.597Z"
product_name: "Dataplex"
product_slug: "dataplex"
feature_name: "Aspect-only metadata import"
feature_slug: "aspect-only-metadata-import"
latest_feature_date: "2025-01-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataplex/docs/import-metadata"
  - "https://docs.cloud.google.com/python/docs/reference/dataplex/latest/google.cloud.dataplex_v1.services.catalog_service.CatalogServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/dataplex/latest/google.cloud.dataplex_v1.services.catalog_service.CatalogServiceClient"
keywords:
  - "aspect"
  - "only"
  - "metadata"
  - "import"
  - "dataplex"
  - "catalog"
  - "supports"
  - "jobs"
---

# Aspect-only metadata import

Product: Dataplex
Coverage: LOW

## Step 02 Summary

Dataplex Catalog supports metadata import jobs that update aspects without modifying other entry metadata.

## Extended Definition

Dataplex Catalog supports metadata import jobs that update aspects without modifying other entry metadata.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataplex/docs/import-metadata](https://docs.cloud.google.com/dataplex/docs/import-metadata)
- [https://docs.cloud.google.com/python/docs/reference/dataplex/latest/google.cloud.dataplex_v1.services.catalog_service.CatalogServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataplex/latest/google.cloud.dataplex_v1.services.catalog_service.CatalogServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/dataplex/latest/google.cloud.dataplex_v1.services.catalog_service.CatalogServiceClient](https://docs.cloud.google.com/python/docs/reference/dataplex/latest/google.cloud.dataplex_v1.services.catalog_service.CatalogServiceClient)

## Supporting Pages

### "Import metadata using a custom pipeline \_|\_ Knowledge Catalog \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataplex/docs/import-metadata](https://docs.cloud.google.com/dataplex/docs/import-metadata)
- Source ID: `site-docs-root-2`
- Final score: 226
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To get the permissions that you need to manage metadata import jobs, ask your administrator to grant you the following IAM roles: Modify entries and their aspects in a full entry sync metadata job: Dataplex Entry Type User ( roles/dataplex.entryTypeUser ) on the entry type or the project where the entry type is defined Dataplex Aspect Type User ( roles/dataplex.aspectTypeUser ) on the aspect type or the project where the aspect type is defined Modify required aspects in an aspect-only metadata job: Dataplex Entry Type User ( roles/dataplex.entryTypeUser ) on the entry type or the project where the entry type is defined Dataplex Aspect Type User ( roles/dataplex.aspectTypeUser ) on the aspect type or the project where the aspect type is defined Modify optional aspects in an aspect-only metadata job: Dataplex Aspect Type User ( roles/dataplex.aspectTypeUser ) on the aspect type or the project where the aspect type is defined.
- For more information, see Set up authentication for a local development environment . using Google.Api.Gax ; using Google.Api.Gax.ResourceNames ; using Google.Cloud.Dataplex.V1 ; using System ; public sealed partial class GeneratedCatalogServiceClientSnippets { /// <summary>Snippet for ListMetadataJobs</summary> /// <remarks> /// This snippet has been automatically generated and should be regarded as a code template only. /// It will require modifications to work: /// - It may require correct/in-range values for request initialization. /// - It may require specifying regional endpoints when creating the service client as shown in /// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint. /// </remarks> public void ListMetadataJobsRequestObject () { // Create client CatalogServiceClient catalogServiceClient = CatalogServiceClient .
- HTTP method and URL: POST https://dataplex.googleapis.com/v1/projects/ PROJECT NUMBER /locations/ LOCATION ID /metadataJobs?metadataJobId= METADATA JOB ID Request JSON body: { "type": "IMPORT", "import spec": { "source storage uri": "gs:// CLOUD STORAGE URI /", "scope": { "entryGroups": [ " ENTRY GROUP " ], "entry types": [ " ENTRY TYPE " ], "aspect types": [ " ASPECT TYPE " ] }, "entry sync mode": " ENTRY SYNC MODE ", "aspect sync mode": "INCREMENTAL", "log level": " LOG LEVEL " } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- For more information, see Set up authentication for a local development environment . require "google/cloud/dataplex/v1" Snippet for the list metadata jobs call in the CatalogService service This snippet has been automatically generated and should be regarded as a code template only.

### "Class CatalogServiceAsyncClient (2.16.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataplex/latest/google.cloud.dataplex_v1.services.catalog_service.CatalogServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataplex/latest/google.cloud.dataplex_v1.services.catalog_service.CatalogServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 196
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataplex v1 async def sample list metadata jobs(): Create a client client = dataplex v1 .
- MetadataJob () metadata job.import spec.scope.entry groups = ['entry groups value1', 'entry groups value2'] metadata job.import spec.scope.entry types = ['entry types value1', 'entry types value2'] metadata job.import spec.entry sync mode = "NONE" metadata job.import spec.aspect sync mode = "NONE" metadata job.type = "EXPORT" request = dataplex v1 .
- Returns Type Description google.cloud.dataplex v1.services.catalog service.pagers.ListMetadataJobsAsyncPager List metadata jobs response.
- For example, use a metadata job to import metadata from a third-party system into Dataplex Universal Catalog.

### "Class CatalogServiceClient (2.16.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataplex/latest/google.cloud.dataplex_v1.services.catalog_service.CatalogServiceClient](https://docs.cloud.google.com/python/docs/reference/dataplex/latest/google.cloud.dataplex_v1.services.catalog_service.CatalogServiceClient)
- Source ID: `site-python-reference`
- Final score: 196
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataplex v1 def sample list metadata jobs(): Create a client client = dataplex v1 .
- MetadataJob () metadata job.import spec.scope.entry groups = ['entry groups value1', 'entry groups value2'] metadata job.import spec.scope.entry types = ['entry types value1', 'entry types value2'] metadata job.import spec.entry sync mode = "NONE" metadata job.import spec.aspect sync mode = "NONE" metadata job.type = "EXPORT" request = dataplex v1 .
- Returns Type Description google.cloud.dataplex v1.services.catalog service.pagers.ListMetadataJobsPager List metadata jobs response.
- For example, use a metadata job to import metadata from a third-party system into Dataplex Universal Catalog.

