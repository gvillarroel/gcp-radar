---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:04.329Z"
product_name: "Datastream"
product_slug: "datastream"
feature_name: "Resource tags support"
feature_slug: "resource-tags-support"
latest_feature_date: "2022-06-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/datastream/docs/create-a-private-connectivity-configuration"
  - "https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles"
  - "https://docs.cloud.google.com/datastream/docs/create-connection-profiles"
  - "https://docs.cloud.google.com/datastream/docs/access-control-with-tags"
keywords:
  - "resource"
  - "tags"
  - "datastream"
  - "supports"
  - "on"
  - "private"
  - "connectivity"
  - "configurations"
---

# Resource tags support

Product: Datastream
Coverage: MEDIUM

## Step 02 Summary

Datastream supports tags on private connectivity configurations, connection profiles, and streams for fine-grained access control.

## Extended Definition

Datastream supports tags on private connectivity configurations, connection profiles, and streams for fine-grained access control.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/datastream/docs/create-a-private-connectivity-configuration](https://docs.cloud.google.com/datastream/docs/create-a-private-connectivity-configuration)
- [https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles](https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles)
- [https://docs.cloud.google.com/datastream/docs/create-connection-profiles](https://docs.cloud.google.com/datastream/docs/create-connection-profiles)
- [https://docs.cloud.google.com/datastream/docs/access-control-with-tags](https://docs.cloud.google.com/datastream/docs/access-control-with-tags)

## Supporting Pages

### "Create a private connectivity configuration \_|\_ Datastream \_|\_ Google\

- URL: [https://docs.cloud.google.com/datastream/docs/create-a-private-connectivity-configuration](https://docs.cloud.google.com/datastream/docs/create-a-private-connectivity-configuration)
- Source ID: `site-docs-root`
- Final score: 294
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Datastream automatically deletes private connectivity configurations that haven't been used for a period of six consecutive months.
- Home Documentation Data analytics Datastream Guides Send feedback Create a private connectivity configuration Stay organized with collections Save and categorize content based on your preferences.
- You need to provide the private IP addresses when setting up the private connectivity configuration because Datastream doesn't support Domain Name System (DNS) resolution in private connections.
- Create the configuration To create a private connectivity configuration, perform the following steps: Go to the Private connectivity configurations page in the Google Cloud console.

### "REST Resource: projects.locations.connectionProfiles \_|\_ Datastream \_\

- URL: [https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles](https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles)
- Source ID: `site-api-reference`
- Final score: 266
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Resource: ConnectionProfile JSON representation OracleProfile JSON representation OracleSslConfig JSON representation OracleAsmConfig JSON representation GcsProfile JSON representation MysqlProfile JSON representation MysqlSslConfig JSON representation BigQueryProfile PostgresqlProfile JSON representation PostgresqlSslConfig JSON representation ServerVerification JSON representation ServerAndClientVerification JSON representation SqlServerProfile JSON representation SqlServerSslConfig JSON representation EncryptionNotEnforced BasicEncryption EncryptionAndServerValidation JSON representation SalesforceProfile JSON representation UserCredentials JSON representation Oauth2ClientCredentials JSON representation MongodbProfile JSON representation HostAddress JSON representation MongodbSslConfig JSON representation SrvConnectionFormat StandardConnectionFormat JSON representation SpannerProfile JSON representation StaticServiceIpConnectivity ForwardSshTunnelConnectivity JSON representation PrivateConnectivity JSON representation Methods Resource: ConnectionProfile A set of reusable connection configurations to be used as a source or destination for a stream.
- JSON representation { "name" : string , "createTime" : string , "updateTime" : string , "labels" : { string : string , ... } , "displayName" : string , "satisfiesPzs" : boolean , "satisfiesPzi" : boolean , // Union field profile can be only one of the following: "oracleProfile" : { object ( OracleProfile ) } , "gcsProfile" : { object ( GcsProfile ) } , "mysqlProfile" : { object ( MysqlProfile ) } , "bigqueryProfile" : { object ( BigQueryProfile ) } , "postgresqlProfile" : { object ( PostgresqlProfile ) } , "sqlServerProfile" : { object ( SqlServerProfile ) } , "salesforceProfile" : { object ( SalesforceProfile ) } , "mongodbProfile" : { object ( MongodbProfile ) } , "spannerProfile" : { object ( SpannerProfile ) } // End of list of possible types for union field profile . // Union field connectivity can be only one of the following: "staticServiceIpConnectivity" : { object ( StaticServiceIpConnectivity ) } , "forwardSshConnectivity" : { object ( ForwardSshTunnelConnectivity ) } , "privateConnectivity" : { object ( PrivateConnectivity ) } // End of list of possible types for union field connectivity . } Fields name string Output only.
- Connectivity options used to establish a connection to the profile. connectivity can be only one of the following: staticServiceIpConnectivity object ( StaticServiceIpConnectivity ) Static Service IP connectivity. forwardSshConnectivity object ( ForwardSshTunnelConnectivity ) Forward SSH tunnel connectivity. privateConnectivity object ( PrivateConnectivity ) Private connectivity.
- Home Documentation Data analytics Datastream Reference Send feedback REST Resource: projects.locations.connectionProfiles Stay organized with collections Save and categorize content based on your preferences.

### Create connection profiles \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/create-connection-profiles](https://docs.cloud.google.com/datastream/docs/create-connection-profiles)
- Source ID: `site-docs-root`
- Final score: 256
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Private connectivity: this method lets you establish secure connectivity between Datastream and the source database, internally within Google Cloud, or with external sources connected over VPN or Interconnect.
- Private connectivity: this method lets you establish secure connectivity between Datastream and the source database, internally within Google Cloud, or with external sources connected over VPN or Interconnect.
- Private connectivity: this method lets you establish secure connectivity between Datastream and the source database, internally within Google Cloud, or with external sources connected over VPN or Interconnect.
- Private connectivity: this method lets you establish secure connectivity between Datastream and the source database, internally within Google Cloud, or with external sources connected over VPN or Interconnect.

### Access control with tags \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/access-control-with-tags](https://docs.cloud.google.com/datastream/docs/access-control-with-tags)
- Source ID: `site-docs-root-2`
- Final score: 239
- Re-rank relevance: N/A

Evidence snippets:
- Tags are attached to resources, such as a project or a Datastream private connectivity configuration, connection profile, or stream, through the Resource Manager , which is used across Google Cloud.
- These resources include private connectivity configurations, connection profiles, and streams.
- Restrictions Tags have the following restrictions: Organization policies can conditionally reference tags inherited from the project level and higher, but don't support tags that are directly attached to Datastream resources.
- Cloud Audit logs show the creation and deletion of tags, but entries are not generated for attaching tags and viewing tag bindings on Datastream resources.

