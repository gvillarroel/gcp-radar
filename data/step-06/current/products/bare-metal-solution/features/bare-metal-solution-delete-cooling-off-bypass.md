---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:19:23.988Z"
product_name: "Bare Metal Solution"
product_slug: "bare-metal-solution"
feature_name: "Bare Metal Solution delete cooling-off bypass"
feature_slug: "bare-metal-solution-delete-cooling-off-bypass"
latest_feature_date: "2023-04-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bare-metal/docs/bms-maintenance"
  - "https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr"
  - "https://docs.cloud.google.com/bare-metal/docs/configure-serial-console"
keywords:
  - "cooling"
  - "bypass"
  - "off"
  - "delete"
  - "solution"
  - "metal"
  - "the"
  - "bare"
---

# Bare Metal Solution delete cooling-off bypass

Product: Bare Metal Solution
Coverage: LOW

## Step 02 Summary

The cooling-off period can now be skipped when deleting a LUN or storage volume in Bare Metal Solution.

## Extended Definition

The cooling-off period can now be skipped when deleting a LUN or storage volume in Bare Metal Solution.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr)
- [https://docs.cloud.google.com/bare-metal/docs/configure-serial-console](https://docs.cloud.google.com/bare-metal/docs/configure-serial-console)

## Supporting Pages

### Maintain the Bare Metal Solution environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- Source ID: `site-docs-root`
- Final score: 226
- Re-rank relevance: N/A

Evidence snippets:
- To clear all reservations, replace the end of the command with the following: -d "{ 'reservations' : [] }" Manage storage You can manage the storage in your Bare Metal Solution environment in the following ways: View storage volumes Organize storage volumes by using labels Rename a storage volume Provision storage volume resources Remove storage volume resources View boot volume snapshots and their details Create a boot volume snapshot Delete a boot volume snapshot Restore a boot volume snapshot View storage volumes Paying attention to your storage resources in the Bare Metal Solution environment helps you determine if your servers have enough storage capacity for applications and workloads.
- Copy the command, paste it into the Cloud Shell prompt, and press the Enter or Return key. curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "X-Goog-User-Project: PROJECT ID " \ -H "Content-Type: application/json" \ "https://baremetalsolution.googleapis.com/v2/projects/ PROJECT ID /locations/ REGION /volumes/ VOLUME NAME /snapshots" -d \ '{\''name\'': \''projects/ PROJECT ID /locations/ REGION /volumes/ VOLUME NAME /snapshots/ SNAPSHOT NAME \'', \''description\'': \'' DESCRIPTION \''}' \ Delete a boot volume snapshot You can delete boot volume snapshots.
- To turn the power off for your server, enter your project ID, region, and server name and issue the following curl command. curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "X-Goog-User-Project: PROJECT ID " \ -H "Content-Type: application/json" \ "https://baremetalsolution.googleapis.com/v2/projects/ PROJECT ID /locations/ REGION /instances/ SERVER NAME :stop" Because starting, stopping, and restarting a server takes a while to complete, you can check the status by following the steps in View the status of a long-running operation .
- Manage networks You can manage the networks in your Bare Metal Solution environment in the following ways: View networks Organize networks by using labels Rename a network Create a network Attach a network to a server Detach a network from a server Delete a network View advanced networking information for a Bare Metal Solution environment Implement IP address management in a Bare Metal Solution environment View networks Monitoring your network resources in the Bare Metal Solution environment lets you know how your servers connect to other resources.

### "Solution Guide: Google Cloud Backup and DR for Oracle on Bare Metal Solution\

- URL: [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr)
- Source ID: `site-docs-root-2`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- Different Compute Engine zones offer different network latencies to the Bare Metal Solution hosts.
- If you use an NFS or dNFS-based backup disk, then egress from the Linux host (Agent) in Bare Metal Solution to the backup/recovery appliance in the Compute Engine VPC on the following ports: TCP/UDP-111 (rpcbind) TCP/UDP-756 (status) TCP/UDP-2049 (nfs) TCP/UDP-4001 (mountd) TCP/UDP-4045 (nlockmgr) Configure Google Cloud DNS to resolve Bare Metal Solution hostnames and domains, to ensure name resolution is consistent across Bare Metal Solution servers, VMs, and Compute Engine-based resources such as the Backup and DR Service.
- Understand the factors that impact performance for the network and your backup servers The following items affect network I/O between Oracle on Bare Metal Solution and your backup servers in Google Cloud: Flash storage Similar to Google Cloud Persistent Disk, the flash storage arrays that provide the storage for Bare Metal Solution systems increase I/O capabilities based on how much storage you assign to the host.
- Figure 1 : Components for using Backup and DR with Oracle databases in a Bare Metal Solution environment As you can see in the diagram, this solution requires the following components: Bare Metal Solution regional extension– Allows you to run Oracle databases in a third-party data center adjacent to a Google Cloud data center, and use your existing on-premises software licenses.

### "Configure the interactive serial console \_|\_ Bare Metal Solution \_|\_\

- URL: [https://docs.cloud.google.com/bare-metal/docs/configure-serial-console](https://docs.cloud.google.com/bare-metal/docs/configure-serial-console)
- Source ID: `site-docs-root-2`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- API To delete a public SSH key, enter your project ID and SSH key ID, and issue the following curl command. curl -v \ -X DELETE \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "X-Goog-User-Project: PROJECT ID " \ -H "Content-Type: application/json" \ "https://baremetalsolution.googleapis.com/v2/projects/ PROJECT ID /locations/global/sshKeys/ SSH KEY ID " Replace the following: PROJECT ID : Your project ID.
- API To register your SSH keys, enter your project ID, SSH key ID, and public key filename, and issue the following curl command. curl -v \ -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "X-Goog-User-Project: PROJECT ID " \ -H "Content-Type: application/json" \ "https://baremetalsolution.googleapis.com/v2/projects/ PROJECT ID /locations/global/sshKeys?ssh key id= SSH KEY ID " \ --data "{\"public key\": \"$(cat SSH KEY ID .pub)\"}" Replace the following: PROJECT ID : Your project ID.
- API To enable access to the interactive serial console, enter your project ID, region, and server name, and issue the following curl command. curl -v \ -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "X-Goog-User-Project: PROJECT ID " \ -H "Content-Type: application/json" \ "https://baremetalsolution.googleapis.com/v2/projects/ PROJECT ID /locations/ REGION /instances/ SERVER NAME :enableInteractiveSerialConsole" Replace the following: PROJECT ID : Your project ID.
- API To disable the interactive serial console, enter your project ID, region, and server name, and issue the following curl command. curl -v \ -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "X-Goog-User-Project: PROJECT ID " \ -H "Content-Type: application/json" \ "https://baremetalsolution.googleapis.com/v2/projects/ PROJECT ID /locations/ REGION /instances/ SERVER NAME :disableInteractiveSerialConsole" Replace the following: PROJECT ID : Your project ID.

