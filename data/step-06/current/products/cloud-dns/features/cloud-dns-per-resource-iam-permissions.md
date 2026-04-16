---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:24.687Z"
product_name: "Cloud DNS"
product_slug: "cloud-dns"
feature_name: "Cloud DNS per-resource IAM permissions"
feature_slug: "cloud-dns-per-resource-iam-permissions"
latest_feature_date: "2022-12-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dns/docs/access-control"
  - "https://docs.cloud.google.com/dns/docs/overview"
  - "https://docs.cloud.google.com/dns/docs/audit-logging"
  - "https://docs.cloud.google.com/dns/docs/zones"
keywords:
  - "dns"
  - "per"
  - "resource"
  - "iam"
  - "permissions"
  - "now"
  - "provides"
  - "that"
---

# Cloud DNS per-resource IAM permissions

Product: Cloud DNS
Coverage: MEDIUM

## Step 02 Summary

Cloud DNS now provides IAM permissions that can be assigned at the individual resource level; Cloud DNS now supports IAM permissions scoped to specific resources, with granular read, write, and admin roles.

## Extended Definition

Cloud DNS now provides IAM permissions that can be assigned at the individual resource level; Cloud DNS now supports IAM permissions scoped to specific resources, with granular read, write, and admin roles.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dns/docs/access-control](https://docs.cloud.google.com/dns/docs/access-control)
- [https://docs.cloud.google.com/dns/docs/overview](https://docs.cloud.google.com/dns/docs/overview)
- [https://docs.cloud.google.com/dns/docs/audit-logging](https://docs.cloud.google.com/dns/docs/audit-logging)
- [https://docs.cloud.google.com/dns/docs/zones](https://docs.cloud.google.com/dns/docs/zones)

## Supporting Pages

### Roles and permissions \_|\_ Cloud DNS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dns/docs/access-control](https://docs.cloud.google.com/dns/docs/access-control)
- Source ID: `site-iam-reference`
- Final score: 250
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Lowest-level resources where you can grant this role: Managed zone compute.networks.get compute.networks.list dns.changes. dns.changes.create dns.changes.get dns.changes.list dns.dnsKeys. dns.dnsKeys.get dns.dnsKeys.list dns.gkeClusters. dns. gkeClusters. bindDNSResponsePolicy dns. gkeClusters. bindPrivateDNSZone dns.managedZoneOperations. dns.managedZoneOperations.get dns.managedZoneOperations.list dns.managedZones.create dns.managedZones.delete dns.managedZones.get dns.managedZones.getIamPolicy dns.managedZones.list dns.managedZones.update dns.networks. dns. networks. bindDNSResponsePolicy dns. networks. bindPrivateDNSPolicy dns. networks. bindPrivateDNSZone dns. networks. targetWithPeeringZone dns.networks.useHealthSignals dns.policies. dns.policies.create dns.policies.createTagBinding dns.policies.delete dns.policies.deleteTagBinding dns.policies.get dns.policies.list dns.policies.listEffectiveTags dns.policies.listTagBindings dns.policies.update dns.projects.get dns.resourceRecordSets. dns.resourceRecordSets.create dns.resourceRecordSets.delete dns.resourceRecordSets.get dns.resourceRecordSets.list dns.resourceRecordSets.update dns.responsePolicies. dns.responsePolicies.create dns.responsePolicies.delete dns.responsePolicies.get dns.responsePolicies.list dns.responsePolicies.update dns.responsePolicyRules. dns.responsePolicyRules.create dns.responsePolicyRules.delete dns.responsePolicyRules.get dns.responsePolicyRules.list dns.responsePolicyRules.update resourcemanager.projects.get resourcemanager.projects.list DNS Peer ( roles/ dns.peer ) Access to target networks with DNS peering zones dns. networks. targetWithPeeringZone DNS Reader ( roles/ dns.reader ) Provides read-only access to all Cloud DNS resources.
- Warning: Do not grant service agent roles to any principals except service agents . compute. globalNetworkEndpointGroups. attachNetworkEndpoints compute. globalNetworkEndpointGroups. create compute. globalNetworkEndpointGroups. delete compute. globalNetworkEndpointGroups. detachNetworkEndpoints compute. globalNetworkEndpointGroups. get compute.globalOperations.get compute.healthChecks.get The following table lists the DNS Armor IAM roles with a corresponding list of all the permissions that each role includes.
- You would then give that user (who) the /roles/dns.admin role, which has the dns.changes.create and dns.resourceRecordSets.create permissions (what) so that they can create and update resource record sets (which).
- Roles The following table lists the Cloud DNS API IAM roles with a corresponding list of all the permissions that each role includes.

### Cloud DNS overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dns/docs/overview](https://docs.cloud.google.com/dns/docs/overview)
- Source ID: `site-docs-root`
- Final score: 232
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Per resource permission access To configure a policy on a DNS resource such as a managed zone, you must have Owner access to the project that owns that resource.
- Cloud DNS supports Identity and Access Management (IAM) permissions at the project level and individual DNS zone level.
- For information about how to set individual resource IAM permissions, see Create a zone with specific IAM permissions .
- These permissions also apply to service accounts that you might use to manage your DNS services.

### Cloud DNS audit logging information \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dns/docs/audit-logging](https://docs.cloud.google.com/dns/docs/audit-logging)
- Source ID: `site-iam-reference`
- Final score: 214
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Permission type Methods ADMIN READ dns.changes.get dns.changes.list dns.dnsKeys.get dns.managedZoneOperations.list dns.managedZones.get dns.managedZones.getiampolicy dns.managedZones.list dns.policies.get dns.policies.list dns.projects.get dns.resourceRecordSets.get dns.resourceRecordSets.list dns.responsePolicies.get dns.responsePolicies.list dns.responsePolicyRules.get dns.responsePolicyRules.list dns.changes.get dns.changes.list dns.dnsKeys.get dns.managedZoneOperations.list dns.managedZones.get dns.managedZones.getiampolicy dns.managedZones.list dns.policies.get dns.policies.list dns.projects.get dns.resourceRecordSets.get dns.resourceRecordSets.list dns.responsePolicies.get dns.responsePolicies.list dns.responsePolicyRules.get dns.responsePolicyRules.list ADMIN WRITE dns.changes.create dns.managedZones.create dns.managedZones.delete dns.managedZones.patch dns.managedZones.setiampolicy dns.managedZones.update dns.policies.create dns.policies.delete dns.policies.patch dns.policies.update dns.resourceRecordSets.create dns.resourceRecordSets.delete dns.resourceRecordSets.patch dns.responsePolicies.create dns.responsePolicies.delete dns.responsePolicies.patch dns.responsePolicies.update dns.responsePolicyRules.create dns.responsePolicyRules.delete dns.responsePolicyRules.patch dns.responsePolicyRules.update dns.changes.create dns.managedZones.create dns.managedZones.delete dns.managedZones.patch dns.managedZones.setiampolicy dns.managedZones.update dns.policies.create dns.policies.delete dns.policies.patch dns.policies.update dns.resourceRecordSets.create dns.resourceRecordSets.delete dns.resourceRecordSets.patch dns.responsePolicies.create dns.responsePolicies.delete dns.responsePolicies.patch dns.responsePolicies.update dns.responsePolicyRules.create dns.responsePolicyRules.delete dns.responsePolicyRules.patch dns.responsePolicyRules.update DATA READ dns.dnsKeys.list dns.managedZoneOperations.get dns.managedZoneOperations.list dns.dnsKeys.list dns.managedZoneOperations.get dns.managedZoneOperations.list API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Cloud DNS. cloud.dns.api.v1.ChangesService The following audit logs are associated with methods belonging to cloud.dns.api.v1.ChangesService . create Method : dns.changes.create Audit log type : Admin activity Permissions : dns.changes.create - ADMIN WRITE dns.resourceRecordSets.create - ADMIN WRITE dns.resourceRecordSets.delete - ADMIN WRITE dns.resourceRecordSets.update - ADMIN WRITE Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="dns.responsePolicyRules.update" cloud.dns.api.v1beta2.ChangesService The following audit logs are associated with methods belonging to cloud.dns.api.v1beta2.ChangesService . create Method : dns.changes.create Audit log type : Admin activity Permissions : dns.changes.create - ADMIN WRITE dns.resourceRecordSets.create - ADMIN WRITE dns.resourceRecordSets.delete - ADMIN WRITE dns.resourceRecordSets.update - ADMIN WRITE Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="dns.projects.get" cloud.dns.api.v1beta2.ResourceRecordSetsService The following audit logs are associated with methods belonging to cloud.dns.api.v1beta2.ResourceRecordSetsService . create Method : dns.resourceRecordSets.create Audit log type : Admin activity Permissions : dns.changes.create - ADMIN WRITE dns.resourceRecordSets.create - ADMIN WRITE Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="dns.projects.get" cloud.dns.api.v1.ResourceRecordSetsService The following audit logs are associated with methods belonging to cloud.dns.api.v1.ResourceRecordSetsService . create Method : dns.resourceRecordSets.create Audit log type : Admin activity Permissions : dns.changes.create - ADMIN WRITE dns.resourceRecordSets.create - ADMIN WRITE Method is a long-running or streaming operation : No.

### Create, modify, and delete zones \_|\_ Cloud DNS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dns/docs/zones](https://docs.cloud.google.com/dns/docs/zones)
- Source ID: `site-docs-root`
- Final score: 214
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Terraform resource "google dns managed zone" "private zone" { name = "private-zone" dns name = "private.example.com." description = "Example private DNS zone" labels = { foo = "bar" } visibility = "private" private visibility config { networks { network url = google compute network.network 1.id } networks { network url = google compute network.network 2.id } } } resource "google compute network" "network 1" { name = "network-1" auto create subnetworks = false } resource "google compute network" "network 2" { name = "network-2" auto create subnetworks = false } Create a managed reverse lookup private zone A managed reverse lookup zone is a private zone with a special attribute that instructs Cloud DNS to perform a PTR lookup against Compute Engine DNS data.
- Permissions dns.managedZones.create to create a managed zone dns.managedZones.list to list managed zones dns.networks.bindPrivateDNSZone dns.networks.targetWithPeeringZone dns.gkeClusters.bindPrivateDNSZone dns.managedZones.update dns.managedZones.list dns.managedZones.patch dns.activePeeringZones.getZoneInfo dns.activePeeringZones.list dns.activePeeringZones.deactivate Roles roles/dns.admin roles/dns.peer Before you begin The Cloud DNS API requires that you create a Cloud DNS project and enable the Cloud DNS API.
- To determine the URL for a VPC network, use the following gcloud command, replacing VPC NETWORK NAME with the network's name: gcloud compute networks describe VPC NETWORK NAME \ --format="get(selfLink)" Create a zone with specific IAM permissions The Identity and Access Management (IAM) permission for individual resource managed zone lets you set up specific read, write, or administrator permissions for different managed zones under the same project.
- Click Create . gcloud Run the dns managed-zones create command: gcloud dns managed-zones create NAME \ --description= DESCRIPTION \ --dns-name= DNS SUFFIX \ --networks= VPC NETWORK LIST \ --labels= LABELS \ --visibility=private Replace the following: NAME : a name for your zone DESCRIPTION : a description for your zone DNS SUFFIX : the DNS suffix for your zone, such as example.private VPC NETWORK LIST : a comma-delimited list of VPC networks that are authorized to query the zone LABELS : an optional comma-delimited list of key-value pairs such as dept=marketing or project=project1 ; for more information, see the SDK documentation Terraform resource "google dns managed zone" "private zone" { name = "private-zone" dns name = "private.example.com." description = "Example private DNS zone" labels = { foo = "bar" } visibility = "private" private visibility config { networks { network url = google compute network.network 1.id } networks { network url = google compute network.network 2.id } } } resource "google compute network" "network 1" { name = "network-1" auto create subnetworks = false } resource "google compute network" "network 2" { name = "network-2" auto create subnetworks = false } API Send a POST request using the managedZones.create method: POST https://dns.googleapis.com/dns/v1/projects/ PROJECT ID /managedZones { "name": " NAME ", "description": " DESCRIPTION ", "dnsName": " DNS NAME ", "visibility": "private", "privateVisibilityConfig": { "kind": "dns#managedZonePrivateVisibilityConfig", "networks": [ { "kind": "dns#managedZonePrivateVisibilityConfigNetwork", "networkUrl": " VPC NETWORK 1 " }, { "kind": "dns#managedZonePrivateVisibilityConfigNetwork", "networkUrl": " VPC NETWORK 2 " }, .... ] } } Replace the following: PROJECT ID : the ID of the project where the managed zone is created NAME : a name for your zone DESCRIPTION : a description for your zone DNS NAME : the DNS suffix for your zone, such as example.private VPC NETWORK 1 and VPC NETWORK 2 : URLs for VPC networks in the same project that can query records in this zone.

