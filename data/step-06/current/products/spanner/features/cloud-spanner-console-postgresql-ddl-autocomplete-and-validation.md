---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.289Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Cloud Spanner console PostgreSQL DDL autocomplete and validation"
feature_slug: "cloud-spanner-console-postgresql-ddl-autocomplete-and-validation"
latest_feature_date: "2023-02-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/configure-fgac"
  - "https://docs.cloud.google.com/spanner/docs/create-query-database-console"
  - "https://docs.cloud.google.com/spanner/docs/change-streams/manage"
keywords:
  - "validation"
  - "autocomplete"
  - "syntax"
  - "provides"
  - "postgresql"
  - "console"
---

# Cloud Spanner console PostgreSQL DDL autocomplete and validation

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Cloud Spanner provides autocomplete and syntax validation for DDL statements in the Google Cloud console when editing PostgreSQL-dialect databases.

## Extended Definition

Cloud Spanner provides autocomplete and syntax validation for DDL statements in the Google Cloud console when editing PostgreSQL-dialect databases.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/configure-fgac](https://docs.cloud.google.com/spanner/docs/configure-fgac)
- [https://docs.cloud.google.com/spanner/docs/create-query-database-console](https://docs.cloud.google.com/spanner/docs/create-query-database-console)
- [https://docs.cloud.google.com/spanner/docs/change-streams/manage](https://docs.cloud.google.com/spanner/docs/change-streams/manage)

## Supporting Pages

### "Create and query a database in the Google Cloud console \_|\_ Spanner \_\

- URL: [https://docs.cloud.google.com/spanner/docs/create-query-database-console](https://docs.cloud.google.com/spanner/docs/create-query-database-console)
- Source ID: `site-docs-reference`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- The Singers table now has two rows: GoogleSQL PostgreSQL Run a query in the Google Cloud console On the database Overview page, click Spanner Studio in the navigation menu.
- Insert and modify data The Google Cloud console provides an interface for inserting, editing, and deleting data.
- INSERT INTO Singers ( SingerId , FirstName , LastName , SingerInfo , BirthDate ) VALUES ( < SingerId > , -- type: INT64 < FirstName > , -- type: STRING(1024) < LastName > , -- type: STRING(1024) < SingerInfo > , -- type: BYTES(MAX) < BirthDate > -- type: DATE ) THEN RETURN SingerId , FirstName , LastName , SingerInfo , BirthDate ; PostgreSQL -- Add new values in the VALUES clause in order of the column list. -- Each value must be type compatible with its associated column.
- INSERT INTO Singers ( SingerId , BirthDate , FirstName , LastName , SingerInfo ) VALUES ( 1 , -- type: INT64 NULL , -- type: DATE 'Marc' , -- type: STRING(1024) 'Richards' , -- type: STRING(1024) NULL -- type: BYTES(MAX) ) THEN RETURN SingerId , FirstName , LastName , SingerInfo , BirthDate ; PostgreSQL -- Add new values in the VALUES clause in order of the column list. -- Each value must be type compatible with its associated column.

### Create and manage change streams \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams/manage](https://docs.cloud.google.com/spanner/docs/change-streams/manage)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- GoogleSQL The DDL syntax for creating a change stream using GoogleSQL looks like this: CREATE CHANGE STREAM CHANGE STREAM NAME [ FOR column or table watching definition [ , ... ] ] [ OPTIONS ( retention period = timespan , value capture type = type , exclude ttl deletes = boolean , exclude insert = boolean , exclude update = boolean , exclude delete = boolean , allow txn exclusion = boolean ) ] PostgreSQL The DDL syntax for creating a change stream using PostgreSQL looks like this: CREATE CHANGE STREAM CHANGE STREAM NAME [ FOR column or table watching definition [, ... ] ] [ WITH ( retention period = timespan , value capture type = type , exclude ttl deletes = boolean , exclude insert = boolean , exclude update = boolean , exclude delete = boolean , allow txn exclusion = boolean ) ] A new change stream begins to watch its assigned schema objects as soon as the long-running operation that created it completes.
- List and view change streams The Google Cloud console provides a web interface for listing and reviewing a database's change stream definitions.
- GoogleSQL To create a change stream that can exclude records from specified write transactions, run the following: CREATE CHANGE STREAM CHANGE STREAM NAME FOR ALL OPTIONS ( allow txn exclusion = true ) Replace the following: CHANGE STREAM NAME : the name of the new change stream The following example creates a change stream named NewChangeStream that can exclude records from specified write transactions: CREATE CHANGE STREAM NewChangeStream FOR ALL OPTIONS ( allow txn exclusion = true ) PostgreSQL To create a change stream that can exclude records from specified write transactions, run the following: CREATE CHANGE STREAM CHANGE STREAM NAME FOR ALL WITH ( allow txn exclusion = true ) Replace the following: CHANGE STREAM NAME : the name of the new change stream The following example creates a change stream named NewChangeStream that can exclude records from specified write transactions,: CREATE CHANGE STREAM NewChangeStream FOR ALL WITH ( allow txn exclusion = true ) To enable or disable the transaction-level records exclusion from an existing change stream, see Modify transaction-level records exclusion .
- Two examples: GoogleSQL CREATE CHANGE STREAM LongerDataRetention FOR ALL OPTIONS ( retention period = '36h' ); CREATE CHANGE STREAM MaximumDataRetention FOR ALL OPTIONS ( retention period = '7d' ); PostgreSQL CREATE CHANGE STREAM LongerDataRetention FOR ALL WITH ( retention period = '36h' ); CREATE CHANGE STREAM MaximumDataRetention FOR ALL WITH ( retention period = '7d' ); Specify a different value capture type To specify a change stream value capture type other than OLD AND NEW VALUES , set the value capture type to either NEW VALUES or NEW ROW , as shown in the following examples: GoogleSQL CREATE CHANGE STREAM NewRowChangeStream FOR ALL OPTIONS ( value capture type = 'NEW ROW' ); CREATE CHANGE STREAM NewValuesChangeStream FOR ALL OPTIONS ( value capture type = 'NEW VALUES' ); PostgreSQL CREATE CHANGE STREAM NewRowChangeStream FOR ALL WITH ( value capture type = 'NEW ROW' ); CREATE CHANGE STREAM NewValuesChangeStream FOR ALL WITH ( value capture type = 'NEW VALUES' ); Filter TTL-based deletes You can filter TTL-based deletes from your change stream's scope using the exclude ttl deletes filter.

### Configure fine-grained access control \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/configure-fgac](https://docs.cloud.google.com/spanner/docs/configure-fgac)
- Source ID: `site-docs-root`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- For example, to revoke SELECT , INSERT , and UPDATE permissions on tables employees and contractors from the database role hr manager , enter the following statement: REVOKE SELECT , INSERT , UPDATE ON TABLE employees , contractors FROM ROLE hr manager ; PostgreSQL For syntax details for the REVOKE statement, see PostgreSQL data definition language .
- Node.js / TODO(developer): Uncomment these variables before running the sample. / // const instanceId = 'my-instance'; // const databaseId = 'my-database'; // const projectId = 'my-project-id'; // Imports the Google Cloud client library const { Spanner } = require ( ' @google-cloud/spanner ' ); // creates a client const spanner = new Spanner ({ projectId : projectId , }); const databaseAdminClient = spanner . getDatabaseAdminClient (); async function addAndDropNewDatabaseRole () { // Creates a new user defined role and grant permissions try { const request = [ 'CREATE ROLE parent' , 'GRANT SELECT ON TABLE Singers TO ROLE parent' , 'CREATE ROLE child' , 'GRANT ROLE parent TO ROLE child' , ]; const [ operation ] = await databaseAdminClient . updateDatabaseDdl ({ database : databaseAdminClient . databasePath ( projectId , instanceId , databaseId , ), statements : request , }); console . log ( 'Waiting for operation to complete...' ); await operation . promise (); console . log ( 'Created roles child and parent and granted privileges' ); } catch ( err ) { console . error ( 'ERROR:' , err ); } // Revoke permissions and drop child role. // A role can't be dropped until all its permissions are revoked. try { const request = [ 'REVOKE ROLE parent FROM ROLE child' , 'DROP ROLE child' ]; const [ operation ] = await databaseAdminClient . updateDatabaseDdl ({ database : databaseAdminClient . databasePath ( projectId , instanceId , databaseId , ), statements : request , }); console . log ( 'Waiting for operation to complete...' ); await operation . promise (); console . log ( 'Revoked privileges and dropped role child' ); } catch ( err ) { console . error ( 'ERROR:' , err ); } finally { // Close the spanner client when finished. // The databaseAdminClient does not require explicit closure.
- Node.js / TODO(developer): Uncomment these variables before running the sample. / // const instanceId = 'my-instance'; // const databaseId = 'my-database'; // const projectId = 'my-project-id'; // Imports the Google Cloud client library const { Spanner } = require ( ' @google-cloud/spanner ' ); // creates a client const spanner = new Spanner ({ projectId : projectId , }); const databaseAdminClient = spanner . getDatabaseAdminClient (); async function addAndDropNewDatabaseRole () { // Creates a new user defined role and grant permissions try { const request = [ 'CREATE ROLE parent' , 'GRANT SELECT ON TABLE Singers TO ROLE parent' , 'CREATE ROLE child' , 'GRANT ROLE parent TO ROLE child' , ]; const [ operation ] = await databaseAdminClient . updateDatabaseDdl ({ database : databaseAdminClient . databasePath ( projectId , instanceId , databaseId , ), statements : request , }); console . log ( 'Waiting for operation to complete...' ); await operation . promise (); console . log ( 'Created roles child and parent and granted privileges' ); } catch ( err ) { console . error ( 'ERROR:' , err ); } // Revoke permissions and drop child role. // A role can't be dropped until all its permissions are revoked. try { const request = [ 'REVOKE ROLE parent FROM ROLE child' , 'DROP ROLE child' ]; const [ operation ] = await databaseAdminClient . updateDatabaseDdl ({ database : databaseAdminClient . databasePath ( projectId , instanceId , databaseId , ), statements : request , }); console . log ( 'Waiting for operation to complete...' ); await operation . promise (); console . log ( 'Revoked privileges and dropped role child' ); } catch ( err ) { console . error ( 'ERROR:' , err ); } finally { // Close the spanner client when finished. // The databaseAdminClient does not require explicit closure.
- Node.js / TODO(developer): Uncomment these variables before running the sample. / // const instanceId = 'my-instance'; // const databaseId = 'my-database'; // const projectId = 'my-project-id'; // Imports the Google Cloud client library const { Spanner } = require ( ' @google-cloud/spanner ' ); // creates a client const spanner = new Spanner ({ projectId : projectId , }); const databaseAdminClient = spanner . getDatabaseAdminClient (); async function getDatabaseRoles () { // Fetching database roles const [ databaseRoles ] = await databaseAdminClient . listDatabaseRoles ({ parent : databaseAdminClient . databasePath ( projectId , instanceId , databaseId , ), }); console . log ( Roles for Database: ${ databaseAdminClient . databasePath ( projectId , instanceId , databaseId , ) } , ); databaseRoles . forEach ( role = > { console . log ( Role: ${ role . name } ); }); } getDatabaseRoles (); Note: The old client library interface code samples for Node.js are archived in GitHub .

