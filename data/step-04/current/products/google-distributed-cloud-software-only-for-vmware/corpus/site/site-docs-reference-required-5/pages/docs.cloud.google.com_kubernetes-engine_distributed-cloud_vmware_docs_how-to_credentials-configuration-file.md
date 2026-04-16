---
title: "Credentials configuration file \_|\_ Google Distributed Cloud (software only)\
  \ for VMware \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/credentials-configuration-file
knowledge_key: corpus
source_id: site-docs-reference-required-5
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-workstation
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/credentials-configuration-file
  title: "Credentials configuration file \_|\_ Google Distributed Cloud (software\
    \ only) for VMware \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Google Distributed Cloud
Documentation
GDC for VMware
Guides
Send feedback
Credentials configuration file
Stay organized with collections
Save and categorize content based on your preferences.
This page describes the fields in a credentials configuration file for Google Distributed Cloud.
You use a credentials configuration file to hold usernames and passwords. Here
are some examples of how you would use a credentials configuration file:
In your
admin cluster configuration file ,
specify a file that holds credentials for your vCenter server.
In your admin cluster configuration file, specify a file that holds
credentials for your private Docker registry.
Template
Click to see a template for a credentials configuration file.
apiVersion : v1
kind : "CredentialFile"
items :
- name : ""
username : ""
password : ""
- name : ""
username : ""
password : ""
- ...
Keeping credentials in a file that is separate from your cluster
configuration file helps to limit the number of people who have access to
the credentials.
Filling in the fields in a credentials configuration file
In your credentials configuration file, enter fields values as described in
this section.
items
Array of objects, each of which holds a username and password.
items[0].name
String. A name of your choice for the object. For example:
items:
- name: "vcenter-creds"
items[0].username
String. A username. For example:
items:
- name: "vcenter-creds"
username: "my-vcenter-account"
When you are using Active Directory (AD), you must specify the username
with the domain name in the username field, for example:
username: "userName@domainName" or username: "domainName\\username" .
If you don't specify the domain name, the vSphere Container Storage Plug-in
won't function properly.
items[0].password
String. A password. For example:
items:
- name: "vcenter-creds"
passwords: "U$icUKEW#INE"
Example of a credentials configuration file
Here's an example of a credentials configuration file that holds three sets of
credentials.
apiVersion: v1
kind: "CredentialFile"
items:
- name: "vcenter-creds"
username: "my-vcenter-account"
password: "U$icUKEW#INE"
- name: "f5-creds"
username: "my-f5-account"
password: "exvQVx^@L%F1"
- name: "private-registry-creds"
username: "my-registry-account"
password: "kIJGS&uRm2Vh"
Notice that each block of credentials has a name. In your admin cluster
configuration file, you specify the name of a credentials block in a
fileRef.entry field.
Here's an example that shows portions of an admin cluster configuration file.
You can see that the file specifies three blocks of credentials, all of which
are in the same credentials file:
vCenter:
credentials:
fileRef:
path: "my-folder/my-creds.yaml"
entry: "vcenter-creds"
...
loadBalancer:
f5BigIP:
credentials:
fileRef:
path: "my-folder/my-creds.yaml"
entry: "f5-creds"
...
privateRegistry:
credentials:
fileRef:
path: "my-folder/my-creds.yaml"
entry: "private-registry-creds"
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
