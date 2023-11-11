// Input your file name and find out what type your file it is-


var FileName = "tanim.js";



    if(FileName.includes(".doc")){
        console.log("Document: Microsoft Word");
    }
    else if(FileName.includes(".docx")){
        console.log("Document: Microsoft Word");
    }
    else if(FileName.includes(".xls")){
        console.log("Document: Microsoft Excel");
    }
    else if(FileName.includes(".xlsx")){
        console.log("Document: Microsoft Excel");
    }
    else if(FileName.includes(".ppt")){
        console.log("Document: Microsoft PowerPoint");
    }
    else if(FileName.includes(".pptx")){
        console.log("Document: Microsoft PowerPoint");
    }
    else if(FileName.includes(".pdf")){
        console.log("Document: Adobe Portable Document Format");
    }
    else if(FileName.includes(".txt")){
        console.log("Document: Plain Text");
    }
    else if(FileName.includes(".jpg")){
        console.log("Image: JPEG image");
    }
    else if(FileName.includes(".jpeg")){
        console.log("Image: JPEG image");
    }
    else if(FileName.includes(".png")){
        console.log("Image: Portable Network Graphics");
    }
    else if(FileName.includes(".gif")){
        console.log("Image: Graphics Interchange Format");
    }
    else if(FileName.includes(".bmp")){
        console.log("Image: Bitmap");
    }
    else if(FileName.includes(".tiff")){
        console.log("Image: Tagged Image File Format");
    }
    else if(FileName.includes(".tif")){
        console.log("Image: Tagged Image File Format");
    }
    else if(FileName.includes(".mp3")){
        console.log("Audio: MPEG Audio Layer III");
    }
    else if(FileName.includes(".wav")){
        console.log("Audio: Waveform Audio File Format");
    }
    else if(FileName.includes(".acc")){
        console.log("Audio: Advanced Audio Codec");
    }
    else if(FileName.includes(".ogg")){
        console.log("Audio: Ogg Vorbis");
    }
    else if(FileName.includes(".wma")){
        console.log("Audio: Windows Media Audio");
    }
    else if(FileName.includes(".mp4")){
        console.log("video: MPEG-4 Video File");
    }
    else if(FileName.includes(".avi")){
        console.log("video: Audio Video Interleave");
    }
    else if(FileName.includes(".mkv")){
        console.log("video: Matroska Video");
    }
    else if(FileName.includes(".mov")){
        console.log("video: QuickTime Movie");
    }
    else if(FileName.includes(".wmv")){
        console.log("video: Windows Media Video");
    }
    else if(FileName.includes(".zip")){
        console.log("Compressed File: ZIP archive");
    }
    else if(FileName.includes(".rar")){
        console.log("Compressed File: RAR archive");
    }
    else if(FileName.includes(".7z")){
        console.log("Compressed File: 7-Zip archive");
    }
    else if(FileName.includes(".tar")){
        console.log("Compressed File: Tape Archive");
    }
    else if(FileName.includes(".gz")){
        console.log("Compressed File: Gzip compressed archive");
    }
    else if(FileName.includes(".exe")){
        console.log("Programs and Executable: Executable file");
    }
    else if(FileName.includes(".msi")){
        console.log("Programs and Executable: Microsoft Installer Package");
    }
    else if(FileName.includes(".app")){
        console.log("Programs and Executable: Mac application");
    }
    else if(FileName.includes(".deb")){
        console.log("Programs and Executable: Debian package");
    }
    else if(FileName.includes(".apk")){
        console.log("Programs and Executable: Android application package");
    }
    else if(FileName.includes(".html")){
        console.log("Web-related: Hypertext Markup Language");
    }
    else if(FileName.includes(".css")){
        console.log("Web-related: Cascading Style Shee");
    }
    else if(FileName.includes(".js")){
        console.log("Web-related: JavaScript");
    }
    else if(FileName.includes(".php")){
        console.log("Web-related: PHP Hypertext Preprocessor");
    }
    else if(FileName.includes(".json")){
        console.log("Web-related: JavaScript Object Notation");
    }
    else if(FileName.includes(".sql")){
        console.log("database: Structured Query Language");
    }
    else if(FileName.includes(".db")){
        console.log("database: SQLite database");
    }
    else if(FileName.includes(".sqlite")){
        console.log("database: SQLite database");
    }
    else if(FileName.includes(".mdb")){
        console.log("database: Microsoft Access Database");
    }
    else if(FileName.includes(".iso")){
        console.log("Miscellaneou: Disc Image");
    }
    else if(FileName.includes(".dll")){
        console.log("Miscellaneou: Dynamic Link Library");
    }
    else if(FileName.includes(".dat")){
        console.log("Miscellaneou: Data file");
    }
    else if(FileName.includes(".log")){
        console.log("Miscellaneou: Log file");
    }
    else if(FileName.includes(".cfg")){
        console.log("Miscellaneou: Configuration file");   
    }
    else{
        console.log("Unknown file type");
    }