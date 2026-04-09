---
title: "Set up the Devices API \_|\_ Cloud Identity \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/identity/docs/how-to/setup-devices
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/identity/docs
source_metadata:
  url: https://docs.cloud.google.com/identity/docs/how-to/setup-devices
  title: "Set up the Devices API \_|\_ Cloud Identity \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Set up the Devices API | Cloud Identity | Google Cloud Documentation
Skip to main content
Technology areas
close
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Cross-product tools
close
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
More
/
Console
English
Deutsch
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
中文 – 简体
中文 – 繁體
日本語
한국어
Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
Cloud Identity
Start free
Overview
Guides
Reference
Resources
More
Technology areas
More
Overview
Guides
Reference
Resources
Cross-product tools
More
Console
Cloud Identity
Product overview
How-to Guides
All How-to Guides
Getting started with Cloud Identity
Setting up Cloud Identity
Turning off automatic Google Workspace licensing
Signing up for Cloud Identity Premium
Understanding your Cloud Identity Premium trial
Upgrading and downgrading
Canceling Cloud Identity
Verifying your domain
Verifying your domain
Finding your domain host
Setting up email with your domain
Managing users and licenses
Understanding licensing
Adding users
Adding licenses
Changing a user's license
Managing billing and payments
Billing and payments overview
Setting up paid Cloud Identity service
Comparing Cloud Identity billing plans
Understanding your bill and charges
Updating your bank account details
Maintaining security
Managing file sharing and syncing for Cloud Identity
Monitoring usage and security with reports
Using the Devices API
Setting up the Devices API
Creating devices
Listing and retrieving device users
Updating the client state
Approving a device
Using the Groups API
Setting up the Groups API
Creating and managing Google Groups
Creating and searching for Google Groups
Managing Google Group memberships
Creating and managing security groups
Creating security groups
Searching for security groups
Creating and managing POSIX groups
Creating and updating POSIX groups
Retrieving and listing POSIX groups
Creating and managing dynamic groups
Formulating and testing a membership query
Creating and updating a dynamic group
Retrieving a dynamic group and listing members
Valid user fields for dynamic group queries
Creating and managing identity-mapped groups
Creating and searching for identity-mapped groups
Managing identity-mapped group memberships
Querying group memberships
Managing membership expirations
Using the User Invitation API
Setting up the User Invitation API
Creating and managing user invitations
Using the Policy API
Setting up the Policy API
Listing and getting policies
Contacting support
Concepts
All Concepts
Cloud Identity overview
Devices API overview
Devices overview
Groups API overview
Dynamic groups overview
User Invitation API overview
Policy API overview
Policy API supported settings
Policy API concepts
Editions
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
On this page
Enable the API and setting up credentials
Set up API access using a service account with domain-wide delegation Create a service account and configure it for domain-wide delegation
Review log entries
Initialize credentials
Installing the Python client library
Home
Documentation
Access and resource management
Cloud Identity
Guides
Was this helpful?
Send feedback
On this page
Enable the API and setting up credentials
Set up API access using a service account with domain-wide delegation Create a service account and configure it for domain-wide delegation
Review log entries
Initialize credentials
Installing the Python client library
Set up the Devices API
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how to set up the Cloud Identity Devices API. You can use the
Devices API to programmatically provision resources—for example
managing Google Groups—on behalf of an administrator.
Enable the API and setting up credentials
Start by creating a Google Cloud account. With this account, you get $300 in free credits,
plus free usage of over 20 products, up to monthly limits.
Create an account
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Cloud Identity API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Cloud Identity API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Set up API access using a service account with domain-wide delegation
This section describes how to create and use a service account
to access Google Workspace resources. Authenticating directly to the
Devices API using a service account isn't supported, so you
must use this method.
Create a service account and configure it for domain-wide delegation
To create a service account a download the service account key, do the
following:
To create a service account, do the following:
In the Google Cloud console go to the IAM service accounts
page:
Go to service accounts
Click add Create service account .
Under Service account details , type a name, ID, and description for the
service account, then click Create and continue .
Optional: Under Grant this service account access to project , select
the IAM roles to grant to the service account.
Click Continue .
Optional: Under Grant users access to this service account , add the
users or groups that are allowed to use and manage the service account.
Click Done .
To let the service account access Devices API by using
domain-wide delegation, follow the instructions in Set up domain-wide delegation for the service account .
To create and download a service account key, do the following.
Important:
Service account keys are a security risk if not managed correctly. You should
choose a more secure alternative to service account keys
whenever possible. If you must authenticate with a service account key, you are responsible for the
security of the private key and for other operations described by
Best practices for managing service account keys .
If you are prevented from creating a service account key, service account key creation might
be disabled for your organization. For more information, see
Managing secure-by-default organization resources .
If you acquired the service account key from an external source, you must validate it before use.
For more information, see
Security requirements for externally sourced credentials .
Click the email address for the service account you created.
Click the Keys tab.
In the Add key drop-down list, select Create new key .
Click Create .
A JSON-formatted credential file, containing a new public and private key pair,
is generated and downloaded to your machine. The file contains the only copy of
the keys. You are responsible for storing it securely. If you lose the key pair,
you must generate a new one.
Review log entries
When reviewing log entries, note that audit logs will show any service account
actions as having been initiated by the user. This is because domain-wide
delegation works by allowing the service account to impersonate an administrator
user.
Initialize credentials
When you initialize the credential in your code, specify the email address on
which the service account acts by calling with_subject() on the credential.
For example:
Python
More
credentials = service_account . Credentials . from_service_account_file (
' SERVICE_ACCOUNT_CREDENTIAL_FILE ' ,
scopes = SCOPES ) . with_subject ( USER
)
Replace the following:
SERVICE_ACCOUNT_CREDENTIAL_FILE : the service account
key file that you created earlier in this document
USER : the user that the service account impersonates
Instantiating a client
The following example shows how to instantiate a client using service account
credentials.
Python
More
from google.oauth2 import service_account
import googleapiclient.discovery
SCOPES = [ 'https://www.googleapis.com/auth/cloud-identity.devices' ]
def create_service ():
credentials = service_account . Credentials . from_service_account_file (
' SERVICE_ACCOUNT_CREDENTIAL_FILE ' ,
scopes = SCOPES
)
delegated_credentials = credentials . with_subject ( ' USER ' )
service_name = 'cloudidentity'
api_version = 'v1'
service = googleapiclient . discovery . build (
service_name ,
api_version ,
credentials = delegated_credentials )
return service
Replace the following:
SERVICE_ACCOUNT_CREDENTIAL_FILE : the service account
key file that you created earlier in this document
USER : the user that the service account impersonates
You can now begin making calls to the Devices API.
To instead authenticate as an end-user, replace the credential object from the
service account with the credential you can obtain in Obtaining OAuth 2.0 tokens .
Installing the Python client library
To install the Python client library, run the following command:
pip install --upgrade google-api-python-client google-auth \
google-auth-oauthlib google-auth-httplib2
For more on setting up your Python development environment, refer to the
Python Development Environment Setup Guide .
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
Products and pricing
See all products
Google Cloud pricing
Google Cloud Marketplace
Contact sales
Support
Community forums
Support
Release Notes
System status
Resources
GitHub
Getting Started with Google Cloud
Code samples
Cloud Architecture Center
Training and Certification
Engage
Blog
Events
X (Twitter)
Google Cloud on YouTube
Google Cloud Tech on YouTube
About Google
Privacy
Site terms
Google Cloud terms
Manage cookies
Our third decade of climate action: join us
Sign up for the Google Cloud newsletter
Subscribe
English
Deutsch
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
中文 – 简体
中文 – 繁體
日本語
한국어
close
Welcome to Cloud Shell
Cloud Shell is a development environment that you can use in the browser:
Activate Cloud Shell to explore Google Cloud with a terminal and an editor
Start a free trial to get $300 in free credits
Activate Cloud Shell
Start a free trial
