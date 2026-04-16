---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:12:10.636Z"
product_name: "SAP on Google Cloud"
product_slug: "sap-on-google-cloud"
feature_name: "SAP HANA deployment automation static IP address support"
feature_slug: "sap-hana-deployment-automation-static-ip-address-support"
latest_feature_date: "2023-06-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sap/docs/sap-hana-ha-dm-deployment"
  - "https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles"
  - "https://docs.cloud.google.com/sap/docs/architectures/sap-s4hana-on-gcp"
keywords:
  - "sap"
  - "hana"
  - "deployment"
  - "automation"
  - "static"
  - "ip"
  - "address"
  - "terraform"
---

# SAP HANA deployment automation static IP address support

Product: SAP on Google Cloud
Coverage: MEDIUM

## Step 02 Summary

Terraform-based SAP HANA deployment automation can assign static IP addresses to master, worker, standby, primary, and secondary VM instances.

## Extended Definition

Terraform-based SAP HANA deployment automation can assign static IP addresses to master, worker, standby, primary, and secondary VM instances.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sap/docs/sap-hana-ha-dm-deployment](https://docs.cloud.google.com/sap/docs/sap-hana-ha-dm-deployment)
- [https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles](https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles)
- [https://docs.cloud.google.com/sap/docs/architectures/sap-s4hana-on-gcp](https://docs.cloud.google.com/sap/docs/architectures/sap-s4hana-on-gcp)

## Supporting Pages

### "Deployment Manager: SAP HANA scale-up high-availability cluster configuration\

- URL: [https://docs.cloud.google.com/sap/docs/sap-hana-ha-dm-deployment](https://docs.cloud.google.com/sap/docs/sap-hana-ha-dm-deployment)
- Source ID: `site-docs-reference-required-3`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- The guide uses Cloud Deployment Manager to deploy two Compute Engine virtual machines (VMs), two SAP HANA scale up systems, a virtual IP address (VIP) with an internal passthrough Network Load Balancer implementation, and an OS-based HA cluster, all according to the best practices from Google Cloud, SAP, and the OS vendor.
- This guide shows you how to automate the deployment of SAP HANA in a Red Hat Enterprise Linux (RHEL) or SUSE Linux Enterprise Server (SLES) high-availability (HA) cluster that uses an internal passthrough Network Load Balancer to manage the virtual IP (VIP) address.
- For the initial deployment of your SAP HANA system or resizing the machine to increase the number of NUMA nodes, make sure that SAP HANA is running during the execution of automation script that Google Cloud provides to enable SAP HANA Fast Restart.
- To automate the deployment of an SAP HANA scale-up system in a high-availability cluster on Google Cloud, we recommend that you use Terraform.

### "HA scale-up cluster configuration guide for SAP HANA on SLES \_|\_ SAP on\

- URL: [https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles](https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles)
- Source ID: `site-docs-reference-required-2`
- Final score: 193
- Re-rank relevance: N/A

Evidence snippets:
- Reload the systemd manager configuration. systemctl daemon-reload Confirm the drop-in file was created: service corosync status You should see a line for the drop-in file, as shown in the following example: ● corosync.service - Corosync Cluster Engine Loaded: loaded (/usr/lib/systemd/system/corosync.service; disabled; vendor preset: disabled) Drop-In: /etc/systemd/system/corosync.service.d └─override.conf Active: active (running) since Tue 2021-07-20 23:45:52 UTC; 2 days ago Create a local cluster IP resource for the VIP address To configure the VIP address in the operating system, create a local cluster IP resource for the VIP address that you reserved earlier: crm configure primitive rsc vip int-primary IPaddr2 \ params ip= vip-address cidr netmask=32 nic="lo" op monitor interval=3600s timeout=60s Note: To ensure that the SAP HANA cluster is future compatible and supports systemd dynamic NIC naming convention, use the loopback interface ( lo ) with the IPaddr2 resource configuration instead of a static interface name like ethX or ensX .
- For the initial deployment of your SAP HANA system or resizing the machine to increase the number of NUMA nodes, make sure that SAP HANA is running during the execution of automation script that Google Cloud provides to enable SAP HANA Fast Restart.
- Confirm IP address reservation: $ gcloud compute addresses describe VIP NAME \ --region CLUSTER REGION You should see output similar to the following example: address: 10.0.0.19 addressType: INTERNAL creationTimestamp: '2020-05-20T14:19:03.109-07:00' description: '' id: '8961491304398200872' kind: compute#address name: vip-for-hana-ha networkTier: PREMIUM purpose: GCE ENDPOINT region: https://www.googleapis.com/compute/v1/projects/example-project-123456/regions/us-central1 selfLink: https://www.googleapis.com/compute/v1/projects/example-project-123456/regions/us-central1/addresses/vip-for-hana-ha status: RESERVED subnetwork: https://www.googleapis.com/compute/v1/projects/example-project-123456/regions/us-central1/subnetworks/example-subnet-us-central1 Create instance groups for your host VMs In Cloud Shell, create two unmanaged instance groups and assign the primary master host VM to one and the secondary master host VM to the other: $ gcloud compute instance-groups unmanaged create PRIMARY IG NAME \ --zone= PRIMARY ZONE $ gcloud compute instance-groups unmanaged add-instances PRIMARY IG NAME \ --zone= PRIMARY ZONE \ --instances= PRIMARY HOST NAME $ gcloud compute instance-groups unmanaged create SECONDARY IG NAME \ --zone= SECONDARY ZONE $ gcloud compute instance-groups unmanaged add-instances SECONDARY IG NAME \ --zone= SECONDARY ZONE \ --instances= SECONDARY HOST NAME Confirm the creation of the instance groups: $ gcloud compute instance-groups unmanaged list You should see output similar to the following example: NAME ZONE NETWORK NETWORK PROJECT MANAGED INSTANCES hana-ha-ig-1 us-central1-a example-network example-project-123456 No 1 hana-ha-ig-2 us-central1-c example-network example-project-123456 No 1 Create a Compute Engine health check In Cloud Shell, create the health check.
- Enable HANA Active/Active (Read Enabled) On your secondary host, enable Active/Active (read enabled) for SAP HANA system replication by following these steps: As root, place the cluster in maintenance mode: crm configure property maintenance-mode="true" As SID LC adm , stop SAP HANA: HDB stop As SID LC adm , re-register the HANA secondary system with SAP HANA system replication using the operation mode logreplay readaccess : hdbnsutil -sr register --remoteHost= primary-host-name --remoteInstance= inst num \ --replicationMode=syncmem --operationMode=logreplay readaccess --name= secondary-host-name As SID LC adm , start SAP HANA: HDB start As SID LC adm , confirm that HANA synchronization status is ACTIVE : cdpy; python systemReplicationStatus.py --sapcontrol=1 grep overall replication status You should see an output similar to the following example: overall replication status=ACTIVE Configure Pacemaker Configure your Pacemaker HA cluster for Active/Active (read enabled) by running the following commands as root: Create a local cluster IP resource for the VIP address that you reserver for the secondary system: crm configure primitive rsc vip int-secondary IPaddr2 \ params ip= secondary-vip-address cidr netmask=32 nic="lo" \ op monitor interval=3600s timeout=60s Set up the helper health-check service by running the following commands: The load balancer uses a listener on the health-check port of each host to determine where the secondary instance of the SAP HANA cluster is running.

### "Reference architecture: SAP S/4HANA on Google Cloud \_|\_ SAP on Google\

- URL: [https://docs.cloud.google.com/sap/docs/architectures/sap-s4hana-on-gcp](https://docs.cloud.google.com/sap/docs/architectures/sap-s4hana-on-gcp)
- Source ID: `site-docs-reference`
- Final score: 169
- Re-rank relevance: N/A

Evidence snippets:
- SAP Note 2456432 - SAP Applications on Google Cloud: Supported Products and Google Cloud machine types 2446441 - Linux on Google Cloud Platform (IaaS): Adaption of your SAP License 2456953 - Windows on Google Cloud (IaaS): Adaption of your SAP License 1380654 - SAP support in public cloud environments SAP Note 2456406 - SAP on Google Cloud Platform: Support Prerequisites Deployment automation To install SAP S/4HANA on Google Cloud, you can use the following deployment options: To automate the deployment of a distributed or distributed with high availability (HA) system, you can use the Guided Deployment Automation tool in Workload Manager.
- To automate the deployment of a centralized or distributed SAP HANA system, you can use the Terraform configurations provided by Google Cloud.
- For an overview about the alternative solutions that you can use to manage single points of failure, see the following sections in this guide: Availability and continuity Deployment architecture for SAP HANA Deployment architecture for SAP S/4HANA Availability and continuity During the planning phase of implementing an SAP S/4HANA system, you need to specify the following data points for defining the system's availability and continuity: Service Level Objectives (SLO) : A target value or range of values for a service level that is measured by a service level indicator (SLI).
- Recommended storage options for Linux directory structure on SAP HANA: SAP HANA directory Recommended storage option in Google Cloud /usr/sap Balanced Persistent Disk /hana/data SSD-based Persistent Disk or Hyperdisk /hana/log SSD-based Persistent Disk or Hyperdisk /hana/shared Balanced Persistent Disk /hanabackup Balanced Persistent Disk In distributed deployments, /hana/shared and /hanabackup can also be mounted as a network file system using an NFS solution such as Filestore.

