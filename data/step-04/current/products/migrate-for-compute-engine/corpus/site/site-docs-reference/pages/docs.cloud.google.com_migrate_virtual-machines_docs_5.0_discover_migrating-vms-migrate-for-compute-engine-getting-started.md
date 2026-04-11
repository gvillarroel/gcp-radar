---
title: "Migration journey with Migrate to Virtual Machines \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/architecture
source_metadata:
  url: https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started
  title: "Migration journey with Migrate to Virtual Machines \_|\_ Google Cloud Documentation"
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
Migration journey with Migrate to Virtual Machines
Stay organized with collections
Save and categorize content based on your preferences.
This document guides you through migrating your virtual machines (VMs) from your
source environment to Google Cloud by using Migrate to Virtual Machines .
Your source environment might be running in an on-premises environment, in a
private hosting environment, or in another cloud provider.
This document provides an overview of Migrate to Virtual Machines and what it's used
for. It also contains important points for you to consider when planning a VM
migration, and provides guidance about how to migrate VMs.
This document is useful if you're planning to migrate VMs from a supported source
environment to Compute Engine with Migrate to Virtual Machines. These source
environments can include the following:
A
VMware vSphere
environment
A
Microsoft Azure VM
environment
An
Amazon Elastic Compute Cloud (Amazon EC2)
environment
Migrate to Virtual Machines lets you streamline your VM migration to Google Cloud.
You don't have to spend effort in designing and implementing a reliable toolchain
to manually evaluate how your VMs behave in Google Cloud, and then to
manually migrate them. Migrate to Virtual Machines accelerates your VM migration, saves
you time, and lets you focus on improving your workloads.
This series assumes that you have read and are familiar with the following
documents:
Migrate to Virtual Machines architecture :
describes the reference architecture of Migrate to Virtual Machines.
Design the migration to Google Cloud
To migrate your VMs from your source environment to Google Cloud, we
recommend that you follow the framework described in the
Migrate to Google Cloud series .
The following diagram illustrates the path of your migration journey.
The framework illustrated in the preceding diagram has four phases:
Assess . In this phase, you assess your source environment, assess
the workloads that you want to migrate to Google Cloud, and assess
which VMs support each workload.
Plan . In this phase, you create the basic infrastructure for
Migrate to Virtual Machines, such as provisioning the resource
hierarchy and setting up network access.
Deploy . In this phase, you migrate the VMs from the source
environment to Compute Engine.
Optimize . In this phase, you begin to take advantage of the cloud
technologies and capabilities.
Assess the source environment and workloads
In the assess phase ,
you gather information about the following:
Your source and target environment
The workloads that you want to migrate
To help you to plan your migration and to rightsize the resources that you need
for the migration and your target environment, it's crucial to assess your source
environment and the workloads that you want to migrate. To learn how to assess
your environment, see Migrate to Google Cloud: Assess and discover your workloads .
After you've assessed your environment, you refine the assessment by taking
into account migration aspects that are specific to
Migrate to Virtual Machines, such as the following:
Migrate to Virtual Machines requirements . Evaluate Migrate to Virtual Machines
requirements to ensure that both your source and target environments provide
the features and the resources that Migrate to Virtual Machines needs for the
migration, such as network connectivity and bandwidth, and secure
communication channels. Based on the source that you want to migrate from,
evaluate VMware requirements ,
AWS requirements ,
or Azure requirements .
Required permissions for Migrate to Virtual Machines . When you know which kind
of permissions Migrate to Virtual Machines needs, you qualify whether those
permissions meet your security requirements. Evaluate the required permissions for Migrate to Virtual Machines .
Build your foundation
This section contains guidance on how to build the foundation for
Migrate to Virtual Machines.
Based on the source from which you want to migrate, see the guidance in Migrating from VMware , Migrating from AWS , or Migrating from Azure .
Otherwise, continue with the guidance in this section.
To build a foundation for Migrate to Virtual Machines in the
source environment and in Google Cloud, you do the following:
Build the foundation on Google Cloud.
Prepare the source environment.
Build the foundation on Google Cloud
To build the foundation for Migrate to Virtual Machines on
Google Cloud, you do the following:
Provision the resource hierarchy .
Migrate to Virtual Machines
uses Google Cloud projects
to control the migration process (the host project ) and as a target
environment (the target projects ). Migrate to Virtual Machines
requires a host project .
You can also optionally
add one or more target projects
to use as destinations for the migrated VMs.
Enable Migrate to Virtual Machines services .
Migrate to Virtual Machines depends on certain
Google Cloud APIs and services. To learn how to enable the required APIs
and services, see
Enabling Migrate to Virtual Machines services .
Prepare the source environment
To build a foundation for Migrate to Virtual Machines on
your source environment,
install the Migrate Connector to configure the environment as a migration source. For more
information about the Migrate Connector, see
Migrate to Virtual Machines architecture .
Migrate your VMs
After you build your foundation, you migrate your VMs with
Migrate to Virtual Machines from your source environment to
Google Cloud.
Structure of a Migrate to Virtual Machines migration
The following terms are important for understanding how to organize a VM
migration from a supported source environment to Google Cloud:
VM migration lifecycle . Each VM that you migrate with Migrate to Virtual Machines
follows an ordered set of phases. Those phases are part of the
VM migration lifecycle . Migrate to Virtual Machines
automatically advances each VM to migrate through those phases.
Groups . Migrate to Virtual Machines lets you create
sets of VMs to migrate. These sets are called
groups . To logically
separate VMs and to migrate VMs in batches, you can use groups. When you
migrate the VMs in a group, Migrate to Virtual Machines performs all the operations
of the VM migration lifecycle on each VM in the group or, optionally, on a
subset of the VMs in the group. For example, you might create
test clones
of one or two VMs in a large group to evaluate if the clones can function
properly on Google Cloud.
OS adaptations . The VMs you migrate to Google Cloud with
Migrate to Virtual Machines require changes to their
configuration to function properly. These changes are referred to as
OS adaptations .
Migrate to Virtual Machines automatically applies OS
adaptations to the VMs that you migrate.
Migrate VMs with Migrate to Virtual Machines
To migrate VMs with Migrate to Virtual Machines you do the
following:
Organize your migration with groups . To help mitigate the risks of a
migration, we recommend that you use groups to logically separate the VMs
to migrate. To group the VMs to migrate, you can use the information
gathered during the assessment phase . For
example, you can group the VMs based on which application they support, or
you might consider the network the VMs are connected to.
Gather machine sizing recommendations and utilization insights . To
evaluate the resources and determine the optimal target machines for your
source machines, gather detailed sizing recommendations and reporting about
your machines by
generating a source VM utilization report .
Migrate each group . Execute the migration on each group of VMs. As
part of the VM migration lifecycle, Migrate to Virtual Machines
lets you run a test clone of a VM in Google Cloud. We recommend that
you use test clones to validate if your VMs function properly in
Google Cloud before migrating them.
For more information about migrating groups of VMs with
Migrate to Virtual Machines, see
Migrating VM groups with Migrate to Virtual Machines .
Optimize your environment after migration
When you complete all the migration phases, the migration is considered done.
However, your Google Cloud environment might need further optimizations.
For example, you can rightsize Compute Engine VMs, or you can start
using managed services.
For more information about optimization, see
Migrate to Google Cloud: Optimize your environment .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
