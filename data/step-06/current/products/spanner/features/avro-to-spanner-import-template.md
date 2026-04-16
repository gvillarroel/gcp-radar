---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.350Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Avro to Spanner import template"
feature_slug: "avro-to-spanner-import-template"
latest_feature_date: "2019-01-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminClient"
  - "https://docs.cloud.google.com/spanner/docs/configure-fgac"
keywords:
  - "template"
  - "avro"
  - "importing"
  - "other"
  - "import"
  - "databases"
  - "adds"
---

# Avro to Spanner import template

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Cloud Spanner adds support for importing data from other databases using the Avro to Spanner template.

## Extended Definition

Cloud Spanner adds support for importing data from other databases using the Avro to Spanner template.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminClient)
- [https://docs.cloud.google.com/spanner/docs/configure-fgac](https://docs.cloud.google.com/spanner/docs/configure-fgac)

## Supporting Pages

### "Class DatabaseAdminAsyncClient (3.63.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient)
- Source ID: `site-python-reference`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import spanner admin database v1 async def sample list databases(): Create a client client = spanner admin database v1.
- Returns Type Description google.cloud.spanner admin database v1.types.AddSplitPointsResponse The response for AddSplitPoints][google.spanner.admin.database.v1.DatabaseAdmin.AddSplitPoints] . backup path backup path ( project : str , instance : str , backup : str ) - > str Returns a fully-qualified backup string. backup schedule path backup schedule path ( project : str , instance : str , database : str , schedule : str ) - > str Returns a fully-qualified backup schedule string. cancel operation cancel operation ( request : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import spanner admin database v1 from google.iam.v1 import iam policy pb2 # type: ignore async def sample test iam permissions(): Create a client client = spanner admin database v1.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]

### "Class DatabaseAdminClient (3.63.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminClient)
- Source ID: `site-python-reference`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import spanner admin database v1 def sample list databases(): Create a client client = spanner admin database v1.
- Returns Type Description google.cloud.spanner admin database v1.types.AddSplitPointsResponse The response for AddSplitPoints][google.spanner.admin.database.v1.DatabaseAdmin.AddSplitPoints] . backup path backup path ( project : str , instance : str , backup : str ) - > str Returns a fully-qualified backup string. backup schedule path backup schedule path ( project : str , instance : str , database : str , schedule : str ) - > str Returns a fully-qualified backup schedule string. cancel operation cancel operation ( request : typing .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import spanner admin database v1 from google.iam.v1 import iam policy pb2 # type: ignore def sample test iam permissions(): Create a client client = spanner admin database v1.

### Configure fine-grained access control \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/configure-fgac](https://docs.cloud.google.com/spanner/docs/configure-fgac)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- Node.js / TODO(developer): Uncomment these variables before running the sample. / // const instanceId = 'my-instance'; // const databaseId = 'my-database'; // const projectId = 'my-project-id'; // Imports the Google Cloud client library const { Spanner } = require ( ' @google-cloud/spanner ' ); // creates a client const spanner = new Spanner ({ projectId : projectId , }); const databaseAdminClient = spanner . getDatabaseAdminClient (); async function addAndDropNewDatabaseRole () { // Creates a new user defined role and grant permissions try { const request = [ 'CREATE ROLE parent' , 'GRANT SELECT ON TABLE Singers TO ROLE parent' , 'CREATE ROLE child' , 'GRANT ROLE parent TO ROLE child' , ]; const [ operation ] = await databaseAdminClient . updateDatabaseDdl ({ database : databaseAdminClient . databasePath ( projectId , instanceId , databaseId , ), statements : request , }); console . log ( 'Waiting for operation to complete...' ); await operation . promise (); console . log ( 'Created roles child and parent and granted privileges' ); } catch ( err ) { console . error ( 'ERROR:' , err ); } // Revoke permissions and drop child role. // A role can't be dropped until all its permissions are revoked. try { const request = [ 'REVOKE ROLE parent FROM ROLE child' , 'DROP ROLE child' ]; const [ operation ] = await databaseAdminClient . updateDatabaseDdl ({ database : databaseAdminClient . databasePath ( projectId , instanceId , databaseId , ), statements : request , }); console . log ( 'Waiting for operation to complete...' ); await operation . promise (); console . log ( 'Revoked privileges and dropped role child' ); } catch ( err ) { console . error ( 'ERROR:' , err ); } finally { // Close the spanner client when finished. // The databaseAdminClient does not require explicit closure.
- Node.js / TODO(developer): Uncomment these variables before running the sample. / // const instanceId = 'my-instance'; // const databaseId = 'my-database'; // const projectId = 'my-project-id'; // Imports the Google Cloud client library const { Spanner } = require ( ' @google-cloud/spanner ' ); // creates a client const spanner = new Spanner ({ projectId : projectId , }); const databaseAdminClient = spanner . getDatabaseAdminClient (); async function addAndDropNewDatabaseRole () { // Creates a new user defined role and grant permissions try { const request = [ 'CREATE ROLE parent' , 'GRANT SELECT ON TABLE Singers TO ROLE parent' , 'CREATE ROLE child' , 'GRANT ROLE parent TO ROLE child' , ]; const [ operation ] = await databaseAdminClient . updateDatabaseDdl ({ database : databaseAdminClient . databasePath ( projectId , instanceId , databaseId , ), statements : request , }); console . log ( 'Waiting for operation to complete...' ); await operation . promise (); console . log ( 'Created roles child and parent and granted privileges' ); } catch ( err ) { console . error ( 'ERROR:' , err ); } // Revoke permissions and drop child role. // A role can't be dropped until all its permissions are revoked. try { const request = [ 'REVOKE ROLE parent FROM ROLE child' , 'DROP ROLE child' ]; const [ operation ] = await databaseAdminClient . updateDatabaseDdl ({ database : databaseAdminClient . databasePath ( projectId , instanceId , databaseId , ), statements : request , }); console . log ( 'Waiting for operation to complete...' ); await operation . promise (); console . log ( 'Revoked privileges and dropped role child' ); } catch ( err ) { console . error ( 'ERROR:' , err ); } finally { // Close the spanner client when finished. // The databaseAdminClient does not require explicit closure.
- Ruby require "google/cloud/spanner" def spanner add and drop database role project id :, instance id :, database id : project id = "Your Google Cloud project ID" instance id = "Your Spanner instance ID" database id = "Your Spanner database ID" admin client = Google :: Cloud :: Spanner :: Admin :: Database :: V1 :: DatabaseAdmin :: Client . new role parent = "new parent" role child = "new child" db path = admin client . database path project : project id , instance : instance id , database : database id job = admin client . update database ddl database : db path , statements : [ "CREATE ROLE #{ role parent } " , "GRANT SELECT ON TABLE Singers TO ROLE #{ role parent } " , "CREATE ROLE #{ role child } " , "GRANT ROLE #{ role parent } TO ROLE #{ role child } " ] job . wait until done! puts "Created roles #{ role parent } and #{ role child } and granted privileges" job = admin client . update database ddl database : db path , statements : [ "REVOKE ROLE #{ role parent } FROM ROLE #{ role child } " , "DROP ROLE #{ role child } " ] job . wait until done! puts "Revoked privileges and dropped role #{ role child } " end More information About fine-grained access control Fine-grained access control for change streams Fine-grained access control privileges GoogleSQL DDL reference Make schema updates Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To run these commands, you must have the Cloud Asset API enabled on your project, and you must have the cloudasset.assets.searchAllIamPolicies IAM permission. gcloud asset search-all-iam-policies \ --scope = projects/ PROJECT NAME \ --query = 'roles=roles/spanner.databaseRoleUser AND policy:"resource.name" AND policy:/ ROLE NAME AND resource=//spanner.googleapis.com/projects/ PROJECT NAME /instances/ INSTANCE NAME /databases/ DATABASE NAME ' \ --flatten = policy.bindings [] .members [] \ --format = 'table(policy.bindings.members)' Output is similar to the following: MEMBERS 222larabrown@gmail.com View the IAM conditions for a principal To view a list of IAM conditions that were specified when granting the role Cloud Spanner Database Role User to a principal, run the following command: gcloud asset search-all-iam-policies \ --scope = projects/ PROJECT NAME \ --query = 'roles=roles/spanner.databaseRoleUser AND policy:resource.name AND policy:" PRINCIPAL IDENTIFIER " AND resource=//spanner.googleapis.com/projects/ PROJECT NAME /instances/ INSTANCE NAME /databases/ DATABASE NAME ' \ --flatten = policy.bindings [] \ --format = 'table(policy.bindings.condition.expression)' where PRINCIPAL IDENTIFIER is: { user: user-account-name serviceAccount: service-account-name } PRINCIPAL IDENTIFIER examples: user:222larabrown@gmail.com serviceAccount:cs-fgac-sa-1@cloud-spanner-demo.google.com.iam.gserviceaccount.com The following sample output shows two condition expressions.

