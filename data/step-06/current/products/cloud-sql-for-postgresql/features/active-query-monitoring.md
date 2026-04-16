---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.769Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Active query monitoring"
feature_slug: "active-query-monitoring"
latest_feature_date: "2024-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/troubleshooting"
  - "https://docs.cloud.google.com/sql/docs/postgres/pricing"
  - "https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics"
keywords:
  - "troubleshoot"
  - "monitoring"
  - "monitor"
  - "active"
  - "helps"
  - "queries"
  - "query"
---

# Active query monitoring

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

Active query monitoring helps you monitor and troubleshoot queries that are currently running in your database.

## Extended Definition

Active query monitoring helps you monitor and troubleshoot queries that are currently running in your database.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting)
- [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics](https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics)

## Supporting Pages

### Troubleshoot \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 203
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For general tuning advice, see Optimizing, monitoring, and troubleshooting vacuum operations in PostgreSQL .
- From a terminal, connect to your database: gcloud sql connect INSTANCE NAME Run this command to create the extension: CREATE EXTENSION pgaudit ; Exit the database, and from a terminal run the following command: gcloud sql instances patch INSTANCE NAME \ --database-flags = cloudsql.enable pgaudit = on,pgaudit.log = all Manage instances Issue Troubleshooting You want to find out what queries are running now.
- After creating a replica, the query SELECT from pg stat activity where state = 'active' and pid = XXXX and username = 'cloudsqlreplica' is expected to run continuously on your primary instance.
- An instance can fail and report Out of memory but the Google Cloud console or Cloud Monitoring charts seem to show there's still memory remaining.

### Cloud SQL pricing | Google Cloud

