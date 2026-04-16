---
title: "Preconfigured base images \_|\_ Cloud Workstations \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/workstations/docs/preconfigured-base-images
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/workstations/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/workstations/docs/preconfigured-base-images
  title: "Preconfigured base images \_|\_ Cloud Workstations \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Workstations
Guides
Send feedback
Preconfigured base images
Stay organized with collections
Save and categorize content based on your preferences.
Google Cloud maintains the following base images designed for use with
Cloud Workstations.
List of preconfigured base images
These images may be used directly in workstation configurations,
or they may be used as base images when creating
custom container images
with Docker's FROM command.
Image
Description
us-central1-docker.pkg.dev/cloud-workstations-images/predefined/code-oss:latest
Cloud Workstations base editor, Code OSS for Cloud Workstations, based on Code-OSS . (Default)
us-central1-docker.pkg.dev/cloud-workstations-images/predefined/base:latest
Base image with no IDE installed.
us-central1-docker.pkg.dev/cloud-workstations-images/predefined/clion:latest
CLion IDE. Accessible only through JetBrains Gateway.
For installation and getting started information, see
Develop code using local JetBrains IDEs .
us-central1-docker.pkg.dev/cloud-workstations-images/predefined/goland:latest
GoLand IDE. Accessible only through JetBrains Gateway.
For installation and getting started information, see
Develop code using local JetBrains IDEs .
us-central1-docker.pkg.dev/cloud-workstations-images/predefined/intellij-ultimate:latest
IntelliJ IDEA Ultimate IDE. Accessible only through JetBrains Gateway.
For installation and getting started information, see
Develop code using local JetBrains IDEs .
us-central1-docker.pkg.dev/cloud-workstations-images/predefined/phpstorm:latest
PhpStorm IDE. Accessible only through JetBrains Gateway.
For installation and getting started information, see
Develop code using local JetBrains IDEs .
us-central1-docker.pkg.dev/cloud-workstations-images/predefined/pycharm:latest
PyCharm Professional IDE. Accessible only through JetBrains Gateway.
For installation and getting started information, see
Develop code using local JetBrains IDEs .
us-central1-docker.pkg.dev/cloud-workstations-images/predefined/rider:latest
Rider IDE. Accessible only through JetBrains Gateway.
For installation and getting started information, see
Develop code using local JetBrains IDEs .
us-central1-docker.pkg.dev/cloud-workstations-images/predefined/rubymine:latest
RubyMine IDE. Accessible only through JetBrains Gateway.
For installation and getting started information, see
Develop code using local JetBrains IDEs .
us-central1-docker.pkg.dev/cloud-workstations-images/predefined/webstorm:latest
WebStorm IDE. Accessible only through JetBrains Gateway.
For installation and getting started information, see
Develop code using local JetBrains IDEs .
List of third-party base images
Caution: A third-party provider maintains the container image listed in this
section. Google Cloud does not build, maintain, or officially support this
image. Carefully evaluate any solution before deploying it in your production
environment.
Third-party image
Third-party provider
us-central1-docker.pkg.dev/posit-images/cloud-workstations/workbench:latest
Posit Workbench (including RStudio Pro)
If you encounter issues with Posit Workbench IDE or with the Posit Workbench
container image, report them to Posit on
GitHub .
Cloud Workstations base image structure
Cloud Workstations base images share the following defined structure:
The base image entrypoint file is set to /google/scripts/entrypoint.sh .
On startup, base images run files under /etc/workstation-startup.d/* in
lexicographical order to initialize the workstation environment.
The files and their behavior are as follows:
000_configure-docker.sh : Configures and runs Docker inside the
workstation.
010_add-user.sh : Creates the default user in Cloud Workstations.
Because the persistent disk is dynamically attached to the container,
users must be added on workstation startup, not in the Dockerfile.
020_start-sshd.sh : Starts the sshd service in the container.
030_customize-environment.sh : Executes /home/user/.workstation/customize_environment as user .
110_start-$IDE.sh : Starts the IDE for the image.
Cloud Workstations stores Docker images in the home directory at
/home/.docker_data so that the images are preserved between sessions.
To add additional functionality during workstation startup, add your scripts in
the /etc/workstation-startup.d/ directory:
Scripts in this directory run as root by default. To execute the scripts as
a different user, use the runuser command.
Because scripts execute in lexicographical order, we recommended that you
prefix the scripts with a three digit number that is greater than 200.
Alternatively, if you don't want to extend a workstations image, you can create
a customize_environment script in
your home directory.
Home directory modifications
When the workstation configuration specifies a persistent home directory
(which is the default behavior), a persistent disk backing the home directory
is dynamically attached to the container at runtime. This process overwrites
modifications made to the /home directory at container image build time.
To preserve updates, modify the /home directory at container runtime
by adding a script in the in the /etc/workstation-startup.d directory,
or by adding per-user configuration in the /etc/profile.d directory.
To speed up the process, consider running the setup script as a background
process (add an ampersand, & , to the end of the command) to avoid
blocking container startup.
Some examples of build time configuration that should be moved to container
runtime:
Per-user git configuration
git repositories cloned in the home directory
Direct user configuration, such as placing files in a $HOME/.config directory
User creation
User creation and modification
Because the persistent disk dynamically attaches to the container at runtime,
users must be added on workstation startup, not in the Dockerfile. To modify
or create additional users, we recommended that you update
/etc/workstation-startup.d/010_add-user.sh , or
create your own script that executes on startup.
Additionally, you can modify the default bash profile for the users by updating
the files in /etc/profile.d .
Update preconfigured Secure APT keys
Cloud Workstations base images come preinstalled with a number of tools obtained
from various third-party repositories using Secure APT. As part of the install
process, public keys provided by the repository owners are imported using gpg
and placed into individual files under /usr/share/keyrings/ . These files are
referenced from corresponding list files under /etc/apt/sources.list.d/ .
This enables apt to verify the integrity of the a given repository when
interacting with it.
On occasion, third-party repository owners may decide to change the public key
used to validate the integrity of their repository, which causes apt to
display an error when interacting with it. To resolve this potential problem,
you can use /google/scripts/refresh-preinstalled-apt-keys.sh , which
obtains the latest versions of preinstalled public keys and re-imports them.
List installed IDE versions
Several Cloud Workstations base images come preinstalled with an IDE. For
convenience, see the included /google/scripts/preinstalled-ide-versions.sh
script, which lists the name and version information of IDEs installed in
the image.
Turn off sudo root privileges
The default workstation user has sudo root access privileges in these
containers. To turn off root access to the Docker container, set the
CLOUD_WORKSTATIONS_CONFIG_DISABLE_SUDO environment variable
to true when creating the workstation configuration.
To set this environment variable through the Google Cloud console when creating
your workstation configuration, follow these steps:
When creating your workstation configuration, complete the configuration
for Basic information and the Machine configuration.
On the Environment customization dialog, expand the
Advanced container options section and select Environment variables .
Click add Add variable .
Enter CLOUD_WORKSTATIONS_CONFIG_DISABLE_SUDO and true as the value.
Note: If a user is able to break out of the Docker container, they might be
able to obtain root privileges on the underlying VM.
Customize without extending an image
For convenience all Cloud Workstations base images check for the presence of
an executable file located at /home/user/.workstation/customize_environment
and, if it exists, run it in the background as user . This lets you
run any script or binary at startup. Unlike .profile or .bashrc the script
only runs once when the workstation starts, rather than once for each shell
login.
Because the customize_environment script runs as user , be sure to update
permissions as necessary when writing your script. For example, if you want to
install Emacs everytime your workstation starts, the content of
customize_environment might be similar to the following:
#!/bin/bash
sudo apt-get update
sudo apt-get install -y emacs
Execution logs for customize_environment can be found in the container at
/var/log/customize_environment and are also written to the
container output logs .
On successful execution of customize_environment , a file is created in
/var/run/customize_environment_done . Because customize_environment runs in
parallel with Workstation startup, packages installed by the script can be
available as early as a few moments after your workstation has started.
Preventing idle timeouts
For convenience, all Cloud Workstations base images include a preinstalled script
at /google/scripts/keep_alive.sh . This script sends regular keep-alive
messages, which can prevent the workstation from shutting down due to idle
timeouts when you are running background processes without direct interaction.
What's next
Customize your container images .
Automate container image rebuilds
to synchronize base image updates using Cloud Build and Cloud Scheduler.
Set up security best practices .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
