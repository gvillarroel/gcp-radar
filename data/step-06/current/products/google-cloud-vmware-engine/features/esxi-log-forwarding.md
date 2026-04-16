---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:38.689Z"
product_name: "Google Cloud VMware Engine"
product_slug: "google-cloud-vmware-engine"
feature_name: "ESXi log forwarding"
feature_slug: "esxi-log-forwarding"
latest_feature_date: "2023-11-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vmware-engine/docs/environment/howto-forward-syslog"
  - "https://docs.cloud.google.com/vmware-engine/docs/best-practices-security"
  - "https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient"
keywords:
  - "esxi"
  - "log"
  - "forwarding"
  - "logs"
  - "including"
  - "nsx"
  - "distributed"
  - "firewall"
---

# ESXi log forwarding

Product: Google Cloud VMware Engine
Coverage: MEDIUM

## Step 02 Summary

ESXi logs, including NSX-T Distributed Firewall logs, can be sent to a remote syslog server.

## Extended Definition

ESXi logs, including NSX-T Distributed Firewall logs, can be sent to a remote syslog server.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vmware-engine/docs/environment/howto-forward-syslog](https://docs.cloud.google.com/vmware-engine/docs/environment/howto-forward-syslog)
- [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security)
- [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient)

## Supporting Pages

### "Forwarding syslog messages to a remote server \_|\_ Google Cloud VMware\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/environment/howto-forward-syslog](https://docs.cloud.google.com/vmware-engine/docs/environment/howto-forward-syslog)
- Source ID: `site-docs-reference`
- Final score: 145
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For vCenter and ESXi logs, including NSX Distributed Firewall (DFW) Log, use VMware Engine .
- The subtask for logging server creation displays. gcloud To configure ESXi or vCenter to forward logs to the syslog server by using the Google Cloud CLI, use the gcloud vmware private-clouds logging-servers create command . gcloud vmware private-clouds logging-servers create LOGGING SERVER ID \ --project= PROJECT ID \ --hostname=" HOST NAME " \ --port=" PORT " \ --source-type=" SOURCE TYPE " \ --protocol=" PROTOCOL " \ --private-cloud= PRIVATE CLOUD ID \ --location= ZONE Replace the following: LOGGING SERVER ID : the logging server ID for this request.
- API To configure ESXi or vCenter to forward logs to the syslog server by using the VMware Engine API, make a POST request: GET "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ ZONE /privateClouds/ PRIVATE CLOUD ID /loggingServers?logging server id= LOGGING SERVER ID " -d '{ "hostname": " HOST NAME ", "port": " PORT ", "sourceType": " SOURCE TYPE ", "protocol": " PROTOCOL " }' Replace the following: PROJECT ID : the project for this request.
- Forward logs by using VMware Engine To configure ESXi or vCenter to forward logs to the syslog server by using the Google Cloud console, Google Cloud CLI or VMware Engine API, do the following.

### "Best practices for VMware Engine security \_|\_ Google Cloud VMware Engine\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security)
- Source ID: `site-docs-reference-required-4`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- Task Topic VMware Engine Networking Identify and understand all traffic flows of your environment Use VMware Engine's Public IP Service for internet data transfer in Separate north-south and east-west firewall rules on gateway and distributed firewall in VMware Engine NSX Apply Zero Trust Security principles and micro-segmentation in NSX Deploy a third-party firewall appliance from the Cloud Marketplace portal for IPS/IDS capabilities Use Google Cloud Armor to help protect web services on VMware Engine from DDoS attacks Connect to Google Cloud Services privately without internet access Encrypt the communication between your on-premises environment and Google Cloud Help protect your data from exfiltration using VPC Service Controls VMware Engine IAM and Permissions Use predefined roles or custom roles to grant access to VMware Engine Restrict and actively audit administrator access to VMware Engine Configure an LDAP or Active Directory identity source Rotate the passwords of built-in VMware Engine service accounts VMware Engine Logging and Monitoring Ingest VMware Engine logs and metrics Use the Cloud Logging agent for workload VM logging Apply equivalent capabilities of Access Transparency and Access Approval policies VMware Engine Encryption Use a Google-managed Key provider enabled for vSAN encryption at rest Automate the rotation of encryption keys according to your organization's standards VMware Engine Backup and Disaster Recovery Backup your workloads using Backup and DR Implement disaster recovery with Backup and DR What's next Try out Google Cloud VMware Engine for yourself.
- ESXi logs - these can be collected using remote syslog configuration, however, you need to file a support request with Google Cloud to configure ESXi syslog forwarding.
- Deploy a third-party firewall appliance from the Cloud Marketplace portal for IPS/IDS capabilities If you require advanced Layer 7 security, including IDS/IPS capabilities for inbound traffic into the private cloud from the rest of your network or between your NSX network segments, consider deploying a third-party firewall appliance.
- Separate north-south and east-west firewall rules on gateway and distributed firewall in VMware Engine NSX Configure the distributed firewall (DFW) in NSX on the tier-1 logical router to segment internal traffic between your virtual layer 2 domains.

### "Class VmwareEngineAsyncClient (1.11.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient)
- Source ID: `site-python-reference`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description google.cloud.vmwareengine v1.types.LoggingServer Logging server to receive vCenter or ESXi logs. get management dns zone binding get management dns zone binding ( request : typing .
- The result type for the operation will be LoggingServer Logging server to receive vCenter or ESXi logs. create management dns zone binding create management dns zone binding ( request : typing .
- The result type for the operation will be LoggingServer Logging server to receive vCenter or ESXi logs. update management dns zone binding update management dns zone binding ( request : typing .
- For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } dns bind permission path dns bind permission path ( project : str , location : str ) - > str Returns a fully-qualified dns bind permission string. dns forwarding path dns forwarding path ( project : str , location : str , private cloud : str ) - > str Returns a fully-qualified dns forwarding string. external access rule path external access rule path ( project : str , location : str , network policy : str , external access rule : str ) - > str Returns a fully-qualified external access rule string. external address path external address path ( project : str , location : str , private cloud : str , external address : str ) - > str Returns a fully-qualified external address string. fetch network policy external addresses fetch network policy external addresses ( request : typing .

