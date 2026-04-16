---
title: "App Engine flexible environment for .NET release notes \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/appengine/docs/flexible/dotnet/release-notes
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/release-notes
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/flexible/dotnet/release-notes
  title: "App Engine flexible environment for .NET release notes \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
App Engine
Flexible environment
Resources
Send feedback
App Engine flexible environment for .NET release notes
Stay organized with collections
Save and categorize content based on your preferences.
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
To get the latest product updates delivered to you, add the URL of this page to your
feed
reader , or add the
feed URL directly.
February 18, 2026
Feature
Support for .NET 10 runtime is in General Availability .
January 27, 2026
Feature
Support for .NET 10 runtime is in Preview .
October 20, 2025
Feature
Support for TLS version 1.2 and later ,
along with a corresponding secure set of cipher suites, is in General
Availability (GA).
August 07, 2025
Feature
To increase security, starting in March 2025, support for Transport Layer Security (TLS) version 1.1 and earlier is deprecated. Update your application settings in the App Engine flexible environment to use TLS version 1.2 and later, along with a corresponding secure set of cipher suites (Preview).
March 18, 2025
Announcement
Container Registry is now shut down . We recommend that you use Artifact Registry for storing and managing container images. By default, new deployments created after March 5, 2025, use Artifact Registry instead of Container Registry for storing application build images. For more information, see Migrate App Engine container images to Artifact Registry .
November 12, 2024
Announcement
.NET 6 has reached end of support . You cannot re-deploy versions that use runtimes after their end of support date . We recommend that you upgrade your app to use the latest version of .NET .
July 30, 2024
Feature
In the App Engine page in the Google Cloud console, you can now filter your existing App Engine versions by runtime lifecycle stages . After you apply this filter, the console displays a warning icon for App Engine versions that are approaching end of support, have reached end of support, are deprecated, and are decomissioned.
July 12, 2024
Announcement
Deployments for new projects might be impacted from the following changes to org
policies:
Starting in May 2024, Google Cloud enforces secure-by-default organization policies for all organization resources. This policy
prevents App Engine from granting the Editor role to the App Engine default
services accounts by default.
Starting in June 2024, Cloud Build has changed the default behavior for how Cloud Build uses service accounts in new projects. This change is detailed in Cloud Build Service Account Change . As a result of this change, new projects deploying versions for the first time may be using the default App Engine service account with insufficient permissions for deploying versions.
If you are impacted by this change, you can do the following:
Review the Cloud Build guidance on changes to the default service account and opt out of these changes .
Grant the Editor role to the App Engine default service account.
July 10, 2024
Announcement
.NET version 3 and earlier have reached end of support . You cannot re-deploy versions that use runtimes after their end of support date . We recommend that you upgrade your app to use the latest version of .NET .
January 10, 2024
Feature
.NET 8 is now generally available .
December 21, 2023
Change
A warning message now appears before you publish a container image to a public repository.
December 06, 2023
Feature
.NET 8 is now available in preview .
August 07, 2023
Change
Accessing a service that's prohibited by the Internal or Internal and Cloud Load Balancing ingress setting now results in a 404 rather than 403 error code.
May 12, 2023
Feature
.NET 6 is now generally available . This version requires you to specify an operating system version in your app.yaml file. Learn more .
April 28, 2023
Feature
.NET 6 is now available in preview . This version requires you to specify an operating system version in your app.yaml file. Learn more .
March 24, 2023
Feature
You can now use ssh to log in to App Engine flexible environment instances that use only internal IP addresses .
December 13, 2022
Feature
You can now use any configured service account in your Cloud project as the app-level default service account , while creating and updating your App Engine applications.
November 09, 2022
Feature
The option to set IP mode to internal for App Engine flexible environment instances is now generally available.
May 23, 2022
Feature
You can now disable external ephemeral IP addresses for App Engine Flex services. Read our documentation to learn how . This feature is at the Preview launch stage.
May 18, 2022
Feature
Specifying a user-managed service account for each App Engine version during deployment is now generally available .
July 19, 2021
Feature
Specifying a user-managed service account for each App Engine version during deployment is now available in preview. This feature lets you grant different privileges to each version, based on the specific tasks it performs, and avoid granting more privileges than necessary.
June 30, 2021
Change
Requests from internal services to the App Engine flexible environment no longer originate from 10.0.0.1 . The IP ranges are as follows:
Cron requests from newly created or updated App Engine Cron jobs sent to the App Engine flexible environment now come from 0.1.0.2 . For Cron jobs created with older gcloud versions (earlier than 326.0.0), Cron requests will come from 0.1.0.1 . Previously, these requests only came from both 0.1.0.1 and 10.0.0.1 .
For other Cloud Scheduler jobs and Cloud Tasks queues (including App Engine Task Queues), requests sent to the App Engine flexible environment now only come from 0.1.0.2 . Previously, these requests came from both 0.1.0.2 and 10.0.0.1 .
For URL Fetch, requests sent to the App Engine flexible environment now only come from 0.1.0.40 . Previously, these requests came from both 0.1.0.40 and 10.0.0.1 .
For more information, see Understanding the App Engine firewall .
June 14, 2021
Feature
App Engine is now available in the us-west1 (Oregon), asia-southeast1 (Singapore), and asia-east1 (Taiwan) regions.
April 13, 2021
Feature
App Engine is now available in the europe-central2 region (Warsaw).
November 12, 2020
Change
You can use network ingress controls so your app only receives requests that are sent from your project's VPC or that are routed through the Cloud Load Balancing load balancer. This feature is now generally available.
September 25, 2020
Feature
You can use network ingress controls so your app only receives requests that are sent from your project's VPC or that are routed through the Cloud Load Balancing load balancer.
July 08, 2020
Feature
External HTTP(S) Load Balancing is now supported for App Engine via Serverless network endpoint groups . Notably, this feature allows you to use Cloud CDN with App Engine.
This feature is available in Beta.
June 08, 2020
Feature
App Engine is now available in the asia-southeast2 region (Jakarta).
May 14, 2020
Feature
To get a fine-grained view of billing data for each resource used by your App Engine services, you can apply labels to the services, export your billing data to BigQuery, and run queries. For more information, see Labeling App Engine resources .
April 20, 2020
Feature
App Engine is now available in the us-west4 region (Las Vegas, NV)
April 13, 2020
Change
Quotas for sockets have been removed. There is no longer a limit on the number of socket connections or the amount of data you can send and receive through a socket.
March 13, 2020
Feature
App Engine is now available in the asia-northeast3 region (Seoul).
March 06, 2020
Feature
App Engine is now available in the us-west3 region (Salt Lake City, Utah).
February 11, 2020
Feature
App Engine is changing the URLs that you use to send requests to your apps. URLs now include a region ID to help Google route your requests more efficiently and reliably. For example, an app can receive requests at https://PROJECT_ID.REGION_ID.r.appspot.com . This new URL is optional for existing apps and is provided for all new apps.
To ensure a smooth transition, we are slowly updating App Engine to use region IDs. If we haven't updated your Google Cloud project yet, you won't see a region ID for your app. Since the ID is optional for existing apps, you don't need to update URLs or make other changes once the region ID is available for your existing apps.
April 18, 2019
Feature
App Engine is now available in the asia-northeast2 region (Osaka, Japan).
April 15, 2019
Feature
App Engine is now available in the europe-west6 region (Zürich, Switzerland).
April 09, 2019
Feature
Cloud Tasks is now GA and can be used to set up tasks to be performed asychronously, outside of user requests.
March 04, 2019
Feature
Cloud Scheduler is now GA and can be used to set up scheduled units of work (cron jobs).
October 22, 2018
Feature
App Engine is now available in the asia-east2 region (Hong Kong).
July 10, 2018
Feature
App Engine is now available in the us-west2 region (Los Angeles).
May 04, 2018
Feature
Applications in the App Engine flexible environment currently use a Debian 8 "Jessie" operating system. The Debian 8 "Jessie" OS will lose full support from the Debian maintainers in June 2018. In advance of this change, Google will migrate customers to an Ubuntu-based OS starting on May 30, 2018. To update your application to the Ubuntu 16.04 OS, re-deploy your application after May 30, 2018.
If for some reason you need to opt-out of this automatic upgrade, you can pin your application to the old Debian 8 "Jessie" OS .
January 10, 2018
Feature
App Engine is now available in the northamerica-northeast1 region (Montréal, Canada).bn `
December 14, 2017
Feature
Improved access control documentation around deploying apps with IAM roles and service accounts:
Predefined App Engine roles
Deploying using IAM roles
Require permissions
October 31, 2017
Feature
App Engine is now available in the asia-south1 region (Mumbai, India).
October 11, 2017
Feature
Announced general availability of App Engine firewall .
October 05, 2017
Feature
.NET Core support is generally available on the App Engine flexible environment. Docker images are available for .NET Core 1.0, 1.1, and 2.0.
October 02, 2017
Feature
For the App Engine flexible environment, all responses are now compressed with gzip by default once you redeploy your app. No changes need to be made to your app.yaml file.
September 26, 2017
Feature
For the App Engine flexible environment, billing increments for instances are reduced from per-minute increments to per-second increments. Additionally, the minimum usage cost for instance resources is reduced from 10 minutes to 1 minute.
September 18, 2017
Deprecated
Legacy health checks will no longer be available after September 30th, 2018.
Feature
Updated health checks are now the default for new projects. To upgrade a project from legacy health checks, run the command gcloud app update --split-health-checks .
September 13, 2017
Feature
You can now use managed certificates to add SSL to your custom domain. Once you map your custom domain to your application, App Engine provisions an SSL certificate automatically and handles renewing the certificate before it expires and revoking it if you remove the custom domain. Managed certificates are in beta. For more information, see Securing Custom Domains with SSL .
Feature
The gcloud commands and Admin API methods used to map custom domains are now generally available. This includes gcloud domains verify and apps.authorizedDomains.list . However, if you want to use managed SSL certificates, use the beta commands and methods that are specified in Securing Custom Domains with SSL .
Feature
If you have an existing domain mapping and SSL certificate, then it continues to function as expected. You can also upgrade to managed SSL certificates .
September 05, 2017
Feature
App Engine is now available in the southamerica-east1 region (São Paulo, Brazil).
August 23, 2017
Feature
Beta release of the App Engine firewall .
August 01, 2017
Feature
App Engine is now available in the europe-west3 region (Frankfurt, Germany).
July 18, 2017
Feature
App Engine is now available in the australia-southeast1 region (Sydney, Australia).
July 12, 2017
Feature
You can now use updated health checks, which allow you to use separate checks to confirm that your instance is running and ready to serve content. You must enable updated health checks, which are currently in Beta. For more information, see Health checks .
Change
If you use updated health checks, deployments will fail if your application does not reach a ready state.
June 06, 2017
Feature
App Engine is now available in the europe-west2 region (London).
Feature
You can now use the beta-level features in the Admin API and gcloud command-line tool to create and manage your custom domains and SSL certificates .
May 09, 2017
Feature
App Engine is now available in the us-east4 region (North Virginia).
March 28, 2017
Feature
The flexible environment is now available in the europe-west region .
March 09, 2017
Feature
The .NET core runtime for the App Engine flexible environment is now in Beta.
Feature
The App Engine flexible environment is now generally available (GA). You can run Node.js, Ruby, Python, Java, and Go applications with a 99.95% SLA .
Feature
The PHP 7 runtime for the App Engine flexible environment is now in Beta.
December 06, 2016
Feature
New applications that have not been deployed in the flexible environment must specify env: true in the app.yaml file instead of vm:true . Applications that were previously deployed can continue to use vm:true but will need to switch to env:true in the future. For more details, see upgrade guide .
November 15, 2016
Feature
This release includes a few key new features:
Multi-zonal deployment support.
A modern networking stack with increased throughput.
Custom machine types.
Asia-Northeast1 region availability.
Feature
There is a new release of the App Engine flexible environment. To choose this environment, use env:flex instead of vm:true in your app.yaml configuration file. You can learn more about the details of this release by visiting the upgrade guide .
Change
There are also a few breaking changes:
HTTP headers have been changed.
Environment variables have been changed.
There are multiple changes to the app.yaml schema.
For details and a full list of changes, visit the upgrade guide .
Deprecated
This release also marks the deprecation of a few features:
The python-compat runtime.
The python27 runtime.
The java-compat runtime.
The jetty9-compat runtime.
The Go App Engine package no longer works on the App Engine flexible environment. Instead, use the cloud.google.com/go/... package .
May 02, 2016
Feature
The Ruby runtime is now available for the App Engine flexible environment.
March 24, 2016
Feature
App Engine Managed VMs is renamed to App Engine flexible environment .
February 03, 2016
Feature
Container construction choices for Managed VMs
The gcloud preview app deploy (and mvn gcloud:deploy ) commands upload your artifacts to our servers and build a container to deploy your app to the Managed VM environment.
There are two mechanisms for building the container image remotely. The default behavior is to build the container on a transient Compute Engine Virtual Machine which has Docker installed. Alternatively, you can use the Cloud Build service, which is in Beta. To use the Cloud Build service, follow these steps:
Activate the Cloud Build API for your project.
Use the command gcloud config set app/use_cloud_build True . This will cause all invocations of gcloud preview app deploy to use the service. To return to the default behavior, use the command gcloud config set app/use_cloud_build False .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
