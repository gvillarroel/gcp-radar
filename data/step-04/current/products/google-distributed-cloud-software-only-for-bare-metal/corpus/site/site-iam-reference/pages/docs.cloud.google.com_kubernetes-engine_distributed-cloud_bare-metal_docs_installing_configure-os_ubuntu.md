---
title: "Configure Ubuntu \_|\_ Google Distributed Cloud (software only) for bare metal\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/configure-os/ubuntu
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/configure-sa
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/configure-os/ubuntu
  title: "Configure Ubuntu \_|\_ Google Distributed Cloud (software only) for bare\
    \ metal \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Google Distributed Cloud
GDC for bare metal
Guides
Send feedback
Configure Ubuntu
Stay organized with collections
Save and categorize content based on your preferences.
You must configure the base operating system of your node machines to use
Google Distributed Cloud. This page contains the steps you need to take to complete the
needed configuration.
For more information about troubleshooting Google Distributed Cloud requirements,
see the known issues .
Before you begin
Ensure that you are using a supported version of your operating system and a
Ubuntu Hardware Enablement (HWE) kernel. For a list of supported versions, see
Select your operating system .
Enable BPF Just In Time compiler
The kernel for your operating system must have the BPF Just In Time compiler
option enabled ( CONFIG_BPF_JIT=y ).
To find out whether this option is enabled, run the following command:
grep CONFIG_BPF_JIT /boot/config- $( uname -r )
Validate the package manager
Use the following command to validate that the package manager is operating
correctly:
sudo apt-get check
The output should show no errors and look similar to the following example:
# Reading package lists... Done
# Building dependency tree
# Reading state information... Done
Disable Uncomplicated Firewall (UFW)
Disable ufw :
sudo ufw disable
Check that ufw is disabled:
sudo ufw status
# Status: inactive
Configure Docker on your workstation
Google Distributed Cloud helps you install Docker on your bare metal machines in the
following scenarios:
If your bare metal machines don't have Docker installed, bmctl installs
20.10.0 or later.
If your bare metal machines have Docker 19.03.5 or earlier installed, bmctl
upgrades Docker to version 20.10.0 or later.
Note: The workstation running bmctl needs non-root user access to Docker to start the temporary bootstrap (kind) cluster during installation. To enable non-root user access to Docker, go to
Manage Docker as a non-root user .
Follow these steps to manually install Docker:
Remove any previous Docker version:
sudo apt-get remove docker docker-engine docker.io containerd runc
Update your package manager:
sudo apt-get update
Install Docker 20.10.0+:
sudo apt-get install \
apt-transport-https \
ca-certificates \
curl \
gnupg-agent \
software-properties-common \
docker.io
Verify you are now running version 20.10.0+:
sudo docker version
Compare your output with the following example to ensure the Client and Server versions are 20.10.0+ :
Client: Docker Engine - Community
Version: 25.0.3
...
Server: Docker Engine - Community
Engine:
Version: 25.0.3
Set up time synchronization
Time synchronization consists of setting the clocks on your node machines, using
a designated external time reference. Time synchronization is important for
time-sentive cluster activities, such as event logging and metrics collection.
The kernel of your node machine controls the clock in containers that run on the
node. To ensure proper time synchronization, install a network time protocol
(NTP) service on your machines, using any of the available services:
chrony , systemd-timesyncd ,
ntp , or ntpdate . Run timedatectl to verify the system clock is
synchronized. The output of timedatectl should contain the following status:
System clock synchronized: yes
Ensure Linux kernel inotify limits are at or higher than minimum
For machines running Ubuntu 22.04, Linux kernel inotify limits
for maximum user instances and user watches must be greater than or equal to the
following:
fs.inotify.max_user_instances : 8192
fs.inotify.max_user_watches : 524288
To ensure these values are set correctly on your node machines:
Check the value of max_user_instances :
cat /proc/sys/fs/inotify/max_user_instances
If needed, update max_user_instances to the minimum value:
echo 'fs.inotify.max_user_instances=8192' | sudo tee --append /etc/sysctl.conf
Check the value of max_user_watches :
cat /proc/sys/fs/inotify/max_user_watches
If needed, update max_user_watches to the minimum value:
echo 'fs.inotify.max_user_watches=524288' | sudo tee --append /etc/sysctl.conf
If you updated either value, reboot the machine.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
