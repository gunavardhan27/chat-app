const fileFormat = (url="")=>{
    const fileExt = url.split(".").pop()
    console.log(fileExt)
    if(fileExt==='mp4' || fileExt==='webm' || fileExt === 'ogg'){
        return 'video'
    }
    if(fileExt==='mp3' || fileExt==='wav'){
        return 'audio'
    }
    if(fileExt==='jpeg' || fileExt==='jpg' || fileExt === 'png'){
        return 'image'
    }
    return 'file'
}

export {fileFormat}