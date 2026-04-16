---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.183Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB Omni PostgreSQL 15 support"
feature_slug: "alloydb-omni-postgresql-15-support"
latest_feature_date: "2023-08-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/db-version-policies"
  - "https://docs.cloud.google.com/alloydb/docs/reference/extensions"
  - "https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint"
keywords:
  - "introduces"
  - "preview"
  - "postgresql"
  - "version"
  - "omni"
---

# AlloyDB Omni PostgreSQL 15 support

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB Omni version alloydb-omni-0.3.0-preview-postgresql-15.2 introduces PostgreSQL 15 support.

## Extended Definition

AlloyDB Omni version alloydb-omni-0.3.0-preview-postgresql-15.2 introduces PostgreSQL 15 support.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/db-version-policies](https://docs.cloud.google.com/alloydb/docs/db-version-policies)
- [https://docs.cloud.google.com/alloydb/docs/reference/extensions](https://docs.cloud.google.com/alloydb/docs/reference/extensions)
- [https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint](https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint)

## Supporting Pages

### "Database version policies \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/db-version-policies](https://docs.cloud.google.com/alloydb/docs/db-version-policies)
- Source ID: `site-docs-reference-2`
- Final score: 120
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Major version support timeline The following table shows the dates when AlloyDB support for compatible versions became generally available (GA): PostgreSQL compatible version AlloyDB version support GA date AlloyDB Omni version support GA Date PostgreSQL 18 March 18, 2026 Not applicable PostgreSQL 17 September 22, 2025 Not applicable PostgreSQL 16 October 23, 2024 April 8, 2025 PostgreSQL 15 January 19, 2024 October 11, 2023 PostgreSQL 14 December 12, 2022 Not applicable Major version compatibility release policy We aim to offer timely support for AlloyDB compatibility with new PostgreSQL major versions.
- Major and minor version support AlloyDB supports compatibility with the following PostgreSQL database versions: PostgreSQL compatible version AlloyDB AlloyDB Omni PostgreSQL 18 18.1 Not applicable PostgreSQL 17 (default) 17.5 17.5 PostgreSQL 16 16.9 16.8 16.3 PostgreSQL 15 15.13 15.12 15.7 15.5 15.4 15.2 PostgreSQL 14 14.18 Not applicable PostgreSQL 18 compatibility Before you use PostgreSQL 18 as your database version, consider the following: PostgreSQL 18 isn't available with AlloyDB Omni.
- AlloyDB and AlloyDB Omni version policies AlloyDB for PostgreSQL , which runs in Google Cloud, and AlloyDB Omni , which you install and run on your own computing environment, have related but distinct versioning policies as described in this section.
- We plan to support AlloyDB Omni compatibility with any one major PostgreSQL version for at least as long as the PostgreSQL community supports that same major version—that is, no less than five years.

### "Supported database extensions \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/extensions](https://docs.cloud.google.com/alloydb/docs/reference/extensions)
- Source ID: `site-api-reference`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- However, you can manually install PostGIS to an existing AlloyDB Omni installation. postgres fdw Provides a foreign-data wrapper that you can use to access data stored in external PostgreSQL servers. postgresql-hll Introduces a new data type, hll , which is a HyperLogLog data structure. prefix Provides prefix-matching, plus index support. rdkit Provides functions for comparing, manipulating, and identifying molecular structures. refint Includes functions to check foreign key restraints, the referencing table, and the referenced table. rum Implements support to create RUM indexes for high-performance full-text search.
- However, you can manually install Orafce to an existing AlloyDB Omni installation. pageinspect Inspects the contents of database pages at a low level. pg background Lets you run arbitrary commands in a background worker. pg bigm Provides full text search capability in PostgreSQL using 2-gram (bigram) indexes for faster full text searches.
- This feature is available in ( Preview ). hstore Implements the hstore data type for storing sets of key/value pairs within a single PostgreSQL value. hypopg Provides support for hypothetical indexes. insert username Provides functions for storing the current user's name into a text field.
- Warning: In AlloyDB Omni only, enabling this extension and the PostgreSQL logging collector parameter might result in loss of audit logs.

### "Model endpoint management reference \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint](https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint)
- Source ID: `site-api-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- See Transform functions . google ml.alter model() The following shows how to call the google ml.alter model() SQL function used to update model endpoint metadata: CALL google ml . alter model ( model id = > ' MODEL ID ' , model request url = > ' REQUEST URL ' , model provider = > ' PROVIDER ID ' , model type = > ' MODEL TYPE ' , model qualified name = > ' MODEL QUALIFIED NAME ' , model auth type = > ' AUTH TYPE ' , model auth id = > ' AUTH ID ' , generate headers fn = > ' GENERATE HEADER FUNCTION ' , model in transform fn = > ' INPUT TRANSFORM FUNCTION ' , model out transform fn = > ' OUTPUT TRANSFORM FUNCTION ' ); For information about the values that you must set for each parameter, see Create a model . google ml.drop model() function The following shows how to call the google ml.drop model() SQL function used to drop a model endpoint: CALL google ml . drop model ( ' MODEL ID ' ); Parameter Description MODEL ID A unique ID for the model endpoint that you defined. google ml.list model() function The following shows how to call the google ml.list model() SQL function used to list model endpoint information: SELECT google ml . list model ( ' MODEL ID ' ); Parameter Description MODEL ID A unique ID for the model endpoint that you defined. google ml.model info view view The following shows how to call the google ml.model info view view that is used to list model endpoint information for all model endpoints: SELECT FROM google ml . model info view ; Secrets Use this reference to understand parameters for functions that let you manage secrets. google ml.create sm secret() function The following shows how to call the google ml.create sm secret() SQL function used to add the secret created in Secret Manager: CALL google ml . create sm secret ( secret id = > ' SECRET ID ' , secret path = > 'projects/ project-id /secrets/ SECRET MANAGER SECRET ID /versions/ VERSION NUMBER ' ); Parameter Description SECRET ID The secret ID that you set and is subsequently used when registering a model endpoint.
- The following example shows the header generation function that is used for this text embedding model endpoint when it is registered with model endpoint management: CREATE OR REPLACE FUNCTION header gen fn ( model id VARCHAR ( 100 ), input text TEXT ) RETURNS JSON LANGUAGE plpgsql AS $$ BEGIN RETURN json build object ( 'version' , '2024-01-01' ):: JSON ; END ; $$ ; Header generation function using API Key The following examples show how to set up authentication using the API key. embedding model CREATE OR REPLACE FUNCTION header gen func ( model id VARCHAR ( 100 ), input text TEXT ) RETURNS JSON LANGUAGE plpgsql AS $$ variable conflict use variable BEGIN RETURN json build object ( 'Authorization' , ' API KEY ' ):: JSON ; END ; $$ ; Replace the API KEY with the API key of the model provider. generic model CREATE OR REPLACE FUNCTION header gen func ( model id VARCHAR ( 100 ), response json JSON ) RETURNS JSON LANGUAGE plpgsql AS $$ variable conflict use variable DECLARE transformed output REAL []; BEGIN -- code to add Auth token to API request RETURN json build object ( 'x-api-key' , ' API KEY ' , 'anthropic-version' , '2023-06-01' ):: JSON ; END ; $$ ; Replace the API KEY with the API key of the model provider.
- VERSION NUMBER The version number of the secret ID. google ml.alter sm secret() function The following shows how to call the google ml.alter sm secret() SQL function used to update secret information: CALL google ml . alter sm secret ( secret id = > ' SECRET ID ' , secret path = > 'projects/ project-id /secrets/ SECRET MANAGER SECRET ID /versions/ VERSION NUMBER ' ); For information about the values that you must set for each parameter, see Create a secret . google ml.drop sm secret() function The following shows how to call the google ml.drop sm secret() SQL function used to drop a secret: CALL google ml . drop sm secret ( ' SECRET ID ' ); Parameter Description SECRET ID The secret ID that you set and was subsequently used when registering a model endpoint.
- Set to one of the following: text embedding for text embedding model endpoints multimodal embedding for multimodal embedding model endpoints ( Preview ) reranking for ranking model endpoints ( Preview ) generic for all other model endpoints MODEL QUALIFIED NAME required for text embedding models with built-in support; optional for other model endpoints The fully qualified name for text embedding models with built-in support.

