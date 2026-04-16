---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.169Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Automatic IAM database login with AlloyDB Auth Proxy"
feature_slug: "automatic-iam-database-login-with-alloydb-auth-proxy"
latest_feature_date: "2023-11-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/auth-proxy/overview"
  - "https://docs.cloud.google.com/alloydb/docs/connect-iam"
  - "https://docs.cloud.google.com/alloydb/docs/quickstart/connect-cloud-shell"
keywords:
  - "login"
  - "proxy"
  - "auth"
  - "automatic"
  - "database"
---

# Automatic IAM database login with AlloyDB Auth Proxy

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

The AlloyDB Auth Proxy can automatically authenticate IAM-based database logins for the proxy's IAM account.

## Extended Definition

The AlloyDB Auth Proxy can automatically authenticate IAM-based database logins for the proxy's IAM account.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/auth-proxy/overview](https://docs.cloud.google.com/alloydb/docs/auth-proxy/overview)
- [https://docs.cloud.google.com/alloydb/docs/connect-iam](https://docs.cloud.google.com/alloydb/docs/connect-iam)
- [https://docs.cloud.google.com/alloydb/docs/quickstart/connect-cloud-shell](https://docs.cloud.google.com/alloydb/docs/quickstart/connect-cloud-shell)

## Supporting Pages

### "About the AlloyDB Auth Proxy \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/auth-proxy/overview](https://docs.cloud.google.com/alloydb/docs/auth-proxy/overview)
- Source ID: `site-docs-root`
- Final score: 175
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Automated IAM authentication (AuthN): The Auth Proxy can automatically authenticate database users based on the IAM principal running the proxy.
- Benefits of using the AlloyDB Auth Proxy The Auth Proxy provides these advantages over connecting clients directly to AlloyDB databases: IAM-based connection authorization (AuthZ): The Auth Proxy uses the credentials and permissions of an Identity and Access Management (IAM) principal to authorize connections to AlloyDB instances.
- Secure, encrypted communication: The Auth Proxy automatically creates, uses, and maintains a mutual TLS (mTLS) 1.3 connection using a 256-bit AES cipher between your client and an AlloyDB instance to verify client and server identities and encrypt data traffic.
- Home Documentation Databases AlloyDB for PostgreSQL Guides Send feedback About the AlloyDB Auth Proxy Stay organized with collections Save and categorize content based on your preferences.

### "Connect using an IAM account \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/connect-iam](https://docs.cloud.google.com/alloydb/docs/connect-iam)
- Source ID: `site-docs-reference-2`
- Final score: 141
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, if you run your workload using the IAM user account kai@altostrat.com , then you can use the proxy client or Language Connectors to automatically authenticate the kai@altostrat.com database user without specifying an OAuth 2.0 token.
- Authenticate automatically To automatically authenticate an IAM-based AlloyDB user without the need for an OAuth 2.0 token, you have two options: AlloyDB Auth Proxy and AlloyDB Language Connectors .
- It assigns the output of gcloud auth print-access-token to the PGPASSWORD environment variable, which psql subsequently uses as a database login password.
- In this example, automatic authentication does not work with any other database user except for kai@altostrat.com .

### "Quickstart: Connect to AlloyDB from Cloud Shell using the Auth Proxy \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/quickstart/connect-cloud-shell](https://docs.cloud.google.com/alloydb/docs/quickstart/connect-cloud-shell)
- Source ID: `site-docs-reference`
- Final score: 121
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Required roles To use the Auth Proxy, your user account must have the following Identity and Access Management (IAM) roles : AlloyDB Client ( roles/alloydb.client ) Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer ) If you don't have the required roles, ask your administrator to grant the roles or follow these steps to grant them to your user account.
- In the Cloud Shell terminal, use the copied URI and specify the --public-ip flag. alloydb-auth-proxy CONNECTION URI --public-ip Replace the following: CONNECTION URI : the Connection URI that you copied from the Google Cloud console.
- Connect to AlloyDB from Cloud Shell using the Auth Proxy Learn how to establish a secure connection to your AlloyDB for PostgreSQL instance from a Cloud Shell terminal using the AlloyDB Auth Proxy.
- Connect to your AlloyDB instance The Cloud Shell environment includes the Auth Proxy ( alloydb-auth-proxy ) and psql, the PostgreSQL interactive terminal.

