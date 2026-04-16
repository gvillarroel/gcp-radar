---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:12:10.639Z"
product_name: "SAP on Google Cloud"
product_slug: "sap-on-google-cloud"
feature_name: "SAP HANA deployment automation disk type selection"
feature_slug: "sap-hana-deployment-automation-disk-type-selection"
latest_feature_date: "2023-03-13"
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
  - "disk"
  - "type"
  - "selection"
  - "terraform"
---

# SAP HANA deployment automation disk type selection

Product: SAP on Google Cloud
Coverage: MEDIUM

## Step 02 Summary

Terraform automation for SAP HANA lets you choose the default SAP volume disk type with the disk_type argument, including Hyperdisk Extreme.

## Extended Definition

Terraform automation for SAP HANA lets you choose the default SAP volume disk type with the disk_type argument, including Hyperdisk Extreme.

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
- Final score: 217
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cluster Name: hacluster Corosync Nodes: example-rha-vm1 example-rha-vm2 Pacemaker Nodes: example-rha-vm1 example-rha-vm2 Resources: Group: g-primary Resource: rsc healthcheck HA1 (class=service type=haproxy) Operations: monitor interval=10s timeout=20s (rsc healthcheck HA1-monitor-interval-10s) start interval=0s timeout=100 (rsc healthcheck HA1-start-interval-0s) stop interval=0s timeout=100 (rsc healthcheck HA1-stop-interval-0s) Resource: rsc vip HA1 00 (class=ocf provider=heartbeat type=IPaddr2) Attributes: cidr netmask=32 ip=10.128.15.100 nic=eth0 Operations: monitor interval=3600s timeout=60s (rsc vip HA1 00-monitor-interval-3600s) start interval=0s timeout=20s (rsc vip HA1 00-start-interval-0s) stop interval=0s timeout=20s (rsc vip HA1 00-stop-interval-0s) Clone: SAPHanaTopology HA1 00-clone Meta Attrs: clone-max=2 clone-node-max=1 interleave=true Resource: SAPHanaTopology HA1 00 (class=ocf provider=heartbeat type=SAPHanaTopology) Attributes: InstanceNumber=00 SID=HA1 Operations: methods interval=0s timeout=5 (SAPHanaTopology HA1 00-methods-interval-0s) monitor interval=10 timeout=600 (SAPHanaTopology HA1 00-monitor-interval-10) reload interval=0s timeout=5 (SAPHanaTopology HA1 00-reload-interval-0s) start interval=0s timeout=600 (SAPHanaTopology HA1 00-start-interval-0s) stop interval=0s timeout=300 (SAPHanaTopology HA1 00-stop-interval-0s) Clone: SAPHana HA1 00-clone Meta Attrs: promotable=true Resource: SAPHana HA1 00 (class=ocf provider=heartbeat type=SAPHana) Attributes: AUTOMATED REGISTER=true DUPLICATE PRIMARY TIMEOUT=7200 InstanceNumber=00 PREFER SITE TAKEOVER=true SID=HA1 Meta Attrs: clone-max=2 clone-node-max=1 interleave=true notify=true Operations: demote interval=0s timeout=3600 (SAPHana HA1 00-demote-interval-0s) methods interval=0s timeout=5 (SAPHana HA1 00-methods-interval-0s) monitor interval=61 role=Slave timeout=700 (SAPHana HA1 00-monitor-interval-61) monitor interval=59 role=Master timeout=700 (SAPHana HA1 00-monitor-interval-59) promote interval=0s timeout=3600 (SAPHana HA1 00-promote-interval-0s) reload interval=0s timeout=5 (SAPHana HA1 00-reload-interval-0s) start interval=0s timeout=3600 (SAPHana HA1 00-start-interval-0s) stop interval=0s timeout=3600 (SAPHana HA1 00-stop-interval-0s) Stonith Devices: Resource: STONITH-example-rha-vm1 (class=stonith type=fence gce) Attributes: pcmk delay max=30 pcmk monitor retries=4 pcmk reboot timeout=300 port=example-rha-vm1 project=sap-certification-env zone=us-central1-a Operations: monitor interval=300s timeout=120s (STONITH-example-rha-vm1-monitor-interval-300s) start interval=0 timeout=60s (STONITH-example-rha-vm1-start-interval-0) Resource: STONITH-example-rha-vm2 (class=stonith type=fence gce) Attributes: pcmk monitor retries=4 pcmk reboot timeout=300 port=example-rha-vm2 project=sap-certification-env zone=us-central1-c Operations: monitor interval=300s timeout=120s (STONITH-example-rha-vm2-monitor-interval-300s) start interval=0 timeout=60s (STONITH-example-rha-vm2-start-interval-0) Fencing Levels: Location Constraints: Resource: STONITH-example-rha-vm1 Disabled on: example-rha-vm1 (score:-INFINITY) (id:location-STONITH-example-rha-vm1-example-rha-vm1--INFINITY) Resource: STONITH-example-rha-vm2 Disabled on: example-rha-vm2 (score:-INFINITY) (id:location-STONITH-example-rha-vm2-example-rha-vm2--INFINITY) Ordering Constraints: start SAPHanaTopology HA1 00-clone then start SAPHana HA1 00-clone (kind:Mandatory) (non-symmetrical) (id:order-SAPHanaTopology HA1 00-clone-SAPHana HA1 00-clone-mandatory) Colocation Constraints: g-primary with SAPHana HA1 00-clone (score:4000) (rsc-role:Started) (with-rsc-role:Master) (id:colocation-g-primary-SAPHana HA1 00-clone-4000) Ticket Constraints: Alerts: No alerts defined Resources Defaults: migration-threshold=5000 resource-stickiness=1000 Operations Defaults: timeout=600s Cluster Properties: cluster-infrastructure: corosync cluster-name: hacluster dc-version: 2.0.2-3.el8 1.2-744a30d655 have-watchdog: false stonith-enabled: true stonith-timeout: 300s Quorum: Options: Display your cluster configuration file, corosync.conf : cat /etc/corosync/corosync.conf The following example shows the parameters that the automation scripts set for RHEL 8.1 and later.
- To fix your deployments to a specific release of the scripts, comment out the type property above and uncomment the type property below. type: https://storage.googleapis.com/cloudsapdeploy/deploymentmanager/ yyyymmddhhmm /dm-templates/sap hana ha ilb/sap hana ha.py properties: primaryInstanceName: example-ha-vm1 secondaryInstanceName: example-ha-vm2 primaryZone: us-central1-a secondaryZone: us-central1-c instanceType: n2-highmem-32 network: example-network subnetwork: example-subnet-us-central1 linuxImage: family/sles-15-sp1-sap linuxImageProject: suse-sap-cloud SAP HANA parameters sap hana deployment bucket: my-hana-bucket sap hana sid: HA1 sap hana instance number: 00 sap hana sidadm password: TempPa55word sap hana system password: TempPa55word VIP parameters sap vip: 10.0.0.100 primaryInstanceGroupName: ig-example-ha-vm1 secondaryInstanceGroupName: ig-example-ha-vm2 loadBalancerName: lb-ha1 Additional optional properties networkTag: hana-ha-ntwk-tag serviceAccount: sap-deploy-example@example-project-123456.iam.gserviceaccount.com Create the instances: $ gcloud deployment-manager deployments create deployment-name --config template-name .yaml The above command invokes the Deployment Manager, which sets up the Google Cloud infrastructure and then hands control over to a script that installs and configures SAP HANA and the HA cluster.
- To fix your deployments to a specific release of the scripts, comment out the type property above and uncomment the type property below. type: https://storage.googleapis.com/cloudsapdeploy/deploymentmanager/ yyyymmddhhmm /dm-templates /sap hana ha ilb /sap hana ha.py properties: primaryInstanceName: example-ha-vm1 secondaryInstanceName: example-ha-vm2 primaryZone: us-central1-a secondaryZone: us-central1-c instanceType: n2-highmem-32 network: example-network subnetwork: example-subnet-us-central1 linuxImage: family/rhel-8-1-sap-ha linuxImageProject: rhel-sap-cloud SAP HANA parameters sap hana deployment bucket: my-hana-bucket sap hana sid: HA1 sap hana instance number: 00 sap hana sidadm password: TempPa55word sap hana system password: TempPa55word VIP parameters sap vip: 10.0.0.100 primaryInstanceGroupName: ig-example-ha-vm1 secondaryInstanceGroupName: ig-example-ha-vm2 loadBalancerName: lb-ha1 Additional optional properties networkTag: hana-ha-ntwk-tag serviceAccount: sap-deploy-example@example-project-123456.iam.gserviceaccount.com SLES resources: - name: sap hana ha type: https://storage.googleapis.com/cloudsapdeploy/deploymentmanager/latest/dm-templates/sap hana ha ilb/sap hana ha.py By default, this configuration file uses the latest release of the deployment scripts for SAP on Google Cloud.
- RHEL resources: - name: sap hana ha type: https://storage.googleapis.com/cloudsapdeploy/deploymentmanager/latest/dm-templates /sap hana ha ilb /sap hana ha.py By default, this configuration file uses the latest release of the deployment scripts for SAP on Google Cloud.

