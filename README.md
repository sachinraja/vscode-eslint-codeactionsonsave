To reproduce:
1. Open [src/index.js](src/index.js).
2. Make a change and save the file (it should take 5 seconds to save).

If you look in [.vscode/settings.json](.vscode/settings.json) you'll see that the `slow/slow` is not supposed to run on save though, using `eslint.codeActionsOnSave.rules`.