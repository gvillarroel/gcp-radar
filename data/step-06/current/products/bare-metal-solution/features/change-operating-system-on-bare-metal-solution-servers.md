---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:47:34.426Z"
product_name: "Bare Metal Solution"
product_slug: "bare-metal-solution"
feature_name: "Change operating system on Bare Metal Solution servers"
feature_slug: "change-operating-system-on-bare-metal-solution-servers"
latest_feature_date: "2022-07-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bare-metal/docs/bms-maintenance"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-setup"
  - "https://docs.cloud.google.com/sap/docs/netweaver-planning-guide"
keywords:
  - "change"
  - "operating"
  - "system"
  - "allows"
  - "servers"
---

# Change operating system on Bare Metal Solution servers

Product: Bare Metal Solution
Coverage: MEDIUM

## Step 02 Summary

Allows customers to change the operating system of an existing Bare Metal Solution server.

## Extended Definition

Allows customers to change the operating system of an existing Bare Metal Solution server.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- [https://docs.cloud.google.com/bare-metal/docs/bms-setup](https://docs.cloud.google.com/bare-metal/docs/bms-setup)
- [https://docs.cloud.google.com/sap/docs/netweaver-planning-guide](https://docs.cloud.google.com/sap/docs/netweaver-planning-guide)

## Supporting Pages

### Maintain the Bare Metal Solution environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- Source ID: `site-docs-reference`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- For the OS image code, see Operating systems . curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "X-Goog-User-Project: PROJECT ID " \ -H "Content-Type: application/json" \ "https://baremetalsolution.googleapis.com/v2/projects/ PROJECT ID /locations/ REGION /instances/ SERVER NAME ?updateMask=os image" -d "{ 'osImage' : ' OS IMAGE ' }" Because this change takes awhile to complete, you can check the status by following the steps in View the status of a long-running operation .
- Retrieve the initial password for a server When you first receive your Bare Metal Solution server or change the operating system , the server begins in a default state and has an initial password.
- ProjectsClient () bms client = BareMetalSolutionClient () output = [] errors = [] try : for project in get projects ( parent , folders client , projects client ): volumes list request = ListVolumesRequest ( parent = "projects/" + project + "/locations/global" , filter = filter , ) try : for volume in bms client . list volumes ( request = volumes list request ): output . append ( f " - { volume . name } " ) This could happen because BMS API is not enabled in a certain project. except PermissionDenied as e : errors . append ( f "Unable to list bms resources for project { project } : { e } " ) except PermissionDenied as e : errors . append ( f "Unable to access folder or project: { e } " ) return " \n " . join ( output ), " \n " . join ( errors ) def main ( : Sequence [ str ]): if ORGANIZATION ID . value is not None and FOLDER ID . value is not None : raise Exception ( "Only one of organization ID or folder ID must be provided" ) elif ORGANIZATION ID . value is None and FOLDER ID . value is None : raise Exception ( "Either one of organization ID or folder ID must be provided" ) elif ORGANIZATION ID . value is not None : parent = f "organizations/ { ORGANIZATION ID . value } " else : parent = f "folders/ { FOLDER ID . value } " volumes , errors = get volumes list ( parent , filter = FILTER . value ) print ( "=================== Flat list of volumes in the folder or organization" " ===================" ) print ( volumes ) print ( "=================== List of folders or projects with errors" " ===================" ) print ( errors ) if name == " main " : app . run ( main ) Manage servers You can manage the servers in your Bare Metal Solution environment in the following ways: View servers Organize servers by using labels Rename a server Retrieve the initial password for a server View OS details Change the OS for a server Enable hyperthreading on a server View servers To view the details of your Bare Metal Solution servers, follow these steps: Console Go to the Servers page.
- Unmount the file system /testvol02 . sudo umount /testvol02 If required, find and remove the corresponding entry for the file system /testvol02 from file /etc/fstab by commenting or deleting the relevant line. grep testvol02 /etc/fstab Sample output: /dev/mapper/testvg01-lv02 /testvol02 xfs defaults 0 0 Deactivate the logical volume lv02 . sudo lvchange -an /dev/testvg01/lv02 Remove the logical volume lv02 from the volume group testvg01 . sudo lvremove /dev/testvg01/lv02 Sample output: Logical volume "lv02" successfully removed Remove the physical volume /dev/mapper/3600a0980383146354a2b522d53374236 from the volume group testvg01 . sudo vgreduce testvg01 /dev/mapper/3600a0980383146354a2b522d53374236 Sample output: Removed "/dev/mapper/3600a0980383146354a2b522d53374236" from volume group "testvg01" Optional: After removing the logical volume and the physical volume, use commands vgdisplay -v and dmsetup ls -tree to confirm that the device is no longer in use by the LVM.

### "Quickstart: Set up Google Cloud to work with your Bare Metal Solution environment\

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-setup](https://docs.cloud.google.com/bare-metal/docs/bms-setup)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To create a jump host VM instance, choose the instructions below based on the operating system you are using in your Bare Metal Solution environment.
- The Linux commands that are shown in the following instructions are for the Debian operating system.
- If you use a different operating system, the commands you need to use might also be different.
- The operating system or hypervisor software, including vendor and version.

### "SAP NetWeaver planning guide \_|\_ SAP on Google Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sap/docs/netweaver-planning-guide](https://docs.cloud.google.com/sap/docs/netweaver-planning-guide)
- Source ID: `site-docs-reference-2`
- Final score: 120
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Oracle Database on Bare Metal Solution servers with operating systems that Bare Metal Solution supports for Oracle.
- For more information about the minimum support requirements for SAP on Google Cloud, see: Getting support for SAP on Google Cloud SAP Note 2456406 - SAP on Google Cloud Platform: Support Prerequisites (An SAP user account is required) What's next To complete the tasks necessary for deployment, see the NetWeaver Deployment Guide for your operating system: SAP NetWeaver on Linux Deployment Guide SAP NetWeaver on Windows Deployment Guide For an overview of high-availability SAP NetWeaver systems on Google Cloud, see High-availability planning guide for SAP NetWeaver on Google Cloud .
- For details and instructions about how to connect to Compute Engine VMs in your SAP NetWeaver deployment, see the deployment guide for your operating system: SAP NetWeaver on Linux Deployment Guide SAP NetWeaver on Windows Deployment Guide Databases You can use the following database management systems with SAP NetWeaver on Google Cloud: SAP HANA on Linux.
- To see the available versions in each image family, see the operating system details: Red Hat Enterprise Linux (RHEL) SUSE Linux Enterprise Server (SLES) Windows Server SQL Server Enterprise For more information about the support status of the operating system versions that are certified for SAP, see OS support for SAP NetWeaver on Google Cloud .

