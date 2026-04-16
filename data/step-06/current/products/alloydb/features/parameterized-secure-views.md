---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.478Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Parameterized secure views"
feature_slug: "parameterized-secure-views"
latest_feature_date: "2025-09-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/ai/generate-sql-queries-natural-language"
  - "https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent"
  - "https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners"
keywords:
  - "parameterized"
  - "secure"
  - "views"
  - "enhance"
  - "alloydb"
  - "security"
  - "row"
  - "access"
---

# Parameterized secure views

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

Parameterized secure views enhance AlloyDB data security and row access control by providing a secure SQL interface for application developers; Parameterized secure views provide a secure SQL interface that improves data security and row access control for application developers.

## Extended Definition

Parameterized secure views enhance AlloyDB data security and row access control by providing a secure SQL interface for application developers; Parameterized secure views provide a secure SQL interface that improves data security and row access control for application developers.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/ai/generate-sql-queries-natural-language](https://docs.cloud.google.com/alloydb/docs/ai/generate-sql-queries-natural-language)
- [https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent](https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent)
- [https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners](https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners)

## Supporting Pages

### "Generate SQL queries using natural language questions \_|\_ AlloyDB for\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/generate-sql-queries-natural-language](https://docs.cloud.google.com/alloydb/docs/ai/generate-sql-queries-natural-language)
- Source ID: `site-docs-reference-required-8`
- Final score: 181
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You achieve this by providing param names and param values inputs, as shown in the following example: SELECT alloydb ai nl . get sql summary ( nl config id = > 'my app config' , nl question = > 'Give me the total number of accounts and the earliest opening date and other information for accounts who choose issuance after transaction are staying in east Bohemia region?' , param names = > ARRAY [ 'user id' ], param values = > ARRAY [ '123' ] ); Providing param names and param values arguments makes sure that, when the nl question is answerable by a SQL statement that is enforced by parameterized secure views, the designated security filters are applied when the result set is produced and the summary is generated.
- Manage application data security using AlloyDB parameterized secure views Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- SELECT alloydb ai nl . apply generated templates ( 'my app config' ); Configure security for natural language To configure security for AlloyDB AI natural language, see Manage data application security using parameterized secure views .
- Other information about these accounts is not provided in the result set." } You can secure the tables and views accessed by a query in alloydb ai nl.get sql summary using one or more parameterized secure views .

### "Integrate QueryData with an application \_|\_ AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent](https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent)
- Source ID: `site-docs-root-2`
- Final score: 177
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To prevent these generated queries from accessing data outside a specific user's scope, implement parameterized secure views (PSVs).
- V2 YOUR CONTEXT SET ID : The context set ID for version 2 Add a secure access layer using SQL views When integrating QueryData with your application, QueryData generates SQL queries based on natural language inputs.
- For an example of how to use PSV with context sets, see Secure data agents with parameterized secure views .
- This security layer involves the following: Creating a parameterized secure view .

### "Google Cloud Ready - AlloyDB Partners \_|\_ AlloyDB for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners](https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners)
- Source ID: `site-docs-reference-2`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- Partner references Connecting ThoughtSpot with AlloyDB Adding a Google AlloyDB connection, Partner Advantage page Direct link Data governance, modeling, and security Collibra Solution Collibra Category Data governance Description Collibra data intelligence cloud combines data silos on a complete and scalable cloud-services platform, design easy-to-use intuitive workflows for data creators and innovators, use an open and flexible architecture to connect data applications, trust in data that's secure and compliant with enterprise-level standards.
- Partner references Collibra JDBC driver for AlloyDB Collibra catalogue connector for AlloyDB Partner Advantage page Direct link Liquibase Solution Liquibase Secure Category CI/CD automation with security and governance Description Liquibase helps forward-thinking companies harness the power of Database DevOps to accelerate, secure, and manage their organization.
- Partner references Connecting to AlloyDB Partner Advantage page Direct link Denodo Solution Denodo Platform Category Data integration and migration Description The Denodo platform provides business applications with easy access to integrated views of various heterogeneous and distributed, both structured and unstructured, data sources.
- Partner references AlloyDB Support Summary Creating a project Partner Advantage page Direct link VaulTree Solution Data-in-Use Encryption Category Data Security Description VaulTree is the world's first fully functional fully homomorphic (FHE) and searchable encryption (SE) based data-in-use solution with unparalleled performance and simplicity, powered by Vaultree with Google's AlloyDB.

