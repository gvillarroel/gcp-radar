---
title: "Configure CI/CD to store terraform config-as-code \_|\_ Secure Source Manager\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/secure-source-manager/docs/configure-cicd-terraform-config-as-code
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/secure-source-manager/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/secure-source-manager/docs/configure-cicd-terraform-config-as-code
  title: "Configure CI/CD to store terraform config-as-code \_|\_ Secure Source Manager\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Secure Source Manager
Guides
Send feedback
Configure CI/CD to store terraform config-as-code
Stay organized with collections
Save and categorize content based on your preferences.
This tutorial explains how to manage infrastructure as code with
Terraform
and
Cloud Build
using the popular GitOps methodology. The term GitOps was
first coined by Weaveworks ,
and its key concept is using a Git repository to store the environment
state that you want. Terraform is a
HashiCorp
open source tool that lets you predictably create, change, and improve
your cloud infrastructure by using code. In this tutorial, you use
Cloud Build ,
a Google Cloud continuous integration service, to automatically
apply Terraform manifests to your environment.
This tutorial is for developers and operators who are looking for an elegant
strategy to predictably make changes to infrastructure. The article assumes you
are familiar with Google Cloud, and Linux.
The State of DevOps
reports identified capabilities that drive software delivery performance. This
tutorial will help you with the following capabilities:
Version control
Continuous integration
Continuous delivery
Continuous testing
Architecture
This tutorial applies GitOps practices for managing Terraform executions. Note
that it uses Secure Source Manager branches dev and prod to represent
actual environments. These environments are defined by
Virtual Private Cloud (VPC) networks dev and prod , respectively, within a
Google Cloud project.
The process starts when you push Terraform code to either the dev or prod
branch. In this scenario, Cloud Build triggers and then applies
Terraform manifests to achieve the state you want in the respective environment.
On the other hand, when you push Terraform code to any other branch—for example,
to a feature branch — Cloud Build runs to execute terraform plan , but
nothing is applied to any environment.
Ideally, either developers or operators must make infrastructure proposals to
development or feature branches,
and then submit them through pull requests . This way, you can
discuss and review the potential changes with collaborators and add follow-up
commits before changes are merged into the base branch.
If no concerns are raised, you must first merge the changes to the dev
branch. This merge triggers an infrastructure deployment to the dev
environment, allowing you to test this environment. After you have tested and
are confident about what was deployed, you must merge the dev branch into the
prod branch to trigger the infrastructure installation to the production
environment.
Objectives
Set up your Secure Source Manager instance and repository.
Configure Terraform to store state in a Cloud Storage bucket.
Grant permissions to your Cloud Build service account.
Connect Cloud Build to your Secure Source Manager repository.
Change your environment configuration in a feature branch.
Promote changes to the development environment.
Promote changes to the production environment.
Costs
In this document, you use the following billable components of Google Cloud:
Cloud Build
Cloud Storage
Compute Engine
To generate a cost estimate based on your projected usage,
use the pricing calculator .
New Google Cloud users might be eligible for a free trial .
When you finish the tasks that are described in this document, you can avoid
continued billing by deleting the resources that you created. For more information, see
Clean up .
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
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
In the Google Cloud console, activate Cloud Shell.
Activate Cloud Shell
At the bottom of the Google Cloud console, a
Cloud Shell
session starts and displays a command-line prompt. Cloud Shell is a shell environment
with the Google Cloud CLI
already installed and with values already set for
your current project. It can take a few seconds for the session to initialize.
In Cloud Shell, get the ID of the project you just selected:
gcloud config get-value project
If this command doesn't return the project ID, configure Cloud Shell to
use your project. Replace PROJECT_ID with your project
ID.
gcloud config set project PROJECT_ID
Enable the required APIs:
gcloud services enable cloudbuild.googleapis.com compute.googleapis.com securesourcemanager.googleapis.com
This step might take a few minutes to finish.
If you've never used Git in Cloud Shell, configure it with your
name and email address:
git config --global user.email " YOUR_EMAIL_ADDRESS "
git config --global user.name " YOUR_NAME "
Git uses this information to identify you as the author of the commits that you
create in Cloud Shell.
Set up your Secure Source Manager repository
In this tutorial, you use a single Secure Source Manager repository to define
your cloud infrastructure. You orchestrate this infrastructure by having
different branches corresponding to different environments:
The dev branch contains the latest changes that are applied to the
development environment.
The prod branch contains the latest changes that are applied to the
production environment.
Feature branches similar to feature_x are used to make changes before
pushing to the dev or prod branches.
With this infrastructure, you can always reference the repository to know what
configuration is expected in each environment and to propose new changes by
first merging them into the dev environment. You then promote the changes by
merging the dev branch into the subsequent prod branch.
Create an empty Secure Source Manager repository - don't
initialize the repository.
Add the Secure Source Manager authentication helper to your global
git config by running the following command:
git config --global credential. 'https://*.*.sourcemanager.dev' .helper gcloud.sh
The authentication helper uses the gcloud CLI to fetch your
Google Cloud credentials when using Git commands with
Secure Source Manager.
To re-authenticate after the initial credential setup, run the following
gcloud CLI command:
gcloud auth login
Clone the
solutions-terraform-cloudbuild-gitops
repository to your local shell or working environment:
git clone https://github.com/GoogleCloudPlatform/solutions-terraform-cloudbuild-gitops.git
Add your Secure Source Manager repository as an upstream.
git remote add google HTTPS_REPO_URL
Where HTTPS_REP_URL is the HTTPS URL for your
Secure Source Manager repository. You can find the URL at the top of your
repository page in the Secure Source Manager web interface.
Create and switch to your dev branch.
git checkout dev
Push the cloned repository to your repository with the following command:
git push -u google --all
Repeat the previous two steps for your prod branch.
The code in this repository is structured as follows:
The environments/ folder contains subfolders that represent environments,
such as dev and prod , which provide logical separation between workloads
at different stages of maturity, development and production, respectively.
Although it's a good practice to have these environments as similar as
possible, each subfolder has its own Terraform configuration to ensure they
can have unique settings as necessary.
The modules/ folder contains inline Terraform modules. These modules
represent logical groupings of related resources and are used to share code
across different environments.
The cloudbuild.yaml file is a build configuration file that contains
instructions for Cloud Build, such as how to perform tasks based
on a set of steps. This file specifies a conditional execution depending on
the branch Cloud Build is fetching the code from, for example:
For dev and prod branches, the following steps are executed:
terraform init
terraform plan
terraform apply
For any other branch, the following steps are executed:
terraform init for all environments subfolders
terraform plan for all environments subfolders
To ensure that the changes being proposed are appropriate for every environment,
terraform init and terraform plan are run for all environments
subfolders. Before merging the pull request, you can review the plans
to make sure that access isn't being granted to an unauthorized entity, for
example.
Modify the build configuration file
To make the sample build configuration file work with Secure Source Manager,
you need to make the following edits:
Add a step to clone your repository.
Add a step to get the branch name and assign it to a variable.
Edit the build configuration file in the dev branch:
Change to the dev branch:
git checkout dev
Open the cloudbuild.yaml file and replace the contents with the following:
# Copyright 2019 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# https://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
steps :
- id : 'clone repository'
name : ' gcr.io /cloud-builders/git'
args :
- clone
- '$ { _REPO_URL } '
- .
- id : 'branch name'
name : gcr.io /cloud-builders/git
entrypoint : 'sh'
args :
- '-c'
- |
branch = $ ( basename "$_REF" )
git checkout $ { branch }
echo "***********************"
git branch --show-current
echo "***********************"
- id : 'tf init'
name : 'hashicorp/terraform : 1.0.0 '
entrypoint : 'sh'
args :
- '-c'
- |
branch = $ ( basename "$_REF" )
if [ -d "environments/${branch}/" ] ; then
cd environments/$ { branch }
terraform init
else
for dir in environments /*/
do
cd ${dir}
env=${dir%*/ }
env = $ { env #*/}
echo ""
echo "*************** TERRAFORM INIT ******************"
echo "******* At environment: ${env} ********"
echo "*************************************************"
terraform init || exit 1
cd .. / .. /
done
fi
- id : 'tf plan'
name : 'hashicorp/terraform : 1.0.0 '
entrypoint : 'sh'
args :
- '-c'
- |
branch = $ ( basename "$_REF" )
if [ -d "environments/${branch}/" ] ; then
cd environments/$ { branch }
terraform plan
else
for dir in environments /*/
do
cd ${dir}
env=${dir%*/ }
env = $ { env #*/}
echo ""
echo "*************** TERRAFOM PLAN ******************"
echo "******* At environment: ${env} ********"
echo "*************************************************"
terraform plan || exit 1
cd .. / .. /
done
fi
- id : 'tf apply'
name : 'hashicorp/terraform : 1.0.0 '
entrypoint : 'sh'
args :
- '-c'
- |
branch = $ ( basename "$_REF" )
if [ -d "environments/${branch}/" ] ; then
cd environments/$ { branch }
terraform apply -auto-approve
else
echo "***************************** SKIPPING APPLYING *******************************"
echo "Branch '${branch}' does not represent an official environment."
echo "*******************************************************************************"
fi
Check that the file is modified.
git status
Commit and push your changes:
git add --all
git commit -m "Modify build config file."
git push google dev
Open a pull request to quickly promote your changes to the prod branch.
In the Secure Source Manager web interface, navigate to your repository.
Click the Pull requests tab.
Click New pull request .
In the merge into: field, select the prod branch.
In the pull from: field, select the dev branch.
Review the changes, then click New pull request .
Click Create pull request .
Click Merge pull request .
Click Merge pull request again.
The changes are merged into your prod branch.
Configuring Terraform to store state in a Cloud Storage bucket
By default, Terraform stores
state
locally in a file named terraform.tfstate . This default configuration can
make Terraform usage difficult for teams, especially when many users run
Terraform at the same time and each machine has its own understanding of the
current infrastructure.
To help you avoid such issues, this section configures a
remote state
that points to a Cloud Storage bucket. Remote state is a feature of
backends
and, in this tutorial, is configured in the backend.tf files—for example:
# Copyright 2019 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# https://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
terraform {
backend "gcs" {
bucket = "PROJECT_ID-tfstate"
prefix = "env/dev"
}
}
In the following steps, you create a Cloud Storage bucket and change a
few files to point to your new bucket and your Google Cloud project.
In Cloud Shell, create the Cloud Storage bucket:
PROJECT_ID = $( gcloud config get-value project )
gcloud storage buckets create gs:// ${ PROJECT_ID } -tfstate
Enable
Object Versioning
to keep the history of your deployments:
gcloud storage buckets update gs:// ${ PROJECT_ID } -tfstate --versioning
Enabling Object Versioning increases
storage costs ,
which you can mitigate by configuring
Object Lifecycle Management
to delete earlier state versions.
Create a new cloud-storage-bucket branch to make your changes in:
cd ~/solutions-terraform-cloudbuild-gitops
git checkout -b cloud-storage-bucket
Replace the PROJECT_ID placeholder with the project
ID in both the terraform.tfvars and backend.tf files:
sed -i s/PROJECT_ID/$PROJECT_ID/g environments/*/terraform.tfvars
sed -i s/PROJECT_ID/$PROJECT_ID/g environments/*/backend.tf
On OS X or macOS, you might need to add two quotation marks ( "" ) after
sed -i , as follows:
sed -i "" s/PROJECT_ID/$PROJECT_ID/g environments/*/terraform.tfvars
sed -i "" s/PROJECT_ID/$PROJECT_ID/g environments/*/backend.tf
Check whether all files were updated:
git status
The output looks like this:
On branch cloud-storage-bucket
Changes not staged for commit:
(use "git add ..." to update what will be committed)
(use "git restore ..." to discard changes in working directory)
modified: environments/dev/backend.tf
modified: environments/dev/terraform.tfvars
modified: environments/prod/backend.tf
modified: environments/prod/terraform.tfvars
no changes added to commit (use "git add" and/or "git commit -a")
Commit and push your changes:
git add --all
git commit -m "Update project IDs and buckets"
git push google -u cloud-storage-bucket
Your new cloud-storage-bucket branch is pushed to your repository.
Merge your cloud-storage-bucket changes into your dev and prod
branches by opening and submitting merge requests for each branch.
Grant permissions to your Cloud Build service account
To allow
Cloud Build service account
to run Terraform scripts with the goal of managing Google Cloud resources,
you need to grant it appropriate access to your project. For simplicity,
project editor
access is granted in this tutorial. For production environments, follow your
company's IT security best practices, usually by providing
least-privileged access .
Note: The Cloud Build default service account used to run builds is being
changed. As a best practice, we recommend that you
specify your own service account to run your builds. For more
information, see Cloud Build service account change .
To find the Cloud Build service account email, from the
Cloud Build page, navigate to Settings .
Go to Cloud Build settings
Copy the value of the Service account email .
Grant the required access to your Cloud Build service account:
gcloud projects add-iam-policy-binding PROJECT_ID \
--member serviceAccount: CLOUDBUILD_SA --role roles/editor
Replace the following:
PROJECT_ID with your project ID.
CLOUDBUILD_SA with the Cloud Build service account email.
Connect to Cloud Build
To trigger Cloud Build on a push to any branch, set up
a Secure Source Manager webhook. The build configuration file will check the
the branch name to determine if changes need to be made to the dev or prod
environments.
Enable and set up Cloud Build
in your project.
Open the Triggers page in the Google Cloud console.
Open the Triggers page
Select your project from the project selector drop-down menu at the top of
the page.
Click Open .
Click Create trigger .
Enter the following trigger settings:
Name : trigger-on-push
Region : select the
region
for your trigger. If the build configuration file associated with your trigger
specifies a
private pool ,
the region you select for your trigger must match the region of the
private pool.
Note: If using a private pool, you must assign external IPs to allow your
private pool to access the public internet. For more details, see
Creating a new private pool .
If you select global as your region, Cloud Build uses
the region specified in your build configuration file to run your build. This
can either be the region of the private pool, if you specify a private
pool in your build configuration file, or the global default pool if you don't
specify a private pool.
Description (optional): Enter a description for your trigger.
Event : Select Webhook event as the repository event to invoke
the trigger.
If Secret Manager is not installed, you are prompted to
enable the Secret Manager.
Webhook URL : select one of the following:
Use a new secret if you want to generate a new secret using
Cloud Build. Click Create secret to create your secret.
Use an existing secret or create your own if you want to use an
existing secret. Enter the secret and version in the drop down
selection boxes.
If you use an existing secret, you might need to manually grant the
Secret Manager Secret Accessor role to the
Cloud Build service agent
service- PROJECT_NUMBER @gcp-sa-cloudbuild.iam.gserviceaccount.com .
To learn more, see
Granting a role to the Cloud Build service agent .
Click Show URL preview and record the URL. You need this URL to set up
the webhook in Secure Source Manager.
Configuration : for Type select
Cloud Build configuration file (YAML or JSON) and for
Location , select Inline .
Click the Open Editor button to edit your build configuration file.
Copy the contents of your cloudbuild.yaml file into the editor.
As discussed previously, this pipeline has different
behaviors depending on the branch being fetched. The build checks whether the
${branch} variable matches any environment folder. If so,
Cloud Build executes terraform plan for that environment.
Otherwise, Cloud Build executes terraform plan for all environments
to make sure that the proposed change is appropriate for all of them. If any of
these plans fail to execute, the build fails.
- id : 'tf plan'
name : 'hashicorp/terraform : 1.0.0 '
entrypoint : 'sh'
args :
- '-c'
- |
branch = $ ( basename "$_REF" )
if [ -d "environments/${branch}/" ] ; then
cd environments/$ { branch }
terraform plan
else
for dir in environments /*/
do
cd ${dir}
env=${dir%*/ }
env = $ { env #*/}
echo ""
echo "*************** TERRAFOM PLAN ******************"
echo "******* At environment: ${env} ********"
echo "*************************************************"
terraform plan || exit 1
cd .. / .. /
done
fi
The terraform apply command runs for environment branches, but it
is completely ignored in any other case.
Click + Add variable and add the following two substitution variables:
Variable : _REPO_URL , Value : $(body.repository.clone_url)
Variable : _REF , Value : $(body.ref)
Click Create .
Set up a webhook in Secure Source Manager
Create a webhook to trigger builds on pushes to your dev or prod branches.
In the Secure Source Manager web interface, navigate to the repository you want
to create a webhook for.
Click Settings .
Click Webhooks , and then click Add webhook .
In the Hook ID field, enter an ID for the webhook.
Note: Hook IDs must follow the
resource naming convention .
They must include only lower case letters, numbers, or dashes, must
begin with a letter, and cannot be changed after creating the webhook.
In the Target URL field, enter the Webhook URL you copied when you
set up a webhook trigger in
Cloud Build.
To find the Webhook URL:
Open the Triggers page in the Google Cloud console.
Open the Triggers page
Click your trigger.
In the Webhook URL section, click Show URL preview and copy
URL.
The Webhook URL contains your key and secret values entered when you
created your Cloud Build trigger. To prevent leaking these values,
remove them from the end of the target URL and copy to the
Sensitive Query String field.
To locate your key and secret in your webhook URL, look for the text
starting with key=
For example, given the following URL:
https://cloudbuild.googleapis.com/v1/projects/my-project/triggers/test-trigger:webhook?key=eitIfKhYnv0LrkdsyHqIros8fbsheKRIslfsdngf&secret=Hello%20Secret%20Manager
Copy and remove the portion starting with the question mark
?key=... from the Target URL field. Then remove the initial question
mark, move the remaining portion key=... to the Sensitive Query String
field.
Click Add webhook .
The webhook is displayed in the Webhooks page.
Note: When you add or edit a webhook, the length of the
Sensitive Query String might be inconsistent with the entered one, which
is expected as placeholder strings are used to ensure security.
Change your environment configuration in a new feature branch
Make sure you are in the dev branch:
cd ~/solutions-terraform-cloudbuild-gitops
git checkout dev
Pull the latest changes:
git pull
Create a bug-fix branch to change the environment configuration.
git checkout -b bug-fix
Open modules/firewall/main.tf to edit.
On line 30, fix the "http-server2" typo in target_tags field.
The value must be "http-server" .
Commit and push your changes:
git add --all
git commit -m "Fix typo."
git push google -u bug-fix
Open the Cloud Build History page in the Google Cloud console:
Open the History page
Click the Build to see more information, including the output of the
terraform plan .
Note that the Cloud Build job ran the pipeline defined in the
cloudbuild.yaml file. As discussed previously, this pipeline has different
behaviors depending on the branch being fetched. The build checks whether the
${branch} variable matches any environment folder. If so,
Cloud Build executes terraform plan for that environment.
Otherwise, Cloud Build executes terraform plan for all environments
to make sure that the proposed change is appropriate for all of them. If any of
these plans fail to execute, the build fails.
- id : 'tf plan'
name : 'hashicorp/terraform : 1.0.0 '
entrypoint : 'sh'
args :
- '-c'
- |
branch = $ ( basename "$_REF" )
if [ -d "environments/${branch}/" ] ; then
cd environments/$ { branch }
terraform plan
else
for dir in environments /*/
do
cd ${dir}
env=${dir%*/ }
env = $ { env #*/}
echo ""
echo "*************** TERRAFOM PLAN ******************"
echo "******* At environment: ${env} ********"
echo "*************************************************"
terraform plan || exit 1
cd .. / .. /
done
fi
Similarly, the terraform apply command runs for environment branches, but it
is completely ignored in any other case. In this section, you have submitted a
code change to a new branch, so no infrastructure deployments were applied to
your Google Cloud project.
- id: 'tf apply'
name: 'hashicorp/terraform:1.0.0'
entrypoint: 'sh'
args:
- '-c'
- |
branch=$(basename "$_REF")
if [ -d "environments/${branch}/" ]; then
cd environments/${branch}
terraform apply -auto-approve
else
echo "***************************** SKIPPING APPLYING *******************************"
echo "Branch '${branch}' does not represent an official environment."
echo "*******************************************************************************"
fi
Promoting changes to the development environment
It's time to apply the state you want to your dev environment.
In the Secure Source Manager web interface, navigate to your repository.
Click the New pull request
In the merge into: field, select your dev branch.
In the pull from: field, select your bug-fix branch.
Click New pull request .
Click Create pull request .
Click Merge pull request , and then click Merge pull request again.
Check that a new Cloud Build has been triggered:
Go to the Cloud Build page
Open the build and check the logs.
When the build finishes, you see something like this:
Step #3 - "tf apply": external_ip = EXTERNAL_IP_VALUE
Step #3 - "tf apply": firewall_rule = dev-allow-http
Step #3 - "tf apply": instance_name = dev-apache2-instance
Step #3 - "tf apply": network = dev
Step #3 - "tf apply": subnet = dev-subnet-01
Copy EXTERNAL_IP_VALUE and open the address in a web
browser.
http:// EXTERNAL_IP_VALUE
This provisioning might take a few seconds to boot the VM and to propagate
the firewall rule. Eventually, you see Environment: dev in the
web browser.
Navigate to Cloud Storage:
Go to the Cloud Storage page
Select your project.
Click your Terraform state storage bucket. The bucket name looks like
the following:
PROJECT_ID -tfstate
Click env , and then dev to view your Terraform state file.
Promoting changes to the production environment
Now that you have your development environment fully tested, you can promote
your infrastructure code to production.
In the Secure Source Manager web interface, navigate to your repository.
Click the Pull requests tab.
Click New pull request .
For the merge into: , select your repository prod branch.
For pull from: , select your repository dev branch.
Click New pull request .
For title , enter a title such as "Promoting networking changes", and
then click Create pull request .
Review the proposed changes, and then click Merge pull request .
The date and repository URL are added in the comment field.
Click Merge pull request again to confirm.
In the Google Cloud console, open the Build History page to see
your changes being applied to the production environment:
Go to the Cloud Build page
Wait for the build to finish, and then check the logs.
At the end of the logs, you see something like this:
Step #3 - "tf apply": external_ip = EXTERNAL_IP_VALUE
Step #3 - "tf apply": firewall_rule = prod-allow-http
Step #3 - "tf apply": instance_name = prod-apache2-instance
Step #3 - "tf apply": network = prod
Step #3 - "tf apply": subnet = prod-subnet-01
Copy EXTERNAL_IP_VALUE and open the address in a web
browser.
http:// EXTERNAL_IP_VALUE
This provisioning might take a few seconds to boot the VM and to propagate
the firewall rule. Eventually, you see Environment: prod in the
web browser.
Navigate to Cloud Storage:
Go to the Cloud Storage page
Select your project.
Click your Terraform state storage bucket. The bucket name looks like
the following:
PROJECT_ID -tfstate
Click env , and then prod to view your Terraform state file.
You have successfully configured a serverless infrastructure-as-code pipeline on
Cloud Build. In the future, you might want to try the following:
Add deployments for separate use cases.
Create additional environments to reflect your needs.
Use a project per environment instead of a VPC per environment.
Clean up
After you've finished the tutorial, clean up the resources you created on
Google Cloud so you won't be billed for them in the future.
Deleting the project
Caution : Deleting a project has the following effects:
Everything in the project is deleted. If you used an existing project for
the tasks in this document, when you delete it, you also delete any other work you've
done in the project.
Custom project IDs are lost.
When you created this project, you might have created a custom project ID that you want to use in
the future. To preserve the URLs that use the project ID, such as an appspot.com
URL, delete selected resources inside the project instead of deleting the whole project.
If you plan to explore multiple architectures, tutorials, or quickstarts, reusing projects
can help you avoid exceeding project quota limits.
In the Google Cloud console, go to the Manage resources page.
Go to Manage resources
In the project list, select the project that you
want to delete, and then click Delete .
In the dialog, type the project ID, and then click
Shut down to delete the project.
What's next
Consider using
Cloud Cloud Foundation Toolkit templates
to quickly build a repeatable enterprise-ready foundation in
Google Cloud.
Watch
Repeatable Google Cloud Environments at Scale With Cloud Build Infra-As-Code Pipelines
from Next' 19 about the GitOps workflow described in this tutorial.
Check out the
GitOps-style continuous delivery with Cloud Build
tutorial.
Take a look at more advanced Cloud Build features:
Configuring the order of build steps ,
Building, testing, and deploying artifacts ,
and
Creating custom build steps .
Check out the blog on Ensuring scale and compliance of your Terraform Deployment with Cloud Build .
Read our resources about
DevOps .
Learn more about the DevOps capabilities related to this tutorial:
Version control
Continuous integration
Continuous delivery
Continuous testing
Take the
DevOps quick check
to understand where you stand in comparison with the rest of the industry.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
