---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:04:57.759Z"
product_name: "Cloud Data Fusion"
product_slug: "cloud-data-fusion"
feature_name: "SAP Table Reader plugin snapshot mode cleanup handling"
feature_slug: "sap-table-reader-plugin-snapshot-mode-cleanup-handling"
latest_feature_date: "2026-01-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/data-fusion/docs/release-notes"
  - "https://docs.cloud.google.com/data-fusion/docs/tutorials/connect-salesforce-to-bq"
  - "https://docs.cloud.google.com/data-fusion/docs/support/billing-questions"
keywords:
  - "sap"
  - "table"
  - "reader"
  - "plugin"
  - "snapshot"
  - "mode"
  - "cleanup"
  - "handling"
---

# SAP Table Reader plugin snapshot mode cleanup handling

Product: Cloud Data Fusion
Coverage: LOW

## Step 02 Summary

SAP Table Reader plugin version 0.11.5 fixes the Snapshot mode cleanup process to avoid an unnecessary Job abort failed log error.

## Extended Definition

SAP Table Reader plugin version 0.11.5 fixes the Snapshot mode cleanup process to avoid an unnecessary Job abort failed log error.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/data-fusion/docs/release-notes](https://docs.cloud.google.com/data-fusion/docs/release-notes)
- [https://docs.cloud.google.com/data-fusion/docs/tutorials/connect-salesforce-to-bq](https://docs.cloud.google.com/data-fusion/docs/tutorials/connect-salesforce-to-bq)
- [https://docs.cloud.google.com/data-fusion/docs/support/billing-questions](https://docs.cloud.google.com/data-fusion/docs/support/billing-questions)

## Supporting Pages

### Cloud Data Fusion release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/data-fusion/docs/release-notes](https://docs.cloud.google.com/data-fusion/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- This release includes the following change: Fixed an issue in the SAP Table Reader where running in Snapshot mode caused the Clean Up RFM process to generate an unnecessary Job abort failed error message in the detail logs.
- August 09, 2023 Fixed In the SAP Table Batch Source plugin version 0.10.0, fixed an issue causing failed data pipeline runs when you clicked the Take a snapshot toggle because the FIELDS parameters weren't exported.
- January 29, 2026 Feature The SAP Table Reader plugin version 0.11.5 is available in Cloud Data Fusion version 6.10 and later.
- For MySQL Replication sources , fixed an issue that caused Replication jobs to fail during the initial snapshot, if the job included a runtime argument with the Debezium property, binary-handling-mode ( CDAP-20121 ).

### "Use Salesforce batch source plugin to analyze leads data in BigQuery \_\

- URL: [https://docs.cloud.google.com/data-fusion/docs/tutorials/connect-salesforce-to-bq](https://docs.cloud.google.com/data-fusion/docs/tutorials/connect-salesforce-to-bq)
- Source ID: `site-iam-reference`
- Final score: 60
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Extract data from the Salesforce batch source plugin On the Salesforce plugin properties page, in the SOQL query section, enter the following query: Select LastName , FirstName , Company , Email , Phone , LeadSource , Industry , OwnerId , CreatedDate , LastModifiedDate , LastActivityDate from Lead where Status like '%Open%' This query fetches the details of a potential lead required to run a campaign from the sObject Lead .
- To filter the records for a specific date or time for running the campaign, use the following fields: Last modified after Last modified before Duration Offset Transform data using Wrangler plugin Use the Wrangler plugin in Cloud Data Fusion to clean and enrich your data: Go back to the Studio page.
- Verify the data extraction and ingestion In the Google Cloud console, go to the BigQuery page: Go to BigQuery Search for the dataset Salesforce Leads and the table name Incoming Open Leads to view the extracted records.
- Before creating a targeted campaign, to understand your target audience better, you want to use the Salesforce batch source plugin in Cloud Data Fusion to extract specific leads data.

### Support Hub | Google Cloud

- URL: [https://docs.cloud.google.com/data-fusion/docs/support/billing-questions](https://docs.cloud.google.com/data-fusion/docs/support/billing-questions)
- Source ID: `site-docs-root`
- Final score: 48
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Google Cloud partners Learn about the ecosystem and resources. close Overview arrow forward Solutions arrow forward Products arrow forward Pricing arrow forward Resources arrow forward Docs Support Console Accelerate your digital transformation Learn more Key benefits Why Google Cloud AI and ML Multicloud Global infrastructure Data Cloud Modern Infrastructure Cloud Security Productivity and collaboration Reports and insights Executive insights Analyst reports Whitepapers Customer stories Industry Solutions Retail Consumer Packaged Goods Financial Services Healthcare and Life Sciences Media and Entertainment Telecommunications Games Manufacturing Supply Chain and Logistics Government Education See all industry solutions See all solutions Application Modernization CAMP Modernize Traditional Applications Migrate from PaaS: Cloud Foundry, Openshift Migrate from Mainframe Modernize Software Delivery DevOps Best Practices SRE Principles Platform Engineering Run Applications at the Edge Architect for Multicloud Go Serverless Artificial Intelligence Customer Engagement Suite with Google AI Document AI Vertex AI Search for commerce Google Cloud with Gemini Generative AI on Google Cloud APIs and Applications New Business Channels Using APIs Unlocking Legacy Applications Using APIs Open Banking APIx Data Analytics Data Migration Data Lakehouse Real-time Analytics Marketing Analytics Datasets Business Intelligence AI for Data Analytics Geospatial Analytics Databases Database Migration Database Modernization Databases for Games Google Cloud Databases Migrate Oracle workloads to Google Cloud Open Source Databases SQL Server on Google Cloud Gemini for Databases Infrastructure Modernization Application Migration SAP on Google Cloud High Performance Computing Windows on Google Cloud Data Center Migration Active Assist Virtual Desktops Rapid Migration and Modernization Program Backup and Disaster Recovery Red Hat on Google Cloud Cross-Cloud Network Observability Productivity and Collaboration Google Workspace Google Workspace Essentials Cloud Identity Chrome Enterprise Security Agentic SOC Web App and API Protection Security and Resilience Framework Risk and compliance as code (RCaC) Software Supply Chain Security Security Foundation Google Cloud Cybershield™ Startups and SMB Startup Program Small and Medium Business Software as a Service Featured Products Compute Engine Cloud Storage BigQuery Cloud Run Google Kubernetes Engine Vertex AI Looker Apigee API Management Cloud SQL Gemini Enterprise Cloud CDN See all products (100+) AI and Machine Learning Vertex AI Platform Vertex AI Studio Vertex AI Agent Builder Conversational Agents Vertex AI Search Speech-to-Text Text-to-Speech Translation AI Gemini Enterprise Vision AI Contact Center as a Service See all AI and machine learning products Business Intelligence Looker Looker Studio Compute Compute Engine App Engine Cloud GPUs Migrate to Virtual Machines Spot VMs Batch Sole-Tenant Nodes Bare Metal Recommender VMware Engine Cloud Run See all compute products Containers Google Kubernetes Engine Cloud Run Cloud Build Artifact Registry Cloud Code Cloud Deploy Migrate to Containers Deep Learning Containers Knative Data Analytics BigQuery Looker Dataflow Pub/Sub Dataproc Google Cloud Serverless for Apache Spark Cloud Composer BigLake Dataplex Universal Catalog BigQuery Migration Services Managed Service for Apache Kafka See all data analytics products Databases AlloyDB for PostgreSQL Cloud SQL Firestore Spanner Bigtable Datastream Database Migration Service Bare Metal Solution Memorystore Developer Tools Artifact Registry Cloud Code Cloud Build Cloud Deploy Cloud Deployment Manager Cloud SDK Cloud Scheduler Cloud Source Repositories Infrastructure Manager Cloud Workstations Gemini Code Assist See all developer tools Distributed Cloud Google Distributed Cloud Connected Google Distributed Cloud Air-gapped Hybrid and Multicloud Google Kubernetes Engine Apigee API Management Migrate to Containers Cloud Build Observability Cloud Service Mesh Google Distributed Cloud Industry Specific Anti Money Laundering AI Cloud Healthcare API Device Connect for Fitbit Telecom Network Automation Telecom Data Fabric Telecom Subscriber Insights Spectrum Access System (SAS) Integration Services Application Integration Workflows Apigee API Management Cloud Tasks Cloud Scheduler Dataproc Cloud Data Fusion Cloud Composer Pub/Sub Eventarc Management Tools Cloud Shell Cloud console Cloud Endpoints Cloud IAM Cloud APIs Service Catalog Cost Management Observability Carbon Footprint Config Connector Active Assist See all management tools Maps and Geospatial Earth Engine Google Maps Platform Media Services Cloud CDN Live Stream API OpenCue Transcoder API Video Stitcher API Migration Migration Center Application Migration Migrate to Virtual Machines Cloud Foundation Toolkit Database Migration Service Migrate to Containers BigQuery Migration Services Rapid Migration and Modernization Program Transfer Appliance Storage Transfer Service VMware Engine Mixed Reality Immersive Stream for XR Networking Cloud Armor Cloud CDN and Media CDN Cloud DNS Cloud Load Balancing Cloud NAT Cloud Connectivity Network Connectivity Center Network Intelligence Center Network Service Tiers Virtual Private Cloud Private Service Connect See all networking products Operations Cloud Logging Cloud Monitoring Error Reporting Managed Service for Prometheus Cloud Trace Cloud Profiler Cloud Quotas Productivity and Collaboration AppSheet Gemini Enterprise Google Workspace Google Workspace Essentials Cloud Identity Chrome Enterprise Security and Identity Cloud IAM Sensitive Data Protection Mandiant Managed Defense Google Threat Intelligence Security Command Center Cloud Key Management Mandiant Incident Response Chrome Enterprise Premium Assured Workloads Google Security Operations Mandiant Consulting See all security and identity products Serverless Cloud Run Cloud Functions App Engine Workflows API Gateway Storage Cloud Storage Block Storage Filestore Persistent Disk Cloud Storage for Firebase Local SSD Storage Transfer Service Google Cloud Managed Lustre Google Cloud NetApp Volumes Backup and DR Service Web3 Blockchain Node Engine Blockchain RPC Save money with our transparent approach to pricing Request a quote Pricing overview and tools Google Cloud pricing Pricing calculator Google Cloud free tier Cost optimization framework Cost management tools Product-specific Pricing Compute Engine Cloud SQL Google Kubernetes Engine Cloud Storage BigQuery See full price list with 100+ products Learn & build Google Cloud Free Program Solution Generator Quickstarts Blog Learning Hub Google Cloud certification Cloud computing basics Cloud Architecture Center Connect Innovators Developer Center Events and webinars Google Cloud Community Consulting and Partners Google Cloud Consulting Google Cloud Marketplace Find a partner Google Cloud partners Why Google Choosing Google Cloud Trust and security Modern Infrastructure Cloud Multicloud Global infrastructure Locations Customers and case studies Analyst reports Whitepapers Blog Products and pricing Google Cloud pricing Google Workspace pricing See all products Solutions Infrastructure modernization Databases Application modernization Smart analytics Artificial Intelligence Security Productivity & work transformation Industry solutions DevOps solutions Small business solutions See all solutions Resources Google Cloud Affiliate Program Google Cloud documentation Google Cloud quickstarts Google Cloud Marketplace Learn about cloud computing Support Code samples Cloud Architecture Center Training Certifications Google for Developers Google Cloud for Startups System status Release Notes Engage Contact sales Find a Partner Become a Partner Events Podcasts Developer Center Press Corner Google Cloud on YouTube Google Cloud Tech on YouTube Follow on X Join User Research We're hiring.
- Infrastructure Modernization Migrate quickly with solutions for SAP, VMware, Windows, Oracle, and other workloads.
- Customer stories Explore case studies and videos. close Industry Solutions Application Modernization Artificial Intelligence APIs and Applications Data Analytics Databases Infrastructure Modernization Productivity and Collaboration Security Startups and SMB See all solutions Industry Solutions Reduce cost, increase operational agility, and capture new market opportunities.
- See all industry solutions Application Modernization Assess, plan, implement, and measure software practices and capabilities to modernize and simplify your organization’s business application portfolios.

