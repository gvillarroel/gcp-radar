---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.287Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Fine-grained access control"
feature_slug: "fine-grained-access-control"
latest_feature_date: "2023-03-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/access-with-fgac"
  - "https://docs.cloud.google.com/spanner/docs/configure-fgac"
  - "https://docs.cloud.google.com/spanner/docs/information-schema-pg"
keywords:
  - "grained"
  - "fine"
  - "control"
  - "access"
  - "generally"
  - "available"
---

# Fine-grained access control

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner fine-grained access control is now generally available, combining IAM with traditional SQL role-based access control; Fine-grained access control for Cloud Spanner lets you secure databases at the table and column level using RDBMS-style roles with GRANT and REVOKE SQL statements.

## Extended Definition

Spanner fine-grained access control is now generally available, combining IAM with traditional SQL role-based access control; Fine-grained access control for Cloud Spanner lets you secure databases at the table and column level using RDBMS-style roles with GRANT and REVOKE SQL statements.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/access-with-fgac](https://docs.cloud.google.com/spanner/docs/access-with-fgac)
- [https://docs.cloud.google.com/spanner/docs/configure-fgac](https://docs.cloud.google.com/spanner/docs/configure-fgac)
- [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)

## Supporting Pages

### "Access a database with fine-grained access control \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/access-with-fgac](https://docs.cloud.google.com/spanner/docs/access-with-fgac)
- Source ID: `site-docs-root`
- Final score: 270
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Databases Spanner Guides Send feedback Access a database with fine-grained access control Stay organized with collections Save and categorize content based on your preferences.
- If you have only fine-grained access control privileges and no IAM database-level permissions, you must have been granted access to the spanner sys reader system role or one of its member roles.
- As a fine-grained access control user, you must select a database role to use to execute SQL statements and queries, and to perform row operations on a database.
- Google Cloud SDK If you specify a database role when you submit a query, DML, or a row operation, Spanner checks fine-grained access control privileges.

### Configure fine-grained access control \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/configure-fgac](https://docs.cloud.google.com/spanner/docs/configure-fgac)
- Source ID: `site-docs-root`
- Final score: 238
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Ruby require "google/cloud/spanner" def spanner add and drop database role project id :, instance id :, database id : project id = "Your Google Cloud project ID" instance id = "Your Spanner instance ID" database id = "Your Spanner database ID" admin client = Google :: Cloud :: Spanner :: Admin :: Database :: V1 :: DatabaseAdmin :: Client . new role parent = "new parent" role child = "new child" db path = admin client . database path project : project id , instance : instance id , database : database id job = admin client . update database ddl database : db path , statements : [ "CREATE ROLE #{ role parent } " , "GRANT SELECT ON TABLE Singers TO ROLE #{ role parent } " , "CREATE ROLE #{ role child } " , "GRANT ROLE #{ role parent } TO ROLE #{ role child } " ] job . wait until done! puts "Created roles #{ role parent } and #{ role child } and granted privileges" job = admin client . update database ddl database : db path , statements : [ "REVOKE ROLE #{ role parent } FROM ROLE #{ role child } " , "DROP ROLE #{ role child } " ] job . wait until done! puts "Revoked privileges and dropped role #{ role child } " end More information About fine-grained access control Fine-grained access control for change streams Fine-grained access control privileges GoogleSQL DDL reference Make schema updates Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Ruby require "google/cloud/spanner" def spanner enable fine grained access project id :, instance id :, database id :, iam member :, database role :, title : project id = "Your Google Cloud project ID" instance id = "Your Spanner instance ID" database id = "Your Spanner database ID" iam member = "user:alice@example.com" database role = "new parent" title = "condition title" admin client = Google :: Cloud :: Spanner :: Admin :: Database :: V1 :: DatabaseAdmin :: Client . new db path = admin client . database path project : project id , instance : instance id , database : database id policy = admin client . get iam policy resource : db path , options : { requested policy version : 3 } policy . version = 3 if policy . version < 3 binding = Google :: Iam :: V1 :: Binding . new ( role : "roles/spanner.fineGrainedAccessUser" , members : [ iam member ] , condition : Google :: Type :: Expr . new ( title : title , expression : "resource.name.endsWith('/databaseRoles/ #{ database role } ')" ) ) policy . bindings << binding result = admin client . set iam policy resource : db path , policy : policy puts "Enabled fine-grained access in IAM." end Inform users and developers to start using database roles After initial fine-grained access control configuration is complete, inform users and application developers that they must begin using database roles.
- Then on the Edit condition page, click Condition editor , make corrections, and click Save twice. gcloud Enable fine-grained access control for the principal by using the gcloud spanner databases add-iam-policy-binding command as follows: gcloud spanner databases add-iam-policy-binding DATABASE NAME \ --instance = INSTANCE NAME \ --role = roles/spanner.fineGrainedAccessUser \ --member = MEMBER NAME \ --condition = None MEMBER NAME is the identifier for the principal.
- GoogleSQL gcloud spanner databases ddl update DATABASE NAME --instance = INSTANCE NAME \ --ddl = 'CREATE ROLE ROLE NAME ; GRANT PRIVILEGES ON TABLE TABLES TO ROLE ROLE NAME ;' PostgreSQL gcloud spanner databases ddl update DATABASE NAME --instance = INSTANCE NAME \ --ddl = 'CREATE ROLE ROLE NAME ; GRANT PRIVILEGES ON TABLE TABLES TO ROLE NAME ;' Replace the following: PRIVILEGES is a comma-delimited list of fine-grained access control privileges.

### "Information schema for PostgreSQL-dialect databases \_|\_ Spanner \_|\_\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- Source ID: `site-docs-reference`
- Final score: 184
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For PostgreSQL-dialect databases, the default is public . change stream name character varying The name of the change stream. option name character varying The name of the change stream option. option type character varying The data type of the change stream option. option value character varying The value of the change stream option. change stream privileges This row-filtered view lists all fine-grained access control privileges granted on all change streams to any database role, including public .
- The value of this column is parsable as part of a query. option type character varying A data type name that is the type of this option value. column privileges This row-filtered view lists all fine-grained access control privileges granted on all columns to any database role, including public .
- All other principals can see only tables that meet either of the following requirements: The SELECT , INSERT , UPDATE , or DELETE fine-grained access control privileges are granted on the table to the current database role, to roles of which the current database role is a member, or to public .
- All other principals can see only columns that have any fine-grained access control privileges granted on them (or the SELECT , INSERT or UPDATE privileges granted on their containing tables) to the current database role, to roles of which the current database role is a member, or to public .

