---
title: "Set up Application Design Center \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/application-design-center/docs/setup
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/application-design-center/docs
source_metadata:
  url: https://docs.cloud.google.com/application-design-center/docs/setup
  title: "Set up Application Design Center \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Application Design Center
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Set up Application Design Center
This document guides administrators through the initial setup for
Application Design Center. Completing this setup lets your organization design
and manage applications using App Design Center.
In the setup process, you as an administrator will do the following:
Configure application management .
Create your initial space . This step
configures the necessary services and resources, including the following:
A Cloud Storage bucket for Terraform code storage.
A default private catalog
and access to a Google-managed catalog.
Required APIs such as Infrastructure Manager, App Hub, and
Service Usage.
Choose your setup model
Before you set up App Design Center, choose your application
setup model where you'll create
templates, applications, and other App Design Center resources.
The application management boundary
acts as a centralized place for all application management tasks, including
APIs, access control, billing, and quotas. The application management boundary
you choose impacts your Application Design Center setup in the following ways:
Single-project boundary Preview : The
system quickly configures your project for application management, enables
required APIs, and creates a space and storage bucket.
Folder-level boundary : You enable application management on a folder. In
the folder, the system creates a management project where you enable billing. You can then complete the
App Design Center setup, which creates a storage bucket,
enables required APIs, and lets you do the following:
Specify a name for your space.
Select whether to disable Google-provided templates.
Use Gemini Cloud Assist
and Cloud Hub to create and manage your
applications.
Share your catalog of templates with other spaces.
Before you begin
Single-project (Preview)
You must have the following roles on the project:
If you have the Project Owner ( roles/owner ) role, the system will
automatically assign the remaining permissions to your user to complete the
setup.
If you don't have the Project Owner ( roles/owner ) role, ask your
administrator to assign your user the following:
Application Design Center Admin ( roles/designcenter.admin ).
Service Usage Admin ( roles/serviceusage.serviceUsageAdmin ).
Folder-level
You must have an organization
resource , from which
you do one of the following:
Create a folder and enable application
management .
Select an existing app-enabled folder .
You must have the following roles:
To enable application management on a folder and create an
underlying management project, you must have the Folder Admin
( resourcemanager.folderAdmin ) role on the parent resource.
To enable billing on the management project, you must have the
required billing
permissions
on the billing account and management project.
To complete the App Design Center setup, you must
have the following roles on the management project:
Application Design Center Admin ( roles/designcenter.admin ).
Application Admin ( roles/designcenter.applicationAdmin ).
Enable application management
Single-project (Preview)
You can use App Design Center in an app-enabled project,
which lets you define, group, and manage applications. You use the
app-enabled project to manage quotas and billing. You can create other
projects to store the Google Cloud resources that you create with
App Design Center.
To enable application management in a single project, see Create a space
and enable APIs
Folder-level
You can use App Design Center in a folder configured for
application management, which lets you define, group, and manage
applications. In your folder, you can create a resource hierarchy and
control access based on your organizational structure and team
responsibilities.
When you enable application management, the system creates a new management
project in the folder. You use the management project to manage quotas and
billing for descendant projects associated with the folder. You can create
additional projects in the folder to store the Google Cloud resources that
you create with App Design Center.
For steps to configure app management, see the following:
Managing applications in a
folder .
Enabling app management and APIs on a
folder .
Link a billing account to the management
project .
Create an initial space and enable APIs
Before you and your development team start using
App Design Center, you must complete an automated initial setup
to create your initial space and enable required APIs.
Note: This setup process creates a new Cloud Storage bucket to store
application information. If you want to use an existing bucket, see Use your
own storage bucket .
Single-project (Preview)
To enable application management on a single project and set up
App Design Center, do the following:
Go to the Application Design Center Overview page.
Go to Overview
From the project picker, select the project where you want to configure
application management.
Click Go to Setup .
In the Setup your project for application management pane, review
the list of APIs that will be enabled.
Click Enable . The system enables the APIs, and creates the storage
bucket and default-space space.
Folder-level
To set up App Design Center, do the following:
Go to the Application Design Center Overview page.
Go to Overview
Click Select folder and select your app-enabled
folder .
Click Set up ADC .
In the My space name field, enter a name for your space. You can't
edit this name later.
By default, the space contains components
and application
templates
that are created by Google. To remove Google components and application
templates from the space, clear the Enable Google opinionated
templates checkbox.
If you remove Google opinionated templates, space users can only use the
components that you import
and the application templates that you
create .
Click Complete setup . The system enables the APIs, and creates the
storage bucket and your initial space .
Use your own storage bucket
The setup process creates a Cloud Storage bucket to store application details
and generated Terraform. Alternatively, you can use your own bucket to store
application information. For example, you might use an existing bucket if your
organization policies prevent you from creating new storage buckets.
To set up App Design Center and use your own Cloud Storage
bucket, you must use the App Design Center API. Do the following:
Make sure that you have access to use APIs. For more information, see Set
up API access .
Make sure that your bucket is in the same management project where you plan
to create your space.
Make sure that you have the following permissions on the bucket:
storage.buckets.get
storage.objects.create
For more information, see IAM permissions for
Cloud Storage .
Identify the bucket name.
Create your API call using the
projects.locations.spaces
resource:
Specify your bucket name in the gcs_bucket field. For example, if the
bucket URI is gs://my-bucket , the bucket name is my-bucket .
Use the
projects.locations.spaces.create
method to create the space.
Your space is created, your bucket is used as the storage location for
application information, the required APIs are enabled, and the
App Design Center setup process is completed.
What's next
Provide access to space
users .
Create additional spaces ,
where you can share templates from your initial space .
Learn more about
Application Design Center .
Manage catalogs .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
