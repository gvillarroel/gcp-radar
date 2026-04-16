---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:13:48.462Z"
product_name: "Dataplex"
product_slug: "dataplex"
feature_name: "Dataplex Attribute Store"
feature_slug: "dataplex-attribute-store"
latest_feature_date: "2025-02-18"
deprecation_date: "2026-02-18"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1"
  - "https://docs.cloud.google.com/dataplex/docs/enrich-entries-metadata"
  - "https://docs.cloud.google.com/dataplex/docs/catalog-overview"
  - "https://docs.cloud.google.com/dataplex/docs/develop-custom-connector"
keywords:
  - "dataplex"
  - "attribute"
  - "store"
  - "provides"
  - "based"
  - "metadata"
  - "capabilities"
  - "that"
---

# Dataplex Attribute Store

Product: Dataplex
Coverage: MEDIUM

## Step 02 Summary

Dataplex Attribute Store provides attribute-based metadata capabilities that are being retired in favor of tags, policy tags, and IAM conditions; deprecated on 2026-02-18.

## Extended Definition

Dataplex Attribute Store provides attribute-based metadata capabilities that are being retired in favor of tags, policy tags, and IAM conditions; deprecated on 2026-02-18.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1)
- [https://docs.cloud.google.com/dataplex/docs/enrich-entries-metadata](https://docs.cloud.google.com/dataplex/docs/enrich-entries-metadata)
- [https://docs.cloud.google.com/dataplex/docs/catalog-overview](https://docs.cloud.google.com/dataplex/docs/catalog-overview)
- [https://docs.cloud.google.com/dataplex/docs/develop-custom-connector](https://docs.cloud.google.com/dataplex/docs/develop-custom-connector)

## Supporting Pages

### "Package com.google.cloud.dataplex.v1 (1.86.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1)
- Source ID: `site-java-reference`
- Final score: 231
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Compatibility Status Provides compatibility information for various metadata stores. com. google. cloud. dataplex. v1.
- Compatibility Provides compatibility information for a specific metadata store. com. google. cloud. dataplex. v1.
- Builder Provides compatibility information for a specific metadata store. com. google. cloud. dataplex. v1.
- Builder Provides compatibility information for various metadata stores. com. google. cloud. dataplex. v1.

### "Manage aspects and enrich metadata \_|\_ Knowledge Catalog \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataplex/docs/enrich-entries-metadata](https://docs.cloud.google.com/dataplex/docs/enrich-entries-metadata)
- Source ID: `site-docs-root`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- You can use aspects to store: Business metadata : Information that provides business context, such as data classification.
- Required roles To get the permissions that you need to create and manage aspect types and aspects, ask your administrator to grant you the following IAM roles on the resource: Full set of permissions on metadata resources in Knowledge Catalog, including aspect types and data aspects: Dataplex Catalog Admin ( roles/dataplex.catalogAdmin ) Create and manage metadata resources in Knowledge Catalog, including aspect types and data aspects: Dataplex Catalog Editor ( roles/dataplex.catalogEditor ) Full set of permissions on custom aspect types (except for permissions to use aspect types to create or edit entries): Dataplex Aspect Type Owner ( roles/dataplex.aspectTypeOwner ) View aspect types and IAM policies associated with them: Dataplex Catalog Viewer ( roles/dataplex.catalogViewer ) Use aspect types to create and modify entries with the corresponding aspects: Dataplex Aspect Type User ( roles/dataplex.aspectTypeUser ) Add aspects of some of the system aspect types, such as schema , schema-join , overview , contacts : Dataplex Entry and EntryLink Owner ( roles/dataplex.entryOwner ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Data quality scorecard A data quality scorecard is an aspect that provides a summary of data quality, often based on data quality scans or other processes.
- String projectId = "MY PROJECT ID" ; // Available locations: https://cloud.google.com/dataplex/docs/locations String location = "MY LOCATION" ; String entryGroupId = "MY ENTRY GROUP ID" ; String entryId = "MY ENTRY ID" ; Entry createdEntry = updateEntry ( projectId , location , entryGroupId , entryId ); System . out . println ( "Successfully updated entry: " + createdEntry . getName ()); } // Method to update Entry located in projectId, location, entryGroupId and with entryId public static Entry updateEntry ( String projectId , String location , String entryGroupId , String entryId ) throws Exception { // Initialize client that will be used to send requests.

### About metadata management in Knowledge Catalog \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataplex/docs/catalog-overview](https://docs.cloud.google.com/dataplex/docs/catalog-overview)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Entry link with linked entries, aspects, and their types Knowledge Catalog versus Data Catalog Knowledge Catalog provides integrated capabilities to manage your metadata.
- An aspect added to an entry link must be based on an aspect type that is stored in the same location as the entry link or the aspect type must be global .
- An aspect added to an entry must be based on an aspect type that is stored in the same location as the entry or the aspect type must be global .
- Supported sources Automatic discovery of Cloud Storage data Metadata from the following Google Cloud sources is automatically ingested into Knowledge Catalog: BigQuery sharing (formerly Analytics Hub) exchanges and listings BigQuery datasets, tables, views, models, routines, connections, and linked datasets Bigtable instances, clusters, and tables (including column family details) Dataform repositories and code assets Dataproc Metastore services, databases, and tables Looker (Google Cloud core) instances, dashboards, dashboard elements, Looks, LookML projects, models, Explores, and views ( Preview ) Pub/Sub topics Spanner instances, databases, tables, and views Vertex AI models, datasets, feature groups, feature views, and online store instances If Knowledge Catalog integration is enabled, then metadata from the following Google Cloud sources is automatically ingested into Knowledge Catalog: AlloyDB for PostgreSQL clusters, instances, databases, schemas, tables, views—see Enable the AlloyDB for PostgreSQL integration ( Preview ) Cloud SQL instances, databases, schemas, tables, views—see Enable the Cloud SQL integration To import metadata from a third-party source into Knowledge Catalog, you can use a managed connectivity pipeline.

### "Develop a custom connector for metadata import \_|\_ Knowledge Catalog \_\

- URL: [https://docs.cloud.google.com/dataplex/docs/develop-custom-connector](https://docs.cloud.google.com/dataplex/docs/develop-custom-connector)
- Source ID: `site-docs-root-2`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- ArgumentParser () Dataplex arguments parser . add argument ( "--target project id" , type = str , required = True , help = "The name of the target Google Cloud project to import the metadata into." ) parser . add argument ( "--target location id" , type = str , required = True , help = "The target Google Cloud location where the metadata will be imported into." ) parser . add argument ( "--target entry group id" , type = str , required = True , help = "The ID of the entry group to import metadata into. " "The metadata will be imported into entry group with the following" "full resource name: projects/$ {target project id} /" "locations/$ {target location id} /entryGroups/$ {target entry group id} ." ) Oracle arguments parser . add argument ( "--host port" , type = str , required = True , help = "Oracle host and port number separated by the colon (:)." ) parser . add argument ( "--user" , type = str , required = True , help = "Oracle User." ) parser . add argument ( "--password-secret" , type = str , required = True , help = "Secret resource name in the Secret Manager for the Oracle password." ) parser . add argument ( "--database" , type = str , required = True , help = "Source Oracle database." ) Google Cloud Storage arguments It is assumed that the bucket is in the same region as the entry group parser . add argument ( "--output bucket" , type = str , required = True , help = "The Cloud Storage bucket to write the generated metadata import file." ) parser . add argument ( "--output folder" , type = str , required = True , help = "A folder in the Cloud Storage bucket, to write the generated metadata import files." ) return vars ( parser . parse known args ()[ 0 ]) In production environments, we recommend that you store the password in Secret Manager .
- The function calls the metadataJobs.create API method to run a metadata import job. - submit import job: call: http.post args: url: ${ "https://dataplex.googleapis.com/v1/projects/" + args.TARGET PROJECT ID + "/locations/" + args.CLOUD REGION + "/metadataJobs?metadata job id=" + WORKFLOW ID } auth: type: OAuth2 scopes: "https://www.googleapis.com/auth/cloud-platform" body: type: IMPORT import spec: source storage uri: ${ "gs://" + args.CLOUD STORAGE BUCKET ID + "/" + WORKFLOW ID + "/" } entry sync mode: FULL aspect sync mode: INCREMENTAL scope: entry groups: - ${ "projects/" + args.TARGET PROJECT ID + "/locations/" + args.CLOUD REGION + "/entryGroups/" +args.TARGET ENTRY GROUP ID } entry types: - "projects/ PROJECT /locations/ LOCATION /entryTypes/oracle-instance" - "projects/ PROJECT /locations/ LOCATION /entryTypes/oracle-database" - "projects/ PROJECT /locations/ LOCATION /entryTypes/oracle-schema" - "projects/ PROJECT /locations/ LOCATION /entryTypes/oracle-table" - "projects/ PROJECT /locations/ LOCATION /entryTypes/oracle-view" aspect types: - "projects/ PROJECT /locations/ LOCATION /aspectTypes/oracle-instance" - "projects/dataplex-types/locations/global/aspectTypes/schema" - "projects/ PROJECT /locations/ LOCATION /aspectTypes/oracle-database" - "projects/ PROJECT /locations/ LOCATION /aspectTypes/oracle-schema" - "projects/ PROJECT /locations/ LOCATION /aspectTypes/oracle-table" - "projects/ PROJECT /locations/ LOCATION /aspectTypes/oracle-view" result: IMPORT JOB RESPONSE Provide the same entry types and aspect types that you included when you called the API method manually.
- PROJECT ID = PROJECT LOCATION ID = LOCATION DATAPLEX API = dataplex.googleapis.com/v1/projects/ $PROJECT ID /locations/ $LOCATION ID alias gcurl = 'curl -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json"' Call the API method, passing the entry types and aspect types that you want to import. gcurl https:// ${ DATAPLEX API } /metadataJobs?metadata job id = " JOB ID " -d " $( cat <<EOF { "type" : "IMPORT" , "import spec" : { "source storage uri" : "gs:// BUCKET / FOLDER /" , "entry sync mode" : "FULL" , "aspect sync mode" : "INCREMENTAL" , "scope" : { "entry groups" : [ "projects/ PROJECT /locations/ LOCATION /entryGroups/ ENTRY GROUP ID " ] , "entry types" : [ "projects/ PROJECT /locations/ LOCATION /entryTypes/oracle-instance" , "projects/ PROJECT /locations/ LOCATION /entryTypes/oracle-database" , "projects/ PROJECT /locations/ LOCATION /entryTypes/oracle-schema" , "projects/ PROJECT /locations/ LOCATION /entryTypes/oracle-table" , "projects/ PROJECT /locations/ LOCATION /entryTypes/oracle-view" ] , "aspect types" : [ "projects/ PROJECT /locations/ LOCATION /aspectTypes/oracle-instance" , "projects/dataplex-types/locations/global/aspectTypes/schema" , "projects/ PROJECT /locations/ LOCATION /aspectTypes/oracle-database" , "projects/ PROJECT /locations/ LOCATION /aspectTypes/oracle-schema" , "projects/ PROJECT /locations/ LOCATION /aspectTypes/oracle-table" , "projects/ PROJECT /locations/ LOCATION /aspectTypes/oracle-view" ] , } , } , } EOF ) " The schema aspect type is a global aspect type that is defined by Knowledge Catalog.
- The connector must accept the following command-line arguments to receive information from the pipeline: Command-line argument Value that pipeline provides target project id PROJECT ID target location id REGION target entry group id ENTRY GROUP ID output bucket CLOUD STORAGE BUCKET ID output folder FOLDER ID The connector uses these arguments to generate metadata in a target entry group projects/ PROJECT ID /locations/ REGION /entryGroups/ ENTRY GROUP ID , and to write to a Cloud Storage bucket gs:// CLOUD STORAGE BUCKET ID / FOLDER ID .

