---
title: "Runtimes and runtime templates \_|\_ Colab Enterprise \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/colab/docs/runtimes
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/colab/docs
source_metadata:
  url: https://docs.cloud.google.com/colab/docs/runtimes
  title: "Runtimes and runtime templates \_|\_ Colab Enterprise \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Colab Enterprise
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Runtimes and runtime templates
This page describes runtimes and runtime templates for Colab Enterprise.
A runtime is a Google-provisioned virtual machine (VM) that can run the code
in your notebook (IPYNB file).
A runtime template is a VM configuration that specifies a machine type and
other characteristics of the VM, as well as common settings such as
the network and whether public internet access is enabled.
When you create a runtime, its VM is created according to the specifications
of a runtime template.
Workflow
You can create a Colab Enterprise notebook and run code in it without
needing to understand runtimes. When you run your code for the first time,
Colab Enterprise provisions a default runtime and runs your code on it.
Colab Enterprise continues to use the default runtime until you
connect to a different runtime.
To configure a runtime for specific needs, you must:
Create a runtime template with the configuration that you need.
Create a runtime based on that template.
Connect to the runtime from your notebook and run your code.
Runtimes
This section describes the characteristics of runtimes.
Default runtime
If you don't create a runtime, a runtime without accelerators is created
for you the first time that you run code or connect to the default runtime.
You can use the default runtime without accelerators, or switch to
a default runtime that includes accelerators.
When Colab Enterprise creates a default runtime, it first creates
a corresponding default runtime template. Both the runtime and
runtime template appear in the Google Cloud console, where you can get
information about them.
Note: The Colab Enterprise User role
( roles/aiplatform.colabEnterpriseUser )
doesn't include a required permission for creating a default runtime
template ( aiplatform.notebookRuntimeTemplates.create ).
This means that to create a default runtime, if there is no existing
default runtime template, users with the Colab Enterprise User role
must also have a role that includes the
aiplatform.notebookRuntimeTemplates.create permission.
If you use default runtimes without accelerators, Colab Enterprise
creates one default runtime without accelerators and its
corresponding runtime template, per project, per region.
If you use default runtimes with accelerators, Colab Enterprise
creates one default runtime with accelerators and its
corresponding runtime template, per project, per region.
Default runtime specifications
Default runtimes and their corresponding default runtime templates include
the following specifications:
Specification
Default
Default with GPU
Python version
Latest available (currently Python 3.12)
Latest available (currently Python 3.12)
Machine type
e2-standard-4
Depends on regional availability. See
Specifications .
Accelerator
None
Depends on regional availability. See
Specifications .
Boot disk
100 GiB SSD persistent disk ( pd-ssd )
100 GiB SSD persistent disk ( pd-ssd )
Data disk
100 GiB standard persistent disk ( pd-standard )
Depends on regional availability. See
Specifications .
Idle shutdown
Enabled, set to 180 minutes
Enabled, set to 180 minutes
Network
Your project's default Virtual Private Cloud network
Your project's default Virtual Private Cloud network
Public internet access
Enabled
Enabled
End user credential authentication
Enabled
Enabled
Auto deletion
Automatic deletion 18 hours after creation
Automatic deletion 18 hours after creation
Note: When your runtime is deleted, Colab Enterprise doesn't
preserve changes that you've made to your runtime's files. Also, any
files that you've uploaded to your runtime are deleted.
Python versions
Starting in May, 2025, when Colab Enterprise creates
a default runtime template, the default runtime template is configured to use
the latest version of Python (currently Python 3.12).
This means that when a new version of Python is available in
Colab Enterprise, new runtimes created from the default runtime template
will use the latest Python version.
If your default runtime templates were created in May 2025 or earlier,
they might be configured to use Python 3.10. To update a
default runtime template to use the latest Python version, you must delete
the default runtime template. Then, when a new default runtime template is
created, it will be configured to use the latest Python version.
To update the Python version of a runtime template that you created, see
Change a runtime template's Python version .
The Python version of existing runtimes doesn't automatically change,
even when a new Python version is available in Colab Enterprise.
Changing the Python version of an existing runtime isn't supported.
Instead, you must create a new runtime derived from a runtime template that
uses the Python version that you want.
Change a runtime template's Python version
To change a runtime template's Python version, you can use the Google Cloud console or
the REST API.
Console
To edit a runtime template, do the following:
In the Google Cloud console, go to
the Colab Enterprise Runtime templates page.
Go to Runtime templates
In the Region menu, select the region that contains
your runtime template.
In the ID column, click the ID number of the runtime template
that you want to edit.
Click edit Edit
In the Edit runtime template panel, make changes to the runtime template.
Click Update .
REST
Before using any of the request data,
make the following replacements:
REGION : the region where your runtime template is located.
PROJECT_ID : your project ID.
NOTEBOOK_RUNTIME_TEMPLATE_ID : the ID of your runtime template.
RELEASE_NAME : the release name of the image that you want to use.
For example, py311 is the release name for the Python 3.11 image. To set the
image to Latest , leave RELEASE_NAME empty.
HTTP method and URL:
PATCH https:// REGION -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ REGION /notebookRuntimeTemplates/ NOTEBOOK_RUNTIME_TEMPLATE_ID ?updateMask=software_config.colab_image.release_name
Request JSON body:
{
softwareConfig: {
colabImage: {
releaseName: " RELEASE_NAME "
}
}
}
To send your request, choose one of these options:
curl
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// REGION -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ REGION /notebookRuntimeTemplates/ NOTEBOOK_RUNTIME_TEMPLATE_ID ?updateMask=software_config.colab_image.release_name"
PowerShell
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method PATCH ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https:// REGION -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ REGION /notebookRuntimeTemplates/ NOTEBOOK_RUNTIME_TEMPLATE_ID ?updateMask=software_config.colab_image.release_name" | Select-Object -Expand Content
If successful, the response body contains an instance of
Operation .
For more information, see the notebookRuntimeTemplates.patch REST API
documentation .
Supported Python versions
Colab Enterprise supports Python versions for specific periods of time.
The following table lists the end of patch and support date and
end of availability date for each supported version of Python. To learn more
about these dates, see Understand end of support dates .
Python version
End of patch and support date
End of availability date
Python 3.12
To be determined
To be determined
Python 3.11
To be determined
To be determined
Python 3.10
February 23, 2026
August 17, 2026
Understand end of support dates
Support for a Python version ends according to the following dates:
End of patch and support date : After this date, the following changes
take place:
You can't create runtime templates that use this Python version.
Any of your existing runtime templates that use this Python version
are automatically upgraded to use the latest available Python version.
Existing runtimes are no longer upgradeable.
Runtimes stop functioning six months after their most recent upgrade, or
if not upgraded, six months after they were created.
To request an extension for using this Python version until the
end of availability date, contact your Google Cloud
account representative .
End of availability date : After this date, the following changes
take place:
This Python version isn't available in Colab Enterprise, even for
users who were granted an extension.
Any existing runtime templates that use this Python version are
automatically upgraded to use the latest available Python version.
Runtimes are regional
Runtimes are regional, and must be located in the same region as your notebook.
Runtimes are exclusive to a user
Runtimes are exclusive to a user. You can't share your runtimes with others
and you can't use their runtimes. Even if you share a notebook with someone,
they don't have access to your runtime and must run the notebook on
their own runtime.
However, users can create their own runtimes based on the same runtime template.
See Runtime templates can be shared with users .
Managing your runtime's files
You can access and modify files on your runtime by using the
Files
button in Colab Enterprise. You can also upload files to your
runtime.
When your runtime is deleted, any files that you upload are deleted.
If you've modified files, those files will revert back to their original
state when a new runtime is created. See the auto deletion time period in the
Default runtime specifications section .
Runtimes can be shared by notebooks
You can connect more than one notebook to the same runtime but this isn't
recommended. Multiple notebooks sharing the same runtime can cause problems,
including:
The notebooks may run slowly because they are sharing the runtime's
compute resources.
The code in one notebook can affect the state of the runtime's VM for
the other notebook. For example, if you install version 1.3 of a package
in one notebook, but your other notebook requires version 1.2, you might
have a version incompatibility when you run the second notebook.
Instead of running code from multiple notebooks on the same runtime, you can
create a runtime for each notebook based on the same runtime template. See
You can create multiple runtimes from
the same runtime template .
Runtime charges
You are charged for runtime processing based on the machine type and
accelerators that you use. You are also charged for boot disk and data disk
storage. Boot disks and data disks are deleted when the runtimes are deleted.
Runtimes always include a 100 GiB SSD persistent disk in addition to
the data disk specified in the runtime template. The boot disk isn't
configurable.
While runtimes are shut down:
Compute charges aren't generated because there isn't any CPU or GPU usage.
Boot disk and data disk storage is charged.
For more information, see
Colab Enterprise pricing .
You can create multiple runtimes from the same runtime template
You can create multiple runtimes from a single non-default runtime template. This way, you
can run multiple notebooks on VMs with the same configuration without sharing
the resources of that VM.
Runtime templates
This section describes the characteristics of runtime templates.
Runtime templates are regional
Runtime templates are regional. When you create a runtime, it is in the same
region as the runtime template, and the runtime can only be used with notebooks
in that region.
Runtime templates can be shared with users
You can share a runtime template with other users. This way, each user
can create their own runtime based on the same runtime template, and
therefore multiple users can run the same notebook on the same VM configuration.
To learn more, see Manage access to
a runtime template .
Configuration
Runtime templates determine the configuration of your runtime's VM. You
can specify any of the following:
Region
Choose the region where your notebook is. Runtimes created from
runtime templates are in the same region as the runtime template.
For the notebook to run code in the runtime, the notebook and runtime must be
in the same region.
Machine type
You can configure the machine type of your runtime template.
For information on machine types, see the
Machine families resource and
comparison guide .
Data disk
You can configure the disk type and disk size of the data disk in
your runtime template.
When your runtime is created, it also includes a boot disk.
The boot disk is a 100 GiB SSD persistent disk and can't be configured.
Accelerators
You can add accelerators to your runtime template configuration.
Accelerator availability is based on the machine type and region.
Network
Specify your network or use the project's default Virtual Private Cloud network.
Idle shutdown
Colab Enterprise enables idle shutdown by default. This
setting shuts down your instance after 180 minutes of inactivity.
You can change the number of minutes of inactivity
before shutdown, or you can disable idle shutdown.
Public internet access
To get more control over the security of your notebook and other resources,
you can turn off public internet access. If you configure your runtime template
this way, notebooks that use runtimes created from the runtime template
won't have access to the public internet.
End-user credential authentication
By default runtime templates use end-user credential authentication to
give your notebook access to Application Default Credentials (ADC).
You can use this access to ADC to run code in your notebook that interacts
with Vertex AI and other Google Cloud services.
When end-user credentials are enabled, your notebook uses the credentials
of whoever runs the notebook to determine access
to Google Cloud resources.
If end-user credentials aren't enabled, you can get access to ADC by
authenticating the user through your notebook's code. To learn more,
see the "User credentials" section of
Set up ADC for a local development environment .
Runtime template charges
There are no charges for creating or storing runtime templates. See also
Runtime charges .
What's next
Create a runtime based on a runtime template.
Connect to a runtime .
Create a runtime template .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
