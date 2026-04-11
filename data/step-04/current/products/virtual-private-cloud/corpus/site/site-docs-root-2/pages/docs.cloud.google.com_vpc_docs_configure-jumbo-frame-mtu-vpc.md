---
title: "Create and verify a jumbo frame MTU network \_|\_ Virtual Private Cloud \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vpc/docs/configure-jumbo-frame-mtu-vpc
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/vpc/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/vpc/docs/configure-jumbo-frame-mtu-vpc
  title: "Create and verify a jumbo frame MTU network \_|\_ Virtual Private Cloud\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Virtual Private Cloud
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Create and verify a jumbo frame MTU network
This page walks you through creating a Virtual Private Cloud (VPC) network and
a pair of VMs for testing. It assumes you are generally familiar with network
MTU .
Create an auto mode VPC network
Console
In the Google Cloud console, go to the VPC networks page.
Go to VPC networks
Select a project in the project pull-down menu.
Click Create VPC network .
Enter a Name for the network.
Choose Automatic for the Subnet creation mode .
Clear the Set MTU automatically checkbox.
Set the Maximum transmission unit (MTU) .
For a VM to send and receive jumbo frames, the VM's virtual NIC needs
to be connected to a VPC network with a MTU value that is as large or
larger than the machine MTU. Set the MTU to the largest possible value
for the VM, for example 8896. If you're using GPU machines, see
Jumbo frames and GPU machines .
Click Create .
Create firewall rules
Console
In the Google Cloud console, go to the Firewall policies page.
Go to Firewall policies
Click Create firewall rule .
Enter a Name for the firewall rule.
This name must be unique for the project.
In the Network pull-down menu, specify the name of the network you
created.
In the Targets pull-down menu, select All instances in the
network .
From the Source filter pull-down menu, select IPv4 ranges .
In the field enter 10.128.0.0/16 .
In Protocols and ports , select Specified protocols and ports .
Check the tcp checkbox and enter 22 in the field.
Check the Other protocols checkbox and enter icmp in the field.
Click Create .
Create VMs
This section shows you how to create two VM instances for testing.
Console
Do these steps twice to get two VMs in the same zone.
In the Google Cloud console, go to the VM instances page.
Go to VM instances
Click Create instance .
Specify a Name for your first VM.
Click Networking, Disks, Security, Management, Sole-tenancy .
Click Networking .
In Network interfaces , click default default (10.128.0.0/20) .
In the Network pull-down menu, select the network you created.
Connect to VM instances using SSH
Console
In the Google Cloud console, go to the VM instances page.
Go to VM instances
In the Connect column of your first instance, click SSH .
In the Connect column of your second instance, click SSH .
Verify MTU
In the terminal for your first VM, run the following command:
/sbin/ifconfig | grep mtu
The reported MTU should be 8896 .
ens4: flags=4163 mtu 8896
lo: flags=73 mtu 65536
In the terminal for your second VM, install tcpdump :
sudo apt-get install tcpdump --yes
In the terminal of your second VM, start tcpdump . Replace
FIRST_VM_NAME with the name of your first VM.
sudo tcpdump host FIRST_VM_NAME -v
In the terminal of your first VM, ping your second VM. The ping command
must specify a packet size that is 28 bytes smaller than the network MTU.
Replace
SECOND_VM_NAME with the name of your second VM.
ping SECOND_VM_NAME -c 10 -M do -s 8868
Check your second VM. You should see something like the following:
tcpdump: listening on ens4, link-type EN10MB (Ethernet), snapshot length 262144 bytes
19:43:57.116005 IP (tos 0x0, ttl 64, id 0, offset 0, flags [DF], proto ICMP (1), length 8896)
FIRST_VM_NAME .c. PROJECT_ID .internal > SECOND_VM_NAME .c. PROJECT_ID .internal: ICMP echo request, id 5253, seq 1, length 8876
19:43:57.116053 IP (tos 0x0, ttl 64, id 23961, offset 0, flags [none], proto ICMP (1), length 8896)
SECOND_VM_NAME .c. PROJECT_ID .internal > FIRST_VM_NAME .c. PROJECT_ID .internal: ICMP echo reply, id 5253, seq 1, length 8876
The variables mean the following:
FIRST_VM_NAME is a name of your first VM.
SECOND_VM_NAME is a name of your second VM.
PROJECT_ID is the ID of the project containing the
VMs.
On your second VM, press Ctrl-c to stop tcpdump .
When you're done testing, delete your resources in the following order:
Firewall rule and VM instances
VPC network
What's next
Learn more about MTU .
Create a
VPC network with a specified
MTU .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
