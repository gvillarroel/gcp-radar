---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:13:35.139Z"
product_name: "Database Center"
product_slug: "database-center"
feature_name: "Gemini-independent access"
feature_slug: "gemini-independent-access"
latest_feature_date: "2024-10-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.DatabaseCenterAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.DatabaseCenterClient"
  - "https://docs.cloud.google.com/database-center/docs/analyze-database-using-gemini"
  - "https://docs.cloud.google.com/database-center/docs/set-up-database-center"
keywords:
  - "gemini"
  - "independent"
  - "access"
  - "database"
  - "center"
  - "can"
  - "be"
  - "accessed"
---

# Gemini-independent access

Product: Database Center
Coverage: MEDIUM

## Step 02 Summary

Database Center can be accessed without enabling Gemini in Databases.

## Extended Definition

Database Center can be accessed without enabling Gemini in Databases.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.DatabaseCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.DatabaseCenterAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.DatabaseCenterClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.DatabaseCenterClient)
- [https://docs.cloud.google.com/database-center/docs/analyze-database-using-gemini](https://docs.cloud.google.com/database-center/docs/analyze-database-using-gemini)
- [https://docs.cloud.google.com/database-center/docs/set-up-database-center](https://docs.cloud.google.com/database-center/docs/set-up-database-center)

## Supporting Pages

### "Class DatabaseCenterAsyncClient (0.7.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.DatabaseCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.DatabaseCenterAsyncClient)
- Source ID: `site-python-reference`
- Final score: 243
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Returns Type Description google.cloud.databasecenter v1beta.types.AggregateIssueStatsResponse The response message containing one of more group of relevant health issues for database resources. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. from service account file from service account file ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import databasecenter v1beta async def sample query database resource groups(): Create a client client = databasecenter v1beta .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import databasecenter v1beta async def sample aggregate issue stats(): Create a client client = databasecenter v1beta .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import databasecenter v1beta async def sample aggregate fleet(): Create a client client = databasecenter v1beta .

### "Class DatabaseCenterClient (0.7.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.DatabaseCenterClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.DatabaseCenterClient)
- Source ID: `site-python-reference`
- Final score: 243
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Returns Type Description google.cloud.databasecenter v1beta.types.AggregateIssueStatsResponse The response message containing one of more group of relevant health issues for database resources. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. from service account file from service account file ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import databasecenter v1beta def sample query database resource groups(): Create a client client = databasecenter v1beta .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import databasecenter v1beta def sample aggregate issue stats(): Create a client client = databasecenter v1beta .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import databasecenter v1beta def sample aggregate fleet(): Create a client client = databasecenter v1beta .

### "Analyze database fleet health using Gemini \_|\_ Database Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/database-center/docs/analyze-database-using-gemini](https://docs.cloud.google.com/database-center/docs/analyze-database-using-gemini)
- Source ID: `site-docs-root`
- Final score: 237
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can use Database Center to learn more about your database fleet health by prompting Gemini to answer questions about the following: Database fleet inventory information Database fleet health Database configuration best practices The following are example prompts to help you learn about your database fleet inventory data: "How many PostgreSQL instances do I have in Tokyo?" "How many of my database resources are not NIST 800-53 compliant?" "Why is it an issue that my database is exposed to ownership chaining?" "Why is it an issue that my database is not logging only DDL statements?" Note: Gemini provides query suggestions and health issues based on all instances and databases in your project.
- Examples of prompts include the following: "Are all of my database backups working correctly?" "How many databases do I have with data protection issues?" "Which of my database resources are located in the US?" "Show me the number of database resources I have by product type and engine." "Show me key:value labeled databases with performance recommendations." (replace "key:value" with your own label) "Show me all Cloud SQL databases running on PostgreSQL version 12." Use Gemini to help you analyze database fleet health As an early-stage technology, Gemini for Google Cloud products can generate output that seems plausible but is factually incorrect.
- Working with Gemini When you prompt Gemini to answer database fleet analysis questions, you can specify any number of the following fields in your prompt: Field Description Examples Product type The Google Cloud database product.
- Home Documentation Databases Database Center Guides Send feedback Analyze database fleet health using Gemini Stay organized with collections Save and categorize content based on your preferences.

### Set up Database Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/database-center/docs/set-up-database-center](https://docs.cloud.google.com/database-center/docs/set-up-database-center)
- Source ID: `site-docs-root`
- Final score: 236
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enable Gemini Cloud Assist You can use Gemini Cloud Assist to track health issues in Database Center, and Gemini Cloud Assist chat to learn more about your database fleet and inventory.
- Grant IAM permissions To use Database Center, you must be granted Identity and Access Management permissions for Database Center.
- Additional IAM privileges might be required for recommendations related to Gemini in Databases or Security Command Center.
- The following permission are available for the Database Center: roles/databasecenter.viewer : grants view access to all instances in the Google Cloud project for which Database Center is enabled. roles/recommender.viewer : grants view access to recommender-related health issues in the Google Cloud project for which Database Center is enabled.

