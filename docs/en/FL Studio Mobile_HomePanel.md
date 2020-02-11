# FL Studio Mobile - Home Panel

The Home Panel contains administrative settings grouped according to the SONGS, SETTINGS, SHOP and SHARE tabs.

![Home panel](../assets/home/HomePanel.png)

## Parameters

Tap the **Home Button** to access the following:

**NOTE:** <font color="red">Not all features are available on all operating systems.</font>

### HELP (Button)

The help button is your friend! Under it you can find...

*   **Manual** - You are reading it.
*   **Video Tutorials** - An extensive BILIBILI [FL Studio Mobile video playlist](https://www.bilibili.com/video/av29552167).
*   **Users & Support Forums** - The [Users Forum](http://support.image-line.com/redirect/flmobile_forum) is a great place to ask 'How-To' questions, make feature-requests or to report bugs. If something does not work, reporting it is the quickest way to get it fixed.
*   **Play Tutorial** - Play the [introductory video tutorial](https://www.bilibili.com/video/av80167389).
*   **Register at Image-Line** - Create an account with us at Image-Line software. This will give you access to the [Users Forum](http://support.image-line.com/redirect/flmobile_forum).

### SONGS

**Songs** - Load and save FL Studio Mobile projects and MIDI files.

*   **New** - Opens the New Project template.
    
    ![New song](../assets/home/NewSong.png)
    
    **Starting a new project...**
    
    1.  **New** - Opens the new project dialog
    2.  **Tempo** - Choose from a common range of tempos. You can always change this later or set an exact tempo from the [BPM control](FL%20Studio%20Mobile_Playlist.htm#flmobile_transportbar) on the lower transport bar.
    3.  **Mode** - You can set the time ruler in FL Studio mobile to one of two modes:
        
        *   **Time signature** (traditional) - Select **Beats per bar** / **Beat value**. The Stepsequencer will show 1/16th notes according to the Beat value.
        *   **Time division** (advanced) - Set **Steps per beat** and **Beats per bar**. The Stepsequencer will show the number of steps per beat selected.
        
        **NOTE:** Time signatures and divisions can only be set at the time a project is created. These can't be changed afterward.
        
    4. **OK** - Start the new project with the selected settings.
       **NOTE:** Only a single Time Signature can be set per project. You can't change the Time Signature of an existing project.
    
*   <a id="save"></a>**Save** - Saves the current project.
    **NOTE:** Setting a '**SEND**' destination, allows you to send content via email and file-sharing Apps. Options include:
    
    ![Save song](../assets/home/SaveSong.png)
    
    **Saving or sending files...**
    
    1.  **SONGS Tab > Save** - From the SONGS tab select **Save**
    2.  **Rename file** (optional) - If you want to rename the project tap here and enter a new name
    3.  **Select format** - Choose the save format. FLM is a project file. MIDI is note data. WAV, FLAC, MP3 and AAC are audio formats.
    4. **SEND** (optional) - This is an alternative to saving to your device. Tap here to select email and any other external locations available through Applications that can share files on your device.
       **NOTE:** This is different to '[SHARE](FL%20Studio%20Mobile_HomePanel.htm#sharingdata)' TAB that allows you share files directly between FL Studio Mobile installations.
    5.  **SAVE** - This saves to the default FL Studio Mobile user data folders. When saving Audio formats you will see the following options:
        
        ![Save song options](../assets/home/SaveSongOptions.png)
        
        *   **Normalize level** - Maximize level so the loudest peaks reach 100% volume.
        *   **Trim initial silence** - Removes silence from the start of the render.
        *   **High quality** - Sets highest quality audio. Action depends on render format - WAV 32 Bit (HQ) / 16 Bit (Off). FLAC 24 Bit (HQ) / 16 Bit (Off), MP3 320 kbps (HQ) / 192 (Off). AAC 320 kbps (HQ) / 192 (off).
        *   **Render to last bar** - Rendering stops at the end of the last Bar. This can avoid long tails on audio files where effects may run-on.
*   **File Name** - Tap to edit the file name.
*   **Save format** - Choose the type of file to save.
    
    *   **FLM** - FL Studio Mobile project format (**.flm** extension when viewed in a file browser).
    *   **MIDI** - MIDI is a data format for sharing FL Studio Mobile project data (Notes and control information) with other DAW software (**.mid** extension when viewed in a file browser).
        **NOTE:** This option saves the first 16 tracks of the project to a single MIDI file. If you have more than 16 tracks you can rearrange the track order and do multiple saves OR save the additional tracks separately with the per-track [Save as MIDI](FL%20Studio%20Mobile_Playlist.htm#channel_menu).
    *   **WAV (audio)** - Highest quality, large file size. Wave is a lossless audio format and preferred (along with FLAC) for handling audio in a production environment. Files are 16 Bit WAV format (**.wav** extension when viewed in a file browser), unless you have set 'High quality' at save pop-up options (see above) and then it uses 32 Bit format.
    *   **FLAC (Audio)** - Free Lossless Audio Codec, is similar to WAV format in retaining all audio information in the encoded waveform. FLAC has the additional benefit of significantly reducing the file size. FLAC files are typically between 20 to 30% smaller than the equivalent WAV file, all while retaining a bit-perfect copy of the original data. The 'High quality' at save pop-up options (see above) toggles between 16 and 24 bits per sample.
    *   **MP3 (audio)** - Lesser quality, smaller file size. Files are 192 or 320 kbps (HQ) (**.mp3** extension when viewed in a file browser).
    *   **AAC (audio)** - Lesser quality, smaller file size. Files are 192 or 320 kbps (HQ) (**.aac** extension when viewed in a file browser).
    
    **TIP:** Use **WAV** for reuse in FL Studio Mobile and [other DAW software](FL Studio Mobile_FLStudioPlugin.htm). Use **MP3** for music distribution and listening.
    
*   **SEND** - The destinations shown will depend on your device and operating system (they will be shown AFTER you set '**SEND**' and THEN tap SAVE). Examples include: **email**, **online cloud storage** and **internal folders**.

**NOTE:** For <font color="red">**advanced file sharing**</font> see the section - [Your Files! (Where are Project, WAV, MP3, MIDI files located?)](#userdata)

### SETTINGS

**Settings** - Select MIDI input/s, CPU/Audio settings and Metronome loudness.

#### MIDI Device

*   **MIDI Input** - When a [external MIDI device](FL%20Studio%20Mobile_Controllers.htm#flm_externalcontrollers) is detected you can use this control to set it to play the selected Playlist track.
*   **Enable MIDI over Bluetooth LE** - Select this to connect to Bluetooth MIDI devices. On **Android** this will open a **Location Access** permission. **Location Access permission**. This is [required by Google](https://developer.android.com/guide/topics/connectivity/bluetooth-le.html#permissions) (See 'LE Beacons note), as it's possible to guess your location from nearby Bluetooth devices. We ONLY use Bluetooth for MIDI keyboards and we DO NOT try to guess your location or send any data to our servers

**NOTE:** For more information on working with MIDI Controllers, [see here](FL%20Studio%20Mobile_Controllers.htm#flm_externalcontrollers).

#### Application

*   **Enable count-in when recording** - Skip the count-in when recording.
*   **Display names of the keys on the keyboard** - Adds names for all white notes (A,B,C,D,E,F and G) between the octave names.
*   **Metronome level** - Use this to adjust the relative volume of the metronome. The Metronome can be accessed from the **TMP** button on the Transport Panel.
*   **Normalize rendered songs** - Makes the song louder by increasing the amplitude of the waveform so that the loudest sample is at the maximum possible level. Normalization determines the multiplication factor that will make the loudest waveform peak reach 100%, then multiplies all samples in the waveform by this value, rescaling them.
*   **Control Sizing** - Change the size of the controls to better suit your use-case or device.
    **NOTE:** You must restart FL Studio Mobile for this setting to take effect.
    
    **Troubleshooting:** If a scaling option makes the UI unusable, delete the **uiscale** file located in [..\\FLM User Files](#userdata).
    
* **Enable sharing** - This enables the [SHARE](#sharingdata) tab option. Normally you can leave this on. It means FL Studio Mobile will poll the network periodically to see if other instances are in use on other devices. When they are, they will appear as destination options for your data.
  **NOTE:** When connecting to desktop operating systems (Windows/OS X/macOS) you may see a security pop-up for your firewall. Allow FL Studio Mobile access.

#### Audio

*   **Audio Input** (Shows Microphone by default) - Select the audio input, when multiple inputs are available. On mobile devices with stereo microphones you will see 'Recording Source Stereo' and the option to select the Left or Right Channel (Mic). This is sometimes necessary when one mic is inferior to the other. This can happen if a mic is designed primarily used for noise-cancellation duties and not capturing the voice. When an **Audio Interface** is connected (on mobile devices, [via adapters](../img_plug/flmobile_otg_adapters.jpg)), other input options will be available. You may need to try them all to find the input you are looking for, if they are not explicitly and correctly identified. Input options on iOS also includes [Audiobus inputs](FL Studio Mobile_iOS_InterApp.htm).
    
*   **Enable audio recording latency compensation** - Ensures recorded audio is correctly aligned with the Playlist. For example, if you record the sound of FL Studio Mobile playing it's own kick track, latency calibration will ensure the kick recorded from the microphone is tightly aligned with the sequenced kick. This is necessary because on mobile devices there is usually a significant delay between the time when a sound was generated in the Playlist, to when it is audible from the speakers. This device **audio latency** is usually between 40 and 200 ms. If you are singing or playing in-time with the live audio, you are actually performing between 40 to 200 ms **behind** the sequenced events making the sound. Without latency compensation recordings made in time with live output will lag behind the internal sequencing. The compensation process removes a slice of audio, equal to the detected round-trip audio delay, from the start of the recording. This is the most accurate method to calibrate device latency.
    
    **Calibrate** - To perform a calibration, FL Studio Mobile must be able to record it's own output. The process measures the output-to-input delay for recorded audio by recording a single beep sound.
    
    *   **Using an internal microphone**
        1. Seek a quiet location. 
        2. Disconnect headphones.
        3. Turn up the volume to around 80-100%
        4. Tap **Calibrate**.
    *   **Using an external microphone**
        1. Seek a quiet location.
        2. Turn up the volume to around 50%.
        3. Hold the mic close to a speaker or against one of your headphone speakers.
        4. Tap **Calibrate**.
    
    **If the calibration fails** - This usually means the calibration beep was not detected. You can usually correct this by
    
    1. Turning up the volume.
    2. Making sure not to move, bump or scuff your device while calibrating.
    3. Making sure you know where the microphone is and that it is clear to receive audio.
    4. Making sure it is as quiet as possible when you tap Calibrate. **Audio Interface** - Make sure the **Input** selector matches the microphone you are using. Hold the microphone to the headphones.
    
*   **Use 32 Bit format when rendering and recording audio** - Switches from 16 Bit wav to 32 Bit floating-point wav files for all created, .wav format, audio files. **NOTE:** This format preserves the highest quality when post-processing the audio in another application such as FL Studio for the PC. Only use 32 Bit when you have a specific reason to do so. If you are not sure, use 16 Bit. 32 Bit .wav won't work in many consumer-level media players.
*   **Enable background audio** (iOS) - Allows the App to play when minimized.
*   **Sound mode** (Android) - This is an audio-engine option to reduce audio glitches and or crackling:
    
    *   **Fast** - Lowest latency for devices that can handle this setting. Latency is the delay between tapping on the keyboard and hearing sound.
    *   **Safe** - Can reduce audio glitching at the expense of increased latency.
    *   **Ultrasafe** - Longest latency, but has the widest compatibility with devices.
    
    **Troubleshooting:** There are two options relating to audio performance, **Multi core processing** and **Sound mode**. Together these give 6 possible combinations. Try them all and see if any combination solves your issues: ON/FAST, ON/SAFE, ON/ULTRASAFE, OFF/FAST, OFF/SAFE & OFF/ULTRASAFE.
    
*   **Multi core processing** - This is a CPU option to reduce audio glitches and or crackling. Multi-core ON may actually be worse than OFF depending on the device used. Try both positions.

### SHOP

**Shop** - You can download free content and or purchase additional content from this tab.

*   **To purchase content** - Tap the **Buy** button and complete the transaction through the App store.
*   **Restore purchases** - If you have already purchased content and then later re-installed FL Studio Mobile on a new device (or after deleting and installing it on the same device), the **SHOP** tab will show a **RESTORE** button. Tapping this should restore your purchase. Providing you are logged into the same App Store Account used to purchase the Application. For products provided by Image-Line, if you have registered your device with your [Image-Line Account](https://support.image-line.com/member/profile.php), when you re/install FL Studio Mobile on a device, tap the '**Users & support forum**' button, THEN re/registered your device to your Image-Line Account, this **content will be unlocked**.

**NOTE:** In-app purchases, like FL Studio Mobile itself, are not transferable between operating systems (Android, iOS and Windows). For more details on why this is so, see [this Knowledge Base article](https://support.image-line.com/knowledgebase/base.php?ans=497).

### SHARE

SHARE / SYNC Files Between FL Studio Mobile Installations

**Share** - You can share project related files between your mobile devices running FL Studio Mobile. When your devices are [connected to the same network (including WiFi)](FL%20Studio%20Mobile_WiFi.htm) choose a target device receive '**Your Files**', that is everything in the **FLM User Files** folder. This page allows you to sync projects across a network and between FL Studio Mobile installation on ALL detected Android, iOS and Windows (App and FL Plugin) devices.
**NOTE:** The first time you do this with a computer, you may see a **Firewall pop-up security message**. Allow FL Studio Mobile access to your Network. **How to Share:**

![Share](../assets/home/Share.png)

{% bilibili %} 29552167#3 {% endbilibili %}

1.  Make sure you are using the latest version of FL Studio Mobile on your device AND have the latest FL Studio plugin update - [get it here](http://support.image-line.com/redirect/flmobile_flplugin).
2.  Connect your PC and or any Mobile devices to the same network. Normally this will be via **Wi-Fi**, but it's OK if you have a combination of Wi-Fi and **Ethernet** connections. The important factor is **all devices are connected to the same Network**.
3.  Open FL Studio Mobile on the PC and on the Mobile device.
4.  From the PC and Mobile device/s select the **Share** tab. **NOTE:** On the PC, the first time you do this, you will see a **Firewall pop-up security message**. Allow FL Studio Mobile access to your Network.
5.  On the **Share** tab, you should see all other instances of FL Studio Mobile, on all devices listed. Sharing goes **FROM** the device you are using **TO** the one you select.
6.  Tap on the device and **Your Files** (see below) is transferred to that device.
7.  You will need to restart the destination FL Studio Mobile instance to see the new data as it is scanned at start-up.
8.  Make a shortcut on your Computer desktop to your My Files location, then you can manually copy files in and out of this location and then use SHARE to send them to your Mobile Device, or get them after a SHARE to your computer, easy!

<font color="red">**IMPORTANT NOTE:**</font> The first time you use the **FL Studio Plugin** version, you should **Send All** library content to it. By default, the plugin version only ships with a limited library of sounds so you will need to update it with the complete library from a Mobile version. If you don't do this, projects will be missing sounds on the plugin version. This can take several minutes to complete.

## Managing User Files

This section relates to the internal file browser that opens when you choose Presets or add Audio Clips. The options here are available **only for user files**. They do not apply for factory installed content.

![Managing User Files](../assets/home/UserFilesManagement.png)

#### Working with files

1.  Tap Select open the file management options.
2.  Tap 'select' buttons for the files you want to manage.
3.  Choose the option/action you wish to perform for the files.

#### Options

*   **All** - Select all files.
*   **Fold** - Create a folder and move selected files to it.
    **NOTE:** You must select files to create a folder.
*   **Delete** - Delete selected files
*   **Cut** - Choose files ready for moving to another location (Paste).
*   **Paste** - Paste Cut files.
*   **Export** - Export files with the OS supplied sharing options.
*   **Wave** (iOS only) - Audio Paste.

## Finding Your Files

Using mobile devices as creative tools can be frustrating as mobile Operating Systems (Android, iOS and Windows UWP), more or less, prevent easy access to internal folders used by Apps. Operating System specific instructions are [provided below](#userdata_access) on how to access these folders. Under the FL Studio Mobile installation folder you can find the following sub-folders. Initially these folders are empty, they are for your data:  

**FL Studio Mobile install sub-folders:**

*   **My Drum templates** - Drum templates are collection of sounds that make up a drumkit. This is not drum-sample data, it's preset data that loads the samples into a Drumkit.
*   **My Instruments** - Place **[DirectWave](FL%20Studio%20Mobile_Module_DirectWave.htm) Program (.dwp)** instrument files, including the sample sub-folder and the legacy-format FLM2 (**.instr**) format here. You can export .dwp and .instr directly from the [FL Studio (PC version)](http://www.image-line.com/flstudio/) > [DirectWave](https://www.image-line.com/support/flstudio_online_manual/html/plugins/DirectWave.htm) (plugin) > [PROGRAM > Right-click the Program label](https://www.image-line.com/support/FLHelp/html/plugins/Directwave_zonewindow.htm) and select '**Save program**'.
*   **My MIDI** - Contains all MIDI format files **(.mid)**. These will show at the main [SONGS Menu](FL%20Studio%20Mobile_HomePanel.htm#songs) and on the [Channel Menu](FL%20Studio%20Mobile_Playlist.htm#channel_menu) ('Import MIDI Tracks' and 'Save as MIDI').
*   **My Presets** - This folder contains all plugin presets (Instruments and Effects). There are no subfolders as presets contain meta-data inside the presets so FL Studio Mobile will only show compatible presets in the plugin you open to load them. Example files are MiniSynth (**.flms**) and all other presets including GMS, Transistor Bass and FX Modules (**.flmpst**).
*   **My Recordings** - Audio recordings made from within FL Studio Mobile. WAV (uncompressed format, 16, 24 or 32 Bit). See **NOTE**.
*   **My Samples** - One-shots, samples, sounds anything you want to include in WAV (uncompressed 16, 24 or 32 Bit format) or MP3. See **NOTE**.
*   **My Songs** - Project files. These show at the top of the list on the **Home Page > Songs** tab.
*   **My Tracks** - These audio files that are created when you render projects. Make sure to render to **Lossless** (WAV) or MP3 format if you want to re-use a track in FL Studio Mobile (create a new Playlist track of type 'Wave' to load). **Compressed** (AAC format) files will not show for use in FL Studio Mobile. These will play in your Media Player however.
    
    **Save CPU:** you can convert any Playlist Track to audio by Soloing it and rendering to Uncompressed (WAV) format from the **Home page > Songs > Render** button. Then load it back into the Playlist with the **\+ button > Audio Wave** option (locate your render and load it).
    

**NOTES:**

1.  You must **restart FL Studio Mobile after adding new samples** for them to be scanned and be available for use.
2.  Locations in FL Studio Mobile that load sample data - **[Drum Sampler](FL%20Studio%20Mobile_Editors.htm#stepsequencer)**, **DirectWave** and the **Audio Clip** will scan **My Recordings**, **My Samples** and **My Tracks** for WAV (uncompressed, 16, 24 or 32 Bit) and MP3 (compressed) data and present it as a load option. So, you can also copy WAV/MP3 files to any of these locations. Too keep things organized, use 'My Samples' for your tuned and untuned instrument/percussion samples. 'My Recordings' for vocals and instrument samples. 'My Tracks' for stems and completed songs.

### Accessing, Exporting & Importing Your Files (WAV, MP3, MID, FLM, etc)

This section shows you how to get access to your data on each of the supported App platforms. This is so you can upload and download **custom samples**, **instruments**, **presets**, **music** and any other files as used above.

#### All Operating Systems: Using SHARE

If you have access to a Desktop PC, by far, the easiest method is to use [SHARE with the FL Studio Plugin](FL%20Studio%20Mobile_HomePanel.htm#sharingdata) TO and FROM the Mobile Device. In this case, add content to the FL Studio Mobile plugin folder on your PC, then SHARE to the mobile device. Or SHARE from the device to your PC. Alternatively, proceed as follows:

#### Android File Management

Android allows direct access to internal folders, there are two main options:

1.  Connect your device to your computer with a **USB cable**. Then set the device to work in '**Data transfer**' mode. You should now have drag-and-drop access to your Data Folders. You will need to find the **FLM User Files** folder. This is usually in the root/top of the main storage.
    
    ![View Android data with Windows browser](../assets/home/ViewAndroidDataWithWindows.png)
    
2.  **OR** 2. Use [AirDroid](http://play.google.com/store/apps/details?id=com.sand.airdroid) that will allow you to use a **Web Browser** to access folders and files on any Android device (works on Windows and Macs). If you are working internal on an Android device, [Total Commander](http://play.google.com/store/apps/details?id=com.ghisler.android.TotalCommander) will allow you to copy and paste your files between folders on the device. There are also a number of [plugins available](http://www.ghisler.com/androidplugins/googleplay/) for working across networks, for example a [LAN plugin](https://play.google.com/store/apps/details?id=com.ghisler.tcplugins.LAN).
    
    ![View Android data with Android browser](../assets/home/ViewAndroidDataWithAndroid.png)
    

#### Apple iOS File Management

There following methods are available:

1.  **System Import** - iOS will recognize most file-types associated with FL Studio Mobile (.flm, .mid, .flmpst, .flms, .wav, .mp3) in emails, cloud storage etc, and allow you to open them with FL Studio Mobile. **Long-tap on the attachment or file**, as show in your email or cloud storage App, then select **FL Studio Mobile** from the pop-up options to open the file.
    
    ![Copy from email](../assets/home/CopyFromEmail.png)
    
    When FL Studio Mobile starts, the file will be moved to the appropriate folder in the App. This method works, one file at a time.
    
    ![Copy from email done](../assets/home/CopyFromEmailDone.png)
    
2.  **iTunes Import/Export** - Connect your iOS device to your computer with iTunes. After syncing and selecting FL Studio Mobile 3, you will have access to the **FLM User Files** folders. You will be able to copy these folders in their entirety FROM FL Studio Mobile TO your computer via iTunes. (**YOU MUST** **select the files and or folder/s** and then use '**Save to...**' from iTunes. This will allow you to send files and folders across to your computer. You can't look inside these folders in iTunes.
    
    To **upload all file types** (.flm, .mid, .flmpst, .flms, .wav, .mp3 etc), TO FL Studio Mobile, use the '**Add File...**' button so add files to the Root Folder of FL Studio Mobile. These will show under **My Samples**, **SONGS** and other appropriate locations in FL Studio Mobile automatically, the next time you restart the App.
    
    ![View IOS data](../assets/home/ViewIOSData.png)
    

#### FL Studio Plugin File Management

**NOTE:** From FL Studio Mobile 3.2.47 up, the data location for the plugin moved from **C:\\Program Files (x86)\\Image-Line\\FL Studio N\\Plugins\\Fruity\\Generators\\FL Studio Mobile\\LocalData** to the **FL Studio User data folder** ...

Make a desktop shortcut to the **FL Studio User data folder**. Under **\[user\]\\Documents\\Image-Line\\FL Studio Mobile\\**. This is the same location for macOS and Windows. Then you can drag and drop any content to and from the folders as you need. Use the [Sharing function](#sharingdata) to send this to your mobile device AND also back to your Windows or Mac computer.

![View plugin data](../assets/home/ViewPluginData.png)

#### FL Studio Windows App File Management

The following options are available:

1.  **Windows App (Windows Desktop)** - Make a desktop shortcut to the FL Studio Mobile user data folder. The path has some custom data as shown in red. Normally under **C:\\Users\\<font color="red">YOUR\_ACCOUNT</font>\\AppData\\Local\\Packages\\Image-Line.FLStudioMobile\_<font color="red">RANDOM\_LETTERS\_NUMBERS</font>\\LocalState**. **NOTE:** the **AppData** folder is hidden, so you will need to have '**Show hidden items**' selected in the file browser. If you don't have **permission to enter the folder**, check [this guide](http://www.fixedbyvonnie.com/2013/12/where-are-apps-in-the-windows-store-installed). Windows 8 and 10 are the same in this regard.
    
    ![View UWP data](../assets/home/ViewUWPData.png)
    
2. **Loading from within the App** - It's not possible to browse audio files in folders external to the App from FL Studio Mobile. To load audio files external to the App, open a regular Windows File Browser, then right-click the target file and choose '**Open with > FL Studio Mobile**'. This will import the file to the App.

   ![Load from within the app](../assets/home/LoadFromWithinAPP.png)


#### Windows Phone App File Management

It's not possible to access the FL Studio Mobile installation User folder on a Windows Phone. You have the following options:

1.  **To export data**\- Two options ...
    *   Use the '**Destination**' option to save your content to one of the folders visible when the phone is connected to a PC (or OneDrive).
    *   Install the App on Windows for PC (you get both the Phone and Desktop App). **Follow the Windows App (Windows Desktop)** instructions above to use the [SHARE](FL%20Studio%20Mobile_HomePanel.htm#sharingdata) function.
2.  **To import data** - Two options ...
    *   From the Playlist, tap the (+) button to add an **Audio Track**, then choose '**Import Sample**' and this will open a sample import dialog. After import the sample will be in **My Files > My Samples**.
    *   Install the App on Windows for PC (you get both the Phone and Desktop App). **Follow the Windows App (Windows Desktop)** instructions above to use the [SHARE](FL%20Studio%20Mobile_HomePanel.htm#sharingdata) function.
