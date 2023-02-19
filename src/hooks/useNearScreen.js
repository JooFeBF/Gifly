import { useRef, useEffect, useState} from "react";

const useNearScreen = ({distance = "100px", externalRef, once = true} = {}) => {
    const [isNearScreen, setShow] = useState(false);
    const fromRef = useRef();
        
        useEffect(() => {
            let observer;

            const element = externalRef ? externalRef.current : fromRef.current;
            
            const onChange = (entries, observer) => {
                    const entry = entries[0];
                    if (entry.isIntersecting) {
                        setShow(true);
                        once && observer.disconnect();
                    }
                    else{
                        !once && setShow(false)
                    }
                }
                Promise.resolve(
                    typeof IntersectionObserver !== "undefined"
                    ? IntersectionObserver
                    : import('intersection-observer')
                ).then(() => {
                    observer = new IntersectionObserver(onChange, {rootMargin: distance});
                    if (element) observer.observe(element);
                })
                return () => observer && observer.disconnect();
            })
        return {isNearScreen, fromRef}
    }

export default useNearScreen;