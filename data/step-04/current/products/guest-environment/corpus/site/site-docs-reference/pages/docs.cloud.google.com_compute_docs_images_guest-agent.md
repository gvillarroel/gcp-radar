---
title: "About the guest agent \_|\_ Compute Engine \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/compute/docs/images/guest-agent
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/compute/docs/images/guest-agent
source_metadata:
  url: https://docs.cloud.google.com/compute/docs/images/guest-agent
  title: "About the guest agent \_|\_ Compute Engine \_|\_ Google Cloud Documentation"
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
About the guest agent
Stay organized with collections
Save and categorize content based on your preferences.
Linux
Windows
This document provides an overview of the guest agent architecture. The guest
agent is a critical component of the guest environment. The guest environment
contains scripts, daemons, and binaries that instances need to run on Compute Engine.
For more information, see Guest environment .
The guest agent sets up services and defines minimum configurations for
features such as snapshot script execution, Windows failover, OS login, and
metadata-based SSH authentication. For more information about core functions of
the guest agent, see Guest agent functionality .
Guest agent architecture
Starting with version 20250901.00 , the guest agent architecture is
updated from a monolithic design to a modern, plugin-based system. This
evolution improves flexibility, reliability, and extensibility.
Monolithic architecture : guest agents earlier than 20250901.00
feature a single, unified process centered around the metadata server's
description of instances. The metadata server is a per-instance HTTP server
that runs alongside every Compute Engine instance. For more
information about the metadata server, see VM metadata .
The guest agent long polls the metadata server and takes action
based on state changes. With this architecture, the agent's state is shared
across all tasks such as SSH and network setup.
This monolithic approach lacked interface and component isolation. Changes
or feature introductions in one area of the agent affect the entire system
simultaneously. This pattern makes feature additions and testing coverage
challenging.
Plugin-based architecture : starting with version 20250901.00 , the
guest agent is divided into distinct, independent plugins managed by a
central manager. Each plugin can interact with the metadata server and, as
directed by a central manager, makes changes as needed. This
modular approach ensures that a crash in one plugin does not affect the core
agent or other plugins.
The plugin-based architecture
This architecture is built around a central manager that controls various
plugins, separating core functionalities from optional, service-specific
plugins, referred to as extensions.
Key components
The following diagram shows the key components of the guest agent and their
interactions.
Figure 1. Guest agent architecture
Core plugin : this plugin encapsulates the functionality of the original
guest agent. It performs the essential tasks that your instance needs to run
on Google Cloud. These include tasks such as the following:
Network configuration: sets up the primary network interface to enable
communication.
SSH access: manages user SSH keys to allow secure connections to your
instance.
Metadata access: provides a pathway for the instance to access instance
and project metadata.
You can't disable the core plugin.
For more information about core functions of the guest agent, see
Guest agent functionality .
Extensions (Optional plugins) : you can provision these extensions to integrate with other
Google Cloud services to perform tasks such as:
Monitoring and logging: enable the Ops Agent to collect metrics
and logs for Cloud Monitoring. For more information, see Install and manage the Ops Agent by using VM Extension Manager policies .
Workload management: enable the Agent for Compute Workloads to
gather configuration and runtime information from your workloads for
analysis. For more information, see Agent for Compute Workloads overview .
Workload optimization: enable Agent for SAP to support your SAP
workloads running on Google Cloud. For more information, see Install and manage Agent for SAP on a fleet of VMs .
For more information about installing and managing these extensions, see VM Extension Manager .
VM Extension Manager : this managed Google Cloud service runs on
Google's backend infrastructure. VM Extension Manager manages the lifecycle of
extensions, including their installation, updates, and configuration,
by communicating with the guest agent manager on the instance.
Guest agent manager : this central process starts, stops, and
monitors the status of all plugins. The guest agent manager facilitates
communication between the core plugin and VM Extension Manager.
Lifecycle management for extensions includes the following:
Installation and updates: the guest agent manager installs, starts,
stops, and configures extensions based on instructions from
VM Extension Manager.
Health monitoring: the guest agent manager monitors the health and
status of extensions, including their CPU and memory usage, and
reports this information back to VM Extension Manager.
Policy management: use Compute Engine APIs to create policies that
control the installation and versioning of extensions.
Benefits
The plugin-based architecture offers several advantages over the monolithic
design. These benefits include the following:
Plugin isolation : each plugin runs in a separate process, so a crash in
one doesn't affect the core agent or other plugins.
Resource protection : the guest agent uses OS-level features to enforce
resource limits on plugins, preventing any single plugin from consuming
excessive CPU or memory.
Automatic crash recovery : the system automatically recovers from a
plugin crash by stopping and relaunching the plugin.
Selective enablement : you can disable extensions that are not
needed, which lets you secure or optimize your instance.
Reduced overhead for extensions : the guest agent manager
automatically handles the installation and updates of extensions,
reducing the manual effort required to keep them up-to-date.
Location of guest agent binaries
The following tables list the file paths for the different guest agent binaries
on Linux and Windows instances, depending on the architecture.
Plugin-based agent binaries
This table lists the file paths for the plugin-based guest agent binaries on
Linux and Windows instances:
Component
Path on Linux
Path on Windows
Guest agent manager
/usr/bin/google_guest_agent_manager
C:\ProgramData\Google\Compute Engine\agent\GCEWindowsAgentManager.exe
Core plugin binary
/usr/lib/google/guest_agent/core_plugin
C:\Program Files\Google\Compute Engine\agent\CorePlugin.exe
Metadata script runner
/usr/bin/gce_metadata_script_runner
C:\Program Files\Google\Compute Engine\agent\GCEMetadataScriptRunner.exe
Monolithic agent binaries
The following table lists the file paths for the monolithic guest agent
binaries on Linux and Windows instances:
Component
Path on Linux
Path on Windows
Guest agent
/usr/bin/google_guest_agent
C:\Program Files\Google\Compute Engine\agent\GCEWindowsAgent.exe
Metadata script runner
/usr/bin/google_metadata_script_runner
C:\Program Files\Google\Compute Engine\metadata_scripts\GCEMetadataScripts.exe
Authorized keys
Not applicable
C:\Program Files\Google\Compute Engine\agent\GCEAuthorizedKeys.exe
Guest agent daemon services
The following tables list the guest agent daemon services installed on Linux and
Windows instances. These services run as systemd units on Linux and as Windows
services on Windows.
Component
Service Name on Linux
Service Name on Windows
Status
Guest agent manager
google-guest-agent-manager.service
GCEAgentManager
Enabled in all modes, including
backward compatibility .
Guest agent
google-guest-agent.service
GCEAgent
Disabled by default. Enabled only
in backward compatibility mode .
Guest agent compatibility manager
google-guest-compat-manager.service
GCEWindowsCompatManager
Enabled in all modes, including
backward compatibility .
Workload certificate refresher
gce-workload-cert-refresh.timer
N/A
Disabled by default. Enabled only in
backward compatibility mode .
Startup scripts
google-startup-scripts.service
GCEStartup
Linux: Enabled in all modes.
Windows: GCEStartup is not a daemon service. It is
configured as a
scheduled task with a boot trigger . For implementation details,
refer to the
installation script .
Shutdown scripts
google-shutdown-scripts.service
Shutdown
Linux: Enabled in all modes.
Windows: Shutdown is
not a daemon service. It is configured as a
group policy script execution . For implementation details, refer to
the
installation script .
Important: The guest agent service and the core plugin are mutually exclusive and
only one can run at a time. The guest agent service is installed but disabled
by default. This is the expected state. Don't manually start this service, as
running both processes simultaneously causes conflicts. The guest agent
compatibility manager automatically enables the guest agent service only when
backward compatibility mode is required.
Backward compatibility
To ensure a smooth transition from the previous, monolithic guest agent to the
plugin-based system, the guest agent package includes several components
designed for backward compatibility. These components are not part of the
plugin-based architecture and activate only if you manually choose to revert to
the monolithic agent by setting the metadata attribute
enable-guest-agent-core-plugin to false .
The components that support this compatibility include the following:
Guest agent compatibility manager: this package manages the switch between
the plugin-based agent and the monolithic agent.
Metadata script runner compatibility manager: this package ensures that the
correct script runner is used, depending on whether the monolithic or
plugin-based agent is active.
Authorized keys compatibility manager (Windows only): this package handles
SSH keys, ensuring that the correct keys are used for either the old or new
agent.
Component
Path on Linux
Path on Windows
Guest agent compatibility manager
/usr/bin/google_guest_compat_manager
C:\Program Files\Google\Compute Engine\agent\GCEWindowsCompatManager.exe
Metadata script runner compatibility manager
/usr/bin/metadata_script_runner_compat
C:\Program Files\Google\Compute Engine\metadata_scripts\GCECompatMetadataScripts.exe
Authorized keys compatibility manager
Not applicable
C:\Program Files\Google\Compute Engine\agent\GCEWindowsAuthorizedKeysCompat.exe
What's next
For more information about core plugin functions, see
Guest agent functionality
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
