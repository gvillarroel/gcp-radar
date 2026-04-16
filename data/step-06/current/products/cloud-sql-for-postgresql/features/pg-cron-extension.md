---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.806Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "pg_cron extension"
feature_slug: "pg-cron-extension"
latest_feature_date: "2021-11-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect"
  - "https://docs.cloud.google.com/sql/docs/postgres/build-context-gemini-cli"
  - "https://docs.cloud.google.com/sql/docs/postgres/pricing"
keywords:
  - "cron"
  - "scheduling"
  - "within"
  - "provides"
  - "extension"
  - "based"
---

# pg_cron extension

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

The pg_cron extension provides cron-based job scheduling from within the database.

## Extended Definition

The pg_cron extension provides cron-based job scheduling from within the database.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/postgres/build-context-gemini-cli](https://docs.cloud.google.com/sql/docs/postgres/build-context-gemini-cli)
- [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing)

## Supporting Pages

### "Connect to an instance using Private Service Connect \_|\_ Cloud SQL for\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect)
- Source ID: `site-iam-reference`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- To connect to the Cloud SQL instance, use the internal IP address. psql "sslmode=disable dbname= DATABASE NAME user= USERNAME hostaddr= IP ADDRESS " Make the following replacements: DATABASE NAME : the name of the Cloud SQL for PostgreSQL database that's contained within the instance USERNAME : the name of the user that's connecting to the instance IP ADDRESS : the endpoint's IP address Connect using the Cloud SQL Auth Proxy The Cloud SQL Auth Proxy is a connector that provides secure access to an instance with Private Service Connect enabled without a need for authorized networks or for configuring SSL.
- After you meet these conditions, use the DNS record to connect to the instance from any VPC network where you created the endpoint. psql "sslmode=disable dbname= DATABASE NAME user= USERNAME host= DNS RECORD " Make the following replacements: DATABASE NAME : the name of the Cloud SQL for PostgreSQL database that's contained within the instance USERNAME : the name of the user that's connecting to the instance DNS RECORD : the endpoint's DNS record Connect directly through an internal IP address Before connecting to a Cloud SQL instance with Private Service Connect enabled, do the following: Create a Private Service Connect endpoint .
- If you use Private Service Connect to connect to a Cloud SQL instance from multiple VPC networks, then each network has its own administrator. dns.admin Grants full control over Cloud DNS resources, including DNS zones and records. cloudsql.admin Provides full control of a Cloud SQL instance and controls the instance over its lifecycle. cloudsql.instanceUser Provides access to the Cloud SQL instance.
- When testing connectivity to a Cloud SQL instance with Private Service Connect enabled , you can't set the following items: The instance's internal IP address or DNS name as the destination directly The instance as the source The IP address of the Private Service Connect endpoint as the source IP-based allowlisting by using authorized networks isn't supported.

### "Build context sets using Gemini CLI \_|\_ Cloud SQL for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/build-context-gemini-cli](https://docs.cloud.google.com/sql/docs/postgres/build-context-gemini-cli)
- Source ID: `site-iam-reference`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- Run the following commands in your terminal to authenticate: gcloud auth application-default login Configure the tools.yaml file The extension requires a database connection for context generation, which is supported by the MCP Toolbox and defined within the tools.yaml configuration file.
- Install the DB Context Enrichment MCP extension The DB Context Enrichment extension provides a guided, interactive workflow to generate structured NL2SQL context from your database schemas.
- To update the DB Context Enrichment extension, run the following command: gemini extensions update mcp-db-context-enrichment To update the DB Context Enrichment extension or to replace the GEMINI API KEY , run the following command: gemini extensions config mcp-db-context-enrichment GEMINI API KEY Replace GEMINI API KEY with your Gemini API key.
- To install the DB Context Enrichment extension, follow these steps: Install the DB Context Enrichment Gemini CLI extension: gemini extensions install https://github.com/GoogleCloudPlatform/db-context-enrichment Note: The extension requires a Gemini API key at installation to authenticate with the Gemini API and enable context generation.

### Cloud SQL pricing | Google Cloud

- URL: [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing)
- Source ID: `site-docs-root`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- Iowa (us-central1) Johannesburg (africa-south1) Taiwan (asia-east1) Hong Kong (asia-east2) Tokyo (asia-northeast1) Osaka (asia-northeast2) Seoul (asia-northeast3) Mumbai (asia-south1) Delhi (asia-south2) Singapore (asia-southeast1) Jakarta (asia-southeast2) Bangkok (asia-southeast3) Sydney (australia-southeast1) Melbourne (australia-southeast2) Warsaw (europe-central2) Finland (europe-north1) Stockholm (europe-north2) Madrid (europe-southwest1) Belgium (europe-west1) Berlin (europe-west10) Turin (europe-west12) London (europe-west2) Frankfurt (europe-west3) Netherlands (europe-west4) Zurich (europe-west6) Milan (europe-west8) Paris (europe-west9) Doha (me-central1) Dammam (me-central2) Tel Aviv (me-west1) Montreal (northamerica-northeast1) Toronto (northamerica-northeast2) Mexico (northamerica-south1) Sao Paulo (southamerica-east1) Santiago (southamerica-west1) Iowa (us-central1) South Carolina (us-east1) Northern Virginia (us-east4) Columbus (us-east5) Alabama (us-east7) Dallas (us-south1) Oregon (us-west1) Los Angeles (us-west2) Salt Lake City (us-west3) Las Vegas (us-west4) Phoenix (us-west8) Item Price (USD) Serverless export pricing $0.01 / 1 gibibyte Note: The price per GiB is calculated based on the disk size of the offload instance, which is the same as the disk size of the primary instance.
- Destination Price (USD) Compute Engine instances and Cloud SQL cross-region replicas Within the same region: free Between regions within North America: $0.12/GiB Between regions outside of North America: $0.12/GiB Google Products (except Compute Engine and traffic to Cloud SQL cross-region replicas) Intra-continental: free Inter-continental: $0.12/GiB Internet egress using Cloud Interconnect $0.05/GiB Internet egress (not using Cloud Interconnect) $0.19/GiB If you pay in a currency other than USD, the prices listed in your currency on Cloud Platform SKUs apply.
- Destination Price (USD) Compute Engine instances Within the same region: free Between regions within North America: $0.12/GiB Between regions outside of North America: $0.12/GiB Google Products (except Compute Engine) Intra-continental: free Inter-continental: $0.12/GiB Internet egress using Cloud Interconnect $0.05/GiB Internet egress (not using Cloud Interconnect) $0.19/GiB If you pay in a currency other than USD, the prices listed in your currency on Cloud Platform SKUs apply.
- Blockchain RPC Enterprise-grade RPC for building on the blockchain. close Save money with our transparent approach to pricing Google Cloud's pay-as-you-go pricing offers automatic savings based on monthly usage and discounted rates for prepaid resources.

