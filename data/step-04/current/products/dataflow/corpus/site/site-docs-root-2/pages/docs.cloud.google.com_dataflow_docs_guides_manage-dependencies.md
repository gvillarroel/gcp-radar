---
title: "Manage pipeline dependencies in Dataflow \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataflow/docs/guides/manage-dependencies
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/dataflow/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/dataflow/docs/guides/manage-dependencies
  title: "Manage pipeline dependencies in Dataflow \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Cloud Dataflow
Guides
Send feedback
Manage pipeline dependencies in Dataflow
Stay organized with collections
Save and categorize content based on your preferences.
Many Apache Beam pipelines can run using the default Dataflow
runtime environments. However, some data processing use cases benefit from using
additional libraries or classes. In these cases, you might need to manage your
pipeline dependencies.
The following list provides some reasons you might need to manage your pipeline
dependencies:
The dependencies provided by the default runtime environment are
insufficient for your use case.
The default dependencies either have version collisions or have classes and
libraries that are incompatible with your pipeline code.
You need to pin to specific library versions for your pipeline.
You have a Python pipeline that needs to run with a consistent set of
dependencies.
How you manage dependencies depends on whether your pipeline uses
Java , Python , or Go .
Java
Incompatible classes and libraries can cause Java dependency issues. If your
pipeline contains user-specific code and settings, the code can't contain mixed
versions of libraries.
Java dependency issues
When your pipeline has Java dependency issues, one of the
following errors might occur:
NoClassDefFoundError : This error occurs when an entire class is not
available during runtime.
NoSuchMethodError : This error occurs when the class in the classpath uses
a version that doesn't contain the correct method or when the method
signature changed.
NoSuchFieldError : This error occurs when the class in the classpath uses a
version that doesn't have a field required during runtime.
FATAL ERROR : This error occurs when a built-in dependency can't be loaded
properly. When using an uber JAR file (shaded), don't include libraries that use
signatures in the same JAR file, such as Conscrypt.
Dependency management
To simplify dependency management for Java pipelines, Apache Beam uses
Bill of Materials (BOM)
artifacts. The BOM helps dependency management tools select compatible
dependency combinations. For more information, see
Apache Beam SDK for Java dependencies
in the Apache Beam documentation.
To use a BOM with your pipeline and to explicitly add other dependencies to the
dependency list, add the following information to the pom.xml file for the SDK
artifact. To import the correct libraries BOM, use
beam-sdks-java-google-cloud-platform-bom .
< depe n de n cyMa na geme nt >
< depe n de n cies >
< depe n de n cy >
< groupId>org.apache.beam</groupId>
< ar t i fa c t Id>beam - sdks - java - google - cloud - pla tf orm - bom</ar t i fa c t Id >
< versio n > LATEST</versio n >
< t ype>pom</ t ype >
< scope>impor t < /scope >
< /depe n de n cy >
< /depe n de n cies >
< /depe n de n cyMa na geme nt >
< depe n de n cies >
< depe n de n cy >
< groupId>org.apache.beam</groupId>
< ar t i fa c t Id>beam - sdks - java - core</ar t i fa c t Id >
< /depe n de n cy >
< depe n de n cy >
< groupId>org.apache.beam</groupId>
< ar t i fa c t Id>beam - ru nners - google - cloud - da tafl ow - java</ar t i fa c t Id >
< /depe n de n cy >
< depe n de n cy >
< groupId>org.apache.beam</groupId>
< ar t i fa c t Id>beam - sdks - java - io - google - cloud - pla tf orm</ar t i fa c t Id >
< /depe n de n cy >
< /depe n de n cies >
The beam-sdks-java-core artifact contains only the core SDK. You need to
explicitly add other dependencies, such as I/O and runners, to the dependency list.
Python
When you run Dataflow jobs by using the Apache Beam Python
SDK, dependency management is useful in the following scenarios:
Your pipeline uses public packages from the
Python Package Index (PiPy), and you want to
make these packages available remotely.
You want to create a reproducible environment.
To reduce startup time, you want to avoid dependency installation on the
workers at runtime.
Define Python pipeline dependencies
Although you can use a single Python script or notebook to write an
Apache Beam pipeline, in the Python ecosystem, software is often distributed
as packages. To make your pipeline easier to maintain, when your pipeline code
spans multiple files, group the pipeline files as a Python package.
Define the dependencies of the pipeline in the setup.py file of your package.
Stage the package to the workers using the --setup_file pipeline option.
When the remote workers start,
they install your package. For an example, see
juliaset
in the Apache Beam GitHub.
To structure your pipeline as a Python package, follow these steps:
Create a setup.py file for your project. In the setup.py file, include
the install_requires
argument to specify the minimal set of dependencies for your pipeline.
The following example shows a basic setup.py file.
import setuptools
setuptools . setup (
name = ' PACKAGE_NAME ' ,
version = ' PACKAGE_VERSION ' ,
install_requires = [],
packages = setuptools . find_packages (),
)
Add the setup.py file, the main workflow file, and a directory with the
rest of the files to the root directory of your project. This file grouping
is the Python package for your pipeline. The file structure
looks like the following example:
root_dir/
package_name/
__init__.py
my_pipeline_launcher.py
my_custom_transforms.py
...other files...
setup.py
main.py
To run your pipeline, install the package in the submission environment.
Use the --setup_file pipeline option to stage the package to the workers.
For example:
python -m pip install -e .
python main.py --runner DataflowRunner --setup_file ./setup.py <...other options...>
These steps simplify pipeline code maintenance, particularly when the code grows
in size and complexity. For other ways to specify dependencies, see
Managing Python pipeline dependencies
in the Apache Beam documentation.
Use custom containers to control the runtime environment
To run a pipeline with the Apache Beam Python SDK, Dataflow
workers need a Python environment that contains an interpreter, the
Apache Beam SDK, and the pipeline dependencies. Docker container images provide
the appropriate environment for running your pipeline code.
Stock container images are released with each version of the Apache Beam SDK,
and these images include the Apache Beam SDK dependencies. For more information, see
Apache Beam SDK for Python dependencies
in the Apache Beam documentation.
When your pipeline requires a dependency that isn't included in the default
container image, the dependency must be installed at runtime. Installing packages at
runtime can have the following consequences:
Worker startup time increases due to dependency resolution, download, and installation.
The pipeline requires a connection to the internet to run.
Non-determinism occurs due to software releases in dependencies.
To avoid these issues, supply the runtime environment in a custom Docker container image.
Using a custom Docker container image that has the pipeline dependencies preinstalled
has the following benefits:
Ensures that the pipeline runtime environment has the same set of
dependencies every time you launch your Dataflow job.
Lets you control the runtime environment of your pipeline.
Avoids potentially time-consuming dependency resolution at startup.
When you use custom container images, consider the following guidance:
Avoid using the tag :latest with your custom images. Tag your
builds with a date, version, or a unique identifier. This step lets you
revert to a known working configuration if needed.
Use a launch environment that is compatible with your container image.
For more guidance about using custom containers, see
Build a container image .
For details about pre-installing Python dependencies, see
Pre-install Python dependencies .
Control the launch environment with Dataflow Templates
If your pipeline requires additional dependencies, you might need to install
them in both the runtime environment and the launch environment. The launch
environment runs the production version of the pipeline. Because the launch
environment must be compatible with the runtime environment, use the same
versions of dependencies in both environments.
To have a containerized, reproducible launch environment, use
Dataflow Flex Templates. For more information, see
Use Flex Templates to package a Dataflow pipeline for deployment .
When using Flex Templates, consider the following factors:
If you configure the pipeline as a package, install the package in your template Dockerfile.
To configure the Flex Template, specify FLEX_TEMPLATE_PYTHON_SETUP_FILE .
For more information, see
Set required Dockerfile environment variables .
If you use a custom container image with your pipeline, supply it when you
launch your template. For more information, see
Use a custom container for dependencies .
To build your Dataflow Flex Template Docker image, use the
same custom container image as the base image. For more information, see
Use custom container images .
This construction makes your launch environment both reproducible and compatible
with your runtime environment.
For an example that follows this approach, see the
Flex Template for a pipeline with dependencies and a custom container
tutorial in GitHub.
For more information, see
Make the launch environment compatible with the runtime environment
and
Control the dependencies the pipeline uses
in the Apache Beam documentation.
Go
When you run Dataflow jobs by using the Apache Beam Go SDK,
Go Modules
are used to manage dependencies. The following file contains the default compile
and runtime dependencies used by your pipeline:
https://raw.githubusercontent.com/apache/beam/v VERSION_NUMBER /sdks/go.sum
Replace VERSION_NUMBER with the SDK version that you're using.
For information about managing dependencies for your Go pipeline, see Managing dependencies in the Go documentation.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
