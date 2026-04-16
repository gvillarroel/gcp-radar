---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:38.716Z"
product_name: "Google Cloud VMware Engine"
product_slug: "google-cloud-vmware-engine"
feature_name: "Default outbound firewall rule update"
feature_slug: "default-outbound-firewall-rule-update"
latest_feature_date: "2022-03-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineClient"
  - "https://docs.cloud.google.com/vmware-engine/docs/best-practices-security"
keywords:
  - "default"
  - "outbound"
  - "firewall"
  - "rule"
  - "update"
  - "projects"
  - "receive"
  - "expanded"
---

# Default outbound firewall rule update

Product: Google Cloud VMware Engine
Coverage: MEDIUM

## Step 02 Summary

New projects receive an expanded default outbound firewall rule that allows outbound TCP, UDP, and ICMP traffic.

## Extended Definition

New projects receive an expanded default outbound firewall rule that allows outbound TCP, UDP, and ICMP traffic.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineClient](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineClient)
- [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security)

## Supporting Pages

### "Class VmwareEngineAsyncClient (1.11.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient)
- Source ID: `site-python-reference`
- Final score: 162
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The result type for the operation will be ExternalAccessRule External access firewall rules for filtering incoming traffic destined to ExternalAddress resources. update external address update external address ( request : typing .
- For example: projects/my-project/locations/us-central1/networkPolicies/my-policy/externalAccessRules/my-rule This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- For example: projects/my-project/locations/us-central1/networkPolicies/my-policy/externalAccessRules/my-rule This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import vmwareengine v1 async def sample update external access rule(): Create a client client = vmwareengine v1 .

### "Class VmwareEngineClient (1.11.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineClient](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineClient)
- Source ID: `site-python-reference`
- Final score: 162
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The result type for the operation will be ExternalAccessRule External access firewall rules for filtering incoming traffic destined to ExternalAddress resources. update external address update external address ( request : typing .
- For example: projects/my-project/locations/us-central1/networkPolicies/my-policy/externalAccessRules/my-rule This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- For example: projects/my-project/locations/us-central1/networkPolicies/my-policy/externalAccessRules/my-rule This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import vmwareengine v1 def sample update external access rule(): Create a client client = vmwareengine v1 .

### "Best practices for VMware Engine security \_|\_ Google Cloud VMware Engine\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security)
- Source ID: `site-docs-reference-required-4`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- Task Topic VMware Engine Networking Identify and understand all traffic flows of your environment Use VMware Engine's Public IP Service for internet data transfer in Separate north-south and east-west firewall rules on gateway and distributed firewall in VMware Engine NSX Apply Zero Trust Security principles and micro-segmentation in NSX Deploy a third-party firewall appliance from the Cloud Marketplace portal for IPS/IDS capabilities Use Google Cloud Armor to help protect web services on VMware Engine from DDoS attacks Connect to Google Cloud Services privately without internet access Encrypt the communication between your on-premises environment and Google Cloud Help protect your data from exfiltration using VPC Service Controls VMware Engine IAM and Permissions Use predefined roles or custom roles to grant access to VMware Engine Restrict and actively audit administrator access to VMware Engine Configure an LDAP or Active Directory identity source Rotate the passwords of built-in VMware Engine service accounts VMware Engine Logging and Monitoring Ingest VMware Engine logs and metrics Use the Cloud Logging agent for workload VM logging Apply equivalent capabilities of Access Transparency and Access Approval policies VMware Engine Encryption Use a Google-managed Key provider enabled for vSAN encryption at rest Automate the rotation of encryption keys according to your organization's standards VMware Engine Backup and Disaster Recovery Backup your workloads using Backup and DR Implement disaster recovery with Backup and DR What's next Try out Google Cloud VMware Engine for yourself.
- This principle of protecting traffic between individual VMs that is denied by default is often also referred to as "Micro-segmentation" , which is a more granular approach for firewalling than the conventional implementation of firewalls between Layer 3 domains.
- Separate north-south and east-west firewall rules on gateway and distributed firewall in VMware Engine NSX Configure the distributed firewall (DFW) in NSX on the tier-1 logical router to segment internal traffic between your virtual layer 2 domains.
- The NSX DFW is designed to handle (internal) east-west network traffic between segments and allows firewall rules that allow and deny traffic between individual instances inside a segment.

