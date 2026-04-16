---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:07:33.809Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "gcloud beta alloydb connect command"
feature_slug: "gcloud-beta-alloydb-connect-command"
latest_feature_date: "2026-04-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/connect-gcloud"
  - "https://docs.cloud.google.com/alloydb/docs/quickstart/create-and-connect"
  - "https://docs.cloud.google.com/alloydb/docs/connect-ide-using-mcp-toolbox"
  - "https://docs.cloud.google.com/alloydb/docs/connect-psql"
keywords:
  - "gcloud beta alloydb connect"
  - "psql connection"
  - "AlloyDB Auth Proxy"
  - "secure database connection"
  - "alloydb connect command"
  - "alloydb instances connect"
  - "alloydb connect"
  - "AlloyDB Connect"
---

# gcloud beta alloydb connect command

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

The new gcloud beta AlloyDB connect command provides a simplified, secure way to connect to AlloyDB instances using the AlloyDB Auth Proxy and psql.

## Extended Definition

The new gcloud beta AlloyDB connect command provides a simplified, secure way to connect to AlloyDB instances using the AlloyDB Auth Proxy and psql.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/connect-gcloud](https://docs.cloud.google.com/alloydb/docs/connect-gcloud)
- [https://docs.cloud.google.com/alloydb/docs/quickstart/create-and-connect](https://docs.cloud.google.com/alloydb/docs/quickstart/create-and-connect)
- [https://docs.cloud.google.com/alloydb/docs/connect-ide-using-mcp-toolbox](https://docs.cloud.google.com/alloydb/docs/connect-ide-using-mcp-toolbox)
- [https://docs.cloud.google.com/alloydb/docs/connect-psql](https://docs.cloud.google.com/alloydb/docs/connect-psql)

## Supporting Pages

### "Connect using gcloud CLI \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/connect-gcloud](https://docs.cloud.google.com/alloydb/docs/connect-gcloud)
- Source ID: `site-docs-reference-2`
- Final score: 161
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Connect over public IP If your instance has a public IP address enabled, you can connect to it by adding the --public-ip flag: gcloud beta alloydb connect INSTANCE ID \ --cluster = CLUSTER ID \ --region = REGION ID \ --public-ip Authenticate using IAM The gcloud beta alloydb connect command supports automatic IAM authentication.
- The gcloud beta alloydb connect command lets you establish an authorized, encrypted connection to an AlloyDB instance.
- Connect over Private Service Connect If you are using Private Service Connect, add the --psc flag: gcloud beta alloydb connect INSTANCE ID \ --cluster = CLUSTER ID \ --region = REGION ID \ --psc Connect with a specific user and database To connect as a specific database user to a specific database, use the --user and --database flags: gcloud beta alloydb connect INSTANCE ID \ --cluster = CLUSTER ID \ --region = REGION ID \ --user = USER NAME \ --database = DATABASE NAME Service account impersonation You can use an impersonated service account to authorize the connection.
- To connect using an impersonated service account, add the --impersonate-service-account flag: gcloud beta alloydb connect INSTANCE ID \ --cluster = CLUSTER ID \ --region = REGION ID \ --impersonate-service-account = SERVICE ACCOUNT EMAIL The Auth Proxy uses the impersonated service account to retrieve connection information.

### "Create and query an AlloyDB database using the Google Cloud console \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/quickstart/create-and-connect](https://docs.cloud.google.com/alloydb/docs/quickstart/create-and-connect)
- Source ID: `site-docs-root`
- Final score: 94
- Re-rank relevance: N/A

### "Use AlloyDB for PostgreSQL with MCP, Gemini CLI, and other agents \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/connect-ide-using-mcp-toolbox](https://docs.cloud.google.com/alloydb/docs/connect-ide-using-mcp-toolbox)
- Source ID: `site-docs-reference-2`
- Final score: 86
- Re-rank relevance: N/A

### "Connect from Compute Engine \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/connect-psql](https://docs.cloud.google.com/alloydb/docs/connect-psql)
- Source ID: `site-docs-root`
- Final score: 84
- Re-rank relevance: N/A

