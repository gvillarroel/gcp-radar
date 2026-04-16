---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:47:34.425Z"
product_name: "Bare Metal Solution"
product_slug: "bare-metal-solution"
feature_name: "RHEL for SAP Solutions 7.7 support on Bare Metal Solution servers"
feature_slug: "rhel-for-sap-solutions-7-7-support-on-bare-metal-solution-servers"
latest_feature_date: "2022-08-22"
deprecation_date: "2022-08-22"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sap/docs/netweaver-planning-guide"
  - "https://docs.cloud.google.com/sap/docs/sap-hana-ha-planning-guide"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-maintenance"
keywords:
  - "solutions"
  - "deprecated"
  - "rhel"
  - "servers"
---

# RHEL for SAP Solutions 7.7 support on Bare Metal Solution servers

Product: Bare Metal Solution
Coverage: MEDIUM

## Step 02 Summary

Support for RHEL for SAP Solutions 7.7 on Bare Metal Solution servers is deprecated; deprecated on 2022-08-22.

## Extended Definition

Support for RHEL for SAP Solutions 7.7 on Bare Metal Solution servers is deprecated; deprecated on 2022-08-22.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/sap/docs/netweaver-planning-guide](https://docs.cloud.google.com/sap/docs/netweaver-planning-guide)
- [https://docs.cloud.google.com/sap/docs/sap-hana-ha-planning-guide](https://docs.cloud.google.com/sap/docs/sap-hana-ha-planning-guide)
- [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)

## Supporting Pages

### "SAP NetWeaver planning guide \_|\_ SAP on Google Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sap/docs/netweaver-planning-guide](https://docs.cloud.google.com/sap/docs/netweaver-planning-guide)
- Source ID: `site-docs-reference-2`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- If you use the following RHEL or SLES "for SAP" OS images that Google Cloud provides, then Google Cloud's Agent for SAP is packaged with the OS images: RHEL: all "for SAP" images SLES: SLES 15 SP4 for SAP and later versions Scale-out of SAP NetWeaver application servers SAP supports a scale-out architecture that uses multiple application servers, which supports a higher workload.
- SAP HANA SAP HANA is certified to run in Google Cloud on the following Linux operating systems: Red Hat Enterprise Linux (RHEL) for SAP Solutions SUSE Linux Enterprise Server (SLES) SUSE Linux Enterprise Server (SLES) for SAP For more information on supported machine types and operating systems, see the SAP HANA planning guide .
- Related security documents Refer to the following additional security resources for your SAP environment on Google Cloud: Securely Connecting to VM Instances Security Center Compliance in the Google Cloud Google Cloud security whitepaper Google Infrastructure security design Monitoring For support and monitoring, Google Cloud provides the Agent for SAP , for SAP workloads running on Compute Engine instances and Bare Metal Solution servers.
- For automated deployment instructions, see: Terraform: Automated VM deployment for SAP NetWeaver on Linux Terraform: HA cluster configuration guide for SAP NetWeaver on SLES Terraform: HA cluster configuration guide for SAP NetWeaver on RHEL Custom VMs and automated deployments The Terraform configuration files provided by Google Cloud don't support the deployment of Compute Engine custom machine types.

### Maintain the Bare Metal Solution environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- Source ID: `site-docs-reference`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- ProjectsClient () bms client = BareMetalSolutionClient () output = [] errors = [] try : for project in get projects ( parent , folders client , projects client ): volumes list request = ListVolumesRequest ( parent = "projects/" + project + "/locations/global" , filter = filter , ) try : for volume in bms client . list volumes ( request = volumes list request ): output . append ( f " - { volume . name } " ) This could happen because BMS API is not enabled in a certain project. except PermissionDenied as e : errors . append ( f "Unable to list bms resources for project { project } : { e } " ) except PermissionDenied as e : errors . append ( f "Unable to access folder or project: { e } " ) return " \n " . join ( output ), " \n " . join ( errors ) def main ( : Sequence [ str ]): if ORGANIZATION ID . value is not None and FOLDER ID . value is not None : raise Exception ( "Only one of organization ID or folder ID must be provided" ) elif ORGANIZATION ID . value is None and FOLDER ID . value is None : raise Exception ( "Either one of organization ID or folder ID must be provided" ) elif ORGANIZATION ID . value is not None : parent = f "organizations/ { ORGANIZATION ID . value } " else : parent = f "folders/ { FOLDER ID . value } " volumes , errors = get volumes list ( parent , filter = FILTER . value ) print ( "=================== Flat list of volumes in the folder or organization" " ===================" ) print ( volumes ) print ( "=================== List of folders or projects with errors" " ===================" ) print ( errors ) if name == " main " : app . run ( main ) Manage servers You can manage the servers in your Bare Metal Solution environment in the following ways: View servers Organize servers by using labels Rename a server Retrieve the initial password for a server View OS details Change the OS for a server Enable hyperthreading on a server View servers To view the details of your Bare Metal Solution servers, follow these steps: Console Go to the Servers page.
- To list the servers in your Bare Metal Solution environment and see their status, enter your project ID and region into the following curl command, copy the command, paste it into the Cloud Shell prompt, and press the Enter or Return key: curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://baremetalsolution.googleapis.com/v2/projects/ PROJECT ID /locations/ REGION /instances" To get network and storage information for a server in your Bare Metal Solution environment, issue the following command: curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://baremetalsolution.googleapis.com/v2/projects/ PROJECT ID /locations/ REGION /instances/ SERVER NAME " Organize servers by using labels To help organize your servers, you can use labels.
- To clear all reservations, replace the end of the command with the following: -d "{ 'reservations' : [] }" Manage storage You can manage the storage in your Bare Metal Solution environment in the following ways: View storage volumes Organize storage volumes by using labels Rename a storage volume Provision storage volume resources Remove storage volume resources View boot volume snapshots and their details Create a boot volume snapshot Delete a boot volume snapshot Restore a boot volume snapshot View storage volumes Paying attention to your storage resources in the Bare Metal Solution environment helps you determine if your servers have enough storage capacity for applications and workloads.
- The following sample command limits the output to find servers with the key-value pair label environment = test . curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "X-Goog-User-Project: PROJECT ID " \ -H "Content-Type: application/json" \ "https://baremetalsolution.googleapis.com/v2/projects/ PROJECT ID /locations/ REGION /instances"?filter=labels. environment = test Rename a server To rename a server, follow these steps: Console In the Google Cloud console, go to the Compute Engine > Bare Metal Solution > Servers page.

### "SAP HANA high-availability planning guide \_|\_ SAP on Google Cloud \_|\_\

- URL: [https://docs.cloud.google.com/sap/docs/sap-hana-ha-planning-guide](https://docs.cloud.google.com/sap/docs/sap-hana-ha-planning-guide)
- Source ID: `site-docs-reference-2`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- Click the tab for your operating system: RHEL /bin/kill /bin/mount /bin/umount /sbin/dmsetup /sbin/lvdisplay /sbin/lvscan /sbin/pvscan /sbin/vgchange /sbin/vgscan /usr/bin/gcloud /usr/bin/lsof /usr/bin/mkdir /usr/bin/sg persist /usr/bin/systemctl /usr/sbin/lsof /usr/sbin/xfs repair SLES /bin/kill /bin/mount /bin/umount /sbin/dmsetup /sbin/lvdisplay /sbin/lvscan /sbin/pvscan /sbin/vgchange /sbin/vgscan /sbin/xfs repair /usr/bin/gcloud /usr/bin/lsof /usr/bin/mkdir /usr/bin/sg persist /usr/bin/systemctl /usr/sbin/lsof The following example shows an entry in the /etc/sudoers file.
- To deploy an HA cluster with a load-balancer VIP implementation, see: Terraform: SAP HANA high-availability cluster configuration guide HA cluster configuration guide for SAP HANA on RHEL HA cluster configuration guide for SAP HANA on SLES Static route VIP implementations The static route implementation also provides protection against zone failures, but requires you to use a VIP outside of the IP ranges of your existing VPC subnets where the VMs reside.
- To update the storage manager for SAP HANA: Check the version of your current storage manager for SAP HANA: RHEL sudo yum check-update google-sapgcestorageclient SLES sudo zypper list-updates -r google-sapgcestorageclient If an update exists, install the update: RHEL sudo yum update google-sapgcestorageclient SLES sudo zypper update The updated storage manager for SAP HANA is installed in /usr/sap/google-sapgcestorageclient/gceStorageClient.py .
- For more information about using the SAP HANA HA/DR provider hooks, see the high availability deployment guides: HA scale-up cluster for SAP HANA on RHEL HA scale-up cluster for SAP HANA on SLES HA scale-out cluster for SAP HANA on SLES OS-native HA clusters for SAP HANA on Google Cloud Linux operating system clustering provides application and guest awareness for your application state and automates recovery actions in case of failure.

