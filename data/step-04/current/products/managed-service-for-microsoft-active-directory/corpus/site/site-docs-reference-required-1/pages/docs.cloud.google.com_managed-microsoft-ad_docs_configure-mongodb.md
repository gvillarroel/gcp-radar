---
title: "Connect MongoDB \_|\_ Managed Service for Microsoft Active Directory \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/managed-microsoft-ad/docs/configure-mongodb
knowledge_key: corpus
source_id: site-docs-reference-required-1
source_type: site
entrypoint: https://docs.cloud.google.com/managed-microsoft-ad/docs/hardening
source_metadata:
  url: https://docs.cloud.google.com/managed-microsoft-ad/docs/configure-mongodb
  title: "Connect MongoDB \_|\_ Managed Service for Microsoft Active Directory \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Managed Microsoft AD
Guides
Send feedback
Connect MongoDB
Stay organized with collections
Save and categorize content based on your preferences.
This topic shows you how to configure MongoDB for integration with
Managed Service for Microsoft Active Directory. The following procedure is verified for MongoDB Enterprise,
versions 4.0 and 4.2.
Before you begin
Before configuring MongoDB,
create a Managed Microsoft AD domain .
Deploying MongoDB
First, deploy MongoDB to Google Cloud. For compatibility with Active Directory,
be sure to install a version of MongoDB that supports LDAP authentication, such
as MongoDB Enterprise Edition. You can install MongoDB on a Compute Engine
instance or you can deploy MongoDB on Google Kubernetes Engine.
On a Compute Engine instance
To install MongoDB as a standalone package on a Compute Engine instance,
complete the steps in the MongoDB Enterprise installation .
On a Google Kubernetes Engine container
To deploy MongoDB on Google Kubernetes Engine container, complete the following steps:
Complete the Running a MongoDB Database in Kubernetes with StatefulSets Codelab .
Go to the ./mongo-k8s-sidecar/example/StatefulSet/ directory.
Open mongo-statefulset.yaml
Replace image: mongo with image: path to gcr
Configuring Authentication
Next, configure authentication. Managed Microsoft AD can be used as an LDAP
backend for authentication. You can choose LDAP or Kerberos.
To configure authentication, use the configuration values to complete
one of the following setup procedures:
To set up authentication using LDAP,
complete the MongoDB LDAP tutorial .
To set up authentication using Kerberos,
complete the MongoDB Kerberos tutorial .
Authentication configuration values
Use the following values to configure authentication:
security.ldap.server : Use the FQDN you provided for the domain during setup.
security.ldap.userToDNMapping : Use the domain name of domain provided in
ldapQuery .
Example: ldapQuery: "DC=cloudad,DC=gke,DC=com??sub?(userPrincipalName={0})"
security.ldap.server.authz : Use domain name of domain provided in
queryTemplate .
Example: queryTemplate: "DC=cloudad,DC=gke,DC=com??sub?(&(objectClass=group)(member:1.2.840.113556.1.4.1941:={USER}))"
security.ldap.transportSecurity : Set to none to disable TLS/SSL.
In Managed Microsoft AD, users are created under Cloud OU . You should use
the distinguished name for the resources and groups created under Cloud OU .
For example, for user dba , you would use the distinguished name,
"CN=dba,OU=Cloud,DC=cloudad,DC=gke,DC=com" .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
