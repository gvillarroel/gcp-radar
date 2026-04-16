---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.180Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Connector enforcement"
feature_slug: "connector-enforcement"
latest_feature_date: "2023-08-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes"
  - "https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners"
  - "https://docs.cloud.google.com/alloydb/docs/connect-iam"
keywords:
  - "connector"
  - "require"
  - "applications"
  - "enforcement"
  - "connect"
  - "through"
---

# Connector enforcement

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB can require applications to connect through AlloyDB connectors such as the Auth Proxy.

## Extended Definition

AlloyDB can require applications to connect through AlloyDB connectors such as the Auth Proxy.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes)
- [https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners](https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners)
- [https://docs.cloud.google.com/alloydb/docs/connect-iam](https://docs.cloud.google.com/alloydb/docs/connect-iam)

## Supporting Pages

### "Connect from Google Kubernetes Engine (GKE) to AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes)
- Source ID: `site-docs-reference`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- In the editor of your choice, for example, nano, complete the following steps: Open proxy sidecar deployment.yaml using the editor of your choice, for example, nano: nano proxy sidecar deployment.yaml In the editor, paste the following content: apiVersion : apps/v1 kind : Deployment metadata : name : gke-alloydb spec : selector : matchLabels : app : SAMPLE APPLICATION template : metadata : labels : app : SAMPLE APPLICATION spec : serviceAccountName : KSA NAME containers : - name : SAMPLE APPLICATION Replace <PROJECT ID> and <REGION> with your project ID and region. image : REGION -docker.pkg.dev/ PROJECT ID / REPOSITORY ID / SAMPLE APPLICATION :latest imagePullPolicy : Always This app listens on port 8080 for web traffic by default. ports : - containerPort : 8080 env : - name : PORT value : "8080" This project uses environment variables to determine how you would like to run your application To use the Go connector (recommended) - use INSTANCE NAME To use TCP - Setting INSTANCE HOST will use TCP (e.g., 127.0.0.1) - name : INSTANCE HOST value : "127.0.0.1" - name : DB PORT value : "5432" To use Automatic IAM Authentication (recommended) use DB IAM USER instead of DB USER you may also remove the DB PASS environment variable - name : DB USER valueFrom : secretKeyRef : name : SECRET key : username - name : DB PASS valueFrom : secretKeyRef : name : SECRET key : password - name : DB NAME valueFrom : secretKeyRef : name : SECRET key : database If you are using the Go connector (recommended), you can remove alloydb-proxy (everything below this line) - name : alloydb-proxy This uses the latest version of the AlloyDB Auth proxy It is recommended to use a specific version for production environments.
- In your open Cloud Shell, complete the following steps: Open proxy sidecar deployment.yaml using the editor of your choice, for example, nano: nano proxy sidecar deployment.yaml In the editor, paste the following content: apiVersion : apps/v1 kind : Deployment metadata : name : gke-alloydb spec : selector : matchLabels : app : SAMPLE APPLICATION template : metadata : labels : app : SAMPLE APPLICATION spec : serviceAccountName : KSA NAME containers : - name : SAMPLE APPLICATION Replace <PROJECT ID> and <REGION> with your project ID and region. image : REGION -docker.pkg.dev/ PROJECT ID / REPOSITORY ID / SAMPLE APPLICATION :latest imagePullPolicy : Always This app listens on port 8080 for web traffic by default. ports : - containerPort : 8080 env : - name : PORT value : "8080" - name : INSTANCE HOST value : "127.0.0.1" - name : DB PORT value : "5432" - name : DB USER valueFrom : secretKeyRef : name : SECRET key : username - name : DB PASS valueFrom : secretKeyRef : name : SECRET key : password - name : DB NAME valueFrom : secretKeyRef : name : SECRET key : database - name : alloydb-proxy This uses the latest version of the AlloyDB Auth proxy image : gcr.io/alloydb-connectors/alloydb-auth-proxy:1.10.1 command : - "/alloydb-auth-proxy" #AlloyDB instance name as parameter for the AlloyDB proxy - " INSTANCE URI " securityContext : runAsNonRoot : true resources : requests : memory : "2Gi" cpu : "1" Replace INSTANCE URI with the path you copied in step 1.
- A new version of the Proxy is released monthly with bug fixes, security updates, and new features. image : gcr.io/alloydb-connectors/alloydb-auth-proxy:1.10.1 args : If you're connecting over public IP, enable this flag. - "--public-ip" If you're connecting with PSC, enable this flag: - "--psc" If you're using auto IAM authentication, enable this flag: - "--auto-iam-authn" Enable structured logging with Google's LogEntry format: - "--structured-logs" Listen on localhost:5432 by default. - "--port=5432" Specify your instance URI, e.g., "projects/myproject/locations/us-central1/clusters/mycluster/instances/myinstance" - "<INSTANCE-URI>" securityContext : The default AlloyDB Auth Proxy image runs as the "nonroot" user and group (uid: 65532) by default. runAsNonRoot : true You should use resource requests/limits as a best practice to prevent pods from consuming too many resources and affecting the execution of other pods.
- See: https://github.com/GoogleCloudPlatform/alloydb-auth-proxy image : gcr.io/alloydb-connectors/alloydb-auth-proxy:1.10.1 command : - "/alloydb-auth-proxy" #AlloyDB instance name as parameter for the AlloyDB proxy Use <INSTANCE URI> - " INSTANCE URI " securityContext : The default AlloyDB Auth proxy image runs as the "nonroot" user and group (uid: 65532) by default. runAsNonRoot : true resources : requests : The proxy's memory use scales linearly with the number of active connections.

### "Google Cloud Ready - AlloyDB Partners \_|\_ AlloyDB for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners](https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners)
- Source ID: `site-docs-reference-2`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- Partner references AlloyDB ODBC Driver Connect to live Google AlloyDB databases through bi-directional data drivers Partner Advantage page Direct link CData JDBC Driver Solution CData JDBC Driver for AlloyDB Category Data integration and migration Description CData AlloyDB JDBC Driver enables users to connect with live AlloyDB data, directly from any applications that support JDBC connectivity.
- Partner references Nexla and Google AlloyDB New Nexla Connector: Google AlloyDB Nexla Partners with Google Cloud for AlloyDB Launch Partner Advantage page Direct link Progress Software Corporation Solution Progress DataDirect Category Data integration and migration Description Empowering applications with enterprise data is our passion here at Progress DataDirect.
- Partner references Connecting ThoughtSpot with AlloyDB Adding a Google AlloyDB connection, Partner Advantage page Direct link Data governance, modeling, and security Collibra Solution Collibra Category Data governance Description Collibra data intelligence cloud combines data silos on a complete and scalable cloud-services platform, design easy-to-use intuitive workflows for data creators and innovators, use an open and flexible architecture to connect data applications, trust in data that's secure and compliant with enterprise-level standards.
- Partner references AlloyDB Configuration in Skyvia Skyvia AlloyDB Connector Partner Advantage page Direct link Data Quality and Observability Anomalo Solution Anomalo Data Quality Category Data Quality Description Anomalo addresses the data quality problem by monitoring enterprise data and automatically detecting and root-causing data issues, allowing teams to resolve any issues with their data before making decisions, running operations, or powering models.

### "Connect using an IAM account \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/connect-iam](https://docs.cloud.google.com/alloydb/docs/connect-iam)
- Source ID: `site-docs-reference-2`
- Final score: 103
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Language Connectors Using Language Connectors requires enabling IAM authentication programmatically.
- For example, if you run your workload using the IAM user account kai@altostrat.com , then you can use the proxy client or Language Connectors to automatically authenticate the kai@altostrat.com database user without specifying an OAuth 2.0 token.
- Authenticate automatically To automatically authenticate an IAM-based AlloyDB user without the need for an OAuth 2.0 token, you have two options: AlloyDB Auth Proxy and AlloyDB Language Connectors .
- The IAM account that you use to run the proxy client or Language Connectors must be the same account that you added as a database user.

