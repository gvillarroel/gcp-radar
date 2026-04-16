---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:07:33.868Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Automatic IAM Authentication in AlloyDB Language Connectors"
feature_slug: "automatic-iam-authentication-in-alloydb-language-connectors"
latest_feature_date: "2024-02-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/connect-iam"
  - "https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/com.google.cloud.alloydb.connectors.v1"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/com.google.cloud.alloydb.connectors.v1alpha"
keywords:
  - "connector IAM auth"
  - "connector authentication"
  - "Automatic IAM Authentication"
  - "auto IAM authentication"
  - "automatic IAM auth"
  - "AlloyDB Language Connectors"
  - "IAM in connectors"
  - "IAM authentication"
---

# Automatic IAM Authentication in AlloyDB Language Connectors

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB now supports Automatic IAM Authentication with AlloyDB Language Connectors in preview.

## Extended Definition

AlloyDB now supports Automatic IAM Authentication with AlloyDB Language Connectors in preview.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/connect-iam](https://docs.cloud.google.com/alloydb/docs/connect-iam)
- [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/com.google.cloud.alloydb.connectors.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/com.google.cloud.alloydb.connectors.v1)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/com.google.cloud.alloydb.connectors.v1alpha](https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/com.google.cloud.alloydb.connectors.v1alpha)

## Supporting Pages

### "Connect using an IAM account \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/connect-iam](https://docs.cloud.google.com/alloydb/docs/connect-iam)
- Source ID: `site-docs-reference-2`
- Final score: 75
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Troubleshoot IAM authentication To determine the cause of a failed IAM-based authentication attempt, follow these steps: In the Google Cloud console, go to the Logs Explorer page: Go to Logs Explorer Under Resource type , click AlloyDB instance .
- What's next Manage your IAM authentication Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Authenticate automatically To automatically authenticate an IAM-based AlloyDB user without the need for an OAuth 2.0 token, you have two options: AlloyDB Auth Proxy and AlloyDB Language Connectors .
- Language Connectors Using Language Connectors requires enabling IAM authentication programmatically.

### "Connect from Google Kubernetes Engine (GKE) to AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes)
- Source ID: `site-docs-root`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- In the editor of your choice, for example, nano, complete the following steps: Open proxy sidecar deployment.yaml using the editor of your choice, for example, nano: nano proxy sidecar deployment.yaml In the editor, paste the following content: apiVersion : apps/v1 kind : Deployment metadata : name : gke-alloydb spec : selector : matchLabels : app : SAMPLE APPLICATION template : metadata : labels : app : SAMPLE APPLICATION spec : serviceAccountName : KSA NAME containers : - name : SAMPLE APPLICATION Replace <PROJECT ID> and <REGION> with your project ID and region. image : REGION -docker.pkg.dev/ PROJECT ID / REPOSITORY ID / SAMPLE APPLICATION :latest imagePullPolicy : Always This app listens on port 8080 for web traffic by default. ports : - containerPort : 8080 env : - name : PORT value : "8080" This project uses environment variables to determine how you would like to run your application To use the Go connector (recommended) - use INSTANCE NAME To use TCP - Setting INSTANCE HOST will use TCP (e.g., 127.0.0.1) - name : INSTANCE HOST value : "127.0.0.1" - name : DB PORT value : "5432" To use Automatic IAM Authentication (recommended) use DB IAM USER instead of DB USER you may also remove the DB PASS environment variable - name : DB USER valueFrom : secretKeyRef : name : SECRET key : username - name : DB PASS valueFrom : secretKeyRef : name : SECRET key : password - name : DB NAME valueFrom : secretKeyRef : name : SECRET key : database If you are using the Go connector (recommended), you can remove alloydb-proxy (everything below this line) - name : alloydb-proxy This uses the latest version of the AlloyDB Auth proxy It is recommended to use a specific version for production environments.
- A new version of the Proxy is released monthly with bug fixes, security updates, and new features. image : gcr.io/alloydb-connectors/alloydb-auth-proxy:1.10.1 args : If you're connecting over public IP, enable this flag. - "--public-ip" If you're connecting with PSC, enable this flag: - "--psc" If you're using auto IAM authentication, enable this flag: - "--auto-iam-authn" Enable structured logging with Google's LogEntry format: - "--structured-logs" Listen on localhost:5432 by default. - "--port=5432" Specify your instance URI, e.g., "projects/myproject/locations/us-central1/clusters/mycluster/instances/myinstance" - "<INSTANCE-URI>" securityContext : The default AlloyDB Auth Proxy image runs as the "nonroot" user and group (uid: 65532) by default. runAsNonRoot : true You should use resource requests/limits as a best practice to prevent pods from consuming too many resources and affecting the execution of other pods.

### "Package com.google.cloud.alloydb.connectors.v1 (0.66.0) \_|\_ Java client\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/com.google.cloud.alloydb.connectors.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/com.google.cloud.alloydb.connectors.v1)
- Source ID: `site-java-reference`
- Final score: 72
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### "Package com.google.cloud.alloydb.connectors.v1alpha (0.66.0) \_|\_ Java\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/com.google.cloud.alloydb.connectors.v1alpha](https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/com.google.cloud.alloydb.connectors.v1alpha)
- Source ID: `site-java-reference`
- Final score: 72
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

