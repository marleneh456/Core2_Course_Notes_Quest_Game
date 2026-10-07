const QUESTION_BANK = [
  {
    "domain": "1.0 Operating Systems",
    "topic": "1.1 Operating Systems Overview",
    "question": "Which file system is the primary Windows file system and supports permissions and encryption?",
    "options": [
      "NTFS",
      "APFS",
      "FAT32",
      "ext4"
    ],
    "answer": 0,
    "explanations": [
      "NTFS supports Windows permissions, encryption, compression, and large files.",
      "APFS is Apple's modern file system.",
      "FAT32 is widely compatible but lacks NTFS permissions and has a 4 GB file-size limit.",
      "ext4 is a common Linux file system."
    ],
    "tip": "NTFS = modern Windows features."
  },
  {
    "domain": "1.0 Operating Systems",
    "topic": "1.1 File Systems",
    "question": "Which file system has a maximum individual file size of about 4 GB?",
    "options": [
      "ext4",
      "APFS",
      "FAT32",
      "NTFS"
    ],
    "answer": 2,
    "explanations": [
      "ext4 is a Linux file system without this FAT32 limit.",
      "APFS is Apple's file system and is not limited to 4 GB files.",
      "FAT32 has a 4 GB maximum individual file-size limitation.",
      "NTFS supports files much larger than 4 GB."
    ],
    "tip": "FAT32: compatible, but 4 GB file limit."
  },
  {
    "domain": "1.0 Operating Systems",
    "topic": "1.2 Installing Operating Systems",
    "question": "What is a clean installation?",
    "options": [
      "Installing an OS without preserving the previous installation",
      "Joining a computer to a domain",
      "Updating an existing OS in place",
      "Restoring only one application"
    ],
    "answer": 0,
    "explanations": [
      "A clean install starts with a fresh operating-system installation.",
      "Domain membership is a network/account configuration task.",
      "An in-place upgrade attempts to preserve apps, files, and settings.",
      "Restoring one application is not an OS installation."
    ],
    "tip": "Clean install = fresh start."
  },
  {
    "domain": "1.0 Operating Systems",
    "topic": "1.2 Installing Operating Systems",
    "question": "Which partition style supports disks larger than 2 TB and many partitions?",
    "options": [
      "MBR",
      "NTFS",
      "FAT32",
      "GPT"
    ],
    "answer": 3,
    "explanations": [
      "MBR is older and has size/partition limitations.",
      "NTFS is a file system, not a partition-table standard.",
      "FAT32 is a file system, not a partition-table standard.",
      "GPT is the modern partition style and supports very large disks and many partitions."
    ],
    "tip": "GPT = modern partition table; MBR = legacy."
  },
  {
    "domain": "1.0 Operating Systems",
    "topic": "1.2 Installing Operating Systems",
    "question": "What does an in-place upgrade normally try to preserve?",
    "options": [
      "Applications, files, and settings",
      "Only deleted files",
      "Only the BIOS password",
      "Nothing from the old installation"
    ],
    "answer": 0,
    "explanations": [
      "An in-place upgrade is designed to keep applications, files, and settings when supported.",
      "Deleted files are not what an upgrade preserves.",
      "BIOS passwords are firmware settings, not the purpose of an OS upgrade.",
      "Preserving nothing describes a clean installation more closely."
    ],
    "tip": "In-place upgrade = keep apps/files/settings."
  },
  {
    "domain": "1.0 Operating Systems",
    "topic": "1.3 Windows Editions",
    "question": "Which Windows edition is intended to provide business features such as domain-related capabilities beyond Home?",
    "options": [
      "Windows Pro",
      "Windows PE",
      "Windows S mode only",
      "Windows Home only"
    ],
    "answer": 0,
    "explanations": [
      "Windows Pro adds business-oriented capabilities beyond Home.",
      "Windows PE is a lightweight preinstallation/recovery environment.",
      "S mode is a restricted Windows configuration, not the business edition answer.",
      "Home is aimed at general consumer use and lacks some Pro business features."
    ],
    "tip": "Pro = business features beyond Home."
  },
  {
    "domain": "1.0 Operating Systems",
    "topic": "1.3 Windows Features",
    "question": "What Windows feature provides full-disk encryption on supported editions?",
    "options": [
      "Disk Cleanup",
      "Remote Assistance",
      "BitLocker",
      "Task Manager"
    ],
    "answer": 2,
    "explanations": [
      "Disk Cleanup removes unnecessary files.",
      "Remote Assistance is for remote help, not disk encryption.",
      "BitLocker provides full-volume encryption.",
      "Task Manager monitors and manages processes and performance."
    ],
    "tip": "BitLocker = full-disk encryption."
  },
  {
    "domain": "1.0 Operating Systems",
    "topic": "1.4 Microsoft Management Console",
    "question": "Which Windows tool is used to view system and application event logs?",
    "options": [
      "Disk Management",
      "Device Manager",
      "Event Viewer",
      "Task Scheduler"
    ],
    "answer": 2,
    "explanations": [
      "Disk Management manages disks, partitions, and volumes.",
      "Device Manager manages hardware devices and drivers.",
      "Event Viewer displays Windows event logs.",
      "Task Scheduler runs tasks at configured times/events."
    ],
    "tip": "Event Viewer = logs."
  },
  {
    "domain": "1.0 Operating Systems",
    "topic": "1.4 Microsoft Management Console",
    "question": "Which tool is used to create and manage partitions and volumes in Windows?",
    "options": [
      "Local Users and Groups",
      "Disk Management",
      "Performance Monitor",
      "Event Viewer"
    ],
    "answer": 1,
    "explanations": [
      "Local Users and Groups manages local accounts and groups.",
      "Disk Management handles partitions, volumes, drive letters, and related disk tasks.",
      "Performance Monitor tracks performance counters.",
      "Event Viewer displays logs."
    ],
    "tip": "Disk Management = partitions/volumes."
  },
  {
    "domain": "1.0 Operating Systems",
    "topic": "1.4 Windows Tools",
    "question": "Which tool is best for viewing running processes and quickly ending an unresponsive application?",
    "options": [
      "Certificate Manager",
      "Disk Defragmenter",
      "Task Manager",
      "Registry Editor"
    ],
    "answer": 2,
    "explanations": [
      "Certificate Manager manages digital certificates.",
      "Disk optimization tools work with storage, not application processes.",
      "Task Manager shows running apps/processes and can end tasks.",
      "Registry Editor modifies Windows Registry settings."
    ],
    "tip": "Frozen app? Think Task Manager."
  },
  {
    "domain": "1.0 Operating Systems",
    "topic": "1.5 Windows Command Line",
    "question": "Which command checks a Windows disk/file system for errors?",
    "options": [
      "format",
      "gpupdate",
      "ipconfig",
      "chkdsk"
    ],
    "answer": 3,
    "explanations": [
      "format creates a file system on a volume and can erase data.",
      "gpupdate refreshes Group Policy.",
      "ipconfig displays/configures TCP/IP information.",
      "chkdsk checks a disk and file system for errors."
    ],
    "tip": "chkdsk = check disk."
  },
  {
    "domain": "1.0 Operating Systems",
    "topic": "1.5 Windows Command Line",
    "question": "Which command checks and repairs protected Windows system files?",
    "options": [
      "netstat",
      "sfc",
      "hostname",
      "ping"
    ],
    "answer": 1,
    "explanations": [
      "netstat displays network connections/statistics.",
      "System File Checker (sfc) verifies protected Windows system files and can repair them.",
      "hostname displays the computer name.",
      "ping tests IP connectivity using ICMP."
    ],
    "tip": "sfc = System File Checker."
  },
  {
    "domain": "1.0 Operating Systems",
    "topic": "1.5 Windows Network Command Line",
    "question": "Which command displays a Windows computer's IP configuration?",
    "options": [
      "ipconfig",
      "nslookup",
      "tracert",
      "net use"
    ],
    "answer": 0,
    "explanations": [
      "ipconfig displays Windows IP configuration.",
      "nslookup queries DNS information.",
      "tracert shows the route/hops toward a destination.",
      "net use can manage network connections/mapped resources."
    ],
    "tip": "ipconfig = IP configuration."
  },
  {
    "domain": "1.0 Operating Systems",
    "topic": "1.5 Windows Network Command Line",
    "question": "Which command queries DNS to troubleshoot name resolution?",
    "options": [
      "sfc",
      "nslookup",
      "shutdown",
      "diskpart"
    ],
    "answer": 1,
    "explanations": [
      "sfc checks Windows system files.",
      "nslookup queries DNS servers and records.",
      "shutdown controls system shutdown/restart.",
      "diskpart manages disks/partitions."
    ],
    "tip": "nslookup = DNS lookup."
  },
  {
    "domain": "1.0 Operating Systems",
    "topic": "1.6 Windows Control Panel",
    "question": "Which Control Panel area is commonly used to uninstall desktop applications?",
    "options": [
      "Power Options",
      "Credential Manager",
      "Programs and Features",
      "Devices and Printers"
    ],
    "answer": 2,
    "explanations": [
      "Power Options manages power plans.",
      "Credential Manager stores certain saved credentials.",
      "Programs and Features lists installed traditional applications and supports uninstall/change actions.",
      "Devices and Printers manages connected devices/printers."
    ],
    "tip": "Uninstall desktop apps \u2192 Programs and Features."
  },
  {
    "domain": "1.0 Operating Systems",
    "topic": "1.7 Windows IP Configuration",
    "question": "A Windows PC shows 169.254.x.x. What does that usually indicate?",
    "options": [
      "It could not obtain normal DHCP configuration",
      "BitLocker is enabled",
      "It successfully contacted a domain controller",
      "It is using a public DNS server"
    ],
    "answer": 0,
    "explanations": [
      "169.254.x.x is an APIPA/link-local address commonly seen when DHCP configuration is unavailable.",
      "BitLocker is unrelated to IP addressing.",
      "Domain-controller contact does not create an APIPA address.",
      "DNS-server selection is not what creates this address range."
    ],
    "tip": "169.254.x.x \u2192 check DHCP/network connectivity."
  },
  {
    "domain": "1.0 Operating Systems",
    "topic": "1.8 macOS Overview",
    "question": "Which macOS feature provides built-in backup functionality?",
    "options": [
      "Active Directory Users and Computers",
      "Time Machine",
      "Task Scheduler",
      "BitLocker"
    ],
    "answer": 1,
    "explanations": [
      "Active Directory Users and Computers is a Windows administrative tool.",
      "Time Machine is Apple's built-in macOS backup feature.",
      "Task Scheduler is a Windows task automation tool.",
      "BitLocker is Windows disk encryption."
    ],
    "tip": "macOS backup = Time Machine."
  },
  {
    "domain": "1.0 Operating Systems",
    "topic": "1.8 macOS Features",
    "question": "Which macOS feature searches files, apps, and other content quickly?",
    "options": [
      "Boot Camp only",
      "Spotlight",
      "Keychain",
      "Finder only"
    ],
    "answer": 1,
    "explanations": [
      "Boot Camp historically supported Windows installation on some Intel Macs.",
      "Spotlight provides system-wide search in macOS.",
      "Keychain stores passwords/credentials.",
      "Finder is the file manager, but Spotlight is the search feature asked for."
    ],
    "tip": "Spotlight = macOS search."
  },
  {
    "domain": "1.0 Operating Systems",
    "topic": "1.9 Linux",
    "question": "What is the Linux kernel?",
    "options": [
      "A cloud storage service",
      "The core software that manages hardware and system resources",
      "A graphical web browser",
      "A Windows registry database"
    ],
    "answer": 1,
    "explanations": [
      "Cloud storage is a service, not the OS kernel.",
      "The kernel is the core of Linux and manages CPU, memory, devices, and other resources.",
      "A browser is an application, not the kernel.",
      "Linux does not use the Windows Registry as its kernel."
    ],
    "tip": "Kernel = core between applications and hardware."
  },
  {
    "domain": "1.0 Operating Systems",
    "topic": "1.9 Linux Commands",
    "question": "Which Linux command lists files and directories?",
    "options": [
      "cd",
      "pwd",
      "grep",
      "ls"
    ],
    "answer": 3,
    "explanations": [
      "cd changes the current directory.",
      "pwd prints the current working directory.",
      "grep searches text for matching patterns.",
      "ls lists directory contents."
    ],
    "tip": "ls = list."
  },
  {
    "domain": "1.0 Operating Systems",
    "topic": "1.9 Linux Commands",
    "question": "Which Linux command changes file permissions?",
    "options": [
      "mkdir",
      "chmod",
      "ps",
      "chown"
    ],
    "answer": 1,
    "explanations": [
      "mkdir creates directories.",
      "chmod changes file permission bits.",
      "ps displays process information.",
      "chown changes file ownership."
    ],
    "tip": "chmod = change mode/permissions."
  },
  {
    "domain": "1.0 Operating Systems",
    "topic": "1.9 Linux Commands",
    "question": "Which command runs a command with elevated privileges when the account is permitted?",
    "options": [
      "mv",
      "df",
      "sudo",
      "pwd"
    ],
    "answer": 2,
    "explanations": [
      "mv moves or renames files.",
      "df reports file-system disk space.",
      "sudo can execute a command with elevated privileges according to policy.",
      "pwd displays the current directory."
    ],
    "tip": "sudo = elevated command."
  },
  {
    "domain": "1.0 Operating Systems",
    "topic": "1.10 Installing Applications",
    "question": "Why should you verify software's system requirements before installation?",
    "options": [
      "To disable all security controls",
      "To guarantee the user never needs updates",
      "To confirm the device can support the application",
      "To convert every disk to GPT"
    ],
    "answer": 2,
    "explanations": [
      "Security controls should not simply be disabled.",
      "Applications can still require updates after installation.",
      "Requirements help verify CPU, RAM, storage, OS, and other compatibility needs.",
      "Partition conversion is unrelated to normal application requirements."
    ],
    "tip": "Check requirements before installing."
  },
  {
    "domain": "1.0 Operating Systems",
    "topic": "1.11 Cloud Productivity Tools",
    "question": "What is a key benefit of cloud-based productivity applications?",
    "options": [
      "They never require authentication",
      "Access and collaboration from multiple locations/devices",
      "They remove all data-security concerns",
      "They always work without a network"
    ],
    "answer": 1,
    "explanations": [
      "Cloud services normally require authentication.",
      "Cloud productivity tools support remote access, sharing, and collaboration.",
      "Cloud use still requires attention to security and privacy.",
      "Many cloud functions depend on network access."
    ],
    "tip": "Cloud productivity = access + collaboration."
  },
  {
    "domain": "2.0 Security",
    "topic": "2.1 Physical Security",
    "question": "What is the purpose of a mantrap?",
    "options": [
      "Control access by allowing one secured door at a time",
      "Encrypt a hard drive",
      "Filter email spam",
      "Back up a server"
    ],
    "answer": 0,
    "explanations": [
      "A mantrap uses controlled doors to restrict physical entry.",
      "Drive encryption is a logical security control.",
      "Spam filtering is email security.",
      "Backups protect data availability."
    ],
    "tip": "Mantrap = controlled physical entry."
  },
  {
    "domain": "2.0 Security",
    "topic": "2.1 Physical Access Security",
    "question": "Which authentication factor is a fingerprint?",
    "options": [
      "Something you know",
      "Something you have",
      "Somewhere you are",
      "Something you are"
    ],
    "answer": 3,
    "explanations": [
      "Passwords/PINs are 'something you know.'",
      "Tokens/smart cards are 'something you have.'",
      "Location can be treated as 'somewhere you are,' but a fingerprint is biometric.",
      "Biometrics such as fingerprints are 'something you are.'"
    ],
    "tip": "Fingerprint = something you are."
  },
  {
    "domain": "2.0 Security",
    "topic": "2.1 Logical Security",
    "question": "What does least privilege mean?",
    "options": [
      "Give every user administrator rights",
      "Give users only the permissions needed for their job",
      "Disable authentication",
      "Share one account with the entire department"
    ],
    "answer": 1,
    "explanations": [
      "Giving everyone admin rights violates least privilege.",
      "Least privilege limits access to what is required.",
      "Disabling authentication removes access control.",
      "Shared accounts reduce accountability."
    ],
    "tip": "Least privilege = minimum required access."
  },
  {
    "domain": "2.0 Security",
    "topic": "2.1 Authentication and Access",
    "question": "What does MFA require?",
    "options": [
      "Only a username",
      "More than one authentication factor",
      "No authentication",
      "Two passwords from the same factor only"
    ],
    "answer": 1,
    "explanations": [
      "A username identifies an account but is not multiple authentication factors.",
      "MFA combines different authentication factors.",
      "No authentication is the opposite of MFA.",
      "Two passwords are still the same 'something you know' factor."
    ],
    "tip": "MFA = different factors."
  },
  {
    "domain": "2.0 Security",
    "topic": "2.1 Authentication and Access",
    "question": "What is SSO designed to provide?",
    "options": [
      "One authentication process for access to multiple resources",
      "Physical door locking",
      "Anonymous administrator access",
      "A different password for every click"
    ],
    "answer": 0,
    "explanations": [
      "Single sign-on allows one authentication process to access multiple authorized resources.",
      "Physical locks are unrelated.",
      "SSO does not provide anonymous admin access.",
      "SSO reduces repeated logins rather than requiring a new password constantly."
    ],
    "tip": "SSO = sign in once, access authorized resources."
  },
  {
    "domain": "2.0 Security",
    "topic": "2.2 Defender Antivirus",
    "question": "What is Microsoft Defender Antivirus used for?",
    "options": [
      "Detecting and protecting against malicious software",
      "Creating DNS records",
      "Managing printer toner",
      "Partitioning a disk"
    ],
    "answer": 0,
    "explanations": [
      "Defender Antivirus provides anti-malware protection.",
      "DNS records are managed through DNS services.",
      "Printer supplies are unrelated.",
      "Disk partitioning is handled by storage tools."
    ],
    "tip": "Defender Antivirus = anti-malware."
  },
  {
    "domain": "2.0 Security",
    "topic": "2.2 Windows Firewall",
    "question": "What is the main job of a host firewall?",
    "options": [
      "Repair a cracked display",
      "Defragment an SSD",
      "Control network traffic based on rules",
      "Create user passwords automatically"
    ],
    "answer": 2,
    "explanations": [
      "Display repair is hardware service.",
      "Storage optimization is a different function.",
      "A firewall permits or blocks network traffic according to rules.",
      "Password creation is account management."
    ],
    "tip": "Firewall = traffic rules."
  },
  {
    "domain": "2.0 Security",
    "topic": "2.2 Windows Security Settings",
    "question": "What does UAC help control?",
    "options": [
      "Elevation of privileges for administrative changes",
      "CPU temperature",
      "Printer paper size",
      "Wi-Fi signal strength"
    ],
    "answer": 0,
    "explanations": [
      "User Account Control prompts/controls elevation for administrative actions.",
      "It does not cool the CPU.",
      "It does not manage printer paper.",
      "UAC does not improve radio signal."
    ],
    "tip": "UAC = privilege elevation prompt/control."
  },
  {
    "domain": "2.0 Security",
    "topic": "2.3 Wireless Encryption",
    "question": "Which current Wi-Fi security standard is newer and stronger than WPA2?",
    "options": [
      "WPA",
      "WPA3",
      "WEP",
      "Open authentication"
    ],
    "answer": 1,
    "explanations": [
      "Original WPA is older than WPA2/WPA3.",
      "WPA3 is the newer Wi-Fi security generation.",
      "WEP is obsolete and insecure.",
      "Open networks provide no Wi-Fi encryption."
    ],
    "tip": "Prefer WPA3 when supported."
  },
  {
    "domain": "2.0 Security",
    "topic": "2.3 Authentication Methods",
    "question": "What does 802.1X commonly provide on enterprise networks?",
    "options": [
      "File compression",
      "Disk defragmentation",
      "Port-based network access authentication",
      "Printer calibration"
    ],
    "answer": 2,
    "explanations": [
      "Compression reduces file size.",
      "Disk defragmentation is storage maintenance.",
      "802.1X provides network access control/authentication, commonly with RADIUS.",
      "Printer calibration adjusts printing output."
    ],
    "tip": "802.1X = network access authentication."
  },
  {
    "domain": "2.0 Security",
    "topic": "2.4 Malware",
    "question": "Which malware encrypts a victim's files and demands payment?",
    "options": [
      "Rootkit",
      "Ransomware",
      "Logic bomb",
      "Adware only"
    ],
    "answer": 1,
    "explanations": [
      "A rootkit hides/provides privileged malicious access.",
      "Ransomware commonly encrypts data and demands payment.",
      "A logic bomb triggers when specified conditions are met.",
      "Adware primarily displays advertising."
    ],
    "tip": "Ransomware = encryption + ransom demand."
  },
  {
    "domain": "2.0 Security",
    "topic": "2.4 Malware",
    "question": "Which malware is designed to hide itself and maintain privileged access?",
    "options": [
      "PUP",
      "Adware",
      "Spyware",
      "Rootkit"
    ],
    "answer": 3,
    "explanations": [
      "A potentially unwanted program may be undesirable but is not defined as hidden privileged access.",
      "Adware focuses on advertisements.",
      "Spyware gathers information about users/activity.",
      "A rootkit is designed to conceal malicious privileged access."
    ],
    "tip": "Rootkit = hidden privileged access."
  },
  {
    "domain": "2.0 Security",
    "topic": "2.4 Malware",
    "question": "Which malware can spread itself across networks without requiring a user to copy it manually?",
    "options": [
      "Worm",
      "Trojan",
      "Adware",
      "PUP"
    ],
    "answer": 0,
    "explanations": [
      "A worm can self-replicate and spread across networks.",
      "A Trojan disguises itself as legitimate software and normally relies on execution by a user/system.",
      "Adware displays advertising.",
      "A PUP is potentially unwanted software."
    ],
    "tip": "Worm = self-spreading."
  },
  {
    "domain": "2.0 Security",
    "topic": "2.5 Social Engineering",
    "question": "What is phishing?",
    "options": [
      "A fraudulent message designed to trick a user into revealing information or taking an unsafe action",
      "A disk backup method",
      "A Windows file system",
      "A wireless encryption protocol"
    ],
    "answer": 0,
    "explanations": [
      "Phishing uses deceptive messages to manipulate victims.",
      "Backups protect data and are unrelated.",
      "A file system organizes data on storage.",
      "Wireless encryption protects Wi-Fi traffic."
    ],
    "tip": "Phishing = deceptive message."
  },
  {
    "domain": "2.0 Security",
    "topic": "2.5 Social Engineering",
    "question": "What is tailgating?",
    "options": [
      "Deleting browser cookies",
      "Following an authorized person into a restricted area without proper authorization",
      "Encrypting email",
      "Using a VPN"
    ],
    "answer": 1,
    "explanations": [
      "Cookie deletion is browser maintenance/privacy.",
      "Tailgating bypasses physical access controls by following someone through a secured entrance.",
      "Email encryption protects messages.",
      "A VPN creates an encrypted network tunnel."
    ],
    "tip": "Tailgating = unauthorized follow-through."
  },
  {
    "domain": "2.0 Security",
    "topic": "2.5 Denial of Service",
    "question": "What is a DDoS attack?",
    "options": [
      "Many systems overwhelm a target service with traffic or requests",
      "A single local password reset",
      "A backup rotation",
      "A disk encryption method"
    ],
    "answer": 0,
    "explanations": [
      "Distributed denial of service uses many sources to overwhelm availability.",
      "Password reset is account administration.",
      "Backup rotation is an operational practice.",
      "Disk encryption protects stored data."
    ],
    "tip": "DDoS = distributed availability attack."
  },
  {
    "domain": "2.0 Security",
    "topic": "2.5 Password Attacks",
    "question": "What is a brute-force password attack?",
    "options": [
      "Physically stealing a monitor",
      "Encrypting a backup",
      "Updating antivirus signatures",
      "Trying many possible passwords until one works"
    ],
    "answer": 3,
    "explanations": [
      "Hardware theft is physical security.",
      "Backup encryption protects data.",
      "Signature updates improve malware detection.",
      "Brute force systematically tries password possibilities."
    ],
    "tip": "Brute force = many guesses."
  },
  {
    "domain": "2.0 Security",
    "topic": "2.5 Security Vulnerabilities",
    "question": "What is a zero-day vulnerability?",
    "options": [
      "A vulnerability exploited before an effective fix may be available",
      "A password changed every day",
      "A scheduled backup at midnight",
      "A deleted browser cookie"
    ],
    "answer": 0,
    "explanations": [
      "A zero-day can be unknown/unpatched when exploitation begins.",
      "Password age is not the definition.",
      "Backup timing is unrelated.",
      "Cookies are unrelated."
    ],
    "tip": "Zero-day = little/no patch lead time."
  },
  {
    "domain": "2.0 Security",
    "topic": "2.6 Removing Malware",
    "question": "After malware is identified, why might System Restore or recovery options be considered carefully?",
    "options": [
      "They always make malware stronger",
      "They permanently disable the keyboard",
      "Recovery should avoid restoring the malicious state",
      "They change Wi-Fi channels"
    ],
    "answer": 2,
    "explanations": [
      "Recovery does not inherently strengthen malware.",
      "Keyboard disabling is unrelated.",
      "Recovery choices must avoid reintroducing infected files/settings and should follow the remediation process.",
      "Wi-Fi channels are unrelated."
    ],
    "tip": "Malware recovery: don't restore the infection."
  },
  {
    "domain": "2.0 Security",
    "topic": "2.7 Security Best Practices",
    "question": "Why are account lockout policies useful?",
    "options": [
      "They improve printer speed",
      "They create RAID arrays",
      "They can slow repeated password-guessing attempts",
      "They increase monitor brightness"
    ],
    "answer": 2,
    "explanations": [
      "Printing speed is unrelated.",
      "RAID is storage configuration.",
      "Lockouts can limit repeated authentication attempts.",
      "Brightness is a display setting."
    ],
    "tip": "Lockout = slows repeated login guessing."
  },
  {
    "domain": "2.0 Security",
    "topic": "2.8 Mobile Device Security",
    "question": "What does remote wipe provide?",
    "options": [
      "Ability to erase device data remotely if the device is lost or compromised",
      "A faster CPU",
      "A stronger Wi-Fi antenna",
      "A printer driver"
    ],
    "answer": 0,
    "explanations": [
      "Remote wipe protects data by erasing a managed device remotely.",
      "It does not change processor performance.",
      "It does not improve radio hardware.",
      "It is not a printer function."
    ],
    "tip": "Lost device \u2192 remote lock/wipe may protect data."
  },
  {
    "domain": "2.0 Security",
    "topic": "2.9 Data Destruction",
    "question": "Which method physically destroys a storage device so it cannot be reused?",
    "options": [
      "Shredding",
      "Quick format",
      "Compressing the drive",
      "Changing a filename"
    ],
    "answer": 0,
    "explanations": [
      "Shredding physically destroys media.",
      "A quick format does not physically destroy the device and may leave recoverable data.",
      "Compression does not securely destroy data.",
      "Renaming does not erase data."
    ],
    "tip": "Physical destruction = no reuse."
  },
  {
    "domain": "2.0 Security",
    "topic": "2.10 Securing a SOHO Network",
    "question": "What should be changed on a new SOHO router as a basic security step?",
    "options": [
      "Every device MAC address",
      "The Ethernet standard",
      "Default administrator credentials",
      "The ISP's physical cable"
    ],
    "answer": 2,
    "explanations": [
      "MAC addresses are hardware identifiers and are not normally changed for this purpose.",
      "The Ethernet standard is not a password setting.",
      "Default admin credentials are widely known and should be replaced.",
      "The ISP cable is unrelated to router credentials."
    ],
    "tip": "New router: change default admin credentials."
  },
  {
    "domain": "2.0 Security",
    "topic": "2.11 Browser Security",
    "question": "Why should browser extensions be installed only from trusted sources?",
    "options": [
      "Extensions can access browser data and may introduce security risks",
      "Extensions can never be removed",
      "Every extension disables HTTPS",
      "Extensions physically damage RAM"
    ],
    "answer": 0,
    "explanations": [
      "Extensions can have significant permissions, so trusted sources reduce risk.",
      "Extensions can normally be removed.",
      "Extensions do not inherently disable HTTPS.",
      "Browser software does not physically damage RAM."
    ],
    "tip": "Treat extensions like software: trust the source."
  },
  {
    "domain": "3.0 Software Troubleshooting",
    "topic": "3.1 Troubleshooting Windows",
    "question": "A Windows application stops responding. What is a reasonable first tool to try ending it?",
    "options": [
      "Task Manager",
      "Registry Editor",
      "Device Manager only",
      "Disk Management"
    ],
    "answer": 0,
    "explanations": [
      "Task Manager can end an unresponsive process.",
      "Registry Editor changes registry settings and is not the normal first tool for a frozen app.",
      "Device Manager manages hardware/drivers.",
      "Disk Management manages storage."
    ],
    "tip": "Frozen app \u2192 Task Manager."
  },
  {
    "domain": "3.0 Software Troubleshooting",
    "topic": "3.1 Troubleshooting Windows",
    "question": "A Windows PC is very slow and memory usage is near 100%. What should you investigate?",
    "options": [
      "Printer paper size",
      "BIOS logo color",
      "Processes consuming excessive memory",
      "Ethernet connector shape"
    ],
    "answer": 2,
    "explanations": [
      "Paper size does not cause system RAM pressure.",
      "Logo appearance is unrelated.",
      "High memory utilization can cause slow performance; identify the processes using RAM.",
      "Connector shape is unrelated."
    ],
    "tip": "Slow + high RAM \u2192 inspect processes."
  },
  {
    "domain": "3.0 Software Troubleshooting",
    "topic": "3.1 Troubleshooting Windows",
    "question": "What can Safe Mode help with?",
    "options": [
      "Increasing Internet bandwidth",
      "Encrypting every file",
      "Starting Windows with limited drivers/services for troubleshooting",
      "Creating a cloud account"
    ],
    "answer": 2,
    "explanations": [
      "It does not increase ISP bandwidth.",
      "It is not an encryption mode.",
      "Safe Mode loads a reduced environment useful for isolating software/driver problems.",
      "It does not create cloud accounts."
    ],
    "tip": "Safe Mode = minimal Windows troubleshooting environment."
  },
  {
    "domain": "3.0 Software Troubleshooting",
    "topic": "3.1 Troubleshooting Windows",
    "question": "What should you suspect if a problem began immediately after installing a new driver?",
    "options": [
      "A phishing email by definition",
      "Driver compatibility or corruption",
      "A changed DNS MX record",
      "A depleted printer toner cartridge"
    ],
    "answer": 1,
    "explanations": [
      "Phishing is not implied by driver installation.",
      "A new driver closely preceding the problem makes the driver a likely cause.",
      "Mail DNS records are unrelated.",
      "Printer toner is unrelated."
    ],
    "tip": "Problem after driver change \u2192 test/roll back driver."
  },
  {
    "domain": "3.0 Software Troubleshooting",
    "topic": "3.2 Troubleshooting Mobile Devices",
    "question": "An app repeatedly crashes after an update. What is a reasonable troubleshooting action?",
    "options": [
      "Check for another update or reinstall the app",
      "Change the router's WAN cable first",
      "Replace the phone CPU immediately",
      "Disable all authentication"
    ],
    "answer": 0,
    "explanations": [
      "A faulty/corrupted app update may be corrected by a newer update or reinstall.",
      "WAN cabling is not the first app-specific fix.",
      "CPU replacement is extreme and not the first step.",
      "Disabling authentication creates security risk."
    ],
    "tip": "Crashing app \u2192 update/reinstall."
  },
  {
    "domain": "3.0 Software Troubleshooting",
    "topic": "3.2 Troubleshooting Mobile Devices",
    "question": "A mobile device has very little free storage. What symptom can this contribute to?",
    "options": [
      "Faster backups automatically",
      "Stronger Wi-Fi encryption",
      "Longer battery life automatically",
      "Poor performance and update/install problems"
    ],
    "answer": 3,
    "explanations": [
      "It does not automatically speed backups.",
      "Storage space does not strengthen encryption.",
      "Low space does not automatically improve battery life.",
      "Low storage can interfere with updates, app installation, and performance."
    ],
    "tip": "Keep enough free storage for updates and apps."
  },
  {
    "domain": "3.0 Software Troubleshooting",
    "topic": "3.2 Troubleshooting Mobile Devices",
    "question": "Bluetooth will not connect to an accessory. What should you verify?",
    "options": [
      "Bluetooth is enabled and the devices are paired/in range",
      "The printer fuser is hot",
      "The disk is GPT",
      "The Windows domain has an MX record"
    ],
    "answer": 0,
    "explanations": [
      "Bluetooth connectivity depends on enabled radios, pairing, compatibility, and range.",
      "Printer fusers are unrelated.",
      "Disk partition style is unrelated.",
      "MX records are for mail routing."
    ],
    "tip": "Bluetooth issue \u2192 enabled, pairing, range."
  },
  {
    "domain": "3.0 Software Troubleshooting",
    "topic": "3.3 Troubleshooting Mobile Device Security",
    "question": "Unexpected apps appear and the device behaves strangely. What should you consider?",
    "options": [
      "Normal battery calibration only",
      "A printer queue",
      "A RAID rebuild",
      "Malware or unauthorized application activity"
    ],
    "answer": 3,
    "explanations": [
      "Battery calibration does not explain unknown apps.",
      "Printer queues are unrelated.",
      "RAID is unrelated to typical phones.",
      "Unexpected apps and abnormal behavior can indicate malicious or unauthorized software."
    ],
    "tip": "Unknown apps + strange behavior = investigate security."
  },
  {
    "domain": "3.0 Software Troubleshooting",
    "topic": "3.3 Troubleshooting Mobile Device Security",
    "question": "A phone suddenly shows excessive data usage. What should you inspect?",
    "options": [
      "Apps and processes using network data",
      "Only ringtone volume",
      "Only wallpaper",
      "Only screen brightness"
    ],
    "answer": 0,
    "explanations": [
      "Unexpected data use can come from apps, malware, syncing, or background activity.",
      "Ringtone volume does not explain data transfer.",
      "Wallpaper normally does not explain excessive network use.",
      "Brightness affects power more than network data."
    ],
    "tip": "High data use \u2192 inspect app/network activity."
  },
  {
    "domain": "3.0 Software Troubleshooting",
    "topic": "3.4 Troubleshooting Security Issues",
    "question": "A browser constantly redirects to unwanted sites. What is a likely area to investigate?",
    "options": [
      "RAM speed only",
      "Malware, extensions, or browser settings",
      "Printer duplex settings",
      "Disk partition label"
    ],
    "answer": 1,
    "explanations": [
      "RAM speed does not normally cause redirects.",
      "Redirects can be caused by malicious software, extensions, or altered browser settings.",
      "Printer settings are unrelated.",
      "Partition labels do not control browser destinations."
    ],
    "tip": "Browser redirects \u2192 inspect extensions/settings/malware."
  },
  {
    "domain": "3.0 Software Troubleshooting",
    "topic": "3.4 Troubleshooting Security Issues",
    "question": "A user receives repeated fake antivirus pop-ups. What should you suspect?",
    "options": [
      "A normal Windows backup",
      "A healthy DNS cache only",
      "Malicious or deceptive software/content",
      "A printer calibration page"
    ],
    "answer": 2,
    "explanations": [
      "Backups do not generate fake antivirus scams.",
      "A normal DNS cache is not the likely explanation.",
      "Fake security warnings are a common malicious/deceptive tactic.",
      "Printer calibration is unrelated."
    ],
    "tip": "Fake AV alerts = treat as suspicious."
  },
  {
    "domain": "3.0 Software Troubleshooting",
    "topic": "3.4 Troubleshooting Security Issues",
    "question": "A system's files are suddenly encrypted and a payment demand appears. What is the likely issue?",
    "options": [
      "Ransomware",
      "A normal OS update",
      "Adware only",
      "A printer driver"
    ],
    "answer": 0,
    "explanations": [
      "Encryption plus a payment demand strongly indicates ransomware.",
      "Normal updates do not demand ransom for encrypted personal files.",
      "Adware primarily displays ads.",
      "Printer drivers are unrelated."
    ],
    "tip": "Encrypted files + payment demand = ransomware."
  },
  {
    "domain": "4.0 Operational Procedures",
    "topic": "4.1 Ticketing Systems",
    "question": "Why should a support ticket include detailed notes?",
    "options": [
      "To avoid documenting changes",
      "To preserve troubleshooting history and help others understand the issue",
      "To make passwords public",
      "To disable escalation"
    ],
    "answer": 1,
    "explanations": [
      "Documentation is a core purpose of tickets.",
      "Clear notes record symptoms, actions, results, and resolution for continuity.",
      "Passwords should not be exposed in tickets.",
      "Escalation may still be necessary."
    ],
    "tip": "Good ticket notes = continuity."
  },
  {
    "domain": "4.0 Operational Procedures",
    "topic": "4.1 Ticketing Systems",
    "question": "What does ticket escalation mean?",
    "options": [
      "Moving the issue to a person/team with appropriate expertise or authority",
      "Making the user an administrator",
      "Ignoring the SLA",
      "Deleting the ticket"
    ],
    "answer": 0,
    "explanations": [
      "Escalation routes unresolved or specialized issues appropriately.",
      "Admin rights are not the definition.",
      "Service targets should not simply be ignored.",
      "Deleting the ticket loses the record."
    ],
    "tip": "Escalate when scope/skill/authority requires it."
  },
  {
    "domain": "4.0 Operational Procedures",
    "topic": "4.1 Asset Management",
    "question": "What is the purpose of an asset inventory?",
    "options": [
      "Disable warranties",
      "Store user passwords in plain text",
      "Track organizational hardware/software assets and relevant details",
      "Replace all backups"
    ],
    "answer": 2,
    "explanations": [
      "Warranties are useful lifecycle information, not something inventory disables.",
      "Plain-text password storage is unsafe.",
      "Asset management tracks devices, software, ownership, location, lifecycle, and related information.",
      "Inventory does not replace backups."
    ],
    "tip": "Asset inventory = know what you own/manage."
  },
  {
    "domain": "4.0 Operational Procedures",
    "topic": "4.1 Document Types",
    "question": "What is a knowledge base used for?",
    "options": [
      "Partition disks",
      "Physically secure a server room",
      "Store reusable troubleshooting information and solutions",
      "Encrypt Wi-Fi traffic"
    ],
    "answer": 2,
    "explanations": [
      "Disk partitioning is storage administration.",
      "Physical security uses locks/access controls.",
      "A knowledge base collects documented fixes and guidance for reuse.",
      "Wi-Fi encryption uses protocols such as WPA2/WPA3."
    ],
    "tip": "Knowledge base = reusable solutions."
  },
  {
    "domain": "4.0 Operational Procedures",
    "topic": "4.2 Change Management",
    "question": "Why is a rollback plan important before a change?",
    "options": [
      "It prevents documentation",
      "It guarantees the change cannot fail",
      "It provides a way to return to the previous state if the change fails",
      "It removes the need for backups"
    ],
    "answer": 2,
    "explanations": [
      "Changes should be documented.",
      "No plan can guarantee success.",
      "Rollback planning reduces risk by defining recovery if the change causes problems.",
      "Backups may be part of rollback and are still important."
    ],
    "tip": "Before change: know how to undo it."
  },
  {
    "domain": "4.0 Operational Procedures",
    "topic": "4.2 Change Management",
    "question": "Why should changes be tested when possible before production deployment?",
    "options": [
      "To guarantee zero downtime forever",
      "To identify problems and reduce production risk",
      "To make documentation unnecessary",
      "To bypass approvals"
    ],
    "answer": 1,
    "explanations": [
      "Testing cannot guarantee zero downtime forever.",
      "Testing can reveal compatibility and implementation issues before production impact.",
      "Testing does not eliminate documentation.",
      "Change approvals remain part of controlled processes."
    ],
    "tip": "Test first; reduce production surprises."
  },
  {
    "domain": "4.0 Operational Procedures",
    "topic": "4.3 Managing Backups",
    "question": "Which backup copies all selected data each time?",
    "options": [
      "Snapshot only",
      "Differential backup",
      "Incremental backup",
      "Full backup"
    ],
    "answer": 3,
    "explanations": [
      "A snapshot is a point-in-time state and is not the definition of a full file backup.",
      "A differential copies changes since the last full backup.",
      "An incremental copies changes since the last backup of any type.",
      "A full backup copies all selected data."
    ],
    "tip": "Full = everything selected."
  },
  {
    "domain": "4.0 Operational Procedures",
    "topic": "4.3 Managing Backups",
    "question": "Which backup copies changes since the last backup of any type?",
    "options": [
      "Synthetic full only",
      "Full backup",
      "Incremental backup",
      "Differential backup"
    ],
    "answer": 2,
    "explanations": [
      "A synthetic full is constructed from backup data and is not this definition.",
      "A full copies all selected data.",
      "Incremental backups capture changes since the previous backup, whether full or incremental.",
      "A differential captures changes since the last full backup."
    ],
    "tip": "Incremental = since last backup."
  },
  {
    "domain": "4.0 Operational Procedures",
    "topic": "4.3 Managing Backups",
    "question": "Which backup copies changes since the last full backup?",
    "options": [
      "Differential backup",
      "Disk format",
      "Incremental backup",
      "Full backup"
    ],
    "answer": 0,
    "explanations": [
      "A differential backup includes changes since the most recent full backup.",
      "Formatting is not a backup type.",
      "An incremental includes changes since the most recent backup.",
      "A full copies all selected data."
    ],
    "tip": "Differential = since last full."
  },
  {
    "domain": "4.0 Operational Procedures",
    "topic": "4.3 Managing Backups",
    "question": "What does the 3-2-1 backup idea emphasize?",
    "options": [
      "No offline/off-site protection",
      "Only cloud storage with no other copy",
      "Multiple copies, different media, and an off-site copy",
      "One copy on one disk only"
    ],
    "answer": 2,
    "explanations": [
      "Off-site separation is a key resilience idea.",
      "Cloud can be one component, but relying on only one copy is not 3-2-1.",
      "3-2-1 promotes redundancy: multiple copies, more than one media type, and off-site protection.",
      "A single copy is a single point of failure."
    ],
    "tip": "3-2-1 = 3 copies, 2 media, 1 off-site."
  },
  {
    "domain": "4.0 Operational Procedures",
    "topic": "4.4 Managing Electrostatic Discharge",
    "question": "What should you use to reduce ESD risk while working inside a computer?",
    "options": [
      "A wool blanket",
      "A vacuum that creates static",
      "Proper grounding such as an ESD wrist strap",
      "A plastic bag rubbed on carpet"
    ],
    "answer": 2,
    "explanations": [
      "Wool can generate static.",
      "Some vacuums can create static and are inappropriate around components.",
      "Grounding equipment helps equalize electrical potential and reduce electrostatic discharge.",
      "Rubbing plastic on carpet increases static risk."
    ],
    "tip": "ESD protection = ground yourself/equipment."
  },
  {
    "domain": "4.0 Operational Procedures",
    "topic": "4.4 Safety Procedures",
    "question": "Why should you avoid opening a power supply unit for routine repair?",
    "options": [
      "It can contain hazardous high-voltage components even after unplugging",
      "It will erase DNS records",
      "It contains no replaceable parts by definition",
      "It changes file permissions"
    ],
    "answer": 0,
    "explanations": [
      "Power supplies can retain dangerous electrical charge; replacement is generally safer than internal service.",
      "DNS is unrelated.",
      "The safety concern is hazardous voltage, not a universal statement about every component.",
      "File permissions are unrelated."
    ],
    "tip": "PSU internals can be dangerous."
  },
  {
    "domain": "4.0 Operational Procedures",
    "topic": "4.5 Environmental Impacts",
    "question": "How should batteries and electronic waste generally be handled?",
    "options": [
      "Store damaged batteries indefinitely",
      "Follow approved recycling/disposal procedures",
      "Burn them",
      "Put all batteries in normal trash regardless of rules"
    ],
    "answer": 1,
    "explanations": [
      "Damaged batteries require appropriate safe handling, not indefinite storage.",
      "E-waste and batteries should follow local/company recycling and disposal requirements.",
      "Burning electronics is hazardous.",
      "Normal trash may be unsafe or prohibited for batteries/e-waste."
    ],
    "tip": "E-waste/batteries \u2192 approved disposal."
  },
  {
    "domain": "4.0 Operational Procedures",
    "topic": "4.6 Incident Response",
    "question": "What should be done first when following an organization's incident-response procedure?",
    "options": [
      "Ignore the incident",
      "Follow the defined policy and preserve/report relevant information",
      "Post confidential details publicly",
      "Erase all evidence immediately"
    ],
    "answer": 1,
    "explanations": [
      "Ignoring incidents increases risk.",
      "Incident handling should follow organizational policy, reporting, containment, and evidence requirements.",
      "Public disclosure can create further harm.",
      "Destroying evidence can prevent investigation."
    ],
    "tip": "Security incident \u2192 follow the response process."
  },
  {
    "domain": "4.0 Operational Procedures",
    "topic": "4.7 Professionalism",
    "question": "What is appropriate when handling a user's confidential information?",
    "options": [
      "Copy it to a personal device without authorization",
      "Post it online",
      "Share it with coworkers for entertainment",
      "Protect privacy and access only what is necessary for the job"
    ],
    "answer": 3,
    "explanations": [
      "Unauthorized personal copies create security/privacy risk.",
      "Public posting is inappropriate.",
      "Casual sharing violates privacy.",
      "Professional support work requires confidentiality and minimum necessary access."
    ],
    "tip": "Customer data = confidential."
  },
  {
    "domain": "4.0 Operational Procedures",
    "topic": "4.7 Communication",
    "question": "When explaining a technical problem to a nontechnical user, what is best?",
    "options": [
      "Use clear language and avoid unnecessary jargon",
      "Use as much jargon as possible",
      "Refuse to explain anything",
      "Blame the user"
    ],
    "answer": 0,
    "explanations": [
      "Clear, respectful communication helps the user understand the issue and next steps.",
      "Excess jargon can confuse users.",
      "Withholding useful explanation harms support.",
      "Blaming users is unprofessional."
    ],
    "tip": "Clear, respectful, simple communication."
  },
  {
    "domain": "4.0 Operational Procedures",
    "topic": "4.8 Scripting Use Cases",
    "question": "Why can scripting be useful in IT operations?",
    "options": [
      "Repair cracked screens",
      "Eliminate the need for testing",
      "Automate repetitive tasks consistently",
      "Physically replace failed RAM"
    ],
    "answer": 2,
    "explanations": [
      "Screen repair is physical hardware service.",
      "Automation still needs testing and safeguards.",
      "Scripts can automate repetitive administrative tasks.",
      "Hardware replacement is physical work."
    ],
    "tip": "Scripts = repeatable automation."
  },
  {
    "domain": "4.0 Operational Procedures",
    "topic": "4.9 Remote Access",
    "question": "What is a major security consideration when using remote-access tools?",
    "options": [
      "Use authorized, secured access and strong authentication",
      "Disable all passwords",
      "Share administrator credentials",
      "Expose the service to everyone"
    ],
    "answer": 0,
    "explanations": [
      "Remote access should be controlled, authenticated, and authorized.",
      "Removing passwords weakens security.",
      "Shared admin credentials reduce accountability.",
      "Open exposure increases attack surface."
    ],
    "tip": "Remote access = secure + authorized + authenticated."
  },
  {
    "domain": "4.0 Operational Procedures",
    "topic": "4.10 Managing AI",
    "question": "What is an AI hallucination?",
    "options": [
      "A hardware fan failure",
      "A disk partition type",
      "An AI-generated response that presents incorrect or fabricated information as if it were valid",
      "A Wi-Fi encryption standard"
    ],
    "answer": 2,
    "explanations": [
      "Fan failure is hardware troubleshooting.",
      "Partition types include GPT/MBR.",
      "AI hallucination refers to plausible-sounding but inaccurate/fabricated output.",
      "Wi-Fi encryption includes WPA2/WPA3."
    ],
    "tip": "AI output can sound confident and still be wrong\u2014verify it."
  },
  {
    "domain": "4.0 Operational Procedures",
    "topic": "4.10 Managing AI",
    "question": "Why should sensitive company or personal data be handled carefully when using AI tools?",
    "options": [
      "AI automatically makes all data public-safe",
      "Data privacy and security requirements still apply",
      "AI removes the need for company policy",
      "Passwords are safe to paste into any AI tool"
    ],
    "answer": 1,
    "explanations": [
      "AI does not automatically make sensitive data safe to disclose.",
      "AI use must respect privacy, confidentiality, and organizational policy.",
      "Company policy still applies to AI usage.",
      "Credentials should not be shared into unauthorized tools."
    ],
    "tip": "AI tools do not cancel privacy/security rules."
  },
  {
    "domain": "4.0 Operational Procedures",
    "topic": "4.10 Managing AI",
    "question": "What does bias in an AI system refer to?",
    "options": [
      "Systematic unfair or skewed outputs that can reflect data or design limitations",
      "A faster CPU clock",
      "A backup type",
      "A printer paper jam"
    ],
    "answer": 0,
    "explanations": [
      "AI bias can produce systematically skewed or unfair results.",
      "CPU clock speed is hardware performance.",
      "Backup type is operational procedure.",
      "Paper jams are printer hardware issues."
    ],
    "tip": "AI results can reflect bias\u2014review critically."
  }
];