---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.163Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner full-text search index pattern-matching acceleration"
feature_slug: "spanner-full-text-search-index-pattern-matching-acceleration"
latest_feature_date: "2026-01-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/vector-search-tutorial"
  - "https://docs.cloud.google.com/spanner/docs/build-context-gemini-cli"
  - "https://docs.cloud.google.com/spanner/docs/configure-fgac"
keywords:
  - "pattern"
  - "acceleration"
  - "matching"
  - "index"
  - "search"
  - "full"
  - "text"
---

# Spanner full-text search index pattern-matching acceleration

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner search indexes can accelerate pattern-matching expressions including LIKE, STARTS_WITH, ENDS_WITH, and REGEXP_CONTAINS.

## Extended Definition

Spanner search indexes can accelerate pattern-matching expressions including LIKE, STARTS_WITH, ENDS_WITH, and REGEXP_CONTAINS.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/vector-search-tutorial](https://docs.cloud.google.com/spanner/docs/vector-search-tutorial)
- [https://docs.cloud.google.com/spanner/docs/build-context-gemini-cli](https://docs.cloud.google.com/spanner/docs/build-context-gemini-cli)
- [https://docs.cloud.google.com/spanner/docs/configure-fgac](https://docs.cloud.google.com/spanner/docs/configure-fgac)

## Supporting Pages

### Build context sets using Gemini CLI \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/build-context-gemini-cli](https://docs.cloud.google.com/spanner/docs/build-context-gemini-cli)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information about the context set file and facets, see Context sets overview Generate value search queries If you want to generate value searches that specify how the system should search for and match specific values within a concept type, then you can use the /generate targeted value searches command.
- For more information about the value index, see Context sets overview Optional: Generate bulk templates If you want to auto-generate the context set file based on your database schema and data, then you can use the /generate bulk templates command.
- To generate a value index, perform the following steps: Run the /generate targeted value searches command: /generate targeted value searches Enter spanner to select Spanner as the database engine.
- To build an agent context file, perform the following high-level steps: Prepare your environment Generate targeted templates Generate targeted facets Generate targeted value searches Optional.

### "Get started using Spanner for generative AI applications \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/spanner/docs/vector-search-tutorial](https://docs.cloud.google.com/spanner/docs/vector-search-tutorial)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- PREDICT ( MODEL EmbeddingsModel , ( SELECT "I'd like to buy a starter bike for my 3 year old child" as content ) ) ) -- Use embedding to find the most similar entries in the database SELECT productName , productDescription , inventoryCount , ( APPROX COSINE DISTANCE ( productDescriptionEmbedding , embedding . values , options = > JSON '{"num leaves to search": 10}' )) as distance FROM products @{ force index = ProductDescriptionEmbeddingIndex } , embedding WHERE productDescriptionEmbedding IS NOT NULL AND inventoryCount > 0 ORDER BY distance LIMIT 5 ; Click Run .
- The following topics help you learn how to: Create an Google Cloud project Create a Spanner instance Create a database Create an embedding model Load data into Spanner Generate embeddings for data Perform KNN vector similarity search Scale vector search with a vector index Clean up resources To learn about Spanner pricing details, see Spanner pricing .
- To scale and use ANN vector search in Spanner, do the following: Create a vector index Modify your query to use an ANN distance function Create a vector index Spanner accelerates ANN vector searches by using a specialized vector index that leverages Google Research's Scalable Nearest Neighbor (ScaNN) .
- PREDICT ( MODEL EmbeddingsModel , ( SELECT "I'd like to buy a starter bike for my 3 year old child" AS content )) )) AS distance FROM products WHERE inventoryCount > 0 ORDER BY distance LIMIT 5 ; Click Run to return the products that best match your search text.

### Configure fine-grained access control \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/configure-fgac](https://docs.cloud.google.com/spanner/docs/configure-fgac)
- Source ID: `site-docs-root`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- To run these commands, you must have the Cloud Asset API enabled on your project, and you must have the cloudasset.assets.searchAllIamPolicies IAM permission. gcloud asset search-all-iam-policies \ --scope = projects/ PROJECT NAME \ --query = 'roles=roles/spanner.databaseRoleUser AND policy:"resource.name" AND policy:/ ROLE NAME AND resource=//spanner.googleapis.com/projects/ PROJECT NAME /instances/ INSTANCE NAME /databases/ DATABASE NAME ' \ --flatten = policy.bindings [] .members [] \ --format = 'table(policy.bindings.members)' Output is similar to the following: MEMBERS 222larabrown@gmail.com View the IAM conditions for a principal To view a list of IAM conditions that were specified when granting the role Cloud Spanner Database Role User to a principal, run the following command: gcloud asset search-all-iam-policies \ --scope = projects/ PROJECT NAME \ --query = 'roles=roles/spanner.databaseRoleUser AND policy:resource.name AND policy:" PRINCIPAL IDENTIFIER " AND resource=//spanner.googleapis.com/projects/ PROJECT NAME /instances/ INSTANCE NAME /databases/ DATABASE NAME ' \ --flatten = policy.bindings [] \ --format = 'table(policy.bindings.condition.expression)' where PRINCIPAL IDENTIFIER is: { user: user-account-name serviceAccount: service-account-name } PRINCIPAL IDENTIFIER examples: user:222larabrown@gmail.com serviceAccount:cs-fgac-sa-1@cloud-spanner-demo.google.com.iam.gserviceaccount.com The following sample output shows two condition expressions.
- To run the command, you must have the Cloud Asset API enabled on your project, and you must have the cloudasset.assets.searchAllIamPolicies IAM permission. gcloud asset search-all-iam-policies \ --scope = projects/ PROJECT NAME \ --query = 'roles=roles/spanner.fineGrainedAccessUser AND resource=//spanner.googleapis.com/projects/ PROJECT NAME /instances/ INSTANCE NAME /databases/ DATABASE NAME ' \ --flatten = policy.bindings [] .members [] \ --format = 'table(policy.bindings.members)' Output is similar to the following: MEMBERS user:222larabrown@gmail.com user:baklavainthebalkans@gmail.com serviceAccount:cs-fgac-sa-1@cloud-spanner-demo.google.com.iam.gserviceaccount.com serviceAccount:cs-fgac-sa-2@cloud-spanner-demo.google.com.iam.gserviceaccount.com For more information, see Enabling an API in your Google Cloud project .
- To perform this check, run the following command: gcloud asset search-all-iam-policies \ --scope = projects/ PROJECT NAME \ --query = 'roles:roles/spanner.databaseRoleUser AND resource=//spanner.googleapis.com/projects/ PROJECT NAME /instances/ INSTANCE NAME /databases/ DATABASE NAME ' --flatten = policy.bindings [] .members [] The output is similar to the following: ROLE MEMBERS EXPRESSION roles/spanner.databaseRoleUser serviceAccount:cs-fgac-sa-1@... roles/spanner.databaseRoleUser serviceAccount:cs-fgac-sa-2@... resource.type == "spanner…" Note that the first result is missing a condition and therefore the principals in this binding have access to all database roles.
- FullName ())) { if ( ! role ) throw std :: move ( role ). status (); std :: cout << role - > name () << " \n " ; } } C# using Google.Api.Gax ; using Google.Cloud.Spanner.Admin.Database.V1 ; using System ; public class ListDatabaseRolesSample { public PagedEnumerable<ListDatabaseRolesResponse , DatabaseRole > ListDatabaseRoles ( string projectId , string instanceId , string databaseId ) { string parent = $"projects/{projectId}/instances/{instanceId}/databases/{databaseId}" ; var client = DatabaseAdminClient .

