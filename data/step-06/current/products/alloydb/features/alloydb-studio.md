---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.508Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB Studio"
feature_slug: "alloydb-studio"
latest_feature_date: "2024-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent"
  - "https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes"
  - "https://docs.cloud.google.com/alloydb/docs/ai/model-endpoint-console"
keywords:
  - "alloydb"
  - "studio"
  - "lets"
  - "authorized"
  - "users"
  - "run"
  - "sql"
  - "queries"
---

# AlloyDB Studio

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB Studio lets authorized users run SQL queries and interact with databases from the Google Cloud console; AlloyDB Studio provides a single interface with an Explorer pane and enhanced query editor to browse, query, and modify databases.

## Extended Definition

AlloyDB Studio lets authorized users run SQL queries and interact with databases from the Google Cloud console; AlloyDB Studio provides a single interface with an Explorer pane and enhanced query editor to browse, query, and modify databases.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent](https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent)
- [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes)
- [https://docs.cloud.google.com/alloydb/docs/ai/model-endpoint-console](https://docs.cloud.google.com/alloydb/docs/ai/model-endpoint-console)

## Supporting Pages

### "Integrate QueryData with an application \_|\_ AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent](https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent)
- Source ID: `site-docs-root-2`
- Final score: 143
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information, see Gemini Data Analytics Source and Gemini Data Analytics QueryData Tool. kind : source name : gda-api-source type : cloud-gemini-data-analytics projectId : " PROJECT ID " --- kind : tool name : cloud gda query tool type : cloud-gemini-data-analytics-query source : gda-api-source description : Use this tool to send natural language queries to the Gemini Data Analytics API and receive SQL, natural language answers, and explanations. location : " REGION ID " context : datasourceReferences : alloydb : databaseReference : projectId : " PROJECT ID " region : " REGION ID " clusterId : " CLUSTER ID " instanceId : " INSTANCE ID " databaseId : " DATABASE ID " agentContextReference : contextSetId : " CONTEXT SET ID " generationOptions : generateQueryResult : true generateNaturalLanguageAnswer : true generateExplanation : true generateDisambiguationQuestion : true Replace the following: PROJECT ID : Your Google Cloud project ID.
- This grants SELECT permissions on the view and USAGE on the underlying schema to authorized database users.
- Test QueryData and generate SQL queries in Studio.
- In the navigation menu, click AlloyDB Studio .

### "Connect from Google Kubernetes Engine (GKE) to AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes)
- Source ID: `site-docs-reference`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- You use this information in Create a Kubernetes secret . gcloud To create an AlloyDB database user, run the following command in the Cloud Shell: gcloud alloydb users create USERNAME \ --cluster = CLUSTER ID \ --region = REGION \ --password = DATABASE PASSWORD Replace the following: USERNAME : the name of the AlloyDB user, such as tutorial user .
- To connect to an AlloyDB for PostgreSQL cluster from outside its configured VPC, you configure Private Service Access configuration in the VPC for AlloyDB and use the default VPC network to run queries from an application deployed on a GKE cluster.
- Because the AlloyDB Proxy consumes resources linearly to usage, this pattern lets you more accurately scope and request resources to match your applications as it scales.
- On the Sign in to AlloyDB Studio page, do the following: In the Database list, select DATABASE NAME , such as tutorial db .

### "Use model endpoint management in AlloyDB Studio \_|\_ AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/model-endpoint-console](https://docs.cloud.google.com/alloydb/docs/ai/model-endpoint-console)
- Source ID: `site-docs-root-required-3`
- Final score: 113
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Databases AlloyDB for PostgreSQL Guides Send feedback Use model endpoint management in AlloyDB Studio Stay organized with collections Save and categorize content based on your preferences.
- You can run the google ml.alter model() function in the Editor tab of AlloyDB Studio to modify model metadata of other registered model endpoints.
- Call pre-registered embedding model endpoints The supported pre-registered embedding models are listed in the Explorer pane of AlloyDB Studio.
- You can run the google ml.drop model() function in the Editor tab of AlloyDB Studio to delete other registered model endpoints.

