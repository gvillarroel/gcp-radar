---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:12:10.642Z"
product_name: "SAP on Google Cloud"
product_slug: "sap-on-google-cloud"
feature_name: "SAP HANA high-availability Deployment Manager template for RHEL"
feature_slug: "sap-hana-high-availability-deployment-manager-template-for-rhel"
latest_feature_date: "2021-03-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sap/docs/sap-hana-ha-dm-deployment"
  - "https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles"
  - "https://docs.cloud.google.com/sap/docs/architectures/sap-s4hana-on-gcp"
keywords:
  - "sap"
  - "hana"
  - "high"
  - "availability"
  - "deployment"
  - "manager"
  - "template"
  - "rhel"
---

# SAP HANA high-availability Deployment Manager template for RHEL

Product: SAP on Google Cloud
Coverage: MEDIUM

## Step 02 Summary

Google Cloud's Deployment Manager template for Linux high-availability SAP HANA clusters now supports Red Hat Enterprise Linux images.

## Extended Definition

Google Cloud's Deployment Manager template for Linux high-availability SAP HANA clusters now supports Red Hat Enterprise Linux images.

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
- Final score: 301
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To fix your deployments to a specific release of the scripts, comment out the type property above and uncomment the type property below. type: https://storage.googleapis.com/cloudsapdeploy/deploymentmanager/ yyyymmddhhmm /dm-templates /sap hana ha ilb /sap hana ha.py properties: primaryInstanceName: example-ha-vm1 secondaryInstanceName: example-ha-vm2 primaryZone: us-central1-a secondaryZone: us-central1-c instanceType: n2-highmem-32 network: example-network subnetwork: example-subnet-us-central1 linuxImage: family/rhel-8-1-sap-ha linuxImageProject: rhel-sap-cloud SAP HANA parameters sap hana deployment bucket: my-hana-bucket sap hana sid: HA1 sap hana instance number: 00 sap hana sidadm password: TempPa55word sap hana system password: TempPa55word VIP parameters sap vip: 10.0.0.100 primaryInstanceGroupName: ig-example-ha-vm1 secondaryInstanceGroupName: ig-example-ha-vm2 loadBalancerName: lb-ha1 Additional optional properties networkTag: hana-ha-ntwk-tag serviceAccount: sap-deploy-example@example-project-123456.iam.gserviceaccount.com SLES resources: - name: sap hana ha type: https://storage.googleapis.com/cloudsapdeploy/deploymentmanager/latest/dm-templates/sap hana ha ilb/sap hana ha.py By default, this configuration file uses the latest release of the deployment scripts for SAP on Google Cloud.
- Click Create to create your firewall rule. gcloud Create a firewall rule by using the following command: $ gcloud compute firewall-rules create FIREWALL NAME --direction=INGRESS --priority=1000 \ --network= NETWORK NAME --action=ALLOW --rules= PROTOCOL : PORT \ --source-ranges IP RANGE --target-tags= NETWORK TAGS Creating a high-availability Linux cluster with SAP HANA installed The following instructions use the Cloud Deployment Manager to create a RHEL or SLES cluster with two SAP HANA systems: a primary single-host SAP HANA system on one VM instance and a standby SAP HANA system on another VM instance in the same Compute Engine region.
- Go to the Cloud Shell Download the template.yaml configuration file template for the SAP HANA high-availability cluster to your working directory by entering the following command in the Cloud Shell or gcloud CLI: $ wget https://storage.googleapis.com/cloudsapdeploy/deploymentmanager/latest/dm-templates/sap hana ha ilb/template.yaml Optionally, rename the template.yaml file to identify the configuration it defines.
- You define configuration options for the SAP HANA high-availability cluster in a Deployment Manager configuration file template.

### "HA scale-up cluster configuration guide for SAP HANA on SLES \_|\_ SAP on\

