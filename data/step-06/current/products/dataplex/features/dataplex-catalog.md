---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T06:18:42.601Z"
product_name: "Dataplex"
product_slug: "dataplex"
feature_name: "Dataplex Catalog"
feature_slug: "dataplex-catalog"
latest_feature_date: "2024-07-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataplex/docs/terraform"
  - "https://docs.cloud.google.com/dataplex/docs/enrich-entries-metadata"
  - "https://docs.cloud.google.com/dataplex/docs/ingest-custom-sources"
keywords:
  - "dataplex"
  - "catalog"
  - "is"
  - "platform"
  - "for"
  - "storing"
  - "managing"
  - "and"
---

# Dataplex Catalog

Product: Dataplex
Coverage: LOW

## Step 02 Summary

Dataplex Catalog is a platform for storing, managing, and accessing metadata.

## Extended Definition

Dataplex Catalog is a platform for storing, managing, and accessing metadata.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataplex/docs/terraform](https://docs.cloud.google.com/dataplex/docs/terraform)
- [https://docs.cloud.google.com/dataplex/docs/enrich-entries-metadata](https://docs.cloud.google.com/dataplex/docs/enrich-entries-metadata)
- [https://docs.cloud.google.com/dataplex/docs/ingest-custom-sources](https://docs.cloud.google.com/dataplex/docs/ingest-custom-sources)

## Supporting Pages

### "Provision Dataplex Universal Catalog resources with Terraform \_|\_ Knowledge\

- URL: [https://docs.cloud.google.com/dataplex/docs/terraform](https://docs.cloud.google.com/dataplex/docs/terraform)
- Source ID: `site-api-reference`
- Final score: 186
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Terraform modules and blueprints for Dataplex Universal Catalog Modules and blueprints help you automate provisioning and managing of Google Cloud resources at scale.
- The following table lists the Terraform resources available for Dataplex Universal Catalog: Service Terraform resources Data sources Dataplex Universal Catalog google dataplex aspect type google dataplex aspect type iam google dataplex asset google dataplex asset iam google dataplex datascan google dataplex datascan iam google dataplex entry google dataplex entry group google dataplex entry group iam google dataplex entry type google dataplex entry type iam google dataplex lake google dataplex lake iam google dataplex task google dataplex task iam google dataplex zone google dataplex zone iam google dataplex aspect type iam policy google dataplex asset iam policy google dataplex datascan iam policy google dataplex entry group iam policy google dataplex entry type iam policy google dataplex lake iam policy google dataplex task iam policy google dataplex zone iam policy Terraform-based guides for Dataplex Universal Catalog The following table lists Terraform-based how-to guides and tutorials for Dataplex Universal Catalog: Guide Details Manage data quality rules as code with Terraform This tutorial explains how to manage Dataplex Universal Catalog data quality rules as code with Terraform, Cloud Build, and GitHub.
- What's next Terraform code samples for Dataplex Universal Catalog Terraform on Google Cloud documentation Google Cloud provider documentation in HashiCorp Infrastructure as code for Google Cloud Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Data analytics Knowledge Catalog Reference Send feedback Provision Dataplex Universal Catalog resources with Terraform Stay organized with collections Save and categorize content based on your preferences.

### "Manage aspects and enrich metadata \_|\_ Knowledge Catalog \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataplex/docs/enrich-entries-metadata](https://docs.cloud.google.com/dataplex/docs/enrich-entries-metadata)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This client only needs to be created // once, and can be reused for multiple requests. try ( CatalogServiceClient client = CatalogServiceClient . create ()) { Entry entry = Entry . newBuilder () . setName ( EntryName . of ( projectId , location , entryGroupId , entryId ). toString ()) . setEntrySource ( EntrySource . newBuilder () . setDescription ( "updated description of the entry" ) . build ()) . putAllAspects ( Map . of ( "dataplex-types.global.generic" , Aspect . newBuilder () . setAspectType ( "projects/dataplex-types/locations/global/aspectTypes/generic" ) . setData ( Struct . newBuilder () // "Generic" Aspect Type have fields called "type" and "system. // The values below are a sample of possible options. . putFields ( "type" , Value . newBuilder () . setStringValue ( "updated example value" ) . build ()) . putFields ( "system" , Value . newBuilder () . setStringValue ( "updated example system" ) . build ()) . build ()) . build ())) . build (); // Update mask specifies which fields will be updated. // For more information on update masks, see: https://google.aip.dev/161 FieldMask updateMask = FieldMask . newBuilder (). addPaths ( "aspects" ). addPaths ( "entry source.description" ). build (); return client . updateEntry ( entry , updateMask ); } } } Python Python Before trying this sample, follow the Python setup instructions in the Knowledge Catalog quickstart using client libraries .
- Required roles To get the permissions that you need to create and manage aspect types and aspects, ask your administrator to grant you the following IAM roles on the resource: Full set of permissions on metadata resources in Knowledge Catalog, including aspect types and data aspects: Dataplex Catalog Admin ( roles/dataplex.catalogAdmin ) Create and manage metadata resources in Knowledge Catalog, including aspect types and data aspects: Dataplex Catalog Editor ( roles/dataplex.catalogEditor ) Full set of permissions on custom aspect types (except for permissions to use aspect types to create or edit entries): Dataplex Aspect Type Owner ( roles/dataplex.aspectTypeOwner ) View aspect types and IAM policies associated with them: Dataplex Catalog Viewer ( roles/dataplex.catalogViewer ) Use aspect types to create and modify entries with the corresponding aspects: Dataplex Aspect Type User ( roles/dataplex.aspectTypeUser ) Add aspects of some of the system aspect types, such as schema , schema-join , overview , contacts : Dataplex Entry and EntryLink Owner ( roles/dataplex.entryOwner ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- For more information, see Set up authentication for a local development environment . using Google.Api.Gax ; using Google.Api.Gax.ResourceNames ; using Google.Cloud.Dataplex.V1 ; using System ; public sealed partial class GeneratedCatalogServiceClientSnippets { /// <summary>Snippet for ListAspectTypes</summary> /// <remarks> /// This snippet has been automatically generated and should be regarded as a code template only. /// It will require modifications to work: /// - It may require correct/in-range values for request initialization. /// - It may require specifying regional endpoints when creating the service client as shown in /// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint. /// </remarks> public void ListAspectTypesRequestObject () { // Create client CatalogServiceClient catalogServiceClient = CatalogServiceClient .
- For more information, see Set up authentication for a local development environment . using Google.Cloud.Dataplex.V1 ; using Google.LongRunning ; using Google.Protobuf.WellKnownTypes ; public sealed partial class GeneratedCatalogServiceClientSnippets { /// <summary>Snippet for UpdateAspectType</summary> /// <remarks> /// This snippet has been automatically generated and should be regarded as a code template only. /// It will require modifications to work: /// - It may require correct/in-range values for request initialization. /// - It may require specifying regional endpoints when creating the service client as shown in /// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint. /// </remarks> public void UpdateAspectTypeRequestObject () { // Create client CatalogServiceClient catalogServiceClient = CatalogServiceClient .

### "Manage entries and ingest custom sources \_|\_ Knowledge Catalog \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataplex/docs/ingest-custom-sources](https://docs.cloud.google.com/dataplex/docs/ingest-custom-sources)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Required roles To get the permissions that you need to create and manage entries, ask your administrator to grant you the following IAM roles on the resource: Full set of permissions on entries, entry groups, and entry types: Dataplex Catalog Admin ( roles/dataplex.catalogAdmin ) Create and manage metadata resources in Knowledge Catalog, including entries, entry groups, and entry types: Dataplex Catalog Editor ( roles/dataplex.catalogEditor ) Full access to entry-related operations: Dataplex Entry and EntryLink Owner ( roles/dataplex.entryOwner ) View entries, entry groups, and entry types, and IAM policies associated with them: Dataplex Catalog Viewer ( roles/dataplex.catalogViewer ) Use aspect types to create aspects of those types, when creating custom entries: Dataplex Aspect Type User ( roles/dataplex.aspectTypeUser ) Create and manage entry groups: Dataplex Entry Group Owner ( roles/dataplex.entryGroupOwner ) Create and manage entry types: Dataplex Entry Type Owner ( roles/dataplex.entryTypeOwner ) Use entry types to create and modify entries of those types: Dataplex Entry Type User ( roles/dataplex.entryTypeUser ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- For more information, see Set up authentication for a local development environment . using Google.Api.Gax ; using Google.Api.Gax.ResourceNames ; using Google.Cloud.Dataplex.V1 ; using System ; public sealed partial class GeneratedCatalogServiceClientSnippets { /// <summary>Snippet for ListEntryGroups</summary> /// <remarks> /// This snippet has been automatically generated and should be regarded as a code template only. /// It will require modifications to work: /// - It may require correct/in-range values for request initialization. /// - It may require specifying regional endpoints when creating the service client as shown in /// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint. /// </remarks> public void ListEntryGroupsRequestObject () { // Create client CatalogServiceClient catalogServiceClient = CatalogServiceClient .
- For more information, see Set up authentication for a local development environment . using Google.Api.Gax ; using Google.Api.Gax.ResourceNames ; using Google.Cloud.Dataplex.V1 ; using System ; public sealed partial class GeneratedCatalogServiceClientSnippets { /// <summary>Snippet for ListEntryTypes</summary> /// <remarks> /// This snippet has been automatically generated and should be regarded as a code template only. /// It will require modifications to work: /// - It may require correct/in-range values for request initialization. /// - It may require specifying regional endpoints when creating the service client as shown in /// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint. /// </remarks> public void ListEntryTypesRequestObject () { // Create client CatalogServiceClient catalogServiceClient = CatalogServiceClient .
- For more information, see Set up authentication for a local development environment . using Google.Cloud.Dataplex.V1 ; using Google.LongRunning ; using Google.Protobuf.WellKnownTypes ; public sealed partial class GeneratedCatalogServiceClientSnippets { /// <summary>Snippet for UpdateEntryGroup</summary> /// <remarks> /// This snippet has been automatically generated and should be regarded as a code template only. /// It will require modifications to work: /// - It may require correct/in-range values for request initialization. /// - It may require specifying regional endpoints when creating the service client as shown in /// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint. /// </remarks> public void UpdateEntryGroupRequestObject () { // Create client CatalogServiceClient catalogServiceClient = CatalogServiceClient .

