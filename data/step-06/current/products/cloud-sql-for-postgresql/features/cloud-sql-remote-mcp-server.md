---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.740Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Cloud SQL remote MCP server"
feature_slug: "cloud-sql-remote-mcp-server"
latest_feature_date: "2026-02-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/build-llm-powered-applications-using-llamaindex"
  - "https://docs.cloud.google.com/sql/docs/postgres/create-instance"
  - "https://docs.cloud.google.com/sql/docs/postgres/pricing"
keywords:
  - "applications"
  - "llms"
  - "remote"
  - "server"
  - "lets"
---

# Cloud SQL remote MCP server

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

The Cloud SQL remote MCP server lets LLMs, AI applications, and AI-enabled development platforms interact with Cloud SQL instances.

## Extended Definition

The Cloud SQL remote MCP server lets LLMs, AI applications, and AI-enabled development platforms interact with Cloud SQL instances.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/build-llm-powered-applications-using-llamaindex](https://docs.cloud.google.com/sql/docs/postgres/build-llm-powered-applications-using-llamaindex)
- [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)
- [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing)

## Supporting Pages

### "Build LLM-powered applications using LlamaIndex \_|\_ Cloud SQL for PostgreSQL\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/build-llm-powered-applications-using-llamaindex](https://docs.cloud.google.com/sql/docs/postgres/build-llm-powered-applications-using-llamaindex)
- Source ID: `site-iam-reference`
- Final score: 103
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- LlamaIndex acts as a bridge between custom data and LLMs, facilitating the development of knowledge assistant applications with retrieval-augmented generation (RAG) capabilities.
- MySQL PostgreSQL SQL Server This page describes some use cases for building LLM-powered applications using LlamaIndex integrated with Cloud SQL for PostgreSQL.
- LlamaIndex is a generative AI orchestration framework that lets you connect and integrate data sources with large language models (LLMs).
- Home Documentation Databases Cloud SQL PostgreSQL Guides Send feedback Build LLM-powered applications using LlamaIndex Stay organized with collections Save and categorize content based on your preferences.

### Create instances \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)
- Source ID: `site-docs-root`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#instance", "state": "RUNNABLE", "databaseVersion": "MYSQL 8 0 18", "settings": { "authorizedGaeApplications": [], "tier": "db-f1-micro", "kind": "sql#settings", "pricingPlan": "PER USE", "replicationType": "SYNCHRONOUS", "activationPolicy": "ALWAYS", "ipConfiguration": { "authorizedNetworks": [], "ipv4Enabled": true }, "locationPreference": { "zone": "us-west1-a", "kind": "sql#locationPreference" }, "dataDiskType": "PD SSD", "backupConfiguration": { "startTime": "18:00", "kind": "sql#backupConfiguration", "enabled": true, "binaryLogEnabled": true }, "settingsVersion": "1", "storageAutoResizeLimit": "0", "storageAutoResize": true, "dataDiskSizeGb": "10" }, "etag": "--redacted--", "ipAddresses": [ { "type": "PRIMARY", "ipAddress": " 10.0.0.1 " } ], "serverCaCert": { ... }, "instanceType": "CLOUD SQL INSTANCE", "project": " project-id ", "serviceAccountEmailAddress": "redacted@gcp-sa-cloud-sql.iam.gserviceaccount.com", "backendType": "SECOND GEN", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id ", "connectionName": " project-id:region:instance-id ", "name": " instance-id ", "region": "us-west1", "gceZone": "us-west1-a" } Look for the ipAddress field in the response.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#instance", "state": "RUNNABLE", "databaseVersion": "MYSQL 8 0 18", "settings": { "authorizedGaeApplications": [], "tier": "db-f1-micro", "kind": "sql#settings", "pricingPlan": "PER USE", "replicationType": "SYNCHRONOUS", "activationPolicy": "ALWAYS", "ipConfiguration": { "authorizedNetworks": [], "ipv4Enabled": true }, "locationPreference": { "zone": "us-west1-a", "kind": "sql#locationPreference" }, "dataDiskType": "PD SSD", "backupConfiguration": { "startTime": "18:00", "kind": "sql#backupConfiguration", "enabled": true, "binaryLogEnabled": true }, "settingsVersion": "1", "storageAutoResizeLimit": "0", "storageAutoResize": true, "dataDiskSizeGb": "10" }, "etag": "--redacted--", "ipAddresses": [ { "type": "PRIMARY", "ipAddress": " 10.0.0.1 " } ], "serverCaCert": { ... }, "instanceType": "CLOUD SQL INSTANCE", "project": " project-id ", "serviceAccountEmailAddress": "redacted@gcp-sa-cloud-sql.iam.gserviceaccount.com", "backendType": "SECOND GEN", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id ", "connectionName": " project-id:region:instance-id ", "name": " instance-id ", "region": "us-west1", "gceZone": "us-west1-a" } Look for the ipAddress field in the response.
- This integration lets you apply large language models (LLMs), which are hosted in Vertex AI, to a Cloud SQL for PostgreSQL database.
- This integration lets you apply large language models (LLMs), which are hosted in Vertex AI, to a Cloud SQL for PostgreSQL database.

### Cloud SQL pricing | Google Cloud

- URL: [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing)
- Source ID: `site-docs-root`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- Google Cloud partners Learn about the ecosystem and resources. close Overview arrow forward Solutions arrow forward Products arrow forward Pricing arrow forward Resources arrow forward Docs Support Console Accelerate your digital transformation Learn more Key benefits Why Google Cloud AI and ML Multicloud Global infrastructure Data Cloud Modern Infrastructure Cloud Security Productivity and collaboration Reports and insights Executive insights Analyst reports Whitepapers Customer stories Industry Solutions Retail Consumer Packaged Goods Financial Services Healthcare and Life Sciences Media and Entertainment Telecommunications Games Manufacturing Supply Chain and Logistics Government Education See all industry solutions See all solutions Application Modernization CAMP Modernize Traditional Applications Migrate from PaaS: Cloud Foundry, Openshift Migrate from Mainframe Modernize Software Delivery DevOps Best Practices SRE Principles Platform Engineering Run Applications at the Edge Architect for Multicloud Go Serverless Artificial Intelligence Customer Engagement Suite with Google AI Document AI Vertex AI Search for commerce Google Cloud with Gemini Generative AI on Google Cloud APIs and Applications New Business Channels Using APIs Unlocking Legacy Applications Using APIs Open Banking APIx Data Analytics Data Migration Data Lakehouse Real-time Analytics Marketing Analytics Datasets Business Intelligence AI for Data Analytics Geospatial Analytics Databases Database Migration Database Modernization Databases for Games Google Cloud Databases Migrate Oracle workloads to Google Cloud Open Source Databases SQL Server on Google Cloud Gemini for Databases Infrastructure Modernization Application Migration SAP on Google Cloud High Performance Computing Windows on Google Cloud Data Center Migration Active Assist Virtual Desktops Rapid Migration and Modernization Program Backup and Disaster Recovery Red Hat on Google Cloud Cross-Cloud Network Observability Productivity and Collaboration Google Workspace Google Workspace Essentials Cloud Identity Chrome Enterprise Security Agentic SOC Web App and API Protection Security and Resilience Framework Risk and compliance as code (RCaC) Software Supply Chain Security Security Foundation Google Cloud Cybershield™ Startups and SMB Startup Program Small and Medium Business Software as a Service Featured Products Compute Engine Cloud Storage BigQuery Cloud Run Google Kubernetes Engine Vertex AI Looker Apigee API Management Cloud SQL Gemini Enterprise Cloud CDN See all products (100+) AI and Machine Learning Vertex AI Platform Vertex AI Studio Vertex AI Agent Builder Conversational Agents Vertex AI Search Speech-to-Text Text-to-Speech Translation AI Gemini Enterprise Vision AI Contact Center as a Service See all AI and machine learning products Business Intelligence Looker Looker Studio Compute Compute Engine App Engine Cloud GPUs Migrate to Virtual Machines Spot VMs Batch Sole-Tenant Nodes Bare Metal Recommender VMware Engine Cloud Run See all compute products Containers Google Kubernetes Engine Cloud Run Cloud Build Artifact Registry Cloud Code Cloud Deploy Migrate to Containers Deep Learning Containers Knative Data Analytics BigQuery Looker Dataflow Pub/Sub Dataproc Google Cloud Serverless for Apache Spark Cloud Composer BigLake Dataplex Universal Catalog BigQuery Migration Services Managed Service for Apache Kafka See all data analytics products Databases AlloyDB for PostgreSQL Cloud SQL Firestore Spanner Bigtable Datastream Database Migration Service Bare Metal Solution Memorystore Developer Tools Artifact Registry Cloud Code Cloud Build Cloud Deploy Cloud Deployment Manager Cloud SDK Cloud Scheduler Cloud Source Repositories Infrastructure Manager Cloud Workstations Gemini Code Assist See all developer tools Distributed Cloud Google Distributed Cloud Connected Google Distributed Cloud Air-gapped Hybrid and Multicloud Google Kubernetes Engine Apigee API Management Migrate to Containers Cloud Build Observability Cloud Service Mesh Google Distributed Cloud Industry Specific Anti Money Laundering AI Cloud Healthcare API Device Connect for Fitbit Telecom Network Automation Telecom Data Fabric Telecom Subscriber Insights Spectrum Access System (SAS) Integration Services Application Integration Workflows Apigee API Management Cloud Tasks Cloud Scheduler Dataproc Cloud Data Fusion Cloud Composer Pub/Sub Eventarc Management Tools Cloud Shell Cloud console Cloud Endpoints Cloud IAM Cloud APIs Service Catalog Cost Management Observability Carbon Footprint Config Connector Active Assist See all management tools Maps and Geospatial Earth Engine Google Maps Platform Media Services Cloud CDN Live Stream API OpenCue Transcoder API Video Stitcher API Migration Migration Center Application Migration Migrate to Virtual Machines Cloud Foundation Toolkit Database Migration Service Migrate to Containers BigQuery Migration Services Rapid Migration and Modernization Program Transfer Appliance Storage Transfer Service VMware Engine Mixed Reality Immersive Stream for XR Networking Cloud Armor Cloud CDN and Media CDN Cloud DNS Cloud Load Balancing Cloud NAT Cloud Connectivity Network Connectivity Center Network Intelligence Center Network Service Tiers Virtual Private Cloud Private Service Connect See all networking products Operations Cloud Logging Cloud Monitoring Error Reporting Managed Service for Prometheus Cloud Trace Cloud Profiler Cloud Quotas Productivity and Collaboration AppSheet Gemini Enterprise Google Workspace Google Workspace Essentials Cloud Identity Chrome Enterprise Security and Identity Cloud IAM Sensitive Data Protection Mandiant Managed Defense Google Threat Intelligence Security Command Center Cloud Key Management Mandiant Incident Response Chrome Enterprise Premium Assured Workloads Google Security Operations Mandiant Consulting See all security and identity products Serverless Cloud Run Cloud Functions App Engine Workflows API Gateway Storage Cloud Storage Block Storage Filestore Persistent Disk Cloud Storage for Firebase Local SSD Storage Transfer Service Google Cloud Managed Lustre Google Cloud NetApp Volumes Backup and DR Service Web3 Blockchain Node Engine Blockchain RPC Save money with our transparent approach to pricing Request a quote Pricing overview and tools Google Cloud pricing Pricing calculator Google Cloud free tier Cost optimization framework Cost management tools Product-specific Pricing Compute Engine Cloud SQL Google Kubernetes Engine Cloud Storage BigQuery See full price list with 100+ products Learn & build Google Cloud Free Program Solution Generator Quickstarts Blog Learning Hub Google Cloud certification Cloud computing basics Cloud Architecture Center Connect Innovators Developer Center Events and webinars Google Cloud Community Consulting and Partners Google Cloud Consulting Google Cloud Marketplace Find a partner Google Cloud partners Why Google Choosing Google Cloud Trust and security Modern Infrastructure Cloud Multicloud Global infrastructure Locations Customers and case studies Analyst reports Whitepapers Blog Products and pricing Google Cloud pricing Google Workspace pricing See all products Solutions Infrastructure modernization Databases Application modernization Smart analytics Artificial Intelligence Security Productivity & work transformation Industry solutions DevOps solutions Small business solutions See all solutions Resources Google Cloud Affiliate Program Google Cloud documentation Google Cloud quickstarts Google Cloud Marketplace Learn about cloud computing Support Code samples Cloud Architecture Center Training Certifications Google for Developers Google Cloud for Startups System status Release Notes Engage Contact sales Find a Partner Become a Partner Events Podcasts Developer Center Press Corner Google Cloud on YouTube Google Cloud Tech on YouTube Follow on X Join User Research We're hiring.
- Virtual Desktops Remote work solutions for desktops and applications (VDI & DaaS).
- Iowa (us-central1) Johannesburg (africa-south1) Taiwan (asia-east1) Hong Kong (asia-east2) Tokyo (asia-northeast1) Osaka (asia-northeast2) Seoul (asia-northeast3) Mumbai (asia-south1) Delhi (asia-south2) Singapore (asia-southeast1) Jakarta (asia-southeast2) Bangkok (asia-southeast3) Sydney (australia-southeast1) Melbourne (australia-southeast2) Warsaw (europe-central2) Finland (europe-north1) Stockholm (europe-north2) Madrid (europe-southwest1) Belgium (europe-west1) Berlin (europe-west10) Turin (europe-west12) London (europe-west2) Frankfurt (europe-west3) Netherlands (europe-west4) Zurich (europe-west6) Milan (europe-west8) Paris (europe-west9) Doha (me-central1) Dammam (me-central2) Tel Aviv (me-west1) Montreal (northamerica-northeast1) Toronto (northamerica-northeast2) Mexico (northamerica-south1) Sao Paulo (southamerica-east1) Santiago (southamerica-west1) Iowa (us-central1) South Carolina (us-east1) Northern Virginia (us-east4) Columbus (us-east5) Alabama (us-east7) Dallas (us-south1) Oregon (us-west1) Los Angeles (us-west2) Salt Lake City (us-west3) Las Vegas (us-west4) Phoenix (us-west8) Item Price (USD) Serverless export pricing $0.01 / 1 gibibyte Note: The price per GiB is calculated based on the disk size of the offload instance, which is the same as the disk size of the primary instance.
- Software as a Service Build better SaaS products, scale efficiently, and grow your business. close Featured Products AI and Machine Learning Business Intelligence Compute Containers Data Analytics Databases Developer Tools Distributed Cloud Hybrid and Multicloud Industry Specific Integration Services Management Tools Maps and Geospatial Media Services Migration Mixed Reality Networking Operations Productivity and Collaboration Security and Identity Serverless Storage Web3 See all products (100+) Featured Products Compute Engine Virtual machines running in Google’s data center.

