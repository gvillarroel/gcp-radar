---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:47:34.446Z"
product_name: "Bare Metal Solution"
product_slug: "bare-metal-solution"
feature_name: "View Bare Metal Solution storage resources via gcloud and API"
feature_slug: "view-bare-metal-solution-storage-resources-via-gcloud-and-api"
latest_feature_date: "2022-01-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bare-metal/docs/bms-maintenance"
  - "https://docs.cloud.google.com/sap/docs/sap-hana-ha-deployment-guide"
  - "https://docs.cloud.google.com/bare-metal/docs/order-bms-resources"
keywords:
  - "resources"
  - "gcloud"
  - "storage"
  - "view"
---

# View Bare Metal Solution storage resources via gcloud and API

Product: Bare Metal Solution
Coverage: MEDIUM

## Step 02 Summary

Enables listing and inspecting storage resources through gcloud and API commands.

## Extended Definition

Enables listing and inspecting storage resources through gcloud and API commands.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- [https://docs.cloud.google.com/sap/docs/sap-hana-ha-deployment-guide](https://docs.cloud.google.com/sap/docs/sap-hana-ha-deployment-guide)
- [https://docs.cloud.google.com/bare-metal/docs/order-bms-resources](https://docs.cloud.google.com/bare-metal/docs/order-bms-resources)

## Supporting Pages

### "Deployment Manager: SAP HANA scale-up high-availability cluster configuration\

- URL: [https://docs.cloud.google.com/sap/docs/sap-hana-ha-deployment-guide](https://docs.cloud.google.com/sap/docs/sap-hana-ha-deployment-guide)
- Source ID: `site-docs-reference-2`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- To fix your deployments to a specific release of the scripts, comment out the type property above and uncomment the type property below. type: https://storage.googleapis.com/cloudsapdeploy/deploymentmanager/ yyyymmddhhmm /dm-templates/sap hana ha ilb/sap hana ha.py properties: primaryInstanceName: example-ha-vm1 secondaryInstanceName: example-ha-vm2 primaryZone: us-central1-a secondaryZone: us-central1-c instanceType: n2-highmem-32 network: example-network subnetwork: example-subnet-us-central1 linuxImage: family/sles-15-sp1-sap linuxImageProject: suse-sap-cloud SAP HANA parameters sap hana deployment bucket: my-hana-bucket sap hana sid: HA1 sap hana instance number: 00 sap hana sidadm password: TempPa55word sap hana system password: TempPa55word VIP parameters sap vip: 10.0.0.100 primaryInstanceGroupName: ig-example-ha-vm1 secondaryInstanceGroupName: ig-example-ha-vm2 loadBalancerName: lb-ha1 Additional optional properties networkTag: hana-ha-ntwk-tag serviceAccount: sap-deploy-example@example-project-123456.iam.gserviceaccount.com Create the instances: $ gcloud deployment-manager deployments create deployment-name --config template-name .yaml The above command invokes the Deployment Manager, which sets up the Google Cloud infrastructure and then hands control over to a script that installs and configures SAP HANA and the HA cluster.
- To fix your deployments to a specific release of the scripts, comment out the type property above and uncomment the type property below. type: https://storage.googleapis.com/cloudsapdeploy/deploymentmanager/ yyyymmddhhmm /dm-templates /sap hana ha ilb /sap hana ha.py properties: primaryInstanceName: example-ha-vm1 secondaryInstanceName: example-ha-vm2 primaryZone: us-central1-a secondaryZone: us-central1-c instanceType: n2-highmem-32 network: example-network subnetwork: example-subnet-us-central1 linuxImage: family/rhel-8-1-sap-ha linuxImageProject: rhel-sap-cloud SAP HANA parameters sap hana deployment bucket: my-hana-bucket sap hana sid: HA1 sap hana instance number: 00 sap hana sidadm password: TempPa55word sap hana system password: TempPa55word VIP parameters sap vip: 10.0.0.100 primaryInstanceGroupName: ig-example-ha-vm1 secondaryInstanceGroupName: ig-example-ha-vm2 loadBalancerName: lb-ha1 Additional optional properties networkTag: hana-ha-ntwk-tag serviceAccount: sap-deploy-example@example-project-123456.iam.gserviceaccount.com SLES resources: - name: sap hana ha type: https://storage.googleapis.com/cloudsapdeploy/deploymentmanager/latest/dm-templates/sap hana ha ilb/sap hana ha.py By default, this configuration file uses the latest release of the deployment scripts for SAP on Google Cloud.
- Go to the Cloud Shell Download the template.yaml configuration file template for the SAP HANA high-availability cluster to your working directory by entering the following command in the Cloud Shell or gcloud CLI: $ wget https://storage.googleapis.com/cloudsapdeploy/deploymentmanager/latest/dm-templates/sap hana ha ilb/template.yaml Optionally, rename the template.yaml file to identify the configuration it defines.
- RHEL resources: - name: sap hana ha type: https://storage.googleapis.com/cloudsapdeploy/deploymentmanager/latest/dm-templates /sap hana ha ilb /sap hana ha.py By default, this configuration file uses the latest release of the deployment scripts for SAP on Google Cloud.

### Maintain the Bare Metal Solution environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- Source ID: `site-docs-reference`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- For example, "state" : "RUNNING" Manage resources in your Bare Metal Solution environment Bare Metal Solution management APIs, gcloud commands, and the Google Cloud console enable you to view the status of the resources in your Bare Metal Solution environment, such as servers, networking, and storage.
- NAME PROJECT REGION MACHINE TYPE IP ADDRESSES STATE SERVER NAME PROJECT ID REGION o2-standard-32-metal 192.168.1.1,192.168.2.1 RUNNING Additional command options include: --region : View devices in a specific Google Cloud region. --limit : Limit the output to show a specific number of devices To get network and storage information for a specific server in your Bare Metal Solution environment, enter your server name, project ID, and region, and issue the gcloud bms instances describe command: gcloud bms instances describe SERVER NAME --project= PROJECT ID --region= REGION The following output example shows an operational server with 12 LUNs, a client network of 192.168.1.1, and a private network of 192.168.2.1. luns: - bootLun: true name: SERVER NAME -lun000-b1 sizeGb: '200' state: READY storageVolume: SERVER NAME -vol000-b1 - name: STORAGE DEVICE NAME -lun001 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun002 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun003 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun004 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun005 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun006 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun007 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun008 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun009 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun010 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun011 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun012 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 machineType: o2-standard-32-metal name: projects/ PROJECT ID /locations/ REGION /instances/ SERVER NAME networks: - ipAddress: 192.168.1.1 macAddress: - 34:80:0D:52:AF:28 - 34:80:0D:15:3E:0D network: STORAGE DEVICE NAME -vlan001 - ipAddress: 192.168.2.1 macAddress: - 34:80:0D:52:AF:38 - 34:80:0D:15:3E:1D network: STORAGE DEVICE NAME -vlan002 state: RUNNING API Open a Cloud Shell terminal window in your Google Cloud console.
- To view a single storage volume, enter your project ID, region, and storage volume name and issue the following command: curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "X-Goog-User-Project: PROJECT ID " \ -H "Content-Type: application/json" \ "https://baremetalsolution.googleapis.com/v2/projects/ PROJECT ID /locations/ REGION /volumes/ VOLUME NAME " To view all logical unit numbers (LUNs) for your storage volume, enter your project ID, region, and storage volume name, then issue the following command: curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "X-Goog-User-Project: PROJECT ID " \ -H "Content-Type: application/json" \ "https://baremetalsolution.googleapis.com/v2/projects/ PROJECT ID /locations/ REGION /volumes/ VOLUME NAME /luns To view details for a single LUN, enter your project ID, region, storage volume name, and LUN name and issue the following command: curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "X-Goog-User-Project: PROJECT ID " \ -H "Content-Type: application/json" \ "https://baremetalsolution.googleapis.com/v2/projects/ PROJECT ID /locations/ REGION /volumes/ VOLUME NAME /luns/ LUN NAME " Organize storage volumes by using labels To help organize your storage volumes, you can use labels.
- NAME PROJECT REGION REQUESTED SIZE GIB STORAGE TYPE STATE at-1234567-svr001-vol000-b1 PROJECT ID REGION 200 SSD READY at-1111111-vol001 PROJECT ID REGION 1024 SSD READY at-2222222-nfs001-vol000 PROJECT ID REGION 400 HDD READY To view a single storage volume, enter your storage volume name, project ID, and region, and issue the gcloud bms volumes describe command: gcloud bms volumes describe VOLUME NAME --project= PROJECT ID --region= REGION The following output example shows the storage volume size, name, snapshot auto deletion policy, state, and storage type. currentSizeGib: '250' name: projects/ PROJECT ID /locations/ REGION /volumes/ VOLUME NAME requestedSizeGib: '250' snapshotAutoDeleteBehavior: OLDEST FIRST snapshotReservationDetail: reservedSpaceGib: '50' reservedSpaceRemainingGib: '50' state: READY storageType: SSD To view all LUNs for your storage volume, enter your project ID, region, and storage volume name, and issue the gcloud bms volumes luns list command: gcloud bms volumes luns list --project= PROJECT ID --region= REGION --volume= VOLUME NAME The following output example shows the names of the LUNs, region, storage volume name, volume size, and the state.

### Order Bare Metal Solution resources \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/order-bms-resources](https://docs.cloud.google.com/bare-metal/docs/order-bms-resources)
- Source ID: `site-docs-reference`
- Final score: 111
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can use procurements to order the following Bare Metal Solution resources: Servers ( available server configurations ) Storage ( available storage choices ) Partner Interconnect bandwidth To procure any other Bare Metal Solution resource, contact Google Cloud sales .
- As your resources are procured, you can provision them through the following options and start using them: Google Cloud console intake form Create a network UI Create a storage volume UI Create an NFS volume UI What's next Deploy your Bare Metal Solution environment .
- View and track procurements The time to fulfill an order might vary depending on the availability, type, and quantity of the resources that you want to procure.
- Order Bare Metal Solution resources This document explains how to create, view, and track procurements.

