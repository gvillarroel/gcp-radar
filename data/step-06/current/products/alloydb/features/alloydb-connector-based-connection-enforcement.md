---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.642Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB connector-based connection enforcement"
feature_slug: "alloydb-connector-based-connection-enforcement"
latest_feature_date: "2023-08-22"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/auth-proxy/overview"
  - "https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes"
  - "https://docs.cloud.google.com/alloydb/docs/release-notes"
keywords:
  - "database access through connector"
  - "connector enforcement"
  - "connector-based access"
  - "database connector"
  - "AlloyDB Auth Proxy"
  - "connection enforcement"
  - "Auth Proxy"
  - "AlloyDB connectors"
---

# AlloyDB connector-based connection enforcement

Product: AlloyDB
Coverage: HIGH

## Step 02 Summary

AlloyDB supports enforcing database access through AlloyDB connectors, such as the Auth Proxy, to improve connection security.

## Extended Definition

Connector-based connection enforcement in AlloyDB is the control that requires applications to connect to AlloyDB instances through AlloyDB connectors, such as the AlloyDB Auth Proxy, instead of direct database connections. In this mode, the Auth Proxy authorizes each connection with IAM principal credentials and requires the caller to hold the `roles/alloydb.client` and `roles/serviceusage.serviceUsageConsumer` IAM roles. This is positioned as a security improvement for AlloyDB access.

## Evidence Summary

