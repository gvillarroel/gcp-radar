---
title: "Choose a migration path \_|\_ Compute Engine \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/compute/docs/import
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/compute/docs
source_metadata:
  url: https://docs.cloud.google.com/compute/docs/import
  title: "Choose a migration path \_|\_ Compute Engine \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
Guides
Send feedback
Choose a migration path
Stay organized with collections
Save and categorize content based on your preferences.
You can move VM instances, custom images, or disks that are available in
an existing environment, such as on-premises or on other cloud providers, to
Compute Engine.
A variety of migration paths are available that support different formats.
Choosing a migration path depends on whether you are moving a
VM instance, disk, or image.
The following table summarizes the migration paths available on
Compute Engine.
What you want to migrate
Tool or procedure
Best used for
VM instances
Migrate to Virtual Machines
Importing multiple VM instances and their data.
Migrating VM instances from other cloud providers such as VMware and AWS.
Testing your apps in the cloud before you migrate. If your
apps do not function properly, you can easily roll back.
With Migrate to Virtual Machines, you have a suite of features that help
you automate, simplify, and accelerate the migration process.
Migrate to VMs is free to use for customers migrating
to Google Cloud. Standard billing rates apply for all other
Google Cloud products
(such as Compute Engine or
Storage ) used or consumed during or after the
migration. For example, if you use Compute Engine VMs to deploy
Migrate to VMs, you'll need to pay for those
instance hours. For more detailed pricing information, see
Migrate to VMs pricing .
Pro Tip: This method is ideal for
moving a large number of workloads.
VM instances (in OVA or OVF format)
Importing virtual appliances
Importing virtual appliances. A virtual appliance is
a prepackaged virtual machine.
Pro Tip: This method is best suited for
importing a small number of virtual machines.
Virtual disks or images
Import virtual disks
Importing virtual disks or template disks from an on-premises or other cloud environment.
These methods use the
images import
command.
If you need to make advanced customizations or have source disks in a format
that is not supported by the import command, you can
manually import and configure disks .
The image import feature on Compute Engine is being moved to Migrate to Virtual Machines.
We recommend that you use the new image import feature on Migrate to Virtual Machines to import your virtual disks to Google Cloud.
Machine images
Importing a machine image from a virtual appliance
Importing machine images. A machine image is Compute Engine resource
that stores all the configuration, metadata, permissions, and data from one or
more disks required to create a VM instance.
This method is best suited for creating machine images from virtual appliances.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
