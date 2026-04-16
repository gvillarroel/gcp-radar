---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:14.593Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Cloud VPN connectivity"
feature_slug: "cloud-vpn-connectivity"
latest_feature_date: "2019-12-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/debugging-connectivity"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/about-private-service-connect"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview"
keywords:
  - "vpn"
  - "connectivity"
  - "sql"
  - "supports"
  - "connecting"
  - "instances"
  - "through"
---

# Cloud VPN connectivity

Product: Cloud SQL for SQL Server
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL supports connecting instances through Cloud VPN.

## Extended Definition

Cloud SQL supports connecting instances through Cloud VPN.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/debugging-connectivity](https://docs.cloud.google.com/sql/docs/debugging-connectivity)
- [https://docs.cloud.google.com/sql/docs/sqlserver/about-private-service-connect](https://docs.cloud.google.com/sql/docs/sqlserver/about-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview](https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview)

## Supporting Pages

### Debugging connection issues \_|\_ Cloud SQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/debugging-connectivity](https://docs.cloud.google.com/sql/docs/debugging-connectivity)
- Source ID: `site-docs-root`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- It's highly encouraged to run tcpdump to capture and inspect the packets between your host and the Cloud SQL instances when you are debugging the connectivity problems.
- Verify that you are authorized to connect If your connections are failing, check that you are authorized to connect: If you are having trouble connecting using an IP address, for example, you are connecting from your on-premises environment with the mysql client, then make sure that the IP address you are connecting from is authorized to connect to the Cloud SQL instance.
- Determine how connections are being initiated You can see information about your current connections by connecting to your database and running the following command: SHOW PROCESSLIST ; Connections that show an IP address, such as 1.2.3.4 , are connecting using IP.
- If you get an error message like: ERROR 1045 (28000): Access denied for user 'root'@'1.2.3.4' (using password: YES) when you connect, verify that you are using the correct password and that you are connecting over SSL if the instance requires it.

### "Private Service Connect overview \_|\_ Cloud SQL for SQL Server \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/about-private-service-connect](https://docs.cloud.google.com/sql/docs/sqlserver/about-private-service-connect)
- Source ID: `site-docs-reference-required-4`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- However, by propagating Private Service Connect endpoints through the Network Connectivity Center hub , these endpoints can be reachable by any other spoke VPC network in the same hub.
- For ease of use, we recommend connecting to your Cloud SQL instances using Private Service Connect endpoints.
- Switchover isn't supported for instances with Private Service Connect outbound connectivity enabled.
- You can use Private Service Connect for the following purposes: Connect to a Cloud SQL instance from multiple VPC networks that belong to different groups, teams, projects, or organizations Connect to either a primary instance or any of its read replicas Private Service Connect endpoint You can use Private Service Connect endpoints to access Cloud SQL instances privately from your consumer VPC networks.

### "Choose how to connect to Cloud SQL \_|\_ Cloud SQL for SQL Server \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview](https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview)
- Source ID: `site-docs-root`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- Remove networking options from an instance Cloud SQL supports the removal of the following networking options from an instance: Public IP from an instance with both private services access and public IP Public IP from an instance with public IP, private services access, and Private Service Connect Private Service Connect from an instance with both Private Service Connect and private services access Private Service Connect from an instance with Private Service Connect, private services access, and public IP Enable networking options for an instance You can enable Cloud SQL supports enabling the following connection options for instances: Private services access on an instance with public IP only Private Service Connect on an instance with private services access only Private Service Connect on an instance with both private services access and public IP Public IP on an instance with private services access only Limitations You can't create an instance with both a public IP address and Private Service Connect.
- Cloud Shell Connecting using the Cloud Shell Cloud Code Connecting using Cloud Code in JetBrains IDE Connect using third-party database administration tools SQL Server Management Studio Connecting with SQL Server Management Studio SSMS Object Explorer Connecting with SSMS Object Explorer Visual Studio Visual Studio Code for SQL Server Troubleshoot If you're having problems connecting, then check the following pages for help debugging or finding solutions to known issues: Debugging connection issues Known connectivity errors Troubleshooting Cloud SQL Auth Proxy connection Common connection issues What's next Learn how to connect with the Quickstart for Cloud SQL for sqlserver .
- Tools for connecting to Cloud SQL The following table contains some options for connecting to Cloud SQL: Connection option More information Cloud SQL Auth Proxy About the Cloud SQL Auth Proxy Connecting using the Cloud SQL Auth Proxy Connecting using the Cloud SQL Auth Proxy Docker Image gcloud CLI gcloud sql connect Cloud SQL language connectors Connect using Cloud SQL Connectors for Java, Python and Go.
- Summary Recommendation : For improved security, we recommend that you configure your instance with a private IP address type unless you have specific requirements for an internet-accessible Cloud SQL instance, or if you're connecting from a client that doesn't meet the requirements for a VPC.

