---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.317Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Cloud Spanner query editor multi-tab and multi-statement support"
feature_slug: "cloud-spanner-query-editor-multi-tab-and-multi-statement-support"
latest_feature_date: "2021-08-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/create-query-database-console"
  - "https://docs.cloud.google.com/spanner/docs/configure-fgac"
  - "https://docs.cloud.google.com/spanner/docs/vector-search-tutorial"
keywords:
  - "editor"
  - "page"
  - "statement"
  - "console"
  - "multi"
  - "query"
---

# Cloud Spanner query editor multi-tab and multi-statement support

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

The Google Cloud Console Query page for Spanner now supports multiple query tabs, allows multiple SQL/DML statements in a single tab, and lets users view per-statement results and query plans via the Results and Explanation subtabs.

## Extended Definition

The Google Cloud Console Query page for Spanner now supports multiple query tabs, allows multiple SQL/DML statements in a single tab, and lets users view per-statement results and query plans via the Results and Explanation subtabs.

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
- Final score: 191
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The Google Cloud console displays the Singers table's Spanner Studio page with a new query tab that contains the INSERT statement that you edit to insert a row in the Singers table and view the result of that insertion: GoogleSQL -- Add new values in the VALUES clause in order of the column list. -- Each value must be type compatible with its associated column.
- The Singers table now has two rows: GoogleSQL PostgreSQL Run a query in the Google Cloud console On the database Overview page, click Spanner Studio in the navigation menu.
- Create a schema for your database Note: Spanner Studio (formerly labeled Query in the Google Cloud console) supports SQL, DML, and DDL operations in a single editor.
- Spanner again displays the Singers table's Spanner Studio page with a new query tab that contains the same INSERT and SELECT statements.

### "Get started using Spanner for generative AI applications \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/spanner/docs/vector-search-tutorial](https://docs.cloud.google.com/spanner/docs/vector-search-tutorial)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In the Google Cloud console, on the project selector page, select or create a Google Cloud project.
- In the Google Cloud console, on the project selector page, select or create a Google Cloud project.
- Delete the database In the Google Cloud console, go to the Spanner Instances page.
- The Google Cloud console displays the Overview page for the instance you created.

### Configure fine-grained access control \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/configure-fgac](https://docs.cloud.google.com/spanner/docs/configure-fgac)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- List database roles Note: Spanner Studio (formerly labeled Query in the Google Cloud console) supports SQL, DML, and DDL operations in a single editor.
- Console To list database roles, enter the following query on the Spanner Studio page for the database: GoogleSQL SELECT FROM INFORMATION SCHEMA .
- Node.js / TODO(developer): Uncomment these variables before running the sample. / // const instanceId = 'my-instance'; // const databaseId = 'my-database'; // const projectId = 'my-project-id'; // Imports the Google Cloud client library const { Spanner } = require ( ' @google-cloud/spanner ' ); // creates a client const spanner = new Spanner ({ projectId : projectId , }); const databaseAdminClient = spanner . getDatabaseAdminClient (); async function addAndDropNewDatabaseRole () { // Creates a new user defined role and grant permissions try { const request = [ 'CREATE ROLE parent' , 'GRANT SELECT ON TABLE Singers TO ROLE parent' , 'CREATE ROLE child' , 'GRANT ROLE parent TO ROLE child' , ]; const [ operation ] = await databaseAdminClient . updateDatabaseDdl ({ database : databaseAdminClient . databasePath ( projectId , instanceId , databaseId , ), statements : request , }); console . log ( 'Waiting for operation to complete...' ); await operation . promise (); console . log ( 'Created roles child and parent and granted privileges' ); } catch ( err ) { console . error ( 'ERROR:' , err ); } // Revoke permissions and drop child role. // A role can't be dropped until all its permissions are revoked. try { const request = [ 'REVOKE ROLE parent FROM ROLE child' , 'DROP ROLE child' ]; const [ operation ] = await databaseAdminClient . updateDatabaseDdl ({ database : databaseAdminClient . databasePath ( projectId , instanceId , databaseId , ), statements : request , }); console . log ( 'Waiting for operation to complete...' ); await operation . promise (); console . log ( 'Revoked privileges and dropped role child' ); } catch ( err ) { console . error ( 'ERROR:' , err ); } finally { // Close the spanner client when finished. // The databaseAdminClient does not require explicit closure.
- Node.js / TODO(developer): Uncomment these variables before running the sample. / // const instanceId = 'my-instance'; // const databaseId = 'my-database'; // const projectId = 'my-project-id'; // Imports the Google Cloud client library const { Spanner } = require ( ' @google-cloud/spanner ' ); // creates a client const spanner = new Spanner ({ projectId : projectId , }); const databaseAdminClient = spanner . getDatabaseAdminClient (); async function addAndDropNewDatabaseRole () { // Creates a new user defined role and grant permissions try { const request = [ 'CREATE ROLE parent' , 'GRANT SELECT ON TABLE Singers TO ROLE parent' , 'CREATE ROLE child' , 'GRANT ROLE parent TO ROLE child' , ]; const [ operation ] = await databaseAdminClient . updateDatabaseDdl ({ database : databaseAdminClient . databasePath ( projectId , instanceId , databaseId , ), statements : request , }); console . log ( 'Waiting for operation to complete...' ); await operation . promise (); console . log ( 'Created roles child and parent and granted privileges' ); } catch ( err ) { console . error ( 'ERROR:' , err ); } // Revoke permissions and drop child role. // A role can't be dropped until all its permissions are revoked. try { const request = [ 'REVOKE ROLE parent FROM ROLE child' , 'DROP ROLE child' ]; const [ operation ] = await databaseAdminClient . updateDatabaseDdl ({ database : databaseAdminClient . databasePath ( projectId , instanceId , databaseId , ), statements : request , }); console . log ( 'Waiting for operation to complete...' ); await operation . promise (); console . log ( 'Revoked privileges and dropped role child' ); } catch ( err ) { console . error ( 'ERROR:' , err ); } finally { // Close the spanner client when finished. // The databaseAdminClient does not require explicit closure.

