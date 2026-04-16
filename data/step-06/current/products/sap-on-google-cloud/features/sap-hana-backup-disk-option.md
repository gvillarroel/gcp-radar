---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:12:10.638Z"
product_name: "SAP on Google Cloud"
product_slug: "sap-on-google-cloud"
feature_name: "SAP HANA backup disk option"
feature_slug: "sap-hana-backup-disk-option"
latest_feature_date: "2023-03-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles"
  - "https://docs.cloud.google.com/sap/docs/architectures/sap-s4hana-on-gcp"
  - "https://docs.cloud.google.com/sap/docs/sap-hana-ha-dm-deployment"
keywords:
  - "sap"
  - "hana"
  - "backup"
  - "disk"
  - "option"
  - "scale"
  - "up"
  - "terraform"
---

# SAP HANA backup disk option

Product: SAP on Google Cloud
Coverage: MEDIUM

## Step 02 Summary

Scale-up SAP HANA Terraform deployments can provision a backup disk with the include_backup_disk argument.

## Extended Definition

Scale-up SAP HANA Terraform deployments can provision a backup disk with the include_backup_disk argument.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles](https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles)
- [https://docs.cloud.google.com/sap/docs/architectures/sap-s4hana-on-gcp](https://docs.cloud.google.com/sap/docs/architectures/sap-s4hana-on-gcp)
- [https://docs.cloud.google.com/sap/docs/sap-hana-ha-dm-deployment](https://docs.cloud.google.com/sap/docs/sap-hana-ha-dm-deployment)

## Supporting Pages

### "HA scale-up cluster configuration guide for SAP HANA on SLES \_|\_ SAP on\

- URL: [https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles](https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles)
- Source ID: `site-docs-reference-required-2`
- Final score: 208
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To manually configure a high-availability (HA) cluster for an SAP HANA scale-up system on SLES on Google Cloud, we recommend that you instead see HA scale-up cluster configuration guide for SAP HANA on SLES , which uses Terraform.
- Note: If you deploy SAP HANA using Google Cloud's Terraform module sap hana or sap hana ha , version 202309280828 or later, or the Terraform module manual sap hana scaleup ha , then fast restart is automatically enabled.
- Replace the temporary configuration file: rm /tmp/cluster.tmp vi /tmp/cluster.tmp Copy and paste the resource definitions into the /tmp/cluster.tmp file: SLES for SAP 15 SP5 or earlier primitive rsc SAPHana SID HDB inst num ocf:suse:SAPHana \ operations \$id="rsc sap SID HDB inst num -operations" \ op start interval="0" timeout="3600" \ op stop interval="0" timeout="3600" \ op promote interval="0" timeout="3600" \ op demote interval="0" timeout="3600" \ op monitor interval="60" role="Master" timeout="700" \ op monitor interval="61" role="Slave" timeout="700" \ params SID=" SID " InstanceNumber=" inst num " PREFER SITE TAKEOVER="true" DUPLICATE PRIMARY TIMEOUT="7200" AUTOMATED REGISTER="true" ms msl SAPHana SID HDB inst num rsc SAPHana SID HDB inst num \ meta notify="true" clone-max="2" clone-node-max="1" \ target-role="Started" interleave="true" colocation col saphana ip SID HDB inst num 4000: g-primary:Started \ msl SAPHana SID HDB inst num :Master order ord SAPHana SID HDB inst num Optional: cln SAPHanaTopology SID HDB inst num \ msl SAPHana SID HDB inst num SLES for SAP 15 SP6 or later primitive rsc SAPHana SID HDB inst num ocf:suse:SAPHanaController \ operations \$id="rsc sap SID HDB inst num -operations" \ op start interval="0" timeout="3600" \ op stop interval="0" timeout="3600" \ op promote interval="0" timeout="3600" \ op demote interval="0" timeout="3600" \ op monitor interval="60" role="Promoted" timeout="700" \ op monitor interval="61" role="Unpromoted" timeout="700" \ params SID=" SID " InstanceNumber=" inst num " PREFER SITE TAKEOVER="true" \ DUPLICATE PRIMARY TIMEOUT="7200" AUTOMATED REGISTER="true" clone mst SAPHana SID HDB inst num rsc SAPHana SID HDB inst num \ meta clone-node-max="1" interleave="true" promotable="true" colocation col saphana ip SID HDB inst num 4000: g-primary:Started \ mst SAPHana SID HDB inst num :Promoted order ord SAPHana SID HDB inst num Optional: cln SAPHanaTopology SID HDB inst num \ mst SAPHana SID HDB inst num Optionally, you can add the ON FAIL ACTION parameter to the SAPHanaController resource.
- Depending on your OS image, the command might be different. sudo -i -u SID LC adm Create database backups: For a SAP HANA single-database-container system: hdbsql -t -u system -p SYSTEM PASSWORD -i INST NUM \ "backup data using file ('full')" The following example shows a successful response from a new SAP HANA system: 0 rows affected (overall time 18.416058 sec; server time 18.414209 sec) For a SAP HANA multi-database-container system (MDC), create a backup of the system database as well as any tenant databases: hdbsql -t -d SYSTEMDB -u system -p SYSTEM PASSWORD -i INST NUM \ "backup data using file ('full')" hdbsql -t -d SID -u system -p SYSTEM PASSWORD -i INST NUM \ "backup data using file ('full')" The following example shows a successful response from a new SAP HANA system: 0 rows affected (overall time 16.590498 sec; server time 16.588806 sec) Confirm that the logging mode is set to normal: hdbsql -u system -p SYSTEM PASSWORD -i INST NUM \ "select value from "SYS"."M INIFILE CONTENTS" where key='log mode'" The output is similar to the following: VALUE "normal" Enable SAP HANA system replication As a part of enabling SAP HANA system replication, you need to copy the data and key files for the SAP HANA secure stores on the file system (SSFS) from the primary host to the secondary host.

### "Deployment Manager: SAP HANA scale-up high-availability cluster configuration\

- URL: [https://docs.cloud.google.com/sap/docs/sap-hana-ha-dm-deployment](https://docs.cloud.google.com/sap/docs/sap-hana-ha-dm-deployment)
- Source ID: `site-docs-reference-required-3`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- Note: If you deploy SAP HANA using Google Cloud's Terraform module sap hana or sap hana ha , version 202309280828 or later, or the Terraform module manual sap hana scaleup ha , then fast restart is automatically enabled.
- To automate the deployment of an SAP HANA scale-up system in a high-availability cluster on Google Cloud, we recommend that you use Terraform.
- For more information, see Terraform: SAP HANA scale-up high-availability cluster configuration guide .
- If you are using RHEL 7.7 or earlier, the value of transport: is udpu instead of knet : totem { version: 2 cluster name: hacluster transport: knet join: 60 max messages: 20 token: 20000 token retransmits before loss const: 10 crypto cipher: aes256 crypto hash: sha256 } nodelist { node { ring0 addr: example-rha-vm1 name: example-rha-vm1 nodeid: 1 } node { ring0 addr: example-rha-vm2 name: example-rha-vm2 nodeid: 2 } } quorum { provider: corosync votequorum two node: 1 } logging { to logfile: yes logfile: /var/log/cluster/corosync.log to syslog: yes timestamp: on } SLES Display your cluster resource configurations: crm config show The automation scripts that are used by this guide create the resource configurations that are shown in the following example: node 1: example-ha-vm1 \ attributes hana ha1 op mode=logreplay lpa ha1 lpt=1635380335 hana ha1 srmode=syncmem hana ha1 vhost=example-ha-vm1 hana ha1 remoteHost=example-ha-vm2 hana ha1 site=example-ha-vm1 node 2: example-ha-vm2 \ attributes lpa ha1 lpt=30 hana ha1 op mode=logreplay hana ha1 vhost=example-ha-vm2 hana ha1 site=example-ha-vm2 hana ha1 srmode=syncmem hana ha1 remoteHost=example-ha-vm1 primitive STONITH-example-ha-vm1 stonith:external/gcpstonith \ op monitor interval=300s timeout=120s \ op start interval=0 timeout=60s \ params instance name=example-ha-vm1 gcloud path="/usr/bin/gcloud" logging=yes pcmk reboot timeout=300 pcmk monitor retries=4 pcmk delay max=30 primitive STONITH-example-ha-vm2 stonith:external/gcpstonith \ op monitor interval=300s timeout=120s \ op start interval=0 timeout=60s \ params instance name=example-ha-vm2 gcloud path="/usr/bin/gcloud" logging=yes pcmk reboot timeout=300 pcmk monitor retries=4 primitive rsc SAPHanaTopology HA1 HDB00 ocf:suse:SAPHanaTopology \ operations $id=rsc sap2 HA1 HDB00-operations \ op monitor interval=10 timeout=600 \ op start interval=0 timeout=600 \ op stop interval=0 timeout=300 \ params SID=HA1 InstanceNumber=00 primitive rsc SAPHana HA1 HDB00 ocf:suse:SAPHana \ operations $id=rsc sap HA1 HDB00-operations \ op start interval=0 timeout=3600 \ op stop interval=0 timeout=3600 \ op promote interval=0 timeout=3600 \ op demote interval=0 timeout=3600 \ op monitor interval=60 role=Master timeout=700 \ op monitor interval=61 role=Slave timeout=700 \ params SID=HA1 InstanceNumber=00 PREFER SITE TAKEOVER=true DUPLICATE PRIMARY TIMEOUT=7200 AUTOMATED REGISTER=true primitive rsc vip hc-primary anything \ params binfile="/usr/bin/socat" cmdline options="-U TCP-LISTEN:60000,backlog=10,fork,reuseaddr /dev/null" \ op monitor timeout=20s interval=10s \ op params depth=0 primitive rsc vip int-primary IPaddr2 \ params ip=10.128.15.101 cidr netmask=32 nic=eth0 \ op monitor interval=3600s timeout=60s group g-primary rsc vip int-primary rsc vip hc-primary ms msl SAPHana HA1 HDB00 rsc SAPHana HA1 HDB00 \ meta notify=true clone-max=2 clone-node-max=1 target-role=Started interleave=true clone cln SAPHanaTopology HA1 HDB00 rsc SAPHanaTopology HA1 HDB00 \ meta clone-node-max=1 target-role=Started interleave=true location LOC STONITH example-ha-vm1 STONITH-example-ha-vm1 -inf: example-ha-vm1 location LOC STONITH example-ha-vm2 STONITH-example-ha-vm2 -inf: example-ha-vm2 colocation col saphana ip HA1 HDB00 4000: g-primary:Started msl SAPHana HA1 HDB00:Master order ord SAPHana HA1 HDB00 Optional: cln SAPHanaTopology HA1 HDB00 msl SAPHana HA1 HDB00 property cib-bootstrap-options: \ have-watchdog=false \ dc-version="1.1.24+20210811.f5abda0ee-3.18.1-1.1.24+20210811.f5abda0ee" \ cluster-infrastructure=corosync \ cluster-name=hacluster \ maintenance-mode=false \ stonith-timeout=300s \ stonith-enabled=true rsc defaults rsc-options: \ resource-stickiness=1000 \ migration-threshold=5000 op defaults op-options: \ timeout=600 Display your cluster configuration file, corosync.conf : cat /etc/corosync/corosync.conf The automation scripts that are used by this guide specify parameters settings in the corosync.conf file as shown in the following example: totem { version: 2 secauth: off crypto hash: sha1 crypto cipher: aes256 cluster name: hacluster clear node high bit: yes token: 20000 token retransmits before loss const: 10 join: 60 max messages: 20 transport: udpu interface { ringnumber: 0 bindnetaddr: 10.128.1.63 mcastport: 5405 ttl: 1 } } logging { fileline: off to stderr: no to logfile: no logfile: /var/log/cluster/corosync.log to syslog: yes debug: off timestamp: on logger subsys { subsys: QUORUM debug: off } } nodelist { node { ring0 addr: example-ha-vm1 nodeid: 1 } node { ring0 addr: example-ha-vm2 nodeid: 2 } } quorum { provider: corosync votequorum expected votes: 2 two node: 1 } Check the load balancer and the health of the instance groups To confirm that the load balancer and health check were set up correctly, check the load balancer and instance groups in the Google Cloud console.

### "Reference architecture: SAP S/4HANA on Google Cloud \_|\_ SAP on Google\

- URL: [https://docs.cloud.google.com/sap/docs/architectures/sap-s4hana-on-gcp](https://docs.cloud.google.com/sap/docs/architectures/sap-s4hana-on-gcp)
- Source ID: `site-docs-reference`
- Final score: 192
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Recommended storage options for Linux directory structure on SAP HANA: SAP HANA directory Recommended storage option in Google Cloud /usr/sap Balanced Persistent Disk /hana/data SSD-based Persistent Disk or Hyperdisk /hana/log SSD-based Persistent Disk or Hyperdisk /hana/shared Balanced Persistent Disk /hanabackup Balanced Persistent Disk In distributed deployments, /hana/shared and /hanabackup can also be mounted as a network file system using an NFS solution such as Filestore.
- The following diagram shows the flow of the backup feature for SAP HANA: Back up disks using snapshots Another option that you can add to your backup strategy is to take snapshots of entire disks by using the disk snapshot feature of Compute Engine.
- What's next Learn more about the Google Cloud services used in this guide: VPC networks Compute Engine Storage options : Persistent Disk, Hyperdisk, and Cloud Storage Google Cloud console Cloud Monitoring Identity and Access Management Filestore NetApp Cloud Volumes ONTAP Google Cloud NetApp Volumes Backup and DR Service For more reference architectures, design guides, and best practices, explore the Cloud Architecture Center .
- The following diagram shows the flow of backups when you use the Backint feature of Google Cloud's Agent for SAP: Back up to disks You can use the native SAP HANA backup and recovery function with Compute Engine Persistent Disk volumes and use a Cloud Storage bucket for longer-term storage of the backups.