### "HA scale-up cluster configuration guide for SAP HANA on SLES \_|\_ SAP on\

- URL: [https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles](https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles)
- Source ID: `site-docs-reference-required-2`
- Final score: 187
- Re-rank relevance: N/A

Evidence snippets:
- To fix your deployments to a specific release of the scripts, comment out the type property above and uncomment the type property below. type: https://storage.googleapis.com/cloudsapdeploy/deploymentmanager/ yyyymmddhhmm /dm-templates/sap hana/sap hana.py properties: instanceName: hana-ha-vm-2 instanceType: n2-highmem-32 zone: us-central1-c subnetwork: example-subnet-us-central1 linuxImage: family/sles-15-sp1-sap linuxImageProject: suse-sap-cloud sap hana deployment bucket: hana2-sp4-rev46 sap hana sid: HA1 sap hana instance number: 22 sap hana sidadm password: Google123 sap hana system password: Google123 sap hana scaleout nodes: 0 networkTag: cluster-ntwk-tag serviceAccount: limited-roles@example-project-123456.iam.gserviceaccount.com sap hana sidadm uid: 900 sap hana sapsys gid: 79 Create firewall rules that allow access to the host VMs If you haven't done so already, create firewall rules that allow access to each host VM from the following sources: For configuration purposes, your local workstation, a bastion host, or a jump server For access between the cluster nodes, the other host VMs in the HA cluster When you create VPC firewall rules, you specify the network tags that you defined in the template.yaml configuration file to designate your host VMs as the target for the rule.
- To fix your deployments to a specific release of the scripts, comment out the type property above and uncomment the type property below. type: https://storage.googleapis.com/cloudsapdeploy/deploymentmanager/ yyyymmddhhmm /dm-templates/sap hana/sap hana.py properties: instanceName: hana-ha-vm-1 instanceType: n2-highmem-32 zone: us-central1-a subnetwork: example-subnet-us-central1 linuxImage: family/sles-15-sp1-sap linuxImageProject: suse-sap-cloud sap hana deployment bucket: hana2-sp4-rev46 sap hana sid: HA1 sap hana instance number: 22 sap hana sidadm password: Tempa55word sap hana system password: Tempa55word sap hana scaleout nodes: 0 networkTag: cluster-ntwk-tag serviceAccount: limited-roles@example-project-123456.iam.gserviceaccount.com sap hana sidadm uid: 900 sap hana sapsys gid: 79 - name: sap hana secondary type: https://storage.googleapis.com/cloudsapdeploy/deploymentmanager/latest/dm-templates/sap hana/sap hana.py By default, this configuration file uses the latest release of the deployment scripts for SAP on Google Cloud.
- The properties sap hana sidadm uid and sap hana sapsys gid are included to show their default values, which are used because the properties are commented out. resources: - name: sap hana primary type: https://storage.googleapis.com/cloudsapdeploy/deploymentmanager/latest/dm-templates/sap hana/sap hana.py By default, this configuration file uses the latest release of the deployment scripts for SAP on Google Cloud.
- For the initial deployment of your SAP HANA system or resizing the machine to increase the number of NUMA nodes, make sure that SAP HANA is running during the execution of automation script that Google Cloud provides to enable SAP HANA Fast Restart.

