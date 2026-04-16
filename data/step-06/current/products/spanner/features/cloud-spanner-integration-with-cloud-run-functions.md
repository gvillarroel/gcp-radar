---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.366Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Cloud Spanner integration with Cloud Run functions"
feature_slug: "cloud-spanner-integration-with-cloud-run-functions"
latest_feature_date: "2017-05-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow"
  - "https://docs.cloud.google.com/spanner/docs/information-schema"
  - "https://docs.cloud.google.com/spanner/docs/information-schema-pg"
keywords:
  - "conjunction"
  - "integration"
  - "functions"
  - "used"
---

# Cloud Spanner integration with Cloud Run functions

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Cloud Spanner can be used in conjunction with Cloud Run functions.

## Extended Definition

Cloud Spanner can be used in conjunction with Cloud Run functions.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow](https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow)
- [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)

## Supporting Pages

### "Build change streams connections using Dataflow \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow](https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow)
- Source ID: `site-docs-root`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- If recordsToOutput is not empty, the function orders the data change records in recordsToOutput by commit timestamp and transaction ID and then outputs them. private static class BufferKeyUntilOutputTimestamp extends DoFn<KV<String , DataChangeRecord > , KV<String , Iterable<DataChangeRecord> >> { private static final Logger LOG = LoggerFactory . getLogger ( BufferKeyUntilOutputTimestamp . class ); private final long incrementIntervalInSeconds = 2 ; private BufferKeyUntilOutputTimestamp ( long incrementIntervalInSeconds ) { this . incrementIntervalInSeconds = incrementIntervalInSeconds ; } @SuppressWarnings ( "unused" ) @TimerId ( "timer" ) private final TimerSpec timerSpec = TimerSpecs . timer ( TimeDomain .
- MEDIUM ) . withInclusiveStartAt ( startTime ) . withInclusiveEndAt ( endTime ); The following are descriptions of the readChangeStream() options: Spanner Config (Required) Used for configuring the project, instance and database where the change stream was created and should be queried from.
- Note that this estimate can vary depending on several factors, such as the size of each transaction, how many change stream records are produced from a single transaction and other transformations, aggregations, or sinks that are being used in the pipeline.
- The primary key of the mod can be used to do a Spanner snapshot read at the commit timestamp of the data change record to fetch the unchanged columns or even retrieve the full row.

### "Information schema for GoogleSQL-dialect databases \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- Source ID: `site-docs-reference`
- Final score: 65
- Re-rank relevance: N/A

Evidence snippets:
- All other principals can see only parameters for change stream read functions on which the EXECUTE fine-grained access control privilege is granted to the current database role, to roles of which the current database role is a member, or to public .
- All other principals can see only options for change stream read functions on which the EXECUTE fine-grained access control privilege is granted to the current database role, to roles of which the current database role is a member, or to public .
- All other principals can see only change stream read functions on which the EXECUTE fine-grained access control privilege is granted to the current database role, to roles of which the current database role is a member, or to public .
- All other principals can see only privileges granted on change stream read functions to the current database role and to roles of which the current database role is a member, not including public .

### "Information schema for PostgreSQL-dialect databases \_|\_ Spanner \_|\_\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- Source ID: `site-docs-reference`
- Final score: 65
- Re-rank relevance: N/A

Evidence snippets:
- Column name Type Description table catalog character varying The database name. table schema character varying The name of the schema that contains the table that contains the column that is used by the constraint. table name character varying The name of the table that contains the column that is used by the constraint. column name character varying The name of the column that is used by the constraint. constraint catalog character varying The database name. constraint schema character varying The name of the constraint's schema. constraint name character varying The name of the constraint. constraint table usage This view contains one row for each table used by a constraint.
- Possible values include 'BASE TABLE', 'VIEW', or 'SYNONYM'. self referencing column name character varying Not used. reference generation character varying Not used. user defined type catalog character varying Not used. user defined type schema character varying Not used. user defined type name character varying Not used. is insertable into character varying Not used. is typed character varying Not used. commit action character varying Not used. parent table name character varying The name of the parent table if this table is interleaved, or NULL . on delete action character varying This is set to CASCADE or NO ACTION for interleaved tables, and NULL otherwise.
- The default value is public . constraint name character varying The name of the foreign key constraint. unique constraint catalog character varying The database name. unique constraint schema character varying The name of the schema that contains the unique or primary key constraint that the foreign key constraint references. unique constraint name character varying The name of the unique or primary key constraint that the foreign key constraint references. match option character varying The match method used by the foreign key constraint.
- Column name Type Description table catalog character varying The database name. table schema character varying The name of the constrained table's schema. table name character varying The name of the table that is used by some constraint. constraint catalog character varying The database name. constraint schema character varying The name of the schema that contains the constraint. constraint name character varying The name of the constraint. database options This table lists the options that are set on the database.

