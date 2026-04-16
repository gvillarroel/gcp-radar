---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.216Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Cloud Spanner full-text search"
feature_slug: "cloud-spanner-full-text-search"
latest_feature_date: "2024-08-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/vector-search-tutorial"
  - "https://docs.cloud.google.com/spanner/docs/configure-fgac"
  - "https://docs.cloud.google.com/spanner/docs/build-context-gemini-cli"
keywords:
  - "words"
  - "preview"
  - "search"
  - "full"
  - "text"
  - "table"
  - "adds"
---

# Cloud Spanner full-text search

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Cloud Spanner full-text search (Preview) adds table search by words, phrases, or integers with spelling correction, automatic language detection, and ranked result ordering.

## Extended Definition

Cloud Spanner full-text search (Preview) adds table search by words, phrases, or integers with spelling correction, automatic language detection, and ranked result ordering.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/vector-search-tutorial](https://docs.cloud.google.com/spanner/docs/vector-search-tutorial)
- [https://docs.cloud.google.com/spanner/docs/configure-fgac](https://docs.cloud.google.com/spanner/docs/configure-fgac)
- [https://docs.cloud.google.com/spanner/docs/build-context-gemini-cli](https://docs.cloud.google.com/spanner/docs/build-context-gemini-cli)

## Supporting Pages

### "Get started using Spanner for generative AI applications \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/spanner/docs/vector-search-tutorial](https://docs.cloud.google.com/spanner/docs/vector-search-tutorial)
- Source ID: `site-docs-root`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- PREDICT ( MODEL EmbeddingsModel , ( SELECT "I'd like to buy a starter bike for my 3 year old child" AS content )) )) AS distance FROM products WHERE inventoryCount > 0 ORDER BY distance LIMIT 5 ; Click Run to return the products that best match your search text.
- The following example demonstrates how to register a Vertex AI text embedding model , which is then used to perform similarity search to find similar products in a database.
- This approach is particularly useful for use cases like product search, where users might describe what they want in natural language instead of specific keywords.
- It achieves this by using embeddings, which are numerical representations of text that capture the meaning and context of words.

### Configure fine-grained access control \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/configure-fgac](https://docs.cloud.google.com/spanner/docs/configure-fgac)
- Source ID: `site-docs-root`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- To run these commands, you must have the Cloud Asset API enabled on your project, and you must have the cloudasset.assets.searchAllIamPolicies IAM permission. gcloud asset search-all-iam-policies \ --scope = projects/ PROJECT NAME \ --query = 'roles=roles/spanner.databaseRoleUser AND policy:"resource.name" AND policy:/ ROLE NAME AND resource=//spanner.googleapis.com/projects/ PROJECT NAME /instances/ INSTANCE NAME /databases/ DATABASE NAME ' \ --flatten = policy.bindings [] .members [] \ --format = 'table(policy.bindings.members)' Output is similar to the following: MEMBERS 222larabrown@gmail.com View the IAM conditions for a principal To view a list of IAM conditions that were specified when granting the role Cloud Spanner Database Role User to a principal, run the following command: gcloud asset search-all-iam-policies \ --scope = projects/ PROJECT NAME \ --query = 'roles=roles/spanner.databaseRoleUser AND policy:resource.name AND policy:" PRINCIPAL IDENTIFIER " AND resource=//spanner.googleapis.com/projects/ PROJECT NAME /instances/ INSTANCE NAME /databases/ DATABASE NAME ' \ --flatten = policy.bindings [] \ --format = 'table(policy.bindings.condition.expression)' where PRINCIPAL IDENTIFIER is: { user: user-account-name serviceAccount: service-account-name } PRINCIPAL IDENTIFIER examples: user:222larabrown@gmail.com serviceAccount:cs-fgac-sa-1@cloud-spanner-demo.google.com.iam.gserviceaccount.com The following sample output shows two condition expressions.
- To run the command, you must have the Cloud Asset API enabled on your project, and you must have the cloudasset.assets.searchAllIamPolicies IAM permission. gcloud asset search-all-iam-policies \ --scope = projects/ PROJECT NAME \ --query = 'roles=roles/spanner.fineGrainedAccessUser AND resource=//spanner.googleapis.com/projects/ PROJECT NAME /instances/ INSTANCE NAME /databases/ DATABASE NAME ' \ --flatten = policy.bindings [] .members [] \ --format = 'table(policy.bindings.members)' Output is similar to the following: MEMBERS user:222larabrown@gmail.com user:baklavainthebalkans@gmail.com serviceAccount:cs-fgac-sa-1@cloud-spanner-demo.google.com.iam.gserviceaccount.com serviceAccount:cs-fgac-sa-2@cloud-spanner-demo.google.com.iam.gserviceaccount.com For more information, see Enabling an API in your Google Cloud project .
- PHP use Google\Cloud\Spanner\Admin\Database\V1\Client\DatabaseAdminClient; use Google\Cloud\Spanner\Admin\Database\V1\UpdateDatabaseDdlRequest; / Adds and drops roles to the Singers table in the example database.
- PHP use Google\Cloud\Spanner\Admin\Database\V1\Client\DatabaseAdminClient; use Google\Cloud\Spanner\Admin\Database\V1\UpdateDatabaseDdlRequest; / Adds and drops roles to the Singers table in the example database.

### Build context sets using Gemini CLI \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/build-context-gemini-cli](https://docs.cloud.google.com/spanner/docs/build-context-gemini-cli)
- Source ID: `site-docs-root`
- Final score: 122
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information about the context set file and facets, see Context sets overview Generate value search queries If you want to generate value searches that specify how the system should search for and match specific values within a concept type, then you can use the /generate targeted value searches command.
- Enter the value search configuration as follows: Table name: TABLE NAME Column name: COLUMN NAME Concept type: CONCEPT TYPE Match function: MATCH FUNCTION Description: DESCRIPTION Replace the following: TABLE NAME : The table where the column associated with the concept type exists.
- To build an agent context file, perform the following high-level steps: Prepare your environment Generate targeted templates Generate targeted facets Generate targeted value searches Optional.
- These files contain templates, facets, and value searches that provide context for generating SQL queries from natural language.

