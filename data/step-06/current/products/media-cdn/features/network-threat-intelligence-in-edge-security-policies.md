---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:51.022Z"
product_name: "Media CDN"
product_slug: "media-cdn"
feature_name: "Network Threat Intelligence in Edge Security Policies"
feature_slug: "network-threat-intelligence-in-edge-security-policies"
latest_feature_date: "2025-09-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/media-cdn/docs/logging"
  - "https://docs.cloud.google.com/media-cdn/docs/getting-support"
  - "https://docs.cloud.google.com/media-cdn/docs/overview"
  - "https://docs.cloud.google.com/media-cdn/docs/origins"
keywords:
  - "network"
  - "threat"
  - "intelligence"
  - "in"
  - "edge"
  - "security"
  - "policies"
  - "media"
---

# Network Threat Intelligence in Edge Security Policies

Product: Media CDN
Coverage: MEDIUM

## Step 02 Summary

Media CDN edge cache services can use Network Threat Intelligence from Cloud Armor to identify and block known malicious IP addresses and networks; Media CDN edge cache services can use Network Threat Intelligence from Cloud Armor to identify and block known malicious IP addresses and networks.

## Extended Definition

Media CDN edge cache services can use Network Threat Intelligence from Cloud Armor to identify and block known malicious IP addresses and networks; Media CDN edge cache services can use Network Threat Intelligence from Cloud Armor to identify and block known malicious IP addresses and networks.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/media-cdn/docs/logging](https://docs.cloud.google.com/media-cdn/docs/logging)
- [https://docs.cloud.google.com/media-cdn/docs/getting-support](https://docs.cloud.google.com/media-cdn/docs/getting-support)
- [https://docs.cloud.google.com/media-cdn/docs/overview](https://docs.cloud.google.com/media-cdn/docs/overview)
- [https://docs.cloud.google.com/media-cdn/docs/origins](https://docs.cloud.google.com/media-cdn/docs/origins)

## Supporting Pages

### Request logging overview \_|\_ Media CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/logging](https://docs.cloud.google.com/media-cdn/docs/logging)
- Source ID: `site-docs-root`
- Final score: 231
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example log entry The following provides an example log entry for a response served from cache: { "insertId" : "617fa16e-0000-2ac9-9993-d4f547fe67d4@a1" , "jsonPayload" : { "@type" : "type.googleapis.com/google.cloud.edgecache.v1.EdgeCacheLogEntry" , "tlsVersion" : "TLS 1.3" , "tlsCipherSuite" : "009C" , "cacheId" : "maa-132eed13faa13" , "clientAsn" : "9299" , "origin" : "example origin" , "clientRegionCode" : "IN" , "metroIataCode" : "bom" , "clientCity" : "Mumbai" , "latency" : "0.005105200s" , "proxyStatus" : "Google-Edge-Cache" , "httpTtfb" : "0.005056080s" , "cacheMode" : "FORCE CACHE ALL" , "cacheKeyFingerprint" : "c360ac18849b6336" , "cacheStatus" : "hit,stale" , "compressionAlgorithmApplied" : "br" , "enforcedSecurityPolicy" : { "outcome" : "ACCEPT" , "configuredAction" : "ACCEPT" , "name" : "example policy" , "priority" : 1000 , "configuredAction" : "DENY" , "threatIntelligence" : { "categories" : [ 0 : "iplist-public-clouds" ] } }, "originalRequestId" : "19d92668-3948-49d8-9244-25f8252043e5" , "proxyRegionCode" : "IN" , "requestId" : "4bde6381-cd17-47e1-8c2a-1aaa424a1156" , "originIp" : "74.125.128.128" }, "httpRequest" : { "requestMethod" : "GET" , "requestUrl" : "https://example.com/image.jpg" , "requestSize" : "3545" , "status" : 200 , "responseSize" : "3716" , "userAgent" : "Mozilla/5.0 (Macintosh; Intel Mac OS X 10 15 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36" , "remoteIp" : "62.36.0.43" , "protocol" : "HTTP/2" }, "resource" : { "type" : "edgecache.googleapis.com/EdgeCacheRouteRule" , "labels" : { "matched path" : "/" , "path matcher name" : "routes" , "service name" : "example service" , "resource container" : "projects/123456789" , "location" : "global" , "route destination" : "projects/123456789/locations/global/edgeCacheOrigins/example origin" , "route type" : "ORIGIN" } }, "timestamp" : "2022-11-19T00:24:13.695328200Z" , "logName" : "projects/my-project/logs/edgecache.googleapis.com%2Fedge cache request" , "receiveTimestamp" : "2022-11-19T00:24:16.715871645Z" } You can configure request logging in a few ways.
- Populated only if this is different than request id for cached responses. originIp The IP address used to contact the EdgeCacheOrigin resource from which the response was proxied. previewSecurityPolicy The Google Cloud Armor edge security policy that applies to the client's request, with the preview rules taken into account.
- Home Documentation Networking Media CDN Guides Send feedback Request logging overview Stay organized with collections Save and categorize content based on your preferences.
- It also includes information about Google Threat Intelligence evaluations, if applicable. flexShieldingRegion US EAST4 The region used for flexible shielding, if any.

### Support Hub | Google Cloud

- URL: [https://docs.cloud.google.com/media-cdn/docs/getting-support](https://docs.cloud.google.com/media-cdn/docs/getting-support)
- Source ID: `site-docs-root`
- Final score: 225
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Google Cloud partners Learn about the ecosystem and resources. close Overview arrow forward Solutions arrow forward Products arrow forward Pricing arrow forward Resources arrow forward Docs Support Console Accelerate your digital transformation Learn more Key benefits Why Google Cloud AI and ML Multicloud Global infrastructure Data Cloud Modern Infrastructure Cloud Security Productivity and collaboration Reports and insights Executive insights Analyst reports Whitepapers Customer stories Industry Solutions Retail Consumer Packaged Goods Financial Services Healthcare and Life Sciences Media and Entertainment Telecommunications Games Manufacturing Supply Chain and Logistics Government Education See all industry solutions See all solutions Application Modernization CAMP Modernize Traditional Applications Migrate from PaaS: Cloud Foundry, Openshift Migrate from Mainframe Modernize Software Delivery DevOps Best Practices SRE Principles Platform Engineering Run Applications at the Edge Architect for Multicloud Go Serverless Artificial Intelligence Customer Engagement Suite with Google AI Document AI Vertex AI Search for commerce Google Cloud with Gemini Generative AI on Google Cloud APIs and Applications New Business Channels Using APIs Unlocking Legacy Applications Using APIs Open Banking APIx Data Analytics Data Migration Data Lakehouse Real-time Analytics Marketing Analytics Datasets Business Intelligence AI for Data Analytics Geospatial Analytics Databases Database Migration Database Modernization Databases for Games Google Cloud Databases Migrate Oracle workloads to Google Cloud Open Source Databases SQL Server on Google Cloud Gemini for Databases Infrastructure Modernization Application Migration SAP on Google Cloud High Performance Computing Windows on Google Cloud Data Center Migration Active Assist Virtual Desktops Rapid Migration and Modernization Program Backup and Disaster Recovery Red Hat on Google Cloud Cross-Cloud Network Observability Productivity and Collaboration Google Workspace Google Workspace Essentials Cloud Identity Chrome Enterprise Security Agentic SOC Web App and API Protection Security and Resilience Framework Risk and compliance as code (RCaC) Software Supply Chain Security Security Foundation Google Cloud Cybershield™ Startups and SMB Startup Program Small and Medium Business Software as a Service Featured Products Compute Engine Cloud Storage BigQuery Cloud Run Google Kubernetes Engine Vertex AI Looker Apigee API Management Cloud SQL Gemini Enterprise Cloud CDN See all products (100+) AI and Machine Learning Vertex AI Platform Vertex AI Studio Vertex AI Agent Builder Conversational Agents Vertex AI Search Speech-to-Text Text-to-Speech Translation AI Gemini Enterprise Vision AI Contact Center as a Service See all AI and machine learning products Business Intelligence Looker Looker Studio Compute Compute Engine App Engine Cloud GPUs Migrate to Virtual Machines Spot VMs Batch Sole-Tenant Nodes Bare Metal Recommender VMware Engine Cloud Run See all compute products Containers Google Kubernetes Engine Cloud Run Cloud Build Artifact Registry Cloud Code Cloud Deploy Migrate to Containers Deep Learning Containers Knative Data Analytics BigQuery Looker Dataflow Pub/Sub Dataproc Google Cloud Serverless for Apache Spark Cloud Composer BigLake Dataplex Universal Catalog BigQuery Migration Services Managed Service for Apache Kafka See all data analytics products Databases AlloyDB for PostgreSQL Cloud SQL Firestore Spanner Bigtable Datastream Database Migration Service Bare Metal Solution Memorystore Developer Tools Artifact Registry Cloud Code Cloud Build Cloud Deploy Cloud Deployment Manager Cloud SDK Cloud Scheduler Cloud Source Repositories Infrastructure Manager Cloud Workstations Gemini Code Assist See all developer tools Distributed Cloud Google Distributed Cloud Connected Google Distributed Cloud Air-gapped Hybrid and Multicloud Google Kubernetes Engine Apigee API Management Migrate to Containers Cloud Build Observability Cloud Service Mesh Google Distributed Cloud Industry Specific Anti Money Laundering AI Cloud Healthcare API Device Connect for Fitbit Telecom Network Automation Telecom Data Fabric Telecom Subscriber Insights Spectrum Access System (SAS) Integration Services Application Integration Workflows Apigee API Management Cloud Tasks Cloud Scheduler Dataproc Cloud Data Fusion Cloud Composer Pub/Sub Eventarc Management Tools Cloud Shell Cloud console Cloud Endpoints Cloud IAM Cloud APIs Service Catalog Cost Management Observability Carbon Footprint Config Connector Active Assist See all management tools Maps and Geospatial Earth Engine Google Maps Platform Media Services Cloud CDN Live Stream API OpenCue Transcoder API Video Stitcher API Migration Migration Center Application Migration Migrate to Virtual Machines Cloud Foundation Toolkit Database Migration Service Migrate to Containers BigQuery Migration Services Rapid Migration and Modernization Program Transfer Appliance Storage Transfer Service VMware Engine Mixed Reality Immersive Stream for XR Networking Cloud Armor Cloud CDN and Media CDN Cloud DNS Cloud Load Balancing Cloud NAT Cloud Connectivity Network Connectivity Center Network Intelligence Center Network Service Tiers Virtual Private Cloud Private Service Connect See all networking products Operations Cloud Logging Cloud Monitoring Error Reporting Managed Service for Prometheus Cloud Trace Cloud Profiler Cloud Quotas Productivity and Collaboration AppSheet Gemini Enterprise Google Workspace Google Workspace Essentials Cloud Identity Chrome Enterprise Security and Identity Cloud IAM Sensitive Data Protection Mandiant Managed Defense Google Threat Intelligence Security Command Center Cloud Key Management Mandiant Incident Response Chrome Enterprise Premium Assured Workloads Google Security Operations Mandiant Consulting See all security and identity products Serverless Cloud Run Cloud Functions App Engine Workflows API Gateway Storage Cloud Storage Block Storage Filestore Persistent Disk Cloud Storage for Firebase Local SSD Storage Transfer Service Google Cloud Managed Lustre Google Cloud NetApp Volumes Backup and DR Service Web3 Blockchain Node Engine Blockchain RPC Save money with our transparent approach to pricing Request a quote Pricing overview and tools Google Cloud pricing Pricing calculator Google Cloud free tier Cost optimization framework Cost management tools Product-specific Pricing Compute Engine Cloud SQL Google Kubernetes Engine Cloud Storage BigQuery See full price list with 100+ products Learn & build Google Cloud Free Program Solution Generator Quickstarts Blog Learning Hub Google Cloud certification Cloud computing basics Cloud Architecture Center Connect Innovators Developer Center Events and webinars Google Cloud Community Consulting and Partners Google Cloud Consulting Google Cloud Marketplace Find a partner Google Cloud partners Why Google Choosing Google Cloud Trust and security Modern Infrastructure Cloud Multicloud Global infrastructure Locations Customers and case studies Analyst reports Whitepapers Blog Products and pricing Google Cloud pricing Google Workspace pricing See all products Solutions Infrastructure modernization Databases Application modernization Smart analytics Artificial Intelligence Security Productivity & work transformation Industry solutions DevOps solutions Small business solutions See all solutions Resources Google Cloud Affiliate Program Google Cloud documentation Google Cloud quickstarts Google Cloud Marketplace Learn about cloud computing Support Code samples Cloud Architecture Center Training Certifications Google for Developers Google Cloud for Startups System status Release Notes Engage Contact sales Find a Partner Become a Partner Events Podcasts Developer Center Press Corner Google Cloud on YouTube Google Cloud Tech on YouTube Follow on X Join User Research We're hiring.
- Software as a Service Build better SaaS products, scale efficiently, and grow your business. close Featured Products AI and Machine Learning Business Intelligence Compute Containers Data Analytics Databases Developer Tools Distributed Cloud Hybrid and Multicloud Industry Specific Integration Services Management Tools Maps and Geospatial Media Services Migration Mixed Reality Networking Operations Productivity and Collaboration Security and Identity Serverless Storage Web3 See all products (100+) Featured Products Compute Engine Virtual machines running in Google’s data center.
- Networking Cloud Armor Security policies and defense against web and DDoS attacks.
- Customer stories Explore case studies and videos. close Industry Solutions Application Modernization Artificial Intelligence APIs and Applications Data Analytics Databases Infrastructure Modernization Productivity and Collaboration Security Startups and SMB See all solutions Industry Solutions Reduce cost, increase operational agility, and capture new market opportunities.

### Media CDN overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/overview](https://docs.cloud.google.com/media-cdn/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 205
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Armor also supports Autonomous System Numbers (ASNs) in edge security policies for Media CDN.
- Client connectivity features Media CDN supports modern networking protocols such as HTTP/2 and QUIC from the client to the edge, increasing throughput and reducing overall network latency.
- Additionally, Cloud Armor for Media CDN integrates with Google Threat Intelligence to enable advanced protection against known malicious IP addresses and traffic patterns.
- Google Cloud Armor support Media CDN supports Cloud Armor edge security policies.

### Origins overview \_|\_ Media CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/origins](https://docs.cloud.google.com/media-cdn/docs/origins)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- The following table documents what the origin sees in the incoming request under different configuration scenarios: Client Request EdgeCacheService.hostRewrite EdgeCacheOrigin.hostRewrite originAddress Host header / TLS SNI at origin media.example.com None None backend.example.com media.example.com media.example.com service.example.com None backend.example.com service.example.com media.example.com None origin.example.com backend.example.com origin.example.com media.example.com service.example.com origin.example.com backend.example.com origin.example.com media.example.com service.example.com origin.example.com gs://vod-content-bucket set automatically based on the bucket name The primary origin and any failover origins see the same host header if they share the same routeRule or hostRewrite configuration.
- Supported origins and protocols Media CDN directly supports any publicly reachable HTTP endpoint as an origin, including the following: Cloud Storage buckets, including private buckets through Identity and Access Management service accounts External Application Load Balancers Amazon S3-compatible buckets, including private buckets that use AWS Signature Version 4 Other publicly available object storage, such as Azure Blob Storage Publicly available web servers, such as public VMs or on-premises hosts Connectivity to origins is over secure tunnels and Google's global backbone network.
- Cache fill between the origin and Google's own edge infrastructure is entirely over Google's global private backbone network, which reduces cache fill latency and improves reliability—both are active benefits for live streaming workloads.
- Home Documentation Networking Media CDN Guides Send feedback Origins overview Stay organized with collections Save and categorize content based on your preferences.

