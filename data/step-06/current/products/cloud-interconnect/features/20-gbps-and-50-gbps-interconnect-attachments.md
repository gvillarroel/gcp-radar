---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:29.574Z"
product_name: "Cloud Interconnect"
product_slug: "cloud-interconnect"
feature_name: "20 Gbps and 50 Gbps interconnect attachments"
feature_slug: "20-gbps-and-50-gbps-interconnect-attachments"
latest_feature_date: "2019-10-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/quotas"
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/partner-cci-for-oci-overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/interconnect/sla"
keywords:
  - "20"
  - "gbps"
  - "and"
  - "50"
  - "interconnect"
  - "attachments"
  - "dedicated"
  - "partner"
---

# 20 Gbps and 50 Gbps interconnect attachments

Product: Cloud Interconnect
Coverage: MEDIUM

## Step 02 Summary

Dedicated Interconnect and Partner Interconnect support 20 Gbps and 50 Gbps interconnect attachments.

## Extended Definition

Dedicated Interconnect and Partner Interconnect support 20 Gbps and 50 Gbps interconnect attachments.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/quotas](https://docs.cloud.google.com/network-connectivity/docs/interconnect/quotas)
- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/partner-cci-for-oci-overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/partner-cci-for-oci-overview)
- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/overview)
- [https://docs.cloud.google.com/network-connectivity/docs/interconnect/sla](https://docs.cloud.google.com/network-connectivity/docs/interconnect/sla)

## Supporting Pages

### Quotas and limits \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/quotas](https://docs.cloud.google.com/network-connectivity/docs/interconnect/quotas)
- Source ID: `site-docs-root`
- Final score: 253
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Maximum bandwidth per VLAN attachment Dedicated Interconnect, Cross-Cloud Interconnect: Capacities from 50 Mbps to 400 Gbps Partner Interconnect, Cross-Site Interconnect: Capacities from 50 Mbps to 100 Gbps The maximum possible bandwidth per VLAN attachment depends on the bandwidth capacity that you order.
- This includes VLAN attachments for both Dedicated Interconnect and Partner Interconnect.
- 10-Gbps increments up to eight circuits (80 Gbps) to increase the maximum total bandwidth of all VLAN attachments that use the Cloud Interconnect connection to 80 Gbps.
- Cloud Router limits Because Dedicated Interconnect and Partner Interconnect require Cloud Router, all the Cloud Router quotas and limits apply.

### Partner Cross-Cloud Interconnect for OCI overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/partner-cci-for-oci-overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/partner-cci-for-oci-overview)
- Source ID: `site-docs-root`
- Final score: 247
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Comparison to Cross-Cloud Interconnect While Partner Cross-Cloud Interconnect for OCI lets you connect any Google Cloud and OCI resources privately in available paired locations, Cross-Cloud Interconnect lets you turn up dedicated connectivity between Google Cloud and OCI.
- Provisioning To provision a Partner Cross-Cloud Interconnect for OCI connection with OCI, you start by selecting your paired location, and then ordering Partner Interconnect attachments in the appropriate Google Cloud locations.
- Partner Cross-Cloud Interconnect for OCI always establishes the BGP session between your OCI DRG and the Cloud Router over the VLAN attachments and FastConnect virtual circuits directly.
- Lets you provision connections on demand, with variable speed options for maximum flexibility (1 Gbps, 2 Gbps, 5 Gbps, 10 Gbps, 20 Gbps, and 50 Gbps).

### Cloud Interconnect overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/overview)
- Source ID: `site-docs-reference`
- Final score: 243
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following reserved IP address ranges are not supported: Reserved IPv4 address ranges: 0.0.0.0/8 10.0.0.0/8 100.64.0.0/10 127.0.0.0/8 172.16.0.0/12 192.0.0.0/24 192.0.2.0/24 192.88.99.0/24 192.168.0.0/16 198.18.0.0/15 198.51.100.0/24 203.0.113.0/24 224.0.0.0/4 240.0.0.0/4 Reserved IPv6 address ranges: ::ffff:0:0/96 64:ff9b::/96 64:ff9b:1::/48 100::/64 2001:/32 2001:20::/28 2001:db8::/32 fe80::/10 2002::/16 3fff::/20 5f00::/16 fc00::/7 fe80::/10 ff00::/8 Configure custom IP address ranges To create VLAN attachments with custom IP address ranges, see the following pages: Dedicated Interconnect: configure custom IP address ranges Layer 2 Partner Interconnect connections: use custom IP address ranges with Layer 2 connections Layer 3 Partner Interconnect connections: use custom IP address ranges with Layer 3 connections Cross-Cloud Interconnect: Alibaba Cloud: configure custom IP address ranges Amazon Web Services (AWS): configure custom IP address ranges Microsoft Azure: configure custom IP address ranges Oracle Cloud Infrastructure: configure custom IP address ranges Support for GRE traffic Cloud Interconnect supports GRE traffic.
- For Partner Interconnect, the following connection capacities for each VLAN attachment are supported: 50-Mbps to 50-Gbps VLAN attachments.
- Custom IP address ranges When you create a VLAN attachment for Dedicated Interconnect, Partner Interconnect, or Cross-Cloud Interconnect, you can configure custom IP address ranges for the Cloud Router and customer router ends of the attachment.
- Dedicated Interconnect, Partner Interconnect, Direct Peering , and Carrier Peering can all help you optimize egress traffic from your VPC network and reduce your egress costs.

### Cloud Dedicated and Partner Interconnect SLA | Google Cloud

- URL: [https://docs.cloud.google.com/network-connectivity/docs/interconnect/sla](https://docs.cloud.google.com/network-connectivity/docs/interconnect/sla)
- Source ID: `site-docs-root`
- Final score: 239
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Dedicated and Partner Interconnect SLA Google Cloud Back to Google Cloud Terms Directory Current Cloud Dedicated and Partner Interconnect Service Level Agreement (SLA) During the Term of the agreement under which Google has agreed to provide Google Cloud Platform to Customer (as applicable, the "Agreement"), the Covered Service will provide a Monthly Uptime Percentage as follows (the "Service Level Objective" or "SLO"): Covered Service Monthly Uptime Percentage Interconnect service for production-level applications =99.99% Interconnect service for non-critical applications =99.9% For Dedicated Interconnect, a single Interconnect connection (LACP bundle) or multiple Interconnect connections in a single edge availability domain No SLA For Partner Interconnect, a single VLAN attachment or multiple VLAN attachments in a single edge availability domain No SLA Covered Service Monthly Uptime Percentage Interconnect service for production-level applications =99.99% Interconnect service for non-critical applications =99.9% For Dedicated Interconnect, a single Interconnect connection (LACP bundle) or multiple Interconnect connections in a single edge availability domain No SLA For Partner Interconnect, a single VLAN attachment or multiple VLAN attachments in a single edge availability domain No SLA If Google does not meet the SLO, and if Customer meets its obligations under this SLA, Customer will be eligible to receive the Financial Credits described below.
- Definitions The following definitions apply to the SLA: " Covered Service " means Dedicated Interconnect and Partner Interconnect. " Cloud Interconnect Partner " has the meaning stated at https://cloud.google.com/terms/service-terms . " Dedicated Interconnect " means the applicable service described at https://cloud.google.com/terms/services . " Partner Interconnect " means the applicable service described at https://cloud.google.com/terms/services . " Downtime " means a properly configured Covered Service is not able to serve any traffic directed to it. " Downtime Period " means a period of 120 or more consecutive seconds of Downtime.
- Google Cloud partners Learn about the ecosystem and resources. close Overview arrow forward Solutions arrow forward Products arrow forward Pricing arrow forward Resources arrow forward Docs Support Console Accelerate your digital transformation Learn more Key benefits Why Google Cloud AI and ML Multicloud Global infrastructure Data Cloud Modern Infrastructure Cloud Security Productivity and collaboration Reports and insights Executive insights Analyst reports Whitepapers Customer stories Industry Solutions Retail Consumer Packaged Goods Financial Services Healthcare and Life Sciences Media and Entertainment Telecommunications Games Manufacturing Supply Chain and Logistics Government Education See all industry solutions See all solutions Application Modernization CAMP Modernize Traditional Applications Migrate from PaaS: Cloud Foundry, Openshift Migrate from Mainframe Modernize Software Delivery DevOps Best Practices SRE Principles Platform Engineering Run Applications at the Edge Architect for Multicloud Go Serverless Artificial Intelligence Customer Engagement Suite with Google AI Document AI Vertex AI Search for commerce Google Cloud with Gemini Generative AI on Google Cloud APIs and Applications New Business Channels Using APIs Unlocking Legacy Applications Using APIs Open Banking APIx Data Analytics Data Migration Data Lakehouse Real-time Analytics Marketing Analytics Datasets Business Intelligence AI for Data Analytics Geospatial Analytics Databases Database Migration Database Modernization Databases for Games Google Cloud Databases Migrate Oracle workloads to Google Cloud Open Source Databases SQL Server on Google Cloud Gemini for Databases Infrastructure Modernization Application Migration SAP on Google Cloud High Performance Computing Windows on Google Cloud Data Center Migration Active Assist Virtual Desktops Rapid Migration and Modernization Program Backup and Disaster Recovery Red Hat on Google Cloud Cross-Cloud Network Observability Productivity and Collaboration Google Workspace Google Workspace Essentials Cloud Identity Chrome Enterprise Security Agentic SOC Web App and API Protection Security and Resilience Framework Risk and compliance as code (RCaC) Software Supply Chain Security Security Foundation Google Cloud Cybershield™ Startups and SMB Startup Program Small and Medium Business Software as a Service Featured Products Compute Engine Cloud Storage BigQuery Cloud Run Google Kubernetes Engine Vertex AI Looker Apigee API Management Cloud SQL Gemini Enterprise Cloud CDN See all products (100+) AI and Machine Learning Vertex AI Platform Vertex AI Studio Vertex AI Agent Builder Conversational Agents Vertex AI Search Speech-to-Text Text-to-Speech Translation AI Gemini Enterprise Vision AI Contact Center as a Service See all AI and machine learning products Business Intelligence Looker Looker Studio Compute Compute Engine App Engine Cloud GPUs Migrate to Virtual Machines Spot VMs Batch Sole-Tenant Nodes Bare Metal Recommender VMware Engine Cloud Run See all compute products Containers Google Kubernetes Engine Cloud Run Cloud Build Artifact Registry Cloud Code Cloud Deploy Migrate to Containers Deep Learning Containers Knative Data Analytics BigQuery Looker Dataflow Pub/Sub Dataproc Google Cloud Serverless for Apache Spark Cloud Composer BigLake Dataplex Universal Catalog BigQuery Migration Services Managed Service for Apache Kafka See all data analytics products Databases AlloyDB for PostgreSQL Cloud SQL Firestore Spanner Bigtable Datastream Database Migration Service Bare Metal Solution Memorystore Developer Tools Artifact Registry Cloud Code Cloud Build Cloud Deploy Cloud Deployment Manager Cloud SDK Cloud Scheduler Cloud Source Repositories Infrastructure Manager Cloud Workstations Gemini Code Assist See all developer tools Distributed Cloud Google Distributed Cloud Connected Google Distributed Cloud Air-gapped Hybrid and Multicloud Google Kubernetes Engine Apigee API Management Migrate to Containers Cloud Build Observability Cloud Service Mesh Google Distributed Cloud Industry Specific Anti Money Laundering AI Cloud Healthcare API Device Connect for Fitbit Telecom Network Automation Telecom Data Fabric Telecom Subscriber Insights Spectrum Access System (SAS) Integration Services Application Integration Workflows Apigee API Management Cloud Tasks Cloud Scheduler Dataproc Cloud Data Fusion Cloud Composer Pub/Sub Eventarc Management Tools Cloud Shell Cloud console Cloud Endpoints Cloud IAM Cloud APIs Service Catalog Cost Management Observability Carbon Footprint Config Connector Active Assist See all management tools Maps and Geospatial Earth Engine Google Maps Platform Media Services Cloud CDN Live Stream API OpenCue Transcoder API Video Stitcher API Migration Migration Center Application Migration Migrate to Virtual Machines Cloud Foundation Toolkit Database Migration Service Migrate to Containers BigQuery Migration Services Rapid Migration and Modernization Program Transfer Appliance Storage Transfer Service VMware Engine Mixed Reality Immersive Stream for XR Networking Cloud Armor Cloud CDN and Media CDN Cloud DNS Cloud Load Balancing Cloud NAT Cloud Connectivity Network Connectivity Center Network Intelligence Center Network Service Tiers Virtual Private Cloud Private Service Connect See all networking products Operations Cloud Logging Cloud Monitoring Error Reporting Managed Service for Prometheus Cloud Trace Cloud Profiler Cloud Quotas Productivity and Collaboration AppSheet Gemini Enterprise Google Workspace Google Workspace Essentials Cloud Identity Chrome Enterprise Security and Identity Cloud IAM Sensitive Data Protection Mandiant Managed Defense Google Threat Intelligence Security Command Center Cloud Key Management Mandiant Incident Response Chrome Enterprise Premium Assured Workloads Google Security Operations Mandiant Consulting See all security and identity products Serverless Cloud Run Cloud Functions App Engine Workflows API Gateway Storage Cloud Storage Block Storage Filestore Persistent Disk Cloud Storage for Firebase Local SSD Storage Transfer Service Google Cloud Managed Lustre Google Cloud NetApp Volumes Backup and DR Service Web3 Blockchain Node Engine Blockchain RPC Save money with our transparent approach to pricing Request a quote Pricing overview and tools Google Cloud pricing Pricing calculator Google Cloud free tier Cost optimization framework Cost management tools Product-specific Pricing Compute Engine Cloud SQL Google Kubernetes Engine Cloud Storage BigQuery See full price list with 100+ products Learn & build Google Cloud Free Program Solution Generator Quickstarts Blog Learning Hub Google Cloud certification Cloud computing basics Cloud Architecture Center Connect Innovators Developer Center Events and webinars Google Cloud Community Consulting and Partners Google Cloud Consulting Google Cloud Marketplace Find a partner Google Cloud partners Why Google Choosing Google Cloud Trust and security Modern Infrastructure Cloud Multicloud Global infrastructure Locations Customers and case studies Analyst reports Whitepapers Blog Products and pricing Google Cloud pricing Google Workspace pricing See all products Solutions Infrastructure modernization Databases Application modernization Smart analytics Artificial Intelligence Security Productivity & work transformation Industry solutions DevOps solutions Small business solutions See all solutions Resources Google Cloud Affiliate Program Google Cloud documentation Google Cloud quickstarts Google Cloud Marketplace Learn about cloud computing Support Code samples Cloud Architecture Center Training Certifications Google for Developers Google Cloud for Startups System status Release Notes Engage Contact sales Find a Partner Become a Partner Events Podcasts Developer Center Press Corner Google Cloud on YouTube Google Cloud Tech on YouTube Follow on X Join User Research We're hiring.
- If the Agreement authorizes the resale or supply of Google Cloud Platform under a Google Cloud partner or reseller program, then all references to Customer in this SLA mean Partner or Reseller (as applicable), and any Financial Credit(s) will only apply for impacted Partner or Reseller order(s) under the Agreement.

