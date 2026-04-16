---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.212Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Waterfall chart"
feature_slug: "waterfall-chart"
latest_feature_date: "2023-08-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/connector/semantics"
  - "https://docs.cloud.google.com/iam/docs/resource-types-with-policies"
  - "https://developers.google.com/looker-studio/integrate/api/reference/types"
keywords:
  - "waterfall"
  - "chart"
  - "type"
  - "visualizes"
  - "how"
  - "sequence"
  - "positive"
  - "negative"
---

# Waterfall chart

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

A chart type that visualizes how a sequence of positive and negative values adds up to a total.

## Extended Definition

A chart type that visualizes how a sequence of positive and negative values adds up to a total.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/connector/semantics](https://developers.google.com/looker-studio/connector/semantics)
- [https://docs.cloud.google.com/iam/docs/resource-types-with-policies](https://docs.cloud.google.com/iam/docs/resource-types-with-policies)
- [https://developers.google.com/looker-studio/integrate/api/reference/types](https://developers.google.com/looker-studio/integrate/api/reference/types)

## Supporting Pages

### Types \_|\_ Integrate and share \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/integrate/api/reference/types](https://developers.google.com/looker-studio/integrate/api/reference/types)
- Source ID: `site-api-reference`
- Final score: 60
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Assets A Looker Studio asset. { "assetType" : AssetType , "updateTime" : Timestamp , "name" : string , "title" : string , "trashed" : boolean , "updateByMeTime" : Timestamp , "owner" : string , "createTime" : Timestamp , "lastViewByMeTime" : Timestamp , "description" : string , "creator" : string } Property name Type Description assetType AssetType The type of asset. updateTime Timestamp Date the asset was last modified. name string The name (ID) of the asset. title string The title of the asset. trashed boolean Indicates if the asset is in the trash. updateByMeTime Timestamp Date the asset was last modified by the user making this API call. owner string The owner of the asset. createTime Timestamp Date the asset was created. lastViewByMeTime Timestamp Date the asset was last viewed by the user making this API call. description string Description of the report (only supported for the REPORT AssetType). creator string The creator of the asset.
- Permissions Looker Studio permissions for an asset. { "permissions" : { [ Role ] : { "members" : Member [] } }, "etag" : string } Property name Type Description permissions { Role : Member[] } A map of role to members. etag string etag to detect and fail concurrent modifications.
- Home Products Looker Studio Integrate Reference Types Stay organized with collections Save and categorize content based on your preferences.
- AssetType The types of Looker Studio assets.

### "Data types and semantic types \_|\_ Community Connectors \_|\_ Google for\

- URL: [https://developers.google.com/looker-studio/connector/semantics](https://developers.google.com/looker-studio/connector/semantics)
- Source ID: `site-docs-reference`
- Final score: 58
- Re-rank relevance: N/A

Evidence snippets:
- Income is set as a Currency, and Filing Year is set as a date. data-studio/semantics.gs View on GitHub const schema = [ { name : "Income" , label : "Income (in USD)" , dataType : "NUMBER" , semantics : { conceptType : "METRIC" , semanticGroup : "CURRENCY" , semanticType : "CURRENCY USD" , }, }, { name : "Filing Year" , label : "Year in which you filed the taxes." , dataType : "STRING" , semantics : { conceptType : "METRIC" , semanticGroup : "DATE OR TIME" , semanticType : "YEAR" , }, }, ]; Troubleshooting Manual Semantic Types If you set your semantic types incorrectly for the underlying data, they will not work properly.
- To see which semantic types are available, please consult the semantic types documentation Community Connector schema and Looker Studio fields When you define the schema for your community connector, there are various properties for each field that will determine how the field is represented and used in Looker Studio.
- Recognized formats for automatic semantic type detection Date & Time YYYY/MM/DD-HH:MM:SS YYYY-MM-DD [HH:MM:SS[.uuuuuu]] YYYY/MM/DD [HH:MM:SS[.uuuuuu]] YYYYMMDD [HH:MM:SS[.uuuuuu]] Sat, 24 May 2008 20:09:47 GMT 2008-05-24T20:09:47Z Time: epoch for second, micro, milli, and nano.
- There are several ways to improve semantic type detection in your code: Recommended: Pass predefined values Return a predefined value for each field that best represents the semantic type for the field and is known to be properly be detected by Looker Studio.

### "Resource types that accept allow policies \_|\_ Identity and Access Management\

- URL: [https://docs.cloud.google.com/iam/docs/resource-types-with-policies](https://docs.cloud.google.com/iam/docs/resource-types-with-policies)
- Source ID: `site-iam-reference`
- Final score: 58
- Re-rank relevance: N/A

Evidence snippets:
- Select a service to see which of its resource types support allow policies: All services BigQuery Identity-Aware Proxy Access Context Manager Vertex AI BigQuery sharing API Gateway Apigee Apigee Registry App Hub Artifact Registry AutoML Backup and Disaster Recovery Chrome Enterprise Premium BigLake BigQuery Connection API BigQuery Data Policy BigQuery Reservation API Cloud Bigtable Admin API Binary Authorization Cloud Billing Cloud Build Cloud Deploy Cloud Run functions Cloud Key Management Service Resource Manager Cloud Tasks Compute Engine Cloud Config Manager API Customer Experience Insights Artifact Analysis Data Catalog Dataform Cloud Data Fusion Database Migration Service Knowledge Catalog Managed Service for Apache Spark Cloud Deployment Manager Discovery Engine Cloud DNS Cloud Domains Eventarc Backup for GKE GKE Hub Google Distributed Cloud Cloud Healthcare API Identity and Access Management Cloud Logging Managed Service for Microsoft Active Directory Dataproc Metastore AI Platform Network Connectivity Center Network Management API Network Security Network Services Notebooks Certificate Authority Service Pub/Sub Cloud Run Secret Manager Secure Source Manager Security Command Center Service Directory Service Management Spanner Cloud Storage Google Cloud VMware Engine Cloud Workstations Service Resources that accept allow policies BigQuery Datasets Routines Tables Identity-Aware Proxy All web services Individual web services Tunnel Tunnel instances Tunnel zones Web service types Web service versions Access Context Manager Access policies Vertex AI Datasets Entity types Feature groups Feature online stores Feature views Featurestores Models Notebook runtime templates Reasoning engines BigQuery sharing Data exchanges Listings Subscriptions API Gateway APIs Configs Gateways Apigee Deployments Environments Spaces Apigee Registry APIs Artifacts Deployments Documents Instances Runtime Specs Versions App Hub Applications Artifact Registry Repositories AutoML Datasets Locations Models Backup and Disaster Recovery Management servers Chrome Enterprise Premium App connections App connectors App gateways Applications Security gateways BigLake Catalogs Namespaces Tables BigQuery Connection API Connections BigQuery Data Policy Data policies BigQuery Reservation API Assignments Reservations Cloud Bigtable Admin API Authorized views Backups Instances Logical views Materialized views Schema bundles Tables Binary Authorization Attestors Policy Cloud Billing Billing accounts Cloud Build Connections Cloud Deploy Custom target types Delivery pipelines Deploy policies Targets Cloud Run functions Functions Cloud Key Management Service Crypto keys EKM config EKM connections Import jobs Key rings Resource Manager Folders Organizations Projects Tag keys Tag values Cloud Tasks Queues Compute Engine Backend buckets Backend services Disks Firewall policies Images Instance templates Instances Instant snapshot groups Instant snapshots Interconnect attachment groups Interconnect groups Licenses Machine images Network attachments Network firewall policies Node groups Node templates Region backend buckets Region backend services Region disks Region instant snapshot groups Region instant snapshots Region network firewall policies Region snapshots Reservation blocks Reservation sub-blocks Reservations Resource policies Service attachments Snapshots Storage pools Subnetworks Cloud Config Manager API Deployments Customer Experience Insights Authorized views Artifact Analysis Notes Occurrences Data Catalog Entry groups Policy tags Tag templates Taxonomies Dataform Folders Repositories Team folders Workspaces Cloud Data Fusion Instances Database Migration Service Connection profiles Conversion workspaces Migration jobs Objects Private connections Knowledge Catalog Aspect types Assets Attributes Categories Change requests Data attribute bindings Data domains Data products Data scans Data taxonomies Encryption configs Entry groups Entry link types Entry types Glossaries Governance rules Lakes Policy intents Tasks Terms Zones Managed Service for Apache Spark Autoscaling policies Clusters Jobs Operations Workflow templates Cloud Deployment Manager Deployments Discovery Engine Engines Cloud DNS Managed zones Cloud Domains Registrations Eventarc Channel connections Channels Enrollments Google API sources Message buses Pipelines Triggers Backup for GKE Backup plans Backups Restore plans Restores Volume backups Volume restores GKE Hub Features Memberships Scopes Google Distributed Cloud Bare metal admin clusters Bare metal clusters Bare metal node pools VMware admin clusters VMware clusters VMware node pools Cloud Healthcare API Consent stores Data mapper workspaces Datasets DICOM stores FHIR stores HL7v2 stores Identity and Access Management Service accounts Workforce identity pools Workload identity pools Cloud Logging Views Managed Service for Microsoft Active Directory Backups Domains Peerings Dataproc Metastore Backups Databases Federations Services Tables AI Platform Jobs Models Network Connectivity Center Groups Hubs Internal ranges Policy-based routes Spokes Network Management API Connectivity tests Network Security Address groups Authorization policies Authz policies Client TLS policies Server TLS policies Network Services Edge cache keysets Edge cache origins Edge cache services Notebooks Instances Runtimes Certificate Authority Service CA pools Certificate revocation lists Certificate templates Pub/Sub Schemas Snapshots Subscriptions Topics Cloud Run Jobs Services Worker pools Secret Manager Secrets Secure Source Manager Instances Repositories Security Command Center Sources Service Directory Namespaces Services Service Management Consumers Services Spanner Backup schedules Backups Databases Instances Cloud Storage Buckets Managed folders Google Cloud VMware Engine Clusters HCX activation keys Private clouds Cloud Workstations Workstation configs Workstations Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Security IAM Reference Send feedback Resource types that accept allow policies Stay organized with collections Save and categorize content based on your preferences.
- This page lists the resource types on which you can set allow policies .

