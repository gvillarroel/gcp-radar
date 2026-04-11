---
title: "Terraform and Infrastructure Manager \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/infrastructure-manager/docs/terraform
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/infrastructure-manager/docs
source_metadata:
  url: https://docs.cloud.google.com/infrastructure-manager/docs/terraform
  title: "Terraform and Infrastructure Manager \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Infrastructure as code
Infrastructure Manager
Guides
Send feedback
Terraform and Infrastructure Manager
Stay organized with collections
Save and categorize content based on your preferences.
To work with Infrastructure Manager (Infra Manager), you should be
familiar with Terraform. To learn more about
Terraform, start with
What is Terraform? .
Infra Manager deploys infrastructure resources and configurations that are
defined in a Terraform configuration. These configurations can consist
of multiple files and directories but their entrypoint must be a
Terraform root module .
Infra Manager uses the term blueprint to refer to a
Terraform configuration.
To learn more about Terraform with Google Cloud, see
Terraform on Google Cloud .
Terraform modules for Google Cloud
For a set of modules to provision Google Cloud resources, see
Terraform blueprints and modules for Google Cloud .
You can also create your own Terraform modules for Google Cloud. For more
details, see
Creating Modules .
Supported Terraform versions
Infra Manager supports the following Terraform versions:
Terraform version
Date available
Deprecation date
End of support date
Auto-migrate to version
1.2.3
8/21/2023
1/8/2026
2/8/2026
1.5.7
1.3.10
3/14/2024
TBD
TBD
TBD
1.4.7
3/14/2024
TBD
TBD
TBD
1.5.7
3/14/2024
TBD
TBD
TBD
You can use the flag --tf-version-constraint to specify the version of
Terraform that Infra Manager uses to
create a deployment .
If you don't specify a version of Terraform, the latest support version
is used by default.
When updating a deployment, you can change the Terraform version to
a later version of Terraform. You cannot change to an earlier supported
version of Terraform. For information about Terraform version deprecation, see
Terraform version management policy
documentation.
To view the version of Terraform that was used to create a specific
deployment or revision, see
View details of a deployment
and
View details of a revision .
Constraints on Terraform configurations
To use Infrastructure Manager to deploy a Terraform configuration, the configuration
has the following constraints.
Don't include personal or sensitive information in Terraform configuration
values. For more information, see the following section
Terraform configuration values and sensitive data .
A valid
Terraform root module
must be provided. Templating or generation of Terraform is not supported.
The configuration should be actuatable by a
supported version of Terraform .
Backend blocks
shouldn't be defined.
The use of provisioners
are not recommended. Use a different solution if possible. See
Provisioners are a Last Resort
for more details about provisioners. If you are using provisioners, note
that the
Infra Manager runtime environment
can change at any time.
Terraform configuration values and sensitive data
Don't include personal or sensitive information in Terraform configuration
values.
The documentation for the Google Cloud provider indicates configuration values that can potentially include
sensitive information.
For example, the resource google_storage_bucket_object allows
creation of a Cloud Storage object using the content argument. This
argument is labeled as sensitive on the
google_storage_bucket_object page of the Google Cloud Provider documentation .
You can use these labels to help guide you as you create Terraform
configurations or as you review an existing Terraform configuration before use.
See the Google Cloud Privacy Notice for
information on how Google Cloud processes personal information it collects
or generates during the provision and administration of the Cloud Services.
Use the Terraform provider for Google Cloud
You can configure deployments and previews to use Infra Manager
maintained Terraform providers for Google Cloud.
This optional field lets you specify the use of the Infra Manager maintained Terraform
providers to create or update a deployment or preview deployment.
You can specify a Terraform provider using gcloud CLI.
Infra Manager supports Terraform providers for Google Cloud:
google
google-beta
Omit this field to use the HashiCorp-maintained Terraform provider for Google Cloud .
To learn how to specify the use of a Infra Manager maintained Terraform provider,
see Deploy infrastructure using Infrastructure Manager ,
Update a deployment , or
Preview a deployment .
Check supported versions of the provider
To check the versions of a Terraform provider for Google Cloud that
Infra Manager supports, you'll need to view the
manifest.json in the Infra Manager maintained Cloud Storage bucket
associated with the region of your deployment in the format:
https://storage.googleapis.com/ LOCATION -im-providers/hashicorp/ PROVIDER_VERSION /manifest.json
You can find a complete list of supported
versions within the versions field of the manifest.json file.
For example, if your deployment is located in the africa-south1 region and
you are using the google-beta provider, navigate to
https://storage.googleapis.com/africa-south1-im-providers/hashicorp/google-beta/manifest.json
to view available regions.
What's next
Learn more about Infrastructure Manager .
Create a deployment .
Update a deployment .
View the state of a deployment .
Delete a deployment .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
