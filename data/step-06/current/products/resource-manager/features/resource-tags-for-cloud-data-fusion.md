---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:51:00.066Z"
product_name: "Resource Manager"
product_slug: "resource-manager"
feature_name: "Resource tags for Cloud Data Fusion"
feature_slug: "resource-tags-for-cloud-data-fusion"
latest_feature_date: "2024-06-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/resource-manager/docs/tags/tags-supported-services"
  - "https://docs.cloud.google.com/resource-manager/docs/tags/tags-overview"
  - "https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing"
keywords:
  - "resource"
  - "tags"
  - "fusion"
  - "resources"
  - "can"
  - "annotated"
---

# Resource tags for Cloud Data Fusion

Product: Resource Manager
Coverage: MEDIUM

## Step 02 Summary

Cloud Data Fusion resources can be annotated with tags.

## Extended Definition

Cloud Data Fusion resources can be annotated with tags.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/resource-manager/docs/tags/tags-supported-services](https://docs.cloud.google.com/resource-manager/docs/tags/tags-supported-services)
- [https://docs.cloud.google.com/resource-manager/docs/tags/tags-overview](https://docs.cloud.google.com/resource-manager/docs/tags/tags-overview)
- [https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing](https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing)

## Supporting Pages

### Services that support tags \_|\_ Resource Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/tags/tags-supported-services](https://docs.cloud.google.com/resource-manager/docs/tags/tags-supported-services)
- Source ID: `site-docs-reference-2`
- Final score: 120
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported service resources You can attach tags to the following types of Google Cloud resources: Google Cloud service Resource types AlloyDB for PostgreSQL Clusters Backups API Gateway APIs Gateways API hub APIs API deployments Artifact Registry Repositories ( Preview ) BigQuery Datasets Tables Views Bigtable Instances Google Cloud Armor Network Edge Security Services Security Policies Certificate Manager Certificates Certificate maps Trust configs Certificate issuance configurations DNS authorizations Certificate Authority Service CA pools Certificate templates Cloud Billing View resource-level tags in the Cloud Billing BigQuery export Cloud Data Fusion Instances ( Preview ) Cloud Deploy Delivery pipelines ( Preview ) Targets ( Preview ) Cloud Domains Registrations Cloud Key Management Service (Cloud KMS) Key rings Cloud Load Balancing Backend buckets Backend services Forwarding rules Health checks Network endpoint groups SSL policies SSL certificates Target GRPC proxies Target HTTP(S) proxies Target instances Target pools Target SSL proxies Target TCP proxies URL maps Zonal instance groups Cloud Logging Log buckets Cloud Router Routers Cloud Interconnect Interconnects Interconnect attachments Cloud VPN External VPN gateways VPN gateways VPN tunnels Target VPN gateways Cloud Run Services Jobs ( Preview ) Cloud SQL Instances Cloud Storage Buckets Cloud Workstations Clusters Transcoder API Job JobTemplate Compute Engine Images Instances Regional persistent disks Snapshots Zonal persistent disks Managed Service for Apache Spark Clusters Dataproc Metastore Services Federations Datastore Databases Datastream Private connectivity configurations Connection profiles Streams Cloud DNS Policies Filestore Backups Instances Snapshots Firestore Databases Google Distributed Cloud BareMetalCluster BareMetalAdminCluster VMWareCluster VMWareAdminCluster Google Kubernetes Engine (GKE) Clusters Identity and Access Management Custom roles Service accounts Managed Service for Microsoft Active Directory (Managed Microsoft AD) Domains Memorystore for Redis Instances Pub/Sub Topics Subscriptions Snapshots reCAPTCHA Enterprise Key Resource Manager Organizations Folders Projects Secret Manager Secrets Spanner Instances Google Cloud VMware Engine Private Cloud Private Connection Networks Network Peering Network Policy VPC Networks Subnetworks Routes VPC firewall rules Workflows Workflows Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Google Cloud service Resource types Identity and Access Management (IAM) Allow and deny policies Organization Policy Service Organization policies Resources that support tags Virtual Private Cloud (VPC) Network firewall policies VM instances Secure Web Proxy instances The following sections describe how you can use tags with policy engine services.
- You can attach tags to the following VPC resources for use in IAM policies: Networks Subnetworks Routes VPC firewall rules Network firewall policies Regional firewall policies For more information, see Create and manage tags for Virtual Private Cloud resources .
- Organization Policy Service You can use organization policies with tags to control how your organization policy constraints are applied on certain resources.

### Tags overview \_|\_ Resource Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/tags/tags-overview](https://docs.cloud.google.com/resource-manager/docs/tags/tags-overview)
- Source ID: `site-docs-reference-2`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- The following table lists some of the differences between tags and labels: Tags Labels Resource structure Tag keys, tag values, and tag bindings are all discrete resources Not a resource in itself, but metadata for resources Definition Defined at the organization or project level Defined by each resource Access control Management and attachment of tags requires Identity and Access Management (IAM) roles Attachment of labels requires IAM roles , which vary based on the service resource Prerequisite for attachment The tag key and tag value must be defined before a tag can be attached to a resource No prerequisites for attachment Inheritance Tag bindings are inherited by children of the resource in the Google Cloud hierarchy Not inherited by children of the resource Deletion requirements Tags can't be deleted unless no tag bindings for that tag exist Can be removed from a resource at any time Naming requirements Requirements for tag values and tag keys Requirements for labels Key-value name length 256 characters maximum 63 characters maximum Allow and deny policy support Tags can be referenced by allow policy conditions and deny policy conditions No allow and deny policy support Organization policy support Tags on some resources can be referenced by organization policy conditional constraints No organization policy support Cloud Billing integration Perform chargebacks, audits, and other cost allocation analysis, export Cloud Billing cost data to BigQuery Filter resources by label in Cloud Billing, export Cloud Billing data to BigQuery For more information about labels, see Creating and managing labels .
- Enforcement of mandatory tags is supported for the following resource types: Resource Manager projects and folders Filestore instances AlloyDB for PostgreSQL cluster and backup resources Workflows workflow Compute Engine resources: Instances Disks VPC resources: Networks Subnetworks Firewall rules Routes Tag inheritance When a tag value is attached to a resource, by default, all descendants of the resource inherit the same tag value.
- When you enforce mandatory tags, you can only create resources that comply with your organization's tagging policies; that is, resources are bound with the tag values for the mandatory tag keys specified in the policy.
- Policies and tags You can use tags and IAM conditions together to: Conditionally grant IAM roles Conditionally deny IAM permissions After you create a tag value, you can bind the tag value to resources.

### Create and manage tags \_|\_ Resource Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing](https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing)
- Source ID: `site-docs-reference-2`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- You should get a response similar to the following: For predefined tags: tagBindings/%2F%2Fcloudresourcemanager.googleapis.com%2Fprojects%2FPROJECT NUMBER%2Flocations%2FLOCATION%2Fresources%2FRESOURCE ID/tagValues/TAG VALUE ID parent: //cloudresourcemanager.googleapis.com/projects/123456789012/locations/us-central1/example-resource/res-01 tagValue: tagValues/987654321098 tagValueNamespacedName: 961309089256/environment/production For tags with dynamic values: tagBindings/%2F%2Fcloudresourcemanager.googleapis.com%2Fprojects%2FPROJECT NUMBER%2Flocations%2FLOCATION%2Fresources%2FRESOURCE ID/tagKeys/TAG KEY ID parent: //cloudresourcemanager.googleapis.com/projects/123456789012/locations/us-central1/example-resource/res-01 tagValueNamespacedName: your-org-id/environment/staging For tags with dynamic values, the tagValue field is not present in the response; only the tagValueNamespacedName is populated.
- Required roles To get the permissions that you need to manage tags, ask your administrator to grant you the following IAM roles: Tag Viewer ( roles/resourcemanager.tagViewer ) on the resources the tags are attached to View and manage tags at the organization level: Organization Viewer ( roles/resourcemanager.organizationViewer ) on the organization Attach and remove tags from resources: Tag User ( roles/resourcemanager.tagUser ) on the tag value and the resources that you are attaching or removing the tag value to Create, update, and delete tag definitions: Tag Administrator ( roles/resourcemanager.tagAdmin ) on the resource you're creating, updating, or deleting tags for For more information about granting roles, see Manage access to projects, folders, and organizations .
- The new tags appear under the Tags column on the Manage resources page. gcloud To attach a tag to a resource, you must create a tag binding resource by using the gcloud resource-manager tags bindings create command: gcloud resource-manager tags bindings create \ --tag-value= TAGVALUE NAME \ --parent= RESOURCE ID \ --location= LOCATION Where: TAGVALUE NAME is the permanent ID or namespaced name of the tag value to be attached; for example: tagValues/4567890123 or 12345678/environment/production .
- The updated list of tags appears under the Tags column on the Manage resources page. gcloud To delete a tag binding, use the gcloud resource-manager tags bindings delete command: gcloud resource-manager tags bindings delete \ --tag-value= TAGVALUE NAME \ --parent= RESOURCE ID \ --location= LOCATION Where: TAGVALUE NAME is the permanent ID or namespaced name of the tag value that is attached; for example: tagValues/567890123456 .

