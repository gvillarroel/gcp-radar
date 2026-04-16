---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.539Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Datastream source support"
feature_slug: "datastream-source-support"
latest_feature_date: "2022-09-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration"
  - "https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters"
  - "https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb"
keywords:
  - "datastream"
  - "source"
  - "alloydb"
  - "databases"
  - "can"
  - "used"
---

# Datastream source support

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB databases can be used as source databases for Datastream.

## Extended Definition

AlloyDB databases can be used as source databases for Datastream.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration](https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration)
- [https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters](https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters)
- [https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb](https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb)

## Supporting Pages

### "Manage your AlloyDB resources using Knowledge Catalog \_|\_ AlloyDB for\

- URL: [https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration](https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration)
- Source ID: `site-iam-reference`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- Knowledge Catalog automatically retrieves the following metadata from AlloyDB clusters, instances, databases, tables, columns, and views: Name Location (Region) Labels (for clusters and instances) Dataplex Integration Enabled (for clusters) Database Version Machine CPU Count (for instances) Availability Type (for instances) Charset (for databases) Collation (for databases) Owner Description (for table, views, columns, and foreign keys) Type (for clusters, instances, and machines) Columns Data Type Mode Primary Key Foreign Keys Referenced Table Column Mappings Creation Time Last modification Time Note: Knowledge Catalog refers to resources in AlloyDB and in other Google Cloud services as assets .
- Knowledge Catalog operation AlloyDB resource Roles or permissions required Search for AlloyDB resources Cluster alloydb.clusters.get Columns alloydb.databases.get Instance alloydb.instances.get Database alloydb.databases.get Tables alloydb.databases.get Views alloydb.databases.get Caution: If you grant the roles/alloydb.viewer role at the project level, principals with this role can view the metadata for all AlloyDB instances in the project.
- Because AlloyDB syncs in near real-time to Knowledge Catalog, the following resources are available: Clusters Columns Databases Instances Tables Views After discovery is complete, search for these assets— customers table and active users —in the Knowledge Catalog page of the Google Cloud console or by using the API.
- Home Documentation Databases AlloyDB for PostgreSQL Send feedback Manage your AlloyDB resources using Knowledge Catalog Stay organized with collections Save and categorize content based on your preferences.

### "REST Resource: projects.locations.clusters \_|\_ AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters](https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters)
- Source ID: `site-iam-reference`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Databases AlloyDB for PostgreSQL Reference Send feedback REST Resource: projects.locations.clusters Stay organized with collections Save and categorize content based on your preferences.
- JSON representation { "enabled" : boolean } Fields enabled boolean This flag controls the integration of AlloyDB for PostgreSQL resources like databases, schemas, and tables with Dataplex.
- Methods create Creates a new Cluster in a given project and location. createsecondary Creates a cluster of type SECONDARY in the given location using the primary cluster as the source. delete Deletes a single Cluster. export Exports data from the cluster. get Gets details of a single Cluster. import Imports data to the cluster. list Lists Clusters in a given project and location. patch Updates the parameters of a single Cluster. promote Promotes a SECONDARY cluster. restore Creates a new Cluster in a given project and location, with a volume restored from the provided source, either a backup ID or a point-in-time and a source cluster. restoreFromCloudSQL Restores an AlloyDB cluster from a CloudSQL resource. switchover Switches the roles of PRIMARY and SECONDARY clusters without any data loss. upgrade Upgrades a single Cluster.
- Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" . backupPlanAssociation string The BackupPlanAssociation resource that was used to enable BackupDR protection for this cluster. dataSource string The DataSource resource that represents the cluster in BackupDR. continuousBackupPreviouslyEnabled boolean Whether continuous backup was previously enabled prior to enabling BackupDR protection for this cluster. continuousBackupPreviouslyEnabledTime string ( Timestamp format) The time when continuous backup was previously enabled prior to enabling BackupDR protection for this cluster.

### "Migrate data from a vector database to AlloyDB \_|\_ AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb](https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb)
- Source ID: `site-docs-root-2`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- This workflow does not generate new embeddings, therefore FakeEmbeddings class is used to avoid any costs. from langchain core.embeddings import FakeEmbeddings embeddings service = FakeEmbeddings ( size = vector size ) Prepare the AlloyDB table.
- Clean up To avoid incurring charges to your Google Cloud account for the resources used in this tutorial, either delete the project that contains the resources, or keep the project and delete the individual resources.
- Home Documentation Databases AlloyDB for PostgreSQL Guides Send feedback Migrate data from a vector database to AlloyDB Stay organized with collections Save and categorize content based on your preferences.
- Pinecone Retrieve vector IDs from the Pinecone index: results = pinecone index . list paginated ( prefix = "" , namespace = pinecone namespace , limit = pinecone batch size ) ids = [ v . id for v in results . vectors ] if ids : # Prevents yielding an empty list. yield ids Check BOTH pagination and pagination.next while results . pagination is not None and results . pagination . get ( "next" ) is not None : pagination token = results . pagination . get ( "next" ) results = pinecone index . list paginated ( prefix = "" , pagination token = pagination token , namespace = pinecone namespace , limit = pinecone batch size , ) Extract and yield the next batch of IDs ids = [ v . id for v in results . vectors ] if ids : # Prevents yielding an empty list. yield ids And then fetch records by ID from the Pinecone index: import uuid Iterate through the IDs and download their contents for ids batch in id iterator : all data = pinecone index . fetch ( ids = ids batch , namespace = pinecone namespace ) ids = [] embeddings = [] contents = [] metadatas = [] Process each vector in the current batch for doc in all data . vectors . values (): You might need to update this data translation logic according to one or more of your field names if pinecone id column name in doc . metadata : pinecone id column name stores the unqiue identifier for the content ids . append ( doc [ pinecone id column name ]) else : Generate a uuid if pinecone id column name is missing in source ids . append ( str ( uuid . uuid4 ())) values is the vector embedding of the content embeddings . append ( doc . values ) Check if pinecone content column name exists in metadata before accessing if pinecone content column name in doc . metadata : pinecone content column name stores the content which was encoded contents . append ( str ( doc . metadata [ pinecone content column name ])) Remove pinecone content column name after processing del doc . metadata [ pinecone content column name ] else : Handle the missing pinecone content column name field appropriately contents . append ( "" ) metadata is the additional context metadatas . append ( doc . metadata ) Yield the current batch of results yield ids , contents , embeddings , metadatas Weaviate Iterate through the IDs and download their contents weaviate collection = weaviate client . collections . get ( weaviate collection name ) ids : list [ str ] = [] content : list [ Any ] = [] embeddings : list [ list [ float ]] = [] metadatas : list [ Any ] = [] for item in weaviate collection . iterator ( include vector = True ): You might need to update this data translation logic according to one or more of your field names uuid is the unqiue identifier for the content ids . append ( str ( item . uuid )) weaviate text key is the content which was encoded content . append ( item . properties [ weaviate text key ]) vector is the vector embedding of the content embeddings . append ( item . vector [ "default" ]) # type: ignore del item . properties [ weaviate text key ] # type: ignore properties is the additional context metadatas . append ( item . properties ) if len ( ids ) > = weaviate batch size : Yield the current batch of results yield ids , content , embeddings , metadatas Reset lists to start a new batch ids = [] content = [] embeddings = [] metadatas = [] Note: Update WEAVIATE COLLECTION NAME with the collection name and update WEAVIATE TEXT KEY with the field name in the Weaviate schema containing text content.

