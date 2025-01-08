вставка изображений просто напрямую 
``
useEffect(() => {
        if (containerRef.current) {
            let images = ''

            for (let i = 0; i < imageUrls.length; i++) {
                images += `<img src="${imageUrls[i]}" />`
            }

            containerRef.current.innerHTML = images

            console.log(images)
        }
        console.log(imageUrls)
    }, []);
``
![image](https://github.com/user-attachments/assets/fa7d1284-1fed-4768-b5c6-c3cae8325338)
