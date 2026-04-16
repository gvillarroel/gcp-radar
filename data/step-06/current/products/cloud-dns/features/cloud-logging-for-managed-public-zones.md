---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:24.688Z"
product_name: "Cloud DNS"
product_slug: "cloud-dns"
feature_name: "Cloud Logging for managed public zones"
feature_slug: "cloud-logging-for-managed-public-zones"
latest_feature_date: "2021-11-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dns/docs/audit-logging"
  - "https://docs.cloud.google.com/dns/docs/zones"
  - "https://docs.cloud.google.com/dns/docs/dnssec-migrate"
  - "https://docs.cloud.google.com/dns/docs/best-practices"
keywords:
  - "logging"
  - "for"
  - "managed"
  - "public"
  - "zones"
  - "dns"
  - "now"
  - "supports"
---

# Cloud Logging for managed public zones

Product: Cloud DNS
Coverage: MEDIUM

## Step 02 Summary

Cloud DNS now supports Cloud Logging for managed public zones.

## Extended Definition

Cloud DNS now supports Cloud Logging for managed public zones.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dns/docs/audit-logging](https://docs.cloud.google.com/dns/docs/audit-logging)
- [https://docs.cloud.google.com/dns/docs/zones](https://docs.cloud.google.com/dns/docs/zones)
- [https://docs.cloud.google.com/dns/docs/dnssec-migrate](https://docs.cloud.google.com/dns/docs/dnssec-migrate)
- [https://docs.cloud.google.com/dns/docs/best-practices](https://docs.cloud.google.com/dns/docs/best-practices)

## Supporting Pages

### Cloud DNS audit logging information \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dns/docs/audit-logging](https://docs.cloud.google.com/dns/docs/audit-logging)
- Source ID: `site-iam-reference`
- Final score: 213
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Permission type Methods ADMIN READ dns.changes.get dns.changes.list dns.dnsKeys.get dns.managedZoneOperations.list dns.managedZones.get dns.managedZones.getiampolicy dns.managedZones.list dns.policies.get dns.policies.list dns.projects.get dns.resourceRecordSets.get dns.resourceRecordSets.list dns.responsePolicies.get dns.responsePolicies.list dns.responsePolicyRules.get dns.responsePolicyRules.list dns.changes.get dns.changes.list dns.dnsKeys.get dns.managedZoneOperations.list dns.managedZones.get dns.managedZones.getiampolicy dns.managedZones.list dns.policies.get dns.policies.list dns.projects.get dns.resourceRecordSets.get dns.resourceRecordSets.list dns.responsePolicies.get dns.responsePolicies.list dns.responsePolicyRules.get dns.responsePolicyRules.list ADMIN WRITE dns.changes.create dns.managedZones.create dns.managedZones.delete dns.managedZones.patch dns.managedZones.setiampolicy dns.managedZones.update dns.policies.create dns.policies.delete dns.policies.patch dns.policies.update dns.resourceRecordSets.create dns.resourceRecordSets.delete dns.resourceRecordSets.patch dns.responsePolicies.create dns.responsePolicies.delete dns.responsePolicies.patch dns.responsePolicies.update dns.responsePolicyRules.create dns.responsePolicyRules.delete dns.responsePolicyRules.patch dns.responsePolicyRules.update dns.changes.create dns.managedZones.create dns.managedZones.delete dns.managedZones.patch dns.managedZones.setiampolicy dns.managedZones.update dns.policies.create dns.policies.delete dns.policies.patch dns.policies.update dns.resourceRecordSets.create dns.resourceRecordSets.delete dns.resourceRecordSets.patch dns.responsePolicies.create dns.responsePolicies.delete dns.responsePolicies.patch dns.responsePolicies.update dns.responsePolicyRules.create dns.responsePolicyRules.delete dns.responsePolicyRules.patch dns.responsePolicyRules.update DATA READ dns.dnsKeys.list dns.managedZoneOperations.get dns.managedZoneOperations.list dns.dnsKeys.list dns.managedZoneOperations.get dns.managedZoneOperations.list API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Cloud DNS. cloud.dns.api.v1.ChangesService The following audit logs are associated with methods belonging to cloud.dns.api.v1.ChangesService . create Method : dns.changes.create Audit log type : Admin activity Permissions : dns.changes.create - ADMIN WRITE dns.resourceRecordSets.create - ADMIN WRITE dns.resourceRecordSets.delete - ADMIN WRITE dns.resourceRecordSets.update - ADMIN WRITE Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="dns.managedZoneOperations.list" cloud.dns.api.v1beta2.ManagedZonesService The following audit logs are associated with methods belonging to cloud.dns.api.v1beta2.ManagedZonesService . create Method : dns.managedZones.create Audit log type : Admin activity Permissions : dns.managedZones.create - ADMIN WRITE Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="dns.managedZoneOperations.list" cloud.dns.api.v1.ManagedZonesService The following audit logs are associated with methods belonging to cloud.dns.api.v1.ManagedZonesService . create Method : dns.managedZones.create Audit log type : Admin activity Permissions : dns.managedZones.create - ADMIN WRITE Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="dns.changes.list" cloud.dns.api.v1beta2.DnsKeysService The following audit logs are associated with methods belonging to cloud.dns.api.v1beta2.DnsKeysService . get Method : dns.dnsKeys.get Audit log type : Data access Permissions : dns.dnsKeys.get - DATA READ dns.managedZones.list - ADMIN READ Method is a long-running or streaming operation : No.

### Create, modify, and delete zones \_|\_ Cloud DNS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dns/docs/zones](https://docs.cloud.google.com/dns/docs/zones)
- Source ID: `site-docs-root`
- Final score: 211
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Zone details page is displayed. gcloud Run the dns managed-zones create command: gcloud dns managed-zones create NAME \ --description= DESCRIPTION \ --dns-name= DNS SUFFIX \ --labels= LABELS \ --visibility=public Replace the following: NAME : a name for your zone DESCRIPTION : a description for your zone DNS SUFFIX : the DNS suffix for your zone, such as example.com LABELS : an optional comma-delimited list of key-value pairs such as dept=marketing or project=project1 ; for more information, see the SDK documentation Terraform resource "google dns managed zone" "example zone" { name = "example-zone" dns name = "example-${random id.rnd.hex}.com." description = "Example DNS zone" labels = { name = "value" } } resource "random id" "rnd" { byte length = 4 } API Send a POST request using the managedZones.create method: POST https://dns.googleapis.com/dns/v1/projects/ PROJECT ID /managedZones { "name": " NAME ", "description": " DESCRIPTION ", "dnsName": " DNS NAME ", "visibility": "public" } Replace the following: PROJECT ID : the ID of the project where the managed zone is created NAME : a name for your zone DESCRIPTION : a description for your zone DNS NAME : the DNS suffix for your zone, such as example.com Important: Cloud DNS creates NS and SOA records for you automatically when you create the zone.
- Click Create . gcloud Run the dns managed-zones create command: gcloud dns managed-zones create NAME \ --description= DESCRIPTION \ --dns-name= DNS SUFFIX \ --networks= VPC NETWORK LIST \ --labels= LABELS \ --visibility=private Replace the following: NAME : a name for your zone DESCRIPTION : a description for your zone DNS SUFFIX : the DNS suffix for your zone, such as example.private VPC NETWORK LIST : a comma-delimited list of VPC networks that are authorized to query the zone LABELS : an optional comma-delimited list of key-value pairs such as dept=marketing or project=project1 ; for more information, see the SDK documentation Terraform resource "google dns managed zone" "private zone" { name = "private-zone" dns name = "private.example.com." description = "Example private DNS zone" labels = { foo = "bar" } visibility = "private" private visibility config { networks { network url = google compute network.network 1.id } networks { network url = google compute network.network 2.id } } } resource "google compute network" "network 1" { name = "network-1" auto create subnetworks = false } resource "google compute network" "network 2" { name = "network-2" auto create subnetworks = false } API Send a POST request using the managedZones.create method: POST https://dns.googleapis.com/dns/v1/projects/ PROJECT ID /managedZones { "name": " NAME ", "description": " DESCRIPTION ", "dnsName": " DNS NAME ", "visibility": "private", "privateVisibilityConfig": { "kind": "dns#managedZonePrivateVisibilityConfig", "networks": [ { "kind": "dns#managedZonePrivateVisibilityConfigNetwork", "networkUrl": " VPC NETWORK 1 " }, { "kind": "dns#managedZonePrivateVisibilityConfigNetwork", "networkUrl": " VPC NETWORK 2 " }, .... ] } } Replace the following: PROJECT ID : the ID of the project where the managed zone is created NAME : a name for your zone DESCRIPTION : a description for your zone DNS NAME : the DNS suffix for your zone, such as example.private VPC NETWORK 1 and VPC NETWORK 2 : URLs for VPC networks in the same project that can query records in this zone.
- Click Save . gcloud Run the dns managed-zones update command: gcloud dns managed-zones update NAME \ --description= DESCRIPTION \ --networks= VPC NETWORK LIST Replace the following: NAME : a name for your zone DESCRIPTION : a description for your zone VPC NETWORK LIST : a comma-delimited list of VPC networks that are authorized to query the zone Update labels To add new, change existing, remove selected, or clear all labels on a managed zone, complete the following steps. gcloud Run the dns managed-zones update command: gcloud dns managed-zones update NAME \ --update-labels= LABELS gcloud dns managed-zones update NAME \ --remove-labels= LABELS gcloud dns managed-zones update NAME \ --clear-labels Replace the following: NAME : a name for your zone LABELS : an optional comma-delimited list of key-value pairs such as dept=marketing or project=project1 ; for more information, see the SDK documentation List and describe managed zones The following sections show how to list or describe a managed zone.
- Permissions dns.managedZones.create to create a managed zone dns.managedZones.list to list managed zones dns.networks.bindPrivateDNSZone dns.networks.targetWithPeeringZone dns.gkeClusters.bindPrivateDNSZone dns.managedZones.update dns.managedZones.list dns.managedZones.patch dns.activePeeringZones.getZoneInfo dns.activePeeringZones.list dns.activePeeringZones.deactivate Roles roles/dns.admin roles/dns.peer Before you begin The Cloud DNS API requires that you create a Cloud DNS project and enable the Cloud DNS API.

### Migrate or transfer DNSSEC-enabled zones \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dns/docs/dnssec-migrate](https://docs.cloud.google.com/dns/docs/dnssec-migrate)
- Source ID: `site-iam-reference`
- Final score: 211
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can also use dig or delv to query the Cloud DNS name servers for DNSKEY records, but you must verify that the returned public keys are correct and valid for your zone.
- If your provider accepts DNSKEY at this step, you can include them now and skip the steps below that transfer public keys from Cloud DNS to the new provider.
- You can also use dig or delv to query for DNSKEY records, but you must verify that the returned public keys are correct and valid for your zone.
- Your zones can safely leave DNSSEC transfer state after a week, and must not remain in DNSSEC transfer state for more than a month or two.

### Best practices for Cloud DNS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dns/docs/best-practices](https://docs.cloud.google.com/dns/docs/best-practices)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- After you have deployed the solution, octoDNS performs one-time as well as ongoing sync between your current DNS zones and managed DNS zones hosted in Cloud DNS.
- It can act as an authoritative DNS server for public zones that are visible to the internet, or for private zones that are visible only within your network.
- Public zones cover the organization's public records, such as DNS records for the public website, and they're not as relevant in a hybrid setup.
- Use forwarding zones to query on-premises servers To make sure that you can query DNS records in your on-premises environment, set up a forwarding zone for the domain that you're using on-premises for your corporate resources (such as corp.example.com ).

