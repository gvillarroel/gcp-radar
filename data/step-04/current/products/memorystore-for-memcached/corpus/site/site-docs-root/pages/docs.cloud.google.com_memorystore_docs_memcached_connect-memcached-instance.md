---
title: "Connect to a Memcached instance \_|\_ Memorystore for Memcached \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/memorystore/docs/memcached/connect-memcached-instance
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/memcached
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/memcached/connect-memcached-instance
  title: "Connect to a Memcached instance \_|\_ Memorystore for Memcached \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Memorystore for Memcached is being deprecated and will be shut down on January 31, 2029. After February 1, 2027, you can't create Memorystore for Memcached instances in new projects unless these instances already exist in these projects. We recommend that you migrate your workloads to Memorystore for Valkey , which offers superior performance and features.
Learn more about the deprecation | Read the migration guide
Home
Documentation
Databases
Memorystore
Memorystore for Memcached
Guides
Send feedback
Connect to a Memcached instance
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how to connect to a Memorystore for Memcached instance.
You can connect to Memcached instances from Compute Engine VM instances,
Google Kubernetes Engine clusters, Cloud Run functions, the App Engine
flexible environment, and the App Engine standard environment.
Before you can access Memorystore with Cloud Run functions, you
need follow the setup instructions at Connecting to internal resources in a VPC network .
Also, before you can access Memorystore with the App Engine
standard environment, you need to follow the setup instructions at Connecting
to internal resources in a VPC network .
Note: You can use any open source Memcached client library to connect to Memorystore for Memcached.
Connecting to a Memcached instance from a Compute Engine VM
In order to connect to a Memcached instance, a Compute Engine VM instance must
be located within the same project and region, and must also be connected to the
same network or VPC network as the Memcached instance.
Connect to a Linux VM. For steps to connect to a Linux VM, see Quickstart Using a Linux VM .
If you used a Debian based image to create your VM instance as described in the
quickstart, install telnet using apt-get :
sudo apt-get install telnet
From the terminal, telnet to the IP address of one of the Memcached nodes,
replacing variables with appropriate values.
telnet node-ip-address 11211
If it works correctly, you should see the following output with the
[bracketed-variables] replaced by your project's variables:
Trying [node-ip-address]
Connected to [node-ip-address]
In the telnet session, enter some Memcached commands:
Enter:
get greeting
Result:
END
Enter:
set greeting 1 0 11
hello world
Result:
STORED
Enter:
get greeting
Result:
VALUE greeting 1 11
hello world
END
Memorystore for Memcached supports standard open source Memcached libraries.
Connecting to a Memcached instance from a Google Kubernetes Engine cluster
Note: You cannot connect to a Memorystore for Memcached instance from a
Google Kubernetes Engine cluster without VPC-native/IP aliasing enabled. To verify if your
instance has VPC-native/IP aliasing enabled, check your cluster's details page
in the Google Cloud console. Alternatively, run gcloud container clusters describe
and verify if useIpAliases: true is present. It is easiest to enable
VPC-native/IP aliasing during cluster creation. When creating your cluster,
select VPC Native under advanced options. For more details, see Creating VPC-native clusters using Alias IPs .
You can connect to your Memcached instances using GKE
clusters that are in the same region and connected to the same network as your
instance.
Go to the Google Kubernetes Engine page in the Google Cloud console.
Google Kubernetes Engine
Click on the GKE cluster you'd like to connect from. If
you don't already have a cluster, create one in the same zone and region as
your Memcached instance with IP aliases enabled. For instructions on how to
create a cluster with IP aliases enabled, see the Creating a VPC-native cluster .
Click the Connect button to the right of your cluster's name, then click
the Run in Cloud Shell button in the window that appears.
Configure kubectl command line access by running the following command:
gcloud container clusters get-credentials cluster-name --zone= cluster-zone --project= project-id
cluster-name is the name of your cluster.
cluster-zone is the zone your cluster is in. This must also be
the zone your Memcached instance is in.
project-id is the project in which your cluster and your
Memcached instance are located.
If the command is successful, you should receive the following message:
kubeconfig generated for cluster-name
If you do not receive this message, make sure you entered the correct cluster
information into the command.
If your cluster is version 1.8 or higher and has IP aliases enabled, skip
this step. If your cluster is version 1.7 or lower, or your version 1.8 or
higher cluster doesn't have IP aliases enabled, follow these workaround steps
before trying to connect to your instance:
Workaround
Run these three commands, replacing reserved-ip-range with the
reserved IP range of your instance:
git clone https://github.com/bowei/k8s-custom-iptables.git
cd k8s-custom-iptables/
TARGETS=" reserved-ip-range " ./install.sh
Note: If you don't know the reserved IP range of your instance, you can find
out by running the following command:
gcloud memcache instances describe instance-id --region= region
For more information about IP aliases, including how to create a cluster with this setting enabled, see Creating a VPC-native cluster .
Use the following command to connect to a bash shell:
kubectl run -i --tty busybox --image=busybox -- sh
Telnet to your Memcached instance using one of your node's IP addresses and
your instance's port number:
telnet node-ip-address 11211
In the telnet session, enter some Memcached commands:
Enter:
get greeting
Result:
END
Enter:
set greeting 1 0 11
hello world
Result:
STORED
Enter:
get greeting
Result:
VALUE greeting 1 11
hello world
END
Memorystore for Memcached supports standard open source Memcached libraries.
What's next
Use the Auto Discovery service .
Monitor your Memcached instances .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
