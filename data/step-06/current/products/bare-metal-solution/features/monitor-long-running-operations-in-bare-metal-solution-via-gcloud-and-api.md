---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:19:24.002Z"
product_name: "Bare Metal Solution"
product_slug: "bare-metal-solution"
feature_name: "Monitor long-running operations in Bare Metal Solution via gcloud and API"
feature_slug: "monitor-long-running-operations-in-bare-metal-solution-via-gcloud-and-api"
latest_feature_date: "2022-03-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bare-metal/docs/bms-maintenance"
  - "https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-monitoring"
keywords:
  - "operations"
  - "long"
  - "monitor"
  - "running"
  - "solution"
  - "metal"
  - "bare"
  - "in"
---

# Monitor long-running operations in Bare Metal Solution via gcloud and API

Product: Bare Metal Solution
Coverage: LOW

## Step 02 Summary

Adds visibility of long-running operations via gcloud and API commands.

## Extended Definition

Adds visibility of long-running operations via gcloud and API commands.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr)
- [https://docs.cloud.google.com/bare-metal/docs/bms-monitoring](https://docs.cloud.google.com/bare-metal/docs/bms-monitoring)

## Supporting Pages

### Maintain the Bare Metal Solution environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- Source ID: `site-docs-root`
- Final score: 256
- Re-rank relevance: N/A

Evidence snippets:
- To use the operations ID and view the status, see View the status of a long-running operation . { "name": "operations/5c0c8b3f-5edc-4117-be9f-812af9740aaf" } While the server reboots, you cannot use ping or SSH from your jump host VM instance to reach the Bare Metal Solution server.
- Copy the command, paste it into the Cloud Shell prompt, and press the Enter or Return key. curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "X-Goog-User-Project: PROJECT ID " \ -H "Content-Type: application/json" \ "https://baremetalsolution.googleapis.com/v2/projects/ PROJECT ID /locations/ REGION /nfsShares" -d \ '{ "name": "projects/ PROJECT ID /locations/ REGION /nfsShares/ NFS VOLUME NAME ", "labels": { "nfsKey1": "some value", "key2": "another value", }, "requestedSizeGib": " SIZE GIB ", "storageType": " STORAGE TYPE ", "allowedClients": [ { "network": "projects/ PROJECT ID /locations/ REGION /networks/ NETWORK NAME ", "allowedClientsCidr": " IP ADDRESS RANGE ", "mountPermissions": " MOUNT PERMISSIONS ", "allowDev": ALLOW DEV , "allowSuid": ALLOW SUID , "noRootSquash": ENABLE ROOT SQUASH , } ], }' Because creating an NFS volume takes a while to complete, you can check the status by following the steps in View the status of a long-running operation .
- Copy the command, paste it into the Cloud Shell prompt, and press the Enter or Return key. curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "X-Goog-User-Project: PROJECT ID " \ -H "Content-Type: application/json" \ "https://baremetalsolution.googleapis.com/v2/projects/ PROJECT ID /locations/ REGION /nfsShares/ NFS VOLUME NAME ?updateMask=allowed clients%2Clabels" -d \ '{ "name": "projects/ PROJECT ID /locations/ REGION /nfsShares/ NFS VOLUME NAME ", "labels": { "newKey": "newVal", }, "allowedClients": [ { "network": "projects/ PROJECT ID /locations/ REGION /networks/ NFS VOLUME NAME ", "allowedClientsCidr": " IP ADDRESS RANGE ", "mountPermissions": " MOUNT PERMISSIONS ", "allowDev": ALLOW DEV , "allowSuid": ALLOW SUID , "noRootSquash": ENABLE ROOT SQUASH , } ], }' Because updating an NFS volume takes a while to complete, you can check the status by following the steps in View the status of a long-running operation .
- Add true for the hyperthreading value if you want to enable it or false to disable it. curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "X-Goog-User-Project: PROJECT ID " \ -H "Content-Type: application/json" \ "https://baremetalsolution.googleapis.com/v2/projects/ PROJECT ID /locations/ REGION /instances/ SERVER NAME ?updateMask=hyperthreading enabled" -d "{ 'hyperthreadingEnabled' : ' HYPERTHREADING VALUE ' }" Because this change takes awhile to complete, you can check the status by following the steps in View the status of a long-running operation .

### "Solution Guide: Google Cloud Backup and DR for Oracle on Bare Metal Solution\

- URL: [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr)
- Source ID: `site-docs-root-2`
- Final score: 252
- Re-rank relevance: N/A

Evidence snippets:
- Architecture Figure 1 shows a simplified view of the infrastructure that you need to build when you deploy Backup and DR to protect Oracle databases running in a Bare Metal Solution environment.
- If you use an NFS or dNFS-based backup disk, then egress from the Linux host (Agent) in Bare Metal Solution to the backup/recovery appliance in the Compute Engine VPC on the following ports: TCP/UDP-111 (rpcbind) TCP/UDP-756 (status) TCP/UDP-2049 (nfs) TCP/UDP-4001 (mountd) TCP/UDP-4045 (nlockmgr) Configure Google Cloud DNS to resolve Bare Metal Solution hostnames and domains, to ensure name resolution is consistent across Bare Metal Solution servers, VMs, and Compute Engine-based resources such as the Backup and DR Service.
- Understand the factors that impact performance for the network and your backup servers The following items affect network I/O between Oracle on Bare Metal Solution and your backup servers in Google Cloud: Flash storage Similar to Google Cloud Persistent Disk, the flash storage arrays that provide the storage for Bare Metal Solution systems increase I/O capabilities based on how much storage you assign to the host.
- Figure 1 : Components for using Backup and DR with Oracle databases in a Bare Metal Solution environment As you can see in the diagram, this solution requires the following components: Bare Metal Solution regional extension– Allows you to run Oracle databases in a third-party data center adjacent to a Google Cloud data center, and use your existing on-premises software licenses.

### Monitoring in a Bare Metal Solution environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-monitoring](https://docs.cloud.google.com/bare-metal/docs/bms-monitoring)
- Source ID: `site-docs-root-2`
- Final score: 227
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Monitoring data At a high level, our monitoring data comes from the following sources: SNMP traps Syslog messages Messages from dedicated management software Intelligent Platform Management Interface (IPMI) Common metrics of the monitored devices: CPU utilization Network Interface: Bandwidth utilization Packet discards Errors Alerting Google Cloud conducted extensive normalization and validation activities for the specific requirements of the Bare Metal Solution environment.
- The following is a list of infrastructure devices in a Bare Metal Solution environment that we monitor: Compute infrastructure Server hardware Storage infrastructure Storage devices SAN switches Network infrastructure Routers Switches Interconnect infrastructure Google Cloud also keeps track of the data center environment, including server room temperature and humidity.
- We hope that this summary of our monitoring capabilities helps you to be confident in the Bare Metal Solution environment as you migrate your infrastructure and applications to the cloud.
- Monitoring in a Bare Metal Solution environment Bare Metal Solution lets you run specialized workloads in regional extensions located near Google Cloud data centers.

