---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.361Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Private Service Connect"
feature_slug: "private-service-connect"
latest_feature_date: "2023-08-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect"
  - "https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect"
  - "https://docs.cloud.google.com/sql/docs/postgres/connect-overview"
keywords:
  - "private"
  - "connect"
  - "lets"
  - "you"
  - "to"
  - "sql"
  - "instance"
  - "from"
---

# Private Service Connect

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Private Service Connect lets you connect to a Cloud SQL instance from multiple VPC networks across groups, projects, or organizations.

## Extended Definition

Private Service Connect lets you connect to a Cloud SQL instance from multiple VPC networks across groups, projects, or organizations.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/postgres/connect-overview](https://docs.cloud.google.com/sql/docs/postgres/connect-overview)

## Supporting Pages

### "Connect to an instance using Private Service Connect \_|\_ Cloud SQL for\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect)
- Source ID: `site-iam-reference`
- Final score: 306
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- After you meet these conditions, use the DNS record to connect to the instance from any VPC network where you created the endpoint. psql "sslmode=disable dbname= DATABASE NAME user= USERNAME host= DNS RECORD " Make the following replacements: DATABASE NAME : the name of the Cloud SQL for PostgreSQL database that's contained within the instance USERNAME : the name of the user that's connecting to the instance DNS RECORD : the endpoint's DNS record Connect directly through an internal IP address Before connecting to a Cloud SQL instance with Private Service Connect enabled, do the following: Create a Private Service Connect endpoint .
- If you use Private Service Connect to connect to a Cloud SQL instance from multiple VPC networks, then each network has its own administrator. dns.admin Grants full control over Cloud DNS resources, including DNS zones and records. cloudsql.admin Provides full control of a Cloud SQL instance and controls the instance over its lifecycle. cloudsql.instanceUser Provides access to the Cloud SQL instance.
- Cloud SQL Python Connector (v1.3.0 or later) Cloud SQL Go Connector (v1.4.0 or later) Cloud SQL Java Connector (v1.13.0 or later) Cloud SQL Node.js Connector (v0.5.0 or later) Connect from App Engine Standard, Cloud Run, or Cloud Run functions To connect to Cloud SQL instances with Private Service Connect enabled, you can use App Engine Standard or Cloud Run .
- You can use Private Service Connect to connect to either a primary Cloud SQL instance or any of its read replicas from multiple Virtual Private Cloud (VPC) networks that belong to different groups, teams, projects, or organizations.

### "Private Service Connect overview \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect)
- Source ID: `site-docs-root`
- Final score: 282
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can use Private Service Connect for the following purposes: Connect to a Cloud SQL instance from multiple VPC networks that belong to different groups, teams, projects, or organizations Connect to either a primary instance or any of its read replicas Private Service Connect endpoint You can use Private Service Connect endpoints to access Cloud SQL instances privately from your consumer VPC networks.
- Limitations When using a Private Service Connect interface with a network attachment to create outbound connections to your network from your Cloud SQL instance, note the following limitations: Enabling or disabling Private Service Connect outbound connectivity requires downtime.
- To use Private Service Connect backends, you must setup the following resources for each serving port on which you want to access a given Cloud SQL instance: Private Service Connect Network Endpoint Group (NEG) , which must reference the service attachment and a serving port of the Cloud SQL instance.
- Private Service Connect outbound connections You can attach a Private Service Connect interface to your existing Cloud SQL Private Service Connect-enabled instances using a network attachment to allow your Cloud SQL instance to make outbound connections to your network.

### "Choose how to connect to Cloud SQL \_|\_ Cloud SQL for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/connect-overview](https://docs.cloud.google.com/sql/docs/postgres/connect-overview)
- Source ID: `site-docs-root`
- Final score: 274
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Remove networking options from an instance Cloud SQL supports the removal of the following networking options from an instance: Public IP from an instance with both private services access and public IP Public IP from an instance with public IP, private services access, and Private Service Connect Private Service Connect from an instance with both Private Service Connect and private services access Private Service Connect from an instance with Private Service Connect, private services access, and public IP Enable networking options for an instance You can enable Cloud SQL supports enabling the following connection options for instances: Private services access on an instance with public IP only Private Service Connect on an instance with private services access only Private Service Connect on an instance with both private services access and public IP Public IP on an instance with private services access only Limitations You can't create an instance with both a public IP address and Private Service Connect.
- Summary Recommendation : For improved security, we recommend that you configure your instance with a private IP address type unless you have specific requirements for an internet-accessible Cloud SQL instance, or if you're connecting from a client that doesn't meet the requirements for a VPC.
- Configuration options The following types of private networking configurations are supported: Private services access : connect to Cloud SQL instances from a single VPC network based on networking peering.
- Supported features The following table lists the features that Cloud SQL supports when you connect to an instance that's configured with one or both of the private networking options.

