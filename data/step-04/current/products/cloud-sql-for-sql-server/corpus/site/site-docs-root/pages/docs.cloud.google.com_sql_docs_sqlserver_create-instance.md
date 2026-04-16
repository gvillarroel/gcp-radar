---
title: "Create instances \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sql/docs/sqlserver/create-instance
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/sql/docs/sqlserver
source_metadata:
  url: https://docs.cloud.google.com/sql/docs/sqlserver/create-instance
  title: "Create instances \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Cloud SQL
SQL Server
Guides
Send feedback
Create instances
Stay organized with collections
Save and categorize content based on your preferences.
MySQL
| PostgreSQL
| SQL Server
This page describes how to create a Cloud SQL for SQL Server instance.
For detailed information about all instance settings, see
Instance settings .
A newly-created instance has a sqlserver database.
After creating a Cloud SQL for SQL Server instance, you add databases to it by creating
or importing them.
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
Choose between Cloud SQL Enterprise Plus edition and Cloud SQL Enterprise edition
When creating a Cloud SQL for SQL Server instance, you choose the machine configuration
from several different machine families, depending on the Cloud SQL
edition.
With Cloud SQL Enterprise Plus edition, you choose from two machine families:
Performance-optimized : offers a balanced price performance for various
SQL Server workloads with a memory-to-compute ratio of 1 vCPU:8 GB RAM.
Memory-optimized : offers high-memory-to-compute ratios for memory-intensive
workloads with 1 vCPU:32 GB RAM. Memory-optimized machines are well suited for
SQL Server workloads requiring complex queries, analytics, and business
intelligence reporting that benefit from storing larger datasets in memory
during data processing.
With Cloud SQL Enterprise edition, you have several machine configurations to choose from,
based on your vCPU and memory requirements. The following sections show the vCPU
and memory configuration for each database version
and machine type:
SQL Server 2017 Express, SQL Server 2019 Express,
SQL Server 2022 Express, and SQL Server 2025 Express
Machine type
vCPU/Memory
Not applicable
1 vCPU, 3.75 GB
2 vCPUs, 8 GB
4 vCPUs, 16 GB
8 vCPUs, 32 GB
Custom
1 to 8 vCPUs, 3.75 GB to 52 GB
SQL Server 2017 Web, SQL Server 2019 Web, and
SQL Server 2022 Web
Important : SQL Server Web edition software can only be
used to support public and internet-accessible pages, websites, and web
services. You can't use SQL Server Web edition to support line of business
applications such as Customer Relationship Management,
Enterprise Resource Management, or other similar applications.
For more information, see
Google Cloud Terms of Service for Microsoft Products .
Machine type
vCPU/Memory
Not applicable
1 vCPU, 3.75 GB
2 vCPUs, 8 GB
4 vCPUs, 16 GB
8 vCPUs, 32 GB
Custom
1 to 32 vCPUs, 3.75 GB to 208 GB
SQL Server 2017 Standard, SQL Server 2019 Standard,
SQL Server 2022 Standard, and SQL Server 2025 Standard
Machine type
vCPU/Memory
Not applicable
1 vCPU, 3.75 GB
2 vCPUs, 8 GB
4 vCPUs, 16 GB
8 vCPUs, 32 GB
Custom
1 to 48 vCPUs, 3.75 GB to 312 GB
SQL Server 2017 Enterprise, SQL Server 2019 Enterprise,
SQL Server 2022 Enterprise, and SQL Server 2025 Enterprise
Machine type
vCPU/Memory
Not applicable
1 vCPU, 3.75 GB
2 vCPUs, 8 GB
4 vCPUs, 16 GB
8 vCPUs, 32 GB
Custom
2 to 96 vCPUs, 3.75 GB to 624 GB
Performance-optimized (Cloud SQL Enterprise Plus only)
2 vCPUs, 16 GB
4 vCPUs, 32 GB
8 vCPUs, 64 GB
16 vCPUs, 128 GB
32 vCPUs, 256 GB
48 vCPUs, 384 GB
64 vCPUs, 512 GB
80 vCPUs, 640 GB
96 vCPUs, 768 GB
128 vCPUs, 864 GB
Memory-optimized (Cloud SQL Enterprise Plus only)
4 vCPUs, 128 GB
8 vCPUs, 256 GB
16 vCPUs, 512 GB
Simultaneous multithreading
Simultaneous multithreading (SMT) on Cloud SQL for SQL Server lets you run
two virtual CPUs (vCPUs) as independent, separate threads on one physical core.
SMT is enabled by default; however, you can disable it, and this might reduce
your licensing costs.
Important: Disabling SMT reduces the number of virtual CPUs (vCPUs) per core
from two to one, which in turn reduces your SQL Server licensing costs.
Disabling SMT doesn't change the Compute Engine price for SQL Server.
You are billed for the number of vCPUs defined in the SQL Server CPU
configuration. To learn more about how you are billed for
Cloud SQL for SQL Server instances, see SQL Server pricing .
Disabling SMT might impact your instance performance.
To understand the impact of disabling SMT on your instance's performance,
we recommend that you perform load testing
on your instance.
Note: You can only set the number of threads per core on Cloud SQL for SQL Server
instances that have six vCPUs or more.
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
Create a SQL Server instance
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
Note: If you plan to integrate with
Managed Service for Microsoft Active Directory, review the
prerequisites for integration . Additionally, note the
procedures and constraints for integrating with a Managed Microsoft AD
domain in a different project.
In the Google Cloud console, go to the Cloud SQL Instances page.
Go to Cloud SQL Instances
Click Create instance .
On the Choose your database engine panel of the
Create an instance page, click Choose SQL Server .
In the Choose a Cloud SQL edition section of the
Create a SQL Server instance page, select the Cloud SQL
edition for your instance: Enterprise or
Enterprise Plus .
For more information about Cloud SQL editions, see
Introduction to Cloud SQL editions .
Select the edition preset for your instance. To see the available
presets, click the Edition preset menu.
Note: To learn about how edition presets differ
from one another, click Compare edition presets .
In the Instance info section, select the database version for your
instance. To see the available versions, click the Database version
menu.
In the Instance ID field of the Instance info pane, enter
an ID for your instance.
Don't include sensitive or personally identifiable
information in your instance name.
You do not need to include the project ID in the instance name. This is done automatically where
appropriate (for example, in the log files).
In the Password field, enter a password for the user.
To see the password in clear text, click the Show password icon.
You can either enter the password manually or click Generate
to have Cloud SQL create a password for you automatically.
In the Choose region and zonal availability section, select the
region and zone for your instance. Region availability might be different
based on your Cloud SQL for SQL Server edition. For more information, see
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
Select from Lightweight, Standard (Most common), or High memory. Each machine type
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
selected automatically for Cloud SQL for SQL Server Enterprise Plus edition instances.
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
Choose where to store your backups Select Multi-region for most use cases. If you
need to store backups in a specific region, for example, if there are regulatory reasons to do
so, select Region and select your region from the Location drop-down menu.
Choose how many automated backups to store The number of automated backups you
would like to retain (from 1 to 365 days).
Learn more .
Enable point-in-time recovery
Enables point-in-time recovery and transaction logging.
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
You must use gcloud version 243.0.0 or later.
Use the
gcloud sql instances create
command to create the instance:
For Cloud SQL Enterprise Plus edition instances:
gcloud sql instances create INSTANCE_NAME \
--database-version = DATABASE_VERSION \
--region = REGION \
--tier = TIER \
--root-password = ROOT_PASSWORD \
--edition = ENTERPRISE_PLUS
For Cloud SQL Enterprise edition instances:
gcloud sql instances create INSTANCE_NAME \
--database-version = DATABASE_VERSION \
--region = REGION \
--cpu = NUMBER_OF_vCPUs \
--memory = MEMORY_SIZE \
--root-password = ROOT_PASSWORD \
--edition = ENTERPRISE
Don't include sensitive or personally identifiable
information in your instance name.
You do not need to include the project ID in the instance name. This is done automatically where
appropriate (for example, in the log files).
The values for vCPUs and memory size are limited for Cloud SQL Enterprise edition. For
more information, see
Choose between Cloud SQL Enterprise Plus edition and Cloud SQL Enterprise edition .
For example, the following string creates an instance with two vCPUs and
7,680 MB of memory:
gcloud sql instances create myinstance \
--database-version = SQLSERVER_2017_STANDARD \
--region = us-central1 \
--cpu = 2 \
--memory = 7680MB \
--root-password = EXAMPLE_PASSWORD \
--edition = ENTERPRISE
For some sample values, see
Sample machine types .
To learn about the parameters for instance settings, see
gcloud sql instances create .
Note: Cloud SQL generates a write
endpoint automatically for your Cloud SQL Enterprise Plus edition instance if you do the following:
Enable the Cloud DNS API
for your Google Cloud project (if this API isn't enabled).
Add a private IP address to the instance.
Specify an associated network for the instance.
Optionally, specify an allocated IP range for the instance.
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
Connectivity
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
Note: Cloud SQL generates a write
endpoint automatically for your Cloud SQL Enterprise Plus edition instance if you do the
following:
Enable the Cloud DNS API
for your Google Cloud project (if this API isn't enabled).
Add a private IP address to the instance.
Specify an associated network for the instance.
Optionally, specify an allocated IP range for the instance.
Public IP
--authorized-networks
For public IP connections, only connections from authorized networks
can connect to your instance.
Learn more .
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
Retention settings for automated backups
--retained-backups-count
The number of automated backups to retain.
Learn more .
Retention settings for transaction logs
--retained-transaction-log-days
The number of days to retain transaction logs for point-in-time recovery. Learn more .
Point-in-time recovery
--enable-point-in-time-recovery
Enables point-in-time recovery and transaction logs.
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
Set the password for the user:
gcloud sql users set-password sqlserver no-host --instance =[ INSTANCE_NAME ] \
--password =[ PASSWORD ]
Terraform
To create an instance, use a
Terraform resource .
resource "google_sql_database_instance" "default" {
name = "sqlserver-instance"
region = "us-central1"
database_version = "SQLSERVER_2019_STANDARD"
root_password = "INSERT-PASSWORD-HERE"
settings {
tier = "db-custom-2-7680"
}
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
1. Create the instance
Not all possible fields are shown in the following basic API call. For a
prototype of a JSON request, see
Settings .
Also see the
Instances:insert page. For information about instance settings, including
valid values for regions, see
Instance settings . For
information about machine types, see
Custom instance configurations .
Don't include sensitive or personally identifiable information
in instance-id ; the value is externally visible.
You do not need to include the project ID in the instance name. This is done automatically where
appropriate (for example, in the log files).
The collation field (not shown in the following basic API call)
lets you set a default value for the
type of collation used for the databases in your instance.
This collation default is permanent at the instance level but not at
the database level. You can change this default with a
database administration tool, but only for a specific database that you are
creating or updating. You cannot change the collation default for an instance
after creating the instance (unless you recreate the instance).
For information about collations in SQL Server,
see
Collation and Unicode support . For a prototype of a JSON request, see
Settings . You can specify the following example string for the
collation parameter: SQL_Latin1_General_CP1_CI_AS .
The timeZone field (not shown in the following basic API call)
lets you to set a time zone for an instance. After you create an instance,
you can change the time zone of an instance. For more information and a list of
accepted strings, see
Settings . You can specify the following example string for the
timeZone field:
"Pacific Standard Time" .
See more .
To create an instance that is integrated with Managed Microsoft AD,
specify a domain, such as subdomain.mydomain.com , for the
domain field. For more information, see
Creating an instance with Windows Authentication .
Additionally, note the
procedures and constraints for integrating with a Managed Microsoft AD
domain in a different project.
For information on setting the value of machine-type in the request
body, see Custom instance configurations .
Note: Cloud SQL generates a write
endpoint automatically for your Cloud SQL Enterprise Plus edition instance if you do the following:
Enable the Cloud DNS API
for your Google Cloud project (if this API isn't enabled).
Add a private IP address to the instance.
Specify an associated network for the instance.
Optionally, specify an allocated IP range for the instance.
Before using any of the request data,
make the following replacements:
PROJECT_ID : your project ID.
INSTANCE_ID : the instance ID.
REGION : the region name.
DATABASE_VERSION : an enum string of the database version.
For example: SQLSERVER_2017_STANDARD .
PASSWORD : the password for the root user.
MACHINE_TYPE : an enum string of the machine (tier) type. For example: db-perf-optimized-N-4 .
EDITION_TYPE : your Cloud SQL edition. The default value is ENTERPRISE .
DATA_CACHE_ENABLED : (optional) to enable Data cache for your instance, set the value of this parameter to true .
PRIVATE_NETWORK : specify the name of the Virtual Private Cloud (VPC) network that
you want to use for this instance. Private services access must already be configured for the
network.
AUTHORIZED_NETWORKS : For public IP connections, specify the connections from authorized
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
"backupConfiguration": {
"enabled": true
},
"dataCacheConfig": {
"dataCacheEnabled": DATA_CACHE_ENABLED
},
"ipConfiguration": {
"privateNetwork": " PRIVATE_NETWORK ",
"authorizedNetworks": [ AUTHORIZED_NETWORKS ],
"ipv4Enabled": false,
"serverCaMode": " CA_MODE ",
"serverCertificateRotationMode": " SERVER_CERTIFICATE_ROTATION_MODE ",
"customSubjectAlternativeNames": " DNS_NAMES "
}
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
"insertTime": "2020-01-01T19:13:21.834Z",
"operationType": "CREATE",
"name": " OPERATION_ID ",
"targetId": " INSTANCE_ID ",
"selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /operations/ OPERATION_ID ",
"targetProject": " PROJECT_ID "
}
After the instance is created, you can further
configure the default
user account .
2. Retrieve the IPv4 address of the instance
Optionally, you can retrieve the automatically-assigned IPv4 address.
In the response, that address is in the ipAddress field.
Before using any of the request data,
make the following replacements:
PROJECT_ID : your project ID
INSTANCE_ID : your instance ID, created in the previous step
HTTP method and URL:
GET https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /instances/ INSTANCE_ID
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
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /instances/ INSTANCE_ID "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /instances/ INSTANCE_ID " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"kind": "sql#instance",
"state": "RUNNABLE",
"databaseVersion": " DATABASE_VERSION ",
"settings": {
"authorizedGaeApplications": [],
"tier": " MACHINE_TYPE ",
"kind": "sql#settings",
"pricingPlan": "PER_USE",
"replicationType": "SYNCHRONOUS",
"activationPolicy": "ALWAYS",
"ipConfiguration": {
"authorizedNetworks": [],
"ipv4Enabled": true
},
"locationPreference": {
"zone": " ZONE ",
"kind": "sql#locationPreference"
},
"dataDiskType": "PD_SSD",
"backupConfiguration": {
"startTime": "19:00",
"kind": "sql#backupConfiguration",
"enabled": true
},
"settingsVersion": "1",
"dataDiskSizeGb": "10"
},
"etag": "--redacted--",
"ipAddresses": [
{
"type": "PRIMARY",
" ipAddress ": " 10.0.0.1 "
}
],
"serverCaCert": {
...
},
"instanceType": "CLOUD_SQL_INSTANCE",
"project": " PROJECT_ID ",
"serviceAccountEmailAddress": "redacted@gcp-sa-cloud-sql.iam.gserviceaccount.com",
"backendType": " BACKEND_TYPE ",
"selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /instances/ INSTANCE_ID ",
"connectionName": " PROJECT_ID:REGION:INSTANCE_ID ",
"name": " INSTANCE_ID ",
"region": " REGION ",
"gceZone": " ZONE "
}
REST v1beta4
1. Create the instance
Not all possible fields are shown in the following basic API call. For a
prototype of a JSON request, see
Settings .
Also see the
Instances:insert page. For information about instance settings, including
valid values for regions, see
Instance settings . For
information about machine types, see
Custom instance configurations .
Don't include sensitive or personally identifiable information
in instance-id ; the value is externally visible.
You do not need to include the project ID in the instance name. This is done automatically where
appropriate (for example, in the log files).
The collation field (not shown in the following basic API call)
lets you to set a default value for the
type of collation used for the databases in your instance.
This collation default is permanent at the instance level but not at
the database level. You can change this default with a
database administration tool, but only for a specific database that you are
creating or updating. You can't change the collation default for an instance
after creating the instance (unless you recreate the instance).
For information about collations in SQL Server,
see
Collation and Unicode support . For a prototype of a JSON request, see
Settings . You can specify the following example string for the
collation parameter: SQL_Latin1_General_CP1_CI_AS .
The timeZone field (not shown in the following basic API call)
lets you to set a time zone for an instance. After you create an instance,
you can change the time zone of an instance. For more information and a list of
accepted strings, see
Settings . You can specify the following example string for the
timeZone field:
"Pacific Standard Time" .
See more .
To create an instance that is integrated with Managed Service for Microsoft Active Directory, specify a
domain, such as subdomain.mydomain.com , for the domain
field. For more information, see
Creating an instance with Windows Authentication .
Additionally, note the
procedures and constraints for integrating with a Managed Microsoft AD
domain in a different project.
For information on setting the value of machine-type in the request
body, see Custom instance configurations .
Note: Cloud SQL generates a write
endpoint automatically for your Cloud SQL Enterprise Plus edition instance if you do the
following:
Enable the Cloud DNS API
for your Google Cloud project (if this API isn't enabled).
Add a private IP address to the instance.
Specify an associated network for the instance.
Optionally, specify an allocated IP range for the instance.
Before using any of the request data,
make the following replacements:
PROJECT_ID : your project ID.
INSTANCE_ID : the instance ID.
REGION : the region name.
DATABASE_VERSION : an enum string of the database version.
MACHINE_TYPE : an enum string of the machine (tier) type. For example: db-perf-optimized-N-4 .
PASSWORD : the password for the root user.
MACHINE_TYPE : an enum string of the machine (tier) type, as:
db-custom-[CPUS]-[MEMORY_MBS] .
EDITION_TYPE : your Cloud SQL edition. The default value is ENTERPRISE .
DATA_CACHE_ENABLED : (optional) to enable Data cache for your instance, set the value of this parameter to true .
PRIVATE_NETWORK : specify the name of the Virtual Private Cloud (VPC) network that
you want to use for this instance. Private services access must already be configured for the
network.
AUTHORIZED_NETWORKS : For public IP connections, specify the connections from authorized
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
"backupConfiguration": {
"enabled": true
},
"dataCacheConfig": {
"dataCacheEnabled": DATA_CACHE_ENABLED
},
"ipConfiguration": {
"privateNetwork": " PRIVATE_NETWORK ",
"authorizedNetworks": [ AUTHORIZED_NETWORKS ],
"ipv4Enabled": false,
"serverCaMode": " CA_MODE ",
"serverCertificateRotationMode": " SERVER_CERTIFICATE_ROTATION_MODE ",
"customSubjectAlternativeNames": " DNS_NAMES "
}
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
After the instance is created, you can further
configure the default user
account .
2. Retrieve the IPv4 address of the instance
Optionally, you can retrieve the automatically-assigned IPv4 address.
In the response, that address is in the ipAddress field.
Before using any of the request data,
make the following replacements:
PROJECT_ID : your project ID
INSTANCE_ID : your instance ID, created in the previous step
HTTP method and URL:
GET https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT_ID /instances/ INSTANCE_ID
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
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT_ID /instances/ INSTANCE_ID "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT_ID /instances/ INSTANCE_ID " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"kind": "sql#instance",
"state": "RUNNABLE",
"databaseVersion": " DATABASE_VERSION ",
"settings": {
"authorizedGaeApplications": [],
"tier": " MACHINE_TYPE ",
"kind": "sql#settings",
"pricingPlan": "PER_USE",
"replicationType": "SYNCHRONOUS",
"activationPolicy": "ALWAYS",
"ipConfiguration": {
"authorizedNetworks": [],
"ipv4Enabled": true
},
"locationPreference": {
"zone": " ZONE ",
"kind": "sql#locationPreference"
},
"dataDiskType": "PD_SSD",
"backupConfiguration": {
"startTime": "19:00",
"kind": "sql#backupConfiguration",
"enabled": true
},
"settingsVersion": "1",
"dataDiskSizeGb": "10"
},
"etag": "--redacted--",
"ipAddresses": [
{
"type": "PRIMARY",
" ipAddress ": " 10.0.0.1 "
}
],
"serverCaCert": {
...
},
"instanceType": "CLOUD_SQL_INSTANCE",
"project": " PROJECT_ID ",
"serviceAccountEmailAddress": "redacted@gcp-sa-cloud-sql.iam.gserviceaccount.com",
"backendType": " BACKEND_TYPE ",
"selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT_ID /instances/ INSTANCE_ID ",
"connectionName": " PROJECT_ID:REGION:INSTANCE_ID ",
"name": " INSTANCE_ID ",
"region": " REGION ",
"gceZone": " ZONE "
}
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
Custom instance configurations let you select the amount of memory and CPUs that
your instance needs. This flexibility lets you choose the appropriate VM shape
for your workload. Machine type availability is determined by your Cloud SQL for SQL Server
edition.
For workloads that require real-time processing, make sure that your instance has
enough memory to contain the entire working set. However, there are other factors
that can impact memory requirements, such as number of active connections, and
internal overhead processes. You should perform load testing to avoid performance
issues in your production environment.
When you configure your instance, select enough memory and vCPUs to handle your
workload, and upgrade as your workload increases. A machine configuration with
insufficient vCPUs might lose its SLA coverage. For more information, see
Operational guidelines .
Machine types for Cloud SQL Enterprise edition instances
For Cloud SQL Enterprise edition instances,
you can also create custom instance configurations using the
gcloud sql instances create
command.
Machine type names use the following format:
db-custom- NUMBER_OF_vCPUs - MEMORY
Replace NUMBER_OF_vCPUs with the number of CPUs in the
machine and MEMORY with the amount of memory in
the machine.
For example, if your machine name is db-custom , and your
machine has 1 CPU and 3840 MB of RAM, then the format for the machine is
db-custom-1-3840 .
When selecting the number of CPUs and amount of memory, there are some
restrictions on the configuration that you choose:
The number of vCPUs that you can configure for your instance is based on your
SQL server version.
The number of vCPUs must be either 1 or an even number between 2 and 96.
The memory size must be:
0.9 to 6.5 GB per vCPU
A multiple of 256 MB
At least 3.75 GB (3840 MB)
Machine types for Cloud SQL Enterprise Plus edition instances
For Cloud SQL Enterprise Plus edition instances,
machine types are predefined as described in the following sections.
Performance-optimized machine family
This machine family offers balanced price-performance for a wide variety of
SQL Server workloads with a memory to compute ratio of 1 vCPU:8 GB RAM. The
performance-optimized machine family provides the following machine types to
choose from:
Enterprise Plus machine type
vCPUs
Memory (GB)
db-perf-optimized-N-2
2
16
db-perf-optimized-N-4
4
32
db-perf-optimized-N-8
8
64
db-perf-optimized-N-16
16
128
db-perf-optimized-N-32
32
256
db-perf-optimized-N-48
48
384
db-perf-optimized-N-64
64
512
db-perf-optimized-N-80
80
640
db-perf-optimized-N-96
96
768
db-perf-optimized-N-128
128
864
Memory-optimized machine family
This machine family offers high memory to compute ratios for memory-intensive
workloads with one vCPU per 32 GB RAM. Memory-optimized machines are well suited
for SQL Server workloads requiring complex queries, analytics and business
intelligence reporting that benefit from storing larger datasets in memory
during data processing. Memory-optimized machine family provides the following
machine types to choose from:
Machine type
vCPUs
Memory (GB)
db-memory-optimized-N-4
4
128
db-memory-optimized-N-8
8
256
db-memory-optimized-N-16
16
512
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
Create a SQL Server database on the instance .
Create SQL Server users on the instance .
Secure and control access to the instance .
Connect to the instance with a SQL Server client .
Import data into the database .
Learn about instance settings .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
