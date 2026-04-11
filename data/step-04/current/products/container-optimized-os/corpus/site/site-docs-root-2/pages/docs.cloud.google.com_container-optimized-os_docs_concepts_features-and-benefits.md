---
title: "Container-Optimized OS Overview \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/container-optimized-os/docs/concepts/features-and-benefits
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/container-optimized-os/docs/concepts/features-and-benefits
source_metadata:
  url: https://docs.cloud.google.com/container-optimized-os/docs/concepts/features-and-benefits
  title: "Container-Optimized OS Overview \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
Container-Optimized OS
Guides
Send feedback
Container-Optimized OS Overview
Stay organized with collections
Save and categorize content based on your preferences.
Container-Optimized OS from Google is an operating system image for your
Compute Engine VMs that is optimized for running containers.
Container-Optimized OS is maintained by Google and based on the open source
Chromium OS project. With Container-Optimized OS, you can bring up your
containers on Google Cloud Platform quickly, efficiently, and securely.
Features and Benefits
Container-Optimized OS provides the following benefits:
Run Containers Out of the Box : Container-Optimized OS instances come
pre-installed with the Docker and containerd runtimes and cloud-init . With a
Container-Optimized OS instance, you can bring up your container at the
same time you create your VM, with no on-host setup required.
Smaller attack surface : Container-Optimized OS has a smaller footprint,
reducing your instance's potential attack surface.
Locked-down by default : Container-Optimized OS instances include a
locked-down firewall and other security settings by default.
Automatic Updates : Container-Optimized OS instances are configured to
automatically download weekly updates in the background; only a reboot is
necessary to use the latest updates.
Limitations
Container-Optimized OS has limited or no support for some of the common
features you may be familiar with on other operating systems:
Container-Optimized OS does not include a package manager; as such, you'll
be unable to install software packages directly on an instance. However, you
can use CoreOS toolbox to install and run debugging and admin tools in an
isolated container.
Container-Optimized OS does not support execution of non-containerized
applications.
The Container-Optimized OS kernel is locked down; you'll be unable to
install third-party kernel modules or drivers.
Container-Optimized OS is not supported outside of the Google Cloud Platform
environment.
Using Container-Optimized OS
Container-Optimized OS is the default node OS Image in Kubernetes Engine and
other Kubernetes deployments on Google Cloud Platform. See the Kubernetes
Engine Quickstart for more information on using Container-Optimized OS with
Kubernetes Engine.
You can also use Container-Optimized OS to quickly bring up a container
on a Compute Engine instance with minimal setup. For more information, see
Creating and Configuring Instances .
You can run tools like ping , the Google Cloud CLI, pstree , htop ,
emacs and more using the CoreOS toolbox utility, which is pre-installed in
Container-Optimized OS at /usr/bin/toolbox . See Debugging with toolbox for
more information.
Use cases for Container-Optimized OS
Container-Optimized OS can be used to run most containers. You should
consider using Container-Optimized OS as the operating system for your
Compute Engine instance if you have the following needs:
You need support for containers or Kubernetes with minimal setup.
You need an operating system that has a small footprint and is security
hardened for containers.
You need an operating system that is tested and verified for running
Kubernetes on your Compute Engine instances.
Container-Optimized OS may not be the right choice for you in the following
cases:
Your application is not containerized or your containerized application
depends on kernel modules, drivers and other additional packages that
are not available in Container-Optimized OS.
You need professional customer support from a Linux provider (Canonical,
Core OS, Redhat, SUSE, etc).
You want your image and OS application to be fully supported outside
Google Cloud.
See Containers on Google Cloud to learn about
other operating systems you can use to
run containerized applications on Google Cloud. Compute Engine
provides images for other popular operating systems, including images that are
optimized for containers .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
