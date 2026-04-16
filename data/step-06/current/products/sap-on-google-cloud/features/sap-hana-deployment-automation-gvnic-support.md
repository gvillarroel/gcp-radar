---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:12:10.641Z"
product_name: "SAP on Google Cloud"
product_slug: "sap-on-google-cloud"
feature_name: "SAP HANA deployment automation gVNIC support"
feature_slug: "sap-hana-deployment-automation-gvnic-support"
latest_feature_date: "2023-02-06"
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
  - "gvnic"
  - "terraform"
  - "manager"
  - "can"
---

# SAP HANA deployment automation gVNIC support

Product: SAP on Google Cloud
Coverage: MEDIUM

## Step 02 Summary

Terraform and Deployment Manager automation for SAP HANA can use Google Virtual NIC through the nic_type argument.

## Extended Definition

Terraform and Deployment Manager automation for SAP HANA can use Google Virtual NIC through the nic_type argument.

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
- Final score: 234
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To fix your deployments to a specific release of the scripts, comment out the type property above and uncomment the type property below. type: https://storage.googleapis.com/cloudsapdeploy/deploymentmanager/ yyyymmddhhmm /dm-templates/sap hana ha ilb/sap hana ha.py properties: primaryInstanceName: example-ha-vm1 secondaryInstanceName: example-ha-vm2 primaryZone: us-central1-a secondaryZone: us-central1-c instanceType: n2-highmem-32 network: example-network subnetwork: example-subnet-us-central1 linuxImage: family/sles-15-sp1-sap linuxImageProject: suse-sap-cloud SAP HANA parameters sap hana deployment bucket: my-hana-bucket sap hana sid: HA1 sap hana instance number: 00 sap hana sidadm password: TempPa55word sap hana system password: TempPa55word VIP parameters sap vip: 10.0.0.100 primaryInstanceGroupName: ig-example-ha-vm1 secondaryInstanceGroupName: ig-example-ha-vm2 loadBalancerName: lb-ha1 Additional optional properties networkTag: hana-ha-ntwk-tag serviceAccount: sap-deploy-example@example-project-123456.iam.gserviceaccount.com Create the instances: $ gcloud deployment-manager deployments create deployment-name --config template-name .yaml The above command invokes the Deployment Manager, which sets up the Google Cloud infrastructure and then hands control over to a script that installs and configures SAP HANA and the HA cluster.
- To fix your deployments to a specific release of the scripts, comment out the type property above and uncomment the type property below. type: https://storage.googleapis.com/cloudsapdeploy/deploymentmanager/ yyyymmddhhmm /dm-templates /sap hana ha ilb /sap hana ha.py properties: primaryInstanceName: example-ha-vm1 secondaryInstanceName: example-ha-vm2 primaryZone: us-central1-a secondaryZone: us-central1-c instanceType: n2-highmem-32 network: example-network subnetwork: example-subnet-us-central1 linuxImage: family/rhel-8-1-sap-ha linuxImageProject: rhel-sap-cloud SAP HANA parameters sap hana deployment bucket: my-hana-bucket sap hana sid: HA1 sap hana instance number: 00 sap hana sidadm password: TempPa55word sap hana system password: TempPa55word VIP parameters sap vip: 10.0.0.100 primaryInstanceGroupName: ig-example-ha-vm1 secondaryInstanceGroupName: ig-example-ha-vm2 loadBalancerName: lb-ha1 Additional optional properties networkTag: hana-ha-ntwk-tag serviceAccount: sap-deploy-example@example-project-123456.iam.gserviceaccount.com SLES resources: - name: sap hana ha type: https://storage.googleapis.com/cloudsapdeploy/deploymentmanager/latest/dm-templates/sap hana ha ilb/sap hana ha.py By default, this configuration file uses the latest release of the deployment scripts for SAP on Google Cloud.
- Click Create to create your firewall rule. gcloud Create a firewall rule by using the following command: $ gcloud compute firewall-rules create FIREWALL NAME --direction=INGRESS --priority=1000 \ --network= NETWORK NAME --action=ALLOW --rules= PROTOCOL : PORT \ --source-ranges IP RANGE --target-tags= NETWORK TAGS Creating a high-availability Linux cluster with SAP HANA installed The following instructions use the Cloud Deployment Manager to create a RHEL or SLES cluster with two SAP HANA systems: a primary single-host SAP HANA system on one VM instance and a standby SAP HANA system on another VM instance in the same Compute Engine region.
- Go to the Cloud Shell Download the template.yaml configuration file template for the SAP HANA high-availability cluster to your working directory by entering the following command in the Cloud Shell or gcloud CLI: $ wget https://storage.googleapis.com/cloudsapdeploy/deploymentmanager/latest/dm-templates/sap hana ha ilb/template.yaml Optionally, rename the template.yaml file to identify the configuration it defines.

### "HA scale-up cluster configuration guide for SAP HANA on SLES \_|\_ SAP on\

