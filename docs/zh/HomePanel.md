# FL Studio Mobile - 主菜单

主菜单包含 SONGS、SETTING、SHOP 和 SHARE（新版本更名 FILES） 四个栏。

![主菜单](../assets/home/home_panel_zh.png)

<a id="paramaters"></a>

## 详述

点击 **主菜单按钮（右上角的 LOGO）** 你可以看到以下内容：

**注意：**<font color="red">并非所有系统都可以使用所介绍的全部功能。</font>

<a id="help"></a>

### HELP （Button） 帮助按钮

帮助按钮会给予你很大的帮助！点击 HELP 你可以找到…

*   **Manual 手册** - 你正在阅读的本手册。
*   **Video Tutorials 视频教程** - B站可搜到大量 [FL Studio Mobile 转载视频教程][1]。
*   **Users & Support Forums 用户支持论坛** - 你可以在 [用户论坛][2] 提出 「How - to」 问题，功能需求以及报告错误。如果你遇到什么错误，报告问题是修复问题的最快方法。
*   **Play Tutorial 播放教程** - 播放本地的 [入门视频教程][3]。
*   **Register at Image - Line 注册到 Image - Line 服务器** - 注册一个 Image - Line 账号，这样你可以获得访问 [用户论坛][2] 的权限。

<a id="songs"></a>

### SONGS 歌曲

**Songs** - 加载或保存 FL Studio Mobile 工程和 MIDI 文件。

<a id="timesignature"></a>

