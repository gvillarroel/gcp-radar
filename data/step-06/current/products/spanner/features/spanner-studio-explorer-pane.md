---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.271Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner Studio Explorer pane"
feature_slug: "spanner-studio-explorer-pane"
latest_feature_date: "2023-08-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/configure-fgac"
  - "https://docs.cloud.google.com/spanner/docs/create-query-database-console"
  - "https://docs.cloud.google.com/spanner/docs/vector-search-tutorial"
keywords:
  - "explorer"
  - "pane"
  - "interactive"
  - "includes"
  - "studio"
  - "enables"
  - "preview"
---

# Spanner Studio Explorer pane

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner Studio includes an Explorer pane in Preview that enables interactive browsing, querying, and modifying databases.

## Extended Definition

Spanner Studio includes an Explorer pane in Preview that enables interactive browsing, querying, and modifying databases.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/configure-fgac](https://docs.cloud.google.com/spanner/docs/configure-fgac)
- [https://docs.cloud.google.com/spanner/docs/create-query-database-console](https://docs.cloud.google.com/spanner/docs/create-query-database-console)
- [https://docs.cloud.google.com/spanner/docs/vector-search-tutorial](https://docs.cloud.google.com/spanner/docs/vector-search-tutorial)

## Supporting Pages

### Configure fine-grained access control \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/configure-fgac](https://docs.cloud.google.com/spanner/docs/configure-fgac)
- Source ID: `site-docs-root`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- In the Explorer pane, navigate to the role for which you want to grant privileges.
- In the Explorer pane, navigate to the role for which you want to revoke privilege.
- To drop the role, go to the Spanner Studio page and enter the following statement: DROP ROLE ROLE NAME ; Click Submit . gcloud To revoke all privileges for a role and then drop the role, use the gcloud spanner databases ddl update command as follows: GoogleSQL gcloud spanner databases ddl update DATABASE NAME \ --instance = INSTANCE NAME \ --ddl = 'REVOKE PERMISSIONS ON TABLE TABLE NAME FROM ROLE ROLE NAME ; DROP ROLE ROLE NAME ;' PostgreSQL gcloud spanner databases ddl update DATABASE NAME \ --instance = INSTANCE NAME \ --ddl = 'REVOKE PERMISSIONS ON TABLE TABLE NAME FROM ROLE NAME ; DROP ROLE ROLE NAME ;' Valid values for PERMISSIONS are SELECT , INSERT , UPDATE , and DELETE .
- Grant database roles to principals To access Spanner resources, a principal must be granted the necessary database role using one of the following options: Console On the database Overview page, click SHOW INFO PANEL if the Info panel is not already open.

### "Create and query a database in the Google Cloud console \_|\_ Spanner \_\

- URL: [https://docs.cloud.google.com/spanner/docs/create-query-database-console](https://docs.cloud.google.com/spanner/docs/create-query-database-console)
- Source ID: `site-docs-reference`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- In the Explorer, click more vert View actions next to the Singers table, and then click Preview Data .
- In the Explorer, click more vert View actions next to the Singers table, and then click Preview Data .
- In the Explorer, click more vert View actions next to the Singers table, and then click Preview Data .
- The Google Cloud console displays the Singers table's Spanner Studio page with a new query tab that contains the INSERT statement that you edit to insert a row in the Singers table and view the result of that insertion: GoogleSQL -- Add new values in the VALUES clause in order of the column list. -- Each value must be type compatible with its associated column.

### "Get started using Spanner for generative AI applications \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/spanner/docs/vector-search-tutorial](https://docs.cloud.google.com/spanner/docs/vector-search-tutorial)
- Source ID: `site-docs-root`
- Final score: 63
- Re-rank relevance: N/A

Evidence snippets:
- After the model is added successfully, you'll see it displayed in the Explorer pane.
- In a new tab in Spanner Studio , copy and paste the following DDL statement to re-create the productDescriptionEmbedding column: ALTER TABLE products DROP COLUMN productDescriptionEmbedding ; ALTER TABLE products ADD COLUMN productDescriptionEmbedding ARRAY<FLOAT32> ( vector length = > VECTOR LENGTH VALUE ); Replace VECTOR LENGTH VALUE with the maximum output dimensions of the embedding model you've chosen.
- Load data To load the Cymbal sample data into the products table, do the following: In a new tab in Spanner Studio , copy and paste the following insert statement: INSERT INTO products ( categoryId , productId , productName , productDescription , createTime , inventoryCount , priceInCents ) VALUES ( 1 , 1 , "Cymbal Helios Helmet" , "Safety meets style with the Cymbal children's bike helmet.
- In a new tab in Spanner Studio , copy and paste the following query to generate the prompt embedding and perform vector search: -- Generate the prompt embedding WITH embedding AS ( SELECT embeddings . values FROM ML .