- URL: [https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles](https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles)
- Source ID: `site-docs-reference-required-2`
- Final score: 223
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Go to the Cloud Shell Download the template.yaml configuration file template for the SAP HANA high-availability cluster to your working directory by entering the following command in the Cloud Shell or gcloud CLI: wget https://storage.googleapis.com/cloudsapdeploy/deploymentmanager/latest/dm-templates/sap hana/template.yaml Optionally, rename the template.yaml file to identify the configuration it defines.
- To fix your deployments to a specific release of the scripts, comment out the type property above and uncomment the type property below. type: https://storage.googleapis.com/cloudsapdeploy/deploymentmanager/ yyyymmddhhmm /dm-templates/sap hana/sap hana.py properties: instanceName: hana-ha-vm-2 instanceType: n2-highmem-32 zone: us-central1-c subnetwork: example-subnet-us-central1 linuxImage: family/sles-15-sp1-sap linuxImageProject: suse-sap-cloud sap hana deployment bucket: hana2-sp4-rev46 sap hana sid: HA1 sap hana instance number: 22 sap hana sidadm password: Google123 sap hana system password: Google123 sap hana scaleout nodes: 0 networkTag: cluster-ntwk-tag serviceAccount: limited-roles@example-project-123456.iam.gserviceaccount.com sap hana sidadm uid: 900 sap hana sapsys gid: 79 Create firewall rules that allow access to the host VMs If you haven't done so already, create firewall rules that allow access to each host VM from the following sources: For configuration purposes, your local workstation, a bastion host, or a jump server For access between the cluster nodes, the other host VMs in the HA cluster When you create VPC firewall rules, you specify the network tags that you defined in the template.yaml configuration file to designate your host VMs as the target for the rule.
- To fix your deployments to a specific release of the scripts, comment out the type property above and uncomment the type property below. type: https://storage.googleapis.com/cloudsapdeploy/deploymentmanager/ yyyymmddhhmm /dm-templates/sap hana/sap hana.py properties: instanceName: hana-ha-vm-1 instanceType: n2-highmem-32 zone: us-central1-a subnetwork: example-subnet-us-central1 linuxImage: family/sles-15-sp1-sap linuxImageProject: suse-sap-cloud sap hana deployment bucket: hana2-sp4-rev46 sap hana sid: HA1 sap hana instance number: 22 sap hana sidadm password: Tempa55word sap hana system password: Tempa55word sap hana scaleout nodes: 0 networkTag: cluster-ntwk-tag serviceAccount: limited-roles@example-project-123456.iam.gserviceaccount.com sap hana sidadm uid: 900 sap hana sapsys gid: 79 - name: sap hana secondary type: https://storage.googleapis.com/cloudsapdeploy/deploymentmanager/latest/dm-templates/sap hana/sap hana.py By default, this configuration file uses the latest release of the deployment scripts for SAP on Google Cloud.
- SLES for SAP 15 SP5 or earlier Cluster Summary: Stack: corosync Current DC: hana-ha-vm-1 (version 2.0.4+20200616.2deceaa3a-3.15.1-2.0.4+20200616.2deceaa3a) - partition with quorum Last updated: Fri Oct 7 21:52:46 2022 Last change: Fri Oct 7 21:51:42 2022 by root via crm attribute on hana-ha-vm-1 2 nodes configured 10 resource instances configured Node List: Online: [ hana-ha-vm-1 hana-ha-vm-2 ] Active Resources: STONITH-hana-ha-vm-1 (stonith:fence gce): Started hana-ha-vm-2 STONITH-hana-ha-vm-2 (stonith:fence gce): Started hana-ha-vm-1 Resource Group: g-primary: rsc vip int-primary (ocf::heartbeat:IPaddr2): Started hana-ha-vm-1 rsc vip hc-primary (ocf::heartbeat:anything): Started hana-ha-vm-1 Clone Set: cln SAPHanaTopology HA1 HDB00 [rsc SAPHanaTopology HA1 HDB00]: Started: [ hana-ha-vm-1 hana-ha-vm-2 ] Clone Set: msl SAPHana HA1 HDB00 [rsc SAPHana HA1 HDB00] (promotable): Masters: [ hana-ha-vm-1 ] Slaves: [ hana-ha-vm-2 ] Resource Group: g-secondary: rsc vip int-secondary (ocf::heartbeat:IPaddr2): Started hana-ha-vm-2 rsc healthcheck-secondary (ocf::heartbeat:anything): Started hana-ha-vm-2 SLES for SAP 15 SP6 or later Cluster Summary: Stack: corosync Current DC: hana-ha-vm-1 (version 2.1.7+20231219.0f7f88312-150600.6.3.1-2.1.7+20231219.0f7f88312) - partition with quorum Last updated: Tue Oct 15 05:46:18 2024 Last change: Tue Oct 15 05:46:18 2024 by root via via crm attribute on hana-ha-vm-1 2 nodes configured 10 resource instances configured Node List: Online: [ hana-ha-vm-1 hana-ha-vm-2 ] Active Resources: STONITH-hana-ha-vm-1 (stonith:fence gce): Started hana-ha-vm-2 STONITH-hana-ha-vm-2 (stonith:fence gce): Started hana-ha-vm-1 Resource Group: g-primary: rsc vip int-primary (ocf::heartbeat:IPaddr2): Started hana-ha-vm-1 rsc vip hc-primary (ocf::heartbeat:anything): Started hana-ha-vm-1 Clone Set: cln SAPHanaTopology HA1 HDB00 [rsc SAPHanaTopology HA1 HDB00]: Started: [ hana-ha-vm-1 hana-ha-vm-2 ] Clone Set: cln SAPHanaFileSystem HA1 HDB00 [rsc SAPHanaFileSystem HA1 HDB00]: Started: [ hana-ha-vm-1 hana-ha-vm-2 ] Clone Set: mst SAPHana HA1 HDB00 [rsc SAPHana HA1 HDB00] (promotable): Masters: [ hana-ha-vm-1 ] Slaves: [ hana-ha-vm-2 ] Resource Group: g-secondary: rsc vip int-secondary (ocf::heartbeat:IPaddr2): Started hana-ha-vm-2 rsc healthcheck-secondary (ocf::heartbeat:anything): Started hana-ha-vm-2 Evaluate your SAP HANA workload To automate continuous validation checks for your SAP HANA high-availability workloads running on Google Cloud, you can use Workload Manager .

