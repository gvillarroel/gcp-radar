---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.538Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB Admin API client libraries"
feature_slug: "alloydb-admin-api-client-libraries"
latest_feature_date: "2023-03-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/ai/use-alloydb-mcp"
  - "https://docs.cloud.google.com/alloydb/docs/ai/generate-sql-queries-natural-language"
  - "https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes"
keywords:
  - "alloydb"
  - "admin"
  - "client"
  - "libraries"
  - "available"
  - "go"
  - "java"
---

# AlloyDB Admin API client libraries

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

Cloud Client Libraries are available for the AlloyDB Admin API in C++, C#, Go, and Java.

## Extended Definition

Cloud Client Libraries are available for the AlloyDB Admin API in C++, C#, Go, and Java.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/ai/use-alloydb-mcp](https://docs.cloud.google.com/alloydb/docs/ai/use-alloydb-mcp)
- [https://docs.cloud.google.com/alloydb/docs/ai/generate-sql-queries-natural-language](https://docs.cloud.google.com/alloydb/docs/ai/generate-sql-queries-natural-language)
- [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes)

## Supporting Pages

### "Use the AlloyDB remote MCP server \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/use-alloydb-mcp](https://docs.cloud.google.com/alloydb/docs/ai/use-alloydb-mcp)
- Source ID: `site-docs-reference-2`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- To initialize the gcloud CLI, run the following command: gcloud init Required roles To get the permissions that you need to use the AlloyDB for PostgreSQL MCP server, ask your administrator to grant you the following IAM roles on the project where you want to use the AlloyDB for PostgreSQL MCP server: Make MCP tool calls: MCP Tool User ( roles/mcp.toolUser ) Create an AlloyDB instance: AlloyDB Admin ( roles/alloydb.admin ) Create an AlloyDB user: AlloyDB Admin ( roles/alloydb.admin ) Execute SQL queries in AlloyDB: AlloyDB Admin ( roles/alloydb.admin ) Studio Query User ( roles/databasesconsole.studioQueryUser ) Get a AlloyDB instance or list all AlloyDB instances in a project: AlloyDB Viewer ( roles/alloydb.viewer ) List AlloyDB users: AlloyDB Viewer ( roles/alloydb.viewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Configure an MCP client to use the AlloyDB MCP server AI applications and agents, such as Claude or Gemini CLI, can instantiate an MCP client that connects to a single MCP server.
- Available tools To view details of available MCP tools and their descriptions for the AlloyDB MCP server, see the AlloyDB MCP reference .
- To view a list of scopes required for AlloyDB, see AlloyDB Admin API .

### "Generate SQL queries using natural language questions \_|\_ AlloyDB for\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/generate-sql-queries-natural-language](https://docs.cloud.google.com/alloydb/docs/ai/generate-sql-queries-natural-language)
- Source ID: `site-docs-reference-required-8`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- SELECT psql FROM alloydb ai nl . template store view WHERE intent = 'How many accounts associated with loans are located in the Prague region?' ; This statement returns the following: SELECT COUNT(T1.account id) FROM account AS T1 INNER JOIN loan AS T2 ON T1.account id = T2.account id INNER JOIN district AS T3 ON T1.district id = T3.district id WHERE T3."A3" = $1 Provide a customized parameterization To provide a customized parameterization for a SQL statement using the manual interface of the add template function, run the statement in the following example: SELECT alloydb ai nl . add template ( nl config id = > 'my app config' , intent = > 'Among the accounts opened, how many customers born before 1950 resided in Slokolov at the time of account opening?' , sql = > $$ SELECT COUNT ( DISTINCT T2 . client id ) FROM district AS T1 INNER JOIN client AS T2 ON T1 . district id = T2 . district id INNER JOIN account AS T3 ON T2 . client id IN ( SELECT client id FROM disp WHERE account id = T3 . account id ) WHERE to char ( T2 . birth date :: timestamp , 'YYYY' ) < '1950' AND T1 . "A2" = 'Slokolov' $$ , parameterized sql = > $$ SELECT COUNT ( DISTINCT T2 . client id ) FROM district AS T1 INNER JOIN client AS T2 ON T1 . district id = T2 . district id INNER JOIN account AS T3 ON T2 . client id IN ( SELECT client id FROM disp WHERE account id = T3 . account id ) WHERE to char ( T2 . birth date :: timestamp , 'YYYY' ) < $ 2 AND T1 . "A2" = $ 1 $$ , parameterized intent = > $$ Among the accounts opened , how many customers born before $ 2 resided in $ 1 at the time of account opening ? $$ , manifest = > $$ Among the accounts opened , how many customers born before a given date resided in a given city at the time of account opening ? $$ , check intent = > TRUE ); In the preceding definition, the parameterization of the SQL statement is provided.
- To use natural language to get results from your database using the alloydb ai nl.get sql function, use the following example: SELECT alloydb ai nl . get sql ( 'my app config' , -- nl config 'What is the sum that client number 4''s account has following transaction 851?' -- nl question ); The following JSON output is returned: { "sql": "SELECT T3.balance FROM public.client AS T1 INNER JOIN public.account AS T2 ON T1.district id = T2.district id INNER JOIN public.trans AS T3 ON T2.account id = T3.account id WHERE T1.client id = 4 AND T3.trans id = 851", "prompt": "", "retries": 0, "error msg": "", "nl question": "What is the sum that client number 4's account has following transaction 851?" } Optional: To extract the generated SQL query as a text string, add ->>'sql' : SELECT alloydb ai nl . get sql ( 'my app config' , -- nl config 'What is the sum that client number 4''s account has following transaction 851?' -- nl question ) - >> 'sql' ; The ->> operator is used to extract a JSON value as text.
- SELECT FROM alloydb ai nl . generated templates view ; The following is an example of the returned output: -[ RECORD 1 ]---------------------------------------------------------------- id 1 config my app config type Template manifest How many clients have a birth year of a given number? nl How many clients have a birth year of 1997? sql select count( ) from public.client as T where to char(T.birth date::timestamp, 'YYYY') = '1997'; intent How many clients have a birth year of 1997? psql select count( ) from public.client as T where to char(T.birth date::timestamp, 'YYYY') = $1; pintent How many clients have a birth year of $1? comment explanation weight 1 The manifest in the returned output is a general template or a broad description of the question type or the operation that can be performed.
- Available fragments are exposed by views like alloydb ai nl.fragment store view , as shown in the following example: SELECT manifest , scope , fragment , intent , pfragment , pintent FROM alloydb ai nl . fragment store view WHERE intent = 'Average salary between 6000 and 10000' ; The query returns a result set similar to the following: manifest Average salary between a given number and a given number scope district AS T fragment T."A11" BETWEEN 6000 AND 10000 intent Average salary between 6000 and 10000 pfragment T."A11" BETWEEN $2 AND $1 pintent Average salary between $2 and $1 A manifest in a fragment is generated automatically from the intent, and it represents a generalized version of the intent.

### "Connect from Google Kubernetes Engine (GKE) to AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes)
- Source ID: `site-docs-reference`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- This can take several minutes. gcloud In the Cloud Shell, check if the unused IP addresses (IPv4) range is already assigned to service peering: gcloud services vpc-peerings list --network = default Skip the next step if your output looks similar to the following: network: projects/493573376485/global/networks/default peering: servicenetworking-googleapis-com reservedPeeringRanges: - default-ip-range service: services/servicenetworking.googleapis.com In this output, the value of reservedPeeringRanges is default-ip-range , which you can use as IP RANGE NAME to create a private connection in step 3. (Skip when using the default value of reservedPeeringRanges ) To allocate unused IP addresses in the VPC, use the following command: gcloud compute addresses create IP RANGE NAME \ --global \ --purpose = VPC PEERING \ --prefix-length = 16 \ --description = "VPC private service access" \ --network = default Replace IP RANGE NAME with your name for available internal IP addresses within an AlloyDB subnet, such as alloydb-gke-psa-01 .
- To grant alloydb.client and serviceusage.serviceUsageConsumer roles to your application GSA, use the following commands: gcloud projects add-iam-policy-binding PROJECT ID --member = serviceAccount: GSA NAME @ PROJECT ID .iam.gserviceaccount.com --role = "roles/alloydb.client" gcloud projects add-iam-policy-binding PROJECT ID --member = serviceAccount: GSA NAME @ PROJECT ID .iam.gserviceaccount.com --role = "roles/serviceusage.serviceUsageConsumer" Configure Workload Identity Federation for GKE for the sample application You need to configure GKE to provide the service account to the AlloyDB Auth Proxy using the Workload Identity Federation for GKE feature.
- To grant the roles/alloydb.client role, do the following: Click Select a role .
- Choose Cloud AlloyDB Client from Roles .

