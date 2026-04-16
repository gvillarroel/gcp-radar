---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.283Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Lambda expressions"
feature_slug: "lambda-expressions"
latest_feature_date: "2023-03-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/graph/iso-standards"
  - "https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands"
  - "https://docs.cloud.google.com/spanner/docs/configure-fgac"
keywords:
  - "lambda"
  - "expressions"
  - "googlesql"
  - "supports"
---

# Lambda expressions

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner GoogleSQL now supports lambda expressions.

## Extended Definition

Spanner GoogleSQL now supports lambda expressions.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/graph/iso-standards](https://docs.cloud.google.com/spanner/docs/graph/iso-standards)
- [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands)
- [https://docs.cloud.google.com/spanner/docs/configure-fgac](https://docs.cloud.google.com/spanner/docs/configure-fgac)

## Supporting Pages

### Spanner Graph and ISO standards \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/graph/iso-standards](https://docs.cloud.google.com/spanner/docs/graph/iso-standards)
- Source ID: `site-docs-reference`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- Supports most data types and expressions in SQL/PGQ and GQL.
- Spanner Graph is based on two ISO standards: ISO/IEC 9075-16:2023 - Information technology — Database languages SQL Property Graph Queries (SQL/PGQ) , Edition 1, 2023 ISO/IEC 39075:2024 - Information technology — Database languages — GQL , Edition 1, 2024 The following tables describe the high-level relationship between SQL/PGQ, GQL, and how Spanner Graph supports these standards.
- The claimed version of The Unicode® Standard shall not be less than 13.0.0." Spanner Graph GQL shares the exact lexical structure with GoogleSQL.
- The page describes how Spanner Graph supports the ISO international standard query language for graph databases.

### "JDBC session management commands (GoogleSQL) \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands)
- Source ID: `site-docs-reference`
- Final score: 54
- Re-rank relevance: N/A

Evidence snippets:
- Example: Savepoint support (Click to expand) The following example shows how to enable and disable savepoints support in the Spanner JDBC driver. try ( Connection connection = DriverManager . getConnection ( String . format ( "jdbc:cloudspanner:/projects/%s/instances/%s/databases/%s" , "my-project" , "my-instance" , "my-database" ))) { // Savepoints can only be used when AutoCommit=false. connection . setAutoCommit ( false ); // Disables setting a savepoint. connection . createStatement (). execute ( "SET SAVEPOINT SUPPORT='DISABLED'" ); // The following statement fails because savepoints have been disabled. connection . setSavepoint ( "my savepoint1" ); // Enables setting a savepoint and releasing a savepoint. // Rolling back to a savepoint is disabled. connection . createStatement (). execute ( "SET SAVEPOINT SUPPORT='FAIL AFTER ROLLBACK'" ); Savepoint mySavepoint2 = connection . setSavepoint ( "my savepoint2" ); connection . createStatement (). execute ( "insert into my table (id, value) values (1, 'One')" ); connection . releaseSavepoint ( mySavepoint2 ); connection . commit (); // Enables setting, releasing and rolling back to a savepoint. connection . createStatement (). execute ( "SET SAVEPOINT SUPPORT='ENABLED'" ); Savepoint mySavepoint3 = connection . setSavepoint ( "my savepoint3" ); connection . createStatement (). execute ( "insert into my table (id, value) values (2, 'Two')" ); connection . rollback ( mySavepoint3 ); } What's next Learn how to connect JDBC to a GoogleSQL-dialect database .
- The Spanner JDBC driver supports three alternatives for executing partitioned queries: SET AUTO PARTITION MODE = true RUN PARTITIONED QUERY sql PARTITION sql followed by multiple RUN PARTITION 'partition-token' Each of these methods are described in the following sections.
- The Spanner JDBC driver (Java Database Connectivity) supports session management statements, which let you modify the state of your connection, execute transactions, and efficiently execute batches of statements.
- Home Documentation Databases Spanner Reference Send feedback JDBC session management commands (GoogleSQL) Stay organized with collections Save and categorize content based on your preferences.

### Configure fine-grained access control \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/configure-fgac](https://docs.cloud.google.com/spanner/docs/configure-fgac)
- Source ID: `site-docs-root`
- Final score: 47
- Re-rank relevance: N/A

Evidence snippets:
- Ruby require "google/cloud/spanner" def spanner add and drop database role project id :, instance id :, database id : project id = "Your Google Cloud project ID" instance id = "Your Spanner instance ID" database id = "Your Spanner database ID" admin client = Google :: Cloud :: Spanner :: Admin :: Database :: V1 :: DatabaseAdmin :: Client . new role parent = "new parent" role child = "new child" db path = admin client . database path project : project id , instance : instance id , database : database id job = admin client . update database ddl database : db path , statements : [ "CREATE ROLE #{ role parent } " , "GRANT SELECT ON TABLE Singers TO ROLE #{ role parent } " , "CREATE ROLE #{ role child } " , "GRANT ROLE #{ role parent } TO ROLE #{ role child } " ] job . wait until done! puts "Created roles #{ role parent } and #{ role child } and granted privileges" job = admin client . update database ddl database : db path , statements : [ "REVOKE ROLE #{ role parent } FROM ROLE #{ role child } " , "DROP ROLE #{ role child } " ] job . wait until done! puts "Revoked privileges and dropped role #{ role child } " end More information About fine-grained access control Fine-grained access control for change streams Fine-grained access control privileges GoogleSQL DDL reference Make schema updates Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To run these commands, you must have the Cloud Asset API enabled on your project, and you must have the cloudasset.assets.searchAllIamPolicies IAM permission. gcloud asset search-all-iam-policies \ --scope = projects/ PROJECT NAME \ --query = 'roles=roles/spanner.databaseRoleUser AND policy:"resource.name" AND policy:/ ROLE NAME AND resource=//spanner.googleapis.com/projects/ PROJECT NAME /instances/ INSTANCE NAME /databases/ DATABASE NAME ' \ --flatten = policy.bindings [] .members [] \ --format = 'table(policy.bindings.members)' Output is similar to the following: MEMBERS 222larabrown@gmail.com View the IAM conditions for a principal To view a list of IAM conditions that were specified when granting the role Cloud Spanner Database Role User to a principal, run the following command: gcloud asset search-all-iam-policies \ --scope = projects/ PROJECT NAME \ --query = 'roles=roles/spanner.databaseRoleUser AND policy:resource.name AND policy:" PRINCIPAL IDENTIFIER " AND resource=//spanner.googleapis.com/projects/ PROJECT NAME /instances/ INSTANCE NAME /databases/ DATABASE NAME ' \ --flatten = policy.bindings [] \ --format = 'table(policy.bindings.condition.expression)' where PRINCIPAL IDENTIFIER is: { user: user-account-name serviceAccount: service-account-name } PRINCIPAL IDENTIFIER examples: user:222larabrown@gmail.com serviceAccount:cs-fgac-sa-1@cloud-spanner-demo.google.com.iam.gserviceaccount.com The following sample output shows two condition expressions.
- Ruby require "google/cloud/spanner" def spanner list database roles project id :, instance id :, database id : project id = "Your Google Cloud project ID" instance id = "Your Spanner instance ID" database id = "Your Spanner database ID" admin client = Google :: Cloud :: Spanner :: Admin :: Database :: V1 :: DatabaseAdmin :: Client . new db path = admin client . database path project : project id , instance : instance id , database : database id result = admin client . list database roles parent : db path puts "List of Database roles:" result . each do role puts role . name end end View the privileges granted to a database role To view the privileges granted to a role, run the following queries: GoogleSQL SELECT FROM INFORMATION SCHEMA .
- To drop the role, go to the Spanner Studio page and enter the following statement: DROP ROLE ROLE NAME ; Click Submit . gcloud To revoke all privileges for a role and then drop the role, use the gcloud spanner databases ddl update command as follows: GoogleSQL gcloud spanner databases ddl update DATABASE NAME \ --instance = INSTANCE NAME \ --ddl = 'REVOKE PERMISSIONS ON TABLE TABLE NAME FROM ROLE ROLE NAME ; DROP ROLE ROLE NAME ;' PostgreSQL gcloud spanner databases ddl update DATABASE NAME \ --instance = INSTANCE NAME \ --ddl = 'REVOKE PERMISSIONS ON TABLE TABLE NAME FROM ROLE NAME ; DROP ROLE ROLE NAME ;' Valid values for PERMISSIONS are SELECT , INSERT , UPDATE , and DELETE .

