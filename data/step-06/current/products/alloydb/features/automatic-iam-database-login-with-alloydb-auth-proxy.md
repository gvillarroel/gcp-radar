---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.522Z"
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
  - "automatic"
  - "iam"
  - "database"
  - "login"
  - "alloydb"
  - "auth"
  - "proxy"
  - "can"
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
- Benefits of using the AlloyDB Auth Proxy The Auth Proxy provides these advantages over connecting clients directly to AlloyDB databases: IAM-based connection authorization (AuthZ): The Auth Proxy uses the credentials and permissions of an Identity and Access Management (IAM) principal to authorize connections to AlloyDB instances.
- Secure, encrypted communication: The Auth Proxy automatically creates, uses, and maintains a mutual TLS (mTLS) 1.3 connection using a 256-bit AES cipher between your client and an AlloyDB instance to verify client and server identities and encrypt data traffic.
- Home Documentation Databases AlloyDB for PostgreSQL Guides Send feedback About the AlloyDB Auth Proxy Stay organized with collections Save and categorize content based on your preferences.
- This page provides an overview of the AlloyDB Auth Proxy, a connector that lets you make authorized, encrypted connections to AlloyDB databases.

### "Connect using an IAM account \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/connect-iam](https://docs.cloud.google.com/alloydb/docs/connect-iam)
- Source ID: `site-docs-reference-2`
- Final score: 141
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, if you run your workload using the IAM user account kai@altostrat.com , then you can use the proxy client or Language Connectors to automatically authenticate the kai@altostrat.com database user without specifying an OAuth 2.0 token.
- Authenticate automatically To automatically authenticate an IAM-based AlloyDB user without the need for an OAuth 2.0 token, you have two options: AlloyDB Auth Proxy and AlloyDB Language Connectors .
- For additional security, you can restrict the token for use with only AlloyDB authentication by following these alternative steps: Add the alloydb.login scope to your current environment's access credentials using the gcloud auth application-default login command , if you have not already done so: gcloud auth application-default login --scopes = https://www.googleapis.com/auth/alloydb.login,https://www.googleapis.com/auth/cloud-platform,https://www.googleapis.com/auth/userinfo.email,openid Print a restricted OAuth 2.0 token using the gcloud auth application-default print-access-token command , scoping the token only to AlloyDB authentication: gcloud auth application-default print-access-token –-scopes=https://www.googleapis.com/auth/alloydb.login Caution: Treat your OAuth 2.0 token as sensitive information.
- Authenticate with an OAuth 2.0 token A user or an application can authenticate with an AlloyDB database by following these steps: If you haven't already done so, authorize the Google Cloud CLI using the same user or service account that you want to log in to your AlloyDB instance with.

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

