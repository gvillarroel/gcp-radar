---
title: "Set up Application Integration \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/application-integration/docs/setup-application-integration
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/application-integration/docs
source_metadata:
  url: https://docs.cloud.google.com/application-integration/docs/setup-application-integration
  title: "Set up Application Integration \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Application Integration
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Set up Application Integration
This page describes the different approaches and steps required to successfully set up or provision Application Integration in your Google Cloud project.
Prepare and plan
Before you set up Application Integration, perform the following steps:
In the Google Cloud console, go to the project selector page.
Go to project selector
Select or create a Google Cloud project.
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
Verify that billing is enabled for your Google Cloud project .
Tip:
You can use the Policy Troubleshooter
if you encounter any access issues while assigning the IAM roles and permissions
in your Google Cloud project.
Required roles
To get the permissions that
you need to set up Application Integration,
ask your administrator to grant you the
following IAM roles on your project:
Google Cloud Project Editor ( roles/editor )
Cloud KMS Admin ( roles/cloudkms.admin )
Application Integration Admin ( roles/integrations.integrationAdmin )
Connector Admin ( roles/connectors.admin )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Ways to set up Application Integration
You can setup Application Integration in your Google Cloud project using the following ways:
Quick setup
The Quick setup is a single-click automated process that provisions Application Integration without you having to worry about any setup configurations. See Start quick setup .
Advanced setup
The Advanced setup is a manual process where you can choose the encryption method that you want to use for setting up Application Integration in your Google Cloud project. See Start advanced setup .
Start Quick setup
The Quick setup is a single-click operation that automatically provisions Application Integration with the default configurations needed to get you started with the product. The default configurations include enabling APIs ( Application Integration API , Secret manager API , and Connectors API ), creating a default service account , and using Google-owned and Google-managed encryption keys as the encryption method for the selected region.
To start the Quick setup , do the following:
Open the Google Cloud console and log in with your Google Cloud account.
Go to the Application Integration page.
Go to Application Integration
Select the Google Cloud project in which you want to set up Application Integration.
In the Overview page, select the region where you want to deploy Application Integration and click Quick setup .
A progress bar indicating the setup progress is displayed. On successful completion, you are redirected to the Integrations list page.
Start Advanced setup
Use the Advanced setup to manually select the encryption method that you'd want to use for provisioning Application Integration in your project.
To start the Advanced setup , do the following:
Open the Google Cloud console and log in with your Google Cloud account.
Go to the Application Integration page.
Go to Application Integration
Select the Google Cloud project in which you want to set up Application Integration.
The Overview page appears.
Click Advanced setup .
The Set up Application Integration page appears.
To successfully set up Application Integration, complete the following steps in the Set up Application Integration page:
Enable the required APIs .
Select region and encryption method .
Enable APIs
The Enable APIs section displays the set of APIs that
will be enabled for Application Integration as part of the setup process. You can go to
the next step only when all the APIs are enabled.
You can seamlessly enable all the required APIs with a single click:
Click Enable APIs and allow a few minutes for the required APIs to
be enabled automatically.
The following APIs are enabled as part of this step:
API Name
Location
Description
Application Integration API
integrations.googleapis.com
Enables users to create and manage integrations to Google Cloud services and other business applications using the Application Integration interface.
Secret manager API
secretmanager.googleapis.com
Stores sensitive data such as API keys, passwords, and certificates. Provides convenience while improving security.
Connectors API
connectors.googleapis.com
Enables users to create and manage connections to Google Cloud services and other business applications using the Integration Connectors interface.
Cloud KMS API
cloudkms.googleapis.com
Enables the use of Customer-managed encryption keys (CMEK) for data encryption. This allows integration data to be encrypted with your own keys instead of
Google-owned and Google-managed encryption keys.
For more information about CMEK, see Customer-managed encryption keys .
Click Next once the Set up Application Integration page indicates that all the APIs are enabled successfully, as shown in the following figure.
Tip: You can see all the APIs enabled for your project in the Google Cloud Platform APIs & Services Dashboard . The list includes all the APIs enabled for your project, including the ones you just enabled for Application Integration.
Select region and encryption method
In this step, you'll select the region to deploy Application Integration and choose the encryption method for the selected region.
Key Point:
The Application Integration default service account— service- PROJECT_NUMBER @gcp-sa-integrations.iam.gserviceaccount.com —is created during this step and is automatically added to your Google Cloud project with the basic IAM roles and permissions.
For more information about the default service account, see Service accounts .
Perform the following steps under the Select region section:
Region: Select the regional location where you want to deploy Application Integration resources and store data for your integrations.
Data stored in a region is available redundantly across all the zones within that region.
For information about the supported Application Integration regions, see Application Integration locations .
Advanced settings: Optionally, expand and select the encryption method that you want to use in the selected region. You can choose one of the following methods:
Google-managed encryption key: This is the default encryption method. Use this method if you want Google to manage the encryption keys that protect your data in the selected region.
Customer-managed encryption key (CMEK): Use this method if you want to control and manage the encryption keys that protect your data in the selected region.
Caution: Enabling CMEK encryption for an Application Integration region cannot be undone. This also means that you can't change/switch the encryption method for a region once CMEK is enabled.
Click Select a customer-managed key and choose an existing CMEK key available in the selected region. You can also create a new key or use the Key resource ID of your existing key.
Click Verify to check if your default service account has cryptokey access to the selected CMEK key.
If the verification for the selected CMEK key fails, click Grant to assign the CryptoKey Encrypter/Decrypter IAM role to the default service account.
Tip: Granting cryptokey access is an optional step, which means that you can directly click Done to complete the Application Integration setup process. However, if you did not grant cryptokey access, authentication profiles for Application Integration will not be configured, and you'll have to manually grant this access when creating a new authentication profile.
For more information about CMEK, see Customer-managed encryption keys .
Click Done to complete the Application Integration setup.
What's next
Try the pre-configured sample integration .
Start a quickstart .
Get a deeper understanding of the fundamental Application Integration concepts .
See Application Integration quotas and limits .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
