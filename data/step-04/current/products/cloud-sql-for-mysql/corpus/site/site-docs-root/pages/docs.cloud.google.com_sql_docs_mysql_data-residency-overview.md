---
title: "Data residency overview \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/sql/docs/mysql
source_metadata:
  url: https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview
  title: "Data residency overview \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Cloud SQL
MySQL
Guides
Send feedback
Data residency overview
Stay organized with collections
Save and categorize content based on your preferences.
MySQL
| PostgreSQL
| SQL Server
Overview
This page explains how to use Cloud SQL to enforce data residency requirements.
Data residency refers to the physical location of data and the local
regulations that govern how you store, encrypt, and access that data. As countries'
data protections and privacy regulations evolve, it's increasingly important that
you understand how to follow local data residency requirements and protect your
users' data.
In a traditional on-premises environment, various components integrate and handle
data residency. For example, a company can host a tokenization gateway as a Cloud
Access Security Broker (CASB) to secure application data before it's transmitted
overseas.
Google Cloud and its services, including Cloud SQL, integrate to help
you handle data residency by controlling the location of your data and access to
that data—by Google or by anyone.
Data residency in cloud computing
The following lists some data residency issues about which you should know:
If a company's cloud administrators don't know the physical location of the
data, then they don't know the local regulations. To be able to research the
data residency policies for each location, administrators need to know where
the data centers are.
The company's cloud administrators and providers can use service-level
agreements (SLAs) to establish allowed locations. However, what if you have
to store your data in a region that differs from the terms of the SLA?
Users must ensure that their data, and all of the services and resources
that they use in their cloud projects, follow the data residency regulations
of the host country.
What do you do if you want to decide where to store your data and
encryption keys?
What happens if you want to determine the locations where users can
access your data?
Google Cloud services, including Cloud SQL, address some of these
issues by letting you do the following:
Set the storage location of your data. You can select the region when you
create your Cloud SQL instance, or you can edit the region by editing
an existing instance.
Use the cross-region read replica feature for Cloud SQL to help you meet
data residency standards for a designated region.
Control the network locations where users can access data, as well as
control cloud administrators' access to this data.
There are three areas where Cloud SQL can help you meet the challenges of
data residency:
Storing data : Configuring where your data is
stored.
Encrypting data : Controlling where your
encryption keys are stored.
Accessing data : Controlling access to your
data.
Store data
Data residency involves storing personally identifiable information (PII) within
a particular region, where that data is processed in accordance with the
regulations of that region.
To store data, you must meet a country's legal and regulatory demands, such as
data locality laws. For example, a country might mandate that any government-related
data be stored in that country. Or, a company might be contractually obligated to
store data for some of their customers in a different country. Therefore, a
company has to meet the data residency requirements of the country where the data
is stored.
With Google Cloud, you can configure where your data is stored, including
on backups. This includes letting you choose the regions where
you store your data. When you choose to configure resources in these regions for
Cloud SQL, Google stores your data at rest only in these regions, according to
our Service Specific Terms .
You can select the region when you create your instance , or you can edit the region by editing an existing instance .
For more information about backup locations, see Custom backup locations .
You can use organizational policy constraints to enforce data residency
requirements at the organization, project, or folder level. These constraints
let you define the Google Cloud locations where users can create
resources for supported services. For data residency, you can limit the physical
location of a new resource with the resource locations constraint . You can also
fine-tune policies for a constraint to specify multi-regions such as asia
and europe , or regions such as us-east1 or europe-west1 ,
as allowed or denied locations.
If there's an outage in a Google Cloud region, then you can avoid impact
by using the cross-region read replica feature for Cloud SQL. As part of creating
a read replica , you must choose the region for the replica. Make sure that
you choose a region that complies with data residency regulations. As a result,
the data residency standards are met in the selected region.
When you create the replica, you create a copy of your primary database instance
that reflects changes to the primary in near real time. If there's a failure,
then you can promote the read replica to a primary instance .
VPC Service Controls
help you enforce data residency by letting you restrict the use of Cloud SQL APIs
to import and export data using either the Cloud SQL Admin API or the Cloud Storage
API. This restriction helps ensure that data stays within the network locations
you've selected. Using VPC Service Controls, you create a service perimeter that defines the virtual
boundaries from which a service can be accessed, preventing data from being moved
outside those boundaries. You can enforce this constraint even if the user is
authorized according to your Google Cloud IAM policy .
Encrypt data
Google Cloud services, including Cloud SQL, encrypt customer content
at rest and in transit using various encryption methods. Encryption is automatic,
and no customer action is required.
Cloud SQL also lets you add another layer of encryption to data using customer-managed encryption keys (CMEK) .
CMEK are intended for organizations that have sensitive or regulated data that
requires them to manage their own encryption keys. The CMEK feature lets you use your own
cryptographic keys for data at rest in Cloud SQL. After you add CMEK,
whenever an API call is made, Cloud SQL uses your keys to access data.
If you want to store your CMEK in the regions where you deploy your services, then
you can use Cloud Key Management Service (Cloud KMS) .
You set the location of the key when you create the key. Or, to store those keys
inside a physical hardware security module (HSM) that's located in the region
that you choose, use Cloud HSM .
Another way to choose where you want to store your CMEK is to use a third-party
product. To store and manage keys in a third-party key management product that's
deployed outside of Google's infrastructure, you can use Cloud External Key Manager (Cloud EKM) .
Access data
With Cloud SQL, you can control which users can access your data.
To control Google's access of support and engineering personnel, use Access Approval . Access Approval lets you require Google
employees to get your explicit approval before they access your data or
configurations on Google Cloud (for exclusions, see Access Approval
exclusions ).
Access Approval complements the visibility provided by Access Transparency , which generates near-real-time audit logs when Google administrators interact with
your data. The audit logs include the office location of the administrator and
the reason for the access. You can also enforce specific attributes for
administrators who have access to your data or configurations—including their
geographic region and other compliance-relevant attributes.
Key Access Justifications integrate with
Cloud KMS and Cloud EKM. Each time one of your keys is requested
to encrypt or decrypt data, Key Access Justifications provides a detailed justification, along
with a mechanism for you to approve or deny key access using an automated policy
that you set.
Using Access Approval, Access Transparency, and Key Access Justifications with Cloud KMS and Cloud EKM,
you can deny Google the ability to decrypt your data. As a result, you're the
arbiter of access to your data.
What's next
For more information about Google Cloud data location commitments,
see the Google Cloud Service
Specific Terms .
To learn more about data residency in Google Cloud, see Understanding your options for data residency, operational
transparency, and privacy controls on Google Cloud .
To learn more about how Google Cloud protects customer data
throughout its lifecycle, and how Google Cloud provides customers
with transparency and control over their data, see Trusting your data with Google Cloud .
Learn best practices for data residency in the Google Cloud Well-Architected Framework.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
