---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:19:24.003Z"
product_name: "Bare Metal Solution"
product_slug: "bare-metal-solution"
feature_name: "Resource labeling and filtered monitoring in Bare Metal Solution"
feature_slug: "resource-labeling-and-filtered-monitoring-in-bare-metal-solution"
latest_feature_date: "2022-03-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bare-metal/docs/bms-monitoring"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-maintenance"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-security"
keywords:
  - "filtered"
  - "labeling"
  - "monitoring"
  - "resource"
  - "metal"
  - "bare"
  - "and"
  - "in"
---

# Resource labeling and filtered monitoring in Bare Metal Solution

Product: Bare Metal Solution
Coverage: LOW

## Step 02 Summary

Allows labeling of Bare Metal Solution resources and filtering of monitoring command output by label.

## Extended Definition

Allows labeling of Bare Metal Solution resources and filtering of monitoring command output by label.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bare-metal/docs/bms-monitoring](https://docs.cloud.google.com/bare-metal/docs/bms-monitoring)
- [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- [https://docs.cloud.google.com/bare-metal/docs/bms-security](https://docs.cloud.google.com/bare-metal/docs/bms-security)

## Supporting Pages

### Monitoring in a Bare Metal Solution environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-monitoring](https://docs.cloud.google.com/bare-metal/docs/bms-monitoring)
- Source ID: `site-docs-root-2`
- Final score: 216
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Monitoring data At a high level, our monitoring data comes from the following sources: SNMP traps Syslog messages Messages from dedicated management software Intelligent Platform Management Interface (IPMI) Common metrics of the monitored devices: CPU utilization Network Interface: Bandwidth utilization Packet discards Errors Alerting Google Cloud conducted extensive normalization and validation activities for the specific requirements of the Bare Metal Solution environment.
- We hope that this summary of our monitoring capabilities helps you to be confident in the Bare Metal Solution environment as you migrate your infrastructure and applications to the cloud.
- The following is a list of infrastructure devices in a Bare Metal Solution environment that we monitor: Compute infrastructure Server hardware Storage infrastructure Storage devices SAN switches Network infrastructure Routers Switches Interconnect infrastructure Google Cloud also keeps track of the data center environment, including server room temperature and humidity.
- Monitoring in a Bare Metal Solution environment Bare Metal Solution lets you run specialized workloads in regional extensions located near Google Cloud data centers.

### Maintain the Bare Metal Solution environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- ProjectsClient () bms client = BareMetalSolutionClient () output = [] errors = [] try : for project in get projects ( parent , folders client , projects client ): volumes list request = ListVolumesRequest ( parent = "projects/" + project + "/locations/global" , filter = filter , ) try : for volume in bms client . list volumes ( request = volumes list request ): output . append ( f " - { volume . name } " ) This could happen because BMS API is not enabled in a certain project. except PermissionDenied as e : errors . append ( f "Unable to list bms resources for project { project } : { e } " ) except PermissionDenied as e : errors . append ( f "Unable to access folder or project: { e } " ) return " \n " . join ( output ), " \n " . join ( errors ) def main ( : Sequence [ str ]): if ORGANIZATION ID . value is not None and FOLDER ID . value is not None : raise Exception ( "Only one of organization ID or folder ID must be provided" ) elif ORGANIZATION ID . value is None and FOLDER ID . value is None : raise Exception ( "Either one of organization ID or folder ID must be provided" ) elif ORGANIZATION ID . value is not None : parent = f "organizations/ { ORGANIZATION ID . value } " else : parent = f "folders/ { FOLDER ID . value } " volumes , errors = get volumes list ( parent , filter = FILTER . value ) print ( "=================== Flat list of volumes in the folder or organization" " ===================" ) print ( volumes ) print ( "=================== List of folders or projects with errors" " ===================" ) print ( errors ) if name == " main " : app . run ( main ) Manage servers You can manage the servers in your Bare Metal Solution environment in the following ways: View servers Organize servers by using labels Rename a server Retrieve the initial password for a server View OS details Change the OS for a server Enable hyperthreading on a server View servers To view the details of your Bare Metal Solution servers, follow these steps: Console Go to the Servers page.
- Click the name to view additional information about the NFS storage volume, such as snapshots. at-2222222-nfs001-vol000 Labels Displays any labels you added to this NFS file storage resource You can use labels to filter the console output by copying the text of a label and pasting it in the Filter box just above the Status field. environment:test gcloud To view the status of your NFS file storage within the Bare Metal Solution environment, issue the gcloud bms nfs-shares list command: gcloud bms nfs-shares list --project= PROJECT ID --region= REGION Additional command options include: --limit: Limit the output to show a specific number of devices. --filter: Limit the output to show devices with a specific label or other filter parameter.
- If you don't want to enable the Pod column, you can view the pod of a storage volume by clicking the storage volume name. asia-southeast1-pod1 Type Hard drive or solid-state drive HDD - Hard drive Labels Displays any labels you added to this storage resource You can use labels to filter the console output by copying the text of a label and pasting it in the Filter box just above the Status field. environment:test gcloud To view all storage volumes in your Bare Metal Solution environment and see their status, enter your project ID and issue the gcloud bms volumes list command: gcloud bms volumes list --project= PROJECT ID The following output example shows three storage volumes, the project ID, region, volume size and storage type.
- If you don't want to enable the Pod column, you can view the pod of a server by clicking the server name. asia-southeast1-pod1 Server Type Server specifications o2-standard-32-metal Client IP Server IP address that connects to your Google Virtual Private Cloud 10.200.0.5 Private IP Server IP address that connects to other Bare Metal Solution environment resources 192.168.2.5 Labels Displays any labels that you added to this server You can use labels to filter the console output by copying the text of a label and pasting it in the Filter box just above the Status field. environment:test Server activity Informs about any Bare Metal Solution infrastructure issue that might impact your workload.

### "Provide security for enterprise workloads in a Bare Metal Solution environment\

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-security](https://docs.cloud.google.com/bare-metal/docs/bms-security)
- Source ID: `site-docs-root-2`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- Fortunately, Google Cloud provides and manages the following components for Bare Metal Solution: Core infrastructure, including secure, controlled-environment facilities and power Physical security Network infrastructure and security Hardware monitoring capabilities Access to Google Cloud services Provisioning and maintenance of sole-tenancy hardware Local storage area network (SAN) Smart hands support: Onsite support for activities like hardware replacements In a Bare Metal Solution environment, security is a shared responsibility.
- Figure 5: VPC peering and the Bare Metal Solution environment As shown in Figure 6 , use a shared VPC architecture to allow resources from different projects to access the Bare Metal Solution servers.
- Prometheus is an open source monitoring solution that you can use to monitor the Bare Metal Solution infrastructure and the Oracle databases running on top of it.
- You can use OEM in a Bare Metal Solution environment to perform monitoring and alerting tasks in the same way as your on-premises data center.