- URL: [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing)
- Source ID: `site-docs-root`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- Google Cloud partners Learn about the ecosystem and resources. close Overview arrow forward Solutions arrow forward Products arrow forward Pricing arrow forward Resources arrow forward Docs Support Console Accelerate your digital transformation Learn more Key benefits Why Google Cloud AI and ML Multicloud Global infrastructure Data Cloud Modern Infrastructure Cloud Security Productivity and collaboration Reports and insights Executive insights Analyst reports Whitepapers Customer stories Industry Solutions Retail Consumer Packaged Goods Financial Services Healthcare and Life Sciences Media and Entertainment Telecommunications Games Manufacturing Supply Chain and Logistics Government Education See all industry solutions See all solutions Application Modernization CAMP Modernize Traditional Applications Migrate from PaaS: Cloud Foundry, Openshift Migrate from Mainframe Modernize Software Delivery DevOps Best Practices SRE Principles Platform Engineering Run Applications at the Edge Architect for Multicloud Go Serverless Artificial Intelligence Customer Engagement Suite with Google AI Document AI Vertex AI Search for commerce Google Cloud with Gemini Generative AI on Google Cloud APIs and Applications New Business Channels Using APIs Unlocking Legacy Applications Using APIs Open Banking APIx Data Analytics Data Migration Data Lakehouse Real-time Analytics Marketing Analytics Datasets Business Intelligence AI for Data Analytics Geospatial Analytics Databases Database Migration Database Modernization Databases for Games Google Cloud Databases Migrate Oracle workloads to Google Cloud Open Source Databases SQL Server on Google Cloud Gemini for Databases Infrastructure Modernization Application Migration SAP on Google Cloud High Performance Computing Windows on Google Cloud Data Center Migration Active Assist Virtual Desktops Rapid Migration and Modernization Program Backup and Disaster Recovery Red Hat on Google Cloud Cross-Cloud Network Observability Productivity and Collaboration Google Workspace Google Workspace Essentials Cloud Identity Chrome Enterprise Security Agentic SOC Web App and API Protection Security and Resilience Framework Risk and compliance as code (RCaC) Software Supply Chain Security Security Foundation Google Cloud Cybershield™ Startups and SMB Startup Program Small and Medium Business Software as a Service Featured Products Compute Engine Cloud Storage BigQuery Cloud Run Google Kubernetes Engine Vertex AI Looker Apigee API Management Cloud SQL Gemini Enterprise Cloud CDN See all products (100+) AI and Machine Learning Vertex AI Platform Vertex AI Studio Vertex AI Agent Builder Conversational Agents Vertex AI Search Speech-to-Text Text-to-Speech Translation AI Gemini Enterprise Vision AI Contact Center as a Service See all AI and machine learning products Business Intelligence Looker Looker Studio Compute Compute Engine App Engine Cloud GPUs Migrate to Virtual Machines Spot VMs Batch Sole-Tenant Nodes Bare Metal Recommender VMware Engine Cloud Run See all compute products Containers Google Kubernetes Engine Cloud Run Cloud Build Artifact Registry Cloud Code Cloud Deploy Migrate to Containers Deep Learning Containers Knative Data Analytics BigQuery Looker Dataflow Pub/Sub Dataproc Google Cloud Serverless for Apache Spark Cloud Composer BigLake Dataplex Universal Catalog BigQuery Migration Services Managed Service for Apache Kafka See all data analytics products Databases AlloyDB for PostgreSQL Cloud SQL Firestore Spanner Bigtable Datastream Database Migration Service Bare Metal Solution Memorystore Developer Tools Artifact Registry Cloud Code Cloud Build Cloud Deploy Cloud Deployment Manager Cloud SDK Cloud Scheduler Cloud Source Repositories Infrastructure Manager Cloud Workstations Gemini Code Assist See all developer tools Distributed Cloud Google Distributed Cloud Connected Google Distributed Cloud Air-gapped Hybrid and Multicloud Google Kubernetes Engine Apigee API Management Migrate to Containers Cloud Build Observability Cloud Service Mesh Google Distributed Cloud Industry Specific Anti Money Laundering AI Cloud Healthcare API Device Connect for Fitbit Telecom Network Automation Telecom Data Fabric Telecom Subscriber Insights Spectrum Access System (SAS) Integration Services Application Integration Workflows Apigee API Management Cloud Tasks Cloud Scheduler Dataproc Cloud Data Fusion Cloud Composer Pub/Sub Eventarc Management Tools Cloud Shell Cloud console Cloud Endpoints Cloud IAM Cloud APIs Service Catalog Cost Management Observability Carbon Footprint Config Connector Active Assist See all management tools Maps and Geospatial Earth Engine Google Maps Platform Media Services Cloud CDN Live Stream API OpenCue Transcoder API Video Stitcher API Migration Migration Center Application Migration Migrate to Virtual Machines Cloud Foundation Toolkit Database Migration Service Migrate to Containers BigQuery Migration Services Rapid Migration and Modernization Program Transfer Appliance Storage Transfer Service VMware Engine Mixed Reality Immersive Stream for XR Networking Cloud Armor Cloud CDN and Media CDN Cloud DNS Cloud Load Balancing Cloud NAT Cloud Connectivity Network Connectivity Center Network Intelligence Center Network Service Tiers Virtual Private Cloud Private Service Connect See all networking products Operations Cloud Logging Cloud Monitoring Error Reporting Managed Service for Prometheus Cloud Trace Cloud Profiler Cloud Quotas Productivity and Collaboration AppSheet Gemini Enterprise Google Workspace Google Workspace Essentials Cloud Identity Chrome Enterprise Security and Identity Cloud IAM Sensitive Data Protection Mandiant Managed Defense Google Threat Intelligence Security Command Center Cloud Key Management Mandiant Incident Response Chrome Enterprise Premium Assured Workloads Google Security Operations Mandiant Consulting See all security and identity products Serverless Cloud Run Cloud Functions App Engine Workflows API Gateway Storage Cloud Storage Block Storage Filestore Persistent Disk Cloud Storage for Firebase Local SSD Storage Transfer Service Google Cloud Managed Lustre Google Cloud NetApp Volumes Backup and DR Service Web3 Blockchain Node Engine Blockchain RPC Save money with our transparent approach to pricing Request a quote Pricing overview and tools Google Cloud pricing Pricing calculator Google Cloud free tier Cost optimization framework Cost management tools Product-specific Pricing Compute Engine Cloud SQL Google Kubernetes Engine Cloud Storage BigQuery See full price list with 100+ products Learn & build Google Cloud Free Program Solution Generator Quickstarts Blog Learning Hub Google Cloud certification Cloud computing basics Cloud Architecture Center Connect Innovators Developer Center Events and webinars Google Cloud Community Consulting and Partners Google Cloud Consulting Google Cloud Marketplace Find a partner Google Cloud partners Why Google Choosing Google Cloud Trust and security Modern Infrastructure Cloud Multicloud Global infrastructure Locations Customers and case studies Analyst reports Whitepapers Blog Products and pricing Google Cloud pricing Google Workspace pricing See all products Solutions Infrastructure modernization Databases Application modernization Smart analytics Artificial Intelligence Security Productivity & work transformation Industry solutions DevOps solutions Small business solutions See all solutions Resources Google Cloud Affiliate Program Google Cloud documentation Google Cloud quickstarts Google Cloud Marketplace Learn about cloud computing Support Code samples Cloud Architecture Center Training Certifications Google for Developers Google Cloud for Startups System status Release Notes Engage Contact sales Find a Partner Become a Partner Events Podcasts Developer Center Press Corner Google Cloud on YouTube Google Cloud Tech on YouTube Follow on X Join User Research We're hiring.
- Observability Monitor, troubleshoot, and improve app performance with end-to-end visibility.
- Network Intelligence Center Network monitoring, verification, and optimization platform.
- Cost Management Tools for monitoring, controlling, and optimizing your costs.

### Cloud SQL metrics \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics](https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics)
- Source ID: `site-api-reference`
- Final score: 133
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Metric type Launch stage (Resource hierarchy levels) Display name Kind, Type, Unit Monitored resources Description Labels database/active directory/domain reachable ALPHA (project) Active Directory domain reachable GAUGE , BOOL , cloudsql database Indicates whether the instance is able to ping a domain controller from the connected Managed Active Directory domain.
- After sampling, data is not visible for up to 165 seconds. database/mysql/thread state GA (project) MySQL threads state GAUGE , INT64 , 1 cloudsql database The state of running threads by querying information schema.processlist table, this information helps to understand the locking or contention issues.
- DELTA , INT64 , 1 cloudsql database The total number of queries that took longer than long query time seconds.
- What's next Learn how monitoring works in Google Cloud with the Introduction to Cloud Monitoring .

