---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.271Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner Studio query editor SQL/DML/DDL support"
feature_slug: "spanner-studio-query-editor-sql-dml-ddl-support"
latest_feature_date: "2023-08-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/create-query-database-console"
  - "https://docs.cloud.google.com/spanner/docs/configure-fgac"
  - "https://docs.cloud.google.com/spanner/docs/vector-search-tutorial"
keywords:
  - "editor"
  - "studio"
  - "console"
  - "query"
---

# Spanner Studio query editor SQL/DML/DDL support

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner Studio in the Google Cloud console now provides full support for SQL, DML, and DDL operations in the query editor.

## Extended Definition

Spanner Studio in the Google Cloud console now provides full support for SQL, DML, and DDL operations in the query editor.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/create-query-database-console](https://docs.cloud.google.com/spanner/docs/create-query-database-console)
- [https://docs.cloud.google.com/spanner/docs/configure-fgac](https://docs.cloud.google.com/spanner/docs/configure-fgac)
- [https://docs.cloud.google.com/spanner/docs/vector-search-tutorial](https://docs.cloud.google.com/spanner/docs/vector-search-tutorial)

## Supporting Pages

### "Create and query a database in the Google Cloud console \_|\_ Spanner \_\

- URL: [https://docs.cloud.google.com/spanner/docs/create-query-database-console](https://docs.cloud.google.com/spanner/docs/create-query-database-console)
- Source ID: `site-docs-reference`
- Final score: 164
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create a schema for your database Note: Spanner Studio (formerly labeled Query in the Google Cloud console) supports SQL, DML, and DDL operations in a single editor.
- The Google Cloud console displays the Singers table's Spanner Studio page with a new query tab that contains the INSERT statement that you edit to insert a row in the Singers table and view the result of that insertion: GoogleSQL -- Add new values in the VALUES clause in order of the column list. -- Each value must be type compatible with its associated column.
- The Singers table now has two rows: GoogleSQL PostgreSQL Run a query in the Google Cloud console On the database Overview page, click Spanner Studio in the navigation menu.
- Home Documentation Databases Spanner Guides Send feedback Create and query a database in the Google Cloud console Stay organized with collections Save and categorize content based on your preferences.

### Configure fine-grained access control \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/configure-fgac](https://docs.cloud.google.com/spanner/docs/configure-fgac)
- Source ID: `site-docs-root`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- List database roles Note: Spanner Studio (formerly labeled Query in the Google Cloud console) supports SQL, DML, and DDL operations in a single editor.
- Console To list database roles, enter the following query on the Spanner Studio page for the database: GoogleSQL SELECT FROM INFORMATION SCHEMA .
- Console To drop a database role, follow these steps: On the database Overview page, click Spanner Studio .
- Node.js / TODO(developer): Uncomment these variables before running the sample. / // const instanceId = 'my-instance'; // const databaseId = 'my-database'; // const projectId = 'my-project-id'; // Imports the Google Cloud client library const { Spanner } = require ( ' @google-cloud/spanner ' ); // creates a client const spanner = new Spanner ({ projectId : projectId , }); const databaseAdminClient = spanner . getDatabaseAdminClient (); async function addAndDropNewDatabaseRole () { // Creates a new user defined role and grant permissions try { const request = [ 'CREATE ROLE parent' , 'GRANT SELECT ON TABLE Singers TO ROLE parent' , 'CREATE ROLE child' , 'GRANT ROLE parent TO ROLE child' , ]; const [ operation ] = await databaseAdminClient . updateDatabaseDdl ({ database : databaseAdminClient . databasePath ( projectId , instanceId , databaseId , ), statements : request , }); console . log ( 'Waiting for operation to complete...' ); await operation . promise (); console . log ( 'Created roles child and parent and granted privileges' ); } catch ( err ) { console . error ( 'ERROR:' , err ); } // Revoke permissions and drop child role. // A role can't be dropped until all its permissions are revoked. try { const request = [ 'REVOKE ROLE parent FROM ROLE child' , 'DROP ROLE child' ]; const [ operation ] = await databaseAdminClient . updateDatabaseDdl ({ database : databaseAdminClient . databasePath ( projectId , instanceId , databaseId , ), statements : request , }); console . log ( 'Waiting for operation to complete...' ); await operation . promise (); console . log ( 'Revoked privileges and dropped role child' ); } catch ( err ) { console . error ( 'ERROR:' , err ); } finally { // Close the spanner client when finished. // The databaseAdminClient does not require explicit closure.

### "Get started using Spanner for generative AI applications \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/spanner/docs/vector-search-tutorial](https://docs.cloud.google.com/spanner/docs/vector-search-tutorial)
- Source ID: `site-docs-root`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- In a new tab in Spanner Studio , copy and paste the following query to generate the prompt embedding and perform vector search: -- Generate the prompt embedding WITH embedding AS ( SELECT embeddings . values FROM ML .
- In a new tab in Spanner Studio , copy and paste the following query: SELECT productName , productDescription , inventoryCount , COSINE DISTANCE ( productDescriptionEmbedding , ( SELECT embeddings . values FROM ML .
- In the Spanner Studio page, click add New tab or use the empty editor tab.
- In a new tab in Spanner Studio , copy and paste the following DDL statement to re-create the productDescriptionEmbedding column: ALTER TABLE products DROP COLUMN productDescriptionEmbedding ; ALTER TABLE products ADD COLUMN productDescriptionEmbedding ARRAY<FLOAT32> ( vector length = > VECTOR LENGTH VALUE ); Replace VECTOR LENGTH VALUE with the maximum output dimensions of the embedding model you've chosen.

