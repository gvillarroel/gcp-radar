---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:04.312Z"
product_name: "Datastream"
product_slug: "datastream"
feature_name: "Spanner source support"
feature_slug: "spanner-source-support"
latest_feature_date: "2026-01-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamClient"
  - "https://docs.cloud.google.com/datastream/docs/configure-spanner"
  - "https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/get_stream"
keywords:
  - "spanner"
  - "source"
  - "datastream"
  - "can"
  - "use"
  - "databases"
  - "as"
  - "for"
---

# Spanner source support

Product: Datastream
Coverage: MEDIUM

## Step 02 Summary

Datastream can use Spanner databases as a source for streaming data.

## Extended Definition

Datastream can use Spanner databases as a source for streaming data.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient](https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamClient](https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamClient)
- [https://docs.cloud.google.com/datastream/docs/configure-spanner](https://docs.cloud.google.com/datastream/docs/configure-spanner)
- [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/get_stream](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/get_stream)

## Supporting Pages

### "Class DatastreamAsyncClient (1.18.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient](https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient)
- Source ID: `site-python-reference`
- Final score: 316
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Returns Type Description google.cloud.datastream v1.types.Route The route resource is the child of the private connection resource, used for defining a route for a private connection. get stream get stream ( request : typing .
- The result type for the operation will be PrivateConnection The PrivateConnection resource is used to establish private connectivity between Datastream and a customer's network. create route create route ( request : typing .
- Returns Type Description google.cloud.datastream v1.types.ConnectionProfile A set of reusable connection configurations to be used as a source or destination for a stream. get location get location ( request : typing .
- Returns Type Description google.cloud.datastream v1.types.PrivateConnection The PrivateConnection resource is used to establish private connectivity between Datastream and a customer's network. get route get route ( request : typing .

### "Class DatastreamClient (1.18.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamClient](https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamClient)
- Source ID: `site-python-reference`
- Final score: 292
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Returns Type Description google.cloud.datastream v1.types.Route The route resource is the child of the private connection resource, used for defining a route for a private connection. get stream get stream ( request : typing .
- The result type for the operation will be PrivateConnection The PrivateConnection resource is used to establish private connectivity between Datastream and a customer's network. create route create route ( request : typing .
- Returns Type Description google.cloud.datastream v1.types.ConnectionProfile A set of reusable connection configurations to be used as a source or destination for a stream. get location get location ( request : typing .
- Returns Type Description google.cloud.datastream v1.types.PrivateConnection The PrivateConnection resource is used to establish private connectivity between Datastream and a customer's network. get route get route ( request : typing .

### "Configure a source Spanner database \_|\_ Datastream \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastream/docs/configure-spanner](https://docs.cloud.google.com/datastream/docs/configure-spanner)
- Source ID: `site-docs-root-2`
- Final score: 291
- Re-rank relevance: N/A

Evidence snippets:
- To use this role, Datastream needs the following IAM permissions at minimum: spanner.databases.useRoleBasedAccess spanner.databaseRoles.list spanner.databases.useDataBoost (if you choose to use Spanner Data Boost) In addition, the Spanner database role must have the following permissions: SELECT permissions for the tables being streamed.
- Before you begin If your Spanner instance exists in a Google Cloud project other than the one where Datastream is running, you need to provide the Datastream service agent the spanner.databaseReader IAM role, and if you plan to use Data Boost, the spanner.databaseReaderWithDataBoost role.
- To configure your Spanner source for replication in Datastream, you need to create and configure a Spanner change stream.
- A fine-grained access control database role for Datastream to use when querying Spanner.

### MCP Tools Reference: datastream \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/get_stream](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/get_stream)
- Source ID: `site-api-reference`
- Final score: 291
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- List of objects to exclude. excluded objects can be only one of the following: oracleExcludedObjects object ( OracleRdbms ) Oracle data source objects to avoid backfilling. mysqlExcludedObjects object ( MysqlRdbms ) MySQL data source objects to avoid backfilling. postgresqlExcludedObjects object ( PostgresqlRdbms ) PostgreSQL data source objects to avoid backfilling. sqlServerExcludedObjects object ( SqlServerRdbms ) SQLServer data source objects to avoid backfilling salesforceExcludedObjects object ( SalesforceOrg ) Salesforce data source objects to avoid backfilling mongodbExcludedObjects object ( MongodbCluster ) MongoDB data source objects to avoid backfilling spannerExcludedObjects object ( SpannerDatabase ) Spanner data source objects to avoid backfilling.
- SourceHierarchyDatasets JSON representation { "datasetTemplate" : { object ( DatasetTemplate ) } , // Union field project id can be only one of the following: "projectId" : string // End of list of possible types for union field project id . } Fields datasetTemplate object ( DatasetTemplate ) The dataset template to use for dynamic dataset creation.
- Stream JSON representation { "name" : string , "createTime" : string , "updateTime" : string , "labels" : { string : string , ... } , "displayName" : string , "sourceConfig" : { object ( SourceConfig ) } , "destinationConfig" : { object ( DestinationConfig ) } , "state" : enum ( State ) , "errors" : [ { object ( Error ) } ] , "lastRecoveryTime" : string , "ruleSets" : [ { object ( RuleSet ) } ] , // Union field backfill strategy can be only one of the following: "backfillAll" : { object ( BackfillAllStrategy ) } , "backfillNone" : { object ( BackfillNoneStrategy ) } // End of list of possible types for union field backfill strategy . // Union field customer managed encryption key can be only one of the // following: "customerManagedEncryptionKey" : string // End of list of possible types for union field // customer managed encryption key . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . } Fields name string Output only.
- OracleSourceConfig JSON representation { "includeObjects" : { object ( OracleRdbms ) } , "excludeObjects" : { object ( OracleRdbms ) } , "maxConcurrentCdcTasks" : integer , "maxConcurrentBackfillTasks" : integer , // Union field large objects handling can be only one of the following: "dropLargeObjects" : { object ( DropLargeObjects ) } , "streamLargeObjects" : { object ( StreamLargeObjects ) } // End of list of possible types for union field large objects handling . // Union field cdc method can be only one of the following: "logMiner" : { object ( LogMiner ) } , "binaryLogParser" : { object ( BinaryLogParser ) } // End of list of possible types for union field cdc method . } Fields includeObjects object ( OracleRdbms ) The Oracle objects to include in the stream. excludeObjects object ( OracleRdbms ) The Oracle objects to exclude from the stream. maxConcurrentCdcTasks integer Maximum number of concurrent CDC tasks.

