---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:13:48.464Z"
product_name: "Dataplex"
product_slug: "dataplex"
feature_name: "Managed connectivity pipelines"
feature_slug: "managed-connectivity-pipelines"
latest_feature_date: "2024-09-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataplex/docs/import-using-workflows-custom-source"
  - "https://docs.cloud.google.com/dataplex/docs/develop-custom-connector"
  - "https://docs.cloud.google.com/dataplex/docs/import-metadata"
  - "https://docs.cloud.google.com/dataplex/docs/support/getting-support"
keywords:
  - "managed"
  - "connectivity"
  - "pipelines"
  - "import"
  - "metadata"
  - "from"
  - "third"
  - "party"
---

# Managed connectivity pipelines

Product: Dataplex
Coverage: MEDIUM

## Step 02 Summary

Managed connectivity pipelines import metadata from third-party sources into Dataplex Catalog using custom connectors and Workflows orchestration.

## Extended Definition

Managed connectivity pipelines import metadata from third-party sources into Dataplex Catalog using custom connectors and Workflows orchestration.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataplex/docs/import-using-workflows-custom-source](https://docs.cloud.google.com/dataplex/docs/import-using-workflows-custom-source)
- [https://docs.cloud.google.com/dataplex/docs/develop-custom-connector](https://docs.cloud.google.com/dataplex/docs/develop-custom-connector)
- [https://docs.cloud.google.com/dataplex/docs/import-metadata](https://docs.cloud.google.com/dataplex/docs/import-metadata)
- [https://docs.cloud.google.com/dataplex/docs/support/getting-support](https://docs.cloud.google.com/dataplex/docs/support/getting-support)

## Supporting Pages

### "Import metadata from a custom source using Workflows \_|\_ Knowledge Catalog\

- URL: [https://docs.cloud.google.com/dataplex/docs/import-using-workflows-custom-source](https://docs.cloud.google.com/dataplex/docs/import-using-workflows-custom-source)
- Source ID: `site-docs-root-2`
- Final score: 230
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This document describes how to import metadata from third-party sources into Knowledge Catalog (formerly Dataplex Universal Catalog) by setting up and running a managed connectivity pipeline in Workflows.
- If you want to schedule the pipeline, grant the service account the following role: gcloud projects add-iam-policy-binding PROJECT ID \ --member=" SERVICE ACCOUNT ID " \ --role=roles/workflows.invoker Import metadata To import metadata, create and then execute a workflow that runs the managed connectivity pipeline.
- Build a custom connector that extracts metadata from your third-party source.
- Home Documentation Data analytics Knowledge Catalog Guides Send feedback Import metadata from a custom source using Workflows Stay organized with collections Save and categorize content based on your preferences.

### "Develop a custom connector for metadata import \_|\_ Knowledge Catalog \_\

- URL: [https://docs.cloud.google.com/dataplex/docs/develop-custom-connector](https://docs.cloud.google.com/dataplex/docs/develop-custom-connector)
- Source ID: `site-docs-root-2`
- Final score: 214
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- How connectors work A connector extracts metadata from a third-party data source, transforms the metadata to Knowledge Catalog ImportItem format, and generates metadata import files that can be imported by Knowledge Catalog.
- Optional: To improve the security, performance, and functionality of your managed connectivity pipeline, consider doing the following things: Use Secret Manager to store the credentials for your third-party data source.
- This document provides a reference template to build a custom connector for extracting metadata from third-party sources, such as MySQL, SQL Server, and Oracle.
- The managed connectivity pipeline runs the connector and performs other tasks in the import workflow, such as running a metadata import job and capturing logs.

### "Import metadata using a custom pipeline \_|\_ Knowledge Catalog \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataplex/docs/import-metadata](https://docs.cloud.google.com/dataplex/docs/import-metadata)
- Source ID: `site-docs-root-2`
- Final score: 190
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This document describes how to import metadata from a third-party system into Knowledge Catalog (formerly Dataplex Universal Catalog) by using the metadata import API methods and your own pipeline.
- With a managed connectivity pipeline, you bring your own connector that extracts metadata and generates output in a format that can be used as input by the metadata import API methods (the metadata import file).
- If you instead want to use a Google Cloud-managed orchestration pipeline to extract and import metadata, we suggest using a managed connectivity pipeline .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataplex v1 def sample create metadata job (): Create a client client = dataplex v1 .

### Customer Care | Google Cloud

- URL: [https://docs.cloud.google.com/dataplex/docs/support/getting-support](https://docs.cloud.google.com/dataplex/docs/support/getting-support)
- Source ID: `site-docs-root`
- Final score: 155
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Google Cloud partners Learn about the ecosystem and resources. close Overview arrow forward Solutions arrow forward Products arrow forward Pricing arrow forward Resources arrow forward Docs Support Console Accelerate your digital transformation Learn more Key benefits Why Google Cloud AI and ML Multicloud Global infrastructure Data Cloud Modern Infrastructure Cloud Security Productivity and collaboration Reports and insights Executive insights Analyst reports Whitepapers Customer stories Industry Solutions Retail Consumer Packaged Goods Financial Services Healthcare and Life Sciences Media and Entertainment Telecommunications Games Manufacturing Supply Chain and Logistics Government Education See all industry solutions See all solutions Application Modernization CAMP Modernize Traditional Applications Migrate from PaaS: Cloud Foundry, Openshift Migrate from Mainframe Modernize Software Delivery DevOps Best Practices SRE Principles Platform Engineering Run Applications at the Edge Architect for Multicloud Go Serverless Artificial Intelligence Customer Engagement Suite with Google AI Document AI Vertex AI Search for commerce Google Cloud with Gemini Generative AI on Google Cloud APIs and Applications New Business Channels Using APIs Unlocking Legacy Applications Using APIs Open Banking APIx Data Analytics Data Migration Data Lakehouse Real-time Analytics Marketing Analytics Datasets Business Intelligence AI for Data Analytics Geospatial Analytics Databases Database Migration Database Modernization Databases for Games Google Cloud Databases Migrate Oracle workloads to Google Cloud Open Source Databases SQL Server on Google Cloud Gemini for Databases Infrastructure Modernization Application Migration SAP on Google Cloud High Performance Computing Windows on Google Cloud Data Center Migration Active Assist Virtual Desktops Rapid Migration and Modernization Program Backup and Disaster Recovery Red Hat on Google Cloud Cross-Cloud Network Observability Productivity and Collaboration Google Workspace Google Workspace Essentials Cloud Identity Chrome Enterprise Security Agentic SOC Web App and API Protection Security and Resilience Framework Risk and compliance as code (RCaC) Software Supply Chain Security Security Foundation Google Cloud Cybershield™ Startups and SMB Startup Program Small and Medium Business Software as a Service Featured Products Compute Engine Cloud Storage BigQuery Cloud Run Google Kubernetes Engine Vertex AI Looker Apigee API Management Cloud SQL Gemini Enterprise Cloud CDN See all products (100+) AI and Machine Learning Vertex AI Platform Vertex AI Studio Vertex AI Agent Builder Conversational Agents Vertex AI Search Speech-to-Text Text-to-Speech Translation AI Gemini Enterprise Vision AI Contact Center as a Service See all AI and machine learning products Business Intelligence Looker Looker Studio Compute Compute Engine App Engine Cloud GPUs Migrate to Virtual Machines Spot VMs Batch Sole-Tenant Nodes Bare Metal Recommender VMware Engine Cloud Run See all compute products Containers Google Kubernetes Engine Cloud Run Cloud Build Artifact Registry Cloud Code Cloud Deploy Migrate to Containers Deep Learning Containers Knative Data Analytics BigQuery Looker Dataflow Pub/Sub Dataproc Google Cloud Serverless for Apache Spark Cloud Composer BigLake Dataplex Universal Catalog BigQuery Migration Services Managed Service for Apache Kafka See all data analytics products Databases AlloyDB for PostgreSQL Cloud SQL Firestore Spanner Bigtable Datastream Database Migration Service Bare Metal Solution Memorystore Developer Tools Artifact Registry Cloud Code Cloud Build Cloud Deploy Cloud Deployment Manager Cloud SDK Cloud Scheduler Cloud Source Repositories Infrastructure Manager Cloud Workstations Gemini Code Assist See all developer tools Distributed Cloud Google Distributed Cloud Connected Google Distributed Cloud Air-gapped Hybrid and Multicloud Google Kubernetes Engine Apigee API Management Migrate to Containers Cloud Build Observability Cloud Service Mesh Google Distributed Cloud Industry Specific Anti Money Laundering AI Cloud Healthcare API Device Connect for Fitbit Telecom Network Automation Telecom Data Fabric Telecom Subscriber Insights Spectrum Access System (SAS) Integration Services Application Integration Workflows Apigee API Management Cloud Tasks Cloud Scheduler Dataproc Cloud Data Fusion Cloud Composer Pub/Sub Eventarc Management Tools Cloud Shell Cloud console Cloud Endpoints Cloud IAM Cloud APIs Service Catalog Cost Management Observability Carbon Footprint Config Connector Active Assist See all management tools Maps and Geospatial Earth Engine Google Maps Platform Media Services Cloud CDN Live Stream API OpenCue Transcoder API Video Stitcher API Migration Migration Center Application Migration Migrate to Virtual Machines Cloud Foundation Toolkit Database Migration Service Migrate to Containers BigQuery Migration Services Rapid Migration and Modernization Program Transfer Appliance Storage Transfer Service VMware Engine Mixed Reality Immersive Stream for XR Networking Cloud Armor Cloud CDN and Media CDN Cloud DNS Cloud Load Balancing Cloud NAT Cloud Connectivity Network Connectivity Center Network Intelligence Center Network Service Tiers Virtual Private Cloud Private Service Connect See all networking products Operations Cloud Logging Cloud Monitoring Error Reporting Managed Service for Prometheus Cloud Trace Cloud Profiler Cloud Quotas Productivity and Collaboration AppSheet Gemini Enterprise Google Workspace Google Workspace Essentials Cloud Identity Chrome Enterprise Security and Identity Cloud IAM Sensitive Data Protection Mandiant Managed Defense Google Threat Intelligence Security Command Center Cloud Key Management Mandiant Incident Response Chrome Enterprise Premium Assured Workloads Google Security Operations Mandiant Consulting See all security and identity products Serverless Cloud Run Cloud Functions App Engine Workflows API Gateway Storage Cloud Storage Block Storage Filestore Persistent Disk Cloud Storage for Firebase Local SSD Storage Transfer Service Google Cloud Managed Lustre Google Cloud NetApp Volumes Backup and DR Service Web3 Blockchain Node Engine Blockchain RPC Save money with our transparent approach to pricing Request a quote Pricing overview and tools Google Cloud pricing Pricing calculator Google Cloud free tier Cost optimization framework Cost management tools Product-specific Pricing Compute Engine Cloud SQL Google Kubernetes Engine Cloud Storage BigQuery See full price list with 100+ products Learn & build Google Cloud Free Program Solution Generator Quickstarts Blog Learning Hub Google Cloud certification Cloud computing basics Cloud Architecture Center Connect Innovators Developer Center Events and webinars Google Cloud Community Consulting and Partners Google Cloud Consulting Google Cloud Marketplace Find a partner Google Cloud partners Why Google Choosing Google Cloud Trust and security Modern Infrastructure Cloud Multicloud Global infrastructure Locations Customers and case studies Analyst reports Whitepapers Blog Products and pricing Google Cloud pricing Google Workspace pricing See all products Solutions Infrastructure modernization Databases Application modernization Smart analytics Artificial Intelligence Security Productivity & work transformation Industry solutions DevOps solutions Small business solutions See all solutions Resources Google Cloud Affiliate Program Google Cloud documentation Google Cloud quickstarts Google Cloud Marketplace Learn about cloud computing Support Code samples Cloud Architecture Center Training Certifications Google for Developers Google Cloud for Startups System status Release Notes Engage Contact sales Find a Partner Become a Partner Events Podcasts Developer Center Press Corner Google Cloud on YouTube Google Cloud Tech on YouTube Follow on X Join User Research We're hiring.
- Estimate cost Monthly support charges are calculated as a percentage of each month’s total gross Google Cloud Platform costs as reflected in your monthly bill, as calculated at list prices prior to the application of any discounts, credits, or other adjustments (except for discounts related to BigQuery reservations, and list-price Resource-based Committed Use Discounts) Initial response times P2 cases: 4 hours P3 cases: 8 hours P4 cases: 8 hours P1 cases: 1 hour P2 cases: 4 hours P3 cases: 8 hours P4 cases: 8 hours P1 cases: 15 minutes P2 cases: 2 hours P3 cases: 4 hours P4 cases: 8 hours Service times 8/5 response for high-impact issues 24/7 response for high- and critical-impact issues 24/7 response for high- and critical-impact issues Support languages English English, Japanese, Mandarin Chinese, Korean and French English, Japanese, Mandarin Chinese, Korean and French Unlimited individual access to support Multi-channel billing and technical support Active Assist Recommendations API Cloud Support API Technical Support Escalations Third-Party Technology Support Google Cloud Skills Boost Event Management Service Operational Health Reviews Customer Aware Support Technical Account Manager Available with TAAS Value-Add Services available for additional purchase Technical Account Advisor Service Planned Event Support Assured Support Media CDN Mission Critical Services Technical Account Manager Services Assured Support Media CDN Standard Support Recommended for workloads under development, kickstart your cloud journey with unlimited access to tech support.
- Estimate cost Monthly support charges are calculated as a percentage of each month’s total gross Google Cloud Platform costs as reflected in your monthly bill, as calculated at list prices prior to the application of any discounts, credits, or other adjustments (except for discounts related to BigQuery reservations, and list-price Resource-based Committed Use Discounts) Initial response times P1 cases: 15 minutes P2 cases: 2 hours P3 cases: 4 hours P4 cases: 8 hours Service times 24/7 response for high- and critical-impact issues Support languages English, Japanese, Mandarin Chinese, Korean and French Unlimited individual access to support Multi-channel billing and technical support Active Assist Recommendations API Cloud Support API Technical Support Escalations Third-Party Technology Support Google Cloud Skills Boost Event Management Service Operational Health Reviews Customer Aware Support Technical Account Manager Value-Add Services available for additional purchase Mission Critical Services Technical Account Manager Services Assured Support Media CDN For SaaS specific product support, such as for Looker (Google Cloud core), Looker (Original), Chronicle SIEM, Chronicle SOAR, Apigee Hybrid, Apigee Edge Cloud, Apigee X, Application Integration, and Integration Connectors, please refer to this page .
- Estimate cost Monthly support charges are calculated as a percentage of each month’s total gross Google Cloud Platform costs as reflected in your monthly bill, as calculated at list prices prior to the application of any discounts, credits, or other adjustments (except for discounts related to BigQuery reservations, and list-price Resource-based Committed Use Discounts) Initial response times P1 cases: 1 hour P2 cases: 4 hours P3 cases: 8 hours P4 cases: 8 hours Service times 24/7 response for high- and critical-impact issues Support languages English, Japanese, Mandarin Chinese, Korean and French Unlimited individual access to support Multi-channel billing and technical support Active Assist Recommendations API Cloud Support API Technical Support Escalations Third-Party Technology Support Google Cloud Skills Boost Event Management Service Operational Health Reviews Customer Aware Support Technical Account Manager Available with TAAS Value-Add Services available for additional purchase Technical Account Advisor Service Planned Event Support Assured Support Media CDN Premium Support Designed for enterprises with critical workloads, with the fastest response time, Customer Aware Support, and Technical and Accounts Manager Services.

