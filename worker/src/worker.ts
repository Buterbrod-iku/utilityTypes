self.onmessage = function (e) {
    const urls = e.data;
    const loadedImages = [];
    let loadedCount = 0;

    for (let i = 0; i < 500; i++) {
        fetch(`https://picsum.photos/200/300?random=${i}`)
            .then(response => response.blob())
            .then(blob => {
                loadedImages.push(URL.createObjectURL(blob));
                loadedCount++;

                self.postMessage({ progress: (loadedCount / 500) * 100 });

                if (loadedCount === 500) {
                    self.postMessage({ images: loadedImages });
                }
            })
            .catch(error => {
                console.error('Ошибка загрузки:', error);
            });
    }
};
