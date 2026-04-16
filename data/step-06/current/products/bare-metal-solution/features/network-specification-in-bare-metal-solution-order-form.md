---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:47:34.440Z"
product_name: "Bare Metal Solution"
product_slug: "bare-metal-solution"
feature_name: "Network specification in Bare Metal Solution Order Form"
feature_slug: "network-specification-in-bare-metal-solution-order-form"
latest_feature_date: "2022-01-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sap/docs/sap-hana-ha-deployment-guide"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-planning"
  - "https://docs.cloud.google.com/bare-metal/docs/order-bms-resources"
keywords:
  - "specification"
  - "supports"
  - "network"
  - "order"
  - "form"
---

# Network specification in Bare Metal Solution Order Form

Product: Bare Metal Solution
Coverage: MEDIUM

## Step 02 Summary

Supports detailed network configuration in the Bare Metal Solution intake form, including names, interconnect settings, and IP/service ranges.

## Extended Definition

Supports detailed network configuration in the Bare Metal Solution intake form, including names, interconnect settings, and IP/service ranges.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/sap/docs/sap-hana-ha-deployment-guide](https://docs.cloud.google.com/sap/docs/sap-hana-ha-deployment-guide)
- [https://docs.cloud.google.com/bare-metal/docs/bms-planning](https://docs.cloud.google.com/bare-metal/docs/bms-planning)
- [https://docs.cloud.google.com/bare-metal/docs/order-bms-resources](https://docs.cloud.google.com/bare-metal/docs/order-bms-resources)

## Supporting Pages

### "Deployment Manager: SAP HANA scale-up high-availability cluster configuration\

- URL: [https://docs.cloud.google.com/sap/docs/sap-hana-ha-deployment-guide](https://docs.cloud.google.com/sap/docs/sap-hana-ha-deployment-guide)
- Source ID: `site-docs-reference-2`
- Final score: 116
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create a subnetwork, and specify the region and IP range: gcloud compute networks subnets create SUBNETWORK NAME \ --network NETWORK NAME --region REGION --range RANGE Replace the following: SUBNETWORK NAME : the name of the new subnetwork NETWORK NAME : the name of the network you created in the previous step REGION : the region where you want the subnetwork RANGE : the IP address range, specified in CIDR format , such as 10.1.0.0/24 If you plan to add more than one subnetwork, assign non-overlapping CIDR IP ranges for each subnetwork in the network.
- A configuration with a NAT gateway and with VM network tags supports this access, even if the target compute instances don't have external IPs.
- If you are using RHEL 7.7 or earlier, the value of transport: is udpu instead of knet : totem { version: 2 cluster name: hacluster transport: knet join: 60 max messages: 20 token: 20000 token retransmits before loss const: 10 crypto cipher: aes256 crypto hash: sha256 } nodelist { node { ring0 addr: example-rha-vm1 name: example-rha-vm1 nodeid: 1 } node { ring0 addr: example-rha-vm2 name: example-rha-vm2 nodeid: 2 } } quorum { provider: corosync votequorum two node: 1 } logging { to logfile: yes logfile: /var/log/cluster/corosync.log to syslog: yes timestamp: on } SLES Display your cluster resource configurations: crm config show The automation scripts that are used by this guide create the resource configurations that are shown in the following example: node 1: example-ha-vm1 \ attributes hana ha1 op mode=logreplay lpa ha1 lpt=1635380335 hana ha1 srmode=syncmem hana ha1 vhost=example-ha-vm1 hana ha1 remoteHost=example-ha-vm2 hana ha1 site=example-ha-vm1 node 2: example-ha-vm2 \ attributes lpa ha1 lpt=30 hana ha1 op mode=logreplay hana ha1 vhost=example-ha-vm2 hana ha1 site=example-ha-vm2 hana ha1 srmode=syncmem hana ha1 remoteHost=example-ha-vm1 primitive STONITH-example-ha-vm1 stonith:external/gcpstonith \ op monitor interval=300s timeout=120s \ op start interval=0 timeout=60s \ params instance name=example-ha-vm1 gcloud path="/usr/bin/gcloud" logging=yes pcmk reboot timeout=300 pcmk monitor retries=4 pcmk delay max=30 primitive STONITH-example-ha-vm2 stonith:external/gcpstonith \ op monitor interval=300s timeout=120s \ op start interval=0 timeout=60s \ params instance name=example-ha-vm2 gcloud path="/usr/bin/gcloud" logging=yes pcmk reboot timeout=300 pcmk monitor retries=4 primitive rsc SAPHanaTopology HA1 HDB00 ocf:suse:SAPHanaTopology \ operations $id=rsc sap2 HA1 HDB00-operations \ op monitor interval=10 timeout=600 \ op start interval=0 timeout=600 \ op stop interval=0 timeout=300 \ params SID=HA1 InstanceNumber=00 primitive rsc SAPHana HA1 HDB00 ocf:suse:SAPHana \ operations $id=rsc sap HA1 HDB00-operations \ op start interval=0 timeout=3600 \ op stop interval=0 timeout=3600 \ op promote interval=0 timeout=3600 \ op demote interval=0 timeout=3600 \ op monitor interval=60 role=Master timeout=700 \ op monitor interval=61 role=Slave timeout=700 \ params SID=HA1 InstanceNumber=00 PREFER SITE TAKEOVER=true DUPLICATE PRIMARY TIMEOUT=7200 AUTOMATED REGISTER=true primitive rsc vip hc-primary anything \ params binfile="/usr/bin/socat" cmdline options="-U TCP-LISTEN:60000,backlog=10,fork,reuseaddr /dev/null" \ op monitor timeout=20s interval=10s \ op params depth=0 primitive rsc vip int-primary IPaddr2 \ params ip=10.128.15.101 cidr netmask=32 nic=eth0 \ op monitor interval=3600s timeout=60s group g-primary rsc vip int-primary rsc vip hc-primary ms msl SAPHana HA1 HDB00 rsc SAPHana HA1 HDB00 \ meta notify=true clone-max=2 clone-node-max=1 target-role=Started interleave=true clone cln SAPHanaTopology HA1 HDB00 rsc SAPHanaTopology HA1 HDB00 \ meta clone-node-max=1 target-role=Started interleave=true location LOC STONITH example-ha-vm1 STONITH-example-ha-vm1 -inf: example-ha-vm1 location LOC STONITH example-ha-vm2 STONITH-example-ha-vm2 -inf: example-ha-vm2 colocation col saphana ip HA1 HDB00 4000: g-primary:Started msl SAPHana HA1 HDB00:Master order ord SAPHana HA1 HDB00 Optional: cln SAPHanaTopology HA1 HDB00 msl SAPHana HA1 HDB00 property cib-bootstrap-options: \ have-watchdog=false \ dc-version="1.1.24+20210811.f5abda0ee-3.18.1-1.1.24+20210811.f5abda0ee" \ cluster-infrastructure=corosync \ cluster-name=hacluster \ maintenance-mode=false \ stonith-timeout=300s \ stonith-enabled=true rsc defaults rsc-options: \ resource-stickiness=1000 \ migration-threshold=5000 op defaults op-options: \ timeout=600 Display your cluster configuration file, corosync.conf : cat /etc/corosync/corosync.conf The automation scripts that are used by this guide specify parameters settings in the corosync.conf file as shown in the following example: totem { version: 2 secauth: off crypto hash: sha1 crypto cipher: aes256 cluster name: hacluster clear node high bit: yes token: 20000 token retransmits before loss const: 10 join: 60 max messages: 20 transport: udpu interface { ringnumber: 0 bindnetaddr: 10.128.1.63 mcastport: 5405 ttl: 1 } } logging { fileline: off to stderr: no to logfile: no logfile: /var/log/cluster/corosync.log to syslog: yes debug: off timestamp: on logger subsys { subsys: QUORUM debug: off } } nodelist { node { ring0 addr: example-ha-vm1 nodeid: 1 } node { ring0 addr: example-ha-vm2 nodeid: 2 } } quorum { provider: corosync votequorum expected votes: 2 two node: 1 } Check the load balancer and the health of the instance groups To confirm that the load balancer and health check were set up correctly, check the load balancer and instance groups in the Google Cloud console.
- Cluster Name: hacluster Corosync Nodes: example-rha-vm1 example-rha-vm2 Pacemaker Nodes: example-rha-vm1 example-rha-vm2 Resources: Group: g-primary Resource: rsc healthcheck HA1 (class=service type=haproxy) Operations: monitor interval=10s timeout=20s (rsc healthcheck HA1-monitor-interval-10s) start interval=0s timeout=100 (rsc healthcheck HA1-start-interval-0s) stop interval=0s timeout=100 (rsc healthcheck HA1-stop-interval-0s) Resource: rsc vip HA1 00 (class=ocf provider=heartbeat type=IPaddr2) Attributes: cidr netmask=32 ip=10.128.15.100 nic=eth0 Operations: monitor interval=3600s timeout=60s (rsc vip HA1 00-monitor-interval-3600s) start interval=0s timeout=20s (rsc vip HA1 00-start-interval-0s) stop interval=0s timeout=20s (rsc vip HA1 00-stop-interval-0s) Clone: SAPHanaTopology HA1 00-clone Meta Attrs: clone-max=2 clone-node-max=1 interleave=true Resource: SAPHanaTopology HA1 00 (class=ocf provider=heartbeat type=SAPHanaTopology) Attributes: InstanceNumber=00 SID=HA1 Operations: methods interval=0s timeout=5 (SAPHanaTopology HA1 00-methods-interval-0s) monitor interval=10 timeout=600 (SAPHanaTopology HA1 00-monitor-interval-10) reload interval=0s timeout=5 (SAPHanaTopology HA1 00-reload-interval-0s) start interval=0s timeout=600 (SAPHanaTopology HA1 00-start-interval-0s) stop interval=0s timeout=300 (SAPHanaTopology HA1 00-stop-interval-0s) Clone: SAPHana HA1 00-clone Meta Attrs: promotable=true Resource: SAPHana HA1 00 (class=ocf provider=heartbeat type=SAPHana) Attributes: AUTOMATED REGISTER=true DUPLICATE PRIMARY TIMEOUT=7200 InstanceNumber=00 PREFER SITE TAKEOVER=true SID=HA1 Meta Attrs: clone-max=2 clone-node-max=1 interleave=true notify=true Operations: demote interval=0s timeout=3600 (SAPHana HA1 00-demote-interval-0s) methods interval=0s timeout=5 (SAPHana HA1 00-methods-interval-0s) monitor interval=61 role=Slave timeout=700 (SAPHana HA1 00-monitor-interval-61) monitor interval=59 role=Master timeout=700 (SAPHana HA1 00-monitor-interval-59) promote interval=0s timeout=3600 (SAPHana HA1 00-promote-interval-0s) reload interval=0s timeout=5 (SAPHana HA1 00-reload-interval-0s) start interval=0s timeout=3600 (SAPHana HA1 00-start-interval-0s) stop interval=0s timeout=3600 (SAPHana HA1 00-stop-interval-0s) Stonith Devices: Resource: STONITH-example-rha-vm1 (class=stonith type=fence gce) Attributes: pcmk delay max=30 pcmk monitor retries=4 pcmk reboot timeout=300 port=example-rha-vm1 project=sap-certification-env zone=us-central1-a Operations: monitor interval=300s timeout=120s (STONITH-example-rha-vm1-monitor-interval-300s) start interval=0 timeout=60s (STONITH-example-rha-vm1-start-interval-0) Resource: STONITH-example-rha-vm2 (class=stonith type=fence gce) Attributes: pcmk monitor retries=4 pcmk reboot timeout=300 port=example-rha-vm2 project=sap-certification-env zone=us-central1-c Operations: monitor interval=300s timeout=120s (STONITH-example-rha-vm2-monitor-interval-300s) start interval=0 timeout=60s (STONITH-example-rha-vm2-start-interval-0) Fencing Levels: Location Constraints: Resource: STONITH-example-rha-vm1 Disabled on: example-rha-vm1 (score:-INFINITY) (id:location-STONITH-example-rha-vm1-example-rha-vm1--INFINITY) Resource: STONITH-example-rha-vm2 Disabled on: example-rha-vm2 (score:-INFINITY) (id:location-STONITH-example-rha-vm2-example-rha-vm2--INFINITY) Ordering Constraints: start SAPHanaTopology HA1 00-clone then start SAPHana HA1 00-clone (kind:Mandatory) (non-symmetrical) (id:order-SAPHanaTopology HA1 00-clone-SAPHana HA1 00-clone-mandatory) Colocation Constraints: g-primary with SAPHana HA1 00-clone (score:4000) (rsc-role:Started) (with-rsc-role:Master) (id:colocation-g-primary-SAPHana HA1 00-clone-4000) Ticket Constraints: Alerts: No alerts defined Resources Defaults: migration-threshold=5000 resource-stickiness=1000 Operations Defaults: timeout=600s Cluster Properties: cluster-infrastructure: corosync cluster-name: hacluster dc-version: 2.0.2-3.el8 1.2-744a30d655 have-watchdog: false stonith-enabled: true stonith-timeout: 300s Quorum: Options: Display your cluster configuration file, corosync.conf : cat /etc/corosync/corosync.conf The following example shows the parameters that the automation scripts set for RHEL 8.1 and later.

### Plan for Bare Metal Solution \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-planning](https://docs.cloud.google.com/bare-metal/docs/bms-planning)
- Source ID: `site-docs-reference`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Required networking information for your Bare Metal Solution order When you submit a Bare Metal Solution order, include the following networking information: The Google Cloud project ID that you are using with your Bare Metal Solution environment.
- When your order an advanced networking configuration, the following options become available for more complex network deployments: Multiple VLANs Multiple VLAN attachments Multiple VPC connections Maximum transmission unit Network templates Multiple VLANs Instead of a single client network and single private network for each bonded interface, you can add multiple client networks and private networks on server bond interfaces.
- Also, the type and the performance tier of the of the storage volume remains fixed and can't be changed without ordering new storage and performing host-based data migration.
- By default, bond0 is mapped to a client network and bond1 to a private network created through the Google Cloud console intake form.

### Order Bare Metal Solution resources \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/order-bms-resources](https://docs.cloud.google.com/bare-metal/docs/order-bms-resources)
- Source ID: `site-docs-reference`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- As your resources are procured, you can provision them through the following options and start using them: Google Cloud console intake form Create a network UI Create a storage volume UI Create an NFS volume UI What's next Deploy your Bare Metal Solution environment .
- After you've executed a simplified, one-time Bare Metal Solution Order Form, you can order your Bare Metal Solution resources online by creating procurements through the Google Cloud console.
- Procurements let you order resources as you scale, without having to execute a new Bare Metal Solution Order Form every time.
- Procurements are enabled for you in the Google Cloud console only after you've signed the Order Form.

