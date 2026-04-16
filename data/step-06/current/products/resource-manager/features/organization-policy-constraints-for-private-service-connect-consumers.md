---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:51:00.072Z"
product_name: "Resource Manager"
product_slug: "resource-manager"
feature_name: "Organization Policy constraints for Private Service Connect consumers"
feature_slug: "organization-policy-constraints-for-private-service-connect-consumers"
latest_feature_date: "2023-07-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/resource-manager/docs/tags/tags-supported-services"
  - "https://docs.cloud.google.com/resource-manager/reference/rest/v1/ListAvailableOrgPolicyConstraintsResponse"
  - "https://docs.cloud.google.com/resource-manager/docs/custom-constraints"
keywords:
  - "organization"
  - "policy"
  - "constraints"
  - "private"
  - "connect"
  - "consumers"
  - "define"
  - "attachment"
---

# Organization Policy constraints for Private Service Connect consumers

Product: Resource Manager
Coverage: MEDIUM

## Step 02 Summary

New organization policy constraints define service attachment controls for Private Service Connect consumers.

## Extended Definition

New organization policy constraints define service attachment controls for Private Service Connect consumers.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/resource-manager/docs/tags/tags-supported-services](https://docs.cloud.google.com/resource-manager/docs/tags/tags-supported-services)
- [https://docs.cloud.google.com/resource-manager/reference/rest/v1/ListAvailableOrgPolicyConstraintsResponse](https://docs.cloud.google.com/resource-manager/reference/rest/v1/ListAvailableOrgPolicyConstraintsResponse)
- [https://docs.cloud.google.com/resource-manager/docs/custom-constraints](https://docs.cloud.google.com/resource-manager/docs/custom-constraints)

## Supporting Pages

### Services that support tags \_|\_ Resource Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/tags/tags-supported-services](https://docs.cloud.google.com/resource-manager/docs/tags/tags-supported-services)
- Source ID: `site-docs-reference-2`
- Final score: 155
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported service resources You can attach tags to the following types of Google Cloud resources: Google Cloud service Resource types AlloyDB for PostgreSQL Clusters Backups API Gateway APIs Gateways API hub APIs API deployments Artifact Registry Repositories ( Preview ) BigQuery Datasets Tables Views Bigtable Instances Google Cloud Armor Network Edge Security Services Security Policies Certificate Manager Certificates Certificate maps Trust configs Certificate issuance configurations DNS authorizations Certificate Authority Service CA pools Certificate templates Cloud Billing View resource-level tags in the Cloud Billing BigQuery export Cloud Data Fusion Instances ( Preview ) Cloud Deploy Delivery pipelines ( Preview ) Targets ( Preview ) Cloud Domains Registrations Cloud Key Management Service (Cloud KMS) Key rings Cloud Load Balancing Backend buckets Backend services Forwarding rules Health checks Network endpoint groups SSL policies SSL certificates Target GRPC proxies Target HTTP(S) proxies Target instances Target pools Target SSL proxies Target TCP proxies URL maps Zonal instance groups Cloud Logging Log buckets Cloud Router Routers Cloud Interconnect Interconnects Interconnect attachments Cloud VPN External VPN gateways VPN gateways VPN tunnels Target VPN gateways Cloud Run Services Jobs ( Preview ) Cloud SQL Instances Cloud Storage Buckets Cloud Workstations Clusters Transcoder API Job JobTemplate Compute Engine Images Instances Regional persistent disks Snapshots Zonal persistent disks Managed Service for Apache Spark Clusters Dataproc Metastore Services Federations Datastore Databases Datastream Private connectivity configurations Connection profiles Streams Cloud DNS Policies Filestore Backups Instances Snapshots Firestore Databases Google Distributed Cloud BareMetalCluster BareMetalAdminCluster VMWareCluster VMWareAdminCluster Google Kubernetes Engine (GKE) Clusters Identity and Access Management Custom roles Service accounts Managed Service for Microsoft Active Directory (Managed Microsoft AD) Domains Memorystore for Redis Instances Pub/Sub Topics Subscriptions Snapshots reCAPTCHA Enterprise Key Resource Manager Organizations Folders Projects Secret Manager Secrets Spanner Instances Google Cloud VMware Engine Private Cloud Private Connection Networks Network Peering Network Policy VPC Networks Subnetworks Routes VPC firewall rules Workflows Workflows Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Google Cloud service Resource types Identity and Access Management (IAM) Allow and deny policies Organization Policy Service Organization policies Resources that support tags Virtual Private Cloud (VPC) Network firewall policies VM instances Secure Web Proxy instances The following sections describe how you can use tags with policy engine services.
- Organization Policy Service You can use organization policies with tags to control how your organization policy constraints are applied on certain resources.
- Virtual Private Cloud You can use tags to define sources and targets in network firewall policies and regional firewall policies.

### "ListAvailableOrgPolicyConstraintsResponse \_|\_ Resource Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/resource-manager/reference/rest/v1/ListAvailableOrgPolicyConstraintsResponse](https://docs.cloud.google.com/resource-manager/reference/rest/v1/ListAvailableOrgPolicyConstraintsResponse)
- Source ID: `site-api-reference`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- Constraints can be configured by the organization's policy administrator to fit the needs of the organzation by setting Policies for Constraints at different locations in the organization's resource hierarchy.
- Constraints have a default behavior determined by the constraintDefault field, which is the enforcement behavior that is used in the absence of a Policy being defined or inherited for the resource in question.
- JSON representation Constraint JSON representation ConstraintDefault ListConstraint JSON representation BooleanConstraint The response returned from the projects.listAvailableOrgPolicyConstraints method.
- Home Technology areas Resource Manager Reference Send feedback ListAvailableOrgPolicyConstraintsResponse Stay organized with collections Save and categorize content based on your preferences.

### "Manage resources with custom constraints \_|\_ Resource Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/resource-manager/docs/custom-constraints](https://docs.cloud.google.com/resource-manager/docs/custom-constraints)
- Source ID: `site-docs-reference-2`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- As the organization policy administrator , you can define an organization policy, which is a set of restrictions called constraints that apply to Google Cloud resources and descendants of those resources in the Google Cloud resource hierarchy .
- Create the constraint To define a constraint that denies all project create and updates if the project ID does not start with dev , create the constraint-allow-dev-projects.yaml with the following contents: name : organizations/ ORGANIZATION ID /customConstraints/custom.allowProjectForDevIdOnly resourceTypes : - cloudresourcemanager.googleapis.com/Project methodTypes : - CREATE - UPDATE condition : "resource.projectId.startsWith(\"dev \")" actionType : ALLOW displayName : Allow dev projects description : All projects in the org should start with dev .
- Test the policy Create a project with project ID sampleDemoProject in the organization: gcloud projects create sampleDemoProject \ --organization = ORGANIZATION ID The output is the following: PERMISSION DENIED: The caller does not have permission Example custom organization policies for common use cases This table provides syntax examples for some common custom constraints.
- This page shows you how to use Organization Policy Service custom constraints to restrict specific operations on the following Google Cloud resources: cloudresourcemanager.googleapis.com/Project cloudresourcemanager.googleapis.com/Folder To learn more about Organization Policy, see Custom organization policies .

