---
title: "Resource Manager overview \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/resource-manager/docs/resource-manager-overview
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/resource-manager/docs
source_metadata:
  url: https://docs.cloud.google.com/resource-manager/docs/resource-manager-overview
  title: "Resource Manager overview \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Resource Manager
Guides
Send feedback
Resource Manager overview
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how Google Cloud's Resource Manager works and how
you can use it to organize your cloud resources, control access,
and enforce policies effectively across your cloud environment.
Resource Manager is a tool for organizing your Google Cloud resources hierarchically.
In other words, it lets you control how your resources are grouped and where policies
are inherited from.
Resource hierarchy: organizations, folders, and projects
Google Cloud resources are organized hierarchically, similar to a file system. This
hierarchy lets you manage common aspects of your resources, such as access control
and configuration settings, from a central point.
The hierarchy consists of the following levels:
Organization : The root node of the hierarchy. It represents your company and
provides central visibility and control over all resources.
Folders : Grouping mechanisms within an organization. You can use folders to map
your legal or functional structure (such as departments or teams) to your cloud
resources.
Projects : The base-level container for resources. Every resource (like a Compute Engine
virtual machine instance or a Cloud Storage bucket) belongs to exactly one project.
Resources : The fundamental components of Google Cloud, such as virtual machines,
databases, and storage buckets.
Key capabilities for managing Google Cloud resources
Resource Manager provides the following capabilities to help you govern your cloud environment:
Centralized control with the organization resource : The organization resource
represents your organization (for example, your company). It lets you
group all your Google Cloud projects under a single entity. This provides
centralized visibility, ownership, and control over your resources. With an
organization resource, projects belong to the organization rather than to
individual employees, which ensures resource continuity even when employees
leave.
Grouping with folders : Use folders to organize projects into logical groups.
For example, you can create folders for different departments, environments
(like production and staging), or teams. Folders let you apply policies
and access controls to a group of projects at once, rather than managing them
individually.
Project management : Projects are the core organizing entity in Google Cloud. You
use projects to enable APIs, manage billing, and collaborate with team members.
Resource Manager lets you create, update, and delete projects programmatically or
through the console.
Access control and policies inheritance : Resource Manager integrates with
Identity and Access Management (IAM) to let you define who has access to your resources.
You can set allow and deny policies on organizations ,
folders , and projects . You can
set allow policies on some service resources as well. Resources lower in the
hierarchy inherit policies from their parent containers. For example, if you
grant a user the Folder Admin role on a folder, they automatically have that
role on all projects within that folder. If you change the resource hierarchy,
the allow and deny policy hierarchy also changes. For example, moving a project
into an organization resource updates its allow and deny policies to inherit
from the policies of the organization resource.
You can interact with Resource Manager using the Google Cloud console, Google Cloud CLI, and
the Resource Manager API.
Integration with other Google Cloud services for resource management
Resource Manager is central to managing your Google Cloud resources, and provides
the structure and foundational capabilities that let you effectively use and
govern other critical services, such as Organization Policy, Tags,
and Essential Contacts:
Tags : Resource Manager works with Tags, which lets you attach arbitrary
key-value pairs to resources. Tags can be used for various purposes such as
resource categorization, policy enforcement, and cost allocation. Tags management
is an integral part of how resources can be organized and managed within the
Resource Manager hierarchy.
Organization Policy Service : Organization Policy gives you centralized and programmatic
control over your organization's cloud resources. Unlike IAM, which
focuses on who can do things, Organization Policy focuses on what can be done.
For example, you can define a policy that restricts the physical locations where
resources can be created or prevents the creation of public IP addresses.
Resource Manager provides the hierarchical structure (organization, folders, and projects)
that the Organization Policy relies on to enforce rules. While Resource Manager defines
the scope of where resources live, Organization Policy defines restrictions
on how those resources can be configured.
Essential Contacts : The integration of Essential Contacts
with Resource Manager lets you manage who receives notifications based on where they
sit within your organization's structure. Essential Contacts uses
the Resource Manager hierarchy to cascade notification settings down to child resources.
Contacts defined at a higher level, for example the organization node, automatically
inherit notifications for all resources below it, such as folders and projects.
What's next
Understand the resource hierarchy .
Learn how to create your Google Cloud resource hierarchy .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
