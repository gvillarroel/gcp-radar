---
title: "Performing an in-place upgrade of Windows\_Server \_|\_ Compute Engine \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/compute/docs/tutorials/performing-in-place-upgrade-windows-server
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/compute/docs/access
source_metadata:
  url: https://docs.cloud.google.com/compute/docs/tutorials/performing-in-place-upgrade-windows-server
  title: "Performing an in-place upgrade of Windows\_Server \_|\_ Compute Engine \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
Guides
Send feedback
Performing an in-place upgrade of Windows Server
Stay organized with collections
Save and categorize content based on your preferences.
If you have virtual machine (VM) instances running earlier versions of Windows Server,
you can upgrade them to later versions of Windows Server:
Upgrade from
Upgrade to
Windows Server 2008 R2 (Desktop Experience)
Windows Server 2012 R2 (Desktop Experience)
Windows Server 2012 R2 (Core)
Windows Server 2016 (Core)
Windows Server 2012 R2 (Desktop Experience)
Windows Server 2016 (Desktop Experience)
Windows Server 2016 (Core)
Windows Server 2019 (Core)
Windows Server 2016 (Desktop Experience)
Windows Server 2019 (Desktop Experience)
Windows Server 2019 (Core)
Windows Server 2022 (Core)
Windows Server 2019 (Desktop Experience)
Windows Server 2022 (Desktop Experience)
Windows Server 2022 (Core)
Windows Server 2025 (Core)
Windows Server 2022 (Desktop Experience)
Windows Server 2025 (Desktop Experience)
Upgrades are subject to the following constraints:
Microsoft has ended support for Windows Server 2012 R2
and Windows Server 2008 R2 . If you
perform an in-place upgrade of either of these versions and encounter
problems related to the Windows Setup process ( setup.exe ), Google might
only be able to provide limited assistance.
If you plan to upgrade Windows Server 2008 R2 to a version later than
Windows Server 2012 R2, you must first perform an upgrade to Windows Server
2012 R2, and then perform a second upgrade to Windows Server 2016 or later.
You must upgrade incrementally, one version at a time, because multiple
version in-place upgrades are not supported.
Important: This guide only describes how to perform an in-place upgrade from
Datacenter editions of Windows Server to Datacenter editions of Windows Server.
Objectives
This guide describes how to perform an in-place upgrade of
Windows Server by:
Planning the in-place upgrade
Performing the in-place upgrade
Troubleshooting the in-place upgrade
Cleaning up after the in-place upgrade
Costs
There is no charge for performing an in-place upgrade of Windows Server. You are
only charged for the resources consumed during the upgrade, including:
Compute Engine
Use the pricing calculator
to generate a cost estimate based on your projected usage.
Before you begin
The guide assumes that you have basic knowledge of:
Compute Engine
Performing unattended Windows Server
installations by using Windows Setup .
Plan the in-place upgrade
Performing an in-place upgrade of a virtual machine (VM) instance that is
running an earlier version of Windows Server can be a pragmatic way to modernize your
infrastructure and to mitigate the risks of approaching the end of the support lifecycle
of Windows Server versions.
Alternatives to consider
Before you decide to use an in-place upgrade to migrate to a newer version of
Windows Server, be aware of the following limitations:
Downtime: Depending on the configuration and software installed, the
upgrade might take an hour or longer. During the upgrade, access to the VM
instance is limited because:
Workloads running on the VM instance are unavailable to users
Remote Desktop Protocol (RDP) is not available
There are limited ways to check the upgrade progress and the time
remaining in the upgrade
Risk: Depending on the configurations of your existing instances and the
installed software:
The upgrade can fail
Some configuration options can be overridden
Incompatibilities can cause your workload to malfunction on the upgraded
instance
Depending on the workload running on your Windows Server instance,
you can reduce downtime and risk by pursuing different approaches.
Workload
Approach
Your VM instance is running a workload that supports replication,
such as:
Active Directory Domain Services
DNS
SQL Server
Consider setting up a new VM instance that is running a more recent
version of Windows Server, and then use replication to shift the workload
from your existing VM instance to the new VM instance.
You have a VM instance that is running a multitude of workloads
Consider migrating these workloads to separate VM instances so that each
VM instance runs only a single workload. Even if you can't migrate all
workloads, reducing the number of workloads running on a single VM instance
can help reduce risks during an in-place upgrade.
Product keys
A Windows Server product key is valid for only a specific
version; when you perform an upgrade to a later version of Windows Server, you
must supply a new product key. There are two primary scenarios:
You are upgrading a VM instance that is based on a
public operating system image
provided by Google: In this
scenario, you must use the predefined
KMS client setup keys
for the version of Windows Server that you are upgrading to. The upgrade
does not incur additional charges.
You are upgrading a VM instance for which you
brought an existing license: In
BYOL ,
you need to acquire a product key from your license vendor to perform
the upgrade. Check the Microsoft documentation
to determine which edition you can upgrade to
and whether you are eligible for license conversion.
Installation media
To perform the upgrade, you need an installation media. There are two primary
scenarios:
You are upgrading a VM instance that is based on a
public operating system image
provided by Google: In this scenario, you can use the volume license
installation media provided by Google. The steps to access this installation
media are provided below .
You are upgrading a VM instance that is based on an imported disk or image:
In this scenario, you cannot use the installation media provided by Google.
Instead, you have to use an installation media that matches the type of
media that you used to install Windows Server on the imported disk or image.
Important: If you use a custom install media to upgrade to Windows Server
2012 R2, make sure to
disable animations
before using it to perform an upgrade. Disabling animations is critical to
prevent the MSOOBE process from causing the upgrade to stop responding
indefinitely.
Other prerequisites
Before you begin your upgrade, review the Microsoft documentation about
prerequisites and potential limitations for the version of Windows Server
you are planning to upgrade to:
2012 R2
Verify that your VM instance meets the
system requirements for Windows Server 2012
and has
sufficient free disk space .
Review recommendations for upgrading server
roles ,
known issues ,
and the
upgrade process
for Windows Server 2012 R2.
Review the recommendations for planning an in-place
upgrade .
Verify that you aren't affected by features
removed or deprecated
in Windows Server 2012 R2.
Verify that all your custom
or third-party software is compatible with Windows Server 2012 R2.
Year 2016
Verify that your VM instance meets the
system requirements for Windows Server 2016
and has
sufficient free disk space .
Review the server role upgrade and migration matrix for Windows Server 2016 and
application compatibility table
Verify that you aren't affected by features
removed or planned for replacement
in Windows Server 2016.
Verify that all your custom
or third-party software is compatible with Windows Server 2016.
Year 2019
Verify that your VM instance meets the
system requirements for Windows Server 2019
and has
sufficient free disk space .
Review the Windows Server 2019 and Microsoft Server application compatibility list.
Verify that you aren't affected by features
removed or planned for replacement
in Windows Server 2019.
Verify that all your custom
or third-party software is compatible with Windows Server 2019.
Year 2022
Verify that your VM instance meets the
system requirements for Windows Server 2022
and has
sufficient free disk space .
Review the Windows Server 2022 and Microsoft Server application compatibility list.
Verify that you aren't affected by features
removed or planned for replacement
in Windows Server 2022.
Verify that all your custom
or third-party software is compatible with Windows Server 2022.
Year 2025
Verify that your VM instance meets the
system requirements for Windows Server 2025
and has
sufficient free disk space .
Review the Windows Server 2025 and Microsoft Server application compatibility list.
Verify that you aren't affected by features
removed or planned for replacement
in Windows Server 2025.
Verify that all your custom
or third-party software is compatible with Windows Server 2025.
Perform the in-place upgrade
The following sections guide you through the process of upgrading your VM
instance.
Create a snapshot
Before you start the upgrade, we recommend that you create a snapshot of your
VM instance ,
so that you can revert to a safe state in case anything goes wrong:
Create a
regular snapshot
for the boot disk of your VM instance.
If the VM instance has additional data disks attached, create snapshots for
the data disks by using
the Volume Shadow Copy Service (VSS) .
Prepare your Windows Server configuration
Verify the configuration of your Windows Server VM instance:
Connect to your VM instance
with an RDP client.
Verify that Windows Server is up to date
by using Windows Update .
Disable or uninstall antivirus, antispyware, and other agents that can
interfere with the upgrade or are incompatible with the Windows Server
version that you're upgrading to.
Attach the install media
Before you can perform the upgrade, attach the necessary installation media to the
VM instance. The right media to use depends on your scenario:
You are upgrading a VM instance that is based on a public operating system
image provided by Google: In this scenario, you only need to attach the
volume license installation media provided by Google. This media contains
both the necessary scripts to run the upgrade and the files for the new version
of Windows Server.
You are upgrading a VM instance that is based on an imported disk or image:
In this scenario, you also need to attach the volume license installation media
provided by Google so that you can access the necessary scripts.
Additionally, you have to attach a custom installation media that matches the type of media that
you used to install Windows Server on the imported disk or image.
To attach the volume license installation media provided by Google, follow these steps:
In the Google Cloud console, open
Cloud Shell
by clicking the
Activate Cloud Shell
button.
Go to the Google Cloud console
Set the default project ID. Replace PROJECT_ID with the name of your
Compute Engine project:
gcloud config set project PROJECT_ID
Create a disk based on the installation media. Replace ZONE with the
name of the zone where the VM is located:
gcloud compute disks create win-installers --image-family=windows-install-media --image-project=compute-image-tools --zone= ZONE
This command adds a disk named win-installers to your project. This disk
is not attached to any VM instance.
Attach the disk to your VM by using read-only ( ro ) mode, so that
you can attach the disk to multiple VMs if necessary:
gcloud compute instances attach-disk VM_NAME --disk=win-installers --mode=ro --zone= ZONE
Replace the following:
VM_NAME : the name of the VM instance to upgrade
ZONE : the name of the zone where the VM is located
You can use the same disk for multiple and parallel VM upgrades
within the same zone, but if you want to upgrade a VM in a
different zone, you must create another disk in that zone.
If you are upgrading a VM that is based on an imported disk or image,
attach the custom installation media as an additional disk:
Follow the steps in Creating an image from an ISO file
to create a disk from the ISO image that you want to use as custom
installation media.
Attach the disk to your VM, by using read-only ( ro ) mode so that
you can attach the disk to multiple VMs if necessary:
gcloud compute instances attach-disk VM_NAME --disk= CUSTOM_MEDIA_DISK --mode=ro --zone= ZONE
Replace the following:
VM_NAME : the name of the VM to upgrade
CUSTOM_MEDIA_DISK : the name of the disk containing your custom installation media
ZONE : the name of the zone where the VM is located
Start the upgrade
By default, Windows Setup prompts you for input at various points during an
upgrade. Because you can't connect to the VM by using RDP during the
upgrade and therefore can't provide any input, run the upgrade in
unattended mode .
Connect to your VM with an RDP client. For more information, see
Connecting to instances .
Open an elevated command prompt:
If you use Server Core, an elevated command prompt should open automatically after login.
If you use Windows Server with full Desktop Experience,
right-click the Start button and select Command Prompt (Admin) .
Change the working directory to the installation media. The correct working
directory depends on the Windows Server version that you are upgrading to:
2012 R2
cd /d d:\*2012*
Year 2016
cd /d d:\*2016*
Year 2019
cd /d d:\*2019*
Year 2022
cd /d d:\*2022*
Year 2025
cd /d d:\*2025*
Important: Adjust the drive letter if Windows assigned a different letter
than D: to the disk containing the volume license installation media
provided by Google.
Start the Windows upgrade. The required steps to start the upgrade
depend on the Windows Server version that you are upgrading to and whether
your VM is based on a public operating system image or on
an imported disk or image:
2012 R2
Run upgrade.ps1 to start the Windows upgrade. The script completes the
following steps:
Install the latest
Google driver packages ,
which are critical for the Windows Server upgrade to succeed.
Apply Windows settings that are required for Compute Engine .
Enable access to the Emergency Management Services (EMS) console
during the upgrade.
Launch Windows Setup ( setup.exe ) from the install media to perform an upgrade in unattended mode.
Selects the correct edition of Windows Server 2012 R2 to install.
Provides the Generic Volume License Key (GVLK) for the new version of Windows Server.
powershell -ExecutionPolicy Bypass -File upgrade.ps1
2012 R2 (BYOL)
Run upgrade.ps1 to start the Windows upgrade. The script completes the
following steps:
Install the latest
Google driver packages ,
which are critical for the Windows Server upgrade to succeed.
Apply Windows settings that are required for Compute Engine .
Enable access to the Emergency Management Services (EMS) console
during the upgrade.
Launch Windows Setup ( setup.exe ) from the install media to perform an upgrade in unattended mode.
Selects the correct edition of Windows Server 2012 R2 to install.
Provides the user provided license key for the new version of Windows Server.
powershell -ExecutionPolicy Bypass -File upgrade.ps1 -SetupExePath SETUP_PATH -ProductKey PRODUCT_KEY
Replace the following:
SETUP_PATH : the path to setup.exe on your custom installation media
PRODUCT_KEY : a valid product key for Windows Server 2016.
The -ProductKey parameter is only required if
you are upgrading a VM instance for which you brought an existing license (BYOL)
2016 or later
Run upgrade.ps1 to start the Windows upgrade. The script completes the
following steps:
Install the latest
Google driver packages ,
which are critical for the Windows Server upgrade to succeed.
Apply Windows settings that are required for Compute Engine .
Enable access to the Emergency Management Services (EMS) console
during the upgrade.
Launch Windows Setup ( setup.exe ) from the install media to perform an upgrade in silent mode.
Provide a product key for the new version of Windows Server.
powershell -ExecutionPolicy Bypass -File upgrade.ps1
In some cases, Windows Setup might show a Select Image screen. If you
see this screen, select the configuration that matches your
current configuration:
If you use Server Core, select
Datacenter .
If you use Windows Server with full desktop experience, select
Datacenter (Desktop Experience) .
Click Next to begin the upgrade.
It might take several minutes for the setup to initialize.
2016 or later (imported)
Run upgrade.ps1 to start the Windows upgrade. The script completes the
following steps:
Install the latest
Google driver packages ,
which are critical for the Windows Server upgrade to succeed.
Apply Windows settings that are required for Compute Engine .
Enable access to the Emergency Management Services (EMS) console
during the upgrade.
Launch Windows Setup ( setup.exe ) from the install media to perform an upgrade in silent mode.
powershell -ExecutionPolicy Bypass -File upgrade.ps1 -SetupExePath SETUP-PATH -ProductKey PRODUCT-KEY
Replace the following:
SETUP_PATH : the path to setup.exe on your
custom installation media
PRODUCT_KEY : a valid product key for the
version of Windows Server that is being upgraded to. For example, if
upgrading from Windows Server 2016 Datacenter to Windows Server 2019
Datacenter, provide a valid Windows Server 2019 Datacenter key.
The -ProductKey parameter is only required if you are upgrading a VM instance
for which you brought an existing license (BYOL).
In some cases, Windows Setup might show a Select Image screen. If you
see this screen, select the configuration that matches your
current configuration:
If you use Server Core, select
Windows Server Datacenter .
If you use Windows Server with full desktop experience, select
Windows Server Datacenter (Desktop Experience) .
Click Next to begin the upgrade.
It might take several minutes for the setup to initialize.
The upgrade process might issue the following warning. If so, you can
ignore it:
[package name] or a newer version is already installed on the system
The system can become temporarily unresponsive while installing the
netkvm driver. If this happens, don't close the RDP connection or stop the
VM instance unless the system is unresponsive for more than 5 minutes. If
you do lose RDP connectivity, wait approximately 5 minutes before you
reconnect to the VM instance.
The Setup Wizard might require you to restart the system first. In
this case, restart the VM instance and run Windows Setup again, using the
same command.
After about 5 minutes, the machine reboots, and RDP disconnects.
Observe the upgrade process
Depending on the machine type of your VM instance and your Windows Server
configuration, the upgrade might take between 10 and 60 minutes to complete.
During that time, you can observe the status through the
serial port output :
In Cloud Shell, observe the boot process by running the following command:
gcloud compute instances tail-serial-port-output VM_NAME --zone= ZONE
Replace the following:
VM_NAME : name of your VM instance
ZONE : name of the zone where the VM instance is located
Wait until the machine has rebooted four times. Depending on the
configuration of your VM instance, it might take 30 minutes or more
for these reboots to occur. You can recognize a reboot by output that
looks similar to this:
SeaBIOS (version 1.8.2-20190620_103534-google)
Total RAM Size = 0x00000001e0000000 = 7680 MiB
CPUs found: 2 Max CPUs supported: 2
After the fourth reboot, wait until the output
GCEMetadataScripts: Finished running startup scripts or
No startup scripts to run appears.
Perform post-upgrade steps
You can now connect to the VM instance to verify that the upgrade has been
successfully completed.
Connect to the VM instance by using an RDP client. For more information,
see
Connecting to instances .
Sign in using a user account with local administrator privileges.
Open an elevated command prompt:
If you use Server Core, an elevated command prompt should open automatically after login.
If you use Windows Server with full desktop experience,
right-click the Start button and select Command Prompt (Admin) .
Run the following command to query the version of Windows Server:
Windows Server Core
ver
Windows Server with Desktop Experience
winver
Verify that the version matches the expected version of Windows Server.
Change the working directory to the installation media. The correct working
directory depends on the Windows Server version that you are upgrading to:
2012 R2
cd /d d:\*2012*
Year 2016
cd /d d:\*2016*
Year 2019
cd /d d:\*2019*
Year 2022
cd /d d:\*2022*
Year 2025
cd /d d:\*2025*
Important: Adjust the drive letter if Windows assigned a different letter
than D: to the disk containing the volume license installation media
provided by Google.
Run upgrade.ps1 again to re-apply specific
Compute Engine settings that might have been lost during
the upgrade:
powershell -ExecutionPolicy Bypass -File upgrade.ps1
Restart the VM instance to ensure all changes take effect. It might take
1 to 2 minutes for the reboot to complete before you can connect to the VM
instance again.
Detach the installation disk
You can now detach the installation disk from the VM instance:
In Cloud Shell, detach the installation disk from your VM instance,
replacing VM_NAME with the name of your VM instance:
gcloud compute instances detach-disk VM_NAME --disk=win-installers
Install updates and restore access
After the upgrade is complete, run Windows Update to download and install any
security updates. To install the security updates, follow these steps:
Connect to the machine by using an RDP client. For more information, see
Connecting to instances .
Use Windows Update to
install the latest Windows updates .
You might have to restart the VM instance multiple times
during this process.
Re-enable any agents, antivirus, or antimalware software that you disabled
before the upgrade.
Troubleshoot the in-place upgrade
While running Windows Setup, you can't connect to the VM instance with RDP. If
you suspect that the upgrade failed or is not progressing, use the following
approaches, in order, to diagnose the situation:
Check the serial port output
To check the progress of the upgrade process, view the
serial port output of the VM instance:
Serial port 1 captures the boot status
Serial port 3 captures the log output of Windows Setup
During the upgrade, you should observe four reboots. If you don't observe any
progress for more than 30 minutes after the first reboot, it is likely that the
upgrade failed.
Check CPU and I/O metrics
Running a Windows Server upgrade is a CPU and disk I/O intensive operation. By
checking the CPU and I/O metrics, you can get an indication for whether the
setup is progressing.
View the CPU and I/O metrics in the Google Cloud console:
In the Google Cloud console, go to the VM instances page.
Go to VM instances
Click the instance that you're upgrading.
Click the Monitoring tab.
Connect to the Emergency Management Services console
Both during and after running Windows Setup, you can connect to the
Emergency Management Services (EMS) console .
Using the EMS console, check the
Windows Setup log files
and the
event log
for indications that the upgrade is still progressing or for information about
any errors that might have occurred.
Connect remotely by using WinRM
If connecting by using RDP or EMS fails, you can try using WinRM to establish a
remote PowerShell session:
Connect to a different Windows Server instance in the same
VPC.
Open PowerShell.
Establish a remote PowerShell session, replacing VM_NAME
with the name of the instance to upgrade:
Enter-PSSession -ComputerName VM_NAME -UseSSL -SessionOption (New-PsSessionOption -SkipCACheck) -Credential (Get-Credential)
When prompted for credentials, enter the username and password of an
administrative user account.
Use the remote PowerShell session to check the
Windows Setup log files
and the
event log .
Analyze log files offline
If you can't connect to the instance by using Windows Remote Management (WinRM),
you can cancel the upgrade and analyze the log files from a different VM
instance. To do this, follow these steps:
Stop the VM instance .
This can take several minutes if Windows Server is unresponsive.
Detach the boot disk
from the instance.
Create a new, temporary Windows Server instance, and attach the boot disk of
the original instance as an additional disk.
Use the temporary Windows Server instance to analyze the
setup log and event log files
of the instance that you were trying to upgrade.
After you have completed the analysis, detach the disk from the temporary
instance and
reattach it as a boot disk
to the original VM instance.
Troubleshoot RDP
For information about troubleshooting RDP, see
Troubleshooting RDP .
Troubleshoot your Windows Server instances
For information about troubleshooting your Windows Server instances, see
Tips and troubleshooting for Windows instances .
Clean up
To avoid incurring further costs after you have completed this process, delete
the installation disk.
Delete the installation disk
You can create an installation disk based on the Google-provided image at any
time. If you don't plan to upgrade more VM instances in the same zone, delete
the installation disk:
In Cloud Shell, delete the win-installers disk that you created
earlier:
gcloud compute disks delete win-installers
What's next
Learn how to
bring existing licenses to Compute Engine .
Learn how to
connect to Windows instances .
Learn about
sole-tenant nodes on Compute Engine .
Work through more
Windows tutorials .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