- URL: [https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles](https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles)
- Source ID: `site-docs-reference-required-2`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- To fix your deployments to a specific release of the scripts, comment out the type property above and uncomment the type property below. type: https://storage.googleapis.com/cloudsapdeploy/deploymentmanager/ yyyymmddhhmm /dm-templates/sap hana/sap hana.py properties: instanceName: hana-ha-vm-2 instanceType: n2-highmem-32 zone: us-central1-c subnetwork: example-subnet-us-central1 linuxImage: family/sles-15-sp1-sap linuxImageProject: suse-sap-cloud sap hana deployment bucket: hana2-sp4-rev46 sap hana sid: HA1 sap hana instance number: 22 sap hana sidadm password: Google123 sap hana system password: Google123 sap hana scaleout nodes: 0 networkTag: cluster-ntwk-tag serviceAccount: limited-roles@example-project-123456.iam.gserviceaccount.com sap hana sidadm uid: 900 sap hana sapsys gid: 79 Create firewall rules that allow access to the host VMs If you haven't done so already, create firewall rules that allow access to each host VM from the following sources: For configuration purposes, your local workstation, a bastion host, or a jump server For access between the cluster nodes, the other host VMs in the HA cluster When you create VPC firewall rules, you specify the network tags that you defined in the template.yaml configuration file to designate your host VMs as the target for the rule.
- To fix your deployments to a specific release of the scripts, comment out the type property above and uncomment the type property below. type: https://storage.googleapis.com/cloudsapdeploy/deploymentmanager/ yyyymmddhhmm /dm-templates/sap hana/sap hana.py properties: instanceName: hana-ha-vm-1 instanceType: n2-highmem-32 zone: us-central1-a subnetwork: example-subnet-us-central1 linuxImage: family/sles-15-sp1-sap linuxImageProject: suse-sap-cloud sap hana deployment bucket: hana2-sp4-rev46 sap hana sid: HA1 sap hana instance number: 22 sap hana sidadm password: Tempa55word sap hana system password: Tempa55word sap hana scaleout nodes: 0 networkTag: cluster-ntwk-tag serviceAccount: limited-roles@example-project-123456.iam.gserviceaccount.com sap hana sidadm uid: 900 sap hana sapsys gid: 79 - name: sap hana secondary type: https://storage.googleapis.com/cloudsapdeploy/deploymentmanager/latest/dm-templates/sap hana/sap hana.py By default, this configuration file uses the latest release of the deployment scripts for SAP on Google Cloud.
- In the definition of the secondary SAP HANA system, specify different values for the following properties than you specified in the primary SAP HANA system definition: name instanceName zone Create the instances: gcloud deployment-manager deployments create DEPLOYMENT NAME --config TEMPLATE NAME .yaml The above command invokes the Deployment Manager, which deploys the VMs, downloads the SAP HANA software from your storage bucket, and installs SAP HANA, all according to the specifications in your template.yaml file.
- The properties sap hana sidadm uid and sap hana sapsys gid are included to show their default values, which are used because the properties are commented out. resources: - name: sap hana primary type: https://storage.googleapis.com/cloudsapdeploy/deploymentmanager/latest/dm-templates/sap hana/sap hana.py By default, this configuration file uses the latest release of the deployment scripts for SAP on Google Cloud.

### "Reference architecture: SAP S/4HANA on Google Cloud \_|\_ SAP on Google\

- URL: [https://docs.cloud.google.com/sap/docs/architectures/sap-s4hana-on-gcp](https://docs.cloud.google.com/sap/docs/architectures/sap-s4hana-on-gcp)
- Source ID: `site-docs-reference`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- SAP Note 2456432 - SAP Applications on Google Cloud: Supported Products and Google Cloud machine types 2446441 - Linux on Google Cloud Platform (IaaS): Adaption of your SAP License 2456953 - Windows on Google Cloud (IaaS): Adaption of your SAP License 1380654 - SAP support in public cloud environments SAP Note 2456406 - SAP on Google Cloud Platform: Support Prerequisites Deployment automation To install SAP S/4HANA on Google Cloud, you can use the following deployment options: To automate the deployment of a distributed or distributed with high availability (HA) system, you can use the Guided Deployment Automation tool in Workload Manager.
- To automate the deployment of a centralized or distributed SAP HANA system, you can use the Terraform configurations provided by Google Cloud.
- For an overview about the alternative solutions that you can use to manage single points of failure, see the following sections in this guide: Availability and continuity Deployment architecture for SAP HANA Deployment architecture for SAP S/4HANA Availability and continuity During the planning phase of implementing an SAP S/4HANA system, you need to specify the following data points for defining the system's availability and continuity: Service Level Objectives (SLO) : A target value or range of values for a service level that is measured by a service level indicator (SLI).
- Recommended storage options for Linux directory structure on SAP HANA: SAP HANA directory Recommended storage option in Google Cloud /usr/sap Balanced Persistent Disk /hana/data SSD-based Persistent Disk or Hyperdisk /hana/log SSD-based Persistent Disk or Hyperdisk /hana/shared Balanced Persistent Disk /hanabackup Balanced Persistent Disk In distributed deployments, /hana/shared and /hanabackup can also be mounted as a network file system using an NFS solution such as Filestore.

