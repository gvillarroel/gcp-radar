---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.634Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB Auth Proxy IAM-based login automation"
feature_slug: "alloydb-auth-proxy-iam-based-login-automation"
latest_feature_date: "2023-11-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/auth-proxy/overview"
  - "https://docs.cloud.google.com/alloydb/docs/release-notes"
keywords:
  - "IAM-based login automation"
  - "Auth Proxy IAM login"
  - "automated IAM-based login"
  - "automatic IAM database login"
  - "IAM DB authentication"
  - "Auth Proxy IAM authentication"
  - "AlloyDB Auth Proxy"
---

# AlloyDB Auth Proxy IAM-based login automation

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

The AlloyDB Auth Proxy can be configured to automatically authenticate IAM-based database logins.

## Extended Definition

The AlloyDB Auth Proxy authenticates client connections using IAM principals: the proxy authenticates to Google Cloud with the caller’s IAM credentials and validates required IAM roles before authorizing the connection. This provides IAM-based database access through the proxy and is documented as automatic IAM authentication behavior in release notes, with a stated limitation when combined with managed connection pooling and Language Connectors.

## Evidence Summary

The overview page defines the Auth Proxy’s IAM credential-based authorization flow, and the release notes confirm the existence of an automatic IAM authentication mode while noting a specific availability issue.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/auth-proxy/overview](https://docs.cloud.google.com/alloydb/docs/auth-proxy/overview)
- [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)

## Supporting Pages

### "About the AlloyDB Auth Proxy \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/auth-proxy/overview](https://docs.cloud.google.com/alloydb/docs/auth-proxy/overview)
- Source ID: `site-docs-root`
- Final score: 62
- Re-rank relevance: STRONG
- Re-rank rationale: It explicitly states that the Auth Proxy provides IAM-based authorization and can automatically authenticate database users from the IAM principal running the proxy.

Evidence snippets:
- How the AlloyDB Auth Proxy authorizes IAM principals To authorize a client's connection to an AlloyDB instance, the Auth Proxy client authenticates to Google Cloud using IAM principal credentials on the client, and then validates that the IAM principal has the Cloud AlloyDB Client ( roles/alloydb.client ) and Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer ) IAM roles.
- Benefits of using the AlloyDB Auth Proxy The Auth Proxy provides these advantages over connecting clients directly to AlloyDB databases: IAM-based connection authorization (AuthZ): The Auth Proxy uses the credentials and permissions of an Identity and Access Management (IAM) principal to authorize connections to AlloyDB instances.
- Home Documentation Databases AlloyDB for PostgreSQL Guides Send feedback About the AlloyDB Auth Proxy Stay organized with collections Save and categorize content based on your preferences.
- When an application connects to the AlloyDB Auth Proxy, it checks whether an existing connection between it and the target AlloyDB instance is available.

### AlloyDB for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- January 21, 2026 Issue Automatic IAM authentication is unavailable when you use managed connection pooling with the AlloyDB Auth Proxy and Language Connectors.
- Version 1.5.0 of the AlloyDB Auth Proxy client might fail to connect to AlloyDB instances created before mid-November, 2023.
- This command provides a simplified way to connect securely to AlloyDB instances by using the AlloyDB Auth Proxy and psql .
- To mitigate this issue, take either one of the following steps: Use version 1.4.1 of the AlloyDB Auth Proxy client.

