---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.097Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Instance lifecycle controls"
feature_slug: "instance-lifecycle-controls"
latest_feature_date: "2025-05-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/reference/alloydb-flags"
  - "https://docs.cloud.google.com/alloydb/docs/quickstart/connect-cloud-shell"
  - "https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes"
keywords:
  - "start"
  - "stop"
  - "lifecycle"
  - "controls"
  - "instance"
  - "lets"
---

# Instance lifecycle controls

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB lets you start, stop, and restart primary and read pool instances through the Google Cloud console and Google Cloud CLI.

## Extended Definition

AlloyDB lets you start, stop, and restart primary and read pool instances through the Google Cloud console and Google Cloud CLI.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/reference/alloydb-flags](https://docs.cloud.google.com/alloydb/docs/reference/alloydb-flags)
- [https://docs.cloud.google.com/alloydb/docs/quickstart/connect-cloud-shell](https://docs.cloud.google.com/alloydb/docs/quickstart/connect-cloud-shell)
- [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes)

## Supporting Pages

### AlloyDB flags \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/alloydb-flags](https://docs.cloud.google.com/alloydb/docs/reference/alloydb-flags)
- Source ID: `site-api-reference`
- Final score: 98
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- It uses the same syntax as regular cron , and it lets you schedule PostgreSQL commands directly from the database. alloydb.enable pg hint plan Type boolean Default off Instance restarts Yes Controls the availability of the pg hint plan extension in an AlloyDB instance.
- By promoting the cancellation requests, AlloyDB helps prevent stuck backends from blocking log replay and other backends. alloydb.pg shadow select role Type string Default An empty string Instance restarts No Name of the PostgreSQL role that is to be used to grant permission to query the pg shadow view. alloydb.enable pg squeeze Type boolean Default off Instance restarts No Set to on to reduce table and index bloat in a more efficient and less disruptive way as compared to other PostgreSQL bloat reduction methods such as VACUUM . google storage.log replay throttle read transactions Type boolean Default on Instance restarts No Controls whether lag-based throttling of read transactions is enabled on read nodes.
- The flag's value persists for the instance until you modify it again. alloydb ai nl.enabled Type boolean Default off Instance restarts Yes Controls whether the AlloyDB AI natural language features are enabled. alloydb.enable auto explain Type boolean Default off Instance restarts Yes Controls the availability of the auto explain extension in an AlloyDB instance.
- The pg bigm extension provides full text search capability in PostgreSQL using 2-gram (bigram) indexes for faster full text searches. alloydb.enable pg cron Type boolean Default off Instance restarts Yes Controls the availability of the pg cron extension in an AlloyDB instance.

### "Quickstart: Connect to AlloyDB from Cloud Shell using the Auth Proxy \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/quickstart/connect-cloud-shell](https://docs.cloud.google.com/alloydb/docs/quickstart/connect-cloud-shell)
- Source ID: `site-docs-reference`
- Final score: 91
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This quickstart is well-suited for new users who want a simple, pre-configured environment to connect to their instance and test basic SQL queries.
- Connect to AlloyDB from Cloud Shell using the Auth Proxy Learn how to establish a secure connection to your AlloyDB for PostgreSQL instance from a Cloud Shell terminal using the AlloyDB Auth Proxy.
- Connect to your AlloyDB instance The Cloud Shell environment includes the Auth Proxy ( alloydb-auth-proxy ) and psql, the PostgreSQL interactive terminal.
- Verify that you're signed in with the user account that has the required IAM roles. gcloud config list Get the Connection URI for your instance.

### "Connect from Google Kubernetes Engine (GKE) to AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes)
- Source ID: `site-docs-reference`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- In the editor of your choice, for example, nano, complete the following steps: Open proxy sidecar deployment.yaml using the editor of your choice, for example, nano: nano proxy sidecar deployment.yaml In the editor, paste the following content: apiVersion : apps/v1 kind : Deployment metadata : name : gke-alloydb spec : selector : matchLabels : app : SAMPLE APPLICATION template : metadata : labels : app : SAMPLE APPLICATION spec : serviceAccountName : KSA NAME containers : - name : SAMPLE APPLICATION Replace <PROJECT ID> and <REGION> with your project ID and region. image : REGION -docker.pkg.dev/ PROJECT ID / REPOSITORY ID / SAMPLE APPLICATION :latest imagePullPolicy : Always This app listens on port 8080 for web traffic by default. ports : - containerPort : 8080 env : - name : PORT value : "8080" This project uses environment variables to determine how you would like to run your application To use the Go connector (recommended) - use INSTANCE NAME To use TCP - Setting INSTANCE HOST will use TCP (e.g., 127.0.0.1) - name : INSTANCE HOST value : "127.0.0.1" - name : DB PORT value : "5432" To use Automatic IAM Authentication (recommended) use DB IAM USER instead of DB USER you may also remove the DB PASS environment variable - name : DB USER valueFrom : secretKeyRef : name : SECRET key : username - name : DB PASS valueFrom : secretKeyRef : name : SECRET key : password - name : DB NAME valueFrom : secretKeyRef : name : SECRET key : database If you are using the Go connector (recommended), you can remove alloydb-proxy (everything below this line) - name : alloydb-proxy This uses the latest version of the AlloyDB Auth proxy It is recommended to use a specific version for production environments.
- In your open Cloud Shell, complete the following steps: Open proxy sidecar deployment.yaml using the editor of your choice, for example, nano: nano proxy sidecar deployment.yaml In the editor, paste the following content: apiVersion : apps/v1 kind : Deployment metadata : name : gke-alloydb spec : selector : matchLabels : app : SAMPLE APPLICATION template : metadata : labels : app : SAMPLE APPLICATION spec : serviceAccountName : KSA NAME containers : - name : SAMPLE APPLICATION Replace <PROJECT ID> and <REGION> with your project ID and region. image : REGION -docker.pkg.dev/ PROJECT ID / REPOSITORY ID / SAMPLE APPLICATION :latest imagePullPolicy : Always This app listens on port 8080 for web traffic by default. ports : - containerPort : 8080 env : - name : PORT value : "8080" - name : INSTANCE HOST value : "127.0.0.1" - name : DB PORT value : "5432" - name : DB USER valueFrom : secretKeyRef : name : SECRET key : username - name : DB PASS valueFrom : secretKeyRef : name : SECRET key : password - name : DB NAME valueFrom : secretKeyRef : name : SECRET key : database - name : alloydb-proxy This uses the latest version of the AlloyDB Auth proxy image : gcr.io/alloydb-connectors/alloydb-auth-proxy:1.10.1 command : - "/alloydb-auth-proxy" #AlloyDB instance name as parameter for the AlloyDB proxy - " INSTANCE URI " securityContext : runAsNonRoot : true resources : requests : memory : "2Gi" cpu : "1" Replace INSTANCE URI with the path you copied in step 1.
- A new version of the Proxy is released monthly with bug fixes, security updates, and new features. image : gcr.io/alloydb-connectors/alloydb-auth-proxy:1.10.1 args : If you're connecting over public IP, enable this flag. - "--public-ip" If you're connecting with PSC, enable this flag: - "--psc" If you're using auto IAM authentication, enable this flag: - "--auto-iam-authn" Enable structured logging with Google's LogEntry format: - "--structured-logs" Listen on localhost:5432 by default. - "--port=5432" Specify your instance URI, e.g., "projects/myproject/locations/us-central1/clusters/mycluster/instances/myinstance" - "<INSTANCE-URI>" securityContext : The default AlloyDB Auth Proxy image runs as the "nonroot" user and group (uid: 65532) by default. runAsNonRoot : true You should use resource requests/limits as a best practice to prevent pods from consuming too many resources and affecting the execution of other pods.
- See: https://github.com/GoogleCloudPlatform/alloydb-auth-proxy image : gcr.io/alloydb-connectors/alloydb-auth-proxy:1.10.1 command : - "/alloydb-auth-proxy" #AlloyDB instance name as parameter for the AlloyDB proxy Use <INSTANCE URI> - " INSTANCE URI " securityContext : The default AlloyDB Auth proxy image runs as the "nonroot" user and group (uid: 65532) by default. runAsNonRoot : true resources : requests : The proxy's memory use scales linearly with the number of active connections.

