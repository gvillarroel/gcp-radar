---
title: "Setting up local authentication \_|\_ Cloud Source Repositories \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/source-repositories/docs/authentication
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/source-repositories/docs/csr-ssm-permission-mapping
source_metadata:
  url: https://docs.cloud.google.com/source-repositories/docs/authentication
  title: "Setting up local authentication \_|\_ Cloud Source Repositories \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Effective June 17, 2024, Cloud Source Repositories isn't available to new customers. For alternative source hosting options, Secure Source Manager is a regionally deployed, single tenant, managed source code repository hosted on Google Cloud.
If your organization hasn't previously used Cloud Source Repositories, you can't enable the API or use Cloud Source Repositories. New projects not connected to an organization can't enable the Cloud Source Repositories API. Organizations that have used Cloud Source Repositories prior to June 17, 2024 are not affected by this change.
Home
Documentation
Application development
Cloud Source Repositories
Guides
Send feedback
Setting up local authentication
Stay organized with collections
Save and categorize content based on your preferences.
Before you can access or interact with hosted repositories from your system, you
must set up local authentication in your environment.
After you set up local authentication, you can access hosted repositories for
which you have the appropriate
roles and permissions .
You can also perform standard Git operations such as git clone , git pull ,
and git push . Local authentication isn't required to perform operations in the
Google Cloud console, for example, to browse the contents of a repository.
Cloud Source Repositories supports the following types of authentication:
SSH
Google Cloud CLI
Manually generated credentials
Authenticate by using SSH
Cloud Source Repositories lets you use SSH public key authentication to
access hosted repositories. In this scenario, you first generate a key pair on
the local system from which you want to access the repository. Then you register
the public key with Google Cloud. If you already have an SSH key pair
on your system, you can re-use those keys for authentication. You can register
up to 20 public keys per Google Account.
Note: You cannot configure authentication for service accounts by using SSH
keys.
Cloud Source Repositories supports three SSH key types:
RSA (only for keys with more than 2048 bits)
ECDSA
ED25519
Generate a key pair
The SSH key pair consists of a private key that resides on your local system and
a public key that you register with Google Cloud.
Linux or macOS
Ensure that
OpenSSH
is installed on your local system.
At a command prompt, enter the following command:
ssh-keygen -t [ KEY_TYPE ] -C "[USER_EMAIL]"
Where:
[USER_EMAIL] is your email address.
[KEY_TYPE] is one of the following:
rsa
ecdsa
ed25519
For example:
ssh-keygen -t rsa -C "user@example.com"
When prompted, enter a filename for the public key file. To accept the
default ~/.ssh location, press Enter , otherwise specify a filename.
When prompted, leave the passphrase empty and press Enter .
Register your key
Windows
Ensure that
PuTTY
is installed on your local system.
From the Windows Start menu, start PuTTYGen.
In the window that opens, select the key type from the Parameters
field.
Click Generate .
PuTTYGen displays the generated public key string.
Specify a passphrase to protect the key pair.
To save the key pair you generated to your local system, click
Save Public Key and Save Private Key .
Use existing keys
You can also use an existing key pair for SSH authentication.
Linux or macOS
By default, public key files are located in your ~/.ssh directory.
At a command prompt, enter the following command:
ls -a ~/.ssh
The default filenames are:
id_rsa.pub
id_ecdsa.pub
id_ed25519.pub
Windows
From the Windows Start menu, start PuTTYGen.
In the window that opens, click Load .
Browse the local file system for your public key file and select the
file.
PuTTYGen displays the public key string. If you specified a passphrase
when you saved the key file, PuTTYGen prompts you to enter it before you
can view the public key.
Register a public key
In the Google Cloud console, open the Manage SSH Keys page.
Open Cloud Source Repositories
Click Register SSH key .
The Register SSH Key dialog opens.
In the Key name field, type a unique name for the key.
In the Key field, copy the key string from your public key file.
Click Register .
After you set up SSH authentication, you can
clone any repository
for which you have the required roles and permissions, or
push the contents
of a local repository to an empty hosted repository.
Authenticate by using the gcloud CLI
Cloud Source Repositories lets you authenticate by using the
gcloud CLI. In this scenario, you run the
gcloud init
command on your system to set up local authentication.
Ensure that the
gcloud CLI
is installed on your local system.
At a command prompt, run gcloud init :
gcloud init
Follow the instructions.
After you set up authentication by using the gcloud CLI, you can use
standard Git commands to interact with the hosted repository on
Cloud Source Repositories.
Authenticate by using manually generated credentials
You can also use manually generated credentials for authentication.
Cloud Source Repositories provides a set of scripts you can use to manually
generate the credentials you need to access hosted repositories.
Go to the Configure Git page to generate your credentials.
Go to the Configure Git page
Open a terminal window.
Type the following command:
git clone https://source.developers.google.com/p/ PROJECT_ID /r/ REPOSITORY_NAME
Where:
PROJECT_ID is the name of your project
REPOSITORY_NAME is the name of your repository
After you set up authentication with manually generated credentials, you can
interact with the hosted repository on Cloud Source Repositories by using the
standard Git commands.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
