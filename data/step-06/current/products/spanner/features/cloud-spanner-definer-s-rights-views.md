---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.266Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Cloud Spanner definer's rights views"
feature_slug: "cloud-spanner-definer-s-rights-views"
latest_feature_date: "2023-09-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/information-schema"
  - "https://docs.cloud.google.com/spanner/docs/information-schema-pg"
  - "https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow"
keywords:
  - "definer"
  - "rights"
  - "allowing"
  - "views"
  - "creating"
  - "users"
  - "adds"
---

# Cloud Spanner definer's rights views

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Cloud Spanner adds support for creating definer's rights views, allowing users to query view contents without direct access to underlying schema objects.

## Extended Definition

Cloud Spanner adds support for creating definer's rights views, allowing users to query view contents without direct access to underlying schema objects.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- [https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow](https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow)

## Supporting Pages

### "Information schema for GoogleSQL-dialect databases \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- Source ID: `site-docs-reference`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- For example, the following query fetches the names of all user-defined tables in a database: SELECT table schema , table name FROM information schema . tables WHERE table schema NOT IN ( 'information schema' , 'SPANNER SYS' ) AND table type = 'BASE TABLE' Fine-grained access control users see filtered results for some INFORMATION SCHEMA tables depending on their database role.
- All other principals can see only views on which the SELECT fine-grained access control privilege is granted to the current database role, to roles of which the current database role is a member, or to public .
- All other principals can see only privileges granted on tables and views to the current database role and to roles of which the current database role is a member, not including public .
- All other principals can see only privileges granted on tables and views to the current database role and to roles of which the current database role is a member, not including public .

### "Information schema for PostgreSQL-dialect databases \_|\_ Spanner \_|\_\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- Source ID: `site-docs-reference`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- Examples Return information about each table in the user's schema: SELECT t . table schema , t . table catalog , t . table name , t . parent table name FROM information schema . tables AS t WHERE t . table schema NOT IN ( 'pg catalog' , 'information schema' , 'SPANNER SYS' ) AND t . table type = 'BASE TABLE' ORDER BY t . table catalog , t . table schema , t . table name Return the name of all tables and views in the information schema for PostgreSQL-dialect databases: SELECT table name FROM information schema . tables WHERE table schema = "information schema" Return information about columns in the user table my table in the default schema: SELECT t . ordinal position , t . column name , t . data type , t . spanner type , t . is nullable FROM information schema . columns AS t WHERE t . table schema = 'public' AND t . table name = 'my table' ORDER BY t . ordinal position Return information about each index in the default schema in the current database: ## What's next {: #whats-next} + Learn about available Introspection tools to help you investigate database issues.
- Possible values and the states they represent are: NULL : the index type is PRIMARY KEY PREPARE : creating empty tables for a new index WRITE ONLY : backfilling data for a new index WRITE ONLY CLEANUP : cleaning up a new index WRITE ONLY VALIDATE UNIQUE : checking uniqueness of data in a new index READ WRITE : normal index operation spanner is managed character varying Whether the index is managed by Spanner.
- Row filtering in information schema tables and views Principals that have database-level IAM permissions and principals who have been granted access to the spanner info reader system role (or to members of that role) can see all rows in all information schema tables and views.
- In accordance with the SQL standard, the string is either YES or NO , rather than a Boolean value. table privileges This row-filtered view lists all fine-grained access control privileges granted on all tables and views to any database role, including public .

### "Build change streams connections using Dataflow \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow](https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow)
- Source ID: `site-docs-root`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- As described in Change streams best practices , we recommend creating a new database for this purpose, rather than allowing the connector to use your application's database to store its metadata table.
- Set IAM Permissions for Dataflow templates Before creating a Dataflow job with the three flex templates listed, ensure that you have the required Identity and Access Management (IAM) permissions for the following service accounts: the Dataflow service account the worker service account If you don't have the required IAM permissions, then you must specify a user-managed worker service account to create the Dataflow job.
- Grant fine-grained access control privileges If you expect any fine-grained access control users to run the Dataflow job, ensure that the users are granted access to a database role that has the SELECT privilege on the change stream and the EXECUTE privilege on the change stream's table-valued function.
- If the buffer has data change records whose timestamp is greater than or equal to the timer's expiration time, it adds those data change records back into the buffer instead of outputting them.