### "Reference architecture: SAP S/4HANA on Google Cloud \_|\_ SAP on Google\

- URL: [https://docs.cloud.google.com/sap/docs/architectures/sap-s4hana-on-gcp](https://docs.cloud.google.com/sap/docs/architectures/sap-s4hana-on-gcp)
- Source ID: `site-docs-reference`
- Final score: 183
- Re-rank relevance: N/A

Evidence snippets:
- SAP Note 2456432 - SAP Applications on Google Cloud: Supported Products and Google Cloud machine types 2446441 - Linux on Google Cloud Platform (IaaS): Adaption of your SAP License 2456953 - Windows on Google Cloud (IaaS): Adaption of your SAP License 1380654 - SAP support in public cloud environments SAP Note 2456406 - SAP on Google Cloud Platform: Support Prerequisites Deployment automation To install SAP S/4HANA on Google Cloud, you can use the following deployment options: To automate the deployment of a distributed or distributed with high availability (HA) system, you can use the Guided Deployment Automation tool in Workload Manager.
- Recommended storage options for Linux directory structure on SAP HANA: SAP HANA directory Recommended storage option in Google Cloud /usr/sap Balanced Persistent Disk /hana/data SSD-based Persistent Disk or Hyperdisk /hana/log SSD-based Persistent Disk or Hyperdisk /hana/shared Balanced Persistent Disk /hanabackup Balanced Persistent Disk In distributed deployments, /hana/shared and /hanabackup can also be mounted as a network file system using an NFS solution such as Filestore.
- To automate the deployment of a centralized or distributed SAP HANA system, you can use the Terraform configurations provided by Google Cloud.
- For an overview about the alternative solutions that you can use to manage single points of failure, see the following sections in this guide: Availability and continuity Deployment architecture for SAP HANA Deployment architecture for SAP S/4HANA Availability and continuity During the planning phase of implementing an SAP S/4HANA system, you need to specify the following data points for defining the system's availability and continuity: Service Level Objectives (SLO) : A target value or range of values for a service level that is measured by a service level indicator (SLI).

