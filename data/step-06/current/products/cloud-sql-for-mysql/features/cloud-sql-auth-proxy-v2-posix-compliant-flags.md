---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.887Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Cloud SQL Auth proxy v2 POSIX-compliant flags"
feature_slug: "cloud-sql-auth-proxy-v2-posix-compliant-flags"
latest_feature_date: "2023-02-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/mysql/release-notes"
  - "https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl"
keywords:
  - "sql"
  - "auth"
  - "proxy"
  - "v2"
  - "posix"
  - "compliant"
  - "flags"
  - "introduces"
---

# Cloud SQL Auth proxy v2 POSIX-compliant flags

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL Auth proxy v2 introduces fully POSIX-compliant flags.

## Extended Definition

Cloud SQL Auth proxy v2 introduces fully POSIX-compliant flags.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- [https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl](https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl)

## Supporting Pages

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Among the new features, there's support for: Metrics and tracing with Cloud Monitoring and Cloud Trace Support for Prometheus Service account impersonation Separate Dialer functionality released as the Cloud SQL Go Connector Configuration with environment variables Fully POSIX-compliant flags We recommend all customers upgrade to v2 and have released a migration guide .
- Among the new features, there's support for: Metrics and tracing with Cloud Monitoring and Cloud Trace Support for Prometheus Service account impersonation Separate Dialer functionality released as the Cloud SQL Go Connector Configuration with environment variables Fully POSIX-compliant flags We recommend all customers upgrade to v2 and have released a migration guide .
- Among the new features, there's support for: Metrics and tracing with Cloud Monitoring and Cloud Trace Support for Prometheus Service account impersonation Separate Dialer functionality released as the Cloud SQL Go Connector Configuration with environment variables Fully POSIX-compliant flags We recommend all customers upgrade to v2 and have released a migration guide .
- For users of the Cloud SQL Auth Proxy : If the Cloud SQL instance to which you're connecting is using shared certificate authority (CA) for its serverCaMode setting, then on the client side, you must use Cloud SQL Auth Proxy version 2.13.0 or later.

### Cloud SQL for MySQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- Among the new features, there's support for: Metrics and tracing with Cloud Monitoring and Cloud Trace Support for Prometheus Service account impersonation Separate Dialer functionality released as the Cloud SQL Go Connector Configuration with environment variables Fully POSIX-compliant flags We recommend all customers upgrade to v2 and have released a migration guide .
- For users of the Cloud SQL Auth Proxy : If the Cloud SQL instance to which you're connecting is using shared certificate authority (CA) for its serverCaMode setting, then on the client side, you must use Cloud SQL Auth Proxy version 2.13.0 or later.
- If the Cloud SQL instance to which you're connecting is using customer-managed CA for its serverCaMode setting, then on the client side, you must use Cloud SQL Auth Proxy version 2.14.3 or later.
- February 08, 2023 Feature The Cloud SQL Auth proxy is a utility for ensuring secure connections to your Cloud SQL instances.

### "Authorize with SSL/TLS certificates \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl](https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl)
- Source ID: `site-iam-reference`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- For connections that use Cloud SQL Auth Proxy or Cloud SQL Language Connectors, the connections are automatically encrypted with SSL/TLS along with client and server identity verification without requiring you to download a server CA certificate and client certificate.
- Connect using SSL/TLS When connecting to a Cloud SQL instance from clients, you can use SSL/TLS for direct connections as well as for connections that use Cloud SQL Auth Proxy or Cloud SQL Language Connectors .
- Cloud SQL Auth Proxy version support Supports all versions of the Cloud SQL Auth Proxy, v1 and later.
- Requires the Cloud SQL Auth Proxy version 2.13.0 or later.

