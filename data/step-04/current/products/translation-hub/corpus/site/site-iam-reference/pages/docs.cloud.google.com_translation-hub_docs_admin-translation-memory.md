---
title: "Save and reuse human-reviewed translations \_|\_ Translation Hub \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/translation-hub/docs/admin-translation-memory
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/translation-hub/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/translation-hub/docs/admin-translation-memory
  title: "Save and reuse human-reviewed translations \_|\_ Translation Hub \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Translation Hub
Guides
Send feedback
Save and reuse human-reviewed translations
Stay organized with collections
Save and categorize content based on your preferences.
Starting on June 30, 2025, Translation Hub is officially
deprecated and will no longer be supported. You can continue using
Translation Hub until September 20, 2026, when it will be shut down.
A translation memory ( advanced tier only ) is a repository of
human-reviewed translations. Portal users can apply a translation memory on
their translation jobs so that exact matches on source-language segments are
replaced by their corresponding target-language segments. Translation
memories are useful for reusing human-reviewed translations and maintaining
consistent translations.
You can start with an empty translation memory or import your own translations.
As part of the post-editing process, Translation Hub populates your
translation memory with post-edited translations.
Translation Hub keeps only the latest post-edited translations in memory.
For example, if a portal user edits a segment that Translation Hub
translated with a translation memory, Translation Hub replaces the
existing segment with the newly edited segment. To prevent replacements, you can
set a translation memory to be read-only.
Translation memory compared to other translation resources
In addition to translation memories, you can provide other resources to assist
portal users with their translations. The following section describes the
differences between each resource.
Glossaries match on terms, whereas translation memories match on
segments. Use glossaries to translate domain-specific terms or entities.
Glossaries also has size limits; translation memories can contain as many
segments pairs in as many languages as you require.
Custom models are trained with your sentence pairs and can
help you improve machine translations when you don't have a comprehensive
glossary or translation memory available. In cases where you want to tune
machine translations for a specific domain and writing style, use
AutoML Translation to build custom models that produce
better-fitting predictions.
Portal users can use a combination of these resources to help improve the
quality of their translations. For more information about how
Translation Hub applies resources during translations, see Translate
documents .
Before you begin
When you create a translation memory, you can choose to import existing
translations. If you do, provide translations in the Translation Memory eXchange
(TMX) version 1.4 format. TMX is a standard XML format for
providing source and target translations. The following example shows the
required TMX structure:
<?xml version='1.0' encoding='utf-8'?>
<!DOCTYPE tmx SYSTEM "tmx14.dtd">
<tmx version="1.4">
<header segtype="sentence" o-tmf="UTF-8"
adminlang="en" srclang="en" datatype="PlainText"/>
<body>
<tu>
<tuv xml:lang="en">
<seg>Hello world!</seg>
</tuv>
<tuv xml:lang="es">
<seg>¡Hola Mundo!</seg>
</tuv>
</tu>
</body>
</tmx>
Segmentation and matching
Segment your source language entries in your TMX file by sentence. During the
translation process, Translation Hub segments your content by sentence.
Translation Hub then compares these segments with segments in your
translation memory. If the segments are an exact match, Translation Hub
uses your corresponding translation.
If you include a partial sentence or multiple sentences as a source-language
segment, Translation Hub won't match on that segment. As a result, you
might have a lower match rate than expected.
Create a translation memory
Administrators create translation memories by using the Google Cloud console. After
you create a translation memory, it can only be modified through the post
editing or self editing process. You can't, for example, import another file to
modify or append to an existing translation memory.
In the Translation Hub section of the Google Cloud console, go to the
Resources page.
Go to the Resources page
Click Add resource .
In the Add resource pane, select the Translation memories tab.
Specify a name for the translation memory.
Select Create an empty translation memory to create an empty translation
memory or select Create a translation memory and import data to import
existing translations.
To import existing translations, upload a local TMX file to
Cloud Storage or select an existing TMX file from
Cloud Storage.
Click Add to create the translation memory.
Add translation memory to portals
After you create a translation memory, add it to an existing portal so that
portal users can start using it when requesting translations.
In the Translation Hub section of the Google Cloud console, go to the
Resources page.
Go to the Resources page
From the list of resources, select one or more translation memories to add to
one or more portals.
Click Assign to portals , which opens the Assign resource to portal
pane.
From the portals field, select one or more portals to add the translation
memories to.
Click Assign .
On the Resources page, you can confirm the addition by viewing the
Portal names column for each resource.
Set a default translation memory
You can set a default translation memory that Translation Hub
automatically selects when portal users request a translation.
A default translation memory is helpful to consistently apply a set of
human-reviewed translations, to capture edits during post-editing, or both.
Users don't need to remember to select a translation memory or which one to use.
They can still choose a different translation memory or none. Portal users
cannot change this selection after the initial translation like when requesting
a post-edit.
Before you begin, you must add the translation memory that you'll set
as the default to a portal.
In the Translation Hub section of the Google Cloud console, go to the
Portals page.
Go to the Portals page
Select the portal where you want to specify a default translation memory.
In the Translation memories section, find the translation memory to set
as the default and then select more_vert
More > Set as default .
If you have an existing default, Translation Hub removes it as the
default and sets your selected translation memory as the default.
Remove default translation memory
In the Translation Hub section of the Google Cloud console, go to the
Portals page.
Go to the Portals page
Select the portal that includes the default translation memory to remove.
In the Translation memories section, find the translation memory to
remove as the default and then select more_vert More > Unset as default .
Additional resources
Learn how to set a translation memory to read only .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