*   **New** - 创建并打开工程模板
    
    ![新建歌曲](../assets/home/new_song_zh.png)
    
    **开始一个新工程……**
    
    1.  **New 新建** - 新建一个工程
    2.  **Tempo 速度** - 在常见的速度范围中进行选择。你可以稍后更改此项设置，在下方控制栏上的 [BPM 控件][4] 设置精确的速度。
    3.  **Mode 模式** - 在 FL Studio Mobile 中你可以将时间标尺设置成以下两种模式：
        *   **Time signature 节拍（传统）** - 选择 **每小节节拍**/**节拍值**。音序器将根据节拍值显示 1/16 音符。
        *   **Time division 时间划分（高级）** - 设置 **每个节拍的步数** 或 **每个小节节拍**。音序器会显示选定的每个节拍的步数。
        **注意：** 节拍和时间划分只能在创建工程时设置，设置后将无法更改。
    4.  **OK 完成** - 开始你设置好的新工程。  
        **注意：** 每个工程只能在创建时设置节拍而不能更改现有工程的节拍。
    
    <a id="render"></a>
    
    <a id="save"></a>
    
*   **Save** - 保存当前工程。  
    **注意：** 点击 **SEND** 可让你通过电子邮件或可以共享文件的 App 发送内容。操作如下：
    
    ![保存歌曲](../assets/home/save_song_zh.png)
    
    **正在保存或发送文件…**
    
    1.  **SONGS 栏 > Save 保存** - 从 SONGS 栏中选择 **保存**。
    2.  **Rename file 重命名**（可选）- 如果要重命名工程，请点击此处并输入新名称。
    3.  **Select format 选择格式** - 选择保存格式。FLM 是工程文件。MIDI 是音符数据。WAV、FLAC、MP3 和 AAC 是音频格式。
    4.  **SEND 发送**（可选）- 这是保存到设备的另一种方法。点击此处可选择电子邮件和任何其他外部位置，通过 APP 共享你设备上的文件。  
        **注意：** 这与 [SHARE（FILES）][5] 栏不同，后者允许你在不同设备上 FL Studio Mobile 之间直接共享文件。
    5.  **SAVE 保存** - 文件会保存到默认的 FLM User Files 文件夹下。选择保存音频格式时，你会看到以下选项：
        
        ![保存歌曲选项](../assets/home/save_song_options_zh.png)
        
        *   **Normalize level 音量标准化** - 最大化音量，使最大的峰值达到 100％ 的音量。
        *   **High quality 高质量** - 设置最高质量的音频。其取决于渲染输出的格式。选择时输出 HQ（高质量）WAV 32 Bit、FLAC 24 Bit、MP3 320 kbps、AAC 320 kbps。关闭时输出 WAV 16 Bit、FLAC 16 Bit、MP3 192 kbps、AAC 192 kbps。
        *   **Trim initial silence 去除初始静音** - 去除渲染开始时的静音。
        *   **Render to last bar 渲染到最后一个小节** - 渲染输出到最后一个小节的末尾。这样可以避免音频文件已经结束了，但是效果还在继续而产生的尾巴。
        *   **Split mixer tracks 分离混音轨道** - 创建对应播放界面中每一个轨道而分离于其他轨道的音频文件。这些文件通常被称为 **「Stem 分轨」**。你可以在像 FL Studio 一样的其他 DAW 中使用，也可以和朋友分享他没有的内容或效果，或者你可以把分轨载入工程然后静音以节省 CPU 使用率。
            **保存位置** - 文件以 WAV / FLAC 或 MP3 格式保存在 **FLM User Files > My Tracks** 文件夹中。
        *   **Enable master effects 启用主轨道效果** - 分离的轨道（分轨）在导出时会渲染主轨道的效果。当你要在另一个 DAW （数字音频工作站）中使用分轨时，通常不选择此项，这会为后续的混音提供了更大的灵活性。如果你要在 FL Studio Mobile 中使用分轨，以降低 CPU 使用率，请启用这个选项。对于播放界面中每个音轨单独的效果是会渲染的。如果你不想要这些效果，你需要在渲染前手动关闭每个控制台上的效果器。
            **注意:**由于不可能预测所有实际的使用情况，以及在控制台上所有类型的效果，所以上面的建议都不是“规则”。你需要自行考虑如何使用分轨以及是否希望主效果渲染到每个分轨上。
*   **File Name 文件名** - 点击编辑文件名。
*   **Save format 保存格式** - 选择要保存的文件类型。
    *   **FLM** - FL Studio Mobile 工程格式（在文件浏览器中查看时，扩展名为 **`.flm`**）
    *   **MIDI** - MIDI 是一种数据格式（在文件浏览器中查看时，扩展名为 **`.mid`**），用于与其他 DAW 共享 FL Studio Mobile 工程数据（音符和控制信息）。 
        **注意：** 此选项只会将工程的前 16 个音轨保存到单个 MIDI 文件中。如果你有 16 个以上的音轨，则需要对音轨进行重新顺序并进行多次保存，或者将每个音轨 [另存为 MIDI][6]。
    *   **WAV (Audio 音频)** - 最高质量，文件大。Wave 是一种无损的音频格式，（此类还有 FLAC 格式）是在创作环境中处理音频的首选格式。正常保存是 16 Bit 的 WAV 文件（在文件浏览器中查看时，扩展名为 **`.wav`**）。如果你在保存选项中启用了「高质量」（请参见上文），那么会输出 32 Bit 文件。
    *   **FLAC (Audio 音频)** - 无损音频压缩格式。类似于 WAV，FLAC 将所有音频信息保留在编码波形中。FLAC 的另一个好处是可以大大减小文件大小。FLAC 文件通常比等效的 WAV 文件小 20％ 至 30％，同时完美的保留了原始数据。如果你在保存选项中启用了「高质量」（请参见上文），那么会输出 32 Bit 文件。
    *   **MP3 (Audio 音频)** - 质量相比较低，文件较小。文件比特率为 192 或 320 kbps（HQ）（在文件浏览器中查看时，扩展名为 **`.mp3`**）。
    *   **AAC (Audio 音频)** - 质量相比较低，文件较小。文件比特率为 192 或 320 kbps（HQ）（在文件浏览器中查看时，扩展名为 **`.acc`**）。
    
    **建议：** 在 FL Studio Mobile 或[其他 DAW][7] 中使用 **WAV** 格式。而在发布或试听时使用 **MP3** 格式。
    
*   **SEND 发送** - 发送的位置将取决于你的设备和系统（它会在你点击 **「SEND 发送」** 然后点击「SAVE 保存」后显示）。例如： **电子邮箱**、**云存储** 或 **内部文件夹**。

**注意：** 有关 <font color="red">**高级文件共享**</font> 请参见 [你的文件！（工程、WAV、MP3、MIDI 文件储存在哪里？）][8]。

<a id="settings"></a>

### SETTINGS 设置

**Settings** - 选择 MIDI 输入，CPU / 音频设置和节拍器音量。

#### MIDI Device MIDI 设备

*   **MIDI Input MIDI 输入** - 当检测到 [外部 MIDI 设备][9] 时，你可以将此控件设置到播放界面选定的轨道。
*   **Enable MIDI over Bluetooth LE 启用通过蓝牙连接 MIDI** - 选择此项来连接蓝牙 MIDI 设备。**Android** 设备上会要求打开 **位置访问权限**。**位置访问权限** 是 [Google 要求的][10] （请参阅 「LE Beacons note」），而这项权限可能从附近的蓝牙设备定位你的位置。我们只会在 MIDI 键盘连接时使用蓝牙功能，我们不会尝试定位你的位置或向我们的服务器发送任何数据。

**注意：** 有关使用 MIDI 控制器的更多信息，请点击 [这里][9]。

#### Application 应用

*   **Enable count-in when recording 启用录音前倒计时** - 四拍计数后开始录音。
*   **Display names of the keys on the keyboard 显示钢琴键名** - 在八度音阶之间添加所有白键的名称（A、B、C、D、E、F 和 G）。
*   **Metronome level 节拍器音量** - 用它来调节节拍器的相对音量。可以在「控制栏」**TMP** 按钮中启用节拍器。
*   **Normalize rendered songs 渲染歌曲标准化** - 通过增加波形的振幅使音量最大的采样处于最大的电平，从而使歌曲音量更大。标准化会使最大的波形峰值达到 100％，从而确定放大系数，将波形中的所有采样乘以该值，然后重新放缩。
*   **Control Sizing 控件大小** - 更改控件的大小，使其更适合设备的视图。  
    **注意：** 必须重新启动 FL Studio Mobile 才能使此设置生效。  
    **故障检测：** 如果缩放选项使 UI 无法使用，请删除 [..\FLM User Files][8] 下的 **uiscale** 文件。
*   **Enable sharing 启用共享** - 这会启用 [SHARE（Files） 共享（文件）][5] 栏中的选项。通常你可以让它一直开启。这样 FL Studio Monile 会定期的检查是否有其他设备在使用其他内容。如果有的话，他们会作为数据的目标选项显示。  
    **注意：** 当连接到计算机系统（Windows / OS X / macOS）时，你可能会看到防火墙弹出安全窗口。请允许 FL Studio Mobile 访问。

<a id="audio"></a>

#### Audio 音频

*   **Audio Input 音频输入**（默认显示 Microphone 麦克风）- 当多个输入可用时，选择一个音频输入。在带有立体声麦克风的移动设备上，你会看到 **Recording Source: Stereo 录音源：立体声**。你可以选择左声道或右声道（麦克风）。这项设置在一个麦克风不如另一个麦克风时是必要的。如果将你的麦克风设计用于消除噪音或者不捕获声音的情况可以尝试上述设置。当**音频接口**（移动设备需要 [通过适配器][11]）被连接后，其他输入选项会处于可选择状态。如果不能准确正确地标识，你可能需要逐个尝试来找到所需的输入。iOS 上的输入选项还包括 [Audiobus 输入][12]。
    
    <a id="latency_compensation"></a>
    
*   **Enable audio recording latency compensation 启用录音延迟补偿** - 可以确保录制的音频与播放界面正确对齐。例如如果你正在录制自己演奏的 FL Studio Mobile 鼓机音轨，那么延迟校准将确保通过麦克风录制的鼓声与音序器紧密对齐。因为在移动设备上，通常播放界面中生成声音的时间与扬声器发出声音的时间之间会存在明显的延迟，因此启用这项功能是很必要的。设备的 **音频延迟** 通常在 40 至 200 毫秒之间。如果你正在用实时输出进行唱歌或演奏，实际上你的行为是在设备声音 40 到 200 毫秒 **之后** 发生的。如果没有延迟补偿，实时输出式录制的录音将滞后于内部音序。启用补偿时，会删去录音开始的一段音频，这段音频就等于声音往返的延迟。这是校准设备延迟的最准确方法。
    
    **Calibrate 校准** - 执行校准时，FL Studio Mobile 必须能够录制到自己的输出。该过程通过录制一段蜂鸣音来计算录音从输出到输入的延迟。
    
    *   **使用内置麦克风**
        1.  找一个安静的地方。
        2.  断开耳机。
        3.  将音量调高到 80 - 100％ 左右。
        4.  点击 **Calibrate 校准**。
    *   **使用外置麦克风**
        1.  找一个安静的地方。
        2.  将音量调高到 50％ 左右。
        3.  将麦克风靠近扬声器或靠在耳机扬声器上。
        4.  点击 **Calibrate 校准**。
    
    **如果校准失败** - 通常是没有检测到校准的蜂鸣声。一般情况下，你可以：
    
    1.  把音量调大。
    2.  确保在校准时不移动、撞击或摩擦设备。
    3.  确保你知道麦克风的位置，并且它可以可以清晰地接收音频。
    4.  点击 Calibrate 校准时，请尽可能地保持安静。**音频接口** - 确保 **输入** 选项与你正在使用的麦克风相匹配。保持麦克风在耳机附近。
*   **Use 32 Bit format when rendering and recording audio 渲染和录制音频时使用 32 位格式**（OS dependent 取决于操作系统）- 将创建的所有 **`.wav`** 格式的音频文件从 16 位切换到 32 位。  
    **注意：** 当在其他应用程序例如 PC 版 FL Studio 中对音频进行后期处理时，此格式可以保证最高质量。只有当你有特殊情况时才使用 32 位。如果不确定，请使用 16 位。32 位 wav 在许多消费级媒体播放器中不能正常播放。
*   **Enable background audio 启用后台播放**（iOS）- 最小化时允许应用播放。
*   **Sound mode 声音模式**（Android）- 这是一个音频引擎选项，可减少音频故障和炸音：
    
    *   **Fast** - 可设置设备最低延迟。延迟是敲击键盘和听到声音之间的延迟。
    *   **Safe** - 可以减少音频故障，但代价是增加延迟。
    *   **Ultrasafe** - 延迟最大，但与设备的兼容性最广。
    
    <a id="optimiseaudio"></a>
    
    **Troubleshooting 故障检测：** 有两个与音频性能有关的选项：**Multi core processing（多核处理）** 和 **Sound mode（声音模式）**。这里给出 6 种可能的组合。把它们都试一试，看看有没有什么组合能解决你的问题：开/FAST、开/SAFE、开/ULTRASAFE、关/FAST、关/SAFE、关/ULTRASAFE。
    
*   **Multi core processing（多核处理）** - 这是一个 CPU 选项，可减少音频故障或炸音。实际上，根据所使用的设备，开启多核可能会更糟。尝试一下不同的 **声音模式** 和 **多核处理** 的组合来解决你的问题。

<a id="shop"></a>

### SHOP 商店

**Shop** - 你可以在此栏下载免费内容或购买其他内容。

*   **To purchase content 购买内容** - 点击 **Buy 购买** 按钮，然后通过应用商店完成交易。
*   **Restore purchases 恢复购买** - 如果你已经购买了内容，然后又在新设备上重新安装了 FL Studio Mobile（或在同一设备上删除并将其安装后），那么 **SHOP 商店** 栏将就会显示 **RESTORE 恢复** 按钮。点击此按钮可以恢复你的购买，前提是你登录了购买应用程序时的应用商店账户。对于 Image - Line 提供的产品，如果你已经用你的 Image - Line 账户注册了你的设备，当你在设备上重新安装 FL Studio Mobile 时，点击 **Users & support forum** 按钮，然后注册或重新注册你的设备到你的 [Image - Line 账户][13]，这个 **内容将被解锁**。

**注意：** 应用内购买（例如 FL Studio Mobile 本身）不可在操作系统（Android、iOS 和 Windows）之间转移。有关为什么这样做的更多详细信息，请参见 [关于这个问题的文章][14]。

<a id="sharingdata"></a>

###  FILES  文件（在安装  FL Studio Mobile 的设备之间共享/同步文件）

This tab allows you to:

1. **Backup** your files to an internet file drive service (Google Drive, OneDrive, Dropbox etc).
   **NOTE:** Backup will consume space on your Cloud Drive.
2. **Share files** between devices logged into the same account using an internet file drive service.
3. **Share files directly** between any devices running FL Studio Mobile, connected to the same network, using WiFi.

#### Cloud Backup / Share

By logging into one of the supported 'Cloud' file sharing services supported (**Google Drive** & **OneDrive**), backup and sync your files online. This will also allow you to share files between devices running FL Studio Mobile and connected to the same account.

1. **Sign in** - Tap the **Sign In** button and choose a Cloud service to login to. Sign in to the account with your normal login details. **NOTE:** Not all Cloud services are available on all operating systems. Cloud backup is not yet available on Windows UWP.

   ![Could backup](https://docs.flm.moeshin.com/assets/home/sharecloud.png)

2. **Sync** - After logging in, the **Sync** will appear and allows you to upload your files to the Cloud drive. If there are already files online from a previous backup, or from another device, these will be downloaded. **NOTE:** When the files are in sync, or the Cloud Drive is waiting to be scanned, you will see '**Cloud sync is active**' instead of the **Sync** / **Advanced** buttons.

   ![Could backup](https://docs.flm.moeshin.com/assets/home/sharecloud2.png)

   Sync applies default actions based on the following rules, where the '**Cloud**' is your internet file drive:

   - **Upload** - The file is missing on the Cloud Drive **OR** the file was changed locally on your device. **Action:** Upload to Cloud as it is newer on your device.
   - **Download** - The file is missing locally on your device **OR** the file was changed on the Cloud Drive. **Action:** Download from the Cloud as it is newer there.
   - Decide - The file was changed on your device and on the Cloud Drive, so it is not clear which version you want to keep. This can happen if you edit the same project on two devices. In this case you have several options:
     - **Do nothing** - Ignore this file until the next Sync.
     - **Delete from cloud** - When uploading, delete the file on the Cloud drive and replace with the file on the device.
     - **Delete from device** - When downloading, delete the file on the device and replace with the file on the Cloud Drive.
     - **Keep both** - Renames the filename_1 to keep copies of both.

3. **Advanced** - Use the Advanced option to make more detailed changes:

   ![Advanced cloud backup](https://docs.flm.moeshin.com/assets/home/sharecloud_advanced.png)

   - **Action** - Shows the default Sync actions, discussed above. You can **tap to change** actions for individual files. To apply the actions shown on the Advanced dialog, press the Sync button at the bottom of the list. Once the window is closed, the system will revert to defaults as described above for the next Sync.

   - **File** - Each file to be processed is listed. You can make bulk changes by tapping the **Select** button and then using the select icons and using the new controls that appear (Upload, Download, Keep Both, Do nothing). Keep Both is useful when there is a **Decide** conflict. That is, there is a file in the cloud and on the device, both of which, are changed.

   - **Select** - Changes the lower button from **Sync**, to the options shown below. Tap Select, then use the individual file 'Select' icons, to choose the files you want to change and finally choose one of the Select options along the bottom:

     - **Download** - Replace the file on the device with the one in the cloud.
     - **Upload** - Replace the file in the Cloud with the one on the device.
     - **Keep both** - Create an name_1 version of the file and keep name and name_1.
     - **Do nothing** - Ignore this file until the next Sync.

     **NOTE:** To delete files from the Cloud you need to delete the same file on all devices. Otherwise, it will be uploaded to the cloud again on the next Sync from a device containing it.

#### **Cloud Drive Notes**

**Supported Cloud Services** - Not all services are available on all Operating Systems. While it is possible to view the **FL Studio Mobile** Cloud folder on all Cloud Drive services, from a Web-browser, not all drives allow you to edit or add to the data in the Cloud. See below for the specific limitations and features of each Cloud Drive service:

- **Deleting files** - When Cloud Sync is in use, you must delete them from **all** devices. Otherwise the file/s will be re-uploaded to the Cloud Drive when a synced device contacts the Cloud Drive. FL Studio Mobile will **only delete files from the Cloud Drive**, not from **cross-synced devices**, to minimize the risk of deleting important user files.

- **Update frequency** - When Sync is set to **Manual** the Cloud Drive is checked when the FILE tab is opened and then at 30 second intervals, so be patient if the Sync button does not immediately appear. When set to **Automatic** the Cloud Drive is checked every 2 minutes for updates. The Cloud Drive is also checked upon opening the FILES tab. When you see **Cloud sync is active**, this means all files are in sync **or** the device has not accessed the Cloud Drive yet, and does not know about pending changes.

- **Target folders** - FL Studio Mobile will only share data with the following locations: My Drumsets, My Instruments, My MIDI, My Presets, My Recordings, My Samples, My Tracks and My Songs. You can't rename these folders on your Cloud Drive, they must remain as set.

- **[Google Drive](https://drive.google.com/drive)** (Google) - FL Studio Mobile has **limited permissions** to access your drive. It will create a folder called **FL Studio Mobile** in the root of your drive. It can only access files that were uploaded by itself and won't be able to 'see' any files that you add directly to your Google Drive folder via a Web-browser or any other application, other than FL Studio Mobile.

  **NOTE:** Google Drive **does not allow** you to manually add files to the FL Studio Mobile folders, as a way of adding content to your device, it will only see files it has put on your drive. **You can**, however, delete files manually on the cloud drive and this will be reflected on your device in the next sync.

- **[OneDrive](https://onedrive.live.com/)** (Microsoft) - FL Studio Mobile has **limited permissions** to access your drive. It will create a folder called **FL Studio Mobile** in the Apps folder of your Cloud Drive and it can only access this folder. Once the parent folder is created, you can rename it, move it OR **add your own files in the sub-folders, listed above**. In this way you can quickly add files to your connected FL Studio Mobile installations via any Web Browser. The only limitation is that FL Studio Mobile can't see files in the **Trash folder**. Once you delete files in the cloud, FL Studio Mobile will consider them missing and try to re upload them from your device. So you will need to delete files on your device to delete them on OneDrive.

  **NOTE:** OneDrive allows you to manually add files via a Web Browser to the FL Studio Mobile folders, as a way of adding content to your device.

**NOTE:** Cloud Drive features are controlled by their respective developers. We can't add features that are not supported by the services, or change how they function. As security is a high priority on these services, FL Studio Mobile can't access any parts of your drive it did not create.

**Direct Share 直接分享**

**Share 分享** - 你可以在运行 FL Studio mobile 的移动设备之间共享工程文件。当你的设备 [连接到同一网络（包括 WiFi）下][15] 时，选择目标设备接收「你的文件」，即「FLM User Files」文件夹中的所有内容。通过此页面，你可以通过网络在所有检测到的 Android、iOS 和 Windows（应用程序和 FL 插件）设备上的 FL Studio Mobile 之间同步工程。**注意：**第一次使用计算机执行此操作时，可能会看到 **防火墙弹出的安全消息**。允许 FL Studio Mobile 访问你的网络。**分享方式：**

![共享](../assets/home/share_zh.png)

https://www.bilibili.com/video/av29552167?p=3

1.  确保你在设备上使用的是最新版本的 FL Studio Mobile，并且具有 [最新的 FL Studio 插件][16]。
2.  将你的 PC 和或任何移动设备连接到同一个网络。通常情况下是通过 **Wi-Fi** 连接，但如果你同时使用 Wi-Fi 和 **以太网** 连接也可以。重要的是 **所有设备都得连接到同一个网络**。
3.  在 PC 和移动设备上打开 FL Studio Mobile。
4.  在 PC 和移动设备上，选择 **SHARE（共享）** 栏。  
    **注意：**第一次使用计算机执行此操作时，可能会看到 **防火墙弹出的安全消息**。允许 FL Studio Mobile 访问你的网络。
5.  在 **SHARE（FILES）共享（文件）** 栏上，你应该在设备列表上看到其他 FL Studio Mobile 的实例。**从** 你正在使用的设备共享 **到** 你选择的设备。
6.  点击要传输到的设备，**你的文件**（请参阅下文）将被传输到该设备上。
7.  你需要重新启动接受数据的 FL Studio Mobile，在重启时会读取到的新数据，在此之后你才能看到同步数据。
8.  创建一个「我的文件」的快捷方式到你的电脑上，然后你可以手动复制文件进出这个位置，然后使用「Send 共享」发送到你的移动设备，或者在共享到计算机后得到这些文件，非常简单！

<font color="red">**重要提示：**</font>首次使用 **FL Studio 插件版本**时，应将所有库内容 **Send All 全部发送** 。默认情况下，插件版本仅附带有限的音色库，因此你需要使用移动版的完整库来更新它。如果你不这样做，那么你的工程将在插件版上缺少部分音色。输出过程可能需要几分钟才能完成。

<a id="manageuserfiles"></a>

## 管理用户文件

此部分与内部文件浏览器有关，该浏览器在你选择「Presets 预设」或「Audio Clips 添加音频片段」时打开。此处的选项 **仅适用于用户文件**。它们不适用于厂家安装的内容。

![管理用户文件](../assets/home/user_files_management.png)

#### 处理文件

1.  点击「Select」打开文件管理器选项。
2.  点击右侧小小的选择按钮来选择你要管理的文件。
3.  选择你要对文件执行的选项/操作。

#### 选项

*   **All 全选** - 选择全部文件。
*   **Fold 折叠** - 创建一个文件夹并将所选文件移动到该文件夹。  
    **注意：** 你必须选择文件才能创建文件夹。
*   **Delete 删除** - 删除选中的文件。
*   **Cut 剪切** - 选择准备移动到另一个位置的文件（粘贴）。
*   **Paste 粘贴** - 粘贴「Cut」剪切的文件。
*   **Export 导出** - 使用系统提供的共享选项导出文件。
*   **Wave**（仅 iOS）- 音频粘贴。

<a id="userdata"></a>

## 查找你的文件

由于移动操作系统（Android、iOS 和 Windows UWP）或多或少会妨碍应用程序轻松地访问内部文件夹，因此使用移动设备用作为创作工具可能会令人十分沮丧。[下面提供][17] 了关于如何在移动系统中访问这些文件夹的特别说明。在 FL Studio Mobile 文件夹下，你可以找到以下的子文件夹。最开始，这些文件夹是空的，用于存储你的数据：

**FL Studio Mobile 子文件夹**

*   **My Drum templates** - 鼓组模板是组成鼓点的声音集合。这不是鼓的采样数据，而是将采样加载到鼓组中的预置数据。
*   **My Instruments** - 这里存放的是 **[DirectWave][18] 编码（`.dwp`）**的乐器文件，包括采样的子文件夹和 FLM2 的旧格式 （**`.instr`**）。你可以直接按照以下步骤：从 [FL Studio （PC 版）][19] > [DirectWave][20] （插件） > [PROGRAM > 右击程序标签][21] 并选择 **Save program** 导出 .dwp 和 .instr。
*   **My MIDI** - 包含所有 MIDI 格式文件 **(.mid)**。这些将显示在 [SONGS 歌曲菜单][22] 和 [Channel 音轨菜单][6]（「Import MIDI Tracks 导入 MIIDI 音轨」和「Save as MIDI 另存为 MIDI」） 上。
*   **My Presets** - 此文件夹包含所有插件预设（乐器和效果）。因为预置包含预置中的元数据，所以在此文件夹之下没有子文件夹，因此 FL Studio Mobile 将只在你打开加载它们的插件里显示兼容的预置。例如，MiniSynth 迷你合成器 **`.flms`**，其他预置文件 **`.flmpst`** 包括：GMS 合成器、Transistor Bass 晶体管贝斯和 FX Modules 效果模块。
*   **My Recordings** - 存放 FL Studio Mobile 中的录音。WAV（未压缩的 16、24 或 32 位格式文件）。见**说明**。
*   **My Samples** - 存放你想要的导入的任何声效、采样。WAV（未压缩的 16、24 或 32 位格式文件）或 MP3。见**说明**。
*   **My Songs** - 工程文件。它们显示在 **Home Page > SONGS** 栏上。
*   **My Tracks** - 这些音频文件是在渲染工程时被创建的。如果要重用 FL Studio Mobile 中的轨道，请确保渲染为 **无损**（WAV）或 MP3 格式（创建要加载的「波形」类型的新播放界面轨道）。**压缩**（AAC 格式）文件不会显示在 FL Studio Mobile 中使用。这些应该在你的媒体播放器中播放。  
    **节省 CPU 性能：** 你可以将任何播放界面的音轨转换为音频。选择让其 solo 独奏，点击 **Home page > SONGS > SAVE** 将其保存为未压缩（WAV）格式。然后使用 **+（添加轨道）按钮 > Audio Clip（音频片段）** 选项（找到保存的文件并加载）将其重新加载到播放界面中。

**说明：**

1.  **添加新采样后，必须重新启动 FL Studio Mobile**，才能扫描读取，可供使用。
2.  FL Studio Mobile 加载采样数据的位置 - [Drum Sampler（鼓采样器）][23]**、DirectWave** 和 **Audio 音频片段** 将扫描 **My Recordings**、**My Samples** 和 **My Tracks** 中的 WAV（未压缩的 16、24 或 32 位格式文件）和 MP3 （压缩）数据并将其作为加载选项显示。因此，你可以将 WAV / MP3 文件复制到这些位置中的任何一个。为了文件存放得井井有条，请对已调和未调的乐器/打击乐器样本存放在「My Samples」，人声和乐器采样存放在「My Recordings」「My Tracks」中。

<a id="userdata_access"></a>

### 访问、导出和导入文件（WAV、MP3、MID、FLM 等）

本节介绍如何在每个受支持的系统平台上访问数据。这样，你就可以上传和下载 **自定义采样**、**乐器**、**预设**、**音乐** 和上面使用的任何其他文件。

#### 所有操作系统：使用 SHARE

到目前为止，如果你可以访问台式 PC，最简单的方法是使用 FL Studio 插件与移动设备 [进行共享][5]。在这种情况下，将内容添加到 PC 上的 FL Studio Mobile 插件文件夹中，然后再共享到移动设备上。或从设备共享到你的 PC。或者，执行以下操作：

<a id="userdata_android"></a>

#### Android 文件管理

Android 允许直接访问内部文件夹，主要有两个选项：

1.  使用 **USB 数据线** 将设备连接到计算机。然后将设备设置为在 **数据传输** 模式。现在，你应该具有对数据文件夹的拖放访问权限。你将需要找到 **FLM User Files** 文件夹。这通常在主存储的根目录/顶部。
    
    ![用 Windows 浏览器查看 Android 数据](../assets/home/view_android_data_with_windows.png)
    
2.  **或者** 使用 [AirDroid][24]，它将允许你使用 **网页浏览器** 访问任何 Android 设备上的文件夹和文件（在 Windows 和 Mac 上均可使用）。如果你在 Android 设备上进行内部操作，[Total Commander][25] 将允许你在设备上的文件夹之间复制和粘贴文件。还有许多可用于跨网络工作的 [插件][26]，例如 [LAN plugin][27]。
    
    ![用 Android 浏览器查看 Android 数据](../assets/home/view_android_data_with_android.png)
    

<a id="userdata_ios"></a>

#### Apple iOS 文件管理

有以下方法可用：

1.  **系统导入** - iOS 将识别电子邮件，云存储等中与 FL Studio Mobile 关联的大多数文件类型（.flm、.mid、.flmpst、.flms、.wav、.mp3），并允许你使用 FL Studio Mobile 打开它们。如你的电子邮件或云存储应用程序中所示，**长按附件或文件**，然后从弹出选项中选择以 **FL Studio Mobile** 打开该文件。
    
    ![从电子邮件复制](../assets/home/copy_from_email.png)
    
    当 FL Studio Mobile 启动时，文件将被移动到应用程序中的相应文件夹。此方法有效，一次仅一个文件。
    
    ![从电子邮件复制完成](../assets/home/copy_from_email_done_zh.png)
    
2.  **iTunes 导入/导出** - 使用 iTunes 将 iOS 设备连接到计算机。同步并选择 FL Studio Mobile 3 后，你将可以访问 **FLM User Files** 文件夹。你可以通过 iTunes 将这些文件夹完整地从 FL Studio Mobile 复制到你的计算机（你必须选择文件和/或文件夹，然后使用 iTunes 中的「**保存到…**」）。这将使你可以将文件和文件夹发送到计算机上。你无法在 iTunes 中查看这些文件夹。
    
    要 **上传所有文件类型**（.flm，.mid，.flmpst，.flms，.wav，.mp3 等）到 FL Studio Mobile，请使用「**添加文件…**」按钮，以便将文件添加到 FL Studio Mobile 的根文件夹。下次重新启动应用程序时，这些内容将自动显示在 FL Studio Mobile 中的 **My Samples**、**My SONGS** 和 FL Studio Mobile 中的其他适当位置下。
    
    ![查看 iOS 数据](../assets/home/view_ios_data.png)
    

<a id="userdata_plugin"></a>

#### FL Studio 插件文件管理

**注意：** 从 FL Studio Mobile 3.2.47 开始，插件的数据位置从 **C:\\Program Files (x86)\\Image-Line\\FL Studio N\\Plugins\\Fruity\\Generators\\FL Studio Mobile\\LocalData** 移到 **\[用户名\]\\Documents\\Image-Line\\FL Studio Mobile\\** 下。对于 macOS 和 Windows，该位置相同。然后，你可以根据需要将任何内容拖放到文件夹中。使用 [共享功能][5] 将其发送到你的移动设备，然后再发送回 Windows 或 Mac 电脑。

![查看插件数据](../assets/home/view_plugin_data.png)

<a id="userdata_windowsapp"></a>

#### FL Studio Windows 应用程序文件管理

提供以下选项：

1.  **Windows 应用程序（Windows 电脑）** - 制作一个指向 FL Studio Mobile 用户数据文件夹的桌面快捷方式。该路径具有一些自定义数据，如红色所示。通常在 **C:\\Users\\<font color="red">用户名</font>\\AppData\\Local\\Packages\\Image-Line.FLStudioMobile\_<font color="red">RANDOM\_LETTERS\_NUMBERS</font>\\LocalState**。  
    **注意：** **AppData** 文件夹是隐藏的，因此你需要在文件管理器中选择 **显示隐藏工程**。如果你 **无权限进入该文件夹**，请查阅 [本指南][28]。Windows 8 和 10 在这方面是相同的。
    
    ![查看 UWP 数据](../assets/home/view_uwp_data.png)
    
2.  **从应用程序内加载** - 无法从 FL Studio Mobile 浏览应用程序外部文件夹中的音频文件。若要加载应用程序外部的音频文件，请打开常规的 Windows 文件浏览器，然后右键单击目标文件并选择 **打开方式 > FL Studio Mobile**。这会将文件导入到应用程序。
    
    ![从应用程序内加载](../assets/home/load_from_within_app_zh.png)
    

<a id="userdata_windowsphone"></a>

#### Windows Phone 应用程序文件管理

无法访问 Windows Phone 上的 FL Studio Mobile 用户文件夹。你有以下选择：

1.  **导出数据** - 两种选择
    *   使用 **Destination（目标）** 选项将你的内容保存到手机连接到 PC（或 OneDrive）时可见的文件夹之一。
    *   在 Windows 电脑上安装应用程序（同时获得手机和桌面应用程序）。**请按照上面的 Windows 应用程序（Windows 桌面）** 说明使用 [SHARE][5] 功能。
2.  **导入数据** - 两种选择
    *   从播放界面中，点击 (+) 按钮添加 **音轨**，然后选择 **Import Sample（导入采样）**，这将打开一个样本导入对话框。导入后，采样将位于 **My Files > My Samples** 中。
    *   在 Windows 电脑上安装应用程序（同时获得手机和桌面应用程序）。**请按照上面的 Windows 应用程序（Windows 桌面）** 说明使用 [SHARE][5] 功能。

[1]: https://www.bilibili.com/video/av29552167
[2]: http://support.image-line.com/redirect/flmobile_forum
[3]: https://www.bilibili.com/video/av80167389
[4]: Playlist.md#flmobile_transportbar
[5]: #sharingdata
[6]: Playlist.md#channel_menu
[7]: FLStudioPlugin.md
[8]: #userdata
[9]: Controllers.md#flm_externalcontrollers
[10]: https://developer.android.com/guide/topics/connectivity/bluetooth-le.html#permissions
[11]: ../assets/home/adapters.jpg
[12]: iOS_InterApp.md
[13]: https://support.image-line.com/member/profile.php
[14]: https://support.image-line.com/knowledgebase/base.php?ans=497
[15]: WiFi.md
[16]: http://support.image-line.com/redirect/flmobile_flplugin
[17]: #userdata_access
[18]: Module_DirectWave.md
[19]: http://www.image-line.com/flstudio/
[20]: https://www.image-line.com/support/flstudio_online_manual/html/plugins/DirectWave.htm
[21]: https://www.image-line.com/support/FLHelp/html/plugins/Directwave_zonewindow.htm
[22]: #songs
[23]: Editors.md#stepsequencer
[24]: http://play.google.com/store/apps/details?id=com.sand.airdroid
[25]: http://play.google.com/store/apps/details?id=com.ghisler.android.TotalCommander
[26]: http://www.ghisler.com/androidplugins/googleplay/
[27]: https://play.google.com/store/apps/details?id=com.ghisler.tcplugins.LAN
[28]: http://www.fixedbyvonnie.com/2013/12/where-are-apps-in-the-windows-store-installed
