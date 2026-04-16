---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.226Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Named schemas"
feature_slug: "named-schemas"
latest_feature_date: "2024-06-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/information-schema"
  - "https://docs.cloud.google.com/spanner/docs/information-schema-pg"
  - "https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient"
keywords:
  - "schemas"
  - "allowing"
  - "generally"
  - "available"
  - "named"
  - "database"
---

# Named schemas

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Named schemas is now generally available in Spanner, allowing database objects to be grouped in namespaces to avoid naming conflicts and manage fine-grained access control collectively.

## Extended Definition

Named schemas is now generally available in Spanner, allowing database objects to be grouped in namespaces to avoid naming conflicts and manage fine-grained access control collectively.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient)

## Supporting Pages

### "Information schema for GoogleSQL-dialect databases \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- Source ID: `site-docs-reference`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- Returns empty if the default leader is not set: SELECT s . option name , s . option value FROM information schema . database options s WHERE s . option name = 'default leader' Return information about each index in the user's schema: SELECT t . table schema , t . table name , t . index name , t . parent table name FROM information schema . indexes AS t WHERE t . table catalog = '' AND t . table schema NOT IN ( 'information schema' , 'SPANNER SYS' ) AND t . index type != 'PRIMARY KEY' ORDER BY t . table catalog , t . table schema , t . table name , t . index name Returns all the columns that use options other than the default: SELECT t . table schema , t . table name , t . column name , t . option type , t . option value , t . option name FROM information schema . column options AS t WHERE t . table catalog = '' AND t . table schema NOT IN ( 'information schema' , 'SPANNER SYS' ) Returns the current optimizer related database options: SELECT s . option name , s . option value FROM information schema . database options s WHERE s . schema name = '' AND s . option name IN ( 'optimizer version' , 'optimizer statistics package' ) Returns all available statistics packages: SELECT FROM information schema . spanner statistics ; Return all sequences: SELECT FROM information schema . sequences ; Return all sequence options for the sequence named "MySequence" SELECT FROM information schema . sequence options WHERE name = "MySequence" ; Return the names of all property graphs and their definitions: SELECT property graph name , property graph metadata json FROM information schema . property graphs Return the names of all property graphs together with their labels and properties: SELECT property graph name , property graph metadata json . labels , property graph metadata json . propertyDeclarations FROM information schema . property graphs What's next Learn about available Introspection tools to help you investigate database issues.
- Usage INFORMATION SCHEMA tables are available only through SQL interfaces, for example: The executeQuery API The gcloud spanner databases execute-sql command The Spanner Studio page of a database in the Google Cloud console) Other single read methods don't support INFORMATION SCHEMA .
- These include the information schema and the named schemas, which contain the tables you define.
- SCHEMATA The INFORMATION SCHEMA.SCHEMATA table lists the schemas in the database.

### "Information schema for PostgreSQL-dialect databases \_|\_ Spanner \_|\_\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- Source ID: `site-docs-reference`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- Examples Return information about each table in the user's schema: SELECT t . table schema , t . table catalog , t . table name , t . parent table name FROM information schema . tables AS t WHERE t . table schema NOT IN ( 'pg catalog' , 'information schema' , 'SPANNER SYS' ) AND t . table type = 'BASE TABLE' ORDER BY t . table catalog , t . table schema , t . table name Return the name of all tables and views in the information schema for PostgreSQL-dialect databases: SELECT table name FROM information schema . tables WHERE table schema = "information schema" Return information about columns in the user table my table in the default schema: SELECT t . ordinal position , t . column name , t . data type , t . spanner type , t . is nullable FROM information schema . columns AS t WHERE t . table schema = 'public' AND t . table name = 'my table' ORDER BY t . ordinal position Return information about each index in the default schema in the current database: ## What's next {: #whats-next} + Learn about available Introspection tools to help you investigate database issues.
- For example, the following query fetches the names of all user-defined tables in a database: SELECT table schema , table name FROM information schema . tables WHERE table schema NOT IN ( 'pg catalog' , 'information schema' , 'SPANNER SYS' ) AND table type = 'BASE TABLE' Usage information schema tables are available only through SQL interfaces, for example: The executeQuery API The gcloud spanner databases execute-sql command The Query page of a database in the Google Cloud console.
- This is set to public for the default schema and non-empty for named schemas. schema owner character varying The name of the owner of the schema. default character set catalog character varying Not used. default character set schema character varying Not used. default character set name character varying Not used. sql path character varying Not used. effective timestamp timestamp with timezone The timestamp at which all the data in this schema became effective.
- Other notable differences in the information schema for PostgreSQL-dialect databases are: Some of the table columns for open source PostgreSQL are available, but not populated in PostgreSQL-dialect databases.

### "Class DatabaseAdminAsyncClient (3.63.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient)
- Source ID: `site-python-reference`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- If the named database does not exist, returns NOT FOUND .
- The result type for the operation will be Database A Cloud Spanner database. crypto key path crypto key path ( project : str , location : str , key ring : str , crypto key : str ) - > str Returns a fully-qualified crypto key string. crypto key version path crypto key version path ( project : str , location : str , key ring : str , crypto key : str , crypto key version : str ) - > str Returns a fully-qualified crypto key version string. database path database path ( project : str , instance : str , database : str ) - > str Returns a fully-qualified database string. database role path database role path ( project : str , instance : str , database : str , role : str ) - > str Returns a fully-qualified database role string. delete backup delete backup ( request : typing .
- Version latest keyboard arrow down 3.63.0 (latest) 3.62.0 3.61.0 3.60.0 3.59.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.1 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.1 3.39.0 3.38.0 3.37.0 3.36.0 3.35.1 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.1 3.26.0 3.25.0 3.24.0 3.23.0 3.22.2 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.1 3.14.1 3.13.0 3.12.1 3.11.1 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.1.1 2.0.0 1.19.3 1.18.0 1.17.1 1.16.0 1.15.1 1.14.0 1.13.0 1.12.0 1.11.0 1.10.0 DatabaseAdminAsyncClient ( , credentials : typing .
- Returns Type Description google.cloud.spanner admin database v1.types.AddSplitPointsResponse The response for AddSplitPoints][google.spanner.admin.database.v1.DatabaseAdmin.AddSplitPoints] . backup path backup path ( project : str , instance : str , backup : str ) - > str Returns a fully-qualified backup string. backup schedule path backup schedule path ( project : str , instance : str , database : str , schedule : str ) - > str Returns a fully-qualified backup schedule string. cancel operation cancel operation ( request : typing .

