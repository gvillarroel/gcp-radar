---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.648Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB IAM authentication"
feature_slug: "alloydb-iam-authentication"
latest_feature_date: "2023-06-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/create_instance"
  - "https://docs.cloud.google.com/alloydb/docs/release-notes"
keywords:
  - "authorize IAM principals"
  - "service accounts as database users"
  - "IAM DB authentication"
  - "database user authentication"
  - "AlloyDB IAM auth"
  - "IAM authentication"
  - "IAM database users"
  - "IAM users"
---

# AlloyDB IAM authentication

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB introduced IAM authentication preview support, allowing IAM users or service accounts to be authorized as database users.

## Extended Definition

AlloyDB IAM authentication is an AlloyDB PostgreSQL instance-level feature that enables IAM-based database authentication when the `dbIamAuthentication` option is set on instance creation, which corresponds to toggling the `alloydb.iam_authentication` database flag to on/off. Google Cloud release notes state that IAM authentication for AlloyDB became available in Preview on June 27, 2023, and later documentation notes connectors can provide IAM-based authorization with automated IAM authentication when connecting.

## Evidence Summary

The MCP API reference proves the configurable IAM-auth toggle on instances, while the release notes provide the feature’s preview announcement and mention IAM-based/automated IAM authentication via connectors.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/create_instance](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/create_instance)
- [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)

## Supporting Pages

### "MCP Tools Reference: alloydb \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/create_instance](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/create_instance)
- Source ID: `site-api-reference`
- Final score: 38
- Re-rank relevance: MODERATE
- Re-rank rationale: The create_instance API reference includes a `dbIamAuthentication` request field, which directly relates to enabling IAM-based authentication for AlloyDB instances.

Evidence snippets:
- CreateInstanceRequest JSON representation { "parent" : string , "instanceId" : string , "type" : string , // Union field cpu count can be only one of the following: "cpuCount" : integer // End of list of possible types for union field cpu count . // Union field machine type can be only one of the following: "machineType" : string // End of list of possible types for union field machine type . // Union field readpool node count can be only one of the following: "readpoolNodeCount" : integer // End of list of possible types for union field readpool node count . // Union field db iam authentication can be only one of the following: "dbIamAuthentication" : boolean // End of list of possible types for union field db iam authentication . } Fields parent string Required.
- Union field db iam authentication . db iam authentication can be only one of the following: dbIamAuthentication boolean Optional.
- Sets the "alloydb.iam authentication" db flag to "on"/"off".
- Enables DB IAM authentication for this instance.

### AlloyDB for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- These language connectors are libraries that provide automated mutual TLS connections, IAM-based authorization, and Automated IAM Authentication when connecting to an AlloyDB instance.
- These language connectors are libraries that provide automated mutual TLS connections, IAM-based authorization, and Automated IAM Authentication when connecting to an AlloyDB instance.
- June 27, 2023 Feature The columnar engine now supports columns with the following data types: boolean bytea enum uuid Feature IAM authentication for AlloyDB is available in Preview .
- February 09, 2026 Fixed We are announcing the release of support for the AlloyDB language connectors and Auth Proxy with Auto IAM Authentication and managed connection pooling.

