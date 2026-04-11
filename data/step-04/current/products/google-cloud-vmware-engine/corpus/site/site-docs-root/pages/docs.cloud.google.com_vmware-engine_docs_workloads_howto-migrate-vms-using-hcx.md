---
title: "Migrating VMware VMs using VMware HCX \_|\_ Google Cloud VMware Engine \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vmware-engine/docs/workloads/howto-migrate-vms-using-hcx
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/vmware-engine/docs
source_metadata:
  url: https://docs.cloud.google.com/vmware-engine/docs/workloads/howto-migrate-vms-using-hcx
  title: "Migrating VMware VMs using VMware HCX \_|\_ Google Cloud VMware Engine \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
VMware Engine
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Migrating VMware VMs using VMware HCX
This page describes how you can use VMware HCX to migrate your virtual machines
(VMs) from your VMware environment to Google Cloud VMware Engine. VMware HCX
abstracts vSphere-based resources in your VMware environment and cloud resources and presents them to
applications as one continuous resource, creating a hybrid infrastructure.
Before you begin
Make sure that the VMware product versions that you use on-premises are
supported by the selected migration type (live/cold/bulk) with HCX. For
more information about source vSphere versions and their corresponding
supported HCX features, see the
VMware product interoperability matrix .
The HCX download depot has been decommissioned . Google Cloud side upgrades are managed as part of the VMware Engine service. Contact support if you need HCX upgrade assistance.
You must have a Google Cloud project and a
Virtual Private Cloud (VPC) network .
The VMware environment must be connected to the VPC
network in your project using either Cloud VPN or
Cloud Interconnect . If you use
Cloud VPN, review the VMware HCX
Minimum Network Underlay Requirements for HCX .
The overview described in this page is independent of the specific versions of
vSphere in your VMware environment as long as your vSphere version is
compatible with HCX.
Deploying a hybrid infrastructure solution using VMware HCX in your private cloud
Deploying the HCX migration solution for Google Cloud VMware Engine requires you to do
the following:
Create a private cloud in your
VMware Engine environment.
Connect your VMware environment network to your
private cloud.
Prepare, install, configure, and use VMware HCX components
in your VMware environment.
Create a private cloud in your environment
Create a private cloud in your
Google Cloud VMware Engine environment. When you create a private cloud,
VMware Engine does the following for you:
Deploys the HCX Cloud Manager appliance in the system management network
and the management resource pool in your private cloud.
Configures HCX Cloud Manager with the compute profile (network pool)
information.
Establishes network connectivity between the various HCX service appliances
and HCX Cloud Manager.
Generates a license activation key and configures HCX Cloud Manager to use
it.
Registers HCX Cloud Manager with the VMware HCX service.
Because HCX is automatically deployed as part of private cloud creation, you don't need to provide a subnet IP address range for HCX services.
Connect your VMware environment network to your private cloud
Use your Cloud Interconnect to
connect your VMware environment network to your private cloud .
Add your VMware Engine subnet IP address ranges to
custom routes for the Cloud Router that terminates the
Cloud Interconnect attachment.
Open required network ports on
your VMware environment firewall.
Prepare for HCX Cloud Manager installation in your VMware environment
With HCX 4.9.0 installations, HCX deployments support air-gapped sites where
inbound or outbound connections to or from the internet are not allowed. For more
information, see Understanding Air-gapped Sites .
Download the HCX Connector OVA from HCX Cloud Manager.
In the Google Cloud console, go to the Private clouds page.
Go to Private clouds
Click the private cloud that you want to prepare.
Under Management appliances , click the URL for the HCX Cloud Manager.
In HCX Cloud Manager, go to Administration > System Updates .
Click Request download link and download the OVA file.
Update HCX Cloud Manager to the latest version available from the HCX Cloud
Manager UI.
Copy a license activation key for your HCX Connector.
In your Google Cloud console, go to Private clouds and select
your private cloud.
Go to HCX Connector Keys > View .
Click the copy icon content_copy to copy your key.
You are responsible for storing and managing copied activation keys.
If needed, you can generate a new HCX activation key by clicking Generate Additional Key .
Newly generated keys require a name and are appended to the end of the downloadable file containing generated activation keys.
Install HCX Connector in your VMware environment
Install and configure HCX Connector in your VMware environment by
following the instructions in the VMware HCX User Guide .
Prepare your VMware environment for HCX Connector installation.
Identify available IP addresses.
If necessary, create vLANs/subnets.
Deploy the HCX Connector OVA on your VMware environment.
Use the activation key downloaded earlier, and register your HCX Connector
instance with VMware.
Configure HCX Connector.
Use HCX Cloud Manager for workload migration
To learn how to use HCX to migrate workloads from your VMware environment
to your private cloud, see the VMware HCX User Guide .
Here are some of the operations you can perform:
Pair the two sites (VMware environment and private cloud)
Perform and schedule migrations:
Cold
Bulk
vMotion
Extend layer 2 networks
Note: Before extending a layer 2 network, review the
recommended MTU settings
and apply them to the HCX uplink profiles both VMware environment and in
VMware Engine.
External references
VMware HCX User Guide .
Learning Hybrid Cloud Extension (HCX) .
Learning Hybrid Cloud Extension (HCX) Part 2: Migration Types .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