### "Reference architecture: SAP S/4HANA on Google Cloud \_|\_ SAP on Google\

- URL: [https://docs.cloud.google.com/sap/docs/architectures/sap-s4hana-on-gcp](https://docs.cloud.google.com/sap/docs/architectures/sap-s4hana-on-gcp)
- Source ID: `site-docs-reference`
- Final score: 199
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SAP Note 2456432 - SAP Applications on Google Cloud: Supported Products and Google Cloud machine types 2446441 - Linux on Google Cloud Platform (IaaS): Adaption of your SAP License 2456953 - Windows on Google Cloud (IaaS): Adaption of your SAP License 1380654 - SAP support in public cloud environments SAP Note 2456406 - SAP on Google Cloud Platform: Support Prerequisites Deployment automation To install SAP S/4HANA on Google Cloud, you can use the following deployment options: To automate the deployment of a distributed or distributed with high availability (HA) system, you can use the Guided Deployment Automation tool in Workload Manager.
- The following diagram shows an SAP S/4HANA system using a Pacemaker cluster to limit the single points of failure from both the Message Server and the Enqueue Server: Details about the deployment of the high availability system and Linux clustering across zones are covered later in this document.
- Architecture The following diagrams show a high-level view of three common deployment models for SAP S/4HANA: centralized , distributed , and distributed with high availability .
- Single points of failure An SAP S/4HANA system has some common single points of failure that can impact the availability of the system: SAP Central Services such as Message Server and Enqueue Server SAP Application Server SAP HANA database SAP Web Dispatcher, if used as a frontend for HTTP/HTTPS access to the system Shared storage such as NFS There are multiple options for reducing the impact of such single points of failure, and these options involve deploying the system using high-availability solutions, replication services, or using other functionalities that protect the system from failures.

