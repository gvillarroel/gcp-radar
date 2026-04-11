---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T06:18:42.600Z"
product_name: "Dataplex"
product_slug: "dataplex"
feature_name: "Metadata import"
feature_slug: "metadata-import"
latest_feature_date: "2024-07-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataplex/docs/import-metadata"
  - "https://docs.cloud.google.com/dataplex/docs/develop-custom-connector"
  - "https://docs.cloud.google.com/dataplex/docs/enrich-entries-metadata"
keywords:
  - "metadata"
  - "import"
  - "dataplex"
  - "catalog"
  - "supports"
  - "importing"
  - "entries"
  - "and"
---

# Metadata import

Product: Dataplex
Coverage: LOW

## Step 02 Summary

Dataplex Catalog supports importing entries and their aspects as metadata.

## Extended Definition

Dataplex Catalog supports importing entries and their aspects as metadata.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataplex/docs/import-metadata](https://docs.cloud.google.com/dataplex/docs/import-metadata)
- [https://docs.cloud.google.com/dataplex/docs/develop-custom-connector](https://docs.cloud.google.com/dataplex/docs/develop-custom-connector)
- [https://docs.cloud.google.com/dataplex/docs/enrich-entries-metadata](https://docs.cloud.google.com/dataplex/docs/enrich-entries-metadata)

## Supporting Pages

### "Import metadata using a custom pipeline \_|\_ Knowledge Catalog \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataplex/docs/import-metadata](https://docs.cloud.google.com/dataplex/docs/import-metadata)
- Source ID: `site-docs-root-2`
- Final score: 224
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To get the permissions that you need to manage metadata import jobs, ask your administrator to grant you the following IAM roles: Modify entries and their aspects in a full entry sync metadata job: Dataplex Entry Type User ( roles/dataplex.entryTypeUser ) on the entry type or the project where the entry type is defined Dataplex Aspect Type User ( roles/dataplex.aspectTypeUser ) on the aspect type or the project where the aspect type is defined Modify required aspects in an aspect-only metadata job: Dataplex Entry Type User ( roles/dataplex.entryTypeUser ) on the entry type or the project where the entry type is defined Dataplex Aspect Type User ( roles/dataplex.aspectTypeUser ) on the aspect type or the project where the aspect type is defined Modify optional aspects in an aspect-only metadata job: Dataplex Aspect Type User ( roles/dataplex.aspectTypeUser ) on the aspect type or the project where the aspect type is defined.
- Comparison logic Knowledge Catalog determines which entries and aspects to modify by comparing the values and timestamps that you provide in the metadata import file with the values and timestamps that exist in your project.
- This document describes how to import metadata from a third-party system into Knowledge Catalog (formerly Dataplex Universal Catalog) by using the metadata import API methods and your own pipeline.
- For more information, see Set up authentication for a local development environment . using Google.Api.Gax ; using Google.Api.Gax.ResourceNames ; using Google.Cloud.Dataplex.V1 ; using System ; public sealed partial class GeneratedCatalogServiceClientSnippets { /// <summary>Snippet for ListMetadataJobs</summary> /// <remarks> /// This snippet has been automatically generated and should be regarded as a code template only. /// It will require modifications to work: /// - It may require correct/in-range values for request initialization. /// - It may require specifying regional endpoints when creating the service client as shown in /// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint. /// </remarks> public void ListMetadataJobsRequestObject () { // Create client CatalogServiceClient catalogServiceClient = CatalogServiceClient .

### "Develop a custom connector for metadata import \_|\_ Knowledge Catalog \_\

- URL: [https://docs.cloud.google.com/dataplex/docs/develop-custom-connector](https://docs.cloud.google.com/dataplex/docs/develop-custom-connector)
- Source ID: `site-docs-root-2`
- Final score: 210
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- PROJECT ID = PROJECT LOCATION ID = LOCATION DATAPLEX API = dataplex.googleapis.com/v1/projects/ $PROJECT ID /locations/ $LOCATION ID alias gcurl = 'curl -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json"' Call the API method, passing the entry types and aspect types that you want to import. gcurl https:// ${ DATAPLEX API } /metadataJobs?metadata job id = " JOB ID " -d " $( cat <<EOF { "type" : "IMPORT" , "import spec" : { "source storage uri" : "gs:// BUCKET / FOLDER /" , "entry sync mode" : "FULL" , "aspect sync mode" : "INCREMENTAL" , "scope" : { "entry groups" : [ "projects/ PROJECT /locations/ LOCATION /entryGroups/ ENTRY GROUP ID " ] , "entry types" : [ "projects/ PROJECT /locations/ LOCATION /entryTypes/oracle-instance" , "projects/ PROJECT /locations/ LOCATION /entryTypes/oracle-database" , "projects/ PROJECT /locations/ LOCATION /entryTypes/oracle-schema" , "projects/ PROJECT /locations/ LOCATION /entryTypes/oracle-table" , "projects/ PROJECT /locations/ LOCATION /entryTypes/oracle-view" ] , "aspect types" : [ "projects/ PROJECT /locations/ LOCATION /aspectTypes/oracle-instance" , "projects/dataplex-types/locations/global/aspectTypes/schema" , "projects/ PROJECT /locations/ LOCATION /aspectTypes/oracle-database" , "projects/ PROJECT /locations/ LOCATION /aspectTypes/oracle-schema" , "projects/ PROJECT /locations/ LOCATION /aspectTypes/oracle-table" , "projects/ PROJECT /locations/ LOCATION /aspectTypes/oracle-view" ] , } , } , } EOF ) " The schema aspect type is a global aspect type that is defined by Knowledge Catalog.
- Instead, the example creates DataFrames, converts the DataFrames into JSON entries, and then writes the output into a metadata import file in JSON Lines format that can be imported into Knowledge Catalog.
- Update the src/entry builder.py file with shared methods for applying Spark transformations. """Creates entries with PySpark.""" import pyspark.sql.functions as F from pyspark.sql.types import StringType from src.constants import EntryType , SOURCE TYPE from src import name builder as nb @F . udf ( returnType = StringType ()) def choose metadata type udf ( data type : str ): """Choose the metadata type based on Oracle native type.""" if data type . startswith ( "NUMBER" ) or data type in [ "FLOAT" , "LONG" ]: return "NUMBER" if data type . startswith ( "VARCHAR" ) or data type . startswith ( "NVARCHAR2" ): return "STRING" if data type == "DATE" : return "DATETIME" return "OTHER" def create entry source ( column ): """Create Entry Source segment.""" return F . named struct ( F . lit ( "display name" ), column , F . lit ( "system" ), F . lit ( SOURCE TYPE )) def create entry aspect ( entry aspect name ): """Create aspect with general information (usually it is empty).""" return F . create map ( F . lit ( entry aspect name ), F . named struct ( F . lit ( "aspect type" ), F . lit ( entry aspect name ), F . lit ( "data" ), F . create map () ) ) def convert to import items ( df , aspect keys ): """Convert entries to import items.""" entry columns = [ "name" , "fully qualified name" , "parent entry" , "entry source" , "aspects" , "entry type" ] Puts entry to "entry" key, a list of keys from aspects in "aspects keys" and "aspects" string in "update mask" return df . withColumn ( "entry" , F . struct ( entry columns )) \ . withColumn ( "aspect keys" , F . array ([ F . lit ( key ) for key in aspect keys ])) \ . withColumn ( "update mask" , F . array ( F . lit ( "aspects" ))) \ . drop ( entry columns ) def build schemas ( config , df raw schemas ): """Create a dataframe with database schemas from the list of usernames.
- ArgumentParser () Dataplex arguments parser . add argument ( "--target project id" , type = str , required = True , help = "The name of the target Google Cloud project to import the metadata into." ) parser . add argument ( "--target location id" , type = str , required = True , help = "The target Google Cloud location where the metadata will be imported into." ) parser . add argument ( "--target entry group id" , type = str , required = True , help = "The ID of the entry group to import metadata into. " "The metadata will be imported into entry group with the following" "full resource name: projects/$ {target project id} /" "locations/$ {target location id} /entryGroups/$ {target entry group id} ." ) Oracle arguments parser . add argument ( "--host port" , type = str , required = True , help = "Oracle host and port number separated by the colon (:)." ) parser . add argument ( "--user" , type = str , required = True , help = "Oracle User." ) parser . add argument ( "--password-secret" , type = str , required = True , help = "Secret resource name in the Secret Manager for the Oracle password." ) parser . add argument ( "--database" , type = str , required = True , help = "Source Oracle database." ) Google Cloud Storage arguments It is assumed that the bucket is in the same region as the entry group parser . add argument ( "--output bucket" , type = str , required = True , help = "The Cloud Storage bucket to write the generated metadata import file." ) parser . add argument ( "--output folder" , type = str , required = True , help = "A folder in the Cloud Storage bucket, to write the generated metadata import files." ) return vars ( parser . parse known args ()[ 0 ]) In production environments, we recommend that you store the password in Secret Manager .

### "Manage aspects and enrich metadata \_|\_ Knowledge Catalog \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataplex/docs/enrich-entries-metadata](https://docs.cloud.google.com/dataplex/docs/enrich-entries-metadata)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Required roles To get the permissions that you need to create and manage aspect types and aspects, ask your administrator to grant you the following IAM roles on the resource: Full set of permissions on metadata resources in Knowledge Catalog, including aspect types and data aspects: Dataplex Catalog Admin ( roles/dataplex.catalogAdmin ) Create and manage metadata resources in Knowledge Catalog, including aspect types and data aspects: Dataplex Catalog Editor ( roles/dataplex.catalogEditor ) Full set of permissions on custom aspect types (except for permissions to use aspect types to create or edit entries): Dataplex Aspect Type Owner ( roles/dataplex.aspectTypeOwner ) View aspect types and IAM policies associated with them: Dataplex Catalog Viewer ( roles/dataplex.catalogViewer ) Use aspect types to create and modify entries with the corresponding aspects: Dataplex Aspect Type User ( roles/dataplex.aspectTypeUser ) Add aspects of some of the system aspect types, such as schema , schema-join , overview , contacts : Dataplex Entry and EntryLink Owner ( roles/dataplex.entryOwner ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- This client only needs to be created // once, and can be reused for multiple requests. try ( CatalogServiceClient client = CatalogServiceClient . create ()) { Entry entry = Entry . newBuilder () . setName ( EntryName . of ( projectId , location , entryGroupId , entryId ). toString ()) . setEntrySource ( EntrySource . newBuilder () . setDescription ( "updated description of the entry" ) . build ()) . putAllAspects ( Map . of ( "dataplex-types.global.generic" , Aspect . newBuilder () . setAspectType ( "projects/dataplex-types/locations/global/aspectTypes/generic" ) . setData ( Struct . newBuilder () // "Generic" Aspect Type have fields called "type" and "system. // The values below are a sample of possible options. . putFields ( "type" , Value . newBuilder () . setStringValue ( "updated example value" ) . build ()) . putFields ( "system" , Value . newBuilder () . setStringValue ( "updated example system" ) . build ()) . build ()) . build ())) . build (); // Update mask specifies which fields will be updated. // For more information on update masks, see: https://google.aip.dev/161 FieldMask updateMask = FieldMask . newBuilder (). addPaths ( "aspects" ). addPaths ( "entry source.description" ). build (); return client . updateEntry ( entry , updateMask ); } } } Python Python Before trying this sample, follow the Python setup instructions in the Knowledge Catalog quickstart using client libraries .
- FieldMask ; import java.util.ArrayList ; public class SyncUpdateEntry { public static void main ( String [] args ) throws Exception { syncUpdateEntry (); } public static void syncUpdateEntry () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( CatalogServiceClient catalogServiceClient = CatalogServiceClient . create ()) { UpdateEntryRequest request = UpdateEntryRequest . newBuilder () . setEntry ( Entry . newBuilder (). build ()) . setUpdateMask ( FieldMask . newBuilder (). build ()) . setAllowMissing ( true ) . setDeleteMissingAspects ( true ) . addAllAspectKeys ( new ArrayList<String> ()) . build (); Entry response = catalogServiceClient . updateEntry ( request ); } } } Python Python Before trying this sample, follow the Python setup instructions in the Knowledge Catalog quickstart using client libraries .
- FieldMask ; import java.util.ArrayList ; public class SyncUpdateEntry { public static void main ( String [] args ) throws Exception { syncUpdateEntry (); } public static void syncUpdateEntry () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( CatalogServiceClient catalogServiceClient = CatalogServiceClient . create ()) { UpdateEntryRequest request = UpdateEntryRequest . newBuilder () . setEntry ( Entry . newBuilder (). build ()) . setUpdateMask ( FieldMask . newBuilder (). build ()) . setAllowMissing ( true ) . setDeleteMissingAspects ( true ) . addAllAspectKeys ( new ArrayList<String> ()) . build (); Entry response = catalogServiceClient . updateEntry ( request ); } } } Python Python Before trying this sample, follow the Python setup instructions in the Knowledge Catalog quickstart using client libraries .

