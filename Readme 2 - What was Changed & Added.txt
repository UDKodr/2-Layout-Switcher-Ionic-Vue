1 - Layout-Switcher-Ionic-Vue

This file is a breakdown of:
1. What files/folders/assets etc. were changed/added/created etc.
2. What dependencies were installed
3. Any tweaks/workarounds etc.
to make this project work so you can know what to look for when incorporating it into your own project.


WHAT WAS CHANGED -
1. FolderPage.vue - Added our different layouts
2. App.vue - Imported "store"; created links to Settings view, Settings bottom sheet, and a popup for setting the theme


WHAT WAS CREATED - 
1. Settings.vue
2. SettingsModal.vue
3. theme.ts - A simple store (12 lines of code) that is reactive, The basis of how this all works
4. Images folder

ASSETS THAT WERE ADDED - 
Pixabay images

WHAT DEPENDENCIES NEED TO BE INSTALLED - 
None

TWEAKS/WORKAROUNDS - 
1.  '@typescript-eslint/ban-ts-comment': "off", Needs to be added to eslintrc.js under "Rules"
2.  // @ts-ignore: Object is possibly 'null'. Needs to be added to "setLayouts()" as ts doesn't know it has a value (This is in the code, blog, and video already. I just wanted to clarify why it was needed as it will throw an error on load)

