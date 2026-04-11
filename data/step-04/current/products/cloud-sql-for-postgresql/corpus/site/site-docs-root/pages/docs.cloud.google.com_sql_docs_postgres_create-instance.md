---
title: "Create instances \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sql/docs/postgres/create-instance
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/sql/docs/postgres
source_metadata:
  url: https://docs.cloud.google.com/sql/docs/postgres/create-instance
  title: "Create instances \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Cloud SQL
PostgreSQL
Guides
Send feedback
Create instances
Stay organized with collections
Save and categorize content based on your preferences.
MySQL
| PostgreSQL
| SQL Server
This page describes how to create a Cloud SQL for PostgreSQL instance.
For detailed information about all instance settings, see
Instance settings .
A newly-created instance has a postgres database.
The maximum number of instances you can have in a single project depends on the
network architecture
of those instances:
New SQL network architecture: You can have up to 1000 instances per project.
Old SQL network architecture: You can have up to 100 instances per project.
Using both architectures: Your limit will be somewhere between 100 and 1000,
depending on the distribution of your instances across the two architectures.
File a support case
to request an increase. Read replicas are counted as instances.
Note: This page contains features related to
Cloud SQL editions. For more information about Cloud SQL editions, see
Introduction to
Cloud SQL editions .
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
Install the gcloud CLI .
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
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
Install the gcloud CLI .
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Make sure you have the Cloud SQL Admin and Compute Viewer roles on
your user account.
Go to the IAM page
Learn more
about roles and permissions.
Create a PostgreSQL instance
Important: For your Cloud SQL Enterprise Plus edition instance,
Cloud SQL can generate a write endpoint automatically. For more information
about this endpoint, including requirements for generating one automatically, see
Generate the write endpoint .
Tip : If you plan on using private networking, then you
can deploy both the private networking setup of your choice and the Cloud SQL
instance along with clients such as Compute Engine VMs by using Terraform.
For more information, see
Simplified Cloud Networking Configuration Solutions .
Console
In the Google Cloud console, go to the Cloud SQL Instances page.
Go to Cloud SQL Instances
Click Create instance .
On the Choose your database engine panel of the
Create an instance page, click Choose PostgreSQL .
In the Choose a Cloud SQL edition section of the
Create a SQL Server instance page, select the Cloud SQL
edition for your instance: Enterprise or
Enterprise Plus .
Note : If the database version for your instance
is PostgreSQL 16 or later, then the default Cloud SQL for PostgreSQL edition is
Cloud SQL Enterprise Plus edition. If the database version is earlier than PostgreSQL 16, then
the default edition is Cloud SQL Enterprise edition.
For more information about Cloud SQL editions, see
Introduction to Cloud SQL editions .
Select the edition preset for your instance. To see the available
presets, click the Edition preset menu.
Note: To learn about how edition presets differ
from one another, click Compare edition presets .
In the Instance info section, select the database version for your
instance. To see the available versions, click the Database version
menu.
The database version can't be edited after the instance has been created.
Note: Only PostgreSQL versions 12 and later
are compatible with Cloud SQL Enterprise Plus edition.
In the Instance ID field of the Instance info pane, enter
an ID for your instance.
Don't include sensitive or personally identifiable
information in your instance name.
You do not need to include the project ID in the instance name. This is done automatically where
appropriate (for example, in the log files).
Enter a password for the postgres user.
To see the password in clear text, click the Show password icon.
You can either enter the password manually or click Generate
to have Cloud SQL create a password for you automatically.
Optional: Configure a password policy for the instance as follows:
Select the Enable password policies checkbox.
Note: When you enable a password policy, statements
that create users or change user passwords can cause additional
latency due to password policy verification.
Click the Set password policy button, set one or more of
the following options, and click Save .
Minimum length : Specifies the minimum number of characters that
the password must have.
Password complexity : Checks if the password is a
combination of lowercase, uppercase, numeric, and non-alphanumeric
characters.
Restrict password reuse : Specifies the number of previous
passwords that you can't reuse.
Disallow username : Prevents the use of the username in the password.
Set password change interval : Specifies the minimum number of hours
after which you can change the password.
Note: When you deselect the
Enable password policies checkbox, the password policy parameters
are reset.
In the Choose region and zonal availability section, select the
region and zone for your instance. Region availability might be different
based on your Cloud SQL for PostgreSQL edition. For more information, see
About instance settings .
Place your instance in the same region as the resources that
access it. The region you select can't be modified in the future. In most
cases, you don't need to specify a zone.
Note: If there is a resource location
constraint on your organization policy, you must select one of the
regions that the organization policy allows. You see a message about
Resource Location Restriction in the Choose region and zonal availability
section if a constraint exists.
Learn more .
If you are configuring your instance for
high availability ,
you can select both a primary and secondary zone.
The following conditions apply when the secondary zone is used during
instance creation:
The zones default to Any for the primary zone and
Any (different from primary) for the secondary zone.
If both the primary and secondary zones are specified, they must
be distinct zones.
In the Customize your instance section, update settings for your
instance.
Begin by clicking SHOW CONFIGURATION OPTIONS to display the groups
of settings. Then, expand the groups you want to review and customize settings.
A Summary of all the options you select is shown on the right.
Customizing these instance settings is optional. Defaults are assigned in
every case where no customizations are made.
The following table is a quick reference to instance settings. For more
details about each setting, see the
instance settings
page.
Setting
Notes
Machine type
Machine type
Select from Shared core or Dedicated core. For Shared core, each machine type
is classified by the number of CPUs
(cores) and amount of memory for your instance.
Cores
The number of vCPUs for your instance.
Learn more .
Memory
The amount of memory for your instance, in GBs.
Learn more .
Custom
For the Dedicated core machine type, instead of selecting a predefined configuration,
select the Custom button to create an instance with
a custom configuration. When you select
this option, you need to select the number of cores and amount of memory for your instance.
Learn more .
Data cache
Enable data cache
By default, the option to enable data cache is
selected automatically for Cloud SQL for PostgreSQL Enterprise Plus edition instances.
If you don't want to enable data cache, then clear
the Enable data cache checkbox.
For more information about data cache,
see data cache .
Storage
Storage type
Determines whether your instance uses SSD or HDD storage.
Learn more .
Storage capacity
The amount of storage provisioned for the instance.
Learn more .
Enable automatic storage increases
Determines whether Cloud SQL automatically provides more storage
for your instance when free space runs low.
Learn more .
Encryption
Google-managed encryption The default option.
Customer key-managed encryption key (CMEK) Select
to use your key with Google Cloud Key Management Service. Learn more .
Connections
Private IP
Adds a private IP address for your instance. To enable connecting to the instance,
additional configuration is required.
Optionally, you can specify an allocated IP range for your instances to use for connections.
Expand Show allocated IP range option .
Select an IP range from the drop-down menu.
Your instance can have both a public and a private IP address.
Note: Cloud SQL generates a write endpoint automatically for your Cloud SQL Enterprise Plus edition instance if you do the following:
If you haven't already enabled the Cloud DNS API, enable the Cloud DNS API for your Google Cloud project.
Enable the Cloud DNS API for your Google Cloud project (if this API isn't enabled).
Add a private IP address to the instance.
Specify an associated network for the instance.
Optionally, specify an allocated IP range for the instance.
Learn more about using private IP .
Learn more about allocated IP address ranges .
Public IP
Adds a public IP address for your instance. You can then add authorized networks to connect
to the instance.
Your instance can have both a public and a private IP address.
Learn more about using public IP .
Authorized networks Add the name for the new network and the Network address.
Learn more .
Allow Data API
By selecting this checkbox, you let authorized users to call the
Data API
to execute SQL statements on the instance. For instances with Private IP only,
this allows authorized users to call the Data API from the public internet.
Enable private path
By selecting this checkbox, you let other Google Cloud services, such as
BigQuery, access data in Cloud SQL and make queries against this data over
a private connection.
Note: This checkbox is enabled only if you select the
Private IP check box, and you add or select an authorized network to create a private
connection.
Enable Managed Connection Pooling
By selecting this checkbox, you enable Managed Connection Pooling for your instance. Managed Connection Pooling
lets you scale your workloads by optimizing resource utilization and connection latency
Cloud SQL instances using pooling and multiplexing. For more
information about Managed Connection Pooling, see
Managed Connection Pooling overview .
Security
Server certificate authority mode
Choose the type of certificate authority (CA) that signs the server certificate for
this Cloud SQL instance.
Learn more .
By default, when you create an instance in Google Cloud console, the instance uses the Google managed
internal certificate authority ( GOOGLE_MANAGED_INTERNAL_CA ), which is the per-instance CA option.
Data protection
Backup tier
The backup option
of your instance. You can choose between
enhanced backups
and standard backups .
Automate backups
The window of time when you would like backups to start.
Learn more .
Choose where to store your backups Select Multi-region for most use cases. If you
need to store backups in a specific region, for example, if there are regulatory reasons to do
so, select Region and select your region from the Location drop-down menu.
Choose how many automated backups to store The number of automated backups you
would like to retain (from 1 to 365 days).
Learn more .
Enable point-in-time recovery
Enables point-in-time recovery and write-ahead logging.
Learn more .
Note:
To speed up instance creation when PITR is enabled, Cloud SQL uses an initial
instant snapshot for PITR instead of a
standard backup .
This snapshot is later converted to a standard backup in the background to support restore
operations.
PITR is enabled by default during instance creation in the following conditions:
In Cloud SQL Enterprise Plus edition :
PITR is enabled by default, regardless of how you create the instance.
In Cloud SQL Enterprise edition :
If you create the instance in Google Cloud console, PITR is enabled by default.
If you create the instance using gcloud CLI , Terraform, or Cloud SQL Admin API,
then PITR is disabled by default. In this case, you must enable PITR manually if you
want to use it.
Enable deletion protection
Determines whether to protect an instance against accidental deletion.
Learn more .
Enable retained backups after instance deletion
Determines whether automated and on-demand backups are retained after an instance is deleted.
Learn more .
Choose how many days of logs to retain
Configure write-ahead log retention from 1 to 7 days. The default setting is 7 days.
Learn more .
Maintenance
Preferred window
Determines a one-hour window when Cloud SQL can perform disruptive
maintenance on your instance. If you do not set the window, then
disruptive maintenance can be done at any time.
Learn more .
Order of updates
Your preferred timing for instance updates, relative to other
instances in the same project.
Learn more .
Flags
ADD FLAG
You can use database flags to control settings and parameters for
your instance.
Learn more .
Labels
ADD LABEL Add a key and value for each label that you add. You use labels to help
organize your instances.
Click Create Instance .
Note: It might take a few minutes to create your instance. However,
you can view information about the
instance while it's being created.
gcloud
For information about installing and getting started with the
gcloud CLI , see
Installing gcloud CLI .
For information about starting Cloud Shell, see the
Cloud Shell documentation .
Use the
gcloud sql instances create
command to create the instance:
For Cloud SQL Enterprise Plus edition instances:
gcloud sql instances create INSTANCE_NAME \
--database-version = DATABASE_VERSION \
--region = REGION \
--tier = TIER \
--edition = ENTERPRISE_PLUS
Note : If the database version for your instance
is PostgreSQL 16 or later, then the default edition is Cloud SQL Enterprise Plus edition.
For Cloud SQL Enterprise edition instances:
gcloud sql instances create INSTANCE_NAME \
--database-version = DATABASE_VERSION \
--region = REGION \
--cpu = NUMBER_CPUS \
--memory = MEMORY_SIZE \
--edition = ENTERPRISE
Note : If you either don't specify a database
version or you specify a version other than PostgreSQL 16 or later, then the
default edition is Cloud SQL Enterprise edition. If you specify PostgreSQL 16 or later for
the database version of your instance, but you create the instance in a region
that doesn't have region support
for Cloud SQL Enterprise Plus edition, then you must create an Cloud SQL Enterprise edition instance.
Or, alternatively, you can use the --tier flag if you choose
db-f1-micro or db-g1-small as the machine type:
gcloud sql instances create INSTANCE_NAME \
--tier = API_TIER_STRING \
--region = REGION
There are restrictions on the values for vCPUs and memory size:
vCPUs must be either 1 or an even number between 2 and 96.
Memory must be:
0.9 to 6.5 GB per vCPU
A multiple of 256 MB
At least 3.75 GB (3840 MB)
For example, the following command creates a Cloud SQL Enterprise edition instance with two
vCPUs and 7,680 MB of memory:
gcloud sql instances create myinstance \
--database-version = POSTGRES_16 \
--cpu = 2 \
--memory = 7680MB \
--region = us-central1
The following command creates a Cloud SQL Enterprise Plus edition instance with four cores:
gcloud sql instances create myinstance \
--database-version = POSTGRES_16 \
--tier = db-perf-optimized-N-4 \
--edition = ENTERPRISE_PLUS \
--region = us-central1
See Custom instance configuration for more
information about how to size --cpu and --memory .
The default value for REGION is us-central1 .
Don't include sensitive or personally identifiable information
in your instance name; it is externally visible.
You do not need to include the project ID in the instance name. This is done automatically where
appropriate (for example, in the log files).
If you are creating an instance for
high availability , you
can specify both the primary and secondary zones, using the --zone
and --secondary-zone parameters. The following conditions
apply when the secondary zone is used during instance creation or edit:
The zones must be valid zones.
If the secondary zone is specified, the primary must also be specified.
If the primary and secondary zones are specified, they must be distinct
zones.
If the primary and secondary zones are specified, they must belong to
the same region.
You can add more parameters
to determine other instance settings:
Setting
Parameter
Notes
Required parameters
Database version
--database-version
The database version ,
which is based on your Cloud SQL edition.
Region
--region
See valid values .
Note: Some organizations use an organization
policy to restrict resource locations. If this type of policy affects your
project, you can only select regions the organization policy allows. In
the Location drop-down menu in the Console, the locations that are
not allowed are unavailable.
Learn more .
Set password policy
Enable password policy
--enable-password-policy
Enables the password policy when used. By default, the password policy
is disabled. When disabled using the --clear-password-policy
parameter, the other password policy parameters are reset.
Note: When you enable a password policy, statements that
create users or change user passwords can cause additional latency due to
password policy verification.
Minimum length
--password-policy-min-length
Specifies the minimum number of characters that the password must have.
Password complexity
--password-policy-complexity
Enables the password complexity check to ensure that the password
contains one of each of these types of characters: lowercase, uppercase,
numeric, and non-alphanumeric. Set the value to
COMPLEXITY_DEFAULT .
Restrict password reuse
--password-policy-reuse-interval
Specifies the number of previous passwords that you can't reuse.
Disallow username
--password-policy-disallow-username-substring
Prevents the use of the username in the password. Use
the --no-password-policy-disallow-username-substring
parameter to disable the check.
Set password change interval
--password-policy-password-change-interval
Specifies the minimum duration after which you can change the password,
for example, 2m for 2 minutes.
Connectivity
Managed Connection Pooling
--enable-connection-pooling
Enables Managed Connection Pooling
in the new instance. You can configure advanced Managed Connection Pooling
settings after your instance is created.
Note: This feature is only available for Cloud SQL Enterprise Plus edition
instances that are configured to meet Managed Connection Pooling
requirements.
Private IP
--network
--no-assign-ip (optional)
--allocated-ip-range-name (optional)
--enable-google-private-path (optional)
--network : Specifies the name of the VPC network you want
to use for this instance. Private services access must already be
configured for the network. Available only for the beta command
( gcloud beta sql instances create ).
--no-assign-ip : Instance will only have a private IP
address.
--allocated-ip-range-name : If specified, sets a range name
for which an IP range is allocated. For
example, google-managed-services-default . The range name
should comply with RFC-1035 and be within 1-63 characters.
( gcloud alpha sql instances create ).
--enable-google-private-path : If you use this parameter,
then you allow other Google Cloud services, such as
BigQuery, to access data in Cloud SQL and make queries
against this data over a private connection.
This parameter is valid only if:
You use the --no-assign-ip parameter.
You use the --network parameter to specify the name
of the VPC network that you want to use to create a private connection.
Note: Cloud SQL generates a write
endpoint automatically for your Cloud SQL Enterprise Plus edition instance if you do the
following:
Enable the Cloud DNS API
for your Google Cloud project (if this API isn't enabled).
Add a private IP address to the instance.
Specify an associated network for the instance.
Optionally, specify an allocated IP range for the instance.
Data API Access
--data-api-access
Controls connectivity to the instance using
Data API . It's
disallowed by default. Set the value to ALLOW_DATA_API to
let users use the Data API to connect to the instance. For instances
configured with a private IP address only, authorized users can call the Data API on
the instance from the public internet. Set the value to
DISALLOW_DATA_API to disallow using the Data API.
Public IP
--authorized-networks
For public IP connections, only connections from authorized networks
can connect to your instance.
Learn more .
SSL Enforcement
--ssl-mode
--require-ssl
The ssl-mode parameter enforces the SSL/TLS enforcement
for the connections. For more information, see
Settings for
Cloud SQL for PostgreSQL .
The require-ssl parameter determines whether SSL
connections over IP are enforced
or not. require-ssl is a legacy parameter.
Use ssl-mode instead.
For more information, see IpConfiguration .
Server CA mode
--server-ca-mode
The --server-ca-mode flag configures the type of
server certificate
authority (CA) for an instance. You can select one of the following
options:
GOOGLE_MANAGED_INTERNAL_CA : this is the default value.
With this option, an internal CA dedicated to each Cloud SQL
instance signs the server certificate for that instance.
GOOGLE_MANAGED_CAS_CA :
with this option, a CA hierarchy consisting of a root CA and subordinate
server CAs managed by Cloud SQL and hosted on
Google Cloud Certificate Authority Service (CA Service) is used.
The subordinate server CAs in a region sign the server certificates and
are shared across instances in the region.
CUSTOMER_MANAGED_CAS_CA :
with this option, you define the CA hierarchy and manage the rotation of
the CA certificates. You create a CA pool in CA Service in the same region of your instance. One of the CAs in the pool is used to sign the server certificate.
For more information, see Use a customer-managed CA .
Automatic server certificate rotation
--server-certificate-rotation-mode
The --server-certificate-rotation-mode flag configures the type of
server certificate rotation mode of the instance. You can select one of the following
options:
NO_AUTOMATIC_ROTATION : this is the default value.
With this option, there won't be no automatic server certificate rotation.
Server certificates must be rotated manually.
AUTOMATIC_ROTATION_DURING_MAINTENANCE :
With this option, automatic server certificate rotation is enabled
during Cloud SQL scheduled maintenance or self-service maintenance updates.
Requires server_ca_mode to be
GOOGLE_MANAGED_CAS_CA or CUSTOMER_MANAGED_CAS_CA .
Network architecture
--enforce-new-sql-network-architecture
Enforce the use of the new network
architecture for the instance upon creation.
Using this flag when you create an instance before
that project has been fully upgraded to the new network
architecture can lead to IP address overconsumption or
a failure to create instances if there aren't
sufficient IP addresses remaining in the allocated IP
range.
For more information, see
Upgrade an instance to the new network architecture and Allocate an IP address range .
Machine type and storage
Machine type
--tier
Used to specify a shared-core instance
( db-f1-micro
or db-g1-small ).
For a custom instance configuration, use the --cpu or
--memory parameters instead. See
Custom instance configuration .
Storage type
--storage-type
Determines whether your instance uses SSD or HDD storage.
Learn more .
Storage capacity
--storage-size
The amount of storage provisioned for the instance, in GB.
Learn more .
Automatic storage increase
--storage-auto-increase
Determines whether Cloud SQL automatically provides more storage
for your instance when free space runs low.
Learn more .
Automatic storage increase limit
--storage-auto-increase-limit
Determines how large Cloud SQL can automatically grow storage.
Available only for the beta command
( gcloud beta sql instances create ).
Learn more .
Data cache (optional)
--enable-data-cache
Enables or deactivates the data cache for instances. For more
information, see
data cache .
Automatic backups and high availability
High availability
--availability-type
For a highly-available instance, set to REGIONAL .
Learn more .
Secondary zone
--secondary-zone
If you're creating an instance for
high availability ,
you can specify both the primary and secondary zones using the
--zone and --secondary-zone parameters . The
following restrictions apply when the secondary zone is used during
instance creation or edit:
The zones must be valid zones.
If the secondary zone is specified, the primary must also be specified.
If the primary and secondary zones are specified, they must be distinct
zones.
If the primary and secondary zones are specified, they must belong to
the same region.
Automatic backups
--backup-start-time
The window of time when you would like backups to start.
Learn more .
Retention settings for automated backups
--retained-backups-count
The number of automated backups to retain.
Learn more .
Retention settings for binary logging
--retained-transaction-log-days
The number of days to retain write-ahead logs for point-in-time recovery. Learn more .
Point-in-time recovery
--enable-point-in-time-recovery
Enables point-in-time recovery and write-ahead logging.
Learn more .
Note:
To speed up instance creation when PITR is enabled, Cloud SQL uses an initial
instant snapshot for PITR instead of a
standard backup .
This snapshot is later converted to a standard backup in the background to support restore
operations.
PITR is enabled by default during instance creation in the following
conditions:
In Cloud SQL Enterprise Plus edition :
PITR is enabled by default, regardless of how you create the
instance.
In Cloud SQL Enterprise edition :
If you create the instance in the Google Cloud console, PITR is
enabled by default.
If you create the instance using the gcloud CLI ,
Terraform, or the Cloud SQL Admin API, then PITR is disabled by default,
and you must enable PITR manually to use it.
Add database flags
Database flags
--database-flags
You can use database flags to control settings and parameters for
your instance.
Learn more about database
flags .
Maintenance schedule
Maintenance window
--maintenance-window-day ,
--maintenance-window-hour
Determines a one-hour window when Cloud SQL can perform
disruptive maintenance on your instance. If you don't set the window,
then disruptive maintenance can be done at any time.
Learn more .
Maintenance timing
--maintenance-release-channel
Your preferred timing for instance updates, relative to other
instances in the same project. Use preview for earlier
updates, and production for later updates.
Learn more .
Integration with Vertex AI
--enable-google-ml-integration
Enables Cloud SQL instances to connect to Vertex AI
to pass requests for real-time predictions
and insights to the AI.
--database-flags cloudsql.enable_google_ml_integration=on
By turning this flag on, Cloud SQL can integrate with
Vertex AI.
Custom SAN
Add a custom subject alternative name (SAN)
--custom-subject-alternative-names= DNS_NAMES
If you want to use a custom DNS name to connect to a Cloud SQL instance instead of using an IP address, then configure the custom subject alternative name (SAN) setting while creating the instance. The custom DNS name that you insert into the custom SAN setting is added to the SAN field of the server certificate of the instance. This lets you use the custom DNS name with hostname validation securely.
Before you can use the custom DNS name in your clients and applications, you must set up the mapping between the DNS name and the IP address. This is known as DNS resolution . You can add a comma-separated list of up to three custom DNS names to the custom SAN setting.
Note: This feature is available for CUSTOMER_MANAGED_CAS_CA instances only. To create the instance, you must use the gcloud sql instances create command.
Note the automatically assigned IP address.
If you are not using the Cloud SQL Auth Proxy, you will use this address as the
host address that your applications or tools use to connect to the
instance.
Set the password for the postgres user:
gcloud sql users set-password postgres \
--instance = INSTANCE_NAME \
--password = PASSWORD
Terraform
To create an instance, use a
Terraform resource .
resource "google_sql_database_instance" "postgres_pvp_instance_name" {
name = "postgres-pvp-instance-name"
region = "asia-northeast1"
database_version = "POSTGRES_14"
root_password = "abcABC123!"
settings {
tier = "db-custom-2-7680"
password_validation_policy {
min_length = 6
reuse_interval = 2
complexity = "COMPLEXITY_DEFAULT"
disallow_username_substring = true
password_change_interval = "30s"
enable_password_policy = true
}
}
# set `deletion_protection` to true, will ensure that one cannot accidentally delete this instance by
# use of Terraform whereas `deletion_protection_enabled` flag protects this instance at the GCP level.
deletion_protection = false
}
Apply the changes
To apply your Terraform configuration in a Google Cloud project, complete the steps in the
following sections.
Prepare Cloud Shell
Launch Cloud Shell .
Set the default Google Cloud project
where you want to apply your Terraform configurations.
You only need to run this command once per project, and you can run it in any directory.
export GOOGLE_CLOUD_PROJECT= PROJECT_ID
Environment variables are overridden if you set explicit values in the Terraform
configuration file.
Prepare the directory
Each Terraform configuration file must have its own directory (also
called a root module ).
In Cloud Shell , create a directory and a new
file within that directory. The filename must have the
.tf extension—for example main.tf . In this
tutorial, the file is referred to as main.tf .
mkdir DIRECTORY && cd DIRECTORY && touch main.tf
If you are following a tutorial, you can copy the sample code in each section or step.
Copy the sample code into the newly created main.tf .
Optionally, copy the code from GitHub. This is recommended
when the Terraform snippet is part of an end-to-end solution.
Review and modify the sample parameters to apply to your environment.
Save your changes.
Initialize Terraform. You only need to do this once per directory.
terraform init
Optionally, to use the latest Google provider version, include the -upgrade
option:
terraform init -upgrade
Apply the changes
Review the configuration and verify that the resources that Terraform is going to create or
update match your expectations:
terraform plan
Make corrections to the configuration as necessary.
Apply the Terraform configuration by running the following command and entering yes
at the prompt:
terraform apply
Wait until Terraform displays the "Apply complete!" message.
Open your Google Cloud project to view
the results. In the Google Cloud console, navigate to your resources in the UI to make sure
that Terraform has created or updated them.
Note: Terraform samples typically assume that the required APIs are
enabled in your Google Cloud project.
Delete the changes
To delete your changes, do the following:
To disable deletion protection, in your Terraform configuration file set the
deletion_protection argument to false .
deletion_protection = "false"
Apply the updated Terraform configuration by running the following command and
entering yes at the prompt:
terraform apply
Remove resources previously applied with your Terraform configuration by running the following
command and entering yes at the prompt:
terraform destroy
REST v1
Create the instance
This example creates an instance. Some optional parameters, such as
backups and binary logging are also included.
For a complete list of parameters for this call, see the
Instances:insert
page. For information about instance settings, including valid values for
region, see
Instance settings .
Don't include sensitive or personally identifiable information
in your instance ID; it is externally visible.
You do not need to include the project ID in the instance name. This is done automatically where
appropriate (for example, in the log files).
Before using any of the request data,
make the following replacements:
PROJECT_ID : your project ID
INSTANCE_ID : your instance ID
REGION : the region
DATABASE_VERSION : enum string of the database version (for example, POSTGRES_18 )
PASSWORD : the password for the root user
MACHINE_TYPE : enum string of the machine (tier) type, as:
db-custom-[CPUS]-[MEMORY_MBS]
EDITION_TYPE : your Cloud SQL edition
Note : If the database version for your instance is PostgreSQL 16 and later, then the default edition is Cloud SQL Enterprise Plus edition. If you either don't specify a database version or you specify a version other than PostgreSQL 16 and later, then the default edition is Cloud SQL Enterprise edition.
If you specify PostgreSQL 16 and later for the database version of your instance, but you create the instance in a region that doesn't have region support for Cloud SQL Enterprise Plus edition, then you must create a Cloud SQL Enterprise edition instance.
DATA_CACHE_ENABLED : (optional) set to true to enable data cache for your instance
PRIVATE_NETWORK : specify the name of the Virtual Private Cloud (VPC) network that
you want to use for this instance. Private services access must already be configured for the
network.
Cloud SQL generates a write endpoint automatically for your Cloud SQL Enterprise Plus edition instance if you do the following:
Enable the Cloud DNS API for your Google Cloud project (if this API isn't enabled).
Add a private IP address to the instance.
Specify an associated network for the instance.
Optionally, specify an allocated IP range for the instance.
AUTHORIZED_NETWORKS : for public IP connections, specify the connections from authorized
networks that can connect to your instance.
CA_MODE : specify a
certificate authority hierarchy
for the instance, either GOOGLE_MANAGED_INTERNAL_CA or GOOGLE_MANAGED_CAS_CA .
If you don't specify serverCaMode , then the default configuration is GOOGLE_MANAGED_INTERNAL_CA .
This feature is in Preview .
SERVER_CERTIFICATE_ROTATION_MODE : For automatic server certificate rotation for your instance,
specify AUTOMATIC_ROTATION_DURING_MAINTENANCE . If you don't specify
serverCertificateRotationMode , then the default configuration is NO_AUTOMATIC_ROTATION .
DNS_NAMES : add a comma-separated list of up to three DNS names to the server certificate of your Cloud SQL instance. You can secure multiple DNS names with a single certificate. This feature is available in Preview and for CUSTOMER_MANAGED_CAS_CA instances only.
Note: For the ipv4Enabled parameter, set the value to true
if you're using a public IP address for your instance or false if your instance has a
private IP address.
If you set the enablePrivatePathForGoogleCloudServices parameter to true ,
then you allow other Google Cloud services, such as BigQuery, to access data in
Cloud SQL and make queries against this data over a private connection. By setting this parameter to
false , other Google Cloud services can't access data in Cloud SQL over a private connection.
If you set dataApiAccess to ALLOW_DATA_API , then you allow authorized
users to use Data API to connect to your instance.
For Private IP only instances, this allows authorized users to connect from the public internet.
To set a password policy while creating an instance, include the
passwordValidationPolicy object in the request.
Set the following parameters, as required:
enablePasswordPolicy : Enables the password policy when set to true .
To remove the password policy, you can use a PATCH
request with null as the value for enablePasswordPolicy .
In this case, the other password policy parameters are reset.
Note: When you enable a password policy, statements
that create users or change user passwords can cause additional
latency due to password policy verification.
minLength : Specifies the minimum number of characters that
the password must have.
complexity : Checks if the password is a
combination of lowercase, uppercase, numeric, and non-alphanumeric
characters. The default value is COMPLEXITY_DEFAULT .
reuseInterval : Specifies the number of previous passwords that you can't reuse.
disallowUsernameSubstring : Prevents the use of the username in the password
when set to true .
passwordChangeInterval : Specifies the minimum duration after which you can
change the password. The value is in seconds with up to nine fractional digits,
terminated by s . For example, 3.5s .
To create the instance so that it can integrate with Vertex AI , include the enableGoogleMlIntegration object in the request. This integration lets you apply large language models (LLMs), which are hosted in Vertex AI, to a Cloud SQL for PostgreSQL database.
Set the following parameters, as required:
enableGoogleMlIntegration : when this parameter is set to true , Cloud SQL instances can connect to Vertex AI to pass requests for real-time predictions and insights to the AI
cloudsql.enable_google_ml_integration : when this parameter is set to on , Cloud SQL can integrate with Vertex AI
You can use the sqlNetworkArchitecture field to enforce the use of the new network
architecture for the instance upon creation, even if the project isn't fully upgraded.
For more details about the new network architecture and its implications, see
Upgrade an instance to the new network architecture and Allocate an IP address range .
HTTP method and URL:
POST https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /instances
Request JSON body:
{
"name": " INSTANCE_ID ",
"region": " REGION ",
"databaseVersion": " DATABASE_VERSION ",
"rootPassword": " PASSWORD ",
"settings": {
"tier": " MACHINE_TYPE ",
"edition": " EDITION_TYPE ",
"enableGoogleMlIntegration": " true " | " false "
"databaseFlags":
[
{
"name": "cloudsql.enable_google_ml_integration",
"value": " on " | " off "
}
]
"dataCacheConfig": {
"dataCacheEnabled": DATA_CACHE_ENABLED
},
"backupConfiguration": {
"enabled": true
},
"passwordValidationPolicy": {
"enablePasswordPolicy": true
"minLength": " MIN_LENGTH ",
"complexity": COMPLEXITY_DEFAULT,
"reuseInterval": " REUSE_INTERVAL ",
"disallowUsernameSubstring": " DISALLOW_USERNAME_SUBSTRING ",
"passwordChangeInterval": " PASSWORD_CHANGE_INTERVAL "
},
"ipConfiguration": {
"privateNetwork": " PRIVATE_NETWORK ",
"authorizedNetworks": [ AUTHORIZED_NETWORKS ],
"ipv4Enabled": false,
"enablePrivatePathForGoogleCloudServices": true,
"serverCaMode": " CA_MODE ",
"serverCertificateRotationMode": " SERVER_CERTIFICATE_ROTATION_MODE ",
"customSubjectAlternativeNames": " DNS_NAMES "
},
"dataApiAccess": "ALLOW_DATA_API"
},
"sqlNetworkArchitecture": "NEW_NETWORK_ARCHITECTURE"
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /instances"
PowerShell (Windows)
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /instances" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"kind": "sql#operation",
"targetLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /instances/ INSTANCE_ID ",
"status": "PENDING",
"user": "user@example.com",
"insertTime": "2019-09-25T22:19:33.735Z",
"operationType": "CREATE",
"name": " OPERATION_ID ",
"targetId": " INSTANCE_ID ",
"selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /operations/ OPERATION_ID ",
"targetProject": " PROJECT_ID "
}
The response is a
long-running operation ,
which might take a few minutes to complete.
Retrieve the IPv4 address
Retrieve the automatically assigned IPv4 address for the new instance:
Before using any of the request data,
make the following replacements:
project-id : your project ID
instance-id : instance ID created in prior step
HTTP method and URL:
GET https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
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
Execute the following command:
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id "
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"kind": "sql#instance",
"state": "RUNNABLE",
"databaseVersion": "MYSQL_8_0_18",
"settings": {
"authorizedGaeApplications": [],
"tier": "db-f1-micro",
"kind": "sql#settings",
"pricingPlan": "PER_USE",
"replicationType": "SYNCHRONOUS",
"activationPolicy": "ALWAYS",
"ipConfiguration": {
"authorizedNetworks": [],
"ipv4Enabled": true
},
"locationPreference": {
"zone": "us-west1-a",
"kind": "sql#locationPreference"
},
"dataDiskType": "PD_SSD",
"backupConfiguration": {
"startTime": "18:00",
"kind": "sql#backupConfiguration",
"enabled": true,
"binaryLogEnabled": true
},
"settingsVersion": "1",
"storageAutoResizeLimit": "0",
"storageAutoResize": true,
"dataDiskSizeGb": "10"
},
"etag": "--redacted--",
"ipAddresses": [
{
"type": "PRIMARY",
"ipAddress": " 10.0.0.1 "
}
],
"serverCaCert": {
...
},
"instanceType": "CLOUD_SQL_INSTANCE",
"project": " project-id ",
"serviceAccountEmailAddress": "redacted@gcp-sa-cloud-sql.iam.gserviceaccount.com",
"backendType": "SECOND_GEN",
"selfLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id ",
"connectionName": " project-id:region:instance-id ",
"name": " instance-id ",
"region": "us-west1",
"gceZone": "us-west1-a"
}
Look for the ipAddress field in the response.
REST v1beta4
Create the instance
This example creates an instance. Some optional parameters, such as
backups and binary logging are also included.
For a complete list of parameters for this call, see the
instances:insert
page. For information about instance settings, including valid values for
region, see
Instance settings
Don't include sensitive or personally identifiable information
in your instance ID; it is externally visible.
You do not need to include the project ID in the instance name. This is done automatically where
appropriate (for example, in the log files).
Before using any of the request data,
make the following replacements:
PROJECT_ID : your project ID
INSTANCE_ID : your instance ID
REGION : the region
DATABASE_VERSION : enum string of the database version (for example, POSTGRES_18 )
PASSWORD : the password for the root user
MACHINE_TYPE : enum string of the machine (tier) type, as:
db-custom-[CPUS]-[MEMORY_MBS]
EDITION_TYPE : your Cloud SQL edition
Note : If the database version for your instance is PostgreSQL 16 and later, then the default edition is Cloud SQL Enterprise Plus edition. If you either don't specify a database version or you specify a version other than PostgreSQL 16 and later, then the default edition is Cloud SQL Enterprise edition.
If you specify PostgreSQL 16 and later for the database version of your instance, but you create the instance in a region that doesn't have region support for Cloud SQL Enterprise Plus edition, then you must create a Cloud SQL Enterprise edition instance.
DATA_CACHE_ENABLED : (optional) set to true to enable data cache for your instance
PRIVATE_NETWORK : Specify the name of the Virtual Private Cloud (VPC) network that
you want to use for this instance. Private services access must already be configured for the
network.
AUTHORIZED_NETWORKS : For public IP connections, specify the connections from authorized
networks that can connect to your instance.
CA_MODE : specify a
certificate authority hierarchy
for the instance, either GOOGLE_MANAGED_INTERNAL_CA or GOOGLE_MANAGED_CAS_CA .
If you don't specify serverCaMode , then the default configuration is GOOGLE_MANAGED_INTERNAL_CA .
This feature is in Preview .
SERVER_CERTIFICATE_ROTATION_MODE : For automatic server certificate rotation for your instance, specify
AUTOMATIC_ROTATION_DURING_MAINTENANCE . If you don't specify serverCertificateRotationMode ,
then the default configuration is NO_AUTOMATIC_ROTATION .
DNS_NAMES : add a comma-separated list of up to three DNS names to the server certificate of your Cloud SQL instance. You can secure multiple DNS names with a single certificate. This feature is available in Preview and for CUSTOMER_MANAGED_CAS_CA instances only.
Note: For the ipv4Enabled parameter, set the value to true
if you're using a public IP address for your instance or false if your instance has a
private IP address.
If you set the enablePrivatePathForGoogleCloudServices parameter to true ,
then you allow other Google Cloud services, such as BigQuery, to access data in
Cloud SQL and make queries against this data over a private connection. By setting this parameter to
false , other Google Cloud services can't access data in Cloud SQL over a private connection.
If you set dataApiAccess to ALLOW_DATA_API , then you allow authorized
users to use the Data API to connect to and execute SQL statements on your instance.
For Private IP-only instances, enabling Data API access lets authorized users connect and execute SQL statements from the public internet.
Note: Cloud SQL generates a write endpoint automatically for your Cloud SQL Enterprise Plus edition instance if you do the following:
Enable the Cloud DNS API for your Google Cloud project (if this API isn't enabled).
Add a private IP address to the instance.
Specify an associated network for the instance.
Optionally, specify an allocated IP range for the instance.
To set a password policy while creating an instance, include the passwordValidationPolicy object in the request.
Set the following parameters, as required:
enablePasswordPolicy : Enables the password policy when set to true .
To remove the password policy, you can use a PATCH
request with null as the value for enablePasswordPolicy .
In this case, the other password policy parameters are reset.
Note: When you enable a password policy, statements
that create users or change user passwords can cause additional
latency due to password policy verification.
minLength : Specifies the minimum number of characters that
the password must have.
complexity : Checks if the password is a
combination of lowercase, uppercase, numeric, and non-alphanumeric
characters. The default value is COMPLEXITY_DEFAULT .
reuseInterval : Specifies the number of previous passwords that you can't reuse.
disallowUsernameSubstring : Prevents the use of the username in the password
when set to true .
passwordChangeInterval : Specifies the minimum duration after which you can
change the password. The value is in seconds with up to nine fractional digits,
terminated by s . For example, 3.5s .
To create the instance so that it can integrate with Vertex AI , include the enableGoogleMlIntegration object in the request. This integration lets you apply large language models (LLMs), which are hosted in Vertex AI, to a Cloud SQL for PostgreSQL database.
Set the following parameters, as required:
enableGoogleMlIntegration : when this parameter is set to true , Cloud SQL instances can connect to Vertex AI to pass requests for real-time predictions and insights to the AI
cloudsql.enable_google_ml_integration : when this parameter is set to on , Cloud SQL can integrate with Vertex AI
You can use the sqlNetworkArchitecture field to enforce the use of the new network
architecture for the instance upon creation, even if the project isn't fully upgraded.
For more details about the new network architecture and its implications, see
Upgrade an instance to the new network architecture and Allocate an IP address range .
HTTP method and URL:
POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT_ID /instances
Request JSON body:
{
"name": " INSTANCE_ID ",
"region": " REGION ",
"databaseVersion": " DATABASE_VERSION ",
"rootPassword": " PASSWORD ",
"settings": {
"tier": " MACHINE_TYPE ",
"edition": " EDITION_TYPE ",
"enableGoogleMlIntegration": " true " | " false "
"databaseFlags":
[
{
"name": "cloudsql.enable_google_ml_integration",
"value": " on " | " off "
}
]
"dataCacheConfig": {
"dataCacheEnabled": DATA_CACHE_ENABLED
},
"backupConfiguration": {
"enabled": true
},
"passwordValidationPolicy": {
"enablePasswordPolicy": true
"minLength": " MIN_LENGTH ",
"complexity": COMPLEXITY_DEFAULT,
"reuseInterval": " REUSE_INTERVAL ",
"disallowUsernameSubstring": " DISALLOW_USERNAME_SUBSTRING ",
"passwordChangeInterval": " PASSWORD_CHANGE_INTERVAL "
},
"ipConfiguration": {
"privateNetwork": " PRIVATE_NETWORK ",
"authorizedNetworks": [ AUTHORIZED_NETWORKS ],
"ipv4Enabled": false,
"enablePrivatePathForGoogleCloudServices": true,
"serverCaMode": " CA_MODE ",
"serverCertificateRotationMode": " SERVER_CERTIFICATE_ROTATION_MODE ",
"customSubjectAlternativeNames": " DNS_NAMES "
},
"dataApiAccess": "ALLOW_DATA_API"
},
"sqlNetworkArchitecture": "NEW_NETWORK_ARCHITECTURE"
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT_ID /instances"
PowerShell (Windows)
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT_ID /instances" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"kind": "sql#operation",
"targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT_ID /instances/ INSTANCE_ID ",
"status": "PENDING",
"user": "user@example.com",
"insertTime": "2020-01-01T19:13:21.834Z",
"operationType": "CREATE",
"name": " OPERATION_ID ",
"targetId": " INSTANCE_ID ",
"selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT_ID /operations/ OPERATION_ID ",
"targetProject": " PROJECT_ID "
}
The response is a
long-running operation ,
which might take a few minutes to complete.
Retrieve the IPv4 address
Retrieve the automatically assigned IPv4 address for the new instance:
Before using any of the request data,
make the following replacements:
project-id : your project ID
instance-id : instance ID created in prior step
HTTP method and URL:
GET https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
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
Execute the following command:
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id "
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"kind": "sql#instance",
"state": "RUNNABLE",
"databaseVersion": "MYSQL_8_0_18",
"settings": {
"authorizedGaeApplications": [],
"tier": "db-f1-micro",
"kind": "sql#settings",
"pricingPlan": "PER_USE",
"replicationType": "SYNCHRONOUS",
"activationPolicy": "ALWAYS",
"ipConfiguration": {
"authorizedNetworks": [],
"ipv4Enabled": true
},
"locationPreference": {
"zone": "us-west1-a",
"kind": "sql#locationPreference"
},
"dataDiskType": "PD_SSD",
"backupConfiguration": {
"startTime": "18:00",
"kind": "sql#backupConfiguration",
"enabled": true,
"binaryLogEnabled": true
},
"settingsVersion": "1",
"storageAutoResizeLimit": "0",
"storageAutoResize": true,
"dataDiskSizeGb": "10"
},
"etag": "--redacted--",
"ipAddresses": [
{
"type": "PRIMARY",
"ipAddress": " 10.0.0.1 "
}
],
"serverCaCert": {
...
},
"instanceType": "CLOUD_SQL_INSTANCE",
"project": " project-id ",
"serviceAccountEmailAddress": "redacted@gcp-sa-cloud-sql.iam.gserviceaccount.com",
"backendType": "SECOND_GEN",
"selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id ",
"connectionName": " project-id:region:instance-id ",
"name": " instance-id ",
"region": "us-west1",
"gceZone": "us-west1-a"
}
Look for the ipAddress field in the response.
To see how the
underlying REST API request
is constructed for this task, see the
APIs Explorer on the instances:insert page .
Generate the write endpoint
A write endpoint is a global domain name service (DNS) name that resolves to the
IP address of the current primary instance automatically. This endpoint redirects
incoming connections to the new primary instance automatically in case of a replica
failover or switchover
operation. You can use the write endpoint in a SQL connection string instead of
an IP address. By using a write endpoint, you can avoid having to make
application connection changes when a region outage occurs.
For more information about using a write endpoint to connect to an instance, see
Connect to an instance using a write endpoint .
Custom instance configurations
Determines memory and virtual cores available for your Cloud SQL
instance. Machine types are part of a machine series, and machine series
availability is determined by your Cloud SQL edition.
For Cloud SQL Enterprise Plus edition instances, Cloud SQL
offers predefined machine types for your instances in
the N2 and C4A
machine series.
For Cloud SQL Enterprise edition instances, Cloud SQL offers the
general purpose shared core , general purpose dedicated core ,
and the N4 machine series.
If you require real-time processing, such as online transaction
processing (OLTP), make sure that your instance has enough memory to contain
the entire working set. However, there are other factors that can impact
memory requirements, such as number of active connections, and internal
overhead processes. Perform load testing to avoid performance
issues in your production environment.
When you configure your instance, select sufficient memory and vCPUs to handle
your needs, and scale up your instance as your requirements increase. A machine configuration
with insufficient vCPUs might lose its SLA coverage. For more information,
see Operational guidelines .
To learn more about the machine types and machine series available
for your Cloud SQL instance, see
Machine series overview .
Tip: If you plan on using private networking,
then you can deploy both the private networking setup of your choice and the
Cloud SQL instance by using Terraform.
For more information, see
Cloud SQL Simplified Networking .
Troubleshoot
Issue
Troubleshooting
Error message: The zone or region does not have sufficient
resources to handle the request at the moment.
The selected zone lacks capacity for the requested resources or
the VM type at the time of the instance creation request.
There might be simultaneous high operational demand in that specific
regional location at the time of request.
To resolve this issue, retry creating the instance
in another zone or retry creating the instance in the same zone that received
the error at a different time of day.
Error message: Failed to create subnetwork. Couldn't
find free blocks in allocated IP ranges. Please allocate new ranges for
this service provider .
There are no more available addresses in the allocated IP range. There
can be several possible scenarios:
The size of the allocated IP range for the private service connection
is smaller than /24.
The size of the allocated IP range for the private service connection
is too small for the number of Cloud SQL instances.
The requirement on the size of allocated IP range will be larger if
instances are created in multiple regions.
See allocated range size
To resolve this issue, you can either expand the
existing allocated IP range or allocate an additional IP range to the
private service connection. For more information, see
Allocate an IP address range .
If you used the --allocated-ip-range-name flag while creating
the Cloud SQL instance, you may only expand the specified IP range.
If you're allocating a new range, take care that the allocation doesn't
overlap with any existing allocations.
After creating a new IP range, update the vpc peering with the following
command:
gcloud services vpc-peerings update \
--service = servicenetworking.googleapis.com \
--ranges = OLD_RESERVED_RANGE_NAME , NEW_RESERVED_RANGE_NAME \
--network = VPC_NETWORK \
--project = PROJECT_ID \
--force
If you're expanding an existing allocation, take care to increase only the
allocation range and not decrease it. For example, if the original allocation
was 10.0.10.0/24, then make the new allocation at least 10.0.10.0/23.
In general, if starting from a /24 allocation, decrementing the /mask by
1 for each condition (additional instance type group, additional region) is
a good rule of thumb. For example, if trying to create both instance type
groups on the same allocation, going from /24 to /23 is enough.
After expanding an existing IP range, update the vpc peering with
following command:
gcloud services vpc-peerings update \
--service = servicenetworking.googleapis.com \
--ranges = RESERVED_RANGE_NAME \
--network = VPC_NETWORK \
--project = PROJECT_ID
Error message: Failed to create subnetwork. Router status is
temporarily unavailable. Please try again later. Help Token:
[token-ID] .
Try to create the Cloud SQL instance again.
Error message: HTTPError 400: Invalid request: Incorrect Service Networking config for instance: PROJECT_ID : INSTANCE_NAME :SERVICE_NETWORKING_NOT_ENABLED.
Enable the Service Networking API using the following command and try to create the Cloud SQL instance again.
gcloud services enable servicenetworking.googleapis.com \
--project = PROJECT_ID
Error message: Failed to create subnetwork. Required
'compute.projects.get' permission for PROJECT_ID .
When you create an instance using with a Private IP address, a service
account is created just-in-time using the Service Networking API. If
you have only recently enabled the Service Networking API, then the
service account might not get created and the instance creation fails. In
this case, you must wait for the service account to propagate throughout
the system or manually add it with the required permissions.
Error message: More than 3 subject alternative names are not
allowed.
You're trying to use a custom SAN to add more than three DNS names to
the server certificate of a Cloud SQL instance. You can't add more
than three DNS names to the instance.
Error message: Subject alternative names %s is too long. The
maximum length is 253 characters.
Make sure that any DNS names that you want to add to the server
certificate of a Cloud SQL instance don't have more than 253
characters.
Error message: Subject alternative name %s is invalid.
Verify that the DNS names that you want to add to the server
certificate of a Cloud SQL instance meet the following criteria:
They don't have wildcard characters.
They don't have trailing dots.
They meet RFC
1034 specifications.
What's next
Create a PostgreSQL database on the instance .
Create PostgreSQL users on the instance .
Secure and control access to the instance .
Connect to the instance with a PostgreSQL client .
Import data into the database .
Learn about instance settings .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