The release notes state the feature exists, while the Auth Proxy overview and GKE quickstart provide the operational model and IAM requirements for connector-mediated AlloyDB connections.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/auth-proxy/overview](https://docs.cloud.google.com/alloydb/docs/auth-proxy/overview)
- [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes)
- [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)

## Supporting Pages

### "About the AlloyDB Auth Proxy \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/auth-proxy/overview](https://docs.cloud.google.com/alloydb/docs/auth-proxy/overview)
- Source ID: `site-docs-root`
- Final score: 96
- Re-rank relevance: STRONG
- Re-rank rationale: The page defines the AlloyDB Auth Proxy as the mechanism for authorized, encrypted connection access and describes how it secures client connections compared to direct AlloyDB access.

Evidence snippets:
- How the AlloyDB Auth Proxy authorizes IAM principals To authorize a client's connection to an AlloyDB instance, the Auth Proxy client authenticates to Google Cloud using IAM principal credentials on the client, and then validates that the IAM principal has the Cloud AlloyDB Client ( roles/alloydb.client ) and Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer ) IAM roles.
- Benefits of using the AlloyDB Auth Proxy The Auth Proxy provides these advantages over connecting clients directly to AlloyDB databases: IAM-based connection authorization (AuthZ): The Auth Proxy uses the credentials and permissions of an Identity and Access Management (IAM) principal to authorize connections to AlloyDB instances.
- Home Documentation Databases AlloyDB for PostgreSQL Guides Send feedback About the AlloyDB Auth Proxy Stay organized with collections Save and categorize content based on your preferences.
- When an application connects to the AlloyDB Auth Proxy, it checks whether an existing connection between it and the target AlloyDB instance is available.

### "Connect from Google Kubernetes Engine (GKE) to AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes)
- Source ID: `site-docs-root`
- Final score: 58
- Re-rank relevance: MODERATE
- Re-rank rationale: The page is a how-to guide for connecting GKE workloads to AlloyDB using the AlloyDB Auth Proxy, which is directly relevant to connector-based access patterns.

Evidence snippets:
- In the editor of your choice, for example, nano, complete the following steps: Open proxy sidecar deployment.yaml using the editor of your choice, for example, nano: nano proxy sidecar deployment.yaml In the editor, paste the following content: apiVersion : apps/v1 kind : Deployment metadata : name : gke-alloydb spec : selector : matchLabels : app : SAMPLE APPLICATION template : metadata : labels : app : SAMPLE APPLICATION spec : serviceAccountName : KSA NAME containers : - name : SAMPLE APPLICATION Replace <PROJECT ID> and <REGION> with your project ID and region. image : REGION -docker.pkg.dev/ PROJECT ID / REPOSITORY ID / SAMPLE APPLICATION :latest imagePullPolicy : Always This app listens on port 8080 for web traffic by default. ports : - containerPort : 8080 env : - name : PORT value : "8080" This project uses environment variables to determine how you would like to run your application To use the Go connector (recommended) - use INSTANCE NAME To use TCP - Setting INSTANCE HOST will use TCP (e.g., 127.0.0.1) - name : INSTANCE HOST value : "127.0.0.1" - name : DB PORT value : "5432" To use Automatic IAM Authentication (recommended) use DB IAM USER instead of DB USER you may also remove the DB PASS environment variable - name : DB USER valueFrom : secretKeyRef : name : SECRET key : username - name : DB PASS valueFrom : secretKeyRef : name : SECRET key : password - name : DB NAME valueFrom : secretKeyRef : name : SECRET key : database If you are using the Go connector (recommended), you can remove alloydb-proxy (everything below this line) - name : alloydb-proxy This uses the latest version of the AlloyDB Auth proxy It is recommended to use a specific version for production environments.
- In your open Cloud Shell, complete the following steps: Open proxy sidecar deployment.yaml using the editor of your choice, for example, nano: nano proxy sidecar deployment.yaml In the editor, paste the following content: apiVersion : apps/v1 kind : Deployment metadata : name : gke-alloydb spec : selector : matchLabels : app : SAMPLE APPLICATION template : metadata : labels : app : SAMPLE APPLICATION spec : serviceAccountName : KSA NAME containers : - name : SAMPLE APPLICATION Replace <PROJECT ID> and <REGION> with your project ID and region. image : REGION -docker.pkg.dev/ PROJECT ID / REPOSITORY ID / SAMPLE APPLICATION :latest imagePullPolicy : Always This app listens on port 8080 for web traffic by default. ports : - containerPort : 8080 env : - name : PORT value : "8080" - name : INSTANCE HOST value : "127.0.0.1" - name : DB PORT value : "5432" - name : DB USER valueFrom : secretKeyRef : name : SECRET key : username - name : DB PASS valueFrom : secretKeyRef : name : SECRET key : password - name : DB NAME valueFrom : secretKeyRef : name : SECRET key : database - name : alloydb-proxy This uses the latest version of the AlloyDB Auth proxy image : gcr.io/alloydb-connectors/alloydb-auth-proxy:1.10.1 command : - "/alloydb-auth-proxy" #AlloyDB instance name as parameter for the AlloyDB proxy - " INSTANCE URI " securityContext : runAsNonRoot : true resources : requests : memory : "2Gi" cpu : "1" Replace INSTANCE URI with the path you copied in step 1.
- A new version of the Proxy is released monthly with bug fixes, security updates, and new features. image : gcr.io/alloydb-connectors/alloydb-auth-proxy:1.10.1 args : If you're connecting over public IP, enable this flag. - "--public-ip" If you're connecting with PSC, enable this flag: - "--psc" If you're using auto IAM authentication, enable this flag: - "--auto-iam-authn" Enable structured logging with Google's LogEntry format: - "--structured-logs" Listen on localhost:5432 by default. - "--port=5432" Specify your instance URI, e.g., "projects/myproject/locations/us-central1/clusters/mycluster/instances/myinstance" - "<INSTANCE-URI>" securityContext : The default AlloyDB Auth Proxy image runs as the "nonroot" user and group (uid: 65532) by default. runAsNonRoot : true You should use resource requests/limits as a best practice to prevent pods from consuming too many resources and affecting the execution of other pods.
- To grant alloydb.client and serviceusage.serviceUsageConsumer roles to your application GSA, use the following commands: gcloud projects add-iam-policy-binding PROJECT ID --member = serviceAccount: GSA NAME @ PROJECT ID .iam.gserviceaccount.com --role = "roles/alloydb.client" gcloud projects add-iam-policy-binding PROJECT ID --member = serviceAccount: GSA NAME @ PROJECT ID .iam.gserviceaccount.com --role = "roles/serviceusage.serviceUsageConsumer" Configure Workload Identity Federation for GKE for the sample application You need to configure GKE to provide the service account to the AlloyDB Auth Proxy using the Workload Identity Federation for GKE feature.

### AlloyDB for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 54
- Re-rank relevance: N/A

Evidence snippets:
- January 21, 2026 Issue Automatic IAM authentication is unavailable when you use managed connection pooling with the AlloyDB Auth Proxy and Language Connectors.
- Feature You can now improve connection security by enforcing applications to connect to AlloyDB instances through AlloyDB connectors , such as the Auth Proxy.
- Version 1.5.0 of the AlloyDB Auth Proxy client might fail to connect to AlloyDB instances created before mid-November, 2023.
- This command provides a simplified way to connect securely to AlloyDB instances by using the AlloyDB Auth Proxy and psql .

