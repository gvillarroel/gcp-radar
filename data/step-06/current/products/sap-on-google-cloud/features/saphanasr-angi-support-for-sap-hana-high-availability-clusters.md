---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:12:10.629Z"
product_name: "SAP on Google Cloud"
product_slug: "sap-on-google-cloud"
feature_name: "SAPHanaSR-angi support for SAP HANA high-availability clusters"
feature_slug: "saphanasr-angi-support-for-sap-hana-high-availability-clusters"
latest_feature_date: "2025-01-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles"
  - "https://docs.cloud.google.com/sap/docs/sap-hana-ha-dm-deployment"
  - "https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-hana"
keywords:
  - "saphanasr"
  - "angi"
  - "sap"
  - "hana"
  - "high"
  - "availability"
  - "clusters"
  - "sles"
---

# SAPHanaSR-angi support for SAP HANA high-availability clusters

Product: SAP on Google Cloud
Coverage: MEDIUM

## Step 02 Summary

SAP HANA high-availability clusters on SLES 15 SP6 for SAP and later can use the SAPHanaSR-angi package, with automatic installation and configuration in the latest Terraform module.

## Extended Definition

SAP HANA high-availability clusters on SLES 15 SP6 for SAP and later can use the SAPHanaSR-angi package, with automatic installation and configuration in the latest Terraform module.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles](https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles)
- [https://docs.cloud.google.com/sap/docs/sap-hana-ha-dm-deployment](https://docs.cloud.google.com/sap/docs/sap-hana-ha-dm-deployment)
- [https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-hana](https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-hana)

## Supporting Pages

### "HA scale-up cluster configuration guide for SAP HANA on SLES \_|\_ SAP on\

- URL: [https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles](https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles)
- Source ID: `site-docs-reference-required-2`
- Final score: 246
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Getting support for SAP HANA on SLES If you need help resolving a problem with high-availability clusters for SAP HANA on SLES, gather the required diagnostic information and contact Cloud Customer Care.
- SLES for SAP 15 SP5 or earlier Cluster Summary: Stack: corosync Current DC: hana-ha-vm-1 (version 2.0.4+20200616.2deceaa3a-3.15.1-2.0.4+20200616.2deceaa3a) - partition with quorum Last updated: Fri Oct 7 21:52:46 2022 Last change: Fri Oct 7 21:51:42 2022 by root via crm attribute on hana-ha-vm-1 2 nodes configured 10 resource instances configured Node List: Online: [ hana-ha-vm-1 hana-ha-vm-2 ] Active Resources: STONITH-hana-ha-vm-1 (stonith:fence gce): Started hana-ha-vm-2 STONITH-hana-ha-vm-2 (stonith:fence gce): Started hana-ha-vm-1 Resource Group: g-primary: rsc vip int-primary (ocf::heartbeat:IPaddr2): Started hana-ha-vm-1 rsc vip hc-primary (ocf::heartbeat:anything): Started hana-ha-vm-1 Clone Set: cln SAPHanaTopology HA1 HDB00 [rsc SAPHanaTopology HA1 HDB00]: Started: [ hana-ha-vm-1 hana-ha-vm-2 ] Clone Set: msl SAPHana HA1 HDB00 [rsc SAPHana HA1 HDB00] (promotable): Masters: [ hana-ha-vm-1 ] Slaves: [ hana-ha-vm-2 ] Resource Group: g-secondary: rsc vip int-secondary (ocf::heartbeat:IPaddr2): Started hana-ha-vm-2 rsc healthcheck-secondary (ocf::heartbeat:anything): Started hana-ha-vm-2 SLES for SAP 15 SP6 or later Cluster Summary: Stack: corosync Current DC: hana-ha-vm-1 (version 2.1.7+20231219.0f7f88312-150600.6.3.1-2.1.7+20231219.0f7f88312) - partition with quorum Last updated: Tue Oct 15 05:46:18 2024 Last change: Tue Oct 15 05:46:18 2024 by root via via crm attribute on hana-ha-vm-1 2 nodes configured 10 resource instances configured Node List: Online: [ hana-ha-vm-1 hana-ha-vm-2 ] Active Resources: STONITH-hana-ha-vm-1 (stonith:fence gce): Started hana-ha-vm-2 STONITH-hana-ha-vm-2 (stonith:fence gce): Started hana-ha-vm-1 Resource Group: g-primary: rsc vip int-primary (ocf::heartbeat:IPaddr2): Started hana-ha-vm-1 rsc vip hc-primary (ocf::heartbeat:anything): Started hana-ha-vm-1 Clone Set: cln SAPHanaTopology HA1 HDB00 [rsc SAPHanaTopology HA1 HDB00]: Started: [ hana-ha-vm-1 hana-ha-vm-2 ] Clone Set: cln SAPHanaFileSystem HA1 HDB00 [rsc SAPHanaFileSystem HA1 HDB00]: Started: [ hana-ha-vm-1 hana-ha-vm-2 ] Clone Set: mst SAPHana HA1 HDB00 [rsc SAPHana HA1 HDB00] (promotable): Masters: [ hana-ha-vm-1 ] Slaves: [ hana-ha-vm-2 ] Resource Group: g-secondary: rsc vip int-secondary (ocf::heartbeat:IPaddr2): Started hana-ha-vm-2 rsc healthcheck-secondary (ocf::heartbeat:anything): Started hana-ha-vm-2 Evaluate your SAP HANA workload To automate continuous validation checks for your SAP HANA high-availability workloads running on Google Cloud, you can use Workload Manager .
- On both the primary and secondary site, complete the following steps: As SID LC adm , stop SAP HANA: HDB stop As root or SID LC adm , open the global.ini file for editing: vi /hana/shared/ SID /global/hdb/custom/config/global.ini Add the following definitions to the global.ini file: SLES for SAP 15 SP5 or earlier [ha dr provider SAPHanaSR] provider = SAPHanaSR path = /usr/share/SAPHanaSR/ execution order = 1 [ha dr provider suschksrv] provider = susChkSrv path = /usr/share/SAPHanaSR/ execution order = 3 action on lost = stop [trace] ha dr saphanasr = info SLES for SAP 15 SP6 or later [ha dr provider susHanaSR] provider = susHanaSR path = /usr/share/SAPHanaSR-angi execution order = 1 [ha dr provider suschksrv] provider = susChkSrv path = /usr/share/SAPHanaSR-angi execution order = 3 action on lost = stop [ha dr provider susTkOver] provider = susTkOver path = /usr/share/SAPHanaSR-angi execution order = 2 sustkover timeout = 30 [trace] ha dr sushanasr = info ha dr suschksrv = info ha dr sustkover = info The action on lost parameter defines the action that the hook must take when it identifies a lost indexserver .
- What's next See the following resource for more information: If you're using SLES for SAP 15 SP4 or SP5, then for information about how to upgrade to the SUSE SAPHanaSR-angi resource agent in your HA cluster, see Upgrade SAPHanaSR to SAPHanaSR-angi in a scale-up HA cluster on SLES .

### "Deployment Manager: SAP HANA scale-up high-availability cluster configuration\

- URL: [https://docs.cloud.google.com/sap/docs/sap-hana-ha-dm-deployment](https://docs.cloud.google.com/sap/docs/sap-hana-ha-dm-deployment)
- Source ID: `site-docs-reference-required-3`
- Final score: 201
- Re-rank relevance: N/A

Evidence snippets:
- Click Create to create your firewall rule. gcloud Create a firewall rule by using the following command: $ gcloud compute firewall-rules create FIREWALL NAME --direction=INGRESS --priority=1000 \ --network= NETWORK NAME --action=ALLOW --rules= PROTOCOL : PORT \ --source-ranges IP RANGE --target-tags= NETWORK TAGS Creating a high-availability Linux cluster with SAP HANA installed The following instructions use the Cloud Deployment Manager to create a RHEL or SLES cluster with two SAP HANA systems: a primary single-host SAP HANA system on one VM instance and a standby SAP HANA system on another VM instance in the same Compute Engine region.
- A virtual IP (VIP) that uses a level 4 TCP internal load balancer implementation, including: A reservation of the IP address that you select for the VIP Two Compute Engine instance groups A TCP internal load balancer A Compute Engine health check In RHEL HA clusters: The Red Hat high-availability pattern The Red Hat resource agent and fencing packages In SLES HA clusters: The SUSE high-availability pattern.
- This guide shows you how to automate the deployment of SAP HANA in a Red Hat Enterprise Linux (RHEL) or SUSE Linux Enterprise Server (SLES) high-availability (HA) cluster that uses an internal passthrough Network Load Balancer to manage the virtual IP (VIP) address.
- If you are using RHEL 7.7 or earlier, the value of transport: is udpu instead of knet : totem { version: 2 cluster name: hacluster transport: knet join: 60 max messages: 20 token: 20000 token retransmits before loss const: 10 crypto cipher: aes256 crypto hash: sha256 } nodelist { node { ring0 addr: example-rha-vm1 name: example-rha-vm1 nodeid: 1 } node { ring0 addr: example-rha-vm2 name: example-rha-vm2 nodeid: 2 } } quorum { provider: corosync votequorum two node: 1 } logging { to logfile: yes logfile: /var/log/cluster/corosync.log to syslog: yes timestamp: on } SLES Display your cluster resource configurations: crm config show The automation scripts that are used by this guide create the resource configurations that are shown in the following example: node 1: example-ha-vm1 \ attributes hana ha1 op mode=logreplay lpa ha1 lpt=1635380335 hana ha1 srmode=syncmem hana ha1 vhost=example-ha-vm1 hana ha1 remoteHost=example-ha-vm2 hana ha1 site=example-ha-vm1 node 2: example-ha-vm2 \ attributes lpa ha1 lpt=30 hana ha1 op mode=logreplay hana ha1 vhost=example-ha-vm2 hana ha1 site=example-ha-vm2 hana ha1 srmode=syncmem hana ha1 remoteHost=example-ha-vm1 primitive STONITH-example-ha-vm1 stonith:external/gcpstonith \ op monitor interval=300s timeout=120s \ op start interval=0 timeout=60s \ params instance name=example-ha-vm1 gcloud path="/usr/bin/gcloud" logging=yes pcmk reboot timeout=300 pcmk monitor retries=4 pcmk delay max=30 primitive STONITH-example-ha-vm2 stonith:external/gcpstonith \ op monitor interval=300s timeout=120s \ op start interval=0 timeout=60s \ params instance name=example-ha-vm2 gcloud path="/usr/bin/gcloud" logging=yes pcmk reboot timeout=300 pcmk monitor retries=4 primitive rsc SAPHanaTopology HA1 HDB00 ocf:suse:SAPHanaTopology \ operations $id=rsc sap2 HA1 HDB00-operations \ op monitor interval=10 timeout=600 \ op start interval=0 timeout=600 \ op stop interval=0 timeout=300 \ params SID=HA1 InstanceNumber=00 primitive rsc SAPHana HA1 HDB00 ocf:suse:SAPHana \ operations $id=rsc sap HA1 HDB00-operations \ op start interval=0 timeout=3600 \ op stop interval=0 timeout=3600 \ op promote interval=0 timeout=3600 \ op demote interval=0 timeout=3600 \ op monitor interval=60 role=Master timeout=700 \ op monitor interval=61 role=Slave timeout=700 \ params SID=HA1 InstanceNumber=00 PREFER SITE TAKEOVER=true DUPLICATE PRIMARY TIMEOUT=7200 AUTOMATED REGISTER=true primitive rsc vip hc-primary anything \ params binfile="/usr/bin/socat" cmdline options="-U TCP-LISTEN:60000,backlog=10,fork,reuseaddr /dev/null" \ op monitor timeout=20s interval=10s \ op params depth=0 primitive rsc vip int-primary IPaddr2 \ params ip=10.128.15.101 cidr netmask=32 nic=eth0 \ op monitor interval=3600s timeout=60s group g-primary rsc vip int-primary rsc vip hc-primary ms msl SAPHana HA1 HDB00 rsc SAPHana HA1 HDB00 \ meta notify=true clone-max=2 clone-node-max=1 target-role=Started interleave=true clone cln SAPHanaTopology HA1 HDB00 rsc SAPHanaTopology HA1 HDB00 \ meta clone-node-max=1 target-role=Started interleave=true location LOC STONITH example-ha-vm1 STONITH-example-ha-vm1 -inf: example-ha-vm1 location LOC STONITH example-ha-vm2 STONITH-example-ha-vm2 -inf: example-ha-vm2 colocation col saphana ip HA1 HDB00 4000: g-primary:Started msl SAPHana HA1 HDB00:Master order ord SAPHana HA1 HDB00 Optional: cln SAPHanaTopology HA1 HDB00 msl SAPHana HA1 HDB00 property cib-bootstrap-options: \ have-watchdog=false \ dc-version="1.1.24+20210811.f5abda0ee-3.18.1-1.1.24+20210811.f5abda0ee" \ cluster-infrastructure=corosync \ cluster-name=hacluster \ maintenance-mode=false \ stonith-timeout=300s \ stonith-enabled=true rsc defaults rsc-options: \ resource-stickiness=1000 \ migration-threshold=5000 op defaults op-options: \ timeout=600 Display your cluster configuration file, corosync.conf : cat /etc/corosync/corosync.conf The automation scripts that are used by this guide specify parameters settings in the corosync.conf file as shown in the following example: totem { version: 2 secauth: off crypto hash: sha1 crypto cipher: aes256 cluster name: hacluster clear node high bit: yes token: 20000 token retransmits before loss const: 10 join: 60 max messages: 20 transport: udpu interface { ringnumber: 0 bindnetaddr: 10.128.1.63 mcastport: 5405 ttl: 1 } } logging { fileline: off to stderr: no to logfile: no logfile: /var/log/cluster/corosync.log to syslog: yes debug: off timestamp: on logger subsys { subsys: QUORUM debug: off } } nodelist { node { ring0 addr: example-ha-vm1 nodeid: 1 } node { ring0 addr: example-ha-vm2 nodeid: 2 } } quorum { provider: corosync votequorum expected votes: 2 two node: 1 } Check the load balancer and the health of the instance groups To confirm that the load balancer and health check were set up correctly, check the load balancer and instance groups in the Google Cloud console.

### "Reference architecture: SAP Business Suite on SAP HANA on Google Cloud \_\

- URL: [https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-hana](https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-hana)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- In both cases, you start by setting up two Compute Engine compute instances in separate zones for maximum redundancy, each with its own SAP HANA database. on SAP HANA The following diagram shows an SAP Business Suite on SAP HANA architecture that uses a Linux cluster to achieve high availability on both the application and the SAP HANA database side: The following diagrams show an SAP HANA database that is highly available during both normal operation and a takeover operation: Normal operation: Takeover operation: To combine both high availability and disaster recovery for the database, you can use SAP HANA System Replication.
- Single points of failure An SAP Business Suite system on SAP HANA, has some common single points of failure that can impact the availability of the system: SAP Central Services such as Message Server and Enqueue Server SAP Application Server SAP HANA database SAP Web Dispatcher, if used as a frontend for HTTP/HTTPS access to the system Shared storage such as NFS There are multiple options for reducing the impact of such single points of failure, and these options involve deploying the system using high-availability solutions, replication services, or using other functionalities that protect the system from failures.
- You can update your existing clusters from ENSA1 to ENSA2 by completing the steps described in the following SAP Notes: 2641322 - Installation of ENSA2 and update from ENSA1 to ENSA2 when using the Red Hat HA solutions for SAP 2641019 - Installation of ENSA2 and update from ENSA1 to ENSA2 in SUSE HA environment The following diagram shows an SAP Business Suite system using a Pacemaker cluster to limit the single points of failure from both the Message Server and the Enqueue Server: Details about the deployment of the high availability system and Linux clustering across zones are covered later in this document.
- For a complete list of supported SAP solutions on Google Cloud, see: Certifications for SAP applications on Google Cloud Certifications for SAP HANA on Google Cloud Architecture The following diagrams show a high-level view of three common deployment models for SAP Business Suite on SAP HANA: centralized , distributed , and distributed with high availability .

