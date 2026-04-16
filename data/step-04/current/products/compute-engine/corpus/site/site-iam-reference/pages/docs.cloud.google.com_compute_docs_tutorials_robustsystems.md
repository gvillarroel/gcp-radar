---
title: "Designing resilient systems \_|\_ Compute Engine \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/compute/docs/tutorials/robustsystems
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/compute/docs/access
source_metadata:
  url: https://docs.cloud.google.com/compute/docs/tutorials/robustsystems
  title: "Designing resilient systems \_|\_ Compute Engine \_|\_ Google Cloud Documentation"
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
Designing resilient systems
Stay organized with collections
Save and categorize content based on your preferences.
This document describes best practices for designing resilient systems
on Compute Engine. It provides general advice and covers some features
in Compute Engine that can help mitigate instance downtime and prepare
for times when your Compute Engine instances unexpectedly fail.
A resilient system is a system that can withstand a certain amount of failures
or disruptions without interrupting your service or affecting your users'
experience using your service. While Compute Engine makes every
effort to prevent such disruptions, certain events are unpredictable, and it's
best to be prepared for these events.
Types of failures
At some point, one or more of your compute instances might be lost due to
system or hardware failures. The following list contains some types of failure
scenarios that you can mitigate:
Unexpected single instance failure
Unexpected single instance failures can be due to hardware or system
failure. You can mitigate these events by using
persistent disks and
startup scripts to save your data and re-enable software after
you restart the VM.
Unexpected single VM reboot
At some point in time, you might experience an unexpected single VM failure
and reboot. Unlike an unexpected single VM failure, Compute Engine
automatically reboots your VM after it fails. To help mitigate these events,
backup your data , use
Hyperdisk
or Persistent Disk
and use
startup scripts to quickly re-configure software.
Zone or region failures
Zone and region failures are rare failures
that can cause all of your instances in a given zone or region to be inaccessible
or fail. To mitigate these failures, create
diversity across regions and zones and implement
load balancing . You should also
back up your data or
replicate your disks
across multiple zones.
Tips for designing resilient systems
To help mitigate compute instance failures, design your application to be
resilient against failures, network interruptions, and unexpected disasters. A
resilient system gracefully handles failures, for example, by redirecting
traffic from an inaccessible instance to a live instance, or by automating
tasks on reboot.
Here are some general tips to help you design a resilient system against
failures.
Use live migration
Google Cloud periodically performs maintenance on its infrastructure by patching
systems with the latest software, performing routine tests and preventative
maintenance, and generally ensuring that its infrastructure is as secure, fast,
and efficient as possible. Compute Engine employs live migration
to ensure that this infrastructure maintenance is transparent by default to your
compute instances.
Live migration is a technology
that moves your running instances away from systems that are about to undergo
maintenance work. Compute Engine does this automatically for supported
instance types.
During live migration, your instance might experience a decrease in performance
for a short period of time. For instances that demand constant, maximum
performance, you can configure the instances to be restarted on another host
instead of undergoing live migration. If you choose this option,
Compute Engine stops the instance and restarts it on a host that isn't
involved in a maintenance event. Terminating and restarting the instance is
suitable for overall applications that are also built to handle instance
failures or reboots.
To configure your instances for live migration or to configure them to restart
instead of migrate, see
Set the host maintenance policy for a compute instance .
Distribute your instances
Create instances across more than one region and zone so that you have
alternative compute instances to point to if a zone or region containing one of
your instances is disrupted. If you create all your instances in the same zone
or region, then you won't be able to access any of those instances if that
zone or region becomes unreachable.
Use zone-specific internal DNS names
Set the default internal DNS type for your project
or organization to zonal DNS. In your applications, use zonal DNS names when
accessing other compute instances. Internal DNS servers are distributed across
all zones, so you can rely on zonal DNS names to resolve even if there are
failures in other locations.
Global DNS is less resilient, due to single point failures. Zonal DNS mitigates
the risk of cross-regional outages. Zonal DNS does not require instance name
uniqueness across all regions in a project, which allows for faster instance
creation.
To check if an instance uses zonal DNS names or global DNS names, see
Determine the internal DNS name for a VM .
If your project uses global DNS names, you can switch to using
zonal DNS names. For more information, see
Use Zonal DNS for your internal DNS type .
Create groups of VMs
Use managed instance groups
to create homogeneous groups of VMs so that load balancers can direct traffic to
more than one VM in case a single VM becomes unhealthy.
Managed instance groups (MIGs) also offer features like autoscaling
and autohealing .
Autoscaling lets you deal with spikes in traffic by scaling the number of VMs up
or down based on specific signals. Autohealing performs health checking and, if
necessary, automatically recreates unhealthy VMs.
MIGs are also available for regions, so you can create a group of VMs
distributed across multiple zones within a single region. For more information,
see Creating and managing regional MIGs .
Use load balancing
Google Cloud offers a load balancing service that helps you support periods of
heavy traffic so that you don't overload your compute instances. With
Cloud Load Balancing , you can
do the following:
Deploy your application on VMs within multiple zones using
regional MIGs .
Then, you can configure a
forwarding rule that can
spread traffic across all VMs in all zones within the region. Each forwarding
rule can define one entry point to your application using an external IP
address.
Deploy VMs across multiple regions using global load balancing.
HTTP(S) load balancing enables your traffic to enter the Google Cloud system
at the location nearest the client.
Cross-regional load balancing
provides redundancy so that if a region is unreachable, traffic is
automatically diverted to another region. In this way, your service remains
reachable using the same external IP address.
Use autoscaling to automatically add or delete
VMs from a MIG based on increases or decreases in load.
Additionally, Cloud Load Balancing offers VM health checking, providing
support in detecting and handling VM failures.
Cloud DNS
Cloud DNS is a high-performance, resilient, global Domain Name System (DNS)
service that lets you store IP addresses and other data and then look them up by
name. With Cloud DNS, you can publish your zones and records in DNS without
the burden of managing your own DNS servers and software. Cloud DNS uses
anycast to serve your managed zones from
multiple locations around the world.
To achieve high availability, deploy multiple individual regional external Application Load Balancers
in regions that best support your application's traffic and use a Cloud DNS
geolocation routing policy to route traffic to two or more load balancers in
different regions. Requests are automatically routed to the nearest location,
reducing latency and improving authoritative name lookup performance for your
users.
For more information, see
High availability for regional external Application Load Balancer .
Use startup and shutdown scripts
Compute Engine offers startup and shutdown scripts that run when an
instance boots up or shuts down, respectively. Startup and shutdown scripts can
automate tasks like installing software, running updates, making backups, and
logging data.
Both startup and shutdown scripts are an efficient and invaluable way to
bootstrap or cleanly shut down your instances. Instead of configuring your
instances using custom images, it can be beneficial to configure instances
using startup scripts.
Startup scripts run whenever the instance reboots or restarts due to failures,
and can be used to install software and updates. You can also use startup
scripts to ensure that services are running within the instance. Coding the
changes to configure an instance in a startup script is often easier than
creating and managing an unsupported custom image.
Shutdown scripts run when your instance shuts down, either intentionally or not.
They can perform last minute tasks like backing up data, saving logs, and
gracefully closing connections before you stop an instance.
For more information, see Running startup scripts
and Running shutdown scripts .
Backup your data
Backup your data regularly and in multiple locations. You can
upload your files to Cloud Storage ,
create disk snapshots , or
replicate your data to a disk in another zone using
synchronous replication or
to another region using asynchronous replication .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
