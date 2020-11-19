<img src = "https://getsharex.com/img/ShareX_Logo.png" width = "60px" height = "60px" alt = "sharex logo" class = "styledcontent"/>

This is an important part to config sharex
```
{
    "Name": "UPLOADER_NAME",
    "DestinationType": "ImageUploader, FileUploader",
    "RequestType": "POST",
    "RequestURL": "SERVER_URL/upload",
    "FileFormName": "file",
    "Arguments": {
        "key": "YOUR_KEY"
    },
    "ResponseType": "Text",
    "URL": "$json:file.url$",
    "ThumbnailURL": "",
    "DeletionURL": "$json:file.delete_url$"
}
```
> ⚠️ Replace `key` and `Name` with your own things