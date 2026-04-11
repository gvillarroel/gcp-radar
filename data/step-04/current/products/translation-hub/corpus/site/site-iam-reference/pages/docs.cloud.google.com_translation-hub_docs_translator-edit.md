---
title: "Review and edit translations \_|\_ Translation Hub \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/translation-hub/docs/translator-edit
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/translation-hub/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/translation-hub/docs/translator-edit
  title: "Review and edit translations \_|\_ Translation Hub \_|\_ Google Cloud Documentation"
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
Review and edit translations
Stay organized with collections
Save and categorize content based on your preferences.
Starting on June 30, 2025, Translation Hub is officially
deprecated and will no longer be supported. You can continue using
Translation Hub until September 20, 2026, when it will be shut down.
After portal users complete a translation (advanced tier only), they can send
translations for post-editing by selecting a post-editing group. If you are part
of a post-editing group, you and all the other group members receive an email
notification for each new post-edit request. After a translator accepts a job,
Translation Hub removes the job from the task list of all the other
translators.
Before you begin
An administrator must add you to a project and to a post-editing group.
Edit a translation
After receiving an email notification that a new document is ready for
review, click the included link to go to the post-editing portal.
If you're assigned to multiple projects or roles, choose a project and
then choose the translator role. In the translator portal,
Translation Hub lists the available post-editing tasks.
To view details about a task, click info
View task details , which includes notes from the requestor as well as the
source and target language of the document.
To accept a task, click add_circle
Accept task .
Click edit Edit to start
editing the document.
Click a segment to edit it.
You can edit only the translated segments. After you select a segment,
Translation Hub provides a Segment detail pane, which might have
additional details about the machine translation.
Style tags apply specific formatting to text such as bold or underline. You
cannot remove or modify these tags; if you do, you cannot save or submit
your edits. You can new_label reinsert
tags or settings_backup_restore revert
your edits.
To save in-progress edits and come back to a document later, click Save .
When you're done with your review, click Submit to save and send your
edits.
If portal users specified a translation memory when they did the initial
machine translation, your edits are automatically saved to that translation
memory. If you modify any segments that were translated with the translation
memory, your changes overwrite the existing entry.
Segment details
During a post-edit, you can select a segment to view its translation details,
such as its machine translation quality prediction (MTQP) score, in the
Segment detail pane.
MTQP - MTQP scores predict if the translation output matches the
meaning of the source sentence. These scores are machine-learning generated
metrics, which serve as a probability of quality and not a guarantee of
quality. A higher score predicts a higher probability. You can use these
scores to help guide your editing efforts.
Translation Hub provides MTQP scores for the following supported
language pairs:
Arabic ( ar ) <-> English ( en )
Chinese ( zh ) <-> English ( en )
French ( fr ) <-> English ( en )
German ( de ) <-> English ( en )
Hindi ( hi ) <-> English ( en )
Italian ( it ) <-> English ( en )
Japanese ( ja ) <-> English ( en )
Portuguese ( pt ) <-> English ( en )
Russian ( ru ) <-> English ( en )
Spanish ( es ) <-> English ( en )
Translation Hub doesn't provide MTQP scores for segments that are
replaced by translation memory or for custom model translations.
TM (translation memory) - If a segment matched an entry in the
translation memory, Translation Hub shows the matching source segment
and corresponding translation that Translation Hub used.
Glossary - If a segment had matching glossary terms,
Translation Hub shows a list of the source language terms and their
corresponding target language terms.
done_all Translation reviewed -
Indicates that a segment has been post-edited.
N/A - There's no MTQP score for this segment because it was
translated by using a custom model or translated to or from an unsupported
language.
Reject a task
If you can't commit to an accepted task, you can remove it from your queue so
that other translators can accept it. If you decide to re-accept the task later,
you can retrieve your saved edits. However, other translators won't see your
saved edits; they start with the machine-translated document.
Go to
https://translationhub.cloud.google.com/
to sign in to the post-editing portal.
For the task that you want to remove, click remove_circle_outline Reject task .
Translation Hub places the task back on the task list for all
post-editing group members.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
