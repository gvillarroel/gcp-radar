---
title: "Install Python dependencies \_|\_ Cloud Composer \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies
knowledge_key: corpus
source_id: site-iam-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/composer/docs/composer-1/access-control
source_metadata:
  url: https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies
  title: "Install Python dependencies \_|\_ Cloud Composer \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

On September 15, 2026 , all Cloud Composer 1 versions and versions 2.0.x of Cloud Composer 2 will reach their planned end of life . You will not be able to use environments with these versions. We recommend planning migration to Cloud Composer 3 . Cloud Composer 2 versions 2.1.x and later are still supported and are not impacted by this change.
Home
Documentation
Data analytics
Cloud Composer
Composer 1 Guides
Send feedback
Install Python dependencies
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Composer 3 | Cloud Composer 2 | Cloud Composer 1
This page describes how to install Python packages for your
Cloud Composer environment.
About packages in Cloud Composer
This section explains how PyPI packages work in Cloud Composer.
Preinstalled and custom PyPI packages in Cloud Composer images
Cloud Composer images contains both preinstalled and custom PyPI
packages.
Preinstalled PyPI packages are packages that are included in
the Cloud Composer image of your environment. Each
Cloud Composer image contains
PyPI packages that are specific for your version of
Cloud Composer and Airflow.
Custom PyPI packages are packages that you can install in your environment
in addition to preinstalled packages.
Note: If you plan to upgrade your environment, then you can do an
upgrade check . This check reports if custom PyPI packages
in your environment have any conflicts with preinstalled packages in a later
Cloud Composer image.
Options to manage PyPI packages for Cloud Composer environments
Option
Use if
Install from PyPI
The default way to install packages in your environment
Install from a repository with a public IP address
The package is hosted in a package repository other than PyPI.
This repository has a public IP address
Install from an Artifact Registry repository
The package is hosted in an Artifact Registry repository
Install from a repository in your project's network
Your environment does not have access to public internet. The package
is hosted in a package repository in your project's network.
Install as a local Python library
The package cannot be found in PyPI, and the library
does not have any external dependencies, such as dist-packages .
Install a plugin
The package provides plugin-specific functionality, such as modifying
the Airflow web interface.
PythonVirtualenvOperator
You don't want the package to be installed for all Airflow workers, or
the dependency conflicts with preinstalled packages. The package
can be found in the PyPI and has no external dependencies.
KubernetesPodOperator and GKE operators
You require external dependencies that cannot be installed from pip ,
such as dist-packages , or are on an internal pip server. This
option requires more setup and maintenance. Consider it only if other
options don't work.
Before you begin
You must have a role that can trigger environment update
operations. In addition, the service account of the environment must have
a role that has enough permissions to perform update
operations.
Important: When you install PyPI packages in your environment,
Airflow executes Python code from the installed package . Make sure that
you install packages that come from sources that you can trust.
Users with the composer.environments.update permission can execute Python
code on behalf of the environment's service account when installing
packages in your environment. For more information, see
Access control .
If your environment is protected by a VPC Service Controls perimeter,
then before installing PyPI dependencies you must
grant additional user identities with access to services that
the service perimeter protects and enable support for a private PyPI
repository.
Requirements must follow the format specified
in PEP-508 where each requirement is specified in
lowercase and consists of the package name with optional extras and version
specifiers.
PyPI dependency updates generate Docker images in
Artifact Registry .
Warning: Don't modify or delete the images built by
Cloud Composer in Artifact Registry or the repository itself.
Don't upload your own images to the repository. Instead, create and
maintain your own repository for your images (for example, for images used
by KubernetesPodOperator). Don't delete this repository on your own. The
repository is deleted after you delete
your environment.
If a dependency conflict causes the update to fail, your environment
continues running with its existing dependencies. If the operation
succeeds, you can begin using the newly installed Python dependencies in
your DAGs.
PythonVirtualenvOperator doesn't use the configuration from your environment's
pip.conf file. If you want to use specific dependencies, including
installing them from a custom index, pass requirements in the requirements
parameter as a list of strings. For more information about the format, see
Requirements File Format in the pip
documentation.
View the list of PyPI packages
You can get the list of packages for your environment in several formats.
View preinstalled packages
To view the list of preinstalled packages for your environment, see
the list of packages for the
Cloud Composer image of your environment .
View all packages
To view all packages (both preinstalled and custom) in your environment:
gcloud
The following gcloud CLI command returns the result of
the python -m pip list command for an Airflow worker in your environment.
You can use the --tree argument to get the result of the
python -m pipdeptree --warn command.
gcloud beta composer environments list-packages \
ENVIRONMENT_NAME \
--location LOCATION
Replace:
ENVIRONMENT_NAME with the name of the environment.
LOCATION with the region where the environment is located.
View custom PyPI packages
Console
In Google Cloud console, go to the Environments page.
Go to Environments
In the list of environments, click the name of your environment.
The Environment details page opens.
Go to the PyPI Packages tab.
gcloud
gcloud composer environments describe ENVIRONMENT_NAME \
--location LOCATION \
--format = "value(config.softwareConfig.pypiPackages)"
Replace:
ENVIRONMENT_NAME with the name of the environment.
LOCATION with the region where the environment is located.
Install custom packages in a Cloud Composer environment
This section describes different methods for installing custom packages in your
environment.
Install packages from PyPI
A package can be installed from
Python Package Index if it has no external
dependencies or conflicts with preinstalled packages.
Note: You can loosen version constraints for installed custom PyPI packages.
For example, instead of specifying a version as ==1.0.1 , specify it
as >=1.0.1 .
To add, update, or delete the Python dependencies for your environment:
Console
In Google Cloud console, go to the Environments page.
Go to Environments
In the list of environments, click the name of your environment.
The Environment details page opens.
Go to the PyPI packages tab.
Click Edit
Click Add package .
In the PyPI packages section, specify package names, with optional
version specifiers and extras.
For example:
scikit-learn
scipy , >=0.13.3
nltk , [machine_learning]
Click Save .
gcloud
gcloud CLI has several arguments for working with custom PyPI
packages:
--update-pypi-packages-from-file replaces all existing custom
PyPI packages with the specified packages. Packages that you don't
specify are removed.
--update-pypi-package updates or installs one package.
--remove-pypi-packages removes specified packages.
--clear-pypi-packages removes all packages.
Installing requirements from a file
The requirements.txt file must have each
requirement specifier on a separate line.
For example:
scipy>=0.13.3
scikit-learn
nltk[machine_learning]
Update your environment, and specify the requirements.txt file in
the --update-pypi-packages-from-file argument.
gcloud composer environments update ENVIRONMENT_NAME \
--location LOCATION \
--update-pypi-packages-from-file requirements.txt
Replace:
ENVIRONMENT_NAME with the name of the environment.
LOCATION with the region where the environment is located.
Installing one package
Update your environment, and specify the package, version, and extras in
the --update-pypi-package argument.
gcloud composer environments update ENVIRONMENT_NAME \
--location LOCATION \
--update-pypi-package PACKAGE_NAME EXTRAS_AND_VERSION
Replace:
ENVIRONMENT_NAME with the name of the environment.
LOCATION with the region where the environment is located.
PACKAGE_NAME with the name of the package.
EXTRAS_AND_VERSION with the optional version and extras specifier. To
omit versions and extras, specify an empty value.
Note: Depending on your execution environment, you might need to escape
special characters such as > . To avoid potential issues, put
the package name and version in quotes, for example: "scipy>=0.13.0" .
Example:
gcloud composer environments update example-environment \
--location us-central1 \
--update-pypi-package "scipy>=0.13.3"
Removing packages
Update your environment, and specify the packages that you want to delete in the --remove-pypi-packages argument:
gcloud composer environments update ENVIRONMENT_NAME \
--location LOCATION \
--remove-pypi-packages PACKAGE_NAMES
Replace:
ENVIRONMENT_NAME with the name of the environment.
LOCATION with the region where the environment is located.
PACKAGE_NAMES with a comma-separated list of packages.
Example:
gcloud composer environments update example-environment \
--location us-central1 \
--remove-pypi-packages scipy,scikit-learn
API
Construct an environments.patch API request.
In this request:
In the updateMask parameter, specify the mask:
Use config.softwareConfig.pypiPackages mask to replace all existing
packages with the specified packages. Packages that you don't
specify are deleted.
Use config.softwareConfig.pypiPackages.PACKAGE_NAME to add or
update a specific package. To add or update several packages,
specify several masks with commas.
In the request body, specify packages and values for versions and extras:
{
"config" : {
"softwareConfig" : {
"pypiPackages" : {
" PACKAGE_NAME " : " EXTRAS_AND_VERSION "
}
}
}
}
Replace:
PACKAGE_NAME with the name of the package.
EXTRAS_AND_VERSION with the optional version and extras specifier. To
omit versions and extras, specify an empty value.
To add more than one package, add extra entries for packages
to pypiPackages .
Example:
// PATCH https://composer.googleapis.com/v1/projects/example-project/
// locations/us-central1/environments/example-environment?updateMask=
// config.softwareConfig.pypiPackages.EXAMPLE_PACKAGE,
// config.softwareConfig.pypiPackages.ANOTHER_PACKAGE
{
"config" : {
"softwareConfig" : {
"pypiPackages" : {
"EXAMPLE_PACKAGE" : "" ,
"ANOTHER_PACKAGE" : ">=1.10.3"
}
}
}
}
Terraform
The pypi_packages block in the software_config block specifies
packages.
resource "google_composer_environment" "example" {
name = " ENVIRONMENT_NAME "
region = " LOCATION "
config {
software_config {
pypi_packages = {
PACKAGE_NAME = " EXTRAS_AND_VERSION "
}
}
}
}
Replace:
ENVIRONMENT_NAME with the name of the environment.
LOCATION with the region where the environment is located.
PACKAGE_NAME with the name of the package.
EXTRAS_AND_VERSION with the optional version and extras specifier. To
omit versions and extras, specify an empty value.
To add more than one package, add extra entries for packages
to pypi_packages .
Example:
resource "google_composer_environment" "example" {
name = "example-environment"
region = "us-central1"
config {
software_config {
pypi_packages = {
scipy = ">=1.10.3"
scikit-learn = ""
nltk = "[machine_learning]"
}
}
}
}
Install packages from a public repository
You can install packages hosted in other repositories that have a public IP
address.
The packages must be properly configured , so that the
default pip tool can install it.
Note: Cloud Composer does not support pip customization and does
not resolve package dependencies and conflicts outside of the resolution
mechanisms that the default pip tool provides.
To install from a package repository that has a public address:
Create a pip.conf file and include the following
information in the file, if applicable:
URL of the repository (in the index-url parameter)
Access credentials for the repository
Non-default pip installation options
Example:
[global]
index-url=https://example.com/
(Optional) In some cases, you might want to fetch packages from multiple
repositories, such as when the public repository contains some specific
packages that you want to install, and you want to install all other
packages from PyPI:
Configure an Artifact Registry virtual repository .
Add configuration for multiple repositories (including PyPI, if needed)
and define the order in which pip searches the repositories.
Specify the virtual repository's URL in the index-url parameter.
Determine the URI of your environment's bucket .
Upload the pip.conf file to the /config/pip/
folder in your environment's bucket.
Install packages using one of the available methods .
Install packages from an Artifact Registry repository
You can store packages in an Artifact Registry repository
in your project, and configure your environment to install from it.
Note: If you use VPC Service Controls, then you can
create Artifact Registry PyPI repository in VPC mode . In
this case, follow the
procedure for private repositories when assigning
permissions.
Configure roles and permissions:
Make sure that the Cloud Build service account has
permissions to read from your Artifact Registry repository .
Grant additional permissions for installing packages from Artifact Registry
repositories to the service account of your environment, as described in
Access control .
If your environment has restricted access to other services in your
project, for example, if you use VPC Service Controls:
Assign permissions to access your Artifact Registry repository to
the environment's service account instead of the
Cloud Build service account.
Make sure that connectivity to the Artifact Registry repository is
configured in your project.
To install custom PyPI packages from an Artifact Registry repository:
Create a pip.conf
file and include the following information in the file, if applicable:
URL of the Artifact Registry repository (in the index-url parameter)
Access credentials for the repository
Non-default pip installation options
For an Artifact Registry repository, append /simple/ to the repository
URL:
[global]
index-url = https://us-central1-python.pkg.dev/example-project/example-repository/simple/
(Optional) In some cases, you might want to fetch packages from multiple
repositories, such as when your Artifact Registry repository contains
some specific packages that you want to install, and you want to install
all other packages from PyPI:
Configure an Artifact Registry virtual repository .
Add configuration for multiple repositories (including PyPI, if needed)
and define the order in which pip searches the repositories.
Specify the virtual repository's URL in the index-url parameter.
Upload this pip.conf file to the /config/pip/
folder in your environment's bucket. For example:
gs://us-central1-example-bucket/config/pip/pip.conf .
Install packages using one of the available methods .
Install packages from a private repository
You can host a private repository in your project's network and configure your
environment to install Python packages from it.
Configure roles and permissions:
If you install custom PyPI packages from a repository in your project's
network, and this repository does not have a public IP address:
Assign permissions to access this repository to the environment's
service account.
Make sure that connectivity to this repository is configured in your
project.
Grant additional permissions for installing packages from private
repositories to the service account of your environment, as described in
Access control .
To install packages from a private repository hosted in your project's network:
Create a pip.conf
file and include the following information in the file, if applicable:
IP address of the repository in your project's network
Access credentials for the repository
Non-default pip installation options
Example:
[global]
index-url=https://192.0.2.10/
(Optional) In some cases, you might want to fetch packages from multiple
repositories, such as when the private repository contains some specific
packages that you want to install, and you want to install all other
packages from PyPI:
Configure an Artifact Registry virtual repository .
Add configuration for multiple repositories (including PyPI, if needed)
and define the order in which pip searches the repositories.
Specify the virtual repository's URL in the index-url parameter.
Upload the pip.conf file to the /config/pip/
folder in your environment's bucket. For example:
gs://us-central1-example-bucket/config/pip/pip.conf .
Install packages using one of the available methods .
Install a local Python library
To install an in-house or local Python library:
Place the dependencies within a subdirectory in the
dags/ folder in your environment's bucket. To import a module from a
subdirectory, each subdirectory in the module's path must contain
an __init__.py package marker file.
In the following example, the dependency is
coin_module.py :
dags/
use_local_deps.py # A DAG file.
dependencies/
__init__.py
coin_module.py
Import the dependency from the DAG definition file.
For example:
from dependencies import coin_module
Note: An import error occurs if an __init__.py file is missing. Directory and
file names must be valid Python identifiers.
Use packages that depend on shared object libraries
Certain PyPI packages depend on system-level libraries.
While Cloud Composer does not support system libraries, you can use
the following options:
Use the KubernetesPodOperator . Set the Operator image to a custom
build image. If you experience packages that fail during installation due
to an unmet system dependency, use this option.
Upload the shared object libraries to your environment's bucket. If your PyPI
packages have installed successfully but fail at runtime, use this option.
Manually find the shared object libraries for the PyPI dependency
(an .so file).
Upload the shared object libraries to the /plugins folder in your
environment's bucket.
Set the following environment variable :
LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/home/airflow/gcs/plugins
Note: Files in the plugins/ folders
are synced to the local file system . Uploading large .so
files can affect the performance of your environment and the Airflow web server.
Install packages in private IP environments
Depending on how you configure your project, your environment might not have
access to the public internet.
Private IP environment with public internet access
If your private IP environment can access public internet, then you can
install packages using options for public IP environments:
Install from PyPI. In this case, no special configuration is required.
Follow the procedure described in
Install packages from PyPI .
Install from a repository with a public IP address.
Follow the procedure described in
Install packages from a public repository .
Install from a private PyPI repository hosted in your
project's network.
Private IP environment without internet access
If your private IP environment does not have access to public internet, then
you can install packages using one of the following ways:
Use a private PyPI repository hosted in your project's
network.
Use a proxy server VM in your project's network to connect
to a PyPI repository on the public internet. Specify the proxy address in
the /config/pip/pip.conf file in your environment's bucket.
Use an Artifact Registry repository as the only source
of packages. To do so, redefine the index-url parameter, as described.
If your security policy permits access to external IP addresses from your
VPC network, you can enable the installation of packages from repositories
on the public internet by configuring Cloud NAT .
Put Python dependencies into the /dags folder in your environment's bucket
to install them as local libraries . This might not be a
good option if the dependency tree is large.
Install to a private IP environment under resource location restrictions
Keeping your project in line with Resource Location Restriction
requirements prohibits the use of some tools. In particular, Cloud Build
cannot be used for package installation, preventing direct access to
repositories on the public internet.
To install Python dependencies in such an environment, follow the guidance for
a private IP environments
without internet access .
Install a Python dependency to a private IP environment in a VPC Service Controls perimeter
Protecting your project with a
VPC Service Controls perimeter
results in further security restrictions. In particular, Cloud Build
cannot be used for package installation, preventing direct access to
repositories on the public internet.
To install Python dependencies for a private IP environment inside a perimeter,
follow the guidance for private IP environments
without internet access .
What's next
Troubleshooting package installation
Troubleshooting updates and upgrades
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
