---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T06:18:42.613Z"
product_name: "Dataplex"
product_slug: "dataplex"
feature_name: "Source and Sink plugins"
feature_slug: "source-and-sink-plugins"
latest_feature_date: "2022-12-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataplex/docs/release-notes"
  - "https://docs.cloud.google.com/dataplex/docs/terraform"
  - "https://docs.cloud.google.com/dataplex/docs/ingest-custom-sources"
keywords:
  - "source"
  - "and"
  - "sink"
  - "plugins"
  - "for"
  - "fusion"
  - "ingesting"
  - "processing"
---

# Source and Sink plugins

Product: Dataplex
Coverage: LOW

## Step 02 Summary

Source and Sink plugins for Cloud Data Fusion support ingesting and processing data with Dataplex integrations; Source and Sink plugins for Cloud Data Fusion support ingesting and processing data with Dataplex integrations.

## Extended Definition

Source and Sink plugins for Cloud Data Fusion support ingesting and processing data with Dataplex integrations; Source and Sink plugins for Cloud Data Fusion support ingesting and processing data with Dataplex integrations.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataplex/docs/release-notes](https://docs.cloud.google.com/dataplex/docs/release-notes)
- [https://docs.cloud.google.com/dataplex/docs/terraform](https://docs.cloud.google.com/dataplex/docs/terraform)
- [https://docs.cloud.google.com/dataplex/docs/ingest-custom-sources](https://docs.cloud.google.com/dataplex/docs/ingest-custom-sources)

## Supporting Pages

### Knowledge Catalog release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataplex/docs/release-notes](https://docs.cloud.google.com/dataplex/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- May 23, 2022 Feature The Dataplex Source and Sink plugins are available in Public Preview for ingesting and processing data in Cloud Data Fusion versions 6.6.0 and later.
- December 01, 2022 Feature Dataplex Source and Sink plugins are generally available ( GA ) in Cloud Data Fusion for ingesting and processing data.
- Dataplex fully automates the process of ingesting and indexing metadata, while performing source IAM permission checks, providing a governed single-pane-of-glass experience for data and AI artifacts across Cloud services.
- Dataplex fully automates the process of ingesting and indexing metadata, while performing source IAM permission checks, providing a governed single-pane-of-glass experience for data and AI artifacts across Cloud services.

### "Provision Dataplex Universal Catalog resources with Terraform \_|\_ Knowledge\

- URL: [https://docs.cloud.google.com/dataplex/docs/terraform](https://docs.cloud.google.com/dataplex/docs/terraform)
- Source ID: `site-api-reference`
- Final score: 108
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following table lists the Terraform resources available for Dataplex Universal Catalog: Service Terraform resources Data sources Dataplex Universal Catalog google dataplex aspect type google dataplex aspect type iam google dataplex asset google dataplex asset iam google dataplex datascan google dataplex datascan iam google dataplex entry google dataplex entry group google dataplex entry group iam google dataplex entry type google dataplex entry type iam google dataplex lake google dataplex lake iam google dataplex task google dataplex task iam google dataplex zone google dataplex zone iam google dataplex aspect type iam policy google dataplex asset iam policy google dataplex datascan iam policy google dataplex entry group iam policy google dataplex entry type iam policy google dataplex lake iam policy google dataplex task iam policy google dataplex zone iam policy Terraform-based guides for Dataplex Universal Catalog The following table lists Terraform-based how-to guides and tutorials for Dataplex Universal Catalog: Guide Details Manage data quality rules as code with Terraform This tutorial explains how to manage Dataplex Universal Catalog data quality rules as code with Terraform, Cloud Build, and GitHub.
- When you run terraform apply , Terraform uses the mapping in the state file to compare the existing infrastructure to the code, and make updates as necessary: If a resource object is defined in the configuration file, but doesn't exist in the state file, Terraform creates it.
- Home Documentation Data analytics Knowledge Catalog Reference Send feedback Provision Dataplex Universal Catalog resources with Terraform Stay organized with collections Save and categorize content based on your preferences.
- This page introduces you to using Terraform with Dataplex Universal Catalog, including an introduction to how Terraform works and some resources to help you get started using Terraform with Google Cloud.

### "Manage entries and ingest custom sources \_|\_ Knowledge Catalog \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataplex/docs/ingest-custom-sources](https://docs.cloud.google.com/dataplex/docs/ingest-custom-sources)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Required roles To get the permissions that you need to create and manage entries, ask your administrator to grant you the following IAM roles on the resource: Full set of permissions on entries, entry groups, and entry types: Dataplex Catalog Admin ( roles/dataplex.catalogAdmin ) Create and manage metadata resources in Knowledge Catalog, including entries, entry groups, and entry types: Dataplex Catalog Editor ( roles/dataplex.catalogEditor ) Full access to entry-related operations: Dataplex Entry and EntryLink Owner ( roles/dataplex.entryOwner ) View entries, entry groups, and entry types, and IAM policies associated with them: Dataplex Catalog Viewer ( roles/dataplex.catalogViewer ) Use aspect types to create aspects of those types, when creating custom entries: Dataplex Aspect Type User ( roles/dataplex.aspectTypeUser ) Create and manage entry groups: Dataplex Entry Group Owner ( roles/dataplex.entryGroupOwner ) Create and manage entry types: Dataplex Entry Type Owner ( roles/dataplex.entryTypeOwner ) Use entry types to create and modify entries of those types: Dataplex Entry Type User ( roles/dataplex.entryTypeUser ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- For more information, see Set up authentication for a local development environment . using Google.Api.Gax ; using Google.Api.Gax.ResourceNames ; using Google.Cloud.Dataplex.V1 ; using System ; public sealed partial class GeneratedCatalogServiceClientSnippets { /// <summary>Snippet for ListEntryGroups</summary> /// <remarks> /// This snippet has been automatically generated and should be regarded as a code template only. /// It will require modifications to work: /// - It may require correct/in-range values for request initialization. /// - It may require specifying regional endpoints when creating the service client as shown in /// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint. /// </remarks> public void ListEntryGroupsRequestObject () { // Create client CatalogServiceClient catalogServiceClient = CatalogServiceClient .
- For more information, see Set up authentication for a local development environment . using Google.Api.Gax ; using Google.Api.Gax.ResourceNames ; using Google.Cloud.Dataplex.V1 ; using System ; public sealed partial class GeneratedCatalogServiceClientSnippets { /// <summary>Snippet for ListEntryTypes</summary> /// <remarks> /// This snippet has been automatically generated and should be regarded as a code template only. /// It will require modifications to work: /// - It may require correct/in-range values for request initialization. /// - It may require specifying regional endpoints when creating the service client as shown in /// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint. /// </remarks> public void ListEntryTypesRequestObject () { // Create client CatalogServiceClient catalogServiceClient = CatalogServiceClient .
- For more information, see Set up authentication for a local development environment . using Google.Api.Gax.ResourceNames ; using Google.Cloud.Dataplex.V1 ; using Google.LongRunning ; public sealed partial class GeneratedCatalogServiceClientSnippets { /// <summary>Snippet for CreateEntryGroup</summary> /// <remarks> /// This snippet has been automatically generated and should be regarded as a code template only. /// It will require modifications to work: /// - It may require correct/in-range values for request initialization. /// - It may require specifying regional endpoints when creating the service client as shown in /// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint. /// </remarks> public void CreateEntryGroupRequestObject () { // Create client CatalogServiceClient catalogServiceClient = CatalogServiceClient .

