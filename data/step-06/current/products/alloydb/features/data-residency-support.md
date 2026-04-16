---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.531Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Data Residency support"
feature_slug: "data-residency-support"
latest_feature_date: "2023-07-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent"
  - "https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb"
  - "https://docs.cloud.google.com/alloydb/docs/reference/database-performance-snapshot-report-reference"
keywords:
  - "residency"
  - "alloydb"
  - "supports"
  - "controls"
---

# Data Residency support

Product: AlloyDB
Coverage: LOW

## Step 02 Summary

AlloyDB supports Data Residency controls.

## Extended Definition

AlloyDB supports Data Residency controls.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent](https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent)
- [https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb](https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb)
- [https://docs.cloud.google.com/alloydb/docs/reference/database-performance-snapshot-report-reference](https://docs.cloud.google.com/alloydb/docs/reference/database-performance-snapshot-report-reference)

## Supporting Pages

### "Database performance snapshot report reference \_|\_ AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/database-performance-snapshot-report-reference](https://docs.cloud.google.com/alloydb/docs/reference/database-performance-snapshot-report-reference)
- Source ID: `site-api-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Databases AlloyDB for PostgreSQL Reference Send feedback Database performance snapshot report reference Stay organized with collections Save and categorize content based on your preferences.
- UltraFastCachePWrite I/O Latency of a write to the AlloyDB UltraFast Cache WalBatchWrite I/O Wait time for a minimal batch size to write WAL.
- Wait events in snapshot reports The following table describes wait events that are supported by AlloyDB performance snapshot reports.
- StorageAwaitMayWrite I/O Time spent waiting for AlloyDB storage to process logs and allow more writes.

### "Integrate QueryData with an application \_|\_ AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent](https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent)
- Source ID: `site-docs-root-2`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Gemini Data Analytics Source and Gemini Data Analytics QueryData Tool. kind : source name : gda-api-source type : cloud-gemini-data-analytics projectId : " PROJECT ID " --- kind : tool name : cloud gda query tool type : cloud-gemini-data-analytics-query source : gda-api-source description : Use this tool to send natural language queries to the Gemini Data Analytics API and receive SQL, natural language answers, and explanations. location : " REGION ID " context : datasourceReferences : alloydb : databaseReference : projectId : " PROJECT ID " region : " REGION ID " clusterId : " CLUSTER ID " instanceId : " INSTANCE ID " databaseId : " DATABASE ID " agentContextReference : contextSetId : " CONTEXT SET ID " generationOptions : generateQueryResult : true generateNaturalLanguageAnswer : true generateExplanation : true generateDisambiguationQuestion : true Replace the following: PROJECT ID : Your Google Cloud project ID.
- Grant executesql permission to AlloyDB for PostgreSQL instance To grant the executesql permission to the AlloyDB for PostgreSQL instance and set the data api access instance setting to the value ALLOW DATA API , use the following curl command : curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ https://alloydb.googleapis.com/v1alpha/projects/ PROJECT ID /locations/ LOCATION /clusters/ CLUSTER ID /instances/ INSTANCE ID ?updateMask=dataApiAccess \ -d '{ "dataApiAccess": "ENABLED", }' Replace the following: PROJECT ID : The ID of your Google Cloud project.
- Enable required services Enable the following services for your project: Data Analytics API with Gemini Gemini for Google Cloud API Knowledge Catalog API Prepare an AlloyDB for PostgreSQL cluster, instance, and database Make sure that you have access to an existing AlloyDB cluster and instance or create a new one .
- Costs In this document, you use the following billable components of Google Cloud: AlloyDB for PostgreSQL Gemini for Google Cloud API To generate a cost estimate based on your projected usage, use the pricing calculator .

### "Migrate data from a vector database to AlloyDB \_|\_ AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb](https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb)
- Source ID: `site-docs-root-2`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- To initialize a vector store object, run the following command: Pinecone from langchain google alloydb pg import AlloyDBVectorStore vs = await AlloyDBVectorStore . create ( engine = alloydb engine , embedding service = embeddings service , table name = alloydb table , ) Weaviate from langchain google alloydb pg import AlloyDBVectorStore vs = await AlloyDBVectorStore . create ( engine = alloydb engine , embedding service = embeddings service , table name = alloydb table , ) Chroma from langchain google alloydb pg import AlloyDBVectorStore vs = await AlloyDBVectorStore . create ( engine = alloydb engine , embedding service = embeddings service , table name = alloydb table , ) Qdrant from langchain google alloydb pg import AlloyDBVectorStore vs = await AlloyDBVectorStore . create ( engine = alloydb engine , embedding service = embeddings service , table name = alloydb table , ) Milvus from langchain google alloydb pg import AlloyDBVectorStore vs = await AlloyDBVectorStore . create ( engine = alloydb engine , embedding service = embeddings service , table name = alloydb table , ) Insert data into the AlloyDB table: Pinecone pending : set [ Any ] = set () for ids , contents , embeddings , metadatas in data iterator : pending . add ( asyncio . ensure future ( vs . aadd embeddings ( texts = contents , embeddings = embeddings , metadatas = metadatas , ids = ids , ) ) ) if len ( pending ) > = max concurrency : , pending = await asyncio . wait ( pending , return when = asyncio .
- Pinecone from langchain google alloydb pg import Column await alloydb engine . ainit vectorstore table ( table name = alloydb table , vector size = vector size , Customize the ID column types if not using the UUID data type id column=Column("langchain id", "TEXT"), # Default is Column("langchain id", "UUID") overwrite existing=True, # Drop the old table and Create a new vector store table ) Weaviate await alloydb engine . ainit vectorstore table ( table name = alloydb table , vector size = vector size , Customize the ID column types with id column if not using the UUID data type ) Chroma await alloydb engine . ainit vectorstore table ( table name = alloydb table , vector size = vector size , Customize the ID column types with id column if not using the UUID data type ) Qdrant await alloydb engine . ainit vectorstore table ( table name = alloydb table , vector size = vector size , Customize the ID column types with id column if not using the UUID data type ) Milvus await alloydb engine . ainit vectorstore table ( table name = alloydb table , vector size = vector size , Customize the ID column types with id column if not using the UUID data type ) Initialize a vector store object This code adds additional vector embedding metadata to the langchain metadata column in a JSON format.
- In the Enable APIs step, click Enable to enable the following: AlloyDB API Compute Engine API Service Networking API Required roles To get the permissions that you need to complete the tasks in this tutorial, have the following Identity and Access Management (IAM) roles which allow for table creation and data insertion: Owner ( roles/owner ) or Editor ( roles/editor ) If the user is not an owner or editor, the following IAM roles and PostgreSQL privileges are required: AlloyDB Instance Client ( roles/alloydb.client ) Cloud AlloyDB Admin ( roles/alloydb.admin ) Compute Network User ( roles/compute.networkUser ) If you want to authenticate to your database using IAM authentication instead of using the built-in authentication in this tutorial, use the notebook that shows how to use AlloyDB for PostgreSQL to store vector embeddings with the AlloyDBVectorStore class .
- Retrieve the code sample Copy the code sample from GitHub by cloning the repository: git clone https://github.com/googleapis/langchain-google-alloydb-pg-python.git Navigate to the migrations directory: cd langchain-google-alloydb-pg-python/samples/migrations Extract data from an existing vector database Note: You might need to modify the code examples in this section based on your use case.

