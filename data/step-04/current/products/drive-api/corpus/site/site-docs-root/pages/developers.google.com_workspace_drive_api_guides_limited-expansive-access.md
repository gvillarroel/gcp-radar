---
title: "Manage folders with limited and expansive access \_|\_ Google Drive \_|\_\
  \ Google for Developers"
url: https://developers.google.com/workspace/drive/api/guides/limited-expansive-access
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/workspace/drive/api/guides/about-sdk
source_metadata:
  url: https://developers.google.com/workspace/drive/api/guides/limited-expansive-access
  title: "Manage folders with limited and expansive access \_|\_ Google Drive \_|\_\
    \ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Google Drive
Guides
Send feedback
Manage folders with limited and expansive access
Stay organized with collections
Save and categorize content based on your preferences.
A user owns a My Drive folder. The folder might contain multiple
users with access to different files. This restrictive access model means
different users could see different lists of items within the same folder. A
user with access to the parent My Drive folder but not to an item
within that folder has "restricted access". It creates a situation where it's
difficult to know who has access within the hierarchy.
Conversely, shared drive files are owned by the shared drive. Shared drives have
an expansive model so every user has the same list of items within the same
folder.
The introduction of folders with limited access replicates the expansive
access model from shared drives to My Drive. With this change,
folders with limited access are the one exception that allows restricting access
to a specific subfolder in both My Drive and shared drives.
This guide explains how you can manage folders with limited access and expansive
access in Google Drive.
About folders with limited access
Folders with limited access allow you to restrict folders to specific users.
Only users you directly add to the folder's permissions can open it and access
its content. Users with inherited access to the shared My Drive
folder or shared drive folder (through access from a parent folder) can see the
restricted folder in Drive but can't open it. This feature better
aligns the sharing behavior of items in both My Drive and shared
drives, letting you organize folders with sensitive content alongside more
broadly shared content.
Folders with limited access are available in both My Drive and
shared drives. The owner role in My Drive and the organizer
role in shared drives can always access folders with limited access. To modify
the list of folder users, no special permissions are required. Roles that can
share folders can update the member lists. To learn more about roles and
permissions, see Roles and permissions and Shared
drives overview .
Note that although folders are a type of
file, limited access isn't available for files.
Set limited access on a folder
While users with direct folder permissions can access a folder with limited
access, only the owner role in My Drive and the organizer
role in shared drives can enable or disable limited access.
Additionally, if a user with the writer role in My Drive has
the writersCanShare boolean field on the files
resource set to true , they can also turn the feature on or off.
To limit access to a folder, set the boolean inheritedPermissionsDisabled
field on the files resource to true . When true , only the owner role, the
organizer role, and users with direct folder permissions can access it.
To turn inherited permissions back on, set inheritedPermissionsDisabled to
false .
Verify permission to limit access on a folder
To check if you can limit access to a folder or not, inspect the boolean values
of the capabilities.canDisableInheritedPermissions and
capabilities.canEnableInheritedPermissions fields on the files resource. These settings confirm if you have
permission to limit access to a folder through the
inheritedPermissionsDisabled field.
For more information about capabilities , see Understand file capabilities .
List children of a folder with limited access
To check if you can list the children of a folder, use the
capabilities.canListChildren boolean field.
The returned value is always false when the item isn't a folder or if the
requester's access to the folder's contents was removed by setting
inheritedPermissionsDisabled to false .
If your access to the folder's contents was removed, you can still access the
folder metadata with the files.get() and
files.list() methods. To confirm access is
limited, check the response body to see if the item is a folder with the MIME
type application/vnd.google-apps.folder and the
capabilities.canListChildren field is set to false. If you try to list the
children of such a folder, the result is always empty.
Access folder with limited access metadata
Folders with limited access let you view folder metadata
if you have no access to the folder contents.
When using the permissions resource to
determine a user's access, both My Drive and shared drive folders
that only grant access to the metadata contain the following values in the
response body: inheritedPermissionsDisabled=true and view=metadata . The role
is always set to reader . The view field is only populated for permissions
that belong to a view . For more information, see Views .
All the entries in the permissionDetails field have the inherited field set
to true to denote the permission is inherited and that direct access to the
folder contents hasn't been granted.
To grant access to both the folder contents and metadata, set the
inheritedPermissionsDisabled field to false or update the role to reader
or higher.
Finally, if a permission was first limited by turning off inheritance on a
folder ( inheritedPermissionsDisabled=true ), and then the permission was added
back directly to the folder, the values in the response body become
inheritedPermissionsDisabled=true with the view field as unset. If the
folder is in a shared drive, the permissionDetails list has an entry with the
inherited field set to false to denote the permission isn't inherited. This
permission grants access to both folder contents and metadata like any other
permission.
Delete folders with limited access
You can delete folders with limited access using the files.delete() method on the files resource.
In My Drive, only the item's owner can delete a folder hierarchy.
If a user deletes a hierarchy with folders that have limited access and are
owned by others, these folders move to the owner's My Drive.
If the user has the owner role, the entire hierarchy gets deleted.
In shared drives, the organizer role can delete hierarchies even if they
contain folders with limited access. If the fileOrganizer role deletes a
hierarchy that contains folders with limited access, the result depends on if
they were added back as fileOrganizer on the folders with limited access. If
they were, the entire hierarchy gets deleted. If not, the folders with limited
access move to the shared drive's root folder.
About expansive access
The introduction of folders with limited access broadens the expansive access
model from shared drives to My Drive. Once the access model is
rolled out, having access to a folder means at least the same level of access to
everything in that folder hierarchy. Folders with limited access are the one
exception that allows restricting access to a specific subfolder in both My
Drive and shared drives. This also means that unless your folder
has limited access, you can no longer remove access that's inherited from the
parent folder. Doing so means Drive API returns an error response. To
define more granular access control within a hierarchy, you can set limited
access on the folder.
Adapt to expansive access
To make it easier for developers to adapt to expansive access, several
improvements were made to the Google Drive API:
The permissionDetails[] field on the
permissions resource is now
populated for items in My Drive. Previously, the fields were
either unset or replicated from the teamDrivePermissionDetails field where
appropriate. Only the permissionType and inherited fields in
My Drive are populated.
The permissionDetails[].inherited field indicates if a permission is
inherited from the item's parent. It lets you detect if certain roles (such
as reader ) are inherited from the parent, and if a higher role (such as
writer ) is granted on the item directly.
When viewing the permissions for an item, the permissionDetails[] field
might contain multiple entries. If present, there's one entry for the
permission directly on the item for that scope, and then entries for the
inherited or member permissions on the item.
Developers can opt in to expansive access API behavior in My
Drive ahead of any future mandatory enforcement. You can set
the enforceExpansiveAccess request parameter to true so that future
changes to expansive access don't affect your app.
Opting in now means the API operates the same for items in My
Drive as it already does for items in shared drives. For
example, any attempt to restrict access below the inherited role fails when
calling
permissions.update() .
Similarly, a call to
permissions.delete()
fails if the permission is inherited.
Detect and prevent restricted access
Your app might be creating restricted access (where a user has access to the
parent My Drive folder but not to a file within that folder) on
your My Drive folders when using the permissions.update() or
permissions.delete() methods.
When using these methods, you can review the fields on the permissions
resource to see where a request might create restricted access and avoid sending
such requests. To detect this situation, use the enforceExpansiveAccess
field on your request.
Additionally, if your app has already created restricted access on your folders,
you can take the following steps:
Traverse the folder hierarchy to remove the restricted access. In its place,
you should set limited folder access .
If the item you're trying to unshare is a file, you can create an
intermediate folder, set limited access on it, and move the file inside the
new folder.
If you don't want to use limited access folders but must remove some access,
you can move the file to a private folder (such as the My
Drive root folder). You can then create a
shortcut to the item's original location so
users can still use it.
Related topics
Share files, folders, and drives
How file access works in shared drives
Learn about folders with limited access
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
