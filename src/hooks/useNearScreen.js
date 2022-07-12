import { useRef, useEffect, useState} from "react";

    const useNearScreen = ({distance = "100px", externalRef, once = true} = {}) => {
        const [isNearScreen, setShow] = useState(false);
        const fromRef = useRef();
        const element = externalRef ? externalRef.current : fromRef.current;

        useEffect(() => {

                const onChange = (entries, observer) => {
                    const entry = entries[0];
                    if (entry.isIntersecting) {
                        setShow(true);
                           once && observer.discconnect();
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
                    const observer = new IntersectionObserver(onChange, {rootMargin: distance});
                    if (element) observer.observe(element);
                })
            })
        return {isNearScreen, fromRef}
    }

export default useNearScreen;