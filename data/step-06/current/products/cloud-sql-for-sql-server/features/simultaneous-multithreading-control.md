---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:14.562Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Simultaneous multithreading control"
feature_slug: "simultaneous-multithreading-control"
latest_feature_date: "2023-05-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/create-instance"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/pricing"
keywords:
  - "simultaneous"
  - "multithreading"
  - "control"
  - "sql"
  - "lets"
  - "you"
  - "disable"
  - "when"
---

# Simultaneous multithreading control

Product: Cloud SQL for SQL Server
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL lets you disable simultaneous multithreading when creating or editing instances and read replicas.

## Extended Definition

Cloud SQL lets you disable simultaneous multithreading when creating or editing instances and read replicas.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls)
- [https://docs.cloud.google.com/sql/docs/sqlserver/pricing](https://docs.cloud.google.com/sql/docs/sqlserver/pricing)

## Supporting Pages

### Create instances \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- Source ID: `site-docs-root`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- Machine type vCPU/Memory Not applicable 1 vCPU, 3.75 GB 2 vCPUs, 8 GB 4 vCPUs, 16 GB 8 vCPUs, 32 GB Custom 1 to 32 vCPUs, 3.75 GB to 208 GB SQL Server 2017 Standard, SQL Server 2019 Standard, SQL Server 2022 Standard, and SQL Server 2025 Standard Machine type vCPU/Memory Not applicable 1 vCPU, 3.75 GB 2 vCPUs, 8 GB 4 vCPUs, 16 GB 8 vCPUs, 32 GB Custom 1 to 48 vCPUs, 3.75 GB to 312 GB SQL Server 2017 Enterprise, SQL Server 2019 Enterprise, SQL Server 2022 Enterprise, and SQL Server 2025 Enterprise Machine type vCPU/Memory Not applicable 1 vCPU, 3.75 GB 2 vCPUs, 8 GB 4 vCPUs, 16 GB 8 vCPUs, 32 GB Custom 2 to 96 vCPUs, 3.75 GB to 624 GB Performance-optimized (Cloud SQL Enterprise Plus only) 2 vCPUs, 16 GB 4 vCPUs, 32 GB 8 vCPUs, 64 GB 16 vCPUs, 128 GB 32 vCPUs, 256 GB 48 vCPUs, 384 GB 64 vCPUs, 512 GB 80 vCPUs, 640 GB 96 vCPUs, 768 GB 128 vCPUs, 864 GB Memory-optimized (Cloud SQL Enterprise Plus only) 4 vCPUs, 128 GB 8 vCPUs, 256 GB 16 vCPUs, 512 GB Simultaneous multithreading Simultaneous multithreading (SMT) on Cloud SQL for SQL Server lets you run two virtual CPUs (vCPUs) as independent, separate threads on one physical core.
- Delete the changes To delete your changes, do the following: To disable deletion protection, in your Terraform configuration file set the deletion protection argument to false . deletion protection = "false" Apply the updated Terraform configuration by running the following command and entering yes at the prompt: terraform apply Remove resources previously applied with your Terraform configuration by running the following command and entering yes at the prompt: terraform destroy REST v1 1.
- Using this flag when you create an instance before that project has been fully upgraded to the new network architecture can lead to IP address overconsumption or a failure to create instances if there aren't sufficient IP addresses remaining in the allocated IP range.
- Choose between Cloud SQL Enterprise Plus edition and Cloud SQL Enterprise edition When creating a Cloud SQL for SQL Server instance, you choose the machine configuration from several different machine families, depending on the Cloud SQL edition.

### "Configure VPC Service Controls \_|\_ Cloud SQL for SQL Server \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls)
- Source ID: `site-docs-reference`
- Final score: 103
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Also review the Cloud SQL limitations when using VPC Service Controls .
- Review limitations when using VPC Service Controls with Cloud SQL.
- Home Documentation Databases Cloud SQL SQL Server Guides Send feedback Configure VPC Service Controls Stay organized with collections Save and categorize content based on your preferences.
- Disallow or disable public IP for Cloud SQL instances To constrain data within the VPC for your Cloud SQL project, do not allow connections to Cloud SQL instances from public IPs.

### Cloud SQL pricing | Google Cloud

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/pricing](https://docs.cloud.google.com/sql/docs/sqlserver/pricing)
- Source ID: `site-docs-root`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- Disabling simultaneous multithreading (SMT) reduces the number of virtual CPUs (vCPUs) per core from 2 to 1, which in turn might reduce your SQL Server licensing costs.
- The following examples show how disabling SMT affects your billing: User SMT: enabled or disabled Number of vCPUs on the instance Number of vCPUs the SQL Server licensing fees are calculated for Number of vCPUs the compute charges are calculated for User1 Enabled 8 8 8 User2 Disabled 8 4 8 User3 Disabled 6 4 6 Note that despite disabling SMT, User3's SQL Server license fees are calculated for 4 vCPUs because SQL Server licensing requires a core license to be assigned to each virtual CPU on your instance, with a minimum of four cores for each instance.
- Community forums About Google Privacy Site terms Google Cloud terms Cookies management controls Our third decade of climate action: join us Sign up for the Google Cloud newsletter Subscribe language ‪English‬ ‪English‬ ‪Deutsch‬ ‪Español‬ ‪Español (Latinoamérica)‬ ‪Français‬ ‪Indonesia‬ ‪Italiano‬ ‪Português (Brasil)‬ ‪简体中文‬ ‪繁體中文‬ ‪日本語‬ ‪한국어‬
- Network Egress Pricing When network traffic leaves a Cloud SQL instance, the charge applied depends on the destination of the traffic, and in some cases, whether a partner is involved.

