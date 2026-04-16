---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:51:00.031Z"
product_name: "Resource Manager"
product_slug: "resource-manager"
feature_name: "Managed organization policy constraints for Compute Engine VM instances"
feature_slug: "managed-organization-policy-constraints-for-compute-engine-vm-instances"
latest_feature_date: "2025-09-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints"
  - "https://docs.cloud.google.com/resource-manager/docs/tags/tags-supported-services"
  - "https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing"
keywords:
  - "managed"
  - "organization"
  - "policy"
  - "constraints"
  - "compute"
  - "engine"
  - "vm"
  - "instances"
---

# Managed organization policy constraints for Compute Engine VM instances

Product: Resource Manager
Coverage: MEDIUM

## Step 02 Summary

Managed organization policy constraints provide prebuilt security governance controls for Compute Engine VM instances.

## Extended Definition

Managed organization policy constraints provide prebuilt security governance controls for Compute Engine VM instances.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints](https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints)
- [https://docs.cloud.google.com/resource-manager/docs/tags/tags-supported-services](https://docs.cloud.google.com/resource-manager/docs/tags/tags-supported-services)
- [https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing](https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing)

## Supporting Pages

### "Manage Google Cloud security baseline constraints \_|\_ Resource Manager\

- URL: [https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints](https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints)
- Source ID: `site-iam-reference`
- Final score: 167
- Re-rank relevance: N/A

Evidence snippets:
- Organization policy name Organization policy constraint Description Impact of enforcement Disable service account key creation constraints/iam.managed.disableServiceAccountKeyCreation Prevent users from creating persistent keys for service accounts.
- Note: For some organizations created after August 15, 2024, the constraints/compute.restrictProtocolForwardingCreationForTypes organization policy constraint might already be applied.
- Disable organization policies To disable or delete an organization policy, run the following command: gcloud org-policies delete CONSTRAINT NAME --organization = ORGANIZATION ID Replace the following: CONSTRAINT NAME : the name of the organization policy constraint that you want to delete—for example, iam.allowedPolicyMemberDomains ORGANIZATION ID : the unique identifier of your organization What's next For more information about creating and managing organization policies, see Using constraints .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to manage organization policies: orgpolicy.constraints.list orgpolicy.policies.create orgpolicy.policies.delete orgpolicy.policies.list orgpolicy.policies.update orgpolicy.policy.get orgpolicy.policy.set You might also be able to get these permissions with custom roles or other predefined roles .

### Services that support tags \_|\_ Resource Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/tags/tags-supported-services](https://docs.cloud.google.com/resource-manager/docs/tags/tags-supported-services)
- Source ID: `site-docs-reference-2`
- Final score: 162
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported service resources You can attach tags to the following types of Google Cloud resources: Google Cloud service Resource types AlloyDB for PostgreSQL Clusters Backups API Gateway APIs Gateways API hub APIs API deployments Artifact Registry Repositories ( Preview ) BigQuery Datasets Tables Views Bigtable Instances Google Cloud Armor Network Edge Security Services Security Policies Certificate Manager Certificates Certificate maps Trust configs Certificate issuance configurations DNS authorizations Certificate Authority Service CA pools Certificate templates Cloud Billing View resource-level tags in the Cloud Billing BigQuery export Cloud Data Fusion Instances ( Preview ) Cloud Deploy Delivery pipelines ( Preview ) Targets ( Preview ) Cloud Domains Registrations Cloud Key Management Service (Cloud KMS) Key rings Cloud Load Balancing Backend buckets Backend services Forwarding rules Health checks Network endpoint groups SSL policies SSL certificates Target GRPC proxies Target HTTP(S) proxies Target instances Target pools Target SSL proxies Target TCP proxies URL maps Zonal instance groups Cloud Logging Log buckets Cloud Router Routers Cloud Interconnect Interconnects Interconnect attachments Cloud VPN External VPN gateways VPN gateways VPN tunnels Target VPN gateways Cloud Run Services Jobs ( Preview ) Cloud SQL Instances Cloud Storage Buckets Cloud Workstations Clusters Transcoder API Job JobTemplate Compute Engine Images Instances Regional persistent disks Snapshots Zonal persistent disks Managed Service for Apache Spark Clusters Dataproc Metastore Services Federations Datastore Databases Datastream Private connectivity configurations Connection profiles Streams Cloud DNS Policies Filestore Backups Instances Snapshots Firestore Databases Google Distributed Cloud BareMetalCluster BareMetalAdminCluster VMWareCluster VMWareAdminCluster Google Kubernetes Engine (GKE) Clusters Identity and Access Management Custom roles Service accounts Managed Service for Microsoft Active Directory (Managed Microsoft AD) Domains Memorystore for Redis Instances Pub/Sub Topics Subscriptions Snapshots reCAPTCHA Enterprise Key Resource Manager Organizations Folders Projects Secret Manager Secrets Spanner Instances Google Cloud VMware Engine Private Cloud Private Connection Networks Network Peering Network Policy VPC Networks Subnetworks Routes VPC firewall rules Workflows Workflows Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Google Cloud service Resource types Identity and Access Management (IAM) Allow and deny policies Organization Policy Service Organization policies Resources that support tags Virtual Private Cloud (VPC) Network firewall policies VM instances Secure Web Proxy instances The following sections describe how you can use tags with policy engine services.
- Organization Policy Service You can use organization policies with tags to control how your organization policy constraints are applied on certain resources.
- You can also attach tags to Compute Engine VM instances to represent different functions in a network.

### Create and manage tags \_|\_ Resource Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing](https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing)
- Source ID: `site-docs-reference-2`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- API To get a list of tag bindings directly attached to a global resource such as an organization, use the tagBindings.list method, specifying the parent resource in the query: GET https://cloudresourcemanager.googleapis.com/v3/tagBindings { "parent": " RESOURCE ID " } If you want to list the tag bindings attached to a regional resource, such as Compute Engine instances, use the tagBindings.list method with the regional endpoint where your resource is located.
- If you are creating a tag hold for a tag value attached to a global resource such as an organization, use the tagHolds.create method with the global endpoint hostname: POST https://cloudresourcemanager.googleapis.com/v3/tagValues/ TAGVALUE NAME /tagHolds If you are creating a tag hold for a tag value attached to a regional resource, such as a Compute Engine instance, use the tagHolds.create method with the regional endpoint where your resource is located.
- API To delete a tag binding that is attached to a global resource such as an organization, use the tagBindings.delete method: DELETE https://cloudresourcemanager.googleapis.com/v3/{name= TAGBINDINGS NAME } If you want to delete a tag binding that is attached to a regional resource, such as a Compute Engine instance, use the tagBindings.delete method with the regional endpoint where your resource is located.
- If you are attaching the tag to a global resource such as an organization, use the tagBindings.create method with the global endpoint hostname: POST https://cloudresourcemanager.googleapis.com/v3/tagBindings If you are attaching the tag to a regional resource, such as a Compute Engine instance, use the tagBindings.create method with the regional endpoint where your resource is located.

