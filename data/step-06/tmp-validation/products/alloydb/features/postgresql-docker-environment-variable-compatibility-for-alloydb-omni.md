---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.141Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "PostgreSQL Docker environment variable compatibility for AlloyDB Omni"
feature_slug: "postgresql-docker-environment-variable-compatibility-for-alloydb-omni"
latest_feature_date: "2024-05-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes"
  - "https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners"
  - "https://docs.cloud.google.com/alloydb/docs/db-version-policies"
keywords:
  - "environment"
  - "variable"
  - "docker"
  - "simplified"
  - "compatibility"
  - "postgresql"
  - "omni"
---

# PostgreSQL Docker environment variable compatibility for AlloyDB Omni

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

The simplified AlloyDB Omni installation method supports all environment variables supported by the official PostgreSQL Docker image.

## Extended Definition

The simplified AlloyDB Omni installation method supports all environment variables supported by the official PostgreSQL Docker image.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes)
- [https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners](https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners)
- [https://docs.cloud.google.com/alloydb/docs/db-version-policies](https://docs.cloud.google.com/alloydb/docs/db-version-policies)

## Supporting Pages

### "Connect from Google Kubernetes Engine (GKE) to AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes)
- Source ID: `site-docs-reference`
- Final score: 148
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In the editor of your choice, for example, nano, complete the following steps: Open proxy sidecar deployment.yaml using the editor of your choice, for example, nano: nano proxy sidecar deployment.yaml In the editor, paste the following content: apiVersion : apps/v1 kind : Deployment metadata : name : gke-alloydb spec : selector : matchLabels : app : SAMPLE APPLICATION template : metadata : labels : app : SAMPLE APPLICATION spec : serviceAccountName : KSA NAME containers : - name : SAMPLE APPLICATION Replace <PROJECT ID> and <REGION> with your project ID and region. image : REGION -docker.pkg.dev/ PROJECT ID / REPOSITORY ID / SAMPLE APPLICATION :latest imagePullPolicy : Always This app listens on port 8080 for web traffic by default. ports : - containerPort : 8080 env : - name : PORT value : "8080" This project uses environment variables to determine how you would like to run your application To use the Go connector (recommended) - use INSTANCE NAME To use TCP - Setting INSTANCE HOST will use TCP (e.g., 127.0.0.1) - name : INSTANCE HOST value : "127.0.0.1" - name : DB PORT value : "5432" To use Automatic IAM Authentication (recommended) use DB IAM USER instead of DB USER you may also remove the DB PASS environment variable - name : DB USER valueFrom : secretKeyRef : name : SECRET key : username - name : DB PASS valueFrom : secretKeyRef : name : SECRET key : password - name : DB NAME valueFrom : secretKeyRef : name : SECRET key : database If you are using the Go connector (recommended), you can remove alloydb-proxy (everything below this line) - name : alloydb-proxy This uses the latest version of the AlloyDB Auth proxy It is recommended to use a specific version for production environments.
- Choose one of the following: 14 : for compatibility with PostgreSQL 14 15 : for compatibility with PostgreSQL 15 16 : for compatibility with PostgreSQL 16 17 : for compatibility with PostgreSQL 17, which is the supported default PostgreSQL version 18 , for compatibility with PostgreSQL 18 CLUSTER PASSWORD : the password to use for the default postgres user.
- In your open Cloud Shell, complete the following steps: Open proxy sidecar deployment.yaml using the editor of your choice, for example, nano: nano proxy sidecar deployment.yaml In the editor, paste the following content: apiVersion : apps/v1 kind : Deployment metadata : name : gke-alloydb spec : selector : matchLabels : app : SAMPLE APPLICATION template : metadata : labels : app : SAMPLE APPLICATION spec : serviceAccountName : KSA NAME containers : - name : SAMPLE APPLICATION Replace <PROJECT ID> and <REGION> with your project ID and region. image : REGION -docker.pkg.dev/ PROJECT ID / REPOSITORY ID / SAMPLE APPLICATION :latest imagePullPolicy : Always This app listens on port 8080 for web traffic by default. ports : - containerPort : 8080 env : - name : PORT value : "8080" - name : INSTANCE HOST value : "127.0.0.1" - name : DB PORT value : "5432" - name : DB USER valueFrom : secretKeyRef : name : SECRET key : username - name : DB PASS valueFrom : secretKeyRef : name : SECRET key : password - name : DB NAME valueFrom : secretKeyRef : name : SECRET key : database - name : alloydb-proxy This uses the latest version of the AlloyDB Auth proxy image : gcr.io/alloydb-connectors/alloydb-auth-proxy:1.10.1 command : - "/alloydb-auth-proxy" #AlloyDB instance name as parameter for the AlloyDB proxy - " INSTANCE URI " securityContext : runAsNonRoot : true resources : requests : memory : "2Gi" cpu : "1" Replace INSTANCE URI with the path you copied in step 1.
- SAMPLE APPLICATION : the name of your sample web application, such as gke-alloydb-app . gcloud In Cloud Shell, use the following command to clone the repository with the sample gke-alloydb-app application code from GitHub: git clone https://github.com/GoogleCloudPlatform/alloydb-auth-proxy && cd alloydb-auth-proxy/examples/go Create a repository in the Artifact Registry for Docker images: gcloud artifacts repositories create REPOSITORY ID --location REGION --repository-format = docker --project PROJECT ID Replace the following: PROJECT ID : the ID of your project.

### "Google Cloud Ready - AlloyDB Partners \_|\_ AlloyDB for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners](https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners)
- Source ID: `site-docs-reference-2`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- Partner references Configuring AlloyDB Omni Cloud SQL for PostgreSQL and AlloyDB for PostgreSQL Integration Partner Advantage page Direct link Hitachi Solution Hitachi Virtual Storage Platform One Block 20 Category Application ISV Description Hitachi Virtual Storage Platform One Block 20 offers three models with the same capacity, featuring 72 NVMe flash drives and support for Fibre Channel, iSCSI, and NVMe TCP connectivity.
- Partner references Qinetic Platform – DB Compatibility for AlloyDB SEEBURGER Solution SEEBURGER Business Integration Suite (BIS) Platform Category Application ISV Description One central platform, one experience, all integrations, all deployment models – The SEEBURGER BIS Platform enables seamless connectivity of applications, people and processes, whether in the cloud, a hybrid environment or on-premises.
- It is designed to run mission-critical stateful applications, like AlloyDB Omni, on any Kubernetes cluster, in any cloud or on-premises environment, with enterprise-grade performance and reliability.
- This implementation includes configuring the storage, operating system, and AlloyDB Omni environment.

### "Database version policies \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/db-version-policies](https://docs.cloud.google.com/alloydb/docs/db-version-policies)
- Source ID: `site-docs-reference-2`
- Final score: 115
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Major version support timeline The following table shows the dates when AlloyDB support for compatible versions became generally available (GA): PostgreSQL compatible version AlloyDB version support GA date AlloyDB Omni version support GA Date PostgreSQL 18 March 18, 2026 Not applicable PostgreSQL 17 September 22, 2025 Not applicable PostgreSQL 16 October 23, 2024 April 8, 2025 PostgreSQL 15 January 19, 2024 October 11, 2023 PostgreSQL 14 December 12, 2022 Not applicable Major version compatibility release policy We aim to offer timely support for AlloyDB compatibility with new PostgreSQL major versions.
- Major and minor version support AlloyDB supports compatibility with the following PostgreSQL database versions: PostgreSQL compatible version AlloyDB AlloyDB Omni PostgreSQL 18 18.1 Not applicable PostgreSQL 17 (default) 17.5 17.5 PostgreSQL 16 16.9 16.8 16.3 PostgreSQL 15 15.13 15.12 15.7 15.5 15.4 15.2 PostgreSQL 14 14.18 Not applicable PostgreSQL 18 compatibility Before you use PostgreSQL 18 as your database version, consider the following: PostgreSQL 18 isn't available with AlloyDB Omni.
- AlloyDB and AlloyDB Omni version policies AlloyDB for PostgreSQL , which runs in Google Cloud, and AlloyDB Omni , which you install and run on your own computing environment, have related but distinct versioning policies as described in this section.
- We plan to support AlloyDB Omni compatibility with any one major PostgreSQL version for at least as long as the PostgreSQL community supports that same major version—that is, no less than five years.

