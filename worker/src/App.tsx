import './App.css'
import {useEffect, useRef} from "react";
import {imageUrls} from "./images.ts";

function App() {
    const containerRef: any = useRef()

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

  return (
    <>
        <h1>wiehyiqweu</h1>

        <div ref={containerRef} />
    </>
  )
}

export default App
