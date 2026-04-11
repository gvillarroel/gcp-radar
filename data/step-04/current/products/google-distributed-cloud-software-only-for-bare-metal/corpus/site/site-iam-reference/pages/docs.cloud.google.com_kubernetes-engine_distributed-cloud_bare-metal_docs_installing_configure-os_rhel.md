---
title: "Configure RHEL \_|\_ Google Distributed Cloud (software only) for bare metal\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/configure-os/rhel
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/configure-sa
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/configure-os/rhel
  title: "Configure RHEL \_|\_ Google Distributed Cloud (software only) for bare metal\
    \ \_|\_ Google Cloud Documentation"
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
Configure RHEL
Stay organized with collections
Save and categorize content based on your preferences.
You must configure the base operating system of your node machines to use
Google Distributed Cloud. This page contains the steps you need to take to complete the
needed configuration. For more information about troubleshooting
Google Distributed Cloud, see the
troubleshooting guides .
Before you begin
Ensure you are using a supported version of your operating system. For a list of
supported versions, see
Select your operating system .
Enable BPF Just In Time compiler
The kernel for your operating system must have the BPF Just In Time compiler
option enabled ( CONFIG_BPF_JIT=y ).
To find out whether this option is enabled, run the following command:
grep CONFIG_BPF_JIT /boot/config- $( uname -r )
Validate the package manager
Ensure that you have your RedHat username and password, and that you have root
access to the machines you're configuring. Validate Package manager with the
following steps:
If you haven't registered your operating system, register with RedHat using
your RedHat username and password to download updates:
sudo subscription-manager register
sudo subscription-manager refresh
sudo subscription-manager attach --auto
Check for updates:
sudo dnf check-update
Ensure the output has no errors and includes the last metadata expiration
check. For example:
Updating Subscription Management repositories.
...
# Last metadata expiration check: ...
...
Configure or disable firewalld
Firewalld can be configured
for use with Google Distributed Cloud or disabled. For information on configuring
firewalld, see
Configure firewalld ports
on the Network requirements page.
The following instructions disable firewalld.
Disable firewalld:
sudo systemctl stop firewalld
sudo systemctl disable firewalld
Check the status of firewalld to ensure it is disabled:
sudo systemctl status firewalld | grep "Active"
# Output
# Active: inactive (dead)
Configure Docker on your workstation
Note: The workstation running bmctl needs non-root user access to Docker to start the temporary bootstrap (kind) cluster during installation. To enable non-root user access to Docker, go to
Manage Docker as a non-root user .
Follow these steps to manually install Docker:
Remove any previous Docker version:
sudo dnf remove docker \
docker-client \
docker-client-latest \
docker-common \
docker-latest \
docker-latest-logrotate \
docker-logrotate \
docker-engine
Remove podman-manpages:
sudo dnf remove podman-manpages
Install Docker 20.10.0+:
sudo dnf install -y yum-utils
sudo yum-config-manager \
--add-repo \
https://download.docker.com/linux/rhel/docker-ce.repo
sudo dnf install -y --allowerasing docker-ce docker-ce-cli containerd.io
sudo systemctl start docker
Verify that you are now running version 20.10.0+:
sudo docker version
Compare your output with the following example to ensure the Client and
Server versions are 20.10.0+:
Client: Docker Engine - Community
Version: 25.0.3
...
Server: Docker Engine - Community
Engine:
Version: 25.0.3
Verify Docker runs:
docker run hello-world
You should see something similar to this:
Hello from Docker!
This message shows that your installation appears to be working correctly.
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
For machines running RHEL 9 and 8.10, Linux kernel inotify limits
for maximum user instances and user watches must be greater than or equal to the
following:
fs.inotify.max_user_instances : 8192
fs.inotify.max_user_watches : 524288
Ensure these values are set correctly on your node machines:
Check the value of max_user_instances :
cat /proc/sys/fs/inotify/max_user_instances
If needed, update max_user_instances to the minimum value:
echo 'fs.inotify.max_user_instances=8192' | sudo tee --append /etc/sysctl.conf
Check the value of max_user_watches :
cat /proc/sys/fs/inotify/max_user_watches
If needed, update max_user_watches to the minimum value:
echo 'fs.inotify.max_user_watches=524288' | sudo tee --append /etc/sysctl.conf
If you updated either value, reboot the machine.
Best Practices
To simplify installation, we recommend that you configure RHEL using a minimal
installation with headless management. Also, be sure to enable your
network connection
and either use the default DHCP or provide a valid, static IP address and
network information. Ensure that the machine can connect to
the required external resources ,
such as cloud.google.com .
If Docker fails to run, check that the Docker daemon is running with the following command:
sudo systemctl start docker
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
