---
title: "Manage a business glossary \_|\_ Knowledge Catalog \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataplex/docs/manage-glossaries
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/dataplex/docs
source_metadata:
  url: https://docs.cloud.google.com/dataplex/docs/manage-glossaries
  title: "Manage a business glossary \_|\_ Knowledge Catalog \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

As of April 10, 2026, Dataplex Universal Catalog is now called Knowledge Catalog. The API, client library, CLI, and IAM names remain unchanged.
Home
Documentation
Data analytics
Knowledge Catalog
Guides
Send feedback
Manage a business glossary
Stay organized with collections
Save and categorize content based on your preferences.
This document describes how to create and manage a
business glossaries in Knowledge Catalog (formerly Dataplex Universal Catalog). Use a business
glossary to establish a standardized vocabulary for your data assets, which
reduces ambiguity and improves data discovery and governance across your
organization.
Knowledge Catalog business glossary use cases
By creating a common language for data using Knowledge Catalog business glossary,
you can achieve the following:
Define a clear hierarchy of business categories and terms.
Link concepts using synonyms and show relationships between terms.
Search for data resources based on business concepts, not just technical names.
Knowledge Catalog business glossary helps streamline data discovery and reduce
ambiguity, resulting in better governance, more accurate analysis, and faster
insights.
Elements of a business glossary
This section describes the key elements that you can use to structure a business
glossary.
Glossary
A glossary has the following properties:
Overview . Describes the purpose and contents of the business glossary.
You can add images, links, and tables. While HTML formatting isn't
supported, you can include HTML code formatted as code or add a link to an
HTML page. You can also use rich text formatting options such as bold,
italics, underline, bulleted lists, paragraphs, headings, and code blocks.
The maximum supported size is 120 KB.
Description . Describes the glossary. The text in this field is indexed
for search. The maximum supported size is 1 KB.
Region . Specifies the region where the
glossary is located.
Category
A category lets you organize and structure various categories and terms.
Categories are defined within a business glossary. You can nest categories up to
three levels.
A category has the properties of a glossary as well as the following properties:
Contacts . Specifies the person responsible for maintaining the category.
This property is descriptive and doesn't affect the permissions of the category.
Parent . Specifies a relationship that is used to establish the parent of
the current category. You can nest up to three categories.
The region of a category is the same as the region of the glossary that contains
it.
Term
A term (short for "glossary term") describes a concept that's used in a
particular branch of business within your company. For example, the marketing
department of a company might create a term that describes cost per click.
Terms are defined within a business glossary, either in the glossary directly or
within any category found in the glossary.
A term has the properties of a category as well as the following properties:
Synonyms . Specifies links between terms that have the same meaning.
See Synonym terms .
Related terms . Specifies links between terms that are conceptually related
to each other, but that have different meanings. See Related terms .
Related entries . Specifies links between terms and data assets, or between
terms and columns within data assets.
Contacts . Specifies the person responsible for maintaining the term. Terms
don't inherit the contacts that are defined in categories.
The region of a term is the same as the region of the glossary that contains it.
Synonym terms
A synonym is a relationship that indicates equivalence between two different
terms. Use synonyms when two terms with the same meaning are defined by
different teams in different glossaries. For example, you can create a synonym
to link the terms "profit" and "earnings."
Related terms
A related term is a relationship that indicates that two terms are associated
with each other, but have different meanings. For example, you can create a
related term to link the terms "revenue" and "profit."
Limitations
Knowledge Catalog business glossary isn't supported for Assured Workload projects.
Business glossaries are housed within projects and locations; the
limitations for projects and locations
apply to glossaries.
Required roles
To get the permissions that
you need to create and manage glossaries,
ask your administrator to grant you the
following IAM roles on your project:
For data administrators, get full access to glossaries, categories, terms, synonyms, and related terms, and to set IAM policies:
Dataplex Catalog Admin ( roles/dataplex.catalogAdmin )
For data stewards or data owners, get access to creating, editing or deleting glossaries, categories, terms, links between terms, links between terms and data assets , and search:
Dataplex Catalog Editor ( roles/dataplex.catalogEditor )
For data analysts or data consumers, get read-only access to glossaries, categories, terms, links between terms and between terms and data assets, and search:
Dataplex Catalog Viewer ( roles/dataplex.catalogViewer )
For more information about granting roles, see Manage access to projects, folders, and organizations .
These predefined roles contain
the permissions required to create and manage glossaries. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to create and manage glossaries:
Create, read, update, and delete a business glossary, category, and terms in your project:
dataplex.glossaries.list
dataplex.glossaries.create
dataplex.glossaries.get
dataplex.glossaries.update
dataplex.glossaries.delete
dataplex.glossaryCategories.create
dataplex.glossaryCategories.list
dataplex.glossaryCategories.get
dataplex.glossaryCategories.update
dataplex.glossaryCategories.delete
dataplex.glossaryTerms.create
dataplex.glossaryTerms.list
dataplex.glossaryTerms.get
dataplex.glossaryTerms.update
dataplex.glossaryTerms.delete
Create, lookup, and delete synonym term-to-term links in your project:
dataplex.entryLinks.create
on the Knowledge Catalog entry group in the project in which either of the glossary terms is present. The link is created in the entry group for which the permission is given.
dataplex.entryGroups.useSynonymEntryLink
on the Knowledge Catalog entry group in the project in which either of the glossary terms is present. The link is created in the entry group for which the permission is given.
dataplex.glossaryTerms.use
on the glossaries whose terms need to be associated.
dataplex.glossaryTerms.get
on the term whose synonym links you are looking up. Knowledge Catalog redacts synonym terms in the response if you lack the dataplex.glossaryTerms.get permission for those terms.
dataplex.entryLinks.delete
on the Knowledge Catalog entry group in the project in which the link is present.
Create, lookup, and delete related term-to-term links in your project:
dataplex.entryLinks.create
on the Knowledge Catalog entry group in the project in which either of the glossary terms is present. The link is created in the entry group for which the permission is given.
dataplex.entryGroups.useRelatedEntryLink
on the Knowledge Catalog entry group in the project in which either of the glossary terms is present. The link is created in the entry group for which the permission is given.
dataplex.entries.link
on the Knowledge Catalog entry group in projects in which entries corresponding to glossary terms are present.
dataplex.glossaryTerms.get
on the term whose related links you are looking up. Knowledge Catalog redacts related terms in the response if you lack the dataplex.glossaryTerms.get permission for those terms.
dataplex.entryLinks.delete
on the Knowledge Catalog entry group in the project in which the link is present.
Create, lookup, and delete links between terms and data assets or columns in your project:
dataplex.entryLinks.create
on the system entry group corresponding to data assets or columns in the project. The link is created in the project for which the permission is given.
dataplex.entryGroups.useDefinitionEntryLink
on the system entry group corresponding to data assets or columns in the project. The link is created in the project for which permission is given.
dataplex.entries.link
on the system entry group corresponding to data assets or columns in the project. The link is created in the project for which the permission is given.
dataplex.glossaryTerms.use
on the glossary whose term needs to be associated.
Source system read permission (for example, bigquery.tables.get or dataplex.glossaryTerms.get )
on the entry whose links you are looking up. Knowledge Catalog redacts data assets in the response if you lack the source system read permission for those assets.
dataplex.entryLinks.delete
on the system entry group in which the link is present.
You might also be able to get
these permissions
with custom roles or
other predefined roles .
For more information, see
Knowledge Catalog IAM roles .
Create and manage business glossaries
The following sections describe how to create, view, edit, and delete a business
glossary.
Create a business glossary
Console
In the Google Cloud console, go to the Knowledge Catalog Glossaries
page.
Go to Glossaries
Click Create business glossary .
On the Create business glossary page, specify a name and location for
the business glossary. After you create the glossary, you can't change the
location.
Click Create . The glossary is created under the current project.
Optional: Add a short description in Description (up to 1024 characters)
or a long description in Overview (up to 120 KB).
REST
When you create a glossary, Knowledge Catalog creates an entry to represent the glossary.
Create the glossary.
alias gcurl = 'curl -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json"'
gcurl -X POST https://dataplex.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /glossaries?glossary_id = GLOSSARY_ID --data @-
{
"displayName": " DISPLAY_NAME ",
"description": " DESCRIPTION "
}
EOF
Replace the following:
PROJECT_ID : the ID of the project in which you
want to create the glossary
LOCATION_ID : the ID of the location where you
want to create the glossary
GLOSSARY_ID : the ID of the glossary
DISPLAY_NAME : the display name of the glossary
DESCRIPTION : the description of the glossary,
up to a maximum of 1024 characters
Optional: Add an overview to the glossary.
Look up the entry for your glossary:
gcurl -X GET https://dataplex.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID
:lookupEntry \
?entry = projects/ PROJECT_NUMBER /locations/ LOCATION_ID /entryGroups/@dataplex/entries/projects/ PROJECT_NUMBER /locations/ LOCATION_ID /glossaries/ GLOSSARY_ID
\
\& view = ALL
Replace PROJECT_NUMBER with the number of the
project where your glossary is created.
Add an overview to your glossary:
gcurl -X PATCH https://dataplex.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION_ID /entryGroups/@dataplex/entries/projects/ PROJECT_NUMBER /locations/ LOCATION_ID /glossaries/ GLOSSARY_ID \
?update_mask = aspects \
\& deleteMissingAspects = false \
\& aspect_keys = projects/dataplex-types/locations/global/aspectTypes/overview \
--data @-
{
"aspects": {
"dataplex-types.global.overview": {
"aspect_type": "projects/dataplex-types/locations/global/aspectTypes/overview",
"data": {
"content": " OVERVIEW ",
"links": []
},
}
}
}
EOF
Replace OVERVIEW with plaintext or HTML to
describe your glossary category or term.
View the available glossaries
Console
In the Google Cloud console, go to the Knowledge Catalog Glossaries
page.
Go to Glossaries
The My glossaries pane displays all the organization's glossaries
you have permission to view, along with their descriptions and last modified
timestamps.
REST
alias gcurl = 'curl -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json"'
gcurl -X GET https://dataplex.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /glossaries
Edit a glossary
You can edit the name and description of a glossary.
Console
In the Google Cloud console, go to the Knowledge Catalog Glossaries
page.
Go to Glossaries
Click the glossary that you want to edit.
Click Edit next to the name, description, or overview, and then make
your change.
Click Save .
REST
alias gcurl = 'curl -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json"'
gcurl -X PATCH https://dataplex.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /glossaries/ GLOSSARY_ID ?update_mask = displayName,description --data @-
{
"displayName": " DISPLAY_NAME ",
"description": " DESCRIPTION "
}
EOF
Delete a glossary
Before you can delete a glossary, you first need to
delete all the categories and terms in
the glossary.
Console
In the Google Cloud console, go to the Knowledge Catalog Glossaries
page.
Go to Glossaries
Click the glossary that you want to delete.
Click Delete , and then confirm when prompted.
REST
alias gcurl = 'curl -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json"'
gcurl -X DELETE https://dataplex.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /glossaries/ GLOSSARY_ID
Create and manage categories
The following sections describe how to create, view, update, and delete
categories.
Create a category under a glossary
A business glossary can have a maximum of 200 categories.
Console
In the Google Cloud console, go to the Knowledge Catalog Glossaries
page.
Go to Glossaries
Select the glossary in which you want to create a category, and then click
Create category .
Enter a name for the category.
Click Create .
Optional: Add a short description in Description (up to 1024 characters)
or a long description in Overview (up to 120 KB).
REST
When you create a category, Knowledge Catalog creates an entry to represent the category.
Create the category.
alias gcurl = 'curl -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json"'
gcurl -X POST https://dataplex.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /glossaries/ GLOSSARY_ID /categories?category_id = CATEGORY_ID --data @-
{
"displayName": " CATEGORY_DISPLAY_NAME ",
"description": " CATEGORY_DESCRIPTION ",
"parent": "projects/ PROJECT_ID /locations/ LOCATION_ID /glossaries/ GLOSSARY_ID "
}
EOF
Replace the following:
CATEGORY_ID : the category ID
CATEGORY_DISPLAY_NAME : the category display name
CATEGORY_DESCRIPTION : the category description
Optional: Add an overview to the category.
Look up the entry for your category:
gcurl -X GET https://dataplex.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID
:lookupEntry \
?entry = projects/ PROJECT_NUMBER /locations/ LOCATION_ID /entryGroups/@dataplex/entries/projects/ PROJECT_NUMBER /locations/ LOCATION_ID /glossaries/ GLOSSARY_ID /categories/ CATEGORY_ID
\
\& view = ALL
Add an overview to your category:
gcurl -X PATCH https://dataplex.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION_ID /entryGroups/@dataplex/entries/projects/ PROJECT_NUMBER /locations/ LOCATION_ID /glossaries/ GLOSSARY_ID /categories/ CATEGORY_ID \
?update_mask = aspects \
\& deleteMissingAspects = false \
\& aspect_keys = projects/dataplex-types/locations/global/aspectTypes/overview
\
--data @-
{
"aspects": {
"dataplex-types.global.overview": {
"aspect_type":"projects/dataplex-types/locations/global/aspectTypes/overview
",
"data": {
"content": " OVERVIEW ",
"links": []
},
}
}
}
EOF
Replace OVERVIEW with plaintext or HTML to
describe your glossary category or term.
Optional: Add contacts
Look up the entry for your category:
gcurl -X GET https://dataplex.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID
:lookupEntry \
?entry = projects/ PROJECT_NUMBER /locations/ LOCATION_ID /entryGroups/@dataplex/entries/projects/ PROJECT_NUMBER /locations/ LOCATION_ID /glossaries/ GLOSSARY_ID /categories/ CATEGORY_ID
\
\& view = ALL
Update the entry for your category with contacts:
gcurl -X PATCH https://dataplex.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION_ID /entryGroups/@dataplex/entries/projects/ PROJECT_NUMBER /locations/ LOCATION_ID /glossaries/ GLOSSARY_ID /categories/ CATEGORY_ID \
?update_mask = aspects \
\& deleteMissingAspects = false \
\& aspect_keys = projects/dataplex-types/locations/global/aspectTypes/contacts \
--data @-
{
"aspects": {
"dataplex-types.global.contacts": {
"aspect_type": "projects/dataplex-types/locations/global/aspectTypes/contacts",
"data": {
"identities": [
{
"role": "steward",
"name": " CONTACT_NAME ",
"id": " CONTACT_EMAIL "
}
]
},
}
}
}
EOF
Create a nested category
A business glossary can have a maximum of three nested category levels,
excluding the root glossary level.
Console
In the Google Cloud console, go to the Knowledge Catalog Glossaries
page.
Go to Glossaries
Expand the glossary in which you want to create a category.
Select the parent category in which you want to create another category,
and click Create category .
Enter a name for the category.
Click Create .
Optional: Add a short description in Description (up to 1024 characters)
or a long description in Overview (up to 120 KB).
REST
alias gcurl = 'curl -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json"'
gcurl -X POST https://dataplex.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /glossaries/ GLOSSARY_ID /categories?category_id = CATEGORY_ID --data @-
{
"displayName": " CATEGORY_DISPLAY_NAME ",
"description": " CATEGORY_DESCRIPTION ",
"parent": "projects/ PROJECT_ID /locations/ LOCATION_ID /glossaries/ GLOSSARY_ID /categories/ PARENT_CATEGORY_ID "
}
EOF
Replace PARENT_CATEGORY_ID with the ID of the parent
category.
View the categories that belong to a glossary
Console
In the Google Cloud console, go to the Knowledge Catalog Glossaries
page.
Go to Glossaries
To view the categories in a glossary, expand the glossary.
To view the nested categories in a category, expand the category.
REST
alias gcurl = 'curl -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json"'
gcurl -X GET https://dataplex.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /glossaries/ GLOSSARY_ID /categories
Edit a category
You can edit the name, description, and contacts for a category. For nested
categories, you can also edit the parent category.
Console
In the Google Cloud console, go to the Knowledge Catalog Glossaries
page.
Go to Glossaries
Expand the glossary and click the category you want to edit.
Click edit Edit next to the
name, description, or overview, and then make your change.
Click Save .
REST
alias gcurl = 'curl -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json"'
gcurl -X PATCH https://dataplex.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /glossaries/ GLOSSARY_ID /categories/ CATEGORY_ID ?update_mask = displayName,description --data @-
{
"displayName": " CATEGORY_DISPLAY_NAME ",
"description": " DESCRIPTION "
}
EOF
Delete a category
Console
In the Google Cloud console, go to the Knowledge Catalog Glossaries
page.
Go to Glossaries
Expand the glossary and click the category that you want to delete.
Click Delete , and then confirm when prompted.
REST
alias gcurl = 'curl -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json"'
gcurl -X DELETE https://dataplex.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /glossaries/ GLOSSARY_ID /categories/ CATEGORY_ID
Create and manage terms
The following sections describe how to create, view, access, edit, and delete
terms.
Create a term under a business glossary
A business glossary can have a maximum of 5,000 terms.
Console
In the Google Cloud console, go to the Knowledge Catalog Glossaries
page.
Go to Glossaries
To create a term at the glossary level, select the glossary where you
want to create a term, and then click Create term .
Enter a name for the term.
Click Create .
Optional: Add a short description in Description (up to 1024 characters)
or a long description in Overview (up to 120 KB).
Optional: To add contacts, click Edit , and then provide a list of
email addresses for the data stewards, data owners, or data domain owners.
Then click Save .
REST
When you create a term, Knowledge Catalog creates an entry to represent the term.
Create the term.
alias gcurl='curl -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json"'
gcurl -X POST https://dataplex.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /glossaries/ GLOSSARY_ID /terms?term_id= TERM_ID --data @- TERM_DISPLAY_NAME ",
"description": " TERM_DESCRIPTION ",
"parent": "projects/ PROJECT_ID /locations/ LOCATION_ID /glossaries/ GLOSSARY_ID "
}
EOF
Replace the following:
TERM_ID : the ID of the term you're creating
TERM_DISPLAY_NAME : the display name for the term you're creating
TERM_DESCRIPTION : the description for the term you're creating
Optional: Add an overview to the term.
Look up the entry for your term:
gcurl -X GET https://dataplex.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID
:lookupEntry\
?entry=projects/ PROJECT_NUMBER /locations/ LOCATION_ID /entryGroups/@dataplex/entries/projects/ PROJECT_NUMBER /locations/ LOCATION_ID /glossaries/ GLOSSARY_ID /terms/ TERM_ID
\
\&view=ALL
Add an overview to your term:
gcurl -X PATCH https://dataplex.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION_ID /entryGroups/@dataplex/entries/projects/ PROJECT_NUMBER /locations/ LOCATION_ID /glossaries/ GLOSSARY_ID /terms/ TERM_ID
\
?update_mask=aspects\
\&deleteMissingAspects=false\
\&aspect_keys=projects/dataplex-types/locations/global/aspectTypes/overview
\
--data @- OVERVIEW ",
"links": []
},
}
}
}
EOF
Replace OVERVIEW with plaintext or HTML to
describe your glossary category or term.
Optional: Add contacts.
Look up the entry for your term:
gcurl -X GET https://dataplex.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID
:lookupEntry\
?entry=projects/ PROJECT_NUMBER /locations/ LOCATION_ID /entryGroups/@dataplex/entries/projects/ PROJECT_NUMBER /locations/ LOCATION_ID /glossaries/ GLOSSARY_ID /terms/ TERM_ID
\
\&view=ALL
Update the entry for your term with contacts:
gcurl -X PATCH https://dataplex.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION_ID /entryGroups/@dataplex/entries/projects/ PROJECT_NUMBER /locations/ LOCATION_ID /glossaries/ GLOSSARY_ID /terms/ TERM_ID
?update_mask = aspects \
\& deleteMissingAspects = false \
\& aspect_keys = projects/dataplex-types/locations/global/aspectTypes/contacts \
--data @-
{
"aspects": {
"dataplex-types.global.contacts": {
"aspect_type": "projects/dataplex-types/locations/global/aspectTypes/contacts",
"data": {
"identities": [
{
"role": "steward",
"name": " CONTACT_NAME ",
"id": " CONTACT_EMAIL "
}
]
},
}
}
}
EOF
Create a term under a category
Console
In the Google Cloud console, go to the Knowledge Catalog Glossaries
page.
Go to Glossaries
To create a term in a category, select the category where you want to
create a term, and then click Add term .
Enter a name for the term.
Click Create .
Optional: Add a short description in Description (up to 1024 characters)
or a long description in Overview (up to 120 KB).
Optional: To add contacts, click Edit , and then provide a list of
email addresses for the data stewards, data owners, or data domain owners.
Then click Save .
REST
When you create a term, Knowledge Catalog creates an entry to represent the term.
Create a term.
alias gcurl='curl -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json"'
gcurl -X POST https://dataplex.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /glossaries/ GLOSSARY_ID /terms?term_id= TERM_ID --data @- TERM_DISPLAY_NAME ",
"description": " TERM_DESCRIPTION ",
"parent": "projects/ PROJECT_ID /locations/ LOCATION_ID /glossaries/ GLOSSARY_ID /categories/ PARENT_CATEGORY_ID "
}
EOF
Replace the following:
TERM_ID : the ID of the term you're creating
TERM_DISPLAY_NAME : the display name for the term you're creating
TERM_DESCRIPTION : the description for the term you're creating
Optional: Add an overview to the term.
Look up the entry for your term:
gcurl -X GET https://dataplex.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID
:lookupEntry\
?entry=projects/ PROJECT_NUMBER /locations/ LOCATION_ID /entryGroups/@dataplex/entries/projects/ PROJECT_NUMBER /locations/ LOCATION_ID /glossaries/ GLOSSARY_ID /terms/ TERM_ID
\
\&view=ALL
Add an overview to your term:
gcurl -X PATCH https://dataplex.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION_ID /entryGroups/@dataplex/entries/projects/ PROJECT_NUMBER /locations/ LOCATION_ID /glossaries/ GLOSSARY_ID /terms/ TERM_ID
\
?update_mask=aspects\
\&deleteMissingAspects=false\
\&aspect_keys=projects/dataplex-types/locations/global/aspectTypes/overview
\
--data @- OVERVIEW ",
"links": []
},
}
}
}
EOF
Replace OVERVIEW with plaintext or HTML to
describe your glossary category or term.
Optional: Add contacts.
Look up the entry for your term:
gcurl -X GET https://dataplex.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID
:lookupEntry\
?entry=projects/ PROJECT_NUMBER /locations/ LOCATION_ID /entryGroups/@dataplex/entries/projects/ PROJECT_NUMBER /locations/ LOCATION_ID /glossaries/ GLOSSARY_ID /terms/ TERM_ID
\
\&view=ALL
Update the entry for your term with contacts:
gcurl -X PATCH https://dataplex.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION_ID /entryGroups/@dataplex/entries/projects/ PROJECT_NUMBER /locations/ LOCATION_ID /glossaries/ GLOSSARY_ID /terms/ TERM_ID
?update_mask = aspects \
\& deleteMissingAspects = false \
\& aspect_keys = projects/dataplex-types/locations/global/aspectTypes/contacts \
--data @-
{
"aspects": {
"dataplex-types.global.contacts": {
"aspect_type": "projects/dataplex-types/locations/global/aspectTypes/contacts",
"data": {
"identities": [
{
"role": "steward",
"name": " CONTACT_NAME ",
"id": " CONTACT_EMAIL "
}
]
},
}
}
}
EOF
Add an aspect to a term
You can add aspects to terms to provide additional context or metadata.
Console
In the Google Cloud console, go to the Knowledge Catalog
Glossaries page.
Go to Glossaries
Expand the glossary and click the term that you want to add an aspect to.
In the Aspects section, click Add .
Search for the aspect, provide details for the aspect, and then click
Save .
REST
Glossary terms are entries. To attach an aspect, patch the entry resource.
The entry group for glossaries is @dataplex .
alias gcurl = 'curl -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json"'
gcurl -X PATCH https://dataplex.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION_ID /entryGroups/@dataplex/entries/projects/ PROJECT_NUMBER /locations/ LOCATION_ID /glossaries/ GLOSSARY_ID /terms/ TERM_ID ?update_mask = aspects \& aspect_keys = ASPECT_PROJECT_ID . ASPECT_LOCATION_ID . ASPECT_TYPE_ID --data @-
{
"aspects": {
" ASPECT_PROJECT_ID . ASPECT_LOCATION_ID . ASPECT_TYPE_ID ": {
"aspect_type": "projects/ ASPECT_PROJECT_ID /locations/ ASPECT_LOCATION_ID /aspectTypes/ ASPECT_TYPE_ID ",
"data": {
"sensitivity": "HIGH",
"data_owner": "achalg@google.com"
}
}
}
}
EOF
Replace the following:
PROJECT_NUMBER : the number of the project containing
the glossary term.
LOCATION_ID : the location of the glossary term.
GLOSSARY_ID : the ID of the glossary containing the
term.
TERM_ID : the ID of the term to attach aspect to.
ASPECT_PROJECT_ID : the ID of the project containing the
aspect type.
ASPECT_LOCATION_ID : the location of the aspect type.
ASPECT_TYPE_ID : the ID of the aspect type.
View the terms in a glossary or category
Console
In the Google Cloud console, go to the Knowledge Catalog Glossaries
page.
Go to Glossaries
To view the terms in a glossary, expand the glossary. To view terms in a
category within this glossary, expand the category. To view terms within
a nested category, expand the nested category.
REST
alias gcurl = 'curl -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json"'
gcurl -X GET https://dataplex.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /glossaries/ GLOSSARY_ID /terms
View the details of a term
Console
In the Google Cloud console, go to the Knowledge Catalog Glossaries
page.
Go to Glossaries
To view the list of terms in a glossary, expand the glossary.
Click a term. The Term details page displays the term name,
description, related terms, synonyms, and related entries.
REST
alias gcurl = 'curl -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json"'
gcurl -X GET https://dataplex.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /glossaries/ GLOSSARY_ID /terms/ TERM_ID
Edit a term
You can edit the name, description, overview, contacts, and parent for a term.
Console
In the Google Cloud console, go to the Knowledge Catalog Glossaries
page.
Add an aspect to a term
You can add aspects to terms to provide additional context or metadata.
Console
In the Google Cloud console, go to the Knowledge Catalog
Glossaries page.
Go to Glossaries
Expand the glossary and click the term that you want to add an aspect to.
In the Aspects section, click Add .
Search for the aspect, provide details for the aspect, and then click
Save .
REST
Glossary terms are entries. To attach an aspect, patch the entry resource.
The entry group for glossaries is @dataplex .
alias gcurl = 'curl -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json"'
gcurl -X PATCH https://dataplex.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION_ID /entryGroups/@dataplex/entries/projects/ PROJECT_NUMBER /locations/ LOCATION_ID /glossaries/ GLOSSARY_ID /terms/ TERM_ID ?update_mask = aspects \& aspect_keys = ASPECT_PROJECT_ID . ASPECT_LOCATION_ID . ASPECT_TYPE_ID --data @-
{
"aspects": {
" ASPECT_PROJECT_ID . ASPECT_LOCATION_ID . ASPECT_TYPE_ID ": {
"aspect_type": "projects/ ASPECT_PROJECT_ID /locations/ ASPECT_LOCATION_ID /aspectTypes/ ASPECT_TYPE_ID ",
"data": {
"sensitivity": "HIGH",
"data_owner": "achalg@google.com"
}
}
}
}
EOF
Replace the following:
PROJECT_NUMBER : the number of the project containing
the glossary term.
LOCATION_ID : the location of the glossary term.
GLOSSARY_ID : the ID of the glossary containing the
term.
TERM_ID : the ID of the term to attach aspect to.
ASPECT_PROJECT_ID : the ID of the project containing the
aspect type.
ASPECT_LOCATION_ID : the location of the aspect type.
ASPECT_TYPE_ID : the ID of the aspect type.
Go to Glossaries
Expand the glossary and click the term that you want to edit.
Click Edit .
Edit any of the fields and click Save .
REST
alias gcurl = 'curl -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json"'
gcurl -X PATCH https://dataplex.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /glossaries/ GLOSSARY_ID /terms/ TERM_ID ?update_mask = displayName,description --data @-
{
"displayName": " TERM_DISPLAY_NAME ",
"description": " TERM_DESCRIPTION "
}
EOF
Delete a term
Console
In the Google Cloud console, go to the Knowledge Catalog Glossaries
page.
Go to Glossaries
Expand the glossary and click the term that you want to delete.
Click Delete , and then confirm when prompted.
REST
alias gcurl = 'curl -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json"'
gcurl -X DELETE https://dataplex.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /glossaries/ GLOSSARY_ID /terms/ TERM_ID
Manage synonyms and related terms
You can add relationships between terms by linking them as synonyms or related
terms.
Term relationships are bi-directional. For example, when you link profit
as a synonym of earnings , earnings also becomes a synonym of profit .
Create synonym links between terms
Console
In the Google Cloud console, go to the Knowledge Catalog Glossaries
page.
Go to Glossaries
Expand the glossary and click the term that you want to create links with.
Click edit Edit next to
Synonym terms .
Search for and then select the terms to link to.
The term gets linked immediately when you select it.
Click Close .
REST
alias gcurl = 'curl -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json"'
gcurl -X POST https://dataplex.googleapis.com/v1/projects/ TERM1_PROJECT_ID /locations/ TERM1_LOCATION_ID /entryGroups/@dataplex/entryLinks?entry_link_id = ENTRY_LINK_ID -d " $( cat<<EOF
{
"entry_link_type" : "projects/dataplex-types/locations/global/entryLinkTypes/synonym" ,
"entry_references" : [{
"name" : "projects/ TERM1_PROJECT_NUMBER /locations/ TERM1_LOCATION_ID /entryGroups/@dataplex/entries/projects/ TERM1_PROJECT_NUMBER /locations/ TERM1_LOCATION_ID /glossaries/ TERM1_GLOSSARY_ID /terms/ TERM1_ID " ,
"type" : "UNSPECIFIED"
} , {
"name" : "projects/ TERM2_PROJECT_NUMBER /locations/ TERM2_LOCATION_ID /entryGroups/@dataplex/entries/projects/ TERM2_PROJECT_NUMBER /locations/ TERM2_LOCATION_ID /glossaries/ TERM2_GLOSSARY_ID /terms/ TERM2_ID " ,
"type" : "UNSPECIFIED"
}
]
}
EOF
) "
Replace the following:
TERM1_PROJECT_NUMBER : the project number for the first term
being linked.
TERM1_LOCATION_ID : the location ID of the
glossary that contains the first term.
TERM1_GLOSSARY_ID : the ID of the glossary
that contains the first term.
TERM1_ID : the ID of the first term.
TERM2_PROJECT_NUMBER : the project number for the second term
that you want to link to as a synonym term. If both terms are in the same
project, then this value is the same as the project number for the first term.
TERM2_LOCATION_ID : the location ID of the
glossary that contains the second term. If both terms are in the same
location, then this value is the same as the location ID for the first term.
TERM2_GLOSSARY_ID : the ID of the glossary that
contains the second term. If both terms are in the same glossary, then this
value is the same as the glossary ID for the first term.
TERM2_ID : the ID of the second term.
ENTRY_LINK_ID : an ID for the link between the two
terms. Each term is represented as a Knowledge Catalog entry.
The entry link is the relationship between synonym terms.
Create related links between terms
Console
In the Google Cloud console, go to the Knowledge Catalog Glossaries
page.
Go to Glossaries
Expand the glossary and click the term that you want to create links with.
Click edit Edit next to
Related terms .
Search for and then select the terms to link to.
The term gets linked immediately when you select it.
Click Close .
REST
alias gcurl = 'curl -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json"'
gcurl -X POST https://dataplex.googleapis.com/v1/projects/ TERM1_PROJECT_ID /locations/ TERM1_LOCATION_ID /entryGroups/@dataplex/entryLinks?entry_link_id = ENTRY_LINK_ID -d " $( cat<<EOF
{
"entry_link_type" : "projects/dataplex-types/locations/global/entryLinkTypes/related" ,
"entry_references" : [{
"name" : "projects/ TERM1_PROJECT_NUMBER /locations/ TERM1_LOCATION_ID /entryGroups/@dataplex/entries/projects/ TERM1_PROJECT_NUMBER /locations/ TERM1_LOCATION_ID /glossaries/ TERM1_GLOSSARY_ID /terms/ TERM1_ID " ,
"type" : "UNSPECIFIED"
} , {
"name" : "projects/ TERM2_PROJECT_NUMBER /locations/ TERM2_LOCATION_ID /entryGroups/@dataplex/entries/projects/ TERM2_PROJECT_NUMBER /locations/ TERM2_LOCATION_ID /glossaries/ TERM2_GLOSSARY_ID /terms/ TERM2_ID " ,
"type" : "UNSPECIFIED"
}
]
}
EOF
) "
Replace the following:
TERM1_PROJECT_NUMBER : the project number for the
first term being linked.
TERM1_LOCATION_ID : the location ID of the
glossary that contains the first term.
TERM1_GLOSSARY_ID : the ID of the glossary
that contains the first term.
TERM1_ID : the ID of the first term.
TERM2_PROJECT_NUMBER : the project number for the
second term that you want to link to as a related term. If both terms are
in the same project, then this value is the same as the project number for
the first term.
TERM2_LOCATION_ID : the location ID of the
glossary that contains the second term. If both terms are in the same
location, then this value is the same as the location ID for the first term.
TERM2_GLOSSARY_ID : the ID of the glossary that
contains the second term. If both terms are in the same glossary, then this
value is the same as the glossary ID for the first term.
TERM2_ID : the ID of the second term.
ENTRY_LINK_ID : an ID for the link between the two
terms. Each term is represented as a Knowledge Catalog entry.
The entry link is the relationship between related terms.
Lookup synonym links for a term
REST
alias gcurl = 'curl -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json"'
gcurl -X POST https://dataplex.googleapis.com/v1/projects/ TERM_PROJECT_ID /locations/ SYNONYM_LINKS_LOCATION_ID :lookupEntryLinks?entry = projects/ TERM_PROJECT_NUMBER /locations/ TERM_LOCATION_ID /entryGroups/@dataplex/entries/projects/ TERM_PROJECT_NUMBER /locations/ TERM_LOCATION_ID /glossaries/ TERM_GLOSSARY_ID /terms/ TERM_ID & entry_link_types = projects/dataplex-types/locations/global/entryLinkTypes/synonym & page_size = 10
Replace the following:
TERM_PROJECT_ID : the project ID of the term whose
synonym links you are looking up.
TERM_PROJECT_NUMBER : the project number of the
term whose synonym links you are looking up.
SYNONYM_LINKS_LOCATION_ID : the location ID where
you are looking up the synonym links.
TERM_LOCATION_ID : the location ID of the term.
TERM_GLOSSARY_ID : the ID of the glossary that
contains the term.
TERM_ID : the ID of the term.
Note: To fetch subsequent pages, append
&page_token= PAGE_TOKEN to the request. Replace
PAGE_TOKEN with the value of the page token you
received from the earlier lookupEntryLinks response.
Lookup related links for a term
REST
alias gcurl = 'curl -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json"'
gcurl -X POST https://dataplex.googleapis.com/v1/projects/ TERM_PROJECT_ID /locations/ RELATED_LINKS_LOCATION_ID :lookupEntryLinks?entry = projects/ TERM_PROJECT_NUMBER /locations/ TERM_LOCATION_ID /entryGroups/@dataplex/entries/projects/ TERM_PROJECT_NUMBER /locations/ TERM_LOCATION_ID /glossaries/ TERM_GLOSSARY_ID /terms/ TERM_ID & entry_link_types = projects/dataplex-types/locations/global/entryLinkTypes/related & page_size = 10
Replace the following:
TERM_PROJECT_ID : the project ID of the term whose
related links you are looking up.
TERM_PROJECT_NUMBER : the project number of the
term whose related links you are looking up.
RELATED_LINKS_LOCATION_ID : the location ID where
you are looking up the related links.
TERM_LOCATION_ID : the location ID of the term.
TERM_GLOSSARY_ID : the ID of the glossary that
contains the term.
TERM_ID : the ID of the term.
Note: To fetch subsequent pages, append
&page_token= PAGE_TOKEN to the request. Replace
PAGE_TOKEN with the value of the page token you
received from the earlier lookupEntryLinks response.
Remove links between synonyms and related terms
Console
In the Google Cloud console, go to the Knowledge Catalog Glossaries
page.
Go to Glossaries
Expand the glossary and click the term whose synonyms or related terms you
want to remove.
To delete links between related terms, click
edit Edit next to Related terms .
Delete the related terms, and then click Close .
To delete links between synonyms, click
edit Edit next to Synonym terms .
Delete the synonyms, and then click Close .
REST
Lookup entry links to find the entry link ID of the link you want to
delete. For more information, see
Lookup synonym links for a term or
Lookup related links for a term .
Delete the link by sending the following DELETE request:
alias gcurl = 'curl -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json"'
gcurl -X DELETE https://dataplex.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /entryGroups/ ENTRY_GROUP_ID /entryLinks/ ENTRY_LINK_ID
Manage links between terms and data assets
You can attach terms to data assets or data asset columns. For example, you
can attach terms to a BigQuery dataset.
Attach terms to a data asset
Console
In the Google Cloud console, go to the Knowledge Catalog Search
page.
Go to Search
Search for the data asset (such as a dataset, file, or table) that you
want to link a term to, and then click it.
On the data asset page, do one of the following:
To link terms to an asset, on the Details tab, in the
Glossary terms section, click Add . Search for and then select
the terms, and then click Close.
If the asset has a schema, you can link terms to a column. On the
Schema tab, select a column to link terms to, and then click
Add business term . Search for and then select
the terms, and then click Close.
REST
alias gcurl = 'curl -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json"'
gcurl -X POST https://dataplex.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ ENTRY_LOCATION_ID /entryGroups/ ENTRY_GROUP_ID /entryLinks?entry_link_id = ENTRY_LINK_ID -d " $( cat<<EOF
{
"entry_link_type" : "projects/dataplex-types/locations/global/entryLinkTypes/definition" ,
"entry_references" : [{
"name" : "projects/ PROJECT_NUMBER /locations/ ENTRY_LOCATION_ID /entryGroups/ ENTRY_GROUP_ID /entries/ ENTRY_ID " ,
"type" : "SOURCE"
} , {
"name" : "projects/ TERM_PROJECT_NUMBER /locations/ TERM_LOCATION_ID /entryGroups/@dataplex/entries/projects/ TERM_PROJECT_NUMBER /locations/ TERM_LOCATION_ID /glossaries/ TERM_GLOSSARY_ID /terms/ TERM_ID " ,
"type" : "TARGET"
}
]
}
EOF
) "
Replace the following:
PROJECT_NUMBER : the project number of the data asset
being linked to
ENTRY_LOCATION_ID : the location ID of the data
asset being linked to
ENTRY_GROUP_ID : the entry group of the data asset
being linked to
ENTRY_LINK_ID : an ID for the link between the term
and the Knowledge Catalog entry that represents the data asset.
TERM_PROJECT_NUMBER : the project number for the term
being linked.
Attach terms to a column in an entry schema
Console
In the Google Cloud console, go to the Knowledge Catalog Search
page.
Go to Search
Search for the data asset (such as a dataset, file, or table) that has a
schema with a column you want to link a term to. Click
the data asset.
On the data asset page, do one of the following:
To link terms to a column in the data asset, on the schema tab, select
the columns you want to attach the term to.
Click Add business term . Search for the term you want to attach and
click the term to attach.
REST
alias gcurl = 'curl -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json"'
gcurl -X POST https://dataplex.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ ENTRY_LOCATION_ID /entryGroups/ ENTRY_GROUP_ID /entryLinks?entry_link_id = ENTRY_LINK_ID -d " $( cat<<EOF
{
"entry_link_type" : "projects/dataplex-types/locations/global/entryLinkTypes/definition" ,
"entry_references" : [{
"name" : "projects/ PROJECT_NUMBER /locations/ ENTRY_LOCATION_ID /entryGroups/ ENTRY_GROUP_ID /entries/ ENTRY_ID " ,
"type" : "SOURCE" ,
"path" : "Schema. COLUMN_NAME " ,
} , {
"name" : "projects/ TERM_PROJECT_NUMBER /locations/ TERM_LOCATION_ID /entryGroups/@dataplex/entries/projects/ TERM_PROJECT_NUMBER /locations/ TERM_LOCATION_ID /glossaries/ TERM_GLOSSARY_ID /terms/ TERM_ID " ,
"type" : "TARGET"
}
]
}
EOF
) "
Replace the following:
PROJECT_NUMBER : the project number of the data
asset being linked to
ENTRY_LOCATION_ID : the location ID of the data
asset being linked to
ENTRY_GROUP_ID : the entry group of the data asset
being linked to
ENTRY_LINK_ID : an ID for the link between the term
and the Knowledge Catalog entry that represents the data
asset
TERM_PROJECT_NUMBER : the project number for the
term being linked
COLUMN_NAME : the column to which you want to attach
the term
Lookup data assets linked to a term
REST
alias gcurl = 'curl -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json"'
gcurl -X POST https://dataplex.googleapis.com/v1/projects/ TERM_PROJECT_ID /locations/ DEFINITION_LINKS_LOCATION_ID :lookupEntryLinks?entry = projects/ TERM_PROJECT_NUMBER /locations/ TERM_LOCATION_ID /entryGroups/@dataplex/entries/projects/ TERM_PROJECT_NUMBER /locations/ TERM_LOCATION_ID /glossaries/ TERM_GLOSSARY_ID /terms/ TERM_ID & entry_link_types = projects/dataplex-types/locations/global/entryLinkTypes/definition & entry_mode = TARGET & page_size = 10
Replace the following:
TERM_PROJECT_ID : the project ID of the term whose
definition links you are looking up.
TERM_PROJECT_NUMBER : the project number of the
term whose definition links you are looking up.
DEFINITION_LINKS_LOCATION_ID : the location ID
where you are looking up the definition links.
TERM_LOCATION_ID : the location ID of the term.
TERM_GLOSSARY_ID : the ID of the glossary that
contains the term.
TERM_ID : the ID of the term.
Note: Columns linked to term are returned in the path field.
To fetch subsequent pages, append &page_token= PAGE_TOKEN
to the request. Replace PAGE_TOKEN with the value of
the page token you received from the earlier lookupEntryLinks response.
Lookup terms linked to a data asset
REST
alias gcurl = 'curl -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json"'
gcurl -X POST https://dataplex.googleapis.com/v1/projects/ PROJECT_ID /locations/ DEFINITION_LINKS_LOCATION_ID :lookupEntryLinks?entry = projects/ PROJECT_NUMBER /locations/ ENTRY_LOCATION_ID /entryGroups/ ENTRY_GROUP_ID /entries/ ENTRY_ID & entry_link_types = projects/dataplex-types/locations/global/entryLinkTypes/definition & entry_mode = SOURCE & page_size = 10
Replace the following:
PROJECT_ID : the project ID of the data asset whose
definition links you are looking up.
PROJECT_NUMBER : the project number of the data
asset whose definition links you are looking up.
DEFINITION_LINKS_LOCATION_ID : the location ID
where you are looking up the definition links.
ENTRY_LOCATION_ID : the location ID of the data
asset.
ENTRY_GROUP_ID : the ID of the entry group for the
data asset.
ENTRY_ID : the ID of the data asset.
Note: Columns linked to the term within a data asset are returned in the path
field.
To fetch subsequent pages, append
&page_token= PAGE_TOKEN to the request. Replace
PAGE_TOKEN with the value of the page token you
received from the earlier lookupEntryLinks response.
Remove terms from a data asset
Console
In the Google Cloud console, go to the Knowledge Catalog Search
page.
Go to Search
Search for the data asset (such as a dataset, file, or table) that you
want to remove the terms from, and click it.
On the data asset page, do one of the following:
To remove a term from an asset, on the Details tab, in the
Glossary terms section, click the term. Then click
close .
To remove a term from a column, on the Schema tab,
click clear next to the term.
REST
alias gcurl = 'curl -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json"'
gcurl -X DELETE https://dataplex.googleapis.com/v1/projects/ ENTRY_PROJECT_ID /locations/ ENTRY_LOCATION_ID /entryGroups/ ENTRY_GROUP_ID /entryLinks/ ENTRY_LINK_ID
Find glossaries, terms, and linked data assets
Console
To navigate across your business glossary content, use the glossary and terms
tree on the Glossaries page.
In the Google Cloud console, go to the Knowledge Catalog Glossaries page.
Go to Glossaries
On the Glossaries page, use the filter bar to find categories. The
following filters are available:
Name : returns the glossaries, categories, and terms whose name
contains the text that you provide.
Parent : returns the terms whose parent glossary name or description
matches the text that you provide. For example, parent:Finance returns the
terms that are connected with the parent glossary whose name or description
contains the phrase Finance .
Synonym : returns the list of terms with a synonym whose name or ID
contains the text that you provide. For example, synonym:Profit returns the
terms which have a synonym term whose name or ID contains the phrase
profit .
Contact : returns the terms where the data steward is listed as a
contact. For example, contact:alex@example.com returns the entries that
are connected to terms with a data steward matching alex@example.com .
REST
To find glossaries, terms, and linked data assets by using the REST API, you
need to sign up for Preview .
Search for data assets linked to terms
Console
In the Google Cloud console, go to the Knowledge Catalog Glossaries
page.
Go to Glossaries
On the Glossaries page, use the filter bar to enter a free-form text
search query. This returns a list of corresponding matches in the
glossary, category, and term names.
Click a matched term.
On the Term details page, see the linked terms (synonyms and related
terms) and linked entries (data assets) to this term.
If you want to see the details for an entry in Knowledge Catalog,
click the entry.
REST
To find glossaries, terms, and linked data assets by using the REST API, you
need to sign up for Preview .
Import glossaries and links between terms and terms or data assets
To import glossaries and links from another cataloging tool or to update
your glossaries in Knowledge Catalog, you can bulk import glossaries,
categories, terms, links between terms, links between terms and data assets, or
columns, using the REST API.
Create the target glossary.
REST
alias gcurl = 'curl -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json"'
gcurl -X POST https://dataplex.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /glossaries?glossary_id = GLOSSARY_ID -d " $( cat<<EOF
{
"displayName" : " DISPLAY_NAME " ,
"description" : " DESCRIPTION "
}
EOF
) "
Replace the following:
PROJECT_ID : the project ID in which you're
creating the glossary
LOCATION_ID : the location in which we want to
create the glossary
GLOSSARY_ID : the glossary ID
DISPLAY_NAME : the display name of the glossary
DESCRIPTION : the description of the glossary
To import categories, terms, and links between terms and data assets in
the target glossary created, upload files for each of these into a
Cloud Storage bucket. These files are of the following format:
Sample format for terms and categories of a glossary
{ "entry" : { "name" : "projects/ PROJECT_NUMBER /locations/ LOCATION_ID /entryGroups/@dataplex/entries/projects/ PROJECT_NUMBER /locations/ LOCATION_ID /glossaries/ GLOSSARY_ID /categories/ CATEGORY_ID " , "entryType" : "projects/dataplex-types/locations/global/entryTypes/glossary-category" , "aspects" : { "dataplex-types.global.glossary-category-aspect" : { "data" : {}} , "dataplex-types.global.overview" : { "data" : { "content" : " CONTENT " }} , "dataplex-types.global.contacts" : { "data" : { "identities" : [{ role: "steward" , name: " CONTACT_DISPLAY_NAME " , id: " CONTACT_EMAIL " }]}}} , "parentEntry" : "projects/ PROJECT_NUMBER /locations/ LOCATION_ID /entryGroups/@dataplex/entries/projects/ PROJECT_NUMBER /locations/ LOCATION_ID /glossaries/ GLOSSARY_ID " , "entrySource" : { "resource" : "projects/ PROJECT_NUMBER /locations/ LOCATION_ID /glossaries/ GLOSSARY_ID /categories/ CATEGORY_ID " , "displayName" : " CATEGORY_NAME " , "description" : " CATEGORY_DESCRIPTION " , "ancestors" : [{ "name" : "projects/ PROJECT_NUMBER /locations/ LOCATION_ID /entryGroups/@dataplex/entries/projects/ PROJECT_NUMBER /locations/ LOCATION_ID /glossaries/ GLOSSARY_ID " , "type" : "projects/dataplex-types/locations/global/entryTypes/glossary" }]}}}
{ "entry" : { "name" : "projects/ PROJECT_NUMBER /locations/ LOCATION_ID /entryGroups/@dataplex/entries/projects/ PROJECT_NUMBER /locations/ LOCATION_ID /glossaries/ GLOSSARY_ID /terms/ TERM1_ID " , "entryType" : "projects/dataplex-types/locations/global/entryTypes/glossary-term" , "aspects" : { "dataplex-types.global.glossary-term-aspect" : { "data" : {}} , "dataplex-types.global.overview" : { "data" : { "content" : " TERM1_CONTENT " }} , "dataplex-types.global.contacts" : { "data" : { "identities" : [{ role: "steward" , name: " CONTACT_DISPLAY_NAME " , id: " CONTACT_EMAIL " }]}}} , "parentEntry" : "projects/ PROJECT_NUMBER /locations/ LOCATION_ID /entryGroups/@dataplex/entries/projects/ PROJECT_NUMBER /locations/ LOCATION_ID /glossaries/ GLOSSARY_ID " , "entrySource" : { "resource" : "projects/ PROJECT_NUMBER /locations/ LOCATION_ID /glossaries/ GLOSSARY_ID /terms/ TERM1_ID " , "displayName" : " TERM1_DISPLAY_NAME " , "description" : " TERM1_DESCRIPTION " , "ancestors" : [{ "name" : "projects/ PROJECT_NUMBER /locations/ LOCATION_ID /entryGroups/@dataplex/entries/projects/ PROJECT_NUMBER /locations/ LOCATION_ID /glossaries/ GLOSSARY_ID " , "type" : "projects/dataplex-types/locations/global/entryTypes/glossary" } , { "name" : "projects/ PROJECT_NUMBER /locations/ LOCATION_ID /entryGroups/@dataplex/entries/projects/ PROJECT_NUMBER /locations/ LOCATION_ID /glossaries/ GLOSSARY_ID /categories/ CATEGORY_ID " , "type" : "projects/dataplex-types/locations/global/entryTypes/glossary-category" }]}}}
{ "entry" : { "name" : "projects/ PROJECT_NUMBER /locations/ LOCATION_ID /entryGroups/@dataplex/entries/projects/ PROJECT_NUMBER /locations/ LOCATION_ID /glossaries/ GLOSSARY_ID /terms/ TERM2_ID " , "entryType" : "projects/dataplex-types/locations/global/entryTypes/glossary-term" , "aspects" : { "dataplex-types.global.glossary-term-aspect" : { "data" : {}} , "dataplex-types.global.overview" : { "data" : { "content" : " TERM1_CONTENT " }} , "dataplex-types.global.contacts" : { "data" : { "identities" : [{ role: "steward" , name: " CONTACT_DISPLAY_NAME " , id: " CONTACT_EMAIL " }]}}} , "parentEntry" : "projects/ PROJECT_NUMBER /locations/ LOCATION_ID /entryGroups/@dataplex/entries/projects/ PROJECT_NUMBER /locations/ LOCATION_ID /glossaries/ GLOSSARY_ID " , "entrySource" : { "resource" : "projects/ PROJECT_NUMBER /locations/ LOCATION_ID /glossaries/ GLOSSARY_ID /terms/ TERM2_ID " , "displayName" : " TERM2_DISPLAY_NAME " , "description" : " TERM2_DESCRIPTION " , "ancestors" : [{ "name" : "projects/ PROJECT_NUMBER /locations/ LOCATION_ID /entryGroups/@dataplex/entries/projects/ PROJECT_NUMBER /locations/ LOCATION_ID /glossaries/ GLOSSARY_ID " , "type" : "projects/dataplex-types/locations/global/entryTypes/glossary" } , { "name" : "projects/ PROJECT_NUMBER /locations/ LOCATION_ID /entryGroups/@dataplex/entries/projects/ PROJECT_NUMBER /locations/ LOCATION_ID /glossaries/ GLOSSARY_ID /categories/ CATEGORY_ID " , "type" : "projects/dataplex-types/locations/global/entryTypes/glossary-category" }]}}}
Sample format for links between terms
{ "entryLink" : { "name" : "projects/ PROJECT_NUMBER /locations/global/entryGroups/@dataplex/entryLinks/el-import-0606e3f2-8206-4f3a-aba9-32c6196f6048" , "entryLinkType" : "projects/dataplex-types/locations/global/entryLinkTypes/synonym" , "entryReferences" : [{ "name" : "projects/ PROJECT_NUMBER /locations/global/entryGroups/@dataplex/entries/projects/ PROJECT_NUMBER /locations/global/glossaries/import-glossary/terms/term-1" } , { "name" : "projects/ PROJECT_NUMBER /locations/global/entryGroups/@dataplex/entries/projects/ PROJECT_NUMBER /locations/global/glossaries/import-glossary/terms/term-2" }]}}
{ "entryLink" : { "name" : "projects/ PROJECT_NUMBER /locations/global/entryGroups/@dataplex/entryLinks/el-import-2f7408e3-af3d-405d-81bb-861cf9ec5146" , "entryLinkType" : "projects/dataplex-types/locations/global/entryLinkTypes/related" , "entryReferences" : [{ "name" : "projects/ PROJECT_NUMBER /locations/global/entryGroups/@dataplex/entries/projects/ PROJECT_NUMBER /locations/global/glossaries/import-glossary/terms/term-1" } , { "name" : "projects/ PROJECT_NUMBER /locations/global/entryGroups/@dataplex/entries/projects/ PROJECT_NUMBER /locations/global/glossaries/import-glossary/terms/term-2" }]}}
Sample format for links between terms and data assets
projects/ PROJECT_NUMBER /locations/us-central1/entryGroups/entry-group-1/entries/entry-1 and term projects/ PROJECT_NUMBER /locations/global/entryGroups/@dataplex/entries/projects/ PROJECT_NUMBER /locations/global/glossaries/import-glossary/terms/term-1
{ "entryLink" : { "name" : "projects/ PROJECT_NUMBER /locations/global/entryGroups/@dataplex/entryLinks/el-import-0606e3f2-8206-4f3a-aba9-32c6196f6048" , "entryLinkType" : "projects/dataplex-types/locations/global/entryLinkTypes/definition" , "entryReferences" : [{ "name" : "projects/ PROJECT_NUMBER /locations/global/entryGroups/@dataplex/entries/projects/ PROJECT_NUMBER /locations/global/glossaries/import-glossary/terms/term-1" } , { "name" : "projects/ PROJECT_NUMBER /locations/us-central1/entryGroups/entry-group-1/entries/entry-1" }]}}
# Set GCURL alias
alias gcurl = 'curl -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json"'
gcurl https:// DATAPLEX_API /metadataJobs?metadata_job_id = JOB_ID -d " $( cat<<EOF
{
"type" : "IMPORT" ,
"import_spec" : {
"log_level" : "DEBUG" ,
"source_storage_uri" : "gs:// STORAGE_BUCKET /" ,
"entry_sync_mode" : "FULL" ,
"aspect_sync_mode" : "INCREMENTAL" ,
"scope" : {
"glossaries" : " GLOSSARY_NAME "
}
}
}
EOF
) "
Replace DATAPLEX_API with the Dataplex API
endpoint of the format
dataplex.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID .
Optional: Get the status of the operation.
gcurl https://dataplex.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /operations/operation- OPERATION_ID
Replace OPERATION_ID with the ID of the operation.
Optional: Get the status of the metadata job.
gcurl -X GET https://dataplex.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /metadataJobs/ JOB_ID
Import links between terms as synonym or related terms.
gcurl https:// DATAPLEX_API /metadataJobs?metadata_job_id = JOB_ID -d " $( cat<<EOF
{
"type" : "IMPORT" ,
"import_spec" : {
"log_level" : "DEBUG" ,
"source_storage_uri" : "gs:// STORAGE_BUCKET /" ,
"entry_sync_mode" : "FULL" ,
"aspect_sync_mode" : "INCREMENTAL" ,
"scope" : {
"entry_groups" : [ "projects/ PROJECT_ID /locations/ LOCATION_ID /entryGroups/@dataplex"
] ,
"entry_link_types" : [
"projects/dataplex-types/locations/global/entryLinkTypes/synonym" ,
"projects/dataplex-types/locations/global/entryLinkTypes/related"
] ,
"referenced_entry_scopes" : [
" PROJECT_IDS "
]
}
}
}
EOF
) "
Replace DATAPLEX_API with dataplex.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID .
Import links between terms and data assets or columns.
To create a link between glossary terms and data assets, run the import
job for each entry group to which the entry for the data asset belongs. All
definition entry links are created in this entry group.
Note: Make sure the import file in the Cloud Storage bucket contain a file
for links in one entry group. To create a link between a term and entry for
the data asset in another entry group, provide a new file in the
Cloud Storage bucket.
gcurl https:// DATAPLEX_API /metadataJobs?metadata_job_id = JOB_ID -d " $( cat<<EOF
{
"type" : "IMPORT" ,
"import_spec" : {
"log_level" : "DEBUG" ,
"source_storage_uri" : "gs:// STORAGE_BUCKET /" ,
"entry_sync_mode" : "FULL" ,
"aspect_sync_mode" : "INCREMENTAL" ,
"scope" : {
"entry_groups" : [ "projects/ PROJECT_ID /locations/ ENTRY_GROUP_LOCATION_ID /entryGroups/@dataplex"
] ,
"entry_link_types" : [
"projects/dataplex-types/locations/global/entryLinkTypes/definition"
] ,
"referenced_entry_scopes" : [
" PROJECT_IDS "
]
}
}
}
EOF
) "
Replace DATAPLEX_API with dataplex.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID .
Pricing
Starting in July 2026, Knowledge Catalog business glossary will be billed
the same as the metadata storage pricing. See
Knowledge Catalog metadata storage pricing .
What's next
If you're using the preview version of business glossary for
Data Catalog, see
Transition to business glossary on Knowledge Catalog .
Follow a
codelab: Foundational governance with Knowledge Catalog .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
