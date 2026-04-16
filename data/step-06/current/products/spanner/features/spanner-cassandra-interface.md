---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.171Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner Cassandra interface"
feature_slug: "spanner-cassandra-interface"
latest_feature_date: "2025-09-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/configure-fgac"
  - "https://docs.cloud.google.com/spanner/docs/access-with-fgac"
  - "https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database"
keywords:
  - "cassandra"
  - "interface"
  - "enabling"
  - "access"
  - "generally"
  - "available"
---

# Spanner Cassandra interface

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

The Spanner Cassandra interface is now generally available, enabling access to Spanner using familiar Cassandra tools and syntax.

## Extended Definition

The Spanner Cassandra interface is now generally available, enabling access to Spanner using familiar Cassandra tools and syntax.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/configure-fgac](https://docs.cloud.google.com/spanner/docs/configure-fgac)
- [https://docs.cloud.google.com/spanner/docs/access-with-fgac](https://docs.cloud.google.com/spanner/docs/access-with-fgac)
- [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)

## Supporting Pages

### Configure fine-grained access control \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/configure-fgac](https://docs.cloud.google.com/spanner/docs/configure-fgac)
- Source ID: `site-docs-root`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- Valid values are 0, 1, and 3. if ( policy . getVersion () < 3 ) { // conditional role bindings work with policy version 3 policyVersion = 3 ; } Binding binding1 = Binding . newBuilder () . setRole ( "roles/spanner.fineGrainedAccessUser" ) . addAllMembers ( ImmutableList . of ( iamMember )) . build (); Binding binding2 = Binding . newBuilder () . setRole ( "roles/spanner.databaseRoleUser" ) . setCondition ( Expr . newBuilder (). setDescription ( title ). setExpression ( String . format ( "resource.name.endsWith(\"/databaseRoles/%s\")" , role ) ). setTitle ( title ). build ()) . addAllMembers ( ImmutableList . of ( iamMember )) . build (); ImmutableList<Binding> bindings = ImmutableList . < Binding>builder () . addAll ( policy . getBindingsList ()) . add ( binding1 ) . add ( binding2 ) . build (); Policy policyWithConditions = Policy . newBuilder () . setVersion ( policyVersion ) . setEtag ( policy . getEtag ()) . addAllBindings ( bindings ) . build (); final SetIamPolicyRequest setRequest = SetIamPolicyRequest . newBuilder () . setResource ( DatabaseName . of ( projectId , instanceId , databaseId ). toString ()) . setPolicy ( policyWithConditions ). build (); final Policy response = databaseAdminClient . setIamPolicy ( setRequest ); System . out . printf ( "Enabled fine-grained access in IAM with version %d%n" , response . getVersion ()); } } } Note: The old client library interface code samples for Java are archived in GitHub .
- To run the command, you must have the Cloud Asset API enabled on your project, and you must have the cloudasset.assets.searchAllIamPolicies IAM permission. gcloud asset search-all-iam-policies \ --scope = projects/ PROJECT NAME \ --query = 'roles=roles/spanner.fineGrainedAccessUser AND resource=//spanner.googleapis.com/projects/ PROJECT NAME /instances/ INSTANCE NAME /databases/ DATABASE NAME ' \ --flatten = policy.bindings [] .members [] \ --format = 'table(policy.bindings.members)' Output is similar to the following: MEMBERS user:222larabrown@gmail.com user:baklavainthebalkans@gmail.com serviceAccount:cs-fgac-sa-1@cloud-spanner-demo.google.com.iam.gserviceaccount.com serviceAccount:cs-fgac-sa-2@cloud-spanner-demo.google.com.iam.gserviceaccount.com For more information, see Enabling an API in your Google Cloud project .
- GetPolicyOptions = { requestedPolicyVersion : 3 , }), }); console . log ( newPolicy ); } enableFineGrainedAccess (); Note: The old client library interface code samples for Node.js are archived in GitHub .
- Ruby require "google/cloud/spanner" def spanner add and drop database role project id :, instance id :, database id : project id = "Your Google Cloud project ID" instance id = "Your Spanner instance ID" database id = "Your Spanner database ID" admin client = Google :: Cloud :: Spanner :: Admin :: Database :: V1 :: DatabaseAdmin :: Client . new role parent = "new parent" role child = "new child" db path = admin client . database path project : project id , instance : instance id , database : database id job = admin client . update database ddl database : db path , statements : [ "CREATE ROLE #{ role parent } " , "GRANT SELECT ON TABLE Singers TO ROLE #{ role parent } " , "CREATE ROLE #{ role child } " , "GRANT ROLE #{ role parent } TO ROLE #{ role child } " ] job . wait until done! puts "Created roles #{ role parent } and #{ role child } and granted privileges" job = admin client . update database ddl database : db path , statements : [ "REVOKE ROLE #{ role parent } FROM ROLE #{ role child } " , "DROP ROLE #{ role child } " ] job . wait until done! puts "Revoked privileges and dropped role #{ role child } " end More information About fine-grained access control Fine-grained access control for change streams Fine-grained access control privileges GoogleSQL DDL reference Make schema updates Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Access a database with fine-grained access control \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/access-with-fgac](https://docs.cloud.google.com/spanner/docs/access-with-fgac)
- Source ID: `site-docs-root`
- Final score: 76
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Use these methods to specify a database role when accessing a Spanner database: Console Select a database, and then on the database Overview page, click the Change database role (pencil) icon adjacent to the Current role field.
- When you submit a query, DML, or row operation, Spanner checks authorization by using the following rules: Google Cloud console Spanner first checks if you have database-level Identity and Access Management (IAM) permissions .
- Home Documentation Databases Spanner Guides Send feedback Access a database with fine-grained access control Stay organized with collections Save and categorize content based on your preferences.
- If you have only fine-grained access control privileges and no IAM database-level permissions, you must have been granted access to the spanner sys reader system role or one of its member roles.

### "Best practices for using Spanner as a gaming database \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)
- Source ID: `site-docs-root`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- For more information about schema updates, including how to perform a schema update that requires data validation , see Spanner schema update documentation Consider database access and size When you develop your game server and platform services to use Spanner, consider how your game accesses the database and how to size the database to avoid unnecessary costs.
- When you're evaluating performance, keep short cycle testing to a minimum because Spanner transparently splits your data behind the scenes to optimize performance based on your data access patterns.
- In the following diagram, adding an IndexPartition column to the schema after the launch resolves the hotspot issue, and players are evenly distributed across the available Spanner splits.
- Although typical game engine integrations don't have much flexibility in language selection, for platform services accessing Spanner, there are cases of gaming customers using Java or Go.

