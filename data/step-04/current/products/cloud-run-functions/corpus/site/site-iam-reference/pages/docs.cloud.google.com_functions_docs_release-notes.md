---
title: "Cloud Run functions (formerly known as Cloud Functions) release notes \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/functions/docs/release-notes
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/functions/docs/concepts/iam
source_metadata:
  url: https://docs.cloud.google.com/functions/docs/release-notes
  title: "Cloud Run functions (formerly known as Cloud Functions) release notes \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

If you are creating a new function, see the Console Quickstart on Cloud Run.
Home
Documentation
Application hosting
Cloud Run
Cloud Run functions
Resources
Send feedback
Cloud Run functions (formerly known as Cloud Functions) release notes
Stay organized with collections
Save and categorize content based on your preferences.
Note: Cloud Functions (2nd gen) is now Cloud Run functions. The
Cloud Functions API is still supported for
performing operations on functions.
This page documents production updates to Cloud Run functions. We recommend
that Cloud Run functions developers periodically check this list for any
new announcements.
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
To get the latest product updates delivered to you, add the URL of this page to your
feed
reader , or add the
feed URL directly.
March 17, 2026
Feature
Support for Ruby 4.0 runtime is in General Availability .
March 12, 2026
Feature
Support for Go 1.26 runtime is in General Availability .
March 03, 2026
Feature
Support for Ruby 4.0 runtime is in Preview .
February 27, 2026
Feature
Support for PHP 8.5 runtime is in General Availability .
February 24, 2026
Feature
Support for the ability to configure Direct VPC egress for 2nd gen functions is in General Availability .
February 19, 2026
Feature
Support for Go 1.26 runtime is in Preview .
February 18, 2026
Feature
Support for .NET 10 runtime is in General Availability .
February 02, 2026
Feature
Support for PHP 8.5 runtime is in Preview .
January 27, 2026
Feature
Support for .NET 10 runtime is in Preview .
January 06, 2026
Feature
You can now configure Direct VPC egress for 2nd gen functions . This support is at the Preview release level .
December 22, 2025
Feature
Support for Java 25 runtime is in General Availability .
December 19, 2025
Feature
Support for Python 3.14 runtime is in General Availability . Starting from Python version 3.14 and later, the Python Buildpack uses the uv package manager as the
default installer for the dependencies you specify in your requirements.txt file. You can also use pip as the default installer for these versions by setting the GOOGLE_PYTHON_PACKAGE_MANAGER environment variable to pip . For more information, see Specify dependencies in Python .
November 20, 2025
Feature
Support for Node.js 24 runtime is in General Availability .
November 12, 2025
Feature
Support for Python 3.14 runtime is in Preview . Starting from Python version 3.14 and later, the Python Buildpack uses the uv package manager as the
default installer for the dependencies you specify in your requirements.txt file. You can also use pip as the default installer for these versions by setting the GOOGLE_PYTHON_PACKAGE_MANAGER environment variable to pip . For more information, see Specify dependencies in Python .
October 31, 2025
Feature
Support for Java 25 runtime is in Preview .
October 07, 2025
Feature
Cloud Run functions (1st gen) supports the Node.js 22 runtime at the General Availability release level .
October 01, 2025
Feature
Cloud Run functions now provides an upgrade tool for upgrading 1st gen functions to Cloud Run. This feature is in Preview .
August 21, 2025
Feature
Support for Go 1.25 runtime is in General Availability (GA) .
July 30, 2025
Feature
Support for Go 1.25 runtime is in Preview . This runtime is available for early testers using existing release candidates .
Feature
Support for Go 1.24 runtime is in General Availability (GA) .
Feature
Support for Node.js 24 runtime is in Preview . Node.js 24 is in the Current release state and enters long-term support (LTS) in October 2025. For more information, see Node.js v24.0.0 (Current)
in the Node.js website.
July 15, 2025
Feature
Support for the Go 1.24 runtime is in Preview .
June 17, 2025
Feature
Support for the PHP 8.4 runtime is in General Availability (GA) .
Feature
Support for the Ruby 3.4 runtime is in General Availability (GA) .
May 30, 2025
Feature
For Java functions that use functions-framework version 1.4.0 or later, you
can now use the logging class java.util.logging.Logger to add a unique execution
ID to log outputs.
May 13, 2025
Feature
Labels you previously set for your Cloud Run functions using either
gcloud functions commands or the Cloud Functions v2 API propagate to Cloud Run when you deploy your functions in Cloud Run . For more information on creating labels in Cloud Run, see Configure labels for services .
May 05, 2025
Feature
Support for the Ruby 3.4 runtime is in Preview .
Feature
Support for the PHP 8.4 runtime is in Preview .
Feature
Support for the Python 3.13 runtime is in General Availability (GA) .
April 21, 2025
Feature
Cloud Run functions now supports the Python 3.13 runtime at the Preview release level .
March 03, 2025
Feature
Cloud Run functions now supports the Go 1.23 runtime at the General Availability release level .
February 19, 2025
Feature
Support for deploying v2 functions in Cloud Run is now in general availability (GA). This lets you customize your function as you would a Cloud Run service. This change removes support for creating, deploying, or updating v2 functions in the Google Cloud console. However, you can still manage functions created with the Cloud Functions v2 API using the Cloud Functions gcloud CLI, the Cloud Functions v2 API, or the Cloud Run Cloud Console. See Cloud Run functions comparison for more details.
February 11, 2025
Feature
Cloud Run functions created with the Cloud Functions (v2) API ( cloudfunctions.googleapis.com ) can now be detached so that they can only be managed through the Cloud Run Admin API ( run.googleapis.com ). When the detach operation completes, your function will retain its cloudfunctions.net URLs and triggers, and can only be managed using the Cloud Run Admin API. Note that the detach operation is irreversible. For more information see Manage functions .
December 09, 2024
Feature
You can now create custom organization policies for Serverless VPC Access connectors and apply them to projects, folders, or organizations. This support is at the General Availability release level .
November 19, 2024
Feature
Cloud Run functions now supports the Go 1.23 runtime at the Preview release level .
November 18, 2024
Feature
Cloud Run functions now supports the Node.js 22 runtime at the General Availability release level .
October 10, 2024
Feature
You can now manage function resources using custom constraints that get enforced at the project level. This support is at the General Availability release level .
September 30, 2024
Feature
You can now manage function resources using custom constraints that get enforced at the project level. This support is at the Preview release level .
September 23, 2024
Change
The runtime support schedule for some PHP runtimes has been extended to match PHP's public support schedule .
August 26, 2024
Change
The Cloud Run functions (cloud functions v2 API) build process now supports cross-project Artifact Registry repositories for greater configurability. This support is at the Preview release level .
August 21, 2024
Announcement
Cloud Functions has been renamed to Cloud Run functions.
Cloud Functions (1st gen) is now known as Cloud Run functions (1st gen).
Cloud Functions (2nd gen) is now known as Cloud Run functions.
Learn more in the blog post .
You can also deploy new functions, and modify existing functions that were created with the Cloud Functions v2 API in Cloud Run . This enables you to customize your function as you would a Cloud Run service.
July 31, 2024
Feature
Cloud Functions now supports the Ruby 3.3 runtime at the General Availability release level .
July 11, 2024
Announcement
Starting in July 2024, Cloud Build has changed the default behavior for how Cloud Build uses service accounts in new projects. This change is detailed in Cloud Build Service Account Change . As a result of this change, new projects deploying functions for the first time may be using a default Cloud Build service account with insufficient permissions for building a function. If you are impacted by this change you can do one of the following:
Review the Cloud Build guidance on changes to the default service account and opt out of these changes .
Add the Cloud Build Service Account role ( roles/cloudbuild.builds.builder ) to the default Compute Service Account.
Create a custom build service account for function deployments.
June 28, 2024
Change
Cloud Functions 1st gen and 2nd gen now support custom service accounts for Cloud Build at the General Availability release level .
June 27, 2024
Change
To simplify searches and improve your documentation experience, we have split the 1st generation and 2nd generation documentation into separate documentation sets.
June 24, 2024
Feature
Cloud Functions (2nd gen) now supports fully automatic security updates. For details, see the document Execution environment security .
June 18, 2024
Feature
Cloud Functions has added support for a new runtime, Ruby 3.3 , at the Preview release level .
Change
You can now enable execution ID in the logs for 2nd gen Python functions that use functions-framework >= 3.7.0 and 2nd gen Node.js functions that use functions-framework >= 3.4.0 by setting the runtime environment variable LOG_EXECUTION_ID to true .
May 17, 2024
Feature
Cloud Functions (2nd gen) now supports the Node.js 22 runtime at the Preview release level .
March 26, 2024
Feature
Cloud Functions (2nd gen) now supports the Go 1.22 runtime at the General Availability release level .
March 06, 2024
Feature
Cloud Functions (1st gen) now supports custom service accounts for Cloud Build, at the Preview release level .
February 26, 2024
Feature
Cloud Functions now supports the PHP 8.3 and Java 21 runtimes at the General Availability release level for 2nd gen functions.
Feature
Cloud Functions now supports the Go 1.22 runtime at the Preview release level .
February 12, 2024
Feature
Cloud Functions now supports the PHP 8.3 runtime at the
Preview release level for 2nd gen functions.
January 23, 2024
Feature
The option to update a Serverless VPC Access connector is now available at the General Availability release level . This feature allows you to edit the machine (instance) type, as well as the minimum and maximum number of instances.
January 15, 2024
Change
Cloud Functions (1st gen) now uses Artifact Registry as the default container registry. See Customize the Cloud Functions build process for details.
January 10, 2024
Feature
Cloud Functions now supports the .NET 8 runtime at the General Availability release level for 2nd gen functions.
January 08, 2024
Feature
Cloud Functions (2nd gen) now supports custom service accounts for Cloud Build, at the Preview release level .
December 21, 2023
Change
A warning message now appears before you publish a container image to a public repository.
December 11, 2023
Feature
The new region me-west1 is now available. See Locations for details.
December 06, 2023
Feature
Cloud Functions (2nd gen) now supports the .NET 8 runtime at the Preview release level .
Feature
Cloud Functions (2nd gen) now supports the Java 21 runtime at the Preview release level .
November 14, 2023
Change
The ability to optionally configure 2nd gen functions with user-specified concurrency and vCPU is now available at the General Availability release level .
November 08, 2023
Feature
Cloud Functions now supports on-deployment security updates (1st gen and 2nd gen) and fully automatic security updates (1st gen only). For details, see Execution environment security .
November 06, 2023
Feature
Cloud Functions now supports the Python 3.12 runtime at the General Availability release level .
October 16, 2023
Feature
Cloud Functions now supports the Python 3.12 runtime at the Preview release level .
October 11, 2023
Feature
Cloud Functions (2nd gen) now supports Shared VPC ingress at the General Availability release level . Shared VPC traffic is now considered "internal" for functions that are connected to the Shared VPC network.
September 07, 2023
Feature
Cloud Functions now supports the Go 1.21 runtime at the General Availability release level .
August 29, 2023
Change
Cloud Functions (2nd gen) is now the default choice in the Google Cloud console user interface.
August 16, 2023
Feature
Cloud Functions now supports pre-deployment testing in the Google Cloud console at the Preview release level .
August 14, 2023
Feature
Cloud Functions now supports the Go 1.21 runtime at the Preview release level .
August 07, 2023
Change
Accessing a service that's prohibited by the Internal or Internal and Cloud Load Balancing ingress setting now results in a 404 rather than 403 error code.
July 31, 2023
Feature
The following new regions are now available: europe-southwest1 , europe-west8 , europe-west9 , us-south1 , and us-east5 . See Locations for details.
June 27, 2023
Change
Cloud Functions now supports performance recommendations that analyze cold starts and suggest setting up minimum instances to improve function performance at the General Availability release level .
June 26, 2023
Feature
The Node.js 20 runtime is now available for Google Cloud Functions at the GA release level . Note that Node.js 20 will enter long-term support (LTS) in October and is the Node.js "Current" release until then. The Node.js community encourages you to explore the new features and benefits included in this release. For more information, see the Node.js 20 announcement .
June 23, 2023
Feature
The Java runtime now supports projects that use Maven wrappers .
June 16, 2023
Feature
Cloud Functions 2nd gen now supports deterministic URLs (similar to 1st gen), at the General Availability release level . This change will not just affect new 2nd gen functions. Previously deployed 2nd gen functions will be retroactively assigned a deterministic cloudfunctions.net URL. The function's previous run.app URL will continue to work also. If your 2nd gen function was last deployed before June 15th, 2023, be sure to redeploy it before using cloudfunctions.net URL as an auth token audience .
June 14, 2023
Change
Cloud Functions now supports customer-managed encryption keys for 2nd gen functions at the General Availability release level .
June 09, 2023
Feature
You can now create and then configure Serverless VPC Access connector for your function directly from the Create form in the Google Cloud console at the Preview release level .
June 01, 2023
Feature
You can use the Pnpm package manager to configure dependencies for Node.js runtimes. Learn how to configure your runtime .
May 16, 2023
Feature
You can now restrict new deployments by product generation (1st gen or 2nd gen). This feature is at the General Availability release level .
May 15, 2023
Feature
Cloud Functions now supports 2nd gen Firestore triggers through Eventarc at the Preview release level .
Feature
Cloud Functions has added support for a new runtime, PHP 8.2 , at the General Availability release level . PHP 8.2 adds significant new functionality over PHP 8.1 and uses Ubuntu 22.04 for its base O/S image.
May 08, 2023
Feature
Cloud Functions now supports the Node.js 20 runtime at the Preview release level .
April 20, 2023
Change
There is a change in retry policy for 1st gen functions that use Pub/Sub subscriptions. Newly created 1st gen functions with "retry on failure" enabled will now use exponential backoff, configured with a minimum backoff of 10 seconds and a maximum backoff of 600 seconds. This new policy replaces the old "retry immediately" policy. This policy is applied to new 1st gen functions the first time you deploy them. It is not retroactively applied to existing functions, even if you redeploy them. 2nd gen functions will continue to use an exponential backoff strategy. For details, see Retrying event-driven functions .
April 18, 2023
Feature
Cloud Functions (2nd gen) has added support at the Preview release level for accepting requests from the Shared VPC network that a function is connected to , including when Ingress is configured as "Internal" or "Internal and Cloud Load Balancing."
April 11, 2023
Breaking
All 1st and 2nd gen Google Cloud Functions using the Node.js runtime now automatically run the npm run build command during deployment if they define an npm build script in their package.json file. This feature is rolling out over the next few days.
Important : If you prefer to prevent your build from running the npm run build script, you can either:
Add a gcp-build script with an empty value in your package.json file: "gcp-build":""
Set the environment variable GOOGLE_NODE_RUN_SCRIPTS to the empty string to prevent all scripts from running -- for example, by including the --set-build-env-vars=GOOGLE_NODE_RUN_SCRIPTS="" option with your gcloud functions deploy command.
For details about configuring package.json , see
Node.js buildpack configuration .
For details about setting environment variables see
setting environment variables .
April 06, 2023
Feature
Cloud Functions now supports the use of the Yarn 2 package manager with private Node.js modules.
April 04, 2023
Change
You can now use uppercase letters and underscores in the function name you specify for a 2nd gen function when you deploy the function.
April 03, 2023
Feature
Cloud Functions has added support for a new runtime, PHP 8.2 , at the Preview release level .
March 27, 2023
Feature
Cloud Functions has added support for a new runtime, Go 1.20 , at the General Availability release level .
March 17, 2023
Feature
Cloud Functions has added support for customer-managed encryption keys for 2nd gen functions at the Preview release level .
February 28, 2023
Feature
Cloud Functions now supports the Python 3.11 runtime at the General Availability release level .
February 27, 2023
Feature
Cloud Functions has added support for a new runtime, Ruby 3.2 , at the Preview release level .
Feature
New performance recommendations are supported for Cloud Functions, which analyze cold starts and suggest setting up minimum instances to improve function performance. At the Preview release level .
February 13, 2023
Feature
Cloud Functions has added support for a new runtime, Go 1.20 , at the Preview release level .
January 30, 2023
Change
We've added support dates for language runtimes that have reached end of support from their open source communities. Please refer to the Runtimes Support Schedule for future updates to runtime languages
January 18, 2023
Feature
Cloud Functions now supports the Node.js 18 runtime at the General Availability release level .
Feature
The ability to optionally configure 2nd gen functions with user-specified concurrency and vCPU is now available in preview.
January 10, 2023
Feature
Cloud Functions has added support for a new runtime, Python 3.11 , at the Preview release level .
January 06, 2023
Feature
Cloud Functions now supports the following runtimes at the General Availability release level .
Go 1.18
Go 1.19
December 21, 2022
Feature
The option to update a Serverless VPC Access connector is now available in preview. This feature allows you to edit the machine (instance) type, as well as the minimum and maximum number of instances.
December 13, 2022
Feature
The cloudfunctions.googleapis.com/v2 API now supports reading 1st gen functions, using the get and list methods. Function responses contain an Environment field that differentiates between 1st and 2nd gen functions.
You can use the filter field to restrict the response to only 2nd gen functions, for example: filter=environment="GEN_2" .
Note that 1st gen functions in europe-west5 can't be read from the v2 API as the region is not available yet in 2nd gen.
If you are using an older version of gcloud, the gcloud functions list command may show 1st gen functions twice. Updating to a newer version of gcloud should fix this.
November 22, 2022
Feature
Cloud Functions has added support for a new runtime, Node.js 18 , at the Preview release level .
November 14, 2022
Announcement
Cloud Functions container runtimes have been patched against CVE-2022-3786 and CVE-2022-3602. Affected runtime languages are:
Java 17
Python 3.10
Go 1.18/1.19
.NET 6
You should redeploy functions using the affected runtime languages as soon as possible. Google does not automatically update the base image in use for already-deployed functions. Google will automatically apply the most updated runtime version to the redeployed function.
November 08, 2022
Change
Cloud Functions has added support for the following new runtimes at the Preview release level :
Go 1.18
Go 1.19
October 24, 2022
Change
Cloud Functions now supports the .NET Core 6.0 runtime at the General Availability release level .
September 12, 2022
Feature
Cloud Functions has added support for a new runtime, .NET Core 6.0 , at the Preview release level .
August 03, 2022
Change
Cloud Functions has released Cloud Functions (2nd gen), available at the General Availability release level . Cloud Functions (2nd gen) is Google Cloud's next-generation Functions-as-a-Service offering. This new version of Cloud Functions comes with an advanced feature set, giving you more powerful infrastructure, advanced control over performance and scalability, more control around the functions runtime, and triggers from over 90 event sources.
See Cloud Functions version comparison for details.
July 06, 2022
Change
Cloud Functions now supports the following runtimes at the General Availability release level :
Python 3.10
PHP 8.1
Change
Cloud Functions (1st gen) now supports Google-managed Artifact Registry at the General Availability release level .
July 01, 2022
Change
Cloud Functions now supports PHP 8.1 at the General Availability release level .
June 30, 2022
Change
Cloud Functions now supports Python 3.10 at the General Availability release level .
June 27, 2022
Change
Cloud Functions now supports Java 17 at the General Availability release level .
June 14, 2022
Change
The Python 3.10 runtime (preview) now uses Ubuntu 22 .
June 06, 2022
Change
The Java 17 runtime (preview) now uses Ubuntu 22 .
May 25, 2022
Announcement
We have updated the documentation to clarify that to get the updates and security patches for runtimes and their dependencies, you need to deploy a function. Security patches are not applied otherwise.
May 04, 2022
Change
Cloud Functions now supports Ruby 3.0 at the General Availability release level .
May 03, 2022
Feature
Cloud Functions has added support for the following new runtimes at the Preview release level :
Python 3.10
PHP 8.1
April 01, 2022
Feature
Cloud Functions (1st gen) has added support for Google-managed Artifact Registry at the Preview release level .
March 31, 2022
Change
Cloud Functions (1st gen) support for customer-managed encryption keys (CMEK) is now at the General Availability release level .
March 24, 2022
Feature
Support for Serverless VPC Access connectors in Shared VPC host projects is now at the General Availability release level . Learn about the advantages of this method and how to configure connectors in host projects .
March 21, 2022
Feature
Support for Firebase Remote Config, Firebase Alerts, and Firebase Test Lab triggers is now in Preview . This only applies to Cloud Functions (2nd gen).
March 14, 2022
Feature
Cloud Functions has added support for the following new runtimes at the Preview release level :
Java 17
Ruby 3.0
March 07, 2022
Feature
Added Terraform support for Cloud Functions (2nd gen) .
February 16, 2022
Feature
Cloud Functions has added support for low-configuration access to private dependencies on Artifact Registry in in Node.js and Python .
February 14, 2022
Feature
Cloud Functions has released Cloud Functions (2nd gen), available at the Preview release level . Cloud Functions (2nd gen) is Google Cloud's next-generation Functions-as-a-Service offering. This new version of Cloud Functions comes with an advanced feature set, giving you more powerful infrastructure, advanced control over performance and scalability, more control around the functions runtime, and triggers from over 90 event sources.
See the Cloud Functions (2nd gen) documentation for details.
January 25, 2022
Change
Cloud Functions support for secrets is now at the General Availability release level .
December 08, 2021
Feature
Cloud Functions has added support for customer-managed encryption keys , available at the Preview release level .
December 07, 2021
Change
Cloud Functions support for setting a minimum number of instances is now at the General Availability release level .
December 02, 2021
Feature
Internal ingress from Workflows to Cloud Functions is now at the General Availability release level .
November 22, 2021
Feature
Cloud Functions is now available in the following region:
us-west1 (Oregon)
See Cloud Functions Locations for details.
November 17, 2021
Change
Cloud Functions now supports the following runtimes at the General Availability release level :
Node.js 16
Go 1.16
September 15, 2021
Change
Cloud Functions now supports PHP 7.4 at the General Availability release level .
September 09, 2021
Change
Firestore triggers for Cloud Functions are now supported at the General Availability release level .
September 03, 2021
Feature
Cloud Functions has added support for a new runtime, Go 1.16 , at the Preview release level .
August 30, 2021
Feature
Cloud Functions adds support for setting a minimum number of instances , available at the Preview release level . For more information, see the blog post .
August 26, 2021
Feature
Cloud Functions has added support for a new runtime, Node 16 , at the Preview release level .
August 24, 2021
Feature
Cloud Functions offers a native integration with Secret Manager , available at the Preview release level . For more information, see the blog post .
August 10, 2021
Feature
The use of private worker pools is now available for building your functions.
July 07, 2021
Feature
Cloud Functions now logs pending queue requests abort error messages.
July 02, 2021
Change
Cloud Functions now supports .NET at the General Availability release level . This runtime is based on .NET Core 3.1.
June 28, 2021
Feature
Cloud Functions is now available in the following region:
asia-east1 (Taiwan)
See Cloud Functions Locations for details.
June 14, 2021
Feature
Cloud Functions is now available in the following region:
asia-southeast1 (Singapore)
See Cloud Functions Locations for details.
June 07, 2021
Change
Cloud Functions now supports Ruby 2.6 and 2.7 at the General Availability release level .
April 19, 2021
Change
Cloud Functions now supports the following runtimes at the General Availability release level :
Node.js 14
Python 3.9
Feature
Cloud Functions has added support for a new runtime, PHP 7.4 , in Preview.
April 12, 2021
Feature
Cloud Functions is now available in the following region:
europe-central2 (Warsaw)
See Cloud Functions Locations for details.
March 18, 2021
Change
Shared VPC on Cloud Functions is now at general availability (GA).
February 04, 2021
Feature
There is now a security level feature for HTTP functions that controls whether the function's URL supports HTTPS only, or both HTTP and HTTPS.
January 13, 2021
Feature
Cloud Functions has added support for a new runtime, Node 14 , in Preview.
Cloud Functions has added support for a new runtime, Python 3.9 , in Preview.
January 11, 2021
Feature
Cloud Functions has added support for a new runtime, Ruby, in Preview. This runtime supports Ruby 2.6 and Ruby 2.7.
The Ruby Runtime
Blog post
November 19, 2020
Feature
Cloud Functions has added support for a new runtime, .NET, in Preview. This runtime is based on .NET Core 3.1.
The .NET runtime
Blog post
November 16, 2020
Change
Cloud Functions now supports Node.js 12 at the General Availability release level .
November 11, 2020
Change
Cloud Functions now supports Python 3.8 at the General Availability release level .
October 13, 2020
Feature
In runtimes that use buildpacks you can now configure aspects of your build by setting build configuration variables. See Using Environment Variables for more information. In Preview.
August 26, 2020
Change
Cloud Functions Node 10 runtime now builds container images in the user's project, providing direct access to build logs and removing the preset build-time quota.
August 14, 2020
Change
Cloud Functions now supports Java 11 at the General Availability release level .
August 05, 2020
Deprecated
The Go 1.11 runtime is deprecated as of 2020-08-05. To ensure that your functions are on a supported version of Go, migrate them to Go 1.13 . For more discussion of Cloud Functions runtime support policy, see Runtime Support .
Feature
Cloud Functions Java 11, Python 3.7 or 3.8, and Go 1.13 runtimes now build container images in the user's project, providing direct access to build logs and removing the preset build-time quota.
See Building Cloud Functions for details.
July 31, 2020
Feature
Cloud Functions is now available in the following regions:
asia-south1 (Mumbai)
asia-southeast2 (Jakarta)
asia-northeast3 (Seoul)
See Cloud Functions Locations for details.
July 23, 2020
Feature
Serverless VPC Access support for Shared VPC is now available in Beta.
July 15, 2020
Feature
Cloud Functions has added support for a new runtime, Node 12 , in Beta.
Cloud Functions has added support for a new runtime, Python 3.8 , in Beta.
July 10, 2020
Feature
Cloud Functions is now available in the following regions:
us-west2 (Los Angeles)
us-west4
southamerica-east1 (Sao Paulo)
asia-northeast2 (Osaka)
See Cloud Functions Locations for details.
July 07, 2020
Feature
External HTTP(S) Load Balancing is now supported for Google Cloud Functions via Serverless network endpoint groups .
Notably, this feature allows you to use Cloud CDN and Cloud Armor with Google Cloud Functions.
This feature is available in Beta.
June 19, 2020
Feature
Cloud Functions is now available in the following regions:
australia-southeast1 (Sydney)
northamerica-northeast1 (Montreal)
See Cloud Functions Locations for details.
June 12, 2020
Feature
Cloud Functions is now available in the following regions:
europe-west6 (Zurich)
us-west3 (Salt Lake City)
See Cloud Functions Locations for details.
June 05, 2020
Deprecated
The Node.js 8 runtime is deprecated as of 2020-06-05. To ensure that your functions are on a supported version of Node.js, migrate them to Node.js 10 .
For more discussion of Cloud Functions runtime support policy, see Runtime Support .
May 28, 2020
Change
Cloud Functions now supports Go 1.13 at the General Availability release level .
May 26, 2020
Feature
Cloud Functions has added support for a new runtime, Java 11, in Beta:
The Java Runtime
May 18, 2020
Change
Cloud Functions now supports Node.js 10 at the General Availability release level .
March 31, 2020
Change
Cloud Functions now supports Connecting to Cloud SQL at the General Availability release level .
The Beta release introduced improved security when accessing Cloud SQL from functions via the /cloudsql filesystem path. Most functions
have been automatically upgraded. In some cases, you may see
warning messages in Stackdriver logging to help you complete the required upgrade steps.
March 24, 2020
Change
Cloud Functions now supports network settings at the General Availability release level .
Change
Cloud Functions now supports VPC Service Controls at the General Availability release level .
February 13, 2020
Change
HTTP functions now require authentication by default. See Managing Access via IAM for details.
January 31, 2020
Feature
Cloud Functions now supports VPC Service Controls at the Beta release level . VPC Service Controls is a feature that allows you to set up a secure perimeter to guard against data exfiltration.
Feature
Cloud Functions has added the network settings feature at the Beta release level . Network settings enable you to control network ingress and egress on individual functions.
January 29, 2020
Feature
Cloud Functions is now available in the following region:
europe-west3 (Frankfurt)
See Cloud Functions Locations for details.
January 14, 2020
Feature
Cloud Functions has added support for a new runtime, Go 1.13, in Beta:
The Go Runtime
December 11, 2019
Change
Cloud Functions now supports Serverless VPC Access at the General Availability release level .
November 26, 2019
Change
The ListFunctions API method now handles unreachable locations when the specified location is "-" to list functions across all locations. Previously, if one or more locations were unreachable, the entire ListFunctions request would fail. Now the request will return functions from all reachable locations along with an "unreachable" field containing a list of location names that did not respond successfully. Learn more about working with unreachable resources .
November 12, 2019
Change
Cloud Functions now supports IAM policies to control access to HTTP functions at the General Availability release level .
October 14, 2019
Change
The max instances feature is now at the
General Availability release level :
Controlling Scaling Behavior
Note that when you have set a max instances limit, you may encounter a
scenario where there are insufficient instances to meet incoming traffic
load. Requests that time out due to unavailability of instances send a
429 response .
July 01, 2019
Feature
Cloud Functions is now available in the following region:
us-east4 (Northern Virginia)
See Cloud Functions Locations for details.
June 26, 2019
Feature
Cloud Functions now supports IAM policies to control access to HTTP functions in beta. During beta, functions will be deployed publicly and you can restrict access by setting IAM policies.
June 06, 2019
Deprecated
With the end-of-life of Node 6, the Cloud Functions Local Emulator tool for Google Cloud Functions for Node 6 is no longer being maintained and is marked as deprecated. Use the Functions Framework to run a function locally.
April 19, 2019
Change
Completed rollout of update to the Go Cloud Functions runtime. Go has been updated from version 1.11.5 to 1.11.6. All function deployments should get this version automatically.
April 18, 2019
Deprecated
The Node.js 6 runtime is deprecated as of 2019-04-18. On 2019-04-30, Node.js 6 will reach its end-of-life and will no longer receive updates from the Node.js maintainers. To ensure that your functions are on a supported version of Node.js, migrate them to Node.js 8 or Node.js 10 . After 2020-04-22, function deployments that use Node.js 6 will be blocked. Cloud Functions that continue to use Node.js 6 after this time may be disabled.
For more discussion of Cloud Functions runtime support policy, see Runtime Support .
April 09, 2019
Feature
Cloud Functions now supports Serverless VPC Access , which is available at the Beta release level . This feature enables your functions to connect to internal resources in your VPC network, such as Compute Engine VM instances, Cloud Memorystore for Redis instances, and more.
April 04, 2019
Change
Now when you deploy a function for the first time using the gcloud command-line tool or the API, you must specify your function's runtime explicitly. If you are using gcloud , include the --runtime flag. If you are using the API, set the runtime field when creating a CloudFunction . You do not need to specify the runtime on subsequent function deployments.
April 03, 2019
Feature
Cloud Functions has added support for a new runtime, Node.js 10, in Beta:
The Node.js 10 Runtime
April 01, 2019
Change
Cloud Functions is now available in 2 new regions. See Cloud Functions Locations for details:
europe-west2 (London)
asia-east2 (Hong Kong)
Change
Made the following changes:
The following runtimes are now at the General Availability release level :
Node.js 8 runtime
Python 3.7 runtime
Go 1.11 runtime
March 29, 2019
Change
Completed rollout of update to the Go Cloud Functions runtime. Go has been updated from version 1.11 to 1.11.5. All function deployments should get this version automatically.
March 28, 2019
Feature
The max instances feature is now at Beta Availability release level . This feature allows you to limit the degree to which your function scales up in response to inbound request load.
March 22, 2019
Fixed
Fixed an issue where events would no longer be delivered to a background function if the function hadn't been triggered at least once in the last 30 days. This fix will be automatically applied to any new functions. The fix will be applied to existing functions upon re-deployment.
February 27, 2019
Change
The requests package installed for Python functions was upgraded from 2.19.1 to 2.21.0.
Change
Made the following changes:
The default function calls quota has been raised to 40,000,000 in all regions.
February 20, 2019
Change
Completed rollout of update to the Node.js 6 Cloud Functions runtime. Node.js 6 has been updated from version 6.14.0 to 6.16.0.
February 14, 2019
Fixed
Fixed an issue where functions would, under some circumstances, be triggered multiple times when a single event was delivered. Note that event delivery follows an at least once guarantee , which means that, rarely, event re-delivery can occur.
February 06, 2019
Change
Started rolling out an update of the Node.js 6 runtime to version 6.16.0. Node.js 6 functions deployed after February 4, 2019 may start to receive the updated version.
Change
Completed rollout of update to the Node.js 8 Cloud Functions runtime. Node.js 8 has been updated from version 8.14.0 to 8.15.0.
January 16, 2019
Feature
Cloud Functions has added support for a new runtime, Go, in Beta:
The Go Runtime
January 15, 2019
Change
Started rolling out an update of the Node.js 8 runtime to version 8.15.0. Node.js 8 functions deployed after January 14, 2019 might start to use the updated version.
December 20, 2018
Change
Completed rollout of update to the Node.js 8 Cloud Functions runtime. Node.js 8 has been updated from version 8.11.1 to 8.14.0. The update of Node.js 6 from version 6.14.0 to 6.15.0 has been rolled back. Node.js 6 is still at 6.14.0, and now won't be updated until January 2019.
December 17, 2018
Change
Started a gradual rollout of updates to the Node.js 6 and Node.js 8 Cloud Functions runtimes. Node.js 6 will be updated from version 6.14.0 to 6.15.0. Node.js 8 will be updated from version 8.11.1 to 8.14.0. We will update the status in the release notes when the rollout has completed.
December 04, 2018
Change
The environment variables feature is now at the General Availability release level :
Using Environment Variables
November 06, 2018
Change
The Google Cloud Functions Python runtime has been updated to version 3.7.1.
July 24, 2018
Feature
The Cloud Functions gcloud commands are now at the General Availability release level . The beta label is no longer required (unless you are deploying a function written in Node.js 8 or Python, which are Beta features).
Feature
Support for new runtimes: Node.js 8 and Python, in Beta.
Feature
Cloud Functions is now at the General Availability release level and is recommended for production loads. This release includes:
July 12, 2018
Feature
Launched the environment variables feature to open beta:
Using Environment Variables
June 21, 2018
Feature
Added documentation describing how to connect to Cloud SQL:
Connecting to Cloud SQL
June 20, 2018
Feature
Cloud Functions is now available in the following regions:
us-central1 (Iowa)
us-east1 (South Carolina)
europe-west1 (Belgium)
asia-northeast1 (Tokyo)
See Cloud Functions Locations for details.
June 07, 2018
Deprecated
The v1beta2 version of the Cloud Functions API was part of our Beta launch. New users should use the v1 API, and existing users should migrate to the v1 API.
May 15, 2018
Change
Google Cloud Functions Node.js runtime updated to v6.14.0.
February 09, 2018
Feature
Added documentation describing best practices for testing and deploying Cloud Functions:
Testing and CI/CD
Change
Introduced a set of more powerful, finer-grained trigger types for Cloud Storage and changed the format for Cloud Storage and Cloud Pub/Sub events. For details, see Google Cloud Storage Triggers and Google Cloud Pub/Sub Triggers .
January 05, 2018
Feature
Added documentation describing the Cloud Functions execution environment:
Execution Environment
December 22, 2017
Feature
Added documentation describing best practices for designing, implementing, testing, and deploying Cloud Functions:
Tips & Tricks
November 09, 2017
Change
Google Cloud Functions Node.js runtime updated to v6.11.5.
November 07, 2017
Feature
Added documentation on optimizing networking, which reduces the likelihood that you will run out of DNS or connection quotas:
Optimizing Networking
October 30, 2017
Feature
Added documentation on how to retry background functions:
Retrying Background Functions
October 19, 2017
Feature
Released Google Cloud Functions v1 API: API Reference .
July 17, 2017
Change
Google Cloud Functions Node.js runtime updated to v6.11.1.
May 16, 2017
Feature
Added ImageMagick tutorial:
ImageMagick tutorial
May 09, 2017
Feature
Added Cloud Spanner tutorial:
Using Cloud Spanner with Cloud Functions
March 21, 2017
Feature
Added support page and supported services document:
Support & Community
Supported Services
March 09, 2017
Feature
Beta release of Google Cloud Functions.
Feature
Added new guides:
Events and Triggers
Access Control
Cloud Functions Local Emulator
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
