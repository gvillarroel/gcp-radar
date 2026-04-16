---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:51:00.078Z"
product_name: "Resource Manager"
product_slug: "resource-manager"
feature_name: "Attached and inherited tag listing"
feature_slug: "attached-and-inherited-tag-listing"
latest_feature_date: "2022-11-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing"
  - "https://docs.cloud.google.com/resource-manager/docs/tags/tags-overview"
  - "https://docs.cloud.google.com/resource-manager/docs/tags/tags-supported-services"
keywords:
  - "attached"
  - "inherited"
  - "tag"
  - "listing"
  - "shows"
  - "all"
  - "tags"
  - "resource"
---

# Attached and inherited tag listing

Product: Resource Manager
Coverage: MEDIUM

## Step 02 Summary

Attached and inherited tag listing shows all tags attached to or inherited by a resource.

## Extended Definition

Attached and inherited tag listing shows all tags attached to or inherited by a resource.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing](https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing)
- [https://docs.cloud.google.com/resource-manager/docs/tags/tags-overview](https://docs.cloud.google.com/resource-manager/docs/tags/tags-overview)
- [https://docs.cloud.google.com/resource-manager/docs/tags/tags-supported-services](https://docs.cloud.google.com/resource-manager/docs/tags/tags-supported-services)

## Supporting Pages

### Create and manage tags \_|\_ Resource Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing](https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing)
- Source ID: `site-docs-reference-2`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- You should get a response similar to the following: For predefined tags: inherited: true namespacedTagKey: 433637338589/environment namespacedTagValue: 433637338589/environment/production tagKey: tagKeys/162008917964 tagKeyParentName: organizations/433637338589 tagValue: tagValues/281482214193975 For tags with dynamic values: inherited: true namespacedTagKey: my-sample-org/dynamic-key namespacedTagValue: my-sample-org/dynamic-key/staging tagKey: tagKeys/281476834141096 tagKeyParentName: projects/357710452272 If all tags evaluated on a resource are directly attached, the inherited field is false and is omitted.
- Tags that are inherited will be marked as lan Inherited . gcloud To get a list of tag bindings directly attached to a resource, use the gcloud resource-manager tags bindings list command.
- Console To see all tags that are attached to or inherited by a resource, do the following: Open the Manage resources page in the Google Cloud console.
- List all tags attached to a resource You can get a list of all tags attached to a resource, for tags that are either inherited or directly attached.

### Tags overview \_|\_ Resource Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/tags/tags-overview](https://docs.cloud.google.com/resource-manager/docs/tags/tags-overview)
- Source ID: `site-docs-reference-2`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- The following table lists some of the differences between tags and labels: Tags Labels Resource structure Tag keys, tag values, and tag bindings are all discrete resources Not a resource in itself, but metadata for resources Definition Defined at the organization or project level Defined by each resource Access control Management and attachment of tags requires Identity and Access Management (IAM) roles Attachment of labels requires IAM roles , which vary based on the service resource Prerequisite for attachment The tag key and tag value must be defined before a tag can be attached to a resource No prerequisites for attachment Inheritance Tag bindings are inherited by children of the resource in the Google Cloud hierarchy Not inherited by children of the resource Deletion requirements Tags can't be deleted unless no tag bindings for that tag exist Can be removed from a resource at any time Naming requirements Requirements for tag values and tag keys Requirements for labels Key-value name length 256 characters maximum 63 characters maximum Allow and deny policy support Tags can be referenced by allow policy conditions and deny policy conditions No allow and deny policy support Organization policy support Tags on some resources can be referenced by organization policy conditional constraints No organization policy support Cloud Billing integration Perform chargebacks, audits, and other cost allocation analysis, export Cloud Billing cost data to BigQuery Filter resources by label in Cloud Billing, export Cloud Billing data to BigQuery For more information about labels, see Creating and managing labels .
- All of the tags that are both attached to and inherited by a resource are collectively called the effective tags .
- Enforcement of mandatory tags is supported for the following resource types: Resource Manager projects and folders Filestore instances AlloyDB for PostgreSQL cluster and backup resources Workflows workflow Compute Engine resources: Instances Disks VPC resources: Networks Subnetworks Firewall rules Routes Tag inheritance When a tag value is attached to a resource, by default, all descendants of the resource inherit the same tag value.
- The effective tags for a resource are a combination of the tags directly attached to it, as well as all tags attached to all of the resource's ancestors throughout the hierarchy.

### Services that support tags \_|\_ Resource Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/tags/tags-supported-services](https://docs.cloud.google.com/resource-manager/docs/tags/tags-supported-services)
- Source ID: `site-docs-reference-2`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- Organization policies can be conditionally enforced by referencing tags attached to supported resources .
- Supported service resources You can attach tags to the following types of Google Cloud resources: Google Cloud service Resource types AlloyDB for PostgreSQL Clusters Backups API Gateway APIs Gateways API hub APIs API deployments Artifact Registry Repositories ( Preview ) BigQuery Datasets Tables Views Bigtable Instances Google Cloud Armor Network Edge Security Services Security Policies Certificate Manager Certificates Certificate maps Trust configs Certificate issuance configurations DNS authorizations Certificate Authority Service CA pools Certificate templates Cloud Billing View resource-level tags in the Cloud Billing BigQuery export Cloud Data Fusion Instances ( Preview ) Cloud Deploy Delivery pipelines ( Preview ) Targets ( Preview ) Cloud Domains Registrations Cloud Key Management Service (Cloud KMS) Key rings Cloud Load Balancing Backend buckets Backend services Forwarding rules Health checks Network endpoint groups SSL policies SSL certificates Target GRPC proxies Target HTTP(S) proxies Target instances Target pools Target SSL proxies Target TCP proxies URL maps Zonal instance groups Cloud Logging Log buckets Cloud Router Routers Cloud Interconnect Interconnects Interconnect attachments Cloud VPN External VPN gateways VPN gateways VPN tunnels Target VPN gateways Cloud Run Services Jobs ( Preview ) Cloud SQL Instances Cloud Storage Buckets Cloud Workstations Clusters Transcoder API Job JobTemplate Compute Engine Images Instances Regional persistent disks Snapshots Zonal persistent disks Managed Service for Apache Spark Clusters Dataproc Metastore Services Federations Datastore Databases Datastream Private connectivity configurations Connection profiles Streams Cloud DNS Policies Filestore Backups Instances Snapshots Firestore Databases Google Distributed Cloud BareMetalCluster BareMetalAdminCluster VMWareCluster VMWareAdminCluster Google Kubernetes Engine (GKE) Clusters Identity and Access Management Custom roles Service accounts Managed Service for Microsoft Active Directory (Managed Microsoft AD) Domains Memorystore for Redis Instances Pub/Sub Topics Subscriptions Snapshots reCAPTCHA Enterprise Key Resource Manager Organizations Folders Projects Secret Manager Secrets Spanner Instances Google Cloud VMware Engine Private Cloud Private Connection Networks Network Peering Network Policy VPC Networks Subnetworks Routes VPC firewall rules Workflows Workflows Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Google Cloud service Resource types Identity and Access Management (IAM) Allow and deny policies Organization Policy Service Organization policies Resources that support tags Virtual Private Cloud (VPC) Network firewall policies VM instances Secure Web Proxy instances The following sections describe how you can use tags with policy engine services.
- You can attach tags to the following VPC resources for use in IAM policies: Networks Subnetworks Routes VPC firewall rules Network firewall policies Regional firewall policies For more information, see Create and manage tags for Virtual Private Cloud resources .

