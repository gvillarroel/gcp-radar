---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:47:34.435Z"
product_name: "Bare Metal Solution"
product_slug: "bare-metal-solution"
feature_name: "Start stopped Bare Metal Solution servers"
feature_slug: "start-stopped-bare-metal-solution-servers"
latest_feature_date: "2022-03-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bare-metal/docs/bms-setup"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-maintenance"
  - "https://docs.cloud.google.com/sap/docs/netweaver-planning-guide"
keywords:
  - "operators"
  - "stopped"
  - "start"
  - "allows"
  - "servers"
---

# Start stopped Bare Metal Solution servers

Product: Bare Metal Solution
Coverage: MEDIUM

## Step 02 Summary

Allows operators to start a Bare Metal Solution server that has stopped.

## Extended Definition

Allows operators to start a Bare Metal Solution server that has stopped.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bare-metal/docs/bms-setup](https://docs.cloud.google.com/bare-metal/docs/bms-setup)
- [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- [https://docs.cloud.google.com/sap/docs/netweaver-planning-guide](https://docs.cloud.google.com/sap/docs/netweaver-planning-guide)

## Supporting Pages

### "Quickstart: Set up Google Cloud to work with your Bare Metal Solution environment\

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-setup](https://docs.cloud.google.com/bare-metal/docs/bms-setup)
- Source ID: `site-docs-root`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- Installing http server sudo yum install httpd sudo systemctl restart httpd Testing curl http://127.0.0.1:80 Create an instance group. gcloud compute instance-groups unmanaged create INSTANCE GROUP NAME --project= PROJECT ID --zone= ZONE Replace the following: INSTANCE GROUP NAME : the name of the instance group PROJECT ID : the ID of the project ZONE : the zone in which to create the instance group Add the VM to the instance group. gcloud compute instance-groups unmanaged add-instances INSTANCE GROUP NAME --project= PROJECT ID --zone= ZONE --instances= VM NAME Replace the following: INSTANCE GROUP NAME : the name of the instance group PROJECT ID : the ID of the project ZONE : the zone in which to create the instance group VM NAME : the name of the VM Create an internal passthrough Network Load Balancer: Start your configuration In the Google Cloud console, go to the Load balancing page.
- The following example, adds the 0.0.0.0/0 custom IP to the Cloud Router's advertisements: gcloud compute routers update-bgp-peer router-name \ --peer-name bgp-session-name \ --add-advertisement-ranges 0.0.0.0/0 Optionally, set the VPC Network Dynamic Routing Mode to global If you have Bare Metal Solution servers in two different regions, consider enabling global routing mode on the VPC network to have your Bare Metal Solution regions talk to each other directly over the VPC network.
- Start by logging in as the root user: sudo su - To change the root password, issue the passwd command and follow the prompts: passwd To return to the customeradmin user prompt, exit the root user prompt: exit Remember to store your passwords in a safe place for recovery purposes.
- Add the network tag ( default-igw-tags ) that you just created to any existing VMs in your VPC network that need internet access, so that they can continue to access the internet after you create a new default route that your Bare Metal Solution servers can also use.

### Maintain the Bare Metal Solution environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- Source ID: `site-docs-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- ProjectsClient () bms client = BareMetalSolutionClient () output = [] errors = [] try : for project in get projects ( parent , folders client , projects client ): volumes list request = ListVolumesRequest ( parent = "projects/" + project + "/locations/global" , filter = filter , ) try : for volume in bms client . list volumes ( request = volumes list request ): output . append ( f " - { volume . name } " ) This could happen because BMS API is not enabled in a certain project. except PermissionDenied as e : errors . append ( f "Unable to list bms resources for project { project } : { e } " ) except PermissionDenied as e : errors . append ( f "Unable to access folder or project: { e } " ) return " \n " . join ( output ), " \n " . join ( errors ) def main ( : Sequence [ str ]): if ORGANIZATION ID . value is not None and FOLDER ID . value is not None : raise Exception ( "Only one of organization ID or folder ID must be provided" ) elif ORGANIZATION ID . value is None and FOLDER ID . value is None : raise Exception ( "Either one of organization ID or folder ID must be provided" ) elif ORGANIZATION ID . value is not None : parent = f "organizations/ { ORGANIZATION ID . value } " else : parent = f "folders/ { FOLDER ID . value } " volumes , errors = get volumes list ( parent , filter = FILTER . value ) print ( "=================== Flat list of volumes in the folder or organization" " ===================" ) print ( volumes ) print ( "=================== List of folders or projects with errors" " ===================" ) print ( errors ) if name == " main " : app . run ( main ) Manage servers You can manage the servers in your Bare Metal Solution environment in the following ways: View servers Organize servers by using labels Rename a server Retrieve the initial password for a server View OS details Change the OS for a server Enable hyperthreading on a server View servers To view the details of your Bare Metal Solution servers, follow these steps: Console Go to the Servers page.
- Copy the command, paste it into the Cloud Shell prompt, and press the Enter or Return key. curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "X-Goog-User-Project: PROJECT ID " \ -H "Content-Type: application/json" \ "https://baremetalsolution.googleapis.com/v2/projects/ PROJECT ID /locations/ REGION /nfsShares" -d \ '{ "name": "projects/ PROJECT ID /locations/ REGION /nfsShares/ NFS VOLUME NAME ", "labels": { "nfsKey1": "some value", "key2": "another value", }, "requestedSizeGib": " SIZE GIB ", "storageType": " STORAGE TYPE ", "allowedClients": [ { "network": "projects/ PROJECT ID /locations/ REGION /networks/ NETWORK NAME ", "allowedClientsCidr": " IP ADDRESS RANGE ", "mountPermissions": " MOUNT PERMISSIONS ", "allowDev": ALLOW DEV , "allowSuid": ALLOW SUID , "noRootSquash": ENABLE ROOT SQUASH , } ], }' Because creating an NFS volume takes a while to complete, you can check the status by following the steps in View the status of a long-running operation .
- Copy the command, paste it into the Cloud Shell prompt, and press the Enter or Return key. curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "X-Goog-User-Project: PROJECT ID " \ -H "Content-Type: application/json" \ "https://baremetalsolution.googleapis.com/v2/projects/ PROJECT ID /locations/ REGION /nfsShares/ NFS VOLUME NAME ?updateMask=allowed clients%2Clabels" -d \ '{ "name": "projects/ PROJECT ID /locations/ REGION /nfsShares/ NFS VOLUME NAME ", "labels": { "newKey": "newVal", }, "allowedClients": [ { "network": "projects/ PROJECT ID /locations/ REGION /networks/ NFS VOLUME NAME ", "allowedClientsCidr": " IP ADDRESS RANGE ", "mountPermissions": " MOUNT PERMISSIONS ", "allowDev": ALLOW DEV , "allowSuid": ALLOW SUID , "noRootSquash": ENABLE ROOT SQUASH , } ], }' Because updating an NFS volume takes a while to complete, you can check the status by following the steps in View the status of a long-running operation .
- To list the servers in your Bare Metal Solution environment and see their status, enter your project ID and region into the following curl command, copy the command, paste it into the Cloud Shell prompt, and press the Enter or Return key: curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://baremetalsolution.googleapis.com/v2/projects/ PROJECT ID /locations/ REGION /instances" To get network and storage information for a server in your Bare Metal Solution environment, issue the following command: curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://baremetalsolution.googleapis.com/v2/projects/ PROJECT ID /locations/ REGION /instances/ SERVER NAME " Organize servers by using labels To help organize your servers, you can use labels.

### "SAP NetWeaver planning guide \_|\_ SAP on Google Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sap/docs/netweaver-planning-guide](https://docs.cloud.google.com/sap/docs/netweaver-planning-guide)
- Source ID: `site-docs-reference-2`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- This host can provide a single point of fortification or audit and can be started and stopped to enable or disable inbound SSH communication from the internet.
- VM instances with local SSDs attached cannot be stopped and then restarted.
- The following guides provide generally useful information about how to deploy VMs: Creating and Starting an Instance Creating Windows Server Instances Creating SQL Server Instances For detailed information and instructions about deploying your SAP NetWeaver system on Compute Engine VMs, see the following: Overview of Linux deployment for SAP NetWeaver Overview of Windows deployment for SAP NetWeaver Automation for SAP NetWeaver deployments Google Cloud provides Terraform configuration files that you can use to automate the deployment of Google Cloud infrastructure for SAP NetWeaver with Linux.
- Related security documents Refer to the following additional security resources for your SAP environment on Google Cloud: Securely Connecting to VM Instances Security Center Compliance in the Google Cloud Google Cloud security whitepaper Google Infrastructure security design Monitoring For support and monitoring, Google Cloud provides the Agent for SAP , for SAP workloads running on Compute Engine instances and Bare Metal Solution servers.

