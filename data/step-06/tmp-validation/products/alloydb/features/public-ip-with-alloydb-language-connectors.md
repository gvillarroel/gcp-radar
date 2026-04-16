---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.165Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Public IP with AlloyDB Language Connectors"
feature_slug: "public-ip-with-alloydb-language-connectors"
latest_feature_date: "2024-02-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes"
  - "https://docs.cloud.google.com/alloydb/docs/ai/generate-sql-queries-natural-language"
  - "https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_instances"
keywords:
  - "connecting"
  - "over"
  - "connectors"
  - "public"
  - "language"
  - "clusters"
---

# Public IP with AlloyDB Language Connectors

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB Language Connectors support connecting to clusters over public IP.

## Extended Definition

AlloyDB Language Connectors support connecting to clusters over public IP.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes)
- [https://docs.cloud.google.com/alloydb/docs/ai/generate-sql-queries-natural-language](https://docs.cloud.google.com/alloydb/docs/ai/generate-sql-queries-natural-language)
- [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_instances](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_instances)

## Supporting Pages

### "Connect from Google Kubernetes Engine (GKE) to AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes)
- Source ID: `site-docs-reference`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- A new version of the Proxy is released monthly with bug fixes, security updates, and new features. image : gcr.io/alloydb-connectors/alloydb-auth-proxy:1.10.1 args : If you're connecting over public IP, enable this flag. - "--public-ip" If you're connecting with PSC, enable this flag: - "--psc" If you're using auto IAM authentication, enable this flag: - "--auto-iam-authn" Enable structured logging with Google's LogEntry format: - "--structured-logs" Listen on localhost:5432 by default. - "--port=5432" Specify your instance URI, e.g., "projects/myproject/locations/us-central1/clusters/mycluster/instances/myinstance" - "<INSTANCE-URI>" securityContext : The default AlloyDB Auth Proxy image runs as the "nonroot" user and group (uid: 65532) by default. runAsNonRoot : true You should use resource requests/limits as a best practice to prevent pods from consuming too many resources and affecting the execution of other pods.
- See the License for the specific language governing permissions and limitations under the License. apiVersion : apps/v1 kind : Deployment metadata : name : < YOUR-DEPLOYMENT-NAME > spec : selector : matchLabels : app : < YOUR-APPLICATION-NAME > template : metadata : labels : app : < YOUR-APPLICATION-NAME > spec : serviceAccountName : < YOUR-KSA-NAME > containers : Your application container goes here. - name : < YOUR-APPLICATION-NAME > image : < YOUR-APPLICATION-IMAGE-URL > env : - name : DB HOST The port value here (5432) should match the --port flag below. value : "localhost:5342" - name : DB USER valueFrom : secretKeyRef : name : < YOUR-DB-SECRET > key : username - name : DB PASS valueFrom : secretKeyRef : name : < YOUR-DB-SECRET > key : password - name : DB NAME valueFrom : secretKeyRef : name : < YOUR-DB-SECRET > key : database The Auth Proxy sidecar goes here. - name : alloydb-auth-proxy Make sure you have automation that upgrades this version regularly.
- See the License for the specific language governing permissions and limitations under the License. apiVersion : v1 kind : Service metadata : name : < YOUR-SERVICE-NAME > spec : type : LoadBalancer selector : app : < YOUR-APPLICATION-NAME > ports : - port : 80 targetPort : 8080 service-account.yaml Copyright 2024 Google LLC Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
- See the License for the specific language governing permissions and limitations under the License. apiVersion : v1 kind : ServiceAccount metadata : name : < YOUR-KSA-NAME > # TODO(developer): replace this value Clean up To avoid incurring charges to your Google Cloud account for the resources used in this tutorial, either delete the project that contains the resources, or keep the project and delete the individual resources.

### "Generate SQL queries using natural language questions \_|\_ AlloyDB for\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/generate-sql-queries-natural-language](https://docs.cloud.google.com/alloydb/docs/ai/generate-sql-queries-natural-language)
- Source ID: `site-docs-root-2`
- Final score: 111
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To use natural language to get results from your database using the alloydb ai nl.get sql function, use the following example: SELECT alloydb ai nl . get sql ( 'my app config' , -- nl config 'What is the sum that client number 4''s account has following transaction 851?' -- nl question ); The following JSON output is returned: { "sql": "SELECT T3.balance FROM public.client AS T1 INNER JOIN public.account AS T2 ON T1.district id = T2.district id INNER JOIN public.trans AS T3 ON T2.account id = T3.account id WHERE T1.client id = 4 AND T3.trans id = 851", "prompt": "", "retries": 0, "error msg": "", "nl question": "What is the sum that client number 4's account has following transaction 851?" } Optional: To extract the generated SQL query as a text string, add ->>'sql' : SELECT alloydb ai nl . get sql ( 'my app config' , -- nl config 'What is the sum that client number 4''s account has following transaction 851?' -- nl question ) - >> 'sql' ; The ->> operator is used to extract a JSON value as text.
- For example: SELECT alloydb ai nl . associate concept type ( 'public.person.date col' , 'date' ) Autogenerate concept type associations To automatically associate columns with concept types, use the automated concept type association feature of the AlloyDB AI natural language API.
- For more information about the alloydb ai nl extension, see the AlloyDB AI natural language overview .
- SELECT FROM alloydb ai nl . generated templates view ; The following is an example of the returned output: -[ RECORD 1 ]---------------------------------------------------------------- id 1 config my app config type Template manifest How many clients have a birth year of a given number? nl How many clients have a birth year of 1997? sql select count( ) from public.client as T where to char(T.birth date::timestamp, 'YYYY') = '1997'; intent How many clients have a birth year of 1997? psql select count( ) from public.client as T where to char(T.birth date::timestamp, 'YYYY') = $1; pintent How many clients have a birth year of $1? comment explanation weight 1 The manifest in the returned output is a general template or a broad description of the question type or the operation that can be performed.

### "MCP Tools Reference: alloydb \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_instances](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_instances)
- Source ID: `site-api-reference`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- InstanceNetworkConfig JSON representation { "authorizedExternalNetworks" : [ { object ( AuthorizedNetwork ) } ] , "enablePublicIp" : boolean , "enableOutboundPublicIp" : boolean , "network" : string , "allocatedIpRangeOverride" : string } Fields authorizedExternalNetworks[] object ( AuthorizedNetwork ) Optional.
- Instance JSON representation { "name" : string , "displayName" : string , "uid" : string , "createTime" : string , "updateTime" : string , "deleteTime" : string , "labels" : { string : string , ... } , "state" : enum ( State ) , "instanceType" : enum ( InstanceType ) , "machineConfig" : { object ( MachineConfig ) } , "availabilityType" : enum ( AvailabilityType ) , "gceZone" : string , "databaseFlags" : { string : string , ... } , "writableNode" : { object ( Node ) } , "nodes" : [ { object ( Node ) } ] , "queryInsightsConfig" : { object ( QueryInsightsInstanceConfig ) } , "observabilityConfig" : { object ( ObservabilityInstanceConfig ) } , "readPoolConfig" : { object ( ReadPoolConfig ) } , "ipAddress" : string , "publicIpAddress" : string , "reconciling" : boolean , "etag" : string , "annotations" : { string : string , ... } , "clientConnectionConfig" : { object ( ClientConnectionConfig ) } , "satisfiesPzs" : boolean , "pscInstanceConfig" : { object ( PscInstanceConfig ) } , "networkConfig" : { object ( InstanceNetworkConfig ) } , "outboundPublicIpAddresses" : [ string ] , "activationPolicy" : enum ( ActivationPolicy ) , "connectionPoolConfig" : { object ( ConnectionPoolConfig ) } , "maintenanceVersionName" : string , "dataApiAccess" : enum ( DataApiAccess ) } Fields name string Output only.
- This can happen due to user-triggered updates or system actions like failover or maintenance. etag string For Resource freshness validation ( https://google.aip.dev/154 ) annotations map (key: string, value: string) Annotations to allow client tools to store small amount of arbitrary data.
- AnnotationsEntry JSON representation { "key" : string , "value" : string } Fields key string value string ClientConnectionConfig JSON representation { "requireConnectors" : boolean , "sslConfig" : { object ( SslConfig ) } } Fields requireConnectors boolean Optional.

