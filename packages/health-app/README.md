# health-app

A monorepo project including an ui-components library and a health-app.

## Pre-setup for developer

### 1.1/ Install dependencies

```
yarn install
```

### 1.2/ Build ui-components (a shared-ui library to packages)

```
yarn build:uc
```

### 1.3/ Start develop health-app

```
yarn dev:ha
```

### Optional:

If there any errors, run the following command, then try again from step 1.1

```
rm -rf ./**/node_modules &; rm -rf ./**/build &;
```
