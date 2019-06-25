# sapper-firebase-auth-example

## Install

```
npm ci
# applying patch is necessary for SSR with authentication to work at this moment
sh apply-patch-server.sh # for linux
sh apply-patch-server.mac.sh # for mac
export GOOGLE_APPLICATION_CREDENTIALS="/path/to/credentials"
npm run dev
```
