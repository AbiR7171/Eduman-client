// export const imgUpload = async (image) => {
//     const formData = new FormData();
//     formData.append('image', image)
//     const url = `https://api.imgbb.com/1/upload?key=31577500b6faa39190341a60943abd90`
//     const response = await fetch(url, {
//         method: "POST",
//         body: formData,
//     })
//     const data = await response.json()
//     return data
// }

export const imgUpload =async(image)=>{
    const formData=new FormData();
    formData.append('image',image)
    const url = `https://api.imgbb.com/1/upload?key=2217654923854793493877334749423duhjk009`
    const response =await fetch(url,{
        method:"POST",
        body:formData,
    })
    const data=await response.json();
    return data;
} 