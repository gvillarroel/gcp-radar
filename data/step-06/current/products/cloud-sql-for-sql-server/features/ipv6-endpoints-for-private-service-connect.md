---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:14.533Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "IPv6 endpoints for Private Service Connect"
feature_slug: "ipv6-endpoints-for-private-service-connect"
latest_feature_date: "2025-08-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/about-private-service-connect"
  - "https://docs.cloud.google.com/sql/docs/debugging-connectivity"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/create-instance"
keywords:
  - "ipv6"
  - "endpoints"
  - "private"
  - "connect"
  - "let"
  - "you"
  - "create"
  - "psc"
---

# IPv6 endpoints for Private Service Connect

Product: Cloud SQL for SQL Server
Coverage: MEDIUM

## Step 02 Summary

IPv6 endpoints for Private Service Connect let you create IPv6 PSC connections to Cloud SQL instances.

## Extended Definition

IPv6 endpoints for Private Service Connect let you create IPv6 PSC connections to Cloud SQL instances.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/about-private-service-connect](https://docs.cloud.google.com/sql/docs/sqlserver/about-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/debugging-connectivity](https://docs.cloud.google.com/sql/docs/debugging-connectivity)
- [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)

## Supporting Pages

### "Private Service Connect overview \_|\_ Cloud SQL for SQL Server \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/about-private-service-connect](https://docs.cloud.google.com/sql/docs/sqlserver/about-private-service-connect)
- Source ID: `site-docs-reference-required-4`
- Final score: 193
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The connection propagation feature in NCC benefits the following use case for Private Service Connect deployments: You can use a common services VPC network to create multiple Private Service Connect endpoints.
- For example, if you have three VPC networks that have to connect to your instance, then you must create three Private Service Connect endpoints—one endpoint for each VPC network.
- For these projects, you can create Private Service Connect endpoints for each instance.
- You can use Private Service Connect for the following purposes: Connect to a Cloud SQL instance from multiple VPC networks that belong to different groups, teams, projects, or organizations Connect to either a primary instance or any of its read replicas Private Service Connect endpoint You can use Private Service Connect endpoints to access Cloud SQL instances privately from your consumer VPC networks.

### Debugging connection issues \_|\_ Cloud SQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/debugging-connectivity](https://docs.cloud.google.com/sql/docs/debugging-connectivity)
- Source ID: `site-docs-root`
- Final score: 161
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Is the private connection created?
- Display the current tcp keepalive time value. cat /proc/sys/net/ipv4/tcp keepalive time Set tcp keepalive time to 60 seconds and make it permanent across reboots. echo 'net.ipv4.tcp keepalive time = 60' sudo tee -a /etc/sysctl.conf Apply the change. sudo /sbin/sysctl --load = /etc/sysctl.conf Display the tcp keepalive time value to verify the change was applied. cat /proc/sys/net/ipv4/tcp keepalive time Connect with IPv6 If you get either of the error messages Can't connect to MySQL server on '2001:1234::4321' (10051) Can't connect to MySQL server on '2001:1234::4321' (101) when you connect it is likely that you are attempting to connect to the IPv6 address of your instance but do not have IPv6 available on your workstation.
- The limit flag is an optional parameter that indicates the maximum number of entries to return. gcloud logging read "projects/ PROJECT ID /logs/cloudsql.googleapis.com/mysql-general.log" \ --limit = 10 gcloud logging read "projects/ PROJECT ID /logs/cloudsql.googleapis.com/postgres.log" \ --limit = 10 Private IP addresses Connections to a Cloud SQL instance using a private IP address are automatically authorized for RFC 1918 address ranges .
- The following section includes examples of questions you can ask yourself to help further narrow down the issue: Connection issues checklist Connecting Private IP Have you enabled the Service Networking API for your project?

### Create instances \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- Source ID: `site-docs-root`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- Available only for the beta command ( gcloud beta sql instances create ). --no-assign-ip : Instance will only have a private IP address. --allocated-ip-range-name : If specified, sets a range name for which an IP range is allocated.
- Connectivity Private IP --network --no-assign-ip (optional) --allocated-ip-range-name (optional) --enable-google-private-path (optional) --network : Specifies the name of the VPC network you want to use for this instance.
- See allocated range size To resolve this issue, you can either expand the existing allocated IP range or allocate an additional IP range to the private service connection.
- When you create an instance using with a Private IP address, a service account is created just-in-time using the Service Networking API.

