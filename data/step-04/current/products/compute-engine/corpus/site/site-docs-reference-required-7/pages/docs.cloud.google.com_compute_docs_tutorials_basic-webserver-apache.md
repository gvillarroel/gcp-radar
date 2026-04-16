---
title: "Running a basic Apache web server \_|\_ Compute Engine \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/compute/docs/tutorials/basic-webserver-apache
knowledge_key: corpus
source_id: site-docs-reference-required-7
source_type: site
entrypoint: https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances
source_metadata:
  url: https://docs.cloud.google.com/compute/docs/tutorials/basic-webserver-apache
  title: "Running a basic Apache web server \_|\_ Compute Engine \_|\_ Google Cloud\
    \ Documentation"
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
Running a basic Apache web server
Stay organized with collections
Save and categorize content based on your preferences.
This tutorial shows you how to use Compute Engine to deploy an Apache web
server on a virtual machine (VM) instance. To learn more about the technologies
that you can use for web serving on
Google Cloud, see Choosing a hosting option on
Google Cloud .
A VM on Compute Engine can be controlled like
any standard Linux server. Deploy an Apache web server to learn the
basics of running a server on a VM instance.
Before you begin
Create a Linux VM that allows HTTP traffic by doing the following:
Create a new Linux VM. For more information, see Quickstart using a Linux
VM .
Optional: While creating a Linux VM, you can select the Allow HTTP
traffic checkbox to open port tcp:80 for traffic and Allow HTTPS
traffic checkbox to open port tcp:443 . However, if you
want to open a different port, configure the firewall
after creating the VM, and then configure Apache
to use the firewall.
Connect to the Linux VM. For more information, see Connect to the
VM instance .
Install Apache
In the Google Cloud console, go to the VM Instances page.
Go to VM instances
To connect to the Linux VM you just created, click SSH in the row of the
VM.
To update the available packages and
install the apache2 package, use the system package manager for that operating system.
If you followed the Quickstart, this creates an Ubuntu VM. To update an
Ubuntu VM, run the following command:
sudo apt update && sudo apt -y install apache2
After installing Apache, the operating system automatically starts the
Apache server.
Verify that Apache is running:
sudo systemctl status apache2
Overwrite the Apache web server default web page:
echo '<!doctype html><html><body><h1>Hello World!</h1></body></html>' | sudo tee / var / www / html / index . html
Test your server
Test that your VM is serving traffic on its external IP.
In the Google Cloud console, go to the VM Instances page.
Go to VM instances
Copy the external IP for your VM under the External IP column.
In a browser, navigate to http://[EXTERNAL_IP] . Don't connect using
https because this causes the server to return a Connection Refused
error.
You should now see the "Hello World!" page.
Clean up
To avoid incurring charges for the VM after you're done experimenting, delete
the VM. For more information, see Clean up .
Troubleshooting
Receiving a Connection Refused error
If you are seeing a Connection Refused error, it is possible that:
Your VM instance is not publicly accessible because your firewall rules or
tags are misconfigured in one of the following ways:
The VM instance does not have the proper tag that allows Compute Engine
to apply the appropriate firewall rules to your instance.
Your project does not have a firewall rule that allows traffic to the
external IP address for your instance.
You are trying to access the VM using an https address. Check that your
URL is http://[EXTERNAL_IP] rather than https://[EXTERNAL_IP] .
To ensure that your VM instance has the correct tags:
In the Google Cloud console, go to the VM instances page.
Go to VM instances
Click the name of the instance that you are trying to connect to.
Click Edit at the top of the page.
Scroll down to Firewalls , and make sure the Allow HTTP traffic box
is checked. If it is not checked, check it.
Save your changes. This ensures that the correct tags are added to the
VM instance.
To ensure that the correct firewall rule exists:
In the Google Cloud console, go to the Firewall rules page.
Go to Firewall rules
Look for a firewall rule that allows all IP ranges through tcp:80. Usually,
this rule is named the default-allow-http rule.
If a rule does not exist, create one.
Click Create firewall rule .
Enter a name for the rule, such as default-allow-http .
Under Source IP ranges , enter 0.0.0.0/0 to allow traffic from
all sources.
Under Protocols and ports , check Specified protocols and ports
and enter tcp:80 .
Create your firewall rule.
Test your server again by going to the external IP address of the instance:
http:// [ EXTERNAL_IP ]
What's next
Learn how to host a website on Compute Engine .
Learn how to set up LAMP on Compute Engine .
Try it for yourself
If you're new to Google Cloud, create an account to evaluate how
Compute Engine performs in real-world
scenarios. New customers also get $300 in free credits to run, test, and
deploy workloads.
Try Compute Engine free
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
