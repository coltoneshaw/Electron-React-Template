# Electron-React-Template

This template is a quick start template for using Electron with React, typescript, ESLint, yarn, and webpack. I know there are already a hundred templates out there and most of them can get quite complex and confusing with implementation. This one is meant to just be a simple starter file and you can fork or add your customizations from there. 

# Instructions

When you first use this template be sure to change the relevant fields within the `package.json` file.

If you do not have yarn already installed you will need to set it up on your environment.  Currently this does not use Yarn Plug'n'Play, but rather the `node-modules` option because of dependency issues around eslint.

## Icons
You'll want to create icons and store them within the `assets/icons` folder. At a minimum you'll want to have the below. You can use a tool like https://icoconvert.com/ to generate these from an svg file.

- `icon.ico`
- `icon.png`
- `icon.icns`
- `icon.svg`
- `256x256.png`
- `512x512.png`

# Code Signing Mac

## 1. Setup the `.env` file
Copy the `.env.example` file into `.env` and replace the environment variables with your Apple ID information.

## 2. (optional) Edit the `.plist` files within the `build` folder.
You can edit any of the `.plist` files within the `build` folder. These are just standard plists for Apple.

## 3. Uncomment the code signing options within the `electron-builder.yml` file.

```yaml
afterSign: "scripts/notarize.js"

mac:
  provisioningProfile: "build/MacAppStore.provisionprofile"
  extraFiles:
     - "build/MacAppStore.provisionprofile"

mas:
  provisioningProfile: "build/MacAppStore.provisionprofile"
```

## 4. Generate a `.provisionprofile`
Log into your apple developer account (developer.apple.com) and go to “Certificates, IDs & Profiles”. Be sure to move to the “macOS” dropdown or else you’ll be manipulating iOS related assets.

Go to `Provisioning Profiles` and create one for distribution named `embedded`. Download that and move it to the `build` directory of your project. 

## 5. Generate the certificates locally
You can follow the instructions [here](https://www.electron.build/code-signing.html#how-to-export-certificate-on-macos) to accomplish this.

# Disable Code signing
Most of the config is commented out but you may need to add an environment variable. Additional instructions are [here](https://www.electron.build/code-signing.html#how-to-disable-code-signing-during-the-build-process-on-macos)/

```bash
export CSC_IDENTITY_AUTO_DISCOVERY=false
```

# Commands

## Start the dev server

```bash
yarn dev
```

## Build Production Files

```bash
yarn production
```

## Build with Electron Builder

```bash
yarn build
```

or `build:mac`, `build:win`, `build:linux`.