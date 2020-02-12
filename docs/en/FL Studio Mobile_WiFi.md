## Wi-Fi Setup & Connections

**FL Studio Mobile connects automatically** to the FL Studio Mobile FL plugin when your computer and mobile device are connected to the same network **AND** sharing is activated on the SETTINGS tab. Typical networking scenarios would be a computer connected to a Wi-Fi capable modem/router by Wi-Fi or Ethernet cable and the Android/iOS device/s connected by Wi-Fi OR a laptop working as an [Ad-hoc Wi-Fi network](#ad-hoc network creation), and the Android/iOS device/s connected directly to that.

You can use the SHARE feature to **move data between mobile devices** (regardless of operating system) **and to/from a PC** (just make a shortcut to the FL Studio Mobile install folder).

https://www.bilibili.com/video/av29552167?p=3

### Connecting FL Studio Mobile and FL Studio Mobile on a PC over an Existing Wi-Fi Network

1. **Log in** - Make sure your computer and FL Studio Mobile device are connected to the same network.
2. **Security** - The first time you activate the FL Studio Mobile on your PC setting you will probably need to allow FL Studio access through the Windows firewall, at the usual security pop-up.

#### Network Troubleshooting

If you are having problems connecting try the following in this order:

1. **Update** - Make sure you are using the latest version of the App on all devices. If you are sharing with FL Studio for the desktop, get the latest **FL Studio Mobile Plugin** [update here](http://support.image-line.com/redirect/flmobile_flplugin).
2. **Share in both directions** - Try sharing from both sides. Sometimes this will 'wake up' the connection.
3. **Aeroplane mode** - Switch Airplane mode on, wait 15 seconds then switch it off again. After the device is reconnected, check to see if Sharing now works.
4. **Disable your Windows firewall** - If FL Studio Mobile now connects then, turn the Firewall back ON, and use the **Control Panel > System & Security > Windows Firewall > Allow an app through Windows firewall**. Allow **FL Studio Mobile** (if you are using the Windows App) or **FL Studio** if you are using the FL Plugin.
5. **Disable anti-virus programs** - If this works, white-list FL Studio in the anti-virus program options. Look for any firewall options (integrated into the anti-virus program) as mentioned above. If there are options, allow FL Studio Mobile for local networks and enable port **7654** for UDP protocol.
6. **Try the 32 Bit version of FL Studio** - If you are using the 64 Bit version of FL Studio, and failing, the 32 Bit version has been known to work for some people. All data ends up in the same folders as the 64 Bit version, so you can change to FL Studio 64 Bit after the transfer.
7. **Check your network router's admin controls** - Look for IP filtering, MAC filtering (if your device can connect to the internet through your Wi-Fi network this won't be the cause), router firewalls etc. **Ports** - Try adding a manual rule to allow FL Studio Mobile for local networks **and enabling port 7654** for UDP protocol. FL Studio Mobile only uses port 7654, so add this exception anywhere you can find the opportunity.
8. **Update your router's firmware** - This will involve getting into the admin options and installing a file that updates the router's internal programs. Check the manufacturers website for details.

### Ad-Hoc Network Creation

If you are not connecting FL Studio and FL Studio Mobile over an existing Wi-Fi network, you can create an [Ad hoc (computer-to-computer) network](https://technet.microsoft.com/en-us/library/dd296746.aspx). This allows you to use the Wi-Fi built into a laptop/netbook or desktop PC with a Wi-Fi device attached, directly to your mobile device/s without passing through a network router.

#### Windows 8/10

The '**Set up an ad hoc network**' setup options were removed from windows 8 and the boffins at Microsoft now expect you to type in Windows CMD entries. Fear not, we have written some batch files to take care of this faffing about for you.

1. **Download** - [Windows_8_Adhoc_Network_Scripts.zip](http://support.image-line.com/redirect/Windows_8_Adhoc_Network_Scripts) and extract '**start_adhoc_network.bat**' and '**stop_adhoc_network.bat**' to your computer.
2. **Run the start network batch file** - Right-click '**start_adhoc_network.bat**' and select the pop-up menu option '**Run as administrator**'. Feel free to drag and drop these files on an open text editor window, to see what's inside, if running our batch files is too spooky for you.
3. **Following the prompts** - Type the network name and password (at least 8 characters) and check the connection is listed in the Wi-Fi networks, and in the "waiting for users" state.
5. **Press any key to continue...** - This message shows at the end of the script and will close the window.
6. **Wi-Fi connection** - From your mobile device open the Wi-Fi settings and log into the network using the network name and password you used above.
6. **Connect FL Studio & FL Studio Mobile** - Now follow the instructions for connecting to an [existing network](#connecting fl studio mobile and fl studio mobile on a pc over an existing wi-fi network) above.
   **NOTE:** When connecting to the ad-hoc network this can take up to 30 seconds before it's *really* established, even if the PC or mobile device says 'Connected', so be patient.
8. **To stop the network** - Right-click '**stop_adhoc_network.bat**' and select '**Run as administrator**'

#### Windows 7, Vista & XP

The Network and sharing center Wizard will take care of most steps as follows:

1. Open the '**Network & Sharing Center**' by clicking the Start button and then clicking Control Panel. In the search box, type **network**, and then click **Network and Sharing Center**.
2. Click '**Set up a new connection or network**' and then '**Next**'.
3. **Following the Wizard** - Type the name and password of the network and Check that the connection is listed in the Wi-Fi networks, and in the "waiting for users" state.
5. **Wi-Fi connection** - From your mobile device open the Wi-Fi settings and log into the network using the network name and password you used above.
5. **Connect FL Studio & FL Studio Mobile** - Now follow the instructions for connecting to an [existing network](#connecting fl studio mobile and fl studio mobile on a pc over an existing wi-fi network) above.
   **NOTE:** When connecting to the ad-hoc network this can take up to 30 seconds before it's *really* established, even if the PC or Android device says 'Connected', so be patient.

#### OS X / macOS

Proceed as follows:

1. **Choose Create Network** from the Wi-Fi status icon in the menu bar. If the icon isn't in the menu bar, choose **Apple menu > System Preferences**, and then click Network. Click Wi-Fi and select the 'Show Wi-Fi status' in menu bar checkbox.
2. Give the **network a name**, and select a channel from the pop-up menu. The default channel is 11, but you can choose a different channel.
3. **Select the Require Password checkbox** to protect your network with a password. Type the password you will use to join your network from your device. Type a password of exactly 5 ASCII characters or 10 hexadecimal digits if you chose '40-bit WEP (more compatible)' from the Security pop-up menu OR Type a password of exactly 13 ASCII characters or 26 hexadecimal digits if you chose '128-bit WEP' from the Security pop-up menu. **NOTE:** Don't use WPA or WPA2.

#### Ad-Hoc Network Troubleshooting

- **Windows delay** - Establishing an ad-hoc connection can take up to a **full minute after** it's shown as 'connected'. To check the connection is really up and working, go to the WiFi settings on your mobile device and check if it has been assigned an IP address.
- **Password encryption** - Don't use WPA/WPA2/PSK, try **WEP** encryption type for the password.