---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:04:57.771Z"
product_name: "Cloud Data Fusion"
product_slug: "cloud-data-fusion"
feature_name: "GET /v3/system/services/.../logs API"
feature_slug: "get-v3-system-services-logs-api"
latest_feature_date: "2025-03-17"
deprecation_date: "2025-03-17"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/data-fusion/docs/release-notes"
  - "https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference"
  - "https://docs.cloud.google.com/data-fusion/docs/support/getting-support"
keywords:
  - "get"
  - "v3"
  - "system"
  - "services"
  - "logs"
  - "api"
  - "the"
  - "download"
---

# GET /v3/system/services/.../logs API

Product: Cloud Data Fusion
Coverage: LOW

## Step 02 Summary

The system service logs download API was deprecated for retrieving system service log data; deprecated on 2025-03-17.

## Extended Definition

The system service logs download API was deprecated for retrieving system service log data; deprecated on 2025-03-17.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/data-fusion/docs/release-notes](https://docs.cloud.google.com/data-fusion/docs/release-notes)
- [https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference](https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference)
- [https://docs.cloud.google.com/data-fusion/docs/support/getting-support](https://docs.cloud.google.com/data-fusion/docs/support/getting-support)

## Supporting Pages

### Cloud Data Fusion release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/data-fusion/docs/release-notes](https://docs.cloud.google.com/data-fusion/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Deprecated The following APIs for downloading system service and pipeline run logs are deprecated in 6.11.0: GET /v3/namespaces/<NAMESPACE ID>/apps/<APP ID>/<PROGRAM TYPE>/<PROGRAM ID>/logs GET /v3/system/services/<SERVICE ID>/logs Deprecated The ability to retrieve all applications without pagination using the GET /v3/namespaces/<NAMESPACE ID>/apps endpoint is deprecated in 6.11.0.
- This release includes the following feature: InstanceV3 monitored-resource: Introduced datafusion.googleapis.com/InstanceV3 as the default monitored resource for instance-level metrics and system service logs.
- Fixed a number of system service unavailability cases resulting in the message "Necessary services are experiencing intermittent problems" and API call failures.
- Change To support the Private Service Connect integration, the following permissions are added to the Cloud Data Fusion API Service Agent role: compute.networkAttachments.get compute.networkAttachments.update compute.networkAttachments.list Fixed Fixed in Cloud Data Fusion 6.10.0: Fixed an issue in the Postgres DB plugin causing macros to be unsupported for database configuration ( PLUGIN-1681 ).

### CDAP reference \_|\_ Cloud Data Fusion \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference](https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference)
- Source ID: `site-api-reference`
- Final score: 128
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- GET -H "Authorization: Bearer ${AUTH TOKEN}" "${CDAP ENDPOINT}/v3/namespaces/ namespace-id /apps/ pipeline-name /workflows/DataPipelineWorkflow/runs/ run-id /logs?start= start-ts &stop= stop-ts " Parameter Description / value namespace-id The namespace ID must either be the name of the namespace when it was created or default , which is the name of the default namespace. pipeline-name Your pipeline name. run-id Relevant only if you want to view logs of a specific pipeline run.
- GET -H "Authorization: Bearer ${AUTH TOKEN}" "${CDAP ENDPOINT}/v3/namespaces/ namespace-id /apps/ pipeline-name /workflows/DataPipelineWorkflow/logs?start= start-ts &stop= stop-ts To view logs of a specific run of a batch pipeline, submit the following HTTP GET request.
- In the following example, BigQuery or GoogleCloudStorage are possible values for pipeline-stage . { "stages": [ { "name": "BigQuery", ... }, { "name": "GoogleCloudStorage", ... }, ... ], ... } metrics can be any of: records.in records.out records.error process.time.total process.time.avg process.time.max process.time.min process.time.stddev For example, the following query gets the records.out and process.time.avg metrics for the BigQuery stage of the batch pipeline, batch-pipeline . { "query": { "tags": { "namespace": "default", "app": "batch-pipeline", "workflow": "DataPipelineWorkflow", "run": "81e3d583-f68b-11e9-aba0-0242b9f29569" }, "metrics": [ "user.BigQuery.records.out", "user.BigQuery.process.time.avg" ], "timeRange": { "aggregate": true } } } For more information, see CDAP Metrics Microservices and Cloud Data Fusion flow control .
- GET -H "Authorization: Bearer ${AUTH TOKEN}" "${CDAP ENDPOINT}/v3/namespaces/ namespace-id /apps/ pipeline-name /workflows/DataPipelineWorkflow/runs Records of a batch pipeline run GET -H "Authorization: Bearer ${AUTH TOKEN}" "${CDAP ENDPOINT}/v3/namespaces/ namespace-id /apps/ pipeline-name /workflows/DataPipelineWorkflow/runs/ run-id Parameter Description namespace-id The namespace ID must either be the name of the namespace when it was created or default , which is the name of the default namespace. pipeline-name run-id To find the run ID, see Batch pipeline run records , which returns a list of run IDs.

### Support Hub | Google Cloud

- URL: [https://docs.cloud.google.com/data-fusion/docs/support/getting-support](https://docs.cloud.google.com/data-fusion/docs/support/getting-support)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Google Cloud partners Learn about the ecosystem and resources. close Overview arrow forward Solutions arrow forward Products arrow forward Pricing arrow forward Resources arrow forward Docs Support Console Accelerate your digital transformation Learn more Key benefits Why Google Cloud AI and ML Multicloud Global infrastructure Data Cloud Modern Infrastructure Cloud Security Productivity and collaboration Reports and insights Executive insights Analyst reports Whitepapers Customer stories Industry Solutions Retail Consumer Packaged Goods Financial Services Healthcare and Life Sciences Media and Entertainment Telecommunications Games Manufacturing Supply Chain and Logistics Government Education See all industry solutions See all solutions Application Modernization CAMP Modernize Traditional Applications Migrate from PaaS: Cloud Foundry, Openshift Migrate from Mainframe Modernize Software Delivery DevOps Best Practices SRE Principles Platform Engineering Run Applications at the Edge Architect for Multicloud Go Serverless Artificial Intelligence Customer Engagement Suite with Google AI Document AI Vertex AI Search for commerce Google Cloud with Gemini Generative AI on Google Cloud APIs and Applications New Business Channels Using APIs Unlocking Legacy Applications Using APIs Open Banking APIx Data Analytics Data Migration Data Lakehouse Real-time Analytics Marketing Analytics Datasets Business Intelligence AI for Data Analytics Geospatial Analytics Databases Database Migration Database Modernization Databases for Games Google Cloud Databases Migrate Oracle workloads to Google Cloud Open Source Databases SQL Server on Google Cloud Gemini for Databases Infrastructure Modernization Application Migration SAP on Google Cloud High Performance Computing Windows on Google Cloud Data Center Migration Active Assist Virtual Desktops Rapid Migration and Modernization Program Backup and Disaster Recovery Red Hat on Google Cloud Cross-Cloud Network Observability Productivity and Collaboration Google Workspace Google Workspace Essentials Cloud Identity Chrome Enterprise Security Agentic SOC Web App and API Protection Security and Resilience Framework Risk and compliance as code (RCaC) Software Supply Chain Security Security Foundation Google Cloud Cybershield™ Startups and SMB Startup Program Small and Medium Business Software as a Service Featured Products Compute Engine Cloud Storage BigQuery Cloud Run Google Kubernetes Engine Vertex AI Looker Apigee API Management Cloud SQL Gemini Enterprise Cloud CDN See all products (100+) AI and Machine Learning Vertex AI Platform Vertex AI Studio Vertex AI Agent Builder Conversational Agents Vertex AI Search Speech-to-Text Text-to-Speech Translation AI Gemini Enterprise Vision AI Contact Center as a Service See all AI and machine learning products Business Intelligence Looker Looker Studio Compute Compute Engine App Engine Cloud GPUs Migrate to Virtual Machines Spot VMs Batch Sole-Tenant Nodes Bare Metal Recommender VMware Engine Cloud Run See all compute products Containers Google Kubernetes Engine Cloud Run Cloud Build Artifact Registry Cloud Code Cloud Deploy Migrate to Containers Deep Learning Containers Knative Data Analytics BigQuery Looker Dataflow Pub/Sub Dataproc Google Cloud Serverless for Apache Spark Cloud Composer BigLake Dataplex Universal Catalog BigQuery Migration Services Managed Service for Apache Kafka See all data analytics products Databases AlloyDB for PostgreSQL Cloud SQL Firestore Spanner Bigtable Datastream Database Migration Service Bare Metal Solution Memorystore Developer Tools Artifact Registry Cloud Code Cloud Build Cloud Deploy Cloud Deployment Manager Cloud SDK Cloud Scheduler Cloud Source Repositories Infrastructure Manager Cloud Workstations Gemini Code Assist See all developer tools Distributed Cloud Google Distributed Cloud Connected Google Distributed Cloud Air-gapped Hybrid and Multicloud Google Kubernetes Engine Apigee API Management Migrate to Containers Cloud Build Observability Cloud Service Mesh Google Distributed Cloud Industry Specific Anti Money Laundering AI Cloud Healthcare API Device Connect for Fitbit Telecom Network Automation Telecom Data Fabric Telecom Subscriber Insights Spectrum Access System (SAS) Integration Services Application Integration Workflows Apigee API Management Cloud Tasks Cloud Scheduler Dataproc Cloud Data Fusion Cloud Composer Pub/Sub Eventarc Management Tools Cloud Shell Cloud console Cloud Endpoints Cloud IAM Cloud APIs Service Catalog Cost Management Observability Carbon Footprint Config Connector Active Assist See all management tools Maps and Geospatial Earth Engine Google Maps Platform Media Services Cloud CDN Live Stream API OpenCue Transcoder API Video Stitcher API Migration Migration Center Application Migration Migrate to Virtual Machines Cloud Foundation Toolkit Database Migration Service Migrate to Containers BigQuery Migration Services Rapid Migration and Modernization Program Transfer Appliance Storage Transfer Service VMware Engine Mixed Reality Immersive Stream for XR Networking Cloud Armor Cloud CDN and Media CDN Cloud DNS Cloud Load Balancing Cloud NAT Cloud Connectivity Network Connectivity Center Network Intelligence Center Network Service Tiers Virtual Private Cloud Private Service Connect See all networking products Operations Cloud Logging Cloud Monitoring Error Reporting Managed Service for Prometheus Cloud Trace Cloud Profiler Cloud Quotas Productivity and Collaboration AppSheet Gemini Enterprise Google Workspace Google Workspace Essentials Cloud Identity Chrome Enterprise Security and Identity Cloud IAM Sensitive Data Protection Mandiant Managed Defense Google Threat Intelligence Security Command Center Cloud Key Management Mandiant Incident Response Chrome Enterprise Premium Assured Workloads Google Security Operations Mandiant Consulting See all security and identity products Serverless Cloud Run Cloud Functions App Engine Workflows API Gateway Storage Cloud Storage Block Storage Filestore Persistent Disk Cloud Storage for Firebase Local SSD Storage Transfer Service Google Cloud Managed Lustre Google Cloud NetApp Volumes Backup and DR Service Web3 Blockchain Node Engine Blockchain RPC Save money with our transparent approach to pricing Request a quote Pricing overview and tools Google Cloud pricing Pricing calculator Google Cloud free tier Cost optimization framework Cost management tools Product-specific Pricing Compute Engine Cloud SQL Google Kubernetes Engine Cloud Storage BigQuery See full price list with 100+ products Learn & build Google Cloud Free Program Solution Generator Quickstarts Blog Learning Hub Google Cloud certification Cloud computing basics Cloud Architecture Center Connect Innovators Developer Center Events and webinars Google Cloud Community Consulting and Partners Google Cloud Consulting Google Cloud Marketplace Find a partner Google Cloud partners Why Google Choosing Google Cloud Trust and security Modern Infrastructure Cloud Multicloud Global infrastructure Locations Customers and case studies Analyst reports Whitepapers Blog Products and pricing Google Cloud pricing Google Workspace pricing See all products Solutions Infrastructure modernization Databases Application modernization Smart analytics Artificial Intelligence Security Productivity & work transformation Industry solutions DevOps solutions Small business solutions See all solutions Resources Google Cloud Affiliate Program Google Cloud documentation Google Cloud quickstarts Google Cloud Marketplace Learn about cloud computing Support Code samples Cloud Architecture Center Training Certifications Google for Developers Google Cloud for Startups System status Release Notes Engage Contact sales Find a Partner Become a Partner Events Podcasts Developer Center Press Corner Google Cloud on YouTube Google Cloud Tech on YouTube Follow on X Join User Research We're hiring.
- Support for related products Apigee Learn about popular topics, find resources, and get in touch with the Apigee support team.
- Sign up for technical support Review the available services and sign up today to get tailored technical support.
- Get help through a support case Administrators can submit a new case or review status of a current case in the Google Cloud console.

