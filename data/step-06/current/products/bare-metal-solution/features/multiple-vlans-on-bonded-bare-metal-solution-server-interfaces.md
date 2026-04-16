---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:47:34.430Z"
product_name: "Bare Metal Solution"
product_slug: "bare-metal-solution"
feature_name: "Multiple VLANs on bonded Bare Metal Solution server interfaces"
feature_slug: "multiple-vlans-on-bonded-bare-metal-solution-server-interfaces"
latest_feature_date: "2022-06-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bare-metal/docs/bms-planning"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-maintenance"
  - "https://docs.cloud.google.com/sap/docs/sap-hana-planning-guide"
keywords:
  - "bonded"
  - "vlans"
  - "interfaces"
  - "multiple"
  - "server"
---

# Multiple VLANs on bonded Bare Metal Solution server interfaces

Product: Bare Metal Solution
Coverage: MEDIUM

## Step 02 Summary

Allows users to add multiple VLANs to the same bonded server interface.

## Extended Definition

Allows users to add multiple VLANs to the same bonded server interface.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bare-metal/docs/bms-planning](https://docs.cloud.google.com/bare-metal/docs/bms-planning)
- [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- [https://docs.cloud.google.com/sap/docs/sap-hana-planning-guide](https://docs.cloud.google.com/sap/docs/sap-hana-planning-guide)

## Supporting Pages

### Plan for Bare Metal Solution \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-planning](https://docs.cloud.google.com/bare-metal/docs/bms-planning)
- Source ID: `site-docs-reference`
- Final score: 123
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When your order an advanced networking configuration, the following options become available for more complex network deployments: Multiple VLANs Multiple VLAN attachments Multiple VPC connections Maximum transmission unit Network templates Multiple VLANs Instead of a single client network and single private network for each bonded interface, you can add multiple client networks and private networks on server bond interfaces.
- After you create and attach a network to a server through the Google Cloud console you have the following two options to apply a new network configuration on the server: Manual configuration This option lets you configure your server manually with new network interfaces, IP addressing and the IP routing.
- For example, to configure MTU on a Linux server, issue the ip link set INTERFACE NAME mtu 1500 command on all server interfaces.
- Fibre Channel-based block storage presented as multipath LUNs and shared with multiple Bare Metal Solution servers.

### Maintain the Bare Metal Solution environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- Source ID: `site-docs-reference`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- In the networks section of the output, you can view the network template, logical interfaces, bonded interfaces, and network type assigned to each interface. curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "X-Goog-User-Project: PROJECT ID " \ -H "Content-Type: application/json" \ "https://baremetalsolution.googleapis.com/v2/projects/ PROJECT ID /locations/ REGION /instances/ SERVER NAME " Implement IP Address Management in a Bare Metal Solution environment Being able to manage your network topology inside your Bare Metal Solution environment is important.
- Note: You can also configure multiple networks on a server while provisioning through the Google Cloud console intake form.
- Attach a storage volume to a server You can attach multiple storage volumes to a server at once.
- NAME PROJECT REGION MACHINE TYPE IP ADDRESSES STATE SERVER NAME PROJECT ID REGION o2-standard-32-metal 192.168.1.1,192.168.2.1 RUNNING Additional command options include: --region : View devices in a specific Google Cloud region. --limit : Limit the output to show a specific number of devices To get network and storage information for a specific server in your Bare Metal Solution environment, enter your server name, project ID, and region, and issue the gcloud bms instances describe command: gcloud bms instances describe SERVER NAME --project= PROJECT ID --region= REGION The following output example shows an operational server with 12 LUNs, a client network of 192.168.1.1, and a private network of 192.168.2.1. luns: - bootLun: true name: SERVER NAME -lun000-b1 sizeGb: '200' state: READY storageVolume: SERVER NAME -vol000-b1 - name: STORAGE DEVICE NAME -lun001 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun002 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun003 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun004 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun005 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun006 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun007 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun008 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun009 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun010 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun011 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun012 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 machineType: o2-standard-32-metal name: projects/ PROJECT ID /locations/ REGION /instances/ SERVER NAME networks: - ipAddress: 192.168.1.1 macAddress: - 34:80:0D:52:AF:28 - 34:80:0D:15:3E:0D network: STORAGE DEVICE NAME -vlan001 - ipAddress: 192.168.2.1 macAddress: - 34:80:0D:52:AF:38 - 34:80:0D:15:3E:1D network: STORAGE DEVICE NAME -vlan002 state: RUNNING API Open a Cloud Shell terminal window in your Google Cloud console.

### SAP HANA planning guide \_|\_ SAP on Google Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sap/docs/sap-hana-planning-guide](https://docs.cloud.google.com/sap/docs/sap-hana-planning-guide)
- Source ID: `site-docs-reference-2`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- For more information about multi-NIC compute instances, such as network and subnetwork requirements and the maximum number of network interfaces, see Multiple network interfaces .
- Machine types that support memory-error recovery The following Compute Engine machine types support memory-error recovery: M4: m4-megamem-28 m4-megamem-56 m4-megamem-112 m4-megamem-224 m4-ultramem-56 m4-ultramem-112 m4-ultramem-224 M3: m3-ultramem-32 m3-ultramem-64 m3-ultramem-128 m3-megamem-64 m3-megamem-128 M2: m2-ultramem-208 m2-ultramem-416 m2-megamem-416 m2-hypermem-416 Required operating systems for memory-error recovery With the required kernel patches, the following operating systems support memory-error recovery with SAP HANA Fast Restart: SUSE Linux Enterprise Server (SLES) for SAP, 12 SP3 or later.
- While using Hyperdisk with SAP HANA, to enable the best performance, we recommend that you update your SAP HANA system properties as follows: Update your global.ini file: In the fileio section, set num completion queues = 12 In the fileio section, set num submit queues = 12 Update your indexserver.ini file: In the parallel section, set tables preloaded in parallel = 32 In the global section, set load table numa aware = true When you create a Hyperdisk Extreme volume, the number of IOPS that you provision determines its maximum throughput.
- For more information, see the following: Networking overview for VMs Network bandwidth Certified operating systems for SAP HANA The following table shows the Red Hat Enterprise Linux (RHEL) and SUSE Linux Enterprise Server (SLES) operating systems that are certified by SAP for production use with SAP HANA on Google Cloud.

