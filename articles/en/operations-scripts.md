# Configure and run installed theme scripts

Open **Scripts** to view background scripts supplied by the installed theme or installation. Script operations require the built-in administrator. Each script can have a different set of named inputs.

## Configure one script

1. Find the script by **script name**. Use **file name** to confirm the installed script you intend to change.
2. Enter **script time (seconds)** to set its interval for group launches. A positive value repeats the script at that interval. A value of zero runs it once.
3. Fill the inputs defined by that script. The input names and acceptable values depend on its implementation.
4. Select **Save** for that script and check the success or error message.
5. Select **start** on its row and confirm **Start script** to run that script once.

## Start or stop all scripts

**Start All Scripts** starts active installed scripts as a group using their configured intervals. **Stop All Scripts** stops them as a group. Both actions ask for confirmation. Check which scripts are installed before using a group action. A script can change public data or communicate with an external service.

## Troubleshoot

If the expected script is missing, verify the installed theme or script package with its maintainer. If starting a script returns an error, note the script name, the action, and the exact time, then check **Console** for its output. Review provider or script input requirements before trying the action again.

See also [Read the server console](operations-console.md).
