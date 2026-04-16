---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:12:10.645Z"
product_name: "SAP on Google Cloud"
product_slug: "sap-on-google-cloud"
feature_name: "SAP HANA TCP internal load balancer VIP deployment template for SLES"
feature_slug: "sap-hana-tcp-internal-load-balancer-vip-deployment-template-for-sles"
latest_feature_date: "2020-11-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sap/docs/sap-hana-ha-dm-deployment"
  - "https://docs.cloud.google.com/sap/docs/sap-hana-guides"
  - "https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles"
keywords:
  - "sap"
  - "hana"
  - "tcp"
  - "internal"
  - "load"
  - "balancer"
  - "vip"
  - "deployment"
---

# SAP HANA TCP internal load balancer VIP deployment template for SLES

Product: SAP on Google Cloud
Coverage: MEDIUM

## Step 02 Summary

Google Cloud now supports automating SAP HANA deployment in SLES high-availability clusters with the recommended TCP internal load balancer virtual IP implementation.

## Extended Definition

Google Cloud now supports automating SAP HANA deployment in SLES high-availability clusters with the recommended TCP internal load balancer virtual IP implementation.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sap/docs/sap-hana-ha-dm-deployment](https://docs.cloud.google.com/sap/docs/sap-hana-ha-dm-deployment)
- [https://docs.cloud.google.com/sap/docs/sap-hana-guides](https://docs.cloud.google.com/sap/docs/sap-hana-guides)
- [https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles](https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles)

## Supporting Pages

### "Deployment Manager: SAP HANA scale-up high-availability cluster configuration\

- URL: [https://docs.cloud.google.com/sap/docs/sap-hana-ha-dm-deployment](https://docs.cloud.google.com/sap/docs/sap-hana-ha-dm-deployment)
- Source ID: `site-docs-reference-required-3`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- The guide uses Cloud Deployment Manager to deploy two Compute Engine virtual machines (VMs), two SAP HANA scale up systems, a virtual IP address (VIP) with an internal passthrough Network Load Balancer implementation, and an OS-based HA cluster, all according to the best practices from Google Cloud, SAP, and the OS vendor.
- This guide shows you how to automate the deployment of SAP HANA in a Red Hat Enterprise Linux (RHEL) or SUSE Linux Enterprise Server (SLES) high-availability (HA) cluster that uses an internal passthrough Network Load Balancer to manage the virtual IP (VIP) address.
- To fix your deployments to a specific release of the scripts, comment out the type property above and uncomment the type property below. type: https://storage.googleapis.com/cloudsapdeploy/deploymentmanager/ yyyymmddhhmm /dm-templates/sap hana ha ilb/sap hana ha.py properties: primaryInstanceName: example-ha-vm1 secondaryInstanceName: example-ha-vm2 primaryZone: us-central1-a secondaryZone: us-central1-c instanceType: n2-highmem-32 network: example-network subnetwork: example-subnet-us-central1 linuxImage: family/sles-15-sp1-sap linuxImageProject: suse-sap-cloud SAP HANA parameters sap hana deployment bucket: my-hana-bucket sap hana sid: HA1 sap hana instance number: 00 sap hana sidadm password: TempPa55word sap hana system password: TempPa55word VIP parameters sap vip: 10.0.0.100 primaryInstanceGroupName: ig-example-ha-vm1 secondaryInstanceGroupName: ig-example-ha-vm2 loadBalancerName: lb-ha1 Additional optional properties networkTag: hana-ha-ntwk-tag serviceAccount: sap-deploy-example@example-project-123456.iam.gserviceaccount.com Create the instances: $ gcloud deployment-manager deployments create deployment-name --config template-name .yaml The above command invokes the Deployment Manager, which sets up the Google Cloud infrastructure and then hands control over to a script that installs and configures SAP HANA and the HA cluster.
- To fix your deployments to a specific release of the scripts, comment out the type property above and uncomment the type property below. type: https://storage.googleapis.com/cloudsapdeploy/deploymentmanager/ yyyymmddhhmm /dm-templates /sap hana ha ilb /sap hana ha.py properties: primaryInstanceName: example-ha-vm1 secondaryInstanceName: example-ha-vm2 primaryZone: us-central1-a secondaryZone: us-central1-c instanceType: n2-highmem-32 network: example-network subnetwork: example-subnet-us-central1 linuxImage: family/rhel-8-1-sap-ha linuxImageProject: rhel-sap-cloud SAP HANA parameters sap hana deployment bucket: my-hana-bucket sap hana sid: HA1 sap hana instance number: 00 sap hana sidadm password: TempPa55word sap hana system password: TempPa55word VIP parameters sap vip: 10.0.0.100 primaryInstanceGroupName: ig-example-ha-vm1 secondaryInstanceGroupName: ig-example-ha-vm2 loadBalancerName: lb-ha1 Additional optional properties networkTag: hana-ha-ntwk-tag serviceAccount: sap-deploy-example@example-project-123456.iam.gserviceaccount.com SLES resources: - name: sap hana ha type: https://storage.googleapis.com/cloudsapdeploy/deploymentmanager/latest/dm-templates/sap hana ha ilb/sap hana ha.py By default, this configuration file uses the latest release of the deployment scripts for SAP on Google Cloud.

### All SAP HANA Guides \_|\_ SAP on Google Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sap/docs/sap-hana-guides](https://docs.cloud.google.com/sap/docs/sap-hana-guides)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Migrating a VIP from alias IP to an internal load balancer Migrating a VIP to an internal load balancer in an SAP HANA HA cluster on RHEL Provides instructions for migrating a VIP in a RHEL HA cluster to an internal load balancer implementation.
- Migrating a VIP to an internal load balancer in an SAP HANA HA cluster on SLES Provides instructions for migrating a VIP in a SLES HA cluster to an internal load balancer implementation.
- Deploying an SAP HANA scale-out system with host auto-failover Terraform: SAP HANA scale-out system with host auto-failover deployment guide Provides Terraform specific instructions for the automated deployment of an SAP HANA scale-out system that includes the SAP HANA host auto-failover fault-recovery solution.
- Deploying an SAP HANA scale-out system in a high-availability cluster Terraform: SAP HANA scale-out high-availability cluster configuration guide Provides instructions for using Terraform to automate the deployment of an SAP HANA scale-out system in a SLES high-availability cluster on Google Cloud.

### "HA scale-up cluster configuration guide for SAP HANA on SLES \_|\_ SAP on\

- URL: [https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles](https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles)
- Source ID: `site-docs-reference-required-2`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- This guide includes the steps for: Configuring an internal passthrough Network Load Balancer to reroute traffic in the event of a failure Configuring a Pacemaker cluster on SLES to manage the SAP systems and other resources during a failover This guide also includes steps for configuring SAP HANA system replication, but refer to the SAP documentation for the definitive instructions.
- Configure the Cloud Load Balancing failover support for the secondary host The internal passthrough Network Load Balancer service with failover support routes traffic to the secondary host in an SAP HANA cluster based on a health check service.
- Configure the Cloud Load Balancing failover support The internal passthrough Network Load Balancer service with failover support routes traffic to the active host in an SAP HANA cluster based on a health check service.
- Here you create an additional backend service and use the same instance groups that you created earlier for the backend service behind the Internal TCP/UDP Load Balancer for your SAP HANA primary system.

