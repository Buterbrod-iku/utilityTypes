вставка изображений просто напрямую 

```
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
```

![image](https://github.com/user-attachments/assets/fa7d1284-1fed-4768-b5c6-c3cae8325338)



## Замеры performance
первая половина выполняется в главном потоке, а остальное выполняется в воркере
При использовании воркера поток остаётся свободным. Мы получем большой Idle фрейм на 3500ms. В это время основной поток 
свободен для других вычислений. Плюс в примере картинки попадают на страницу после загрузки всех и появляются одноверменно
![img_3.png](img_3.png)


