---
title: "Import components \_|\_ Application Design Center \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/application-design-center/docs/import-components
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/application-design-center/docs
source_metadata:
  url: https://docs.cloud.google.com/application-design-center/docs/import-components
  title: "Import components \_|\_ Application Design Center \_|\_ Google Cloud Documentation"
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
Import components
Stay organized with collections
Save and categorize content based on your preferences.
Application Design Center supports several Google Cloud products
that you can add as components to your application. To use your own version of
these components, or add other components, import your Terraform modules to
App Design Center.
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Terraform modules are reusable configurations for Google Cloud products.
Importing Terraform modules helps you do the following:
Accelerate and govern application development.
Reuse your existing design decisions in App Design Center.
Help application developers adhere to your established design policies.
When you import a Terraform module, App Design Center creates
a corresponding component template in your space's catalog. You can then use the
template as a component in your application template design.
To learn about Terraform on Google Cloud, see the following:
Terraform overview .
Best practices for general style and structure .
Best practices for reusable modules .
Before you begin
Ask your administrator to grant you one of the following roles on the app-enabled folder or management project:
Application Design Center Admin ( roles/designcenter.admin ).
Application Design Center User ( roles/designcenter.user ).
Configure and import your modules
Complete the following steps to connect to GitHub, create a metadata file, and
import a Terraform module.
Connect to your repository using Developer Connect
Create a Developer Connect connection to the GitHub repository
where you store your Google Cloud Terraform modules. You'll use this
connection when you import.
Create a Developer Connect connection.
For steps, see Connect to GitHub .
Create a Developer Connect repository link.
For steps, see Add repository links to existing connections .
Optional: Prepare your Terraform module metadata
When you import your Terraform module, you can supply your own metadata, or let
App Design Center create a metadata file for you.
For example, the following is a metadata.yaml file that you might create for a
service account:
spec :
info :
actuationTool :
flavor : Terraform
version : ">= 1.3"
interfaces : # Optional
variables :
- name : service_account
connections :
- source :
source : github.com/terraform-google/terraform-google-service-accounts
version : ">= 4.4"
spec :
outputExpr : email
requirements :
roles : # Optional after IAM integrations
- level : Project
roles :
- roles/iam.serviceAccountUser
- roles/iap.admin
- roles/run.admin
- roles/iam.serviceAccountAdmin
providerVersions :
- source : hashicorp/google
version : ">= 6, < 7"
- source : hashicorp/google-beta
version : ">= 6, < 7"
ui : # Optional
input :
variables :
ca_root_module :
name : ca_root_module
title : Ca Root Module
service_account :
name : service_account
title : Service Account
Import from your repository
You can create an App Design Center component by importing a
Terraform module that is based on a single Google Cloud product. If you
make changes to your Terraform module in your repository, repeat these steps to
import your changes.
To import your Terraform module, do the following:
Identify the catalog where you want to create your component.
gcloud design-center spaces catalogs list \
--project = PROJECT \
--location = LOCATION \
--space = SPACE
Replace the following:
PROJECT : Your management project ID.
LOCATION : Your location ID.
SPACE : Your space ID.
For more information, see gcloud design-center spaces catalogs list .
Create a catalog template in your space's private catalog.
gcloud design-center spaces catalogs templates create COMPONENT_TEMPLATE \
--project = PROJECT \
--catalog = CATALOG \
--location = LOCATION \
--space = SPACE \
--template-category = component-template
Replace the following:
COMPONENT_TEMPLATE : The template ID for the component
template that you want to create.
PROJECT : Your management project ID.
CATALOG : Your catalog ID.
LOCATION : Your location ID.
SPACE : Your space ID.
For more information, see gcloud design-center spaces catalogs templates create .
Create a catalog template revision based on the Terraform module in your
repository.
gcloud design-center spaces catalogs templates revisions create REVISION \
--project = PROJECT \
--catalog = CATALOG \
--location = LOCATION \
--space = SPACE \
--template = COMPONENT_TEMPLATE \
--developer-connect-repo = DEVELOPER_CONNECT_REPO \
--developer-connect-repo-ref = DEVELOPER_CONNECT_REPO_REF \
--developer-connect-repo-dir = DEVELOPER_CONNECT_REPO_DIR \
--metadata = METADATA
Replace the following:
REVISION : The revision ID for the revision that
you want to create.
PROJECT : Your management project ID.
CATALOG : Your catalog ID.
LOCATION : Your location ID.
SPACE : Your space ID.
COMPONENT_TEMPLATE : The template ID that you created in the
previous step.
DEVELOPER_CONNECT_REPO : The Developer Connect
repository to use as a source. For example, projects/my-project/locations/us-central1/connections/my-connection/gitRepositoryLinks/my-repo .
DEVELOPER_CONNECT_REPO_REF : The Git branch or tag
in the repository. For example, refs/tags/v1.0.0 or refs/heads/main .
DEVELOPER_CONNECT_REPO_DIR : The directory in the
repository. For example, modules/my-product .
To specify the Terraform module metadata, do one of the following:
To use your own metadata file ,
replace METADATA with your metadata.yaml file.
To automatically use metadata files located in your repository, leave
the --metadata flag unspecified.
For more information, see gcloud design-center spaces catalogs templates revisions create .
Share your catalog with other spaces.
gcloud design-center spaces catalogs shares create SHARE \
--project = PROJECT \
--catalog = CATALOG \
--location = LOCATION \
--space = SPACE \
--destination-space = DESTINATION_SPACE
Replace the following:
SHARE : The share ID for the share that
you want to create.
PROJECT : Your management project ID.
CATALOG : Your catalog ID.
LOCATION : Your location ID.
SPACE : Your space ID.
DESTINATION_SPACE : The destination space ID.
For more information, see gcloud design-center spaces catalogs shares create .
Create an application template using imported components
Create an application template using your imported components and
Google-provided components.
Create a new application template.
gcloud design-center spaces application-templates create APPLICATION_TEMPLATE \
--project = PROJECT \
--location = LOCATION \
--space = SPACE
Replace the following:
APPLICATION_TEMPLATE : The template ID for the application
template that you want to create.
PROJECT : Your management project ID.
LOCATION : Your location ID.
SPACE : Your space ID.
For more information, see gcloud design-center spaces application-templates create .
Identify the template revision URIs for the components that you want to add
to the template.
gcloud design-center spaces shared-templates list \
--project = PROJECT \
--location = LOCATION \
--space = SPACE \
--uri
Replace the following:
PROJECT : Your management project ID.
LOCATION : Your location ID.
SPACE : Your space ID.
For more information, see gcloud design-center spaces shared-templates list .
Add a component to your application template.
gcloud design-center spaces application-templates components create COMPONENT \
--project = PROJECT \
--location = LOCATION \
--space = SPACE \
--application-template = APPLICATION_TEMPLATE \
--shared-template-revision-uri = SHARED_TEMPLATE_URI
Replace the following:
COMPONENT : The component ID for the component that
you want to add to the template.
PROJECT : Your management project ID.
LOCATION : Your location ID.
SPACE : Your space ID.
APPLICATION_TEMPLATE : The template ID for the
application template where you're adding the component.
SHARED_TEMPLATE_URI : The component shared template
URI. For example, projects/my-project/locations/us-central1/spaces/my-space/sharedTemplates/my-shared-template/revisions/rev1 .
For more information, see gcloud design-center spaces application-templates components create .
Add a second component to your template.
gcloud design-center spaces application-templates components create COMPONENT_2 \
--project = PROJECT \
--location = LOCATION \
--space = SPACE \
--application-template = APPLICATION_TEMPLATE \
--shared-template-revision-uri = SHARED_TEMPLATE_URI_2
Replace the following:
COMPONENT_2 : The component ID for the second
component that you want to add to the template.
PROJECT : Your management project ID.
LOCATION : Your location ID.
SPACE : Your space ID.
APPLICATION_TEMPLATE : The template ID for the
application template where you're adding the component.
SHARED_TEMPLATE_URI_2 : The second component shared
template URI. For example, projects/my-project/locations/us-central1/spaces/my-space/sharedTemplates/my-shared-template/revisions/rev1 .
For more information, see gcloud design-center spaces application-templates components create .
Create a connection between the two components.
gcloud design-center spaces application-templates components connections create CONNECTION \
--project = PROJECT \
--location = LOCATION \
--space = SPACE \
--application-template = APPLICATION_TEMPLATE \
--component = COMPONENT \
--destination-component-uri = SHARED_TEMPLATE_URI_2
Replace the following:
CONNECTION : The connection ID for the connection
that you want to add to the template.
PROJECT : Your management project ID.
LOCATION : Your location ID.
SPACE : Your space ID.
APPLICATION_TEMPLATE : The template ID for the
application template where you're adding the component.
SHARED_TEMPLATE_URI_2 : The second component shared
template URI. For example, projects/my-project/locations/us-central1/spaces/my-space/sharedTemplates/my-shared-template/revisions/rev1 .
For more information, see gcloud design-center spaces application-templates components connections create .
What's next
Before you deploy, create an application .
Deploy applications .
Export your Terraform code.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
