---
title: "Exclude files from Gemini Code Assist use \_|\_ Gemini for Google Cloud \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/gemini/docs/codeassist/create-aiexclude-file
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/gemini/docs
source_metadata:
  url: https://docs.cloud.google.com/gemini/docs/codeassist/create-aiexclude-file
  title: "Exclude files from Gemini Code Assist use \_|\_ Gemini for Google Cloud\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Gemini for Google Cloud
Guides
Send feedback
Exclude files from Gemini Code Assist use
Stay organized with collections
Save and categorize content based on your preferences.
Gemini Code Assist supports excluding files from your context for code
generation, code completion, code transformation, and chat. For Enterprise
users, this also includes code customization.
In many scenarios, you'll have specific files or subtrees that you don't want
to have included in your context.
You can exclude these files through the use of an .aiexclude or .gitignore
file. Gemini CLI users can exclude files by using a
.geminiignore file .
Note: For code customization only
the .aiexclude file is used.
Configure context exclusion settings
This section shows you how to configure settings for .aiexclude and
.gitignore files.
Change .aiexclude file to your preferred file
By default, context exclusion is set to use .aiexclude . To change this setting
in your IDE, follow these steps:
VS Code
In the activity bar, click
settings Manage >
Settings .
In the Settings window, navigate to Extensions >
Gemini Code Assist . Scroll until you find Context Exclusion File .
In the text field, change .aiexclude to your preferred location.
Your preferred file is now set as the context exclusion file.
IntelliJ
Configuring settings for .aiexclude and .gitignore files isn't
supported in JetBrains IDEs.
Change .gitignore context exclusion
By default, the .gitignore file is enabled for context exclusion. The file
must be located in the root working folder for
Gemini Code Assist. .gitignore files located in subdirectories
won't be considered or merged.
To disable .gitignore files from context exclusion, follow these steps:
In the activity bar, click
settings Manage >
Settings .
In the Settings window, navigate to Extensions >
Gemini Code Assist . Scroll until you find Context Exclusion Gitignore .
Unselect the checkbox.
.gitignore files are now disabled for specifying file Gemini Code Assist to ignore.
Write an .aiexclude file
Note: In the event that a conflict exists between .aiexclude and .gitignore ,
the .aiexclude directive preempts .gitignore directives.
An .aiexclude file follows the same syntax as a .gitignore file.
Examples
The following examples demonstrate how you can configure an .aiexclude file:
Block all files named apikeys.txt at or below the directory that contains
the .aiexclude file:
apikeys.txt
Block all files with the .key file extension at or below the directory that
contains the .aiexclude file:
*.key
Block only the apikeys.txt file at the same directory as the .aiexclude
file, but not any subdirectories:
/apikeys.txt
Block all files in the directory my/sensitive/dir and all subdirectories.
The path should be relative to the directory that contains the .aiexclude
file.
my/sensitive/dir/
Blocks all the files in directory foo and its subdirectories except file
named bar.txt in the foo directory.
foo/*
!foo/bar.txt
Control access to index for code customization
By default, code customization indexes all the
supported code files in your specified
repositories.
To prevent exposure of code that you don't want to be used in the context, you
can use branch patterns to control access to your index and
use a stable branch, such as main .
Alternatively, you can also exclude files from the context by
creating an .aiexclude file .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
