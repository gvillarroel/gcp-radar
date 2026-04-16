---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.168Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB-scoped OAuth 2.0 access tokens"
feature_slug: "alloydb-scoped-oauth-2-0-access-tokens"
latest_feature_date: "2023-11-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/connect-iam"
  - "https://docs.cloud.google.com/alloydb/docs/ai/use-alloydb-mcp"
  - "https://docs.cloud.google.com/alloydb/docs/about-private-services-access"
keywords:
  - "scoped"
  - "tokens"
  - "oauth"
  - "restricted"
  - "access"
---

# AlloyDB-scoped OAuth 2.0 access tokens

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

OAuth 2.0 access tokens can be restricted so they work only for AlloyDB authentication.

## Extended Definition

OAuth 2.0 access tokens can be restricted so they work only for AlloyDB authentication.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/connect-iam](https://docs.cloud.google.com/alloydb/docs/connect-iam)
- [https://docs.cloud.google.com/alloydb/docs/ai/use-alloydb-mcp](https://docs.cloud.google.com/alloydb/docs/ai/use-alloydb-mcp)
- [https://docs.cloud.google.com/alloydb/docs/about-private-services-access](https://docs.cloud.google.com/alloydb/docs/about-private-services-access)

## Supporting Pages

### "Private services access overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/about-private-services-access](https://docs.cloud.google.com/alloydb/docs/about-private-services-access)
- Source ID: `site-docs-reference`
- Final score: 63
- Re-rank relevance: N/A

Evidence snippets:
- A VPC network in the same project as your cluster How you configure AlloyDB connectivity using a VPC network that resides in the same Google Cloud project as your AlloyDB cluster depends on whether a private services access configuration already exists in the VPC network.
- IP address range size considerations It's important to choose a private services access address range that is wide enough to accommodate the needs of AlloyDB, as well as any other Google Cloud services that require IP addresses from the same address pool.
- If the VPC network already has an existing private services access configuration, then make sure the configuration has sufficient IP address space for AlloyDB and increase the address space if necessary.
- This page describes how AlloyDB for PostgreSQL uses private services access to establish network connectivity between your AlloyDB instances and the various internal resources that they require to work.

### "Connect using an IAM account \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/connect-iam](https://docs.cloud.google.com/alloydb/docs/connect-iam)
- Source ID: `site-docs-reference-2`
- Final score: 62
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For additional security, you can restrict the token for use with only AlloyDB authentication by following these alternative steps: Add the alloydb.login scope to your current environment's access credentials using the gcloud auth application-default login command , if you have not already done so: gcloud auth application-default login --scopes = https://www.googleapis.com/auth/alloydb.login,https://www.googleapis.com/auth/cloud-platform,https://www.googleapis.com/auth/userinfo.email,openid Print a restricted OAuth 2.0 token using the gcloud auth application-default print-access-token command , scoping the token only to AlloyDB authentication: gcloud auth application-default print-access-token –-scopes=https://www.googleapis.com/auth/alloydb.login Caution: Treat your OAuth 2.0 token as sensitive information.
- To view the principal specified by the token, run the following command: curl -H "Content-Type: application/x-www-form-urlencoded" -d "access token= ACCESS TOKEN " https://www.googleapis.com/oauth2/v1/tokeninfo Replace ACCESS TOKEN with the OAuth 2.0 access token.
- Request an OAuth 2.0 token from Google Cloud using the gcloud auth print-access-token command : gcloud auth print-access-token The Google Cloud prints an OAuth 2.0 token as the output of this command.
- Authenticate with an OAuth 2.0 token A user or an application can authenticate with an AlloyDB database by following these steps: If you haven't already done so, authorize the Google Cloud CLI using the same user or service account that you want to log in to your AlloyDB instance with.

### "Use the AlloyDB remote MCP server \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/use-alloydb-mcp](https://docs.cloud.google.com/alloydb/docs/ai/use-alloydb-mcp)
- Source ID: `site-docs-reference-2`
- Final score: 58
- Re-rank relevance: N/A

Evidence snippets:
- For example, you can deny or allow access based on: The principal Tool properties like read-only The application's OAuth client ID For more information, see Control MCP use with Identity and Access Management .
- Authentication and authorization The AlloyDB for PostgreSQL remote MCP server uses the OAuth 2.0 protocol with Identity and Access Management (IAM) for authentication and authorization.
- For more information about OAuth 2.0 scopes at Google, read Using OAuth 2.0 to access Google APIs .
- To initialize the gcloud CLI, run the following command: gcloud init Required roles To get the permissions that you need to use the AlloyDB for PostgreSQL MCP server, ask your administrator to grant you the following IAM roles on the project where you want to use the AlloyDB for PostgreSQL MCP server: Make MCP tool calls: MCP Tool User ( roles/mcp.toolUser ) Create an AlloyDB instance: AlloyDB Admin ( roles/alloydb.admin ) Create an AlloyDB user: AlloyDB Admin ( roles/alloydb.admin ) Execute SQL queries in AlloyDB: AlloyDB Admin ( roles/alloydb.admin ) Studio Query User ( roles/databasesconsole.studioQueryUser ) Get a AlloyDB instance or list all AlloyDB instances in a project: AlloyDB Viewer ( roles/alloydb.viewer ) List AlloyDB users: AlloyDB Viewer ( roles/alloydb.viewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .

