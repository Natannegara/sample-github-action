# sample-github-action
personal use purposes

```
Checking in your node_modules directory can cause problems. As an alternative, you can use a tool called @vercel/ncc to compile your code and modules into one file used for distribution.

1. Install vercel/ncc by running this command in your terminal. npm i -g @vercel/ncc

2. Compile your index.js file. ncc build index.js --license licenses.txt

3. You'll see a new dist/index.js file with your code and the compiled modules. You will also see an accompanying dist/licenses.txt file containing all the licenses of the node_modules you are using.

4. Change the main keyword in your action.yml file to use the new dist/index.js file. main: 'dist/index.js'

5. If you already checked in your node_modules directory, remove it. rm -rf node_modules/*

6. From your terminal, commit the updates to your action.yml, dist/index.js, and node_modules files.
```