---
title: "Deploy containers to Cloud Run \_|\_ Migrate to Containers \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/migrate/containers/docs/deploy-run
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/migrate/containers/docs/migrate-vm
source_metadata:
  url: https://docs.cloud.google.com/migrate/containers/docs/deploy-run
  title: "Deploy containers to Cloud Run \_|\_ Migrate to Containers \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Migration
Migrate to Containers
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Deploy containers to Cloud Run
If you use the enhanced Linux service manager that is offered by default to
migrate your container workloads, you can then deploy the container
on Cloud Run without having to make any additional
changes to the container.
Note: The container workload must be stateless to be deployed on Cloud Run.
You cannot deploy a stateful container. See Developing your service
for more information, including the complete list of requirements for
deploying containers on Cloud Run.
To deploy your container on Cloud Run:
Install Migrate to Containers version 1.15.0 .
Add a migration source and
create a migration just as you do
today with the existing runtime.
Customize your migration plan as necessary.
Note: Prior to Migrate to Containers 1.10, use of the enhanced Linux
service manager was disabled by default. If you are using
Migrate to Containers 1.9 or older, you should have v2kServiceManager
set to true in your migration plan ( my-migration.yaml ). If the
enhanced Linux service manager is disabled for you, check your services.yaml
file for comments about services that may not work with your new runtime. If
you would like to include any of the disabled services, contact your support
channel.
Download the migration plan. The migration plan is represented by
AppXGenerateArtifactsFlow .
For example, for a migration named "my-migration":
migctl migration get my-migration
Open the downloaded migration plan, my-migration.yaml , in a text editor.
Verify the enhanced Linux service manager. The v2kServiceManager flag is
set to true by default. However, if Migrate to Containers
detects a system service that is not supported by the service
manager, you will be alerted and the v2kServiceManager flag will be set to false .
When the flag is false the migration will use a legacy runtime which supports your
service.
The following alert is provided alongside the unsupported service:
Service is not supported by v2k service manager, therefore legacy runtime
will be used instead of v2k service manager, and migrated workload would
not fit running on Autopilot clusters of Cloudrun.
When an unsupported service is found, you can also choose to manually set the flag to true .
In this instance, you can either choose to keep the unsupported service on the generated image
where it may not run or you can exclude the service by removing it from the migration plan.
To enable the new service manager, reset the flag to true :
v2kServiceManager : true
Perform any other customizations necessary for your migration as described
in Customize the migration plan .
When your edits are complete, save the edited file.
Upload the edited migration plan:
migctl migration update my-migration --main-config my-migration.yaml
Generate and
review the migration artifacts
just as you do today with the existing runtime.
Edit the new services-config.yaml file to configure the initialization properties
of the container. Save the file and rebuild your container image to apply the changes.
See Using services-config.yaml for more information about
how to edit your services.yaml file.
After you generate the migration artifacts, open the deployment_spec.yaml file
in an editor to determine the location of the container image. For example, you should
see something similar to the following:
spec :
containers :
- image : gcr.io/ PROJECT_NAME / IMAGE_NAME : LABEL
Where gcr.io/ PROJECT_NAME / IMAGE_NAME : LABEL
specifies the location of the container image.
Use the following command to deploy the container on Cloud Run:
gcloud run deploy my-runtime
--image gcr.io/ PROJECT_NAME / IMAGE_NAME : LABEL
--region REGION --platform managed
--set-env-vars=HC_V2K_SERVICE_MANAGER=true --port PORT
The --set-env-vars property sets the HC_V2K_SERVICE_MANAGER environment variable
to true to enable the enhanced Linux service manager.
The --port property specifies the port where requests is sent
to the container. The default port is 8080.
Example: Deploying the Quickstart container on Cloud Run
Use the current Quickstart guide to migrate a
container containing a simple web server and then deploy it on Cloud Run.
The only changes that you have to make to the Quickstart process are:
In Step 3 of Migrating the VM ,
where you review the migration plan, set v2kServiceManager
to true in the migration plan and then save the plan:
v2kServiceManager : true
After the migration completes, open the deployment_spec.yaml file in an editor
to determine the location of the container. For example, you should see something similar to the following:
spec :
containers :
- image : gcr.io/ PROJECT_NAME /quickstart-instance: LABEL
In the Deploying the migrated workload section,
deploy the container image to Cloud Run by using the command:
gcloud run deploy my-runtime
--image gcr.io/ PROJECT_NAME /quickstart-instance: LABEL
--region REGION --platform managed
--set-env-vars=HC_V2K_SERVICE_MANAGER=true --port 80
The web server in the migrated container listens for requests on port 80 so
make sure to specify that port when deploying the container.
You should see the following response, which includes the URL of the Cloud Run service:
Allow unauthenticated invocations to [my-runtime] (y/N)? y
Deploying container to Cloud Run service [my-runtime] in project [ PROJECT_NAME ] region [ REGION ]
Deploying new service... Done.
✓ Creating Revision…
✓ Routing traffic…
Setting IAM Policy…
Done.
Service [my-runtime] revision [my-runtime-00001-sas] has been deployed and is serving 100 percent of traffic.
Service URL : https://my-runtime-s5ahdq-uc.a.run.app
From Cloud Shell, make a request to the container by using its service URL,
passing in your credentials:
curl -H "Authorization: Bearer $(gcloud auth print-identity-token)" https://my-runtime-s5ahdq-uc.a.run.app
You should now see the "Hello World!" page.
What's next
Learn how to use services-config.yaml .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
