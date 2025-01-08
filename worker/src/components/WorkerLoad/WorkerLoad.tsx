import { useEffect, useRef, useState } from "react";
import {imageUrls} from "../../images.ts";

export const WorkerLoad = () => {
    const workerContainerRef: any = useRef();
    const [worker, setWorker] = useState<Worker | null>(null);

    useEffect(() => {
        const w = new Worker(new URL('../../worker.ts', import.meta.url));
        setWorker(w);

        w.onmessage = (e) => {
            const { images, progress } = e.data;

            if (progress) {
                console.log(`Progress: ${progress}%`);
            }

            if (images) {
                let imagesHtml = images.map((src: string) => `<img src="${src}" />`).join('');
                if (workerContainerRef.current) {
                    workerContainerRef.current.innerHTML = imagesHtml;
                }
            }
        };

        requestAnimationFrame(() => {
            if (w) {
                w.postMessage(imageUrls);
            }
        });

        return () => {
            w.terminate();
        };
    }, []);

    return <div ref={workerContainerRef} />;
}
