---
title: "Prepare a VMware source for migration \_|\_ Migrate to Virtual Machines \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-a-vmware-source
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms
source_metadata:
  url: https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-a-vmware-source
  title: "Prepare a VMware source for migration \_|\_ Migrate to Virtual Machines\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Migration
Migrate to Virtual Machines
Guides
Send feedback
Prepare a VMware source for migration
Stay organized with collections
Save and categorize content based on your preferences.
Migrate to Virtual Machines lets you migrate your virtual machines (VMs) running
in an on-premises vSphere data center to VM instances running on Google Cloud.
Before you begin
Enable Migrate to Virtual Machines on Google Cloud. See Enabling Migrate to Virtual Machines services .
Enable the VM Migration API on your host project using https://console.cloud.google.com/apis/library/vmmigration.googleapis.com .
Review the VMware versions supported by Migrate to Virtual Machines .
Review the operating systems that support migrating VMs from VMware as a source to Google Cloud.
Review Migrating VMs with Migrate to Virtual Machines: Getting started documentation. This
document provides insight into the overall structure of Migrate to Virtual Machines
including, key terms, concepts, and reference information that'll help you
migrate your workload efficiently and effectively.
Migrate your workload from an on-premises VMware source
To migrate VMs from an on-premises VMware source, you must configure a
migration source that specifies the on-premises data center from which you'll
be migrating the VMs. To configure a migration source, you have to install and
configure the Migrate Connector on your on-premises vSphere data center.
The following diagram shows the architecture of a typical Migrate to Virtual Machines deployment:
Follow these steps to install and configure a Migrate Connector, and create a
VMware source:
On vSphere , you must create a vCenter user account with the permissions
required by the Migrate Connector to access your vSphere environment.
See Create the vCenter user for the Migrate Connector .
On Google Cloud define two accounts:
A user account with the necessary permissions to perform registration.
This user account is only used at registration time.
A service account used by the Migrate Connector for run-time data
transfer to Google Cloud.
See Define Google Cloud accounts .
When registering the Migration Connector, you must provide the
Google Cloud region used to host your migrated VMs.
See Select the Google Cloud region .
Ensure that you have enabled network access for the Migrate Connector
as described in Configuring network access .
Install and register the Migrate Connector as described in
Install the Migrate Connector .
Create the vCenter user for the Migrate Connector
Create a vCenter user account with the permissions required by the Migrate
Connector to access your vSphere environment. You then pass the user credentials
to the Migrate Connector at install time.
The following table lists the permission names and the corresponding permissions
as shown in the vSphere UI:
Note: The Global.DisableMethods and Global.EnableMethods
permissions must be set at the Global, or root, level with propagation.
The remaining permissions can be applied at the VM level.
Permission
UI permission
Global.DisableMethods
Global -> Disable methods
Global.EnableMethods
Global -> Enable methods
VirtualMachine.Config.ChangeTracking
Virtual machine -> Change Configuration -> Toggle disk change tracking
VirtualMachine.Interact.PowerOff
Virtual machine -> Interaction -> Power off
VirtualMachine.Provisioning.DiskRandomRead
Virtual machine -> Provisioning -> Allow read-only disk access
VirtualMachine.Provisioning.GetVmFiles
Virtual machine -> Provisioning -> Allow virtual machine download.
VirtualMachine.State.CreateSnapshot
Virtual machine -> Snapshot management -> Create snapshot
VirtualMachine.State.RemoveSnapshot
Virtual machine -> Snapshot management -> Remove snapshot
Cryptographer.Access *
Cryptographic operations -> Direct Access *
* Only if the source VM is an encrypted VM (vCenter 6.5 and later).
Define Google Cloud accounts
On Google Cloud, you need two accounts:
A service account in your host project used by
the Migrate Connector for run-time data transfer to Google Cloud.
You can specify an existing service account, or let the Migrate Connector
create a new one for you. The Migrate Connector applies all necessary
permissions to the service account to configure it.
A user account in your host project with the
necessary permissions to register the Migrate Connector.
This user account is only used at registration time, not at run time.
Note: The service account used by the Migrate Connector is limited to 19 sources.
If you want to register more than 19 sources to the same Migrate to Virtual Machines
host project, you need to create additional service accounts.
Configure the user account
You can specify any user account in your host project to register the Migrate
Connector. The specified user account requires the following permissions:
roles/iam.serviceAccountKeyAdmin
roles/iam.serviceAccountCreator
roles/vmmigration.admin
Determine the email address of the user account you want to use for
registration. In the Google Cloud console , you can see all users in your
project on the IAM page:
Go to the IAM page
Grant the iam.serviceAccountKeyAdmin role to the user account:
gcloud projects add-iam-policy-binding PROJECT_ID
--member=user: USER_EMAIL_ADDRESS --role=roles/iam.serviceAccountKeyAdmin
Note: Depending on the security configuration of your project, you might be
prompted to select a condition .
Often selecting the option of None is correct, but confirm that with your
security team.
Grant the iam.serviceAccountCreator role to the user account:
gcloud projects add-iam-policy-binding PROJECT_ID
--member=user: USER_EMAIL_ADDRESS --role=roles/iam.serviceAccountCreator
Grant the vmmigration.admin role to the user account:
gcloud projects add-iam-policy-binding PROJECT_ID
--member=user: USER_EMAIL_ADDRESS --role=roles/vmmigration.admin
For more on assigning roles and permissions to a user account, see
Granting, changing, and revoking access to resources .
Select the Google Cloud region
On the Google Cloud a region is a specific
geographical location where you can host your resources. Regions have three or
more zones. For example, the us-west1 region denotes a region on the west
coast of the United States that has three zones: us-west1-a , us-west1-b , and
us-west1-c .
You choose which region hosts your resources, which controls where your data is
stored and used. Distribute your resources across multiple regions to tolerate
outages. Therefore, if a region experiences any disturbances, you should have
backup services running in a different region.
When you install the Migrate Connector on vSphere, you select a Google Cloud
region. The source VMs migrated using this connector are then associated with
the chosen region.
To migrate VMs to multiple regions, you must:
Create a host project.
Install and configure a separate Migrate Connector for
each supported Google Cloud region .
Migrate and deploy your VMs selecting the supported region for each VM or VM
group.
In that way, if one region goes down, you can still perform migrations by using
a migration source associated with a different region.
See Migrate to Virtual Machines locations for a
list of supported regions.
Note: Migrate to Virtual Machines supports migration to multiple regions using the
same host project. Each Migrate Connector you connect to a Google Cloud
project facilitates migration to a specific region. If you are migrating to
multiple regions you will need to deploy a separate Migrate Connector for each
region.
Configure network access
Enable network access for the Migrate Connector by opening the required ports and
by opening access to the domains required by the Google Cloud APIs:
Note: Your on-premises or Google Cloud VMware Engine hosts might also use Private Google Access . With Private Google Access, your on-premises or
Google Cloud VMware Engine hosts connect to Google Cloud APIs through a
Cloud VPN tunnel or Cloud Interconnect. To configure the DNS
on your on-premises hosts for private access, set Google API Address as
Private or Restricted . For more information on configuring
Private Google Access for your on-premises hosts, see
Private Google Access-specific domains and VIPs .
Ensure that you have enabled network access for the Migrate Connector.
The following table lists the network connectivity requirements for the connector:
Source
Destination
Firewall scope
Protocol
Port
Migrate Connector
vCenter Server
Corp LAN
HTTPS
TCP/443
Migrate Connector
vCenter Server
Corp LAN
VMW NBD
TCP/902
Migrate Connector
vSphere ESXi
Corp LAN
VMW NBD
TCP/902
Migrate Connector*
Google Cloud APIs and Artifact Registry (*.googleapis.com, gcr.io)
Internet, Cloud VPN , or Cloud Interconnect
HTTPS
TCP/443
Migrate Connector
Corp DNS Server
Corp LAN
DNS
TCP/UDP/53
* If you configure the Migrate Connector VM on vSphere or VMware Engine to use a proxy server , traffic sent to Google Cloud APIs is directed over the proxy server. Direct network connectivity to Google Cloud APIs over port 443 is then not required by the connector.
Ensure that the firewall rules on your vSphere or VMware Engine
server allow external access to the following domains required by the
Google Cloud APIs:
*.googleapis.com
gcr.io
Install the Migrate Connector
You can now install and register the Migrate Connector. For more information, see
Installing the Migrate Connector .
After you've installed and registered the Migrate Connector, you can start
migrating your VMs from your on-premises vSphere data center to
Google Cloud. For more information, see
Next steps: Start your migration .
Supported VMware Versions
Migrate to Virtual Machines supports migrations from VMware vCenter and ESXi.
The latest Migrate to Virtual Machines release is compatible with VMware versions:
vCenter: 6.0.*, 6.5.*, 6.7.*, 7.0.*, 8.0.*
ESXi: 5.5.*, 6.0.*, 6.5.*, 6.7.*, 7.0.*, 8.0.*
Next steps: Start your migration
Start your migration process, see
Migrating individual VM .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
