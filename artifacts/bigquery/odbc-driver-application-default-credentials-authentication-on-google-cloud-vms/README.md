# ODBC driver Application Default Credentials authentication on Google Cloud VMs

Product: BigQuery
Feature slug: `odbc-driver-application-default-credentials-authentication-on-google-cloud-vms`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The BigQuery ODBC driver supports authentication through Application Default Credentials using the Google internal metadata server on Google Cloud Compute Engine VMs.

## Lifecycle

- Latest feature date: 2024-10-03
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-client-default-credentials](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-client-default-credentials), [https://docs.cloud.google.com/bigquery/docs/reference/odbc-jdbc-drivers](https://docs.cloud.google.com/bigquery/docs/reference/odbc-jdbc-drivers), [https://docs.cloud.google.com/mcp/configure-mcp-ai-application](https://docs.cloud.google.com/mcp/configure-mcp-ai-application))
- auth (evidence: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-client-default-credentials](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-client-default-credentials), [https://docs.cloud.google.com/bigquery/docs/reference/odbc-jdbc-drivers](https://docs.cloud.google.com/bigquery/docs/reference/odbc-jdbc-drivers), [https://docs.cloud.google.com/mcp/configure-mcp-ai-application](https://docs.cloud.google.com/mcp/configure-mcp-ai-application))
- authorization (evidence: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-client-default-credentials](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-client-default-credentials), [https://docs.cloud.google.com/bigquery/docs/reference/odbc-jdbc-drivers](https://docs.cloud.google.com/bigquery/docs/reference/odbc-jdbc-drivers), [https://docs.cloud.google.com/mcp/configure-mcp-ai-application](https://docs.cloud.google.com/mcp/configure-mcp-ai-application))
- credential (evidence: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-client-default-credentials](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-client-default-credentials), [https://docs.cloud.google.com/bigquery/docs/reference/odbc-jdbc-drivers](https://docs.cloud.google.com/bigquery/docs/reference/odbc-jdbc-drivers), [https://docs.cloud.google.com/mcp/configure-mcp-ai-application](https://docs.cloud.google.com/mcp/configure-mcp-ai-application))
- secret (evidence: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-client-default-credentials](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-client-default-credentials), [https://docs.cloud.google.com/bigquery/docs/reference/odbc-jdbc-drivers](https://docs.cloud.google.com/bigquery/docs/reference/odbc-jdbc-drivers), [https://docs.cloud.google.com/mcp/configure-mcp-ai-application](https://docs.cloud.google.com/mcp/configure-mcp-ai-application))
- token (evidence: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-client-default-credentials](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-client-default-credentials), [https://docs.cloud.google.com/bigquery/docs/reference/odbc-jdbc-drivers](https://docs.cloud.google.com/bigquery/docs/reference/odbc-jdbc-drivers), [https://docs.cloud.google.com/mcp/configure-mcp-ai-application](https://docs.cloud.google.com/mcp/configure-mcp-ai-application))

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/reference/odbc-jdbc-drivers](https://docs.cloud.google.com/bigquery/docs/reference/odbc-jdbc-drivers)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-client-default-credentials](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-client-default-credentials)
- [https://docs.cloud.google.com/mcp/configure-mcp-ai-application](https://docs.cloud.google.com/mcp/configure-mcp-ai-application)
