import { useRef, useEffect } from "react";

export const VanillaLoad = () => {
    const vanillaContainerRef: any = useRef();

    useEffect(() => {
        requestAnimationFrame(() => {
            if (vanillaContainerRef.current) {
                let images = '';
                for (let i = 500; i < 1000; i++) {
                    images += `<img src="https://picsum.photos/200/300?random=${i}" />`;
                }
                vanillaContainerRef.current.innerHTML = images;
            }
        });
    }, []);

    return <div ref={vanillaContainerRef} />;
}
