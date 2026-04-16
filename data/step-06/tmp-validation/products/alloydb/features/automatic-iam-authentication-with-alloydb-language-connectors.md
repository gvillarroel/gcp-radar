---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.163Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Automatic IAM Authentication with AlloyDB Language Connectors"
feature_slug: "automatic-iam-authentication-with-alloydb-language-connectors"
latest_feature_date: "2024-02-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes"
  - "https://docs.cloud.google.com/alloydb/docs/connect-iam"
  - "https://docs.cloud.google.com/alloydb/docs/ai/generate-sql-queries-natural-language"
keywords:
  - "authentication"
  - "connectors"
  - "connections"
  - "automatic"
  - "language"
  - "cluster"
---

# Automatic IAM Authentication with AlloyDB Language Connectors

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB Language Connectors support Automatic IAM Authentication for cluster connections.

## Extended Definition

AlloyDB Language Connectors support Automatic IAM Authentication for cluster connections.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes)
- [https://docs.cloud.google.com/alloydb/docs/connect-iam](https://docs.cloud.google.com/alloydb/docs/connect-iam)
- [https://docs.cloud.google.com/alloydb/docs/ai/generate-sql-queries-natural-language](https://docs.cloud.google.com/alloydb/docs/ai/generate-sql-queries-natural-language)

## Supporting Pages

### "Connect from Google Kubernetes Engine (GKE) to AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes)
- Source ID: `site-docs-reference`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- A new version of the Proxy is released monthly with bug fixes, security updates, and new features. image : gcr.io/alloydb-connectors/alloydb-auth-proxy:1.10.1 args : If you're connecting over public IP, enable this flag. - "--public-ip" If you're connecting with PSC, enable this flag: - "--psc" If you're using auto IAM authentication, enable this flag: - "--auto-iam-authn" Enable structured logging with Google's LogEntry format: - "--structured-logs" Listen on localhost:5432 by default. - "--port=5432" Specify your instance URI, e.g., "projects/myproject/locations/us-central1/clusters/mycluster/instances/myinstance" - "<INSTANCE-URI>" securityContext : The default AlloyDB Auth Proxy image runs as the "nonroot" user and group (uid: 65532) by default. runAsNonRoot : true You should use resource requests/limits as a best practice to prevent pods from consuming too many resources and affecting the execution of other pods.
- In the editor of your choice, for example, nano, complete the following steps: Open proxy sidecar deployment.yaml using the editor of your choice, for example, nano: nano proxy sidecar deployment.yaml In the editor, paste the following content: apiVersion : apps/v1 kind : Deployment metadata : name : gke-alloydb spec : selector : matchLabels : app : SAMPLE APPLICATION template : metadata : labels : app : SAMPLE APPLICATION spec : serviceAccountName : KSA NAME containers : - name : SAMPLE APPLICATION Replace <PROJECT ID> and <REGION> with your project ID and region. image : REGION -docker.pkg.dev/ PROJECT ID / REPOSITORY ID / SAMPLE APPLICATION :latest imagePullPolicy : Always This app listens on port 8080 for web traffic by default. ports : - containerPort : 8080 env : - name : PORT value : "8080" This project uses environment variables to determine how you would like to run your application To use the Go connector (recommended) - use INSTANCE NAME To use TCP - Setting INSTANCE HOST will use TCP (e.g., 127.0.0.1) - name : INSTANCE HOST value : "127.0.0.1" - name : DB PORT value : "5432" To use Automatic IAM Authentication (recommended) use DB IAM USER instead of DB USER you may also remove the DB PASS environment variable - name : DB USER valueFrom : secretKeyRef : name : SECRET key : username - name : DB PASS valueFrom : secretKeyRef : name : SECRET key : password - name : DB NAME valueFrom : secretKeyRef : name : SECRET key : database If you are using the Go connector (recommended), you can remove alloydb-proxy (everything below this line) - name : alloydb-proxy This uses the latest version of the AlloyDB Auth proxy It is recommended to use a specific version for production environments.
- See: https://github.com/GoogleCloudPlatform/alloydb-auth-proxy image : gcr.io/alloydb-connectors/alloydb-auth-proxy:1.10.1 command : - "/alloydb-auth-proxy" #AlloyDB instance name as parameter for the AlloyDB proxy Use <INSTANCE URI> - " INSTANCE URI " securityContext : The default AlloyDB Auth proxy image runs as the "nonroot" user and group (uid: 65532) by default. runAsNonRoot : true resources : requests : The proxy's memory use scales linearly with the number of active connections.
- In your open Cloud Shell, complete the following steps: Open proxy sidecar deployment.yaml using the editor of your choice, for example, nano: nano proxy sidecar deployment.yaml In the editor, paste the following content: apiVersion : apps/v1 kind : Deployment metadata : name : gke-alloydb spec : selector : matchLabels : app : SAMPLE APPLICATION template : metadata : labels : app : SAMPLE APPLICATION spec : serviceAccountName : KSA NAME containers : - name : SAMPLE APPLICATION Replace <PROJECT ID> and <REGION> with your project ID and region. image : REGION -docker.pkg.dev/ PROJECT ID / REPOSITORY ID / SAMPLE APPLICATION :latest imagePullPolicy : Always This app listens on port 8080 for web traffic by default. ports : - containerPort : 8080 env : - name : PORT value : "8080" - name : INSTANCE HOST value : "127.0.0.1" - name : DB PORT value : "5432" - name : DB USER valueFrom : secretKeyRef : name : SECRET key : username - name : DB PASS valueFrom : secretKeyRef : name : SECRET key : password - name : DB NAME valueFrom : secretKeyRef : name : SECRET key : database - name : alloydb-proxy This uses the latest version of the AlloyDB Auth proxy image : gcr.io/alloydb-connectors/alloydb-auth-proxy:1.10.1 command : - "/alloydb-auth-proxy" #AlloyDB instance name as parameter for the AlloyDB proxy - " INSTANCE URI " securityContext : runAsNonRoot : true resources : requests : memory : "2Gi" cpu : "1" Replace INSTANCE URI with the path you copied in step 1.

### "Connect using an IAM account \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/connect-iam](https://docs.cloud.google.com/alloydb/docs/connect-iam)
- Source ID: `site-docs-reference-2`
- Final score: 124
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, if you run your workload using the IAM user account kai@altostrat.com , then you can use the proxy client or Language Connectors to automatically authenticate the kai@altostrat.com database user without specifying an OAuth 2.0 token.
- Authenticate automatically To automatically authenticate an IAM-based AlloyDB user without the need for an OAuth 2.0 token, you have two options: AlloyDB Auth Proxy and AlloyDB Language Connectors .
- Language Connectors Using Language Connectors requires enabling IAM authentication programmatically.
- The IAM account that you use to run the proxy client or Language Connectors must be the same account that you added as a database user.

### "Generate SQL queries using natural language questions \_|\_ AlloyDB for\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/generate-sql-queries-natural-language](https://docs.cloud.google.com/alloydb/docs/ai/generate-sql-queries-natural-language)
- Source ID: `site-docs-root-2`
- Final score: 111
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example: SELECT alloydb ai nl . associate concept type ( 'public.person.date col' , 'date' ) Autogenerate concept type associations To automatically associate columns with concept types, use the automated concept type association feature of the AlloyDB AI natural language API.
- After you run the queries, AlloyDB AI natural language can automatically generate templates based on the query history.
- To use natural language to get results from your database using the alloydb ai nl.get sql function, use the following example: SELECT alloydb ai nl . get sql ( 'my app config' , -- nl config 'What is the sum that client number 4''s account has following transaction 851?' -- nl question ); The following JSON output is returned: { "sql": "SELECT T3.balance FROM public.client AS T1 INNER JOIN public.account AS T2 ON T1.district id = T2.district id INNER JOIN public.trans AS T3 ON T2.account id = T3.account id WHERE T1.client id = 4 AND T3.trans id = 851", "prompt": "", "retries": 0, "error msg": "", "nl question": "What is the sum that client number 4's account has following transaction 851?" } Optional: To extract the generated SQL query as a text string, add ->>'sql' : SELECT alloydb ai nl . get sql ( 'my app config' , -- nl config 'What is the sum that client number 4''s account has following transaction 851?' -- nl question ) - >> 'sql' ; The ->> operator is used to extract a JSON value as text.
- Available fragments are exposed by views like alloydb ai nl.fragment store view , as shown in the following example: SELECT manifest , scope , fragment , intent , pfragment , pintent FROM alloydb ai nl . fragment store view WHERE intent = 'Average salary between 6000 and 10000' ; The query returns a result set similar to the following: manifest Average salary between a given number and a given number scope district AS T fragment T."A11" BETWEEN 6000 AND 10000 intent Average salary between 6000 and 10000 pfragment T."A11" BETWEEN $2 AND $1 pintent Average salary between $2 and $1 A manifest in a fragment is generated automatically from the intent, and it represents a generalized version of the intent.

