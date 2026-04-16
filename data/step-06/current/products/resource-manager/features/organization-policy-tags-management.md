---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:51:00.084Z"
product_name: "Resource Manager"
product_slug: "resource-manager"
feature_name: "Organization Policy tags management"
feature_slug: "organization-policy-tags-management"
latest_feature_date: "2021-08-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing"
  - "https://docs.cloud.google.com/resource-manager/docs/tags/tags-supported-services"
  - "https://docs.cloud.google.com/resource-manager/docs/tags/tags-overview"
keywords:
  - "organization"
  - "policy"
  - "tags"
  - "management"
  - "console"
  - "supports"
  - "managing"
  - "policies"
---

# Organization Policy tags management

Product: Resource Manager
Coverage: MEDIUM

## Step 02 Summary

Cloud Console supports managing organization policies that use tags.

## Extended Definition

Cloud Console supports managing organization policies that use tags.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing](https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing)
- [https://docs.cloud.google.com/resource-manager/docs/tags/tags-supported-services](https://docs.cloud.google.com/resource-manager/docs/tags/tags-supported-services)
- [https://docs.cloud.google.com/resource-manager/docs/tags/tags-overview](https://docs.cloud.google.com/resource-manager/docs/tags/tags-overview)

## Supporting Pages

### Create and manage tags \_|\_ Resource Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing](https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing)
- Source ID: `site-docs-reference-2`
- Final score: 250
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Set up a custom constraint to enforce tags Console In the Google Cloud console, go to the Organization policies page.
- To enforce mandatory tags on resources, create a custom organization policy and set the policy on an organization, folder, or project resource to enforce the custom constraint.
- Organization policies and tags You can use tags and conditional enforcement of organization policies to provide centralized control of the resources in your hierarchy.
- Dynamic tag values can't be used in Identity and Access Management (IAM) conditions or in Organization Policy Service constraints.

### Services that support tags \_|\_ Resource Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/tags/tags-supported-services](https://docs.cloud.google.com/resource-manager/docs/tags/tags-supported-services)
- Source ID: `site-docs-reference-2`
- Final score: 206
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported service resources You can attach tags to the following types of Google Cloud resources: Google Cloud service Resource types AlloyDB for PostgreSQL Clusters Backups API Gateway APIs Gateways API hub APIs API deployments Artifact Registry Repositories ( Preview ) BigQuery Datasets Tables Views Bigtable Instances Google Cloud Armor Network Edge Security Services Security Policies Certificate Manager Certificates Certificate maps Trust configs Certificate issuance configurations DNS authorizations Certificate Authority Service CA pools Certificate templates Cloud Billing View resource-level tags in the Cloud Billing BigQuery export Cloud Data Fusion Instances ( Preview ) Cloud Deploy Delivery pipelines ( Preview ) Targets ( Preview ) Cloud Domains Registrations Cloud Key Management Service (Cloud KMS) Key rings Cloud Load Balancing Backend buckets Backend services Forwarding rules Health checks Network endpoint groups SSL policies SSL certificates Target GRPC proxies Target HTTP(S) proxies Target instances Target pools Target SSL proxies Target TCP proxies URL maps Zonal instance groups Cloud Logging Log buckets Cloud Router Routers Cloud Interconnect Interconnects Interconnect attachments Cloud VPN External VPN gateways VPN gateways VPN tunnels Target VPN gateways Cloud Run Services Jobs ( Preview ) Cloud SQL Instances Cloud Storage Buckets Cloud Workstations Clusters Transcoder API Job JobTemplate Compute Engine Images Instances Regional persistent disks Snapshots Zonal persistent disks Managed Service for Apache Spark Clusters Dataproc Metastore Services Federations Datastore Databases Datastream Private connectivity configurations Connection profiles Streams Cloud DNS Policies Filestore Backups Instances Snapshots Firestore Databases Google Distributed Cloud BareMetalCluster BareMetalAdminCluster VMWareCluster VMWareAdminCluster Google Kubernetes Engine (GKE) Clusters Identity and Access Management Custom roles Service accounts Managed Service for Microsoft Active Directory (Managed Microsoft AD) Domains Memorystore for Redis Instances Pub/Sub Topics Subscriptions Snapshots reCAPTCHA Enterprise Key Resource Manager Organizations Folders Projects Secret Manager Secrets Spanner Instances Google Cloud VMware Engine Private Cloud Private Connection Networks Network Peering Network Policy VPC Networks Subnetworks Routes VPC firewall rules Workflows Workflows Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Google Cloud service Resource types Identity and Access Management (IAM) Allow and deny policies Organization Policy Service Organization policies Resources that support tags Virtual Private Cloud (VPC) Network firewall policies VM instances Secure Web Proxy instances The following sections describe how you can use tags with policy engine services.
- Organization Policy Service You can use organization policies with tags to control how your organization policy constraints are applied on certain resources.
- If you can attach a tag to a service resource, and the policy engine service supports that resource, you can then leverage the conditional enforcement of policies to better control your resource hierarchy.

### Tags overview \_|\_ Resource Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/tags/tags-overview](https://docs.cloud.google.com/resource-manager/docs/tags/tags-overview)
- Source ID: `site-docs-reference-2`
- Final score: 186
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table lists some of the differences between tags and labels: Tags Labels Resource structure Tag keys, tag values, and tag bindings are all discrete resources Not a resource in itself, but metadata for resources Definition Defined at the organization or project level Defined by each resource Access control Management and attachment of tags requires Identity and Access Management (IAM) roles Attachment of labels requires IAM roles , which vary based on the service resource Prerequisite for attachment The tag key and tag value must be defined before a tag can be attached to a resource No prerequisites for attachment Inheritance Tag bindings are inherited by children of the resource in the Google Cloud hierarchy Not inherited by children of the resource Deletion requirements Tags can't be deleted unless no tag bindings for that tag exist Can be removed from a resource at any time Naming requirements Requirements for tag values and tag keys Requirements for labels Key-value name length 256 characters maximum 63 characters maximum Allow and deny policy support Tags can be referenced by allow policy conditions and deny policy conditions No allow and deny policy support Organization policy support Tags on some resources can be referenced by organization policy conditional constraints No organization policy support Cloud Billing integration Perform chargebacks, audits, and other cost allocation analysis, export Cloud Billing cost data to BigQuery Filter resources by label in Cloud Billing, export Cloud Billing data to BigQuery For more information about labels, see Creating and managing labels .
- When you enforce mandatory tags, you can only create resources that comply with your organization's tagging policies; that is, resources are bound with the tag values for the mandatory tag keys specified in the policy.
- Enforcement of mandatory tags using organization policies Preview This product or feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- You can enforce mandatory tags on resources by using a custom organization policy.

