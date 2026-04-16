---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.128Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB Omni operator for Google Distributed Cloud connected"
feature_slug: "alloydb-omni-operator-for-google-distributed-cloud-connected"
latest_feature_date: "2024-09-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes"
  - "https://docs.cloud.google.com/alloydb/docs/reference/extensions"
  - "https://docs.cloud.google.com/alloydb/docs/overview"
keywords:
  - "connected"
  - "distributed"
  - "operator"
  - "kubernetes"
  - "available"
  - "based"
  - "omni"
---

# AlloyDB Omni operator for Google Distributed Cloud connected

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

The AlloyDB Omni operator is available on Google Distributed Cloud connected for Kubernetes-based deployments.

## Extended Definition

The AlloyDB Omni operator is available on Google Distributed Cloud connected for Kubernetes-based deployments.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes)
- [https://docs.cloud.google.com/alloydb/docs/reference/extensions](https://docs.cloud.google.com/alloydb/docs/reference/extensions)
- [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)

## Supporting Pages

### "Connect from Google Kubernetes Engine (GKE) to AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes)
- Source ID: `site-docs-reference`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Databases AlloyDB for PostgreSQL Guides Send feedback Connect from Google Kubernetes Engine (GKE) to AlloyDB for PostgreSQL Stay organized with collections Save and categorize content based on your preferences.
- Costs This tutorial uses billable components of Google Cloud, including: AlloyDB Google Kubernetes Engine Artifact Registry Use the pricing calculator to generate a cost estimate based on your projected usage.
- This can take several minutes. gcloud In the Cloud Shell, check if the unused IP addresses (IPv4) range is already assigned to service peering: gcloud services vpc-peerings list --network = default Skip the next step if your output looks similar to the following: network: projects/493573376485/global/networks/default peering: servicenetworking-googleapis-com reservedPeeringRanges: - default-ip-range service: services/servicenetworking.googleapis.com In this output, the value of reservedPeeringRanges is default-ip-range , which you can use as IP RANGE NAME to create a private connection in step 3. (Skip when using the default value of reservedPeeringRanges ) To allocate unused IP addresses in the VPC, use the following command: gcloud compute addresses create IP RANGE NAME \ --global \ --purpose = VPC PEERING \ --prefix-length = 16 \ --description = "VPC private service access" \ --network = default Replace IP RANGE NAME with your name for available internal IP addresses within an AlloyDB subnet, such as alloydb-gke-psa-01 .
- Create a Kubernetes service account for your sample application: kubectl apply -f service-account.yaml Grant permissions for your Kubernetes service account to impersonate the Google service account by creating an IAM policy binding between the two service accounts: gcloud iam service-accounts add-iam-policy-binding \ --role = "roles/iam.workloadIdentityUser" \ --member = "serviceAccount: PROJECT ID .svc.id.goog[default/ KSA NAME ]" \ GSA NAME @ PROJECT ID .iam.gserviceaccount.com Add the iam.gke.io/gcp-service-account= GSA NAME @ PROJECT ID annotation to the Kubernetes service account, using the email address of the Google service account: kubectl annotate serviceaccount \ KSA NAME \ iam.gke.io/gcp-service-account = GSA NAME @ PROJECT ID .iam.gserviceaccount.com Populate the Artifact Registry with an image of the sample application To build a container image of the sample application and push it to a repository, complete the following steps.

### "Supported database extensions \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/extensions](https://docs.cloud.google.com/alloydb/docs/reference/extensions)
- Source ID: `site-api-reference`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- This extension is used along with the vector extension to enhance vector search capabilities and provides support for storing and querying vector embeddings. bloom Provides an index access method based on Bloom filters. btree gin Provides sample GIN operator classes that implement B-tree equivalent behavior. btree gist Provides GiST index operator classes that implement B-tree equivalent behavior. citext Provides a case-insensitive character string type citext . cube Implements a data type cube for representing multidimensional cubes. dblink Provides functions to connect to PostgreSQL databases from within a database session. dict int An add-on dictionary template for full-text search that controls the indexing of integers. earthdistance Provides two approaches to calculating great circle distances on the surface of the Earth. fuzzystrmatch Provides several functions to determine similarities and distance between strings. google columnar engine Provides the columnar engine feature of AlloyDB, which handles HTAP (hybrid transactional analytical processing) and OLAP (online analytical processing) workloads very efficiently.
- Important: Before you can use CREATE EXTENSION to enable this extension, you must first set the database flag alloydb.enable pg squeeze to the value on in the AlloyDB instance where you want to use the extension. pg stat statements Provides a means for tracking execution statistics of all SQL statements executed. pg trgm Provides functions and operators for determining the similarity of alphanumeric text based on trigram matching, as well as index operator classes that support fast searching for similar strings. pg visibility Provides a way to examine the visibility map (VM) and the page-level visibility information of a table. pg wait sampling Provides the ability to collect sampling statistics of wait events.
- The table also marks which extensions are included with AlloyDB Omni , the containerized edition of AlloyDB that you can run in your own Linux-based environment.
- RUM indexes improve upon standard GIN indexes by storing positional information directly in the index, letting you perform faster phrase searches and relevance ranking without accessing the table data. sslinfo Provides information about the SSL certificate that the current client provided when it connected to the instance. tablefunc Provides various functions that return tables (multiple rows). tcn Provides a trigger function that notifies listeners of changes to the content of database tables. tds fdw Provides a foreign data wrapper ( fdw ) for accessing databases that use the Tabular Data Stream (TDS) protocol, such as Microsoft SQL Server or Sybase. temporal tables Provides support for temporal tables.

### AlloyDB overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- Source ID: `site-api-reference`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- Automatic and adaptive database features The fully PostgreSQL-compatible database engine that powers every AlloyDB node has several features that continuously analyze the structure and frequency of the queries that your instances handle, using this information to suggest schema improvements or automatically apply optimizations: An index advisor helps you find opportunities to optimize your database schema using new indexes based on your usage patterns.
- For more information, see Create a ScaNN index . google ml integration : provides access to the AI functions, which enables ML model invocation from AlloyDB for tasks such as generating embeddings, semantic ranking, AI-based filters and joins, and text generation and summarization.
- Automatic memory and storage management systems take advantage of the Google-built, cloud-based environment that AlloyDB runs on, continuously allocating and releasing memory and storage as needed to keep your cluster running with optimal performance and resource efficiency.
- You can use the following tools to connect to and manage your databases: AlloyDB Studio: a web-based tool built directly into the Google Google Cloud console that lets you explore and manage your data using an interactive SQL interface.

