---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.236Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner Studio"
feature_slug: "spanner-studio"
latest_feature_date: "2024-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/configure-fgac"
  - "https://docs.cloud.google.com/spanner/docs/vector-search-tutorial"
  - "https://docs.cloud.google.com/spanner/docs/information-schema"
keywords:
  - "manipulate"
  - "lets"
  - "studio"
  - "databases"
  - "access"
  - "users"
---

# Spanner Studio

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner Studio lets users access and manipulate Spanner SQL databases by running SQL queries from the Google Cloud Console.

## Extended Definition

Spanner Studio lets users access and manipulate Spanner SQL databases by running SQL queries from the Google Cloud Console.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/configure-fgac](https://docs.cloud.google.com/spanner/docs/configure-fgac)
- [https://docs.cloud.google.com/spanner/docs/vector-search-tutorial](https://docs.cloud.google.com/spanner/docs/vector-search-tutorial)
- [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)

## Supporting Pages

### Configure fine-grained access control \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/configure-fgac](https://docs.cloud.google.com/spanner/docs/configure-fgac)
- Source ID: `site-docs-root`
- Final score: 157
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Fine-grained access control users must begin specifying a database role when they access Spanner databases through the Google Cloud console or the Google Cloud CLI.
- Ruby require "google/cloud/spanner" def spanner enable fine grained access project id :, instance id :, database id :, iam member :, database role :, title : project id = "Your Google Cloud project ID" instance id = "Your Spanner instance ID" database id = "Your Spanner database ID" iam member = "user:alice@example.com" database role = "new parent" title = "condition title" admin client = Google :: Cloud :: Spanner :: Admin :: Database :: V1 :: DatabaseAdmin :: Client . new db path = admin client . database path project : project id , instance : instance id , database : database id policy = admin client . get iam policy resource : db path , options : { requested policy version : 3 } policy . version = 3 if policy . version < 3 binding = Google :: Iam :: V1 :: Binding . new ( role : "roles/spanner.fineGrainedAccessUser" , members : [ iam member ] , condition : Google :: Type :: Expr . new ( title : title , expression : "resource.name.endsWith('/databaseRoles/ #{ database role } ')" ) ) policy . bindings << binding result = admin client . set iam policy resource : db path , policy : policy puts "Enabled fine-grained access in IAM." end Inform users and developers to start using database roles After initial fine-grained access control configuration is complete, inform users and application developers that they must begin using database roles.
- The following example grants the database roles hr rep and hr manager to the principal jsmith@example.com . gcloud spanner databases add - iam - policy - binding myDatabase \ -- instance = myInstance \ -- role = roles / spanner . databaseRoleUser \ -- member = user : jsmith @ example . com \ -- condition = ' expression =( resource . type == "spanner.googleapis.com/DatabaseRole" && ( resource . name . endsWith ( "/hr rep" ) resource . name . endsWith ( "/hr manager" ))), title = HR roles , description = Grant permissions on HR roles ' Client libraries C++ void EnableFineGrainedAccess ( google :: cloud :: spanner admin :: DatabaseAdminClient client , std :: string const & project id , std :: string const & instance id , std :: string const & database id , std :: string const & iam member , std :: string const & database role , std :: string const & title ) { google :: cloud :: spanner :: Database database ( project id , instance id , database id ); google :: iam :: v1 :: GetIamPolicyRequest request ; request . set resource ( database .
- To run the command, you must have the Cloud Asset API enabled on your project, and you must have the cloudasset.assets.searchAllIamPolicies IAM permission. gcloud asset search-all-iam-policies \ --scope = projects/ PROJECT NAME \ --query = 'roles=roles/spanner.fineGrainedAccessUser AND resource=//spanner.googleapis.com/projects/ PROJECT NAME /instances/ INSTANCE NAME /databases/ DATABASE NAME ' \ --flatten = policy.bindings [] .members [] \ --format = 'table(policy.bindings.members)' Output is similar to the following: MEMBERS user:222larabrown@gmail.com user:baklavainthebalkans@gmail.com serviceAccount:cs-fgac-sa-1@cloud-spanner-demo.google.com.iam.gserviceaccount.com serviceAccount:cs-fgac-sa-2@cloud-spanner-demo.google.com.iam.gserviceaccount.com For more information, see Enabling an API in your Google Cloud project .

### "Get started using Spanner for generative AI applications \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/spanner/docs/vector-search-tutorial](https://docs.cloud.google.com/spanner/docs/vector-search-tutorial)
- Source ID: `site-docs-root`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- In a new tab in Spanner Studio , copy and paste the following DDL statement to re-create the productDescriptionEmbedding column: ALTER TABLE products DROP COLUMN productDescriptionEmbedding ; ALTER TABLE products ADD COLUMN productDescriptionEmbedding ARRAY<FLOAT32> ( vector length = > VECTOR LENGTH VALUE ); Replace VECTOR LENGTH VALUE with the maximum output dimensions of the embedding model you've chosen.
- Load data To load the Cymbal sample data into the products table, do the following: In a new tab in Spanner Studio , copy and paste the following insert statement: INSERT INTO products ( categoryId , productId , productName , productDescription , createTime , inventoryCount , priceInCents ) VALUES ( 1 , 1 , "Cymbal Helios Helmet" , "Safety meets style with the Cymbal children's bike helmet.
- If not, enable it manually: Enable Vertex AI API To get the permissions that you need to create instances and databases, ask your administrator to grant you the Cloud Spanner Admin ( roles/spanner.admin ) IAM role on your project.
- In a new tab in Spanner Studio , copy and paste the following query to generate the prompt embedding and perform vector search: -- Generate the prompt embedding WITH embedding AS ( SELECT embeddings . values FROM ML .

### "Information schema for GoogleSQL-dialect databases \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- Source ID: `site-docs-reference`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- For example, the following query fetches the names of all user-defined tables in a database: SELECT table schema , table name FROM information schema . tables WHERE table schema NOT IN ( 'information schema' , 'SPANNER SYS' ) AND table type = 'BASE TABLE' Fine-grained access control users see filtered results for some INFORMATION SCHEMA tables depending on their database role.
- Usage INFORMATION SCHEMA tables are available only through SQL interfaces, for example: The executeQuery API The gcloud spanner databases execute-sql command The Spanner Studio page of a database in the Google Cloud console) Other single read methods don't support INFORMATION SCHEMA .
- All other principals can see only indexes that meet either of the following requirements: Any of the SELECT , INSERT , or UPDATE fine-grained access control privileges are granted at the column level on all columns in the index to the current database role, to roles of which the current database role is a member, or to public .
- All other principals can see only indexes that meet either of the following requirements: Any of the SELECT , INSERT , or UPDATE fine-grained access control privileges are granted at the column level on all columns in the index to the current database role, to roles of which the current database role is a member, or to public .

