---
title: "Manage Node.js packages \_|\_ Artifact Registry \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/artifact-registry/docs/nodejs
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/artifact-registry/docs
source_metadata:
  url: https://docs.cloud.google.com/artifact-registry/docs/nodejs
  title: "Manage Node.js packages \_|\_ Artifact Registry \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Artifact Registry
Guides
Send feedback
Manage Node.js packages
Stay organized with collections
Save and categorize content based on your preferences.
Artifact Registry supports Node.js packages that you manage with npm.
Overview
To get familiar with Node.js packages in Artifact Registry, you can try the
quickstart .
When you are ready to learn more, read the following information:
If you are new to npm, read about the following concepts:
npm scopes
the .npmrc configuration file
Create a Node.js package repository for your packages.
Grant permissions to the account that
will connect with the repository. Service accounts for common integrations
with Artifact Registry have default permissions for
repositories in the same project.
Configure your tools:
Configure authentication for npm.
Configure Cloud Build to upload and download packages.
Learn about deploying to Google Cloud runtime environments.
Learn about managing packages .
Using scopes
An npm scope is a label for grouping packages. Scopes are necessary when you
are working with multiple npm registries, including:
Publishing and installing packages in different registries without the need
to switch from one registry to another. For example, your builds might include
packages from both the public npm registry and an Artifact Registry
repository.
Publishing the same packages to multiple Artifact Registry repositories
across Google Cloud projects, as well as other npm registries, without
package name conflicts.
We recommend that you always set a scope for your repositories. If you do not
specify a scope when you publish or install package, npm uses the configured
default registry, such as the public npm registry.
You set the scope for each Artifact Registry repository in the
.npmrc configuration file. The same credentials for authentication apply
across the repositories.
The following example shows configuration for two Artifact Registry
repositories in different projects.
The @blue scope is for the repository in the project blue-project .
The @green scope is for the repository in the project green-project .
@blue:registry=https://us-central1-npm.pkg.dev/blue-project/blue-npm-repo/
//us-central1-npm.pkg.dev/blue-project/blue-npm-repo/:always-auth=true
@green:registry=https://us-central1-npm.pkg.dev/green-project/green-npm-repo/
//us-central1-npm.pkg.dev/green-project/green-npm-repo/:_authToken=""
//us-central1-npm.pkg.dev/green-project/green-npm-repo/:always-auth=true
After you have authenticated to Artifact Registry, you can upload a package
to a particular repository using the appropriate scope. For example, the
following command uploads a package to the blue-npm-repo in the project
blue-project :
npm publish @blue/blue-npm-repo
For more information about scopes, see the npm documentation
Configuring npm
Settings used for authentication are stored in the .npmrc configuration file.
You can configure an .npmrc file at the project, user, or global level.
When you configure authentication with Artifact Registry, you define
the repositories that you want to connect to and the credentials for
authentication.
Artifact Registry repositories
We recommend setting the repository list in the per-project config file .
This file is usually in the same directory as the package.json file in your
npm project. The Artifact Registry credential helper checks this .npmrc
file for your repositories by default.
If you do not want to expose the repository paths in your source control
system, you can:
Add the .npmrc filename your source control's list of files to ignore.
Store the repository list in your per-user confg file instead. The
per-user .npmrc file is in your user home directory, or is set with the
npm --userconfig parameter or $NPM_CONFIG_USERCONFIG environment
variable. Settings in the per-user config file apply to all your projects
unless you override them at the project level.
Artifact Registry credentials
Store your credentials for Artifact Registry in the per-user config
file so that they are not available to other users. This file is located in
your user home directory, or is set with the npm --userconfig parameter or
$NPM_CONFIG_USERCONFIG environment variable.
The Artifact Registry
credential helper is stored in the public npm registry and does not require
authentication for installation.
You should retain any existing default registry configured in your .npmrc file.
The default is typically set to the public npm registry at
https://registry.npmjs.org/ .
To check the current default registry value run the command:
npm get registry
For more information about npm configuration files, see the
npm config file
documentation.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
