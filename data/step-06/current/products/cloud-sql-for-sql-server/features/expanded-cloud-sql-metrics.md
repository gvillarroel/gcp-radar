---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:14.563Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Expanded Cloud SQL metrics"
feature_slug: "expanded-cloud-sql-metrics"
latest_feature_date: "2023-03-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/best-practices"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/pricing"
keywords:
  - "expanded"
  - "sql"
  - "metrics"
  - "exposes"
  - "38"
  - "improve"
  - "observability"
  - "server"
---

# Expanded Cloud SQL metrics

Product: Cloud SQL for SQL Server
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL exposes 38 new metrics to improve observability for SQL Server instances.

## Extended Definition

Cloud SQL exposes 38 new metrics to improve observability for SQL Server instances.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics)
- [https://docs.cloud.google.com/sql/docs/sqlserver/best-practices](https://docs.cloud.google.com/sql/docs/sqlserver/best-practices)
- [https://docs.cloud.google.com/sql/docs/sqlserver/pricing](https://docs.cloud.google.com/sql/docs/sqlserver/pricing)

## Supporting Pages

### Cloud SQL metrics \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics)
- Source ID: `site-api-reference`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Databases Cloud SQL SQL Server Reference Send feedback Cloud SQL metrics Stay organized with collections Save and categorize content based on your preferences.
- You access these metrics through Google Cloud Observability.
- After sampling, data is not visible for up to 165 seconds. per database/conn pool/client connections GA (project) Client connections GAUGE , INT64 , 1 cloudsql instance database Number of client connections per database grouped by status. status : Status of the client connection e.g. 'active' or 'waiting'. per database/conn pool/client connections attempts count GA (project) Client connection attempts count CUMULATIVE , INT64 , 1 cloudsql instance database Number of client connection attempts received per database. per database/conn pool/client connections avg wait time GA (project) Average wait time GAUGE , INT64 , us cloudsql instance database Average wait time spent by clients waiting for a server connection per database in microseconds. per database/conn pool/client connections error count GA (project) Error count CUMULATIVE , INT64 , 1 cloudsql instance database Count of errors that cause client disconnection including auth error, client connection setup error, server connection error and timeout errors. per database/conn pool/num pools GA (project) Number of connection pools GAUGE , INT64 , 1 cloudsql instance database Number of connection pools per database. per database/conn pool/server connections GA (project) Server connections GAUGE , INT64 , 1 cloudsql instance database Number of server connections per database grouped by status. status : Status of the server connection e.g. 'active' or 'idle'. per database/postgresql/external sync/initial sync complete GA (project) External server migration phase GAUGE , BOOL , cloudsql instance database Migration phase of each database on the external server (ES) replica.
- After sampling, data is not visible for up to 165 seconds. state : Database state, for example, 'ONLINE' or 'SUSPECT'. recovery model : Database recovery model, one of [FULL, BULK LOGGED, SIMPLE]. is cdc enabled : (BOOL) Indicates whether CDC is enabled. is published : (BOOL) Indicates whether a database is published. auto close : (BOOL) Indicates whether auto-close is enabled on a database. database/sqlserver/memory/buffer cache hit ratio GA (project) Buffer cache hit ratio GAUGE , DOUBLE , % cloudsql database Current percentage of pages found in the buffer cache without having to read from disk.

### Cloud SQL pricing | Google Cloud

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/pricing](https://docs.cloud.google.com/sql/docs/sqlserver/pricing)
- Source ID: `site-docs-root`
- Final score: 61
- Re-rank relevance: N/A

Evidence snippets:
- Google Cloud partners Learn about the ecosystem and resources. close Overview arrow forward Solutions arrow forward Products arrow forward Pricing arrow forward Resources arrow forward Docs Support Console Accelerate your digital transformation Learn more Key benefits Why Google Cloud AI and ML Multicloud Global infrastructure Data Cloud Modern Infrastructure Cloud Security Productivity and collaboration Reports and insights Executive insights Analyst reports Whitepapers Customer stories Industry Solutions Retail Consumer Packaged Goods Financial Services Healthcare and Life Sciences Media and Entertainment Telecommunications Games Manufacturing Supply Chain and Logistics Government Education See all industry solutions See all solutions Application Modernization CAMP Modernize Traditional Applications Migrate from PaaS: Cloud Foundry, Openshift Migrate from Mainframe Modernize Software Delivery DevOps Best Practices SRE Principles Platform Engineering Run Applications at the Edge Architect for Multicloud Go Serverless Artificial Intelligence Customer Engagement Suite with Google AI Document AI Vertex AI Search for commerce Google Cloud with Gemini Generative AI on Google Cloud APIs and Applications New Business Channels Using APIs Unlocking Legacy Applications Using APIs Open Banking APIx Data Analytics Data Migration Data Lakehouse Real-time Analytics Marketing Analytics Datasets Business Intelligence AI for Data Analytics Geospatial Analytics Databases Database Migration Database Modernization Databases for Games Google Cloud Databases Migrate Oracle workloads to Google Cloud Open Source Databases SQL Server on Google Cloud Gemini for Databases Infrastructure Modernization Application Migration SAP on Google Cloud High Performance Computing Windows on Google Cloud Data Center Migration Active Assist Virtual Desktops Rapid Migration and Modernization Program Backup and Disaster Recovery Red Hat on Google Cloud Cross-Cloud Network Observability Productivity and Collaboration Google Workspace Google Workspace Essentials Cloud Identity Chrome Enterprise Security Agentic SOC Web App and API Protection Security and Resilience Framework Risk and compliance as code (RCaC) Software Supply Chain Security Security Foundation Google Cloud Cybershield™ Startups and SMB Startup Program Small and Medium Business Software as a Service Featured Products Compute Engine Cloud Storage BigQuery Cloud Run Google Kubernetes Engine Vertex AI Looker Apigee API Management Cloud SQL Gemini Enterprise Cloud CDN See all products (100+) AI and Machine Learning Vertex AI Platform Vertex AI Studio Vertex AI Agent Builder Conversational Agents Vertex AI Search Speech-to-Text Text-to-Speech Translation AI Gemini Enterprise Vision AI Contact Center as a Service See all AI and machine learning products Business Intelligence Looker Looker Studio Compute Compute Engine App Engine Cloud GPUs Migrate to Virtual Machines Spot VMs Batch Sole-Tenant Nodes Bare Metal Recommender VMware Engine Cloud Run See all compute products Containers Google Kubernetes Engine Cloud Run Cloud Build Artifact Registry Cloud Code Cloud Deploy Migrate to Containers Deep Learning Containers Knative Data Analytics BigQuery Looker Dataflow Pub/Sub Dataproc Google Cloud Serverless for Apache Spark Cloud Composer BigLake Dataplex Universal Catalog BigQuery Migration Services Managed Service for Apache Kafka See all data analytics products Databases AlloyDB for PostgreSQL Cloud SQL Firestore Spanner Bigtable Datastream Database Migration Service Bare Metal Solution Memorystore Developer Tools Artifact Registry Cloud Code Cloud Build Cloud Deploy Cloud Deployment Manager Cloud SDK Cloud Scheduler Cloud Source Repositories Infrastructure Manager Cloud Workstations Gemini Code Assist See all developer tools Distributed Cloud Google Distributed Cloud Connected Google Distributed Cloud Air-gapped Hybrid and Multicloud Google Kubernetes Engine Apigee API Management Migrate to Containers Cloud Build Observability Cloud Service Mesh Google Distributed Cloud Industry Specific Anti Money Laundering AI Cloud Healthcare API Device Connect for Fitbit Telecom Network Automation Telecom Data Fabric Telecom Subscriber Insights Spectrum Access System (SAS) Integration Services Application Integration Workflows Apigee API Management Cloud Tasks Cloud Scheduler Dataproc Cloud Data Fusion Cloud Composer Pub/Sub Eventarc Management Tools Cloud Shell Cloud console Cloud Endpoints Cloud IAM Cloud APIs Service Catalog Cost Management Observability Carbon Footprint Config Connector Active Assist See all management tools Maps and Geospatial Earth Engine Google Maps Platform Media Services Cloud CDN Live Stream API OpenCue Transcoder API Video Stitcher API Migration Migration Center Application Migration Migrate to Virtual Machines Cloud Foundation Toolkit Database Migration Service Migrate to Containers BigQuery Migration Services Rapid Migration and Modernization Program Transfer Appliance Storage Transfer Service VMware Engine Mixed Reality Immersive Stream for XR Networking Cloud Armor Cloud CDN and Media CDN Cloud DNS Cloud Load Balancing Cloud NAT Cloud Connectivity Network Connectivity Center Network Intelligence Center Network Service Tiers Virtual Private Cloud Private Service Connect See all networking products Operations Cloud Logging Cloud Monitoring Error Reporting Managed Service for Prometheus Cloud Trace Cloud Profiler Cloud Quotas Productivity and Collaboration AppSheet Gemini Enterprise Google Workspace Google Workspace Essentials Cloud Identity Chrome Enterprise Security and Identity Cloud IAM Sensitive Data Protection Mandiant Managed Defense Google Threat Intelligence Security Command Center Cloud Key Management Mandiant Incident Response Chrome Enterprise Premium Assured Workloads Google Security Operations Mandiant Consulting See all security and identity products Serverless Cloud Run Cloud Functions App Engine Workflows API Gateway Storage Cloud Storage Block Storage Filestore Persistent Disk Cloud Storage for Firebase Local SSD Storage Transfer Service Google Cloud Managed Lustre Google Cloud NetApp Volumes Backup and DR Service Web3 Blockchain Node Engine Blockchain RPC Save money with our transparent approach to pricing Request a quote Pricing overview and tools Google Cloud pricing Pricing calculator Google Cloud free tier Cost optimization framework Cost management tools Product-specific Pricing Compute Engine Cloud SQL Google Kubernetes Engine Cloud Storage BigQuery See full price list with 100+ products Learn & build Google Cloud Free Program Solution Generator Quickstarts Blog Learning Hub Google Cloud certification Cloud computing basics Cloud Architecture Center Connect Innovators Developer Center Events and webinars Google Cloud Community Consulting and Partners Google Cloud Consulting Google Cloud Marketplace Find a partner Google Cloud partners Why Google Choosing Google Cloud Trust and security Modern Infrastructure Cloud Multicloud Global infrastructure Locations Customers and case studies Analyst reports Whitepapers Blog Products and pricing Google Cloud pricing Google Workspace pricing See all products Solutions Infrastructure modernization Databases Application modernization Smart analytics Artificial Intelligence Security Productivity & work transformation Industry solutions DevOps solutions Small business solutions See all solutions Resources Google Cloud Affiliate Program Google Cloud documentation Google Cloud quickstarts Google Cloud Marketplace Learn about cloud computing Support Code samples Cloud Architecture Center Training Certifications Google for Developers Google Cloud for Startups System status Release Notes Engage Contact sales Find a Partner Become a Partner Events Podcasts Developer Center Press Corner Google Cloud on YouTube Google Cloud Tech on YouTube Follow on X Join User Research We're hiring.
- Observability Monitor, troubleshoot, and improve app performance with end-to-end visibility.
- Iowa (us-central1) Johannesburg (africa-south1) Taiwan (asia-east1) Hong Kong (asia-east2) Tokyo (asia-northeast1) Osaka (asia-northeast2) Seoul (asia-northeast3) Mumbai (asia-south1) Delhi (asia-south2) Singapore (asia-southeast1) Jakarta (asia-southeast2) Bangkok (asia-southeast3) Sydney (australia-southeast1) Melbourne (australia-southeast2) Warsaw (europe-central2) Finland (europe-north1) Stockholm (europe-north2) Madrid (europe-southwest1) Belgium (europe-west1) Berlin (europe-west10) Turin (europe-west12) London (europe-west2) Frankfurt (europe-west3) Netherlands (europe-west4) Zurich (europe-west6) Milan (europe-west8) Paris (europe-west9) Doha (me-central1) Dammam (me-central2) Tel Aviv (me-west1) Montreal (northamerica-northeast1) Toronto (northamerica-northeast2) Mexico (northamerica-south1) Sao Paulo (southamerica-east1) Santiago (southamerica-west1) Iowa (us-central1) South Carolina (us-east1) Northern Virginia (us-east4) Columbus (us-east5) Alabama (us-east7) Dallas (us-south1) Oregon (us-west1) Los Angeles (us-west2) Salt Lake City (us-west3) Las Vegas (us-west4) Phoenix (us-west8) Item Price (USD) Serverless export pricing $0.01 / 1 gibibyte Note: The price per GiB is calculated based on the disk size of the offload instance, which is the same as the disk size of the primary instance.
- Software as a Service Build better SaaS products, scale efficiently, and grow your business. close Featured Products AI and Machine Learning Business Intelligence Compute Containers Data Analytics Databases Developer Tools Distributed Cloud Hybrid and Multicloud Industry Specific Integration Services Management Tools Maps and Geospatial Media Services Migration Mixed Reality Networking Operations Productivity and Collaboration Security and Identity Serverless Storage Web3 See all products (100+) Featured Products Compute Engine Virtual machines running in Google’s data center.

### "General best practices \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/best-practices](https://docs.cloud.google.com/sql/docs/sqlserver/best-practices)
- Source ID: `site-docs-reference-required-4`
- Final score: 59
- Re-rank relevance: N/A

Evidence snippets:
- The following table has recommended values and percentages of total RAM for some popular virtual machine (VM) tiers: Instance tier (MB) max server memory (mb) % (Total) 3840 1440 37 4096 1632 39 5792 2912 50 8192 4704 57 11584 7248 62 16384 10848 66 23168 16800 72 32768 25200 76 46336 37072 80 65568 53888 82 92704 77648 83 131136 111248 84 185440 158784 85 262272 226000 86 370880 321056 86 524544 455488 86 741792 645600 87 To monitor the memory usage for your instance, use the following metrics : database/memory/usage database/sqlserver/memory/buffer cache hit ratio database/sqlserver/memory/memory grants pending database/sqlserver/memory/page life expectancy For more information, see Monitor Cloud SQL instances .
- This option allows SQL Server to create single-column statistics that can improve cardinality estimates for query plans.
- Monitor SQL Server for missing indexes that might offer improved performance.
- Database collation Whether you're installing a new instance of SQL Server, restoring a database backup, or connecting a server to client databases, it's important to understand the locale requirements, sorting order, and case and accent sensitivity of the data that you're working with.

